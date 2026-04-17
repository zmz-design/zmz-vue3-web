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
            title: 'Shutters 百叶窗' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            loading: false,
            current: -1
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onChange(data) {
            console.log(data)
        }
    }
}
</script>
# Shutters 百叶窗
----
## 基础用法

<div class="demo-block">
    <zmz-shutters :expand-width="300" v-model="current">
        <zmz-shutters-item v-for="item,index in ['black', 'blue', 'green', 'red', 'orange', 'yellow']" :key="index">
            <div style="width: 100%;height: 100%;" :style="{'background': item}"></div>
        </zmz-shutters-item>
    </zmz-shutters>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-shutters :expand-width="300">
            <zmz-shutters-item v-for="item,index in ['black', 'blue', 'green', 'red', 'orange', 'yellow']" :key="index">
                <div style="width: 100%;height: 100%;" :style="{'background': item}"></div>
            </zmz-shutters-item>
        </zmz-shutters>
    </div>
</template>
```
:::

## Shutters 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 百叶窗激活下标 | Number | — | — |
| height | 百叶窗高度 | Number | — | 200 |
| width | 百叶窗宽度 | Number | — | — |
| expand-width | 展开宽度 | Number | — | 0 |

## Shutters 事件

| 方法      | 说明          | 参数  |
|---------- |-------------- |---- |
| on-mouseout | 滑出父级 | function()|
| on-mouseover | 滑入父级 | function()|
| on-item-mouseout | 滑出子集 | function(index)|
| on-item-mouseover | 滑入子集 | function(index)|

## Shutters.item 插槽
| 参数      | 说明          |
|---------- |-------------- |
| - | 默认插槽 |


## Shutters 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-shutters-transition              |  --zmz-shutters-transition                 | all 0.5s     | 动画过度      |