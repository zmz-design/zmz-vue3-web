import{_ as m,c as F,a as l,b as s,e as a,w as e,d as u,r as d,o as B}from"./index-DyRJxyCP.js";const b={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Radio 单选框"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),radio:!0,data:"A"}},methods:{currentConfig(i){return this.$setting.currentConfig[i]},onChange(i){console.log(i)}}},v={class:"zmz-markdown-article"},C={class:"demo-block"},D={class:"demo-block"},g={class:"demo-block"},A={class:"demo-block"},f={class:"demo-block"},V={class:"demo-block"},k={class:"demo-block"},x={class:"demo-block"},U={class:"demo-block"};function w(i,o,R,S,E,z){const n=d("zmz-radio"),y=d("demo-block"),r=d("zmz-radio-group"),p=d("zmz-space"),c=d("zmz-space-item");return B(),F("div",v,[o[102]||(o[102]=l("h1",{id:"radio-%E5%8D%95%E9%80%89%E6%A1%86",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#radio-%E5%8D%95%E9%80%89%E6%A1%86"},"#"),s(" Radio 单选框")],-1)),o[103]||(o[103]=l("hr",null,null,-1)),o[104]||(o[104]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),o[105]||(o[105]=l("p",null,"在一组选项中进行单选",-1)),l("div",C,[a(n,{modelValue:E.radio,"onUpdate:modelValue":o[0]||(o[0]=t=>E.radio=t),onOnChange:z.onChange,label:"单选项",value:!0},null,8,["modelValue","onOnChange"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[1]||(o[1]=t=>E.radio=t),onOnChange:z.onChange,label:"单选项",value:!1},null,8,["modelValue","onOnChange"])]),a(y,null,{desc:e(()=>[...o[42]||(o[42]=[])]),highlight:e(()=>[...o[43]||(o[43]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," @on-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onChange"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选项"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"true"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," @on-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onChange"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选项"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            radio: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[44]||(o[44]=[])]),default:e(()=>[o[45]||(o[45]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-radio v-model="radio" @on-change="onChange" label="单选项" :value="true"></zmz-radio>
        <zmz-radio v-model="radio" @on-change="onChange" label="单选项" :value="false"></zmz-radio>
    </div>
</template>
<script>
export default {
    data () {
        return {
            radio: true,
        }
    }
}
<\/script>

`)],-1))]),_:1}),o[106]||(o[106]=l("h2",{id:"%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81"},"#"),s(" 禁用只读状态")],-1)),o[107]||(o[107]=l("p",null,[s("添加属性 "),l("code",null,"disabled"),s(" 或 "),l("code",null,"readonly")],-1)),l("div",D,[a(n,{modelValue:E.radio,"onUpdate:modelValue":o[2]||(o[2]=t=>E.radio=t),label:"单选项",value:!0,disabled:""},{default:e(()=>[...o[46]||(o[46]=[s("禁用单选项",-1)])]),_:1},8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[3]||(o[3]=t=>E.radio=t),label:"单选项",value:!1,disabled:""},{default:e(()=>[...o[47]||(o[47]=[s("禁用单选项",-1)])]),_:1},8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[4]||(o[4]=t=>E.radio=t),label:"单选项",value:!0,readonly:""},{default:e(()=>[...o[48]||(o[48]=[s("只读单选项",-1)])]),_:1},8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[5]||(o[5]=t=>E.radio=t),label:"单选项",value:!1,readonly:""},{default:e(()=>[...o[49]||(o[49]=[s("只读单选项",-1)])]),_:1},8,["modelValue"])]),a(y,null,{desc:e(()=>[...o[50]||(o[50]=[])]),highlight:e(()=>[...o[51]||(o[51]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选项"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"true"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#E1E4E8"}},">禁用单选项</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选项"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#E1E4E8"}},">禁用单选项</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选项"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"true"'),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#E1E4E8"}},">只读单选项</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选项"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#E1E4E8"}},">只读单选项</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            radio: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[52]||(o[52]=[])]),default:e(()=>[o[53]||(o[53]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-radio v-model="radio" label="单选项" :value="true" disabled>禁用单选项</zmz-radio>
        <zmz-radio v-model="radio" label="单选项" :value="false" disabled>禁用单选项</zmz-radio>
        <zmz-radio v-model="radio" label="单选项" :value="true" readonly>只读单选项</zmz-radio>
        <zmz-radio v-model="radio" label="单选项" :value="false" readonly>只读单选项</zmz-radio>
    </div>
</template>
<script>
export default {
    data () {
        return {
            radio: true,
        }
    }
}
<\/script>

`)],-1))]),_:1}),o[108]||(o[108]=l("h2",{id:"%E5%8D%95%E9%80%89%E6%A1%86%E7%BB%84",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8D%95%E9%80%89%E6%A1%86%E7%BB%84"},"#"),s(" 单选框组")],-1)),o[109]||(o[109]=l("p",null,"在组选项中进行单选",-1)),l("div",g,[a(r,{modelValue:E.data,"onUpdate:modelValue":o[6]||(o[6]=t=>E.data=t),onOnChange:z.onChange},{default:e(()=>[a(n,{label:"单选框组A",value:"A"},{default:e(()=>[...o[54]||(o[54]=[s("单选框组A",-1)])]),_:1}),a(n,{label:"单选框组B",value:"B"},{default:e(()=>[...o[55]||(o[55]=[s("单选框组B",-1)])]),_:1}),a(n,{label:"单选框组C",value:"C"},{default:e(()=>[...o[56]||(o[56]=[s("单选框组C",-1)])]),_:1})]),_:1},8,["modelValue","onOnChange"])]),a(y,null,{desc:e(()=>[...o[57]||(o[57]=[])]),highlight:e(()=>[...o[58]||(o[58]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"A"'),l("span",{style:{color:"#E1E4E8"}},">单选框组A</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"B"'),l("span",{style:{color:"#E1E4E8"}},">单选框组B</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"C"'),l("span",{style:{color:"#E1E4E8"}},">单选框组C</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'A'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[59]||(o[59]=[])]),default:e(()=>[o[60]||(o[60]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-radio-group v-model="data">
            <zmz-radio label="单选框组A" value="A">单选框组A</zmz-radio>
            <zmz-radio label="单选框组B" value="B">单选框组B</zmz-radio>
            <zmz-radio label="单选框组C" value="C">单选框组C</zmz-radio>
        </zmz-radio-group>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: 'A'
        }
    }
}
<\/script>

`)],-1))]),_:1}),o[110]||(o[110]=l("h2",{id:"%E5%8D%95%E9%80%89%E6%A1%86%E7%BB%84%E7%A6%81%E7%94%A8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8D%95%E9%80%89%E6%A1%86%E7%BB%84%E7%A6%81%E7%94%A8"},"#"),s(" 单选框组禁用")],-1)),o[111]||(o[111]=l("p",null,[s("添加属性 "),l("code",null,"disabled")],-1)),l("div",A,[a(p,{title:"选项禁用"},{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[7]||(o[7]=t=>E.data=t)},{default:e(()=>[a(n,{label:"单选框组A",value:"A",disabled:""},{default:e(()=>[...o[61]||(o[61]=[s("单选框组A",-1)])]),_:1}),a(n,{label:"单选框组B",value:"B"},{default:e(()=>[...o[62]||(o[62]=[s("单选框组B",-1)])]),_:1}),a(n,{label:"单选框组C",value:"C"},{default:e(()=>[...o[63]||(o[63]=[s("单选框组C",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(p,{title:"组禁用"},{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[8]||(o[8]=t=>E.data=t),disabled:""},{default:e(()=>[a(n,{label:"单选框组A",value:"A"},{default:e(()=>[...o[64]||(o[64]=[s("单选框组A",-1)])]),_:1}),a(n,{label:"单选框组B",value:"B"},{default:e(()=>[...o[65]||(o[65]=[s("单选框组B",-1)])]),_:1}),a(n,{label:"单选框组C",value:"C"},{default:e(()=>[...o[66]||(o[66]=[s("单选框组C",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),a(y,null,{desc:e(()=>[...o[67]||(o[67]=[])]),highlight:e(()=>[...o[68]||(o[68]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项禁用"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"A"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#E1E4E8"}},">单选框组A</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"B"'),l("span",{style:{color:"#E1E4E8"}},">单选框组B</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"C"'),l("span",{style:{color:"#E1E4E8"}},">单选框组C</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"组禁用"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"A"'),l("span",{style:{color:"#E1E4E8"}},">单选框组A</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"B"'),l("span",{style:{color:"#E1E4E8"}},">单选框组B</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"C"'),l("span",{style:{color:"#E1E4E8"}},">单选框组C</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'A'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[69]||(o[69]=[])]),default:e(()=>[o[70]||(o[70]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="选项禁用">
            <zmz-radio-group v-model="data">
                <zmz-radio label="单选框组A" value="A" disabled>单选框组A</zmz-radio>
                <zmz-radio label="单选框组B" value="B">单选框组B</zmz-radio>
                <zmz-radio label="单选框组C" value="C">单选框组C</zmz-radio>
            </zmz-radio-group>
        </zmz-space>
        <zmz-space title="组禁用">
            <zmz-radio-group v-model="data" disabled>
                <zmz-radio label="单选框组A" value="A">单选框组A</zmz-radio>
                <zmz-radio label="单选框组B" value="B">单选框组B</zmz-radio>
                <zmz-radio label="单选框组C" value="C">单选框组C</zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: 'A'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[112]||(o[112]=l("h2",{id:"%E8%BE%B9%E6%A1%86",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%BE%B9%E6%A1%86"},"#"),s(" 边框")],-1)),o[113]||(o[113]=l("p",null,[s("添加属性 "),l("code",null,"border")],-1)),l("div",f,[a(p,{title:"选项边框"},{default:e(()=>[a(n,{modelValue:E.data,"onUpdate:modelValue":o[9]||(o[9]=t=>E.data=t),disabled:"",label:"单选框组A",value:"1",border:""},{default:e(()=>[...o[71]||(o[71]=[s("单选框组A",-1)])]),_:1},8,["modelValue"])]),_:1}),a(p,{title:"组边框"},{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[10]||(o[10]=t=>E.data=t)},{default:e(()=>[a(n,{label:"单选框组A",value:"1",disabled:"",border:""},{default:e(()=>[...o[72]||(o[72]=[s("单选框组A",-1)])]),_:1}),a(n,{label:"单选框组B",value:"2",border:""},{default:e(()=>[...o[73]||(o[73]=[s("单选框组B",-1)])]),_:1}),a(n,{label:"单选框组C",value:"3",border:""},{default:e(()=>[...o[74]||(o[74]=[s("单选框组C",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),a(y,null,{desc:e(()=>[...o[75]||(o[75]=[])]),highlight:e(()=>[...o[76]||(o[76]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">单选框组A</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"组边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">单选框组A</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">单选框组B</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">单选框组C</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'1'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[77]||(o[77]=[])]),default:e(()=>[o[78]||(o[78]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-radio v-model="data" disabled label="单选框组A" value="1" border>单选框组A</zmz-radio>
        </zmz-space>
        <zmz-space title="组边框">
            <zmz-radio-group v-model="data">
                <zmz-radio label="单选框组A" value="1" disabled border>单选框组A</zmz-radio>
                <zmz-radio label="单选框组B" value="2" border>单选框组B</zmz-radio>
                <zmz-radio label="单选框组C" value="3" border>单选框组C</zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '1'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[114]||(o[114]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9"},"#"),s(" 自定义内容")],-1)),o[115]||(o[115]=l("p",null,[s("添加插槽 "),l("code",null,"radio")],-1)),l("div",V,[a(p,{title:"选项边框"},{default:e(()=>[a(n,{modelValue:E.data,"onUpdate:modelValue":o[11]||(o[11]=t=>E.data=t),disabled:"",label:"单选框组A",value:"1",border:""},{radio:e(()=>[...o[79]||(o[79]=[s(" 自定义内容 ",-1)])]),_:1},8,["modelValue"])]),_:1}),a(p,{title:"组边框"},{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[12]||(o[12]=t=>E.data=t)},{default:e(()=>[a(n,{label:"单选框组A",value:"1",border:""},{radio:e(()=>[...o[80]||(o[80]=[s(" 自定义内容1 ",-1)])]),_:1}),a(n,{label:"单选框组B",value:"2",border:""},{radio:e(()=>[...o[81]||(o[81]=[s(" 自定义内容2 ",-1)])]),_:1}),a(n,{label:"单选框组C",value:"3",disabled:"",border:""},{radio:e(()=>[...o[82]||(o[82]=[s(" 自定义内容3 ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),a(y,null,{desc:e(()=>[...o[83]||(o[83]=[])]),highlight:e(()=>[...o[84]||(o[84]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    自定义内容")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"组边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容1")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容2")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容3")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'单选框组A'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[85]||(o[85]=[])]),default:e(()=>[o[86]||(o[86]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-radio v-model="data" disabled label="单选框组A" value="1" border>
                <template #radio>
                    自定义内容
                </template>
            </zmz-radio>
        </zmz-space>
        <zmz-space title="组边框">
            <zmz-radio-group v-model="data">
                <zmz-radio label="单选框组A" value="1" border>
                    <template #radio>
                        自定义内容1
                    </template>
                </zmz-radio>
                <zmz-radio label="单选框组B" value="2" border>
                    <template #radio>
                        自定义内容2
                    </template>
                </zmz-radio>
                <zmz-radio label="单选框组C" value="3" disabled border>
                    <template #radio>
                        自定义内容3
                    </template>
                </zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '单选框组A'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[116]||(o[116]=l("h2",{id:"%E5%8D%95%E9%80%89%E7%BB%84%E5%9E%82%E7%9B%B4",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8D%95%E9%80%89%E7%BB%84%E5%9E%82%E7%9B%B4"},"#"),s(" 单选组垂直")],-1)),o[117]||(o[117]=l("p",null,[s("添加属性 "),l("code",null,"vertical")],-1)),l("div",k,[a(p,{title:"选项边框"},{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[13]||(o[13]=t=>E.data=t),vertical:""},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(p,{title:"选项边框"},{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[14]||(o[14]=t=>E.data=t),vertical:""},{default:e(()=>[a(n,{label:"单选框组A",value:"1",border:""},{radio:e(()=>[...o[87]||(o[87]=[s(" 自定义内容1 ",-1)])]),_:1}),a(n,{label:"单选框组B",value:"2",border:""},{radio:e(()=>[...o[88]||(o[88]=[s(" 自定义内容2 ",-1)])]),_:1}),a(n,{label:"单选框组C",value:"3",border:""},{radio:e(()=>[...o[89]||(o[89]=[s(" 自定义内容3 ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),a(y,null,{desc:e(()=>[...o[90]||(o[90]=[])]),highlight:e(()=>[...o[91]||(o[91]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," vertical"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," vertical"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容1")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容2")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容3")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'单选框组A'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[92]||(o[92]=[])]),default:e(()=>[o[93]||(o[93]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-radio-group v-model="data" vertical>
                <zmz-radio label="单选框组A" value="1">
                </zmz-radio>
                <zmz-radio label="单选框组B" value="2">
                </zmz-radio>
                <zmz-radio label="单选框组C" value="3">
                </zmz-radio>
            </zmz-radio-group>
        </zmz-space>
        <zmz-space title="选项边框">
            <zmz-radio-group v-model="data" vertical>
                <zmz-radio label="单选框组A" value="1" border>
                    <template #radio>
                        自定义内容1
                    </template>
                </zmz-radio>
                <zmz-radio label="单选框组B" value="2" border>
                    <template #radio>
                        自定义内容2
                    </template>
                </zmz-radio>
                <zmz-radio label="单选框组C" value="3" border>
                    <template #radio>
                        自定义内容3
                    </template>
                </zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '单选框组A'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[118]||(o[118]=l("h2",{id:"%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F"},"#"),s(" 按钮样式")],-1)),o[119]||(o[119]=l("p",null,[s("添加属性 "),l("code",null,"button")],-1)),l("div",x,[a(p,{title:"按钮组"},{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[15]||(o[15]=t=>E.data=t),button:""},{default:e(()=>[a(n,{label:"单选框组A",disabled:"",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(p,{title:"边线组"},{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[16]||(o[16]=t=>E.data=t),button:"","button-border":""},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",disabled:"",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),a(y,null,{desc:e(()=>[...o[94]||(o[94]=[])]),highlight:e(()=>[...o[95]||(o[95]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"按钮组"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"边线组"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}},"  value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'单选框组A'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[96]||(o[96]=[])]),default:e(()=>[o[97]||(o[97]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="按钮组">
            <zmz-radio-group v-model="data" button>
                <zmz-radio label="单选框组A" disabled value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space>
        <zmz-space title="边线组">
            <zmz-radio-group v-model="data" button button-border>
                <zmz-radio label="单选框组A"  value="1">
                </zmz-radio>
                <zmz-radio label="单选框组B" disabled value="2">
                </zmz-radio>
                <zmz-radio label="单选框组C" value="3">
                </zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '单选框组A'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[120]||(o[120]=l("h2",{id:"%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8"},"#"),s(" 不同尺寸")],-1)),o[121]||(o[121]=l("p",null,"提供多种尺寸",-1)),l("div",U,[a(p,{title:"普通"},{default:e(()=>[a(n,{modelValue:E.radio,"onUpdate:modelValue":o[17]||(o[17]=t=>E.radio=t),label:"单选框",value:"0",size:"large"},null,8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[18]||(o[18]=t=>E.radio=t),label:"单选框",value:"1",size:"medium"},null,8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[19]||(o[19]=t=>E.radio=t),label:"单选框",value:"2",size:"default"},null,8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[20]||(o[20]=t=>E.radio=t),label:"单选框",value:"3",size:"small"},null,8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[21]||(o[21]=t=>E.radio=t),label:"单选框",value:"4",size:"mini"},null,8,["modelValue"])]),_:1}),a(p,{title:"边线"},{default:e(()=>[a(n,{modelValue:E.radio,"onUpdate:modelValue":o[22]||(o[22]=t=>E.radio=t),label:"单选框",border:"",value:"0",size:"large"},null,8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[23]||(o[23]=t=>E.radio=t),label:"单选框",border:"",value:"1",size:"medium"},null,8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[24]||(o[24]=t=>E.radio=t),label:"单选框",border:"",value:"2",size:"default"},null,8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[25]||(o[25]=t=>E.radio=t),label:"单选框",border:"",value:"3",size:"small"},null,8,["modelValue"]),a(n,{modelValue:E.radio,"onUpdate:modelValue":o[26]||(o[26]=t=>E.radio=t),label:"单选框",border:"",value:"4",size:"mini"},null,8,["modelValue"])]),_:1}),a(p,{title:"选项组普通",mode:"vertical"},{default:e(()=>[a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[27]||(o[27]=t=>E.data=t),size:"large"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[28]||(o[28]=t=>E.data=t),size:"medium"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[29]||(o[29]=t=>E.data=t),size:"default"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[30]||(o[30]=t=>E.data=t),size:"small"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[31]||(o[31]=t=>E.data=t),size:"mini"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(p,{title:"按钮组填充",mode:"vertical"},{default:e(()=>[a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[32]||(o[32]=t=>E.data=t),button:"",size:"large"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[33]||(o[33]=t=>E.data=t),button:"",size:"medium"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[34]||(o[34]=t=>E.data=t),button:"",size:"default"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[35]||(o[35]=t=>E.data=t),button:"",size:"small"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[36]||(o[36]=t=>E.data=t),button:"",size:"mini"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(p,{title:"按钮组边线",mode:"vertical"},{default:e(()=>[a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[37]||(o[37]=t=>E.data=t),button:"","button-border":"",size:"large"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[38]||(o[38]=t=>E.data=t),button:"","button-border":"",size:"medium"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[39]||(o[39]=t=>E.data=t),button:"","button-border":"",size:"default"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[40]||(o[40]=t=>E.data=t),button:"","button-border":"",size:"small"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:e(()=>[a(r,{modelValue:E.data,"onUpdate:modelValue":o[41]||(o[41]=t=>E.data=t),button:"","button-border":"",size:"mini"},{default:e(()=>[a(n,{label:"单选框组A",value:"1"}),a(n,{label:"单选框组B",value:"2"}),a(n,{label:"单选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),a(y,null,{desc:e(()=>[...o[98]||(o[98]=[])]),highlight:e(()=>[...o[99]||(o[99]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"普通"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"0"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"边线"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"0"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项组普通"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"按钮组填充"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"按钮组边线"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'单选框组A'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[100]||(o[100]=[])]),default:e(()=>[o[101]||(o[101]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="普通">
            <zmz-radio v-model="radio" label="单选框" value="0" size="large"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" value="1" size="medium"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" value="2" size="default"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" value="3" size="small"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" value="4" size="mini"></zmz-radio>
        </zmz-space>
        <zmz-space title="边线">
            <zmz-radio v-model="radio" label="单选框" border value="0" size="large"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" border value="1" size="medium"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" border value="2" size="default"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" border value="3" size="small"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" border value="4" size="mini"></zmz-radio>
        </zmz-space>
        <zmz-space title="选项组普通" mode="vertical">
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="large">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="medium">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="default">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="small">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="mini">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space title="按钮组填充" mode="vertical">
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="large">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="medium">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="default">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="small">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="mini">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space title="按钮组边线" mode="vertical">
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="large">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="medium">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="default">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="small">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="mini">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '单选框组A'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[122]||(o[122]=u('<h2 id="radio-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#radio-%E5%B1%9E%E6%80%A7">#</a> Radio 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定显示参数</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>readonly</td><td>只读</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>原生name属性</td><td>String</td><td>—</td><td>—</td></tr><tr><td>value</td><td>自定义值</td><td>String/Number/Boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>自定义文本</td><td>String/Number/Boolean</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="radio-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#radio-%E6%96%B9%E6%B3%95">#</a> Radio 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>绑定显示参数</td><td>value</td></tr></tbody></table></div><h2 id="radiogroup-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#radiogroup-%E5%B1%9E%E6%80%A7">#</a> Radiogroup 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定显示参数</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td></tr><tr><td>button</td><td>是否按钮样式</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>button-border</td><td>按钮边线</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>vertical</td><td>是否垂直</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>readonly</td><td>只读</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>原生name属性, 会被单个radio的name覆盖</td><td>String</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="radiogroup-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#radiogroup-%E6%96%B9%E6%B3%95">#</a> Radiogroup 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>绑定显示参数</td><td>value</td></tr></tbody></table></div><h2 id="radio-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#radio-%E6%8F%92%E6%A7%BD">#</a> Radio 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>label自定义内容插槽</td><td>—</td></tr><tr><td>radio</td><td>label自定义内容插槽</td><td>#radio=“item”</td></tr></tbody></table></div><h2 id="radio-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#radio-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Radio 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-radio-height</td><td>–zmz-radio-height</td><td>32px</td><td>宽度</td></tr><tr><td>@zmz-radio-padding</td><td>–zmz-radio-padding</td><td>8px</td><td>内边距</td></tr><tr><td>@zmz-radio-font-size</td><td>–zmz-radio-font-size</td><td>12px</td><td>字体</td></tr><tr><td>@zmz-radio-background-color</td><td>–zmz-radio-background-color</td><td>#fff</td><td>背景</td></tr><tr><td>@zmz-radio-icon-size</td><td>–zmz-radio-icon-size</td><td>0px</td><td>点默认大小</td></tr><tr><td>@zmz-radio-border-color</td><td>–zmz-radio-border-color</td><td>#e3e6ef</td><td>边线</td></tr><tr><td>@zmz-radio-border-radius</td><td>–zmz-radio-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-radio-text-color</td><td>–zmz-radio-text-color</td><td>默认主题颜色</td><td>字体颜色</td></tr></tbody></table></div>',12))])}const O=m(b,[["render",w]]);export{O as default};
