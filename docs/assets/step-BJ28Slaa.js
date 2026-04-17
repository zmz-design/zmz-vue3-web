import{_ as u,c as F,a as s,b as l,e as o,w as e,d as B,r as c,o as D}from"./index-DDFEzhq1.js";const A={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{current:0,title:"Step 步骤条"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}},methods:{clickcurrentPrev(){this.current--},clickcurrentNext(){this.current++},currentConfig(i){return this.$setting.currentConfig[i]}}},b={class:"zmz-markdown-article"},f={class:"demo-block"},k={class:"demo-block"},x={class:"demo-block"},v={class:"demo-block"},C={class:"demo-block"},g={class:"demo-block",style:{height:"300px"}};function h(i,t,w,V,E,d){const n=c("zmz-step-item"),r=c("zmz-step"),y=c("zmz-button"),m=c("zmz-space-item"),z=c("zmz-space"),p=c("demo-block");return D(),F("div",b,[t[44]||(t[44]=s("h1",{id:"step-%E6%AD%A5%E9%AA%A4%E6%9D%A1",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#step-%E6%AD%A5%E9%AA%A4%E6%9D%A1"},"#"),l(" Step 步骤条")],-1)),t[45]||(t[45]=s("hr",null,null,-1)),t[46]||(t[46]=s("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),l(" 基础用法")],-1)),t[47]||(t[47]=s("p",null,"用于引导用户按照流程完成任务的导航条。",-1)),s("div",f,[o(r,{modelValue:E.current,"onUpdate:modelValue":t[0]||(t[0]=a=>E.current=a)},{default:e(()=>[o(n,{title:"标题 1"}),o(n,{title:"标题 2"}),o(n,{title:"标题 3"})]),_:1},8,["modelValue"]),o(z,{style:{"margin-top":"20px"}},{default:e(()=>[o(m,null,{default:e(()=>[o(y,{size:"small",onClick:d.clickcurrentPrev},{default:e(()=>[...t[6]||(t[6]=[l("Prev",-1)])]),_:1},8,["onClick"])]),_:1}),o(m,null,{default:e(()=>[o(y,{size:"small",onClick:d.clickcurrentNext},{default:e(()=>[...t[7]||(t[7]=[l("Next",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})]),o(p,null,{desc:e(()=>[...t[8]||(t[8]=[])]),highlight:e(()=>[...t[9]||(t[9]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'current'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 1"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 2"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 3"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-top:20px;"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},"><"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"small"'),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"clickcurrentPrev"'),s("span",{style:{color:"#E1E4E8"}},">Prev</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},"><"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"small"'),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"clickcurrentNext"'),s("span",{style:{color:"#E1E4E8"}},">Next</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            current: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        clickcurrentPrev"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".current"),s("span",{style:{color:"#F97583"}},"--")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        clickcurrentNext"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".current"),s("span",{style:{color:"#F97583"}},"++")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:e(()=>[...t[10]||(t[10]=[])]),default:e(()=>[t[11]||(t[11]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-step v-model='current'>
            <zmz-step-item title="标题 1"></zmz-step-item>
            <zmz-step-item title="标题 2"></zmz-step-item>
            <zmz-step-item title="标题 3"></zmz-step-item>
        </zmz-step>
        <zmz-space style="margin-top:20px;">
            <zmz-space-item><zmz-button size="small" @click="clickcurrentPrev">Prev</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button size="small" @click="clickcurrentNext">Next</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    },
    methods: {
        clickcurrentPrev () {
            this.current--
        },
        clickcurrentNext () {
            this.current++
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[48]||(t[48]=s("h2",{id:"%E5%90%AB%E7%8A%B6%E6%80%81%E6%AD%A5%E9%AA%A4%E6%9D%A1",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%90%AB%E7%8A%B6%E6%80%81%E6%AD%A5%E9%AA%A4%E6%9D%A1"},"#"),l(" 含状态步骤条")],-1)),t[49]||(t[49]=s("p",null,"每一步骤显示出该步骤的状态。",-1)),s("div",k,[o(r,{modelValue:E.current,"onUpdate:modelValue":t[1]||(t[1]=a=>E.current=a),status:"error"},{default:e(()=>[o(n,{title:"标题 1"}),o(n,{title:"标题 2"}),o(n,{title:"标题 3"})]),_:1},8,["modelValue"])]),o(p,null,{desc:e(()=>[...t[12]||(t[12]=[])]),highlight:e(()=>[...t[13]||(t[13]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'current'"),s("span",{style:{color:"#B392F0"}}," status"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"error"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 1"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 2"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 3"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            current: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:e(()=>[...t[14]||(t[14]=[])]),default:e(()=>[t[15]||(t[15]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-step v-model='current' status="error">
            <zmz-step-item title="标题 1"></zmz-step-item>
            <zmz-step-item title="标题 2"></zmz-step-item>
            <zmz-step-item title="标题 3"></zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[50]||(t[50]=s("h2",{id:"%E6%9C%89%E6%8F%8F%E8%BF%B0%E7%9A%84%E6%AD%A5%E9%AA%A4%E6%9D%A1",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E6%9C%89%E6%8F%8F%E8%BF%B0%E7%9A%84%E6%AD%A5%E9%AA%A4%E6%9D%A1"},"#"),l(" 有描述的步骤条")],-1)),t[51]||(t[51]=s("p",null,"每一步骤显示出该步骤的状态。",-1)),s("div",x,[o(r,{modelValue:E.current,"onUpdate:modelValue":t[2]||(t[2]=a=>E.current=a)},{default:e(()=>[o(n,{title:"标题 1"},{default:e(()=>[...t[16]||(t[16]=[l("这是描述",-1)])]),_:1}),o(n,{title:"标题 2"},{default:e(()=>[...t[17]||(t[17]=[l("这是描述",-1)])]),_:1}),o(n,{title:"标题 3"},{default:e(()=>[...t[18]||(t[18]=[l("这是描述",-1)])]),_:1})]),_:1},8,["modelValue"])]),o(p,null,{desc:e(()=>[...t[19]||(t[19]=[])]),highlight:e(()=>[...t[20]||(t[20]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'current'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 1"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 2"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 3"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            current: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:e(()=>[...t[21]||(t[21]=[])]),default:e(()=>[t[22]||(t[22]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-step v-model='current'>
            <zmz-step-item title="标题 1">这是描述</zmz-step-item>
            <zmz-step-item title="标题 2">这是描述</zmz-step-item>
            <zmz-step-item title="标题 3">这是描述</zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[52]||(t[52]=s("h2",{id:"%E5%B1%85%E4%B8%AD%E7%9A%84%E6%AD%A5%E9%AA%A4%E6%9D%A1",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B1%85%E4%B8%AD%E7%9A%84%E6%AD%A5%E9%AA%A4%E6%9D%A1"},"#"),l(" 居中的步骤条")],-1)),t[53]||(t[53]=s("p",null,"标题和描述都将居中。",-1)),s("div",v,[o(r,{modelValue:E.current,"onUpdate:modelValue":t[3]||(t[3]=a=>E.current=a),"text-align":"center"},{default:e(()=>[o(n,{title:"标题 1"},{default:e(()=>[...t[23]||(t[23]=[l("这是描述",-1)])]),_:1}),o(n,{title:"标题 2"},{default:e(()=>[...t[24]||(t[24]=[l("这是描述",-1)])]),_:1}),o(n,{title:"标题 3"},{default:e(()=>[...t[25]||(t[25]=[l("这是描述",-1)])]),_:1})]),_:1},8,["modelValue"])]),o(p,null,{desc:e(()=>[...t[26]||(t[26]=[])]),highlight:e(()=>[...t[27]||(t[27]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'current'"),s("span",{style:{color:"#B392F0"}}," text-align"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"center"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 1"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 2"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 3"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            current: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:e(()=>[...t[28]||(t[28]=[])]),default:e(()=>[t[29]||(t[29]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-step v-model='current' text-align="center">
            <zmz-step-item title="标题 1">这是描述</zmz-step-item>
            <zmz-step-item title="标题 2">这是描述</zmz-step-item>
            <zmz-step-item title="标题 3">这是描述</zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[54]||(t[54]=s("h2",{id:"%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E6%AD%A5%E9%AA%A4%E6%9D%A1",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E6%AD%A5%E9%AA%A4%E6%9D%A1"},"#"),l(" 带图标的步骤条")],-1)),t[55]||(t[55]=s("p",null,"步骤条内可以启用各种自定义的图标。",-1)),s("div",C,[o(r,{modelValue:E.current,"onUpdate:modelValue":t[4]||(t[4]=a=>E.current=a),"text-align":"center"},{default:e(()=>[o(n,{title:"标题 1",icon:"zmz-icon--success"},{default:e(()=>[...t[30]||(t[30]=[l("这是描述",-1)])]),_:1}),o(n,{title:"标题 2",icon:"zmz-icon--error"},{default:e(()=>[...t[31]||(t[31]=[l("这是描述",-1)])]),_:1}),o(n,{title:"标题 3",icon:"zmz-icon--primary"},{default:e(()=>[...t[32]||(t[32]=[l("这是描述",-1)])]),_:1})]),_:1},8,["modelValue"])]),o(p,null,{desc:e(()=>[...t[33]||(t[33]=[])]),highlight:e(()=>[...t[34]||(t[34]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'current'"),s("span",{style:{color:"#B392F0"}}," text-align"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"center"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 1"'),s("span",{style:{color:"#B392F0"}}," icon"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-icon--success"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 2"'),s("span",{style:{color:"#B392F0"}}," icon"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-icon--error"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 3"'),s("span",{style:{color:"#B392F0"}}," icon"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-icon--primary"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            current: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:e(()=>[...t[35]||(t[35]=[])]),default:e(()=>[t[36]||(t[36]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-step v-model='current' text-align="center">
            <zmz-step-item title="标题 1" icon="zmz-icon--success">这是描述</zmz-step-item>
            <zmz-step-item title="标题 2" icon="zmz-icon--error">这是描述</zmz-step-item>
            <zmz-step-item title="标题 3" icon="zmz-icon--primary">这是描述</zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[56]||(t[56]=s("h2",{id:"%E7%AB%96%E5%BC%8F%E6%AD%A5%E9%AA%A4%E6%9D%A1",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E7%AB%96%E5%BC%8F%E6%AD%A5%E9%AA%A4%E6%9D%A1"},"#"),l(" 竖式步骤条")],-1)),t[57]||(t[57]=s("p",null,"竖直方向的步骤条。",-1)),s("div",g,[o(r,{modelValue:E.current,"onUpdate:modelValue":t[5]||(t[5]=a=>E.current=a),mode:"vertical"},{default:e(()=>[o(n,{title:"标题 1"},{default:e(()=>[...t[37]||(t[37]=[l("这是描述",-1)])]),_:1}),o(n,{title:"标题 2"},{default:e(()=>[...t[38]||(t[38]=[l("这是描述",-1)])]),_:1}),o(n,{title:"标题 3"},{default:e(()=>[...t[39]||(t[39]=[l("这是描述",-1)])]),_:1})]),_:1},8,["modelValue"])]),o(p,null,{desc:e(()=>[...t[40]||(t[40]=[])]),highlight:e(()=>[...t[41]||(t[41]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"height:300px"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'current'"),s("span",{style:{color:"#B392F0"}}," mode"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"vertical"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 1"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 2"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#B392F0"}}," title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"标题 3"'),s("span",{style:{color:"#E1E4E8"}},">这是描述</"),s("span",{style:{color:"#85E89D"}},"zmz-step-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-step"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            current: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:e(()=>[...t[42]||(t[42]=[])]),default:e(()=>[t[43]||(t[43]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block" style="height:300px">
        <zmz-step v-model='current' mode="vertical">
            <zmz-step-item title="标题 1">这是描述</zmz-step-item>
            <zmz-step-item title="标题 2">这是描述</zmz-step-item>
            <zmz-step-item title="标题 3">这是描述</zmz-step-item>
        </zmz-step>
    </div>
</template>
<script>
export default {
    data () {
        return {
            current: 0,
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[58]||(t[58]=B('<h2 id="step-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#step-%E5%B1%9E%E6%80%A7">#</a> Step 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>指定当前步骤，从 0 开始计数</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>text-align</td><td>标题位置 （horizontal状态下有效）</td><td>String</td><td>left / center / top</td><td>left</td></tr><tr><td>mode</td><td>模式</td><td>String</td><td>horizontal / vertical</td><td>horizontal</td></tr><tr><td>status</td><td>指定当前步骤的状态，会覆盖子元素 Step 的状态</td><td>String</td><td>wait / process / finish / error</td><td>process</td></tr></tbody></table></div><h2 id="step-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#step-%E6%8F%92%E6%A7%BD">#</a> Step 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>描述插槽</td></tr></tbody></table></div><h2 id="step-item-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#step-item-%E5%B1%9E%E6%80%A7">#</a> Step-item 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>description</td><td>描述</td><td>String</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="step-item-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#step-item-%E6%8F%92%E6%A7%BD">#</a> Step-item 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>描述插槽</td></tr><tr><td>icon</td><td>图标插槽</td></tr><tr><td>title</td><td>标题插槽</td></tr></tbody></table></div><h2 id="step-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#step-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Step 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-step-background-color</td><td>–zmz-step-background-color</td><td>#fff</td><td>背景颜色</td></tr><tr><td>@zmz-step-text-color</td><td>–zmz-step-text-color</td><td>默认主题颜色</td><td>文字颜色</td></tr><tr><td>@zmz-step-text-finish-color</td><td>–zmz-step-text-finish-color</td><td>确认主题颜色</td><td>完成状态</td></tr><tr><td>@zmz-step-text-process-color</td><td>–zmz-step-text-process-color</td><td>确认主题颜色</td><td>等待状态</td></tr><tr><td>@zmz-step-text-error-color</td><td>–zmz-step-text-error-color</td><td>错误主题颜色</td><td>错误状态</td></tr><tr><td>@zmz-step-title-font-size</td><td>–zmz-step-title-font-size</td><td>14px</td><td>字体大小</td></tr><tr><td>@zmz-step-describe-color</td><td>–zmz-step-describe-color</td><td>默认主题颜色</td><td>描述颜色</td></tr><tr><td>@zmz-step-describe-font-size</td><td>–zmz-step-describe-font-size</td><td>12px</td><td>描述大小</td></tr><tr><td>@zmz-step-line-color</td><td>–zmz-step-line-color</td><td>#e3e6ef</td><td>线颜色</td></tr><tr><td>@zmz-step-line-width</td><td>–zmz-step-line-width</td><td>1px</td><td>线宽</td></tr><tr><td>@zmz-step-num-border-color</td><td>–zmz-step-num-border-color</td><td>#e3e6ef</td><td>数字边线颜色</td></tr><tr><td>@zmz-step-num-background-color</td><td>–zmz-step-num-background-color</td><td>#fff</td><td>数字背景颜色</td></tr><tr><td>@zmz-step-num-border-width</td><td>–zmz-step-num-border-width</td><td>1px</td><td>数字边线宽度</td></tr><tr><td>@zmz-step-num-color</td><td>–zmz-step-num-color</td><td>默认主题颜色</td><td>数字颜色</td></tr><tr><td>@zmz-step-icon-font-size</td><td>–zmz-step-icon-font-size</td><td>12px</td><td>内置图标大小</td></tr><tr><td>@zmz-step-icons-font-size</td><td>–zmz-step-icons-font-size</td><td>22px</td><td>自定义图标大小</td></tr></tbody></table></div>',10))])}const N=u(A,[["render",h]]);export{N as default};
