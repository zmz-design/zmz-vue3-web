import{_ as z,c as u,a as t,b as l,e as n,w as s,d as y,r as c,o as b}from"./index-DDFEzhq1.js";const F={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"describe",content:this.describe}]}},data(){return{title:"Loadmore 加载更多"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),describe:this.currentConfig("describe"),state:"loading",name:""}},methods:{currentConfig(E){return this.$setting.currentConfig[E]},start(E,o){this.state=E,this.name=o},handleClick(E){console.log(E)}}},g={class:"zmz-markdown-article"},f={class:"demo-alert demo-block"},B={class:"demo-alert demo-block"},k={class:"demo-alert demo-block"};function h(E,o,x,C,r,a){const d=c("zmz-button"),m=c("zmz-space"),p=c("zmz-loadmore"),i=c("demo-block");return b(),u("div",g,[o[31]||(o[31]=t("h1",{id:"loadmore-%E5%8A%A0%E8%BD%BD%E6%9B%B4%E5%A4%9A",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#loadmore-%E5%8A%A0%E8%BD%BD%E6%9B%B4%E5%A4%9A"},"#"),l(" Loadmore 加载更多")],-1)),o[32]||(o[32]=t("hr",null,null,-1)),o[33]||(o[33]=t("p",null,"请求数据，为空的时候占位",-1)),o[34]||(o[34]=t("h2",{id:"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"},"#"),l(" 基本用法")],-1)),t("div",f,[n(m,null,{default:s(()=>[n(d,{onClick:o[0]||(o[0]=e=>a.start("loadbefore"))},{default:s(()=>[...o[11]||(o[11]=[l("加载前",-1)])]),_:1}),n(d,{onClick:o[1]||(o[1]=e=>a.start("loading"))},{default:s(()=>[...o[12]||(o[12]=[l("加载中",-1)])]),_:1}),n(d,{onClick:o[2]||(o[2]=e=>a.start("loadafter"))},{default:s(()=>[...o[13]||(o[13]=[l("加载后",-1)])]),_:1}),n(d,{onClick:o[3]||(o[3]=e=>a.start("nomore"))},{default:s(()=>[...o[14]||(o[14]=[l("没有更多",-1)])]),_:1})]),_:1}),n(p,{modelValue:r.state,"onUpdate:modelValue":o[4]||(o[4]=e=>r.state=e)},null,8,["modelValue"])]),n(i,null,{desc:s(()=>[...o[15]||(o[15]=[])]),highlight:s(()=>[...o[16]||(o[16]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"       <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"start('loadbefore')"`),t("span",{style:{color:"#E1E4E8"}},">加载前</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"       <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"start('loading')"`),t("span",{style:{color:"#E1E4E8"}},">加载中</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"       <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"start('loadafter')"`),t("span",{style:{color:"#E1E4E8"}},">加载后</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"       <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"start('nomore')"`),t("span",{style:{color:"#E1E4E8"}},">没有更多</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-loadmore"),t("span",{style:{color:"#B392F0"}}," v-model"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"state"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-loadmore"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        return"),t("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            state: "),t("span",{style:{color:"#9ECBFF"}},"'loading'")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        start"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#FFAB70"}},"type"),t("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".state "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#E1E4E8"}}," type")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"})])],-1)])]),code:s(()=>[...o[17]||(o[17]=[])]),default:s(()=>[o[18]||(o[18]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <zmz-space>
       <zmz-button @click="start('loadbefore')">加载前</zmz-button>
       <zmz-button @click="start('loading')">加载中</zmz-button>
       <zmz-button @click="start('loadafter')">加载后</zmz-button>
       <zmz-button @click="start('nomore')">没有更多</zmz-button>
    </zmz-space>
    <zmz-loadmore v-model="state"></zmz-loadmore>
</template>
<script>
export default {
    data() {
        return {
            state: 'loading'
        };
    },
    methods: {
        start(type) {
            this.state = type
        }
    }
};
<\/script>
`)],-1))]),_:1}),o[35]||(o[35]=y('<h2 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9">#</a> 自定义内容</h2><p>使用<code>loadbefore</code>， <code>loading</code>，<code>loadafter</code>，<code>nomore</code>可以设置不同的文案，也可以使用<code>loadingText</code>属性替代节点属性，减少声明变量。</p>',2)),t("div",B,[n(m,null,{default:s(()=>[n(d,{onClick:o[5]||(o[5]=e=>a.start("loadbefore","加载前"))},{default:s(()=>[...o[19]||(o[19]=[l("加载前",-1)])]),_:1}),n(d,{onClick:o[6]||(o[6]=e=>a.start("loading","加载中"))},{default:s(()=>[...o[20]||(o[20]=[l("加载中",-1)])]),_:1}),n(d,{onClick:o[7]||(o[7]=e=>a.start("loadafter","加载后"))},{default:s(()=>[...o[21]||(o[21]=[l("加载后",-1)])]),_:1}),n(d,{onClick:o[8]||(o[8]=e=>a.start("nomore","没有更多"))},{default:s(()=>[...o[22]||(o[22]=[l("没有更多",-1)])]),_:1})]),_:1}),n(p,{modelValue:r.state,"onUpdate:modelValue":o[9]||(o[9]=e=>r.state=e),loadingText:r.name,icon:"empty"},null,8,["modelValue","loadingText"])]),n(i,null,{desc:s(()=>[...o[23]||(o[23]=[])]),highlight:s(()=>[...o[24]||(o[24]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"       <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"start('loadbefore', '加载前')"`),t("span",{style:{color:"#E1E4E8"}},">加载前</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"       <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"start('loading', '加载中')"`),t("span",{style:{color:"#E1E4E8"}},">加载中</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"       <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"start('loadafter', '加载后')"`),t("span",{style:{color:"#E1E4E8"}},">加载后</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"       <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"start('nomore', '没有更多')"`),t("span",{style:{color:"#E1E4E8"}},">没有更多</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"zmz-space"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-loadmore"),t("span",{style:{color:"#B392F0"}}," v-model"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"state"'),t("span",{style:{color:"#B392F0"}}," :loadingText"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"name"'),t("span",{style:{color:"#B392F0"}}," icon"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},"'empty'"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-loadmore"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        return"),t("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            state: "),t("span",{style:{color:"#9ECBFF"}},"'loading'"),t("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            name: "),t("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        start"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#FFAB70"}},"type"),t("span",{style:{color:"#E1E4E8"}},", "),t("span",{style:{color:"#FFAB70"}},"name"),t("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".state "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#E1E4E8"}}," type")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".name "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#E1E4E8"}}," name")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"})])],-1)])]),code:s(()=>[...o[25]||(o[25]=[])]),default:s(()=>[o[26]||(o[26]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <zmz-space>
       <zmz-button @click="start('loadbefore', '加载前')">加载前</zmz-button>
       <zmz-button @click="start('loading', '加载中')">加载中</zmz-button>
       <zmz-button @click="start('loadafter', '加载后')">加载后</zmz-button>
       <zmz-button @click="start('nomore', '没有更多')">没有更多</zmz-button>
    </zmz-space>
    <zmz-loadmore v-model="state" :loadingText="name" icon='empty'></zmz-loadmore>
</template>
<script>
export default {
    data() {
        return {
            state: 'loading',
            name: ''
        };
    },
    methods: {
        start(type, name) {
            this.state = type
            this.name = name
        }
    }
};
<\/script>
`)],-1))]),_:1}),o[36]||(o[36]=t("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2"},"#"),l(" 自定义颜色")],-1)),o[37]||(o[37]=t("p",null,[l("使用"),t("code",null,"icon-color"),l("自定义内容颜色icon大小颜色")],-1)),t("div",k,[n(p,{color:"#ff0","icon-color":"#f00","icon-size":"60px",modelValue:r.state,"onUpdate:modelValue":o[10]||(o[10]=e=>r.state=e)},null,8,["modelValue"])]),n(i,null,{desc:s(()=>[...o[27]||(o[27]=[])]),highlight:s(()=>[...o[28]||(o[28]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-loadmore"),t("span",{style:{color:"#B392F0"}}," color"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"#ff0"'),t("span",{style:{color:"#B392F0"}}," icon-color"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"#f00"'),t("span",{style:{color:"#B392F0"}}," icon-size"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"60px"'),t("span",{style:{color:"#B392F0"}}," v-model"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"state"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-loadmore"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        return"),t("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            state: "),t("span",{style:{color:"#9ECBFF"}},"'loading'"),t("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            name: "),t("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"})])],-1)])]),code:s(()=>[...o[29]||(o[29]=[])]),default:s(()=>[o[30]||(o[30]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <zmz-loadmore color="#ff0" icon-color="#f00" icon-size="60px" v-model="state"></zmz-loadmore>
</template>
<script>
export default {
    data() {
        return {
            state: 'loading',
            name: ''
        };
    }
};
<\/script>
`)],-1))]),_:1}),o[38]||(o[38]=y('<h2 id="loadmore-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loadmore-%E5%B1%9E%E6%80%A7">#</a> Loadmore 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>加载状态</td><td><code>String</code></td><td><code>loadbefore</code>、<code>loadafter</code>、<code>loading</code>、<code>nomore</code></td><td>loadbefore</td></tr><tr><td>height</td><td>占位高度</td><td><code>String</code></td><td>—</td><td>—</td></tr><tr><td>icon</td><td>icon图标</td><td><code>String</code></td><td>—</td><td>zmz-icon–loading</td></tr><tr><td>color</td><td>颜色</td><td><code>String</code></td><td>—</td><td>—</td></tr><tr><td>icon-color</td><td>设置icon自定义颜色，自定义插槽无效</td><td><code>String</code></td><td>—</td><td>—</td></tr><tr><td>icon-size</td><td>设置icon自定义大小，自定义插槽无效</td><td><code>String</code></td><td>—</td><td>—</td></tr><tr><td>loadingText</td><td>加载文字</td><td><code>String</code></td><td>—</td><td>—</td></tr><tr><td>loadbefore</td><td>加载前文字</td><td><code>String</code></td><td>—</td><td>点击加载更多</td></tr><tr><td>loading</td><td>加载中文字</td><td><code>String</code></td><td>—</td><td>正在加载</td></tr><tr><td>loadafter</td><td>加载后文字</td><td><code>String</code></td><td>—</td><td>加载完毕</td></tr><tr><td>nomore</td><td>加载为空，没有更多</td><td><code>String</code></td><td>—</td><td>没有更多</td></tr><tr><td>line-width</td><td>左右占位符宽度</td><td><code>String</code></td><td>—</td><td>40</td></tr></tbody></table></div><h2 id="loadmore-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loadmore-%E6%96%B9%E6%B3%95">#</a> Loadmore 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-fold</td><td>展开折叠触发</td><td>function(state| hide/show)</td></tr></tbody></table></div><h2 id="loadmore-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loadmore-%E6%8F%92%E6%A7%BD">#</a> Loadmore 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>line</td><td>左右公共插槽</td></tr><tr><td>lineLeft</td><td>左部插槽</td></tr><tr><td>lineRight</td><td>右部插槽</td></tr><tr><td>custom</td><td>自定义插槽</td></tr></tbody></table></div><h2 id="loadmore-%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loadmore-%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Loadmore 样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-loadmore-padding</td><td>–zmz-loadmore-padding</td><td>20px 0</td><td>内边距</td></tr><tr><td>@zmz-loadmore-font-size</td><td>–zmz-loadmore-font-size</td><td>12px</td><td>文字大小</td></tr><tr><td>@zmz-loadmore-title-margin-top</td><td>–zmz-loadmore-title-margin-top</td><td>20px</td><td>文字上内边距</td></tr><tr><td>@zmz-loadmore-title-font-size</td><td>–zmz-loadmore-title-font-size</td><td>20px</td><td>文字大小</td></tr><tr><td>@zmz-loadmore-title-color</td><td>–zmz-loadmore-title-color</td><td>rgba(@global-theme-default, .5)</td><td>文字颜色</td></tr><tr><td>@zmz-loadmore-describe-margin-top</td><td>–zmz-loadmore-describe-margin-top</td><td>10px</td><td>描述上内边距</td></tr><tr><td>@zmz-loadmore-describe-font-size</td><td>–zmz-loadmore-describe-font-size</td><td>12px</td><td>描述大小</td></tr><tr><td>@zmz-loadmore-describe-color</td><td>–zmz-loadmore-describe-color</td><td>rgba(@global-theme-default, .5)</td><td>描述颜色</td></tr><tr><td>@zmz-loadmore-custom-margin-top</td><td>–zmz-loadmore-custom-margin-top</td><td>30px</td><td>自定义上内边距</td></tr><tr><td>@zmz-loadmore-line-height</td><td>–zmz-loadmore-line-height</td><td>1px</td><td>线高度</td></tr><tr><td>@zmz-loadmore-line-width</td><td>–zmz-loadmore-line-width</td><td>40px</td><td>线宽度</td></tr><tr><td>@zmz-loadmore-line-background</td><td>–zmz-loadmore-line-background</td><td>rgba(@global-theme-default, .2)</td><td>线背景</td></tr><tr><td>@zmz-loadmore-line-text-color</td><td>–zmz-loadmore-line-text-color</td><td>rgba(@global-theme-default, .5)</td><td>文字颜色</td></tr><tr><td>@zmz-loadmore-line-text-padding</td><td>–zmz-loadmore-line-text-padding</td><td>0 10px</td><td>文字内边距</td></tr><tr><td>@zmz-loadmore-icon-font-size</td><td>–zmz-loadmore-icon-font-size</td><td>12px</td><td>图标大小</td></tr><tr><td>@zmz-loadmore-icon-margin-right</td><td>–zmz-loadmore-icon-margin-right</td><td>5px</td><td>图标右外边距</td></tr><tr><td>@zmz-loadmore-icon-animation-name</td><td>–zmz-loadmore-icon-animation-name</td><td>loading</td><td>动画名称</td></tr><tr><td>@zmz-loadmore-icon-animation-duration</td><td>–zmz-loadmore-icon-animation-duration</td><td>1.4s</td><td>持续时间</td></tr><tr><td>@zmz-loadmore-icon-animation-timing</td><td>–zmz-loadmore-icon-animation-timing</td><td>linear</td><td>定时</td></tr><tr><td>@zmz-loadmore-icon-animation-iteration</td><td>–zmz-loadmore-icon-animation-iteration</td><td>infinite</td><td>执行次数</td></tr></tbody></table></div>',8))])}const A=z(F,[["render",h]]);export{A as default};
