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
            title: 'Link 文字连接' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description')
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Link 文字连接
----
文字超连接

## 基础用法
基础超连接用法

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-link type="default">默认按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="primary">成功按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="success">成功按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="warning">警告按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="error">错误按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="info">消息按钮</zmz-link>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-link type="default">默认按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="primary">成功按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="success">成功按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="warning">警告按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="error">错误按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="info">消息按钮</zmz-link>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
  
```
:::

## 禁用状态
文字链接不可用状态。

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-link type="default" disabled>默认按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="primary" disabled>成功按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="success" disabled>成功按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="warning" disabled>警告按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="error" disabled>错误按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="info" disabled>消息按钮</zmz-link>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-link type="default" disabled>默认按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="primary" disabled>成功按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="success" disabled>成功按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="warning" disabled>警告按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="error" disabled>错误按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="info" disabled>消息按钮</zmz-link>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
  
```
:::

## 带下划线
文字链接下划线。

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-link type="default" underline>默认按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="primary" underline>成功按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="success" underline>成功按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="warning" underline>警告按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="error" underline>错误按钮</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="info" underline>消息按钮</zmz-link>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-link type="default" underline>默认按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="primary" underline>成功按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="success" underline>成功按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="warning" underline>警告按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="error" underline>错误按钮</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="info" underline>消息按钮</zmz-link>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
  
```
:::

## 带图标

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-link type="primary" icon='zmz-icon--doubt'>疑问</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="primary" icon='zmz-icon--success'>成功</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="primary" icon='zmz-icon--error'>失败</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="primary"><i class="zmz-icon--warning"></i>  警告</zmz-link>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-link type="error"><i class="zmz-icon--setup"></i> 设置</zmz-link>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-link type="primary" icon='zmz-icon--doubt'>疑问</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="primary" icon='zmz-icon--success'>成功</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="primary" icon='zmz-icon--error'>失败</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="primary"><i class="zmz-icon--warning"></i>  警告</zmz-link>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-link type="error"><i class="zmz-icon--setup"></i> 设置</zmz-link>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## Link 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type   | 类型 | ``String``  | `default`/ `success`/ `error`/ `warning`/ `primary`/`info`|   default  |
| underline | 是否显示下划线 | ``Boolean`` | —  | false |
| disabled | 是否禁用 | ``Boolean`` | —  | false |
| href | 原生跳转href | ``String`` | —  | — |
| target | 原生target | ``String`` | —  | — |
| icon  | 图标，已有的图标库中的图标名或其他字体图标 | ``String`` |  —  |  —  |

## Link 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 内容插槽 |
| icon | 自定义图标插槽 |

## Link 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-link-font-size             |  --zmz-link-font-size                  | 12px     | 盒子宽度      |
| @zmz-link-font-weight       |  --zmz-link-font-weight           | 500       | 盒子高度        |
| @zmz-link-text-color     |  --zmz-link-text-color        |  —         | 默认主题色  |
| @zmz-link-hover-text-color   |  --zmz-link-hover-text-color     | —        | 确认主题色    |
| @zmz-link-disabled-text-color  |  --zmz-link-disabled-text-color     | —        | 默认主题色      |
| @zmz-link-border-color        |  --zmz-link-border-color           | 800       | 默认主题色        |
| @zmz-link-border-width         |  --zmz-link-border-width            | 1px       | 边线宽度        |
| @zmz-link-icon-margin-right         |  --zmz-link-icon-margin-right            | 5px       | icon距离右侧间距        |
| @zmz-link-icon-font-size         |  --zmz-link-icon-font-size            | 16px       | icon大小        |


## 特别提示

::: warning

a标签原生属性都可以直接使用

:::