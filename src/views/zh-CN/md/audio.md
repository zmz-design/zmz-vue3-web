<script>
import video1 from '@/assets/video/video-1.mp4'
import video2 from '@/assets/video/video-2.mp4'
import video3 from '@/assets/video/video-3.mp4'
import music from '@/assets/audio/music.mp3'


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
            title: 'Audio 音频' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            audioRef: null,
            volumeNum: 10,
            options: {
                muted: false, // 静音
                loop:true, // 循环播放
                hotkey: true, // 开启热键
                autoplay:false, // 自动播放
                quality: [
                    {
                        name: '高清',
                        url: video1,
                        type: 'audio/MP4',
                    },
                    {
                        name: '省流',
                        url: video2, 
                        type: 'audio/MP4',
                    },
                    {
                        name: 'HD',
                        url: video3,
                        type: 'audio/mp4',
                    },
                ],
                defaultQuality:0, 
            },
            options2: {
                muted: false, // 静音
                loop:true, // 循环播放
                hotkey: true, // 开启热键
                autoplay:true, // 自动播放
            },
            audios: {
                type: 'audio/mp3',
                url: music,
                defaultQuality: 'HD', //默认质量
                quality: [
                    {
                        name: '高清',
                        url: music,
                        type: 'audio/MP4',
                    },
                    {
                        name: '省流',
                        url: music,
                        type: 'audio/MP4',
                    },
                    {
                        name: 'HD',
                        url: music,
                        type: 'audio/MP4',
                    },
                ]
            }
        }  
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onLoad(data) {
            this.audioRef = data
        },
        destroy() {
            this.audioRef.destroy()
        },
        init() {
            this.audioRef.init()
        },
        volume(flag) {
            if (flag === 1) {
                let volumeNums = this.volumeNum+=1
                if (volumeNums <= 10) {
                    this.audioRef.setVolume(volumeNums/10)
                } else {
                    this.volumeNum = 10
                }
            } else {
                let volumeNums = this.volumeNum-=1
                if (volumeNums >= 0)  {
                    this.audioRef.setVolume(volumeNums/10)
                } else {
                    this.volumeNum = 0
                }
            }
        },
        play() {
           this.audioRef.play()
        },
        pause() {
           this.audioRef.pause()
        },
        toggle() {
           this.audioRef.toggle()
        },
        seek(time) {
           this.audioRef.seek(time)
        },
        setQuality(index) {
            this.options.defaultQuality = index
            this.audioRef.setQuality(index)
        },
        setPlaybackRate(index) {
            this.options.defaultPlaybackSpeed= index
            this.audioRef?.setPlaybackRate(index)
        }
    },
    computed: {
        getVolume() {
            return this.audioRef?.getVolume()
        }
    }
}
</script>
# Audio 音频
----
## 基础用法
自定义音频组件

<div class="demo-block">
    <zmz-space class="zmz-mb-20">
        <zmz-space-item><zmz-button @click="play">播放</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="pause">暂停</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="toggle">播放/暂停</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="volume(1)">音量+</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="volume(2)">音量-</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="seek(30)">跳转30秒</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="setQuality(0)">切换高清</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="setQuality(1)">切换省流</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="setQuality(2)">切换HD</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="setPlaybackRate(1)">倍速X1</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="setPlaybackRate(2)">倍速X2</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button @click="setPlaybackRate(3)">倍速X3</zmz-button></zmz-space-item>
    </zmz-space>
    <zmz-space class="zmz-mb-20">
        <zmz-space-item><zmz-audio :option="options" @on-load="onLoad" style="width: 600px"></zmz-audio></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space class="zmz-mb-20">
            <zmz-space-item><zmz-button @click="play">播放</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="pause">暂停</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="toggle">播放/暂停</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="volume(1)">音量+</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="volume(2)">音量-</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="seek(30)">跳转30秒</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="setQuality(0)">切换高清</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="setQuality(1)">切换省流</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="setQuality(2)">切换HD</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="setPlaybackRate(1)">倍速X1</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="setPlaybackRate(2)">倍速X2</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="setPlaybackRate(3)">倍速X3</zmz-button></zmz-space-item>
        </zmz-space>
        <zmz-space class="zmz-mb-20">
            <zmz-space-item><zmz-audio :option="options" @on-load="onLoad" style="width: 600px"></zmz-audio></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default{
    data () {
      return {
            volumeNum: 10,
            options: {
                muted: false, // 静音
                loop:true, // 循环播放
                hotkey: true, // 开启热键
                autoplay:false, // 自动播放
                quality: [
                    {
                        name: '高清',
                        url: require('@/assets/video/video-1.mp4'),
                        type: 'audio/MP4',
                    },
                    {
                        name: '省流',
                        url: require('@/assets/video/video-2.mp4'), 
                        type: 'audio/MP4',
                    },
                    {
                        name: 'HD',
                        url: require('@/assets/video/video-3.mp4'),
                        type: 'audio/mp4',
                    },
                ],
                defaultQuality:0, 
            }
        }  
    },
    methods: {
        onLoad(data) {
            this.audioRef = data
        },
        destroy() {
            this.audioRef.destroy()
        },
        init() {
            this.audioRef.init()
        },
        volume(flag) {
            if (flag === 1) {
                let volumeNums = this.volumeNum+=1
                if (volumeNums <= 10) {
                    this.audioRef.setVolume(volumeNums/10)
                } else {
                    this.volumeNum = 10
                }
            } else {
                let volumeNums = this.volumeNum-=1
                if (volumeNums >= 0)  {
                    this.audioRef.setVolume(volumeNums/10)
                } else {
                    this.volumeNum = 0
                }
            }
        },
        play() {
           this.audioRef.play()
        },
        pause() {
           this.audioRef.pause()
        },
        toggle() {
           this.audioRef.toggle()
        },
        seek(time) {
           this.audioRef.seek(time)
        },
        setQuality(index) {
            this.options.defaultQuality = index
            this.audioRef.setQuality(index)
        },
        setPlaybackRate(index) {
            this.options.defaultPlaybackSpeed= index
            this.audioRef.setPlaybackRate(index)
        }
    }
}
</script>
```
:::


## Audio 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| audio | 音频对象 | Object | — | 见下方audio.audio 音频对象参数 |
| options | 音频播放器参数 | Object | — | 见下方audio.options 音频播放器参数 |

## Audio.options 音频播放器参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| muted | 静音,开启自动播放时必须为false,不然有意想不到的后果 | Boolean | — | false |
| preload | 预加载 | String | "none" 不缓存、"auto" 缓存、"metadata" 只缓存文件元信息 | auto | 
| loop | 循环播放 | Boolean |  — | false |
| autoplay | 自动播放,根据浏览器协议需要用户点击触发,如果想要自动播放，必须开启禁音 | Boolean |  — | false |
| hotkey | 开启热键，支持快进、快退、音量控制、播放暂停 | Boolean |  — | true |
| volume | 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效 | Number |  — | 0.5 |
| playbackSpeed | 可选的播放速率，可以设置成自定义的数组 | Array |  — | [0.5, 0.75, 1, 1.25, 1.5, 2] |
| defaultPlaybackSpeed | 默认倍速 | Number |  — | 1 |
| fastForwardSpan | 快进跨度 | Number |  — | 2 |
| rewindSpan | 快退跨度 | Number |  — | 2 |
| quality | 质量数据(默认读取第一个) | Array |  — |  [] |
| defaultQuality | 默认质量(下标) | String |  — |  0 |

## Audio.options.quality 清晰度参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| url | 必填，音频地址 | String | — | — |
| name | 音频名称 | String |  — | — |
| type | 音频类型 | String | — | — | 

## Audio 事件
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
| on-load | 获取audio实例 | function(audio)audio对象，支持原生对象 |
| on-pause | 暂停触发 | — |
| on-paused | 播放暂停触发 | — |
| on-play | 播放 | — |
| on-timeupdate | 监听音频时间变化 | — |
| on-volume | 监听音量变化 | — |
| on-error | 监听音频错误 | — |
| on-autoplay | 监听自动播放 | — |
| on-canplay| 监听加载 | — |
| on-drag| 监听拖拽 | (拖拽步骤[1按下2移动3抬起], 拖拽类型[horizontal横向vertical纵向]) |
| on-playbackRate| 监听倍速切换 | — |
| on-quality| 监听清晰度切换 | — |

## Audio 样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-audio-width              |  --zmz-audio-width                  | 100%    | 宽度      |
| @zmz-audio-height      |  --zmz-audio-height         | 40px          | 高度      |
| @zmz-audio-play-icon-font-size          |  --zmz-audio-play-icon-font-size           | 16px     | 字体大小        |
| @zmz-audio-play-icon-color       |  --zmz-audio-play-icon-color          | 默认主题颜色      | 图标大小        |
| @zmz-audio-unite-font-size      |  --zmz-audio-unite-font-size         | 12px          | 公共字体大小    |
| @zmz-audio-unite-color      |  --zmz-audio-unite-color         | 默认主题颜色          | 公共字体颜色      |
| @zmz-audio-time-color   |  --zmz-audio-time-color      | 默认主题颜色    | 时间颜色    |
| @zmz-audio-time-font-size       |  --zmz-audio-time-font-size          | 12px       | 时间字体大小        |
| @zmz-audio-border-radius  |  --zmz-audio-border-radius     | 5px          | 圆角颜色      |
| @zmz-audio-progress-line-color      |  --zmz-audio-progress-line-color          | 成功主题颜色          | 线条颜色  |
| @zmz-audio-progress-dot-color      |  --zmz-audio-progress-dot-color          | #fff          | 点颜色  |
| @zmz-audio-progress-dot-box-shadow|  --zmz-audio-progress-dot-box-shadow   | 0 2px 12px 0 #b1b1b1      | 点阴影|
| @zmz-audio-progress-background-color|  --zmz-audio-progress-background-color  | rgba(124, 131, 138, 0.3)      | 进度背景颜色|
| @zmz-audio-background-color|  --zmz-audio-background-color   | #fff      | 背景色|
| @zmz-audio-box-shadow|  --zmz-audio-box-shadow   | 0 2px 12px 0 #b1b1b1      | 阴影|