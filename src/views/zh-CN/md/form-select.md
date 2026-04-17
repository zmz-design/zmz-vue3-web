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
            title: 'Select 选择器' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            select: 'Beijing',
            options: [
                {
                    value: 'Beijing',
                    label: '北京'
                },
                {
                    value: 'Shenzhen',
                    label: '深圳'
                },
                {
                    value: 'Guangzhou',
                    label: '广州'
                },
                {
                    value: 'Dalian',
                    label: '大连'
                }
            ],
            options2: [
                {
                    value: 'Beijing',
                    label: '北京'
                },
                {
                    value: 'Shenzhen',
                    label: '深圳',
                    disabled: true
                },
                {
                    value: 'Guangzhou',
                    label: '广州'
                },
                {
                    value: 'Dalian',
                    label: '大连'
                }
            ],
            options1: [
                {
                    label: '热门城市',
                    options: [
                        {
                            value: 'Shanghai',
                            label: '上海'
                        },
                        {
                            value: 'Beijing',
                            label: '北京'
                        }
                    ]
                },
                {
                    label: '城市名',
                    options: [
                        {
                            value: 'Chengdu',
                            label: '成都'
                        },
                        {
                            value: 'Shenzhen',
                            label: '深圳'
                        },
                        {
                            value: 'Guangzhou',
                            label: '广州',
                            disabled: true
                        },
                        {
                            value: 'Dalian',
                            label: '大连'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        onChange(val) {
            console.log(val)
        }
    }
};
</script>
# Select 选择器
----
## 基础用法
当选项过多时，使用下拉菜单展示并选择内容。
<div class="demo-block">
    <zmz-select @on-change="onChange" v-model="select" placeholder="请选择" clearbtn style="width:200px;">
        <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
    </zmz-select>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-select @on-change="onChange" v-model="select" placeholder="请选择" clearbtn style="width:200px;">
            <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
        </zmz-select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: 'Beijing',
            options: [
                {
                    value: 'Beijing',
                    label: '北京'
                },
                {
                    value: 'Shenzhen',
                    label: '深圳'
                },
                {
                    value: 'Guangzhou',
                    label: '广州'
                },
                {
                    value: 'Dalian',
                    label: '大连'
                }
            ],
        }
    }
}
</script>

```
:::

## 禁用选项
有禁用选项，不能提供选择
<div class="demo-block">
    <zmz-select v-model="select" placeholder="请选择" style="width:200px;">
        <zmz-select-option v-for="(item,index) in options2" :disabled="item.disabled" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
    </zmz-select>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-select v-model="select" placeholder="请选择" style="width:200px;">
            <zmz-select-option v-for="(item,index) in options2" :disabled="item.disabled" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
        </zmz-select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: 'Beijing',
            options: [
                {
                    value: 'Beijing',
                    label: '北京'
                },
                {
                    value: 'Shenzhen',
                    label: '深圳'
                },
                {
                    value: 'Guangzhou',
                    label: '广州'
                },
                {
                    value: 'Dalian',
                    label: '大连'
                }
            ],
        }
    }
}
</script>

```
:::

## 禁用只读状态
添加``disabled``禁用，添加``readonly``只读
<div class="demo-block">
    <zmz-space>
        <zmz-select v-model="select" placeholder="请选择" style="width:200px;" disabled>
            <zmz-select-option v-for="(item,index) in options2" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
        </zmz-select>
        <zmz-select v-model="select" placeholder="请选择" style="width:200px;" readonly>
            <zmz-select-option v-for="(item,index) in options2" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
        </zmz-select>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-select v-model="select" placeholder="请选择" style="width:200px;" disabled>
                <zmz-select-option v-for="(item,index) in options2" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" placeholder="请选择" style="width:200px;" readonly>
                <zmz-select-option v-for="(item,index) in options2" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
            </zmz-select>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: 'Beijing',
            options: [
                {
                    value: 'Beijing',
                    label: '北京'
                },
                {
                    value: 'Shenzhen',
                    label: '深圳'
                },
                {
                    value: 'Guangzhou',
                    label: '广州'
                },
                {
                    value: 'Dalian',
                    label: '大连'
                }
            ],
        }
    }
}
</script>

```
:::

## 分组用法
当选项过多时，使用分组展示内容。
<div class="demo-block">
    <zmz-select  @on-change="onChange" v-model="select" placeholder="请选择" style="width:200px;">
        <zmz-select-option-group v-for="(item,index) in options1" :key="index" :label="item.label">
            <zmz-select-option v-for="(items,indexs) in item.options" :disabled="items.disabled" :value="items.value" :label="items.label" :key="indexs"></zmz-select-option>
        </zmz-select-option-group>
    </zmz-select>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-select v-model="select" placeholder="请选择" style="width:200px;">
            <zmz-select-option-group v-for="(item,index) in options1" :key="index" :label="item.label">
                <zmz-select-option v-for="(items,indexs) in item.options" :disabled="items.disabled" :value="items.value" :label="items.label" :key="indexs"></zmz-select-option>
            </zmz-select-option-group>
        </zmz-select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: 'Beijing',
            options: [{
                label: '热门城市',
                options: [{
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Beijing',
                    label: '北京'
                }]
            }, {
                label: '城市名',
                options: [{
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }, {
                    value: 'Dalian',
                    label: '大连'
                }]
            }]
        }
    }
}
</script>

```
:::

## 选项为空
当选项不存在的补位。
<div class="demo-block">
    <zmz-select v-model="select" placeholder="请选择" style="width:200px;"></zmz-select>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-select v-model="select" placeholder="请选择" style="width:200px;"></zmz-select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: ''
        }
    }
}
</script>

```
:::

## 不同尺寸
当选项不存在的补位。
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-select v-model="select" size="large" placeholder="请选择大尺寸" style="width:200px;">
            <zmz-select-option value="large" label="大尺寸"></zmz-select-option>
        </zmz-select>
        <zmz-select v-model="select" size="medium" placeholder="请选择中等尺寸" style="width:200px;">
            <zmz-select-option value="medium" label="中等尺寸"></zmz-select-option>
        </zmz-select>
        <zmz-select v-model="select" size="default" placeholder="请选择默认尺寸" style="width:200px;">
            <zmz-select-option value="default" label="默认尺寸"></zmz-select-option>
        </zmz-select>
        <zmz-select v-model="select" size="small" placeholder="请选择小尺寸" style="width:200px;">
            <zmz-select-option value="small" label="小尺寸"></zmz-select-option>
        </zmz-select>
        <zmz-select v-model="select" size="mini" placeholder="请选择迷你尺寸" style="width:200px;">
            <zmz-select-option value="mini" label="迷你尺寸"></zmz-select-option>
        </zmz-select>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-select v-model="select" size="large" placeholder="请选择大尺寸" style="width:200px;">
                <zmz-select-option value="large" label="大尺寸"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" size="medium" placeholder="请选择中等尺寸" style="width:200px;">
                <zmz-select-option value="medium" label="中等尺寸"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" size="default" placeholder="请选择默认尺寸" style="width:200px;">
                <zmz-select-option value="default" label="默认尺寸"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" size="small" placeholder="请选择小尺寸" style="width:200px;">
                <zmz-select-option value="small" label="小尺寸"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" size="mini" placeholder="请选择迷你尺寸" style="width:200px;">
                <zmz-select-option value="mini" label="迷你尺寸"></zmz-select-option>
            </zmz-select>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: ''
        }
    }
}
</script>

```
:::

## Select 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 备注  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| v-model | 绑定显示参数 | boolean | — | false | — |
| size | 尺寸 | String | large / medium / default / small / mini | default |
| name | select input 的 name 属性 | String | — | — | —  |
| disabled | 禁用 | Boolean | — | false | — |
| readonly | 只读 | Boolean | — | false | — |
| clearbtn | 清空按钮 | Boolean | — | false | — |
| placeholder | 输入时需要显示的提示文案 | String | 请选择 | —  | —  |
| autocomplete | 原生属性，自动补全 | String | on, off | off | —  |
| open | 是否默认打开 | Boolean | — | false | —  |
| empty-text | 空数据文本 | String | — | 暂无数据 | —  |
| prefix | 是否强制显示前缀图标 | Boolean | — | false |
| suffix | 是否强制显示后缀图标 | Boolean | — | true |
| prefix-icon | 更换添加前缀图标 | String | — | — |
| suffix-icon | 更换添加后缀图标 | String | — | — |
| teleport | 是否穿梭 | Boolean | 	— | false |
| teleport-dom | 自身是否插入至 位置 元素 | String | 	— | body |
| teleport-class | 自定义穿梭类名 | String/Array | 	— | — |
| placement | 下拉显示位置 | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |— |
| arrow | 下拉盒子的角 | Boolean |  —  | true | —  |
| offset | 盒子偏移 | Array | —  |  [0, 10] | —  |
| popper-options | 	popper2.js 的参数 | Array | —  |  [] | 参考 popper.js 文档  |

## Select.option属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number | — | — |
| label | 选项的标签 | string/number | — | — |
| disabled | 禁用当前项 | boolean | — | false |

## Select.option-group属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 分组标签 | string | — | — |

## Select 方法
| 事件      | 说明          | 返回值  |
|---------- |-------------- |---- |
| on-change | value值改变时触发 | value |
| on-focus | input获取焦点是触发 | true |
| on-blur | input失去焦点触发，下拉框关闭 | true |
| on-clear | input清空时触发 | — |
| on-open-before | 打开之前 | — |
| on-open | 打开中 | — |
| on-open-after | 打开之后 | — |
| on-close-before | 关闭之前 | — |
| on-close | 关闭中 | — |
| on-close-after | 关闭之后 | — |

## Select 插槽
| 参数      | 说明          |
|---------- |-------------- |
| default | option插槽 |
| empty | 无选项自定义插槽 |

## Select 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-select-height          |  --zmz-select-height           | 32px     | 高度        |
| @zmz-select-background-color      |  --zmz-select-background-color       | #fff          | 背景颜色    |
| @zmz-select-padding     |  --zmz-select-padding         | 8px          | 内边距      |
| @zmz-select-font-size       |  --zmz-select-font-size          | 12px       | 字体大小        |
| @zmz-select-text-color   |  --zmz-select-text-color     | 默认主题颜色          | 字体颜色    |
| @zmz-select-text-active-color   |  --zmz-select-text-active-color     | 确认主题颜色          | 字体激活颜色    |
| @zmz-select-text-hover-color   |  --zmz-select-text-hover-color     | 确认主题颜色          | 字体滑过颜色    |
| @zmz-select-text-background-color   |  --zmz-select-text-background-color     | #fff          | 字体背景颜色    |
| @zmz-select-placeholder-color  |  --zmz-select-placeholder-color     | #99a4b2         | 占位符颜色      |
| @zmz-select-border-radius|  --zmz-select-border-radius   | 3px      | 圆角|
| @zmz-select-border-color|  --zmz-select-border-color   | #e3e6ef      | 默认边线颜色|
| @zmz-select-border-hover-color     |  --zmz-select-border-hover-color         | #d2d5dc         | 滑过边线颜色      |
| @zmz-select-border-active-color     |  --zmz-select-select-active-color         |  确认主题颜色        | 激活边线颜色     |
| @zmz-select-suffix-icon-color     |  --zmz-select-suffix-icon-color        | #8794a5         | 后缀图标颜色      |
| @zmz-select-suffix-icon-size     |  --zmz-select-suffix-icon-size          | 12px         | 后缀图标大小      |
| @zmz-select-prefix-icon-color     |  --zmz-select-prefix-icon-color         | #8794a5         | 前缀图标颜色      |
| @zmz-select-prefix-icon-size     |  --zmz-select-prefix-icon-size        | 12px         | 前缀图标大小      |
| @zmz-select-empty-text-color     |  --zmz-select-empty-text-color        | #909399         | 空字体颜色      |
| @zmz-select-empty-text-font-size     |  --zmz-select-empty-text-font-size        | 12px         | 空字体大小      |
| @zmz-select-item-text-color     |  --zmz-select-item-text-color        | #909399         | 选项字体颜色      |
| @zmz-select-item-text-font-size     |  --zmz-select-item-text-font-size        | 12px         | 选项字体大小      |
| @zmz-select-group-border-color     |  --zmz-select-group-border-color        | #f4f5f9         | 组边线颜色      |
| @zmz-select-group-text-color     |  --zmz-select-group-text-color        | #909399         | 组字体颜色      |
| @zmz-select-group-text-font-size     |  --zmz-select-group-text-font-size        | 12px         | 组字体大小      |
| @zmz-select-menu-background-color     |  --zmz-select-menu-background-color        | #fff         | 选项背景颜色      |
| @zmz-select-menu-border-color     |  --zmz-select-menu-border-color        | #e3e6ef         | 选项线颜色      |
| @zmz-select-menu-box-shadow     |  --zmz-select-menu-box-shadow        | 0 2px 12px 0 #e5e5e5         | 选项阴影      |