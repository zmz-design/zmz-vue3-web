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
            title: 'Popover 悬浮层提示' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            disabled: true,
            popover: false,
            popover2: false,
            popover3: false,
            popover4: false,
            popover5: false,
            popover6: false,
            popover7: false
        }  
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    },
}
</script>
# Popover 悬浮层提示
----
## 概述
与tooltip文字提示类似，Popover 悬浮层扩展内容性更强。
## 基础用法

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-popover v-model="popover" placement="top-start" title="hover激活标题" content="这是一段激活内容,这是一段激活内容,这是一段激活内容">
                <zmz-button>hover激活</zmz-button>
            </zmz-popover>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-popover v-model="popover2" placement="top" trigger="click" title="click激活标题" content="这是一段激活内容,这是一段激活内容,这是一段激活内容">
                <zmz-button>click激活</zmz-button>
            </zmz-popover>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-popover v-model="popover3" placement="top-end" trigger="focus" title="focus激活标题" content="这是一段激活内容,这是一段激活内容,这是一段激活内容">
                <zmz-button>focus激活</zmz-button>
            </zmz-popover>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-popover v-model="popover" placement="top-start" title="hover激活标题" content="这是一段激活内容,这是一段激活内容,这是一段激活内容">
                    <zmz-button>hover激活</zmz-button>
                </zmz-popover>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-popover v-model="popover2" placement="top" trigger="click" title="click激活标题" content="这是一段激活内容,这是一段激活内容,这是一段激活内容">
                    <zmz-button>click激活</zmz-button>
                </zmz-popover>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-popover v-model="popover3" placement="top-end" trigger="focus" title="focus激活标题" content="这是一段激活内容,这是一段激活内容,这是一段激活内容">
                    <zmz-button>focus激活</zmz-button>
                </zmz-popover>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            popover: false,
            popover2: false,
            popover3: false
        }  
    }
  }
</script>
```
:::

## 禁用用法
添加属性``disabled``
<div class="demo-block">
    <zmz-popover v-model="popover4" :disabled="disabled" content="点击关闭popover功能" >
        <zmz-button @click="disabled = !disabled">点击{{disabled?'开启':'关闭'}}popover功能</zmz-button>
    </zmz-popover>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-popover v-model="popover4" :disabled="disabled" content="点击关闭popover功能" >
            <zmz-button @click="disabled = !disabled">点击{{disabled?'开启':'关闭'}}popover功能</zmz-button>
        </zmz-popover>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            disabled: true,
            popover4: false
        }  
    }
  }
</script>
```
:::

## 自定义内容

<div class="demo-block">
    <zmz-popover placement="top" trigger="click" v-model="popover5">
        <template #content>
            <div>这里是自定义popover提示内容</div>
            <div style="margin-top:10px;text-align:right;">
                <zmz-button text size="mini" style="color:#fff;" @click="popover5 = false">取消</zmz-button>
                <zmz-button type="primary" size="mini" style="margin-left:10px;"  @click="popover5 = false">确认</zmz-button>
            </div>
        </template>
        <zmz-button>自定义内容,当前状态{{popover5}}</zmz-button>
    </zmz-popover>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-popover placement="top" trigger="click" v-model="popover5">
            <template #content>
                <div>这里是自定义popover提示内容</div>
                <div style="margin-top:10px;text-align:right;">
                    <zmz-button text style="color:#fff;" @click="popover5 = false">取消</zmz-button>
                    <zmz-button type="primary" size="mini" style="margin-left:10px;"  @click="popover5 = false">确认</zmz-button>
                </div>
            </template>
            <zmz-button>自定义内容,当前状态{{popover5}}</zmz-button>
        </zmz-popover>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            popover5: false
        }  
    }
  }
</script>
```
:::

## 主题

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-popover placement="top" effect="black" content="默认黑主题" v-model="popover6">
                <zmz-button>默认黑主题</zmz-button>
            </zmz-popover>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-popover placement="top" effect="white" content="白主题" v-model="popover7">
                <zmz-button>白主题</zmz-button>
            </zmz-popover>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-popover placement="top" effect="black" content="默认黑主题" v-model="popover6">
                    <zmz-button>默认黑主题</zmz-button>
                </zmz-popover>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-popover placement="top" effect="white" content="白主题" v-model="popover7">
                    <zmz-button>白主题</zmz-button>
                </zmz-popover>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            popover6: false,
            popover7: false
        }  
    }
  }
</script>
```
:::

## Popover 属性

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| placement | 展示位置 | ``String``|   top-start/top/top-end/bottom-start/bottom/bottom-end/left-start/left/left-end/right-start/right/right-end  | bottom |
| title | 标题 | ``String`` | —	| — |
| content | 内容 | ``String`` | —	| — |
| disabled | 是否禁用 | ``Boolean`` | —    | false |
| effect | 主题 | ``String`` | black/white   | black |
| trigger | 激活方式 | ``String`` | hover/click/focus   | hover |
| teleport | 是否穿梭 | ``Boolean`` | 	true/false | false |
| teleport-dom | Model 自身是否插入至 位置 元素 | ``String`` | 	— | body |
| arrow | 下拉盒子的角 | ``Boolean`` | true/false | true | —  |
| offset | 盒子偏移 | ``Array`` | —  |  [0, 10] | —  |
| popper-options | 	popper2.js 的参数 | ``Array`` | —  |  [] | 参考 popper.js 文档  |


## Popover 方法
| 事件      | 说明          | 返回值  |
|---------- |-------------- |---- |
| on-change | 打开变化值改变时触发 | function(value:true\|false) |
| on-open-before | 打开之前 | — |
| on-open | 打开中 | — |
| on-open-after | 打开之后 | — |
| on-close-before | 关闭之前 | — |
| on-close | 关闭中 | — |
| on-close-after | 关闭之后 | — |


## Popover 插槽
| 参数      | 说明          |
|---------- |-------------- |
| content | 自定义内容 |

## Popover 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-popover-min-width              |  --zmz-popover-min-width                  | 10px      |最新宽度     |
| @zmz-popover-max-width          |  --zmz-popover-max-width          | 250px      | 最大宽度        |
| @zmz-popover-title-line-height      |  --zmz-popover-title-line-height        | 1.2         | 行高    |
| @zmz-popover-content-line-height      |  --zmz-popover-content-line-height        | 1.2         | 行高    |
| @zmz-popover-border-radius      |  --zmz-popover-border-radius      | 3px         | 圆角      |
| @zmz-popover-title-color       |  --zmz-popover-title-color          |  #fff       | 标题颜色        |
| @zmz-popover-title-font-size  |  --zmz-popover-title-font-size    | 12px          | 标题字体大小      |
| @zmz-popover-title-margin-bottom  |  --zmz-popover-title-margin-bottom    | 12px          | 标题下边距      |
| @zmz-popover-content-color       |  --zmz-popover-content-color          |  #fff       | 内容颜色        |
| @zmz-popover-content-font-size  |  --zmz-popover-content-font-size    | 12px          | 内容字体大小      |
| @zmz-popover-background-color  |  --zmz-popover-background-color    | #2e3133          | 背景颜色      |
| @zmz-popover-padding   |  --zmz-popover-padding      | 10px          | 内容边距    |
| @zmz-popover-box-shadow  |  --zmz-popover-box-shadow     | 0 1px 6px rgba(0, 0, 0, .39)          | 背景阴影      |