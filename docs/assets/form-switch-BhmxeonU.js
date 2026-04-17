import{_ as m,c as z,a as s,b as l,e as E,w as t,d as u,r as p,o as F,t as h}from"./index-DDFEzhq1.js";const w={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},methods:{currentConfig(r){return this.$setting.currentConfig[r]},beforeChange(){return new Promise(r=>{this.$messageBox.confirm("这是一段内容","标题名称",{yesBtnText:"确定"}).then(o=>{this.$message.success(`action: ${o}`),r()})})},onChange(r){console.log(r)}},data(){return{title:"Switch 开关"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),switchs:!0}}},B={class:"zmz-markdown-article"},D={class:"demo-block"},b={class:"demo-block"},g={class:"demo-block"},v={class:"demo-block"},f={class:"demo-block"},A={class:"demo-block"},k={class:"demo-block"},C={class:"demo-block"};function x(r,o,V,S,n,d){const a=p("zmz-switch"),c=p("demo-block"),i=p("zmz-space-item"),y=p("zmz-space");return F(),z("div",B,[o[55]||(o[55]=s("h1",{id:"switch-%E5%BC%80%E5%85%B3",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#switch-%E5%BC%80%E5%85%B3"},"#"),l(" Switch 开关")],-1)),o[56]||(o[56]=s("hr",null,null,-1)),o[57]||(o[57]=s("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),l(" 基础用法")],-1)),o[58]||(o[58]=s("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」",-1)),s("div",D,[E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[0]||(o[0]=e=>n.switchs=e),onOnChange:d.onChange},{default:t(()=>[l(h(n.switchs),1)]),_:1},8,["modelValue","onOnChange"])]),E(c,null,{desc:t(()=>[...o[13]||(o[13]=[])]),highlight:t(()=>[...o[14]||(o[14]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#E1E4E8"}},">{{switchs}}</"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            switchs: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[15]||(o[15]=[])]),default:t(()=>[o[16]||(o[16]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs">{{switchs}}</zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[59]||(o[59]=s("h2",{id:"%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81"},"#"),l(" 禁用只读状态")],-1)),o[60]||(o[60]=s("p",null,[l("添加属性 "),s("code",null,"disabled"),l(" 或 "),s("code",null,"readonly")],-1)),s("div",b,[E(y,null,{default:t(()=>[E(i,null,{default:t(()=>[E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[1]||(o[1]=e=>n.switchs=e),disabled:""},null,8,["modelValue"])]),_:1}),E(i,null,{default:t(()=>[E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[2]||(o[2]=e=>n.switchs=e),readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]),E(c,null,{desc:t(()=>[...o[17]||(o[17]=[])]),highlight:t(()=>[...o[18]||(o[18]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," disabled"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," readonly"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            switchs: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[19]||(o[19]=[])]),default:t(()=>[o[20]||(o[20]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-switch v-model="switchs" disabled></zmz-switch>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-switch v-model="switchs" readonly></zmz-switch>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[61]||(o[61]=s("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9%E5%92%8C%E5%AE%BD%E5%BA%A6",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9%E5%92%8C%E5%AE%BD%E5%BA%A6"},"#"),l(" 自定义内容和宽度")],-1)),o[62]||(o[62]=s("p",null,[l("使用插槽 "),s("code",null,"open/close"),l("，变换宽度 "),s("code",null,"width")],-1)),s("div",g,[E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[3]||(o[3]=e=>n.switchs=e),width:"70"},{open:t(()=>[...o[21]||(o[21]=[l("open",-1)])]),close:t(()=>[...o[22]||(o[22]=[l("close",-1)])]),_:1},8,["modelValue"])]),E(c,null,{desc:t(()=>[...o[23]||(o[23]=[])]),highlight:t(()=>[...o[24]||(o[24]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," width"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"70"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"open"),s("span",{style:{color:"#E1E4E8"}},">open</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"close"),s("span",{style:{color:"#E1E4E8"}},">close</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            switchs: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[25]||(o[25]=[])]),default:t(()=>[o[26]||(o[26]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" width="70">
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[63]||(o[63]=s("h2",{id:"%E9%A2%9C%E8%89%B2",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E9%A2%9C%E8%89%B2"},"#"),l(" 颜色")],-1)),o[64]||(o[64]=s("p",null,[l("使用 "),s("code",null,"open-color"),l(" 和 "),s("code",null,"close-color")],-1)),s("div",v,[E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[4]||(o[4]=e=>n.switchs=e),"open-color":"#f00","close-color":"#000"},{open:t(()=>[...o[27]||(o[27]=[l("open",-1)])]),close:t(()=>[...o[28]||(o[28]=[l("close",-1)])]),_:1},8,["modelValue"])]),E(c,null,{desc:t(()=>[...o[29]||(o[29]=[])]),highlight:t(()=>[...o[30]||(o[30]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," open-color"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"#f00"'),s("span",{style:{color:"#B392F0"}}," close-color"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"#000"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"open"),s("span",{style:{color:"#E1E4E8"}},">open</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"close"),s("span",{style:{color:"#E1E4E8"}},">close</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            switchs: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[31]||(o[31]=[])]),default:t(()=>[o[32]||(o[32]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" open-color="#f00" close-color="#000">
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[65]||(o[65]=s("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%87%E6%8D%A2%E5%9B%BE%E6%A0%87",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%87%E6%8D%A2%E5%9B%BE%E6%A0%87"},"#"),l(" 自定义切换图标")],-1)),o[66]||(o[66]=s("p",null,[l("使用 "),s("code",null,"open-icon"),l(" 和 "),s("code",null,"close-icon")],-1)),s("div",f,[E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[5]||(o[5]=e=>n.switchs=e),"open-icon":"#f00","close-icon":"#000"},{open:t(()=>[...o[33]||(o[33]=[l("open",-1)])]),close:t(()=>[...o[34]||(o[34]=[l("close",-1)])]),_:1},8,["modelValue"])]),E(c,null,{desc:t(()=>[...o[35]||(o[35]=[])]),highlight:t(()=>[...o[36]||(o[36]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," open-icon"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"#f00"'),s("span",{style:{color:"#B392F0"}}," close-icon"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"#000"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"open"),s("span",{style:{color:"#E1E4E8"}},">open</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"close"),s("span",{style:{color:"#E1E4E8"}},">close</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            switchs: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[37]||(o[37]=[])]),default:t(()=>[o[38]||(o[38]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" open-icon="#f00" close-icon="#000">
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[67]||(o[67]=s("h2",{id:"%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81"},"#"),l(" 加载状态")],-1)),o[68]||(o[68]=s("p",null,"设置loading属性，接受一个Boolean，设置true即加载中状态。",-1)),s("div",A,[E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[6]||(o[6]=e=>n.switchs=e),loading:""},{open:t(()=>[...o[39]||(o[39]=[l("open",-1)])]),close:t(()=>[...o[40]||(o[40]=[l("close",-1)])]),_:1},8,["modelValue"])]),E(c,null,{desc:t(()=>[...o[41]||(o[41]=[])]),highlight:t(()=>[...o[42]||(o[42]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," loading"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"open"),s("span",{style:{color:"#E1E4E8"}},">open</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"close"),s("span",{style:{color:"#E1E4E8"}},">close</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            switchs: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[43]||(o[43]=[])]),default:t(()=>[o[44]||(o[44]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" loading>
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[69]||(o[69]=s("h2",{id:"%E9%98%BB%E6%AD%A2%E5%88%87%E6%8D%A2",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E9%98%BB%E6%AD%A2%E5%88%87%E6%8D%A2"},"#"),l(" 阻止切换")],-1)),o[70]||(o[70]=s("p",null,[l("使用 "),s("code",null,"before-change")],-1)),s("div",k,[E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[7]||(o[7]=e=>n.switchs=e),"open-color":"#f00","close-color":"#000","before-change":d.beforeChange},{open:t(()=>[...o[45]||(o[45]=[l("open",-1)])]),close:t(()=>[...o[46]||(o[46]=[l("close",-1)])]),_:1},8,["modelValue","before-change"])]),E(c,null,{desc:t(()=>[...o[47]||(o[47]=[])]),highlight:t(()=>[...o[48]||(o[48]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," open-color"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"#f00"'),s("span",{style:{color:"#B392F0"}}," close-color"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"#000"'),s("span",{style:{color:"#B392F0"}}," :before-change"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"beforeChange"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"open"),s("span",{style:{color:"#E1E4E8"}},">open</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"close"),s("span",{style:{color:"#E1E4E8"}},">close</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            switchs: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        beforeChange"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"            return"),s("span",{style:{color:"#F97583"}}," new"),s("span",{style:{color:"#79B8FF"}}," Promise"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"resolve"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"                this"),s("span",{style:{color:"#E1E4E8"}},".$messageBox."),s("span",{style:{color:"#B392F0"}},"confirm"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'这是一段内容'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'标题名称'"),s("span",{style:{color:"#E1E4E8"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  yesBtnText: "),s("span",{style:{color:"#9ECBFF"}},"'确定'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                })."),s("span",{style:{color:"#B392F0"}},"then"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"res"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"                    this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"success"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"`action: ${"),s("span",{style:{color:"#E1E4E8"}}," res"),s("span",{style:{color:"#9ECBFF"}}," }`"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    resolve"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[49]||(o[49]=[])]),default:t(()=>[o[50]||(o[50]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-switch v-model="switchs" open-color="#f00" close-color="#000" :before-change="beforeChange">
            <template #open>open</template>
            <template #close>close</template>
        </zmz-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    },
    methods: {
        beforeChange() {
            return new Promise((resolve) => {
                this.$messageBox.confirm('这是一段内容', '标题名称', {
                  yesBtnText: '确定'
                }).then((res) => {
                    this.$message.success(\`action: \${ res }\`);
                    resolve()
                });
            })
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[71]||(o[71]=s("h2",{id:"%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8"},"#"),l(" 不同尺寸")],-1)),o[72]||(o[72]=s("p",null,"提供多种尺寸",-1)),s("div",C,[E(y,{mode:"vertical"},{default:t(()=>[E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[8]||(o[8]=e=>n.switchs=e),size:"large"},null,8,["modelValue"]),E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[9]||(o[9]=e=>n.switchs=e),size:"medium"},null,8,["modelValue"]),E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[10]||(o[10]=e=>n.switchs=e),size:"default"},null,8,["modelValue"]),E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[11]||(o[11]=e=>n.switchs=e),size:"small"},null,8,["modelValue"]),E(a,{modelValue:n.switchs,"onUpdate:modelValue":o[12]||(o[12]=e=>n.switchs=e),size:"mini"},null,8,["modelValue"])]),_:1})]),E(c,null,{desc:t(()=>[...o[51]||(o[51]=[])]),highlight:t(()=>[...o[52]||(o[52]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#B392F0"}}," mode"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"vertical"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"large"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"medium"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"default"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"small"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"switchs"'),s("span",{style:{color:"#B392F0"}}," size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"mini"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-switch"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            switchs: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[53]||(o[53]=[])]),default:t(()=>[o[54]||(o[54]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-switch v-model="switchs" size="large"></zmz-switch>
            <zmz-switch v-model="switchs" size="medium"></zmz-switch>
            <zmz-switch v-model="switchs" size="default"></zmz-switch>
            <zmz-switch v-model="switchs" size="small"></zmz-switch>
            <zmz-switch v-model="switchs" size="mini"></zmz-switch>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchs: true
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[73]||(o[73]=u('<h2 id="switch-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#switch-%E5%B1%9E%E6%80%A7">#</a> Switch 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定显示参数</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>open-value</td><td>选中时的值</td><td>String/Number/Boolean</td><td>—</td><td>true</td></tr><tr><td>close-value</td><td>未选中时的值</td><td>String/Number/Boolean</td><td>—</td><td>false</td></tr><tr><td>open-color</td><td>选中时的背景色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>close-color</td><td>未选中时的背景色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>open-border-color</td><td>选中时的边线颜色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>close-border-color</td><td>未选中时的边线颜色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>open-icon</td><td>选中时的图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>close-icon</td><td>未选中时的图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>open-icon-color</td><td>选中时的图标背景色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>close-icon-color</td><td>未选中时的图标背景色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>open-dot-color</td><td>选中时的dot背景色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>close-dot-color</td><td>未选中时的dot背景色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>width</td><td>滑动槽宽度</td><td>String/Number</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>加载状态</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>before-change</td><td>切换之前</td><td>Function</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="switch-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#switch-%E6%96%B9%E6%B3%95">#</a> Switch 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>绑定显示参数</td><td>value</td></tr></tbody></table></div><h2 id="switch-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#switch-%E6%8F%92%E6%A7%BD">#</a> Switch 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td>打开文字插槽</td></tr><tr><td>close</td><td>关闭文字插槽</td></tr></tbody></table></div><h2 id="switch-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#switch-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Switch 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-switch-width</td><td>–zmz-switch-width</td><td>44px</td><td>宽度</td></tr><tr><td>@zmz-switch-height</td><td>–zmz-switch-height</td><td>22px</td><td>高度</td></tr><tr><td>@zmz-switch-dot-width</td><td>–zmz-switch-dot-width</td><td>18px</td><td>dot宽度</td></tr><tr><td>@zmz-switch-dot-height</td><td>–zmz-switch-dot-height</td><td>18px</td><td>dot高度</td></tr><tr><td>@zmz-switch-font-size</td><td>–zmz-switch-font-size</td><td>12px</td><td>字体大小</td></tr><tr><td>@zmz-switch-background-color</td><td>–zmz-switch-background-color</td><td>#b7bec6</td><td>背景颜色</td></tr><tr><td>@zmz-switch-active-background-color</td><td>–zmz-switch-active-background-color</td><td>确认主题颜色</td><td>激活背景颜色</td></tr><tr><td>@zmz-switch-border-radius</td><td>–zmz-switch-border-radius</td><td>13px</td><td>边线圆角</td></tr><tr><td>@zmz-switch-border-color</td><td>–zmz-switch-border-color</td><td>#b7bec6</td><td>边线颜色</td></tr><tr><td>@zmz-switch-active-border-color</td><td>–zmz-switch-active-border-color</td><td>确认主题颜色</td><td>激活边线颜色</td></tr></tbody></table></div>',8))])}const N=m(w,[["render",x]]);export{N as default};
