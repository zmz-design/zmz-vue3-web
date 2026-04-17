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
                    name: 'describe',
                    content: this.describe
                }
            ]
        };
    },
    data() {
        return {
            title: 'Watermark 水印' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            watermark: false,
            watermark2: false,
            watermark3: false,
            table: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪6',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ],
            tableHead: [
                {title: '姓名',  field: 'name'},
                {title: '生日', field: 'birthday'},
                {title: '地址', field: 'address'},
                {title: '性别', field: 'sex'},
                {title: '操作', slot: 'bin'},
            ],
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Watermark 水印
----
展示当前页面归属

## 基本用法
<div class="demo-block">
    <zmz-button @click="watermark = !watermark">切换水印</zmz-button>
    <zmz-watermark v-model="watermark" :rotate="20" content="追梦猪" width="100" height="100">
        <div style="height: 300px"></div>
    </zmz-watermark>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-button @click="watermark = !watermark">切换水印</zmz-button>
        <zmz-watermark v-model="watermark" :rotate="20" content="追梦猪" width="100" height="100">
            <div style="height: 300px"></div>
        </zmz-watermark>
    </div>
</template>
<script>
export default {
    data() {
        return {
            watermark: false,
        };
    }
};
</script>
```
:::

## 全屏
<div class="demo-block">
    <zmz-button @click="watermark2 = !watermark2">切换</zmz-button>
    <zmz-watermark v-model="watermark2" fullscreen :zindex='999' :rotate="45" :content-options="{color: '#f00'}" :content="['追梦猪', '2024-10-10', '工号:007']" ></zmz-watermark>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-button @click="watermark2 = !watermark2">切换</zmz-button>
        <zmz-watermark v-model="watermark2" fullscreen :zindex='999' :rotate="45" :content-options="{color: '#f00'}" :content="['追梦猪', '2024-10-10', '工号:007']" ></zmz-watermark>
    </div>
</template>
<script>
export default {
    data() {
        return {
            watermark2: false
        };
    }
};
</script>
```
:::

## 图片
使用图片需要让服务器图片可以被访问，取消同域限制
<div class="demo-block">
   <zmz-button @click="watermark3 = !watermark3">切换</zmz-button>
    <zmz-watermark  :zindex='999' v-model="watermark3" :image-zoom="0.5" :rotate="10" image="https://www.zhuimengzhu.com/doc/cover/20220223/6ef437cb48d7109cf7262fe45ffd2059.png" fullscreen></zmz-watermark>
</div>

::: demo
```html
<template>
    <div class="demo-block">
    <zmz-button @click="watermark3 = !watermark3">切换</zmz-button>
        <zmz-watermark  :zindex='999' v-model="watermark3" :image-zoom="0.5" :rotate="10" image="https://www.zhuimengzhu.com/doc/cover/20220223/6ef437cb48d7109cf7262fe45ffd2059.png" fullscreen></zmz-watermark>
    </div>
</template>
<script>
export default {
    data() {
        return {
            watermark3: false
        };
    }
};
</script>
```
:::

## Watermark 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| v-model      |	水印显示隐藏 |	Boolean   |	—    |	false  |
| width      |	水印宽度 |	Number   |	—    |	220  |
| height   | 水印高度 | Number  | —  |  220  |
| alpha |  水印透明度  |    Number    |   —  |    .5      |
| content      |  水印内容  |    String / Array  |    — |  — |
| image      |  水印图片 |    String  |    — |  — |
| image-zoom      |  水印图片缩放 |    Number  |    — |  1 |
| content-options      |  水印文本内容配置 |    Object  |    — |  { baseline: 'middle', color: '#2d8ff4',align: 'center'} |
| rotate      |  水印旋转 |    Number  |    — | 0 |
| fullscreen      |  是否全屏 |    Boolean   |    — | false |

## content-options 配置
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| space      |	水印文本内容间隔 |	Number   |	—    |	0  |
| baseline      |	文本基线 |	String   |	alphabetic/top/hanging/middle/ideographic/bottom    |	middle  |
| color |  水印颜色  |    String    |    —     |    #2d8ff4     |
| align | 水印对齐方式 | String | start/end/center/left/right | center |
| font      |  水印字体样式参照canvas font |    String   |    — | 12px Arial |

## Watermark 插槽
| 名称      | 说明          |
|---------- |-------------- |
| default | 默认插槽，使用将展示局部水印 |