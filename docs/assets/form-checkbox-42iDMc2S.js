import{_ as i,c as F,a as l,b as s,e,w as a,d as u,r as m,o as B,t as b}from"./index-DyRJxyCP.js";const k={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Checkbox 复选框"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),checkbox:!0,checkbox2:!1,data:["A"],semiselection:!0,semiselectionValue:!1,defaults:["A","B","C"]}},methods:{currentConfig(z){return this.$setting.currentConfig[z]},handleChangeAll(z){this.data=z?this.defaults:[],this.semiselection=!1},handleChange(z){let o=z.length;this.semiselectionValue=o===this.defaults.length,this.semiselection=o>0&&o<this.defaults.length}}},x={class:"zmz-markdown-article"},h={class:"demo-block"},C={class:"demo-block"},v={class:"demo-block"},D={class:"demo-block"},A={class:"demo-block"},g={class:"demo-block"},f={class:"demo-block"},V={class:"demo-block"},U={class:"demo-block"},w={class:"demo-block"};function S(z,o,N,O,c,d){const n=m("zmz-checkbox"),y=m("demo-block"),p=m("zmz-space-item"),t=m("zmz-checkbox-group"),r=m("zmz-space");return B(),F("div",x,[o[111]||(o[111]=l("h1",{id:"checkbox-%E5%A4%8D%E9%80%89%E6%A1%86",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#checkbox-%E5%A4%8D%E9%80%89%E6%A1%86"},"#"),s(" Checkbox 复选框")],-1)),o[112]||(o[112]=l("hr",null,null,-1)),o[113]||(o[113]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),o[114]||(o[114]=l("p",null,"在一组选项中进行多选",-1)),l("div",h,[e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[0]||(o[0]=E=>c.checkbox=E)},{default:a(()=>[...o[44]||(o[44]=[s("复选项A",-1)])]),_:1},8,["modelValue"]),e(n,{modelValue:c.checkbox2,"onUpdate:modelValue":o[1]||(o[1]=E=>c.checkbox2=E)},{default:a(()=>[...o[45]||(o[45]=[s("复选项B",-1)])]),_:1},8,["modelValue"])]),e(y,null,{desc:a(()=>[...o[46]||(o[46]=[])]),highlight:a(()=>[...o[47]||(o[47]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#E1E4E8"}},">复选项A</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox2"'),l("span",{style:{color:"#E1E4E8"}},">复选项B</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                checkbox: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                checkbox2: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[48]||(o[48]=[])]),default:a(()=>[o[49]||(o[49]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-checkbox v-model="checkbox">复选项A</zmz-checkbox>
        <zmz-checkbox v-model="checkbox2">复选项B</zmz-checkbox>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                checkbox: true,
                checkbox2: false,
            }
        }
    }
<\/script>
`)],-1))]),_:1}),o[115]||(o[115]=l("h2",{id:"%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81"},"#"),s(" 禁用只读状态")],-1)),o[116]||(o[116]=l("p",null,[s("添加属性 "),l("code",null,"disabled"),s(" 或 "),l("code",null,"readonly")],-1)),l("div",C,[e(n,{disabled:"",modelValue:c.checkbox,"onUpdate:modelValue":o[2]||(o[2]=E=>c.checkbox=E)},{default:a(()=>[...o[50]||(o[50]=[s("禁用复选项A",-1)])]),_:1},8,["modelValue"]),e(n,{disabled:"",modelValue:c.checkbox2,"onUpdate:modelValue":o[3]||(o[3]=E=>c.checkbox2=E)},{default:a(()=>[...o[51]||(o[51]=[s("禁用复选项B",-1)])]),_:1},8,["modelValue"]),e(n,{readonly:"",modelValue:c.checkbox,"onUpdate:modelValue":o[4]||(o[4]=E=>c.checkbox=E)},{default:a(()=>[...o[52]||(o[52]=[s("只读复选项A",-1)])]),_:1},8,["modelValue"]),e(n,{readonly:"",modelValue:c.checkbox2,"onUpdate:modelValue":o[5]||(o[5]=E=>c.checkbox2=E)},{default:a(()=>[...o[53]||(o[53]=[s("只读复选项B",-1)])]),_:1},8,["modelValue"])]),e(y,null,{desc:a(()=>[...o[54]||(o[54]=[])]),highlight:a(()=>[...o[55]||(o[55]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#E1E4E8"}},">禁用复选项A</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox2"'),l("span",{style:{color:"#E1E4E8"}},">禁用复选项B</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#E1E4E8"}},">只读复选项A</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox2"'),l("span",{style:{color:"#E1E4E8"}},">只读复选项B</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                checkbox: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                checkbox2: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[56]||(o[56]=[])]),default:a(()=>[o[57]||(o[57]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-checkbox disabled v-model="checkbox">禁用复选项A</zmz-checkbox>
        <zmz-checkbox disabled v-model="checkbox2">禁用复选项B</zmz-checkbox>
        <zmz-checkbox readonly v-model="checkbox">只读复选项A</zmz-checkbox>
        <zmz-checkbox readonly v-model="checkbox2">只读复选项B</zmz-checkbox>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                checkbox: true,
                checkbox2: false,
            }
        }
    }
<\/script>
`)],-1))]),_:1}),o[117]||(o[117]=l("h2",{id:"%E5%8D%8A%E9%80%89%E7%8A%B6%E6%80%81",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8D%8A%E9%80%89%E7%8A%B6%E6%80%81"},"#"),s(" 半选状态")],-1)),o[118]||(o[118]=l("p",null,[s("添加属性 "),l("code",null,"semiselection"),s(" 半选")],-1)),l("div",v,[e(r,{mode:"vertical"},{default:a(()=>[e(p,null,{default:a(()=>[e(n,{label:"全选",onOnChange:d.handleChangeAll,modelValue:c.semiselectionValue,"onUpdate:modelValue":o[6]||(o[6]=E=>c.semiselectionValue=E),semiselection:c.semiselection,value:!1},null,8,["onOnChange","modelValue","semiselection"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[7]||(o[7]=E=>c.data=E),onOnChange:d.handleChange},{default:a(()=>[e(n,{label:"复选项A",value:"A"},{default:a(()=>[...o[58]||(o[58]=[s("复选项A",-1)])]),_:1}),e(n,{label:"复选项B",value:"B"},{default:a(()=>[...o[59]||(o[59]=[s("复选项B",-1)])]),_:1}),e(n,{label:"复选项C",value:"C"},{default:a(()=>[...o[60]||(o[60]=[s("复选项C",-1)])]),_:1})]),_:1},8,["modelValue","onOnChange"])]),_:1})]),_:1})]),e(y,null,{desc:a(()=>[...o[61]||(o[61]=[])]),highlight:a(()=>[...o[62]||(o[62]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"全选"'),l("span",{style:{color:"#B392F0"}}," @on-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleChangeAll"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"semiselectionValue"'),l("span",{style:{color:"#B392F0"}}," :semiselection"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"semiselection"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," @on-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleChange"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"A"'),l("span",{style:{color:"#E1E4E8"}},">复选项A</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"B"'),l("span",{style:{color:"#E1E4E8"}},">复选项B</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"C"'),l("span",{style:{color:"#E1E4E8"}},">复选项C</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                data: ["),l("span",{style:{color:"#9ECBFF"}},"'A'"),l("span",{style:{color:"#E1E4E8"}},"],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                semiselection: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                semiselectionValue: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                defaults: ["),l("span",{style:{color:"#9ECBFF"}},"'A'"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#9ECBFF"}},'"B"'),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#9ECBFF"}},'"C"'),l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            handleChangeAll"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"val"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".data "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," val "),l("span",{style:{color:"#F97583"}},"?"),l("span",{style:{color:"#79B8FF"}}," this"),l("span",{style:{color:"#E1E4E8"}},".defaults "),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," [];")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".semiselection "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," false"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            handleChange"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"value"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"                let"),l("span",{style:{color:"#E1E4E8"}}," checkedCount "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," value."),l("span",{style:{color:"#79B8FF"}},"length"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".semiselectionValue "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," checkedCount "),l("span",{style:{color:"#F97583"}},"==="),l("span",{style:{color:"#79B8FF"}}," this"),l("span",{style:{color:"#E1E4E8"}},".defaults."),l("span",{style:{color:"#79B8FF"}},"length"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".semiselection "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," checkedCount "),l("span",{style:{color:"#F97583"}},">"),l("span",{style:{color:"#79B8FF"}}," 0"),l("span",{style:{color:"#F97583"}}," &&"),l("span",{style:{color:"#E1E4E8"}}," checkedCount "),l("span",{style:{color:"#F97583"}},"<"),l("span",{style:{color:"#79B8FF"}}," this"),l("span",{style:{color:"#E1E4E8"}},".defaults."),l("span",{style:{color:"#79B8FF"}},"length"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[63]||(o[63]=[])]),default:a(()=>[o[64]||(o[64]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-checkbox label="全选" @on-change="handleChangeAll" v-model="semiselectionValue" :semiselection="semiselection" :value="false"></zmz-checkbox>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" @on-change="handleChange">
                    <zmz-checkbox label="复选项A" value="A">复选项A</zmz-checkbox>
                    <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
                    <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: ['A'],
                semiselection: true,
                semiselectionValue: false,
                defaults: ['A', "B", "C"]
            }
        },
        methods: {
            handleChangeAll(val) {
                this.data = val ? this.defaults : [];
                this.semiselection = false;
            },
            handleChange(value) {
                let checkedCount = value.length;
                this.semiselectionValue = checkedCount === this.defaults.length;
                this.semiselection = checkedCount > 0 && checkedCount < this.defaults.length;
            },
        }
    }
<\/script>
`)],-1))]),_:1}),o[119]||(o[119]=l("h2",{id:"%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84"},"#"),s(" 多选框组")],-1)),o[120]||(o[120]=l("p",null,"在组选项中进行多选",-1)),l("div",D,[e(t,{modelValue:c.data,"onUpdate:modelValue":o[8]||(o[8]=E=>c.data=E)},{default:a(()=>[e(n,{label:"复选项A",value:"A"},{default:a(()=>[...o[65]||(o[65]=[s("复选项A",-1)])]),_:1}),e(n,{label:"复选项B",value:"B"},{default:a(()=>[...o[66]||(o[66]=[s("复选项B",-1)])]),_:1}),e(n,{label:"复选项C",value:"C"},{default:a(()=>[...o[67]||(o[67]=[s("复选项C",-1)])]),_:1})]),_:1},8,["modelValue"])]),e(y,null,{desc:a(()=>[...o[68]||(o[68]=[])]),highlight:a(()=>[...o[69]||(o[69]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"A"'),l("span",{style:{color:"#E1E4E8"}},">复选项A</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"B"'),l("span",{style:{color:"#E1E4E8"}},">复选项B</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"C"'),l("span",{style:{color:"#E1E4E8"}},">复选项C</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                data: ["),l("span",{style:{color:"#9ECBFF"}},"'A'"),l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[70]||(o[70]=[])]),default:a(()=>[o[71]||(o[71]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-checkbox-group v-model="data">
        <zmz-checkbox label="复选项A" value="A">复选项A</zmz-checkbox>
        <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
        <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
        </zmz-checkbox-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: ['A']
            }
        }
    }
<\/script>
`)],-1))]),_:1}),o[121]||(o[121]=l("h2",{id:"%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84%E7%A6%81%E7%94%A8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84%E7%A6%81%E7%94%A8"},"#"),s(" 多选框组禁用")],-1)),o[122]||(o[122]=l("p",null,[s("添加属性 "),l("code",null,"disabled")],-1)),l("div",A,[e(r,{title:"选项禁用"},{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[9]||(o[9]=E=>c.data=E)},{default:a(()=>[e(n,{label:"复选项A",value:"A",disabled:""},{default:a(()=>[...o[72]||(o[72]=[s("复选项A",-1)])]),_:1}),e(n,{label:"复选项B",value:"B"},{default:a(()=>[...o[73]||(o[73]=[s("复选项B",-1)])]),_:1}),e(n,{label:"复选项C",value:"C"},{default:a(()=>[...o[74]||(o[74]=[s("复选项C",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{title:"组禁用"},{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[10]||(o[10]=E=>c.data=E),disabled:""},{default:a(()=>[e(n,{label:"复选项A",value:"A"},{default:a(()=>[...o[75]||(o[75]=[s("复选项A",-1)])]),_:1}),e(n,{label:"复选项B",value:"B"},{default:a(()=>[...o[76]||(o[76]=[s("复选项B",-1)])]),_:1}),e(n,{label:"复选项C",value:"C"},{default:a(()=>[...o[77]||(o[77]=[s("复选项C",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e(y,null,{desc:a(()=>[...o[78]||(o[78]=[])]),highlight:a(()=>[...o[79]||(o[79]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项禁用"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"A"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#E1E4E8"}},">复选项A</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"B"'),l("span",{style:{color:"#E1E4E8"}},">复选项B</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"C"'),l("span",{style:{color:"#E1E4E8"}},">复选项C</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"组禁用"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"A"'),l("span",{style:{color:"#E1E4E8"}},">复选项A</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"B"'),l("span",{style:{color:"#E1E4E8"}},">复选项B</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选项C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"C"'),l("span",{style:{color:"#E1E4E8"}},">复选项C</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: ["),l("span",{style:{color:"#9ECBFF"}},"'复选项A'"),l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[80]||(o[80]=[])]),default:a(()=>[o[81]||(o[81]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space title="选项禁用">
            <zmz-checkbox-group v-model="data">
                <zmz-checkbox label="复选项A" value="A" disabled>复选项A</zmz-checkbox>
                <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
                <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
        <zmz-space title="组禁用">
            <zmz-checkbox-group v-model="data" disabled>
                <zmz-checkbox label="复选项A" value="A">复选项A</zmz-checkbox>
                <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
                <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: ['复选项A']
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[123]||(o[123]=l("h2",{id:"%E8%BE%B9%E6%A1%86",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%BE%B9%E6%A1%86"},"#"),s(" 边框")],-1)),o[124]||(o[124]=l("p",null,[s("添加属性 "),l("code",null,"border")],-1)),l("div",g,[e(r,{title:"选项边框"},{default:a(()=>[e(n,{class:"demo-checkbox",modelValue:c.checkbox,"onUpdate:modelValue":o[11]||(o[11]=E=>c.checkbox=E),disabled:"",label:"复选框组A",value:"1",border:""},{default:a(()=>[...o[82]||(o[82]=[s("复选框组A",-1)])]),_:1},8,["modelValue"])]),_:1}),e(r,{title:"组边框"},{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[12]||(o[12]=E=>c.data=E)},{default:a(()=>[e(n,{label:"复选框组A",value:"A",disabled:"",border:""},{default:a(()=>[...o[83]||(o[83]=[s("复选框组A",-1)])]),_:1}),e(n,{label:"复选框组B",value:"B",border:""},{default:a(()=>[...o[84]||(o[84]=[s("复选框组B",-1)])]),_:1}),e(n,{label:"复选框组C",value:"C",border:""},{default:a(()=>[...o[85]||(o[85]=[s("复选框组C",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e(y,null,{desc:a(()=>[...o[86]||(o[86]=[])]),highlight:a(()=>[...o[87]||(o[87]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-checkbox"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">复选框组A</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"组边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"A"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">复选框组A</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"B"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">复选框组B</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"C"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">复选框组C</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: ["),l("span",{style:{color:"#9ECBFF"}},"'A'"),l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[88]||(o[88]=[])]),default:a(()=>[o[89]||(o[89]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-checkbox class="demo-checkbox" v-model="checkbox" disabled label="复选框组A" value="1" border>复选框组A</zmz-checkbox>
        </zmz-space>
        <zmz-space title="组边框">
            <zmz-checkbox-group v-model="data">
                <zmz-checkbox label="复选框组A" value="A" disabled border>复选框组A</zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="B" border>复选框组B</zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="C" border>复选框组C</zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: ['A']
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[125]||(o[125]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9"},"#"),s(" 自定义内容")],-1)),o[126]||(o[126]=l("p",null,[s("添加插槽 "),l("code",null,"checkbox")],-1)),l("div",f,[e(r,{title:"选项边框"},{default:a(()=>[e(n,{class:"demo-checkbox",modelValue:c.checkbox,"onUpdate:modelValue":o[13]||(o[13]=E=>c.checkbox=E),disabled:"",label:"复选框组A",value:"1",border:""},{checkbox:a(E=>[s(" 自定义内容"+b(E.checkbox),1)]),_:1},8,["modelValue"])]),_:1}),e(r,{title:"组边框"},{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[14]||(o[14]=E=>c.data=E)},{default:a(()=>[e(n,{label:"复选框组A",value:"1",border:""},{checkbox:a(E=>[...o[90]||(o[90]=[s(" 自定义内容1 ",-1)])]),_:1}),e(n,{label:"复选框组B",value:"2",border:""},{checkbox:a(E=>[s(" 自定义内容2"+b(E.checked),1)]),_:1}),e(n,{label:"复选框组C",value:"3",disabled:"",border:""},{checkbox:a(()=>[...o[91]||(o[91]=[s(" 自定义内容3 ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e(y,null,{desc:a(()=>[...o[92]||(o[92]=[])]),highlight:a(()=>[...o[93]||(o[93]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-checkbox"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"checkbox"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"item"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    自定义内容{{item.checkbox}}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"组边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"checkbox"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"item"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容1")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"checkbox"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"item"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容2{{item.checked}}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容3")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: ["),l("span",{style:{color:"#9ECBFF"}},"'A'"),l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[94]||(o[94]=[])]),default:a(()=>[o[95]||(o[95]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-checkbox class="demo-checkbox" v-model="checkbox" disabled label="复选框组A" value="1" border>
                <template #checkbox="item">
                    自定义内容{{item.checkbox}}
                </template>
            </zmz-checkbox>
        </zmz-space>
        <zmz-space title="组边框">
            <zmz-checkbox-group v-model="data">
                <zmz-checkbox label="复选框组A" value="1" border>
                    <template #checkbox="item">
                        自定义内容1
                    </template>
                </zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2" border>
                    <template #checkbox="item">
                        自定义内容2{{item.checked}}
                    </template>
                </zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3" disabled border>
                    <template #checkbox>
                        自定义内容3
                    </template>
                </zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: ['A']
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[127]||(o[127]=l("h2",{id:"%E5%A4%8D%E9%80%89%E7%BB%84%E5%9E%82%E7%9B%B4",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%A4%8D%E9%80%89%E7%BB%84%E5%9E%82%E7%9B%B4"},"#"),s(" 复选组垂直")],-1)),o[128]||(o[128]=l("p",null,[s("添加属性 "),l("code",null,"vertical")],-1)),l("div",V,[e(r,{title:"选项边框"},{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[15]||(o[15]=E=>c.data=E),vertical:""},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(r,{title:"选项边框"},{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[16]||(o[16]=E=>c.data=E),vertical:""},{default:a(()=>[e(n,{label:"复选框组A",value:"1",border:""},{checkbox:a(()=>[...o[96]||(o[96]=[s(" 自定义内容1 ",-1)])]),_:1}),e(n,{label:"复选框组B",value:"2",border:""},{checkbox:a(()=>[...o[97]||(o[97]=[s(" 自定义内容2 ",-1)])]),_:1}),e(n,{label:"复选框组C",value:"3",border:""},{checkbox:a(()=>[...o[98]||(o[98]=[s(" 自定义内容3 ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e(y,null,{desc:a(()=>[...o[99]||(o[99]=[])]),highlight:a(()=>[...o[100]||(o[100]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," vertical"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项边框"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," vertical"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容1")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容2")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        自定义内容3")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: ["),l("span",{style:{color:"#9ECBFF"}},"'A'"),l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[101]||(o[101]=[])]),default:a(()=>[o[102]||(o[102]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-checkbox-group v-model="data" vertical>
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
        <zmz-space title="选项边框">
            <zmz-checkbox-group v-model="data" vertical>
                <zmz-checkbox label="复选框组A" value="1" border>
                    <template #checkbox>
                        自定义内容1
                    </template>
                </zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2" border>
                    <template #checkbox>
                        自定义内容2
                    </template>
                </zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3" border>
                    <template #checkbox>
                        自定义内容3
                    </template>
                </zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: ['A']
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[129]||(o[129]=l("h2",{id:"%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F"},"#"),s(" 按钮样式")],-1)),o[130]||(o[130]=l("p",null,[s("添加属性 "),l("code",null,"button")],-1)),l("div",U,[e(r,{title:"按钮填充"},{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[17]||(o[17]=E=>c.data=E),button:""},{default:a(()=>[e(n,{label:"复选框组A",disabled:"",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(r,{title:"按钮边线"},{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[18]||(o[18]=E=>c.data=E),button:"","button-border":""},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",disabled:"",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),e(y,null,{desc:a(()=>[...o[103]||(o[103]=[])]),highlight:a(()=>[...o[104]||(o[104]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"按钮填充"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"按钮边线"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}},"  value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: []")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[105]||(o[105]=[])]),default:a(()=>[o[106]||(o[106]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="按钮填充">
            <zmz-checkbox-group v-model="data" button>
                <zmz-checkbox label="复选框组A" disabled value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
        <zmz-space title="按钮边线">
            <zmz-checkbox-group v-model="data" button button-border>
                <zmz-checkbox label="复选框组A"  value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" disabled value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: []
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[131]||(o[131]=l("h2",{id:"%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8"},"#"),s(" 不同尺寸")],-1)),o[132]||(o[132]=l("p",null,"提供多种尺寸",-1)),l("div",w,[e(r,{title:"普通"},{default:a(()=>[e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[19]||(o[19]=E=>c.checkbox=E),label:"复选框",value:"0",size:"large"},null,8,["modelValue"]),e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[20]||(o[20]=E=>c.checkbox=E),label:"复选框",value:"1",size:"medium"},null,8,["modelValue"]),e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[21]||(o[21]=E=>c.checkbox=E),label:"复选框",value:"2",size:"default"},null,8,["modelValue"]),e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[22]||(o[22]=E=>c.checkbox=E),label:"复选框",value:"3",size:"small"},null,8,["modelValue"]),e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[23]||(o[23]=E=>c.checkbox=E),label:"复选框",value:"4",size:"mini"},null,8,["modelValue"])]),_:1}),e(r,{title:"边线"},{default:a(()=>[e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[24]||(o[24]=E=>c.checkbox=E),label:"复选框",border:"",value:"0",size:"large"},null,8,["modelValue"]),e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[25]||(o[25]=E=>c.checkbox=E),label:"复选框",border:"",value:"1",size:"medium"},null,8,["modelValue"]),e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[26]||(o[26]=E=>c.checkbox=E),label:"复选框",border:"",value:"2",size:"default"},null,8,["modelValue"]),e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[27]||(o[27]=E=>c.checkbox=E),label:"复选框",border:"",value:"3",size:"small"},null,8,["modelValue"]),e(n,{modelValue:c.checkbox,"onUpdate:modelValue":o[28]||(o[28]=E=>c.checkbox=E),label:"复选框",border:"",value:"4",size:"mini"},null,8,["modelValue"])]),_:1}),e(r,{title:"选项组普通",mode:"vertical"},{default:a(()=>[e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[29]||(o[29]=E=>c.data=E),size:"large"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[30]||(o[30]=E=>c.data=E),size:"medium"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[31]||(o[31]=E=>c.data=E),size:"default"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[32]||(o[32]=E=>c.data=E),size:"small"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[33]||(o[33]=E=>c.data=E),size:"mini"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{title:"按钮组填充",mode:"vertical"},{default:a(()=>[e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[34]||(o[34]=E=>c.data=E),button:"",size:"large"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[35]||(o[35]=E=>c.data=E),button:"",size:"medium"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[36]||(o[36]=E=>c.data=E),button:"",size:"default"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[37]||(o[37]=E=>c.data=E),button:"",size:"small"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[38]||(o[38]=E=>c.data=E),button:"",size:"mini"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{title:"按钮组边线",mode:"vertical"},{default:a(()=>[e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[39]||(o[39]=E=>c.data=E),button:"","button-border":"",size:"large"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[40]||(o[40]=E=>c.data=E),button:"","button-border":"",size:"medium"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[41]||(o[41]=E=>c.data=E),button:"","button-border":"",size:"default"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[42]||(o[42]=E=>c.data=E),button:"","button-border":"",size:"small"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(t,{modelValue:c.data,"onUpdate:modelValue":o[43]||(o[43]=E=>c.data=E),button:"","button-border":"",size:"mini"},{default:a(()=>[e(n,{label:"复选框组A",value:"1"}),e(n,{label:"复选框组B",value:"2"}),e(n,{label:"复选框组C",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),e(y,null,{desc:a(()=>[...o[107]||(o[107]=[])]),highlight:a(()=>[...o[108]||(o[108]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"普通"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"0"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"边线"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"0"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"选项组普通"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"按钮组填充"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"按钮组边线"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#B392F0"}}," button-border"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组A"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组B"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框组C"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            checkbox: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: []")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[109]||(o[109]=[])]),default:a(()=>[o[110]||(o[110]=l("pre",null,[l("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <zmz-space title="普通">
            <zmz-checkbox v-model="checkbox" label="复选框" value="0" size="large"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" value="1" size="medium"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" value="2" size="default"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" value="3" size="small"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" value="4" size="mini"></zmz-checkbox>
        </zmz-space>
        <zmz-space title="边线">
            <zmz-checkbox v-model="checkbox" label="复选框" border value="0" size="large"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" border value="1" size="medium"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" border value="2" size="default"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" border value="3" size="small"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" border value="4" size="mini"></zmz-checkbox>
        </zmz-space>
        <zmz-space title="选项组普通" mode="vertical">
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="large">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="medium">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="default">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="small">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="mini">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space title="按钮组填充" mode="vertical">
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="large">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="medium">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="default">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="small">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="mini">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space title="按钮组边线" mode="vertical">
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="large">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="medium">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="default">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="small">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="mini">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            checkbox: false,
            data: []
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[133]||(o[133]=u('<h2 id="checkbox-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#checkbox-%E5%B1%9E%E6%80%A7">#</a> Checkbox 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定显示参数</td><td>String / Number / Boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>readonly</td><td>只读</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>原生name属性</td><td>String</td><td>—</td><td>—</td></tr><tr><td>value</td><td>自定义值</td><td>String/Number/Boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>自定义文本</td><td>String/Number/Boolean</td><td>—</td><td>—</td></tr><tr><td>semiselection</td><td>半选择状态</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="checkbox-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#checkbox-%E6%96%B9%E6%B3%95">#</a> Checkbox 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>绑定显示参数</td><td>value</td></tr></tbody></table></div><h2 id="checkboxgroup-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#checkboxgroup-%E5%B1%9E%E6%80%A7">#</a> Checkboxgroup 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定显示参数</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td></tr><tr><td>button</td><td>是否按钮样式</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>button-border</td><td>按钮边线</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>vertical</td><td>是否垂直</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>readonly</td><td>只读</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>原生name属性, 会被单个radio的name覆盖</td><td>String</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="checkboxgroup-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#checkboxgroup-%E6%96%B9%E6%B3%95">#</a> Checkboxgroup 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>绑定显示参数</td><td>value</td></tr></tbody></table></div><h2 id="checkbox-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#checkbox-%E6%8F%92%E6%A7%BD">#</a> Checkbox 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>label自定义内容插槽</td><td>—</td></tr><tr><td>checkbox</td><td>label自定义内容插槽</td><td>#checkbox=“item”</td></tr></tbody></table></div><h2 id="checkbox-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#checkbox-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Checkbox 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-checkbox-height</td><td>–zmz-checkbox-height</td><td>32px</td><td>宽度</td></tr><tr><td>@zmz-checkbox-padding</td><td>–zmz-checkbox-padding</td><td>8px</td><td>内边距</td></tr><tr><td>@zmz-checkbox-font-size</td><td>–zmz-checkbox-font-size</td><td>12px</td><td>字体</td></tr><tr><td>@zmz-checkbox-background-color</td><td>–zmz-checkbox-background-color</td><td>#fff</td><td>背景</td></tr><tr><td>@zmz-checkbox-icon-size</td><td>–zmz-checkbox-icon-size</td><td>0px</td><td>点默认大小</td></tr><tr><td>@zmz-checkbox-border-color</td><td>–zmz-checkbox-border-color</td><td>#e3e6ef</td><td>边线</td></tr><tr><td>@zmz-checkbox-border-radius</td><td>–zmz-checkbox-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-checkbox-text-color</td><td>–zmz-checkbox-text-color</td><td>默认主题颜色</td><td>字体颜色</td></tr></tbody></table></div>',12))])}const T=i(k,[["render",S]]);export{T as default};
