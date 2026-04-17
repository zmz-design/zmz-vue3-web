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
            title: 'Floatbutton 悬浮按钮' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            show: true
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        handleClick(title) {
            this.$message.success('点击了悬浮按钮:'+ title);
        }
    }
}
</script>
# Floatbutton 悬浮按钮
悬浮按钮一般漂浮在屏幕某个位置，可以点击拖拽或者唤醒菜单

----
## 基础用法
在页面中添加悬浮按钮，并设置悬浮按钮的图标、文字、颜色、位置
<div class="demo-block">
    <zmz-space title="查看右下角">
        <zmz-space-item><zmz-floatbutton></zmz-floatbutton></zmz-space-item>
        <zmz-space-item><zmz-floatbutton type="success"></zmz-floatbutton></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="查看右下角">
            <zmz-space-item><zmz-floatbutton></zmz-floatbutton></zmz-space-item>
            <zmz-space-item><zmz-floatbutton type="success"></zmz-floatbutton></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 按钮组
以按钮组的方式出现，常用于多项类似操作。
``group``属性进行组菜单的标签显示
<div class="demo-block">
    <zmz-space title="查看右下角">
        <zmz-space-item>
            <zmz-floatbutton group drag>
                <zmz-floatbutton-item @click="handleClick('上')">上</zmz-floatbutton-item>
                <zmz-floatbutton-item @click="handleClick('中')">中</zmz-floatbutton-item>
                <zmz-floatbutton-item @click="handleClick('下')">下</zmz-floatbutton-item>
            </zmz-floatbutton>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="查看右下角">
            <zmz-space-item>
                <zmz-floatbutton group drag>
                    <zmz-floatbutton-item @click="handleClick('上')">上</zmz-floatbutton-item>
                    <zmz-floatbutton-item @click="handleClick('中')">中</zmz-floatbutton-item>
                    <zmz-floatbutton-item @click="handleClick('下')">下</zmz-floatbutton-item>
                </zmz-floatbutton>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    methods: {
        handleClick(title) {
            this.$message.success('点击了悬浮按钮:'+ title);
        }
    }
}
</script>
```
:::

## 展开菜单
悬浮按钮点击展开，再次点击关闭
<div class="demo-block">
    <zmz-space title="查看右下角">
        <zmz-space-item>
        {{show}}
            <zmz-floatbutton drag v-model="show">
                <zmz-floatbutton-item @click="handleClick('上')">上</zmz-floatbutton-item>
                <zmz-floatbutton-item @click="handleClick('中')">中</zmz-floatbutton-item>
                <zmz-floatbutton-item @click="handleClick('下')">下</zmz-floatbutton-item>
            </zmz-floatbutton>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="查看右下角">
            <zmz-space-item>
                <zmz-floatbutton>
                    <zmz-floatbutton-item @click="handleClick('上')">上</zmz-floatbutton-item>
                    <zmz-floatbutton-item @click="handleClick('中')">中</zmz-floatbutton-item>
                    <zmz-floatbutton-item @click="handleClick('下')">下</zmz-floatbutton-item>
                </zmz-floatbutton>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    methods: {
        handleClick(title) {
            this.$message.success('点击了悬浮按钮:'+ title);
        }
    }
}
</script>
```
:::

## Floatbutton 属性
| 参数  | 说明  | 类型  | 可选值   | 默认值 |
|---------- |-------- |---------- |-------------  |-------- |
| adsorption   | 是否吸附 | Boolean  | —  |  false  |
| type   | 类型 | String  | default / info / success / error / warning / primary |   default  |
| group   | 开启组 | Boolean  | — | false |
| drag   | 是否拖拽 | Boolean  | — | false |
| shape  | 形状  | String | circle / square | circle |
| disabled  | 是否禁用  | Boolean | — | false |
| offset  | 按钮偏移  | String/Number | — | 20 |


## Floatbutton 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 展开组插槽 |
| group | 组插槽 |
| button | 点击按钮插槽 |

## Floatbutton 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-floatbutton-icon-size              |  --zmz-floatbutton-icon-size                  | 14px      | 字体大小      |
| @zmz-floatbutton-height          |  --zmz-floatbutton-height           | 40px       | 高度        |
| @zmz-floatbutton-width              |  --zmz-floatbutton-width                  | 40px      | 宽度      |
| @zmz-floatbutton-text-color     |  --zmz-floatbutton-text-color        | 默认主题颜色          | 文字颜色    |
| @zmz-floatbutton-border-color     |  --zmz-floatbutton-border-color        | 默认主题颜色透明度0.3          | 边线颜色    |
| @zmz-floatbutton-background-color     |  --zmz-floatbutton-background-color        | #fff          | 背景颜色    |