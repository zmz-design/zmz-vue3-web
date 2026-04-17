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
    data () {
        return {
            title: 'Skeleton 骨架屏' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            loading: false
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Skeleton 骨架屏
----
## 基础用法
当文本没有加载出来时，显示文本的默认占位图。

<div class="demo-block">
    <zmz-skeleton :num="3"></zmz-skeleton>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-skeleton :num="3"></zmz-skeleton>
    </div>
</template>
```
:::

## 动画用法

<div class="demo-block">
    <zmz-skeleton :num="3" animation></zmz-skeleton>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-skeleton :num="3" animation></zmz-skeleton>
    </div>
</template>
```
:::

## 自定义样式

<div class="demo-block">
    <zmz-skeleton animation>
        <zmz-skeleton-item type="image" style="width:240px;height: 240px;"></zmz-skeleton-item>
        <zmz-skeleton-item width='30%'></zmz-skeleton-item>
        <zmz-skeleton-item width='70%' both></zmz-skeleton-item>
        <zmz-skeleton-item width='40%' both></zmz-skeleton-item>
    </zmz-skeleton>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-skeleton animation>
            <zmz-skeleton-item type="image" style="width:240px;height: 240px;"></zmz-skeleton-item>
            <zmz-skeleton-item width='30%'></zmz-skeleton-item>
            <zmz-skeleton-item width='70%' both></zmz-skeleton-item>
            <zmz-skeleton-item width='40%' both></zmz-skeleton-item>
        </zmz-skeleton>
    </div>
</template>
```
:::

## 绑定loading
控制loading数据的转换

<div class="demo-block">
    <div style="margin-bottom:20px;">切换&nbsp;&nbsp;&nbsp;<zmz-switch v-model="loading"></zmz-switch></div>
    <zmz-skeleton :num="3" animation v-model="loading" width="267px" height="331px">
        <template #loading>
            <zmz-skeleton-item type="image" image="" width="267px" height="267px"></zmz-skeleton-item>
            <zmz-skeleton-item width='167px' margin="15px 0 0 0"></zmz-skeleton-item>
            <zmz-skeleton-item width='267px' both margin="15px 0 0 0"></zmz-skeleton-item>
        </template>
        <zmz-card style='width:267px'>
            <div style="width:100%;height:200px;background:#2d8ff4;color:#fff;text-align:center;line-height:200px;">我是西红柿图片</div>
            <div style="padding: 14px;">
                <span>我吃西红柿</span>
                <div class="bottom card-header">
                    <span class="time">2020-10-10</span>
                    <zmz-button text class="button">操作按钮</zmz-button>
                </div>
            </div>
        </zmz-card>
    </zmz-skeleton>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="margin-bottom:20px;">切换&nbsp;&nbsp;&nbsp;<zmz-switch v-model="loading"></zmz-switch></div>
        <zmz-skeleton :num="3" animation v-model="loading" width="267px" height="331px">
            <template #loading>
                <zmz-skeleton-item type="image" image="" width="267px" height="267px"></zmz-skeleton-item>
                <zmz-skeleton-item width='167px' margin="15px 0 0 0"></zmz-skeleton-item>
                <zmz-skeleton-item width='267px' both margin="15px 0 0 0"></zmz-skeleton-item>
            </template>
            <zmz-card style='width:267px'>
                <div style="width:100%;height:200px;background:#2d8ff4;color:#fff;text-align:center;line-height:200px;">我是西红柿图片</div>
                <div style="padding: 14px;">
                    <span>我吃西红柿</span>
                    <div class="bottom card-header">
                        <span class="time">2020-10-10</span>
                        <zmz-button type="text" class="button">操作按钮</zmz-button>
                    </div>
                </div>
            </zmz-card>
        </zmz-skeleton>
    </div>
</template>
<script>
export default {
    data () {
        return {
            loading: false
        }
    }
}
```
:::



## Skeleton 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | loading插槽下有效 | Boolean | false/true | false |
| width | 骨架盒子宽度 | String | — | — |
| height | 骨架盒子高度 | String | — | — |
| animation | 骨架屏动画 | Boolean | false/true | false |
| num | 骨架屏块级数量 | Number | — | 4 |
| type | 骨架块类型（text文本块）（image图片块 | text/image | — | text |

## Skeleton-item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 骨架子盒子宽度 | String | — | — |
| height | 骨架子盒子高度 | String | — | — |
| margin | 骨架子盒子外边距 | String | — | — |
| padding | 骨架子盒子内边距 | String | — | — |
| type | 骨架屏块类型（text文本块）（image图片块） | String | text/image | text |
| both | 骨架屏块清除上级浮动对自己的影响 | Boolean | false/true | false |

## Skeleton slot插槽

| 参数      | 说明          |
|---------- |-------------- |
| loading | v-model下有效 |
|  — | 默认插槽 |

## Skeleton 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-skeleton-animation              |  --zmz-skeleton-animation                  |  zmz-skeleton-loading 1.4s ease infinite      |动画     |
| @zmz-skeleton-animation-background-color|  --zmz-skeleton-animation-background-color| linear-gradient(90deg, #f4f5f9 25%, #eff0f1 37%, #f4f5f9 63%)      | 背景颜色        |
| @zmz-skeleton-animation-background-size      |  --zmz-skeleton-animation-background-size        |  500% 100%| 背景大小    |
| @zmz-skeleton-margin-top     |  --zmz-skeleton-margin-top     | 15px          | 间距      |
| @zmz-skeleton-image-color       |  --zmz-skeleton-image-color          | #f4f5f9       | 图片颜色        |
| @zmz-skeleton-image-radius   |  --zmz-skeleton-image-radius      | 3px          | 图片圆角    |
| @zmz-skeleton-text-radius  |  --zmz-skeleton-text-radius    | 3px          | 文字圆角      |
| @zmz-skeleton-text-color  |  --zmz-skeleton-text-color    | #f4f5f9          | 文字颜色      |
| @zmz-skeleton-text-height  |  --zmz-skeleton-text-height    | 20px          | 文字高度      |
