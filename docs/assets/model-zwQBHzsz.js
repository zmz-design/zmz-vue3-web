import{_ as z,c as u,a as l,e,w as o,d as y,b as t,r as c,o as B}from"./index-Bfn7SEZ2.js";const f={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Model 模态框"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),isModel:!1,isModel1:!1,isModel2:!1,isModel3:!1,isModel4:!1}},methods:{modelClick(){this.isModel=!0},modelClick1(){this.isModel1=!0},modelClick2(){this.isModel2=!0},modelClick3(){this.isModel3=!0},modelClick4(){this.isModel4=!0},beforeClose(){return console.log("回调"),!1},currentConfig(i){return this.$setting.currentConfig[i]}}},F={class:"zmz-markdown-article"},b={class:"demo-block"},k={class:"demo-button"},M={class:"demo-block"},C={class:"demo-button"},A={class:"demo-block"},g={class:"demo-button"},h={class:"demo-block"},D={class:"demo-button"};function x(i,s,v,w,n,r){const a=c("zmz-button"),E=c("zmz-model"),p=c("demo-block"),m=c("warning-block");return B(),u("div",F,[l("div",null,[e(E,{modelValue:n.isModel,"onUpdate:modelValue":s[1]||(s[1]=d=>n.isModel=d),title:"提示","before-close":r.beforeClose},{footer:o(()=>[l("div",null,[e(a,{onClick:s[0]||(s[0]=d=>n.isModel=!1)},{default:o(()=>[...s[9]||(s[9]=[t("取消",-1)])]),_:1})])]),default:o(()=>[s[10]||(s[10]=t(" 这是模态框 ",-1))]),_:1},8,["modelValue","before-close"]),e(E,{modelValue:n.isModel1,"onUpdate:modelValue":s[5]||(s[5]=d=>n.isModel1=d),title:"提示","before-close":r.beforeClose},{footer:o(()=>[e(a,{type:"primary",onClick:r.modelClick2,style:{"margin-right":"10px"}},{default:o(()=>[...s[13]||(s[13]=[t("嵌套",-1)])]),_:1},8,["onClick"]),e(a,{onClick:s[4]||(s[4]=d=>n.isModel1=!1)},{default:o(()=>[...s[14]||(s[14]=[t("取消",-1)])]),_:1})]),default:o(()=>[s[15]||(s[15]=t(" 这是嵌套模态框 ",-1)),e(E,{modelValue:n.isModel2,"onUpdate:modelValue":s[3]||(s[3]=d=>n.isModel2=d),title:"提示","before-close":r.beforeClose},{footer:o(()=>[e(a,{onClick:s[2]||(s[2]=d=>n.isModel2=!1)},{default:o(()=>[...s[11]||(s[11]=[t("取消",-1)])]),_:1})]),default:o(()=>[s[12]||(s[12]=t(" 这是嵌套模态框2 ",-1))]),_:1},8,["modelValue","before-close"])]),_:1},8,["modelValue","before-close"]),e(E,{modelValue:n.isModel3,"onUpdate:modelValue":s[7]||(s[7]=d=>n.isModel3=d),title:"提示",center:""},{footer:o(()=>[e(a,{onClick:s[6]||(s[6]=d=>n.isModel3=!1)},{default:o(()=>[...s[16]||(s[16]=[t("取消",-1)])]),_:1})]),default:o(()=>[s[17]||(s[17]=t(" 这是模态框居中 ",-1))]),_:1},8,["modelValue"]),e(E,{modelValue:n.isModel4,"onUpdate:modelValue":s[8]||(s[8]=d=>n.isModel4=d),title:"提示"},{header:o(()=>[...s[18]||(s[18]=[t(" 自定义头部 ",-1)])]),footer:o(()=>[...s[19]||(s[19]=[t(" 自定义底部 ",-1)])]),default:o(()=>[s[20]||(s[20]=t(" 自定义内容 ",-1))]),_:1},8,["modelValue"])]),s[45]||(s[45]=y('<h1 id="model-%E6%A8%A1%E6%80%81%E6%A1%86" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#model-%E6%A8%A1%E6%80%81%E6%A1%86">#</a> Model 模态框</h1><hr><h2 id="%E6%A6%82%E8%BF%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%A6%82%E8%BF%B0">#</a> 概述</h2><p>为当前页面提供其他操作界面，减少页面跳转</p><h2 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">#</a> 基础用法</h2><p>弹出一个模态框</p>',6)),l("div",b,[l("div",k,[e(a,{onClick:r.modelClick},{default:o(()=>[...s[21]||(s[21]=[t("模态框",-1)])]),_:1},8,["onClick"])])]),e(p,null,{desc:o(()=>[...s[22]||(s[22]=[])]),highlight:o(()=>[...s[23]||(s[23]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"isModel"'),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"提示"'),l("span",{style:{color:"#E1E4E8"}}," >")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        这是模态框")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"footer"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"isModel = false"'),l("span",{style:{color:"#E1E4E8"}},">取消</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}},"{")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                isModel: "),l("span",{style:{color:"#79B8FF"}},"false")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }  ")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        methods"),l("span",{style:{color:"#E1E4E8"}},": {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            modelClick"),l("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".isModel "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," true")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"}),t(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...s[24]||(s[24]=[])]),default:o(()=>[s[25]||(s[25]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <zmz-model v-model="isModel" title="提示" >
        这是模态框
        <template #footer>
            <zmz-button @click="isModel = false">取消</zmz-button>
        </template>
    </zmz-model>
</template>
<script>
    export default{
        data() {
            return {
                isModel: false
            }  
        },
        methods: {
            modelClick () {
                this.isModel = true
            }
        }
  }
<\/script>

`)],-1))]),_:1}),s[46]||(s[46]=l("h2",{id:"%E5%B5%8C%E5%A5%97%E5%B1%95%E7%A4%BA",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B5%8C%E5%A5%97%E5%B1%95%E7%A4%BA"},"#"),t(" 嵌套展示")],-1)),s[47]||(s[47]=l("p",null,"弹出多个窗口",-1)),l("div",M,[l("div",C,[e(a,{onClick:r.modelClick1},{default:o(()=>[...s[26]||(s[26]=[t("模态框",-1)])]),_:1},8,["onClick"])])]),e(p,null,{desc:o(()=>[...s[27]||(s[27]=[])]),highlight:o(()=>[...s[28]||(s[28]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"isModel1"'),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"提示"'),l("span",{style:{color:"#E1E4E8"}}," >")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        这是嵌套模态框")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"isModel2"'),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"提示"'),l("span",{style:{color:"#E1E4E8"}}," >")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            这是嵌套模态框2")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"footer"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"isModel2 = false"'),l("span",{style:{color:"#E1E4E8"}},">取消</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"footer"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"modelClick2"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-right:10px"'),l("span",{style:{color:"#E1E4E8"}},">嵌套</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"isModel1 = false"'),l("span",{style:{color:"#E1E4E8"}},">取消</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"  export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}},"{")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"      return"),l("span",{style:{color:"#E1E4E8"}}," {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          isModel1: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          isModel2: "),l("span",{style:{color:"#79B8FF"}},"false")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      }  ")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    methods"),l("span",{style:{color:"#E1E4E8"}},": {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        modelClick1"),l("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".isModel1 "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," true")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        modelClick2"),l("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".isModel2 "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," true")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...s[29]||(s[29]=[])]),default:o(()=>[s[30]||(s[30]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <zmz-model v-model="isModel1" title="提示" >
        这是嵌套模态框
        <zmz-model v-model="isModel2" title="提示" >
            这是嵌套模态框2
            <template #footer>
                <zmz-button @click="isModel2 = false">取消</zmz-button>
            </template>
        </zmz-model>
        <template #footer>
            <zmz-button type="primary" @click="modelClick2" style="margin-right:10px">嵌套</zmz-button>
            <zmz-button @click="isModel1 = false">取消</zmz-button>
        </template>
    </zmz-model>
</template>
<script>
  export default{
    data() {
      return {
          isModel1: false,
          isModel2: false
      }  
    },
    methods: {
        modelClick1 () {
            this.isModel1 = true
        },
        modelClick2 () {
            this.isModel2 = true
        }
    }
  }
<\/script>
`)],-1))]),_:1}),s[48]||(s[48]=l("h2",{id:"%E5%B1%85%E4%B8%AD%E5%B1%95%E7%A4%BA",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B1%85%E4%B8%AD%E5%B1%95%E7%A4%BA"},"#"),t(" 居中展示")],-1)),s[49]||(s[49]=l("p",null,"弹出一个模态框",-1)),l("div",A,[l("div",g,[e(a,{onClick:r.modelClick3},{default:o(()=>[...s[31]||(s[31]=[t("模态框",-1)])]),_:1},8,["onClick"])])]),e(p,null,{desc:o(()=>[...s[32]||(s[32]=[])]),highlight:o(()=>[...s[33]||(s[33]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"isModel3"'),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"提示"'),l("span",{style:{color:"#B392F0"}}," center"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        这是模态框居中")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"footer"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"isModel3 = false"'),l("span",{style:{color:"#E1E4E8"}},">取消</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}},"{")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            isModel3: "),l("span",{style:{color:"#79B8FF"}},"false")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }  ")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    methods"),l("span",{style:{color:"#E1E4E8"}},": {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        modelClick3"),l("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".isModel3 "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," true")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...s[34]||(s[34]=[])]),default:o(()=>[s[35]||(s[35]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <zmz-model v-model="isModel3" title="提示" center>
        这是模态框居中
        <template #footer>
            <zmz-button @click="isModel3 = false">取消</zmz-button>
        </template>
    </zmz-model>
</template>
<script>
export default{
    data() {
        return {
            isModel3: false
        }  
    },
    methods: {
        modelClick3 () {
            this.isModel3 = true
        }
    }
}
<\/script>
`)],-1))]),_:1}),s[50]||(s[50]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%95%E7%A4%BA",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%95%E7%A4%BA"},"#"),t(" 自定义展示")],-1)),s[51]||(s[51]=l("p",null,"使用model插槽，可以自定义头部,内容,底部。",-1)),l("div",h,[l("div",D,[e(a,{onClick:r.modelClick4},{default:o(()=>[...s[36]||(s[36]=[t("模态框",-1)])]),_:1},8,["onClick"])])]),e(p,null,{desc:o(()=>[...s[37]||(s[37]=[])]),highlight:o(()=>[...s[38]||(s[38]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"isModel4"'),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"提示"'),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"header"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            自定义头部")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        自定义内容")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"footer"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            自定义底部")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-model"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}},"{")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            isModel4: "),l("span",{style:{color:"#79B8FF"}},"false")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }  ")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    methods"),l("span",{style:{color:"#E1E4E8"}},": {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        modelClick4"),l("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".isModel4 "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," true")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),t(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...s[39]||(s[39]=[])]),default:o(()=>[s[40]||(s[40]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <zmz-model v-model="isModel4" title="提示">
        <template #header>
            自定义头部
        </template>
        自定义内容
        <template #footer>
            自定义底部
        </template>
    </zmz-model>
</template>
<script>
export default{
    data() {
        return {
            isModel4: false
        }  
    },
    methods: {
        modelClick4 () {
            this.isModel4 = true
        }
    }
}
<\/script>
`)],-1))]),_:1}),s[52]||(s[52]=y('<h2 id="model-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#model-%E5%B1%9E%E6%80%A7">#</a> Model 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否显示 Model 模态框</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>title</td><td>Model模态框的标题</td><td><code>String</code></td><td>—</td><td>—</td></tr><tr><td>width</td><td>Model 的宽度</td><td><code>String</code></td><td>—</td><td>‘400px’</td></tr><tr><td>offset-top</td><td>顶部偏移</td><td><code>String</code></td><td>—</td><td>‘100px’</td></tr><tr><td>model-custom-class</td><td>Drawer 自定义类名</td><td><code>Array</code>/<code>String</code></td><td>—</td><td>—</td></tr><tr><td>model-custom-style</td><td>Drawer 自定义样式</td><td><code>Object</code></td><td>—</td><td>—</td></tr><tr><td>mask</td><td>是否显示遮罩</td><td><code>Boolean</code></td><td>—</td><td>true</td></tr><tr><td>mask-closable</td><td>是否点击遮罩关闭</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>mask-custom-class</td><td>遮罩自定义类名</td><td><code>Array</code>/<code>String</code></td><td>—</td><td>—</td></tr><tr><td>mask-custom-style</td><td>遮罩自定义样式</td><td><code>Object</code></td><td>—</td><td>—</td></tr><tr><td>center</td><td>整体居中</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>header-center</td><td>Model模态框标题居中</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>content-center</td><td>Model模态框内容居中</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>footer-center</td><td>Model模态框底部居中</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>hide-header</td><td>是否隐藏头部</td><td><code>Boolean</code></td><td>—</td><td>true</td></tr><tr><td>hide-footer</td><td>是否隐藏底部</td><td><code>Boolean</code></td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>关闭前操作</td><td><code>Function</code></td><td>return false用于关闭</td><td>—</td></tr><tr><td>show-close-btn</td><td>是否显示关闭按钮</td><td><code>Boolean</code></td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>是否按下esc关闭弹窗</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>border</td><td>是否显示边线</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>teleport</td><td>是否穿梭</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>teleport-dom</td><td>Model 自身是否插入至 位置 元素</td><td><code>String</code></td><td>—</td><td>‘body’</td></tr></tbody></table></div><h2 id="model-slot%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#model-slot%E6%8F%92%E6%A7%BD">#</a> Model slot插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>header</td><td>头部内容插槽</td></tr><tr><td>default</td><td>内容插槽</td></tr><tr><td>footer</td><td>底部内容插槽</td></tr><tr><td>close</td><td>关闭按钮插槽</td></tr></tbody></table></div><h2 id="model-%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#model-%E4%BA%8B%E4%BB%B6">#</a> Model 事件</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-open-before</td><td>打开之前</td><td>—</td></tr><tr><td>on-open</td><td>打开中</td><td>—</td></tr><tr><td>on-open-after</td><td>打开之后</td><td>—</td></tr><tr><td>on-close-before</td><td>关闭之前</td><td>—</td></tr><tr><td>on-close</td><td>关闭中</td><td>—</td></tr><tr><td>on-close-after</td><td>关闭之后</td><td>—</td></tr></tbody></table></div><h2 id="model-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#model-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Model 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-model-mask-background-color</td><td>–zmz-model-mask-background-color</td><td>rgba(0,0,0,.5)</td><td>遮罩背景颜色</td></tr><tr><td>@zmz-model-header-padding</td><td>–zmz-model-header-padding</td><td>12px 16px</td><td>头部内边距</td></tr><tr><td>@zmz-model-body-padding</td><td>–zmz-model-body-padding</td><td>16px</td><td>内容内边距</td></tr><tr><td>@zmz-model-footer-padding</td><td>–zmz-model-footer-padding</td><td>12px 16px</td><td>底部内边距</td></tr><tr><td>@zmz-model-background-color</td><td>–zmz-model-background-color</td><td>#fff</td><td>背景色</td></tr><tr><td>@zmz-model-border-radius</td><td>–zmz-model-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-model-border-color</td><td>–zmz-model-border-color</td><td>#e3e6ef</td><td>边线颜色</td></tr><tr><td>@zmz-model-border-width</td><td>–zmz-model-border-width</td><td>1px</td><td>边线宽度</td></tr><tr><td>@zmz-model-border-style</td><td>–zmz-model-border-style</td><td>solid</td><td>边线样式</td></tr><tr><td>@zmz-model-close-icon-size</td><td>–zmz-model-close-icon-size</td><td>12px</td><td>关闭按钮大小</td></tr><tr><td>@zmz-model-close-icon-color</td><td>–zmz-model-close-icon-color</td><td>默认主题颜色</td><td>关闭按钮颜色</td></tr><tr><td>@zmz-model-title-font-size</td><td>–zmz-model-title-font-size</td><td>16px</td><td>标题字体大小</td></tr><tr><td>@zmz-model-title-color</td><td>–zmz-model-title-color</td><td>默认主题颜色</td><td>标题字体颜色</td></tr><tr><td>@zmz-model-body-font-size</td><td>–zmz-model-body-font-size</td><td>14px</td><td>内容字体大小</td></tr><tr><td>@zmz-model-body-color</td><td>–zmz-model-body-color</td><td>默认主题颜色</td><td>内容字体颜色</td></tr><tr><td>@zmz-model-fonter-font-size</td><td>–zmz-model-fonter-font-size</td><td>14px</td><td>底部字体大小</td></tr><tr><td>@zmz-model-fonter-color</td><td>–zmz-model-fonter-color</td><td>默认主题颜色</td><td>底部字体颜色</td></tr></tbody></table></div><h2 id="%E7%89%B9%E5%88%AB%E6%8F%90%E7%A4%BA" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E7%89%B9%E5%88%AB%E6%8F%90%E7%A4%BA">#</a> 特别提示</h2>',9)),e(m,null,{desc:o(()=>[...s[41]||(s[41]=[])]),highlight:o(()=>[...s[42]||(s[42]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"})])],-1)])]),code:o(()=>[...s[43]||(s[43]=[])]),default:o(()=>[s[44]||(s[44]=l("p",null,"zmz-model 可以进行Attributes 继承",-1))]),_:1})])}const S=z(f,[["render",x]]);export{S as default};
