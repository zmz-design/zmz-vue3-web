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
            title: 'Sticky 吸顶' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            state: false
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Sticky 吸顶
----
使用吸顶使内容固定在屏幕某处

## 基本用法
默认吸顶
<div class="demo-block">
    <div class="zmz-mb-20">
        <zmz-button @click="state = !state">{{state? '关闭吸顶': '开启吸顶'}}</zmz-button>
    </div>
    <zmz-sticky v-model="state" scroll-target=".zmz-docs__doc">
        <div class="demo-col demo-col--odd" style="color:#fff;">楼层1</div>
    </zmz-sticky>
    <div style="height:100px"></div>
    <zmz-sticky v-model="state" :offset-top="100" scroll-target=".zmz-docs__doc">
        <div class="demo-col demo-col--odd" style="color:#fff;">楼层2</div>
    </zmz-sticky>
    <div style="height:100px"></div>
    <zmz-sticky v-model="state" :offset-top="200" scroll-target=".zmz-docs__doc">
        <div class="demo-col demo-col--odd" style="color:#fff;">楼层3</div>
    </zmz-sticky>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div class="zmz-mb-20">
            <zmz-button @click="state = !state">{{state? '关闭吸顶': '开启吸顶'}}</zmz-button>
        </div>
        <zmz-sticky v-model="state" scroll-target=".zmz-docs__doc">
            <div class="demo-col demo-col--odd" style="color:#fff;">楼层1</div>
        </zmz-sticky>
        <div style="height:100px"></div>
        <zmz-sticky v-model="state" :offset-top="100" scroll-target=".zmz-docs__doc">
            <div class="demo-col demo-col--odd" style="color:#fff;">楼层2</div>
        </zmz-sticky>
        <div style="height:100px"></div>
        <zmz-sticky v-model="state" :offset-top="200" scroll-target=".zmz-docs__doc">
            <div class="demo-col demo-col--odd" style="color:#fff;">楼层3</div>
        </zmz-sticky>
    </div>
</template>
<script>
export default {
    data() {
        return {
            state: false
        };
    }
};
</script>
```
:::

## 吸顶方式
使用direction来切换吸顶```top```还是吸底```bottom```。
<div class="demo-block">
    <div class="zmz-mb-20">
        <zmz-button @click="state = !state">{{state? '关闭吸顶': '开启吸顶'}}</zmz-button>
    </div>
    <zmz-sticky v-model="state" :offset-top="150" direction="top" scroll-target=".zmz-docs__doc">
        <div class="demo-col demo-col--odd" style="color:#fff;">吸顶</div>
    </zmz-sticky>
    <div style="height:100px"></div>
    <zmz-sticky v-model="state" :offset-bottom="150" direction="bottom" scroll-target=".zmz-docs__doc">
        <div class="demo-col demo-col--odd" style="color:#fff;">吸底</div>
    </zmz-sticky>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div class="zmz-mb-20">
            <zmz-button @click="state = !state">{{state? '关闭吸顶': '开启吸顶'}}</zmz-button>
        </div>
        <zmz-sticky v-model="state" :offset-top="150" direction="top" scroll-target=".zmz-docs__doc">
            <div class="demo-col demo-col--odd" style="color:#fff;">吸顶</div>
        </zmz-sticky>
        <div style="height:100px"></div>
        <zmz-sticky v-model="state" :offset-bottom="150" direction="bottom" scroll-target=".zmz-docs__doc">
            <div class="demo-col demo-col--odd" style="color:#fff;">吸底</div>
        </zmz-sticky>
    </div>
</template>
<script>
export default {
    data() {
        return {
            state: false
        };
    }
};
</script>
```
:::


## Sticky 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| v-model | 开启状态 | Boolean | — | — | — |
|offset-top      |	距离窗口顶部达到指定偏移量 |	Number   |	—           |	0       |
|offset-bottom      |    距离窗口底部达到指定偏移量 |    Number   |    —           |    0       |
|z-index |  吸顶层级  |    Number    |    —             |    0      |
|direction      |    向上吸顶还是向下吸底 |    String   |    top/bottom | top |
|scroll-target      |    指定滚动容器的标识，滚动容器需要设置position定位用于计算滚动偏移 |    String   |     — | window |


## Sticky 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-change | 固定状态发生变化时触发 | function((true/false), direction)  |

## Sticky slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |