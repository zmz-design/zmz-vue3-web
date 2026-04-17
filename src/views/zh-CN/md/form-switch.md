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
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        beforeChange() {
            return new Promise((resolve) => {
                this.$messageBox.confirm('这是一段内容', '标题名称', {
                  yesBtnText: '确定'
                }).then((res) => {
                    this.$message.success(`action: ${ res }`);
                    resolve()
                });
            })
        },
        onChange(value) {
            console.log(value)
        }
    },
    data() {
        return {
            title: 'Switch 开关' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            switchs: true,
        };
    }
}
</script>
# Switch 开关
----
## 基础用法
表示两种相互对立的状态间的切换，多用于触发「开/关」
<div class="demo-block">
    <zmz-switch v-model="switchs" @on-change="onChange">{{switchs}}</zmz-switch>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs">{{switchs}}</zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
</script>
```
:::

## 禁用只读状态
添加属性 ``disabled`` 或 ``readonly``
<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-switch v-model="switchs" disabled></zmz-switch>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-switch v-model="switchs" readonly></zmz-switch>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-switch v-model="switchs" disabled></zmz-switch>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-switch v-model="switchs" readonly></zmz-switch>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
</script>
```
:::

## 自定义内容和宽度
使用插槽 ``open/close``，变换宽度 ``width``
<div class="demo-block">
    <zmz-switch v-model="switchs" width="70">
        <template #open>open</template>
        <template #close>close</template>
    </zmz-switch>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" width="70">
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
</script>
```
:::

## 颜色
使用 ``open-color`` 和  ``close-color``
<div class="demo-block">
    <zmz-switch v-model="switchs" open-color="#f00" close-color="#000">
        <template #open>open</template>
        <template #close>close</template>
    </zmz-switch>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" open-color="#f00" close-color="#000">
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
</script>
```
:::

## 自定义切换图标
使用 ``open-icon`` 和  ``close-icon``
<div class="demo-block">
    <zmz-switch v-model="switchs" open-icon="#f00" close-icon="#000">
        <template #open>open</template>
        <template #close>close</template>
    </zmz-switch>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" open-icon="#f00" close-icon="#000">
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
</script>
```
:::

## 加载状态
设置loading属性，接受一个Boolean，设置true即加载中状态。
<div class="demo-block">
    <zmz-switch v-model="switchs" loading>
        <template #open>open</template>
        <template #close>close</template>
    </zmz-switch>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" loading>
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
</script>
```
:::

## 阻止切换
使用 ``before-change``
<div class="demo-block">
    <zmz-switch v-model="switchs" open-color="#f00" close-color="#000" :before-change="beforeChange">
        <template #open>open</template>
        <template #close>close</template>
    </zmz-switch>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" open-color="#f00" close-color="#000" :before-change="beforeChange">
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    },
    methods: {
        beforeChange() {
            return new Promise((resolve) => {
                this.$messageBox.confirm('这是一段内容', '标题名称', {
                  yesBtnText: '确定'
                }).then((res) => {
                    this.$message.success(`action: ${ res }`);
                    resolve()
                });
            })
        }
    }
}
</script>
```
:::

## 不同尺寸
提供多种尺寸
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-switch v-model="switchs" size="large"></zmz-switch>
        <zmz-switch v-model="switchs" size="medium"></zmz-switch>
        <zmz-switch v-model="switchs" size="default"></zmz-switch>
        <zmz-switch v-model="switchs" size="small"></zmz-switch>
        <zmz-switch v-model="switchs" size="mini"></zmz-switch>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-switch v-model="switchs" size="large"></zmz-switch>
            <zmz-switch v-model="switchs" size="medium"></zmz-switch>
            <zmz-switch v-model="switchs" size="default"></zmz-switch>
            <zmz-switch v-model="switchs" size="small"></zmz-switch>
            <zmz-switch v-model="switchs" size="mini"></zmz-switch>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
</script>
```
:::

## Switch 属性

| 参数			| 说明				| 类型					| 可选值									| 默认值	|
|----------		|--------------		|----------				|--------------------------------			|--------	|
| v-model		| 绑定显示参数		| Boolean				| —								| false		|
| size			| 尺寸				| String				| large / medium / default / small / mini	| default	|
| disabled		| 禁用				| Boolean				| —									| false		|
| open-value	| 选中时的值		    | String/Number/Boolean	| —										| true		|
| close-value	| 未选中时的值		| String/Number/Boolean	| —										| false		|
| open-color	| 选中时的背景色	    | String				| —										| —		|
| close-color	| 未选中时的背景色	| String				| —										| —		|
| open-border-color	| 选中时的边线颜色	    | String				| —										| —		|
| close-border-color	| 未选中时的边线颜色	| String				| —										| —		|
| open-icon	| 选中时的图标	    | String				| —										| —		|
| close-icon	| 未选中时的图标	| String				| —										| —		|
| open-icon-color	| 选中时的图标背景色	    | String				| —										| —		|
| close-icon-color	| 未选中时的图标背景色	| String				| —										| —		|
| open-dot-color	| 选中时的dot背景色	    | String				| —										| —		|
| close-dot-color	| 未选中时的dot背景色	| String				| —										| —		|
| width			| 滑动槽宽度		    | String/Number			| —										| —		|
| loading			| 加载状态		    | Boolean			| —								| false	|
| before-change | 切换之前           | Function            | —                                        | —        |

## Switch 方法

| 事件      | 说明          | 返回值  |
|---------- |-------------- |---- |
| on-change | 绑定显示参数 | value |

## Switch 插槽
| 参数		| 说明			|
|----------	|--------------	|
| open		| 打开文字插槽	|
| close		| 关闭文字插槽	|

## Switch 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-switch-width             |  --zmz-switch-width                  | 44px     | 宽度      |
| @zmz-switch-height          |  --zmz-switch-height           | 22px     | 高度        |
| @zmz-switch-dot-width      |  --zmz-switch-dot-width       | 18px          | dot宽度    |
| @zmz-switch-dot-height     |  --zmz-switch-dot-height         | 18px          | dot高度      |
| @zmz-switch-font-size       |  --zmz-switch-font-size          | 12px       | 字体大小        |
| @zmz-switch-background-color   |  --zmz-switch-background-color     | #b7bec6          | 背景颜色    |
| @zmz-switch-active-background-color  |  --zmz-switch-active-background-color     | 确认主题颜色         | 激活背景颜色      |
| @zmz-switch-border-radius|  --zmz-switch-border-radius   | 13px      | 边线圆角|
| @zmz-switch-border-color|  --zmz-switch-border-color   | #b7bec6      | 边线颜色|
| @zmz-switch-active-border-color     |  --zmz-switch-active-border-color         | 确认主题颜色         | 激活边线颜色      |