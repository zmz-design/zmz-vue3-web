<div>
    <zmz-model v-model="isModel" title="提示"  :before-close="beforeClose">
        这是模态框
        <template #footer>
            <div><zmz-button @click="isModel = false">取消</zmz-button></div>
        </template>
    </zmz-model>
    <zmz-model v-model="isModel1" title="提示"  :before-close="beforeClose">
        这是嵌套模态框
        <zmz-model v-model="isModel2" title="提示"  :before-close="beforeClose">
            这是嵌套模态框2
            <template #footer>
                <zmz-button @click="isModel2 = false">取消</zmz-button>
            </template>
        </zmz-model>
        <template #footer>
            <zmz-button type="primary" @click="modelClick2" style="margin-right:10px">嵌套</zmz-button>
            <zmz-button @click="isModel1 = false">取消</zmz-button>
        </template>
    </zmz-model>
    <zmz-model v-model="isModel3" title="提示"  center>
        这是模态框居中
        <template #footer>
            <zmz-button @click="isModel3 = false">取消</zmz-button>
        </template>
    </zmz-model>
    <zmz-model v-model="isModel4" title="提示" >
        <template #header>
            自定义头部
        </template>
        自定义内容
        <template #footer>
            自定义底部
        </template>
    </zmz-model>
</div>
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
            title: 'Model 模态框' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            isModel: false,
            isModel1: false,
            isModel2: false,
            isModel3: false,
            isModel4: false
        }  
    },
    methods: {
        modelClick () {
            this.isModel = true
        },
        modelClick1 () {
            this.isModel1 = true
        },
        modelClick2 () {
            this.isModel2 = true
        },
        modelClick3 () {
            this.isModel3 = true
        },
        modelClick4 () {
            this.isModel4 = true
        },
        beforeClose() {
            console.log('回调')  
            return false
        },
        currentConfig(data){
          return this.$setting.currentConfig[data];
        }
    }
}
</script>

# Model 模态框
----
## 概述
为当前页面提供其他操作界面，减少页面跳转

## 基础用法
弹出一个模态框

<div class="demo-block">
    <div class="demo-button">
        <zmz-button @click="modelClick">模态框</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-model v-model="isModel" title="提示" >
        这是模态框
        <template #footer>
            <zmz-button @click="isModel = false">取消</zmz-button>
        </template>
    </zmz-model>
</template>
<script>
    export default{
        data() {
            return {
                isModel: false
            }  
        },
        methods: {
            modelClick () {
                this.isModel = true
            }
        }
  }
</script>

```
:::

## 嵌套展示
弹出多个窗口

<div class="demo-block">
    <div class="demo-button">
        <zmz-button @click="modelClick1">模态框</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-model v-model="isModel1" title="提示" >
        这是嵌套模态框
        <zmz-model v-model="isModel2" title="提示" >
            这是嵌套模态框2
            <template #footer>
                <zmz-button @click="isModel2 = false">取消</zmz-button>
            </template>
        </zmz-model>
        <template #footer>
            <zmz-button type="primary" @click="modelClick2" style="margin-right:10px">嵌套</zmz-button>
            <zmz-button @click="isModel1 = false">取消</zmz-button>
        </template>
    </zmz-model>
</template>
<script>
  export default{
    data() {
      return {
          isModel1: false,
          isModel2: false
      }  
    },
    methods: {
        modelClick1 () {
            this.isModel1 = true
        },
        modelClick2 () {
            this.isModel2 = true
        }
    }
  }
</script>
```
:::

## 居中展示
弹出一个模态框

<div class="demo-block">
    <div class="demo-button">
        <zmz-button @click="modelClick3">模态框</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-model v-model="isModel3" title="提示" center>
        这是模态框居中
        <template #footer>
            <zmz-button @click="isModel3 = false">取消</zmz-button>
        </template>
    </zmz-model>
</template>
<script>
export default{
    data() {
        return {
            isModel3: false
        }  
    },
    methods: {
        modelClick3 () {
            this.isModel3 = true
        }
    }
}
</script>
```
:::

## 自定义展示
使用model插槽，可以自定义头部,内容,底部。

<div class="demo-block">
    <div class="demo-button">
        <zmz-button @click="modelClick4">模态框</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-model v-model="isModel4" title="提示">
        <template #header>
            自定义头部
        </template>
        自定义内容
        <template #footer>
            自定义底部
        </template>
    </zmz-model>
</template>
<script>
export default{
    data() {
        return {
            isModel4: false
        }  
    },
    methods: {
        modelClick4 () {
            this.isModel4 = true
        }
    }
}
</script>
```
:::

## Model 属性
| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| v-model | 是否显示 Model 模态框| ``Boolean`` |   —   | false |
| title | Model模态框的标题 | ``String`` | 	— | — |
| width | Model 的宽度| ``String`` |   —   | '400px' |
| offset-top | 顶部偏移 | ``String`` |     — | '100px' |
| model-custom-class | Drawer 自定义类名 | ``Array``/``String`` |     — | — |
| model-custom-style | Drawer 自定义样式 | ``Object`` |     — | — |
| mask | 是否显示遮罩 | ``Boolean`` |     — | true |
| mask-closable | 是否点击遮罩关闭 | ``Boolean`` |     — | false |
| mask-custom-class | 遮罩自定义类名 | ``Array``/``String`` |     — | — |
| mask-custom-style | 遮罩自定义样式 | ``Object`` |     — | — |
| center | 整体居中 | ``Boolean`` |     — | false |
| header-center | Model模态框标题居中 | ``Boolean`` |     — | false |
| content-center | Model模态框内容居中 | ``Boolean`` |     — | false |
| footer-center | Model模态框底部居中 | ``Boolean`` |     — | false |
| hide-header | 是否隐藏头部 | ``Boolean`` |     — | true |
| hide-footer | 是否隐藏底部 | ``Boolean`` |     — | true |
| before-close | 关闭前操作 | ``Function``  |     return false用于关闭 | — |
| show-close-btn | 是否显示关闭按钮 | ``Boolean`` |     — | true |
| close-on-press-escape | 是否按下esc关闭弹窗 | ``Boolean`` |     — | false |
| border | 是否显示边线 | ``Boolean`` |     — | false |
| teleport | 是否穿梭 | ``Boolean`` | 	 — | false |
| teleport-dom | Model 自身是否插入至 位置 元素 | ``String`` | 	— | 'body' |

## Model slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| header | 头部内容插槽 |
| default | 内容插槽 |
| footer | 底部内容插槽 |
| close | 关闭按钮插槽 |

## Model 事件
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
| on-open-before | 打开之前 | — |
| on-open | 打开中 | — |
| on-open-after | 打开之后 | — |
| on-close-before | 关闭之前 | — |
| on-close | 关闭中 | — |
| on-close-after | 关闭之后 | — |

## Model 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-model-mask-background-color             |  --zmz-model-mask-background-color                  | rgba(0,0,0,.5)      | 遮罩背景颜色      |
| @zmz-model-header-padding             |  --zmz-model-header-padding                  | 12px 16px      | 头部内边距      |
| @zmz-model-body-padding       |  --zmz-model-body-padding           | 16px       | 内容内边距        |
| @zmz-model-footer-padding   |  --zmz-model-footer-padding      | 12px 16px          | 底部内边距    |
| @zmz-model-background-color      |  --zmz-model-background-color         |  #fff          | 背景色  |
| @zmz-model-border-radius  |  --zmz-model-border-radius     | 3px          | 圆角      |
| @zmz-model-border-color         |  --zmz-model-border-color            | #e3e6ef       | 边线颜色        |
| @zmz-model-border-width      |  --zmz-model-border-width        | 1px          | 边线宽度    |
| @zmz-model-border-style      |  --zmz-model-border-style         | solid         | 边线样式      |
| @zmz-model-close-icon-size      |  --zmz-model-close-icon-size         | 12px         | 关闭按钮大小      |
| @zmz-model-close-icon-color      |  --zmz-model-close-icon-color         | 默认主题颜色         | 关闭按钮颜色      |
| @zmz-model-title-font-size      |  --zmz-model-title-font-size         | 16px         | 标题字体大小      |
| @zmz-model-title-color      |  --zmz-model-title-color         | 默认主题颜色         | 标题字体颜色      |
| @zmz-model-body-font-size      |  --zmz-model-body-font-size         | 14px         | 内容字体大小      |
| @zmz-model-body-color      |  --zmz-model-body-color         | 默认主题颜色         | 内容字体颜色      |
| @zmz-model-fonter-font-size      |  --zmz-model-fonter-font-size         | 14px         | 底部字体大小      |
| @zmz-model-fonter-color      |  --zmz-model-fonter-color         | 默认主题颜色         | 底部字体颜色      |
## 特别提示

::: warning

zmz-model 可以进行Attributes 继承

:::