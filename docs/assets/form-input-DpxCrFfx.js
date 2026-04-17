import{_ as z,c as u,a as l,b as s,e as n,w as o,d as F,r as i,o as B}from"./index-Bfn7SEZ2.js";const x={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},methods:{currentConfig(r){return this.$setting.currentConfig[r]},onBlur(r){console.log("失去焦点",r)},onFocus(r){console.log("获取焦点",r)},onChange(r){console.log("发生改变",r)}},data(){return{title:"Input 输入框"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),input:"",input2:["标签一","标签二","标签三"]}}},f={class:"zmz-markdown-article"},D={class:"demo-block"},h={class:"demo-block"},C={class:"demo-block"},b={class:"demo-block"},v={class:"demo-block"},w={class:"demo-block"},g={class:"demo-block"},k={class:"demo-block"};function A(r,t,V,U,e,y){const a=i("zmz-input"),c=i("demo-block"),E=i("zmz-space-item"),d=i("zmz-space"),m=i("zmz-select");return B(),u("div",f,[t[58]||(t[58]=l("h1",{id:"input-%E8%BE%93%E5%85%A5%E6%A1%86",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#input-%E8%BE%93%E5%85%A5%E6%A1%86"},"#"),s(" Input 输入框")],-1)),t[59]||(t[59]=l("hr",null,null,-1)),t[60]||(t[60]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),l("div",D,[n(a,{modelValue:e.input,"onUpdate:modelValue":t[0]||(t[0]=p=>e.input=p),onOnChange:y.onChange,placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue","onOnChange"])]),n(c,null,{desc:o(()=>[...t[18]||(t[18]=[])]),highlight:o(()=>[...t[19]||(t[19]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[20]||(t[20]=[])]),default:o(()=>[t[21]||(t[21]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-input v-model="input" placeholder="请输入内容" style="width:200px;"></zmz-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
<\/script>
`)],-1))]),_:1}),t[61]||(t[61]=l("h2",{id:"%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81"},"#"),s(" 禁用只读状态")],-1)),t[62]||(t[62]=l("p",null,[s("添加属性 "),l("code",null,"disabled"),s("禁用， "),l("code",null,"readonly"),s("只读")],-1)),l("div",h,[n(d,null,{default:o(()=>[n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[1]||(t[1]=p=>e.input=p),disabled:"",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[2]||(t[2]=p=>e.input=p),readonly:"",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),_:1})]),_:1})]),n(c,null,{desc:o(()=>[...t[22]||(t[22]=[])]),highlight:o(()=>[...t[23]||(t[23]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[24]||(t[24]=[])]),default:o(()=>[t[25]||(t[25]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-input v-model="input" disabled placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" readonly placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
<\/script>
`)],-1))]),_:1}),t[63]||(t[63]=l("h2",{id:"%E5%8F%AF%E6%B8%85%E7%A9%BA",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8F%AF%E6%B8%85%E7%A9%BA"},"#"),s(" 可清空")],-1)),t[64]||(t[64]=l("p",null,[s("添加属性 "),l("code",null,"clearbtn")],-1)),l("div",C,[n(a,{modelValue:e.input,"onUpdate:modelValue":t[3]||(t[3]=p=>e.input=p),clearbtn:"",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),n(c,null,{desc:o(()=>[...t[26]||(t[26]=[])]),highlight:o(()=>[...t[27]||(t[27]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[28]||(t[28]=[])]),default:o(()=>[t[29]||(t[29]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-input v-model="input" clearbtn placeholder="请输入内容" style="width:200px;"></zmz-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
<\/script>
`)],-1))]),_:1}),t[65]||(t[65]=l("h2",{id:"%E5%AF%86%E7%A0%81%E6%A1%86",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%AF%86%E7%A0%81%E6%A1%86"},"#"),s(" 密码框")],-1)),t[66]||(t[66]=l("p",null,[s("添加属性 "),l("code",null,"type=password")],-1)),l("div",b,[n(a,{modelValue:e.input,"onUpdate:modelValue":t[4]||(t[4]=p=>e.input=p),type:"password",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),n(c,null,{desc:o(()=>[...t[30]||(t[30]=[])]),highlight:o(()=>[...t[31]||(t[31]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"password"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[32]||(t[32]=[])]),default:o(()=>[t[33]||(t[33]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-input v-model="input" type="password" placeholder="请输入内容" style="width:200px;"></zmz-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
<\/script>
`)],-1))]),_:1}),t[67]||(t[67]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87"},"#"),s(" 自定义图标")],-1)),t[68]||(t[68]=l("p",null,[s("添加属性 "),l("code",null,"suffix-icon"),s(","),l("code",null,"prefix-icon"),s("配置前后缀图标或使用"),l("code",null,"slot"),s("方式自定义图标内容")],-1)),l("div",v,[n(d,{class:"zmz-mb-20"},{default:o(()=>[n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[5]||(t[5]=p=>e.input=p),type:"text","suffix-icon":"zmz-icon--search",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[6]||(t[6]=p=>e.input=p),type:"text","prefix-icon":"zmz-icon--search",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),_:1})]),_:1}),n(d,null,{default:o(()=>[n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[7]||(t[7]=p=>e.input=p),type:"text","suffix-icon":"zmz-icon--search",placeholder:"请输入内容",style:{width:"200px"}},{suffix:o(()=>[...t[34]||(t[34]=[l("i",{class:"zmz-icon--home"},null,-1)])]),prefix:o(()=>[...t[35]||(t[35]=[l("i",{class:"zmz-icon--search"},null,-1)])]),_:1},8,["modelValue"])]),_:1}),n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[8]||(t[8]=p=>e.input=p),type:"text","suffix-icon":"zmz-icon--search",placeholder:"请输入内容",style:{width:"200px"}},{suffix:o(()=>[...t[36]||(t[36]=[l("i",{class:"zmz-icon--setup"},null,-1)])]),prefix:o(()=>[...t[37]||(t[37]=[l("i",{class:"zmz-icon--search"},null,-1)])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),n(c,null,{desc:o(()=>[...t[38]||(t[38]=[])]),highlight:o(()=>[...t[39]||(t[39]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-mb-20"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text"'),l("span",{style:{color:"#B392F0"}}," suffix-icon"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--search"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text"'),l("span",{style:{color:"#B392F0"}}," prefix-icon"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--search"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text"'),l("span",{style:{color:"#B392F0"}}," suffix-icon"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--search"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"suffix"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--home"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"prefix"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--search"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text"'),l("span",{style:{color:"#B392F0"}}," suffix-icon"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--search"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"suffix"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--setup"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"prefix"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--search"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[40]||(t[40]=[])]),default:o(()=>[t[41]||(t[41]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space class="zmz-mb-20">
            <zmz-space-item>
                <zmz-input v-model="input" type="text" suffix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" type="text" prefix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
        </zmz-space>
        <zmz-space>
            <zmz-space-item>
                <zmz-input v-model="input" type="text" suffix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;">
                    <template #suffix>
                        <i class="zmz-icon--home"></i>
                    </template>
                    <template #prefix>
                        <i class="zmz-icon--search"></i>
                    </template>
                </zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" type="text" suffix-icon="zmz-icon--search" placeholder="请输入内容" style="width:200px;">
                    <template #suffix>
                        <i class="zmz-icon--setup"></i>
                    </template>
                    <template #prefix>
                        <i class="zmz-icon--search"></i>
                    </template>
                </zmz-input>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
<\/script>
`)],-1))]),_:1}),t[69]||(t[69]=l("h2",{id:"%E5%A4%8D%E5%90%88%E5%9E%8B%E8%BE%93%E5%85%A5%E6%A1%86",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%A4%8D%E5%90%88%E5%9E%8B%E8%BE%93%E5%85%A5%E6%A1%86"},"#"),s(" 复合型输入框")],-1)),t[70]||(t[70]=l("p",null,[s("添加插槽 "),l("code",null,"prepend"),s(","),l("code",null,"append"),s("配置内容")],-1)),l("div",w,[n(d,{mode:"vertical"},{default:o(()=>[n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[9]||(t[9]=p=>e.input=p),type:"text",placeholder:"请输入内容",style:{width:"100%"}},{prepend:o(()=>[...t[42]||(t[42]=[s("Http://",-1)])]),append:o(()=>[...t[43]||(t[43]=[l("i",{class:"zmz-icon--search"},null,-1)])]),_:1},8,["modelValue"])]),_:1}),n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[10]||(t[10]=p=>e.input=p),type:"text",placeholder:"请输入内容",style:{width:"100%"}},{append:o(()=>[...t[44]||(t[44]=[s(".com",-1)])]),_:1},8,["modelValue"])]),_:1}),n(E,null,{default:o(()=>[n(a,{"prepend-padding":0,modelValue:e.input,"onUpdate:modelValue":t[11]||(t[11]=p=>e.input=p),type:"text",placeholder:"请输入内容",style:{width:"100%"}},{prepend:o(()=>[n(m,{style:{margin:"-1px -1px -1px -1px",width:"100px"},placeholder:"请选择"})]),append:o(()=>[...t[45]||(t[45]=[l("i",{class:"zmz-icon--search"},null,-1)])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),n(c,null,{desc:o(()=>[...t[46]||(t[46]=[])]),highlight:o(()=>[...t[47]||(t[47]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:100%;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"prepend"),l("span",{style:{color:"#E1E4E8"}},">Http://</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"append"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--search"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:100%;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"append"),l("span",{style:{color:"#E1E4E8"}},">.com</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," prepend-padding"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"0"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:100%;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"prepend"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin: -1px -1px -1px -1px; width:100px;"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"append"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--search"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[48]||(t[48]=[])]),default:o(()=>[t[49]||(t[49]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-input v-model="input" type="text" placeholder="请输入内容" style="width:100%;">
                    <template #prepend>Http://</template>
                    <template #append>
                        <i class="zmz-icon--search"></i>
                    </template>
                </zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" type="text" placeholder="请输入内容" style="width:100%;">
                    <template #append>.com</template>
                </zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input prepend-padding="0" v-model="input" type="text" placeholder="请输入内容" style="width:100%;">
                    <template #prepend>
                        <zmz-select style="margin: -1px -1px -1px -1px; width:100px;" placeholder="请选择">
                        </zmz-select>
                    </template>
                    <template #append>
                        <i class="zmz-icon--search"></i>
                    </template>
                </zmz-input>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
<\/script>
`)],-1))]),_:1}),t[71]||(t[71]=l("h2",{id:"%E8%BE%93%E5%85%A5%E9%99%90%E5%88%B6",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%BE%93%E5%85%A5%E9%99%90%E5%88%B6"},"#"),s(" 输入限制")],-1)),t[72]||(t[72]=l("p",null,[s("添加属性 "),l("code",null,"show-word-limit"),s("开启统计,"),l("code",null,"maxlength"),s("设置限制字数")],-1)),l("div",g,[n(a,{modelValue:e.input,"onUpdate:modelValue":t[12]||(t[12]=p=>e.input=p),type:"text","show-word-limit":"",maxlength:10,placeholder:"请输入内容",style:{width:"100%"}},null,8,["modelValue"])]),n(c,null,{desc:o(()=>[...t[50]||(t[50]=[])]),highlight:o(()=>[...t[51]||(t[51]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text"'),l("span",{style:{color:"#B392F0"}}," show-word-limit"),l("span",{style:{color:"#B392F0"}}," :maxlength"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"10"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:100%;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[52]||(t[52]=[])]),default:o(()=>[t[53]||(t[53]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-input v-model="input" type="text" show-word-limit :maxlength="10" placeholder="请输入内容" style="width:100%;"></zmz-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
<\/script>
`)],-1))]),_:1}),t[73]||(t[73]=l("h2",{id:"%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8"},"#"),s(" 不同尺寸")],-1)),t[74]||(t[74]=l("p",null,"Input 组件提供除了默认值以外的四种尺寸，可以在不同场景下选择合适的按钮尺寸。",-1)),l("div",k,[n(d,{mode:"vertical"},{default:o(()=>[n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[13]||(t[13]=p=>e.input=p),size:"large",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[14]||(t[14]=p=>e.input=p),size:"medium",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[15]||(t[15]=p=>e.input=p),size:"default",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[16]||(t[16]=p=>e.input=p),size:"small",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),n(E,null,{default:o(()=>[n(a,{modelValue:e.input,"onUpdate:modelValue":t[17]||(t[17]=p=>e.input=p),size:"mini",placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"])]),_:1})]),_:1})]),n(c,null,{desc:o(()=>[...t[54]||(t[54]=[])]),highlight:o(()=>[...t[55]||(t[55]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入内容"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[56]||(t[56]=[])]),default:o(()=>[t[57]||(t[57]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-input v-model="input" size="large" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" size="medium" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" size="default" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" size="small" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-input v-model="input" size="mini" placeholder="请输入内容" style="width:200px;"></zmz-input>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            };
        }
    }
<\/script>
`)],-1))]),_:1}),t[75]||(t[75]=F('<h2 id="input-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#input-%E5%B1%9E%E6%80%A7">#</a> Input 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>输入框值</td><td>String/Array</td><td>—</td><td>—</td></tr><tr><td>type</td><td>文本显示类型</td><td>String</td><td>text/password, 原生type</td><td>text</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td></tr><tr><td>name</td><td>input 的 name 属性</td><td>String</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>readonly</td><td>只读</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>clearbtn</td><td>清空按钮</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>placeholder</td><td>输入时需要显示的提示文案, (为空,默认继承Form-item中的label属性)</td><td>String</td><td>—</td><td>—</td></tr><tr><td>toggle-password-btn</td><td>type=“password” 是否显示隐藏密码图标</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>focus-border</td><td>是否显示激活状态</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>autocomplete</td><td>原生属性，自动补全</td><td>—</td><td>on, off</td><td>off</td></tr><tr><td>autofocus</td><td>原生属性，自动获取焦点</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>prefix</td><td>是否强制显示前缀图标</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>suffix</td><td>是否强制显示后缀图标</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>prefix-icon</td><td>更换添加前缀图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>suffix-icon</td><td>更换添加后缀图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>prefix-class</td><td>前缀自定义class</td><td>String</td><td>—</td><td>—</td></tr><tr><td>prefix-style</td><td>前缀自定义style</td><td>String</td><td>—</td><td>—</td></tr><tr><td>prefix-padding</td><td>前缀自定义padding</td><td>Number</td><td>—</td><td>20</td></tr><tr><td>suffix-class</td><td>后缀自定义class</td><td>String</td><td>—</td><td>—</td></tr><tr><td>suffix-style</td><td>后缀自定义style</td><td>String</td><td>—</td><td>—</td></tr><tr><td>suffix-padding</td><td>后缀自定义padding</td><td>Number</td><td>—</td><td>20</td></tr><tr><td>maxlength</td><td>最大值</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>show-word-limit</td><td>显示字数统计</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="input-%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#input-%E4%BA%8B%E4%BB%B6">#</a> Input 事件</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-change</td><td>在 Input 发生变化时触发</td><td>value值</td></tr><tr><td>on-focus</td><td>在 Input 获取焦点时触发</td><td>value值</td></tr><tr><td>on-blur</td><td>在 Input 失去焦点时触发</td><td>value值</td></tr><tr><td>on-password-switch</td><td>在 密码框切换时触发</td><td>type值</td></tr><tr><td>on-clear</td><td>input清空时触发</td><td>—</td></tr><tr><td>on-prefix-icon</td><td>点击前缀图标</td><td>—</td></tr><tr><td>on-suffix-icon</td><td>点击后缀图标</td><td>—</td></tr></tbody></table></div><h2 id="input-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#input-%E6%8F%92%E6%A7%BD">#</a> Input 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>prefix</td><td>前缀插槽</td></tr><tr><td>suffix</td><td>后缀插槽</td></tr><tr><td>prepend</td><td>前置内容插槽</td></tr><tr><td>append</td><td>后置内容插槽</td></tr></tbody></table></div><h2 id="input-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#input-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Input 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-input-height</td><td>–zmz-input-height</td><td>32px</td><td>高度</td></tr><tr><td>@zmz-input-background-color</td><td>–zmz-input-background-color</td><td>#fff</td><td>背景颜色</td></tr><tr><td>@zmz-input-padding</td><td>–zmz-input-padding</td><td>8px</td><td>内边距</td></tr><tr><td>@zmz-input-font-size</td><td>–zmz-input-font-size</td><td>14px</td><td>字体大小</td></tr><tr><td>@zmz-input-text-color</td><td>–zmz-input-text-color</td><td>默认主题颜色</td><td>字体颜色</td></tr><tr><td>@zmz-input-placeholder-color</td><td>–zmz-input-placeholder-color</td><td>#99a4b2</td><td>占位符颜色</td></tr><tr><td>@zmz-input-border-radius</td><td>–zmz-input-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-input-border-color</td><td>–zmz-input-border-color</td><td>#e3e6ef</td><td>默认边线颜色</td></tr><tr><td>@zmz-input-border-hover-color</td><td>–zmz-input-border-hover-color</td><td>#d2d5dc</td><td>滑过边线颜色</td></tr><tr><td>@zmz-input-border-active-color</td><td>–zmz-input-border-active-color</td><td>确认主题颜色</td><td>激活边线颜色</td></tr><tr><td>@zmz-input-suffix-text-color</td><td>–zmz-input-suffix-text-color</td><td>#8794a5</td><td>后缀文字颜色</td></tr><tr><td>@zmz-input-suffix-icon-color</td><td>–zmz-input-suffix-icon-color</td><td>#8794a5</td><td>后缀图标颜色</td></tr><tr><td>@zmz-input-suffix-icon-size</td><td>–zmz-input-suffix-icon-size</td><td>14px</td><td>后缀图标大小</td></tr><tr><td>@zmz-input-suffix-text-font-size</td><td>–zmz-input-suffix-text-font-size</td><td>14px</td><td>后缀字体大小</td></tr><tr><td>@zmz-input-prefix-icon-color</td><td>–zmz-input-prefix-icon-color</td><td>#8794a5</td><td>前缀图标颜色</td></tr><tr><td>@zmz-input-prefix-icon-size</td><td>–zmz-input-prefix-icon-size</td><td>14px</td><td>前缀图标大小</td></tr><tr><td>@zmz-input-prepend-background-color</td><td>–zmz-input-prepend-background-color</td><td>#f5f7fa</td><td>前置背景颜色</td></tr><tr><td>@zmz-input-prepend-border-color</td><td>–zmz-input-prepend-border-color</td><td>#dcdfe6</td><td>前置编写颜色</td></tr><tr><td>@zmz-input-prepend-text-color</td><td>–zmz-input-prepend-text-color</td><td>#909399</td><td>前置文字颜色</td></tr><tr><td>@zmz-input-append-background-color</td><td>–zmz-input-append-background-color</td><td>#f5f7fa</td><td>后置背景颜色</td></tr><tr><td>@zmz-input-append-border-color</td><td>–zmz-input-append-border-color</td><td>#dcdfe6</td><td>后置编写颜色</td></tr><tr><td>@zmz-input-append-text-color</td><td>–zmz-input-append-text-color</td><td>#909399</td><td>后置文字颜色</td></tr></tbody></table></div>',8))])}const S=z(x,[["render",A]]);export{S as default};
