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
            title: 'Loupe 放大镜' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            model: {}
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Loupe 放大镜
----
展示详情放大镜

## 基本用法
<div class="demo-block" style="height:600px;display:flex;align-items: center;justify-content:center;">
    <zmz-loupe :width="300" :height="300" src='https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'></zmz-loupe>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-loupe src='https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'></zmz-loupe>
    </div>
</template>
```
:::


## Loupe 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| src | 图片地址 | ``String`` | — | — |
| width   | 图片宽度 | ``Number``  | —  |  400  |
| height   | 图片高度 | ``Number``  | —  | 400 |
| magnifier-multiple      |	放大镜倍数 |	``Number``   |	—    |	2  |
| magnifier-background   | 放大镜背景色 | ``String``  | —  | — |
| magnifier-width   | 放大镜宽度 | ``String``  | —  | 200 |
| magnifier-height   | 放大镜宽度 | ``String``  | —  | 200 |
| magnifier-shadow   | 放大镜阴影 | ``String``  | —  | — |

## Loupe 事件
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-change | 鼠标发生改变触发 | ``Function({left, top})``  |

## Loupe 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-loupe-width             |  --zmz-loupe-width                  | 400     | 盒子宽度      |
| @zmz-loupe-height       |  --zmz-loupe-height           | 400       | 盒子高度        |
| @zmz-loupe-magnifier-width     |  --zmz-loupe-magnifier-width        |  200         | 放大镜宽度  |
| @zmz-loupe-magnifier-height   |  --zmz-loupe-magnifier-height     | 200        | 放大镜高度    |
| @zmz-loupe-magnifier-shadow-color  |  --zmz-loupe-magnifier-shadow-color     | #fff         | 放大镜阴影      |
| @zmz-loupe-magnifier-image-width         |  --zmz-loupe-magnifier-image-width            | 800       | 放大镜图片宽度        |
| @zmz-loupe-magnifier-image-height         |  --zmz-loupe-magnifier-image-height            | 800       | 放大镜图片高度        |

