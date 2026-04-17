import{_ as g,c as p,a as s,b as l,e as a,w as n,T as x,r as v,o as t,F as h,f as b,g as f,h as D,i,t as r,v as y}from"./index-Bfn7SEZ2.js";const _={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Transition 内置动画"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),zoomDataList:[{value:"zmz-zoom",label:"zmz-zoom",title:"缩放",show:!0},{value:"zmz-zoom-top",label:"zmz-zoom-top",title:"向上",show:!0},{value:"zmz-zoom-bottom",label:"zmz-zoom-bottom",title:"向下",show:!0},{value:"zmz-zoom-left",label:"zmz-zoom-left",title:"向左",show:!0},{value:"zmz-zoom-right",label:"zmz-zoom-right",title:"向右",show:!0}],rotateDataList:[{value:"zmz-rotate-bottom-left",label:"zmz-rotate-bottom-left",title:"向下左",show:!0},{value:"zmz-rotate-bottom-right",label:"zmz-rotate-bottom-right",title:"向下右",show:!0},{value:"zmz-rotate-top-left",label:"zmz-rotate-top-left",title:"向上左",show:!0},{value:"zmz-rotate-top-right",label:"zmz-rotate-top-right",title:"向下右",show:!0},{value:"zmz-rotate",label:"zmz-rotate",title:"居中",show:!0}],fadeDataList:[{value:"zmz-fade",label:"zmz-fade",title:"淡入淡出",show:!0},{value:"zmz-fade-bottom",label:"zmz-fade-bottom",title:"向下",show:!0},{value:"zmz-fade-top",label:"zmz-fade-top",title:"向上",show:!0},{value:"zmz-fade-right",label:"zmz-fade-right",title:"向右",show:!0},{value:"zmz-fade-left",label:"zmz-fade-left",title:"向左",show:!0}],slideDataList:[{value:"zmz-slide-bottom",label:"zmz-slide-bottom",title:"向下",show:!0},{value:"zmz-slide-top",label:"zmz-slide-top",title:"向上",show:!0},{value:"zmz-slide-right",label:"zmz-slide-right",title:"向右",show:!0},{value:"zmz-slide-left",label:"zmz-slide-left",title:"向左",show:!0}],foldDataList:[{value:"zmz-fold-top",label:"zmz-fold-top",title:"向上",show:!0},{value:"zmz-fold-bottom",label:"zmz-fold-bottom",title:"向下",show:!0},{value:"zmz-fold-left",label:"zmz-fold-left",title:"向左",show:!0},{value:"zmz-fold-right",label:"zmz-fold-right",title:"向右",show:!0},{value:"zmz-fold-center-x",label:"zmz-fold-center-x",title:"水平",show:!0},{value:"zmz-fold-center-y",label:"zmz-fold-center-y",title:"垂直",show:!0}],show:!0,show2:!0}},methods:{currentConfig(z){return this.$setting.currentConfig[z]},handleTransition(z){z.show=!z.show}}},k={class:"zmz-markdown-article"},A={class:"demo-block"},T={class:"demo-md-transition"},L={class:"demo-md-transition__header"},q={class:"demo-md-transition__section"},N={class:"demo-md-transition__footer"},V={class:"demo-block"},S={class:"demo-md-transition"},G={class:"demo-md-transition__header"},I={class:"demo-md-transition__section"},j={class:"demo-md-transition__footer"},H={class:"demo-block"},J={class:"demo-md-transition"},K={class:"demo-md-transition__header"},M={class:"demo-md-transition__section"},O={class:"demo-md-transition__footer"},P={class:"demo-block"},Q={class:"demo-md-transition"},R={class:"demo-md-transition__header"},U={class:"demo-md-transition__section"},W={class:"demo-md-transition__footer"},X={class:"demo-block"},Y={class:"demo-md-transition"},Z={class:"demo-md-transition__header"},$={class:"demo-md-transition__section"},ss={class:"demo-md-transition__footer"},ls={class:"demo-block"},os={style:{"margin-bottom":"20px",display:"flex"}},ns={style:{height:"100px"}},es={class:"demo-block"},as={style:{"margin-bottom":"20px",display:"flex"}},ts={style:{height:"100px",display:"flex"}},Es={key:0,class:"zmz-transition-box",style:{"margin-right":"20px"}},rs={key:0,class:"zmz-transition-box"};function cs(z,o,ps,is,E,F){const d=v("zmz-button"),u=v("zmz-grid-item"),B=v("zmz-grid"),m=v("demo-block"),w=v("zmz-transition-collapse");return t(),p("div",k,[o[38]||(o[38]=s("h1",{id:"transition-%E5%86%85%E7%BD%AE%E5%8A%A8%E7%94%BB",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#transition-%E5%86%85%E7%BD%AE%E5%8A%A8%E7%94%BB"},"#"),l(" Transition 内置动画")],-1)),o[39]||(o[39]=s("hr",null,null,-1)),o[40]||(o[40]=s("p",null,"组件过度动画",-1)),o[41]||(o[41]=s("h2",{id:"%E6%B7%A1%E5%85%A5%E6%B7%A1%E5%87%BA",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E6%B7%A1%E5%85%A5%E6%B7%A1%E5%87%BA"},"#"),l(" 淡入淡出")],-1)),s("div",A,[a(B,{column:4,border:"",square:""},{default:n(()=>[(t(!0),p(h,null,b(E.fadeDataList,(e,c)=>(t(),f(u,{key:c},{default:n(()=>[s("div",T,[s("div",L,[a(d,{onClick:C=>F.handleTransition(e)},{default:n(()=>[...o[2]||(o[2]=[l("显示动画",-1)])]),_:1},8,["onClick"])]),s("div",q,[a(D,{name:e.value},{default:n(()=>[i(s("div",{class:"zmz-transition-box"},r(e.label),513),[[y,e.show]])]),_:2},1032,["name"])]),s("div",N,r(e.title),1)])]),_:2},1024))),128))]),_:1})]),a(m,null,{desc:n(()=>[...o[3]||(o[3]=[])]),highlight:n(()=>[...o[4]||(o[4]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#B392F0"}}," :column"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"4"'),s("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),s("span",{style:{color:"#B392F0"}}," square"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#B392F0"}}," v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item,index in fadeDataList"'),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"index"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__header"'),s("span",{style:{color:"#E1E4E8"}},"><"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleTransition(item)"'),s("span",{style:{color:"#E1E4E8"}},">显示动画</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__section"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        <"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#B392F0"}}," :name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.value"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                            <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," v-show"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.show"'),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-transition-box"'),s("span",{style:{color:"#E1E4E8"}},">{{item.label}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        </"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__footer"'),s("span",{style:{color:"#E1E4E8"}},">{{item.title}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            fadeDataList: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'淡入淡出'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade-bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade-bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向下'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade-top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade-top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向上'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向右'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fade-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向左'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        handleTransition"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            item.show "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#F97583"}}," !"),s("span",{style:{color:"#E1E4E8"}},"item.show")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[5]||(o[5]=[])]),default:n(()=>[o[6]||(o[6]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in fadeDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fadeDataList: [
                {
                    value: 'zmz-fade',
                    label: 'zmz-fade',
                    title: '淡入淡出',
                    show: true
                },
                {
                    value: 'zmz-fade-bottom',
                    label: 'zmz-fade-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-fade-top',
                    label: 'zmz-fade-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-fade-right',
                    label: 'zmz-fade-right',
                    title: '向右',
                    show: true
                },
                {
                    value: 'zmz-fade-left',
                    label: 'zmz-fade-left',
                    title: '向左',
                    show: true
                },
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[42]||(o[42]=s("h2",{id:"%E6%97%8B%E8%BD%AC%E5%8A%A8%E7%94%BB",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E6%97%8B%E8%BD%AC%E5%8A%A8%E7%94%BB"},"#"),l(" 旋转动画")],-1)),s("div",V,[a(B,{column:4,border:"",square:""},{default:n(()=>[(t(!0),p(h,null,b(E.rotateDataList,(e,c)=>(t(),f(u,{key:c},{default:n(()=>[s("div",S,[s("div",G,[a(d,{onClick:C=>F.handleTransition(e)},{default:n(()=>[...o[7]||(o[7]=[l("显示动画",-1)])]),_:1},8,["onClick"])]),s("div",I,[a(D,{name:e.value},{default:n(()=>[i(s("div",{class:"zmz-transition-box"},r(e.label),513),[[y,e.show]])]),_:2},1032,["name"])]),s("div",j,r(e.title),1)])]),_:2},1024))),128))]),_:1})]),a(m,null,{desc:n(()=>[...o[8]||(o[8]=[])]),highlight:n(()=>[...o[9]||(o[9]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#B392F0"}}," :column"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"4"'),s("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),s("span",{style:{color:"#B392F0"}}," square"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#B392F0"}}," v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item,index in rotateDataList"'),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"index"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__header"'),s("span",{style:{color:"#E1E4E8"}},"><"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleTransition(item)"'),s("span",{style:{color:"#E1E4E8"}},">显示动画</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__section"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        <"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#B392F0"}}," :name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.value"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                            <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," v-show"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.show"'),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-transition-box"'),s("span",{style:{color:"#E1E4E8"}},">{{item.label}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        </"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__footer"'),s("span",{style:{color:"#E1E4E8"}},">{{item.title}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            rotateDataList: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate-bottom-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate-bottom-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向下左'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate-bottom-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate-bottom-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向下右'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate-top-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate-top-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向上左'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate-top-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate-top-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向下右'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-rotate'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'居中'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        handleTransition"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            item.show "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#F97583"}}," !"),s("span",{style:{color:"#E1E4E8"}},"item.show")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[10]||(o[10]=[])]),default:n(()=>[o[11]||(o[11]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in rotateDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rotateDataList: [
                {
                    value: 'zmz-rotate-bottom-left',
                    label: 'zmz-rotate-bottom-left',
                    title: '向下左',
                    show: true
                },
                {
                    value: 'zmz-rotate-bottom-right',
                    label: 'zmz-rotate-bottom-right',
                    title: '向下右',
                    show: true
                },
                {
                    value: 'zmz-rotate-top-left',
                    label: 'zmz-rotate-top-left',
                    title: '向上左',
                    show: true
                },
                {
                    value: 'zmz-rotate-top-right',
                    label: 'zmz-rotate-top-right',
                    title: '向下右',
                    show: true
                },
                {
                    value: 'zmz-rotate',
                    label: 'zmz-rotate',
                    title: '居中',
                    show: true
                },
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[43]||(o[43]=s("h2",{id:"%E6%BB%91%E5%85%A5%E5%8A%A8%E7%94%BB",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E6%BB%91%E5%85%A5%E5%8A%A8%E7%94%BB"},"#"),l(" 滑入动画")],-1)),s("div",H,[a(B,{column:4,border:"",square:""},{default:n(()=>[(t(!0),p(h,null,b(E.slideDataList,(e,c)=>(t(),f(u,{key:c},{default:n(()=>[s("div",J,[s("div",K,[a(d,{onClick:C=>F.handleTransition(e)},{default:n(()=>[...o[12]||(o[12]=[l("显示动画",-1)])]),_:1},8,["onClick"])]),s("div",M,[a(D,{name:e.value},{default:n(()=>[i(s("div",{class:"zmz-transition-box"},r(e.label),513),[[y,e.show]])]),_:2},1032,["name"])]),s("div",O,r(e.title),1)])]),_:2},1024))),128))]),_:1})]),a(m,null,{desc:n(()=>[...o[13]||(o[13]=[])]),highlight:n(()=>[...o[14]||(o[14]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#B392F0"}}," :column"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"4"'),s("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),s("span",{style:{color:"#B392F0"}}," square"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#B392F0"}}," v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item,index in slideDataList"'),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"index"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__header"'),s("span",{style:{color:"#E1E4E8"}},"><"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleTransition(item)"'),s("span",{style:{color:"#E1E4E8"}},">显示动画</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__section"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        <"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#B392F0"}}," :name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.value"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                            <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," v-show"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.show"'),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-transition-box"'),s("span",{style:{color:"#E1E4E8"}},">{{item.label}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        </"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__footer"'),s("span",{style:{color:"#E1E4E8"}},">{{item.title}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            slideDataList: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-slide-bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-slide-bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向下'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-slide-top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-slide-top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向上'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-slide-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-slide-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向右'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-slide-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-slide-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向左'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        handleTransition"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            item.show "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#F97583"}}," !"),s("span",{style:{color:"#E1E4E8"}},"item.show")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[15]||(o[15]=[])]),default:n(()=>[o[16]||(o[16]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in slideDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slideDataList: [
                {
                    value: 'zmz-slide-bottom',
                    label: 'zmz-slide-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-slide-top',
                    label: 'zmz-slide-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-slide-right',
                    label: 'zmz-slide-right',
                    title: '向右',
                    show: true
                },
                {
                    value: 'zmz-slide-left',
                    label: 'zmz-slide-left',
                    title: '向左',
                    show: true
                },
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[44]||(o[44]=s("h2",{id:"%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB"},"#"),l(" 折叠动画")],-1)),s("div",P,[a(B,{column:4,border:"",square:""},{default:n(()=>[(t(!0),p(h,null,b(E.foldDataList,(e,c)=>(t(),f(u,{key:c},{default:n(()=>[s("div",Q,[s("div",R,[a(d,{onClick:C=>F.handleTransition(e)},{default:n(()=>[...o[17]||(o[17]=[l("显示动画",-1)])]),_:1},8,["onClick"])]),s("div",U,[a(D,{name:e.value},{default:n(()=>[i(s("div",{class:"zmz-transition-box"},r(e.label),513),[[y,e.show]])]),_:2},1032,["name"])]),s("div",W,r(e.title),1)])]),_:2},1024))),128))]),_:1})]),a(m,null,{desc:n(()=>[...o[18]||(o[18]=[])]),highlight:n(()=>[...o[19]||(o[19]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#B392F0"}}," :column"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"4"'),s("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),s("span",{style:{color:"#B392F0"}}," square"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#B392F0"}}," v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item,index in foldDataList"'),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"index"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__header"'),s("span",{style:{color:"#E1E4E8"}},"><"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleTransition(item)"'),s("span",{style:{color:"#E1E4E8"}},">显示动画</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__section"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        <"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#B392F0"}}," :name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.value"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                            <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," v-show"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.show"'),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-transition-box"'),s("span",{style:{color:"#E1E4E8"}},">{{item.label}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        </"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__footer"'),s("span",{style:{color:"#E1E4E8"}},">{{item.title}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            foldDataList: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向上'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向下'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向左'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向右'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-center-x'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-center-x'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'水平'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-center-y'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-fold-center-y'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'垂直'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        handleTransition"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            item.show "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#F97583"}}," !"),s("span",{style:{color:"#E1E4E8"}},"item.show")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[20]||(o[20]=[])]),default:n(()=>[o[21]||(o[21]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in foldDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            foldDataList: [
                {
                    value: 'zmz-fold-top',
                    label: 'zmz-fold-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-fold-bottom',
                    label: 'zmz-fold-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-fold-left',
                    label: 'zmz-fold-left',
                    title: '向左',
                    show: true
                },
                {
                    value: 'zmz-fold-right',
                    label: 'zmz-fold-right',
                    title: '向右',
                    show: true
                },
                {
                    value: 'zmz-fold-center-x',
                    label: 'zmz-fold-center-x',
                    title: '水平',
                    show: true
                },
                {
                    value: 'zmz-fold-center-y',
                    label: 'zmz-fold-center-y',
                    title: '垂直',
                    show: true
                }
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[45]||(o[45]=s("h2",{id:"%E7%BC%A9%E6%94%BE%E5%8A%A8%E7%94%BB",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E7%BC%A9%E6%94%BE%E5%8A%A8%E7%94%BB"},"#"),l(" 缩放动画")],-1)),s("div",X,[a(B,{column:4,border:"",square:""},{default:n(()=>[(t(!0),p(h,null,b(E.zoomDataList,(e,c)=>(t(),f(u,{key:c},{default:n(()=>[s("div",Y,[s("div",Z,[a(d,{onClick:C=>F.handleTransition(e)},{default:n(()=>[...o[22]||(o[22]=[l("显示动画",-1)])]),_:1},8,["onClick"])]),s("div",$,[a(D,{name:e.value},{default:n(()=>[i(s("div",{class:"zmz-transition-box"},r(e.label),513),[[y,e.show]])]),_:2},1032,["name"])]),s("div",ss,r(e.title),1)])]),_:2},1024))),128))]),_:1})]),a(m,null,{desc:n(()=>[...o[23]||(o[23]=[])]),highlight:n(()=>[...o[24]||(o[24]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#B392F0"}}," :column"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"4"'),s("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),s("span",{style:{color:"#B392F0"}}," square"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#B392F0"}}," v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item,index in zoomDataList"'),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"index"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__header"'),s("span",{style:{color:"#E1E4E8"}},"><"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleTransition(item)"'),s("span",{style:{color:"#E1E4E8"}},">显示动画</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__section"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        <"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#B392F0"}}," :name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.value"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                            <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," v-show"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.show"'),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-transition-box"'),s("span",{style:{color:"#E1E4E8"}},">{{item.label}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                        </"),s("span",{style:{color:"#85E89D"}},"transition"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-md-transition__footer"'),s("span",{style:{color:"#E1E4E8"}},">{{item.title}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-grid-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-grid"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            zoomDataList: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'缩放'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom-top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom-top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向上'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom-bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom-bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向下'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom-left'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向左'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    value: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    label: "),s("span",{style:{color:"#9ECBFF"}},"'zmz-zoom-right'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    title: "),s("span",{style:{color:"#9ECBFF"}},"'向右'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        handleTransition"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            item.show "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#F97583"}}," !"),s("span",{style:{color:"#E1E4E8"}},"item.show")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[25]||(o[25]=[])]),default:n(()=>[o[26]||(o[26]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in zoomDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            zoomDataList: [
                {
                    value: 'zmz-zoom',
                    label: 'zmz-zoom',
                    title: '缩放',
                    show: true
                },
                {
                    value: 'zmz-zoom-top',
                    label: 'zmz-zoom-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-zoom-bottom',
                    label: 'zmz-zoom-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-zoom-left',
                    label: 'zmz-zoom-left',
                    title: '向左',
                    show: true
                },
                {
                    value: 'zmz-zoom-right',
                    label: 'zmz-zoom-right',
                    title: '向右',
                    show: true
                },
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[46]||(o[46]=s("h2",{id:"%E5%B1%95%E5%BC%80%E5%8A%A8%E7%94%BB",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B1%95%E5%BC%80%E5%8A%A8%E7%94%BB"},"#"),l(" 展开动画")],-1)),s("div",ls,[s("div",os,[a(d,{size:"medium",style:{"margin-left":"20px"},onClick:o[0]||(o[0]=e=>E.show=!E.show)},{default:n(()=>[...o[27]||(o[27]=[l("显示动画",-1)])]),_:1})]),s("div",ns,[a(w,null,{default:n(()=>[i(s("div",null,[...o[28]||(o[28]=[s("div",{class:"zmz-transition-box"},"zmz-transition-collapse",-1)])],512),[[y,E.show]])]),_:1})])]),a(m,null,{desc:n(()=>[...o[29]||(o[29]=[])]),highlight:n(()=>[...o[30]||(o[30]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-bottom: 20px; display:flex;"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"medium"'),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-left: 20px;"'),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show = !show"'),s("span",{style:{color:"#E1E4E8"}},">显示动画</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"height:100px;"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-transition-collapse"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," v-show"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-transition-box"'),s("span",{style:{color:"#E1E4E8"}},">zmz-transition-collapse</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"zmz-transition-collapse"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            show: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[31]||(o[31]=[])]),default:n(()=>[o[32]||(o[32]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px; display:flex;">
            <zmz-button size="medium" style="margin-left: 20px;" @click="show = !show">显示动画</zmz-button>
        </div>
        <div style="height:100px;">
            <zmz-transition-collapse>
                <div v-show="show">
                    <div class="zmz-transition-box">zmz-transition-collapse</div>
                </div>
            </zmz-transition-collapse>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: true
        };
    }
}
<\/script>
`)],-1))]),_:1}),o[47]||(o[47]=s("h2",{id:"%E5%8A%A8%E7%94%BB%E7%BB%84",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8A%A8%E7%94%BB%E7%BB%84"},"#"),l(" 动画组")],-1)),s("div",es,[s("div",as,[a(d,{size:"medium",style:{"margin-left":"20px"},onClick:o[1]||(o[1]=e=>E.show2=!E.show2)},{default:n(()=>[...o[33]||(o[33]=[l("显示动画",-1)])]),_:1})]),s("div",ts,[a(x,{name:"zmz-fold-center-x"},{default:n(()=>[i((t(),p("div",Es,"zmz-fold-center-x")),[[y,E.show2]]),i((t(),p("div",rs,"zmz-fold-center-x")),[[y,E.show2]])]),_:1})])]),a(m,null,{desc:n(()=>[...o[34]||(o[34]=[])]),highlight:n(()=>[...o[35]||(o[35]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-bottom: 20px; display:flex;"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"medium"'),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-left: 20px;"'),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show2 = !show2"'),s("span",{style:{color:"#E1E4E8"}},">显示动画</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"height:100px;display:flex;"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"transition-group"),s("span",{style:{color:"#B392F0"}}," name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-fold-center-x"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," v-show"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show2"'),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"0"'),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-transition-box"'),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-right: 20px;"'),s("span",{style:{color:"#E1E4E8"}},">zmz-fold-center-x</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," v-show"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"show2"'),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"0"'),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-transition-box"'),s("span",{style:{color:"#E1E4E8"}},">zmz-fold-center-x</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"transition-group"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            show2: "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:n(()=>[...o[36]||(o[36]=[])]),default:n(()=>[o[37]||(o[37]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px; display:flex;">
            <zmz-button size="medium" style="margin-left: 20px;" @click="show2 = !show2">显示动画</zmz-button>
        </div>
        <div style="height:100px;display:flex;">
            <transition-group name="zmz-fold-center-x">
                <div v-show="show2" :key="0" class="zmz-transition-box" style="margin-right: 20px;">zmz-fold-center-x</div>
                <div v-show="show2" :key="0" class="zmz-transition-box">zmz-fold-center-x</div>
            </transition-group>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show2: true
        };
    }
}
<\/script>
`)],-1))]),_:1})])}const ds=g(_,[["render",cs]]);export{ds as default};
