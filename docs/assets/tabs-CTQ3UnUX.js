import{_ as f,c as z,a as s,b as l,e as n,w as t,t as B,d as v,r as d,o as F,F as C,f as h,g as k}from"./index-DDFEzhq1.js";const x={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{current:0,title:"Tab 选项卡"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),name:"one",position:"top",nameEdit:"0",dataList:[{label:"新窗口0",name:"0",content:"新窗口0"}],nameIndex:1}},methods:{currentConfig(y){return this.$setting.currentConfig[y]},onChange(y,o){if(o=="add"){let c=this.nameIndex++;this.dataList.push({label:"新窗口"+c,name:c,content:"新窗口"+c})}else{this.dataList.forEach((i,e)=>{if(i.name==y){const m=this.dataList[e+1]||this.dataList[e-1];m&&(this.nameEdit=m.name)}});let c=this.dataList.filter(i=>i.name!==y);this.dataList=c}}}},g={class:"zmz-markdown-article"},A={class:"demo-block"},w={class:"demo-block"},L={class:"demo-block"},V={class:"demo-block"},T={class:"demo-block"},N={style:{"margin-bottom":"30px"}},S={class:"demo-block__header"},U={class:"demo-block"},I={class:"demo-block__header"},O={class:"demo-block"},P={class:"demo-block__header"};function j(y,o,c,i,e,m){const E=d("zmz-tabs-item"),r=d("zmz-tabs"),p=d("demo-block"),b=d("zmz-radio"),u=d("zmz-radio-group");return F(),z("div",g,[o[59]||(o[59]=s("h1",{id:"tab-%E9%80%89%E9%A1%B9%E5%8D%A1",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#tab-%E9%80%89%E9%A1%B9%E5%8D%A1"},"#"),l(" Tab 选项卡")],-1)),o[60]||(o[60]=s("hr",null,null,-1)),o[61]||(o[61]=s("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),l(" 基础用法")],-1)),o[62]||(o[62]=s("p",null,"基础的、简洁的选项卡。",-1)),s("div",A,[n(r,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=a=>e.name=a)},{default:t(()=>[n(E,{label:"用户管理",name:"one"},{default:t(()=>[...o[8]||(o[8]=[l("用户管理",-1)])]),_:1}),n(E,{label:"系统管理",name:"two"},{default:t(()=>[...o[9]||(o[9]=[l("系统管理",-1)])]),_:1}),n(E,{label:"数据库备份管理",name:"three"},{default:t(()=>[...o[10]||(o[10]=[l("数据库备份管理",-1)])]),_:1})]),_:1},8,["modelValue"])]),n(p,null,{desc:t(()=>[...o[11]||(o[11]=[])]),highlight:t(()=>[...o[12]||(o[12]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"name"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"用户管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"one"'),s("span",{style:{color:"#E1E4E8"}},">用户管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"系统管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"two"'),s("span",{style:{color:"#E1E4E8"}},">系统管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"数据库备份管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"three"'),s("span",{style:{color:"#E1E4E8"}},">数据库备份管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name: "),s("span",{style:{color:"#9ECBFF"}},"'one'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[13]||(o[13]=[])]),default:t(()=>[o[14]||(o[14]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tabs v-model="name">
            <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="数据库备份管理" name="three">数据库备份管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[63]||(o[63]=s("h2",{id:"%E7%A6%81%E7%94%A8%E6%9F%90%E4%B8%80%E9%A1%B9",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E6%9F%90%E4%B8%80%E9%A1%B9"},"#"),l(" 禁用某一项")],-1)),o[64]||(o[64]=s("p",null,[l("使禁用项不能点击切换添加 "),s("code",null,"disabled"),l(" 属性")],-1)),s("div",w,[n(r,{modelValue:e.name,"onUpdate:modelValue":o[1]||(o[1]=a=>e.name=a)},{default:t(()=>[n(E,{label:"用户管理",name:"one"},{default:t(()=>[...o[15]||(o[15]=[l("用户管理",-1)])]),_:1}),n(E,{label:"系统管理",name:"two"},{default:t(()=>[...o[16]||(o[16]=[l("系统管理",-1)])]),_:1}),n(E,{label:"角色管理",disabled:"",name:"three"},{default:t(()=>[...o[17]||(o[17]=[l("角色管理",-1)])]),_:1})]),_:1},8,["modelValue"])]),n(p,null,{desc:t(()=>[...o[18]||(o[18]=[])]),highlight:t(()=>[...o[19]||(o[19]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"name"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"用户管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"one"'),s("span",{style:{color:"#E1E4E8"}},">用户管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"系统管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"two"'),s("span",{style:{color:"#E1E4E8"}},">系统管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"角色管理"'),s("span",{style:{color:"#B392F0"}}," disabled"),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"three"'),s("span",{style:{color:"#E1E4E8"}},">角色管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name: "),s("span",{style:{color:"#9ECBFF"}},"'one'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[20]||(o[20]=[])]),default:t(()=>[o[21]||(o[21]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tabs v-model="name">
            <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[65]||(o[65]=s("h2",{id:"%E5%8D%A1%E7%89%87%E6%A0%B7%E5%BC%8F",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8D%A1%E7%89%87%E6%A0%B7%E5%BC%8F"},"#"),l(" 卡片样式")],-1)),o[66]||(o[66]=s("p",null,"卡片样式的选项卡。",-1)),s("div",L,[n(r,{modelValue:e.name,"onUpdate:modelValue":o[2]||(o[2]=a=>e.name=a),type:"card"},{default:t(()=>[n(E,{label:"用户管理",name:"one"},{default:t(()=>[...o[22]||(o[22]=[l("用户管理",-1)])]),_:1}),n(E,{label:"系统管理",name:"two"},{default:t(()=>[...o[23]||(o[23]=[l("系统管理",-1)])]),_:1}),n(E,{label:"角色管理",disabled:"",name:"three"},{default:t(()=>[...o[24]||(o[24]=[l("角色管理",-1)])]),_:1})]),_:1},8,["modelValue"])]),n(p,null,{desc:t(()=>[...o[25]||(o[25]=[])]),highlight:t(()=>[...o[26]||(o[26]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"name"'),s("span",{style:{color:"#B392F0"}}," type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"card"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"用户管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"one"'),s("span",{style:{color:"#E1E4E8"}},">用户管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"系统管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"two"'),s("span",{style:{color:"#E1E4E8"}},">系统管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"角色管理"'),s("span",{style:{color:"#B392F0"}}," disabled"),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"three"'),s("span",{style:{color:"#E1E4E8"}},">角色管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name: "),s("span",{style:{color:"#9ECBFF"}},"'one'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[27]||(o[27]=[])]),default:t(()=>[o[28]||(o[28]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tabs v-model="name" type="card">
            <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[67]||(o[67]=s("h2",{id:"%E5%8D%A1%E7%89%87%E5%8C%96",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8D%A1%E7%89%87%E5%8C%96"},"#"),l(" 卡片化")],-1)),o[68]||(o[68]=s("p",null,"卡片样式的选项卡。",-1)),s("div",V,[n(r,{modelValue:e.name,"onUpdate:modelValue":o[3]||(o[3]=a=>e.name=a),type:"border-card"},{default:t(()=>[n(E,{label:"用户管理",name:"one"},{default:t(()=>[...o[29]||(o[29]=[l("用户管理",-1)])]),_:1}),n(E,{label:"系统管理",name:"two"},{default:t(()=>[...o[30]||(o[30]=[l("系统管理",-1)])]),_:1}),n(E,{label:"角色管理",disabled:"",name:"three"},{default:t(()=>[...o[31]||(o[31]=[l("角色管理",-1)])]),_:1})]),_:1},8,["modelValue"])]),n(p,null,{desc:t(()=>[...o[32]||(o[32]=[])]),highlight:t(()=>[...o[33]||(o[33]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"name"'),s("span",{style:{color:"#B392F0"}}," type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"border-card"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"用户管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"one"'),s("span",{style:{color:"#E1E4E8"}},">用户管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"系统管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"two"'),s("span",{style:{color:"#E1E4E8"}},">系统管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"角色管理"'),s("span",{style:{color:"#B392F0"}}," disabled"),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"three"'),s("span",{style:{color:"#E1E4E8"}},">角色管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name: "),s("span",{style:{color:"#9ECBFF"}},"'one'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[34]||(o[34]=[])]),default:t(()=>[o[35]||(o[35]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tabs v-model="name" type="border-card">
            <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
            <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
            <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
        </zmz-tabs>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[69]||(o[69]=s("h2",{id:"%E5%8D%A1%E4%BD%8D%E7%BD%AE",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8D%A1%E4%BD%8D%E7%BD%AE"},"#"),l(" 卡位置")],-1)),o[70]||(o[70]=s("p",null,"可以通过 tab-position 设置标签的位置",-1)),s("div",T,[s("div",N,[n(u,{modelValue:e.position,"onUpdate:modelValue":o[4]||(o[4]=a=>e.position=a)},{default:t(()=>[n(b,{label:"top",value:"top"},{default:t(()=>[...o[36]||(o[36]=[l("top",-1)])]),_:1}),n(b,{label:"bottom",value:"bottom"},{default:t(()=>[...o[37]||(o[37]=[l("bottom",-1)])]),_:1}),n(b,{label:"left",value:"left"},{default:t(()=>[...o[38]||(o[38]=[l("left",-1)])]),_:1}),n(b,{label:"right",value:"right"},{default:t(()=>[...o[39]||(o[39]=[l("right",-1)])]),_:1})]),_:1},8,["modelValue"])]),s("div",S,[n(r,{id:"123",modelValue:e.name,"onUpdate:modelValue":o[5]||(o[5]=a=>e.name=a),"tab-position":e.position,style:{height:"300px"}},{default:t(()=>[n(E,{label:"用户管理",name:"one"},{default:t(()=>[...o[40]||(o[40]=[l("用户管理",-1)])]),_:1}),n(E,{label:"系统管理",name:"two"},{default:t(()=>[...o[41]||(o[41]=[l("系统管理",-1)])]),_:1}),n(E,{label:"角色管理",disabled:"",name:"three"},{default:t(()=>[...o[42]||(o[42]=[l("角色管理",-1)])]),_:1})]),_:1},8,["modelValue","tab-position"])])]),n(p,null,{desc:t(()=>[...o[43]||(o[43]=[])]),highlight:t(()=>[...o[44]||(o[44]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-bottom: 30px"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-radio-group"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"position"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-radio"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"top"'),s("span",{style:{color:"#B392F0"}}," value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"top"'),s("span",{style:{color:"#E1E4E8"}},">top</"),s("span",{style:{color:"#85E89D"}},"zmz-radio"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-radio"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"bottom"'),s("span",{style:{color:"#B392F0"}}," value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"bottom"'),s("span",{style:{color:"#E1E4E8"}},">bottom</"),s("span",{style:{color:"#85E89D"}},"zmz-radio"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-radio"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"left"'),s("span",{style:{color:"#B392F0"}}," value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"left"'),s("span",{style:{color:"#E1E4E8"}},">left</"),s("span",{style:{color:"#85E89D"}},"zmz-radio"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-radio"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"right"'),s("span",{style:{color:"#B392F0"}}," value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"right"'),s("span",{style:{color:"#E1E4E8"}},">right</"),s("span",{style:{color:"#85E89D"}},"zmz-radio"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-radio-group"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block__header"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#B392F0"}}," id"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"123"'),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"name"'),s("span",{style:{color:"#B392F0"}}," :tab-position"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"position"'),s("span",{style:{color:"#B392F0"}},"  style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"height: 300px;"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"用户管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"one"'),s("span",{style:{color:"#E1E4E8"}},">用户管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"系统管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"two"'),s("span",{style:{color:"#E1E4E8"}},">系统管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"角色管理"'),s("span",{style:{color:"#B392F0"}}," disabled"),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"three"'),s("span",{style:{color:"#E1E4E8"}},">角色管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name: "),s("span",{style:{color:"#9ECBFF"}},"'one'"),s("span",{style:{color:"#E1E4E8"}},"，")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            position: "),s("span",{style:{color:"#9ECBFF"}},"'top'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[45]||(o[45]=[])]),default:t(()=>[o[46]||(o[46]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="margin-bottom: 30px">
            <zmz-radio-group v-model="position">
                <zmz-radio label="top" value="top">top</zmz-radio>
                <zmz-radio label="bottom" value="bottom">bottom</zmz-radio>
                <zmz-radio label="left" value="left">left</zmz-radio>
                <zmz-radio label="right" value="right">right</zmz-radio>
            </zmz-radio-group>
        </div>
        <div class="demo-block__header">
            <zmz-tabs id="123" v-model="name" :tab-position="position"  style="height: 300px;">
                <zmz-tabs-item label="用户管理" name="one">用户管理</zmz-tabs-item>
                <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
                <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
            </zmz-tabs>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'，
            position: 'top'
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[71]||(o[71]=s("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E7%AD%BE",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E7%AD%BE"},"#"),l(" 自定义标签")],-1)),o[72]||(o[72]=s("p",null,"可以通过具名 slot 来实现自定义标签页的内容",-1)),s("div",U,[s("div",I,[n(r,{modelValue:e.name,"onUpdate:modelValue":o[6]||(o[6]=a=>e.name=a)},{default:t(()=>[n(E,{name:"one"},{title:t(()=>[...o[47]||(o[47]=[s("i",{class:"zmz-icon--home"},null,-1),l(" 用户管理 ",-1)])]),default:t(()=>[o[48]||(o[48]=l(" 用户管理 ",-1))]),_:1}),n(E,{label:"系统管理",name:"two"},{default:t(()=>[...o[49]||(o[49]=[l("系统管理",-1)])]),_:1}),n(E,{label:"角色管理",disabled:"",name:"three"},{default:t(()=>[...o[50]||(o[50]=[l("角色管理",-1)])]),_:1})]),_:1},8,["modelValue"])])]),n(p,null,{desc:t(()=>[...o[51]||(o[51]=[])]),highlight:t(()=>[...o[52]||(o[52]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block__header"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"name"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"one"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"title"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        <"),s("span",{style:{color:"#85E89D"}},"i"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-icon--home"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"i"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        用户管理")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    用户管理")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"系统管理"'),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"two"'),s("span",{style:{color:"#E1E4E8"}},">系统管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"角色管理"'),s("span",{style:{color:"#B392F0"}}," disabled"),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"three"'),s("span",{style:{color:"#E1E4E8"}},">角色管理</"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name: "),s("span",{style:{color:"#9ECBFF"}},"'one'"),s("span",{style:{color:"#E1E4E8"}},"，")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[53]||(o[53]=[])]),default:t(()=>[o[54]||(o[54]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div class="demo-block__header">
            <zmz-tabs v-model="name">
                <zmz-tabs-item name="one">
                    <template #title>
                        <i class="zmz-icon--home"></i>
                        用户管理
                    </template>
                    用户管理
                </zmz-tabs-item>
                <zmz-tabs-item label="系统管理" name="two">系统管理</zmz-tabs-item>
                <zmz-tabs-item label="角色管理" disabled name="three">角色管理</zmz-tabs-item>
            </zmz-tabs>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            name: 'one'，
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[73]||(o[73]=s("h2",{id:"%E5%8A%A8%E6%80%81%E5%A2%9E%E5%87%8F%E6%A0%87%E7%AD%BE%E9%A1%B5",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8A%A8%E6%80%81%E5%A2%9E%E5%87%8F%E6%A0%87%E7%AD%BE%E9%A1%B5"},"#"),l(" 动态增减标签页")],-1)),o[74]||(o[74]=s("p",null,"增减标签页按钮只能在选项卡样式的标签页下使用",-1)),s("div",O,[s("div",null,B(e.nameEdit),1),s("div",P,[n(r,{modelValue:e.nameEdit,"onUpdate:modelValue":o[7]||(o[7]=a=>e.nameEdit=a),editable:"",onOnEditable:m.onChange,type:"card"},{default:t(()=>[(F(!0),z(C,null,h(e.dataList,(a,D)=>(F(),k(E,{label:a.label,name:a.name,key:D,closable:a.closable},{default:t(()=>[l(B(a.content),1)]),_:2},1032,["label","name","closable"]))),128))]),_:1},8,["modelValue","onOnEditable"])])]),n(p,null,{desc:t(()=>[...o[55]||(o[55]=[])]),highlight:t(()=>[...o[56]||(o[56]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">{{nameEdit}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block__header"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"nameEdit"'),s("span",{style:{color:"#B392F0"}}," editable"),s("span",{style:{color:"#B392F0"}}," @on-editable"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"onEditable"'),s("span",{style:{color:"#B392F0"}}," type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"card"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#B392F0"}}," v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"(item,index) in dataList"'),s("span",{style:{color:"#B392F0"}}," :label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.label"'),s("span",{style:{color:"#B392F0"}}," :name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.name"'),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"index"'),s("span",{style:{color:"#B392F0"}}," :closable"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.closable"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    {{item.content}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"zmz-tabs-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            nameEdit: "),s("span",{style:{color:"#9ECBFF"}},"'0'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            dataList: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {label: "),s("span",{style:{color:"#9ECBFF"}},"'新窗口0'"),s("span",{style:{color:"#E1E4E8"}},", name: "),s("span",{style:{color:"#9ECBFF"}},"'0'"),s("span",{style:{color:"#E1E4E8"}},", content: "),s("span",{style:{color:"#9ECBFF"}},"'新窗口0'"),s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            nameIndex: "),s("span",{style:{color:"#79B8FF"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        onEditable"),s("span",{style:{color:"#E1E4E8"}},"(name, action) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"            if"),s("span",{style:{color:"#E1E4E8"}}," (action "),s("span",{style:{color:"#F97583"}},"=="),s("span",{style:{color:"#9ECBFF"}}," 'add'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"                let"),s("span",{style:{color:"#E1E4E8"}}," newName "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#79B8FF"}}," this"),s("span",{style:{color:"#E1E4E8"}},".nameIndex"),s("span",{style:{color:"#F97583"}},"++")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"                this"),s("span",{style:{color:"#E1E4E8"}},".dataList."),s("span",{style:{color:"#B392F0"}},"push"),s("span",{style:{color:"#E1E4E8"}},"({label: "),s("span",{style:{color:"#9ECBFF"}},"'新窗口'"),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," newName, name: newName, content: "),s("span",{style:{color:"#9ECBFF"}},"'新窗口'"),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," newName})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"                this"),s("span",{style:{color:"#E1E4E8"}},".dataList."),s("span",{style:{color:"#B392F0"}},"forEach"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"tab"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"index"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"                    if"),s("span",{style:{color:"#E1E4E8"}}," (tab.name "),s("span",{style:{color:"#F97583"}},"=="),s("span",{style:{color:"#E1E4E8"}}," name) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"                        const"),s("span",{style:{color:"#79B8FF"}}," nextTab"),s("span",{style:{color:"#F97583"}}," ="),s("span",{style:{color:"#79B8FF"}}," this"),s("span",{style:{color:"#E1E4E8"}},".dataList[index "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#79B8FF"}}," 1"),s("span",{style:{color:"#E1E4E8"}},"] "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#79B8FF"}}," this"),s("span",{style:{color:"#E1E4E8"}},".dataList[index "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}}," 1"),s("span",{style:{color:"#E1E4E8"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"                        if"),s("span",{style:{color:"#E1E4E8"}}," (nextTab) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"                            this"),s("span",{style:{color:"#E1E4E8"}},".nameAdd "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," nextTab.name")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                })")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"                let"),s("span",{style:{color:"#E1E4E8"}}," dataList "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#79B8FF"}}," this"),s("span",{style:{color:"#E1E4E8"}},".dataList."),s("span",{style:{color:"#B392F0"}},"filter"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#F97583"}}," =>"),s("span",{style:{color:"#E1E4E8"}}," item.name "),s("span",{style:{color:"#F97583"}},"!=="),s("span",{style:{color:"#E1E4E8"}}," name)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"                this"),s("span",{style:{color:"#E1E4E8"}},".dataList "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," dataList")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:t(()=>[...o[57]||(o[57]=[])]),default:t(()=>[o[58]||(o[58]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div>{{nameEdit}}</div>
        <div class="demo-block__header">
            <zmz-tabs v-model="nameEdit" editable @on-editable="onEditable" type="card">
                <zmz-tabs-item v-for="(item,index) in dataList" :label="item.label" :name="item.name" :key="index" :closable="item.closable">
                    {{item.content}}
                </zmz-tabs-item>
            </zmz-tabs>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            nameEdit: '0',
            dataList: [
                {label: '新窗口0', name: '0', content: '新窗口0'}
            ],
            nameIndex: 1
        }
    },
    methods: {
        onEditable(name, action) {
            if (action == 'add') {
                let newName = this.nameIndex++
                this.dataList.push({label: '新窗口'+ newName, name: newName, content: '新窗口'+ newName})
            } else {
                this.dataList.forEach((tab, index) => {
                    if (tab.name == name) {
                        const nextTab = this.dataList[index + 1] || this.dataList[index - 1]
                        if (nextTab) {
                            this.nameAdd = nextTab.name
                        }
                    }
                })

                let dataList = this.dataList.filter(item => item.name !== name)
                this.dataList = dataList
            }
        }
    },
}
<\/script>
`)],-1))]),_:1}),o[75]||(o[75]=v('<h2 id="tabs-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tabs-%E5%B1%9E%E6%80%A7">#</a> Tabs 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>激活选项卡</td><td>String/Number</td><td>—</td><td>—</td></tr><tr><td>type</td><td>风格类型</td><td>String</td><td>card/border-card</td><td>—</td></tr><tr><td>editable</td><td>标签是否增加和关闭</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>addable</td><td>标签是否可增加</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>tab-position</td><td>卡片所在位置</td><td>String</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>标签是否自动撑开</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>before-remove</td><td>关闭前的函数，返回 Promise 可阻止标签关闭</td><td>Function</td><td>—</td><td>—</td></tr><tr><td>tab-active-line</td><td>是否显示激活标签下辅助线</td><td>Boolean</td><td>true/false</td><td>true</td></tr></tbody></table></div><h2 id="tabs-item-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tabs-item-%E5%B1%9E%E6%80%A7">#</a> Tabs-item 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>标题</td><td>String/Function</td><td>—</td><td>—</td></tr><tr><td>name</td><td>激活标志</td><td>String</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>closable</td><td>是否可关闭标签，可编辑状态下有用</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>icon</td><td>标签图标</td><td>String</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="tabs-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tabs-%E6%96%B9%E6%B3%95">#</a> Tabs 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>tab选项发生改变触发回调</td><td>function(name| ‘’)</td></tr><tr><td>on-editable</td><td>tab选项卡删除添加触发</td><td>function(name| ‘’, action| ‘add’/‘remove’)</td></tr><tr><td>on-scroll-prev-next</td><td>tab选项超出点击左右按钮触发</td><td>function(offset| ‘0’, action | ‘next’/‘prev’)</td></tr></tbody></table></div><h2 id="tabs-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tabs-%E6%8F%92%E6%A7%BD">#</a> Tabs 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>默认插槽</td></tr></tbody></table></div><h2 id="tabs-item-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tabs-item-%E6%8F%92%E6%A7%BD">#</a> Tabs-item 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>默认插槽</td></tr><tr><td>title</td><td>标题插槽</td></tr></tbody></table></div><h2 id="tabs-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tabs-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Tabs 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-tabs-border-color</td><td>–zmz-tabs-border-color</td><td>#e3e6ef</td><td>边线颜色</td></tr><tr><td>@zmz-tabs-border-radius</td><td>–zmz-tabs-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-tabs-text-color</td><td>–zmz-tabs-text-color</td><td>#3f536e</td><td>文字颜色</td></tr><tr><td>@zmz-tabs-text-font-size</td><td>–zmz-tabs-text-font-size</td><td>12px</td><td>文字大小</td></tr><tr><td>@zmz-tabs-active-color</td><td>–zmz-tabs-active-color</td><td>确认主题色</td><td>激活颜色</td></tr><tr><td>@zmz-tabs-hover-color</td><td>–zmz-tabs-hover-color</td><td>确认主题色</td><td>滑过颜色</td></tr><tr><td>@zmz-tabs-disabled-color</td><td>–zmz-tabs-disabled-color</td><td>#3f536e</td><td>禁用颜色</td></tr></tbody></table></div>',12))])}const G=f(x,[["render",j]]);export{G as default};
