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
        },
        onScrollBottom(){
            this.num += 10
        },
        onScrollTop(){
        },
        onScroll(){
        }
    },
    data () {
        return {
            num: 10,
            title: 'Scroll 无线滚动' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        }
    }
}
</script>
# Scroll 无线滚动
----
用于一定范围内的大量数据展示查看

## 基础用法

<div class="demo-block">
    <zmz-scroll @on-scroll-upperleft="onScrollTop" @on-scroll-lowerright="onScrollBottom" @on-scroll="onScroll" height="200px" mode='vertical'>
        <zmz-cell title="我是标题"  describe="我是菜单描述" v-for="item in num" :key="item"></zmz-cell>
    </zmz-scroll>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-scroll @on-scroll-upperleft="onScrollTop" @on-scroll-lowerright="onScrollBottom" @on-scroll="onScroll" height="200px" mode='vertical'>
            <zmz-cell title="我是标题"  describe="我是菜单描述" v-for="item in num" :key="item"></zmz-cell>
        </zmz-scroll>
    </div>
</template>
<script>
export default {
    methods: {
        onScrollBottom(data){
            this.num += 10
        },
        onScrollTop(data){
            console.log(data)
        },
        onScroll(data){
            console.log(data)
        }
    },
    data () {
        return {
            num: 10,
        }
    }
}
</script>
```
:::

## 横向滚动

<div class="demo-block">
    <zmz-scroll @on-scroll-upperleft="onScrollTop" @on-scroll-lowerright="onScrollBottom" @on-scroll="onScroll" width="600px" mode='horizontal' disabled  style="white-space: nowrap;">
        <zmz-cell title="我是标题"  describe="我是菜单描述" v-for="item in num" :key="item" style="width: 100px;display:inline-block"></zmz-cell>
    </zmz-scroll>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-scroll @on-scroll-upperleft="onScrollTop" @on-scroll-lowerright="onScrollBottom" @on-scroll="onScroll" width="600px" mode='horizontal' disabled  style="white-space: nowrap;">
            <zmz-cell title="我是标题"  describe="我是菜单描述" v-for="item in num" :key="item" style="width: 100px;display:inline-block"></zmz-cell>
        </zmz-scroll>
    </div>
</template>
<script>
export default {
    methods: {
        onScrollBottom(data){
            this.num += 10
        },
        onScrollTop(data){
            console.log(data)
        },
        onScroll(data){
            console.log(data)
        }
    },
    data () {
        return {
            num: 10,
        }
    }
}
</script>
```
:::


## Scroll 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| mode | 滚动方向 | String | horizontal / vertical | vertical |
| height | 滚动为y轴方向需要设置 | String | — | 200px |
| width | 滚动为x轴方向需要设置 | String | — | 100% |

## Scroll 方法
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
| on-scroll-upperleft |y模式滚动顶部，x模式滚动左部| function(滚动值, e)  |
| on-scroll-lowerright |y模式滚动底部，x模式滚动右部| function(滚动值, e)  |
| on-scroll | 滚动过程| function(滚动值, e)  |

## Scroll 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-scroll-width            |  --zmz-scroll-width                | 100%     |    宽度   |
| @zmz-scroll-height      |  --zmz-scroll-height         | 200px         | 高度      |
