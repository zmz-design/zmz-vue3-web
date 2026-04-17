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
    data () {
        return {
            title: 'Toast 消息轻提示' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        } 
    },
    methods: {
        text() {
            this.$toast.text('提示内容');
        },
        icon() {
            this.$toast.icon('zmz-icon--success');
        },
        toast () {
            this.$toast.toast({
                content: '自定义提示',
                icon: 'zmz-icon--cart',
            });
        },
        top () {
            this.$toast.toast({
                content: '上方提示',
                icon: 'zmz-icon--cart',
                placement: 'top',
            });
        },
        center () {
            this.$toast.toast({
                content: '中间提示',
                icon: 'zmz-icon--cart',
                placement: 'center',
            });
        },
        bottom () {
            this.$toast.toast({
                content: '下方提示',
                icon: 'zmz-icon--cart',
                placement: 'bottom',
            });
        },
        warning () {
            this.$toast.warning('警告图文提示');
        },
        error () {
            this.$toast.error('失败图文提示');
        },
        success () {
            this.$toast.success('成功图文提示');
        },
        loading () {
            this.$toast.loading('加载图文提示');
        },
        currentConfig(data){
          return this.$setting.currentConfig[data];
        }
    }
  }
</script>
# Toast 消息轻提示
----
## 概述
在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。
## 文字提示
<div class="demo-block">
    <zmz-button @click="text">文字提示</zmz-button>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-button @click="text">文字提示</zmz-button>
    </div>
</template>
<script>
export default{
    methods: {
        text() {
            this.$toast.text({
                content: '提示内容',
                backgrund: true,
                showCloseBtn: false,
            });
        }
    }
}
</script>
```
:::

## 图标提示
<div class="demo-block">
    <zmz-button @click="icon">图标提示</zmz-button>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-button @click="icon">图标提示</zmz-button>
    </div>
</template>
<script>
export default{
    methods: {
        icon() {
            this.$toast.icon({
                content: '提示内容',
                backgrund: true,
                showCloseBtn: false,
            });
        }
    }
}
</script>
```
:::

## 图文提示
<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-button @click="toast">自定义提示</zmz-button>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-button @click="success">成功图文提示</zmz-button>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-button @click="error">失败图文提示</zmz-button>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-button @click="warning">警告图文提示</zmz-button>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-button @click="loading">加载图文提示</zmz-button>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-button @click="toast">自定义提示</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="success">成功图文提示</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="error">失败图文提示</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="warning">警告图文提示</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="loading">加载图文提示</zmz-button>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        toast () {
            this.$toast.toast({
                content: '自定义图文提示',
                icon: 'zmz-icon--cart',
                backgrund: true,
                showCloseBtn: false,
            });
        },
        warning () {
            this.$toast.warning('警告图文提示');
        },
        error () {
            this.$toast.error('失败图文提示');
        },
        success () {
            this.$toast.success('成功图文提示');
        },
        loading () {
            this.$toast.loading('加载图文提示');
        }
    }
}
</script>
```
:::

## 提示位置
<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-button @click="top">上方</zmz-button>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-button @click="center">中间</zmz-button>
        </zmz-space-item>
        <zmz-space-item>
        <zmz-button @click="bottom">下方</zmz-button>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-button @click="top">上方</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="center">中间</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
            <zmz-button @click="bottom">下方</zmz-button>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        top () {
            this.$toast.toast({
                content: '上方提示',
                icon: 'zmz-icon--cart',
                placement: 'top',
            });
        },
        center () {
            this.$toast.toast({
                content: '中间提示',
                icon: 'zmz-icon--cart',
                placement: 'center',
            });
        },
        bottom () {
            this.$toast.toast({
                content: '下方提示',
                icon: 'zmz-icon--cart',
                placement: 'bottom',
            });
        }
    }
}
</script>
```
:::


## Toast 属性

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| content | 内容 | String |   —   | — |
| type | 类型 | String | 	success / warning / error / icon / text / text-icon / loading | text-icon |
| icon | 自定义图标 | String | — | — |
| toast-custom-class | 自定义类名 | String / Array | 		— | 	— |
| toast-custom-style | 自定义样式 | Object | 		— | 	— |
| mask-custom-class | 自定义类名 | String / Array | 		— | 	— |
| mask-custom-style | 自定义样式 | Object | 		— | 	— |
| duration | 关闭时间, 毫秒。为 0 则不会自动关闭 | Number | 		— | 	2000 |
| mask | 是否显示z遮罩 | Boolean | 		— | 	false |
| placement | 展示位置 | String | top / center / bottom | 	center |

## Toast 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-toast-padding              |  --zmz-toast-padding                  | 12px 25px      |内边距     |
| @zmz-toast-max-width          |  --zmz-toast-max-width          | 400px      | 最大宽度        |
| @zmz-toast-border-radius      |  --zmz-toast-border-radius      | 3px         | 圆角      |
| @zmz-toast-text-font-size       |  --zmz-toast-text-font-size          |  12px       | 文字大小        |
| @zmz-toast-text-color   |  --zmz-toast-text-color      | #ff          | 文字颜色    |
| @zmz-toast-text-margin-top  |  --zmz-toast-text-margin-top    | 10px          | 文字上边距      |
| @zmz-toast-icon-size  |  --zmz-toast-icon-size    | 36px          | 图标大小      |
| @zmz-toast-icon-color  |  --zmz-toast-icon-color     | #fff          | 图标颜色      |
| @zmz-toast-background-color  |  --zmz-toast-background-color     | rgba(0, 0, 0, 0.6)         | 背景颜色      |