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
            title: 'Grid 宫格' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onChange(index) {
            console.log(index)
        }
    }
}
</script>
# Grid 宫格
----
## 基础用法
宫格组件一般用于同时展示多个同类项目的场景
<div class="demo-block" style="background:#f4f5f9;">
    <zmz-grid border :column="3" align="center" @on-change="onChange">
        <zmz-grid-item v-for="item,index in 3" :key="index" icon="zmz-icon--success" title="格子"></zmz-grid-item>
    </zmz-grid>
</div>

::: demo
```html
<template>
    <div class="demo-block" style="background:#f4f5f9;">
        <zmz-grid border :column="3" align="center" @on-change="onChange">
            <zmz-grid-item v-for="item,index in 2" :key="index" icon="zmz-icon--success" title="格子"></zmz-grid-item>
        </zmz-grid>
    </div>
</template>
```
:::

## 自定义个数
设置```column```属性可以定义每行几个
<div class="demo-block" style="background:#f4f5f9;">
    <zmz-grid :column="3" border>
        <zmz-grid-item v-for="item,index in 5" :key="index">
            <template #icon>
                <span class="zmz-icon--success" style="font-size: 30px;color: #F15C5C;"></span>
            </template>
            <template #title>
                <p style="color:#646566;font-size: 14px;">格子</p>
            </template>
        </zmz-grid-item>
    </zmz-grid>
</div>

::: demo
```html
<template>
    <div class="demo-block" style="background:#f4f5f9;">
        <zmz-grid :column="3" border>
            <zmz-grid-item v-for="item,index in 5" :key="index">
                <template #icon>
                    <span class="zmz-icon--success" style="font-size: 30px;color: #F15C5C;"></span>
                </template>
                <template #title>
                    <p style="color:#646566;font-size: 14px;">格子</p>
                </template>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
```
:::

## 格子间距
设置```gutter```属性定义格子之间的距离
<div class="demo-block" style="background:#f4f5f9;">
    <zmz-grid :column="4" gutter="10px">
        <zmz-grid-item v-for="item,index in 8" :key="index">
            <template #icon>
                <span class="zmz-icon--success" style="font-size: 30px;color: #F15C5C;"></span>
            </template>
            <template #title>
                <p style="color:#646566;font-size: 14px;">格子</p>
            </template>
        </zmz-grid-item>
    </zmz-grid>
</div>

::: demo
```html
<template>
    <div class="demo-block" style="background:#f4f5f9;">
        <zmz-grid :column="4" gutter="10px">
            <zmz-grid-item v-for="item,index in 8" :key="index">
                <template #icon>
                    <span class="zmz-icon--success" style="font-size: 30px;color: #F15C5C;"></span>
                </template>
                <template #title>
                    <p style="color:#646566;font-size: 14px;">格子</p>
                </template>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
```
:::

## Grid 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| column | 宫格的列数 | ``Number``、``String`` | 4 | — |
| gutter | 宫格间隔 | ``String`` |  — | — |
| align | 宫格对齐方式 | ``String`` | ``left``、``center``、``right`` | left |
| border | 是否显示边线 | ``Boolean`` | —  | true |
| square | 是否宽高一致 | ``Boolean`` | —  | true |

## Grid.item 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 文字名称 | ``String``  | — | — |
| icon | 图标名称 | ``String`` |  — | — |
| src | 图片地址 | ``String`` | — | — |

## Grid 方法
| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 点击盒子触发改变 | function(index:下标) |

## Grid 插槽
| 名称      | 说明          |
|---------- |-------------- |
| icon | 图标插槽 |
| title | 标题插槽 |

## Grid 样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-grid-item-border-color              |  --zmz-grid-item-border-color                  | #e8eaec      | 边线颜色      |
| @zmz-grid-item-border-width         |  --zmz-grid-item-border-width           | 1px       | 边线宽度        |
| @zmz-grid-item-border-zindex      |  --zmz-grid-item-border-zindex         | 1          | 层级    |
| @zmz-grid-item-content-background      |  --zmz-grid-item-content-background         | #fff          | 内容背景      |
| @zmz-grid-item-content-padding       |  --zmz-grid-item-content-padding          | 15px       | 内容内边距        |
| @zmz-grid-item-content-icon-padding   |  --zmz-grid-item-content-icon-padding     | 5px 0          | 图标内边距    |
| @zmz-grid-item-content-icon-font-size  |  --zmz-grid-item-content-icon-font-size     | 30px         | 图标大小      |
| @zmz-grid-item-content-icon-color     |  --zmz-grid-item-content-icon-color          | #646566          | 图标颜色  |
| @zmz-grid-item-content-title-padding  |  --zmz-grid-item-content-title-padding   | 0 0 5px      | 标题内边距|
| @zmz-grid-item-content-title-font-size      |  --zmz-grid-item-content-title-font-size         | 14px          | 标题大小      |
| @zmz-grid-item-content-title-color       |  --zmz-grid-item-content-title-color          | #909399       | 标题颜色        |
