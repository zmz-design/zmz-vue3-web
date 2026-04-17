<script>
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
    data() {
        return {
            title: '介绍' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# 介绍
----
`zmz-vue3-web` 是一款基于 `Vue.js 3.x` 的前端 UI 组件库，主要用于快速开发

## 特性

- 基于 `Vue3.x` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上

## 环境
- vue 3.x

## 贡献
如果你在使用 `zmz-vue3-web` 时遇到问题，或者有好的建议，欢迎给我们提 [Issue](https://github.com/jiawenguang/zmz-vue3-web) 或 [Pull Request](https://github.com/jiawenguang/zmz-vue3-web)
