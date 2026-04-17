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
            title: 'DatePicker 日期选择器' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            date: '',
            datetime: '',
            daterange: [],
            monthrange: [],
            datetimerange: [],
            year: 'Fri Jan 01 2021 08:00:00 GMT+0800 (中国标准时间) ',
            month: '',
            dateFormat1: new Date(),
            dateFormat2: new Date(),
            dateFormat3: new Date(),
            shortcut: [{
                text: '今天',
                onClick() {
                  return new Date()
                }
            }, {
                text: '昨天',
                onClick() {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24);
                  return date
                }
            }, {
                text: '一周前',
                onClick() {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                  return date
                }
            }],
            isFlag: false
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
# DatePicker 日期选择器
----
## 概述
选择或输入日期，支持年、月、日期等类型，支持选择范围。
## 基础用法

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-datepicker v-model="date" type="date" placeholder="请选择" @on-change="onChange" style="width: 200px"></zmz-datepicker>
        <zmz-datepicker v-model="datetime" type="datetime" placeholder="请选择" @on-change="onChange" style="width: 200px"></zmz-datepicker>
        <zmz-datepicker v-model="daterange" type="daterange" format="yyyy 年 MM 月 dd 日" @on-change="onChange" placeholder="请选择" style="width: 400px"></zmz-datepicker>
        <zmz-datepicker v-model="monthrange" type="monthrange" format="yyyy 年 MM 月" @on-change="onChange" placeholder="请选择" style="width: 400px"></zmz-datepicker>
        <zmz-datepicker v-model="datetimerange" type="datetimerange" format="yyyy 年 MM 月 dd 日 HH 时 mm 分 ss秒" @on-change="onChange" placeholder="请选择" style="width: 400px"></zmz-datepicker>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-datepicker v-model="date" type="date" placeholder="请选择" @on-change="onChange" style="width: 200px"></zmz-datepicker>
            <zmz-datepicker v-model="datetime" type="datetime" placeholder="请选择" @on-change="onChange" style="width: 200px"></zmz-datepicker>
            <zmz-datepicker v-model="daterange" type="daterange" format="yyyy 年 MM 月 dd 日" @on-change="onChange" placeholder="请选择" style="width: 400px"></zmz-datepicker>
            <zmz-datepicker v-model="monthrange" type="monthrange" format="yyyy 年 MM 月" @on-change="onChange" placeholder="请选择" style="width: 400px"></zmz-datepicker>
            <zmz-datepicker v-model="datetimerange" type="datetimerange" format="yyyy 年 MM 月 dd 日 HH 时 mm 分 ss秒" @on-change="onChange" placeholder="请选择" style="width: 400px"></zmz-datepicker>
        </zmz-space>
    </div>
</template> 
<script>
    export default {
        data() {
            return {
                date: '',
                datetime: '',
                daterange: '',
                monthrange: '',
                datetimerange: '',
            };
        },
        methods: {
            onChange(date) {
                console.log(date)
            }
        },
    }
</script>
```
:::

## 快捷项用法

<div class="demo-block">
    <zmz-datepicker :shortcut="shortcut" v-model="date" type="date" placeholder="请选择" @on-change="onChange" style="width: 200px"></zmz-datepicker>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-datepicker :shortcut="shortcut" v-model="date" type="date" placeholder="请选择" @on-change="onChange" style="width: 200px"></zmz-datepicker>
    </div>
</template> 
<script>
    export default {
        data() {
            return {
                date: '2021-02-02 15:00:00',
            };
        },
        methods: {
            onChange(date) {
                console.log(date)
            }
        },
    }
</script>
```
:::

## 禁用只读用法
添加``disabled`` 属性禁用， 添加``readonly`` 属性只读
<div class="demo-block">
    <zmz-space>
        <zmz-datepicker v-model="date" disabled placeholder="请选择" style="width: 200px"></zmz-datepicker>
        <zmz-datepicker v-model="date" readonly placeholder="请选择" style="width: 200px"></zmz-datepicker>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-datepicker v-model="date" disabled placeholder="请选择" style="width: 200px"></zmz-datepicker>
            <zmz-datepicker v-model="date" readonly placeholder="请选择" style="width: 200px"></zmz-datepicker>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                date: ''
            };
        }
    }
</script>
```
:::

## 其他用法

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <div style="text-align:center;padding-bottom:20px;">年</div>
            <zmz-datepicker v-model="year" type="year" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
        </zmz-space-item>
        <zmz-space-item>
            <div style="text-align:center;padding-bottom:20px;">月</div>
            <zmz-datepicker v-model="month" type="month" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <div style="text-align:center;padding-bottom:20px;">年</div>
                <zmz-datepicker v-model="year" type="year" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
            </zmz-space-item>
            <zmz-space-item>
                <div style="text-align:center;padding-bottom:20px;">月</div>
                <zmz-datepicker v-model="month" type="month" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                year: '',
                month: '',
            };
        },
        methods: {
            onChange(date) {
                console.log(date)
            }
        },
    }
</script>
```
:::

## 日期格式

<div class="demo-block">
    <zmz-space>
        <zmz-space-item>
            <div style="text-align:center;padding-bottom:20px;">默认格式</div>
            <div style="text-align:center;padding-bottom:20px;">值:{{dateFormat1}}</div>
            <zmz-datepicker v-model="dateFormat1" type="date" placeholder="请选择" style="width: 300px"></zmz-datepicker>
        </zmz-space-item>
        <zmz-space-item>
            <div style="text-align:center;padding-bottom:20px;">使用 format 格式</div>
            <div style="text-align:center;padding-bottom:20px;">值:{{dateFormat2}}</div>
            <zmz-datepicker v-model="dateFormat2" format="yyyy 年 MM 月 dd 日" type="date" placeholder="请选择" style="width: 300px"></zmz-datepicker>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <div style="text-align:center;padding-bottom:20px;">默认格式</div>
                <div style="text-align:center;padding-bottom:20px;">值:{{dateFormat1}}</div>
                <zmz-datepicker v-model="dateFormat1" type="date" placeholder="请选择" style="width: 300px"></zmz-datepicker>
            </zmz-space-item>
            <zmz-space-item>
                <div style="text-align:center;padding-bottom:20px;">使用 format 格式</div>
                <div style="text-align:center;padding-bottom:20px;">值:{{dateFormat2}}</div>
                <zmz-datepicker v-model="dateFormat2" format="yyyy 年 MM 月 dd 日" type="date" placeholder="请选择" style="width: 300px"></zmz-datepicker>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dateFormat1: '',
                dateFormat2: '',
            };
        }
    }
</script>
```
:::

## 日期范围选择

<div class="demo-block">
    <zmz-datepicker v-model="daterange" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-datepicker v-model="daterange" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                daterange: ''
            };
        },
        methods: {
            onChange(date) {
                console.log(date)
            }
        },
    }
</script>
```
:::

## 不同尺寸

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-datepicker v-model="daterange" append-to-body :append-to-body-class="['demo']" size="large" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
        <zmz-datepicker v-model="daterange" size="medium" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
        <zmz-datepicker v-model="daterange" size="default" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
        <zmz-datepicker v-model="daterange" size="small" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
        <zmz-datepicker v-model="daterange" size="mini" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-datepicker v-model="daterange" append-to-body :append-to-body-class="['demo']" size="large" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
            <zmz-datepicker v-model="daterange" size="medium" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
            <zmz-datepicker v-model="daterange" size="default" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
            <zmz-datepicker v-model="daterange" size="small" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
            <zmz-datepicker v-model="daterange" size="mini" format="yyyy 年 MM 月 dd 日" type="daterange" @on-change="onChange" placeholder="请选择" style="width: 200px"></zmz-datepicker>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                daterange: ''
            };
        },
        methods: {
            onChange(date) {
                console.log(date)
            }
        },
    }
</script>
```
:::

## DatePicker 属性

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| v-model | 时间格式 | date(DatePicker) / array(DateRangePicker) |   —   | — |
| placeholder | 占位符 | String | 	— | — |
| start-placeholder | 范围选择时开始日期的占位内容 | String |     — | — |
| end-placeholder | 范围选择时结束日期的占位内容 | String |     — | — |
| division-range | 范围分割符 | String | — | 至 |
| type | 时间类型 | String |  date,year,month,daterange, monthrange | date |
| disabled | 是否禁用 | Boolean |     — | false |
| readonly | 是否只读 | Boolean |     — | false |
| timestamp | 是否返回时间戳 | Boolean |     — | false |
| linkage | 范围选择是否联动 | Boolean |     — | true |
| format | 显示在输入框中的格式 | String |   见下方 ##常见的日期和时间格式 | yyyy-MM-dd |
| teleport | 是否穿梭 | Boolean | 	— | false |
| teleport-dom | 自身是否插入至 位置 元素 | String | 	— | body |
| teleport-class | 自定义穿梭类名 | String/Array | 	— | — |
| placement | 下拉显示位置 | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |— |
| arrow | 下拉盒子的角 | Boolean |  —  | true | —  |
| offset | 盒子偏移 | Array | —  |  [0, 10] | —  |
| popper-options | 	popper2.js 的参数 | Array | —  |  [] | 参考 popper.js 文档  |


## DatePicker 方法
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
|on-change| 选择变化时回调 |  —  |

## 常见的日期和时间格式
| 名称      | 说明          | 示例  |
|---------- |-------------- |-------- |
| yyyy | 年份（四位） |  2021  |
| yy | 年份（两位） |  21  |
| M | 月份（一位）不补0 |  1  |
| MM | 月份（两位） |  01  |
| MMM | 月份（英文简写） |  Nov  |
| MMMM | 月份（英文） |  November  |
| d | 日期（一位）不补0 |  9  |
| dd | 日期（两位） |  09  |
| ddd | 星期（英文简写） |  Sat  |
| dddd | 星期（英文） |  Saturday  |
| w | 星期(一位) |  1  |
| ww | 星期(两位) |  01  |
| W | 星期(中文) |  一  |
| H | 小时（24小时制一位） 不补0|  1  |
| HH | 小时（24小时制两位） |  01  |
| h | 小时（12小时制一位）不补0 |  1  |
| hh | 小时（12小时制两位） |  01  |
| m | 分钟（一位）不补0  |  1  |
| mm | 分钟（两位） |  01  |
| s | 秒钟（一位） |  1  |
| ss | 秒钟（两位） |  01  |
| S | 毫秒（一位） |  1  |
| SS | 毫秒（二位） |  01  |
| SSS | 毫秒（三位） |  011  |
| AA | 上午与下午（大写） |  AM/PM  |
| aa | 上午与下午（小写） |  am/pm  |
| ZZ | 时区 |  GMT  |
| q | 季度(一位) |  1  |
| qq | 季度(两位) |  01  |
| Q | 季度(中文) |  一  |

## DatePicker 默认样式变量
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