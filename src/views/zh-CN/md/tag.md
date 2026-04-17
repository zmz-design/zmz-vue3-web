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
            title: 'Tag 标签' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            dynamicTags: [{
                name: '标签一',
                type: 'default'
            }, {
                name: '标签二',
                type: 'success'
            }, {
                name: '标签三',
                type: 'primary'
            }, {
                name: '标签四',
                type: 'warning'
            }, {
                name: '标签五',
                type: 'error'
            }, {
                name: '标签六',
                type: 'info'
            }]
        };
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Tag 标签
----
## 基础用法
由`type`属性来选择tag的类型，也可以通过`type`属性来自定义背景色。

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-tag>标签一</zmz-tag>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-tag type="primary">标签二</zmz-tag>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-tag type="success">标签三</zmz-tag>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-tag type="warning">标签四</zmz-tag>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-tag type="error">标签五</zmz-tag>
        </zmz-space-item>
        <zmz-space-item>
        <zmz-tag type="info">标签六</zmz-tag>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-tag>标签一</zmz-tag>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tag type="primary">标签二</zmz-tag>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tag type="success">标签三</zmz-tag>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tag type="warning">标签四</zmz-tag>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tag type="error">标签五</zmz-tag>
            </zmz-space-item>
            <zmz-space-item>
            <zmz-tag type="info">标签六</zmz-tag>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 可移除标签
设置```closable```属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，它接受一个Boolean，true 为关闭。
<div class="demo-block">
    <zmz-space>
        <zmz-space-item v-for="(tag,index) in dynamicTags">
        <zmz-tag
            :key="index"
            :closable="true"
            @on-close="handleClose(tag)" :type="tag.type">
        {{tag.name}}
        </zmz-tag>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item v-for="(tag,index) in dynamicTags">
            <zmz-tag
                :key="index"
                :closable="true"
                @on-close="handleClose(tag)" :type="tag.type">
            {{tag.name}}
            </zmz-tag>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dynamicTags: [{
               name: '标签一',
               type: 'default'
            }, {
               name: '标签二',
               type: 'success'
            }, {
               name: '标签三',
               type: 'primary'
            }, {
                name: '标签四',
                type: 'warning'
            }, {
                name: '标签五',
                type: 'error'
            }, {
                name: '标签六',
                type: 'info'
            }]
        };
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        }
    }
}
</script>

```
:::


## 朴素和线性按钮
effect字段提供```plain```, ```linear```属性。
<div class="demo-block">
    <zmz-space title="朴素plain">
        <zmz-space-item v-for="(tag,index) in dynamicTags">
        <zmz-tag
            :key="index"
            :closable="true"
            effect="plain"
            @on-close="handleClose(tag)" :type="tag.type">
        {{tag.name}}
        </zmz-tag>
        </zmz-space-item>
    </zmz-space>
    <zmz-space title="线性linear">
        <zmz-space-item v-for="(tag,index) in dynamicTags">
        <zmz-tag
            :key="index"
            :closable="true"
            effect="linear"
            @on-close="handleClose(tag)" :type="tag.type">
        {{tag.name}}
        </zmz-tag>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="朴素plain">
            <zmz-space-item v-for="(tag,index) in dynamicTags">
            <zmz-tag
                :key="index"
                :closable="true"
                effect="plain"
                @on-close="handleClose(tag)" :type="tag.type">
            {{tag.name}}
            </zmz-tag>
            </zmz-space-item>
        </zmz-space>
        <zmz-space title="线性linear">
            <zmz-space-item v-for="(tag,index) in dynamicTags">
            <zmz-tag
                :key="index"
                :closable="true"
                effect="linear"
                @on-close="handleClose(tag)" :type="tag.type">
            {{tag.name}}
            </zmz-tag>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dynamicTags: [{
               name: '标签一',
               type: 'default'
            }, {
               name: '标签二',
               type: 'success'
            }, {
               name: '标签三',
               type: 'primary'
            }, {
                name: '标签四',
                type: 'warning'
            }, {
                name: '标签五',
                type: 'error'
            }, {
                name: '标签六',
                type: 'info'
            }]
        };
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        }
    }
}
</script>

```
:::


## 自定义
可通过less变量或css变量改变颜色。
<div class="demo-block">
    <zmz-space>
        <zmz-tag 
        :closable="true" 
        style="--zmz-tag-background-color: #ffa2d3;--zmz-tag-border-color: #ffa2d3;--zmz-tag-text-color:#fff;">
        自定义默认
        </zmz-tag>
        <zmz-tag 
        :closable="true" 
        style="--zmz-tag-background-color: #e6fffb;--zmz-tag-border-color: #87e8de;--zmz-tag-text-color:#13c2c2;">
        自定义朴素
        </zmz-tag>
        <zmz-tag 
        :closable="true" 
        style="--zmz-tag-background-color: #fff;--zmz-tag-border-color: #d3adf7;--zmz-tag-text-color:#d3adf7;">
        自定义线性
        </zmz-tag>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-tag 
            :closable="true" 
            style="--zmz-tag-background-color: #ffa2d3;--zmz-tag-border-color: #ffa2d3;--zmz-tag-text-color:#fff;">
            自定义默认
            </zmz-tag>
            <zmz-tag 
            :closable="true" 
            style="--zmz-tag-background-color: #e6fffb;--zmz-tag-border-color: #87e8de;--zmz-tag-text-color:#13c2c2;">
            自定义朴素
            </zmz-tag>
            <zmz-tag 
            :closable="true" 
            style="--zmz-tag-background-color: #fff;--zmz-tag-border-color: #d3adf7;--zmz-tag-text-color:#d3adf7;">
            自定义线性
            </zmz-tag>
        </zmz-space>
    </div>
</template>
```
:::

## 不同尺寸
Tag 组件提供除了默认值以外的二种尺寸，可以在不同场景下选择合适的按钮尺寸。

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-tag type="success" size="large">超大标签</zmz-tag>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-tag type="error" size="medium">中等标签</zmz-tag>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-tag type="warning" size="default">默认标签</zmz-tag>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-tag type="primary" size="small">小型标签</zmz-tag>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-tag type="info" size="mini">迷你标签</zmz-tag>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-tag type="success" size="large">超大标签</zmz-tag>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tag type="error" size="medium">中等标签</zmz-tag>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tag type="warning" size="default">默认标签</zmz-tag>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tag type="primary" size="small">小型标签</zmz-tag>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tag type="info" size="mini">迷你标签</zmz-tag>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## Tag 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 尺寸 | String | large / medium / default / small / mini | default |
| type | 颜色 | String |  default / success / error / warning / primary / info | default |
| effect   | 效果 | String  | plain / linear | — |
| closable | 是否可关闭 | Boolean | — | false |

## Tag 方法

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-close | 点击关闭按钮时触发 | event |

## Tag 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-tag-text-color              |  --zmz-tag-text-color                  | rgb(63 83 110)     | 文字颜色      |
| @zmz-tag-background-color          |  --zmz-tag-background-color           | #fff       | 背景色        |
| @zmz-tag-border-color      |  --zmz-tag-border-color         | rgba(63, 83, 110, 0.1)         | 边线颜色    |
| @zmz-tag-border-radius      |  --zmz-tag-border-radius         | 3px          | 标签圆角大小      |
| @zmz-tag-font-size       |  --zmz-tag-font-size          | 12px       | 标签字体大小        |
| @zmz-tag-size-default   |  --zmz-tag-size-default      | 6px 8px          | 标签大小    |