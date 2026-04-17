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
            title: 'Calendar 日历' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            current: new Date()
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Calendar 日历
----
## 概述
显示日期
## 基础用法

<div class="demo-block">
    <zmz-calendar v-model="current"></zmz-calendar>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-calendar v-model="current"></zmz-calendar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: new Date()
        };
    }
}
</script>
```
:::

## Calendar 属性

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| v-model     |    绑定值 |    Date  |    —    |   new Date()  |
| months     |    月份 |    Array  |    —    |   ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']  |
| weeks     |    周 |    Array  |    —    |   ['周日', '周一', '周二', '周三', '周四', '周五', '周六'] |
| show-button     |    显示按钮 |    Boolean  |    —    |   true |


## Calendar 方法
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
| on-month | 月点击 | function(item: 当前)  |
| on-day | 天点击 | function(item: 当前)  |
| on-toggle-month-year | 切换年月 | function(index)  |
| on-next-month | 下月 | function(1)  |
| on-prev-month | 上月 | function(0)  |
| on-next-year | 下年 | function(1)  |
| on-prev-year | 上年 | function(0)  |


## Calendar 插槽
| 参数      | 说明          |返回值          |
|---------- |-------------- |-------        |
| default | 周天月插槽 | #default="{state:状态, weeks:周, months:月, days:天}" |
| day | 天插槽 |#day="item"        |
| month | 月插槽 |#month="item"        |
| week | 周插槽 |#week="item"        |
| date | 日期插槽 |#date="calendar"        |

## Calendar 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-calendar-text-size              |  --zmz-calendar-font-size                  | 14px      | 字体大小      |
| @zmz-calendar-text-color          |  --zmz-calendar-text-color           | 默认主题颜色       | 字体颜色        |
| @zmz-calendar-item-padding              |  --zmz-calendar-item-padding                  | 10px      | 每个内边距      |
| @zmz-calendar-item-height         |  --zmz-calendar-item-height          | 85px       | 每个高度        |
| @zmz-calendar-border-color     |  --zmz-calendar-border-color        | #e3e6ef          | 边线颜色    |
| @zmz-calendar-selected-color     |  --zmz-calendar-selected-color        | 确定主题颜色          | 选中颜色    |
| @zmz-calendar-selected-background-color  |  --zmz-calendar-selected-background-color   | rgba(45, 143, 244, 0.08)| 选中背景色|
| @zmz-calendar-other-month-color     |  --zmz-calendar-other-month-color        | rgba(63, 83, 110, 0.5)| 其他月份颜色    |
