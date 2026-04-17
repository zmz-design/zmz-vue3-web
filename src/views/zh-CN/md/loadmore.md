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
                    name: 'describe',
                    content: this.describe
                }
            ]
        };
    },
    data() {
        return {
            title: 'Loadmore 加载更多' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            state: 'loading',
            name: ''
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        start(type, name) {
            this.state = type
            this.name = name
        },
        handleClick(name) {
            console.log(name)
        }
    }
};
</script>
# Loadmore 加载更多
----
请求数据，为空的时候占位

## 基本用法

<div class="demo-alert demo-block">
    <zmz-space>
       <zmz-button @click="start('loadbefore')">加载前</zmz-button>
       <zmz-button @click="start('loading')">加载中</zmz-button>
       <zmz-button @click="start('loadafter')">加载后</zmz-button>
       <zmz-button @click="start('nomore')">没有更多</zmz-button>
    </zmz-space>
    <zmz-loadmore v-model="state"></zmz-loadmore>
</div>

::: demo
```html
<template>
    <zmz-space>
       <zmz-button @click="start('loadbefore')">加载前</zmz-button>
       <zmz-button @click="start('loading')">加载中</zmz-button>
       <zmz-button @click="start('loadafter')">加载后</zmz-button>
       <zmz-button @click="start('nomore')">没有更多</zmz-button>
    </zmz-space>
    <zmz-loadmore v-model="state"></zmz-loadmore>
</template>
<script>
export default {
    data() {
        return {
            state: 'loading'
        };
    },
    methods: {
        start(type) {
            this.state = type
        }
    }
};
</script>
```
:::

## 自定义内容
使用```loadbefore```， ```loading```，```loadafter```，```nomore```可以设置不同的文案，也可以使用```loadingText```属性替代节点属性，减少声明变量。
<div class="demo-alert demo-block">
    <zmz-space>
       <zmz-button @click="start('loadbefore', '加载前')">加载前</zmz-button>
       <zmz-button @click="start('loading', '加载中')">加载中</zmz-button>
       <zmz-button @click="start('loadafter', '加载后')">加载后</zmz-button>
       <zmz-button @click="start('nomore', '没有更多')">没有更多</zmz-button>
    </zmz-space>
    <zmz-loadmore v-model="state" :loadingText="name" icon='empty'></zmz-loadmore>
</div>

::: demo
```html
<template>
    <zmz-space>
       <zmz-button @click="start('loadbefore', '加载前')">加载前</zmz-button>
       <zmz-button @click="start('loading', '加载中')">加载中</zmz-button>
       <zmz-button @click="start('loadafter', '加载后')">加载后</zmz-button>
       <zmz-button @click="start('nomore', '没有更多')">没有更多</zmz-button>
    </zmz-space>
    <zmz-loadmore v-model="state" :loadingText="name" icon='empty'></zmz-loadmore>
</template>
<script>
export default {
    data() {
        return {
            state: 'loading',
            name: ''
        };
    },
    methods: {
        start(type, name) {
            this.state = type
            this.name = name
        }
    }
};
</script>
```
:::

## 自定义颜色
使用```icon-color```自定义内容颜色icon大小颜色
<div class="demo-alert demo-block">
    <zmz-loadmore color="#ff0" icon-color="#f00" icon-size="60px" v-model="state"></zmz-loadmore>
</div>

::: demo
```html
<template>
    <zmz-loadmore color="#ff0" icon-color="#f00" icon-size="60px" v-model="state"></zmz-loadmore>
</template>
<script>
export default {
    data() {
        return {
            state: 'loading',
            name: ''
        };
    }
};
</script>
```
:::

## Loadmore 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|v-model      |    加载状态 |    ``String``   |    ``loadbefore``、``loadafter``、``loading``、``nomore``          |    loadbefore       |
|height      |    占位高度 |    ``String``   |    —           |    —       |
|icon	      | icon图标     |	``String``    |	—|	zmz-icon--loading |
|color	      | 颜色     |	``String``    |	 —|	 — |
|icon-color |    设置icon自定义颜色，自定义插槽无效  |    ``String``    |    —             |    —      |
|icon-size |    设置icon自定义大小，自定义插槽无效  |    ``String``    |    —             |    —      |
|loadingText |    加载文字  |    ``String``    |    —             |    —      |
|loadbefore |    加载前文字  |    ``String``    |    —             |   点击加载更多      |
|loading |    加载中文字  |    ``String``    |    —             |    正在加载     |
|loadafter |    加载后文字  |    ``String``    |    —             |    加载完毕      |
|nomore |    加载为空，没有更多  |    ``String``    |    —             |    没有更多      |
|line-width |   左右占位符宽度  |    ``String``    |    —             |    40      |

## Loadmore 方法
| 事件名称	| 说明						| 返回值	|
|----------	|--------------				|----------	|
| on-fold	| 展开折叠触发	| function(state\| hide/show)		|

## Loadmore 插槽
| 名称      | 说明          |
|---------- |-------------- |
| line |左右公共插槽 |
| lineLeft | 左部插槽 |
| lineRight | 右部插槽 |
| custom | 自定义插槽 |

## Loadmore 样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-loadmore-padding             |  --zmz-loadmore-padding                  | 20px 0      | 内边距      |
| @zmz-loadmore-font-size         |  --zmz-loadmore-font-size          | 12px       | 文字大小        |
| @zmz-loadmore-title-margin-top      |  --zmz-loadmore-title-margin-top          | 20px          | 文字上内边距    |
| @zmz-loadmore-title-font-size      |  --zmz-loadmore-title-font-size         | 20px          | 文字大小      |
| @zmz-loadmore-title-color      |  --zmz-loadmore-title-color          | rgba(@global-theme-default, .5)       | 文字颜色        |
| @zmz-loadmore-describe-margin-top   |  --zmz-loadmore-describe-margin-top     | 10px          | 描述上内边距    |
| @zmz-loadmore-describe-font-size  |  --zmz-loadmore-describe-font-size     | 12px         | 描述大小      |
| @zmz-loadmore-describe-color    |  --zmz-loadmore-describe-color          | rgba(@global-theme-default, .5)         | 描述颜色  |
| @zmz-loadmore-custom-margin-top  |  --zmz-loadmore-custom-margin-top   | 30px      | 自定义上内边距|
| @zmz-loadmore-line-height     |  --zmz-loadmore-line-height         | 1px          | 线高度      |
| @zmz-loadmore-line-width       |  --zmz-loadmore-line-width          | 40px       | 线宽度        |
| @zmz-loadmore-line-background       |  --zmz-loadmore-line-background          | rgba(@global-theme-default, .2)       |    线背景     |
| @zmz-loadmore-line-text-color       |  --zmz-loadmore-line-text-color         | rgba(@global-theme-default, .5)       | 文字颜色        |
| @zmz-loadmore-line-text-padding       |  --zmz-loadmore-line-text-padding          | 0 10px       | 文字内边距       |
| @zmz-loadmore-icon-font-size       |  --zmz-loadmore-icon-font-size         | 12px       | 图标大小        |
| @zmz-loadmore-icon-margin-right      |  --zmz-loadmore-icon-margin-right         | 5px       | 图标右外边距        |
| @zmz-loadmore-icon-animation-name      |  --zmz-loadmore-icon-animation-name         | loading       | 动画名称        |
| @zmz-loadmore-icon-animation-duration      |  --zmz-loadmore-icon-animation-duration          |  1.4s       | 持续时间        |
| @zmz-loadmore-icon-animation-timing      |  --zmz-loadmore-icon-animation-timing           | linear       | 定时        |
| @zmz-loadmore-icon-animation-iteration      |  --zmz-loadmore-icon-animation-iteration           | infinite       | 执行次数        |
