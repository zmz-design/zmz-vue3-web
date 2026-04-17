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
            title: 'Pagefooter 页尾' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Pagefooter 页尾
----
一般用于页面底部版权

## 基本用法
<div class="demo-block">
    <zmz-pagefooter copyright="Copyright © 2018- 2024 追梦猪 冀ICP备18035267号-1">
        <div style="display:flex;">
            <div style="flex:1;">
                <div style="font-size: 14px;font-weight:bold;">官网</div>
                <div style="font-size: 12px;font-weight:400;margin-top:10px;">追梦猪</div>
                <div style="font-size: 12px;font-weight:400;margin-top:10px;">h5小游戏</div>
                <div style="font-size: 12px;font-weight:400;margin-top:10px;">答面宝典</div>
            </div>
            <div style="flex:1;">
                <div style="font-size: 14px;font-weight:bold;">官网</div>
                <div style="font-size: 12px;font-weight:400;margin-top:10px;">zmz-ui3文档</div>
                <div style="font-size: 12px;font-weight:400;margin-top:10px;">zmz-ui2文档</div>
            </div>
           <div style="flex:1;">
                <div style="font-size: 14px;font-weight:bold;">官网</div>
                <div style="font-size: 12px;font-weight:400;margin-top:10px;">编辑器</div>
                <div style="font-size: 12px;font-weight:400;margin-top:10px;">echarts编辑器</div>
                <div style="font-size: 12px;font-weight:400;margin-top:10px;">vue编辑器</div>
            </div>
        </div>
    </zmz-pagefooter>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-pagefooter copyright="Copyright © 2018- 2024 追梦猪 冀ICP备18035267号-1">
            <div style="display:flex;">
                <div style="flex:1;">
                    <div style="font-size: 14px;font-weight:bold;">官网</div>
                    <div style="font-size: 12px;font-weight:400;margin-top:10px;">追梦猪</div>
                    <div style="font-size: 12px;font-weight:400;margin-top:10px;">h5小游戏</div>
                    <div style="font-size: 12px;font-weight:400;margin-top:10px;">答面宝典</div>
                </div>
                <div style="flex:1;">
                    <div style="font-size: 14px;font-weight:bold;">官网</div>
                    <div style="font-size: 12px;font-weight:400;margin-top:10px;">zmz-ui3文档</div>
                    <div style="font-size: 12px;font-weight:400;margin-top:10px;">zmz-ui2文档</div>
                </div>
            <div style="flex:1;">
                    <div style="font-size: 14px;font-weight:bold;">官网</div>
                    <div style="font-size: 12px;font-weight:400;margin-top:10px;">编辑器</div>
                    <div style="font-size: 12px;font-weight:400;margin-top:10px;">echarts编辑器</div>
                    <div style="font-size: 12px;font-weight:400;margin-top:10px;">vue编辑器</div>
                </div>
            </div>
        </zmz-pagefooter>
    </div>
</template>
```
:::

## 自定义颜色
<div class="demo-block">
    <zmz-pagefooter background="#f5f7fa" color="#606266">
        自定义扩展内容
        <template #copyright>
            追梦猪版权所有
        </template>
    </zmz-pagefooter>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-pagefooter>
            自定义扩展内容
            <template #copyright>
                追梦猪版权所有
            </template>
        </zmz-pagefooter>
    </div>
</template>
```
:::

## Pagefooter 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| background      |	背景色 |	String   |	—    |	#fff  |
| color   | 文字颜色 | String  | —  |  —  | #000
| fixed |  是否固定  |    Boolean    |   —  |    false     |
| zIndex |  固定层级  |    Number    |    —           |    —      |
| safety-width |  底部安全范围  |    String    |    —           |   100%     |

## Pagefooter 插槽
| 名称      | 说明          |
|---------- |-------------- |
| default | 自定义扩展内容插槽 |
| copyright | 版权插槽 |

## Pagefooter 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-pagefooter-background-color              |  --zmz-pagefooter-background-color                  | #fff      | 背景色     |
| @zmz-pagefooter-content-padding          |  --zmz-pagefooter-content-padding          | 20px     | 内容边距        |
| @zmz-pagefooter-content-font-size      |  --zmz-pagefooter-content-font-size        | 12px         | 内容字体大小    |
| @zmz-pagefooter-content-text-color      |  --zmz-pagefooter-content-text-color      | #495565        | 内容文字颜色      |
| @zmz-pagefooter-copyright-padding       |  --zmz-pagefooter-copyright-padding          |  20px       | 版权边距        |
| @zmz-pagefooter-copyright-font-size  |  --zmz-pagefooter-copyright-font-size     | 12px          | 版权字体大小    |
| @zmz-pagefooter-copyright-text-color  |  --zmz-pagefooter-copyright-text-color     | #495565          | 版权文字颜色    |
