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
            title: 'Space 间距' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            list: ['追', '梦', '猪']
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        add() {
            this.list.push('猪')
        },
        del() {
            this.list.splice(-1)
        }
    }
}
</script>
# Space 间距
----
敏捷开发间距
## 基础使用
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-button>追</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>梦</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>猪</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <zmz-space>
        <zmz-space-item><zmz-button>追</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>梦</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>猪</zmz-button></zmz-space-item>
    </zmz-space>
</template>
```
:::

## 垂直
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item><zmz-button>追</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>梦</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>猪</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <zmz-space>
        <zmz-space-item><zmz-button>追</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>梦</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>猪</zmz-button></zmz-space-item>
    </zmz-space>
</template>
```
:::


## 带标题
<div class="demo-block">
    <zmz-space title="水平标题">
        <zmz-space-item><zmz-button>追</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>梦</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>猪</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space mode="vertical" title="垂直标题">
        <zmz-space-item><zmz-button>追</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>梦</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button>猪</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="水平标题">
            <zmz-space-item><zmz-button>追</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button>梦</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button>猪</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space mode="vertical" title="垂直标题">
            <zmz-space-item><zmz-button>追</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button>梦</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button>猪</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::


## 动态新增删除
<div class="demo-block">
    <div class="demo-block__operate zmz-mb-20">
        <zmz-space>
            <zmz-space-item><zmz-button type="primary" @click="add">新增</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" @click="del">删除</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
    <zmz-space class="zmz-mb-20">
        <zmz-space-item v-for="(item,index) in list" :key="index"><zmz-button>{{ item }}</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space mode="vertical">
        <zmz-space-item v-for="(item,index) in list" :key="index"><zmz-button>{{ item }}</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div class="demo-block__operate zmz-mb-20">
            <zmz-space>
                <zmz-space-item><zmz-button type="primary" @click="add">新增</zmz-button></zmz-space-item>
                <zmz-space-item><zmz-button type="error" @click="del">删除</zmz-button></zmz-space-item>
            </zmz-space>
        </div>
        <zmz-space class="zmz-mb-20">
            <zmz-space-item v-for="(item,index) in list" :key="index"><zmz-button>{{ item }}</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space mode="vertical">
            <zmz-space-item v-for="(item,index) in list" :key="index"><zmz-button>{{ item }}</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: ['追', '梦', '猪']
        }
    },
    methods: {
        add() {
            this.list.push('猪')
        },
        del() {
            this.list.splice(-1)
        }
    }
}
</script>
```
:::

## Space 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | String |   —   | — |
| mode | 模式 | String |   horizontal / vertical   | horizontal |
| padding | 全局内间距会被子集覆盖 | Array | — | [0, 20, 0, 0] / [0, 0, 20, 0] |
| margin | 全局外间距会被子集覆盖 | Array | — |[]|
| interval | 多个space间距 | Boolean | — | true |
| show-first-margin | 是否显示第一个外间距 | Boolean |  — | true |
| show-first-padding | 是否显示第一个内间距 | Boolean |  —  | true |
| show-last-margin | 是否显示最后一个外间距 | Boolean |  —  | true |
| show-last-padding | 是否显示最后一个内间距 | Boolean |  —  | true |
|tag |    自定义标签  |    String    |    —             |    div      |

## Space-item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| padding | 内间距 | Array | — | [] |
| margin | 外间距 | Array | — |[]|

## Space 插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |
| title | 标题插槽 |

## Space 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-space-title-margin-bottom              |  --zmz-space-title-margin-bottom                 | 20px     | 标题边距      |
| @zmz-space-interval-margin-bottom     |  --zmz-space-interval-margin-bottom         | 20px         | 多个Space间距边距      |