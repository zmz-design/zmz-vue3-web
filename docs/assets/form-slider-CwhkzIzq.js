import{_ as z,c as F,d as m,a as l,e as t,w as a,t as u,b as s,r as i,o as v}from"./index-DyRJxyCP.js";const B={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Slider 滑块"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),valuemin:0,valuemax:100,valuemintwo:0,valuemaxtwo:100,values:5,valuea:[40,55],valueArrs:""}},methods:{currentConfig(r){return this.$setting.currentConfig[r]},onChange(r){console.log(r)},onChangeRange(r){console.log(r)},sliderValright(r){this.valuemaxtwo=r},handleClick(r){this.values=r},handleClickRange(r){this.valuea=r}}},g={class:"zmz-markdown-article"},b={class:"demo-block"},C={style:{"margin-top":"30px"}},k={class:"demo-block"},D={style:{"margin-top":"30px"}},h={class:"demo-block"},f={class:"demo-block"},x={class:"demo-block"};function V(r,o,A,w,n,p){const c=i("zmz-button"),E=i("zmz-slider"),d=i("demo-block"),y=i("zmz-space");return v(),F("div",g,[o[45]||(o[45]=m('<h1 id="slider-%E6%BB%91%E5%9D%97" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#slider-%E6%BB%91%E5%9D%97">#</a> Slider 滑块</h1><hr><h2 id="%E6%A6%82%E8%BF%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%A6%82%E8%BF%B0">#</a> 概述</h2><p>通过拖动滑块在一个固定区间内进行选择</p><h2 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">#</a> 基础用法</h2><p>在拖动滑块时，显示当前值</p>',6)),l("div",b,[t(c,{onClick:o[0]||(o[0]=e=>p.handleClick(50))},{default:a(()=>[...o[19]||(o[19]=[s("等于50",-1)])]),_:1}),t(c,{style:{"margin-left":"30px"},onClick:o[1]||(o[1]=e=>p.handleClick(10))},{default:a(()=>[...o[20]||(o[20]=[s("等于10",-1)])]),_:1}),t(c,{style:{"margin-left":"30px"},onClick:o[2]||(o[2]=e=>p.handleClick(60))},{default:a(()=>[...o[21]||(o[21]=[s("等于60",-1)])]),_:1}),t(E,{onOnChange:p.onChange,modelValue:n.values,"onUpdate:modelValue":o[3]||(o[3]=e=>n.values=e)},null,8,["onOnChange","modelValue"]),l("div",C,"v-model:"+u(n.values),1)]),t(d,null,{desc:a(()=>[...o[22]||(o[22]=[])]),highlight:a(()=>[...o[23]||(o[23]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleClick(50)"'),l("span",{style:{color:"#E1E4E8"}},">等于50</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleClick(10)"'),l("span",{style:{color:"#E1E4E8"}},">等于10</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleClick(60)"'),l("span",{style:{color:"#E1E4E8"}},">等于60</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," @on-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onChange"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"values"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-top:30px"'),l("span",{style:{color:"#E1E4E8"}},">v-model:{{values}}</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            values: "),l("span",{style:{color:"#79B8FF"}},"5")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onChange"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"val"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(val)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        handleClick"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"val"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".values "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," val")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[24]||(o[24]=[])]),default:a(()=>[o[25]||(o[25]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-button @click="handleClick(50)">等于50</zmz-button>
        <zmz-button @click="handleClick(10)">等于10</zmz-button>
        <zmz-button @click="handleClick(60)">等于60</zmz-button>
        <zmz-slider @on-change="onChange" v-model="values"></zmz-slider>
        <div style="margin-top:30px">v-model:{{values}}</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            values: 5
        }
    },
    methods: {
        onChange (val) {
            console.log(val)
        },
        handleClick(val) {
            this.values = val
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[46]||(o[46]=l("h2",{id:"%E5%8C%BA%E9%97%B4%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8C%BA%E9%97%B4%E7%94%A8%E6%B3%95"},"#"),s(" 区间用法")],-1)),o[47]||(o[47]=l("p",null,[s("添加 "),l("code",null,"range"),s(" 属性，进行区间拖动")],-1)),l("div",k,[t(c,{onClick:o[4]||(o[4]=e=>p.handleClickRange(["10","40"]))},{default:a(()=>[...o[26]||(o[26]=[s("等于['10', '40']",-1)])]),_:1}),t(c,{style:{"margin-left":"30px"},onClick:o[5]||(o[5]=e=>p.handleClickRange(["40","60"]))},{default:a(()=>[...o[27]||(o[27]=[s("等于['40', '60']",-1)])]),_:1}),t(c,{style:{"margin-left":"30px"},onClick:o[6]||(o[6]=e=>p.handleClickRange(["50","30"]))},{default:a(()=>[...o[28]||(o[28]=[s("等于['50', '30']",-1)])]),_:1}),t(E,{style:{"margin-top":"30px"},onOnChange:p.onChangeRange,modelValue:n.valuea,"onUpdate:modelValue":o[7]||(o[7]=e=>n.valuea=e),range:""},null,8,["onOnChange","modelValue"]),l("div",D,"v-model:"+u(n.valuea),1)]),t(d,null,{desc:a(()=>[...o[29]||(o[29]=[])]),highlight:a(()=>[...o[30]||(o[30]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"handleClickRange(['10', '40'])"`),l("span",{style:{color:"#E1E4E8"}},">等于['10', '40']</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"handleClickRange(['40', '60'])"`),l("span",{style:{color:"#E1E4E8"}},">等于['40', '60']</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"handleClickRange(['50', '30'])"`),l("span",{style:{color:"#E1E4E8"}},">等于['50', '30']</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}},"  style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-top:30px"'),l("span",{style:{color:"#B392F0"}}," @on-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onChangeRange"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"valuea"'),l("span",{style:{color:"#B392F0"}}," range"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-top:30px"'),l("span",{style:{color:"#E1E4E8"}},">v-model:{{valuea}}</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            valuea: ["),l("span",{style:{color:"#79B8FF"}},"40"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"55"),l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onChangeRange"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"val"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(val)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        handleClickRange"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"val"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".valuea "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," val")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[31]||(o[31]=[])]),default:a(()=>[o[32]||(o[32]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-button @click="handleClickRange(['10', '40'])">等于['10', '40']</zmz-button>
        <zmz-button @click="handleClickRange(['40', '60'])">等于['40', '60']</zmz-button>
        <zmz-button @click="handleClickRange(['50', '30'])">等于['50', '30']</zmz-button>
        <zmz-slider  style="margin-top:30px" @on-change="onChangeRange" v-model="valuea" range></zmz-slider>
        <div style="margin-top:30px">v-model:{{valuea}}</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            valuea: [40, 55]
        }
    },
    methods: {
        onChangeRange (val) {
            console.log(val)
        },
        handleClickRange(val) {
            this.valuea = val
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[48]||(o[48]=l("h2",{id:"%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB"},"#"),s(" 禁用只读")],-1)),o[49]||(o[49]=l("p",null,[l("code",null,"disabled"),s("属性禁用， "),l("code",null,"readonly"),s(" 属性只读")],-1)),l("div",h,[t(E,{disabled:"",modelValue:n.values,"onUpdate:modelValue":o[8]||(o[8]=e=>n.values=e)},null,8,["modelValue"]),t(E,{disabled:"",modelValue:n.valuea,"onUpdate:modelValue":o[9]||(o[9]=e=>n.valuea=e),range:""},null,8,["modelValue"]),t(E,{readonly:"",modelValue:n.values,"onUpdate:modelValue":o[10]||(o[10]=e=>n.values=e)},null,8,["modelValue"]),t(E,{readonly:"",modelValue:n.valuea,"onUpdate:modelValue":o[11]||(o[11]=e=>n.valuea=e),range:""},null,8,["modelValue"])]),t(d,null,{desc:a(()=>[...o[33]||(o[33]=[])]),highlight:a(()=>[...o[34]||(o[34]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}},"  v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"values"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}},"  v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"valuea"'),l("span",{style:{color:"#B392F0"}}," range"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#B392F0"}},"  v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"values"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#B392F0"}},"  v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"valuea"'),l("span",{style:{color:"#B392F0"}}," range"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            values: "),l("span",{style:{color:"#79B8FF"}},"5"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            valuea: ["),l("span",{style:{color:"#79B8FF"}},"40"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"55"),l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[35]||(o[35]=[])]),default:a(()=>[o[36]||(o[36]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-slider disabled  v-model="values"></zmz-slider>
        <zmz-slider disabled  v-model="valuea" range></zmz-slider>
        <zmz-slider readonly  v-model="values"></zmz-slider>
        <zmz-slider readonly  v-model="valuea" range></zmz-slider>
    </div>
</template>
<script>
export default {
    data () {
        return {
            values: 5,
            valuea: [40, 55]
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[50]||(o[50]=l("h2",{id:"%E5%9E%82%E7%9B%B4%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9E%82%E7%9B%B4%E7%94%A8%E6%B3%95"},"#"),s(" 垂直用法")],-1)),o[51]||(o[51]=l("p",null,[l("code",null,"disabled"),s("属性禁用")],-1)),l("div",f,[t(y,null,{default:a(()=>[t(E,{vertical:"",height:"200",modelValue:n.values,"onUpdate:modelValue":o[12]||(o[12]=e=>n.values=e)},null,8,["modelValue"]),t(E,{vertical:"",style:{"margin-left":"20px"},height:"200",modelValue:n.valuea,"onUpdate:modelValue":o[13]||(o[13]=e=>n.valuea=e),range:""},null,8,["modelValue"])]),_:1})]),t(d,null,{desc:a(()=>[...o[37]||(o[37]=[])]),highlight:a(()=>[...o[38]||(o[38]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," vertical"),l("span",{style:{color:"#B392F0"}}," height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"values"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," vertical"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-left: 20px;"'),l("span",{style:{color:"#B392F0"}}," height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"valuea"'),l("span",{style:{color:"#B392F0"}}," range"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            values: "),l("span",{style:{color:"#79B8FF"}},"5"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            valuea: ["),l("span",{style:{color:"#79B8FF"}},"40"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"55"),l("span",{style:{color:"#E1E4E8"}},"]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[39]||(o[39]=[])]),default:a(()=>[o[40]||(o[40]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-slider vertical height="200" v-model="values"></zmz-slider>
            <zmz-slider vertical style="margin-left: 20px;" height="200" v-model="valuea" range></zmz-slider>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            values: 5,
            valuea: [40, 55]
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[52]||(o[52]=l("h2",{id:"%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8"},"#"),s(" 不同尺寸")],-1)),o[53]||(o[53]=l("p",null,"提供多种尺寸",-1)),l("div",x,[t(y,{mode:"vertical"},{default:a(()=>[t(E,{modelValue:n.values,"onUpdate:modelValue":o[14]||(o[14]=e=>n.values=e),size:"large"},null,8,["modelValue"]),t(E,{modelValue:n.values,"onUpdate:modelValue":o[15]||(o[15]=e=>n.values=e),size:"medium"},null,8,["modelValue"]),t(E,{modelValue:n.values,"onUpdate:modelValue":o[16]||(o[16]=e=>n.values=e),size:"default"},null,8,["modelValue"]),t(E,{modelValue:n.values,"onUpdate:modelValue":o[17]||(o[17]=e=>n.values=e),size:"small"},null,8,["modelValue"]),t(E,{modelValue:n.values,"onUpdate:modelValue":o[18]||(o[18]=e=>n.values=e),size:"mini"},null,8,["modelValue"])]),_:1})]),t(d,null,{desc:a(()=>[...o[41]||(o[41]=[])]),highlight:a(()=>[...o[42]||(o[42]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"values"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"values"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"values"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"values"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"values"'),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            values: "),l("span",{style:{color:"#79B8FF"}},"5"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[43]||(o[43]=[])]),default:a(()=>[o[44]||(o[44]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-slider v-model="values" size="large"></zmz-slider>
            <zmz-slider v-model="values" size="medium"></zmz-slider>
            <zmz-slider v-model="values" size="default"></zmz-slider>
            <zmz-slider v-model="values" size="small"></zmz-slider>
            <zmz-slider v-model="values" size="mini"></zmz-slider>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            values: 5,
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[54]||(o[54]=m('<h2 id="slider-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#slider-%E5%B1%9E%E6%80%A7">#</a> Slider 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>默认值</td><td>Array/Number/String</td><td>—</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td></tr><tr><td>min</td><td>范围最小值</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>范围最大值</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>range</td><td>区间模式</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>readonly</td><td>只读</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>vertical</td><td>是否竖向拖拽</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="slider-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#slider-%E6%96%B9%E6%B3%95">#</a> Slider 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>动态回调</td><td>Array/Number/String</td></tr></tbody></table></div><h2 id="slider-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#slider-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Slider 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-slider-size</td><td>–zmz-slider-size</td><td>32px</td><td>大小</td></tr><tr><td>@zmz-slider-border-radius</td><td>–zmz-slider-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-slider-line-background-color</td><td>–zmz-slider-line-background-color</td><td>#e6e6e9</td><td>线默认颜色</td></tr><tr><td>@zmz-slider-line-bar-background-color</td><td>–zmz-slider-line-bar-background-color</td><td>确认主题颜色</td><td>线激活颜色</td></tr><tr><td>@zmz-slider-line-size</td><td>–zmz-slider-line-size</td><td>5px</td><td>线宽或高</td></tr><tr><td>@zmz-slider-dot-border-color</td><td>–zmz-slider-dot-border-color</td><td>确认主题颜色</td><td>点边线</td></tr><tr><td>@zmz-slider-dot-background-color</td><td>–zmz-slider-dot-background-color</td><td>#fff</td><td>点背景色</td></tr></tbody></table></div>',6))])}const U=z(B,[["render",V]]);export{U as default};
