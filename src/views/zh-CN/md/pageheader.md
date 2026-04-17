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
            title: 'Pageheader 页头' + this.currentConfig('tails'),
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
# Pageheader 页头
----
展示引导内容

## 基本用法
单张展示
<div class="demo-block">
    <zmz-pageheader title="文章详情" subtitle="论财富是怎么挣回来的" ></zmz-pageheader>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-pageheader title="文章详情" subtitle="论财富是怎么挣回来的" ></zmz-pageheader>
    </div>
</template>
```
:::

## 插槽使用
<div class="demo-block">
    <zmz-pageheader title="文章详情" subtitle="论财富是怎么挣回来的" >
        <template #icon>
            返回
        </template>
        <template #title>
            自定义标题
        </template>
        <template #subtitle>
            自定义副标题
        </template>
        <template #operation>
            自定义操作
        </template>
    </zmz-pageheader>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-pageheader title="文章详情" subtitle="论财富是怎么挣回来的" >
            <template #icon>
                返回
            </template>
            <template #title>
                自定义标题
            </template>
            <template #subtitle>
                自定义副标题
            </template>
            <template #operation>
                自定义操作
            </template>
        </zmz-pageheader>
    </div>
</template>
```
:::




## Pageheader 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| title      |	自定义标题文字 |	String   |	—    |	—  |
| subtitle   | 自定义二级标题文字 | String  | —  |  — |
| height   | 高度 | String  | —  |  —  |

## Pageheader 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-back | 点击返回按钮触发 | function()  |

## Pageheader 插槽
| 名称      | 说明          |
|---------- |-------------- |
| icon | 返回插槽 |
| title | 标题插槽 |
| subtitle | 二级标题插槽 |
| operation | 右上角插槽 |

## Pageheader 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-pageheader-icon-color              |  --zmz-pageheader-icon-color                  | #213547      | 图标颜色     |
| @zmz-pageheader-icon-size          |  --zmz-pageheader-icon-size          | 18px     | 图标大小        |
| @zmz-pageheader-icon-margin-right      |  --zmz-pageheader-icon-margin-right        | 10px         | 图标右边距    |
| @zmz-pageheader-title-color      |  --zmz-pageheader-title-color      | #213547         | 标题颜色      |
| @zmz-pageheader-title-font-size       |  --zmz-pageheader-title-font-size          |  18px       | 标题文字大小        |
| @zmz-pageheader-title-font-weight  |  --zmz-pageheader-title-font-weight     | bold          | 标题文字粗细    |
| @zmz-pageheader-title-margin-right  |  --zmz-pageheader-title-margin-right     | 10px          | 标题右边距    |
| @zmz-pageheader-subtitle-color      |  --zmz-pageheader-subtitle-color      | #213547         | 二级标题颜色      |
| @zmz-pageheader-subtitle-font-size       |  --zmz-pageheader-subtitle-font-size          |  12px       | 二级标题文字大小        |
| @zmz-pageheader-subtitle-font-weight  |  --zmz-pageheader-subtitle-font-weight     | 400          | 二级标题文字粗细    |
| @zmz-pageheader-subtitle-margin-right  |  --zmz-pageheader-subtitle-margin-right     | 10px          | 二级标题右边距    |