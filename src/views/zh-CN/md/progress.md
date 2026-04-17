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
            title: 'Progress 进度条' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            disabled: true,
            popover: true
        }  
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    },
}
</script>
# Progress 进度条
----
## 基础用法
用于展示操作进度，提示用户当前状态和预期。
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>
            <zmz-progress :num="20"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="20" type="info"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="40" type="primary"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="60" type="success"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="80" type="warning"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="95" type="error"></zmz-progress>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-progress :num="20"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="20" type="info"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="40" type="primary"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="60" type="success"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="80" type="warning"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="95" type="error"></zmz-progress>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::


## 自定义
使用```width```,```height```,```radius```,```color```,```background-color```等属性定义进度条的样式
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>
            <zmz-progress :num="10" width="300px" height="8px" radius="8px" color="#42b5ec"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="50" width="300px" height="16px" radius="16px" background-color="#ff005e"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="100" text-color="#f00" width="300px" height="32px" radius="32px" color="#41b883"></zmz-progress>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-progress :num="10" width="300px" height="8px" radius="8px" color="#42b5ec"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="50" width="300px" height="16px" radius="16px" background-color="#ff005e"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="100" text-color="#f00" width="300px" height="32px" radius="32px" color="#41b883"></zmz-progress>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 尺寸大小
用于展示操作进度，提示用户当前状态和预期。
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>
            <zmz-progress :num="10" type="success" size="large"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="50" type="error" size="medium"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="100" type="warning" size="default"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="10" type="primary" size="small"></zmz-progress>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-progress :num="10" type="info" size="mini"></zmz-progress>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-progress :num="10" type="primary" size="large"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="50" type="success" size="medium"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="100" type="error" size="default"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="10" type="primary" size="small"></zmz-progress>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-progress :num="10" type="primary" size="mini"></zmz-progress>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>

```
:::

## Progress 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size   | 尺寸 | String  | large / medium / default / small / mini  |  default  |
| type   | 类型 | String  | success / error / warning / primary / info / default |   default  |
| num | 进度数 | Number | 0~100 | 0 |
| width | 线宽 | String | — | — |
| height | 线高 | String | — | — |
| radius | 线圆形 | String | — | — |
| color | 进度线颜色 | String | — | — |
| background-color | 进度背景颜色 | String | — | — |
| text-color | 进度文字颜色 | String | — | — |

## Progress 方法
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| on-change | 回调进度 | — | —  | num |

## Progress 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-progress-padding-right              |  --zmz-progress-padding-right                  | 50px      |偏移内边距     |
| @zmz-progress-width          |  --zmz-progress-width          | 100%      | 宽度        |
| @zmz-progress-height      |  --zmz-progress-height        | 3px        | 高度    |
| @zmz-progress-border-radius      |  --zmz-progress-border-radius      | 3px         | 圆角      |
| @zmz-progress-text-color       |  --zmz-progress-text-color          |  默认主题颜色       | 文本颜色        |
| @zmz-progress-text-font-size   |  --zmz-progress-text-font-size      | 12px          | 文本大小    |
| @zmz-progress-line-background-color  |  --zmz-progress-line-background-color    | 12px          | 线背景颜色      |
| @zmz-progress-bar-background-color  |  --zmz-progress-bar-background-color    | 默认主题颜色         | 进度颜色      |