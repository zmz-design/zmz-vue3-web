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
            title: 'Badge 徽章标记' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description')
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        hello() {
            alert('Hello World!');
        }
    }
};
</script>
# Badge 徽章标记
----
在目标位置上方或右方展示数字提示，多用于消息提醒，购物车

## 基本用法

<div class="demo-block">
    <zmz-space>
        <zmz-badge type="default" :num="99">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="primary" :num="19">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="success" :num="8">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="warning" :num="16">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="error" :num="10">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="info" :num="0">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-badge type="default" :num="99">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="primary" :num="19">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="success" :num="8">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="warning" :num="16">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="error" :num="10">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="info" :num="0">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
        </zmz-space>
    </div>
</template>
```
:::

## 最大值
数量太多使用最大值加+号展示
<div class="demo-block">
    <zmz-space>
        <zmz-badge type="default" :num="100" :max="78">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="primary" :num="19" :max="19">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="success" :num="8" :max="7">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="warning" :num="16" :max="18">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="error" :num="10" :max="9">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
        <zmz-badge type="info" :num="0" :max="4">
            <zmz-button>购物车</zmz-button>
        </zmz-badge>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-badge type="default" :num="100" :max="78">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="primary" :num="19" :max="19">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="success" :num="8" :max="7">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="warning" :num="16" :max="18">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="error" :num="10" :max="9">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
            <zmz-badge type="info" :num="0" :max="4">
                <zmz-button>购物车</zmz-button>
            </zmz-badge>
        </zmz-space>
    </div>
</template>
```
:::

## 自定义
表示某种状态时提升可读性。
<div class="demo-block">
    <zmz-space>
        <zmz-badge type="error">
            <zmz-button>话题</zmz-button>
            <template #num>
                热
            </template>
        </zmz-badge>
        <zmz-badge type="success">
            <zmz-button>圈子</zmz-button>
            <template #num>
                hot
            </template>
        </zmz-badge>
        <zmz-badge type="info">
            <zmz-button>讨论</zmz-button>
            <template #num>
                new
            </template>
        </zmz-badge>
        <zmz-button>
            讨论
            <zmz-badge type="info" :fixed="false">
                <template #num>
                    new
                </template>
            </zmz-badge>
        </zmz-button>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-badge type="error">
                <zmz-button>话题</zmz-button>
                <template #num>
                    热
                </template>
            </zmz-badge>
            <zmz-badge type="success">
                <zmz-button>圈子</zmz-button>
                <template #num>
                    hot
                </template>
            </zmz-badge>
            <zmz-badge type="info">
                <zmz-button>讨论</zmz-button>
                <template #num>
                    new
                </template>
            </zmz-badge>
            <zmz-button>
                讨论
                <zmz-badge type="info" :fixed="false">
                    <template #num>
                        new
                    </template>
                </zmz-badge>
            </zmz-button>
        </zmz-space>
    </div>
</template>
```
:::

## 点提示
有时候也用小红点来提示有新消息
<div class="demo-block">
    <zmz-space>
        <zmz-badge type="error" dot :dot-size="12">
            <zmz-button>话题</zmz-button>
        </zmz-badge>
        <zmz-badge type="success" dot :dot-size="12">
            <zmz-button>圈子</zmz-button>
        </zmz-badge>
        <zmz-badge type="info" dot :dot-size="20" :show="true">
            <zmz-button>讨论</zmz-button>
        </zmz-badge>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-badge type="error" dot :dot-size="12">
                <zmz-button>话题</zmz-button>
            </zmz-badge>
            <zmz-badge type="success" dot :dot-size="12">
                <zmz-button>圈子</zmz-button>
            </zmz-badge>
            <zmz-badge type="info" dot :dot-size="20" :show="true">
                <zmz-button>讨论</zmz-button>
            </zmz-badge>
        </zmz-space>
    </div>
</template>
```
:::


## Badge 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|num      |	角标数字 |	Number   |	—  |	—      |
|type	      | 主题   |	String    |	success / warning / default / error / info / primary|	primary |
|max	      | 最大值，超出多余的变成+号                               |	Number    |	—|	— |
|min	      | 最小值                              |	Number    |	—|	0 |
|dot |	点角标                       |	Boolean    |	true/false             |	false      |
|dot-size   |	点大小                           |	Number   |	—	            | —   |
|show  |	是否显示  |	Boolean  	| true/false           |	true  |
|fixed  |    角标定位  |    Boolean      | true/false           |    true  |

## Badge 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-badge-background-color              |  --zmz-badge-background-color                   | #fff      | 背景色      |
| @zmz-badge-border-color         |  --zmz-badge-border-color          | rgba(默认主题颜色, 0.3)       | 边线颜色        |
| @zmz-badge-text-color              |  --zmz-badge-text-color                  | 默认主题颜色      | 字体颜色      |
| @zmz-badge-border-width        |  --zmz-badge-border-width         | 1px       | 边线宽度        |
| @zmz-badge-border-style     |  --zmz-badge-border-style        |solid          | 边线样式    |
| @zmz-badge-margin-left     |  --zmz-badge-margin-left        | 5px        | 左间距    |
| @zmz-badge-dot-size  |  --zmz-badge-dot-size   | 8px | 点大小|
| @zmz-badge-dot-radius     |  --zmz-badge-dot-radius        | 50% | 点圆角   |
| @zmz-badge-num-radius    |  --zmz-badge-num-radius        | 10px | 数字圆角    |
| @zmz-badge-num-font-size     |  --zmz-badge-num-font-size        | 12px | 数字大小    |
| @zmz-badge-num-line-height    |  --zmz-badge-num-line-height        | 18px | 数字行高    |
| @zmz-badge-num-padding     |  --zmz-badge-num-padding        |  0 6px | 数字内边距    |
