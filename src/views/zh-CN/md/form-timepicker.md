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
            title: 'Timepicker 时间选择器' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            date: '00:00',
            date1: '00:00',
            date2: '01:00',
            date3: '00:20',
            date4: '03:00',
            dateselect1: '00:00',
            dateselect2: '00:00',
            time: new Date(),
            time1: new Date(),
            year: '',
            month: '',
            dateFormat1: [],
            dateFormat2: new Date(),
            dateFormat3: '',
            daterange: [],
            daterange1: [],
            daterange2: '',
            daterange3: '',
            disableddate: '',
            readonlydate: new Date(2020, 2, 11),
            defaultValue: new Date(2020, 2, 11)
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onChange(date) {
            console.log(date)
        }
    },
}
</script>
# Timepicker 时间选择器
----
用于时分秒时间选择。
## 基础用法

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-timepicker v-model="date" type="timeselect" :clearbtn="true" placeholder="请选择" style="width: 200px"></zmz-timepicker>
        <zmz-timepicker v-model="date1" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        <zmz-timepicker v-model="date2" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        <zmz-timepicker v-model="date3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        <zmz-timepicker v-model="date4" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-timepicker v-model="date" type="timeselect" :clearbtn="true" placeholder="请选择" style="width: 200px"></zmz-timepicker>
            <zmz-timepicker v-model="date1" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            <zmz-timepicker v-model="date2" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            <zmz-timepicker v-model="date3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            <zmz-timepicker v-model="date4" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space>
    </div>
</template> 
<script>
    export default {
        data() {
            return {
                date: '00:00'
                date1: '00:00'
                date2: '00:00'
                date3: '00:00'
                date4: '00:00'
            };
        }
    }
</script>
```
:::

## 固定时间范围

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-timepicker v-model="dateselect1" type="timeselect" 
        :options="{
          start: '00:00',
          step: '00:15',
          end: '23:59'
        }" placeholder="请选择" style="width: 200px"></zmz-timepicker>
        <zmz-timepicker v-model="dateselect2" type="timeselect" 
        :options="{
          start: '00:00',
          step: '00:15',
          end: '23:59',
          minTime: dateselect1,
        }" placeholder="请选择" style="width: 200px"></zmz-timepicker>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-timepicker v-model="dateselect1" type="timeselect" 
            :options="{
            start: '00:00',
            step: '00:15',
            end: '23:59'
            }" placeholder="请选择" style="width: 200px"></zmz-timepicker>
            <zmz-timepicker v-model="dateselect2" type="timeselect" 
            :options="{
            start: '00:00',
            step: '00:15',
            end: '23:59',
            minTime: dateselect1,
            }" placeholder="请选择" style="width: 200px"></zmz-timepicker>
        </zmz-space>
    </div>
</template> 
<script>
    export default {
        data() {
            return {
                dateselect1: '00:00',
                dateselect2: '00:00'
            };
        }
    }
</script>
```
:::

## 时分秒用法

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-timepicker v-model="time" placeholder="请选择" style="width: 200px"></zmz-timepicker>
        <zmz-timepicker :default-value="defaultValue" v-model="time1" placeholder="请选择" style="width: 200px"></zmz-timepicker>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-timepicker v-model="time" placeholder="请选择" style="width: 200px"></zmz-timepicker>
            <zmz-timepicker :default-value="defaultValue" v-model="time1" placeholder="请选择" style="width: 200px"></zmz-timepicker>
        </zmz-space>
    </div>
</template> 
<script>
    export default {
        data() {
            return {
                time: '00:00',
                defaultValue: new Date(2020, 2, 11),
                time1: new Date()
            };
        }
    }
</script>
```
:::


## 禁用只读用法
添加``disabled``属性禁用, 添加``readonly``属性只读
<div class="demo-block">
    <zmz-space>
        <zmz-timepicker v-model="disableddate" disabled placeholder="请选择" style="width: 200px"></zmz-timepicker>
        <zmz-timepicker v-model="readonlydate" readonly placeholder="请选择" style="width: 200px"></zmz-timepicker>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-timepicker v-model="disableddate" disabled placeholder="请选择" style="width: 200px"></zmz-timepicker>
            <zmz-timepicker v-model="readonlydate" readonly placeholder="请选择" style="width: 200px"></zmz-timepicker>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                disableddate: '',
                readonlydate: new Date(2020, 2, 11),
            };
        }
    }
</script>
```
:::

## 日期范围选择

<div class="demo-block">
    <zmz-timepicker v-model="daterange" type="timerange" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-timepicker v-model="daterange" type="timerange" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                daterange: []
            };
        }
    }
</script>
```
:::

## 不同尺寸
提供多种尺寸
<div class="demo-block">
    <zmz-space mode="vertical" title="范围选择">
        <zmz-space-item>
            <zmz-timepicker size="large" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="medium" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="default" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="small" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="mini" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
        </zmz-space-item>
    </zmz-space>
    <zmz-space mode="vertical" title="单个选择">
        <zmz-space-item>
            <zmz-timepicker size="large" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="medium" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="default" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="small" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="mini" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
    </zmz-space>
    <zmz-space mode="vertical" title="下拉选择">
        <zmz-space-item>
            <zmz-timepicker size="large" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="medium" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="default" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="small" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-timepicker size="mini" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical" title="范围选择">
            <zmz-space-item>
                <zmz-timepicker size="large" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="medium" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="default" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="small" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="mini" v-model="daterange1" type="timerange" placeholder="请选择" style="width: 400px;"></zmz-timepicker>
            </zmz-space-item>
        </zmz-space>
        <zmz-space mode="vertical" title="单个选择">
            <zmz-space-item>
                <zmz-timepicker size="large" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="medium" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="default" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="small" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="mini" v-model="daterange2" type="time" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
        </zmz-space>
        <zmz-space mode="vertical" title="下拉选择">
            <zmz-space-item>
                <zmz-timepicker size="large" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="medium" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="default" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="small" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-timepicker size="mini" v-model="daterange3" type="timeselect" placeholder="请选择" style="width: 200px;"></zmz-timepicker>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                daterange1: [],
                daterange2: '',
                daterange3: '',
            };
        }
    }
</script>
```
:::

## Timepicker 属性

| 参数				| 说明| 类型| 可选值| 默认值		|
|----------			|-------------------------		|----------|--------------------------------------------	|-------------	|
| v-model			| 时间格式| Date(new Date()) / array([new Date(), new Date()])	|—| —|
| size				| 尺寸| String| large / medium / default / small / mini| default|
| placeholder		| 占位符| String| —|—|
| start-placeholder	| 范围选择时开始日期的占位内容	| String|—|—|
| end-placeholder	| 范围选择时结束日期的占位内容	| String|—|—|
| division-range	| 范围分割符| String| —| 至|
| type				| 时间类型| String|  time,timeselect,timerange| date|
| disabled			| 是否禁用| Boolean|—| false|
| readonly			| 是否只读| Boolean|—| false|
| clearbtn			| 是否显示清除按钮| Boolean|—| true|
| format			| 显示在输入框中的格式| String|见 datapicker##常见的日期和时间格式| HH:mm:ss|
| teleport | 是否穿梭 | Boolean | 	— | false |
| teleport-dom | 自身是否插入至 位置 元素 | String | 	— | body |
| teleport-class | 自定义穿梭类名 | String/Array | 	— | — |
| placement | 下拉显示位置 | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |— |
| arrow | 下拉盒子的角 | Boolean |  —  | true | —  |
| offset | 盒子偏移 | Array | —  |  [0, 10] | —  |
| popper-options | 	popper2.js 的参数 | Array | —  |  [] | 参考 popper.js 文档  |
| default-value     | 默认时间| String/Date|—| false|
| prefix            | 是否显示前缀| Boolean|—| false|
| suffix            | 是否显示后缀| Boolean|—| false|

## Timepicker.timeselect.options 属性

| 参数		| 说明						| 类型		| 可选值										| 默认值		|
|----------	|-------------------------	|----------	|--------------------------------------------	|-------------	|
| start		| 开始时间| String	|   —| 00:00|
| end		| 结束时间| String	|   —| 24:00|
| step		| 间隔时间| String	|   —| 00:20|
| minTime	| 最小时间| String	|   —| 00:00|
| maxTime	| 最大时间| String	|   —| —|

## Timepicker 方法
| 事件名称	| 说明			| 回调参数	|
|----------	|--------------	|--------	|
| on-change	| 选择变化时回调|  —|
| on-open	| 打开之前		| —|
| on-opened	| 打开之后		| —|
| on-close	| 关闭之前		| —|
| on-closed	| 关闭之后		| —|
| on-confirm| 确定			| —|
| on-canel	| 取消			| —|

## Timepicker 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-timepicker-height          |  --zmz-timepicker-height           | 32px     | 高度        |
| @zmz-timepicker-background-color      |  --zmz-timepicker-background-color       | #fff          | 背景颜色    |
| @zmz-timepicker-padding     |  --zmz-timepicker-padding         | 8px          | 内边距      |
| @zmz-timepicker-font-size       |  --zmz-timepicker-font-size          | 12px       | 字体大小        |
| @zmz-timepicker-text-color   |  --zmz-timepicker-text-color     | 默认主题颜色          | 字体颜色    |
| @zmz-timepicker-text-active-color   |  --zmz-timepicker-text-active-color     | 确认主题颜色          | 字体激活颜色    |
| @zmz-timepicker-text-hover-color   |  --zmz-timepicker-text-hover-color     | 确认主题颜色          | 字体滑过颜色    |
| @zmz-timepicker-text-background-color   |  --zmz-timepicker-text-background-color     | #fff          | 字体背景颜色    |
| @zmz-timepicker-text-background-hover-color   |  --zmz-timepicker-text-background-hover-color     | #f5f6f8          | 滑过字体背景颜色    |
| @zmz-timepicker-placeholder-color  |  --zmz-timepicker-placeholder-color     | #99a4b2         | 占位符颜色      |
| @zmz-timepicker-border-radius|  --zmz-timepicker-border-radius   | 3px      | 圆角|
| @zmz-timepicker-border-color|  --zmz-timepicker-border-color   | #e3e6ef      | 默认边线颜色|
| @zmz-timepicker-border-hover-color     |  --zmz-timepicker-border-hover-color         | #d2d5dc         | 滑过边线颜色      |
| @zmz-timepicker-border-active-color     |  --zmz-timepicker-timepicker-active-color         |  确认主题颜色        | 激活边线颜色     |
| @zmz-timepicker-suffix-icon-color     |  --zmz-timepicker-suffix-icon-color        | #8794a5         | 后缀图标颜色      |
| @zmz-timepicker-suffix-icon-size     |  --zmz-timepicker-suffix-icon-size          | 14px         | 后缀图标大小      |
| @zmz-timepicker-prefix-icon-color     |  --zmz-timepicker-prefix-icon-color         | #8794a5         | 前缀图标颜色      |
| @zmz-timepicker-prefix-icon-size     |  --zmz-timepicker-prefix-icon-size        | 14px         | 前缀图标大小      |
| @zmz-timepicker-item-text-color     |  --zmz-timepicker-item-text-color        | #909399         | 选项字体颜色      |
| @zmz-timepicker-item-text-font-size     |  --zmz-timepicker-item-text-font-size        | 12px         | 选项字体大小      |
| @zmz-timepicker-icon-color     |  --zmz-timepicker-icon-color        | #909399        | 图标颜色      |
| @zmz-timepicker-icon-font-size     |  --zmz-timepicker-icon-font-size        | 14px         | 图标大小      
| @zmz-timepicker-division-color     |  --zmz-timepicker-division-color        | 默认主题颜色        | 分割字体颜色      |
| @zmz-timepicker-division-font-size     |  --zmz-timepicker-division-font-size        | 12px         | 分割字体大小      |
| @zmz-timepicker-title-color     |  --zmz-timepicker-title-color        | 默认主题颜色        | 标题字体颜色      |
| @zmz-timepicker-title-font-size     |  --zmz-timepicker-title-font-size        | 12px         | 标题字体大小      |
| @zmz-timepicker-dropdown-background-color     |  --zmz-timepicker-dropdown-background-color        | #fff         | 选项背景颜色      |
| @zmz-timepicker-dropdown-border-color     |  --zmz-timepicker-dropdown-border-color        | #e3e6ef         | 选项线颜色      |
| @zmz-timepicker-dropdown-box-shadow     |  --zmz-timepicker-dropdown-box-shadow        | 0 2px 12px 0 #e5e5e5         | 选项阴影      |