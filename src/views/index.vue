<template>
    <div class="zmz-globalIndex">
        <LayoutHeader></LayoutHeader>
        <LayoutBodyer>
            <div class="zmz-globalIndex__content">
                <div class="zmz-globalIndex__content__title">ZMZ-VUE3</div>
                <div class="zmz-globalIndex__content__describe">基于Vue3.0的网站快速成型UI组件库</div>
                <div class="zmz-globalIndex__content__tip">助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～</div>
                <div class="zmz-globalIndex__content__button">
                    <router-link to="/docs/introduce">快速体验<svg class="icon" xmlns="http://www.w3.org/2000/svg"
                            width="10" height="10" viewBox="0 0 24 24" data-v-9e9e3e87="">
                            <path
                                d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                                data-v-9e9e3e87=""></path>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="zmz-globalIndex__tip">
                <div class="zmz-globalIndex__tip__wrap">
                    <div class="zmz-globalIndex__tip__item">
                        <div class="zmz-globalIndex__tip__item__title">丰富组件</div>
                        <div class="zmz-globalIndex__tip__item__content">
                            丰富的组件和功能,满足大部分开发场景。</div>
                    </div>
                    <div class="zmz-globalIndex__tip__item">
                        <div class="zmz-globalIndex__tip__item__title">友好的API</div>
                        <div class="zmz-globalIndex__tip__item__content">
                            更多的api,让组件更加灵活。</div>
                    </div>
                    <div class="zmz-globalIndex__tip__item">
                        <div class="zmz-globalIndex__tip__item__title">开箱即用</div>
                        <div class="zmz-globalIndex__tip__item__content">
                            简单易用，上手难度低。</div>
                    </div>
                </div>
            </div>
        </LayoutBodyer>
        <LayoutFooter></LayoutFooter>
    </div>
</template>

<script>
import LayoutHeader from "@/component/layout/LayoutHeader.vue"
import LayoutBodyer from "@/component/layout/LayoutBodyer.vue"
import LayoutFooter from "@/component/layout/LayoutFooter.vue"
export default {
    name: "GameIndex",
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
    data() {
        return {
            init: false,
            title: 'zmz-vue3-web组件库' + this.globalConfig('tails'),
            keywords: this.globalConfig('keywords'),
            description: this.globalConfig('description'),
            docDir: {}
        };
    },
    components: {
        LayoutHeader,
        LayoutBodyer,
        LayoutFooter
    },
    methods: {
        globalConfig(data) {
            return this.$setting.globalConfig[data];
        },
    },
    mounted() {
        console.log(this.$route)
    },
    computed: {
    }
};
</script>
