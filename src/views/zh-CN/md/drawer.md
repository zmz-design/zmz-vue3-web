<div>
    <zmz-drawer v-model="isDrawer" title="提示" :direction="direction" teleport :before-close="beforeClose">
        这是模态框
        <template #footer>
            <zmz-button @click="isDrawer = false">取消</zmz-button>
        </template>
    </zmz-drawer>
    <zmz-drawer v-model="isDrawer1" title="提示" teleport :before-close="beforeClose">
        这是嵌套模态框
        <zmz-drawer v-model="isDrawer2" title="提示" teleport :before-close="beforeClose">
            这是嵌套模态框2
            <template #footer>
                <zmz-button @click="isDrawer2 = false">取消</zmz-button>
            </template>
        </zmz-drawer>
        <template #footer>
            <zmz-button type="primary" @click="drawerClick2" style="margin-right:10px">嵌套</zmz-button>
            <zmz-button @click="isDrawer1 = false">取消</zmz-button>
        </template>
    </zmz-drawer>
    <zmz-drawer v-model="isDrawer3" title="提示" teleport center>
        这是模态框居中
        <template #footer>
            <zmz-button @click="isDrawer3 = false">取消</zmz-button>
        </template>
    </zmz-drawer>
    <zmz-drawer v-model="isDrawer4" title="提示" teleport>
        <template #header>
            自定义头部
        </template>
        自定义内容
        <template #footer>
            自定义底部
        </template>
    </zmz-drawer>
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
            title: 'Drawer 抽屉' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            isDrawer: false,
            isDrawer1: false,
            isDrawer2: false,
            isDrawer3: false,
            isDrawer4: false,
            direction: 'right'
        }  
    },
    methods: {
        drawerClick (direction) {
            this.isDrawer = true
            this.direction = direction
        },
        drawerClick1 () {
            this.isDrawer1 = true
        },
        drawerClick2 () {
            this.isDrawer2 = true
        },
        drawerClick3 () {
            this.isDrawer3 = true
        },
        drawerClick4 () {
            this.isDrawer4 = true
        },
        beforeClose() {
           return false
        },
        currentConfig(data){
          return this.$setting.currentConfig[data];
        }
    }
}
</script>

# Drawer 抽屉
----
## 概述
为当前页面提供其他操作界面，减少页面跳转

## 基础用法
抽屉式弹窗，更大限度的扩展弹窗应用。

<div class="demo-block">
    <div class="demo-button">
        <zmz-button @click="drawerClick('top')">从上打开</zmz-button>
        <zmz-button @click="drawerClick('bottom')">从下打开</zmz-button>
        <zmz-button @click="drawerClick('left')">从左打开</zmz-button>
        <zmz-button @click="drawerClick('right')">从右打开</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-button @click="drawerClick('top')">从上打开</zmz-button>
    <zmz-button @click="drawerClick('bottom')">从下打开</zmz-button>
    <zmz-button @click="drawerClick('left')">从左打开</zmz-button>
    <zmz-button @click="drawerClick('right')">从右打开</zmz-button>
    <zmz-drawer v-model="isDrawer" :direction="direction" title="提示" teleport>
        这是模态框
        <template #footer>
            <zmz-button @click="isDrawer = false">取消</zmz-button>
        </template>
    </zmz-drawer>
</template>
<script>
    export default{
        data() {
            return {
                isDrawer: false,
                direction: 'right'
            }  
        },
        methods: {
            drawerClick (direction) {
                this.direction = direction
                this.isDrawer = true
            }
        }
  }
</script>

```
:::

## 嵌套展示
嵌套需要使用```teleport```属性，不适用此属性会有不一样的结果呈现。

<div class="demo-block">
    <div class="demo-button">
        <zmz-button @click="drawerClick1">模态框</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-button @click="drawerClick1">模态框</zmz-button>
    <zmz-drawer v-model="isDrawer1" title="提示" teleport>
        这是嵌套模态框
        <zmz-drawer v-model="isDrawer2" title="提示" teleport>
            这是嵌套模态框2
            <template #footer>
                <zmz-button @click="isDrawer2 = false">取消</zmz-button>
            </template>
        </zmz-drawer>
        <template #footer>
            <zmz-button type="primary" @click="drawerClick2" style="margin-right:10px">嵌套</zmz-button>
            <zmz-button @click="isDrawer1 = false">取消</zmz-button>
        </template>
    </zmz-drawer>
</template>
<script>
  export default{
    data() {
      return {
          isDrawer1: false,
          isDrawer2: false
      }  
    },
    methods: {
        drawerClick1 () {
            this.isDrawer1 = true
        },
        drawerClick2 () {
            this.isDrawer2 = true
        }
    }
  }
</script>
```
:::

## 居中展示
弹出一个内容剧中的抽屉

<div class="demo-block">
    <div class="demo-button">
        <zmz-button @click="drawerClick3">抽屉</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-button @click="drawerClick">抽屉</zmz-button>
    <zmz-drawer v-model="isDrawer" title="提示" center>
        这是模态框居中
        <template #footer>
            <zmz-button @click="isDrawer = false">取消</zmz-button>
        </template>
    </zmz-drawer>
</template>
<script>
export default{
    data() {
        return {
            isDrawer: false
        }  
    },
    methods: {
        drawerClick () {
            this.isDrawer = true
        }
    }
}
</script>
```
:::

## 自定义展示
使用drawer插槽，可以自定义头部,内容,底部。

<div class="demo-block">
    <div class="demo-button">
        <zmz-button @click="drawerClick4">自定义</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-button @click="drawerClick4">自定义</zmz-button>
    <zmz-drawer v-model="isDrawer4" title="提示">
        <template #header>
            自定义头部
        </template>
        自定义内容
        <template #footer>
            自定义底部
        </template>
    </zmz-drawer>
</template>
<script>
export default{
    data() {
        return {
            isDrawer4: false
        }  
    },
    methods: {
        drawerClick4 () {
            this.isDrawer4 = true
        }
    }
}
</script>
```
:::

## Drawer 属性
| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| v-model | 是否显示 Drawer 模态框| ``Boolean`` |   —   | false |
| width | Drawer 的宽度| ``String`` |   —   | 30% |
| drawer-custom-class | Drawer 自定义类名 | ``Array``/``String`` |     — | — |
| drawer-custom-style | Drawer 自定义样式 | ``Object`` |     — | — |
| title | Drawer模态框的标题 | ``String`` | 	— | — |
| center | 整体居中 | ``Boolean`` |     — | false |
| hide-header | 是否隐藏头部 | ``Boolean`` |     — | true |
| hide-footer | 是否隐藏底部 | ``Boolean`` |     — | true |
| show-close-btn | 是否显示关闭按钮 | ``Boolean`` |     — | true |
| mask | 是否显示遮罩 | ``Boolean`` |     — | true |
| mask-closable | 是否点击遮罩关闭 | ``Boolean`` |     — | true |
| mask-custom-class | 遮罩自定义类名 | ``Array``/``String`` |     — | — |
| mask-custom-style | 遮罩自定义样式 | ``Object`` |     — | — |
| header-center | Drawer模态框标题居中 | ``Boolean`` |     — | false |
| content-center | Drawer模态框内容居中 | ``Boolean`` |     — | false |
| footer-center | Drawer模态框底部居中 | ``Boolean`` |     — | false |
| before-close | 关闭前操作 | ``Function``  |    return false用于关闭 | — |
| direction | 打开方向 | ``String`` |     right/left/top/bottom | right |
| close-on-press-escape | 是否按下esc关闭弹窗 | ``Boolean`` |     — | false |
| teleport | 是否穿梭 | ``Boolean`` | 	true/false | false |
| teleport-dom | Model 自身是否插入至 位置 元素 | ``String`` | 	— | 'body' |
| destroy-on-close | 关闭销毁 | ``Boolean`` |     — | false |

## Drawer slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| header | 头部内容插槽 |
| default | 内容插槽 |
| footer | 底部内容插槽 |
| close | 关闭按钮插槽 |


## Drawer 事件
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
| on-open-before | 打开之前 | — |
| on-open | 打开中 | — |
| on-open-after | 打开之后 | — |
| on-close-before | 关闭之前 | — |
| on-close | 关闭中 | — |
| on-close-after | 关闭之后 | — |

## Drawer 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-drawer-background-color      |  --zmz-drawer-background-color         |  #fff          | 背景色  |
| @zmz-drawer-header-padding             |  --zmz-drawer-header-padding                  | 15px 20px     | 头部内边距      |
| @zmz-drawer-body-padding       |  --zmz-drawer-body-padding           | 15px       | 内容内边距        |
| @zmz-drawer-footer-padding   |  --zmz-drawer-footer-padding      | 15px 20px          | 底部内边距    |
| @zmz-drawer-title-color         |  --zmz-drawer-title-color            | 默认主题颜色       | 标题颜色        |
| @zmz-drawer-title-font-size  |  --zmz-drawer-title-font-size     | 16px          | 标题大小      |
| @zmz-drawer-icon-color      |  --zmz-drawer-icon-color         | 默认主题颜色         | 图标颜色      |
| @zmz-drawer-icon-size      |  --zmz-drawer-icon-size        | 16px          | 图标大小    |
| @zmz-drawer-body-color      |  --zmz-drawer-body-color         | 默认主题颜色         | 内容字体颜色      |
| @zmz-drawer-body-font-size       |  --zmz-drawer-body-font-size          | 14px         | 内容字体大小      |
| @zmz-drawer-footer-color      |  --zmz-drawer-footer-color         | 默认主题颜色         | 底部字体颜色      |
| @zmz-drawer-footer-font-size      |  --zmz-drawer-footer-font-size         | 16px         | 底部字体大小      |
| @zmz-drawer-mask-background-color      |  --zmz-drawer-mask-background-color        | rgba(0, 0, 0, 0.5)         | 遮罩颜色      |


## 特别提示

::: warning

zmz-drawer 可以进行Attributes 继承

:::