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
        onChange(val) {
            console.log(val)
        }
    },
    data() {
        return {
            title: 'Colorpicker 颜色选择器' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            color: '#2d8ff4'
        };
    }
}
</script>
# Colorpicker 颜色选择器
----
## 基础用法
用于颜色选择，支持多种格式。
<div class="demo-block">
    <zmz-colorpicker v-model="color"></zmz-colorpicker>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-colorpicker v-model="color"></zmz-colorpicker>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color: '#2d8ff4'
        };
    }
}
</script>
```
:::

## 禁用只读状态
添加属性 ``disabled``或``readonly`` 禁用或只读
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-colorpicker v-model="color" disabled></zmz-colorpicker></zmz-space-item>
        <zmz-space-item><zmz-colorpicker v-model="color" readonly :readonlyPrompt="true"></zmz-colorpicker></zmz-space-item>
        <zmz-space-item><zmz-colorpicker v-model="color" readonly>自定义内容</zmz-colorpicker></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-colorpicker v-model="color" disabled></zmz-colorpicker></zmz-space-item>
            <zmz-space-item><zmz-colorpicker v-model="color" readonly :readonlyPrompt="true"></zmz-colorpicker></zmz-space-item>
            <zmz-space-item><zmz-colorpicker v-model="color" readonly>自定义内容</zmz-colorpicker></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color: '#2d8ff4'
        };
    }
}
</script>
```
:::

## 提示文字
自定义辅助文字
<div class="demo-block">
    <zmz-colorpicker v-model="color" @on-change="onChange" :prompt-text="`当前选中:${color}`" ></zmz-colorpicker>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-colorpicker v-model="color" @on-change="onChange" :prompt-text="`当前选中:${color}`" ></zmz-colorpicker>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color: '#2d8ff4'
        };
    }
}
</script>
```
:::

## 不同尺寸
提供不同的尺寸
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-colorpicker size="large" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
        <zmz-space-item><zmz-colorpicker size="medium" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
        <zmz-space-item><zmz-colorpicker size="default" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
        <zmz-space-item><zmz-colorpicker size="small" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
        <zmz-space-item><zmz-colorpicker size="mini" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-colorpicker size="large" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
            <zmz-space-item><zmz-colorpicker size="medium" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
            <zmz-space-item><zmz-colorpicker size="default" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
            <zmz-space-item><zmz-colorpicker size="small" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
            <zmz-space-item><zmz-colorpicker size="mini" v-model="color" @on-change="onChange"></zmz-colorpicker></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color: '#2d8ff4'
        };
    }
}
</script>
```
:::

## Colorpicker 属性

| 参数| 说明| 类型		| 可选值| 默认值|
|----------|--------------|----------	|--------------------------------	|--------|
| v-model| 绑定显示参数| String	| hex/rgb/rgba/hsl/hsla| hex|
| disabled| 禁用| Boolean	| —| false|
| readonly| 只读| Boolean	| —| false|
| readonly-prompt	| 只读状态下是否启用默认文字| Boolean	| —| false|
| strictly| 是否互联| Boolean	| —| true|
| format| 显示在输入框中的格式		| String	|  hex/rgb/rgba/hsl/hsla			| hex|
| alpha| 是否显示透明度| Boolean	| —| false|
| prompt-text| 提示文字| String	| —| —|
| prompt-text-color	| 提示文字颜色| String	| —| #000|
| preset| 是否显示预设| Boolean	| —| false|
| preset-color| 预设颜色组| Array| —| ['#F44336','#E91E63','#9C27B0','#673AB7',<br/>'#3F51B5','#2196F3','#03A9F4','#00BCD4','#009688','#4CAF50',<br/>'#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800',<br/>'#FF5722','#795548','#9E9E9E','#607D8B']	|
| teleport | 是否穿梭 | Boolean | 	— | false |
| teleport-dom | 自身是否插入至 位置 元素 | String | 	— | body |
| teleport-class | 自定义穿梭类名 | String/Array | 	— | — |
| placement | 下拉显示位置 | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |— |
| arrow | 下拉盒子的角 | Boolean |  —  | true | —  |
| offset | 盒子偏移 | Array | —  |  [0, 10] | —  |
| popper-options | 	popper2.js 的参数 | Array | —  |  [] | 参考 popper.js 文档  |

## Colorpicker 方法

| 事件		| 说明			| 返回值|
|----------	|--------------	|----	|
| on-change	| 绑定显示参数	| value	|
| on-open-before | 打开之前 | — |
| on-open | 打开中 | — |
| on-open-after | 打开之后 | — |
| on-close-before | 关闭之前 | — |
| on-close | 关闭中 | — |
| on-close-after | 关闭之后 | — |

## Colorpicker 插槽
| 名称		| 说明				|
|----------	|--------------		|
| —		| 默认插槽提示文字	|

## Colorpicker 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-colorpicker-height          |  --zmz-colorpicker-height           | 32px     | 最小高度        |
| @zmz-colorpicker-background-color      |  --zmz-colorpicker-background-color       | #fff          | 背景颜色    |
| @zmz-colorpicker-border-color|  --zmz-colorpicker-border-color   | #e3e6ef      | 边线颜色|
| @zmz-colorpicker-border-radius|  --zmz-colorpicker-border-radius   | 3px      | 圆角|
| @zmz-colorpicker-font-size       |  --zmz-colorpicker-font-size          | 12px       | 字体大小        |
| @zmz-colorpicker-text-color   |  --zmz-colorpicker-text-color     | 默认主题颜色          | 文字字体颜色    |
| @zmz-colorpicker-text-font-size  |  --zmz-colorpicker-text-font-size     | 12px         | 文字字体大小      |