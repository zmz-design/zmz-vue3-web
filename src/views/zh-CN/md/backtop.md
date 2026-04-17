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
            title: 'Backtop 返回顶部' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description')
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        topClick () {
            alert('触发回调')
        },
        backtopClick() {
            alert('回到顶部')
        }
    }
}
</script>
# Backtop 返回顶部
----
::: warning
定位属性需要使用```scroll-target```来配置滚动容器
:::

## 基础用法
当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。

<div class="demo-block">
    <zmz-backtop style="--zmz-backtop-position-zindex: 9999;" @on-click="topClick" @on-backtop="backtopClick" scroll-target=".zmz-docs__doc"></zmz-backtop>
    默认位置距离页面右部和底部 50px，滚动至距顶端 400px 时显示。
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-backtop @on-click="topClick" @on-backtop="backtopClick" scroll-target=".zmz-docs__doc"></zmz-backtop>
        默认位置距离页面右部和底部 50px，滚动至距顶端 400px 时显示。
    </div>
</template>
<script>
export default {
  methods: {
    topClick () {
        alert('触发回调')
    },
    backtopClick() {
        alert('回到顶部')
    }
  }
}
</script>
```
:::

## 自定义样式
可以自定义回到顶部样式
<div class="demo-block">
    <zmz-backtop style="--zmz-backtop-position-zindex: 9999;" @on-click="topClick" @on-backtop="backtopClick" scroll-target=".zmz-docs__doc" :bottom="100">
        <div style="{
          height: 100%;
          width: 100%;
          background-color: #3f536e;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: #fff;
          font-size:14px;
          border-radius: 5px;
          padding: 0 15px;
        }">回到顶部 </div>
        </zmz-backtop>
    可以自定义回到顶部样式
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-backtop @on-click="topClick" @on-backtop="backtopClick" scroll-target=".zmz-docs__doc" :bottom="100">
            <div style="{
            height: 100%;
            width: 100%;
            background-color: #3f536e;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            color: #fff;
            font-size:14px;
            border-radius: 5px;
            padding: 0 15px;
            }">回到顶部 </div>
            </zmz-backtop>
        可以自定义回到顶部样式
    </div>
</template>
```
:::

## Backtop 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visibility-height | 滚动高度 | ``Number`` |  - | 400 |
| bottom | 组件距离底部距离 | ``Number`` | - | 50 |
| right | 组件距离右部距离 | ``Number`` |   -   | 50 |
| duration | 滚动持续时间 | ``Number`` |  -    | 10 |
| icon | 图标 | String |  -    | - |
| scroll-target | 存在定位无法监听滚动节点，使气泡随按钮滚动时是使用此属性 | `String` | Class/Id/TagName  | window |
## Backtop 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-click | 点击按钮回调事件 | —  |
| on-backtop | 触发按钮回到顶部事件 | —  |

## Backtop 样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-backtop-width             |  --zmz-backtop-width                 | 40px    | 宽度      |
| @zmz-backtop-height      |  --zmz-backtop-height         | 40px          | 高度      |
| @zmz-backtop-radius          |  --zmz-backtop-radius           | 50%     | 圆角        |
| @zmz-backtop-shadow       |  --zmz-backtop-shadow          | 0 0 6px rgba(0, 0, 0, .12)     | 阴影        |
| @zmz-backtop-position-zindex      |  --zmz-backtop-position-zindex         | 9          | 定位层级    |
| @zmz-backtop-position-right      |  --zmz-backtop-position-right         | 50px         | 距离右侧距离      |
| @zmz-backtop-position-bottom   |  --zmz-backtop-position-bottom      | 50px    | 距离底部距离    |
| @zmz-backtop-icon-color       |  --zmz-backtop-icon-color          | 14px       | 确认主题色        |
| @zmz-backtop-icon-font-size  |  --zmz-backtop-icon-font-size     | 16px          | 图标大小      |

<div style="height:1000px;"></div>
