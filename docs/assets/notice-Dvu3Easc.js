import{_ as z,c as m,d,a as t,e as n,w as o,b as s,r,o as u}from"./index-Bfn7SEZ2.js";const F={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Notice 通知"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}},methods:{success(){this.$notice.success("成功")},warning(){this.$notice.warning("警告")},error(){this.$notice.error("失败")},primary(){this.$notice.primary("主要")},defaults(){this.$notice.default("默认")},info(){this.$notice.info("消息")},success1(){this.$notice.success({content:"成功",background:!0})},warning1(){this.$notice.warning({content:"警告",background:!0})},error1(){this.$notice.error({content:"失败",background:!0})},primary1(){this.$notice.primary({content:"主要",background:!0})},defaults1(){this.$notice.default({content:"默认",background:!0})},info1(){this.$notice.info({content:"消息",background:!0})},currentConfig(E){return this.$setting.currentConfig[E]}}},B={class:"zmz-markdown-article"},f={class:"demo-block"},b={class:"demo-block"};function k(E,l,h,g,D,e){const a=r("zmz-button"),c=r("zmz-space-item"),p=r("zmz-space"),i=r("demo-block"),y=r("warning-block");return u(),m("div",B,[l[24]||(l[24]=d('<h1 id="notice-%E9%80%9A%E7%9F%A5" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#notice-%E9%80%9A%E7%9F%A5">#</a> Notice 通知</h1><hr><h2 id="%E6%A6%82%E8%BF%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%A6%82%E8%BF%B0">#</a> 概述</h2><p>出现在角落的通知</p><h2 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">#</a> 基础用法</h2>',5)),t("div",f,[n(p,null,{default:o(()=>[n(c,null,{default:o(()=>[n(a,{onClick:e.success},{default:o(()=>[...l[0]||(l[0]=[s("成功",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.warning},{default:o(()=>[...l[1]||(l[1]=[s("警告",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.error},{default:o(()=>[...l[2]||(l[2]=[s("失败",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.primary},{default:o(()=>[...l[3]||(l[3]=[s("主要",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.defaults},{default:o(()=>[...l[4]||(l[4]=[s("默认",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.info},{default:o(()=>[...l[5]||(l[5]=[s("消息",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})]),n(i,null,{desc:o(()=>[...l[6]||(l[6]=[])]),highlight:o(()=>[...l[7]||(l[7]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"success"'),t("span",{style:{color:"#E1E4E8"}},">成功</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"warning"'),t("span",{style:{color:"#E1E4E8"}},">警告</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"error"'),t("span",{style:{color:"#E1E4E8"}},">失败</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"primary"'),t("span",{style:{color:"#E1E4E8"}},">主要</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"defaults"'),t("span",{style:{color:"#E1E4E8"}},">默认</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"info"'),t("span",{style:{color:"#E1E4E8"}},">消息</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        </"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    methods"),t("span",{style:{color:"#E1E4E8"}},": {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        success"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"success"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'成功'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        warning"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"warning"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'警告'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        error"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"error"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'失败'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        primary"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"primary"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'主要'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        defaults"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"default"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'默认'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        info"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"info"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'消息'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:o(()=>[...l[8]||(l[8]=[])]),default:o(()=>[l[9]||(l[9]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button @click="success">成功</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="warning">警告</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="error">失败</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="primary">主要</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="defaults">默认</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="info">消息</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        success () {
            this.$notice.success('成功');
        },
        warning () {
            this.$notice.warning('警告');
        },
        error () {
            this.$notice.error('失败');
        },
        primary () {
            this.$notice.primary('主要');
        },
        defaults () {
            this.$notice.default('默认');
        },
        info () {
            this.$notice.info('消息');
        }
    }
}
<\/script>
`)],-1))]),_:1}),l[25]||(l[25]=t("h2",{id:"%E8%83%8C%E6%99%AF%E7%94%A8%E6%B3%95",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E8%83%8C%E6%99%AF%E7%94%A8%E6%B3%95"},"#"),s(" 背景用法")],-1)),t("div",b,[n(p,null,{default:o(()=>[n(c,null,{default:o(()=>[n(a,{onClick:e.success1},{default:o(()=>[...l[10]||(l[10]=[s("成功",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.warning1},{default:o(()=>[...l[11]||(l[11]=[s("警告",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.error1},{default:o(()=>[...l[12]||(l[12]=[s("失败",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.primary1},{default:o(()=>[...l[13]||(l[13]=[s("主要",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.defaults1},{default:o(()=>[...l[14]||(l[14]=[s("默认",-1)])]),_:1},8,["onClick"])]),_:1}),n(c,null,{default:o(()=>[n(a,{onClick:e.info1},{default:o(()=>[...l[15]||(l[15]=[s("消息",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})]),n(i,null,{desc:o(()=>[...l[16]||(l[16]=[])]),highlight:o(()=>[...l[17]||(l[17]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"success"'),t("span",{style:{color:"#E1E4E8"}},">成功</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"warning"'),t("span",{style:{color:"#E1E4E8"}},">警告</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"error"'),t("span",{style:{color:"#E1E4E8"}},">失败</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"primary"'),t("span",{style:{color:"#E1E4E8"}},">主要</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"defaults"'),t("span",{style:{color:"#E1E4E8"}},">默认</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},"><"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"info"'),t("span",{style:{color:"#E1E4E8"}},">消息</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-space-item"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        </"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    methods"),t("span",{style:{color:"#E1E4E8"}},": {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        success"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"success"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'成功'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        warning"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"warning"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'警告'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        error"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"error"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'失败'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        primary"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"primary"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'主要'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        defaults"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"default"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'默认'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        info"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$notice."),t("span",{style:{color:"#B392F0"}},"info"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'消息'"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:o(()=>[...l[18]||(l[18]=[])]),default:o(()=>[l[19]||(l[19]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button @click="success">成功</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="warning">警告</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="error">失败</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="primary">主要</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="defaults">默认</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button @click="info">消息</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        success () {
            this.$notice.success('成功');
        },
        warning () {
            this.$notice.warning('警告');
        },
        error () {
            this.$notice.error('失败');
        },
        primary () {
            this.$notice.primary('主要');
        },
        defaults () {
            this.$notice.default('默认');
        },
        info () {
            this.$notice.info('消息');
        }
    }
}
<\/script>
`)],-1))]),_:1}),l[26]||(l[26]=d('<h2 id="notice-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#notice-%E5%B1%9E%E6%80%A7">#</a> Notice 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>—</td><td>提示</td></tr><tr><td>content</td><td>内容</td><td>String / dom</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td>String</td><td>success/warning/primary/error/info/default</td><td>default</td></tr><tr><td>icon</td><td>自定义图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>id</td><td>弹窗唯一id</td><td>String</td><td>—</td><td>‘zmz-notice-’ + 时间戳</td></tr><tr><td>html</td><td>是否使用html格式</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>notice-custom-class</td><td>自定义类名</td><td>String/Array</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>关闭时间, 毫秒。为 0 则不会自动关闭</td><td>Number</td><td>—</td><td>3000</td></tr><tr><td>show-close-btn</td><td>是否显示关闭按钮</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>background</td><td>是否显示背景色</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>文字是否居中</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>on-close</td><td>关闭时的回调函数, 参数为被关闭的 notice 实例</td><td>Function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>距离窗口顶部的偏移量</td><td>Number</td><td>—</td><td>15</td></tr><tr><td>auto-closed</td><td>自动关闭</td><td>Boolean</td><td>—</td><td>true</td></tr></tbody></table></div><h2 id="notice-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#notice-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Notice 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-notice-background-color</td><td>–zmz-notice-background-color</td><td>#fff</td><td>背景颜色</td></tr><tr><td>@zmz-notice-border-color</td><td>–zmz-notice-border-color</td><td>#fff</td><td>边线颜色</td></tr><tr><td>@zmz-notice-padding</td><td>–zmz-notice-padding</td><td>14px 26px 14px 13px</td><td>内边距</td></tr><tr><td>@zmz-notice-border-radius</td><td>–zmz-notice-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-notice-border-width</td><td>–zmz-notice-border-width</td><td>1px</td><td>边线宽度</td></tr><tr><td>@zmz-notice-border-style</td><td>–zmz-notice-border-style</td><td>solid</td><td>边线样式</td></tr><tr><td>@zmz-notice-box-shadow</td><td>–zmz-notice-box-shadow</td><td>0 1px 6px rgba(0, 0, 0, .39)</td><td>阴影</td></tr><tr><td>@zmz-notice-width</td><td>–zmz-notice-width</td><td>300px</td><td>默认宽度</td></tr><tr><td>@zmz-notice-icon-size</td><td>–zmz-notice-icon-size</td><td>20px</td><td>图标大小</td></tr><tr><td>@zmz-notice-icon-color</td><td>–zmz-notice-icon-color</td><td>默认主题颜色</td><td>图标颜色</td></tr><tr><td>@zmz-notice-title-line-height</td><td>–zmz-notice-title-line-height</td><td>1</td><td>标题行高</td></tr><tr><td>@zmz-notice-content-line-height</td><td>–zmz-notice-content-line-height</td><td>1</td><td>内容行高</td></tr><tr><td>@zmz-notice-title-color</td><td>–zmz-notice-title-color</td><td>默认主题颜色</td><td>标题颜色</td></tr><tr><td>@zmz-notice-title-font-size</td><td>–zmz-notice-title-font-size</td><td>16px</td><td>标题大小</td></tr><tr><td>@zmz-notice-content-margin-top</td><td>–zmz-notice-content-margin-top</td><td>6px</td><td>内容上边距</td></tr><tr><td>@zmz-notice-content-color</td><td>–zmz-notice-content-color</td><td>消息主题颜色</td><td>内容颜色</td></tr><tr><td>@zmz-notice-content-font-size</td><td>–zmz-notice-content-font-size</td><td>12px</td><td>内容大小</td></tr><tr><td>@zmz-notice-close-color</td><td>–zmz-notice-close-color</td><td>消息主题颜色</td><td>关闭颜色</td></tr><tr><td>@zmz-notice-close-font-size</td><td>–zmz-notice-close-font-size</td><td>12px</td><td>关闭按钮大小</td></tr></tbody></table></div><h2 id="%E7%89%B9%E5%88%AB%E6%8F%90%E7%A4%BA" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E7%89%B9%E5%88%AB%E6%8F%90%E7%A4%BA">#</a> 特别提示</h2>',5)),n(y,null,{desc:o(()=>[...l[20]||(l[20]=[])]),highlight:o(()=>[...l[21]||(l[21]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"})])],-1)])]),code:o(()=>[...l[22]||(l[22]=[])]),default:o(()=>[l[23]||(l[23]=t("p",null,"zmz-model 可以进行Attributes 继承",-1))]),_:1})])}const w=z(F,[["render",k]]);export{w as default};
