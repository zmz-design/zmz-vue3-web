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
            title: 'Breadcrumb 面包屑' + this.currentConfig('tails'),
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
# Breadcrumb 面包屑
----
用于页面中展示重要的提示信息。

### 基本用法
网站路径基本用法，帮助浏览者告知当前位置
<div class="demo-block">
    <zmz-breadcrumb segmenter="/">
        <zmz-breadcrumb-item>首页</zmz-breadcrumb-item>
        <zmz-breadcrumb-item>内容页</zmz-breadcrumb-item>
        <zmz-breadcrumb-item>详情</zmz-breadcrumb-item>
    </zmz-breadcrumb>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-breadcrumb segmenter="/">
            <zmz-breadcrumb-item>首页</zmz-breadcrumb-item>
            <zmz-breadcrumb-item>内容页</zmz-breadcrumb-item>
            <zmz-breadcrumb-item>详情</zmz-breadcrumb-item>
        </zmz-breadcrumb>
    </div>
</template>
```
:::

### icon分割符
表示某种状态时提升可读性。
<div class="demo-block">
    <zmz-breadcrumb segmenter-icon="zmz-icon--arrow-right">
        <zmz-breadcrumb-item><a href="">首页</a></zmz-breadcrumb-item>
        <zmz-breadcrumb-item><a href="">内容页</a></zmz-breadcrumb-item>
        <zmz-breadcrumb-item><a href="">详情</a></zmz-breadcrumb-item>
    </zmz-breadcrumb>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-breadcrumb segmenter-icon="zmz-icon--arrow-right">
            <zmz-breadcrumb-item><a href="">首页</a></zmz-breadcrumb-item>
            <zmz-breadcrumb-item><a href="">内容页</a></zmz-breadcrumb-item>
            <zmz-breadcrumb-item><a href="">详情</a></zmz-breadcrumb-item>
        </zmz-breadcrumb>
    </div>
</template>
```
:::

## Breadcrumb 属性
| 参数      | 说明 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|segmenter | 分割符 |	String    |	—|	斜杠'/' |
|segmenter-icon |	图标分割符 |	String   |	icon图标 |	— |

## Breadcrumb 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 内容插槽 |

## Breadcrumb 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-breadcrumb-text-size              |  --zmz-breadcrumb-font-size                  | 14px      | 字体大小      |
| @zmz-breadcrumb-text-color          |  --zmz-breadcrumb-text-color           | default颜色       | 字体颜色        |
| @zmz-breadcrumb-icon-size              |  --zmz-breadcrumb-icon-size                  | 14px      | 图标大小      |
| @zmz-breadcrumb-icon-color          |  --zmz-breadcrumb-icon-color           | default颜色       | 图标颜色        |
| @zmz-breadcrumb-icon-margin-right-left     |  --zmz-breadcrumb-icon-margin-right-left        | 5px          | 图标左右间距    |
