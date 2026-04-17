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
            title: 'Anchor 锚点' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            state: true,
            modelValue: 0
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Anchor 锚点
----
生成锚点列表

## 基本用法
<div class="demo-block">
    <zmz-sticky v-model="state" target=".zmz-docs__doc">
        <zmz-anchor scroll-target=".zmz-docs__doc" v-model="modelValue">
            <zmz-anchor-item title="基本用法" :href="encodeURIComponent('基本用法')"></zmz-anchor-item>
            <zmz-anchor-item offset="10" title="吸顶导航" :href="encodeURIComponent('吸顶导航')"></zmz-anchor-item>
            <zmz-anchor-item title="滚动聚焦" :href="encodeURIComponent('滚动聚焦')"></zmz-anchor-item>
            <zmz-anchor-item offset="10" title="Anchor属性" :href="'anchor-' + encodeURIComponent('属性')"></zmz-anchor-item>
            <zmz-anchor-item title="Anchor slot插槽" :href="'anchor-slot' + encodeURIComponent('插槽')"></zmz-anchor-item>
        </zmz-anchor>
    </zmz-sticky>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-sticky v-model="state" target=".zmz-docs__doc">
            <zmz-anchor scroll-target=".zmz-docs__doc" v-model="modelValue">
                <zmz-anchor-item title="基本用法" :href="encodeURIComponent('基本用法')"></zmz-anchor-item>
                <zmz-anchor-item offset="10" title="吸顶导航" :href="encodeURIComponent('吸顶导航')"></zmz-anchor-item>
                <zmz-anchor-item title="滚动聚焦" :href="encodeURIComponent('滚动聚焦')"></zmz-anchor-item>
                <zmz-anchor-item offset="10" title="Anchor属性" :href="'anchor-' + encodeURIComponent('属性')"></zmz-anchor-item>
                <zmz-anchor-item title="Anchor slot插槽" :href="'anchor-slot' + encodeURIComponent('插槽')"></zmz-anchor-item>
            </zmz-anchor>
        </zmz-sticky>
    </div>
</template>
<script>
export default {
    data() {
        return {
            state: true,
            modelValue: 0
        };
    }
};
</script>
```
:::

## Anchor 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| v-model |  默认激活锚点 |    Number / String   |    — | 0 |
| mode |  锚点模式 |    String   |    custom/native | custom |
| scroll-target | 指定滚动容器的标识，滚动容器需要设置position定位用于计算滚动偏移 |    String   | — | window |
| teleport | 是否穿梭 | Boolean | 	true/false | false |
| teleport-dom | 自身是否插入至 位置 元素 | String | 	— | 'body' |

## Anchor 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-change | 锚点选中发生改变 | function(index:下标, top: 当前距离顶部距离)  |

## Anchor slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |

## Anchor.item属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| title |  标题 |    String   |    — | — |
| href |  目标id  |    String    |    —  |    —      |
| offset | 左偏移 |    Number / String   | — | — |

## Anchor.item slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |