import{_ as B,c as g,a as l,b as o,e as a,w as n,i as b,d as D,r as p,l as v,o as m,t as z}from"./index-Bfn7SEZ2.js";const f={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"describe",content:this.describe}]}},data(){return{title:"Loading 加载"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),describe:this.currentConfig("describe"),loading:!1,loading2:!1,loading3:!1,loading4:!1}},methods:{currentConfig(E){return this.$setting.currentConfig[E]},loadingSwitch(){this.loading2=!0,setTimeout(()=>{},2e3)},loadingButton1(){this.loading3=!0,setTimeout(()=>{this.loading3=!1},2e3)},loadingButton2(){this.$loading.start({fullscreen:!0,content:"Loading",icon:"zmz-icon--loading",background:"rgba(0, 0, 0, 0.2)"}).then(E=>{console.log(E),setTimeout(()=>{E.close()},2e3)})}}},k={class:"zmz-markdown-article"},h={class:"demo-block"},C={style:{"margin-bottom":"20px"}},A={style:{position:"relative","margin-bottom":"20px"}},x={class:"demo-block"},w={style:{"margin-bottom":"20px"}},V={style:{position:"relative","margin-bottom":"20px"}},S={class:"demo-block"},T={style:{"margin-bottom":"20px"}},L={class:"demo-block","zmz-loading-content":"努力加载中"};function N(E,s,U,j,t,i){const r=p("zmz-button"),d=p("zmz-loading"),c=p("demo-block"),y=p("zmz-space-item"),u=p("zmz-space"),F=v("zmz-loading");return m(),g("div",k,[s[26]||(s[26]=l("h1",{id:"loading-%E5%8A%A0%E8%BD%BD",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#loading-%E5%8A%A0%E8%BD%BD"},"#"),o(" Loading 加载")],-1)),s[27]||(s[27]=l("hr",null,null,-1)),s[28]||(s[28]=l("p",null,"在数据未加载时显示加载提示",-1)),s[29]||(s[29]=l("h2",{id:"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"},"#"),o(" 基本用法")],-1)),s[30]||(s[30]=l("p",null,"使用loading加载需要放置相对定位容器",-1)),l("div",h,[l("div",C,[a(r,{onClick:s[0]||(s[0]=e=>t.loading=!t.loading)},{default:n(()=>[o("切换"+z(t.loading),1)]),_:1})]),l("div",A,[s[5]||(s[5]=l("div",null,[l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器")],-1)),a(d,{modelValue:t.loading,"onUpdate:modelValue":s[1]||(s[1]=e=>t.loading=e)},null,8,["modelValue"])])]),a(c,null,{desc:n(()=>[...s[6]||(s[6]=[])]),highlight:n(()=>[...s[7]||(s[7]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-bottom: 20px;"'),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loading = !loading"'),l("span",{style:{color:"#E1E4E8"}},">切换{{loading}}</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"position:relative;margin-bottom: 20px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-loading"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loading"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-loading"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            loading: "),l("span",{style:{color:"#79B8FF"}},"true")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...s[8]||(s[8]=[])]),default:n(()=>[s[9]||(s[9]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;"><zmz-button @click="loading = !loading">切换{{loading}}</zmz-button></div>
        <div style="position:relative;margin-bottom: 20px;">
            <div>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            </div>
            <zmz-loading v-model="loading"></zmz-loading>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true
        };
    }
};
<\/script>
`)],-1))]),_:1}),s[31]||(s[31]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9"},"#"),o(" 自定义内容")],-1)),l("div",x,[l("div",w,[a(r,{onClick:s[2]||(s[2]=e=>t.loading=!t.loading)},{default:n(()=>[o("切换"+z(t.loading),1)]),_:1})]),l("div",V,[s[10]||(s[10]=l("div",null,[l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器"),l("p",null,"使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器")],-1)),a(d,{modelValue:t.loading,"onUpdate:modelValue":s[3]||(s[3]=e=>t.loading=e),rotate:"",background:"rgba(0, 0, 0, .7)","loading-style":{color:"#fff"}},null,8,["modelValue"])])]),a(c,null,{desc:n(()=>[...s[11]||(s[11]=[])]),highlight:n(()=>[...s[12]||(s[12]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-bottom: 20px;"'),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loading = !loading"'),l("span",{style:{color:"#E1E4E8"}},">切换{{loading}}</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"position:relative;margin-bottom: 20px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-loading"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loading"'),l("span",{style:{color:"#B392F0"}}," rotate"),l("span",{style:{color:"#B392F0"}}," background"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"rgba(0, 0, 0, .7)"'),l("span",{style:{color:"#B392F0"}}," :loading-style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"{color: '#fff'}"`),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-loading"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            loading: "),l("span",{style:{color:"#79B8FF"}},"true")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...s[13]||(s[13]=[])]),default:n(()=>[s[14]||(s[14]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;"><zmz-button @click="loading = !loading">切换{{loading}}</zmz-button></div>
        <div style="position:relative;margin-bottom: 20px;">
            <div>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            </div>
            <zmz-loading v-model="loading" rotate background="rgba(0, 0, 0, .7)" :loading-style="{color: '#fff'}"></zmz-loading>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true
        };
    }
};
<\/script>
`)],-1))]),_:1}),s[32]||(s[32]=l("h2",{id:"%E5%85%A8%E5%B1%8F%E5%8A%A0%E8%BD%BD",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%85%A8%E5%B1%8F%E5%8A%A0%E8%BD%BD"},"#"),o(" 全屏加载")],-1)),l("div",S,[l("div",T,[a(r,{onClick:i.loadingSwitch},{default:n(()=>[...s[15]||(s[15]=[o("切换",-1)])]),_:1},8,["onClick"])]),a(d,{modelValue:t.loading2,"onUpdate:modelValue":s[4]||(s[4]=e=>t.loading2=e),fullscreen:"",background:"rgba(0, 0, 0, .7)","loading-style":{color:"#fff"}},null,8,["modelValue"])]),a(c,null,{desc:n(()=>[...s[16]||(s[16]=[])]),highlight:n(()=>[...s[17]||(s[17]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-bottom: 20px;"'),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loadingSwitch"'),l("span",{style:{color:"#E1E4E8"}},">切换</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-loading"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loading"'),l("span",{style:{color:"#B392F0"}}," fullscreen"),l("span",{style:{color:"#B392F0"}}," background"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"rgba(0, 0, 0, .7)"'),l("span",{style:{color:"#B392F0"}}," :loading-style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"{color: '#fff'}"`),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-loading"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            loading: "),l("span",{style:{color:"#79B8FF"}},"false")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        loadingSwitch"),l("span",{style:{color:"#E1E4E8"}},"() {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".loading "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," true")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            setTimeout"),l("span",{style:{color:"#E1E4E8"}},"(() "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".loading "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," false")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, "),l("span",{style:{color:"#79B8FF"}},"2000"),l("span",{style:{color:"#E1E4E8"}},")")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...s[18]||(s[18]=[])]),default:n(()=>[s[19]||(s[19]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;"><zmz-button @click="loadingSwitch">切换</zmz-button></div>
        <zmz-loading v-model="loading" fullscreen background="rgba(0, 0, 0, .7)" :loading-style="{color: '#fff'}"></zmz-loading>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false
        };
    },
    methods: {
        loadingSwitch() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        }
    }
};
<\/script>
`)],-1))]),_:1}),s[33]||(s[33]=l("h2",{id:"%E6%8C%87%E4%BB%A4%E6%A8%A1%E5%BC%8F",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E6%8C%87%E4%BB%A4%E6%A8%A1%E5%BC%8F"},"#"),o(" 指令模式")],-1)),s[34]||(s[34]=l("p",null,[o("参数通过"),l("code",null,"zmz-loading-"),o("设置参数")],-1)),b((m(),g("div",L,[a(u,null,{default:n(()=>[a(y,null,{default:n(()=>[a(r,{type:"primary",onClick:i.loadingButton1},{default:n(()=>[...s[20]||(s[20]=[o("指令模式",-1)])]),_:1},8,["onClick"])]),_:1}),a(y,null,{default:n(()=>[a(r,{type:"primary",onClick:i.loadingButton2},{default:n(()=>[...s[21]||(s[21]=[o("服务模式",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})])),[[F,t.loading3]]),a(c,null,{desc:n(()=>[...s[22]||(s[22]=[])]),highlight:n(()=>[...s[23]||(s[23]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#B392F0"}}," v-zmz-loading"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loading"'),l("span",{style:{color:"#B392F0"}}," zmz-loading-content"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"努力加载中"'),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loadingButton1"'),l("span",{style:{color:"#E1E4E8"}},">指令模式</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"loadingButton2"'),l("span",{style:{color:"#E1E4E8"}},">服务模式</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            loading: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        loadingButton1"),l("span",{style:{color:"#E1E4E8"}},"() {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".loading "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," true")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            setTimeout"),l("span",{style:{color:"#E1E4E8"}},"(() "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".loading "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," false")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, "),l("span",{style:{color:"#79B8FF"}},"2000"),l("span",{style:{color:"#E1E4E8"}},")")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        loadingButton2"),l("span",{style:{color:"#E1E4E8"}},"() {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},"."),l("span",{style:{color:"#B392F0"}},"$loading"),l("span",{style:{color:"#E1E4E8"}},"({")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                fullscreen: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                content: "),l("span",{style:{color:"#9ECBFF"}},"'Loading'"),l("span",{style:{color:"#E1E4E8"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                icon: "),l("span",{style:{color:"#9ECBFF"}},"'zmz-icon--loading'"),l("span",{style:{color:"#E1E4E8"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                background: "),l("span",{style:{color:"#9ECBFF"}},"'rgba(0, 0, 0, 0.2)'")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            })."),l("span",{style:{color:"#B392F0"}},"then"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"res"),l("span",{style:{color:"#F97583"}}," =>"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"                setTimeout"),l("span",{style:{color:"#E1E4E8"}},"(() "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    res."),l("span",{style:{color:"#B392F0"}},"close"),l("span",{style:{color:"#E1E4E8"}},"()")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, "),l("span",{style:{color:"#79B8FF"}},"2000"),l("span",{style:{color:"#E1E4E8"}},")")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            })")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...s[24]||(s[24]=[])]),default:n(()=>[s[25]||(s[25]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block" v-zmz-loading="loading" zmz-loading-content="努力加载中">
        <zmz-space>
            <zmz-space-item><zmz-button type="primary" @click="loadingButton1">指令模式</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" @click="loadingButton2">服务模式</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        loadingButton1() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        },
        loadingButton2() {
            this.$loading({
                fullscreen: true,
                content: 'Loading',
                icon: 'zmz-icon--loading',
                background: 'rgba(0, 0, 0, 0.2)'
            }).then(res => {
                setTimeout(() => {
                    res.close()
                }, 2000)
            })
        }
    }
};
<\/script>
`)],-1))]),_:1}),s[35]||(s[35]=D('<h2 id="loading-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loading-%E5%B1%9E%E6%80%A7">#</a> Loading 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model/modelValue</td><td>状态</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>content</td><td>加载文本</td><td><code>String</code></td><td>—</td><td>-</td></tr><tr><td>icon</td><td>加载icon</td><td><code>String</code></td><td>—</td><td>zmz-icon–loading</td></tr><tr><td>background</td><td>背景色</td><td><code>String</code></td><td>—</td><td>rgba(255, 255, 255, .7)</td></tr><tr><td>loading-style</td><td>加载自定义样式</td><td><code>Object</code></td><td>—</td><td>—</td></tr><tr><td>loading-class</td><td>加载自定义类名</td><td><code>Array</code></td><td>—</td><td>—</td></tr><tr><td>rotate</td><td>是否旋转</td><td><code>Boolean</code></td><td>—</td><td>true</td></tr><tr><td>fullscreen</td><td>是否全屏</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>mode</td><td>模式</td><td><code>String</code></td><td><code>horizontal</code> / <code>vertical</code></td><td>horizontal</td></tr></tbody></table></div><h2 id="loading-slot%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loading-slot%E6%8F%92%E6%A7%BD">#</a> Loading slot插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>默认插槽</td></tr></tbody></table></div><h2 id="loading-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loading-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Loading 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-loading-content-color</td><td>–zmz-loading-content-color</td><td>@global-theme</td><td>内容颜色</td></tr><tr><td>@zmz-loading-animation-name</td><td>–zmz-loading-animation-name</td><td>zmz-loading</td><td>动画名称</td></tr><tr><td>@zmz-loading-animation-duration</td><td>–zmz-loading-animation-duration</td><td>1.4s</td><td>动画时间</td></tr><tr><td>@zmz-loading-animation-timing</td><td>–zmz-loading-animation-timing</td><td>linear</td><td>动画过度</td></tr><tr><td>@zmz-loading-animation-iteration</td><td>–zmz-loading-animation-iteration</td><td>infinite</td><td>动画迭代</td></tr><tr><td>@zmz-loading-background-color</td><td>–zmz-loading-background-color</td><td>rgba(255, 255, 255, 0.9)</td><td>背景颜色</td></tr></tbody></table></div>',6))])}const O=B(f,[["render",N]]);export{O as default};
