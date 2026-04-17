import{_ as f,c as B,a as l,b as s,e as n,w as a,d as u,r as i,o as h,t as p}from"./index-Bfn7SEZ2.js";const b={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},methods:{currentConfig(r){return this.$setting.currentConfig[r]},onChange(r,t){console.log(r,t)}},data(){const r=()=>{const t=[];for(let E=1;E<=15;E++)t.push({key:E,label:`左选项 ${E}`,disabled:E%4===0});return t};return{title:"Transfer 穿梭框"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),transferList:r(),value:[1,4],value2:[2,5],value3:[3,6]}}},z={class:"zmz-markdown-article"},g={class:"demo-block"},D={class:"demo-block"},k={class:"demo-block"};function v(r,t,E,A,o,F){const c=i("zmz-transfer"),d=i("demo-block"),m=i("zmz-space");return h(),B("div",z,[t[20]||(t[20]=l("h1",{id:"transfer-%E7%A9%BF%E6%A2%AD%E6%A1%86",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#transfer-%E7%A9%BF%E6%A2%AD%E6%A1%86"},"#"),s(" Transfer 穿梭框")],-1)),t[21]||(t[21]=l("hr",null,null,-1)),t[22]||(t[22]=l("p",null,"双栏穿梭选择框，常用于将多个项目从一边移动到另一边。",-1)),t[23]||(t[23]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),l("div",g,[n(c,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),data:o.transferList,onOnChange:F.onChange},null,8,["modelValue","data","onOnChange"])]),n(d,null,{desc:a(()=>[...t[4]||(t[4]=[])]),highlight:a(()=>[...t[5]||(t[5]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"value"'),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"transferList"'),l("span",{style:{color:"#B392F0"}}," @on-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onChange"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onChange"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"dataOld"),l("span",{style:{color:"#E1E4E8"}},","),l("span",{style:{color:"#FFAB70"}},"dataNew"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(dataOld,dataNew)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        const"),l("span",{style:{color:"#B392F0"}}," generateData"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#FFAB70"}}," _"),l("span",{style:{color:"#F97583"}}," =>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            const"),l("span",{style:{color:"#79B8FF"}}," data"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," [];")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            for"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," i "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," 1"),l("span",{style:{color:"#E1E4E8"}},"; i "),l("span",{style:{color:"#F97583"}},"<="),l("span",{style:{color:"#79B8FF"}}," 15"),l("span",{style:{color:"#E1E4E8"}},"; i"),l("span",{style:{color:"#F97583"}},"++"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              data."),l("span",{style:{color:"#B392F0"}},"push"),l("span",{style:{color:"#E1E4E8"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                key: i,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                label: "),l("span",{style:{color:"#9ECBFF"}},"`左选项 ${"),l("span",{style:{color:"#E1E4E8"}}," i"),l("span",{style:{color:"#9ECBFF"}}," }`"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                disabled: i "),l("span",{style:{color:"#F97583"}},"%"),l("span",{style:{color:"#79B8FF"}}," 4"),l("span",{style:{color:"#F97583"}}," ==="),l("span",{style:{color:"#79B8FF"}}," 0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," data;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            transferList: "),l("span",{style:{color:"#B392F0"}},"generateData"),l("span",{style:{color:"#E1E4E8"}},"(),")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            value: ["),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"4"),l("span",{style:{color:"#E1E4E8"}},"],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...t[6]||(t[6]=[])]),default:a(()=>[t[7]||(t[7]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-transfer v-model="value" :data="transferList" @on-change="onChange"></zmz-transfer>
    </div>
</template>
<script>
export default {
    methods: {
        onChange(dataOld,dataNew) {
            console.log(dataOld,dataNew)
        }
    },
    data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: \`左选项 \${ i }\`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            transferList: generateData(),
            value: [1, 4],
        };
    }
}
<\/script>
`)],-1))]),_:1}),t[24]||(t[24]=l("h2",{id:"%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81"},"#"),s(" 禁用只读状态")],-1)),t[25]||(t[25]=l("p",null,[s("添加属性 "),l("code",null,"disabled"),s(" 禁用， 添加属性 "),l("code",null,"readonly"),s(" 只读")],-1)),l("div",D,[n(m,null,{default:a(()=>[n(c,{modelValue:o.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value2=e),data:o.transferList,insert:"unshift",disabled:""},null,8,["modelValue","data"]),n(c,{modelValue:o.value2,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value2=e),data:o.transferList,insert:"unshift",readonly:""},null,8,["modelValue","data"])]),_:1})]),n(d,null,{desc:a(()=>[...t[8]||(t[8]=[])]),highlight:a(()=>[...t[9]||(t[9]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"value2"'),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"transferList"'),l("span",{style:{color:"#B392F0"}}," insert"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"unshift"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"value2"'),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"transferList"'),l("span",{style:{color:"#B392F0"}}," insert"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"unshift"'),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        const"),l("span",{style:{color:"#B392F0"}}," generateData"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#FFAB70"}}," _"),l("span",{style:{color:"#F97583"}}," =>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            const"),l("span",{style:{color:"#79B8FF"}}," data"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," [];")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            for"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," i "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," 1"),l("span",{style:{color:"#E1E4E8"}},"; i "),l("span",{style:{color:"#F97583"}},"<="),l("span",{style:{color:"#79B8FF"}}," 15"),l("span",{style:{color:"#E1E4E8"}},"; i"),l("span",{style:{color:"#F97583"}},"++"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              data."),l("span",{style:{color:"#B392F0"}},"push"),l("span",{style:{color:"#E1E4E8"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                key: i,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                label: "),l("span",{style:{color:"#9ECBFF"}},"`左选项 ${"),l("span",{style:{color:"#E1E4E8"}}," i"),l("span",{style:{color:"#9ECBFF"}}," }`"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                disabled: i "),l("span",{style:{color:"#F97583"}},"%"),l("span",{style:{color:"#79B8FF"}}," 4"),l("span",{style:{color:"#F97583"}}," ==="),l("span",{style:{color:"#79B8FF"}}," 0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," data;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            transferList: "),l("span",{style:{color:"#B392F0"}},"generateData"),l("span",{style:{color:"#E1E4E8"}},"(),")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            value: ["),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"4"),l("span",{style:{color:"#E1E4E8"}},"],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...t[10]||(t[10]=[])]),default:a(()=>[t[11]||(t[11]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-transfer v-model="value2" :data="transferList" insert="unshift" disabled></zmz-transfer>
            <zmz-transfer v-model="value2" :data="transferList" insert="unshift" readonly></zmz-transfer>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: \`左选项 \${ i }\`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            transferList: generateData(),
            value: [1, 4],
        };
    }
}
<\/script>
`)],-1))]),_:1}),t[26]||(t[26]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9"},"#"),s(" 自定义内容")],-1)),t[27]||(t[27]=l("p",null,"使用默认插槽",-1)),l("div",k,[n(c,{modelValue:o.value3,"onUpdate:modelValue":t[3]||(t[3]=e=>o.value3=e),data:o.transferList,"left-default-checked":[5],"right-default-checked":[3]},{leftBtn:a(({disabled:e})=>[s("左状态"+p(e),1)]),rightBtn:a(({disabled:e})=>[s("右状态"+p(e),1)]),rightTitle:a(()=>[...t[12]||(t[12]=[s("右数据",-1)])]),leftTitle:a(()=>[...t[13]||(t[13]=[s("左数据",-1)])]),leftCount:a(({selectedtotal:e,datatotal:y})=>[s(p(e)+"to"+p(y),1)]),rightCount:a(({selectedtotal:e,datatotal:y})=>[s(p(e)+"to"+p(y),1)]),rightFooter:a(()=>[...t[14]||(t[14]=[s("右底部",-1)])]),leftFooter:a(()=>[...t[15]||(t[15]=[s("左底部",-1)])]),_:1},8,["modelValue","data"])]),n(d,null,{desc:a(()=>[...t[16]||(t[16]=[])]),highlight:a(()=>[...t[17]||(t[17]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"value3"'),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"transferList"'),l("span",{style:{color:"#B392F0"}}," :left-default-checked"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"[5]"'),l("span",{style:{color:"#B392F0"}}," :right-default-checked"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"[3]"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"leftBtn"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"{disabled}"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}}," >左状态{{disabled}}</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"rightBtn"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"{disabled}"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}}," >右状态{{disabled}}</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"rightTitle"),l("span",{style:{color:"#E1E4E8"}},">右数据</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"leftTitle"),l("span",{style:{color:"#E1E4E8"}},">左数据</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"leftCount"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"{selectedtotal, datatotal}"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},">{{selectedtotal}}to{{datatotal}}</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"rightCount"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"{selectedtotal, datatotal}"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},">{{selectedtotal}}to{{datatotal}}</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"rightFooter"),l("span",{style:{color:"#E1E4E8"}},">右底部</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"leftFooter"),l("span",{style:{color:"#E1E4E8"}},">左底部</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        const"),l("span",{style:{color:"#B392F0"}}," generateData"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#FFAB70"}}," _"),l("span",{style:{color:"#F97583"}}," =>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            const"),l("span",{style:{color:"#79B8FF"}}," data"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," [];")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            for"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," i "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," 1"),l("span",{style:{color:"#E1E4E8"}},"; i "),l("span",{style:{color:"#F97583"}},"<="),l("span",{style:{color:"#79B8FF"}}," 15"),l("span",{style:{color:"#E1E4E8"}},"; i"),l("span",{style:{color:"#F97583"}},"++"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              data."),l("span",{style:{color:"#B392F0"}},"push"),l("span",{style:{color:"#E1E4E8"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                key: i,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                label: "),l("span",{style:{color:"#9ECBFF"}},"`左选项 ${"),l("span",{style:{color:"#E1E4E8"}}," i"),l("span",{style:{color:"#9ECBFF"}}," }`"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                disabled: i "),l("span",{style:{color:"#F97583"}},"%"),l("span",{style:{color:"#79B8FF"}}," 4"),l("span",{style:{color:"#F97583"}}," ==="),l("span",{style:{color:"#79B8FF"}}," 0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," data;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            transferList: "),l("span",{style:{color:"#B392F0"}},"generateData"),l("span",{style:{color:"#E1E4E8"}},"(),")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            value: ["),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#79B8FF"}},"4"),l("span",{style:{color:"#E1E4E8"}},"],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...t[18]||(t[18]=[])]),default:a(()=>[t[19]||(t[19]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-transfer v-model="value3" :data="transferList" :left-default-checked="[5]" :right-default-checked="[3]">
            <template #leftBtn="{disabled}" >左状态{{disabled}}</template>
            <template #rightBtn="{disabled}" >右状态{{disabled}}</template>
            <template #rightTitle>右数据</template>
            <template #leftTitle>左数据</template>
            <template #leftCount="{selectedtotal, datatotal}">{{selectedtotal}}to{{datatotal}}</template>
            <template #rightCount="{selectedtotal, datatotal}">{{selectedtotal}}to{{datatotal}}</template>
            <template #rightFooter>右底部</template>
            <template #leftFooter>左底部</template>
        </zmz-transfer>
    </div>
</template>
<script>
export default {
    data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: \`左选项 \${ i }\`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            transferList: generateData(),
            value: [1, 4],
        };
    }
}
<\/script>
`)],-1))]),_:1}),t[28]||(t[28]=u('<h2 id="transfer-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#transfer-%E5%B1%9E%E6%80%A7">#</a> Transfer 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定显示参数</td><td>Array</td><td>—</td><td>[]</td></tr><tr><td>data</td><td>数据源</td><td>Array</td><td>array[{ key, label, disabled }]</td><td>[]</td></tr><tr><td>insert</td><td>插入方式initial（同数据源插入顺序）unshift（向前插入）push(向后插入)</td><td>String</td><td>initial/unshift/push</td><td>initial</td></tr><tr><td>titles</td><td>自定义左标题</td><td>Array</td><td>—</td><td>[‘左列表’, ‘右列表’]</td></tr><tr><td>left-default-checked</td><td>初始进入左列表默认选中</td><td>Array</td><td>—</td><td>[ ]</td></tr><tr><td>right-default-checked</td><td>初始进入右列表默认选中</td><td>Array</td><td>—</td><td>[ ]</td></tr><tr><td>field-alias</td><td>数据源的字段别名</td><td>Object{key, label, disabled}</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>数据为空文本</td><td>String</td><td>—</td><td>暂无数据</td></tr><tr><td>search</td><td>是否开启搜索</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>search-placeholder</td><td>搜索框占位文本</td><td>String</td><td>—</td><td>请输入搜索内容</td></tr><tr><td>search-empty-text</td><td>搜索数据为空文本</td><td>String</td><td>—</td><td>暂无匹配数据</td></tr><tr><td>search-method</td><td>自定义搜索方法</td><td>Function</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>readonly</td><td>只读</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="transfer-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#transfer-%E6%96%B9%E6%B3%95">#</a> Transfer 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>方法</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>clearSearchQuery</td><td>清空搜索框</td><td>function(‘left/right’)</td></tr></tbody></table></div><h2 id="transfer-%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#transfer-%E4%BA%8B%E4%BB%B6">#</a> Transfer 事件</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>on-change</td><td>状态改变回调</td><td>点击(左/右)单个function(‘left/right’, data)</td></tr><tr><td>on-left-btn-click</td><td>点击左切换按钮</td><td>点击(左)按钮function(‘left’, dataOld, dataNew)</td></tr><tr><td>on-right-btn-click</td><td>点击右切换按钮</td><td>点击(右)按钮function(‘right’, dataOld, dataNew)</td></tr></tbody></table></div><h2 id="transfer-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#transfer-%E6%8F%92%E6%A7%BD">#</a> Transfer 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>leftBtn</td><td>切换按钮左插槽</td><td>{disabled}禁用状态</td></tr><tr><td>rightBtn</td><td>切换按钮右插槽</td><td>{disabled}禁用状态</td></tr><tr><td>leftTitle</td><td>左标题插槽</td><td>—</td></tr><tr><td>rightTitle</td><td>右标题插槽</td><td>—</td></tr><tr><td>leftCount</td><td>左数量插槽</td><td>{selectedtotal, datatotal}</td></tr><tr><td>rightCount</td><td>右数量插槽</td><td>{selectedtotal, datatotal}</td></tr><tr><td>leftFooter</td><td>左底部插槽</td><td>—</td></tr><tr><td>rightFooter</td><td>右底部插槽</td><td>—</td></tr></tbody></table></div><h2 id="transfer-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#transfer-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Transfer 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-upload-border-radius</td><td>–zmz-upload-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-upload-border-color</td><td>–zmz-upload-border-color</td><td>#e3e6ef</td><td>默认边线颜色</td></tr><tr><td>@zmz-transfer-background-color</td><td>–zmz-transfer-background-color</td><td>#fff</td><td>背景色</td></tr><tr><td>@zmz-transfer-background-other-color</td><td>–zmz-transfer-background-other-color</td><td>#f5f7fa</td><td>其他背景色</td></tr></tbody></table></div>',10))])}const w=f(b,[["render",v]]);export{w as default};
