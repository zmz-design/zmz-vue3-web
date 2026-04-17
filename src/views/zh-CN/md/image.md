<script>
import cover0 from '@docs/assets/images/0.jpg';
import cover1 from '@docs/assets/images/1.jpg';
import cover2 from '@docs/assets/images/2.jpg';
import cover3 from '@docs/assets/images/3.jpg';

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
            title: 'Image 图片' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            state: false,
            preview: [
                cover0,
                cover1,
                cover2,
                cover3,
            ],
            src: cover0
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Image 图片
----
图片容器

## 基本用法
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-image style="width:100px;height:100px" fit="fill" :src="src"></zmz-image></zmz-space-item>
        <zmz-space-item><zmz-image style="width:100px;height:100px" fit="contain" :src="src"></zmz-image></zmz-space-item>
        <zmz-space-item><zmz-image style="width:100px;height:100px" fit="cover" :src="src"></zmz-image></zmz-space-item>
        <zmz-space-item><zmz-image style="width:100px;height:100px" fit="none" :src="src"></zmz-image></zmz-space-item>
        <zmz-space-item><zmz-image style="width:100px;height:100px" fit="scale-down" :src="src"></zmz-image></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-image style="width:100px;height:100px" fit="fill" :src="src"></zmz-image></zmz-space-item>
            <zmz-space-item><zmz-image style="width:100px;height:100px" fit="contain" :src="src"></zmz-image></zmz-space-item>
            <zmz-space-item><zmz-image style="width:100px;height:100px" fit="cover" :src="src"></zmz-image></zmz-space-item>
            <zmz-space-item><zmz-image style="width:100px;height:100px" fit="none" :src="src"></zmz-image></zmz-space-item>
            <zmz-space-item><zmz-image style="width:100px;height:100px" fit="scale-down" :src="src"></zmz-image></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            src: 'img/0.jpg'
        };
    }
};
</script>
```
:::

## 圆形图片
适用于等宽高，使用shape来切换圆形```circle```方形```square```。
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-image fit="cover" style="width:100px;height:100px" shape="circle" :src="src"></zmz-image></zmz-space-item>
        <zmz-space-item><zmz-image fit="cover" style="width:100px;height:100px" shape="circle" radius="10px" :src="src"></zmz-image></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-image fit="cover" style="width:100px;height:100px" shape="circle" :src="src"></zmz-image></zmz-space-item>
            <zmz-space-item><zmz-image fit="cover" style="width:100px;height:100px" shape="circle" radius="10px" :src="src"></zmz-image></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            src: 'img/0.jpg'
        };
    }
};
</script>
```
:::

## 图片加载失败
图片加载失败，触发`on-error`事件， 处于图片状态，图片加载失败可以使用默认插槽，来加载失败后的补位图。
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-image></zmz-image></zmz-space-item>
        <zmz-space-item>
            <zmz-image>
                <template #error>
                    自定义内容
                </template>
            </zmz-image>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-image></zmz-image></zmz-space-item>
            <zmz-space-item>
                <zmz-image>
                    <template #error>
                        自定义内容
                    </template>
                </zmz-image>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 图片懒加载
<div class="demo-block">
    <div style="overflow:hidden;overflow-y:auto;height: 300px;">
        <zmz-image v-for="item in 10" v-zmzlazyload="{'src': src}" :key="item" fit="scale-down" :src="src"></zmz-image>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="overflow:hidden;overflow-y:auto;height: 300px;">
            <zmz-image v-for="item in 10" v-zmzlazyload="{'src': src}" :key="item" fit="scale-down" :src="src"></zmz-image>
        </div>
    </div>
</template>
```
:::

## 图片预览
<div class="demo-block">
	<zmz-image preview :preview-picture-list="preview" fit="cover" style="width:100px;height:100px" :src="src"></zmz-image>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-image preview :preview-picture-list="preview" fit="cover" style="width:100px;height:100px" :src="src"></zmz-image>
    </div>
</template>
<script>
export default {
    data() {
        return {
            preview: [
                'img/0.jpg',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
            ],
            src: 'img/0.jpg'
        };
    }
};
</script>
```
:::

## 预览组件

::: warning

内置zmz-image-preview预览组件参数见下方

:::


## Image 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| src      |  图片地址 |    String   |    — | — |
| shape      |	头像形状 |	String   |	circle/square           |	circle  |
| fit |  图片自适应类型  |    String    |    fill / contain / cover / none / scale-down           |    cover      |
| alt      |  图片原生属性 |    String   |    — | — |
| radius      |  circle状态下，自定义圆角 |    String   |    — | — |
| preview      |  是否开启预览 |    Boolean   |    — | false |
| preview-picture-list      |	预览图片数据ArrayString |	Array   |	—    |	[]  |
| preview-teleport | 预览是否穿梭 | Boolean | 	— | false |
| preview-teleport-dom | 预览自身是否插入至 位置 元素 | String | 	— | 'body' |

## Image 事件
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
| on-open-before | 打开之前 | — |
| on-open | 打开中 | — |
| on-open-after | 打开之后 | — |
| on-close-before | 关闭之前 | — |
| on-close | 关闭中 | — |
| on-close-after | 关闭之后 | — |
| on-image-error | 图片加载失败回调 | function(even)  |

## Image slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| error | 错误自定义插槽 |

## ImagePreview 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| v-model      |  是否显示 |    Boolean   |    — | false |
| previewImageList |  图片列表  |    Array    |   —            |    —      |
| current      |  数组下标 |    Number   |    — | 0 |
| teleport | 是否穿梭 | Boolean | 	true/false | false |
| teleport-dom | Model 自身是否插入至 位置 元素 | String | 	— | 'body' |

## ImagePreview 事件
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
| on-open-before | 打开之前 | — |
| on-open | 打开中 | — |
| on-open-after | 打开之后 | — |
| on-close-before | 关闭之前 | — |
| on-close | 关闭中 | — |
| on-close-after | 关闭之后 | — |
| on-button-close | 点击按钮关闭回调 | function(even)  |
| on-img-load | 图片加载回调 | function(even)  |
| on-img-error | 图片加载失败回调 | function(even)  |
| on-preview-enlarge | 放大 | function(transform)  |
| on-preview-narrow | 缩小 | function(transform)  |
| on-preview-rotate-left | 左旋转 | function(transform)  |
| on-preview-rotate-right | 右旋转 | function(transform)  |
| on-preview-equal | 等比例 | function(true/false)  |
| on-preview-prev | 上一个 | function(index)  |
| on-preview-next | 下一个 | function(index)  |
| on-preview-down | 按下 | function(transform)  |
| on-preview-move | 移动 | function(transform)  |
| on-preview-up | 抬起 | function(transform)  |
| on-preview-wheel | 鼠标滚动缩放图片 | function(transform)  |

## ImagePreview slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| error | 错误自定义插槽 |

## Image 样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-image-error-background-color             |  --zmz-image-error-background-color                 | #f4f5f9     | 错误背景色      |
| @zmz-image-error-text-color      |  --zmz-image-error-text-color         | #c0c4cc          | 错误字体颜色      |
| @zmz-image-error-font-size          |  --zmz-image-error-font-size           | 12px     | 错误文字颜色        |
| @zmz-image-preview-cursor       |  --zmz-image-preview-cursor          | pointer      | 预览指针样式        |
| @zmz-image-circle-radius      |  --zmz-image-circle-radius         | rgba(0, 0, 0, 0.5)          | 圆角   |
