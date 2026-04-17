<script>
import cover0 from '@docs/assets/images/0.jpg';
import cover1 from '@docs/assets/images/1.jpg';
import cover2 from '@docs/assets/images/2.jpg';
import cover3 from '@docs/assets/images/3.jpg';
import cover4 from '@docs/assets/images/4.jpg';
import cover5 from '@docs/assets/images/5.jpg';
import cover6 from '@docs/assets/images/6.jpg';
import cover7 from '@docs/assets/images/7.jpg';
import cover8 from '@docs/assets/images/8.jpg';
import cover9 from '@docs/assets/images/9.jpg';

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
            title: 'Album 相册' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            preview: cover0,
            preview2: [
                cover0,
                '',
                cover1,
                cover2,
                cover3,
                cover4,
                cover5,
                cover6,
                cover7,
                cover8,
                cover9
            ],
            preview3: [
                cover0,
                cover1,
                cover2,
                cover3,
                cover4,
                cover5,
                cover6,
                cover7,
                cover8,
                cover9
            ]
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Album 相册
----
多张图片展示

## 基本用法
单张展示
<div class="demo-block">
    <zmz-album  radius="10px" :image="preview" width="100px" height="100px" preview preview-teleport></zmz-album>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-album :image="preview" width="100px" height="100px" preview></zmz-album>
    </div>
</template>
<script>
export default {
    data() {
        return {
            preview: [
                'img/0.jpg',
            ]
        };
    }
};
</script>
```
:::

## 多图
<div class="demo-block">
    <zmz-album radius="10px" :image="preview3" width="100px" height="100px" gutter="10px"></zmz-album>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-album :image="preview3" width="100px" height="100px" gutter="10px"></zmz-album>
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
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg'
            ]
        };
    }
};
</script>
```
:::

## 图片加载失败
图片加载失败，触发`on-error`事件， 处于图片状态，图片加载失败可以使用默认插槽，来加载失败后的补位图。
<div class="demo-block">
    <zmz-album :image="preview2" width="100px" height="100px" gutter="10px"></zmz-album>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-album :image="preview2" width="100px" height="100px" gutter="10px"></zmz-album>
    </div>
</template>
<script>
export default {
    data() {
        return {
            preview: [
                'img/0.jpg',
                '',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg'
            ]
        };
    }
};
</script>
```
:::

## 图片预览
<div class="demo-block">
    <zmz-album :image="preview3" width="100px" height="100px" gutter="10px" preview></zmz-album>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-album :image="preview3" width="100px" height="100px" gutter="10px" preview></zmz-album>
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
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg'
            ]
        };
    }
};
</script>
```
:::

## Album 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| image      |	相册数据ArrayString |	Array   |	—    |	—  |
| width   | 单张图片宽 | String  | —  |  100%  |
| height |  单张图片高  |    String    |   —  |    100%      |
| fit |  图片自适应类型  |    String    |    fill / contain / cover / none / scale-down            |    cover      |
| gutter | 宫格间隔 | String |  — | — |
| max-count      |  最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量 |    Number / String  |    — | 9 |
| row-count      |  每行展示图片数量 |    Number / String   |    — | 3 |
| radius      |  自定义图片圆角 |    String   |    — | — |
| preview      |  是否开启预览 |    Boolean   |    — | false |
| preview-teleport | 预览是否穿梭 | Boolean | 	— | false |
| preview-teleport-dom | 预览自身是否插入至 位置 元素 | String | 	— | 'body' |

## Album 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-image-error | 图片加载失败回调 | function(even)  |

## Album slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| error | 错误自定义插槽 |

## Album 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-album-error-background-color             |  --zmz-album-error-background-color                 | #f4f5f9     | 错误背景色      |
| @zmz-album-error-text-color      |  --zmz-album-error-text-color         | #c0c4cc          | 错误字体颜色      |
| @zmz-album-error-font-size          |  --zmz-album-error-font-size           | 12px     | 错误文字颜色        |
| @zmz-album-preview-cursor       |  --zmz-album-preview-cursor          | pointer      | 预览指针样式        |
| @zmz-album-more-background-color      |  --zmz-album-more-background-color         | rgba(0, 0, 0, 0.5)          | 更多背景色   |
| @zmz-album-more-text-color      |  --zmz-album-more-text-color         | #fff          | 更多文字颜色      |
| @zmz-album-more-font-size   |  --zmz-album-more-font-size      | 16px     | 更多字体大小    |
