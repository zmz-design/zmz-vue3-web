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
            title: 'Cron 表达式' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            cron: '* * * * * ? *'
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    },
}
</script>
# Cron 表达式
----
可以选择秒，分，时， 天，月， 周，年，用于定时任务

## 基础用法

<div class="demo-block">
    <div>当前表达式: {{cron}}</div>
    <zmz-cron v-model="cron"></zmz-cron>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div>当前表达式: {{cron}}</div>
        <zmz-cron v-model="cron"></zmz-cron>
    </div>
</template>
```
:::


## Cron 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |  备注  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| v-model | 表达式 | String | — | * * * * * * * |— |

## Cron 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-cron-header-color   |  --zmz-cron-header-color      | #3f536e|   头部tabs颜色 |
| @zmz-cron-header-selected-color   |  --zmz-cron-header-selected-color      | 确定主题色 | 头部tabs选中颜色    |
| @zmz-cron-border-color    |  --zmz-cron-border-color       | #f2f2f3| 边线    |
| @zmz-cron-select-border-color    |  --zmz-cron-select-border-color       | #e3e6ef| 选项边线颜色    |
| @zmz-cron-select-text-color    |  --zmz-cron-select-text-color       | #213547| 选项文字颜色    |
| @zmz-cron-select-text-font-size    |  --zmz-cron-select-text-font-size       | 12px| 选项字体大小    |
