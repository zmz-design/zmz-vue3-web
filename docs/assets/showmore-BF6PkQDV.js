import{_ as d,c as y,a as s,b as l,e as t,w as n,d as i,r,o as m}from"./index-DDFEzhq1.js";const h={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Showmore 显示更多"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),disabled:!0,popover:!0}},methods:{currentConfig(c){return this.$setting.currentConfig[c]}}},z={class:"zmz-markdown-article"},F={class:"demo-block"},g={class:"demo-block"},B={class:"demo-block"},w={class:"demo-block"},u={class:"demo-block"};function f(c,o,x,b,C,D){const e=r("zmz-showmore"),E=r("demo-block"),a=r("zmz-space-item"),p=r("zmz-space");return m(),y("div",z,[o[20]||(o[20]=s("h1",{id:"showmore-%E6%98%BE%E7%A4%BA%E6%9B%B4%E5%A4%9A",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#showmore-%E6%98%BE%E7%A4%BA%E6%9B%B4%E5%A4%9A"},"#"),l(" Showmore 显示更多")],-1)),o[21]||(o[21]=s("hr",null,null,-1)),o[22]||(o[22]=s("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),l(" 基础用法")],-1)),o[23]||(o[23]=s("p",null,"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠。",-1)),s("div",F,[t(e,{long:10,content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),t(E,null,{desc:n(()=>[...o[0]||(o[0]=[])]),highlight:n(()=>[...o[1]||(o[1]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#B392F0"}}," :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"10"'),s("span",{style:{color:"#B392F0"}}," content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[2]||(o[2]=[])]),default:n(()=>[o[3]||(o[3]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-showmore :long="10" content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"></zmz-showmore>
    </div>
</template>

`)],-1))]),_:1}),o[24]||(o[24]=s("h2",{id:"%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95"},"#"),l(" 高级用法")],-1)),o[25]||(o[25]=s("p",null,[l("文本超出显示长度，折叠起来，展开后，可以通过"),s("code",null,"fold"),l("指定是否需要收起，也可通过"),s("code",null,"show-text"),l("设置折叠时的文案，通过"),s("code",null,"hide-text"),l("设置收起的文案")],-1)),s("div",g,[t(e,{fold:"",long:10,"show-text":"show","hide-text":"hide",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),t(E,null,{desc:n(()=>[...o[4]||(o[4]=[])]),highlight:n(()=>[...o[5]||(o[5]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#B392F0"}}," fold"),s("span",{style:{color:"#B392F0"}}," :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"10"'),s("span",{style:{color:"#B392F0"}}," show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"'),s("span",{style:{color:"#B392F0"}}," hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"'),s("span",{style:{color:"#B392F0"}}," content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[6]||(o[6]=[])]),default:n(()=>[o[7]||(o[7]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-showmore fold :long="10" show-text="show" hide-text="hide" content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"></zmz-showmore>
    </div>
</template>
`)],-1))]),_:1}),o[26]||(o[26]=s("h2",{id:"%E6%8A%98%E5%8F%A0%E6%96%B9%E5%90%91",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E6%8A%98%E5%8F%A0%E6%96%B9%E5%90%91"},"#"),l(" 折叠方向")],-1)),o[27]||(o[27]=s("p",null,[l("可以通过"),s("code",null,"display"),l("指定是块折叠还是文本折叠")],-1)),s("div",B,[t(p,{mode:"vertical"},{default:n(()=>[t(a,null,{default:n(()=>[t(e,{fold:"","show-text":"show","hide-text":"hide",long:30,"fold-type":"block",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),_:1}),t(a,null,{default:n(()=>[t(e,{fold:"","show-text":"show","hide-text":"hide",long:30,"fold-type":"line",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),_:1})]),_:1})]),t(E,null,{desc:n(()=>[...o[8]||(o[8]=[])]),highlight:n(()=>[...o[9]||(o[9]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#B392F0"}}," mode"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"vertical"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"30"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold-type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"block"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"30"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold-type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"line"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[10]||(o[10]=[])]),default:n(()=>[o[11]||(o[11]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    fold-type="block"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    fold-type="line"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
`)],-1))]),_:1}),o[28]||(o[28]=s("h2",{id:"%E7%A6%81%E7%94%A8%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E7%94%A8%E6%B3%95"},"#"),l(" 禁用用法")],-1)),o[29]||(o[29]=s("p",null,[l("可以通过"),s("code",null,"disabled"),l("禁用")],-1)),s("div",w,[t(e,{disabled:"",fold:"",long:10,"show-text":"show","hide-text":"hide",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),t(E,null,{desc:n(()=>[...o[12]||(o[12]=[])]),highlight:n(()=>[...o[13]||(o[13]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#B392F0"}}," disabled"),s("span",{style:{color:"#B392F0"}}," fold"),s("span",{style:{color:"#B392F0"}}," :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"10"'),s("span",{style:{color:"#B392F0"}}," show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"'),s("span",{style:{color:"#B392F0"}}," hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"'),s("span",{style:{color:"#B392F0"}}," content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[14]||(o[14]=[])]),default:n(()=>[o[15]||(o[15]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-showmore disabled fold :long="10" show-text="show" hide-text="hide" content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"></zmz-showmore>
    </div>
</template>
`)],-1))]),_:1}),o[30]||(o[30]=s("h2",{id:"%E5%86%85%E7%BD%AE%E4%B8%BB%E9%A2%98",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%86%85%E7%BD%AE%E4%B8%BB%E9%A2%98"},"#"),l(" 内置主题")],-1)),o[31]||(o[31]=s("p",null,[l("可以通过"),s("code",null,"type"),l("指定是主题")],-1)),s("div",u,[t(p,{mode:"vertical"},{default:n(()=>[t(a,null,{default:n(()=>[t(e,{fold:"","show-text":"show","hide-text":"hide",long:30,type:"default",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),_:1}),t(a,null,{default:n(()=>[t(e,{fold:"","show-text":"show","hide-text":"hide",long:30,type:"success",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),_:1}),t(a,null,{default:n(()=>[t(e,{fold:"","show-text":"show","hide-text":"hide",long:30,type:"error",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),_:1}),t(a,null,{default:n(()=>[t(e,{fold:"","show-text":"show","hide-text":"hide",long:30,type:"warning",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),_:1}),t(a,null,{default:n(()=>[t(e,{fold:"","show-text":"show","hide-text":"hide",long:30,type:"primary",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),_:1}),t(a,null,{default:n(()=>[t(e,{fold:"","show-text":"show","hide-text":"hide",long:30,type:"info",content:"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"})]),_:1})]),_:1})]),t(E,null,{desc:n(()=>[...o[16]||(o[16]=[])]),highlight:n(()=>[...o[17]||(o[17]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#B392F0"}}," mode"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"vertical"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"30"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"default"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"30"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"success"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"30"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"error"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"30"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"warning"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"30"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"zmz-showmore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    fold")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    show-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    hide-text"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hide"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    :long"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"30"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"info"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"                    content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                ></"),s("span",{style:{color:"#85E89D"}},"zmz-showmore"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[18]||(o[18]=[])]),default:n(()=>[o[19]||(o[19]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="default"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="success"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="error"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="warning"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="primary"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-showmore
                    fold
                    show-text="show"
                    hide-text="hide"
                    :long="30"
                    type="info"
                    content="文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠文本超出显示长度，折叠起来，通过long属性显示从何处开始折叠"
                ></zmz-showmore>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>

`)],-1))]),_:1}),o[32]||(o[32]=i('<h2 id="showmore-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#showmore-%E5%B1%9E%E6%80%A7">#</a> Showmore 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>long</td><td>显示文本的长度</td><td>Number</td><td>—</td><td>-1(不折叠)</td></tr><tr><td>type</td><td>颜色</td><td>String</td><td>default / success / error / warning / primary / info</td><td>default</td></tr><tr><td>content</td><td>文本</td><td>String</td><td>-</td><td></td></tr><tr><td>show-text</td><td>折叠时需要显示文案</td><td>String</td><td>—</td><td>显示更多</td></tr><tr><td>hide-text</td><td>隐藏时需要显示文案</td><td>String</td><td>—</td><td>收起更多</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>fold</td><td>是否折叠</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>fold-show-button</td><td>是否显示收起按钮</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>fold-hide-button</td><td>是否显示隐藏按钮</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>fold-type</td><td>块折叠还是线折叠</td><td>String</td><td>block / line</td><td>line</td></tr></tbody></table></div><h2 id="showmore-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#showmore-%E6%96%B9%E6%B3%95">#</a> Showmore 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-fold</td><td>展开折叠触发</td><td>function(‘hide’|‘show’)</td></tr></tbody></table></div><h2 id="showmore-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#showmore-%E6%8F%92%E6%A7%BD">#</a> Showmore 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数名称</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>—</td><td>内容插槽</td><td>—</td></tr><tr><td>button</td><td>折叠按钮插槽</td><td>#count=“{long(限制长度) contentLong(内容长度) ， fold(是否折叠) ， foldShowButton(显示展开按钮) ， foldHideButton(显示隐藏按钮)}”</td></tr></tbody></table></div><h2 id="showmore-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#showmore-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Showmore 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-showmore-text-size</td><td>–zmz-showmore-text-size</td><td>12px</td><td>字体大小</td></tr><tr><td>@zmz-showmore-text-color</td><td>–zmz-showmore-text-color</td><td>default颜色</td><td>字体颜色</td></tr><tr><td>@zmz-showmore-disabled-opacity</td><td>–zmz-showmore-disabled-opacity</td><td>0.5</td><td>禁用透明</td></tr><tr><td>@zmz-showmore-disabled-cursor</td><td>–zmz-showmore-disabled-cursor</td><td>no-drop</td><td>禁用标识</td></tr><tr><td>@zmz-showmore-button-size</td><td>–zmz-showmore-button-size</td><td>12px</td><td>按钮大小</td></tr><tr><td>@zmz-showmore-button-color</td><td>–zmz-showmore-button-color</td><td>default颜色</td><td>按钮颜色</td></tr><tr><td>@zmz-showmore-button-cursor</td><td>–zmz-showmore-button-cursor</td><td>pointer</td><td>按钮标识</td></tr></tbody></table></div>',8))])}const A=d(h,[["render",f]]);export{A as default};
