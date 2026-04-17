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
    data () {
        return {
            title: 'Slider 滑块' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            valuemin: 0,
            valuemax: 100,
            valuemintwo: 0,
            valuemaxtwo: 100,
            values: 5,
            valuea: [40, 55],
            valueArrs: ''
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onChange (val) {
            console.log(val)
        },
        onChangeRange (val) {
            console.log(val)
        },
        sliderValright(max) {
            this.valuemaxtwo = max
        },
        handleClick(val) {
            this.values = val
        },
        handleClickRange(val) {
            this.valuea = val
        }
    }
}
</script>
# Slider 滑块
----
## 概述
通过拖动滑块在一个固定区间内进行选择
## 基础用法
在拖动滑块时，显示当前值
<div class="demo-block">
    <zmz-button @click="handleClick(50)">等于50</zmz-button>
    <zmz-button style="margin-left:30px" @click="handleClick(10)">等于10</zmz-button>
    <zmz-button style="margin-left:30px" @click="handleClick(60)">等于60</zmz-button>
    <zmz-slider @on-change="onChange" v-model="values"></zmz-slider>
    <div style="margin-top:30px">v-model:{{values}}</div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-button @click="handleClick(50)">等于50</zmz-button>
        <zmz-button @click="handleClick(10)">等于10</zmz-button>
        <zmz-button @click="handleClick(60)">等于60</zmz-button>
        <zmz-slider @on-change="onChange" v-model="values"></zmz-slider>
        <div style="margin-top:30px">v-model:{{values}}</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            values: 5
        }
    },
    methods: {
        onChange (val) {
            console.log(val)
        },
        handleClick(val) {
            this.values = val
        }
    }
}
</script>
```
:::

## 区间用法
添加 ``range`` 属性，进行区间拖动
<div class="demo-block">
    <zmz-button @click="handleClickRange(['10', '40'])">等于['10', '40']</zmz-button>
    <zmz-button style="margin-left:30px" @click="handleClickRange(['40', '60'])">等于['40', '60']</zmz-button>
    <zmz-button style="margin-left:30px" @click="handleClickRange(['50', '30'])">等于['50', '30']</zmz-button>
    <zmz-slider  style="margin-top:30px" @on-change="onChangeRange" v-model="valuea" range></zmz-slider>
    <div style="margin-top:30px">v-model:{{valuea}}</div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-button @click="handleClickRange(['10', '40'])">等于['10', '40']</zmz-button>
        <zmz-button @click="handleClickRange(['40', '60'])">等于['40', '60']</zmz-button>
        <zmz-button @click="handleClickRange(['50', '30'])">等于['50', '30']</zmz-button>
        <zmz-slider  style="margin-top:30px" @on-change="onChangeRange" v-model="valuea" range></zmz-slider>
        <div style="margin-top:30px">v-model:{{valuea}}</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            valuea: [40, 55]
        }
    },
    methods: {
        onChangeRange (val) {
            console.log(val)
        },
        handleClickRange(val) {
            this.valuea = val
        }
    }
}
</script>
```
:::

## 禁用只读
```disabled```属性禁用， ```readonly``` 属性只读
<div class="demo-block">
    <zmz-slider disabled  v-model="values"></zmz-slider>
    <zmz-slider disabled  v-model="valuea" range></zmz-slider>
    <zmz-slider readonly  v-model="values"></zmz-slider>
    <zmz-slider readonly  v-model="valuea" range></zmz-slider>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-slider disabled  v-model="values"></zmz-slider>
        <zmz-slider disabled  v-model="valuea" range></zmz-slider>
        <zmz-slider readonly  v-model="values"></zmz-slider>
        <zmz-slider readonly  v-model="valuea" range></zmz-slider>
    </div>
</template>
<script>
export default {
    data () {
        return {
            values: 5,
            valuea: [40, 55]
        }
    }
}
</script>
```
:::

## 垂直用法
```disabled```属性禁用
<div class="demo-block">
    <zmz-space>
        <zmz-slider vertical height="200" v-model="values"></zmz-slider>
        <zmz-slider vertical style="margin-left: 20px;" height="200" v-model="valuea" range></zmz-slider>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-slider vertical height="200" v-model="values"></zmz-slider>
            <zmz-slider vertical style="margin-left: 20px;" height="200" v-model="valuea" range></zmz-slider>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            values: 5,
            valuea: [40, 55]
        }
    }
}
</script>
```
:::

## 不同尺寸
提供多种尺寸
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-slider v-model="values" size="large"></zmz-slider>
        <zmz-slider v-model="values" size="medium"></zmz-slider>
        <zmz-slider v-model="values" size="default"></zmz-slider>
        <zmz-slider v-model="values" size="small"></zmz-slider>
        <zmz-slider v-model="values" size="mini"></zmz-slider>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-slider v-model="values" size="large"></zmz-slider>
            <zmz-slider v-model="values" size="medium"></zmz-slider>
            <zmz-slider v-model="values" size="default"></zmz-slider>
            <zmz-slider v-model="values" size="small"></zmz-slider>
            <zmz-slider v-model="values" size="mini"></zmz-slider>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            values: 5,
        }
    }
}
</script>
```
:::

## Slider 属性

| 参数		| 说明			| 类型					| 可选值									| 默认值	|
|----------	|--------------	|----------				|--------------------------------			|--------	|
| v-model	| 默认值		| Array/Number/String	| —										| —		|
| size		| 尺寸			| String				| large / medium / default / small / mini	| default	|
| min		| 范围最小值	| Number				| —										| —		|
| max		| 范围最大值	| Number				|  —										| —		|
| range		| 区间模式		| Boolean				| —										| false		|
| disabled	| 禁用			| Boolean				| —										| false		|
| readonly	| 只读			| Boolean				| —										| false		|
| vertical    | 是否竖向拖拽           | Boolean                | —                                        | false        |

## Slider 方法
| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 动态回调 | Array/Number/String |

## Slider 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-slider-size    |  --zmz-slider-size         | 32px          | 大小      |
| @zmz-slider-border-radius            |  --zmz-slider-border-radius                 | 3px     | 圆角     |
| @zmz-slider-line-background-color     |  --zmz-slider-line-background-color      | #e6e6e9          | 线默认颜色    |
| @zmz-slider-line-bar-background-color         |  --zmz-slider-line-bar-background-color           | 确认主题颜色    | 线激活颜色        |
| @zmz-slider-line-size       |  --zmz-slider-line-size          | 5px       | 线宽或高        |
| @zmz-slider-dot-border-color       |  --zmz-slider-dot-border-color          | 确认主题颜色       | 点边线        |
| @zmz-slider-dot-background-color      |  --zmz-slider-dot-background-color          | #fff       | 点背景色        |
