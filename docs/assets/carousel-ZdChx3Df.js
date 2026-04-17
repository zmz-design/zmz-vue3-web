import{_ as z,c as d,a as l,b as s,e as t,w as e,d as u,r as i,o as F}from"./index-Bfn7SEZ2.js";const D={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Carousel 轮播图"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),current:0}},methods:{currentConfig(m){return this.$setting.currentConfig[m]}}},g={class:"zmz-markdown-article"},B={class:"demo-block"},v={class:"demo-block"},f={class:"demo-block"},h={class:"demo-block"},w={class:"demo-block"},x={class:"demo-block"},C={class:"demo-block"};function k(m,o,b,A,a,V){const n=i("zmz-carousel-item"),r=i("zmz-carousel"),p=i("demo-block"),c=i("zmz-space-item"),y=i("zmz-space");return F(),d("div",g,[o[123]||(o[123]=l("h1",{id:"carousel-%E8%BD%AE%E6%92%AD%E5%9B%BE",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#carousel-%E8%BD%AE%E6%92%AD%E5%9B%BE"},"#"),s(" Carousel 轮播图")],-1)),o[124]||(o[124]=l("hr",null,null,-1)),o[125]||(o[125]=l("p",null,"在有限空间内，循环播放同一类型的图片、文字等内容",-1)),o[126]||(o[126]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),o[127]||(o[127]=l("p",null,"适用广泛的基础用法",-1)),l("div",B,[t(r,{modelValue:a.current,"onUpdate:modelValue":o[0]||(o[0]=E=>a.current=E)},{default:e(()=>[t(n,null,{default:e(()=>[...o[16]||(o[16]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[17]||(o[17]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[18]||(o[18]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[19]||(o[19]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),t(p,null,{desc:e(()=>[...o[20]||(o[20]=[])]),highlight:e(()=>[...o[21]||(o[21]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            current: "),l("span",{style:{color:"#79B8FF"}},"0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[22]||(o[22]=[])]),default:e(()=>[o[23]||(o[23]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-carousel v-model="current">
            <zmz-carousel-item>1</zmz-carousel-item>
            <zmz-carousel-item>2</zmz-carousel-item>
            <zmz-carousel-item>3</zmz-carousel-item>
            <zmz-carousel-item>4</zmz-carousel-item>
        </zmz-carousel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[128]||(o[128]=l("h2",{id:"%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F"},"#"),s(" 触发方式")],-1)),o[129]||(o[129]=l("p",null,"点击或滑过指示器进行切换，默认click",-1)),l("div",v,[t(y,{"show-last-padding":!1},{default:e(()=>[t(c,{style:{width:"50%"}},{default:e(()=>[o[28]||(o[28]=l("div",{style:{height:"30px","text-align":"center"}},"Hover 指示器触发",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[1]||(o[1]=E=>a.current=E),trigger:"hover",height:200},{default:e(()=>[t(n,null,{default:e(()=>[...o[24]||(o[24]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[25]||(o[25]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[26]||(o[26]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[27]||(o[27]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{style:{width:"50%"}},{default:e(()=>[o[33]||(o[33]=l("div",{style:{height:"30px","text-align":"center"}},"Click 指示器触发",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[2]||(o[2]=E=>a.current=E),trigger:"click",height:200},{default:e(()=>[t(n,null,{default:e(()=>[...o[29]||(o[29]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[30]||(o[30]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[31]||(o[31]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[32]||(o[32]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),t(p,null,{desc:e(()=>[...o[34]||(o[34]=[])]),highlight:e(()=>[...o[35]||(o[35]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," :show-last-padding"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 50%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">Hover 指示器触发</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 50%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">Click 指示器触发</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            current: "),l("span",{style:{color:"#79B8FF"}},"0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[36]||(o[36]=[])]),default:e(()=>[o[37]||(o[37]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">Hover 指示器触发</div>
                <zmz-carousel v-model="current" trigger="hover" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">Click 指示器触发</div>
                <zmz-carousel v-model="current" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[130]||(o[130]=l("h2",{id:"%E6%8C%87%E7%A4%BA%E5%99%A8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E6%8C%87%E7%A4%BA%E5%99%A8"},"#"),s(" 指示器")],-1)),o[131]||(o[131]=l("p",null,"点击或滑过指示器进行切换，默认click",-1)),l("div",f,[t(y,{"show-last-padding":!1},{default:e(()=>[t(c,{style:{width:"33.33%"}},{default:e(()=>[o[42]||(o[42]=l("div",{style:{height:"30px","text-align":"center"}},"指示器(内部)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[3]||(o[3]=E=>a.current=E),indicator:"inside",trigger:"click",height:200},{default:e(()=>[t(n,null,{default:e(()=>[...o[38]||(o[38]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[39]||(o[39]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[40]||(o[40]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[41]||(o[41]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{style:{width:"33.33%"}},{default:e(()=>[o[47]||(o[47]=l("div",{style:{height:"30px","text-align":"center"}},"指示器(内部)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[4]||(o[4]=E=>a.current=E),indicator:"outside",trigger:"click",height:200},{default:e(()=>[t(n,null,{default:e(()=>[...o[43]||(o[43]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[44]||(o[44]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[45]||(o[45]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[46]||(o[46]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{style:{width:"33.33%"}},{default:e(()=>[o[52]||(o[52]=l("div",{style:{height:"30px","text-align":"center"}},"指示器(不显示)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[5]||(o[5]=E=>a.current=E),indicator:"none",trigger:"click",height:200},{default:e(()=>[t(n,null,{default:e(()=>[...o[48]||(o[48]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[49]||(o[49]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[50]||(o[50]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[51]||(o[51]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),t(p,null,{desc:e(()=>[...o[53]||(o[53]=[])]),highlight:e(()=>[...o[54]||(o[54]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," :show-last-padding"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 33.33%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">指示器(内部)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," indicator"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"inside"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 33.33%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">指示器(内部)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," indicator"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"outside"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 33.33%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">指示器(不显示)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," indicator"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"none"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            current: "),l("span",{style:{color:"#79B8FF"}},"0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[55]||(o[55]=[])]),default:e(()=>[o[56]||(o[56]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(内部)</div>
                <zmz-carousel v-model="current" indicator="inside" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(内部)</div>
                <zmz-carousel v-model="current" indicator="outside" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(不显示)</div>
                <zmz-carousel v-model="current" indicator="none" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[132]||(o[132]=l("h2",{id:"%E5%88%87%E6%8D%A2%E7%AE%AD%E5%A4%B4",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%88%87%E6%8D%A2%E7%AE%AD%E5%A4%B4"},"#"),s(" 切换箭头")],-1)),o[133]||(o[133]=l("p",null,"切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）",-1)),l("div",h,[t(y,{"show-last-padding":!1},{default:e(()=>[t(c,{style:{width:"33.33%"}},{default:e(()=>[o[61]||(o[61]=l("div",{style:{height:"30px","text-align":"center"}},"指示器(悬停)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[6]||(o[6]=E=>a.current=E),arrow:"hover",trigger:"hover",height:200},{default:e(()=>[t(n,null,{default:e(()=>[...o[57]||(o[57]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[58]||(o[58]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[59]||(o[59]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[60]||(o[60]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{style:{width:"33.33%"}},{default:e(()=>[o[66]||(o[66]=l("div",{style:{height:"30px","text-align":"center"}},"指示器(一直显示)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[7]||(o[7]=E=>a.current=E),arrow:"always",trigger:"click",height:200},{default:e(()=>[t(n,null,{default:e(()=>[...o[62]||(o[62]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[63]||(o[63]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[64]||(o[64]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[65]||(o[65]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{style:{width:"33.33%"}},{default:e(()=>[o[71]||(o[71]=l("div",{style:{height:"30px","text-align":"center"}},"指示器(不显示)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[8]||(o[8]=E=>a.current=E),arrow:"never",trigger:"click",height:200},{default:e(()=>[t(n,null,{default:e(()=>[...o[67]||(o[67]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[68]||(o[68]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[69]||(o[69]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[70]||(o[70]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),t(p,null,{desc:e(()=>[...o[72]||(o[72]=[])]),highlight:e(()=>[...o[73]||(o[73]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," :show-last-padding"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 33.33%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">指示器(悬停)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}},"  arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 33.33%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">指示器(一直显示)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}},"  arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"always"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 33.33%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">指示器(不显示)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}},"  arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"never"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            current: "),l("span",{style:{color:"#79B8FF"}},"0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[74]||(o[74]=[])]),default:e(()=>[o[75]||(o[75]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(悬停)</div>
                <zmz-carousel v-model="current"  arrow="hover" trigger="hover" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(一直显示)</div>
                <zmz-carousel v-model="current"  arrow="always" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">指示器(不显示)</div>
                <zmz-carousel v-model="current"  arrow="never" trigger="click" :height="200">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[134]||(o[134]=l("h2",{id:"%E5%88%87%E6%8D%A2%E6%96%B9%E5%90%91",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%88%87%E6%8D%A2%E6%96%B9%E5%90%91"},"#"),s(" 切换方向")],-1)),o[135]||(o[135]=l("p",null,[s("设置属性"),l("code",null,"mode"),s(" ,修改轮播图的方向")],-1)),l("div",w,[t(y,{"show-last-padding":!1},{default:e(()=>[t(c,{style:{width:"50%"}},{default:e(()=>[o[80]||(o[80]=l("div",{style:{height:"30px","text-align":"center"}},"水平(horizontal)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[9]||(o[9]=E=>a.current=E),arrow:"hover",trigger:"click",height:200,mode:"horizontal"},{default:e(()=>[t(n,null,{default:e(()=>[...o[76]||(o[76]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[77]||(o[77]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[78]||(o[78]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[79]||(o[79]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{style:{width:"50%"}},{default:e(()=>[o[85]||(o[85]=l("div",{style:{height:"30px","text-align":"center"}},"垂直(vertical)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[10]||(o[10]=E=>a.current=E),arrow:"hover",trigger:"click",height:200,mode:"vertical"},{default:e(()=>[t(n,null,{default:e(()=>[...o[81]||(o[81]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[82]||(o[82]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[83]||(o[83]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[84]||(o[84]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),t(p,null,{desc:e(()=>[...o[86]||(o[86]=[])]),highlight:e(()=>[...o[87]||(o[87]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," :show-last-padding"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 50%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">水平(horizontal)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"horizontal"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 50%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">垂直(vertical)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            current: "),l("span",{style:{color:"#79B8FF"}},"0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[88]||(o[88]=[])]),default:e(()=>[o[89]||(o[89]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">水平(horizontal)</div>
                <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="horizontal">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">垂直(vertical)</div>
                <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="vertical">
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[136]||(o[136]=l("h2",{id:"%E5%BE%AA%E7%8E%AF%E8%BD%AE%E6%92%AD",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%BE%AA%E7%8E%AF%E8%BD%AE%E6%92%AD"},"#"),s(" 循环轮播")],-1)),o[137]||(o[137]=l("p",null,[s("使用属性"),l("code",null,"loop"),s(" ，让轮播图丝滑过度")],-1)),l("div",x,[t(y,{"show-last-padding":!1},{default:e(()=>[t(c,{style:{width:"50%"}},{default:e(()=>[o[94]||(o[94]=l("div",{style:{height:"30px","text-align":"center"}},"水平(horizontal)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[11]||(o[11]=E=>a.current=E),arrow:"hover",trigger:"click",height:200,mode:"horizontal",loop:""},{default:e(()=>[t(n,null,{default:e(()=>[...o[90]||(o[90]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[91]||(o[91]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[92]||(o[92]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[93]||(o[93]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{style:{width:"50%"}},{default:e(()=>[o[99]||(o[99]=l("div",{style:{height:"30px","text-align":"center"}},"垂直(vertical)",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[12]||(o[12]=E=>a.current=E),arrow:"hover",trigger:"click",height:200,mode:"vertical",loop:""},{default:e(()=>[t(n,null,{default:e(()=>[...o[95]||(o[95]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[96]||(o[96]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[97]||(o[97]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[98]||(o[98]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),t(p,null,{desc:e(()=>[...o[100]||(o[100]=[])]),highlight:e(()=>[...o[101]||(o[101]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," :show-last-padding"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 50%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">水平(horizontal)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"horizontal"'),l("span",{style:{color:"#B392F0"}}," loop"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 50%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">垂直(vertical)</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," trigger"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"click"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#B392F0"}}," loop"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            current: "),l("span",{style:{color:"#79B8FF"}},"0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[102]||(o[102]=[])]),default:e(()=>[o[103]||(o[103]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">水平(horizontal)</div>
                <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="horizontal" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 50%">
                <div style="height:30px;text-align: center;">垂直(vertical)</div>
                <zmz-carousel v-model="current" arrow="hover" trigger="click" :height="200" mode="vertical" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[138]||(o[138]=l("h2",{id:"%E8%BD%AE%E6%92%AD%E6%95%88%E6%9E%9C",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%BD%AE%E6%92%AD%E6%95%88%E6%9E%9C"},"#"),s(" 轮播效果")],-1)),o[139]||(o[139]=l("p",null,[s("使用属性"),l("code",null,"effect"),s(" ，设置轮播图过度效果,当设置"),l("code",null,'effect="custom"'),s("可使用"),l("code",null,"effectTranslate"),s("自定义动画效果")],-1)),l("div",C,[t(y,{"show-last-padding":!1},{default:e(()=>[t(c,{style:{width:"33.33%"}},{default:e(()=>[o[108]||(o[108]=l("div",{style:{height:"30px","text-align":"center"}},"幻灯片",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[13]||(o[13]=E=>a.current=E),arrow:"hover",effect:"slide",height:200,loop:""},{default:e(()=>[t(n,null,{default:e(()=>[...o[104]||(o[104]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[105]||(o[105]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[106]||(o[106]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[107]||(o[107]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{style:{width:"33.33%"}},{default:e(()=>[o[113]||(o[113]=l("div",{style:{height:"30px","text-align":"center"}},"卡片",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[14]||(o[14]=E=>a.current=E),arrow:"hover",effect:"card",height:200,loop:""},{default:e(()=>[t(n,null,{default:e(()=>[...o[109]||(o[109]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[110]||(o[110]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[111]||(o[111]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[112]||(o[112]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{style:{width:"33.33%"}},{default:e(()=>[o[118]||(o[118]=l("div",{style:{height:"30px","text-align":"center"}},"淡入淡出",-1)),t(r,{modelValue:a.current,"onUpdate:modelValue":o[15]||(o[15]=E=>a.current=E),arrow:"hover",effect:"fade",height:200,loop:""},{default:e(()=>[t(n,null,{default:e(()=>[...o[114]||(o[114]=[s("1",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[115]||(o[115]=[s("2",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[116]||(o[116]=[s("3",-1)])]),_:1}),t(n,null,{default:e(()=>[...o[117]||(o[117]=[s("4",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),t(p,null,{desc:e(()=>[...o[119]||(o[119]=[])]),highlight:e(()=>[...o[120]||(o[120]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," :show-last-padding"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 33.33%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">幻灯片</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," effect"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"slide"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#B392F0"}}," loop"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 33.33%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">卡片</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," effect"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"card"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#B392F0"}}," loop"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 33.33%"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"height:30px;text-align: center;"'),l("span",{style:{color:"#E1E4E8"}},">淡入淡出</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"current"'),l("span",{style:{color:"#B392F0"}}," arrow"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"hover"'),l("span",{style:{color:"#B392F0"}}," effect"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"fade"'),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200"'),l("span",{style:{color:"#B392F0"}}," loop"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">4</"),l("span",{style:{color:"#85E89D"}},"zmz-carousel-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-carousel"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            current: "),l("span",{style:{color:"#79B8FF"}},"0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...o[121]||(o[121]=[])]),default:e(()=>[o[122]||(o[122]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space :show-last-padding="false">
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">幻灯片</div>
                <zmz-carousel v-model="current" arrow="hover" effect="slide" :height="200" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">卡片</div>
                <zmz-carousel v-model="current" arrow="hover" effect="card" :height="200" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
            <zmz-space-item style="width: 33.33%">
                <div style="height:30px;text-align: center;">淡入淡出</div>
                <zmz-carousel v-model="current" arrow="hover" effect="fade" :height="200" loop>
                    <zmz-carousel-item>1</zmz-carousel-item>
                    <zmz-carousel-item>2</zmz-carousel-item>
                    <zmz-carousel-item>3</zmz-carousel-item>
                    <zmz-carousel-item>4</zmz-carousel-item>
                </zmz-carousel>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[140]||(o[140]=u('<h2 id="carousel-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#carousel-%E5%B1%9E%E6%80%A7">#</a> Carousel 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>轮播图下标</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>height</td><td>轮播图的高度</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>indicator</td><td>指示器的位置, inside （内部），outside（外部），none（不显示）</td><td>String</td><td>—</td><td>inside</td></tr><tr><td>loop</td><td>是否开启轮播图循环</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>autoplay</td><td>是否自动切换</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>swipeable</td><td>可在轮播图上按下拖拽切换</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>arrow</td><td>切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）</td><td>String</td><td>—</td><td>hover</td></tr><tr><td>delay</td><td>自动切换时间</td><td>Number</td><td>—</td><td>3000</td></tr><tr><td>trigger</td><td>触发方式，可选值为 hover（滑入），click（点击）</td><td>String</td><td>—</td><td>click</td></tr><tr><td>mode</td><td>轮播图效果</td><td>String</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>effect</td><td>轮播图效果</td><td>String</td><td>slide/card/fade/custom</td><td>slide</td></tr><tr><td>effectTranslate</td><td>效果位移，effect为custom时可自定义位移效果</td><td>Function</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="carousel-%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#carousel-%E4%BA%8B%E4%BB%B6">#</a> Carousel 事件</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-change</td><td>当轮播图发生改变</td><td>function(index: 下标)</td></tr></tbody></table></div><h2 id="carousel-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#carousel-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Carousel 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-carousel-height</td><td>–zmz-carousel-height</td><td>300px</td><td>高度</td></tr><tr><td>@zmz-carousel-indicator-padding</td><td>–zmz-carousel-indicator-padding</td><td>6px 5px</td><td>指示点边距</td></tr><tr><td>@zmz-carousel-indicator-width</td><td>–zmz-carousel-indicator-width</td><td>16px</td><td>指示点宽度</td></tr><tr><td>@zmz-carousel-indicator-height</td><td>–zmz-carousel-indicator-height</td><td>3px</td><td>指示点高度</td></tr><tr><td>@zmz-carousel-indicator-hover-width</td><td>–zmz-carousel-indicator-hover-width</td><td>24px</td><td>指示点滑过宽度</td></tr><tr><td>@zmz-carousel-indicator-hover-height</td><td>–zmz-carousel-indicator-hover-height</td><td>3px</td><td>指示点滑过高度</td></tr><tr><td>@zmz-carousel-arrow-width</td><td>–zmz-carousel-arrow-width</td><td>30px</td><td>切换按钮宽度</td></tr><tr><td>@zmz-carousel-arrow-height</td><td>–zmz-carousel-arrow-height</td><td>30px</td><td>切换按钮高度</td></tr><tr><td>@zmz-carousel-arrow-icon-color</td><td>–zmz-carousel-arrow-icon-color</td><td>#fff</td><td>按钮图标颜色</td></tr><tr><td>@zmz-carousel-arrow-icon-size</td><td>–zmz-carousel-arrow-icon-size</td><td>14px</td><td>按钮图标大小</td></tr><tr><td>@zmz-carousel-arrow-background-color</td><td>–zmz-carousel-arrow-background-color</td><td>rgba(#000, 0.1)</td><td>按钮背景颜色</td></tr><tr><td>@zmz-carousel-arrow-hover-background-color</td><td>–zmz-carousel-arrow-hover-background-color</td><td>rgba(#000, 0.3)</td><td>按钮滑过背景颜色</td></tr></tbody></table></div>',6))])}const N=z(D,[["render",k]]);export{N as default};
