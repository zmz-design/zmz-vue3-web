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
            title: 'Cell 列表' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description')
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    },
}
</script>
# Cell 列表
----
用于列表展示，列表菜单展示。

## 基础用法
使用```title```属性展示内容

<div class="demo-block">
    <zmz-cell title="我是标题"></zmz-cell>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-cell title="我是标题"></zmz-cell>
    </div>
</template>
```
:::

## 带描述
使用```describe```属性展示描述信息

<div class="demo-block">
    <zmz-cell title="我是标题" describe="我是菜单描述" href="/#/docs/introduce"></zmz-cell>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-cell title="我是标题" describe="我是菜单描述" href="/#/docs/introduce"></zmz-cell>
    </div>
</template>
```
:::

## icon图标

使用 ```icon-left``` 来载入左边指定的icon图标，使用 ```icon-right``` 来载入右边指定的icon图标

<div class="demo-block">
    <zmz-cell title="左边按钮" icon-left="zmz-icon--home" icon-right="zmz-icon--arrow-right"></zmz-cell>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-cell title="左边按钮" icon-left="zmz-icon--home" icon-right="zmz-icon--arrow-right"></zmz-cell>
    </div>
</template>
```
:::

### 链接

使用 ```link``` 来指定当前router跳转， 使用 ```href``` 来指定当前a标签原始跳转

<div class="demo-block">
    <zmz-cell title="router链接" link icon-left="zmz-icon--home" href="/#/docs/introduce"></zmz-cell>
    <zmz-cell title="href链接" link icon-left="zmz-icon--home" href="//www.zhuimengzhu.com"></zmz-cell>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-cell title="router链接" link icon-left="zmz-icon--home" href="/#/docs/introduce"></zmz-cell>
        <zmz-cell title="href链接" link icon-left="zmz-icon--home" href="//www.zhuimengzhu.com"></zmz-cell>
    </div>
</template>

```
:::

## Cell 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |  备注  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| title | 列表标题 | ``String`` | — | — |— |
| describe | 列表描述 | ``String`` | — | — |— |
| link | 是否超链接 | ``Boolean`` | — | false| — |
| href | 列表href链接 | ``String`` | — | — | — |
| icon-left | 列表左部icon | ``String`` | 类名 | — | 不可与img-left共用 |
| icon-right | 列表右部icon | ``String`` | 类名 | — | 不可与img-right共用 |
| img-left | 列表左部img | ``String`` | — | — | — | 不可与icon-left共用 |
| img-right | 列表右部img | ``String`` | — | — | 不可与icon-right共用 |
| icon-left-value | 列表右部img | ``String`` | — | — | icon-left的值或字符 |
| target | 原生target，href状态下起作用 | ``String`` | — | — | — |

## Cell 样式变量

| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-cell-width               |  --zmz-cell-width                  | 100%      | 盒子宽度     |
| @zmz-cell-background           |  --zmz-cell-background              | #fff       | 盒子背景色        |
| @zmz-cell-padding      |  --zmz-cell-padding          | 0 10px          | 盒子内边距    |
| @zmz-cell-border-color      |  --zmz-cell-border-color         | #DCDFE6         | 盒子边线颜色      |
| @zmz-cell-border-width       |  --zmz-cell-border-width          | 1px       | 盒子边线大小        |
| @zmz-cell-border-style   |  --zmz-cell-border-style      | solid          | 盒子边线样式   |
| @zmz-cell-color  |  --zmz-cell-color     | #9a9eaf          | 盒子为文字颜色      |
| @zmz-cell-icon-size      |  --zmz-cell-icon-size         | 14px          | 图标大小  |
| @zmz-cell-icon-margin-right|  --zmz-cell-icon-margin-right   | 5px      | 图标右间隔|
| @zmz-cell-icon-color      |  --zmz-cell-icon-color        | #9a9eaf       | 图标颜色|
| @zmz-cell-icon-i-font-size         |  --zmz-cell-icon-i-font-size            | 14px     | icon大小      |
| @zmz-cell-icon-i-color   |  --zmz-cell-icon-i-color     | #9a9eaf           | icon颜色        |
| @zmz-cell-icon-img-width    |  --zmz-cell-icon-img-width       | 25px          | 图片宽度       |
| @zmz-cell-icon-img-height    |  --zmz-cell-icon-img-height      | 25px          | 图片高度       |
| @zmz-cell-left-padding    |  --zmz-cell-left-padding      | 10px 0;          | 内容边距       |
| @zmz-cell-left-title-font-size    |  --zmz-cell-left-title-font-size       | 14px          | 标题大小       |
| @zmz-cell-left-title-color    |  --zmz-cell-left-title-color       | #5e6d82          | 标题颜色       |
| @zmz-cell-left-describe-font-size    |  --zmz-cell-left-describe-font-size       | 12px          | 描述大小       |
| @zmz-cell-left-describe-color   |  --zmz-cell-left-describe-color      | #9a9eaf          | 描述颜色       |
| @zmz-cell-right-i-font-size   |  --zmz-cell-right-i-font-size        | 14px         | icon大小       |
| @zmz-cell-right-i-color   |  --zmz-cell-right-i-color       | #9a9eaf          | icon颜色       |
| @zmz-cell-right-img-width   |  --zmz-cell-right-img-width       | 25px          | 图片宽度       |
| @zmz-cell-right-img-height   |  --zmz-cell-right-img-height       | 25px          | 图片高度       |
