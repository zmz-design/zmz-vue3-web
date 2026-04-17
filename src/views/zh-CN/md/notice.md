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
    data () {
        return {
            title: 'Notice 通知' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        } 
    },
    methods: {
        success () {
            this.$notice.success('成功');
        },
        warning () {
            this.$notice.warning('警告');
        },
        error () {
            this.$notice.error('失败');
        },
        primary () {
            this.$notice.primary('主要');
        },
        defaults () {
            this.$notice.default('默认');
        },
        info () {
            this.$notice.info('消息');
        },
        success1 () {
            this.$notice.success({
                content: '成功',
                background: true
            });
        },
        warning1 () {
            this.$notice.warning({
                content: '警告',
                background: true
            });
        },
        error1 () {
            this.$notice.error({
                content: '失败',
                background: true
            });
        },
        primary1 () {
            this.$notice.primary({
                content: '主要',
                background: true
            });
        },
        defaults1 () {
            this.$notice.default({
                content: '默认',
                background: true
            });
        },
        info1 () {
            this.$notice.info({
                content: '消息',
                background: true
            });
        },
        currentConfig(data){
          return this.$setting.currentConfig[data];
        }
    }
  }
</script>
# Notice 通知
----
## 概述
出现在角落的通知
## 基础用法

<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-button @click="success">成功</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="warning">警告</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="error">失败</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="primary">主要</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="defaults">默认</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="info">消息</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button @click="success">成功</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="warning">警告</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="error">失败</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="primary">主要</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="defaults">默认</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="info">消息</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        success () {
            this.$notice.success('成功');
        },
        warning () {
            this.$notice.warning('警告');
        },
        error () {
            this.$notice.error('失败');
        },
        primary () {
            this.$notice.primary('主要');
        },
        defaults () {
            this.$notice.default('默认');
        },
        info () {
            this.$notice.info('消息');
        }
    }
}
</script>
```
:::

## 背景用法

<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-button @click="success1">成功</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="warning1">警告</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="error1">失败</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="primary1">主要</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="defaults1">默认</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="info1">消息</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button @click="success">成功</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="warning">警告</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="error">失败</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="primary">主要</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="defaults">默认</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="info">消息</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        success () {
            this.$notice.success('成功');
        },
        warning () {
            this.$notice.warning('警告');
        },
        error () {
            this.$notice.error('失败');
        },
        primary () {
            this.$notice.primary('主要');
        },
        defaults () {
            this.$notice.default('默认');
        },
        info () {
            this.$notice.info('消息');
        }
    }
}
</script>
```
:::


## Notice 属性

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| title | 标题 | String |   —   | 提示 |
| content | 内容 | String / dom |   —   | — |
| type | 主题 | String | 	success/warning/primary/error/info/default | default |
| icon | 自定义图标 | String | — | — |
| id | 弹窗唯一id | String | — | 'zmz-notice-' + 时间戳 |
| html | 是否使用html格式 | Boolean | 	— | false |
| notice-custom-class | 自定义类名 | String/Array | 		— | 	— |
| duration | 关闭时间, 毫秒。为 0 则不会自动关闭 | Number | 		— | 	3000 |
| show-close-btn | 是否显示关闭按钮 | Boolean | 		— | 	false |
| background | 是否显示背景色 | Boolean | 		— | 	false |
| center | 文字是否居中 | Boolean | 		— | 	false |
| on-close | 关闭时的回调函数, 参数为被关闭的 notice 实例 | Function | 		— | 	—  |
| offset | 距离窗口顶部的偏移量 | Number | 		— | 	15 |
| auto-closed | 自动关闭 | Boolean | 		— | 	true |

## Notice 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-notice-background-color             |  --zmz-notice-background-color                  |  #fff      | 背景颜色      |
| @zmz-notice-border-color       |  --zmz-notice-border-color           | #fff       | 边线颜色        |
| @zmz-notice-padding   |  --zmz-notice-padding      | 14px 26px 14px 13px          | 内边距    |
| @zmz-notice-border-radius     |  --zmz-notice-border-radius        |  3px        | 圆角  |
| @zmz-notice-border-width         |  --zmz-notice-border-width            | 1px      | 边线宽度        |
| @zmz-notice-border-style      |  --zmz-notice-border-style        | solid          | 边线样式    |
| @zmz-notice-box-shadow      |  --zmz-notice-box-shadow         | 0 1px 6px rgba(0, 0, 0, .39)         | 阴影      |
| @zmz-notice-width      |  --zmz-notice-width        | 300px        | 默认宽度      |
| @zmz-notice-icon-size      |  --zmz-notice-icon-size         | 20px         | 图标大小      |
| @zmz-notice-icon-color      |  --zmz-notice-icon-color         | 默认主题颜色        | 图标颜色      |
| @zmz-notice-title-line-height      |  --zmz-notice-title-line-height         | 1        | 标题行高      |
| @zmz-notice-content-line-height      |  --zmz-notice-content-line-height         | 1        | 内容行高      |
| @zmz-notice-title-color      |  --zmz-notice-title-color         | 默认主题颜色        | 标题颜色      |
| @zmz-notice-title-font-size      |  --zmz-notice-title-font-size         | 16px        | 标题大小      |
| @zmz-notice-content-margin-top      |  --zmz-notice-content-margin-top         | 6px        | 内容上边距      |
| @zmz-notice-content-color      |  --zmz-notice-content-color         | 消息主题颜色        | 内容颜色      |
| @zmz-notice-content-font-size      |  --zmz-notice-content-font-size         | 12px        | 内容大小      |
| @zmz-notice-close-color      |  --zmz-notice-close-color         | 消息主题颜色        | 关闭颜色      |
| @zmz-notice-close-font-size      |  --zmz-notice-close-font-size         | 12px        | 关闭按钮大小      |


## 特别提示

::: warning

zmz-model 可以进行Attributes 继承

:::