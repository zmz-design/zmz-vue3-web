import{_ as y,c as m,d,a as s,e as o,w as n,b as l,r,o as u}from"./index-DDFEzhq1.js";const z={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Message 消息全局提示"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}},methods:{defaults(){this.$message.default("默认")},primary(){this.$message.primary("确认")},success(){this.$message.success("成功")},warning(){this.$message.warning("警告")},error(){this.$message.error("失败")},info(){this.$message.info("信息")},defaults1(){this.$message.default({content:"默认",background:!0})},primary1(){this.$message.primary({content:"确认",background:!0})},success1(){this.$message.success({content:"成功",background:!0})},warning1(){this.$message.warning({content:"警告",background:!0})},error1(){this.$message.error({content:"失败",background:!0})},info1(){this.$message.info({content:"信息",background:!0})},currentConfig(E){return this.$setting.currentConfig[E]}}},F={class:"zmz-markdown-article"},g={class:"demo-block"},B={class:"demo-block"};function b(E,t,k,f,h,e){const a=r("zmz-button"),c=r("zmz-space"),p=r("demo-block"),i=r("warning-block");return u(),m("div",F,[t[24]||(t[24]=d('<h1 id="message-%E6%B6%88%E6%81%AF%E5%85%A8%E5%B1%80%E6%8F%90%E7%A4%BA" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#message-%E6%B6%88%E6%81%AF%E5%85%A8%E5%B1%80%E6%8F%90%E7%A4%BA">#</a> Message 消息全局提示</h1><hr><h2 id="%E6%A6%82%E8%BF%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%A6%82%E8%BF%B0">#</a> 概述</h2><p>用于消息的提示返回给视图页面提供给用户通知</p><h2 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">#</a> 基础用法</h2>',5)),s("div",g,[o(c,null,{default:n(()=>[o(a,{onClick:e.defaults},{default:n(()=>[...t[0]||(t[0]=[l("默认",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.primary},{default:n(()=>[...t[1]||(t[1]=[l("确认",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.success},{default:n(()=>[...t[2]||(t[2]=[l("成功",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.warning},{default:n(()=>[...t[3]||(t[3]=[l("警告",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.error},{default:n(()=>[...t[4]||(t[4]=[l("失败",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.info},{default:n(()=>[...t[5]||(t[5]=[l("信息",-1)])]),_:1},8,["onClick"])]),_:1})]),o(p,null,{desc:n(()=>[...t[6]||(t[6]=[])]),highlight:n(()=>[...t[7]||(t[7]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"defaults"'),s("span",{style:{color:"#E1E4E8"}},">默认</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}},">确认</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"success"'),s("span",{style:{color:"#E1E4E8"}},">成功</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"warning"'),s("span",{style:{color:"#E1E4E8"}},">警告</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"error"'),s("span",{style:{color:"#E1E4E8"}},">失败</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"info"'),s("span",{style:{color:"#E1E4E8"}},">信息</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        defaults"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"default"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'确认'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        primary"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"primary"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'确认'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        success"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"success"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'成功'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        warning"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"warning"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'警告'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        error"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"error"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'失败'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        info"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"info"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'信息'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...t[8]||(t[8]=[])]),default:n(()=>[t[9]||(t[9]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-button @click="defaults">默认</zmz-button>
            <zmz-button @click="primary">确认</zmz-button>
            <zmz-button @click="success">成功</zmz-button>
            <zmz-button @click="warning">警告</zmz-button>
            <zmz-button @click="error">失败</zmz-button>
            <zmz-button @click="info">信息</zmz-button>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        defaults () {
            this.$message.default('确认');
        },
        primary () {
            this.$message.primary('确认');
        },
        success () {
            this.$message.success('成功');
        },
        warning () {
            this.$message.warning('警告');
        },
        error () {
            this.$message.error('失败');
        },
        info () {
            this.$message.info('信息');
        },
    }
}
<\/script>
`)],-1))]),_:1}),t[25]||(t[25]=s("h2",{id:"%E8%83%8C%E6%99%AF%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E8%83%8C%E6%99%AF%E7%94%A8%E6%B3%95"},"#"),l(" 背景用法")],-1)),s("div",B,[o(c,null,{default:n(()=>[o(a,{onClick:e.defaults1},{default:n(()=>[...t[10]||(t[10]=[l("默认",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.primary1},{default:n(()=>[...t[11]||(t[11]=[l("确认",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.success1},{default:n(()=>[...t[12]||(t[12]=[l("成功",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.warning1},{default:n(()=>[...t[13]||(t[13]=[l("警告",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.error1},{default:n(()=>[...t[14]||(t[14]=[l("失败",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.info1},{default:n(()=>[...t[15]||(t[15]=[l("信息",-1)])]),_:1},8,["onClick"])]),_:1})]),o(p,null,{desc:n(()=>[...t[16]||(t[16]=[])]),highlight:n(()=>[...t[17]||(t[17]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"defaults1"'),s("span",{style:{color:"#E1E4E8"}},">默认</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary1"'),s("span",{style:{color:"#E1E4E8"}},">确认</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"success1"'),s("span",{style:{color:"#E1E4E8"}},">成功</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"warning1"'),s("span",{style:{color:"#E1E4E8"}},">警告</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"error1"'),s("span",{style:{color:"#E1E4E8"}},">失败</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"info1"'),s("span",{style:{color:"#E1E4E8"}},">信息</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        defaults"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"default"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'默认'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                background: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        primary"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"primary"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'成功'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                background: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        success"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"success"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'成功'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                background: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        warning"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"warning"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'警告'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                background: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        error"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"error"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'失败'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                background: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        info"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"info"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'信息'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                background: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...t[18]||(t[18]=[])]),default:n(()=>[t[19]||(t[19]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-button @click="defaults1">默认</zmz-button>
            <zmz-button @click="primary1">确认</zmz-button>
            <zmz-button @click="success1">成功</zmz-button>
            <zmz-button @click="warning1">警告</zmz-button>
            <zmz-button @click="error1">失败</zmz-button>
            <zmz-button @click="info1">信息</zmz-button>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        defaults () {
            this.$message.default({
                content: '默认',
                background: true
            });
        },
        primary () {
            this.$message.primary({
                content: '成功',
                background: true
            });
        },
        success () {
            this.$message.success({
                content: '成功',
                background: true
            });
        },
        warning () {
            this.$message.warning({
                content: '警告',
                background: true
            });
        },
        error () {
            this.$message.error({
                content: '失败',
                background: true
            });
        },
        info () {
            this.$message.info({
                content: '信息',
                background: true
            });
        },
    }
}
<\/script>
`)],-1))]),_:1}),t[26]||(t[26]=d('<h2 id="message-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#message-%E5%B1%9E%E6%80%A7">#</a> Message 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>内容</td><td><code>String</code> / dom</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td><code>String</code></td><td>success/warning/primary/info/error/default</td><td>default</td></tr><tr><td>icon</td><td>自定义图标</td><td><code>String</code></td><td>—</td><td>—</td></tr><tr><td>id</td><td>弹窗唯一id</td><td><code>String</code></td><td>—</td><td>‘zmz-message-’ + 时间戳</td></tr><tr><td>html</td><td>是否使用html格式</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>message-custom-class</td><td>自定义类名</td><td><code>String</code>/<code>Array</code></td><td>—</td><td>—</td></tr><tr><td>duration</td><td>关闭时间, 毫秒。为 0 则不会自动关闭</td><td><code>Number</code></td><td>—</td><td>3000</td></tr><tr><td>show-close-button</td><td>是否显示关闭按钮</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>background</td><td>是否显示背景色</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>center</td><td>文字是否居中</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>on-close</td><td>关闭时的回调函数, 参数为被关闭的 message 实例</td><td><code>Function</code></td><td>—</td><td>—</td></tr><tr><td>offset</td><td>距离窗口顶部的偏移量</td><td><code>Number</code></td><td>—</td><td>15</td></tr><tr><td>auto-closed</td><td>自动关闭</td><td><code>Boolean</code></td><td>—</td><td>true</td></tr></tbody></table></div><h2 id="message-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#message-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Message 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-message-padding</td><td>–zmz-message-padding</td><td>12px 16px</td><td>内边距</td></tr><tr><td>@zmz-message-border-radius</td><td>–zmz-message-border-radius</td><td>16px</td><td>圆角</td></tr><tr><td>@zmz-message-border-color</td><td>–zmz-message-border-color</td><td>强边框</td><td>边线</td></tr><tr><td>@zmz-message-background-color</td><td>–zmz-message-background-color</td><td>12px 16px</td><td>背景颜色</td></tr><tr><td>@zmz-message-text-color</td><td>–zmz-message-text-color</td><td>消息主题颜色</td><td>文字颜色</td></tr><tr><td>@zmz-message-icon-color</td><td>–zmz-message-icon-color</td><td>消息主题颜色</td><td>图标颜色</td></tr><tr><td>@zmz-message-icon-size</td><td>–zmz-message-icon-size</td><td>18px</td><td>图标大小</td></tr><tr><td>@zmz-message-close-color</td><td>–zmz-message-close-color</td><td>消息主题颜色</td><td>关闭颜色</td></tr><tr><td>@zmz-message-close-font-size</td><td>–zmz-message-close-font-size</td><td>12px</td><td>关闭按钮字体大小</td></tr><tr><td>@zmz-message-box-shadow</td><td>–zmz-message-box-shadow</td><td>0 1px 6px rgba(0, 0, 0, .2)</td><td>消息阴影</td></tr></tbody></table></div><h2 id="%E7%89%B9%E5%88%AB%E6%8F%90%E7%A4%BA" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E7%89%B9%E5%88%AB%E6%8F%90%E7%A4%BA">#</a> 特别提示</h2>',5)),o(i,null,{desc:n(()=>[...t[20]||(t[20]=[])]),highlight:n(()=>[...t[21]||(t[21]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"})])],-1)])]),code:n(()=>[...t[22]||(t[22]=[])]),default:n(()=>[t[23]||(t[23]=s("p",null,"zmz-model 可以进行Attributes 继承",-1))]),_:1})])}const w=y(z,[["render",b]]);export{w as default};
