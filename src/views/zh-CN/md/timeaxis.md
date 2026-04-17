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
            title: 'Timeaxis 时间轴' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            time: (new Date()).getTime() + 10 * 1 * 1000,
            time2: (new Date()).getTime() - 60 * 10 * 1000,
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>

# Timeaxis 时间轴
----
对一系列信息进行时间排序时，展示

## 基础用法
最简单定义一个时间轴的用法。

<div class="demo-block">
  <zmz-timeaxis>
    <zmz-timeaxis-item icon="zmz-icon--loading" title="创建成功" date="2024-04-11"></zmz-timeaxis-item>
    <zmz-timeaxis-item title="通过审核" date="2024-04-19" color="#f00"></zmz-timeaxis-item>
    <zmz-timeaxis-item title="活动按期开始" date="2024-04-30"></zmz-timeaxis-item>
    <zmz-timeaxis-item title="活动结束" date="2024-05-30"></zmz-timeaxis-item>
  </zmz-timeaxis>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-timeaxis>
            <zmz-timeaxis-item>我是测试</zmz-timeaxis-item>
            <zmz-timeaxis-item color="#f00">我是测试</zmz-timeaxis-item>
            <zmz-timeaxis-item>我是测试</zmz-timeaxis-item>
            <zmz-timeaxis-item>我是测试</zmz-timeaxis-item>
        </zmz-timeaxis>
    </div>
</template>
```
:::

## 自定义节点颜色
可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。

<div class="demo-block">
  <zmz-timeaxis>
    <zmz-timeaxis-item type="success" title="成功" date="2024-04-11"></zmz-timeaxis-item>
    <zmz-timeaxis-item type="warning" title="警告" date="2024-04-19"></zmz-timeaxis-item>
    <zmz-timeaxis-item type="error" title="错误" date="2024-04-30"></zmz-timeaxis-item>
    <zmz-timeaxis-item type="primary" title="主要" date="2024-05-30"></zmz-timeaxis-item>
    <zmz-timeaxis-item type="info" title="消息" date="2024-05-30"></zmz-timeaxis-item>
    <zmz-timeaxis-item title="默认" date="2024-05-30"></zmz-timeaxis-item>
    <zmz-timeaxis-item icon="zmz-icon--sun-fill" color="#fff" title="图标" date="2024-05-30"></zmz-timeaxis-item>
  </zmz-timeaxis>
</div>

::: demo
```html
<template>
    <div class="demo-block">
    <zmz-timeaxis>
        <zmz-timeaxis-item>
            <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">1900-01-01</p>
            <span>出生</span>
        </zmz-timeaxis-item>
        <zmz-timeaxis-item>
            <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">1949-10-01</p>
            <span>成年</span>
        </zmz-timeaxis-item>
        <zmz-timeaxis-item>
            <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">1995-02-13</p>
            <span>老年</span>
        </zmz-timeaxis-item>
        <zmz-timeaxis-item color="#f00">
            <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">至今</p>
            <span>死亡</span>
        </zmz-timeaxis-item>
    </zmz-timeaxis>
    </div>
</template>
```
:::

## 自定义
提供基础盒子，内容可以自定义拓展

<div class="demo-block">
  <zmz-timeaxis>
      <zmz-timeaxis-item>
          <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">1900-01-01</p>
          <span>出生</span>
      </zmz-timeaxis-item>
      <zmz-timeaxis-item>
          <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">1949-10-01</p>
          <span>成年</span>
      </zmz-timeaxis-item>
      <zmz-timeaxis-item>
          <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">1995-02-13</p>
          <span>老年</span>
      </zmz-timeaxis-item>
      <zmz-timeaxis-item color="#f00">
          <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">至今</p>
          <span>死亡</span>
      </zmz-timeaxis-item>
  </zmz-timeaxis>
</div>

::: demo
```html
<template>
    <div class="demo-block">
    <zmz-timeaxis>
        <zmz-timeaxis-item>
            <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">1900-01-01</p>
            <span>出生</span>
        </zmz-timeaxis-item>
        <zmz-timeaxis-item>
            <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">1949-10-01</p>
            <span>成年</span>
        </zmz-timeaxis-item>
        <zmz-timeaxis-item>
            <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">1995-02-13</p>
            <span>老年</span>
        </zmz-timeaxis-item>
        <zmz-timeaxis-item color="#f00">
            <p style="font-weight: bold;font-size: 16px;margin-bottom: 10px;">至今</p>
            <span>死亡</span>
        </zmz-timeaxis-item>
    </zmz-timeaxis>
    </div>
</template>
```
:::



## Timeaxis.item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color | 	节点颜色 | String | hsl / hsv / hex / rgb | — |
| title | 节点标题 | String | — | — |
| date | 节点时间 | String | — | — |
| icon | 节点图标 | String | — | — |
| type | 节点类型 | String |  success / error / warning / primary / info | — |

## Timeaxis 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 内容插槽 |
| icon | 图标插槽 |
| line | 线插槽 |
| title | 标题插槽 |
| date | 时间插槽 |

## Timeaxis 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-timeaxis-padding-bottom              |  --zmz-timeaxis-padding-bottom                  | 30px     | 间距      |
| @zmz-timeaxis-node-color          |  --zmz-timeaxis-node-color           | #e0e0e0       | 节点颜色        |
| @zmz-timeaxis-node-size      |  --zmz-timeaxis-node-size         | 14px         | 节点大小    |
| @zmz-timeaxis-node-border-radius      |  --zmz-timeaxis-node-border-radius         |  50%          | 节点圆弧      |
| @zmz-timeaxis-line-size       |  --zmz-timeaxis-line-size          | 2px       | 线条大小        |
| @zmz-timeaxis-line-style   |  --zmz-timeaxis-line-style      | solid          | 线条样式    |
| @zmz-timeaxis-title-font-size   |  --zmz-timeaxis-title-font-size      | 14px         | 标题字体大小    |
| @zmz-timeaxis-title-color   |  --zmz-timeaxis-title-color     | 默认主题颜色         | 标题颜色    |
| @zmz-timeaxis-date-margin-top   |  --zmz-timeaxis-date-margin-top      | 5px          | 时间上间距    |
| @zmz-timeaxis-date-font-size   |  --zmz-timeaxis-date-font-size      | 12px          | 时间字体大小    |
| @zmz-timeaxis-date-color   |  --zmz-timeaxis-date-color      | 消息主题颜色         | 时间颜色    |
| @zmz-timeaxis-content-font-size   |  --zmz-timeaxis-content-font-size     | 12px          | 内容字体大小    |
| @zmz-timeaxis-content-color   |  --zmz-timeaxis-content-color     | 默认主题颜色         | 内容颜色   |
