import{_ as w,c as u,a as o,b as l,e as t,w as s,d as D,r as z,o as F}from"./index-DyRJxyCP.js";const B={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Dropdown 下拉菜单"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),dropdown:""}},methods:{currentConfig(c){return this.$setting.currentConfig[c]},onChange(c){console.log(c)},onVisibleChange(c){console.log(c)}}},g={class:"zmz-markdown-article"},b={class:"demo-block"},f={class:"demo-block"},C={class:"demo-block"},v={class:"demo-block"},k={class:"demo-block"},x={class:"demo-block"};function V(c,n,A,O,E,r){const e=z("zmz-dropdown-item"),a=z("zmz-dropdown-menu"),d=z("zmz-dropdown"),y=z("zmz-button"),i=z("zmz-space"),m=z("demo-block");return F(),u("div",g,[n[120]||(n[120]=o("h1",{id:"dropdown-%E4%B8%8B%E6%8B%89%E8%8F%9C%E5%8D%95",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#dropdown-%E4%B8%8B%E6%8B%89%E8%8F%9C%E5%8D%95"},"#"),l(" Dropdown 下拉菜单")],-1)),n[121]||(n[121]=o("hr",null,null,-1)),n[122]||(n[122]=o("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),l(" 基础用法")],-1)),n[123]||(n[123]=o("p",null,"点击到下拉菜单上，展开更多操作。",-1)),o("div",b,[t(i,null,{default:s(()=>[t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[0]||(n[0]=p=>E.dropdown=p),onOnChange:r.onChange},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[12]||(n[12]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[13]||(n[13]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[14]||(n[14]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[15]||(n[15]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[16]||(n[16]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[n[17]||(n[17]=o("div",null,[l("下拉菜单"),o("i",{class:"zmz-icon--arrow-bottom"})],-1))]),_:1},8,["modelValue","onOnChange"]),t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[1]||(n[1]=p=>E.dropdown=p),onOnChange:r.onChange},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[19]||(n[19]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[20]||(n[20]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[21]||(n[21]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[22]||(n[22]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[23]||(n[23]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[t(y,{type:"primary"},{default:s(()=>[...n[18]||(n[18]=[l(" 下拉菜单 ",-1),o("i",{class:"zmz-icon--arrow-bottom"},null,-1)])]),_:1})]),_:1},8,["modelValue","onOnChange"])]),_:1})]),t(m,null,{desc:s(()=>[...n[24]||(n[24]=[])]),highlight:s(()=>[...n[25]||(n[25]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单<"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#B392F0"}},"  type"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"primary"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    下拉菜单")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            dropdown: "),o("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:s(()=>[...n[26]||(n[26]=[])]),default:s(()=>[n[27]||(n[27]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-change="onChange">
                <div>下拉菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange">
                <zmz-button  type="primary">
                    下拉菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
<\/script>
`)],-1))]),_:1}),n[124]||(n[124]=o("h2",{id:"%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F"},"#"),l(" 触发方式")],-1)),n[125]||(n[125]=o("p",null,[l("可以使用属性 "),o("code",null,"trigger"),l(" 配置 click 激活或者 hover 激活")],-1)),o("div",f,[t(i,null,{default:s(()=>[t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[2]||(n[2]=p=>E.dropdown=p),onOnVisibleChange:r.onVisibleChange,onOnChange:r.onChange,trigger:"click"},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,{disabled:""},{default:s(()=>[...n[28]||(n[28]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[29]||(n[29]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[30]||(n[30]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[31]||(n[31]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[32]||(n[32]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[n[33]||(n[33]=o("div",null,[l("点击触发菜单"),o("i",{class:"zmz-icon--arrow-bottom"})],-1))]),_:1},8,["modelValue","onOnVisibleChange","onOnChange"]),t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[3]||(n[3]=p=>E.dropdown=p),onOnChange:r.onChange,trigger:"hover"},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[35]||(n[35]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[36]||(n[36]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[37]||(n[37]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[38]||(n[38]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[39]||(n[39]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[t(y,{type:"primary"},{default:s(()=>[...n[34]||(n[34]=[l(" 滑入触发菜单 ",-1),o("i",{class:"zmz-icon--arrow-bottom"},null,-1)])]),_:1})]),_:1},8,["modelValue","onOnChange"])]),_:1})]),t(m,null,{desc:s(()=>[...n[40]||(n[40]=[])]),highlight:s(()=>[...n[41]||(n[41]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-visible-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onVisibleChange"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#B392F0"}}," trigger"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"click"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">点击触发菜单<"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#B392F0"}}," trigger"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"hover"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#B392F0"}},"  type"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"primary"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    滑入触发菜单")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            dropdown: "),o("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:s(()=>[...n[42]||(n[42]=[])]),default:s(()=>[n[43]||(n[43]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click">
                <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" trigger="hover">
                <zmz-button  type="primary">
                    滑入触发菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
<\/script>
`)],-1))]),_:1}),n[126]||(n[126]=o("h2",{id:"%E6%98%BE%E7%A4%BA%E6%96%B9%E5%90%91",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#%E6%98%BE%E7%A4%BA%E6%96%B9%E5%90%91"},"#"),l(" 显示方向")],-1)),n[127]||(n[127]=o("p",null,[l("可以使用属性 "),o("code",null,"placement"),l(" 配置 菜单显示方向")],-1)),o("div",C,[t(i,null,{default:s(()=>[t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[4]||(n[4]=p=>E.dropdown=p),onOnChange:r.onChange,placement:"top"},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[45]||(n[45]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[46]||(n[46]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[47]||(n[47]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[48]||(n[48]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[49]||(n[49]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[t(y,{type:"primary"},{default:s(()=>[...n[44]||(n[44]=[l(" 上方显示菜单 ",-1),o("i",{class:"zmz-icon--arrow-bottom"},null,-1)])]),_:1})]),_:1},8,["modelValue","onOnChange"]),t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[5]||(n[5]=p=>E.dropdown=p),onOnChange:r.onChange,placement:"bottom"},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[51]||(n[51]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[52]||(n[52]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[53]||(n[53]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[54]||(n[54]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[55]||(n[55]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[t(y,{type:"primary"},{default:s(()=>[...n[50]||(n[50]=[l(" 下方显示菜单 ",-1),o("i",{class:"zmz-icon--arrow-bottom"},null,-1)])]),_:1})]),_:1},8,["modelValue","onOnChange"]),t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[6]||(n[6]=p=>E.dropdown=p),onOnChange:r.onChange,placement:"left-end"},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[57]||(n[57]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[58]||(n[58]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[59]||(n[59]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[60]||(n[60]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[61]||(n[61]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[t(y,{type:"primary"},{default:s(()=>[...n[56]||(n[56]=[l(" 左方显示菜单 ",-1),o("i",{class:"zmz-icon--arrow-bottom"},null,-1)])]),_:1})]),_:1},8,["modelValue","onOnChange"]),t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[7]||(n[7]=p=>E.dropdown=p),onOnChange:r.onChange,placement:"right-end"},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[63]||(n[63]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[64]||(n[64]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[65]||(n[65]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[66]||(n[66]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[67]||(n[67]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[t(y,{type:"primary"},{default:s(()=>[...n[62]||(n[62]=[l(" 右方显示菜单 ",-1),o("i",{class:"zmz-icon--arrow-bottom"},null,-1)])]),_:1})]),_:1},8,["modelValue","onOnChange"])]),_:1})]),t(m,null,{desc:s(()=>[...n[68]||(n[68]=[])]),highlight:s(()=>[...n[69]||(n[69]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"top"'),o("span",{style:{color:"#E1E4E8"}}," >")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#B392F0"}},"  type"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"primary"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    上方显示菜单")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"bottom"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#B392F0"}},"  type"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"primary"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    下方显示菜单")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"left-end"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#B392F0"}},"  type"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"primary"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    左方显示菜单")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"right-end"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#B392F0"}},"  type"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"primary"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    右方显示菜单")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            dropdown: "),o("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:s(()=>[...n[70]||(n[70]=[])]),default:s(()=>[n[71]||(n[71]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="top" >
                <zmz-button  type="primary">
                    上方显示菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="bottom">
                <zmz-button  type="primary">
                    下方显示菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="left-end">
                <zmz-button  type="primary">
                    左方显示菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="right-end">
                <zmz-button  type="primary">
                    右方显示菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
<\/script>
`)],-1))]),_:1}),n[128]||(n[128]=o("h2",{id:"%E8%A7%A6%E5%8F%91%E5%9B%9E%E8%B0%83",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#%E8%A7%A6%E5%8F%91%E5%9B%9E%E8%B0%83"},"#"),l(" 触发回调")],-1)),n[129]||(n[129]=o("p",null,[l("可以使用方法 "),o("code",null,"on-change"),l(" 接收回调变化，默认为选择项下标，可修改index值")],-1)),o("div",v,[t(i,null,{default:s(()=>[t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[8]||(n[8]=p=>E.dropdown=p),onOnVisibleChange:r.onVisibleChange,onOnChange:r.onChange,trigger:"click"},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[72]||(n[72]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[73]||(n[73]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[74]||(n[74]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[75]||(n[75]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[76]||(n[76]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[n[77]||(n[77]=o("div",null,[l("点击触发菜单"),o("i",{class:"zmz-icon--arrow-bottom"})],-1))]),_:1},8,["modelValue","onOnVisibleChange","onOnChange"]),t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[9]||(n[9]=p=>E.dropdown=p),onOnVisibleChange:r.onVisibleChange,onOnChange:r.onChange,trigger:"click"},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,{index:"1"},{default:s(()=>[...n[78]||(n[78]=[l("下拉菜单1",-1)])]),_:1}),t(e,{index:"2"},{default:s(()=>[...n[79]||(n[79]=[l("下拉菜单2",-1)])]),_:1}),t(e,{index:"3"},{default:s(()=>[...n[80]||(n[80]=[l("下拉菜单3",-1)])]),_:1}),t(e,{index:"4"},{default:s(()=>[...n[81]||(n[81]=[l("下拉菜单4",-1)])]),_:1}),t(e,{index:"5"},{default:s(()=>[...n[82]||(n[82]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[n[83]||(n[83]=o("div",null,[l("点击触发菜单"),o("i",{class:"zmz-icon--arrow-bottom"})],-1))]),_:1},8,["modelValue","onOnVisibleChange","onOnChange"])]),_:1})]),t(m,null,{desc:s(()=>[...n[84]||(n[84]=[])]),highlight:s(()=>[...n[85]||(n[85]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-visible-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onVisibleChange"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#B392F0"}}," trigger"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"click"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">点击触发菜单<"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-visible-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onVisibleChange"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#B392F0"}}," trigger"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"click"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">点击触发菜单<"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#B392F0"}}," index"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"1"'),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#B392F0"}}," index"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"2"'),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#B392F0"}}," index"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"3"'),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#B392F0"}}," index"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"4"'),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#B392F0"}}," index"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"5"'),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            dropdown: "),o("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:s(()=>[...n[86]||(n[86]=[])]),default:s(()=>[n[87]||(n[87]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click">
                <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click">
                <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item index="1">下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item index="2">下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item index="3">下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item index="4">下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item index="5">下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
<\/script>
`)],-1))]),_:1}),n[130]||(n[130]=o("h2",{id:"%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81"},"#"),l(" 禁用状态")],-1)),n[131]||(n[131]=o("p",null,[l("可以使用属性 "),o("code",null,"disabled"),l(" 禁用")],-1)),o("div",k,[t(i,null,{default:s(()=>[t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[10]||(n[10]=p=>E.dropdown=p),onOnVisibleChange:r.onVisibleChange,onOnChange:r.onChange,trigger:"click",disabled:""},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[88]||(n[88]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[89]||(n[89]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[90]||(n[90]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[91]||(n[91]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[92]||(n[92]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[n[93]||(n[93]=o("div",null,[l("点击触发菜单"),o("i",{class:"zmz-icon--arrow-bottom"})],-1))]),_:1},8,["modelValue","onOnVisibleChange","onOnChange"])]),_:1})]),t(m,null,{desc:s(()=>[...n[94]||(n[94]=[])]),highlight:s(()=>[...n[95]||(n[95]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," @on-visible-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onVisibleChange"'),o("span",{style:{color:"#B392F0"}}," @on-change"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"onChange"'),o("span",{style:{color:"#B392F0"}}," trigger"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"click"'),o("span",{style:{color:"#B392F0"}}," disabled"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">点击触发菜单<"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            dropdown: "),o("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:s(()=>[...n[96]||(n[96]=[])]),default:s(()=>[n[97]||(n[97]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click" disabled>
                <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
<\/script>
`)],-1))]),_:1}),n[132]||(n[132]=o("h2",{id:"%E4%B8%8B%E6%8B%89%E9%99%90%E5%88%B6%E6%BB%9A%E5%8A%A8%E6%9D%A1",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%8B%E6%8B%89%E9%99%90%E5%88%B6%E6%BB%9A%E5%8A%A8%E6%9D%A1"},"#"),l(" 下拉限制滚动条")],-1)),n[133]||(n[133]=o("p",null,"超多选项下拉出现滚动条和控制宽度",-1)),o("div",x,[t(d,{modelValue:E.dropdown,"onUpdate:modelValue":n[11]||(n[11]=p=>E.dropdown=p),height:"200px",width:"200px"},{dropdown:s(()=>[t(a,null,{default:s(()=>[t(e,null,{default:s(()=>[...n[98]||(n[98]=[l("下拉菜单1",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[99]||(n[99]=[l("下拉菜单2",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[100]||(n[100]=[l("下拉菜单3",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[101]||(n[101]=[l("下拉菜单4",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[102]||(n[102]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[103]||(n[103]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[104]||(n[104]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[105]||(n[105]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[106]||(n[106]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[107]||(n[107]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[108]||(n[108]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[109]||(n[109]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[110]||(n[110]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[111]||(n[111]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[112]||(n[112]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[113]||(n[113]=[l("下拉菜单5",-1)])]),_:1}),t(e,null,{default:s(()=>[...n[114]||(n[114]=[l("下拉菜单5",-1)])]),_:1})]),_:1})]),default:s(()=>[n[115]||(n[115]=o("div",null,[l("下拉菜单"),o("i",{class:"zmz-icon--arrow-bottom"})],-1))]),_:1},8,["modelValue"])]),t(m,null,{desc:s(()=>[...n[116]||(n[116]=[])]),highlight:s(()=>[...n[117]||(n[117]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"dropdown"'),o("span",{style:{color:"#B392F0"}}," height"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"200px"'),o("span",{style:{color:"#B392F0"}}," width"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"200px"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单<"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"zmz-icon--arrow-bottom"'),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"i"),o("span",{style:{color:"#E1E4E8"}},"></"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单1</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单2</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单3</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单4</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">下拉菜单5</"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown-menu"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-dropdown"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            dropdown: "),o("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:s(()=>[...n[118]||(n[118]=[])]),default:s(()=>[n[119]||(n[119]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-dropdown v-model="dropdown" height="200px" width="200px">
            <div>下拉菜单<i class="zmz-icon--arrow-bottom"></i></div>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
<\/script>
`)],-1))]),_:1}),n[134]||(n[134]=D('<h2 id="dropdown-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#dropdown-%E5%B1%9E%E6%80%A7">#</a> Dropdown 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>v-model</td><td>下拉框下标值</td><td>String, Number</td><td>—</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>下拉显示位置</td><td>String</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td><td>—</td></tr><tr><td>show</td><td>下拉是否显示</td><td>Boolean</td><td>—</td><td>false</td><td>—</td></tr><tr><td>height</td><td>下拉盒子的高度</td><td>String</td><td>—</td><td>—</td><td>需要单位</td></tr><tr><td>width</td><td>下拉盒子的宽度</td><td>String</td><td>—</td><td>—</td><td>需要单位</td></tr><tr><td>arrow</td><td>下拉盒子的角</td><td>Boolean</td><td>—</td><td>false</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>—</td><td>false</td><td>—</td></tr><tr><td>teleport</td><td>是否穿梭</td><td>Boolean</td><td>—</td><td>false</td><td></td></tr><tr><td>teleport-dom</td><td>自身是否插入至 位置 元素</td><td>String</td><td>—</td><td>body</td><td></td></tr><tr><td>teleport-class</td><td>自定义穿梭类名</td><td>String/Array</td><td>—</td><td>—</td><td></td></tr><tr><td>trigger</td><td>触发方式</td><td>String</td><td>click/hover</td><td>hover</td><td></td></tr><tr><td>hide-on-click</td><td>点击是否隐藏</td><td>Boolean</td><td>—</td><td>true</td><td></td></tr></tbody></table></div><h2 id="dropdown-item-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#dropdown-item-%E5%B1%9E%E6%80%A7">#</a> Dropdown-item 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>index</td><td>下标值</td><td>String/Number</td><td>—</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>—</td><td>false</td><td>—</td></tr></tbody></table></div><h2 id="dropdown-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#dropdown-%E6%96%B9%E6%B3%95">#</a> Dropdown 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>回调参数</th></tr></thead><tbody><tr><td>on-change</td><td>点击回调事件</td><td>—</td><td>value,index</td></tr><tr><td>on-visible-change</td><td>面板显示触发</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="dropdown-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#dropdown-%E6%8F%92%E6%A7%BD">#</a> Dropdown 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>—</td><td>标题内容</td><td>—</td><td>—</td><td>—</td></tr><tr><td>dropdown</td><td>自定义菜单</td><td>—</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="dropdown-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#dropdown-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Dropdown 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-dropdown-header-color</td><td>–zmz-dropdown-header-color</td><td>默认主题颜色</td><td>字体颜色</td></tr><tr><td>@zmz-dropdown-header-font-size</td><td>–zmz-dropdown-header-font-size</td><td>12px</td><td>字体大小</td></tr><tr><td>@zmz-dropdown-menu-box-shadow</td><td>–zmz-dropdown-menu-box-shadow</td><td>0 1px 6px rgba(0, 0, 0, .2)</td><td>菜单阴影</td></tr><tr><td>@zmz-dropdown-menu-background-color</td><td>–zmz-dropdown-menu-background-color</td><td>#fff</td><td>菜单背景颜色</td></tr><tr><td>@zmz-dropdown-menu-border-radius</td><td>–zmz-dropdown-menu-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-dropdown-item-color</td><td>–zmz-dropdown-item-color</td><td>默认主题颜色</td><td>选项默认颜色</td></tr><tr><td>@zmz-dropdown-item-height</td><td>–zmz-dropdown-item-height</td><td>30px</td><td>选项高度</td></tr><tr><td>@zmz-dropdown-item-font-size</td><td>–zmz-dropdown-item-font-size</td><td>12px</td><td>选项字体大小</td></tr><tr><td>@zmz-dropdown-item-active-color</td><td>–zmz-dropdown-item-active-color</td><td>确认主题颜色</td><td>选项激活</td></tr><tr><td>@zmz-dropdown-item-hover-color</td><td>–zmz-dropdown-item-hover-color</td><td>确认主题颜色</td><td>选项滑过</td></tr><tr><td>@zmz-dropdown-item-hover-background-color</td><td>–zmz-dropdown-item-hover-background-color</td><td>#f4f9fe</td><td>选项滑过背景</td></tr><tr><td>@zmz-dropdown-item-disabled-background-color</td><td>–zmz-dropdown-item-disabled-background-color</td><td>#fff</td><td>选项禁用背景</td></tr></tbody></table></div>',10))])}const U=w(B,[["render",V]]);export{U as default};
