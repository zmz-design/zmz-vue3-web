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
            title: 'Comment 评论' + this.currentConfig('tails'),
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
# Comment 评论列表
----
用户评论展示

## 基础用法
一级评论

<div class="demo-block">
  <zmz-comment>
      <zmz-comment-item v-for="(item) in 2" :key="item" :title="`我是评论标题${item}`" :content="`我是评论内容${item}`" date="几秒前">
        <template #avatar>
            <div style="width:60px;height:60px;border-radius:50%;background:rgb(74 93 113);color:#fff;text-align:center;line-height:60px;">头像</div>
        </template>
        <template #button>
            <div>回复</div>
        </template>
      </zmz-comment-item>
  </zmz-comment>
</div>

::: demo
```html
<template>
    <div class="demo-block">
    <zmz-comment>
        <zmz-comment-item v-for="(item) in 2" :key="item" :title="`我是评论标题${item}`" :content="`我是评论内容${item}`" date="几秒前">
            <template #avatar>
                <div style="width:60px;height:60px;border-radius:50%;background:rgb(74 93 113);color:#fff;text-align:center;line-height:60px;">头像</div>
            </template>
            <template #button>
                <div>回复</div>
            </template>
        </zmz-comment-item>
    </zmz-comment>
    </div>
</template>
```
:::

## 嵌套用法
多级评论回复，理论可以无限级，但是在样式页面展示不要超过三级。

<div class="demo-block">
    <zmz-comment>
        <zmz-comment-item v-for="(item) in 2" :key="item" :title="`我是评论标题${item}`" :content="`我是评论内容${item}`" date="几秒前">
            <template #avatar>
                <div style="width:60px;height:60px;border-radius:50%;background:rgb(74 93 113);color:#fff;text-align:center;line-height:60px;">头像</div>
            </template>
            <zmz-comment-item v-for="(items) in 2" :key="items" :title="`我是评论标题${item} - ${items}`" :content="`我是评论内容${item}`" date="几秒前">
                <template #avatar>
                    <div style="width:60px;height:60px;border-radius:50%;background:rgb(74 93 113);color:#fff;text-align:center;line-height:60px;">头像</div>
                </template>
            </zmz-comment-item>
        </zmz-comment-item>
    </zmz-comment>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-comment>
            <zmz-comment-item v-for="(item) in 2" :key="item" :title="`我是评论标题${item}`" :content="`我是评论内容${item}`" date="几秒前">
                <template #avatar>
                    <div style="width:60px;height:60px;border-radius:50%;background:rgb(74 93 113);color:#fff;text-align:center;line-height:60px;">头像</div>
                </template>
                <zmz-comment-item v-for="(items) in 2" :key="items" :title="`我是评论标题${item} - ${items}`" :content="`我是评论内容${item}`" date="几秒前">
                    <template #avatar>
                        <div style="width:60px;height:60px;border-radius:50%;background:rgb(74 93 113);color:#fff;text-align:center;line-height:60px;">头像</div>
                    </template>
                </zmz-comment-item>
            </zmz-comment-item>
        </zmz-comment>
    </div>
</template>
```
:::

## Comment 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| offset | 嵌套偏移 | String | — | '70px' |

## Comment-Item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | String | — |  — |
| content | 内容 | String | — | — |
| date | 时间 | String | — | — |
| avatar | 头像图片 | String | — | — |
| offset | 嵌套偏移,覆盖父级 | String | — | '70px' |

## Comment-Item 插槽
| 名称      | 说明          |参数          |
|---------- |-------------- |-------        |
| avatar | 头像插槽 | — |
| title | 标题插槽 | — |
| content | 内容插槽 | — |
| button | 内容插槽 | — |
| date | 时间插槽 | — |
| default | 默认嵌套插槽 | — |

## Comment 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-comment-title-font-size              |  --zmz-comment-font-size                  | 14px      | 标题字体大小      |
| @zmz-comment-title-color          |  --zmz-comment-title-color           | #282828       | 标题字体颜色        |
| @zmz-comment-content-font-size              |  --zmz-comment-content-font-size                  | 12px      | 内容字体大小      |
| @zmz-comment-content-color         |  --zmz-comment-content-color          | #282828       | 内容字体颜色        |
| @zmz-comment-date-font-size    |  --zmz-comment-date-font-size       | 12px          | 时间字体大小    |
| @zmz-comment-date-color     |  --zmz-comment-date-color        |  #BFC4CD          | 时间字体颜色    |
| @zmz-comment-item-padding  |  --zmz-comment-item-padding   | 20px 15px| 每个边距|
| @zmz-comment-avatar-width     |  --zmz-comment-avatar-width        | 50px| 头像宽度    |
| @zmz-comment-avatar-height    |  --zmz-comment-avatar-height       | 50px| 头像高度    |
| @zmz-comment-avatar-radius    |  --zmz-comment-avatar-radius       | 50%| 头像圆角    |
| @zmz-comment-border-color    |  --zmz-comment-border-color       | #f1f1f1| 边线    |
 