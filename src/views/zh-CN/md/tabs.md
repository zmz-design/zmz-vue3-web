<script>
export default{
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
            title: 'Tab 选项卡' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            name: 'one',
            position: 'top',
            nameEdit: '0',
            dataList: [
                {label: '新窗口0', name: '0', content: '新窗口0'}
            ],
            nameIndex: 1
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onChange(name, action) {
            if (action == 'add') {
                let newName = this.nameIndex++
                this.dataList.push({label: '新窗口'+ newName, name: newName, content: '新窗口'+ newName})
            } else {
                this.dataList.forEach((tab, index) => {
                    if (tab.name == name) {
                        const nextTab = this.dataList[index + 1] || this.dataList[index - 1]
                        if (nextTab) {
                            this.nameEdit = nextTab.name
                        }
                    }
                })

                let dataList = this.dataList.filter(item => item.name !== name)
                this.dataList = dataList
            }
        }
    },
}
</script>

# Tab 选项卡
----
## 基础用法
基础的、简洁的选项卡。

<div class="demo-block">
    <zmz-tabs v-model="name">
        <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
        <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
        <zmz-tabs-item label="数据库备份管理" name="three">数据库备份管理</zmz-tabs-item>
    </zmz-tabs>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-tabs v-model="name">
            <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="数据库备份管理" name="three">数据库备份管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'
        }
    }
}
</script>
```
:::

## 禁用某一项
使禁用项不能点击切换添加 ``disabled`` 属性
<div class="demo-block">
    <zmz-tabs v-model="name">
        <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
        <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
        <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
    </zmz-tabs>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-tabs v-model="name">
            <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'
        }
    }
}
</script>
```
:::

## 卡片样式
卡片样式的选项卡。
<div class="demo-block">
    <zmz-tabs v-model="name" type="card">
        <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
        <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
        <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
    </zmz-tabs>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-tabs v-model="name" type="card">
            <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'
        }
    }
}
</script>
```
:::

## 卡片化
卡片样式的选项卡。
<div class="demo-block">
    <zmz-tabs v-model="name" type="border-card">
        <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
        <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
        <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
    </zmz-tabs>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-tabs v-model="name" type="border-card">
            <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'
        }
    }
}
</script>
```
:::

## 卡位置
可以通过 tab-position 设置标签的位置
<div class="demo-block">
    <div style="margin-bottom: 30px">
        <zmz-radio-group v-model="position">
            <zmz-radio label="top" value="top">top</zmz-radio>
            <zmz-radio label="bottom" value="bottom">bottom</zmz-radio>
            <zmz-radio label="left" value="left">left</zmz-radio>
            <zmz-radio label="right" value="right">right</zmz-radio>
        </zmz-radio-group>
    </div>
    <div class="demo-block__header">
        <zmz-tabs id="123" v-model="name" :tab-position="position"  style="height: 300px;">
            <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="margin-bottom: 30px">
            <zmz-radio-group v-model="position">
                <zmz-radio label="top" value="top">top</zmz-radio>
                <zmz-radio label="bottom" value="bottom">bottom</zmz-radio>
                <zmz-radio label="left" value="left">left</zmz-radio>
                <zmz-radio label="right" value="right">right</zmz-radio>
            </zmz-radio-group>
        </div>
        <div class="demo-block__header">
            <zmz-tabs id="123" v-model="name" :tab-position="position"  style="height: 300px;">
                <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
                <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
                <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
            </zmz-tabs>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'，
            position: 'top'
        }
    }
}
</script>
```
:::


## 自定义标签
可以通过具名 slot 来实现自定义标签页的内容
<div class="demo-block">
    <div class="demo-block__header">
        <zmz-tabs v-model="name">
            <zmz-tabs-item name="one">
                <template #title>
                    <i class="zmz-icon--home"></i>
                    用户管理
                </template>
                用户管理
            </zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div class="demo-block__header">
            <zmz-tabs v-model="name">
                <zmz-tabs-item name="one">
                    <template #title>
                        <i class="zmz-icon--home"></i>
                        用户管理
                    </template>
                    用户管理
                </zmz-tabs-item>
                <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
                <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
            </zmz-tabs>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'，
        }
    }
}
</script>
```
:::

## 动态增减标签页
增减标签页按钮只能在选项卡样式的标签页下使用
<div class="demo-block">
    <div>{{nameEdit}}</div>
    <div class="demo-block__header">
        <zmz-tabs v-model="nameEdit" editable @on-editable="onChange" type="card">
            <zmz-tabs-item v-for="(item,index) in dataList" :label="item.label" :name="item.name" :key="index" :closable="item.closable">
                {{item.content}}
            </zmz-tabs-item>
        </zmz-tabs>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div>{{nameEdit}}</div>
        <div class="demo-block__header">
            <zmz-tabs v-model="nameEdit" editable @on-editable="onEditable" type="card">
                <zmz-tabs-item v-for="(item,index) in dataList" :label="item.label" :name="item.name" :key="index" :closable="item.closable">
                    {{item.content}}
                </zmz-tabs-item>
            </zmz-tabs>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            nameEdit: '0',
            dataList: [
                {label: '新窗口0', name: '0', content: '新窗口0'}
            ],
            nameIndex: 1
        }
    },
    methods: {
        onEditable(name, action) {
            if (action == 'add') {
                let newName = this.nameIndex++
                this.dataList.push({label: '新窗口'+ newName, name: newName, content: '新窗口'+ newName})
            } else {
                this.dataList.forEach((tab, index) => {
                    if (tab.name == name) {
                        const nextTab = this.dataList[index + 1] || this.dataList[index - 1]
                        if (nextTab) {
                            this.nameAdd = nextTab.name
                        }
                    }
                })

                let dataList = this.dataList.filter(item => item.name !== name)
                this.dataList = dataList
            }
        }
    },
}
</script>
```
:::

## Tabs 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | 激活选项卡 | String/Number | — | — |
| type | 风格类型 | String | card/border-card | — |
| editable | 标签是否增加和关闭 | Boolean | true/false | false |
| addable | 标签是否可增加 | Boolean | true/false | false |
| closable | 标签是否可关闭 | Boolean | true/false | false |
| tab-position | 卡片所在位置 | String | top/right/bottom/left | top |
| stretch | 标签是否自动撑开 | Boolean | true/false | false |
| before-remove | 关闭前的函数，返回 Promise 可阻止标签关闭 | Function | —  | —  |
| tab-active-line| 是否显示激活标签下辅助线 | Boolean | true/false  | true  |

## Tabs-item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 标题 | 	String/Function | — | — |
| name | 激活标志 | 	String | — | — |
| disabled | 是否禁用 | 	Boolean | true/false | false |
| closable | 是否可关闭标签，可编辑状态下有用 | 	Boolean | true/false | true |
| icon | 标签图标 | 	String | — | — |


## Tabs 方法

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | tab选项发生改变触发回调 | function(name\| '') |
| on-editable | tab选项卡删除添加触发 | function(name\| '', action\| 'add'/'remove') |
| on-scroll-prev-next | tab选项超出点击左右按钮触发 | function(offset\| '0', action \| 'next'/'prev') |

## Tabs 插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |

## Tabs-item 插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |
| title | 标题插槽 |

## Tabs 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-tabs-border-color              |  --zmz-tabs-border-color                  | #e3e6ef      |边线颜色     |
| @zmz-tabs-border-radius|  --zmz-tabs-border-radius| 3px      | 圆角        |
| @zmz-tabs-text-color      |  --zmz-tabs-text-color        |  #3f536e | 文字颜色    |
| @zmz-tabs-text-font-size     |  --zmz-tabs-text-font-size     | 12px          | 文字大小      |
| @zmz-tabs-active-color       |  --zmz-tabs-active-color          | 确认主题色       | 激活颜色        |
| @zmz-tabs-hover-color   |  --zmz-tabs-hover-color      | 确认主题色          | 滑过颜色    |
| @zmz-tabs-disabled-color  |  --zmz-tabs-disabled-color    | #3f536e          | 禁用颜色      |
