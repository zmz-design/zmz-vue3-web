<template>
    <zmz-container class="zmz-docs">
        <zmz-container class="zmz-docs__header" tag="header">
            <LayoutHeader></LayoutHeader>
        </zmz-container>
        <router-view class="zmz-docs__main" :class="{ 'zmz-docs__main--menuopen': isOpenMenu }"></router-view>
        <zmz-backtop scroll-target=".zmz-docs__doc"> </zmz-backtop>
    </zmz-container>
</template>

<script>
import LayoutHeader from '@/component/layout/LayoutHeader.vue'
export default {
    components: {
        LayoutHeader
    },
    name: 'layout-index',
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
            title: 'zmz-vue3-web文档' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            isOpenMenu: false,
            themeToggle: false
        };
    },
    mounted() {
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        handleOpen() {
            this.isOpenMenu = !this.isOpenMenu;
        },
        handleOnChange(data) {
            let html = document.querySelector('html')
            if (data) {
                html.classList.remove('light')
                html.classList.add('dark')
                localStorage.setItem('zmz-theme', 'dark')
            } else {
                html.classList.remove('dark')
                html.classList.add('light')
                localStorage.setItem('zmz-theme', 'light')

            }
        }
    },
    computed: {
        setting() {
            return this.$setting.currentConfig;
        }
    },
};
</script>
