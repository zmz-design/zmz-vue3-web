import{_ as f,c as d,a as l,b as s,e as a,w as o,d as x,r as F,o as E,F as i,f as m,g as z}from"./index-DyRJxyCP.js";const g={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Select 选择器"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),select:"Beijing",options:[{value:"Beijing",label:"北京"},{value:"Shenzhen",label:"深圳"},{value:"Guangzhou",label:"广州"},{value:"Dalian",label:"大连"}],options2:[{value:"Beijing",label:"北京"},{value:"Shenzhen",label:"深圳",disabled:!0},{value:"Guangzhou",label:"广州"},{value:"Dalian",label:"大连"}],options1:[{label:"热门城市",options:[{value:"Shanghai",label:"上海"},{value:"Beijing",label:"北京"}]},{label:"城市名",options:[{value:"Chengdu",label:"成都"},{value:"Shenzhen",label:"深圳"},{value:"Guangzhou",label:"广州",disabled:!0},{value:"Dalian",label:"大连"}]}]}},methods:{currentConfig(u){return this.$setting.currentConfig[u]},onChange(u){console.log(u)}}},D={class:"zmz-markdown-article"},k={class:"demo-block"},w={class:"demo-block"},A={class:"demo-block"},V={class:"demo-block"},S={class:"demo-block"},j={class:"demo-block"};function G(u,e,U,N,n,b){const r=F("zmz-select-option"),c=F("zmz-select"),y=F("demo-block"),v=F("zmz-space"),h=F("zmz-select-option-group");return E(),d("div",D,[e[35]||(e[35]=l("h1",{id:"select-%E9%80%89%E6%8B%A9%E5%99%A8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#select-%E9%80%89%E6%8B%A9%E5%99%A8"},"#"),s(" Select 选择器")],-1)),e[36]||(e[36]=l("hr",null,null,-1)),e[37]||(e[37]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),e[38]||(e[38]=l("p",null,"当选项过多时，使用下拉菜单展示并选择内容。",-1)),l("div",k,[a(c,{onOnChange:b.onChange,modelValue:n.select,"onUpdate:modelValue":e[0]||(e[0]=t=>n.select=t),placeholder:"请选择",clearbtn:"",style:{width:"200px"}},{default:o(()=>[(E(!0),d(i,null,m(n.options,(t,p)=>(E(),z(r,{value:t.value,label:t.label,key:p},null,8,["value","label"]))),128))]),_:1},8,["onOnChange","modelValue"])]),a(y,null,{desc:o(()=>[...e[11]||(e[11]=[])]),highlight:o(()=>[...e[12]||(e[12]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," @on-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onChange"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(item,index) in options"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.value"'),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.label"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"index"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            select: "),l("span",{style:{color:"#9ECBFF"}},"'Beijing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Beijing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'北京'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Shenzhen'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'深圳'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Guangzhou'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'广州'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Dalian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'大连'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...e[13]||(e[13]=[])]),default:o(()=>[e[14]||(e[14]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-select @on-change="onChange" v-model="select" placeholder="请选择" clearbtn style="width:200px;">
            <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
        </zmz-select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: 'Beijing',
            options: [
                {
                    value: 'Beijing',
                    label: '北京'
                },
                {
                    value: 'Shenzhen',
                    label: '深圳'
                },
                {
                    value: 'Guangzhou',
                    label: '广州'
                },
                {
                    value: 'Dalian',
                    label: '大连'
                }
            ],
        }
    }
}
<\/script>

`)],-1))]),_:1}),e[39]||(e[39]=l("h2",{id:"%E7%A6%81%E7%94%A8%E9%80%89%E9%A1%B9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E9%80%89%E9%A1%B9"},"#"),s(" 禁用选项")],-1)),e[40]||(e[40]=l("p",null,"有禁用选项，不能提供选择",-1)),l("div",w,[a(c,{modelValue:n.select,"onUpdate:modelValue":e[1]||(e[1]=t=>n.select=t),placeholder:"请选择",style:{width:"200px"}},{default:o(()=>[(E(!0),d(i,null,m(n.options2,(t,p)=>(E(),z(r,{disabled:t.disabled,value:t.value,label:t.label,key:p},null,8,["disabled","value","label"]))),128))]),_:1},8,["modelValue"])]),a(y,null,{desc:o(()=>[...e[15]||(e[15]=[])]),highlight:o(()=>[...e[16]||(e[16]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(item,index) in options2"'),l("span",{style:{color:"#B392F0"}}," :disabled"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.disabled"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.value"'),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.label"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"index"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            select: "),l("span",{style:{color:"#9ECBFF"}},"'Beijing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Beijing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'北京'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Shenzhen'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'深圳'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Guangzhou'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'广州'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Dalian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'大连'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...e[17]||(e[17]=[])]),default:o(()=>[e[18]||(e[18]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-select v-model="select" placeholder="请选择" style="width:200px;">
            <zmz-select-option v-for="(item,index) in options2" :disabled="item.disabled" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
        </zmz-select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: 'Beijing',
            options: [
                {
                    value: 'Beijing',
                    label: '北京'
                },
                {
                    value: 'Shenzhen',
                    label: '深圳'
                },
                {
                    value: 'Guangzhou',
                    label: '广州'
                },
                {
                    value: 'Dalian',
                    label: '大连'
                }
            ],
        }
    }
}
<\/script>

`)],-1))]),_:1}),e[41]||(e[41]=l("h2",{id:"%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81"},"#"),s(" 禁用只读状态")],-1)),e[42]||(e[42]=l("p",null,[s("添加"),l("code",null,"disabled"),s("禁用，添加"),l("code",null,"readonly"),s("只读")],-1)),l("div",A,[a(v,null,{default:o(()=>[a(c,{modelValue:n.select,"onUpdate:modelValue":e[2]||(e[2]=t=>n.select=t),placeholder:"请选择",style:{width:"200px"},disabled:""},{default:o(()=>[(E(!0),d(i,null,m(n.options2,(t,p)=>(E(),z(r,{value:t.value,label:t.label,key:p},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),a(c,{modelValue:n.select,"onUpdate:modelValue":e[3]||(e[3]=t=>n.select=t),placeholder:"请选择",style:{width:"200px"},readonly:""},{default:o(()=>[(E(!0),d(i,null,m(n.options2,(t,p)=>(E(),z(r,{value:t.value,label:t.label,key:p},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),a(y,null,{desc:o(()=>[...e[19]||(e[19]=[])]),highlight:o(()=>[...e[20]||(e[20]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(item,index) in options2"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.value"'),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.label"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"index"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(item,index) in options2"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.value"'),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.label"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"index"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            select: "),l("span",{style:{color:"#9ECBFF"}},"'Beijing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Beijing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'北京'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Shenzhen'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'深圳'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Guangzhou'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'广州'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Dalian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'大连'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...e[21]||(e[21]=[])]),default:o(()=>[e[22]||(e[22]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-select v-model="select" placeholder="请选择" style="width:200px;" disabled>
                <zmz-select-option v-for="(item,index) in options2" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" placeholder="请选择" style="width:200px;" readonly>
                <zmz-select-option v-for="(item,index) in options2" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
            </zmz-select>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: 'Beijing',
            options: [
                {
                    value: 'Beijing',
                    label: '北京'
                },
                {
                    value: 'Shenzhen',
                    label: '深圳'
                },
                {
                    value: 'Guangzhou',
                    label: '广州'
                },
                {
                    value: 'Dalian',
                    label: '大连'
                }
            ],
        }
    }
}
<\/script>

`)],-1))]),_:1}),e[43]||(e[43]=l("h2",{id:"%E5%88%86%E7%BB%84%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%88%86%E7%BB%84%E7%94%A8%E6%B3%95"},"#"),s(" 分组用法")],-1)),e[44]||(e[44]=l("p",null,"当选项过多时，使用分组展示内容。",-1)),l("div",V,[a(c,{onOnChange:b.onChange,modelValue:n.select,"onUpdate:modelValue":e[4]||(e[4]=t=>n.select=t),placeholder:"请选择",style:{width:"200px"}},{default:o(()=>[(E(!0),d(i,null,m(n.options1,(t,p)=>(E(),z(h,{key:p,label:t.label},{default:o(()=>[(E(!0),d(i,null,m(t.options,(B,C)=>(E(),z(r,{disabled:B.disabled,value:B.value,label:B.label,key:C},null,8,["disabled","value","label"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["onOnChange","modelValue"])]),a(y,null,{desc:o(()=>[...e[23]||(e[23]=[])]),highlight:o(()=>[...e[24]||(e[24]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option-group"),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(item,index) in options1"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"index"'),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.label"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(items,indexs) in item.options"'),l("span",{style:{color:"#B392F0"}}," :disabled"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"items.disabled"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"items.value"'),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"items.label"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"indexs"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-select-option-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            select: "),l("span",{style:{color:"#9ECBFF"}},"'Beijing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                label: "),l("span",{style:{color:"#9ECBFF"}},"'热门城市'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                options: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Shanghai'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'上海'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Beijing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'北京'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                label: "),l("span",{style:{color:"#9ECBFF"}},"'城市名'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                options: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Chengdu'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'成都'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Shenzhen'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'深圳'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Guangzhou'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'广州'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'Dalian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'大连'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...e[25]||(e[25]=[])]),default:o(()=>[e[26]||(e[26]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-select v-model="select" placeholder="请选择" style="width:200px;">
            <zmz-select-option-group v-for="(item,index) in options1" :key="index" :label="item.label">
                <zmz-select-option v-for="(items,indexs) in item.options" :disabled="items.disabled" :value="items.value" :label="items.label" :key="indexs"></zmz-select-option>
            </zmz-select-option-group>
        </zmz-select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: 'Beijing',
            options: [{
                label: '热门城市',
                options: [{
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Beijing',
                    label: '北京'
                }]
            }, {
                label: '城市名',
                options: [{
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }, {
                    value: 'Dalian',
                    label: '大连'
                }]
            }]
        }
    }
}
<\/script>

`)],-1))]),_:1}),e[45]||(e[45]=l("h2",{id:"%E9%80%89%E9%A1%B9%E4%B8%BA%E7%A9%BA",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E9%80%89%E9%A1%B9%E4%B8%BA%E7%A9%BA"},"#"),s(" 选项为空")],-1)),e[46]||(e[46]=l("p",null,"当选项不存在的补位。",-1)),l("div",S,[a(c,{modelValue:n.select,"onUpdate:modelValue":e[5]||(e[5]=t=>n.select=t),placeholder:"请选择",style:{width:"200px"}},null,8,["modelValue"])]),a(y,null,{desc:o(()=>[...e[27]||(e[27]=[])]),highlight:o(()=>[...e[28]||(e[28]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            select: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...e[29]||(e[29]=[])]),default:o(()=>[e[30]||(e[30]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-select v-model="select" placeholder="请选择" style="width:200px;"></zmz-select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: ''
        }
    }
}
<\/script>

`)],-1))]),_:1}),e[47]||(e[47]=l("h2",{id:"%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8"},"#"),s(" 不同尺寸")],-1)),e[48]||(e[48]=l("p",null,"当选项不存在的补位。",-1)),l("div",j,[a(v,{mode:"vertical"},{default:o(()=>[a(c,{modelValue:n.select,"onUpdate:modelValue":e[6]||(e[6]=t=>n.select=t),size:"large",placeholder:"请选择大尺寸",style:{width:"200px"}},{default:o(()=>[a(r,{value:"large",label:"大尺寸"})]),_:1},8,["modelValue"]),a(c,{modelValue:n.select,"onUpdate:modelValue":e[7]||(e[7]=t=>n.select=t),size:"medium",placeholder:"请选择中等尺寸",style:{width:"200px"}},{default:o(()=>[a(r,{value:"medium",label:"中等尺寸"})]),_:1},8,["modelValue"]),a(c,{modelValue:n.select,"onUpdate:modelValue":e[8]||(e[8]=t=>n.select=t),size:"default",placeholder:"请选择默认尺寸",style:{width:"200px"}},{default:o(()=>[a(r,{value:"default",label:"默认尺寸"})]),_:1},8,["modelValue"]),a(c,{modelValue:n.select,"onUpdate:modelValue":e[9]||(e[9]=t=>n.select=t),size:"small",placeholder:"请选择小尺寸",style:{width:"200px"}},{default:o(()=>[a(r,{value:"small",label:"小尺寸"})]),_:1},8,["modelValue"]),a(c,{modelValue:n.select,"onUpdate:modelValue":e[10]||(e[10]=t=>n.select=t),size:"mini",placeholder:"请选择迷你尺寸",style:{width:"200px"}},{default:o(()=>[a(r,{value:"mini",label:"迷你尺寸"})]),_:1},8,["modelValue"])]),_:1})]),a(y,null,{desc:o(()=>[...e[31]||(e[31]=[])]),highlight:o(()=>[...e[32]||(e[32]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择大尺寸"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"大尺寸"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择中等尺寸"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"中等尺寸"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择默认尺寸"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"默认尺寸"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择小尺寸"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"小尺寸"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择迷你尺寸"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:200px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"迷你尺寸"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            select: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...e[33]||(e[33]=[])]),default:o(()=>[e[34]||(e[34]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-select v-model="select" size="large" placeholder="请选择大尺寸" style="width:200px;">
                <zmz-select-option value="large" label="大尺寸"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" size="medium" placeholder="请选择中等尺寸" style="width:200px;">
                <zmz-select-option value="medium" label="中等尺寸"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" size="default" placeholder="请选择默认尺寸" style="width:200px;">
                <zmz-select-option value="default" label="默认尺寸"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" size="small" placeholder="请选择小尺寸" style="width:200px;">
                <zmz-select-option value="small" label="小尺寸"></zmz-select-option>
            </zmz-select>
            <zmz-select v-model="select" size="mini" placeholder="请选择迷你尺寸" style="width:200px;">
                <zmz-select-option value="mini" label="迷你尺寸"></zmz-select-option>
            </zmz-select>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select: ''
        }
    }
}
<\/script>

`)],-1))]),_:1}),e[49]||(e[49]=x('<h2 id="select-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#select-%E5%B1%9E%E6%80%A7">#</a> Select 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>v-model</td><td>绑定显示参数</td><td>boolean</td><td>—</td><td>false</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td><td></td></tr><tr><td>name</td><td>select input 的 name 属性</td><td>String</td><td>—</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td><td>—</td></tr><tr><td>readonly</td><td>只读</td><td>Boolean</td><td>—</td><td>false</td><td>—</td></tr><tr><td>clearbtn</td><td>清空按钮</td><td>Boolean</td><td>—</td><td>false</td><td>—</td></tr><tr><td>placeholder</td><td>输入时需要显示的提示文案</td><td>String</td><td>请选择</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>原生属性，自动补全</td><td>String</td><td>on, off</td><td>off</td><td>—</td></tr><tr><td>open</td><td>是否默认打开</td><td>Boolean</td><td>—</td><td>false</td><td>—</td></tr><tr><td>empty-text</td><td>空数据文本</td><td>String</td><td>—</td><td>暂无数据</td><td>—</td></tr><tr><td>prefix</td><td>是否强制显示前缀图标</td><td>Boolean</td><td>—</td><td>false</td><td></td></tr><tr><td>suffix</td><td>是否强制显示后缀图标</td><td>Boolean</td><td>—</td><td>true</td><td></td></tr><tr><td>prefix-icon</td><td>更换添加前缀图标</td><td>String</td><td>—</td><td>—</td><td></td></tr><tr><td>suffix-icon</td><td>更换添加后缀图标</td><td>String</td><td>—</td><td>—</td><td></td></tr><tr><td>teleport</td><td>是否穿梭</td><td>Boolean</td><td>—</td><td>false</td><td></td></tr><tr><td>teleport-dom</td><td>自身是否插入至 位置 元素</td><td>String</td><td>—</td><td>body</td><td></td></tr><tr><td>teleport-class</td><td>自定义穿梭类名</td><td>String/Array</td><td>—</td><td>—</td><td></td></tr><tr><td>placement</td><td>下拉显示位置</td><td>String</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td><td>—</td></tr><tr><td>arrow</td><td>下拉盒子的角</td><td>Boolean</td><td>—</td><td>true</td><td>—</td></tr><tr><td>offset</td><td>盒子偏移</td><td>Array</td><td>—</td><td>[0, 10]</td><td>—</td></tr><tr><td>popper-options</td><td>popper2.js 的参数</td><td>Array</td><td>—</td><td>[]</td><td>参考 popper.js 文档</td></tr></tbody></table></div><h2 id="select.option%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#select.option%E5%B1%9E%E6%80%A7">#</a> Select.option属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>label</td><td>选项的标签</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用当前项</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="select.option-group%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#select.option-group%E5%B1%9E%E6%80%A7">#</a> Select.option-group属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>分组标签</td><td>string</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="select-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#select-%E6%96%B9%E6%B3%95">#</a> Select 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>value值改变时触发</td><td>value</td></tr><tr><td>on-focus</td><td>input获取焦点是触发</td><td>true</td></tr><tr><td>on-blur</td><td>input失去焦点触发，下拉框关闭</td><td>true</td></tr><tr><td>on-clear</td><td>input清空时触发</td><td>—</td></tr><tr><td>on-open-before</td><td>打开之前</td><td>—</td></tr><tr><td>on-open</td><td>打开中</td><td>—</td></tr><tr><td>on-open-after</td><td>打开之后</td><td>—</td></tr><tr><td>on-close-before</td><td>关闭之前</td><td>—</td></tr><tr><td>on-close</td><td>关闭中</td><td>—</td></tr><tr><td>on-close-after</td><td>关闭之后</td><td>—</td></tr></tbody></table></div><h2 id="select-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#select-%E6%8F%92%E6%A7%BD">#</a> Select 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>option插槽</td></tr><tr><td>empty</td><td>无选项自定义插槽</td></tr></tbody></table></div><h2 id="select-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#select-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Select 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-select-height</td><td>–zmz-select-height</td><td>32px</td><td>高度</td></tr><tr><td>@zmz-select-background-color</td><td>–zmz-select-background-color</td><td>#fff</td><td>背景颜色</td></tr><tr><td>@zmz-select-padding</td><td>–zmz-select-padding</td><td>8px</td><td>内边距</td></tr><tr><td>@zmz-select-font-size</td><td>–zmz-select-font-size</td><td>12px</td><td>字体大小</td></tr><tr><td>@zmz-select-text-color</td><td>–zmz-select-text-color</td><td>默认主题颜色</td><td>字体颜色</td></tr><tr><td>@zmz-select-text-active-color</td><td>–zmz-select-text-active-color</td><td>确认主题颜色</td><td>字体激活颜色</td></tr><tr><td>@zmz-select-text-hover-color</td><td>–zmz-select-text-hover-color</td><td>确认主题颜色</td><td>字体滑过颜色</td></tr><tr><td>@zmz-select-text-background-color</td><td>–zmz-select-text-background-color</td><td>#fff</td><td>字体背景颜色</td></tr><tr><td>@zmz-select-placeholder-color</td><td>–zmz-select-placeholder-color</td><td>#99a4b2</td><td>占位符颜色</td></tr><tr><td>@zmz-select-border-radius</td><td>–zmz-select-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-select-border-color</td><td>–zmz-select-border-color</td><td>#e3e6ef</td><td>默认边线颜色</td></tr><tr><td>@zmz-select-border-hover-color</td><td>–zmz-select-border-hover-color</td><td>#d2d5dc</td><td>滑过边线颜色</td></tr><tr><td>@zmz-select-border-active-color</td><td>–zmz-select-select-active-color</td><td>确认主题颜色</td><td>激活边线颜色</td></tr><tr><td>@zmz-select-suffix-icon-color</td><td>–zmz-select-suffix-icon-color</td><td>#8794a5</td><td>后缀图标颜色</td></tr><tr><td>@zmz-select-suffix-icon-size</td><td>–zmz-select-suffix-icon-size</td><td>12px</td><td>后缀图标大小</td></tr><tr><td>@zmz-select-prefix-icon-color</td><td>–zmz-select-prefix-icon-color</td><td>#8794a5</td><td>前缀图标颜色</td></tr><tr><td>@zmz-select-prefix-icon-size</td><td>–zmz-select-prefix-icon-size</td><td>12px</td><td>前缀图标大小</td></tr><tr><td>@zmz-select-empty-text-color</td><td>–zmz-select-empty-text-color</td><td>#909399</td><td>空字体颜色</td></tr><tr><td>@zmz-select-empty-text-font-size</td><td>–zmz-select-empty-text-font-size</td><td>12px</td><td>空字体大小</td></tr><tr><td>@zmz-select-item-text-color</td><td>–zmz-select-item-text-color</td><td>#909399</td><td>选项字体颜色</td></tr><tr><td>@zmz-select-item-text-font-size</td><td>–zmz-select-item-text-font-size</td><td>12px</td><td>选项字体大小</td></tr><tr><td>@zmz-select-group-border-color</td><td>–zmz-select-group-border-color</td><td>#f4f5f9</td><td>组边线颜色</td></tr><tr><td>@zmz-select-group-text-color</td><td>–zmz-select-group-text-color</td><td>#909399</td><td>组字体颜色</td></tr><tr><td>@zmz-select-group-text-font-size</td><td>–zmz-select-group-text-font-size</td><td>12px</td><td>组字体大小</td></tr><tr><td>@zmz-select-menu-background-color</td><td>–zmz-select-menu-background-color</td><td>#fff</td><td>选项背景颜色</td></tr><tr><td>@zmz-select-menu-border-color</td><td>–zmz-select-menu-border-color</td><td>#e3e6ef</td><td>选项线颜色</td></tr><tr><td>@zmz-select-menu-box-shadow</td><td>–zmz-select-menu-box-shadow</td><td>0 2px 12px 0 #e5e5e5</td><td>选项阴影</td></tr></tbody></table></div>',12))])}const I=f(g,[["render",G]]);export{I as default};
