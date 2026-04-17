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
        }
    },
    data() {
        return {
            title: 'Textarea 文本域' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            textarea: '',
            textarea2: ''
        };
    }
}
</script>
# Textarea 文本域
----
## 基础用法
<div class="demo-block">
    <zmz-textarea v-model="textarea" style="width: 400px;"></zmz-textarea>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-textarea v-model="textarea" style="width: 400px;"></zmz-textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea: ''
        };
    }
}
</script>
```
:::

## 占位符
``placeholder`` 指定初始输入的提示文案
<div class="demo-block">
    <zmz-textarea v-model="textarea" placeholder="请输入内容" style="width: 400px;"></zmz-textarea>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-textarea v-model="textarea" placeholder="请输入内容" style="width: 400px;"></zmz-textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea: ''
        };
    }
}
</script>
```
:::

## 禁用用法
``disabled`` 或 ``readonly`` 属性禁止或只读使用
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-textarea disabled v-model="textarea" placeholder="请输入内容" style="width: 400px;"></zmz-textarea>
        <zmz-textarea readonly v-model="textarea" placeholder="请输入内容" style="width: 400px;"></zmz-textarea>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-textarea disabled v-model="textarea" placeholder="请输入内容" style="width: 400px;"></zmz-textarea>
            <zmz-textarea readonly v-model="textarea" placeholder="请输入内容" style="width: 400px;"></zmz-textarea>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea: ''
        };
    }
}
</script>
```
:::

## 限制输入字数
``maxlength`` 可以控制用户输入的字符数， ``show-word-limit`` 控制统计数字显示
<div class="demo-block">
    <zmz-textarea v-model="textarea" :maxlength="10" cut show-word-limit placeholder="最多输入10个字符" style="width: 400px;"></zmz-textarea>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-textarea v-model="textarea" :maxlength="10" cut show-word-limit placeholder="最多输入10个字符" style="width: 400px;"></zmz-textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea: ''
        };
    }
}
</script>
```
:::


## 超出字符
添加``cut="false"`` 允许超出规定范围
<div class="demo-block">
    <zmz-textarea v-model="textarea2" :maxlength="10" show-word-limit placeholder="允许超出规定范围" style="width: 400px;"></zmz-textarea>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-textarea v-model="textarea2" :maxlength="10" show-word-limit placeholder="允许超出规定范围" style="width: 400px;"></zmz-textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea2: ''
        };
    }
}
</script>
```
:::

## 自定义提示
自定义超出提示
<div class="demo-block">
    <zmz-textarea v-model="textarea2" :maxlength="10" show-word-limit  placeholder="最多输入10个字符" style="width: 400px;">
        <template #count="item">
            还可以输入 {{ item.maxCount - item.count }} 个字
        </template>
    </zmz-textarea>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-textarea v-model="textarea2" :maxlength="10" show-word-limit  placeholder="最多输入10个字符" style="width: 400px;">
            <template #count="item">
                还可以输入 {{ item.maxCount - item.count }} 个字
            </template>
        </zmz-textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea2: ''
        };
    }
}
</script>
```
:::

## 列高列宽
通过 ```rows```, ```cols``` 属性指定```textarea```的高度宽度
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-textarea v-model="textarea" :maxlength="10" :cols="100" :rows="1" placeholder="最多输入10个字符" cut></zmz-textarea>
        <zmz-textarea v-model="textarea" :maxlength="10" :cols="50" :rows="6" placeholder="最多输入10个字符" cut></zmz-textarea>
    </zmz-space>
</div>

:::demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-textarea v-model="textarea" :maxlength="10" :cols="100" :rows="1" placeholder="最多输入10个字符" cut></zmz-textarea>
            <zmz-textarea v-model="textarea" :maxlength="10" :cols="50" :rows="6" placeholder="最多输入10个字符" cut></zmz-textarea>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea: ''
        };
    }
}
</script>
```
:::

## Textarea 属性

| 参数			| 说明						| 类型			| 可选值							| 默认值	|
|----------		|--------------				|----------		|--------------------------------	|--------	|
| rows			| 列高						| Number		| —								| 4			|
| cols			| 列宽						| Number		| —								| —			|
| maxlength	    | 最大长度限制，-1为无限不受cut属性限制 | Number						| —									| -1		|
| minlength	    | 最小长度限制              | Number						| —								|  —		|
| disabled		| 禁用						| Boolean		| —						| false		|
| readonly		| 只读						| Boolean		| —						| false		|
| cut			| 超出字符是否裁剪			| Boolean		| —							| true		|
| placeholder	| 输入时需要显示的提示文案	| String		| —								| 请输入内容|
| resize		| 是否可以缩放				| Boolean		|—							| true		|
| autofocus		| 是否自动获取焦点			| Boolean		| —							| false		|
| name			| 原生name属性				| String		| —								| —		|
| dirname		| 原生dirname属性				| String		| —								| —		|
| wrap			| 原生wrap属性				| String		| soft/ hard							| —		|
| show-word-limit| 显示统计数字			| Boolean		|—							| false		|



## Textarea 方法

| 事件名称	| 说明						| 返回值	|
|----------	|--------------				|----------	|
| on-change	| 在 Textarea 值改变时触发	| value		|

## Textarea 插槽

| 参数名称		| 说明			| 返回值			|
|----------	|--------------					|--------------	|
| count		| 自定义提示插槽 |#count="{status ，count ， maxCount}"	|

## Textarea 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-textarea-min-height          |  --zmz-textarea-min-height           | 32px     | 最小高度        |
| @zmz-textarea-background-color      |  --zmz-textarea-background-color       | #fff          | 背景颜色    |
| @zmz-textarea-padding     |  --zmz-textarea-padding         | 10px          | 内边距      |
| @zmz-textarea-font-size       |  --zmz-textarea-font-size          | 12px       | 字体大小        |
| @zmz-textarea-text-color   |  --zmz-textarea-text-color     | 默认主题颜色          | 字体颜色    |
| @zmz-textarea-placeholder-color  |  --zmz-textarea-placeholder-color     | #99a4b2         | 占位符颜色      |
| @zmz-textarea-border-radius|  --zmz-textarea-border-radius   | 3px      | 圆角|
| @zmz-textarea-border-color|  --zmz-textarea-border-color   | #e3e6ef      | 默认边线颜色|
| @zmz-textarea-border-hover-color     |  --zmz-textarea-border-hover-color         | #d2d5dc         | 滑过边线颜色      |
| @zmz-textarea-border-active-color     |  --zmz-textarea-border-active-color         |  确认主题颜色        | 激活边线颜色     |
| @zmz-textarea-count-text-color     |  --zmz-textarea-count-text-color        | 默认主题颜色         | 计数默认颜色      |
| @zmz-textarea-count-font-size     |  --zmz-textarea-count-font-size         | 12px         | 计数字体大小      |
| @zmz-textarea-count-background-color     |  --zmz-textarea-count-background-color         | #fff         | 计数背景颜色      |
| @zmz-textarea-num-text-color     |  --zmz-textarea-num-text-color        | 默认主题颜色         | 数字默认颜色      |
| @zmz-textarea-num-active-text-color     |  --zmz-textarea-num-active-text-color         | 确认主题颜色         | 数字激活颜色      |
| @zmz-textarea-num-error-text-color     |  --zmz-textarea-num-error-text-color         | 错误主题颜色         | 数字错误颜色      |
