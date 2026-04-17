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
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onBlur(val) {
            console.log('失去焦点', val)
        },
        onFocus(val) {
            console.log('获取焦点', val)
        },
        onChange(val) {
            console.log('发生改变', val)
        },
    },
    data() {
        return {
            title: 'Input 输入框' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            input: '',
            input2: ['标签一', '标签二', '标签三']
        };
    }
}
</script>
# Input 输入框
----
## 基础用法
<div class="demo-block">
    <zmz-input v-model="input" @on-change="onChange" placeholder="请输入内容" style="width:200px;"></zmz-input>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-input v-model="input" placeholder="请输入内容" style="width:200px;"></zmz-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
</script>
```
:::

## 禁用只读状态
添加属性 ``disabled``禁用， ``readonly``只读
<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <zmz-input v-model="input" disabled placeholder="请输入内容" style="width:200px;"></zmz-input>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-input v-model="input" readonly placeholder="请输入内容" style="width:200px;"></zmz-input>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-input v-model="input" disabled placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" readonly placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
</script>
```
:::


## 可清空
添加属性 ``clearbtn``
<div class="demo-block">
    <zmz-input v-model="input" clearbtn placeholder="请输入内容" style="width:200px;"></zmz-input>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-input v-model="input" clearbtn placeholder="请输入内容" style="width:200px;"></zmz-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
</script>
```
:::

## 密码框
添加属性 ``type=password``
<div class="demo-block">
    <zmz-input v-model="input" type="password" placeholder="请输入内容" style="width:200px;"></zmz-input>
</div>

:::demo
```html
<template>
    <div class="demo-block">
        <zmz-input v-model="input" type="password" placeholder="请输入内容" style="width:200px;"></zmz-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
</script>
```
:::

## 自定义图标
添加属性 ``suffix-icon``,``prefix-icon``配置前后缀图标或使用``slot``方式自定义图标内容
<div class="demo-block">
    <zmz-space class="zmz-mb-20">
        <zmz-space-item>
            <zmz-input v-model="input" type="text" suffix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;"></zmz-input>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-input v-model="input" type="text" prefix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;"></zmz-input>
        </zmz-space-item>
    </zmz-space>
    <zmz-space>
        <zmz-space-item>
            <zmz-input v-model="input" type="text" suffix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;">
                <template #suffix>
                    <i class="zmz-icon--home"></i>
                </template>
                <template #prefix>
                    <i class="zmz-icon--search"></i>
                </template>
            </zmz-input>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-input v-model="input" type="text" suffix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;">
                <template #suffix>
                    <i class="zmz-icon--setup"></i>
                </template>
                <template #prefix>
                    <i class="zmz-icon--search"></i>
                </template>
            </zmz-input>
        </zmz-space-item>
    </zmz-space>
</div>

:::demo
```html
<template>
    <div class="demo-block">
        <zmz-space class="zmz-mb-20">
            <zmz-space-item>
                <zmz-input v-model="input" type="text" suffix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" type="text" prefix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
        </zmz-space>
        <zmz-space>
            <zmz-space-item>
                <zmz-input v-model="input" type="text" suffix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;">
                    <template #suffix>
                        <i class="zmz-icon--home"></i>
                    </template>
                    <template #prefix>
                        <i class="zmz-icon--search"></i>
                    </template>
                </zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" type="text" suffix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;">
                    <template #suffix>
                        <i class="zmz-icon--setup"></i>
                    </template>
                    <template #prefix>
                        <i class="zmz-icon--search"></i>
                    </template>
                </zmz-input>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
</script>
```
:::

## 复合型输入框
添加插槽 ``prepend``,``append``配置内容
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>
            <zmz-input v-model="input" type="text" placeholder="请输入内容" style="width:100%;">
                <template #prepend>Http://</template>
                <template #append>
                    <i class="zmz-icon--search"></i>
                </template>
            </zmz-input>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-input v-model="input" type="text" placeholder="请输入内容" style="width:100%;">
                <template #append>.com</template>
            </zmz-input>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-input :prepend-padding="0" v-model="input" type="text" placeholder="请输入内容" style="width:100%;">
                <template #prepend>
                    <zmz-select style="margin: -1px -1px -1px -1px; width:100px;" placeholder="请选择">
                    </zmz-select>
                </template>
                <template #append>
                    <i class="zmz-icon--search"></i>
                </template>
            </zmz-input>
        </zmz-space-item>
    </zmz-space>
</div>

:::demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-input v-model="input" type="text" placeholder="请输入内容" style="width:100%;">
                    <template #prepend>Http://</template>
                    <template #append>
                        <i class="zmz-icon--search"></i>
                    </template>
                </zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" type="text" placeholder="请输入内容" style="width:100%;">
                    <template #append>.com</template>
                </zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input prepend-padding="0" v-model="input" type="text" placeholder="请输入内容" style="width:100%;">
                    <template #prepend>
                        <zmz-select style="margin: -1px -1px -1px -1px; width:100px;" placeholder="请选择">
                        </zmz-select>
                    </template>
                    <template #append>
                        <i class="zmz-icon--search"></i>
                    </template>
                </zmz-input>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
</script>
```
:::

## 输入限制
添加属性 ``show-word-limit``开启统计,``maxlength``设置限制字数
<div class="demo-block">
    <zmz-input v-model="input" type="text" show-word-limit :maxlength="10" placeholder="请输入内容" style="width:100%;"></zmz-input>
</div>

:::demo
```html
<template>
    <div class="demo-block">
        <zmz-input v-model="input" type="text" show-word-limit :maxlength="10" placeholder="请输入内容" style="width:100%;"></zmz-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
</script>
```
:::


## 不同尺寸
Input 组件提供除了默认值以外的四种尺寸，可以在不同场景下选择合适的按钮尺寸。
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>
            <zmz-input v-model="input" size="large" placeholder="请输入内容" style="width:200px;"></zmz-input>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-input v-model="input" size="medium" placeholder="请输入内容" style="width:200px;"></zmz-input>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-input v-model="input" size="default" placeholder="请输入内容" style="width:200px;"></zmz-input>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-input v-model="input" size="small" placeholder="请输入内容" style="width:200px;"></zmz-input>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-input v-model="input" size="mini" placeholder="请输入内容" style="width:200px;"></zmz-input>
        </zmz-space-item>
    </zmz-space>
</div>


:::demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-input v-model="input" size="large" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" size="medium" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" size="default" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" size="small" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" size="mini" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
</script>
```
:::

## Input 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 输入框值 | String/Array | —  | — |
| type | 文本显示类型 | String| text/password, 原生type | text |
|size| 尺寸 | String | large / medium / default / small / mini | default |
| name | input 的 name 属性 | String | — | — |
| disabled | 禁用 | Boolean | — | false |
| readonly | 只读 | Boolean | — | false |
| clearbtn | 清空按钮 | Boolean | — | false |
| placeholder | 输入时需要显示的提示文案, (为空,默认继承Form-item中的label属性) | String | — | — |
| toggle-password-btn | type="password" 是否显示隐藏密码图标 | Boolean | — | true |
| focus-border | 是否显示激活状态 | Boolean | — | true |
| autocomplete | 原生属性，自动补全 | — | on, off | off |
| autofocus | 原生属性，自动获取焦点 | Boolean | — | false |
| prefix | 是否强制显示前缀图标 | Boolean | — | true |
| suffix | 是否强制显示后缀图标 | Boolean | — | true |
| prefix-icon | 更换添加前缀图标 | String | — | — |
| suffix-icon | 更换添加后缀图标 | String | — | — |
| prefix-class | 前缀自定义class | String | — | — |
| prefix-style | 前缀自定义style | String | — | — |
| prefix-padding | 前缀自定义padding | Number | — | 20 |
| suffix-class | 后缀自定义class | String | — | — |
| suffix-style | 后缀自定义style | String | — | — |
| suffix-padding | 后缀自定义padding | Number | — | 20 |
| maxlength | 最大值 | Number | — | —  |
| show-word-limit | 显示字数统计 | Boolean | — | false |



## Input 事件
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
| on-change | 在 Input 发生变化时触发 | value值 |
| on-focus | 在 Input 获取焦点时触发 | value值 |
| on-blur | 在 Input 失去焦点时触发 | value值 |
| on-password-switch | 在 密码框切换时触发 | type值 |
| on-clear | input清空时触发 | — |
| on-prefix-icon | 点击前缀图标 | — |
| on-suffix-icon | 点击后缀图标 | — |

## Input 插槽
| 名称      | 说明          |
|---------- |-------------- |
| prefix | 前缀插槽 |
| suffix | 后缀插槽 |
| prepend | 前置内容插槽 |
| append | 后置内容插槽 |

## Input 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-input-height          |  --zmz-input-height           | 32px     | 高度        |
| @zmz-input-background-color      |  --zmz-input-background-color       | #fff          | 背景颜色    |
| @zmz-input-padding     |  --zmz-input-padding         | 8px          | 内边距      |
| @zmz-input-font-size       |  --zmz-input-font-size          | 14px       | 字体大小        |
| @zmz-input-text-color   |  --zmz-input-text-color     | 默认主题颜色          | 字体颜色    |
| @zmz-input-placeholder-color  |  --zmz-input-placeholder-color     | #99a4b2         | 占位符颜色      |
| @zmz-input-border-radius|  --zmz-input-border-radius   | 3px      | 圆角|
| @zmz-input-border-color|  --zmz-input-border-color   | #e3e6ef      | 默认边线颜色|
| @zmz-input-border-hover-color     |  --zmz-input-border-hover-color         | #d2d5dc         | 滑过边线颜色      |
| @zmz-input-border-active-color     |  --zmz-input-border-active-color         |  确认主题颜色        | 激活边线颜色     |
| @zmz-input-suffix-text-color     |  --zmz-input-suffix-text-color        | #8794a5         | 后缀文字颜色      |
| @zmz-input-suffix-icon-color     |  --zmz-input-suffix-icon-color        | #8794a5         | 后缀图标颜色      |
| @zmz-input-suffix-icon-size     |  --zmz-input-suffix-icon-size          | 14px         | 后缀图标大小      |
| @zmz-input-suffix-text-font-size     |  --zmz-input-suffix-text-font-size         | 14px         | 后缀字体大小      |
| @zmz-input-prefix-icon-color     |  --zmz-input-prefix-icon-color         | #8794a5         | 前缀图标颜色      |
| @zmz-input-prefix-icon-size     |  --zmz-input-prefix-icon-size        | 14px         | 前缀图标大小      |
| @zmz-input-prepend-background-color     |  --zmz-input-prepend-background-color         | #f5f7fa         | 前置背景颜色      |
| @zmz-input-prepend-border-color     |  --zmz-input-prepend-border-color         | #dcdfe6         |前置编写颜色      |
| @zmz-input-prepend-text-color     |  --zmz-input-prepend-text-color         | #909399         | 前置文字颜色      |
| @zmz-input-append-background-color     |  --zmz-input-append-background-color         | #f5f7fa         | 后置背景颜色      |
| @zmz-input-append-border-color     |  --zmz-input-append-border-color         | #dcdfe6         |后置编写颜色      |
| @zmz-input-append-text-color     |  --zmz-input-append-text-color         | #909399         | 后置文字颜色      |
