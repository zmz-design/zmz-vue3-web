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
                    name: 'describe',
                    content: this.describe
                }
            ]
        };
    },
    data() {
        return {
            title: 'Pagecontent 内容' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe')
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Pagecontent 内容
----
展示详情内容

## 基本用法
<div class="demo-block">
    <zmz-pagecontent title="文章标题" :info="[{ label: '作者:', content: '追梦猪' },{ label: '时间:', content: '2024-10-10' },{ label: '浏览量:', content: '100' }]" subtitle="二级文章标题" content="我是内容"></zmz-pagecontent>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-pagecontent title="文章标题" :info="[{ label: '作者:', content: '追梦猪' },{ label: '时间:', content: '2024-10-10' },{ label: '浏览量:', content: '100' }]" subtitle="二级文章标题">我是内容</zmz-pagecontent>
    </div>
</template>
```
:::

## 插槽使用
<div class="demo-alert demo-block">
    <zmz-pagecontent>
        <template #title>文章标题插槽</template>
        <template #subtitle>二级文章标题插槽</template>
        <template #info>我是信息内容</template>
        我是内容
    </zmz-pagecontent>
</div>

::: demo
```html
<template>
    <zmz-pagecontent>
        <template #title>文章标题插槽</template>
        <template #subtitle>二级文章标题插槽</template>
        <template #info>我是信息内容</template>
        我是内容
    </zmz-pagecontent>
</template>
```
:::




## Pagecontent 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| title      |	自定义标题文字 |	String   |	—    |	—  |
| subtitle   | 自定义二级标题文字 | String  | —  |  100%  |
| background   | 背景色 | String  | —  | — |
| border   | 内容上边线 | String  | —  | — |
| title-style | 标题的自定义样式 | Object | — | — |
| subtitle-style | 二级标题的自定义样式 | Object | — | — |
| info-style | 信息的自定义样式 | Object | — | — |
| content-style | 内容的自定义样式 | Object | — | — |
| info | 信息组 | Array<{ label: String, content: String }> |— | — |
| html | 是否使用html格式 | Boolean |  —  |  —  |
| content | 内容 | String |  —  |  —  |

## Pagecontent 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-back | 点击返回按钮触发 | function()  |

## Pagecontent 插槽
| 名称      | 说明          |
|---------- |-------------- |
| title | 标题插槽 |
| subtitle | 二级标题插槽 |
| default | 默认内容插槽 |
| info | 信息插槽插槽 |

## Pagecontent 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-pagecontent-header-padding              |  --zmz-pagecontent-header-padding                  | 15px     | 头部边距     |
| @zmz-pageheader-title-color      |  --zmz-pageheader-title-color      | #213547         | 标题颜色      |
| @zmz-pageheader-title-font-size       |  --zmz-pageheader-title-font-size          |  18px       | 标题文字大小        |
| @zmz-pageheader-title-font-weight  |  --zmz-pageheader-title-font-weight     | bold          | 标题文字粗细    |
| @zmz-pageheader-subtitle-color      |  --zmz-pageheader-subtitle-color      | #213547         | 二级标题颜色      |
| @zmz-pageheader-subtitle-font-size       |  --zmz-pageheader-subtitle-font-size          |  12px       | 二级标题文字大小        |
| @zmz-pageheader-subtitle-font-weight  |  --zmz-pageheader-subtitle-font-weight     | 400          | 二级标题文字粗细    |
| @zmz-pageheader-subtitle-margin-top  |  --zmz-pageheader-subtitle-margin-top     | 10px          | 二级标题上边距    |
| @zmz-pageheader-info-padding      |  --zmz-pageheader-info-padding     | 15px        | 信息边距      |
| @zmz-pagecontent-info-item     |  --zmz-pagecontent-info-item      | 0 10px       | 每个间距      |
| @zmz-pagecontent-info-item-font-size       |  --zmz-pagecontent-info-item-font-size          |  12px       | 信息文字大小        |
| @zmz-pagecontent-info-item-color  |  --zmz-pagecontent-info-item-color     | #213547          | 信息颜色    |
| @zmz-pagecontent-info-item-label-margin-right  |  --zmz-pagecontent-info-item-label-margin-right     | 5px          | 信息标题右边距    |
| @zmz-pagecontent-content  |  --zmz-pagecontent-content     | 25px 15px          | 内容边距    |