<script>
export default{
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
            title: 'Pagination 分页' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            pageNum: 1,
            pageNum1: 1,
            pageNum2: 1,
            pageNum3: 1,
            pageNum4: 1,
            pageSize: 10,
            total: 100
        }  
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onNumChange(num) {
            console.log(num)
        },
        onSizeChange(size) {
            console.log(size)
        }
    },
}
</script>
# Pagination 分页
----
## 概述
当展示列表数据过多时，可以使用分页分解数据看一页展示一页。

## 基础用法

<div class="demo-block">
    <zmz-pagination @on-num-change="onNumChange" @on-size-change="onSizeChange" :layout="['total', 'prev', 'page', 'next', 'sizes', 'jumper', 'numsize']" :total="total" :one-page-hidden="true" :fold="5" v-model:page-num="pageNum1" v-model:page-size="pageSize"></zmz-pagination>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-pagination @on-num-change="onNumChange" @on-size-change="onSizeChange" :layout="['total', 'prev', 'page', 'next', 'sizes', 'jumper', 'numsize']" :total="total" :one-page-hidden="true" :fold="5" v-model:page-num="pageNum1" v-model:page-size="pageSize"></zmz-pagination>
    </div>
</template>
<script>
export default{
    data() {
        return {
            pageNum1: 1,
            pageSize: 10,
            total: 100
        }  
    },
    methods: {
        onNumChange(num) {
            console.log(num)
        },
        onSizeChange(size) {
            console.log(size)
        }
    },
}
</script>
```
:::

## 背景色
设置 ``background`` 属性可以为分页按钮添加背景色。

<div class="demo-block">
    <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background></zmz-pagination>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background></zmz-pagination>
    </div>
</template>
<script>
export default{
    data() {
        return {
            pageNum2: 1,
        }  
    },
}
</script>
```
:::

## 边框
设置 ``border`` 属性可以为分页按钮添加边框。

<div class="demo-block">
    <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2"></zmz-pagination>
</div>

::: demo
```html
<template>
    <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2"></zmz-pagination>
</template>
<script>
export default{
    data() {
        return {
            pageNum2: 1,
        }  
    },
}
</script>
```
:::

## 禁用
设置 ``disabled`` 属性可以禁用分页。

<div class="demo-block">
    <zmz-pagination disabled border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2"></zmz-pagination>
</div>

::: demo
```html
<template>
    <zmz-pagination disabled border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2"></zmz-pagination>
</template>
<script>
export default{
    data() {
        return {
            pageNum2: 1,
        }  
    },
}
</script>
```
:::

## 主题分页
设置 ``type`` 属性可以使用默认主题，不适用背景色只有 ``primary``、 ``success``、``error``、``warning``四种主题可供选择

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background type="primary"></zmz-pagination>
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background type="success"></zmz-pagination>
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background type="error"></zmz-pagination>
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background type="warning"></zmz-pagination>
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="primary"></zmz-pagination>
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="success"></zmz-pagination>
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="error"></zmz-pagination>
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="warning"></zmz-pagination>
        <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="primary"></zmz-pagination>
        <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="success"></zmz-pagination>
        <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="error"></zmz-pagination>
        <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="warning"></zmz-pagination>
        <zmz-pagination background border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="primary"></zmz-pagination>
        <zmz-pagination background border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="success"></zmz-pagination>
        <zmz-pagination background border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="error"></zmz-pagination>
        <zmz-pagination background border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="warning"></zmz-pagination>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background type="primary"></zmz-pagination>
            <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background type="success"></zmz-pagination>
            <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background type="error"></zmz-pagination>
            <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" background type="warning"></zmz-pagination>
            <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="primary"></zmz-pagination>
            <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="success"></zmz-pagination>
            <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="error"></zmz-pagination>
            <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="warning"></zmz-pagination>
            <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="primary"></zmz-pagination>
            <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="success"></zmz-pagination>
            <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="error"></zmz-pagination>
            <zmz-pagination border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="warning"></zmz-pagination>
            <zmz-pagination background border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="primary"></zmz-pagination>
            <zmz-pagination background border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="success"></zmz-pagination>
            <zmz-pagination background border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="error"></zmz-pagination>
            <zmz-pagination background border :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum2" type="warning"></zmz-pagination>
        </zmz-space>
    </div>
</template>
<script>
export default{
    data() {
        return {
            pageNum2: 1,
        }  
    },
}
</script>
```
::: 

## 不同尺寸
Pagination 组件提供除了默认值以外的四种尺寸，可以在不同场景下选择合适的按钮尺寸。

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-pagination  :total="100" size="large" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
        <zmz-pagination  :total="100" size="medium" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
        <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
        <zmz-pagination  :total="100" size="small" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
        <zmz-pagination  :total="100" size="mini" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-pagination  :total="100" size="large" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
            <zmz-pagination  :total="100" size="medium" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
            <zmz-pagination  :total="100" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
            <zmz-pagination  :total="100" size="small" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
            <zmz-pagination  :total="100" size="mini" :one-page-hidden="true" :fold="5" :page-num="pageNum" background></zmz-pagination>
        </zmz-space>
    </div>
</template>
<script>
export default{
    data() {
        return {
            pageNum: 1,
        }  
    },
}
</script>
```
:::

## Pagination 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model:page-num |当前页码值 | Number/String | — | 1 |
| v-model:page-size |每页显示条数 | Number/String | — | 10 |
| size | 尺寸 | String | large / medium / default / small / mini | default |
| type   | 主题 | String  | `success`, `error`, `warning`, `primary` |   primary  |
| total | 分页总数量 | Number | — | 0 |
| page-size-option | 分页选项配置 | Array | — | [10, 20, 30, 40] |
| layout | 组件配置 | Array | ['total', 'page', 'sizes', 'jumper', 'prev', 'next', 'first', 'last', 'numsize'] | ['total', 'prev', 'page', 'next', 'sizes', 'jumper'] |
| fold | 分页过多折叠 | Number | — | 5 |
| one-page-hidden | 只有一页时是否隐藏分页 | Boolean | — | false |
| background | 分页背景颜色 | Boolean |  — | false|
| border | 分页边框 | Boolean |  — | false|
| disabled | 禁用分页 | Boolean |  — | false|
| next-text | 下一页自定义文本 | String |  — | —|
| prev-text | 上一页自定义文本 | String |  — | —|
| first-text | 第一页自定义文本 | String |  — | —|
| last-text | 最后一页自定义文本 | String |  — | —|

## Pagination 方法

| 事件名称      | 说明          |回调参数     |
|---------- |-------------- |---------- |
| on-num-change | pageNum 改变时会触发 | function(num) |
| on-size-change | pageSize 改变时会触发 | function(size) |
| on-prev-page | 点击上一页触发 | function(num) |
| on-next-page | 点击下一页触发 | function(num) |
| on-first-page | 点击第一页触发 | function(num) |
| on-last-page | 点击最后一页触发 | function(num) |

## Pagination 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-pagination-border-radius              |  --zmz-pagination-border-radius                  | 3px     | 圆角     |
| @zmz-pagination-text-color              |  --zmz-pagination-text-color                  | #213547     | 文字颜色     |
| @zmz-pagination-text-font-size             |  --zmz-pagination-text-font-size                  | 12px     | 字体大小     |
| @zmz-pagination-pager-width          |  --zmz-pagination-pager-width          | 32px     | 宽        |
| @zmz-pagination-pager-height     |  --zmz-pagination-pager-height       | 32px         | 高    |
| @zmz-pagination-pager-color     |  --zmz-pagination-pager-color     | 默认主题颜色         | 默认颜色      |
| @zmz-pagination-pager-border-color      |  --zmz-pagination-pager-border-color         |  transparent       | 默认边线        |
| @zmz-pagination-pager-background-color |  --zmz-pagination-pager-background-color    | #fff          | 默认背景    |
| @zmz-pagination-pager-active-color  |  --zmz-pagination-active-hover-color     | 确认主题颜色         | 激活颜色    |
| @zmz-pagination-pager-active-border-color      |  --zmz-pagination-active-hover-border-color      | 确认主题颜色    | 激活边线      |
| @zmz-pagination-pager-active-background-color      |  --zmz-pagination-active-hover-background-color      | 确认主题颜色        | 激活背景      |
| @zmz-pagination-pager-hover-color  |  --zmz-pagination-pager-hover-color     | 确认主题颜色          | 滑过颜色    |
| @zmz-pagination-pager-hover-border-color      |  --zmz-pagination-pager-hover-border-color      | 确认主题颜色    | 滑过边线      |
| @zmz-pagination-pager-hover-background-color      |  --zmz-pagination-pager-hover-background-color      | 确认主题颜色        | 滑过背景      |
| @zmz-pagination-pager-disabled-color      |  --zmz-pagination-pager-disabled-color         |  #c2c2c2       | 禁用颜色        |
| @zmz-pagination-pager-disabled-background-color  |  --zmz-pagination-pager-disabled-background-color     | none          | 禁用背景色    |
| @zmz-pagination-pager-disabled-border-color  |  --zmz-pagination-pager-disabled-border-color     | transparent          | 禁用边线    |
