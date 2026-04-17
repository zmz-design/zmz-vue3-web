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
            title: 'Alert 提示' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            isShow: true
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        onClose() {
            alert('Hello World!');
        }
    }
};
</script>
# Alert 提示
----
用于页面中展示重要的提示信息。

## 基本用法
页面中的非浮层元素，不会自动消失。

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item><zmz-alert type="default" title="默认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="primary" title="确认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="success" title="成功提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="warning" title="警告提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="error" title="错误提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="info" title="消息提示的文案"></zmz-alert></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item><zmz-alert type="default" title="默认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="primary" title="确认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="success" title="成功提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="warning" title="警告提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="error" title="错误提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="info" title="消息提示的文案"></zmz-alert></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 朴素线性
提供两种类型,朴素（plain）和线性（linear）
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item><zmz-alert type="default" effect="plain" title="默认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="primary" effect="plain" title="确认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="success" effect="plain" title="成功提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="warning" effect="plain" title="警告提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="error" effect="plain" title="错误提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="info" effect="plain" title="消息提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="default" effect="linear" title="默认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="primary" effect="linear" title="确认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="success" effect="linear" title="成功提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="warning" effect="linear" title="警告提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="error" effect="linear" title="错误提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="info" effect="linear" title="消息提示的文案"></zmz-alert></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item><zmz-alert type="default" effect="plain" title="默认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="primary" effect="plain" title="确认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="success" effect="plain" title="成功提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="warning" effect="plain" title="警告提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="error" effect="plain" title="错误提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="info" effect="plain" title="消息提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="default" effect="linear" title="默认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="primary" effect="linear" title="确认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="success" effect="linear" title="成功提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="warning" effect="linear" title="警告提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="error" effect="linear" title="错误提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="info" effect="linear" title="消息提示的文案"></zmz-alert></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 带有 icon
表示某种状态时提升可读性。
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item><zmz-alert show-icon type="default" title="默认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert show-icon type="primary" title="确认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert show-icon type="success" title="成功提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert show-icon type="warning" title="警告提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert show-icon type="error" title="错误提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert show-icon type="info" title="消息提示的文案"></zmz-alert></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item><zmz-alert show-icon type="default" title="默认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert show-icon type="primary" title="确认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert show-icon type="success" title="成功提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert show-icon type="warning" title="警告提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert show-icon type="error" title="错误提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert show-icon type="info" title="消息提示的文案"></zmz-alert></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 文字居中
使用 ```center``` 属性让文字水平居中。
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item><zmz-alert center show-icon type="default" title="默认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert center show-icon type="primary" title="确认提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert center show-icon type="success" title="成功提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert center show-icon type="warning" title="警告提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert center show-icon type="error" title="错误提示的文案"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert center show-icon type="info" title="消息提示的文案"></zmz-alert></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item><zmz-alert center show-icon type="default" title="默认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert center show-icon type="primary" title="确认提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert center show-icon type="success" title="成功提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert center show-icon type="warning" title="警告提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert center show-icon type="error" title="错误提示的文案"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert center show-icon type="info" title="消息提示的文案"></zmz-alert></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 自定义关闭按钮
自定义关闭按钮为文字或其他符号。
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item><zmz-alert type="error" title="不可关闭的 alert"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="primary" close-text="知道了" @click="isShow = !isShow" title="自定义关闭的 alert,请点我"></zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="success" :closable="true" v-model:show="isShow" @on-close="onClose" title="设置了回调的 alert"></zmz-alert></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item><zmz-alert type="error" title="不可关闭的 alert"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="primary" close-text="知道了" @click="isShow = !isShow" title="自定义关闭的 alert,请点我"></zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="success" :closable="true" v-model:show="isShow" @on-close="onClose" title="设置了回调的 alert"></zmz-alert></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    methods: {
        data() {
            return {
                isShow: true
            };
        },
        onClose() {
            alert('Hello World!');
        }
    }
};
</script>
```
:::

## 带有 icon 和描述性文字

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item><zmz-alert type="success" title="带辅助性文字介绍">这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……</zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="warning" show-icon title="带有 icon 和辅助性文字介绍" >这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……</zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="warning" show-icon effect="plain" title="带有 icon 和辅助性文字介绍" >这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……</zmz-alert></zmz-space-item>
        <zmz-space-item><zmz-alert type="warning" show-icon effect="linear" title="带有 icon 和辅助性文字介绍" >这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……</zmz-alert></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item><zmz-alert type="success" title="带辅助性文字介绍">这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……</zmz-alert></zmz-space-item>
            <zmz-space-item><zmz-alert type="warning" show-icon title="带有 icon 和辅助性文字介绍" >这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……</zmz-alert></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## Alert 属性
| 参数		| 说明	| 类型		| 可选值	| 默认值	|
|----------	|---------------	|----------	|------------|--------	|
|v-model:show		|是否显示	|``Boolean``	| —	|true		|
|title		|标题		|``String``		|—	|—	|
|type		| 类型		|``String``		|``success``、``warning``、``default``、``error``、``info``、``primary``	|default	|
|description|辅助性文字,可通过默认 slot 传入	|``String``		|—								|—			|
|closable	|是否可关闭		|``Boolean``	|—	| false		|
|center		|是否居中		|``Boolean``	|—	|false		|
|close-text	| 关闭按钮自定义文本|``String``		|—	|—			|
|show-icon	|是否显示图标|``Boolean``	| —	|false		|
|effect		|提供两种类型effect（效果）	朴素（plain）和线性（linear）|``String``| ``plain``、``linear``|—		|

## Alert 方法
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
| on-close |关闭alert时触发的事件| —  |

## Alert 插槽
| 名称      | 说明       |
|------------- |----------- |
| - |描述插槽|
| title |标题插槽|
| icon |图标插槽|
| closebtn |关闭图标插槽|


## Alert 样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-alert-padding              |  --zmz-alert-padding                  | 10px 15px     | 内边距      |
| @zmz-alert-background-color      |  --zmz-alert-background-color         | #fff          | 背景色      |
| @zmz-alert-border-radius          |  --zmz-alert-border-radius           | 3px     | 圆角        |
| @zmz-alert-border-color       |  --zmz-alert-border-color          | 默认主题色     | 边线颜色        |
| @zmz-alert-icon-size      |  --zmz-alert-icon-size         | 16px          | icon大小    |
| @zmz-alert-icon-color      |  --zmz-alert-icon-color         |   默认主题色        | icon颜色      |
| @zmz-alert-title-color   |  --zmz-alert-title-color      | —     | 默认主题色    |
| @zmz-alert-title-font-size       |  --zmz-alert-title-font-size          | 14px       | 标题大小        |
| @zmz-alert-title-font-bold  |  --zmz-alert-title-font-bold     | bold          | 标题加粗      |
| @zmz-alert-describe-color   |  --zmz-alert-describe-color      | —     | 默认主题色    |
| @zmz-alert-describe-font-size      |  --zmz-alert-describe-font-size          | 12px          | 描述大小  |
| @zmz-alert-describe-margin-top|  --zmz-alert-describe-margin-top   | 10px      | 描述上边距|
| @zmz-alert-closebtn-size      |  --zmz-alert-closebtn-size         | 12px          | icon大小    |
| @zmz-alert-closebtn-color      |  --zmz-alert-closebtn-color         | 默认主题色          | icon颜色      |