<template>
    <div class="zmz-docs__header">
        <div class="zmz-docs__header__logo">
            <router-link class="zmz-docs__header__logo__wrap" to="/">
                <img :src="setting.logo" class="zmz-docs__header__logo__inner" :title="setting.name" />
                <span class="zmz-docs__header__logo__title">{{ setting.name }}</span>
            </router-link>
        </div>
        <div class="zmz-docs__header__nav">
            <zmz-container class="zmz-docs__header__nav__left" tag="div" v-if="$slots.menuLeft">
                <slot name="menuLeft"></slot>
            </zmz-container>
            <zmz-container class="zmz-docs__header__nav__right" tag="div">
                <template v-if="getZmzMobile">
                    <li class="nav-item">
                        <zmz-dropdown v-model="currentLang" trigger="click">
                            <i class="zmz-icon--menu"></i>
                            <template #dropdown>
                                <zmz-dropdown-menu>
                                    <template v-for="(item, index) in menuUrlList.menuUrl">
                                        <template v-if="item.children && item.children.length">
                                            <zmz-dropdown-item :key="childIndex"
                                                v-for="(child, childIndex) in item.children">
                                                <router-link :to="child.url" :query="child.query" v-if="child.router"
                                                    class="zmz-global-targets">
                                                    {{ $t(child.name) }}
                                                </router-link>
                                                <template v-else>
                                                    <a :href="child.url + getQuery(child.query)" target="_blank"
                                                        class="zmz-global-targets">
                                                        {{ $t(child.name) }}
                                                    </a>
                                                </template>
                                            </zmz-dropdown-item>
                                        </template>
                                        <template v-else>
                                            <zmz-dropdown-item :key="index">
                                                <router-link :to="item.url" :query="item.query" v-if="item.router"
                                                    class="zmz-global-targets">
                                                    {{ $t(item.name) }}
                                                </router-link>
                                                <template v-else>
                                                    <a :href="item.url + getQuery(item.query)" target="_blank"
                                                        class="zmz-global-targets">
                                                        {{ $t(item.name) }}
                                                    </a>
                                                </template>
                                            </zmz-dropdown-item>
                                        </template>
                                    </template>
                                </zmz-dropdown-menu>
                            </template>
                        </zmz-dropdown>
                    </li>
                </template>
                <template v-else>
                    <li class="nav-item" v-for="(item, index) in menuUrlList.menuUrl" :key="index">
                        <template v-if="item.children && item.children.length">
                            <zmz-dropdown v-model="currentLang">
                                {{ $t(item.name) }}
                                <i class="zmz-icon--arrow-bottom"></i>
                                <template #dropdown>
                                    <zmz-dropdown-menu>
                                        <zmz-dropdown-item @click="handleChilren(child)"
                                            v-for="(child, childIndex) in item.children" :key="childIndex">
                                            {{ $t(child.name) }}
                                        </zmz-dropdown-item>
                                    </zmz-dropdown-menu>
                                </template>
                            </zmz-dropdown>
                        </template>
                        <template v-else>
                            <router-link :to="item.url" :query="item.query" v-if="item.router"
                                class="zmz-global-targets">
                                <template v-if="item.type == 'icon'">
                                    <i :class="item.icon"></i>
                                </template>
                                <template v-else>{{ $t(item.name) }}</template>
                            </router-link>
                            <template v-else>
                                <a :href="item.url + getQuery(item.query)" target="_blank" class="zmz-global-targets">
                                    <template v-if="item.type == 'icon'">
                                        <i :class="item.icon"></i>
                                    </template>
                                    <template v-else>{{ $t(item.name) }}</template>
                                </a>
                            </template>
                        </template>
                    </li>
                </template>
                <slot name="menuRight"></slot>
                <li class="nav-item">
                    <zmz-switch size="small" open-border-color="#b7bec6" close-border-color="#b7bec6"
                        open-color="#2f2f2f" close-color="#f1f1f1" open-dot-color="#1a1a1a" close-dot-color="#fff"
                        open-icon-color="#fff" close-icon-color="#2f2f2f" open-icon="zmz-icon--moon"
                        close-icon="zmz-icon--sun" v-model="themeToggle" @on-change="handleOnChange"></zmz-switch>
                </li>
                <li class="nav-item">
                    <zmz-dropdown v-model="currentLang" trigger="click">
                        <i class="zmz-icon--translate-lang"></i>
                        <template #dropdown>
                            <zmz-dropdown-menu>
                                <zmz-dropdown-item @click="langClick('zh', 0)">{{ $t('language.zhlang')
                                    }}</zmz-dropdown-item>
                                <zmz-dropdown-item @click="langClick('en', 1)">{{ $t('language.enlang')
                                    }}</zmz-dropdown-item>
                            </zmz-dropdown-menu>
                        </template>
                    </zmz-dropdown>
                </li>
            </zmz-container>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: "LayoutHeader",
    data() {
        return {
            isOpenMenu: false,
            themeToggle: false,
            currentLang: 0,
        };
    },
    mounted() {
        let html = document.querySelector('html')
        if (this.getZmzTheme == 'dark') {
            html.setAttribute('zmz-theme', this.getZmzTheme)
            this.themeToggle = true
        } else {
            html.setAttribute('zmz-theme', this.getZmzTheme)
            this.themeToggle = false
        }

        if (this.getZmzLang == 'en') {
            this.currentLang = 1
        } else {
            this.currentLang = 0
        }
        this.handleResize()
        window.addEventListener('resize', this.handleResize)
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize)
    },
    computed: {
        ...mapGetters(['getZmzTheme', 'getZmzLang', 'getZmzMobile']),
        menuUrlList() {
            return this.$setting.currentConfig;
        },
        setting() {
            return this.$setting.currentConfig;
        },
        themeClass() {
            let params = []

            if (this.theme) {
                params.push('zmz-globalIndex__header--' + this.theme)
            }
            return params;
        }
    },
    methods: {
        getQuery(query) {
            if (!query) return '';
            let params = []
            for (const key in query) {
                params.push([key] + '=' + query[key]);
            }
            return '?' + params.join('&')
        },
        handleResize() {
            this.$store.commit('setZmzMobile', (document.documentElement.clientWidth || document.body.clientWidth) < 1200)
        },
        // 语言点击
        langClick(lang) {
            this.$i18n.locale = lang
            this.$store.commit('setZmzLang', lang)
        },
        handleOpen() {
            this.isOpenMenu = !this.isOpenMenu;
        },
        handleChilren(item) {
            window.open(item.url, '_blank')
        },
        handleOnChange(data) {
            let html = document.querySelector('html')
            if (data) {
                html.setAttribute('zmz-theme', 'dark')
                this.$store.commit('setZmzTheme', 'dark')
            } else {
                html.setAttribute('zmz-theme', 'light')
                this.$store.commit('setZmzTheme', 'light')
            }
        }
    }
};
</script>
