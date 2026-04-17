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
            title: 'Empty 空状态' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe')
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        hello() {
            alert('Hello World!');
        }
    }
};
</script>
# Empty 空状态
----
请求数据，为空的时候占位

## 基本用法

<div class="demo-block">
    <zmz-empty title="暂无数据"></zmz-empty>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-empty title="暂无数据"></zmz-empty>
    </div>
</template>
```
:::

## 自定义图片
``icon``为图片``png|jpg|jpeg|gif|svg``后缀自动切换显示
<div class="demo-block">
    <zmz-empty icon="https://zmz-vue3-web.zhuimengzhu.com/img/logo.png" title="暂无数据"></zmz-empty>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-empty icon="https://zmz-vue3-web.zhuimengzhu.com/img/logo.png" title="暂无数据"></zmz-empty>
    </div>
</template>
```
:::


## 自定义大小
使用```icon-size```设置icon或图片的大小
<div class="demo-block">
    <zmz-empty icon-size="60px" title="暂无数据"></zmz-empty>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-empty icon-size="60px" title="暂无数据"></zmz-empty>
    </div>
</template>
```
:::

## 自定义图片颜色
使用```icon-color```设置icon的大小
<div class="demo-block">
    <zmz-empty icon-size="60px" icon-color="#f00" title="暂无数据"></zmz-empty>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-empty icon-size="60px" icon-color="#f00" title="暂无数据"></zmz-empty>
    </div>
</template>
```
:::

## 自定义内容
可以通过```icon```设置对应的icon类名，内置为```zmz-icon--```请遵循格式设置,也可以通过插槽来自定义相关内容
<div class="demo-block">
    <zmz-empty>
        <template #icon>
            <span style="width:100px;height:100px;display:inline-block;background:#f4f5f9;border-radius:50%"></span>
        </template>
        <template #title>
            暂无数据
        </template>
        <template #describe>
            请浏览其他页面
        </template>
    </zmz-empty>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-empty>
            <template #icon>
                <span style="width:100px;height:100px;display:inline-block;background:#f4f5f9;border-radius:50%"></span>
            </template>
            <template #title>
                暂无数据
            </template>
            <template #describe>
                请浏览其他页面
            </template>
        </zmz-empty>
    </div>
</template>
```
:::

## Empty 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |	标题，必选参数。 |	``String``   |	—           |	暂无数据     |
|icon	      | 图标     |	``String``    |	— |	zmz-icon--empty |
|icon-color |    设置icon自定义颜色，自定义插槽无效  |    ``String``    |    —             |    —      |
|icon-size |    设置icon自定义大小(为图片的时候可使用数组定义宽高)，自定义插槽无效  |    ``String``,``Array``    |    —             |    —      |
|describe |	辅助性文字,可通过默认 slot 传入   |	``String``    |	—             |	—      |

## Empty slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| icon | icon插槽 |
| title | 标题插槽 |
| describe | 描述插槽 |
| default | 自定义底部插槽 |

## Empty 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-empty-padding             |  --zmz-empty-padding                  | 40px 0     | 边距      |
| @zmz-empty-height          |  --zmz-empty-height           | 100%      | 高度        |
| @zmz-empty-icon-size      |  --zmz-empty-icon-size       | 90px          | icon大小    |
| @zmz-empty-icon-color     |  --zmz-empty-icon-color         | #ebedf0          | icon颜色      |
| @zmz-empty-title-font-size       |  --zmz-empty-title-font-size          | 14px       | 标题大小        |
| @zmz-empty-title-color   |  --zmz-empty-title-color     | #3f536e          | 标题颜色    |
| @zmz-empty-title-margin-top  |  --zmz-empty-title-margin-top     | 20px         | 标题上边距      |
| @zmz-empty-describe-font-size      |  --zmz-empty-describe-font-size          | 12px          | 描述大小  |
| @zmz-empty-describe-color|  --zmz-empty-describe-color   | 14px      | 描述颜色|
| @zmz-empty-describe-margin-top     |  --zmz-empty-header-describe-margin-top         | 10px         | 描述上间距      |
| @zmz-empty-custom-margin-top       |  --zmz-empty-custom-margin-top          | 30px       | 自定义上间距        |
