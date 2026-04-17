import{v as z,a as F,b as B}from"./video-3-B5pvYJPb.js";import{m as c}from"./music-DLDRpYtn.js";import{_ as b,c as f,a as t,b as s,e,w as o,d as h,r as d,o as k}from"./index-Bfn7SEZ2.js";const v={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Audio 音频"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),audioRef:null,volumeNum:10,options:{muted:!1,loop:!0,hotkey:!0,autoplay:!1,quality:[{name:"高清",url:z,type:"audio/MP4"},{name:"省流",url:F,type:"audio/MP4"},{name:"HD",url:B,type:"audio/mp4"}],defaultQuality:0},options2:{muted:!1,loop:!0,hotkey:!0,autoplay:!0},audios:{type:"audio/mp3",url:c,defaultQuality:"HD",quality:[{name:"高清",url:c,type:"audio/MP4"},{name:"省流",url:c,type:"audio/MP4"},{name:"HD",url:c,type:"audio/MP4"}]}}},methods:{currentConfig(a){return this.$setting.currentConfig[a]},onLoad(a){this.audioRef=a},destroy(){this.audioRef.destroy()},init(){this.audioRef.init()},volume(a){if(a===1){let l=this.volumeNum+=1;l<=10?this.audioRef.setVolume(l/10):this.volumeNum=10}else{let l=this.volumeNum-=1;l>=0?this.audioRef.setVolume(l/10):this.volumeNum=0}},play(){this.audioRef.play()},pause(){this.audioRef.pause()},toggle(){this.audioRef.toggle()},seek(a){this.audioRef.seek(a)},setQuality(a){this.options.defaultQuality=a,this.audioRef.setQuality(a)},setPlaybackRate(a){this.options.defaultPlaybackSpeed=a,this.audioRef?.setPlaybackRate(a)}},computed:{getVolume(){return this.audioRef?.getVolume()}}},D={class:"zmz-markdown-article"},g={class:"demo-block"};function C(a,l,R,x,y,n){const r=d("zmz-button"),E=d("zmz-space-item"),i=d("zmz-space"),u=d("zmz-audio"),m=d("demo-block");return k(),f("div",D,[l[25]||(l[25]=t("h1",{id:"audio-%E9%9F%B3%E9%A2%91",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#audio-%E9%9F%B3%E9%A2%91"},"#"),s(" Audio 音频")],-1)),l[26]||(l[26]=t("hr",null,null,-1)),l[27]||(l[27]=t("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),l[28]||(l[28]=t("p",null,"自定义音频组件",-1)),t("div",g,[e(i,{class:"zmz-mb-20"},{default:o(()=>[e(E,null,{default:o(()=>[e(r,{onClick:n.play},{default:o(()=>[...l[9]||(l[9]=[s("播放",-1)])]),_:1},8,["onClick"])]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:n.pause},{default:o(()=>[...l[10]||(l[10]=[s("暂停",-1)])]),_:1},8,["onClick"])]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:n.toggle},{default:o(()=>[...l[11]||(l[11]=[s("播放/暂停",-1)])]),_:1},8,["onClick"])]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:l[0]||(l[0]=p=>n.volume(1))},{default:o(()=>[...l[12]||(l[12]=[s("音量+",-1)])]),_:1})]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:l[1]||(l[1]=p=>n.volume(2))},{default:o(()=>[...l[13]||(l[13]=[s("音量-",-1)])]),_:1})]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:l[2]||(l[2]=p=>n.seek(30))},{default:o(()=>[...l[14]||(l[14]=[s("跳转30秒",-1)])]),_:1})]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:l[3]||(l[3]=p=>n.setQuality(0))},{default:o(()=>[...l[15]||(l[15]=[s("切换高清",-1)])]),_:1})]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:l[4]||(l[4]=p=>n.setQuality(1))},{default:o(()=>[...l[16]||(l[16]=[s("切换省流",-1)])]),_:1})]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:l[5]||(l[5]=p=>n.setQuality(2))},{default:o(()=>[...l[17]||(l[17]=[s("切换HD",-1)])]),_:1})]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:l[6]||(l[6]=p=>n.setPlaybackRate(1))},{default:o(()=>[...l[18]||(l[18]=[s("倍速X1",-1)])]),_:1})]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:l[7]||(l[7]=p=>n.setPlaybackRate(2))},{default:o(()=>[...l[19]||(l[19]=[s("倍速X2",-1)])]),_:1})]),_:1}),e(E,null,{default:o(()=>[e(r,{onClick:l[8]||(l[8]=p=>n.setPlaybackRate(3))},{default:o(()=>[...l[20]||(l[20]=[s("倍速X3",-1)])]),_:1})]),_:1})]),_:1}),e(i,{class:"zmz-mb-20"},{default:o(()=>[e(E,null,{default:o(()=>[e(u,{option:y.options,onOnLoad:n.onLoad,style:{width:"600px"}},null,8,["option","onOnLoad"])]),_:1})]),_:1})]),e(m,null,{desc:o(()=>[...l[21]||(l[21]=[])]),highlight:o(()=>[...l[22]||(l[22]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"zmz-mb-20"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"play"'),t("span",{style:{color:"#E1E4E8"}},">播放</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"pause"'),t("span",{style:{color:"#E1E4E8"}},">暂停</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"toggle"'),t("span",{style:{color:"#E1E4E8"}},">播放/暂停</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"volume(1)"'),t("span",{style:{color:"#E1E4E8"}},">音量+</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"volume(2)"'),t("span",{style:{color:"#E1E4E8"}},">音量-</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"seek(30)"'),t("span",{style:{color:"#E1E4E8"}},">跳转30秒</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"setQuality(0)"'),t("span",{style:{color:"#E1E4E8"}},">切换高清</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"setQuality(1)"'),t("span",{style:{color:"#E1E4E8"}},">切换省流</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"setQuality(2)"'),t("span",{style:{color:"#E1E4E8"}},">切换HD</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"setPlaybackRate(1)"'),t("span",{style:{color:"#E1E4E8"}},">倍速X1</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"setPlaybackRate(2)"'),t("span",{style:{color:"#E1E4E8"}},">倍速X2</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"setPlaybackRate(3)"'),t("span",{style:{color:"#E1E4E8"}},">倍速X3</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        </"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"zmz-mb-20"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-audio"),t("span",{style:{color:"#B392F0"}}," :option"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"options"'),t("span",{style:{color:"#B392F0"}}," @on-load"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"onLoad"'),t("span",{style:{color:"#B392F0"}}," style"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"width: 600px"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-audio"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        </"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"      return"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            volumeNum: "),t("span",{style:{color:"#79B8FF"}},"10"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            options: {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                muted: "),t("span",{style:{color:"#79B8FF"}},"false"),t("span",{style:{color:"#E1E4E8"}},", "),t("span",{style:{color:"#6A737D"}},"// 静音")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                loop:"),t("span",{style:{color:"#79B8FF"}},"true"),t("span",{style:{color:"#E1E4E8"}},", "),t("span",{style:{color:"#6A737D"}},"// 循环播放")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                hotkey: "),t("span",{style:{color:"#79B8FF"}},"true"),t("span",{style:{color:"#E1E4E8"}},", "),t("span",{style:{color:"#6A737D"}},"// 开启热键")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                autoplay:"),t("span",{style:{color:"#79B8FF"}},"false"),t("span",{style:{color:"#E1E4E8"}},", "),t("span",{style:{color:"#6A737D"}},"// 自动播放")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                quality: [")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                    {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                        name: "),t("span",{style:{color:"#9ECBFF"}},"'高清'"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                        url: "),t("span",{style:{color:"#B392F0"}},"require"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'@/assets/video/video-1.mp4'"),t("span",{style:{color:"#E1E4E8"}},"),")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                        type: "),t("span",{style:{color:"#9ECBFF"}},"'audio/MP4'"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                    },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                    {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                        name: "),t("span",{style:{color:"#9ECBFF"}},"'省流'"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                        url: "),t("span",{style:{color:"#B392F0"}},"require"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'@/assets/video/video-2.mp4'"),t("span",{style:{color:"#E1E4E8"}},"), ")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                        type: "),t("span",{style:{color:"#9ECBFF"}},"'audio/MP4'"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                    },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                    {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                        name: "),t("span",{style:{color:"#9ECBFF"}},"'HD'"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                        url: "),t("span",{style:{color:"#B392F0"}},"require"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'@/assets/video/video-3.mp4'"),t("span",{style:{color:"#E1E4E8"}},"),")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                        type: "),t("span",{style:{color:"#9ECBFF"}},"'audio/mp4'"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                    },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                ],")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                defaultQuality:"),t("span",{style:{color:"#79B8FF"}},"0"),t("span",{style:{color:"#E1E4E8"}},", ")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }  ")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    methods"),t("span",{style:{color:"#E1E4E8"}},": {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        onLoad"),t("span",{style:{color:"#E1E4E8"}},"(data) {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".audioRef "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#E1E4E8"}}," data")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        destroy"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"destroy"),t("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        init"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"init"),t("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        volume"),t("span",{style:{color:"#E1E4E8"}},"(flag) {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"            if"),t("span",{style:{color:"#E1E4E8"}}," (flag "),t("span",{style:{color:"#F97583"}},"==="),t("span",{style:{color:"#79B8FF"}}," 1"),t("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"                let"),t("span",{style:{color:"#E1E4E8"}}," volumeNums "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#79B8FF"}}," this"),t("span",{style:{color:"#E1E4E8"}},".volumeNum"),t("span",{style:{color:"#F97583"}},"+="),t("span",{style:{color:"#79B8FF"}},"1")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"                if"),t("span",{style:{color:"#E1E4E8"}}," (volumeNums "),t("span",{style:{color:"#F97583"}},"<="),t("span",{style:{color:"#79B8FF"}}," 10"),t("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                    this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"setVolume"),t("span",{style:{color:"#E1E4E8"}},"(volumeNums"),t("span",{style:{color:"#F97583"}},"/"),t("span",{style:{color:"#79B8FF"}},"10"),t("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                } "),t("span",{style:{color:"#F97583"}},"else"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                    this"),t("span",{style:{color:"#E1E4E8"}},".volumeNum "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#79B8FF"}}," 10")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            } "),t("span",{style:{color:"#F97583"}},"else"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"                let"),t("span",{style:{color:"#E1E4E8"}}," volumeNums "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#79B8FF"}}," this"),t("span",{style:{color:"#E1E4E8"}},".volumeNum"),t("span",{style:{color:"#F97583"}},"-="),t("span",{style:{color:"#79B8FF"}},"1")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"                if"),t("span",{style:{color:"#E1E4E8"}}," (volumeNums "),t("span",{style:{color:"#F97583"}},">="),t("span",{style:{color:"#79B8FF"}}," 0"),t("span",{style:{color:"#E1E4E8"}},")  {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                    this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"setVolume"),t("span",{style:{color:"#E1E4E8"}},"(volumeNums"),t("span",{style:{color:"#F97583"}},"/"),t("span",{style:{color:"#79B8FF"}},"10"),t("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                } "),t("span",{style:{color:"#F97583"}},"else"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                    this"),t("span",{style:{color:"#E1E4E8"}},".volumeNum "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#79B8FF"}}," 0")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        play"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"           this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"play"),t("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        pause"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"           this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"pause"),t("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        toggle"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"           this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"toggle"),t("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        seek"),t("span",{style:{color:"#E1E4E8"}},"(time) {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"           this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"seek"),t("span",{style:{color:"#E1E4E8"}},"(time)")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        setQuality"),t("span",{style:{color:"#E1E4E8"}},"(index) {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".options.defaultQuality "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#E1E4E8"}}," index")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"setQuality"),t("span",{style:{color:"#E1E4E8"}},"(index)")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        setPlaybackRate"),t("span",{style:{color:"#E1E4E8"}},"(index) {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".options.defaultPlaybackSpeed"),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#E1E4E8"}}," index")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".audioRef."),t("span",{style:{color:"#B392F0"}},"setPlaybackRate"),t("span",{style:{color:"#E1E4E8"}},"(index)")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:o(()=>[...l[23]||(l[23]=[])]),default:o(()=>[l[24]||(l[24]=t("pre",null,[t("code",{class:"language-html"},`<template>
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
<\/script>
`)],-1))]),_:1}),l[29]||(l[29]=h('<h2 id="audio-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#audio-%E5%B1%9E%E6%80%A7">#</a> Audio 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>audio</td><td>音频对象</td><td>Object</td><td>—</td><td>见下方audio.audio 音频对象参数</td></tr><tr><td>options</td><td>音频播放器参数</td><td>Object</td><td>—</td><td>见下方audio.options 音频播放器参数</td></tr></tbody></table></div><h2 id="audio.options-%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%8F%82%E6%95%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#audio.options-%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%8F%82%E6%95%B0">#</a> Audio.options 音频播放器参数</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>muted</td><td>静音,开启自动播放时必须为false,不然有意想不到的后果</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>preload</td><td>预加载</td><td>String</td><td>“none” 不缓存、“auto” 缓存、“metadata” 只缓存文件元信息</td><td>auto</td></tr><tr><td>loop</td><td>循环播放</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>autoplay</td><td>自动播放,根据浏览器协议需要用户点击触发,如果想要自动播放，必须开启禁音</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>hotkey</td><td>开启热键，支持快进、快退、音量控制、播放暂停</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>volume</td><td>默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效</td><td>Number</td><td>—</td><td>0.5</td></tr><tr><td>playbackSpeed</td><td>可选的播放速率，可以设置成自定义的数组</td><td>Array</td><td>—</td><td>[0.5, 0.75, 1, 1.25, 1.5, 2]</td></tr><tr><td>defaultPlaybackSpeed</td><td>默认倍速</td><td>Number</td><td>—</td><td>1</td></tr><tr><td>fastForwardSpan</td><td>快进跨度</td><td>Number</td><td>—</td><td>2</td></tr><tr><td>rewindSpan</td><td>快退跨度</td><td>Number</td><td>—</td><td>2</td></tr><tr><td>quality</td><td>质量数据(默认读取第一个)</td><td>Array</td><td>—</td><td>[]</td></tr><tr><td>defaultQuality</td><td>默认质量(下标)</td><td>String</td><td>—</td><td>0</td></tr></tbody></table></div><h2 id="audio.options.quality-%E6%B8%85%E6%99%B0%E5%BA%A6%E5%8F%82%E6%95%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#audio.options.quality-%E6%B8%85%E6%99%B0%E5%BA%A6%E5%8F%82%E6%95%B0">#</a> Audio.options.quality 清晰度参数</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>必填，音频地址</td><td>String</td><td>—</td><td>—</td></tr><tr><td>name</td><td>音频名称</td><td>String</td><td>—</td><td>—</td></tr><tr><td>type</td><td>音频类型</td><td>String</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="audio-%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#audio-%E4%BA%8B%E4%BB%B6">#</a> Audio 事件</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-load</td><td>获取audio实例</td><td>function(audio)audio对象，支持原生对象</td></tr><tr><td>on-pause</td><td>暂停触发</td><td>—</td></tr><tr><td>on-paused</td><td>播放暂停触发</td><td>—</td></tr><tr><td>on-play</td><td>播放</td><td>—</td></tr><tr><td>on-timeupdate</td><td>监听音频时间变化</td><td>—</td></tr><tr><td>on-volume</td><td>监听音量变化</td><td>—</td></tr><tr><td>on-error</td><td>监听音频错误</td><td>—</td></tr><tr><td>on-autoplay</td><td>监听自动播放</td><td>—</td></tr><tr><td>on-canplay</td><td>监听加载</td><td>—</td></tr><tr><td>on-drag</td><td>监听拖拽</td><td>(拖拽步骤[1按下2移动3抬起], 拖拽类型[horizontal横向vertical纵向])</td></tr><tr><td>on-playbackRate</td><td>监听倍速切换</td><td>—</td></tr><tr><td>on-quality</td><td>监听清晰度切换</td><td>—</td></tr></tbody></table></div><h2 id="audio-%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#audio-%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Audio 样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-audio-width</td><td>–zmz-audio-width</td><td>100%</td><td>宽度</td></tr><tr><td>@zmz-audio-height</td><td>–zmz-audio-height</td><td>40px</td><td>高度</td></tr><tr><td>@zmz-audio-play-icon-font-size</td><td>–zmz-audio-play-icon-font-size</td><td>16px</td><td>字体大小</td></tr><tr><td>@zmz-audio-play-icon-color</td><td>–zmz-audio-play-icon-color</td><td>默认主题颜色</td><td>图标大小</td></tr><tr><td>@zmz-audio-unite-font-size</td><td>–zmz-audio-unite-font-size</td><td>12px</td><td>公共字体大小</td></tr><tr><td>@zmz-audio-unite-color</td><td>–zmz-audio-unite-color</td><td>默认主题颜色</td><td>公共字体颜色</td></tr><tr><td>@zmz-audio-time-color</td><td>–zmz-audio-time-color</td><td>默认主题颜色</td><td>时间颜色</td></tr><tr><td>@zmz-audio-time-font-size</td><td>–zmz-audio-time-font-size</td><td>12px</td><td>时间字体大小</td></tr><tr><td>@zmz-audio-border-radius</td><td>–zmz-audio-border-radius</td><td>5px</td><td>圆角颜色</td></tr><tr><td>@zmz-audio-progress-line-color</td><td>–zmz-audio-progress-line-color</td><td>成功主题颜色</td><td>线条颜色</td></tr><tr><td>@zmz-audio-progress-dot-color</td><td>–zmz-audio-progress-dot-color</td><td>#fff</td><td>点颜色</td></tr><tr><td>@zmz-audio-progress-dot-box-shadow</td><td>–zmz-audio-progress-dot-box-shadow</td><td>0 2px 12px 0 #b1b1b1</td><td>点阴影</td></tr><tr><td>@zmz-audio-progress-background-color</td><td>–zmz-audio-progress-background-color</td><td>rgba(124, 131, 138, 0.3)</td><td>进度背景颜色</td></tr><tr><td>@zmz-audio-background-color</td><td>–zmz-audio-background-color</td><td>#fff</td><td>背景色</td></tr><tr><td>@zmz-audio-box-shadow</td><td>–zmz-audio-box-shadow</td><td>0 2px 12px 0 #b1b1b1</td><td>阴影</td></tr></tbody></table></div>',10))])}const P=b(v,[["render",C]]);export{P as default};
