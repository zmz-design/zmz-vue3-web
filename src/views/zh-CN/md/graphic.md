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
            title: 'Graphic 图文列表' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description')
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    },
}
</script>
# Graphic 图文列表
----
用于列表图文展示

## 基础用法

<div class="demo-block">
    <zmz-graphic>
        <zmz-graphic-image width="100" height="100" src="https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png"></zmz-graphic-image>
        <zmz-graphic-text title="我是标题" content="我是内容">
            <template #title>
                <div style="display: flex;align-items: center;justify-content: space-between;"><span>nodejs图片的压缩上传和base64的上传接受显示</span> <span style="font-weight: initial;">2019-12-05</span></div>
            </template>
            <template #content>
                <div style="display: flex; align-items: center; justify-content: space-between;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;">
                    EventBus是一个非常重要且常用的东西，在不相关组件通信方面有着很强大的作用。想想如果从最顶层组件传一个data给最底层组件，仅仅使用父子传递的方式会变得十分麻烦。而EventBus就是用来解决这个问题的：在需要获取data的组件上设置一个监听器，每次要传递data时，那个组件就广播这个事件并调用这些监听器。我们不难发现EventBus的主要功能就两个：监听和广播，当然还有去掉监听器。
                </div>
            </template>
            <span style="color: #999aaa;">阅读: 124</span>
            <span style="margin-left: 10px;color: #999aaa;">评论: 125</span>
            <span style="margin-left: 10px;color: #999aaa;">收藏: 111</span>
            <span style="margin-left: 10px;color: #999aaa;">发表时间: 2019-12-05</span>
        </zmz-graphic-text>
    </zmz-graphic>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-graphic>
            <zmz-graphic-image width="100" height="100" src="https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png"></zmz-graphic-image>
            <zmz-graphic-text title="我是标题" content="我是内容">
                <template #title>
                    <div style="display: flex;align-items: center;justify-content: space-between;"><span>nodejs图片的压缩上传和base64的上传接受显示</span> <span style="font-weight: initial;">2019-12-05</span></div>
                </template>
                <template #content>
                    <div style="display: flex; align-items: center; justify-content: space-between;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;">
                        EventBus是一个非常重要且常用的东西，在不相关组件通信方面有着很强大的作用。想想如果从最顶层组件传一个data给最底层组件，仅仅使用父子传递的方式会变得十分麻烦。而EventBus就是用来解决这个问题的：在需要获取data的组件上设置一个监听器，每次要传递data时，那个组件就广播这个事件并调用这些监听器。我们不难发现EventBus的主要功能就两个：监听和广播，当然还有去掉监听器。
                    </div>
                </template>
                <span style="color: #999aaa;">阅读: 124</span>
                <span style="margin-left: 10px;color: #999aaa;">评论: 125</span>
                <span style="margin-left: 10px;color: #999aaa;">收藏: 111</span>
                <span style="margin-left: 10px;color: #999aaa;">发表时间: 2019-12-05</span>
            </zmz-graphic-text>
        </zmz-graphic>
    </div>
</template>
```
:::

## Graphic 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |  备注  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| spacing | 外部盒子间隙，同padding | String | — | 5px 0 5px 0 | — |

## Graphic.image 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |  备注  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| width | 图片宽 | String/Number | — | — |— |
| height | 图片高 | String/Number | — | — |— |
| src | 图片地址 | String | — | — |— |
| spacing | 图片右间隙 | String/Number | — | 20 | — |
| radius | 图片圆角 | String/Number | — | 10| — |

## Graphic.text 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |  备注  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| title | 列表标题 | String | — | — |— |
| content | 列表内容 | String | — | — |— |
| justify-content | 居中方式，见justify-content | String | — | space-around |— |
| spacing | 外部盒子间隙，同padding | String | — | 5px 0 5px 0 | — |

## Graphic slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| title | 标题插槽 |
| content | 内容插槽 |
| other / default| - | 其他或默认插槽 |
| image | 图片插槽 |
