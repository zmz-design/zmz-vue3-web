<script>
export default{
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
            title: 'Tooltip 文字提示' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            disabled: true
        }  
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    },
}
</script>
# Tooltip 文字提示
----
## 概述
模仿标签上的title属性，给用户自定义提示内容
## 基础用法

<div class="demo-block">
    <div style="width:400px;">
        <div style="display:flex;justify-content: center;">
            <zmz-space>
                <zmz-space-item>
                    <zmz-tooltip placement="top-start" content="上左提示内容" >
                        <zmz-button size="default">上左</zmz-button>
                    </zmz-tooltip>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-tooltip placement="top" content="上中提示内容">
                        <zmz-button size="default">上中</zmz-button>
                    </zmz-tooltip>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-tooltip placement="top-end" content="上右提示内容">
                        <zmz-button size="default">上右</zmz-button>
                    </zmz-tooltip>
                </zmz-space-item>
            </zmz-space>
        </div>
        <div  style="display:flex;justify-content: space-between;">
            <div  style="display:flex;flex-direction: column">
              <zmz-space mode="vertical">
                    <zmz-space-item>
                        <zmz-tooltip placement="left-start" content="左上提示内容">
                            <zmz-button size="default">左上</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-tooltip placement="left" content="左中提示内容">
                            <zmz-button size="default">左中</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-tooltip placement="left-end" content="左下提示内容">
                            <zmz-button size="default">左下</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                </zmz-space>
            </div>
            <div  style="display:flex;flex-direction: column">
                <zmz-space mode="vertical">
                    <zmz-space-item>
                        <zmz-tooltip placement="right-start" content="右上提示内容">
                            <zmz-button size="default">右上</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-tooltip placement="right" content="右中提示内容">
                            <zmz-button size="default">右中</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-tooltip placement="right-end" content="右下提示内容">
                            <zmz-button size="default">右下</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                </zmz-space>
            </div>
        </div>
        <div  style="display:flex;justify-content: center;">
            <zmz-space>
                <zmz-space-item>
                    <zmz-tooltip placement="bottom-start" content="下左提示内容" >
                        <zmz-button size="default">下左</zmz-button>
                    </zmz-tooltip>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-tooltip placement="bottom" content="下中提示内容">
                        <zmz-button size="default">下中</zmz-button>
                    </zmz-tooltip>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-tooltip placement="bottom-end" content="下右提示内容">
                        <zmz-button size="default">下右</zmz-button>
                    </zmz-tooltip>
                </zmz-space-item>
            </zmz-space>
        </div>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="width:400px;">
            <div style="display:flex;justify-content: center;">
                <zmz-space>
                    <zmz-space-item>
                        <zmz-tooltip placement="top-start" content="上左提示内容" >
                            <zmz-button size="default">上左</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-tooltip placement="top" content="上中提示内容">
                            <zmz-button size="default">上中</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-tooltip placement="top-end" content="上右提示内容">
                            <zmz-button size="default">上右</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                </zmz-space>
            </div>
            <div  style="display:flex;justify-content: space-between;">
                <div  style="display:flex;flex-direction: column">
                <zmz-space mode="vertical">
                        <zmz-space-item>
                            <zmz-tooltip placement="left-start" content="左上提示内容">
                                <zmz-button size="default">左上</zmz-button>
                            </zmz-tooltip>
                        </zmz-space-item>
                        <zmz-space-item>
                            <zmz-tooltip placement="left" content="左中提示内容">
                                <zmz-button size="default">左中</zmz-button>
                            </zmz-tooltip>
                        </zmz-space-item>
                        <zmz-space-item>
                            <zmz-tooltip placement="left-end" content="左下提示内容">
                                <zmz-button size="default">左下</zmz-button>
                            </zmz-tooltip>
                        </zmz-space-item>
                    </zmz-space>
                </div>
                <div  style="display:flex;flex-direction: column">
                    <zmz-space mode="vertical">
                        <zmz-space-item>
                            <zmz-tooltip placement="right-start" content="右上提示内容">
                                <zmz-button size="default">右上</zmz-button>
                            </zmz-tooltip>
                        </zmz-space-item>
                        <zmz-space-item>
                            <zmz-tooltip placement="right" content="右中提示内容">
                                <zmz-button size="default">右中</zmz-button>
                            </zmz-tooltip>
                        </zmz-space-item>
                        <zmz-space-item>
                            <zmz-tooltip placement="right-end" content="右下提示内容">
                                <zmz-button size="default">右下</zmz-button>
                            </zmz-tooltip>
                        </zmz-space-item>
                    </zmz-space>
                </div>
            </div>
            <div  style="display:flex;justify-content: center;">
                <zmz-space>
                    <zmz-space-item>
                        <zmz-tooltip placement="bottom-start" content="下左提示内容" >
                            <zmz-button size="default">下左</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-tooltip placement="bottom" content="下中提示内容">
                            <zmz-button size="default">下中</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-tooltip placement="bottom-end" content="下右提示内容">
                            <zmz-button size="default">下右</zmz-button>
                        </zmz-tooltip>
                    </zmz-space-item>
                </zmz-space>
            </div>
        </div>
    </div>
</template>

```
:::

## 禁用用法
添加属性``disabled``禁止title显示
<div class="demo-block">
    <div style="width:400px">
        <zmz-tooltip :disabled="disabled" content="点击关闭tooltip功能" >
            <zmz-button @click="disabled = !disabled">点击{{disabled?'开启':'关闭'}}tooltip功能</zmz-button>
        </zmz-tooltip>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="width:400px">
            <zmz-tooltip :disabled="disabled" content="点击关闭tooltip功能" >
                <zmz-button @click="disabled = !disabled">点击{{disabled?'开启':'关闭'}}tooltip功能</zmz-button>
            </zmz-tooltip>
        </div>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            disabled: true
        }  
    }
  }
</script>
```
:::

## 自定义内容
使用插槽``#content``可以自定义弹出内容
<div class="demo-block">
    <div style="width:400px">
        <zmz-tooltip placement="top">
            <template #content>这里是自定义tooltip提示内容</template>
            <zmz-button>自定义内容</zmz-button>
        </zmz-tooltip>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="width:400px">
            <zmz-tooltip placement="top">
                <template #content>这里是自定义tooltip提示内容</template>
                <zmz-button>自定义内容</zmz-button>
            </zmz-tooltip>
        </div>
    </div>
</template>
```
:::

## 主题
添加属性``effect``,内置两款``black`` 和 ``white``主题
<div class="demo-block">
    <div style="width:400px">
        <zmz-space>
            <zmz-space-item>
                <zmz-tooltip placement="top" effect="black" content="默认黑主题">
                    <zmz-button>默认黑主题</zmz-button>
                </zmz-tooltip>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tooltip placement="top" effect="white" content="白主题">
                    <zmz-button>白主题</zmz-button>
                </zmz-tooltip>
            </zmz-space-item>
        </zmz-space>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="width:400px">
            <zmz-space>
                <zmz-space-item>
                    <zmz-tooltip placement="top" effect="black" content="默认黑主题">
                        <zmz-button>默认黑主题</zmz-button>
                    </zmz-tooltip>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-tooltip placement="top" effect="white" content="白主题">
                        <zmz-button>白主题</zmz-button>
                    </zmz-tooltip>
                </zmz-space-item>
            </zmz-space>
        </div>
    </div>
</template>
```
:::

## Tooltip 属性

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| placement | 展示位置 | String|   top-start / top / top-end / bottom-start / bottom / bottom-end / left-start / left / left-end / right-start / right / right-end  | bottom |
| content | 内容 | String | —	| — |
| disabled | 是否禁用 | Boolean | —    | false |
| effect | 主题 | String | black / white   | black |
| trigger | 激活方式 | String | hover / click / focus   | hover |
| teleport | 是否穿梭 | Boolean | 	— | false |
| teleport-dom | 自身是否插入至 位置 元素 | String | 	— | body |
| teleport-class | 自定义穿梭类名 | String / Array | 	— | — |
| arrow | 下拉盒子的角 | Boolean | — | true | —  |
| offset | 盒子偏移 | Array | —  |  [0, 10] | —  |
| max-width | 盒子最大宽度 | String | —  |  —  | —  |
| popper-options | 	popper2.js 的参数 | Array | —  |  [] | 参考 popper.js 文档  |


## Tooltip 方法
| 事件      | 说明          | 返回值  |
|---------- |-------------- |---- |
| on-change | 打开变化值改变时触发 | function(value:true\|false) |
| on-open-before | 打开之前 | — |
| on-open | 打开中 | — |
| on-open-after | 打开之后 | — |
| on-close-before | 关闭之前 | — |
| on-close | 关闭中 | — |
| on-close-after | 关闭之后 | — |


## Tooltip 插槽
| 参数      | 说明          |
|---------- |-------------- |
| content | 自定义内容 |

## Tooltip 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-tooltip-min-width              |  --zmz-tooltip-min-width                  | 10px      |最新宽度     |
| @zmz-tooltip-max-width          |  --zmz-tooltip-max-width          | 250px      | 最大宽度        |
| @zmz-tooltip-line-height      |  --zmz-tooltip-line-height        | 1.2         | 行高    |
| @zmz-tooltip-border-radius      |  --zmz-tooltip-border-radius      | 3px         | 圆角      |
| @zmz-tooltip-content-color       |  --zmz-tooltip-content-color          |  #fff       | 文本颜色        |
| @zmz-tooltip-content-padding   |  --zmz-tooltip-content-padding      | 10px          | 内容边距    |
| @zmz-tooltip-content-font-size  |  --zmz-tooltip-content-font-size    | 12px          | 字体大小      |
| @zmz-tooltip-background-color  |  --zmz-tooltip-background-color    | #2e3133          | 背景颜色      |
| @zmz-tooltip-box-shadow  |  --zmz-tooltip-box-shadow     | 0 1px 6px rgba(0, 0, 0, .39)          | 背景阴影      |
