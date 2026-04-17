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
        onChange(value) {
            console.log(value)
        }
    },
    data() {
        return {
            title: 'Rate 评分' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            rates: 3,
            rates2: 3.6
        };
    }
}
</script>
# Rate 评分
----
对评价等级进行展示
## 基础用法
<div class="demo-block">
    <zmz-rate v-model="rates2" @on-change="onChange" allow-half bottom-color="#f5f5f5" :colors="{1:'#0f0',2:'#000', 3:'#00f', 4:'#ff0', 5: '#f00'}"></zmz-rate>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-rate v-model="rates" allow-half bottom-color="#f5f5f5" :colors="{1:'#0f0',2:'#000', 3:'#00f', 4:'#ff0', 5: '#f00'}"></zmz-rate>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rates: 0
        };
    }
}
</script>
```
:::

## 自定义颜色
添加属性 ``bottom-color``底色 和 ``select-color``选中
<div class="demo-block">
    <zmz-space>
        <zmz-rate class="zmz-mr-20" v-model="rates" bottom-color="#f5f5f5" select-color="#f00"></zmz-rate>
        <zmz-rate class="zmz-mr-20" v-model="rates" bottom-color="#f5f5f5" :colors="['#00f']"></zmz-rate>
        <zmz-rate v-model="rates" bottom-color="#f5f5f5" :colors="{1:'#0f0',2:'#000', 3:'#00f', 4:'#ff0', 5: '#f00'}"></zmz-rate>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-rate class="zmz-mr-20" v-model="rates" bottom-color="#f5f5f5" select-color="#f00"></zmz-rate>
            <zmz-rate class="zmz-mr-20" v-model="rates" bottom-color="#f5f5f5" :colors="['#00f']"></zmz-rate>
            <zmz-rate v-model="rates" bottom-color="#f5f5f5" :colors="{1:'#0f0',2:'#000', 3:'#00f', 4:'#ff0', 5: '#f00'}"></zmz-rate>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rates: 0
        };
    }
}
</script>
```
:::

## 提示文字
添加属性 ``prompt-text``
<div class="demo-block">
    <zmz-space>
        <zmz-rate class="zmz-mr-20" v-model="rates" bottom-color="#f5f5f5" prompt-text-color="#fadb14" :prompt-text="['极差', '失望', '一般', '满意', '惊喜']"></zmz-rate>
        <zmz-rate v-model="rates" bottom-color="#f5f5f5" :colors="{1:'#0f0',2:'#000', 3:'#00f', 4:'#ff0', 5: '#f00'}" scores></zmz-rate>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-rate class="zmz-mr-20" v-model="rates" bottom-color="#f5f5f5" prompt-text-color="#fadb14" :prompt-text="['极差', '失望', '一般', '满意', '惊喜']"></zmz-rate>
            <zmz-rate v-model="rates" bottom-color="#f5f5f5" :colors="{1:'#0f0',2:'#000', 3:'#00f', 4:'#ff0', 5: '#f00'}" scores></zmz-rate>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rates: 0
        };
    }
}
</script>
```
:::

## 只读状态
添加属性 ``readonly``
<div class="demo-block">
    <zmz-rate v-model="rates2" readonly scores></zmz-rate>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-rate v-model="rates" readonly scores></zmz-rate>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rates: 0
        };
    }
}
</script>
```
:::

## 禁用状态
添加属性 ``disabled``
<div class="demo-block">
    <zmz-rate v-model="rates2" disabled scores></zmz-rate>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-rate v-model="rates" disabled scores></zmz-rate>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rates: 0
        };
    }
}
</script>
```
:::

## 半星
可以使用小数来展示半颗星
<div class="demo-block">
    <zmz-rate v-model="rates2" allow-half>{{rates}}</zmz-rate>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-rate v-model="rates" allow-half>{{rates}}</zmz-rate>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rates: 0
        };
    }
}
</script>
```
:::

## 尺寸
提供不同的尺寸
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-rate v-model="rates2" allow-half size="large">{{rates}}</zmz-rate>
        <zmz-rate v-model="rates2" allow-half size="medium">{{rates}}</zmz-rate>
        <zmz-rate v-model="rates2" allow-half size="default">{{rates}}</zmz-rate>
        <zmz-rate v-model="rates2" allow-half size="small">{{rates}}</zmz-rate>
        <zmz-rate v-model="rates2" allow-half size="mini">{{rates}}</zmz-rate>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-rate v-model="rates2" allow-half size="large">{{rates}}</zmz-rate>
            <zmz-rate v-model="rates2" allow-half size="medium">{{rates}}</zmz-rate>
            <zmz-rate v-model="rates2" allow-half size="default">{{rates}}</zmz-rate>
            <zmz-rate v-model="rates2" allow-half size="small">{{rates}}</zmz-rate>
            <zmz-rate v-model="rates2" allow-half size="mini">{{rates}}</zmz-rate>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rates: 0
        };
    }
}
</script>
```
:::

## Rate 属性

| 参数				| 说明			| 类型			| 可选值									| 默认值									|
|----------			|--------------	|----------		|--------------------------------			|--------									|
| v-model			| 绑定显示参数	| Number/String	| —										| 0											|
| size				| 尺寸			| String		| large / medium / default / small / mini	| default									|
| readonly			| 只读			| Boolean		| —								| false										|
| disabled			| 禁用			| Boolean		| —								| false										|
| allowsh-half		| 是否半颗		| Boolean		| —								| false										|
| bottom-color		| 默认底色		| String		| —										| #e8e8e8									|
| select-color		| 默认选中		| String		| —										| #fadb14									|
| prompt-text		| 每颗星提示文字| Array			| —										| ['极差', '失望', '一般', '满意', '惊喜']	|
| prompt-textColor	| 提示文字颜色	| String		| —										| —										|
| colors			| 渐变颜色组	| Array/Object	| —										| []										|
| minThreshold		| 最小阈值		| Number/String	| —										| 2											|
| maxThreshold		| 最大阈值		| Number/String	| —										| 4											|
| maxCount			| 最大个数		| Number/String	| —										| 5											|
| scores			| 是否显示分数	| Boolean		| —								| false										|

## Rate 方法

| 事件      | 说明          | 返回值  |
|---------- |-------------- |---- |
| on-change | 绑定显示参数 | value |

## Rate 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-rate-icon-size    |  --zmz-rate-icon-size         | 32px          | 高度      |
| @zmz-rate-icon-color            |  --zmz-rate-icon-color                 | #e8e8e8     | 图标颜色     |
| @zmz-rate-icon-active-color     |  --zmz-rate-icon-active-color      | #fadb14          | 图标激活颜色    |
| @zmz-rate-text-color         |  --zmz-rate-text-color           | 默认主题颜色    | 文字颜色        |
| @zmz-rate-text-font-size       |  --zmz-rate-text-font-size          | 12px       | 字体大小        |
