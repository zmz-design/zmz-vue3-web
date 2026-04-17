<script>
import cover from '@docs/assets/images/face.png'
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
            title: 'Avatar 头像' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            state: false,
            imgUrl: cover,
            src: [
                cover,
                cover,
                cover,
                cover,
                cover,
                cover,
                cover
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
# Avatar 头像
----
用图片或文字图片展示头像内容

## 基本用法
默认圆形
<div class="demo-block">
    <zmz-avatar size="large" :src="imgUrl"></zmz-avatar>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-avatar size="large" :src="'img/face.png'"></zmz-avatar>
    </div>
</template>
```
:::

## 方形头像
使用shape来切换圆形```circle```方形```square```。
<div class="demo-block">
    <zmz-avatar size="large" shape="square" :src="imgUrl"></zmz-avatar>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-avatar size="large" shape="square" :src="'img/face.png'"></zmz-avatar>
    </div>
</template>
```
:::

## 头像组
使用``zmz-avatar-group``实现
<div class="demo-block">
    <zmz-avatar-group  :src="src"></zmz-avatar-group>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-avatar-group  :src="src"></zmz-avatar-group>
    </div>
</template>
<script>
export default {
    data() {
        return {
            src: [
                'img/face.png',
                'img/face.png',
                'img/face.png',
                'img/face.png',
                'img/face.png',
                'img/face.png',
                'img/face.png'
            ]
        };
    }
};
</script>
```
:::

## 头像类型
支持：图标、图片和字符等三种类型。
<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-avatar icon="zmz-icon--user" size="large"></zmz-avatar>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-avatar :src="imgUrl" size="large"></zmz-avatar>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-avatar size="large">用户</zmz-avatar>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-avatar icon="zmz-icon--user" size="large"></zmz-avatar>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-avatar :src="'img/face.png'" size="large"></zmz-avatar>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-avatar size="large">用户</zmz-avatar>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## 图片加载失败
图片加载失败，触发`on-img-error`事件， 处于图片状态，图片加载失败可以使用默认插槽，来加载失败后的补位图。
<div class="demo-block">
    <zmz-avatar src="" size="large">
        <img src="@docs/assets/images/face-error.png" style="object-fit: cover;width: 100%;height: 100%;">
    </zmz-avatar>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-avatar src="" size="large">
            <img src="@docs/assets/images/face-error.png" style="object-fit: cover;width: 100%;height: 100%;">
        </zmz-avatar>
    </div>
</template>
```
:::

## 不同尺寸
额外的尺寸：```large```、```medium```、```default```、```small```、```mini```通过设置```size```属性来配置它们。
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>
            <zmz-space>
                <zmz-space-item>
                    <zmz-avatar size="large" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-avatar size="medium" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-avatar size="default" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-avatar size="small" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-avatar size="mini" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
            </zmz-space>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-space>
                <zmz-space-item>
                    <zmz-avatar size="large" shape="square" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-avatar size="medium" shape="square" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-avatar size="default" shape="square" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-avatar size="small" shape="square" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
                <zmz-space-item>
                    <zmz-avatar size="mini" shape="square" :src="imgUrl"></zmz-avatar>
                </zmz-space-item>
            </zmz-space>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-space>
                    <zmz-space-item>
                        <zmz-avatar size="large" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-avatar size="medium" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-avatar size="default" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-avatar size="small" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-avatar size="mini" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                </zmz-space>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-space>
                    <zmz-space-item>
                        <zmz-avatar size="large" shape="square" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-avatar size="medium" shape="square" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-avatar size="default" shape="square" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-avatar size="small" shape="square" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                    <zmz-space-item>
                        <zmz-avatar size="mini" shape="square" :src="'img/face.png'"></zmz-avatar>
                    </zmz-space-item>
                </zmz-space>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::


## Avatar 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| shape      |	头像形状 |	String   |	circle/square           |	circle  |
| size   | 头像大小 | String  | `large`, `default`, `medium`, `small`, `mini`  |  default  |
| fit |  图片自适应类型  |    String    |    `fill`, `contain`, `cover`, `none`, `scale-down`            |    cover      |
| icon      |  文字图标， 见icon组件 |    String   |    — | — |
| src      |  图片地址 |    String/Array   |    — | — |
| alt      |  图片原生属性 |    String   |    — | — |

## Avatar 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-img-error | 图片加载失败回调 | function(even)  |

## Avatar slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |

## Avatar-group 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| shape      |	头像形状 |	String   |	circle/square           |	circle  |
| size   | 头像大小 | String  | `large`, `default`, `medium`, `small`, `mini`  |  default  |
| fit |  图片自适应类型  |    String    |    `fill`, `contain`, `cover`, `none`, `scale-down`            |    cover      |
| icon      |  文字图标， 见icon组件 |    String   |    — | — |
| src      |  图片地址 |    Array   |    — | — |
| alt      |  图片原生属性 |    String   |    — | — |
| offset      |  头像偏移 |    Number   |    — | 14 |
| maxCount      |  最大展示数量 |    Number   |    — | 5 |
| keyField      |  图片数组为对象值可指定相应对象字段 |    String   |    — | — |

## Avatar-group 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-img-error | 图片加载失败回调 | function(even, index)  |

## Avatar-group slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |

## Avatar 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-avatar-width             |  --zmz-avatar-width                 | 32px     |   宽度    |
| @zmz-avatar-height      |  --zmz-avatar-height         | 32px         | 高度      |
| @zmz-avatar-icon-color         |  --zmz-avatar-icon-color          | #fff     | 图标颜色        |
| @zmz-avatar-icon-font-size       |  --zmz-avatar-icon-font-size          | 18px      | 图标大小        |
| @zmz-avatar-background-color       |  --zmz-avatar-background-color          | #c2c4c9      | 背景色        |
| @zmz-avatar-custom-text-color       |  --zmz-avatar-custom-text-color          | #fff      | 自定义文字颜色        |
| @zmz-avatar-custom-font-size       |  --zmz-avatar-custom-font-size          | 12px      | 自定义文字大小        |
| @zmz-avatar-circle-radius       |  --zmz-avatar-circle-radius          | 50%      | 圆角        |
| @zmz-avatar-more-background-color      |  --zmz-avatar-more-background-color         | rgba(0, 0, 0, 0.5)          | 更多背景色   |
| @zmz-avatar-more-text-color      |  --zmz-avatar-more-text-color         | #fff          | 更多文字颜色      |
| @zmz-avatar-more-font-size   |  --zmz-avatar-more-font-size      | 16px     | 更多字体大小    |
