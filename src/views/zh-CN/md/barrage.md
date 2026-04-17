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
            title: 'Barrage 弹幕' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            data: [
                '你这该死的温柔',
                '让我心在痛泪在流',
                '就在和你说分手以后',
                '想忘记已不能够',
                '让我止不住颤抖',
                '哪怕有再多的借口',
                '我都无法再去牵你的手',
                '说好从此后说好泪不流',
                '缘份已尽的时候你不再要借口',
                '风停了雨顿了你一定要走',
                '我还站在记忆里在感受',
                '你这该死的温柔让我心在痛泪在流',
                '就在和你说分手以后想忘记已不能够',
                '你这该死的温柔让我止不住颤抖',
                '哪怕有再多的借口我都无法再去牵你的手',
                '说好泪不流',
                '缘份已尽的时候你不再要借口',
                '风停了雨顿了你一定要走',
                '我还站在记忆里在感受',
                '你这该死的温柔让我心在痛泪在流',
                '就在和你说分手以后想忘记已不能够',
                '你这该死的温柔让我止不住颤抖',
                '哪怕有再多的借口我都无法再去牵你的手',
                '你这该死的温柔让我心在痛泪在流',
                '就在和你说分手以后想忘记已不能够',
                '你这该死的温柔让我止不住颤抖',
                '哪怕有再多的借口我都无法再去牵你的手',
                '哦...牵你的手牵你的手',
            ].map((item) => {
                return {content: item}
            })
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Barrage 弹幕
----
弹幕，指的是在网络上观看视频时弹出的评论性字幕。

### 基础用法
把评论弹幕从左移动到右侧

<div class="demo-block">
    <zmz-barrage :data="data"></zmz-barrage>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-barrage :data="data"></zmz-barrage>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                '你这该死的温柔',
                '让我心在痛泪在流',
                '就在和你说分手以后',
                '想忘记已不能够',
                '让我止不住颤抖',
                '哪怕有再多的借口',
                '我都无法再去牵你的手',
                '说好从此后说好泪不流',
                '缘份已尽的时候你不再要借口',
                '风停了雨顿了你一定要走',
                '我还站在记忆里在感受',
                '你这该死的温柔让我心在痛泪在流',
                '就在和你说分手以后想忘记已不能够',
                '你这该死的温柔让我止不住颤抖',
                '哪怕有再多的借口我都无法再去牵你的手',
                '说好泪不流',
                '缘份已尽的时候你不再要借口',
                '风停了雨顿了你一定要走',
                '我还站在记忆里在感受',
                '你这该死的温柔让我心在痛泪在流',
                '就在和你说分手以后想忘记已不能够',
                '你这该死的温柔让我止不住颤抖',
                '哪怕有再多的借口我都无法再去牵你的手',
                '你这该死的温柔让我心在痛泪在流',
                '就在和你说分手以后想忘记已不能够',
                '你这该死的温柔让我止不住颤抖',
                '哪怕有再多的借口我都无法再去牵你的手',
                '哦...牵你的手牵你的手',
            ].map((item) => {
                return {content: item}
            })
        };
    }
}
</script>
```
:::

## Barrage 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 数据项 | Number |  { content: ''} | 400 |
| loop | 是否循环 | Boolean | - | false |
| autoplay | 自动播放 | Boolean |   -   | 5true0 |
| speeds | 速度 | Number |  -    | 200 |
| tracks | 轨道 | Number |  -    | 3 |
| offsetRight | 右侧偏移 |Number |  -   | 10 |
| offsetTop | 顶部偏移 | Number | -  | 10 |
| fontSize | 字体大小 | Number | -   | 18 |
| color | 颜色 | String | -  | #000 |
| debounce | 刷新频率，0为电脑默认刷新频率 | Number | -   | 0 |
| useHtml | 是否开启html,默认字符串 | Boolean | -  | false |
| suspend | 是否开启悬浮暂停 | Boolean | -  | false |


## Barrage 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-barrage-loop | 弹幕循环 | function(index)  |
| on-barrage-item-mousemove | 弹幕单个滑入 | function(event, el)  |
| on-barrage-item-mouseout | 弹幕单个滑出 | function(event, el)  |
| on-barrage-item-loop-end | 弹幕循环单个结束 | function(event, index)  |
| on-barrage-item-end | 弹幕单个结束 | function(event, index)  |
| on-barrage-end | 弹幕结束 | function(event, index)  |
| on-barrage-track-change | 弹道发生变化 | function(track)  |

