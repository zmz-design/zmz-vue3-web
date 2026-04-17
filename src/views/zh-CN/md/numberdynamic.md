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
            title: 'Numberdynamic 动态数字' + this.currentConfig('tails'),
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
# Numberdynamic 动态数字
----
动态变化的数字

## 基本用法
<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-numberdynamic :start-value="100" :end-value="185339"></zmz-numberdynamic>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-numberdynamic :start-value="100" :end-value="28212588"></zmz-numberdynamic>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-numberdynamic :start-value="0" :end-value="35731477"></zmz-numberdynamic>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-numberdynamic :start-value="100" :end-value="185339"></zmz-numberdynamic>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-numberdynamic :start-value="100" :end-value="28212588"></zmz-numberdynamic>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-numberdynamic :start-value="0" :end-value="35731477"></zmz-numberdynamic>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 分割用法
<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-numberdynamic :start-value="100000" division :end-value="185339"></zmz-numberdynamic>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-numberdynamic :start-value="100" division :end-value="28212588"></zmz-numberdynamic>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-numberdynamic :start-value="0" division :end-value="35731477"></zmz-numberdynamic>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-numberdynamic :start-value="100000" division :end-value="185339"></zmz-numberdynamic>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-numberdynamic :start-value="100" division :end-value="28212588"></zmz-numberdynamic>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-numberdynamic :start-value="0" division :end-value="35731477"></zmz-numberdynamic>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::


## Numberdynamic 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| start-value      |  开始值 |    Number   |    — | 0 |
| end-value      |  结束值 |  Number  |    — | 0 |
| division      |  是否分割 |    Boolean   |    — | false |
| division-digit     |  分割位数 |    Number   |    — | 3 |
| division-symbol      |  分割符号 |    String   |    — | ， |
| speed      |  加载速度 |    Number   |    — | 10（越小越快） |
| time | 加载时间 | Number |  — | 10 |

## Numberdynamic 事件
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-animation-end | 动画停止触发 | function(even)  |