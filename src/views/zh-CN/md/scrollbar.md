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
                    name: 'describe',
                    content: this.describe
                }
            ]
        };
    },
    mounted() {
    },
    data() {
        return {
            title: 'Scrollbar 滚动条' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Scrollbar 滚动条
----

### 基本用法
<div class="demo-alert demo-block">
    <div style="height: 400px;">
        <zmz-scrollbar  style="height:100%;" ref="componentScrollBar">
          <p v-for="i in 40" :key="i">我是填充内容....</p>
        </zmz-scrollbar>
    </div>
</div>

::: demo
```html
<template>
    <div style="height: 400px;">
        <zmz-scrollbar style="height:100%;" ref="componentScrollBar">
          <p v-for="i in 40" :key="i">我是填充内容....</p>
        </zmz-scrollbar>
    </div>
</template>
```
:::

### 横向滚动条
<div class="demo-alert demo-block">
    <div style="height: 400px; width: 400px;">
        <zmz-scrollbar :vertical="false" style="height:100%;" ref="componentScrollBar">
          <p v-for="i in 40" style="white-space:nowrap;" :key="i">我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容我是填充内容....</p>
        </zmz-scrollbar>
    </div>
</div>

::: demo
```html
<template>
    <div style="height: 400px;">
        <zmz-scrollbar style="height:100%;" ref="componentScrollBar">
          <p v-for="i in 40" :key="i">我是填充内容....</p>
        </zmz-scrollbar>
    </div>
</template>
```
:::

### Scrollbar 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| vertical |	是否纵向滚动 |	``Boolean``   |	—    |	true  |
| show-scroll-bar |    是否一直显示滚动条 |    ``Boolean``   |    —    |    false  |
| wrap-style   | 内联方式 自定义wrap容器的样式 | ``Object``  | —  |  — |
| wrap-class |  类名方式 自定义wrap容器的样式  |    ``Array``    |   —  |    —      |
| view-style | 内联方式 自定义view容器的样式 | ``Object`` |  — | — |
| view-class |  类名方式 自定义view容器的样式  |    ``Array``    |   —    |    —      |
| bar-style      |  内联方式, 自定义滚动条thumb的样式 |    ``Object`` |    — | — |
| bar-class      |  类名方式, 自定义滚动条thumb的样式 |    ``Array`` |    — | — |
| bar-wrap-style      |  内联方式, 自定义滚动条wrap容器的样式 |   ``Object`` |    — | — |
| bar-wrap-class      |  类名方式, 自定义滚动条wrap容器的样式 |   ``Array`` |    — | — |
| no-resize      |  如果 container 尺寸不会发生变化，最好设置它可以优化性能 |    ``Boolean``   |    — | false |
| native-scrollbar      |    是否采用原生滚动 (隐藏原生滚动条) |    ``Boolean``   |    —    |    false  |
| auto-bar-width      |    是否自动获取bar宽度 |    ``Boolean``   |    —    |    false  |
