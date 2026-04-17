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
            title: 'Signed 签字板' + this.currentConfig('tails'),
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
# Signed 签字板
----
用于用户签字
## 基础用法
<div class="demo-block">
    <zmz-signed></zmz-signed>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-signed></zmz-signed>
    </div>
</template>
```
:::

## Signed 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 画板宽度 | Number | — | — |
| height | 画板高度 | Number | — | — |
| show-clear-button | 是否显示清除按钮 | Boolean | — | true |
| show-download-button | 是否显示下载按钮 | Boolean | — | true |
| paint | 画板颜色组 | Array | — | ['black', 'blue', 'green', 'red', 'orange', 'yellow'] |
| lattice | 是否显示米字格 | Boolean | — | false |
| lattice-color | 米字格颜色 | String | — | red |
| color | 默认画笔颜色，选中画板颜色组下标颜色 | String | — | black |
| lineWidth | 线宽 | Number | — | 10 |
| download-name | 下载名称 | String | — | 'fileName' |
| download-mime-type | 下载类型 | String | — | 'image/png' |

## Signed 方法

| 方法      | 说明          | 参数  |
|---------- |-------------- |---- |
| clear | 清空画布 | function()|
| download | 下载画布 | function()|

## Signed 事件

| 方法      | 说明          | 参数  |
|---------- |-------------- |---- |
| on-change | 画笔抬起触发 | function(base64: 图片地址)|
| on-clear | 清除画布 | function()|
| on-download | 下载画布 | function()|
| on-canvas-down | 在画布按下触发  | function()|
| on-canvas-move | 按下画布移动触发 | function()|
| on-canvas-up | 按下画布抬起触发 | function()|

## Signed 插槽
| 参数      | 说明          |
|---------- |-------------- |
| clear | 清除按钮插槽 |
| download | 下载按钮插槽 |

## Signed 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-signed-padding              |  --zmz-signed-padding                  |  10px 0      |签字版边距     |
| @zmz-signed-paint-item-width|  --zmz-signed-paint-item-width| 20px      | 颜色组宽度        |
| @zmz-signed-paint-item-height      |  --zmz-signed-paint-item-height        |  20px | 颜色组高度    |
| @zmz-signed-paint-item-border-radius     |  --zmz-signed-paint-item-border-radius     | 5px          | 边线圆角      |
| @zmz-signed-paint-item-border-width       |  --zmz-signed-paint-item-border-width          | 3px       | 边线宽度        |
| @zmz-signed-paint-item-border-color   |  --zmz-signed-paint-item-border-color      | transparent          | 边线颜色    |
| @zmz-signed-paint-item-selected-border-color  |  --zmz-signed-paint-item-selected-border-color    | 默认成功颜色          | 颜色选中      |
| @zmz-signed-paint-padding  |  --zmz-signed-paint-padding    | 5px          | 颜色组边距      |
