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
            title: 'Directive 指令' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            loading: false,
            count: 0,
            copy: '指令复制剪贴板',
            zmzverifynumber: ''
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        directiveClick1() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        },
        directiveClick3() {
            this.$copy('服务复制剪贴板').then(() => {
                this.$message.success('复制成功')
            })
        },
        directiveClick2() {
           this.count++
        }
    }
}
</script>
# Directive 指令
----
便捷式指令
## 验证数字
让输入框只允许识别数字`(v-zmzverifynumber)
<div class="demo-block">
    <zmz-input v-model="zmzverifynumber" v-zmzverifynumber placeholder="验证数字"></zmz-input>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-input v-model="zmzverifynumber" v-zmzverifynumber placeholder="验证数字"></zmz-input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            zmzverifynumber: ''
        };
    }
};
</script>
```
:::

## zmzverifynumber 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| value |  保留几位  |    String    |   —  |   —     |
| .float      |    是否小数修饰符 |    —   |    —    |    ——  |


## 复制剪贴板
将数据复制到剪贴板，进行粘贴, 分指令`(v-zmzcopy)`和服务`($copy)`
<div class="demo-block">
    <zmz-space>
        <zmz-space-item><zmz-button type="primary" v-zmzcopy="copy">指令复制剪贴板</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" @click="directiveClick3">服务复制剪贴板</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button type="primary" v-zmzcopy="copy">指令复制剪贴板</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" @click="directiveClick3">服务复制剪贴板</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            copy: '指令复制剪贴板'
        };
    },
    methods: {
        directiveClick() {
            this.$copy('服务复制剪贴板').then(() => {
                this.$message.success('复制成功')
            })
        },
    }
};
</script>
```
:::

## zmzcopy 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| value      |    复制文本 |    String   |    —    |    ——  |
| zmzcopy-tips      |	指令行参数，复制提示 |	String   |	—    |	复制成功  |
| zmzcopy-tips-type   | 指令行参数，提示类型，请参考$message弹窗 | String  | —  |  success |
| zmzcopy-text |  指令行参数，复制文本，此参数存在value 失效  |    String    |   —  |   —     |

## 加载
数据加载前展示, 指令`(v-zmzLoading)` 和服务 `($loading)`
<div class="demo-block">
    <zmz-button type="primary" @click="directiveClick1" v-zmz-loading.fullscreen="loading" zmzLoading-content="努力加载中">指令模式</zmz-button>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-button type="primary" @click="directiveClick1" v-zmz-loading.fullscreen="loading" zmzLoading-content="努力加载中">指令模式</zmz-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        loadingButton() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        }
    }
};
</script>
```
:::

## zmzLoading 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| value      |    加载状态 |    Boolean   |    —    |    ——  |
| zmzLoading-content      |	指令行参数，加载文本 |	String   |	—    |	加载中  |
| zmzLoading-icon   | 指令行参数，加载icon | String  | —  |  zmz-icon--loading  |
| zmzLoading-background |  指令行参数，背景色  |    String    |   —  |   rgba(255, 255, 255, .7)     |
| zmzLoading-loadingStyle |  指令行参数，加载自定义样式  |    Object    |   Object    |    {}      |
| zmzLoading-rotate | 指令行参数，是否旋转 | Boolean |  — | true |
| fullscreen      |  修饰符，是否全屏 |   Boolean  |    — | false |

## 防连击
防止用户快速点击按钮，造成重复调用,指令`(v-zmzpreventreclick)` 
<div class="demo-block">
    <zmz-button type="primary" v-zmzpreventreclick.button="directiveClick2">快速点击</zmz-button>
    {{count}}
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-button type="primary" v-zmzpreventreclick.button="directiveClick2">快速点击</zmz-button>
        {{count}}
    </div>
</template>
<script>
export default {
    methods: {
        directiveClick() {
            console.log('连击')
        }
    }
};
</script>
```
:::

## zmzpreventreclick 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| value     |    调用函数 |    Function   |    —    |    —  |
| button     |    按钮添加disabled |    Boolean   |    —    |    false  |



## 自由拖拽
添加指令可以自由拖拽位置,指令`(v-zmzfreedrag)` 
<div class="demo-block">
    <zmz-button type="primary" v-zmzfreedrag="true">按下拖动</zmz-button>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-button type="primary" v-zmzfreedrag="true">按下拖动</zmz-button>
    </div>
</template>
```
:::

## zmzfreedrag 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| value     |    是否开启拖拽 |    Boolean   |    —    |    —  |
| seat     |    是否添加占位修饰符.seat |    —   |    —    |    —  |

