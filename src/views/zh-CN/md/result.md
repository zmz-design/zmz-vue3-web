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
            title: 'Result 结果' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe')
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Result 结果
----
用于页面中成功失败异常确认的提示。

## 基本用法

<div class="demo-block">
    <zmz-result type="info" title="标题" describes="描述内容" extra="其他补充信息，自带灰底效果" actions="操作建议，一般放置按钮组"></zmz-result>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-result type="info" title="标题" describes="描述内容" extra="其他补充信息，自带灰底效果" actions="操作建议，一般放置按钮组"></zmz-result>
    </div>
</template>
```
:::

## 提交成功

<div class="demo-block">
    <zmz-result type="success" title="提交成功" describes="提交结果页用于反馈一系列操作任务的处理结果。" extra="已提交申请，等待部门审核。">
        <template #actions>
            <zmz-button type="primary">返回修改</zmz-button>
        </template>
    </zmz-result>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-result type="success" title="提交成功" describes="提交结果页用于反馈一系列操作任务的处理结果。" extra="已提交申请，等待部门审核。">
            <template #actions>
                <zmz-button type="primary">返回修改</zmz-button>
            </template>
        </zmz-result>
    </div>
</template>
```
:::

## 提交失败

<div class="demo-block">
    <zmz-result type="error" title="提交失败" describes="请核对并修改以下信息后，再重新提交。" extra="您提交的内容有如下错误：1.您的账户已被冻结 立即解冻。2.您的账户还不具备申请资格 立即升级 ">
        <template #actions>
            <zmz-button type="primary">返回修改</zmz-button>
        </template>
    </zmz-result>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-result type="error" title="提交失败" describes="请核对并修改以下信息后，再重新提交。" extra="您提交的内容有如下错误：1.您的账户已被冻结 立即解冻。2.您的账户还不具备申请资格 立即升级 ">
            <template #actions>
                <zmz-button type="primary">返回修改</zmz-button>
            </template>
        </zmz-result>
    </div>
</template>
```
:::

## 提交警告

<div class="demo-block">
    <zmz-result type="warning" title="申请处理中" describes="您的申请已收到，客服正在处理中。">
        <template #actions>
            <zmz-button type="primary">返回修改</zmz-button>
        </template>
    </zmz-result>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-result type="warning" title="申请处理中" describes="您的申请已收到，客服正在处理中。">
            <template #actions>
                <zmz-button type="primary">返回修改</zmz-button>
            </template>
        </zmz-result>
    </div>
</template>
```
:::


## 自定义内容

<div class="demo-block">
    <zmz-result>
        <template #icon>
            <span style="width:100px;height:100px;display:inline-block;background:#f4f5f9;border-radius:50%"></span>
        </template>
        <template #title>
            1024
        </template>
        <template #describes>
            程序员节日快乐
        </template>
        <template #extra>
            这是属于程序员的节日
        </template>
        <template #actions>
            <zmz-button type="primary">new 一个对象</zmz-button>
        </template>
    </zmz-result>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-result>
            <template #icon>
                <span style="width:100px;height:100px;display:inline-block;background:#f4f5f9;border-radius:50%"></span>
            </template>
            <template #title>
                1024
            </template>
            <template #describes>
                程序员节日快乐
            </template>
            <template #extra>
                这是属于程序员的节日
            </template>
            <template #actions>
                <zmz-button type="primary">new 一个对象</zmz-button>
            </template>
        </zmz-result>
    </div>
</template>
```
:::

## Result 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |	标题，必选参数。 |	``String``   |	—           |	—       |
|type	      | 主题     |	``String``    |	``info``、``success``、``warning``、``error``|	info |
|describes |	辅助性文字,可通过默认 slot 传入   |	``String``    |	—             |	—      |
|extra	      | 补充信息        |	``String``    |	— |	— |
|actions	      | 自定义操作        |	``String``    |	— |	— |

## Result 插槽
| 名称      | 说明          |
|---------- |-------------- |
| icon | icon插槽 |
| title | 标题插槽 |
| describes | 描述插槽 |
| extra | 补充插槽 |
| actions | 操作插槽 |

## Result 样式变量

| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-result-padding               |  --zmz-result-padding                  | 8px 15px      | 盒子内边距      |
| @zmz-result-title-color           |  --zmz-result-title-color              | #17233d       | 标题颜色        |
| @zmz-result-title-font-size       |  --zmz-result-title-font-size          | 20px          | 标题文字大小    |
| @zmz-result-title-margin-top      |  --zmz-result-title-margin-top         | 20px          | 标题上边距      |
| @zmz-result-describes-color       |  --zmz-result-describes-color          | #808695       | 描述颜色        |
| @zmz-result-describes-font-size   |  --zmz-result-describes-font-size      | 14px          | 描述文字大小    |
| @zmz-result-describes-margin-top  |  --zmz-result-describes-margin-top     | 10px          | 描述上边距      |
| @zmz-result-extra-margin-top      |  --zmz-result-extra-margin-top         | 30px          | 补充信息上边距  |
| @zmz-result-extra-background-color|  --zmz-result-extra-background-color   | #f8f8f9       | 补充信息背景颜色|
| @zmz-result-extra-text-color      |  --zmz-result-extra-text-color         | #515a6e       | 补充信息文字颜色|
| @zmz-result-extra-padding         |  --zmz-result-extra-padding            | 24px 40px     | 补充内边距      |
| @zmz-result-extra-border-radius   |  --zmz-result-extra-border-radius      | 4px           | 补充圆角        |
| @zmz-result-actions-margin-top    |  --zmz-result-actions-margin-top       | 30px          | 操作容器上边距       |


