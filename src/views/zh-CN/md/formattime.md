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
            title: 'Formattime 时间处理' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            time: (new Date()).getTime() + 10 * 1 * 1000,
            time2: (new Date()).getTime() - 60 * 10 * 1000,
        };
    },
    methods: {
        currentConfig(data){
          return this.$setting.currentConfig[data];
        }
    }
}
</script>

# Formattime 时间处理
----
对时间的处理提供两种格式```relativetime```,```countdown```,```currenttime```

## 时间
默认动态时间

<div class="demo-block">
    <zmz-formattime default-time="0000-00-00 00:00:00"></zmz-formattime>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-formattime default-time="0000-00-00 00:00:00"></zmz-formattime>
    </div>
</template>
```
:::

## 倒计时
使用type=```countdown```切换倒计时显示

<div class="demo-block">
    <zmz-formattime :time="time" default-time="00天00时00分00秒" type="countdown"></zmz-formattime>
    <zmz-formattime time="2021-06-09"  default-time="0000-00-00" type="countdown"></zmz-formattime>
    <zmz-formattime time="2021-06-09 12:12:00"  default-time="0000-00-00 00:00:00" type="countdown"></zmz-formattime>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-formattime :time="time" default-time="00天00时00分00秒" type="countdown"></zmz-formattime>
        <zmz-formattime time="2021-06-09"  default-time="0000-00-00" type="countdown"></zmz-formattime>
        <zmz-formattime time="2021-06-09 12:12:00"  default-time="0000-00-00 00:00:00" type="countdown"></zmz-formattime>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time: (new Date()).getTime() + 10 * 1 * 1000,
        };
    }
}
</script>
```
:::

## 相对时间
使用type=```relativetime```切换相对时间显示

<div class="demo-block">
    <zmz-formattime :time="time2" type="relativetime"></zmz-formattime>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-formattime :time="time2" type="relativetime"></zmz-formattime>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time2: (new Date()).getTime() - 60 * 10 * 1000,
        };
    }
}
</script>
```
:::


## Formattime 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| time | 时间格式，时间戳或年月日或年月日时分秒，注意必须是完整时间格式 | String/Number | — | — |
| default-time | 默认展示格式 | String/Number | — | — |
| type | 时间类型 | String | relativetime(相对时间)/countdown(倒计时)/currenttime(当前时间) | currenttime |
| relativetime-options | 参数配置 | Object | {Y, M, D, W, h, s, m} | {Y: 年前, M:月前, W:周前, D:天前, h:小时前, m:分钟前, s:刚刚} |
| countdown-options | 参数配置 | Object | {Y, M, D, W, h, s, m} | {Y: 年前, M:月前, W:周前, D:天前, h:小时前, m:分钟前, s:刚刚} |
| currenttime-options | 参数配置 | Object | {format} | {format:'yyyy-MM-dd hh:mm:ss'} |



