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
            title: 'Message 消息全局提示' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        } 
    },
    methods: {
        defaults () {
            this.$message.default('默认');
        },
        primary () {
            this.$message.primary('确认');
        },
        success () {
            this.$message.success('成功');
        },
        warning () {
            this.$message.warning('警告');
        },
        error () {
            this.$message.error('失败');
        },
        info () {
            this.$message.info('信息');
        },
        defaults1 () {
            this.$message.default({
                content: '默认',
                background: true
            });
        },
        primary1 () {
            this.$message.primary({
                content: '确认',
                background: true
            });
        },
        success1 () {
            this.$message.success({
                content: '成功',
                background: true
            });
        },
        warning1 () {
            this.$message.warning({
                content: '警告',
                background: true
            });
        },
        error1 () {
            this.$message.error({
                content: '失败',
                background: true
            });
        },
        info1 () {
            this.$message.info({
                content: '信息',
                background: true
            });
        },
        currentConfig(data){
          return this.$setting.currentConfig[data];
        }
    }
  }
</script>
# Message 消息全局提示
----
## 概述
用于消息的提示返回给视图页面提供给用户通知
## 基础用法
<div class="demo-block">
    <zmz-space>
        <zmz-button @click="defaults">默认</zmz-button>
        <zmz-button @click="primary">确认</zmz-button>
        <zmz-button @click="success">成功</zmz-button>
        <zmz-button @click="warning">警告</zmz-button>
        <zmz-button @click="error">失败</zmz-button>
        <zmz-button @click="info">信息</zmz-button>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-button @click="defaults">默认</zmz-button>
            <zmz-button @click="primary">确认</zmz-button>
            <zmz-button @click="success">成功</zmz-button>
            <zmz-button @click="warning">警告</zmz-button>
            <zmz-button @click="error">失败</zmz-button>
            <zmz-button @click="info">信息</zmz-button>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        defaults () {
            this.$message.default('确认');
        },
        primary () {
            this.$message.primary('确认');
        },
        success () {
            this.$message.success('成功');
        },
        warning () {
            this.$message.warning('警告');
        },
        error () {
            this.$message.error('失败');
        },
        info () {
            this.$message.info('信息');
        },
    }
}
</script>
```
:::

## 背景用法
<div class="demo-block">
    <zmz-space>
        <zmz-button @click="defaults1">默认</zmz-button>
        <zmz-button @click="primary1">确认</zmz-button>
        <zmz-button @click="success1">成功</zmz-button>
        <zmz-button @click="warning1">警告</zmz-button>
        <zmz-button @click="error1">失败</zmz-button>
        <zmz-button @click="info1">信息</zmz-button>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-button @click="defaults1">默认</zmz-button>
            <zmz-button @click="primary1">确认</zmz-button>
            <zmz-button @click="success1">成功</zmz-button>
            <zmz-button @click="warning1">警告</zmz-button>
            <zmz-button @click="error1">失败</zmz-button>
            <zmz-button @click="info1">信息</zmz-button>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        defaults () {
            this.$message.default({
                content: '默认',
                background: true
            });
        },
        primary () {
            this.$message.primary({
                content: '成功',
                background: true
            });
        },
        success () {
            this.$message.success({
                content: '成功',
                background: true
            });
        },
        warning () {
            this.$message.warning({
                content: '警告',
                background: true
            });
        },
        error () {
            this.$message.error({
                content: '失败',
                background: true
            });
        },
        info () {
            this.$message.info({
                content: '信息',
                background: true
            });
        },
    }
}
</script>
```
:::


## Message 属性

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| content | 内容 | ``String`` / dom |   —   | — |
| type | 主题 | ``String`` | 	success/warning/primary/info/error/default | default |
| icon | 自定义图标 | ``String`` | — | — |
| id | 弹窗唯一id | ``String`` | — | 'zmz-message-' + 时间戳 |
| html | 是否使用html格式 | ``Boolean`` | 	— | false |
| message-custom-class | 自定义类名 | ``String``/``Array`` | 		— | 	— |
| duration | 关闭时间, 毫秒。为 0 则不会自动关闭 | ``Number`` | 		— | 	3000 |
| show-close-button | 是否显示关闭按钮 | ``Boolean`` | 		— | 	false |
| background | 是否显示背景色 | ``Boolean`` | 		— | 	false |
| center | 文字是否居中 | ``Boolean`` | 		— | 	false |
| on-close | 关闭时的回调函数, 参数为被关闭的 message 实例 | ``Function`` | 		— | 	—  |
| offset | 距离窗口顶部的偏移量 | ``Number`` | 		— | 	15 |
| auto-closed | 自动关闭 | ``Boolean`` | 		— | 	true |

## Message 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-message-padding             |  --zmz-message-padding                  | 12px 16px      | 内边距      |
| @zmz-message-border-radius       |  --zmz-message-border-radius           | 16px       | 圆角        |
| @zmz-message-border-color       |  --zmz-message-border-color           | 强边框       | 边线        |
| @zmz-message-background-color   |  --zmz-message-background-color      | 12px 16px          | 背景颜色    |
| @zmz-message-text-color      |  --zmz-message-text-color         |  消息主题颜色          | 文字颜色  |
| @zmz-message-icon-color  |  --zmz-message-icon-color     | 消息主题颜色          | 图标颜色      |
| @zmz-message-icon-size        |  --zmz-message-icon-size           | 18px       | 图标大小        |
| @zmz-message-close-color      |  --zmz-message-close-color        | 消息主题颜色          | 关闭颜色    |
| @zmz-message-close-font-size      |  --zmz-message-close-font-size         | 12px         | 关闭按钮字体大小      |
| @zmz-message-box-shadow      |  --zmz-message-box-shadow         | 0 1px 6px rgba(0, 0, 0, .2)         | 消息阴影      |


## 特别提示

::: warning

zmz-model 可以进行Attributes 继承

:::