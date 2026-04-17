<script>
import logo from '@docs/assets/images/logo.png'
import cover from '@docs/assets/images/cover.png'
import video1 from '@/assets/video/video-1.mp4'
import video2 from '@/assets/video/video-2.mp4'
import video3 from '@/assets/video/video-3.mp4'
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
            title: 'Video 视频' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            options2: {
                muted: false, // 静音
                preload: false, // 预加载
                loop:true, // 循环播放
                autoplay:true, // 自动播放
                screenshot:true, // 屏幕截图
                logo:logo, // 自定义左上角logo
                defaultQuality: 0, //默认质量
                quality: [
                    {
                        name: '高清',
                        url: video1,
                        type: 'video/MP4',
                    },
                    {
                        name: '省流',
                        url: video2, 
                        type: 'video/MP4',
                    },
                    {
                        name: 'HD',
                        url: video3,
                        type: 'video/MP4',
                    },
                ],
                contextmenu:[
                    {
                        title: '技术文档',
                        link: 'https://doc.zhuimengzhu.com',
                    },
                    {
                        title: 'vue3.0组件',
                        click: (item) => {
                            alert(item.title);
                        },
                    },
                ], // 右键菜单
            },
            options: {
                muted: false, // 静音
                preload: false, // 预加载
                loop:true, // 循环播放
                autoplay:false, // 自动播放
                screenshot:true, // 屏幕截图
                hotkey: true, // 开启热键
                fastForwardSpan: 4, // 快进跨度
                rewindSpan: 1, // 快退跨度
                volume: 0.5, // 默认音量
                playbackSpeed:[0.5, 0.75, 1, 1.25, 1.5, 2], // 可选的播放速率
                logo: logo, // 自定义左上角logo
                defaultQuality: 0, //默认质量
                quality: [
                    {
                        name: '高清',
                        url: video1,
                        type: 'video/MP4',
                    },
                    {
                        name: '省流',
                        url: video2, 
                        type: 'video/MP4',
                    },
                    {
                        name: 'HD',
                        url: video3,
                        type: 'video/MP4',
                    },
                ],
                contextmenu:[
                    {
                        title: '技术文档',
                        link: 'https://doc.zhuimengzhu.com',
                    },
                    {
                        title: 'vue3.0组件',
                        click: (item) => {
                            alert(item.title);
                        },
                    },
                ], // 右键菜单
            },
            video: {
                url: video1, // 地址
                cover: cover, // 封面
                type: 'video/mp4',
                defaultQuality: 'HD', //默认质量
                quality: [
                    {
                        name: '高清',
                        url: video1,
                        type: 'video/MP4',
                    },
                    {
                        name: '省流',
                        url: video2, 
                        type: 'video/MP4',
                    },
                    {
                        name: 'HD',
                        url: video3,
                        type: 'video/MP4',
                    },
                ]
            }
        }  
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onLoad() {
        }
    }
}
</script>
# Video 视频
----
## 基础用法
自定义视频组件

<div class="demo-block">
  <div style="width: 600px;"><zmz-video :video="video" :option="options" @on-load="onLoad"></zmz-video></div>
</div>

::: demo
```html
<template>
    <zmz-video :video="video" :option="options" @on-load="onLoad"></zmz-video>
</template>
<script>
export default{
    data () {
      return {
            options: {
                muted: false, // 静音
                preload: false, // 预加载
                loop:true, // 循环播放
                autoplay:false, // 自动播放
                screenshot:true, // 屏幕截图
                hotkey: true, // 开启热键
                fastForwardSpan: 4, // 快进跨度
                rewindSpan: 1, // 快退跨度
                volume: 0.5, // 默认音量
                playbackSpeed:[0.5, 0.75, 1, 1.25, 1.5, 2], // 可选的播放速率
                //logo:require('@/assets/video/logo.png'), // 自定义左上角logo
                contextmenu:[
                    {
                        title: '技术文档',
                        link: 'https://doc.zhuimengzhu.com',
                    },
                    {
                        title: 'vue3.0组件',
                        click: (item) => {
                            alert(item.title);
                        },
                    },
                ], // 右键菜单
            },
            video: {
                //url: require('@/assets/video/video-1.mp4'), // 地址
                //cover: require('@/assets/video/cover.png'), // 封面
                type: 'video/mp4',
                defaultQuality: 'HD', //默认质量
                quality: [
                    {
                        name: '高清',
                        //url: require('@/assets/video/video-1.mp4'),
                        type: 'video/MP4',
                    },
                    {
                        name: '省流',
                        //url: require('@/assets/video/video-2.mp4'), 
                        type: 'video/MP4',
                    },
                    {
                        name: 'HD',
                        //url: require('@/assets/video/video-3.mp4'),
                        type: 'video/MP4',
                    },
                ]
            }
            // 提示打开注释选项替换成自己的地址
        }  
    },
    methods: {
        onLoad(va) {
            console.log(va)
        }
    }
}
</script>
```
:::

## 自动播放
打开即播放

<div class="demo-block">
  <div style="width: 600px;"><zmz-video :video="video" :option="options2" @on-load="onLoad"></zmz-video></div>
</div>

::: demo
```html
<template>
    <zmz-video :video="video" :option="options" @on-load="onLoad"></zmz-video>
</template>
<script>
export default{
    data () {
        return {
            options: {
                muted: false, // 静音
                preload: false, // 预加载
                loop:true, // 循环播放
                autoplay:true, // 自动播放
                screenshot:true, // 屏幕截图
                //logo:require('@/assets/video/logo.png'), // 自定义左上角logo
                contextmenu:[
                    {
                        title: '技术文档',
                        link: 'https://doc.zhuimengzhu.com',
                    },
                    {
                        title: 'vue3.0组件',
                        click: (item) => {
                            alert(item.title);
                        },
                    },
                ], // 右键菜单
            },
            video: {
                //url: require('@/assets/video/video-1.mp4'), // 地址
                //cover: require('@/assets/video/cover.png'), // 封面
                type: 'video/mp4',
                defaultQuality: 'HD', //默认质量
                quality: [
                    {
                        name: '高清',
                       // url: require('@/assets/video/video-1.mp4'),
                        type: 'video/MP4',
                    },
                    {
                        name: '省流',
                       // url: require('@/assets/video/video-2.mp4'), 
                        type: 'video/MP4',
                    },
                    {
                        name: 'HD',
                       // url: require('@/assets/video/video-3.mp4'),
                        type: 'video/MP4',
                    },
                ]
            }
            // 提示打开注释选项替换成自己的地址
        }  
    },
    methods: {
        onLoad(data) {
            console.log(data)
        }
    }
}
</script>
```
:::

## video 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| option | 视频播放器参数 | Object | — | 见下方video.option 视频播放器参数 |


## video.option 视频播放器参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| muted | 静音,开启自动播放时必须为false,不然有意想不到的后果 | Boolean | — | false |
| preload | 预加载 | String | "none" 不缓存、"auto" 缓存、"metadata" 只缓存文件元信息 | auto | 
| loop | 循环播放 | Boolean |  — | false |
| autoplay | 自动播放,根据浏览器协议需要用户点击触发,如果想要自动播放，必须开启禁音 | Boolean |  — | false |
| screenshot | 屏幕截图 | Boolean |  — | false |
| hotkey | 开启热键，支持快进、快退、音量控制、播放暂停 | Boolean |  — | true |
| volume | 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效 | Number |  — | 0.5 |
| playbackSpeed | 可选的播放速率，可以设置成自定义的数组 | Array |  — | [0.5, 0.75, 1, 1.25, 1.5, 2] |
| defaultPlaybackSpeed | 默认倍速 | Number |  — | 1 |
| logo | 自定义左上角logo | String |  — | — |
| contextmenu | 右键菜单 | Array |  — | [] |
| fastForwardSpan | 快进跨度 | Number |  — | 2 |
| rewindSpan | 快退跨度 | Number |  — | 2 |
| quality | 质量数据(默认读取第一个) | Array |  — |  [] |
| defaultQuality | 默认质量(下标) | String |  — |  0 |

## video.option.definition 清晰度参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 视频名称 | String | — | — |
| url | 视频地址 | String |  — | — |
| type | 视频类型 | String | — | — | 
| cover | 视频封面 | String | — | — | 

## video 事件
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
| on-load | 获取video实例 | function(video)video对象，支持原生对象 |
| on-pause | 暂停触发 | — |
| on-paused | 播放暂停触发 | — |
| on-play | 播放 | — |
| on-timeupdate | 监听视频时间变化 | — |
| on-volume | 监听音量变化 | — |
| on-error | 监听视频错误 | — |
| on-contextmenu | 右键事件关闭打开 | — |
| on-autoplay | 监听自动播放 | — |
| on-notice| 监听通知变化 | — |
| on-canplay| 监听加载 | — |
| on-webfullscreen| 监听网页全屏 | — |
| on-fullscreen| 监听全屏 | — |
| on-drag| 监听拖拽 | (拖拽步骤[1按下2移动3抬起], 拖拽类型[horizontal横向vertical纵向]) |
| on-picture| 监听画中画 | — |
| on-playbackRate| 监听倍速切换 | — |
| on-quality| 监听清晰度切换 | — |
