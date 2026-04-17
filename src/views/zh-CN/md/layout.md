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
            title: 'Layout 布局' + this.currentConfig('tails'),
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
# Layout 布局
----
栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。
市面上一般使用 12栅格 系统，也有采用 8栅格 系统的，但是随着设备屏幕越来越大，传统的 12栅格 系统在一些业务场景下，没办法很好的解决元素布局的问题，所以我们使用了 24栅格 系统,将页面区域 24 等分。

## 基础布局
<div class="demo-block">
    <zmz-row>
        <zmz-col :span="24">
            <div class="demo-col demo-col--odd zmz-fs-12"></div>
        </zmz-col>
    </zmz-row>
    <zmz-row class="zmz-mt-10">
        <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="8"><div class="demo-col demo-col--even"></div></zmz-col>
        <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
    <zmz-row class="zmz-mt-10">
        <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="4"><div class="demo-col demo-col--even"></div></zmz-col>
        <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="4"><div class="demo-col demo-col--even"></div></zmz-col>
        <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="4"><div class="demo-col demo-col--even"></div></zmz-col>
    </zmz-row>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-row>
            <zmz-col :span="24">
                <div class="demo-col demo-col--odd"></div>
            </zmz-col>
        </zmz-row>
        <zmz-row class="zmz-mt-10">
            <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="8"><div class="demo-col demo-col--even"></div></zmz-col>
            <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
        <zmz-row class="zmz-mt-10">
            <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="4"><div class="demo-col demo-col--even"></div></zmz-col>
            <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="4"><div class="demo-col demo-col--even"></div></zmz-col>
            <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="4"><div class="demo-col demo-col--even"></div></zmz-col>
        </zmz-row>
    </div>
</template>
```
:::

## 分栏间隔

分栏之间存在间隔
Row 组件 提供 ```gutter``` 属性来指定每一栏之间的间隔，默认间隔为 0。

<div class="demo-block">
    <zmz-row :gutter="20">
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-row :gutter="20">
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
    </div>
</template>
```
:::

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="demo-block">
    <zmz-row :gutter="20">
        <zmz-col :span="16"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
    <zmz-row :gutter="20" class="zmz-mt-10">
        <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
    <zmz-row :gutter="20" class="zmz-mt-10">
        <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="16"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-row :gutter="20">
            <zmz-col :span="16"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
        <zmz-row :gutter="20" class="zmz-mt-10">
            <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="8"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
        <zmz-row :gutter="20" class="zmz-mt-10">
            <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="16"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="4"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
    </div>
</template>
```
:::

## 分栏偏移

支持偏移指定的栏数。通过制定 col 组件的 ```offset``` 属性可以指定分栏偏移的栏数。

<div class="demo-block">
    <zmz-row :gutter="20">
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6" :offset="6"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
    <zmz-row :gutter="20" class="zmz-mt-10">
        <zmz-col :span="6" :offset="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6" :offset="6"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
    <zmz-row :gutter="20" class="zmz-mt-10">
        <zmz-col :span="12" :offset="6"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
</div>

::: demo

```html
<template>
    <div class="demo-block">
        <zmz-row :gutter="20">
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6" :offset="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
        <zmz-row :gutter="20" class="zmz-mt-10">
            <zmz-col :span="6" :offset="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6" :offset="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
        <zmz-row :gutter="20" class="zmz-mt-10">
            <zmz-col :span="12" :offset="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
    </div>
</template>
```
:::

## Flex 布局

通过 flex 布局来对分栏进行灵活的对齐。
将 ```type``` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 ```justify``` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
<div class="demo-block">
    <zmz-row flex align="top" class="row-bg">
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
    <zmz-row flex class="row-bg zmz-mt-10" justify="center">
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
    <zmz-row flex class="row-bg zmz-mt-10" justify="end">
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
    <zmz-row flex class="row-bg zmz-mt-10" justify="space-between">
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
    <zmz-row flex class="row-bg zmz-mt-10" justify="space-around">
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
        <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
    </zmz-row>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-row flex align="top" class="row-bg">
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
        <zmz-row flex class="row-bg zmz-mt-10" justify="center">
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
        <zmz-row flex class="row-bg zmz-mt-10" justify="end">
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
        <zmz-row flex class="row-bg zmz-mt-10" justify="space-between">
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
        <zmz-row flex class="row-bg zmz-mt-10" justify="space-around">
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--even"></div></zmz-col>
            <zmz-col :span="6"><div class="demo-col demo-col--odd"></div></zmz-col>
        </zmz-row>
    </div>
</template>
```
:::

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：```xs```、```sm```、```md```、```lg``` 和 ```xl```。
<div class="demo-block">
    <zmz-row :gutter="10">
        <zmz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="demo-col demo-col--even"></div></zmz-col>
        <zmz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="demo-col demo-col--odd"></div></zmz-col>
        <zmz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="demo-col demo-col--even"></div></zmz-col>
    </zmz-row>
</div>


::: demo
```html
<template>
    <div class="demo-block">
        <zmz-row :gutter="10">
            <zmz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="demo-col demo-col--even"></div></zmz-col>
            <zmz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="demo-col demo-col--odd"></div></zmz-col>
            <zmz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="demo-col demo-col--even"></div></zmz-col>
        </zmz-row>
    </div>
</template>
```
:::

## Row 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | Number | — | 0 |
| flex | 是否开启flex布局,现代浏览器支持 | Boolean | — | false |
| wrap | 是否开启flex水平超出换行布局,现代浏览器支持 | Boolean | — | true |
| justify | flex 布局下的水平排列方式 | String | start/end/center/space-around/space-between/space-evenly | start |
| align | flex 布局下的对齐方式 | String | top/center/bottom | top |
| tag | 自定义元素标签 | String | * | div |
| mode | 栅格模式，odd奇数模式，even偶数模式 | String | odd/even | eve |

## Col 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | Number | — | — |
| offset | 栅格左侧的间隔格数 | Number | — | 0 |
| push |  栅格向右移动格数 | Number | — | 0 |
| pull |  栅格向左移动格数 | Number | — | 0 |
| xs | 大于`768px` 响应式栅格数或者栅格属性对象 | Number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | Number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992` 响应式栅格数或者栅格属性对象 | Number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200` 响应式栅格数或者栅格属性对象 | Number/object (例如： {span: 4, offset: 4}) | — | — |
| tag | 自定义元素标签 | String | * | div |
