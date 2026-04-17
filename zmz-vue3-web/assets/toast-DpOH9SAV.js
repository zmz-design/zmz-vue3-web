import{_ as d,c as m,d as y,a as s,e as o,w as n,b as l,r,o as z}from"./index-DDFEzhq1.js";const F={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Toast 消息轻提示"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}},methods:{text(){this.$toast.text("提示内容")},icon(){this.$toast.icon("zmz-icon--success")},toast(){this.$toast.toast({content:"自定义提示",icon:"zmz-icon--cart"})},top(){this.$toast.toast({content:"上方提示",icon:"zmz-icon--cart",placement:"top"})},center(){this.$toast.toast({content:"中间提示",icon:"zmz-icon--cart",placement:"center"})},bottom(){this.$toast.toast({content:"下方提示",icon:"zmz-icon--cart",placement:"bottom"})},warning(){this.$toast.warning("警告图文提示")},error(){this.$toast.error("失败图文提示")},success(){this.$toast.success("成功图文提示")},loading(){this.$toast.loading("加载图文提示")},currentConfig(p){return this.$setting.currentConfig[p]}}},u={class:"zmz-markdown-article"},B={class:"demo-block"},b={class:"demo-block"},k={class:"demo-block"},D={class:"demo-block"};function h(p,t,f,C,g,a){const e=r("zmz-button"),c=r("demo-block"),E=r("zmz-space-item"),i=r("zmz-space");return z(),m("div",u,[t[26]||(t[26]=y('<h1 id="toast-%E6%B6%88%E6%81%AF%E8%BD%BB%E6%8F%90%E7%A4%BA" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#toast-%E6%B6%88%E6%81%AF%E8%BD%BB%E6%8F%90%E7%A4%BA">#</a> Toast 消息轻提示</h1><hr><h2 id="%E6%A6%82%E8%BF%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%A6%82%E8%BF%B0">#</a> 概述</h2><p>在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。</p><h2 id="%E6%96%87%E5%AD%97%E6%8F%90%E7%A4%BA" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%96%87%E5%AD%97%E6%8F%90%E7%A4%BA">#</a> 文字提示</h2>',5)),s("div",B,[o(e,{onClick:a.text},{default:n(()=>[...t[0]||(t[0]=[l("文字提示",-1)])]),_:1},8,["onClick"])]),o(c,null,{desc:n(()=>[...t[1]||(t[1]=[])]),highlight:n(()=>[...t[2]||(t[2]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"text"'),s("span",{style:{color:"#E1E4E8"}},">文字提示</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        text"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"text"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'提示内容'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                backgrund: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                showCloseBtn: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...t[3]||(t[3]=[])]),default:n(()=>[t[4]||(t[4]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-button @click="text">文字提示</zmz-button>
    </div>
</template>
<script>
export default{
    methods: {
        text() {
            this.$toast.text({
                content: '提示内容',
                backgrund: true,
                showCloseBtn: false,
            });
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[27]||(t[27]=s("h2",{id:"%E5%9B%BE%E6%A0%87%E6%8F%90%E7%A4%BA",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9B%BE%E6%A0%87%E6%8F%90%E7%A4%BA"},"#"),l(" 图标提示")],-1)),s("div",b,[o(e,{onClick:a.icon},{default:n(()=>[...t[5]||(t[5]=[l("图标提示",-1)])]),_:1},8,["onClick"])]),o(c,null,{desc:n(()=>[...t[6]||(t[6]=[])]),highlight:n(()=>[...t[7]||(t[7]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"icon"'),s("span",{style:{color:"#E1E4E8"}},">图标提示</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        icon"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"icon"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'提示内容'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                backgrund: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                showCloseBtn: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...t[8]||(t[8]=[])]),default:n(()=>[t[9]||(t[9]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-button @click="icon">图标提示</zmz-button>
    </div>
</template>
<script>
export default{
    methods: {
        icon() {
            this.$toast.icon({
                content: '提示内容',
                backgrund: true,
                showCloseBtn: false,
            });
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[28]||(t[28]=s("h2",{id:"%E5%9B%BE%E6%96%87%E6%8F%90%E7%A4%BA",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9B%BE%E6%96%87%E6%8F%90%E7%A4%BA"},"#"),l(" 图文提示")],-1)),s("div",k,[o(i,null,{default:n(()=>[o(E,null,{default:n(()=>[o(e,{onClick:a.toast},{default:n(()=>[...t[10]||(t[10]=[l("自定义提示",-1)])]),_:1},8,["onClick"])]),_:1}),o(E,null,{default:n(()=>[o(e,{onClick:a.success},{default:n(()=>[...t[11]||(t[11]=[l("成功图文提示",-1)])]),_:1},8,["onClick"])]),_:1}),o(E,null,{default:n(()=>[o(e,{onClick:a.error},{default:n(()=>[...t[12]||(t[12]=[l("失败图文提示",-1)])]),_:1},8,["onClick"])]),_:1}),o(E,null,{default:n(()=>[o(e,{onClick:a.warning},{default:n(()=>[...t[13]||(t[13]=[l("警告图文提示",-1)])]),_:1},8,["onClick"])]),_:1}),o(E,null,{default:n(()=>[o(e,{onClick:a.loading},{default:n(()=>[...t[14]||(t[14]=[l("加载图文提示",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})]),o(c,null,{desc:n(()=>[...t[15]||(t[15]=[])]),highlight:n(()=>[...t[16]||(t[16]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"toast"'),s("span",{style:{color:"#E1E4E8"}},">自定义提示</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"success"'),s("span",{style:{color:"#E1E4E8"}},">成功图文提示</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"error"'),s("span",{style:{color:"#E1E4E8"}},">失败图文提示</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"warning"'),s("span",{style:{color:"#E1E4E8"}},">警告图文提示</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"loading"'),s("span",{style:{color:"#E1E4E8"}},">加载图文提示</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        toast"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"toast"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'自定义图文提示'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                icon: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-icon--cart'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                backgrund: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                showCloseBtn: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        warning"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"warning"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'警告图文提示'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        error"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"error"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'失败图文提示'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        success"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"success"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'成功图文提示'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        loading"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"loading"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'加载图文提示'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...t[17]||(t[17]=[])]),default:n(()=>[t[18]||(t[18]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-button @click="toast">自定义提示</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="success">成功图文提示</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="error">失败图文提示</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="warning">警告图文提示</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="loading">加载图文提示</zmz-button>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        toast () {
            this.$toast.toast({
                content: '自定义图文提示',
                icon: 'zmz-icon--cart',
                backgrund: true,
                showCloseBtn: false,
            });
        },
        warning () {
            this.$toast.warning('警告图文提示');
        },
        error () {
            this.$toast.error('失败图文提示');
        },
        success () {
            this.$toast.success('成功图文提示');
        },
        loading () {
            this.$toast.loading('加载图文提示');
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[29]||(t[29]=s("h2",{id:"%E6%8F%90%E7%A4%BA%E4%BD%8D%E7%BD%AE",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E6%8F%90%E7%A4%BA%E4%BD%8D%E7%BD%AE"},"#"),l(" 提示位置")],-1)),s("div",D,[o(i,null,{default:n(()=>[o(E,null,{default:n(()=>[o(e,{onClick:a.top},{default:n(()=>[...t[19]||(t[19]=[l("上方",-1)])]),_:1},8,["onClick"])]),_:1}),o(E,null,{default:n(()=>[o(e,{onClick:a.center},{default:n(()=>[...t[20]||(t[20]=[l("中间",-1)])]),_:1},8,["onClick"])]),_:1}),o(E,null,{default:n(()=>[o(e,{onClick:a.bottom},{default:n(()=>[...t[21]||(t[21]=[l("下方",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})]),o(c,null,{desc:n(()=>[...t[22]||(t[22]=[])]),highlight:n(()=>[...t[23]||(t[23]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"top"'),s("span",{style:{color:"#E1E4E8"}},">上方</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"center"'),s("span",{style:{color:"#E1E4E8"}},">中间</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"bottom"'),s("span",{style:{color:"#E1E4E8"}},">下方</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        top"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"toast"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'上方提示'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                icon: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-icon--cart'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                placement: "),s("span",{style:{color:"#9ECBFF"}},"'top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        center"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"toast"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'中间提示'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                icon: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-icon--cart'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                placement: "),s("span",{style:{color:"#9ECBFF"}},"'center'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        bottom"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$toast."),s("span",{style:{color:"#B392F0"}},"toast"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'下方提示'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                icon: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-icon--cart'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                placement: "),s("span",{style:{color:"#9ECBFF"}},"'bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...t[24]||(t[24]=[])]),default:n(()=>[t[25]||(t[25]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-button @click="top">上方</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-button @click="center">中间</zmz-button>
            </zmz-space-item>
            <zmz-space-item>
            <zmz-button @click="bottom">下方</zmz-button>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default{
    methods: {
        top () {
            this.$toast.toast({
                content: '上方提示',
                icon: 'zmz-icon--cart',
                placement: 'top',
            });
        },
        center () {
            this.$toast.toast({
                content: '中间提示',
                icon: 'zmz-icon--cart',
                placement: 'center',
            });
        },
        bottom () {
            this.$toast.toast({
                content: '下方提示',
                icon: 'zmz-icon--cart',
                placement: 'bottom',
            });
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[30]||(t[30]=y('<h2 id="toast-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#toast-%E5%B1%9E%E6%80%A7">#</a> Toast 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>内容</td><td>String</td><td>—</td><td>—</td></tr><tr><td>type</td><td>类型</td><td>String</td><td>success / warning / error / icon / text / text-icon / loading</td><td>text-icon</td></tr><tr><td>icon</td><td>自定义图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>toast-custom-class</td><td>自定义类名</td><td>String / Array</td><td>—</td><td>—</td></tr><tr><td>toast-custom-style</td><td>自定义样式</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>mask-custom-class</td><td>自定义类名</td><td>String / Array</td><td>—</td><td>—</td></tr><tr><td>mask-custom-style</td><td>自定义样式</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>关闭时间, 毫秒。为 0 则不会自动关闭</td><td>Number</td><td>—</td><td>2000</td></tr><tr><td>mask</td><td>是否显示z遮罩</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>展示位置</td><td>String</td><td>top / center / bottom</td><td>center</td></tr></tbody></table></div><h2 id="toast-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#toast-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Toast 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-toast-padding</td><td>–zmz-toast-padding</td><td>12px 25px</td><td>内边距</td></tr><tr><td>@zmz-toast-max-width</td><td>–zmz-toast-max-width</td><td>400px</td><td>最大宽度</td></tr><tr><td>@zmz-toast-border-radius</td><td>–zmz-toast-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-toast-text-font-size</td><td>–zmz-toast-text-font-size</td><td>12px</td><td>文字大小</td></tr><tr><td>@zmz-toast-text-color</td><td>–zmz-toast-text-color</td><td>#ff</td><td>文字颜色</td></tr><tr><td>@zmz-toast-text-margin-top</td><td>–zmz-toast-text-margin-top</td><td>10px</td><td>文字上边距</td></tr><tr><td>@zmz-toast-icon-size</td><td>–zmz-toast-icon-size</td><td>36px</td><td>图标大小</td></tr><tr><td>@zmz-toast-icon-color</td><td>–zmz-toast-icon-color</td><td>#fff</td><td>图标颜色</td></tr><tr><td>@zmz-toast-background-color</td><td>–zmz-toast-background-color</td><td>rgba(0, 0, 0, 0.6)</td><td>背景颜色</td></tr></tbody></table></div>',4))])}const A=d(F,[["render",h]]);export{A as default};
