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
            title: 'Card 卡片' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description')
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Card 卡片
----
## 概述
提供card外围轮廓，方便用户搭建自定义页面块布局，将信息编辑到card然后放入指定的位置。

## 基础用法
包含标题 ``header`` ，内容 ``body`` 底部 ``footer``和操作 ``button或其他``，指定slot为 ``header`` 方可生成 card 的 ``header`` , ``body`` 也可指定slot为 ``body`` 也可忽略不写, 指定slot为 ``footer`` 方可生成 card 的 ``footer`` 。

<div class="demo-block">
    <zmz-card style="width: 300px;">
        <template #header>
            <span class="header-title">卡片名称</span>
            <span class="header-button" style="float:right;color:#2d8ff4">操作按钮</span>
        </template>
        <div>
            <div class="card-item">列表内容一</div>
            <div class="card-item">列表内容二</div>
            <div class="card-item">列表内容三</div>
            <div class="card-item">列表内容四</div>
            <div class="card-item">列表内容五</div>
        </div>
        <template #footer>
            <span>面板标脚注</span>
        </template>
    </zmz-card>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-card style="width: 300px;">
            <template #header>
                <span class="header-title">卡片名称</span>
                <span class="header-button" style="float:right;color:#2d8ff4">操作按钮</span>
            </template>
            <div>
                <div class="card-item">列表内容一</div>
                <div class="card-item">列表内容二</div>
                <div class="card-item">列表内容三</div>
                <div class="card-item">列表内容四</div>
                <div class="card-item">列表内容五</div>
            </div>
        </zmz-card>
    </div>
</template>
```
:::


## 不显示标题
有时候我们不需要头部
<div class="demo-block">
    <zmz-card>
        <div>
            <h4>内容标题</h4>
            <p style="line-height:2">您可以通过 <code class="zmz-code">slot="header"</code>来为面板轻松添加标题。<br/>
            通过 <code class="zmz-code">slot="body"</code>或不指定<code class="zmz-code">slot="body"</code>，为面板添加内容。<br/>
            您可以通过 <code class="zmz-code">slot="footer"</code>来为面板轻松添加脚注。<br/>每个部分都可以自定义相关内容</p>      
        </div>
        <template #footer>
            <h3 style="margin:0">面板标脚注</h3>
        </template>
    </zmz-card>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-card>
            <div>
                <h4>内容标题</h4>
                <p style="line-height:2">您可以通过 <code class="zmz-code">slot="header"</code>来为面板轻松添加标题。<br/>
                通过 <code class="zmz-code">slot="body"</code>或不指定<code class="zmz-code">slot="body"</code>，为面板添加内容。<br/>
                您可以通过 <code class="zmz-code">slot="footer"</code>来为面板轻松添加脚注。<br/>每个部分都可以自定义相关内容</p>      
            </div>
            <template #footer>
                <h3 style="margin:0">面板标脚注</h3>
            </template>
        </zmz-card>
    </div>
</template>
```
:::


## 不显示底部
有时候我们不需要底部
<div class="demo-block">
    <zmz-card>
        <template #header>
            <span class="header-title">卡片名称</span>
            <span class="header-button" style="float:right;color:#2d8ff4">操作按钮</span>
        </template>
        <div>
            <h4>内容标题</h4>
            <p style="line-height:2">您可以通过 <code class="zmz-code">slot="header"</code>来为面板轻松添加标题。<br/>
            通过 <code class="zmz-code">slot="body"</code>或不指定<code class="zmz-code">slot="body"</code>，为面板添加内容。<br/>
            您可以通过 <code class="zmz-code">slot="footer"</code>来为面板轻松添加脚注。<br/>每个部分都可以自定义相关内容</p>      
        </div>
    </zmz-card>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-card>
            <template #header>
                <span class="header-title">卡片名称</span>
                <span class="header-button" style="float:right;color:#2d8ff4">操作按钮</span>
            </template>
            <div>
                <h4>内容标题</h4>
                <p style="line-height:2">您可以通过 <code class="zmz-code">slot="header"</code>来为面板轻松添加标题。<br/>
                通过 <code class="zmz-code">slot="body"</code>或不指定<code class="zmz-code">slot="body"</code>，为面板添加内容。<br/>
                您可以通过 <code class="zmz-code">slot="footer"</code>来为面板轻松添加脚注。<br/>每个部分都可以自定义相关内容</p>      
            </div>
        </zmz-card>
    </div>
</template>
```
:::

## 无标题无底部
只显示内容`body`区,可在内容区配置定义更丰富的内容展示。

<div class="demo-block">
    <zmz-card style="width: 300px;">
        <div>
            <div class="card-item">列表内容一</div>
            <div class="card-item">列表内容二</div>
            <div class="card-item">列表内容三</div>
            <div class="card-item">列表内容四</div>
            <div class="card-item">列表内容五</div>
        </div>
    </zmz-card>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-card style="width: 300px;">
            <div>
                <div class="card-item">列表内容一</div>
                <div class="card-item">列表内容二</div>
                <div class="card-item">列表内容三</div>
                <div class="card-item">列表内容四</div>
                <div class="card-item">列表内容五</div>
            </div>
        </zmz-card>
    </div>
</template>
```
:::

## 卡片阴影
通过 ``box-shadow`` 属性设置卡片阴影出现的时机：``always``、``hover`` 或 ``never``。

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-card box-shadow="always">
                <div><div class="card-item">总是显示阴影（always）</div></div>
            </zmz-card>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-card box-shadow="hover">
                <div><div class="card-item">鼠标经过显示阴影（hover）</div></div>
            </zmz-card>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-card box-shadow="never">
                <div><div class="card-item">从不显示阴影（never）</div></div>
            </zmz-card>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-card box-shadow="always">
                    <div><div class="card-item">总是显示阴影（always）</div></div>
                </zmz-card>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-card box-shadow="hover">
                    <div><div class="card-item">鼠标经过显示阴影（hover）</div></div>
                </zmz-card>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-card box-shadow="never">
                    <div><div class="card-item">从不显示阴影（never）</div></div>
                </zmz-card>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
```
:::

## Card 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| box-shadow | 是否显示阴影 | ``String`` | ``always``、``hover``、``never`` | always |
| header-border | 是否显示header下边线 | ``Boolean`` | — | true |
| footer-border | 是否显示footer上边线 | ``Boolean`` | — | true |
|border |	边线 |	``Boolean``   |	—      |	false       |

## Card 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 内容插槽 |
| header | 头部插槽 |
| footer | 底部插槽 |

## Card 样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-card-background              |  --zmz-card-background                  | #fff      | 背景色      |
| @zmz-card-transition          |  --zmz-card-transition           | all 0.2s       | 过度动画        |
| @zmz-card-border-radius      |  --zmz-card-border-radius         | 3px          | 圆角    |
| @zmz-card-border-color      |  --zmz-card-border-color         | #DCDFE6         | 边线颜色      |
| @zmz-card-border-width       |  --zmz-card-border-width          | 1px       | 边线宽度        |
| @zmz-card-border-style   |  --zmz-card-border-style      | solid          | 边线样式    |
| @zmz-card-box-shadow  |  --zmz-card-box-shadow     | 0 0px 10px 0 rgba(0, 0, 0, 0.15)         | 阴影      |
| @zmz-card-header-padding      |  --zmz-card-header-padding          | 12px          | 头部内边距  |
| @zmz-card-header-font-size|  --zmz-card-header-font-size   | 14px      | 头部默认字体大小|
| @zmz-card-header-border-bottom-color      |  --zmz-card-header-border-bottom-color         | #DCDFE6          | 头部边线颜色      |
| @zmz-card-header-border-bottom-width       |  --zmz-card-header-border-bottom-width          | 1px       | 头部边线宽度        |
| @zmz-card-header-border-bottom-style   |  --zmz-card-header-border-bottom-style      | solid          | 头部边线样式    |
| @zmz-card-body-padding     |  --zmz-card-body-padding          | 12px       | 身子内边距|
| @zmz-card-footer-padding      |  --zmz-card-footer-padding          | 12px          | 底部内边距  |
| @zmz-card-footer-border-top-color      |  --zmz-card-footer-border-top-color         | #DCDFE6          | 底部边线颜色      |
| @zmz-card-footer-border-top-width       |  --zmz-card-footer-border-top-width          | 1px       | 底部边线宽度        |
| @zmz-pancardel-footer-border-top-style   |  --zmz-card-footer-border-top-style      | solid          | 底部边线样式    |