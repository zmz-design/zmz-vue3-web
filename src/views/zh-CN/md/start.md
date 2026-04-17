<script lang="js">
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
    data () {
        return {
            title: '快速上手' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    },
}
</script>
# 快速上手
----

## 使用前准备

> 在使用之前，推荐学习 `Vue` 和 `Vite` ，并正确配置 `Node` v18.x 或 更高版本。
- <a href="https://v3.cn.vuejs.org" target="_blank">Vue.js</a>
- <a href="https://cn.vitejs.dev" target="_blank">Vite</a>
- <a href="https://nodejs.org" target="_blank">Node</a>

## 安装

- 使用 npm 安装
```bash
npm install zmz-vue3-web --save
```

- 使用 yarn 安装

```bash
yarn add zmz-vue3-web
```

## 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import { createApp } from 'vue'
import App from './App.vue';
import ZMZVUE3WEB from '@zmz/vue3-web' // 引入组件库
import '@zmz/vue3-web/dist/zmz-vue3-web.css'; // 引入样式库
const app = createApp(App);
app.use(ZMZVUE3WEB)
app.mount('#app');
```

## 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```javascript
import { ZmzButton } from '@zmz/vue3-web'

export default {
    components: {
        ZmzButton
    }
}
```

在模板中，用 `<zmz-button></zmz-button>` 自定义标签的方式使用组件

```html
<template>
    <div>
        <zmz-button>这是一个按钮</zmz-button>
    </div>
</template>
```

## 自定义主题

`zmz-vue3-web` 各个组件的样式采用css3变量。用户可根据实际需要，覆盖变量。

## SEO优化

已经内置vue-meta-info插件。
