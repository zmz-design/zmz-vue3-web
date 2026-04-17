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
            title: 'Upload 上传' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            fileList: [{name: '1.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}, 
                {name: '2.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}],
            model: [],
            multiple: false,
            type: 'file',
            inside: true,
            imgurl: ''
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        callback (val) {
            console.log(val)
        },
        onSuccess(data) {
            console.log('上传成功', data)
        },
        onChange(data) {
            console.log('发生改变文件', data)
        },
        onFile(data) {
            console.log('选中文件', data)
        },
        changeType(index) {
            if (index == 0) {
                this.type = 'file'
            } else if (index == 1){
                this.type = 'base64'
            }  else if (index == 2){
                this.type = 'blob'
            }
        },
        onRemove(data, data1, data2) {
            console.log('删除文件', data, data1, data2)
        },
        beforeRemove() {
            return new Promise((resolve) => {
                this.$messageBox.alert('删除提示', '确定删除当前', {
                  yesBtnText: '确定'
                }).then((res) => {
                    this.$message.success(`action: ${ res }`);
                    resolve(true)
                });
            })
        },
        onPreview(data, data1, data2) {
            console.log('预览文件', data, data1, data2)
        },
        upload() {
            console.log(this.model)
        }
    }
}
</script>
# Upload 上传
----
## 基本用法
<div class="demo-block">
    <zmz-upload :limit="3" show-file-list @on-preview="onPreview" action="http://localhost:3000/api/hunqing/uploads" type="file" v-model="fileList"></zmz-upload>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-upload :limit="3" show-file-list @on-preview="onPreview" action="http://localhost:3000/api/hunqing/uploads" type="file" v-model="fileList"></zmz-upload>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList: [
                {name: '1.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}, 
                {name: '2.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}
            ]
        }
    },
    methods: {
        onPreview(data) {
            console.log(data)
        }
    }
}
</script>
```
:::

## 图片缩略图
<div class="demo-block">
    <zmz-upload @on-preview="onPreview" file-list-type="picture" show-file-list action="http://localhost:3000/api/hunqing/uploads" type="file" v-model="fileList"></zmz-upload>
</div>

::: demo
```html
<template>
    <zmz-upload @on-preview="onPreview" file-list-type="picture" show-file-list action="http://localhost:3000/api/hunqing/uploads" type="file" v-model="fileList"></zmz-upload>
</template>
<script>
export default {
    data() {
        return {
            fileList: [
                {name: '1.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}, 
                {name: '2.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}
            ],
        }
    },
    methods: {
        onPreview(data) {
            console.log(data)
        }
    }
}
</script>
```
:::

## 自定义图片用法
<div class="demo-block">
    <zmz-upload type="file" v-model="model" :limit="1">
        <div style="width:100px;height:100px;border: 1px solid #f1f1f1;text-align:center;line-height:100px;">
            <img v-if="model && model.length" :src="model[0].url"/>
            <i class="zmz-icon--add" v-else style="font-size: 22px;"></i>
        </div>
    </zmz-upload>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-upload type="file" v-model="model" :limit="1">
            <div style="width:100px;height:100px;border: 1px solid #f1f1f1;text-align:center;line-height:100px;">
                <img v-if="model && model.length" :src="model[0].url"/>
                <i class="zmz-icon--add" v-else style="font-size: 22px;"></i>
            </div>
        </zmz-upload>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model: []
        }
    }
}
</script>
```
:::

## 照片墙
<div class="demo-block">
    <zmz-upload file-list-type="picture-card" v-model="fileList"></zmz-upload>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-upload file-list-type="picture-card" v-model="fileList"></zmz-upload>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList: [
                {name: '1.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}, 
                {name: '2.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'},
            ],
        }
    }
}
</script>
```
:::

## 多文件上传
添加属性 ``multiple``
<div class="demo-block">
    <div class="demo-upload">
        <zmz-button style="margin-right: 20px;" @click="multiple = !multiple">切换{{ multiple? '单选': '多选'}}</zmz-button>
        <zmz-button style="margin-right: 20px;" @click="inside = !inside">切换{{ inside? '外置': '内置'}}</zmz-button>
    </div>
    <div class="demo-upload">
        <zmz-upload show-file-list :multiple="!multiple" :inside-request="inside" action="http://localhost:3000/api/hunqing/uploads" :type="type" v-model="fileList"></zmz-upload>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div class="demo-upload">
            <zmz-button style="margin-right: 20px;" @click="multiple = !multiple">切换{{ multiple? '单选': '多选'}}</zmz-button>
            <zmz-button style="margin-right: 20px;" @click="inside = !inside">切换{{ inside? '外置': '内置'}}</zmz-button>
        </div>
        <div class="demo-upload">
            <zmz-upload show-file-list :multiple="multiple" :inside-request="inside" action="http://localhost:3000/api/hunqing/uploads" :type="type" v-model="fileList"></zmz-upload>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList: [
                {name: '1.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}, 
                {name: '2.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'},
            ],
            multiple: false,
            type: 'file',
            inside: false,
        }
    }
}
</script>
```
:::

## Upload 属性
| 参数| 说明| 类型| 可选值| 默认值|
|----------|--------------|----------|--------------------------------|--------|
| v-model| 文件数组	| Array| —| —|
| method| 请求方式| POST| —| POST|
| action| 请求地址	| —| —| —|
| multiple| 是否多选| Boolean	| true/false| false|
| file-list-type| 列表类型| String| text/picture/picture-card| text|
| accept| 允许上传类型| String	| —| —|
| limit| 最大上传个数| Number	| —| —|
| inside-request| 内置请求（外置触发on-file）| Boolean	| —| true|
| disabled| 是否禁用| Boolean	| —| false|
| headers| 请求头部| Object	| —| —|
| data| 请求参数| Object	| —| —|
| name| 属性名| String	| —| file|
| with-credentials| 是否发送cookie| Boolean	| true/false| false|
| show-file-list| 显示上传列表| Boolean	| true/false| true|
| tip| 是否显示上传提示| Boolean|—| true|
| tip-text| 上传提示| String|—| 只能上传jpg/png文件，且不超过500kb|
| before-upload| 上传前钩子，Promise resolve(true)上传 resolve(false)不上传| Function|—| function(response, file, fileList)|
| before-remove| 移除前钩子，Promise resolve(true)删除 resolve(false)不删除| Function|—| function(index, file, fileList)|
| http-request| 覆盖默认的上传行为，可以自定义上传的实现| Function|—| —|

## Upload 事件

| 事件名称		| 说明				| 回调参数							|
|-------------	|-----------		|---------							|
|on-success		|文件上传成功回调 | function(response, file, fileList) |
|on-remove		|删除列表文件回调 | function(index， file， fileList) |
|on-preview		|点击列表预览回调 | function(index， file， fileList) |
|on-file		|文件对象回调(外置请求) | function(file) |
|on-change		|上传发生改变回调 | function(file， fileList) |
|on-error		|上传失败回调 | function(error, file, fileList) |
|on-exceed		|文件超出限制回调 | function(file, fileList) |
|on-progress		|上传进度回调 | function(event, file, fileList) |

## Upload 插槽
| 参数      | 说明          |默认值          |
|---------- |-------------- |-------------- |
| default | 默认上传按钮插槽 | — |

## Upload 方法
| 参数      | 说明          |默认值          |
|---------- |-------------- |-------------- |
| submit | 手动上传 | — |

## Upload 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-upload-border-radius|  --zmz-upload-border-radius   | 3px      | 圆角|
| @zmz-upload-border-color|  --zmz-upload-border-color   | #e3e6ef      | 默认边线颜色|
| @zmz-upload-tip-font-size     |  --zmz-upload-tip-font-size         | 12px         | 提示字体大小      |
| @zmz-upload-tip-color     |  --zmz-upload-tip-color         | 默认主题颜色         | 提示字体颜色      |