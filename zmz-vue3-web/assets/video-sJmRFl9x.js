import{_ as v,c as m,a as s,b as t,e as a,w as o,d as F,m as y,r as u,o as B}from"./index-DyRJxyCP.js";import{v as r,a as E,b as p}from"./video-3-B5pvYJPb.js";const h="/zmz-vue3-web/assets/cover-DptLy8E2.png",A={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Video 视频"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),options2:{muted:!1,preload:!1,loop:!0,autoplay:!0,screenshot:!0,logo:y,defaultQuality:0,quality:[{name:"高清",url:r,type:"video/MP4"},{name:"省流",url:E,type:"video/MP4"},{name:"HD",url:p,type:"video/MP4"}],contextmenu:[{title:"技术文档",link:"https://doc.zhuimengzhu.com"},{title:"vue3.0组件",click:n=>{alert(n.title)}}]},options:{muted:!1,preload:!1,loop:!0,autoplay:!1,screenshot:!0,hotkey:!0,fastForwardSpan:4,rewindSpan:1,volume:.5,playbackSpeed:[.5,.75,1,1.25,1.5,2],logo:y,defaultQuality:0,quality:[{name:"高清",url:r,type:"video/MP4"},{name:"省流",url:E,type:"video/MP4"},{name:"HD",url:p,type:"video/MP4"}],contextmenu:[{title:"技术文档",link:"https://doc.zhuimengzhu.com"},{title:"vue3.0组件",click:n=>{alert(n.title)}}]},video:{url:r,cover:h,type:"video/mp4",defaultQuality:"HD",quality:[{name:"高清",url:r,type:"video/MP4"},{name:"省流",url:E,type:"video/MP4"},{name:"HD",url:p,type:"video/MP4"}]}}},methods:{currentConfig(n){return this.$setting.currentConfig[n]},onLoad(){}}},f={class:"zmz-markdown-article"},D={class:"demo-block"},g={style:{width:"600px"}},z={class:"demo-block"},b={style:{width:"600px"}};function k(n,l,C,q,e,d){const c=u("zmz-video"),i=u("demo-block");return B(),m("div",f,[l[8]||(l[8]=s("h1",{id:"video-%E8%A7%86%E9%A2%91",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#video-%E8%A7%86%E9%A2%91"},"#"),t(" Video 视频")],-1)),l[9]||(l[9]=s("hr",null,null,-1)),l[10]||(l[10]=s("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),t(" 基础用法")],-1)),l[11]||(l[11]=s("p",null,"自定义视频组件",-1)),s("div",D,[s("div",g,[a(c,{video:e.video,option:e.options,onOnLoad:d.onLoad},null,8,["video","option","onOnLoad"])])]),a(i,null,{desc:o(()=>[...l[0]||(l[0]=[])]),highlight:o(()=>[...l[1]||(l[1]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"zmz-video"),s("span",{style:{color:"#B392F0"}}," :video"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"video"'),s("span",{style:{color:"#B392F0"}}," :option"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"options"'),s("span",{style:{color:"#B392F0"}}," @on-load"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"onLoad"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-video"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"      return"),s("span",{style:{color:"#E1E4E8"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            options: {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                muted: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 静音")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                preload: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 预加载")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                loop:"),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 循环播放")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                autoplay:"),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 自动播放")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                screenshot:"),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 屏幕截图")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                hotkey: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 开启热键")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                fastForwardSpan: "),s("span",{style:{color:"#79B8FF"}},"4"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 快进跨度")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                rewindSpan: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 快退跨度")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                volume: "),s("span",{style:{color:"#79B8FF"}},"0.5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 默认音量")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                playbackSpeed:["),s("span",{style:{color:"#79B8FF"}},"0.5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0.75"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"1.25"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"1.5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},"], "),s("span",{style:{color:"#6A737D"}},"// 可选的播放速率")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                //logo:require('@/assets/video/logo.png'), // 自定义左上角logo")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                contextmenu:[")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        title: "),s("span",{style:{color:"#9ECBFF"}},"'技术文档'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        link: "),s("span",{style:{color:"#9ECBFF"}},"'https://doc.zhuimengzhu.com'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        title: "),s("span",{style:{color:"#9ECBFF"}},"'vue3.0组件'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                        click"),s("span",{style:{color:"#E1E4E8"}},": ("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                            alert"),s("span",{style:{color:"#E1E4E8"}},"(item.title);")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ], "),s("span",{style:{color:"#6A737D"}},"// 右键菜单")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            video: {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                //url: require('@/assets/video/video-1.mp4'), // 地址")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                //cover: require('@/assets/video/cover.png'), // 封面")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                type: "),s("span",{style:{color:"#9ECBFF"}},"'video/mp4'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                defaultQuality: "),s("span",{style:{color:"#9ECBFF"}},"'HD'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//默认质量")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                quality: [")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        name: "),s("span",{style:{color:"#9ECBFF"}},"'高清'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                        //url: require('@/assets/video/video-1.mp4'),")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        type: "),s("span",{style:{color:"#9ECBFF"}},"'video/MP4'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        name: "),s("span",{style:{color:"#9ECBFF"}},"'省流'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                        //url: require('@/assets/video/video-2.mp4'), ")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        type: "),s("span",{style:{color:"#9ECBFF"}},"'video/MP4'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        name: "),s("span",{style:{color:"#9ECBFF"}},"'HD'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                        //url: require('@/assets/video/video-3.mp4'),")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        type: "),s("span",{style:{color:"#9ECBFF"}},"'video/MP4'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ]")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"            // 提示打开注释选项替换成自己的地址")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }  ")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        onLoad"),s("span",{style:{color:"#E1E4E8"}},"(va) {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(va)")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...l[2]||(l[2]=[])]),default:o(()=>[l[3]||(l[3]=s("pre",null,[s("code",{class:"language-html"},`<template>
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
<\/script>
`)],-1))]),_:1}),l[12]||(l[12]=s("h2",{id:"%E8%87%AA%E5%8A%A8%E6%92%AD%E6%94%BE",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%8A%A8%E6%92%AD%E6%94%BE"},"#"),t(" 自动播放")],-1)),l[13]||(l[13]=s("p",null,"打开即播放",-1)),s("div",z,[s("div",b,[a(c,{video:e.video,option:e.options2,onOnLoad:d.onLoad},null,8,["video","option","onOnLoad"])])]),a(i,null,{desc:o(()=>[...l[4]||(l[4]=[])]),highlight:o(()=>[...l[5]||(l[5]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"zmz-video"),s("span",{style:{color:"#B392F0"}}," :video"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"video"'),s("span",{style:{color:"#B392F0"}}," :option"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"options"'),s("span",{style:{color:"#B392F0"}}," @on-load"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"onLoad"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-video"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            options: {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                muted: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 静音")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                preload: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 预加载")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                loop:"),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 循环播放")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                autoplay:"),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 自动播放")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                screenshot:"),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 屏幕截图")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                //logo:require('@/assets/video/logo.png'), // 自定义左上角logo")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                contextmenu:[")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        title: "),s("span",{style:{color:"#9ECBFF"}},"'技术文档'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        link: "),s("span",{style:{color:"#9ECBFF"}},"'https://doc.zhuimengzhu.com'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        title: "),s("span",{style:{color:"#9ECBFF"}},"'vue3.0组件'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                        click"),s("span",{style:{color:"#E1E4E8"}},": ("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                            alert"),s("span",{style:{color:"#E1E4E8"}},"(item.title);")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ], "),s("span",{style:{color:"#6A737D"}},"// 右键菜单")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            video: {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                //url: require('@/assets/video/video-1.mp4'), // 地址")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                //cover: require('@/assets/video/cover.png'), // 封面")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                type: "),s("span",{style:{color:"#9ECBFF"}},"'video/mp4'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                defaultQuality: "),s("span",{style:{color:"#9ECBFF"}},"'HD'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//默认质量")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                quality: [")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        name: "),s("span",{style:{color:"#9ECBFF"}},"'高清'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                       // url: require('@/assets/video/video-1.mp4'),")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        type: "),s("span",{style:{color:"#9ECBFF"}},"'video/MP4'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        name: "),s("span",{style:{color:"#9ECBFF"}},"'省流'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                       // url: require('@/assets/video/video-2.mp4'), ")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        type: "),s("span",{style:{color:"#9ECBFF"}},"'video/MP4'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        name: "),s("span",{style:{color:"#9ECBFF"}},"'HD'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"                       // url: require('@/assets/video/video-3.mp4'),")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        type: "),s("span",{style:{color:"#9ECBFF"}},"'video/MP4'"),s("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ]")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"            // 提示打开注释选项替换成自己的地址")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }  ")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        onLoad"),s("span",{style:{color:"#E1E4E8"}},"(data) {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(data)")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...l[6]||(l[6]=[])]),default:o(()=>[l[7]||(l[7]=s("pre",null,[s("code",{class:"language-html"},`<template>
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
<\/script>
`)],-1))]),_:1}),l[14]||(l[14]=F('<h2 id="video-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#video-%E5%B1%9E%E6%80%A7">#</a> video 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>option</td><td>视频播放器参数</td><td>Object</td><td>—</td><td>见下方video.option 视频播放器参数</td></tr></tbody></table></div><h2 id="video.option-%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%8F%82%E6%95%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#video.option-%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%8F%82%E6%95%B0">#</a> video.option 视频播放器参数</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>muted</td><td>静音,开启自动播放时必须为false,不然有意想不到的后果</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>preload</td><td>预加载</td><td>String</td><td>“none” 不缓存、“auto” 缓存、“metadata” 只缓存文件元信息</td><td>auto</td></tr><tr><td>loop</td><td>循环播放</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>autoplay</td><td>自动播放,根据浏览器协议需要用户点击触发,如果想要自动播放，必须开启禁音</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>screenshot</td><td>屏幕截图</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>hotkey</td><td>开启热键，支持快进、快退、音量控制、播放暂停</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>volume</td><td>默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效</td><td>Number</td><td>—</td><td>0.5</td></tr><tr><td>playbackSpeed</td><td>可选的播放速率，可以设置成自定义的数组</td><td>Array</td><td>—</td><td>[0.5, 0.75, 1, 1.25, 1.5, 2]</td></tr><tr><td>defaultPlaybackSpeed</td><td>默认倍速</td><td>Number</td><td>—</td><td>1</td></tr><tr><td>logo</td><td>自定义左上角logo</td><td>String</td><td>—</td><td>—</td></tr><tr><td>contextmenu</td><td>右键菜单</td><td>Array</td><td>—</td><td>[]</td></tr><tr><td>fastForwardSpan</td><td>快进跨度</td><td>Number</td><td>—</td><td>2</td></tr><tr><td>rewindSpan</td><td>快退跨度</td><td>Number</td><td>—</td><td>2</td></tr><tr><td>quality</td><td>质量数据(默认读取第一个)</td><td>Array</td><td>—</td><td>[]</td></tr><tr><td>defaultQuality</td><td>默认质量(下标)</td><td>String</td><td>—</td><td>0</td></tr></tbody></table></div><h2 id="video.option.definition-%E6%B8%85%E6%99%B0%E5%BA%A6%E5%8F%82%E6%95%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#video.option.definition-%E6%B8%85%E6%99%B0%E5%BA%A6%E5%8F%82%E6%95%B0">#</a> video.option.definition 清晰度参数</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>视频名称</td><td>String</td><td>—</td><td>—</td></tr><tr><td>url</td><td>视频地址</td><td>String</td><td>—</td><td>—</td></tr><tr><td>type</td><td>视频类型</td><td>String</td><td>—</td><td>—</td></tr><tr><td>cover</td><td>视频封面</td><td>String</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="video-%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#video-%E4%BA%8B%E4%BB%B6">#</a> video 事件</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-load</td><td>获取video实例</td><td>function(video)video对象，支持原生对象</td></tr><tr><td>on-pause</td><td>暂停触发</td><td>—</td></tr><tr><td>on-paused</td><td>播放暂停触发</td><td>—</td></tr><tr><td>on-play</td><td>播放</td><td>—</td></tr><tr><td>on-timeupdate</td><td>监听视频时间变化</td><td>—</td></tr><tr><td>on-volume</td><td>监听音量变化</td><td>—</td></tr><tr><td>on-error</td><td>监听视频错误</td><td>—</td></tr><tr><td>on-contextmenu</td><td>右键事件关闭打开</td><td>—</td></tr><tr><td>on-autoplay</td><td>监听自动播放</td><td>—</td></tr><tr><td>on-notice</td><td>监听通知变化</td><td>—</td></tr><tr><td>on-canplay</td><td>监听加载</td><td>—</td></tr><tr><td>on-webfullscreen</td><td>监听网页全屏</td><td>—</td></tr><tr><td>on-fullscreen</td><td>监听全屏</td><td>—</td></tr><tr><td>on-drag</td><td>监听拖拽</td><td>(拖拽步骤[1按下2移动3抬起], 拖拽类型[horizontal横向vertical纵向])</td></tr><tr><td>on-picture</td><td>监听画中画</td><td>—</td></tr><tr><td>on-playbackRate</td><td>监听倍速切换</td><td>—</td></tr><tr><td>on-quality</td><td>监听清晰度切换</td><td>—</td></tr></tbody></table></div>',8))])}const P=v(A,[["render",k]]);export{P as default};
