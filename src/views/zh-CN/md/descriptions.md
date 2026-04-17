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
            title: 'Descriptions 描述列表' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description')
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Descriptions 描述列表
----
用于展示多行文本
## 基础使用
<div class="demo-block">
    <zmz-descriptions title="描述列表" operation="操作">
        <zmz-descriptions-item label="用户名">追梦猪</zmz-descriptions-item>
        <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
        <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
        <zmz-descriptions-item label="地址">河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
        <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
    </zmz-descriptions>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-descriptions title="描述列表" operation="操作">
            <zmz-descriptions-item label="用户名">追梦猪</zmz-descriptions-item>
            <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
            <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
            <zmz-descriptions-item label="地址">河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
            <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
        </zmz-descriptions>
    </div>
</template>
```
:::

## 带边框
使用```border```添加线性边框

<div class="demo-block">
    <zmz-descriptions title="描述列表" operation="操作" border>
        <zmz-descriptions-item label="用户名" :span="3">追梦猪</zmz-descriptions-item>
        <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
        <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
        <zmz-descriptions-item label="地址">河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
        <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
    </zmz-descriptions>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-descriptions title="描述列表" operation="操作" border>
            <zmz-descriptions-item label="用户名" :span="3">追梦猪</zmz-descriptions-item>
            <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
            <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
            <zmz-descriptions-item label="地址">河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
            <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
        </zmz-descriptions>
    </div>
</template>
```
:::

## 垂直样式
使用```border```添加线性边框

<div class="demo-block">
    <zmz-descriptions title="垂直列表" operation="操作" mode="vertical" style="margin-bottom: 50px;">
        <zmz-descriptions-item label="用户名">追梦猪</zmz-descriptions-item>
        <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
        <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
        <zmz-descriptions-item label="地址">河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
        <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
    </zmz-descriptions>
    <zmz-descriptions title="垂直带边线列表" operation="操作" mode="vertical" border>
        <zmz-descriptions-item label="用户名">追梦猪</zmz-descriptions-item>
        <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
        <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
        <zmz-descriptions-item label="地址">河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
        <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
    </zmz-descriptions>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-descriptions title="垂直列表" operation="操作" mode="vertical" style="margin-bottom: 50px;">
            <zmz-descriptions-item label="用户名">追梦猪</zmz-descriptions-item>
            <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
            <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
            <zmz-descriptions-item label="地址">河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
            <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
        </zmz-descriptions>
        <zmz-descriptions title="垂直带边线列表" operation="操作" mode="vertical" border>
            <zmz-descriptions-item label="用户名">追梦猪</zmz-descriptions-item>
            <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
            <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
            <zmz-descriptions-item label="地址">河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
            <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
        </zmz-descriptions>
    </div>
</template>
```
:::

## 自定义样式
使用```labelStyle```定义label样式，使用```contentStyle```定义content样式

<div class="demo-block">
    <zmz-descriptions title="描述列表" operation="操作" border :label-style="{color: '#f00', 'width': '100px'}" :content-style="{background: '#9cf7de'}">
        <zmz-descriptions-item label="用户名" :label-style="{color: '#000', 'width': '100px'}" :content-style="{background: '#000', color: '#fff'}">追梦猪</zmz-descriptions-item>
        <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
        <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
        <zmz-descriptions-item label="地址" >河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
        <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
    </zmz-descriptions>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-descriptions title="描述列表" operation="操作" border :label-style="{color: '#f00', 'width': '100px'}" :content-style="{background: '#9cf7de'}">
            <zmz-descriptions-item label="用户名" :label-style="{color: '#000', 'width': '100px'}" :content-style="{background: '#000', color: '#fff'}">追梦猪</zmz-descriptions-item>
            <zmz-descriptions-item label="手机号">10000000000</zmz-descriptions-item>
            <zmz-descriptions-item label="性别" >男</zmz-descriptions-item>
            <zmz-descriptions-item label="地址" >河北省石家庄市桥西区南天门3001号</zmz-descriptions-item>
            <zmz-descriptions-item label="爱好">宅</zmz-descriptions-item>
        </zmz-descriptions>
    </div>
</template>
```
:::

## Descriptions 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| max-count | 一行最大数量 | Number/ String | — | 3 |
| label-style | label的自定义样式 | String | — | — |
| label-class | label自定义类名 | String | — | — |
| content-style | content的自定义样式 | String | — | — |
| content-class | content自定义类名 | String | — | — |
| title | 标题文本 | String | — | — |
| operation | 标题右侧文本 | String | — | — |
| mode | 排列模式 | String | vertical / horizontal | horizontal |
| border | 是否带边框 | Boolean | — | false |

## Descriptions slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| title | 标题插槽 |
| operation | 自定义标题右侧文本插槽 |

## Descriptions.item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | label 标签的文本 | String | — | — |
| span | 列的数量 | Number | — | 1 |
| label-style | label的自定义样式 | String | — | — |
| label-class | label自定义类名 | String | — | — |
| content-style | content的自定义样式 | String | — | — |
| content-class | content自定义类名 | String | — | — |

## Descriptions.item slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| default | 默认内容插槽 |
| label | 自定义标签文本插槽 |

## Descriptions 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-descriptions-title-font-size              |  --zmz-descriptions-title-font-size                  | 18px      | 标题字体大小      |
| @zmz-descriptions-title-color          |  --zmz-descriptions-title-color           | 默认主体颜色       | 标题字体颜色        |
| @zmz-descriptions-operation-font-size              |  --zmz-descriptions-operation-font-size                  | 12px      | 操作字体大小      |
| @zmz-descriptions-operation-color         |  --zmz-descriptions-operation-color          | 默认主体颜色       | 操作字体颜色        |
| @zmz-descriptions-label-font-size              |  --zmz-descriptions-label-font-size                  | 14px      | 标签字体大小      |
| @zmz-descriptions-label-color         |  --zmz-descriptions-label-color          | 默认主体颜色      | 标签字体颜色        |
| @zmz-descriptions-label-background-color         |  --zmz-descriptions-label-background-color          | #fafafa       | 内容字体颜色        |
| @zmz-descriptions-content-font-size              |  --zmz-descriptions-content-font-size                  | 12px      | 内容字体大小      |
| @zmz-descriptions-content-color         |  --zmz-descriptions-content-color          | 默认主体颜色     | 内容字体颜色        |
| @zmz-descriptions-content-background-color         |  --zmz-descriptions-content-background-color          | #fff       | 内容背景颜色        |
| @zmz-descriptions-border-color    |  --zmz-descriptions-border-color       | #ebeef5| 边线颜色    |