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
    data () {
        return {
            current: 0,
            title: 'Step 步骤条' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        }
    },
    methods: {
        clickcurrentPrev () {
            this.current--
        },
        clickcurrentNext () {
            this.current++
        },
        currentConfig(data){
          return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Step 步骤条
----
## 基础用法
用于引导用户按照流程完成任务的导航条。

<div class="demo-block">
    <zmz-step v-model='current'>
        <zmz-step-item title="标题 1"></zmz-step-item>
        <zmz-step-item title="标题 2"></zmz-step-item>
        <zmz-step-item title="标题 3"></zmz-step-item>
    </zmz-step>
    <zmz-space style="margin-top:20px;">
        <zmz-space-item><zmz-button size="small" @click="clickcurrentPrev">Prev</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button size="small" @click="clickcurrentNext">Next</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-step v-model='current'>
            <zmz-step-item title="标题 1"></zmz-step-item>
            <zmz-step-item title="标题 2"></zmz-step-item>
            <zmz-step-item title="标题 3"></zmz-step-item>
        </zmz-step>
        <zmz-space style="margin-top:20px;">
            <zmz-space-item><zmz-button size="small" @click="clickcurrentPrev">Prev</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button size="small" @click="clickcurrentNext">Next</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    },
    methods: {
        clickcurrentPrev () {
            this.current--
        },
        clickcurrentNext () {
            this.current++
        }
    }
}
</script>
```
:::

## 含状态步骤条
每一步骤显示出该步骤的状态。
<div class="demo-block">
    <zmz-step v-model='current' status="error">
        <zmz-step-item title="标题 1"></zmz-step-item>
        <zmz-step-item title="标题 2"></zmz-step-item>
        <zmz-step-item title="标题 3"></zmz-step-item>
    </zmz-step>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-step v-model='current' status="error">
            <zmz-step-item title="标题 1"></zmz-step-item>
            <zmz-step-item title="标题 2"></zmz-step-item>
            <zmz-step-item title="标题 3"></zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
</script>
```
:::

## 有描述的步骤条
每一步骤显示出该步骤的状态。
<div class="demo-block">
    <zmz-step v-model='current'>
        <zmz-step-item title="标题 1">这是描述</zmz-step-item>
        <zmz-step-item title="标题 2">这是描述</zmz-step-item>
        <zmz-step-item title="标题 3">这是描述</zmz-step-item>
    </zmz-step>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-step v-model='current'>
            <zmz-step-item title="标题 1">这是描述</zmz-step-item>
            <zmz-step-item title="标题 2">这是描述</zmz-step-item>
            <zmz-step-item title="标题 3">这是描述</zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
</script>
```
:::

## 居中的步骤条
标题和描述都将居中。
<div class="demo-block">
    <zmz-step v-model='current' text-align="center">
        <zmz-step-item title="标题 1">这是描述</zmz-step-item>
        <zmz-step-item title="标题 2">这是描述</zmz-step-item>
        <zmz-step-item title="标题 3">这是描述</zmz-step-item>
    </zmz-step>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-step v-model='current' text-align="center">
            <zmz-step-item title="标题 1">这是描述</zmz-step-item>
            <zmz-step-item title="标题 2">这是描述</zmz-step-item>
            <zmz-step-item title="标题 3">这是描述</zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
</script>
```
:::

## 带图标的步骤条
步骤条内可以启用各种自定义的图标。
<div class="demo-block">
    <zmz-step v-model='current' text-align="center">
        <zmz-step-item title="标题 1" icon="zmz-icon--success">这是描述</zmz-step-item>
        <zmz-step-item title="标题 2" icon="zmz-icon--error">这是描述</zmz-step-item>
        <zmz-step-item title="标题 3" icon="zmz-icon--primary">这是描述</zmz-step-item>
    </zmz-step>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-step v-model='current' text-align="center">
            <zmz-step-item title="标题 1" icon="zmz-icon--success">这是描述</zmz-step-item>
            <zmz-step-item title="标题 2" icon="zmz-icon--error">这是描述</zmz-step-item>
            <zmz-step-item title="标题 3" icon="zmz-icon--primary">这是描述</zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
</script>
```
:::

## 竖式步骤条
竖直方向的步骤条。
<div class="demo-block" style="height:300px">
    <zmz-step v-model='current' mode="vertical">
        <zmz-step-item title="标题 1">这是描述</zmz-step-item>
        <zmz-step-item title="标题 2">这是描述</zmz-step-item>
        <zmz-step-item title="标题 3">这是描述</zmz-step-item>
    </zmz-step>
</div>

::: demo
```html
<template>
    <div class="demo-block" style="height:300px">
        <zmz-step v-model='current' mode="vertical">
            <zmz-step-item title="标题 1">这是描述</zmz-step-item>
            <zmz-step-item title="标题 2">这是描述</zmz-step-item>
            <zmz-step-item title="标题 3">这是描述</zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
</script>
```
:::

## Step 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 指定当前步骤，从 0 开始计数 | Number |  - | 0 |
| text-align | 标题位置 （horizontal状态下有效） | String | left / center / top | left |
| mode | 模式 | String |   horizontal / vertical   | horizontal |
| status | 指定当前步骤的状态，会覆盖子元素 Step 的状态 | String |  wait / process / finish / error | process |

## Step 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 描述插槽 |

## Step-item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | 	String | — | — |
| icon | 图标 | 	String | — | — |
| description | 描述 | 	String | — | — |

## Step-item 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | 描述插槽 |
| icon | 图标插槽 |
| title | 标题插槽 |

## Step 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-step-background-color              |  --zmz-step-background-color                 | #fff     | 背景颜色      |
| @zmz-step-text-color              |  --zmz-step-text-color                 | 默认主题颜色    | 文字颜色      |
| @zmz-step-text-finish-color              |  --zmz-step-text-finish-color                 | 确认主题颜色     | 完成状态      |
| @zmz-step-text-process-color              |  --zmz-step-text-process-color                 | 确认主题颜色    | 等待状态      |
| @zmz-step-text-error-color              |  --zmz-step-text-error-color                | 错误主题颜色     | 错误状态      |
| @zmz-step-title-font-size              |  --zmz-step-title-font-size                 | 14px    | 字体大小      |
| @zmz-step-describe-color              |  --zmz-step-describe-color                 | 默认主题颜色     | 描述颜色      |
| @zmz-step-describe-font-size              |  --zmz-step-describe-font-size                 | 12px     | 描述大小      |
| @zmz-step-line-color             |  --zmz-step-line-color                 | #e3e6ef     | 线颜色      |
| @zmz-step-line-width            |  --zmz-step-line-width                 | 1px     | 线宽      |
| @zmz-step-num-border-color             |  --zmz-step-num-border-color                 | #e3e6ef     | 数字边线颜色      |
| @zmz-step-num-background-color             |  --zmz-step-num-background-color                 | #fff     | 数字背景颜色      |
| @zmz-step-num-border-width             |  --zmz-step-num-border-width                |  1px    | 数字边线宽度      |
| @zmz-step-num-color             |  --zmz-step-num-color                | 默认主题颜色     | 数字颜色      |
| @zmz-step-icon-font-size             |  --zmz-step-icon-font-size                | 12px     | 内置图标大小      |
| @zmz-step-icons-font-size             |  --zmz-step-icons-font-size                | 22px     | 自定义图标大小      |
