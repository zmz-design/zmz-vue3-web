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
            title: 'Collapse 折叠面板' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            collapse: 1,
            collapsearr: [1, 3]
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
}
</script>
# Collapse 折叠面板
----
多面板列表

## 基础用法
展开多个面板

<div class="demo-block">
    <zmz-collapse v-model="collapsearr" @on-change="onChange">
        <zmz-collapse-item :title="'折叠面板'+ item" v-for="item in 5" :key="item" :name="item">
            折叠面板内容{{item}}
        </zmz-collapse-item>
    </zmz-collapse>
</div>

::: demo
```html
<template>
    <zmz-collapse v-model="collapse">
        <zmz-collapse-item :title="'折叠面板'+ item" v-for="item in 5" :key="item" :name="item">
            折叠面板内容{{item}}
        </zmz-collapse-item>
    </zmz-collapse>
</template>
<script>
export default {
    data() {
        return {
            collapse: [1, 3]
        };
    }
}
</script>
```
:::

## 手风琴
只展开一条

<div class="demo-block">
    <zmz-collapse v-model="collapse" accordion @on-change="onChange">
        <zmz-collapse-item :title="'折叠面板'+ item" v-for="item in 5" :key="item" :name="item" :disabled="item == 2">
        折叠面板内容{{item}}
        </zmz-collapse-item>
    </zmz-collapse>
</div>

::: demo
```html
<template>
    <zmz-collapse v-model="collapse" accordion>
        <zmz-collapse-item :title="'折叠面板'+ item" v-for="item in 5" :key="item" :name="item">
        折叠面板内容{{item}}
        </zmz-collapse-item>
    </zmz-collapse>
</template>
<script>
export default {
    data() {
        return {
            collapse: 1
        };
    }
}
</script>
```
:::

## Collapse 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 手风琴模式string/number, 默认Array | ``Array``、``String``、``Number`` | — |  — |
| accordion | 手风琴模式 | ``Boolean`` | — | false |
| border | 是否显示边线 | ``Boolean`` | — | false |

## Collapse.item 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | ``String`` | — |  — |
| name | 唯一标识 | ``String``、``Number`` | — | — |
| disabled | 是否禁用 | ``Boolean`` | — | false |

## Collapse 方法
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
| on-change | 当数据发生改变时触发 | function(value) |

## Collapse 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 默认插槽 |

## Collapse.item 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 内容插槽 |
| title | 标题插槽 |

## Collapse 样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-collapse-border-color              |  --zmz-collapse-border-color                  | #DCDFE6      | 边线颜色     |
| @zmz-collapse-border-width          |  --zmz-collapse-border-width           | 1px      | 边线大小        |
| @zmz-collapse-border-style      |  --zmz-collapse-border-style        | solid          | 边线样式    |
| @zmz-collapse-item-disabled-color      |  --zmz-collapse-item-disabled-color      | #3f536e          | 禁用颜色      |
| @zmz-collapse-item-disabled-opacity       |  --zmz-collapse-item-disabled-opacity          | 0.5       | 禁用透明        |
| @zmz-collapse-item-disabled-cursor   |  --zmz-collapse-item-disabled-cursor      | no-drop          | 禁用鼠标样式    |
| @zmz-collapse-item-title-height  |  --zmz-collapse-item-title-height    | 48px          | 标题高度      |
| @zmz-collapse-item-title-font-size      |  --zmz-collapse-item-title-font-size       | 14px          | 标题大小  |
| @zmz-collapse-item-title-color|  --zmz-collapse-item-title-color  | #3f536e      | 标题颜色|
| @zmz-collapse-item-title-padding|  --zmz-collapse-item-title-padding  | 0 15px      | 标题边距|
| @zmz-collapse-item-icon-font-size      |  --zmz-collapse-item-icon-font-size         | 12px         | 图标大小      |
| @zmz-collapse-item-icon-margin-left      |  --zmz-collapse-item-icon-margin-left         | auto         | 图标左距离      |
| @zmz-collapse-item-icon-margin-right       |  --zmz-collapse-item-icon-margin-right         | 10px       | 图标右距离        |
| @zmz-collapse-item-icon-transition   |  --zmz-collapse-item-icon-transition     | all 0.2s          | 图标过度    |
| @zmz-collapse-item-content-padding     |  --zmz-collapse-item-content-padding        | 0 0 20px 0       | 内容边距|
| @zmz-collapse-item-content-font-size     |  --zmz-collapse-item-content-font-size        | 12px       | 内容大小|
| @zmz-collapse-item-content-color     |  --zmz-collapse-item-content-color       | #7c838a       | 内容颜色|
