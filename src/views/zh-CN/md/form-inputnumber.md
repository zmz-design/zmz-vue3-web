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
            title: 'Inputnumber 数字输入框' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            input: 1,
            input2: 1
        };
    }
}
</script>
# Inputnumber 数字输入框
----
可以通过输入、鼠标点击或键盘的上下键来改变数值大小。
## 基础用法
<div class="demo-block">
    <zmz-inputnumber v-model="input" :min="0"  :max="9" @on-change="onChange" style="width:200px;"></zmz-inputnumber>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-inputnumber v-model="input" :min="0"  :max="9" style="width:200px;"></zmz-inputnumber>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: 1
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
        <zmz-inputnumber v-model="input" disabled style="width:200px;"></zmz-inputnumber>
        <zmz-inputnumber v-model="input" readonly style="width:200px;"></zmz-inputnumber>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-inputnumber v-model="input" disabled style="width:200px;"></zmz-inputnumber>
            <zmz-inputnumber v-model="input" readonly style="width:200px;"></zmz-inputnumber>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: 1
            };
        }
    }
</script>
```
:::


## 步长
添加属性 ``step``
<div class="demo-block">
    <zmz-inputnumber v-model="input" :step="5" style="width:200px;"></zmz-inputnumber>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-inputnumber v-model="input" :step="5" style="width:200px;"></zmz-inputnumber>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: 1
            };
        }
    }
</script>
```
:::

## 小数点
添加属性 ``accuracy``
<div class="demo-block">
    <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" style="width:200px;"></zmz-inputnumber>
</div>


:::demo
```html
<template>
    <div class="demo-block">
        <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" style="width:200px;"></zmz-inputnumber>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input2: 1
            };
        }
    }
</script>
```
:::

## 按钮位置
添加属性 ``controls-position``
<div class="demo-block">
    <zmz-inputnumber v-model="input2" :step="0.11" controls-position="right" style="width:200px;"></zmz-inputnumber>
</div>


:::demo
```html
<template>
    <div class="demo-block">
        <zmz-inputnumber v-model="input2" :step="0.11" controls-position="right" style="width:200px;"></zmz-inputnumber>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input2: 1
            };
        }
    }
</script>
```
:::

## 不同尺寸
提供多种尺寸
<div class="demo-block">
    <zmz-space>
        <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="large" style="width:150px;"></zmz-inputnumber>
        <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="medium" style="width:150px;"></zmz-inputnumber>
        <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="default" style="width:150px;"></zmz-inputnumber>
        <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="small" style="width:150px;"></zmz-inputnumber>
        <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="mini" style="width:150px;"></zmz-inputnumber>
    </zmz-space>
</div>


:::demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="large" style="width:150px;"></zmz-inputnumber>
            <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="medium" style="width:150px;"></zmz-inputnumber>
            <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="default" style="width:150px;"></zmz-inputnumber>
            <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="small" style="width:150px;"></zmz-inputnumber>
            <zmz-inputnumber v-model="input2" :step="0.11" :accuracy="2" size="mini" style="width:150px;"></zmz-inputnumber>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
</script>
```
:::


## Inputnumber 属性

| 参数		| 说明				| 类型		| 可选值							| 默认值	|
|----------	|--------------		|----------	|--------------------------------	|--------	|
| v-model	| 输入框值			| Number	| —								| 0			|
| type		| 文本显示类型		| String	| text/password/tag					| text		|
| name		| input 的 name 属性| String	| —								| —		|
| disabled	| 禁用				| Boolean	| —						| false		|
| readonly	| 只读				| Boolean	| —						| false		|
| max		| 最大值			| —		| —								| Infinity	|
| min		| 最小值			| —		| —								| -Infinity	|
| accuracy	| 精度值			| Number	| —								| 0			|
| step		| 步长				| Number	| —								| 1			|
| controls	| 是否使用控制器				| Boolean	| —						| false		|
| controls-position		| 控制按钮位置				| String	| right/left								| -		|

## Inputnumber 事件
| 事件名称		| 说明						| 回调参数	|
|-------------	|-----------				|---------	|
| on-change		| 在 Input 发生变化时触发	| value值	|

## Inputnumber 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-inputnumber-icon-size            |  --zmz-inputnumber-icon-size                 | 12px     | 图标大小      |
| @zmz-inputnumber-icon-color         |  --zmz-inputnumber-icon-color           | #606266     | 图标颜色        |
| @zmz-inputnumber-icon-active-color     |  --zmz-inputnumber-icon-active-color      | 确认主题颜色          | 图标激活颜色    |
| @zmz-inputnumber-height    |  --zmz-inputnumber-height        | 32px          | 高度      |
| @zmz-inputnumber-font-size       |  --zmz-inputnumber-font-size          | 0px       | 字体大小        |
| @zmz-inputnumber-background-color  |  --zmz-inputnumber-background-color    | #fff         | 背景色    |
| @zmz-inputnumber-button-background-color  |  --zmz-inputnumber-button-background-color     | #f4f5f9         | 按钮背景色      |
| @zmz-inputnumber-border-color|  --zmz-inputnumber-border-color   | #e3e6ef      | 边线颜色|
| @zmz-inputnumber-border-hover-color|  --zmz-inputnumber-border-hover-color   | #d2d5dc      | 滑过边线颜色|
| @zmz-inputnumber-border-active-color|  --zmz-inputnumber-border-active-color   | 确认主题颜色      | 激活边线颜色|
| @zmz-inputnumber-border-radius|  --zmz-inputnumber-border-radius   | 3px      | 圆角|
| @zmz-inputnumber-text-color|  --zmz-inputnumber-text-color   | 默认主题颜色      | 文字颜色|