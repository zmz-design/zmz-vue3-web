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
            title: 'Carousel 轮播图' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            current: 0
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
<style>
    .zmz-carousel__item {
        background:#3f536e;
        display:flex;
        align-items:center;
        justify-content: center;
        font-size: 14px;
        color: #fff;
    }
</style>
# Carousel 轮播图
----
在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法
适用广泛的基础用法

<div class="demo-block">
    <zmz-carousel v-model="current">
        <zmz-carousel-item>1</zmz-carousel-item>
        <zmz-carousel-item>2</zmz-carousel-item>
        <zmz-carousel-item>3</zmz-carousel-item>
        <zmz-carousel-item>4</zmz-carousel-item>
    </zmz-carousel>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-carousel v-model="current">
            <zmz-carousel-item>1</zmz-carousel-item>
            <zmz-carousel-item>2</zmz-carousel-item>
            <zmz-carousel-item>3</zmz-carousel-item>
            <zmz-carousel-item>4</zmz-carousel-item>
        </zmz-carousel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
</script>
```
:::


## 触发方式
点击或滑过指示器进行切换，默认click

<div class="demo-block">
    <zmz-space :show-last-padding="false">
        <zmz-space-item style="width: 50%">
            <div style="height:30px;text-align: center;">Hover 指示器触发</div>
            <zmz-carousel v-model="current" trigger="hover" :height="200">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
        <zmz-space-item style="width: 50%">
            <div style="height:30px;text-align: center;">Click 指示器触发</div>
            <zmz-carousel v-model="current" trigger="click" :height="200">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">Hover 指示器触发</div>
                <zmz-carousel v-model="current" trigger="hover" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">Click 指示器触发</div>
                <zmz-carousel v-model="current" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
</script>
```
:::


## 指示器
点击或滑过指示器进行切换，默认click

<div class="demo-block">
    <zmz-space :show-last-padding="false">
        <zmz-space-item style="width: 33.33%">
            <div style="height:30px;text-align: center;">指示器(内部)</div>
            <zmz-carousel v-model="current" indicator="inside" trigger="click" :height="200">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
        <zmz-space-item style="width: 33.33%">
            <div style="height:30px;text-align: center;">指示器(内部)</div>
            <zmz-carousel v-model="current" indicator="outside" trigger="click" :height="200">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
        <zmz-space-item style="width: 33.33%">
            <div style="height:30px;text-align: center;">指示器(不显示)</div>
            <zmz-carousel v-model="current" indicator="none" trigger="click" :height="200">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(内部)</div>
                <zmz-carousel v-model="current" indicator="inside" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(内部)</div>
                <zmz-carousel v-model="current" indicator="outside" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(不显示)</div>
                <zmz-carousel v-model="current" indicator="none" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
</script>
```
:::


## 切换箭头
 切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）

<div class="demo-block">
    <zmz-space :show-last-padding="false">
        <zmz-space-item style="width: 33.33%">
            <div style="height:30px;text-align: center;">指示器(悬停)</div>
            <zmz-carousel v-model="current"  arrow="hover" trigger="hover" :height="200">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
        <zmz-space-item style="width: 33.33%">
            <div style="height:30px;text-align: center;">指示器(一直显示)</div>
            <zmz-carousel v-model="current"  arrow="always" trigger="click" :height="200">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
        <zmz-space-item style="width: 33.33%">
            <div style="height:30px;text-align: center;">指示器(不显示)</div>
            <zmz-carousel v-model="current"  arrow="never" trigger="click" :height="200">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(悬停)</div>
                <zmz-carousel v-model="current"  arrow="hover" trigger="hover" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(一直显示)</div>
                <zmz-carousel v-model="current"  arrow="always" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(不显示)</div>
                <zmz-carousel v-model="current"  arrow="never" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
</script>
```
:::


## 切换方向
设置属性``mode`` ,修改轮播图的方向

<div class="demo-block">
    <zmz-space :show-last-padding="false">
        <zmz-space-item style="width: 50%">
            <div style="height:30px;text-align: center;">水平(horizontal)</div>
            <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="horizontal">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
        <zmz-space-item style="width: 50%">
            <div style="height:30px;text-align: center;">垂直(vertical)</div>
            <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="vertical">
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">水平(horizontal)</div>
                <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="horizontal">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">垂直(vertical)</div>
                <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="vertical">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
</script>
```
:::

## 循环轮播
使用属性``loop`` ，让轮播图丝滑过度

<div class="demo-block">
    <zmz-space :show-last-padding="false">
        <zmz-space-item style="width: 50%">
            <div style="height:30px;text-align: center;">水平(horizontal)</div>
            <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="horizontal" loop>
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
        <zmz-space-item style="width: 50%">
            <div style="height:30px;text-align: center;">垂直(vertical)</div>
            <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="vertical" loop>
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">水平(horizontal)</div>
                <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="horizontal" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">垂直(vertical)</div>
                <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="vertical" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
</script>
```
:::

## 轮播效果
使用属性``effect`` ，设置轮播图过度效果,当设置``effect="custom"``可使用``effectTranslate``自定义动画效果

<div class="demo-block">
    <zmz-space :show-last-padding="false">
        <zmz-space-item style="width: 33.33%">
            <div style="height:30px;text-align: center;">幻灯片</div>
            <zmz-carousel v-model="current" arrow="hover" effect="slide" :height="200" loop>
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
        <zmz-space-item style="width: 33.33%">
            <div style="height:30px;text-align: center;">卡片</div>
            <zmz-carousel v-model="current" arrow="hover" effect="card" :height="200" loop>
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
        <zmz-space-item style="width: 33.33%">
            <div style="height:30px;text-align: center;">淡入淡出</div>
            <zmz-carousel v-model="current" arrow="hover" effect="fade" :height="200" loop>
                <zmz-carousel-item>1</zmz-carousel-item>
                <zmz-carousel-item>2</zmz-carousel-item>
                <zmz-carousel-item>3</zmz-carousel-item>
                <zmz-carousel-item>4</zmz-carousel-item>
            </zmz-carousel>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">幻灯片</div>
                <zmz-carousel v-model="current" arrow="hover" effect="slide" :height="200" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">卡片</div>
                <zmz-carousel v-model="current" arrow="hover" effect="card" :height="200" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">淡入淡出</div>
                <zmz-carousel v-model="current" arrow="hover" effect="fade" :height="200" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
</script>
```
:::

## Carousel 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 轮播图下标 | Number | — | 0 |
| height | 轮播图的高度 | Number | — | — |
| indicator | 指示器的位置, inside （内部），outside（外部），none（不显示） | String | — | inside |
| loop | 是否开启轮播图循环 | Boolean | —	 | false |
| autoplay | 是否自动切换 | Boolean | —     | false |
| swipeable | 可在轮播图上按下拖拽切换 | Boolean | —     | true |
| arrow | 切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示） | String | —     | hover |
| delay | 自动切换时间 | Number | —     | 3000 |
| trigger | 触发方式，可选值为 hover（滑入），click（点击）| String | —     | click |
| mode | 轮播图效果 | String | horizontal/vertical    | horizontal |
| effect | 轮播图效果 | String | slide/card/fade/custom    | slide |
| effectTranslate | 效果位移，effect为custom时可自定义位移效果 | Function | —   | — |

## Carousel 事件
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
| on-change | 当轮播图发生改变 | function(index: 下标)  |

## Carousel 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-carousel-height         |  --zmz-carousel-height          | 300px       | 高度        |
| @zmz-carousel-indicator-padding              |  --zmz-carousel-indicator-padding                  | 6px 5px      | 指示点边距      |
| @zmz-carousel-indicator-width          |  --zmz-carousel-indicator-width           | 16px       | 指示点宽度        |
| @zmz-carousel-indicator-height    |  --zmz-carousel-indicator-height       | 3px          | 指示点高度    |
| @zmz-carousel-indicator-hover-width          |  --zmz-carousel-indicator-hover-width           | 24px       | 指示点滑过宽度        |
| @zmz-carousel-indicator-hover-height    |  --zmz-carousel-indicator-hover-height       | 3px          | 指示点滑过高度    |
| @zmz-carousel-arrow-width     |  --zmz-carousel-arrow-width        |    30px       | 切换按钮宽度    |
| @zmz-carousel-arrow-height     |  --zmz-carousel-arrow-height        | 30px         | 切换按钮高度    |
| @zmz-carousel-arrow-icon-color     |  --zmz-carousel-arrow-icon-color        |     #fff      | 按钮图标颜色    |
| @zmz-carousel-arrow-icon-size     |  --zmz-carousel-arrow-icon-size        |     14px     | 按钮图标大小    |
| @zmz-carousel-arrow-background-color     |  --zmz-carousel-arrow-background-color        |    rgba(#000, 0.1)      | 按钮背景颜色    |
| @zmz-carousel-arrow-hover-background-color     |  --zmz-carousel-arrow-hover-background-color        |     rgba(#000, 0.3)     | 按钮滑过背景颜色    |