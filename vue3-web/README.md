<p align="center">
  <a href="//zmz-vue3-web.zhuimengzhu.com">
    <img width="100" src="https://avatars.githubusercontent.com/u/29243563?s=400&u=6289fcfd581b1200d25760b5e6d7c6503418392c&v=4">
  </a>
</p>

<h1 align="center">zmz-vue3-web</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@zmz-design/vue3-web">
    <img src="https://img.shields.io/npm/v/@zmz-design/vue3-web.svg" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/@zmz-design/vue3-web">
    <img src="https://img.shields.io/npm/dm/@zmz-design/vue3-web.svg" alt="npm downloads">
  </a>
  <a href="https://github.com/zmz-design/zmz-vue3-web/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@zmz-design/vue3-web.svg" alt="license">
  </a>
  <a href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/vue-3.x-brightgreen.svg" alt="vue version">
  </a>
</p>

<p align="center">
  基于 Vue.js 3.x 的企业级前端 UI 组件库，开箱即用，高效开发
</p>

<p align="center">
  <a href="//zmz-vue3-web.zhuimengzhu.com">📖 在线文档</a> | 
  <a href="//gitee.com/zmz-design/zmz-vue3-web/issues">🐞 反馈建议</a> | 
  <a href="#-快速入门">🚀 快速上手</a>
</p>

---

## ✨ 特性

- 🎯 **基于 Vue 3** - 使用 Vue 3 Composition API，性能更优
- 📦 **组件丰富** - 提供常用 UI 组件，覆盖大部分业务场景
- 🎨 **主题定制** - 支持灵活的样式配置，满足个性化需求

---

## 📦 安装

### 使用 npm

```bash
npm install @zmz-design/vue3-web --save
```

### 使用 yarn

```bash
yarn add @zmz-design/vue3-web
```

### 使用 pnpm

```bash
pnpm add @zmz-design/vue3-web
```

---

## 🚀 快速入门

### 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'

// 引入组件库
import ZMZVUE3 from '@zmz-design/vue3-web'
// 引入样式
import '@zmz-design/vue3-web/style.css'

const app = createApp(App)
app.use(ZMZVUE3)
app.mount('#app')
```

### 按需引入

```js
import { ZmzButton, ZmzInput } from '@zmz-design/vue3-web'
import '@zmz-design/vue3-web/style.css'

export default {
  components: {
    ZmzButton,
    ZmzInput
  }
}
```

### 自动导入

推荐使用 `unplugin-vue-components` 插件实现自动按需导入：

```bash
npm install unplugin-vue-components -D
```

```js
// vite.config.js
import Components from 'unplugin-vue-components/vite'

export default {
  plugins: [
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Zmz')) {
            return {
              name: componentName,
              from: '@zmz-design/vue3-web',
              sideEffects: '@zmz-design/vue3-web/style.css'
            }
          }
        }
      ]
    })
  ]
}
```

---

## 📖 示例

```vue
<template>
  <zmz-button type="primary" @click="handleClick">
    点击我
  </zmz-button>
</template>

<script setup>
import { ZmzButton } from '@zmz-design/vue3-web'

const handleClick = () => {
  console.log('按钮被点击了')
}
</script>
```

---

## 🤝 联系与交流

- **QQ 群**：581764678（加群请备注 zmz-vue3-web）
- **作者**：zmz
- **项目地址**：[Gitee](https://gitee.com/zmz-design/zmz-vue3-web) | [GitHub](https://github.com/zmz-design/zmz-vue3-web) | [GitCode](https://gitcode.com/zmz-design/zmz-vue3-web)

---

## 🌟 贡献指南

我们非常欢迎您的贡献！您可以通过以下方式参与：

1. 🐞 提交 [Issue](https://gitee.com/zmz-design/zmz-vue3-web/issues) 反馈问题或建议
2. 📝 提交 Pull Request 修复 Bug 或新增功能
3. 📚 完善文档，帮助更多开发者

### 本地开发

```bash
# 克隆项目
git clone https://gitee.com/zmz-design/zmz-vue3-web.git

# 安装依赖
pnpm install

# 启动开发服务
pnpm dev

# 构建组件库
pnpm build

# 运行测试
pnpm test
```

---

## 📄 开源协议

本项目基于 [MIT](LICENSE) 协议开源，欢迎 Star ⭐ 和 Fork

---

<p align="center">
  Made with ❤️ by zmz
</p>