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
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onChange(data) {
            console.log(data)
        }
    },
    data() {
        return {
            title: 'Inputtag 标签输入框' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            tagList:  ['标签一'],
            tag: ''
        };
    }
}
</script>
# Inputtag 标签输入框
----
可以通过输入生成标签。
## 基础用法
<div class="demo-block">
    <zmz-inputtag v-model="tag" v-model:tag-list="tagList" :max="9" @on-change="onChange" style="width:400px;"></zmz-inputtag>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-inputtag v-model="tag" v-model:tag-list="tagList" :max="9" @on-change="onChange" style="width:400px;"></zmz-inputtag>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tagList:  ['标签一'],
                tag: ''
            };
        }
    }
</script>
```
:::

## 禁用或只读状态
添加属性 ``disabled`` 或 ``readonly``
<div class="demo-block">
    <zmz-space>
        <zmz-inputtag v-model="tag" v-model:tag-list="tagList" disabled size="large" style="width:400px;"></zmz-inputtag>
        <zmz-inputtag v-model="tag" v-model:tag-list="tagList" readonly size="large" style="width:400px;"></zmz-inputtag>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-inputtag v-model="tag" v-model:tag-list="tagList" disabled size="large" style="width:400px;"></zmz-inputtag>
            <zmz-inputtag v-model="tag" v-model:tag-list="tagList" readonly size="large" style="width:400px;"></zmz-inputtag>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tagList:  ['标签一'],
                tag: ''
            };
        }
    }
</script>
```
:::


## 不同尺寸
提供多种尺寸
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="large" style="width:400px;"></zmz-inputtag>
        <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="medium" style="width:400px;"></zmz-inputtag>
        <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="default" style="width:400px;"></zmz-inputtag>
        <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="small" style="width:400px;"></zmz-inputtag>
        <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="mini" style="width:400px;"></zmz-inputtag>
    </zmz-space>
</div>


:::demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="large" style="width:400px;"></zmz-inputtag>
            <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="medium" style="width:400px;"></zmz-inputtag>
            <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="default" style="width:400px;"></zmz-inputtag>
            <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="small" style="width:400px;"></zmz-inputtag>
            <zmz-inputtag v-model="tag" v-model:tag-list="tagList" size="mini" style="width:400px;"></zmz-inputtag>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tagList:  ['标签一'],
                tag: ''
            };
        }
    }
</script>
```
:::


## Inputtag 属性

| 参数		| 说明				| 类型		| 可选值							| 默认值	|
|----------	|--------------		|----------	|--------------------------------	|--------	|
| v-model	| 输入框值			| String	| —								| 0			|
| v-model:tag-list	| 标签组			| Array	| —								| []		|
|size| 尺寸 | String | large / medium / default / small / mini | default |
| name		| input 的 name 属性| String	| —								| —		|
| disabled	| 禁用				| Boolean	| —						| false		|
| readonly	| 只读				| Boolean	| —						| false		|
| autocomplete	| 自动填充				| Boolean	| —						| false		|
| autofocus	| 自动获取焦点			| Boolean	| —						| false		|
| maxleng		| 最大长度			| —		| —								| -1	|

## Inputtag 事件
| 事件名称		| 说明						| 回调参数	|
|-------------	|-----------				|---------	|
| on-change		| 在 Input 发生变化时触发	| function(event)	|
| on-delete		| 在 Input 删除时触发	| function(下标， 删除值)	|
| on-focus		| 在 Input 获取焦点时触发	| function(数组，当前值，event)	|
| on-blur		| 在 Input 失去焦点时触发	| function(数组，当前值，event)	|



## Inputtag 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-inputtag-icon-size            |  --zmz-inputtag-icon-size                 | 14px     | 图标大小      |
| @zmz-inputtag-icon-color         |  --zmz-inputtag-icon-color           | #606266     | 图标颜色        |
| @zmz-inputtag-height    |  --zmz-inputtag-height        | 32px          | 高度      |
| @zmz-inputtag-font-size       |  --zmz-inputtag-font-size          | 0px       | 字体大小        |
| @zmz-inputtag-background-color  |  --zmz-inputtag-background-color    | #fff         | 背景色    |
| @zmz-inputtag-border-color|  --zmz-inputtag-border-color   | #e3e6ef      | 边线颜色|
| @zmz-inputtag-border-hover-color|  --zmz-inputtag-border-hover-color   | #d2d5dc      | 滑过边线颜色|
| @zmz-inputtag-border-active-color|  --zmz-inputtag-border-active-color   | 确认主题颜色      | 激活边线颜色|
| @zmz-inputtag-border-radius|  --zmz-inputtag-border-radius   | 3px      | 圆角|
| @zmz-inputtag-text-color|  --zmz-inputtag-text-color   | 默认主题颜色      | 文字颜色|
| @zmz-inputtag-placeholder-color|  --zmz-inputtag-placeholder-color   | #99a4b2      | 占位符颜色|