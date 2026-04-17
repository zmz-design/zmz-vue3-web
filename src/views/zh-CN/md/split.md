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
    data () {
        return {
            num: 50,
            title: 'Split 面板分割' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        }
    }
}
</script>
# Split 面板分割
----
用于分割展示，可拉伸，可收缩

## 水平分割
左右面板分割
<div class="demo-block" style="height:200px;">
    <zmz-split v-model="num" style="border:1px solid #ccc;">
        <template #left> 
            <div>左</div>
        </template>
        <template #right>
            <div>右</div>
        </template>
    </zmz-split>
</div>

::: demo
```html
<template>
    <div class="demo-block" style="height:200px;">
        <zmz-split v-model="num" style="border:1px solid #ccc;">
            <template #left> 
                <div>左</div>
            </template>
            <template #right>
                <div>右</div>
            </template>
        </zmz-split>
    </div>
</template>
<script>
export default {
    data () {
        return {
            num: 66
        }
    }
}
</script>
```
:::

## 垂直分割
上下面板分割
<div class="demo-block" style="height:200px;">
    <zmz-split v-model="num" mode="vertical" style="border:1px solid #ccc;">
        <template #top> 
            <div>左</div>
        </template>
        <template #bottom>
            <div>右</div>
        </template>
    </zmz-split>
</div>

::: demo
```html
<template>
    <div class="demo-block" style="height:200px;">
        <zmz-split v-model="num" mode="vertical" style="border:1px solid #ccc;">
            <template #top> 
                <div>左</div>
            </template>
            <template #bottom>
                <div>右</div>
            </template>
        </zmz-split>
    </div>
</template>
<script>
export default {
    data () {
        return {
            num: 66
        }
    }
}
</script>
```
:::

## 禁用拖拽
属性``disabled``禁止拖拽
<div class="demo-block" style="height:200px;">
    <zmz-split v-model="num" mode="vertical" disabled style="border:1px solid #ccc;">
        <template #top> 
            <div>左</div>
        </template>
        <template #bottom>
            <div>右</div>
        </template>
    </zmz-split>
</div>

::: demo
```html
<template>
    <div class="demo-block" style="height:200px;">
        <zmz-split v-model="num" mode="vertical" disabled style="border:1px solid #ccc;">
            <template #top> 
                <div>左</div>
            </template>
            <template #bottom>
                <div>右</div>
            </template>
        </zmz-split>
    </div>
</template>
<script>
export default {
    data () {
        return {
            num: 66
        }
    }
}
</script>
```
:::

## 嵌套分割
有定位所有要给指定的高度才可以
<div class="demo-block" style="height:200px;">
    <zmz-split v-model="num" style="border:1px solid #ccc;">
        <template #left> 
            <div style="height:100%;">
                <zmz-split v-model="num" mode="vertical">
                    <template #top> 
                        <div>左</div>
                    </template>
                    <template #bottom>
                        <div>右</div>
                    </template>
                </zmz-split>
            </div>
        </template>
        <template #right>
            <div>右</div>
        </template>
    </zmz-split>
</div>

::: demo
```html
<template>
    <div class="demo-block" style="height:200px;">
        <zmz-split v-model="num" style="border:1px solid #ccc;">
            <template #left> 
                <div style="height:100%;">
                    <zmz-split v-model="num" mode="vertical">
                        <template #top> 
                            <div>左</div>
                        </template>
                        <template #bottom>
                            <div>右</div>
                        </template>
                    </zmz-split>
                </div>
            </template>
            <template #right>
                <div>右</div>
            </template>
        </zmz-split>
    </div>
</template>
<script>
export default {
    data () {
        return {
            num: 66
        }
    }
}
</script>
```
:::

## Split 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |  默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| v-model | 范围值10-90 | Number | — | — |— |
| mode | 模式 | String | horizontal / vertical | — | horizontal |
| min | 最小值 | Number | 0-100 | — | 10 |
| mode | 最大值 | Number | 0-100 | — | 90 |
| disabled | 是否禁用 | Boolean | true/false | — | false |
| show-split-btn | 是否显示分割按钮 | Boolean | true/false | — | true |

## Split 方法
| 事件      | 说明          | 返回值  |
|---------- |-------------- |---- |
| on-drag | 按下拖拽移动事件 | function(action(start,move,end), event) |


## Split slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| top | 上部插槽 |
| bottom | 下部插槽 |
| left | 左部插槽 |
| right | 右部插槽 |
| split | 分割节点插槽 |

## Split 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-split-border-color              |  --zmz-split-border-color                 | #e3e6ef     | 边线颜色      |
| @zmz-split-drag-size    |  --zmz-split-drag-size        | 3px         | 拖拽大小      |