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
            title: 'Showmore 显示更多' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            disabled: true,
            popover: true
        }  
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Showmore 显示更多
----

## 基础用法
文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠。

<div class="demo-block">
    <zmz-showmore :long="10" content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"></zmz-showmore>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-showmore :long="10" content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"></zmz-showmore>
    </div>
</template>

```
:::

## 高级用法
文本超出显示长度，折叠起来，展开后，可以通过```fold```指定是否需要收起，也可通过```show-text```设置折叠时的文案，通过```hide-text```设置收起的文案

<div class="demo-block">
    <zmz-showmore fold :long="10" show-text="show" hide-text="hide" content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"></zmz-showmore>
</div>


::: demo
```html
<template>
    <div class="demo-block">
        <zmz-showmore fold :long="10" show-text="show" hide-text="hide" content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"></zmz-showmore>
    </div>
</template>
```
:::

## 折叠方向
可以通过```display```指定是块折叠还是文本折叠

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>
            <zmz-showmore
                fold
                show-text="show"
                hide-text="hide"
                :long="30"
                fold-type="block"
                content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
            ></zmz-showmore>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-showmore
                fold
                show-text="show"
                hide-text="hide"
                :long="30"
                fold-type="line"
                content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
            ></zmz-showmore>
        </zmz-space-item>
    </zmz-space>
</div>


::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    fold-type="block"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    fold-type="line"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 禁用用法
可以通过```disabled```禁用

<div class="demo-block">
    <zmz-showmore disabled fold :long="10" show-text="show" hide-text="hide" content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"></zmz-showmore>
</div>


::: demo
```html
<template>
    <div class="demo-block">
        <zmz-showmore disabled fold :long="10" show-text="show" hide-text="hide" content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"></zmz-showmore>
    </div>
</template>
```
:::

## 内置主题
可以通过```type```指定是主题

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>
            <zmz-showmore
                fold
                show-text="show"
                hide-text="hide"
                :long="30"
                type="default"
                content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
            ></zmz-showmore>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-showmore
                fold
                show-text="show"
                hide-text="hide"
                :long="30"
                type="success"
                content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
            ></zmz-showmore>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-showmore
                fold
                show-text="show"
                hide-text="hide"
                :long="30"
                type="error"
                content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
            ></zmz-showmore>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-showmore
                fold
                show-text="show"
                hide-text="hide"
                :long="30"
                type="warning"
                content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
            ></zmz-showmore>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-showmore
                fold
                show-text="show"
                hide-text="hide"
                :long="30"
                type="primary"
                content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
            ></zmz-showmore>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-showmore
                fold
                show-text="show"
                hide-text="hide"
                :long="30"
                type="info"
                content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
            ></zmz-showmore>
        </zmz-space-item>
    </zmz-space>
</div>


::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="default"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="success"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="error"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="warning"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="primary"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="info"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>

```
:::

## Showmore 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| long | 显示文本的长度 | Number | — | -1(不折叠) |
| type | 颜色 | String |  default / success / error / warning / primary / info | default |
| content | 文本 | String | - |  |
| show-text | 折叠时需要显示文案 | String | — | 显示更多 |
| hide-text | 隐藏时需要显示文案 | String | — | 收起更多 |
| disabled | 是否禁用 | Boolean | —  | false |
| fold | 是否折叠 | Boolean | —  | false |
| fold-show-button | 是否显示收起按钮 | Boolean | —  | true |
| fold-hide-button | 是否显示隐藏按钮 | Boolean | —  | true |
| fold-type | 块折叠还是线折叠 | String | block / line | line |

## Showmore 方法
| 事件名称	| 说明						| 返回值	|
|----------	|--------------				|----------	|
| on-fold	| 展开折叠触发	| function('hide'\|'show')		|

## Showmore 插槽
| 参数名称		| 说明			| 返回值			|
|----------	|--------------					|--------------	|
| —		| 内容插槽 |—|
| button		| 折叠按钮插槽 |#count="{long(限制长度) contentLong(内容长度) ， fold(是否折叠) ， foldShowButton(显示展开按钮) ， foldHideButton(显示隐藏按钮)}"	|

## Showmore 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-showmore-text-size              |  --zmz-showmore-text-size                  | 12px      |字体大小     |
| @zmz-showmore-text-color          |  --zmz-showmore-text-color          | default颜色      | 字体颜色        |
| @zmz-showmore-disabled-opacity      |  --zmz-showmore-disabled-opacity        | 0.5          | 禁用透明    |
| @zmz-showmore-disabled-cursor      |  --zmz-showmore-disabled-cursor      | no-drop          | 禁用标识      |
| @zmz-showmore-button-size       |  --zmz-showmore-button-size          | 12px       | 按钮大小        |
| @zmz-showmore-button-color   |  --zmz-showmore-button-color      | default颜色          | 按钮颜色    |
| @zmz-showmore-button-cursor  |  --zmz-showmore-button-cursor    | pointer          | 按钮标识      |