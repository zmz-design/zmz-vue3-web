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
            title: 'Cascader 级联选择器' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            cascader: [],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
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
        onChange() {
        }
    }
};
</script>
# Cascader 级联选择器
----
## 基础用法
逐级展示

<div class="demo-block">
    <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn @on-change="onChange"></zmz-cascader>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn @on-change="onChange"></zmz-cascader>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

```
:::

## 禁用只读级联
使用 ``disabled`` 或 ``readonly`` 来禁用或只读
<div class="demo-block">
    <zmz-space>
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" disabled></zmz-cascader>
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" readonly></zmz-cascader>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" disabled></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" readonly></zmz-cascader>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

```
:::

## 自定义节点内容

<div class="demo-block">
    <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn>
        <template v-slot:default="{ item }">
            <span>{{ item.label }}</span>
            <span v-if="item.children"> ({{ item.children.length }}) </span>
        </template>
    </zmz-cascader>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn>
            <template v-slot:default="{ item }">
                <span>{{ item.label }}</span>
                <span v-if="item.children"> ({{ item.children.length }}) </span>
            </template>
        </zmz-cascader>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

```
:::

## 可清空

<div class="demo-block">
    <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn></zmz-cascader>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn></zmz-cascader>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
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
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="large"></zmz-cascader>
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="medium"></zmz-cascader>
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="default"></zmz-cascader>
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="small"></zmz-cascader>
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="mini"></zmz-cascader>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="large"></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="medium"></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="default"></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="small"></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="mini"></zmz-cascader>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

```
:::

## Cascader 属性

| 参数			| 说明						| 类型		| 可选值							| 默认值	|
|----------		|--------------				|----------	|--------------------------------	|--------	|
| v-model | 绑定显示参数 | boolean | — | false | — |
| size | 尺寸 | String | large / medium / default / small / mini | default |
| name | cascader input 的 name 属性 | String | — | — | —  |
| disabled | 禁用 | Boolean | — | false | — |
| readonly | 只读 | Boolean | — | false | — |
| clearbtn | 清空按钮 | Boolean | — | false | — |
| placeholder | 输入时需要显示的提示文案 | String | 请选择 | —  | —  |
| autocomplete | 原生属性，自动补全 | String | on, off | off | —  |
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

## Cascader属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | String/Number | — | — |
| label | 选项的标签 | String/Number | — | — |
| disabled | 禁用当前项 | Boolean | — | false |

## Cascader 方法
| 事件      | 说明          | 返回值  |
|---------- |-------------- |---- |
| on-change | value值改变时触发 | value |
| on-clear | input清空时触发 | — |
| on-expand-change | 展开下级触发 | — |
| on-open-before | 打开之前 | — |
| on-open | 打开中 | — |
| on-open-after | 打开之后 | — |
| on-close-before | 关闭之前 | — |
| on-close | 关闭中 | — |
| on-close-after | 关闭之后 | — |

## Cascader 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-cascader-height          |  --zmz-cascader-height           | 32px     | 高度        |
| @zmz-cascader-background-color      |  --zmz-cascader-background-color       | #fff          | 背景颜色    |
| @zmz-cascader-padding     |  --zmz-cascader-padding         | 8px          | 内边距      |
| @zmz-cascader-font-size       |  --zmz-cascader-font-size          | 12px       | 字体大小        |
| @zmz-cascader-text-color   |  --zmz-cascader-text-color     | 默认主题颜色          | 字体颜色    |
| @zmz-cascader-text-active-color   |  --zmz-cascader-text-active-color     | 确认主题颜色          | 字体激活颜色    |
| @zmz-cascader-text-hover-color   |  --zmz-cascader-text-hover-color     | 确认主题颜色          | 字体滑过颜色    |
| @zmz-cascader-text-background-color   |  --zmz-cascader-text-background-color     | #fff          | 字体背景颜色    |
| @zmz-cascader-placeholder-color  |  --zmz-cascader-placeholder-color     | #99a4b2         | 占位符颜色      |
| @zmz-cascader-border-radius|  --zmz-cascader-border-radius   | 3px      | 圆角|
| @zmz-cascader-border-color|  --zmz-cascader-border-color   | #e3e6ef      | 默认边线颜色|
| @zmz-cascader-border-hover-color     |  --zmz-cascader-border-hover-color         | #d2d5dc         | 滑过边线颜色      |
| @zmz-cascader-border-active-color     |  --zmz-cascader-cascader-active-color         |  确认主题颜色        | 激活边线颜色     |
| @zmz-cascader-suffix-icon-color     |  --zmz-cascader-suffix-icon-color        | #8794a5         | 后缀图标颜色      |
| @zmz-cascader-suffix-icon-size     |  --zmz-cascader-suffix-icon-size          | 12px         | 后缀图标大小      |
| @zmz-cascader-item-text-color     |  --zmz-cascader-item-text-color        | #909399         | 选项字体颜色      |
| @zmz-cascader-item-text-font-size     |  --zmz-cascader-item-text-font-size        | 12px         | 选项字体大小      |
| @zmz-cascader-dropdown-background-color     |  --zmz-cascader-dropdown-background-color        | #fff         | 选项背景颜色      |
| @zmz-cascader-dropdown-border-color     |  --zmz-cascader-dropdown-border-color        | #e3e6ef         | 选项线颜色      |
| @zmz-cascader-dropdown-box-shadow     |  --zmz-cascader-dropdown-box-shadow        | 0 2px 12px 0 #e5e5e5         | 选项阴影      |