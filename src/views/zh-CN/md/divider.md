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
            title: 'Divider 分割线' + this.currentConfig('tails'),
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
# Divider 分割线
----
区域内容分割。

## 基础用法
对文章内容分割。

<div class="demo-block">
    <div>标题：追梦猪写的小说</div>
    <zmz-divider></zmz-divider>
    <div>书名：《我为阵法造轮子》</div>
    <zmz-divider></zmz-divider>
    <div>作者：追梦猪</div>
    <zmz-divider></zmz-divider>
    <div>时间：2022-02-14</div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div>标题：追梦猪写的小说</div>
        <zmz-divider></zmz-divider>
        <div>书名：《我为阵法造轮子》</div>
        <zmz-divider></zmz-divider>
        <div>作者：追梦猪</div>
        <zmz-divider></zmz-divider>
        <div>时间：2022-02-14</div>
    </div>
</template>
  
```
:::

## 设置文案
分割线上自定义内容

<div class="demo-block">
    <div>追梦猪写的小说</div>
    <zmz-divider>书名</zmz-divider>
    <div>《我为阵法造轮子》</div>
    <zmz-divider text-align="left">作者</zmz-divider>
    <div>追梦猪</div>
    <zmz-divider text-align="right">日期</zmz-divider>
    <div>2022-02-14</div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div>追梦猪写的小说</div>
        <zmz-divider>书名</zmz-divider>
        <div>《我为阵法造轮子》</div>
        <zmz-divider text-align="left">作者</zmz-divider>
        <div>追梦猪</div>
        <zmz-divider text-align="right">日期</zmz-divider>
        <div>2022-02-14</div>
    </div>
</template>
  
```
:::

## 垂直分割
对文章内容分割。

<div class="demo-block">
    <span>追梦猪写的小说</span>
    <zmz-divider mode="vertical"></zmz-divider>
    <span>《我为阵法造轮子》</span>
    <zmz-divider mode="vertical"></zmz-divider>
    <span>追梦猪</span>
    <zmz-divider mode="vertical"></zmz-divider>
    <span>2022-02-14</span>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <span>追梦猪写的小说</span>
        <zmz-divider mode="vertical"></zmz-divider>
        <span>《我为阵法造轮子》</span>
        <zmz-divider mode="vertical"></zmz-divider>
        <span>追梦猪</span>
        <zmz-divider mode="vertical"></zmz-divider>
        <span>2022-02-14</span>
    </div>
</template>
  
```
:::


## 设置虚线
添加``dashed``属性设置虚线

<div class="demo-block">
    <div>追梦猪写的小说</div>
    <zmz-divider dashed>书名</zmz-divider>
    <div>《我为阵法造轮子》</div>
    <zmz-divider text-align="left" dashed>作者</zmz-divider>
    <div>追梦猪</div>
    <zmz-divider text-align="right" dashed>日期</zmz-divider>
    <div>2022-02-14</div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div>追梦猪写的小说</div>
        <zmz-divider dashed>书名</zmz-divider>
        <div>《我为阵法造轮子》</div>
        <zmz-divider text-align="left" dashed>作者</zmz-divider>
        <div>追梦猪</div>
        <zmz-divider text-align="right" dashed>日期</zmz-divider>
        <div>2022-02-14</div>
    </div>
</template>
  
```
:::

## 自定义
添加``text-size``属性设置字体大小,添加``text-color``属性设置字体颜色

<div class="demo-block">
    <div>
        <div>追梦猪写的小说</div>
        <zmz-divider dashed text-size="12px" text-color="#2eb671" line-width="5px" line-color="#2eb671">书名</zmz-divider>
        <div>《我为阵法造轮子》</div>
        <zmz-divider text-align="left"  text-size="14px" text-color="#d58d50">作者</zmz-divider>
        <div>追梦猪</div>
        <zmz-divider text-align="right"  text-size="16px" text-color="#f76f6f">日期</zmz-divider>
        <div>2022-02-14</div>
    </div>
    <div style="align-items:center;display:flex;">
        <div>追梦猪写的小说</div>
        <zmz-divider mode="vertical" dashed text-size="12px" text-color="#2eb671" line-color="#2eb671"></zmz-divider>
        <div>《我为阵法造轮子》</div>
        <zmz-divider mode="vertical" text-align="left"  text-size="14px" text-color="#d58d50"></zmz-divider>
        <div>追梦猪</div>
        <zmz-divider mode="vertical" text-align="right"  text-size="16px" text-color="#f76f6f"></zmz-divider>
        <div>2022-02-14</div>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div>
            <div>追梦猪写的小说</div>
            <zmz-divider dashed text-size="12px" text-color="#2eb671" line-width="5px" line-color="#2eb671">书名</zmz-divider>
            <div>《我为阵法造轮子》</div>
            <zmz-divider text-align="left"  text-size="14px" text-color="#d58d50">作者</zmz-divider>
            <div>追梦猪</div>
            <zmz-divider text-align="right"  text-size="16px" text-color="#f76f6f">日期</zmz-divider>
            <div>2022-02-14</div>
        </div>
        <div style="align-items:center;display:flex;">
            <div>追梦猪写的小说</div>
            <zmz-divider mode="vertical" dashed text-size="12px" text-color="#2eb671" line-color="#2eb671"></zmz-divider>
            <div>《我为阵法造轮子》</div>
            <zmz-divider mode="vertical" text-align="left"  text-size="14px" text-color="#d58d50"></zmz-divider>
            <div>追梦猪</div>
            <zmz-divider mode="vertical" text-align="right"  text-size="16px" text-color="#f76f6f"></zmz-divider>
            <div>2022-02-14</div>
        </div>
    </div>
</template>
  
```
:::

## Divider 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| mode | 模式 | String |   horizontal / vertical   | vertical |
| text-align | 文字位置 | String | left / right / center | center |
| dashed | 是否虚线 | Boolean | true / false | false |
| text-size | 文字大小 | String | -| 12px |
| text-color | 文字大小 | String | -| - |
| text-weight | 文字加粗 | String | -| - |
| line-width | 线宽 | String | -| 1px |
| line-color | 线颜色 | String | -| - |
| line-margin | 线外边距 | String | -| 24px |

## Divider 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-divider-text-size             |  --zmz-divider-text-size                  | 12px     | 文字大小      |
| @zmz-divider-text-padding       |  --zmz-divider-text-padding           |  0 20px       | 文字内边距        |
| @zmz-divider-margin     |  --zmz-divider-margin        |  0 24px         | 外边距  |
| @zmz-divider-text-background   |  --zmz-divider-text-background     | #fff        | 文字背景    |
| @zmz-divider-text-color  |  --zmz-divider-text-color     | #515a6e        | 文字颜色      |
| @zmz-divider-line-color         |  --zmz-divider-line-color            | #dcdfe6       | 线颜色        |
| @zmz-divider-line-width         |  --zmz-divider-line-width            | 1px       | 线宽        |
| @zmz-divider-line-style        |  --zmz-divider-line-style            | solid       | 线样式        |
| @zmz-divider-width        |  --zmz-divider-width            |  100%       | 容器宽度        |
