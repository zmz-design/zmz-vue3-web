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
        onChange(dataOld,dataNew) {
            console.log(dataOld,dataNew)
        }
    },
    data() {
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `左选项 ${ i }`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            title: 'Transfer 穿梭框' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            transferList: generateData(),
            value: [1, 4],
            value2: [2, 5],
            value3: [3, 6]
        };
    }
}
</script>
# Transfer 穿梭框
----
双栏穿梭选择框，常用于将多个项目从一边移动到另一边。
## 基础用法
<div class="demo-block">
    <zmz-transfer v-model="value" :data="transferList" @on-change="onChange"></zmz-transfer>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-transfer v-model="value" :data="transferList" @on-change="onChange"></zmz-transfer>
    </div>
</template>
<script>
export default {
    methods: {
        onChange(dataOld,dataNew) {
            console.log(dataOld,dataNew)
        }
    },
    data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `左选项 ${ i }`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            transferList: generateData(),
            value: [1, 4],
        };
    }
}
</script>
```
:::

## 禁用只读状态
添加属性 ``disabled`` 禁用， 添加属性 ``readonly`` 只读
<div class="demo-block">
    <zmz-space>
        <zmz-transfer v-model="value2" :data="transferList" insert="unshift" disabled></zmz-transfer>
        <zmz-transfer v-model="value2" :data="transferList" insert="unshift" readonly></zmz-transfer>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-transfer v-model="value2" :data="transferList" insert="unshift" disabled></zmz-transfer>
            <zmz-transfer v-model="value2" :data="transferList" insert="unshift" readonly></zmz-transfer>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `左选项 ${ i }`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            transferList: generateData(),
            value: [1, 4],
        };
    }
}
</script>
```
:::

## 自定义内容
使用默认插槽
<div class="demo-block">
    <zmz-transfer v-model="value3" :data="transferList" :left-default-checked="[5]" :right-default-checked="[3]">
        <template #leftBtn="{disabled}" >左状态{{disabled}}</template>
        <template #rightBtn="{disabled}" >右状态{{disabled}}</template>
        <template #rightTitle>右数据</template>
        <template #leftTitle>左数据</template>
        <template #leftCount="{selectedtotal, datatotal}">{{selectedtotal}}to{{datatotal}}</template>
        <template #rightCount="{selectedtotal, datatotal}">{{selectedtotal}}to{{datatotal}}</template>
        <template #rightFooter>右底部</template>
        <template #leftFooter>左底部</template>
    </zmz-transfer>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-transfer v-model="value3" :data="transferList" :left-default-checked="[5]" :right-default-checked="[3]">
            <template #leftBtn="{disabled}" >左状态{{disabled}}</template>
            <template #rightBtn="{disabled}" >右状态{{disabled}}</template>
            <template #rightTitle>右数据</template>
            <template #leftTitle>左数据</template>
            <template #leftCount="{selectedtotal, datatotal}">{{selectedtotal}}to{{datatotal}}</template>
            <template #rightCount="{selectedtotal, datatotal}">{{selectedtotal}}to{{datatotal}}</template>
            <template #rightFooter>右底部</template>
            <template #leftFooter>左底部</template>
        </zmz-transfer>
    </div>
</template>
<script>
export default {
    data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `左选项 ${ i }`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            transferList: generateData(),
            value: [1, 4],
        };
    }
}
</script>
```
:::

## Transfer 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 绑定显示参数 | Array | — | [] |
| data | 数据源 | Array | array[{ key, label, disabled }] | [] |
| insert | 插入方式initial（同数据源插入顺序）unshift（向前插入）push(向后插入) | String | initial/unshift/push | initial |
| titles | 自定义左标题 | Array | — | ['左列表', '右列表'] |
| left-default-checked | 初始进入左列表默认选中 | Array | — | [ ] |
| right-default-checked | 初始进入右列表默认选中 | Array | — | [ ] |
| field-alias | 数据源的字段别名 | Object{key, label, disabled} | — | — |
| empty-text | 数据为空文本 | String | — | 暂无数据 |
| search | 是否开启搜索 | Boolean | — | false |
| search-placeholder | 搜索框占位文本 | String | — | 请输入搜索内容 |
| search-empty-text | 搜索数据为空文本 | String | — | 暂无匹配数据 |
| search-method | 自定义搜索方法 | 	Function | — | — |
| disabled | 禁用 | Boolean | — | false |
| readonly | 只读 | Boolean | — | false |

## Transfer 方法

| 方法      | 说明          | 参数  |
|---------- |-------------- |---- |
| clearSearchQuery | 清空搜索框 | function('left/right')|

## Transfer 事件

| 事件      | 说明          | 参数  |
|---------- |-------------- |---- |
| on-change | 状态改变回调 | 点击(左/右)单个function('left/right', data)|
| on-left-btn-click | 点击左切换按钮 | 点击(左)按钮function('left', dataOld, dataNew)|
| on-right-btn-click | 点击右切换按钮 | 点击(右)按钮function('right', dataOld, dataNew)|

## Transfer 插槽
| 参数      | 说明          |默认值          |
|---------- |-------------- |-------------- |
| leftBtn | 切换按钮左插槽 | {disabled}禁用状态 |
| rightBtn | 切换按钮右插槽 |{disabled}禁用状态 |
| leftTitle | 左标题插槽 |— |
| rightTitle | 右标题插槽 | — |
| leftCount | 左数量插槽 |{selectedtotal, datatotal} |
| rightCount | 右数量插槽 | {selectedtotal, datatotal} |
| leftFooter | 左底部插槽 |— |
| rightFooter | 右底部插槽 | — |

## Transfer 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-upload-border-radius|  --zmz-upload-border-radius   | 3px      | 圆角|
| @zmz-upload-border-color|  --zmz-upload-border-color   | #e3e6ef      | 默认边线颜色|
| @zmz-transfer-background-color     |  --zmz-transfer-background-color         | #fff         | 背景色      |
| @zmz-transfer-background-other-color     |  --zmz-transfer-background-other-color         | #f5f7fa         | 其他背景色      |