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
            title: 'Button 按钮' + this.currentConfig('tails'),
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
# Button 按钮
----
## 基础用法
使用```type```、```plain```、```round```、```text```属性来定义 Button 的样式。

<div class="demo-block">
    <zmz-space title="基本按钮">
        <zmz-space-item><zmz-button>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="info">消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary">确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="success">成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="warning">警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error">错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="圆角按钮">
        <zmz-space-item><zmz-button round>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="info" round>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" round>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="success" round>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="warning" round>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error" round>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="朴素按钮">
        <zmz-space-item><zmz-button plain>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="info" plain>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" plain>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="success" plain>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="warning" plain>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error" plain>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="圆形按钮">
        <zmz-space-item><zmz-button plain circle round>默</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="info" circle plain round>黑</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" plain round circle>确</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="success" circle plain round>成</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="warning" circle round plain>警</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error" circle plain round>错</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="文字按钮">
        <zmz-space-item><zmz-button text>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="info" text>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" text>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="success" text>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="warning" text>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error" text>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="基本按钮">
            <zmz-space-item><zmz-button>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info">消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary">确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success">成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning">警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error">错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="圆角按钮">
            <zmz-space-item><zmz-button round>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info" round>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" round>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success" round>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning" round>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" round>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="朴素按钮">
            <zmz-space-item><zmz-button plain>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info" plain>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" plain>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success" plain>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning" plain>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" plain>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="圆形按钮">
            <zmz-space-item><zmz-button plain circle round>默</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info" circle plain round>黑</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" plain round circle>确</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success" circle plain round>成</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning" circle round plain>警</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" circle plain round>错</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="文字按钮">
            <zmz-space-item><zmz-button text>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info" text>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" text>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success" text>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning" text>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" text>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 文字按钮
没有框框和背景色
<div class="demo-block">
    <zmz-space title="文本按钮">
        <zmz-space-item><zmz-button text>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="info" text>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" text>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="success" text>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="warning" text>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error" text>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="文本按钮背景颜色">
        <zmz-space-item><zmz-button text text-bg>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="info" text text-bg>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" text text-bg>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="success" text text-bg>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="warning" text text-bg>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error" text text-bg>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="文本按钮禁用">
        <zmz-space-item><zmz-button disabled text text-bg>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="info" text text-bg>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="primary" text text-bg>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="success" text text-bg>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="warning" text text-bg>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="error" text text-bg>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="基本文本按钮">
            <zmz-space-item><zmz-button text>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info" text>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" text>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success" text>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning" text>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" text>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="基本文本按钮背景颜色">
            <zmz-space-item><zmz-button text text-bg>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info" text text-bg>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" text text-bg>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success" text text-bg>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning" text text-bg>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" text text-bg>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="基本文本按钮禁用">
            <zmz-space-item><zmz-button disabled text text-bg>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="info" text text-bg>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="primary" text text-bg>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="success" text text-bg>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="warning" text text-bg>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="error" text text-bg>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 链接按钮
没有框框和背景色
<div class="demo-block">
    <zmz-space title="链接按钮">
        <zmz-space-item><zmz-button link>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="info" link>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" link>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="success" link>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="warning" link>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error" link>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="按钮禁用">
        <zmz-space-item><zmz-button disabled link>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="info" link>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="primary" link>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="success" link>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="warning" link>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="error" link>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="基本文本按钮">
            <zmz-space-item><zmz-button text>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info" text>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" text>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success" text>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning" text>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" text>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="基本文本按钮背景颜色">
            <zmz-space-item><zmz-button text text-bg>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info" text text-bg>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" text text-bg>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success" text text-bg>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning" text text-bg>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" text text-bg>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="基本文本按钮禁用">
            <zmz-space-item><zmz-button disabled text text-bg>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="info" text text-bg>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="primary" text text-bg>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="success" text text-bg>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="warning" text text-bg>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="error" text text-bg>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 禁用状态

按钮不可用状态。

<div class="demo-block">
    <zmz-space title="默认按钮">
        <zmz-space-item><zmz-button disabled>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="info">消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="primary">确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="success">成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="warning">警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="error">错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="圆角按钮">
        <zmz-space-item><zmz-button disabled round>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="info" round>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="primary" round>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="success" round>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="warning" round>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="error" round>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="朴素按钮">
        <zmz-space-item><zmz-button disabled plain>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="info" plain>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="primary" plain>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="success" plain>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="warning" plain>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="error" plain>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="圆形朴素">
        <zmz-space-item><zmz-button disabled plain circle round>默</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="info" circle plain round>黑</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="primary" plain round circle>确</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="success" circle plain round>成</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="warning" circle round plain>警</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="error" circle plain round>错</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="文本按钮">
        <zmz-space-item><zmz-button disabled text>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="info" text>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="primary" text>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="success" text>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="warning" text>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="error" text>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space title="链接按钮">
        <zmz-space-item><zmz-button disabled link>默认按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="info" link>消息按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="primary" link>确定按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="success" link>成功按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="warning" link>警告按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button disabled type="error" link>错误按钮</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="默认按钮">
            <zmz-space-item><zmz-button disabled>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="info">消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="primary">确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="success">成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="warning">警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="error">错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="圆角按钮">
            <zmz-space-item><zmz-button disabled round>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="info" round>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="primary" round>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="success" round>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="warning" round>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="error" round>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="朴素按钮">
            <zmz-space-item><zmz-button disabled plain>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="info" plain>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="primary" plain>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="success" plain>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="warning" plain>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="error" plain>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="圆形朴素">
            <zmz-space-item><zmz-button disabled plain circle round>默</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="info" circle plain round>黑</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="primary" plain round circle>确</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="success" circle plain round>成</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="warning" circle round plain>警</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="error" circle plain round>错</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="文本按钮">
            <zmz-space-item><zmz-button disabled text>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="info" text>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="primary" text>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="success" text>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="warning" text>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="error" text>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space title="链接按钮">
            <zmz-space-item><zmz-button disabled link>默认按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="info" link>消息按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="primary" link>确定按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="success" link>成功按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="warning" link>警告按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button disabled type="error" link>错误按钮</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 zmz-vue3-web 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标,也可以自己定义图标的使用。
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-button type="primary" icon='zmz-icon--doubt'>疑问</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" icon='zmz-icon--success'>成功</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" icon='zmz-icon--error'>失败</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary"><i class="zmz-icon--warning"></i>  警告</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error" circle><i class="zmz-icon--setup"></i></zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button type="primary" icon='zmz-icon--doubt'>疑问</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" icon='zmz-icon--success'>成功</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" icon='zmz-icon--error'>失败</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary"><i class="zmz-icon--warning"></i>  警告</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" circle><i class="zmz-icon--setup"></i></zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::


## 自定义标签按钮
您可以自定义元素标签。例如，按钮，div，路由链接。
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-button tag="button">button</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button tag="div">div</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" href="https://www.zhuimengzhu.com" tag="a" target="_blank">a</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button tag="button">button</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button tag="div">div</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary"  tag="a">a</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::


## 按钮组
以按钮组的方式出现，常用于多项类似操作。
``<zmz-button-group></zmz-button-group>``标签进行包裹
<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-button-group>
                <zmz-button tag="button">上一页</zmz-button>
                <zmz-button tag="button">下一页</zmz-button>
            </zmz-button-group>
        </zmz-space-item>
    </zmz-space>
    <zmz-space>
        <zmz-space-item>
            <zmz-button-group>
                <zmz-button tag="button">查看</zmz-button>
                <zmz-button tag="button">添加</zmz-button>
                <zmz-button tag="button">编辑</zmz-button>
                <zmz-button tag="button">删除</zmz-button>
            </zmz-button-group>
        </zmz-space-item>
    </zmz-space>
    <zmz-space>
        <zmz-space-item>
            <zmz-button-group>
                <zmz-button tag="button" type="primary">查看</zmz-button>
                <zmz-button tag="button" type="primary">添加</zmz-button>
                <zmz-button tag="button" type="primary">编辑</zmz-button>
                <zmz-button tag="button" type="primary">删除</zmz-button>
            </zmz-button-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-button-group>
                <zmz-button tag="button" type="success">查看</zmz-button>
                <zmz-button tag="button" type="success">添加</zmz-button>
                <zmz-button tag="button" type="success">编辑</zmz-button>
                <zmz-button tag="button" type="success">删除</zmz-button>
            </zmz-button-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-button-group>
                <zmz-button tag="button" type="error">查看</zmz-button>
                <zmz-button tag="button" type="error">添加</zmz-button>
                <zmz-button tag="button" type="error">编辑</zmz-button>
                <zmz-button tag="button" type="error">删除</zmz-button>
            </zmz-button-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-button-group>
                <zmz-button tag="button" type="warning">查看</zmz-button>
                <zmz-button tag="button" type="warning">添加</zmz-button>
                <zmz-button tag="button" type="warning">编辑</zmz-button>
                <zmz-button tag="button" type="warning">删除</zmz-button>
            </zmz-button-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-button-group>
                <zmz-button tag="button" type="info">查看</zmz-button>
                <zmz-button tag="button" type="info">添加</zmz-button>
                <zmz-button tag="button" type="info">编辑</zmz-button>
                <zmz-button tag="button" type="info">删除</zmz-button>
            </zmz-button-group>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-button-group>
                    <zmz-button tag="button">上一页</zmz-button>
                    <zmz-button tag="button">下一页</zmz-button>
                </zmz-button-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space>
            <zmz-space-item>
                <zmz-button-group>
                    <zmz-button tag="button">查看</zmz-button>
                    <zmz-button tag="button">添加</zmz-button>
                    <zmz-button tag="button">编辑</zmz-button>
                    <zmz-button tag="button">删除</zmz-button>
                </zmz-button-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space>
            <zmz-space-item>
                <zmz-button-group>
                    <zmz-button tag="button" type="primary">查看</zmz-button>
                    <zmz-button tag="button" type="primary">添加</zmz-button>
                    <zmz-button tag="button" type="primary">编辑</zmz-button>
                    <zmz-button tag="button" type="primary">删除</zmz-button>
                </zmz-button-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button-group>
                    <zmz-button tag="button" type="success">查看</zmz-button>
                    <zmz-button tag="button" type="success">添加</zmz-button>
                    <zmz-button tag="button" type="success">编辑</zmz-button>
                    <zmz-button tag="button" type="success">删除</zmz-button>
                </zmz-button-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button-group>
                    <zmz-button tag="button" type="error">查看</zmz-button>
                    <zmz-button tag="button" type="error">添加</zmz-button>
                    <zmz-button tag="button" type="error">编辑</zmz-button>
                    <zmz-button tag="button" type="error">删除</zmz-button>
                </zmz-button-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button-group>
                    <zmz-button tag="button" type="warning">查看</zmz-button>
                    <zmz-button tag="button" type="warning">添加</zmz-button>
                    <zmz-button tag="button" type="warning">编辑</zmz-button>
                    <zmz-button tag="button" type="warning">删除</zmz-button>
                </zmz-button-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button-group>
                    <zmz-button tag="button" type="info">查看</zmz-button>
                    <zmz-button tag="button" type="info">添加</zmz-button>
                    <zmz-button tag="button" type="info">编辑</zmz-button>
                    <zmz-button tag="button" type="info">删除</zmz-button>
                </zmz-button-group>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 加载中
显示加载状态，禁止用户点击
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-button loading>加载中</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="info" loading>加载中</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" loading>加载中</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="success" loading>加载中</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="warning" loading>加载中</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="error" loading>加载中</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button loading>加载中</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="info" loading>加载中</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" loading>加载中</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="success" loading>加载中</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="warning" loading>加载中</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" loading>加载中</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 不同尺寸
Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```large```、```medium```、```small```、```mini```通过设置```size```属性来配置它们。
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-button size="large">超大按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button size="medium">中等按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>默认尺寸</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button size="small">小型按钮</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button size="mini">迷你按钮</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space>
        <zmz-space-item><zmz-button size="large" circle>超</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button size="medium" circle>中</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button circle>默</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button size="small" circle>小</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button size="mini" circle>迷</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button size="large">超大按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button size="medium">中等按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button>默认尺寸</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button size="small">小型按钮</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button size="mini">迷你按钮</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space>
            <zmz-space-item><zmz-button size="large" circle>超</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button size="medium" circle>中</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button circle>默</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button size="small" circle>小</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button size="mini" circle>迷</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## Button 属性
| 参数  | 说明  | 类型  | 可选值   | 默认值 |
|---------- |-------- |---------- |-------------  |-------- |
| size   | 尺寸 | String  | large / default / medium / small / mini  |  default  |
| type   | 类型 | String  | default / info / success / error / warning / primary |   default  |
| plain   | 是否朴素按钮 | Boolean  | — | false |
| disabled  | 是否禁用状态  | Boolean | — | false |
| circle  | 是否圆形按钮  | Boolean | — | false |
| round  | 是否圆角按钮  | Boolean | — | false |
| link  | 是否链接按钮  | Boolean | — | false |
| text  | 是否文字按钮  | Boolean | — | false |
| text-bg  | 是否显示文字按钮背景 | Boolean |  — |  false  |
| icon  | 图标，已有的图标库中的图标名 | String |  —  |  —  |
| long  | 开启长度100% | Boolean |  —  |  —  |
| loading  | 是否加载中状态  | Boolean | — | false |
| loading-icon  | 加载图标，已有的图标库中的图标名 | String |  —  |  zmz-icon--loading  |
| tag  | 自定义标签 | String |  —  | button  |
| native-type  | 原生 type 属性 | String |  —  |  button |

## Button 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 内容插槽 |
| icon | 自定义图标插槽 |
| loading | 自定义加载图标插槽 |

## Button 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-button-text-size              |  --zmz-button-text-size                  | 12px      | 字体大小      |
| @zmz-button-height          |  --zmz-button-height           | 32px       | 高度        |
| @zmz-button-padding              |  --zmz-button-padding                  | 12px      | 内边距      |
| @zmz-button-border-radius          |  --zmz-button-border-radius           | 3px       | 圆角        |
| @zmz-button-text-color     |  --zmz-button-text-color        | 默认主题颜色          | 文字颜色    |
| @zmz-button-text-hover-color     |  --zmz-button-text-hover-color        | 确认主题颜色          | 滑过文字颜色    |
| @zmz-button-text-active-color     |  --zmz-button-text-active-color        | 确认主题颜色透明度0.8          | 激活文字颜色    |
| @zmz-button-border-color     |  --zmz-button-border-color        | 默认主题颜色透明度0.3          | 边线颜色    |
| @zmz-button-border-hover-color     |  --zmz-button-border-hover-color        | 确认主题颜色透明度0.5        | 滑过边线颜色    |
| @zmz-button-border-active-color     |  --zmz-button-border-active-color        | 确认主题颜色透明度0.8          | 激活边线颜色    |
| @zmz-button-background-color     |  --zmz-button-background-color        | #fff          | 背景颜色    |
| @zmz-button-background-hover-color     |  --zmz-button-background-hover-color        | #fff          | 滑过背景颜色    |
| @zmz-button-background-active-color     |  --zmz-button-background-active-color        | #fff          | 激活背景颜色    |

## 特别提示

::: warning

button原生属性都可以直接使用

:::