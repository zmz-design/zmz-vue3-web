<template>
    <zmz-container tag="section">
        <div class="zmz-docs__menu" :class="{ 'zmz-docs__menu--open': isToggle }">
            <zmz-scrollbar style="height:100%;">
                <div v-for="(item, index) in docDir.children" :key="index" class="zmz-doce__menu__group">
                    <div class="zmz-docs__menu__group--titlebig">{{ item.meta.title }}</div>
                    <template v-if="item.children">
                        <div class="zmz-docs__menu__group--items" v-for="(itemson, indexson) in item.children"
                            :key="indexson">
                            <div class="zmz-docs__menu__group--title" v-if="itemson.meta.isTitle">{{ itemson.meta.title
                                }}
                            </div>
                            <router-link :class="$route.name === itemson.name ? 'active' : ''" v-else
                                :to="{ path: itemson.path }" @click="isToggle = false">{{ itemson.meta.title
                                }}</router-link>
                            <template v-if="itemson.children">
                                <div v-for="(itemgrandson, indexgrandson) in itemson.children" :key="indexgrandson">
                                    <router-link :to="{ path: itemgrandson.path }"
                                        :class="$route.name === itemgrandson.name ? 'active' : ''"
                                        class="zmz-docs__menu__group--items" @click="isToggle = false">
                                        {{ itemgrandson.meta.title }}
                                    </router-link>
                                </div>
                            </template>
                        </div>
                    </template>
                </div>
            </zmz-scrollbar>
            <div class="zmz-docs__menu__nav" v-if="getZmzMobile" @click="handleClickMenu">
                <i class="zmz-icon--arrow-right" v-if="isToggle"></i>
                <i class="zmz-icon--arrow-left" v-else></i>
            </div>
        </div>
        <div class="zmz-docs__doc" ref="zmzDocsDoc">
            <div class="zmz-docs__doc__wrap">
                <div class="zmz-docs__doc__left"><router-view></router-view></div>
                <div class="zmz-docs__doc__right">
                    <div class="zmz-docs__toc">
                        <zmz-scrollbar style="height:100%;">
                            <div class="zmz-docs__toc__wrap">
                                <div class="zmz-docs__toc__title">目录</div>
                                <zmz-anchor scroll-target=".zmz-docs__doc" v-model="modelValue">
                                    <template v-for="item in tocDir" :key="item">
                                        <zmz-anchor-item :offset="10 * item.level" :title="item.title"
                                            :href="item.id"></zmz-anchor-item>
                                    </template>
                                </zmz-anchor>
                            </div>
                        </zmz-scrollbar>
                    </div>
                </div>
            </div>
        </div>
        <div class="zmz-docs__copyright">
            {{ setting.copyright }}
            <a :href="setting.recordUrl" rel="nofollow" target="_block">{{ setting.record }}</a>
        </div>
    </zmz-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    metaInfo() {
        return {
            title: this.title,
            meta: [
                {
                    name: 'keywords',
                    content: this.keywords
                },
                {
                    name: 'description',
                    content: this.description
                }
            ]
        };
    },
    name: 'layout-first',
    data() {
        return {
            init: false,
            title: 'zmz-vue3-web文档' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            docDir: {},
            tocDir: [],
            modelValue: '',
            isToggle: false,
            useAnimation: true
        };
    },
    watch: {
        '$route': function (newValue, oldValue) {
            if (newValue != oldValue) {
                this.tocDir = [];
                // setTimeout(() => {
                this.getTocList();
                // }, 300)
            }
            const anchorId = this.getAnchorFromUrl()
            this.scrollToAnchor(anchorId)
            this.getRouterData();
        }
    },
    methods: {
        // 处理锚点跳转
        scrollToAnchor(anchorId, useAnimation = true) {
            if (!anchorId) return
            // 等待 DOM 更新完成
            setTimeout(() => {
                const element = document.getElementById(anchorId)
                if (element) {
                    // 平滑滚动到锚点位置
                    element.scrollIntoView({
                        behavior: useAnimation ? 'smooth' : 'auto',
                        block: 'start'
                    })
                    console.log(element)
                }
            }, 100)
        },

        // 从 URL 中提取锚点
        getAnchorFromUrl() {
            const hash = window.location.hash
            if (hash.includes('#')) {
                console.log(hash)
                // 处理类似 /path#anchor 的情况
                const parts = hash.split('#')
                return parts.length > 1 ? parts[2] : null
            }
            return null
        },
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        getTocList() {
            this.$nextTick(() => {
                if (this.$refs.zmzDocsDoc) {
                    // 获取目录容器
                    const tocContainer = this.$refs.zmzDocsDoc;
                    // 获取所有的标题元素
                    let headers = tocContainer.querySelectorAll('.zmz-markdown-article>h1, .zmz-markdown-article>h2, .zmz-markdown-article>h3, .zmz-markdown-article>h4, .zmz-markdown-article>h5, .zmz-markdown-article>h6');
                    headers.forEach((item, index) => {
                        const level = item.tagName.toLowerCase().charAt(1);
                        const id = item.id;
                        const text = item.textContent;
                        if (index == 0) {
                            this.modelValue = text
                        }

                        this.tocDir.push({
                            title: text,
                            id: id,
                            level: level
                        })
                    });
                }
            })
        },
        handleClickMenu() {
            this.isToggle = !this.isToggle
        },
        handleDirMenuList(e) {
            if (e.target.classList.contains('zmz-markdown-article-anchor')) {
                e.preventDefault();
                const hash = e.target.getAttribute('href');
                this.$router.push(hash);
                this.scrollToAnchor(e.target.hash)
            }
        },
        getRouterData() {
            let currentPath = '/';
            if (this.$route.path) {
                let pathArray = this.$route.path.split('/');
                if (pathArray.length > 0) {
                    currentPath = currentPath + pathArray[1];
                }

                this.docDir = this.$router.options.routes.find(item => item.path === currentPath);
            }
        }
    },
    computed: {
        ...mapGetters(['getZmzMobile']),
        setting() {
            return this.$setting.currentConfig;
        }
    },
    mounted() {
        const anchorId = this.getAnchorFromUrl()
        this.scrollToAnchor(anchorId, !this.useAnimation)
        document.addEventListener('click', this.handleDirMenuList);
        this.getRouterData();
        this.getTocList();
    },
    unmounted() {
        document.removeEventListener('click', this.handleDirMenuList);
    },
};
</script>
