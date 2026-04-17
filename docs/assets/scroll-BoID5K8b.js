import{_ as z,c,a as l,b as o,e as a,w as n,d as u,r as E,o as e,F,f as B,g as h}from"./index-DDFEzhq1.js";const S={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},methods:{currentConfig(p){return this.$setting.currentConfig[p]},onScrollBottom(){this.num+=10},onScrollTop(){},onScroll(){}},data(){return{num:10,title:"Scroll 无线滚动"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}}},b={class:"zmz-markdown-article"},g={class:"demo-block"},f={class:"demo-block"};function A(p,s,w,k,y,t){const d=E("zmz-cell"),i=E("zmz-scroll"),m=E("demo-block");return e(),c("div",b,[s[8]||(s[8]=l("h1",{id:"scroll-%E6%97%A0%E7%BA%BF%E6%BB%9A%E5%8A%A8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#scroll-%E6%97%A0%E7%BA%BF%E6%BB%9A%E5%8A%A8"},"#"),o(" Scroll 无线滚动")],-1)),s[9]||(s[9]=l("hr",null,null,-1)),s[10]||(s[10]=l("p",null,"用于一定范围内的大量数据展示查看",-1)),s[11]||(s[11]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),o(" 基础用法")],-1)),l("div",g,[a(i,{onOnScrollUpperleft:t.onScrollTop,onOnScrollLowerright:t.onScrollBottom,onOnScroll:t.onScroll,height:"200px",mode:"vertical"},{default:n(()=>[(e(!0),c(F,null,B(y.num,r=>(e(),h(d,{title:"我是标题",describe:"我是菜单描述",key:r}))),128))]),_:1},8,["onOnScrollUpperleft","onOnScrollLowerright","onOnScroll"])]),a(m,null,{desc:n(()=>[...s[0]||(s[0]=[])]),highlight:n(()=>[...s[1]||(s[1]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-scroll"),l("span",{style:{color:"#B392F0"}}," @on-scroll-upperleft"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onScrollTop"'),l("span",{style:{color:"#B392F0"}}," @on-scroll-lowerright"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onScrollBottom"'),l("span",{style:{color:"#B392F0"}}," @on-scroll"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onScroll"'),l("span",{style:{color:"#B392F0"}}," height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"200px"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'vertical'"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-cell"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"我是标题"'),l("span",{style:{color:"#B392F0"}},"  describe"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"我是菜单描述"'),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item in num"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cell"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-scroll"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onScrollBottom"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".num "),l("span",{style:{color:"#F97583"}},"+="),l("span",{style:{color:"#79B8FF"}}," 10")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onScrollTop"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(data)")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onScroll"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(data)")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            num: "),l("span",{style:{color:"#79B8FF"}},"10"),l("span",{style:{color:"#E1E4E8"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...s[2]||(s[2]=[])]),default:n(()=>[s[3]||(s[3]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-scroll @on-scroll-upperleft="onScrollTop" @on-scroll-lowerright="onScrollBottom" @on-scroll="onScroll" height="200px" mode='vertical'>
            <zmz-cell title="我是标题"  describe="我是菜单描述" v-for="item in num" :key="item"></zmz-cell>
        </zmz-scroll>
    </div>
</template>
<script>
export default {
    methods: {
        onScrollBottom(data){
            this.num += 10
        },
        onScrollTop(data){
            console.log(data)
        },
        onScroll(data){
            console.log(data)
        }
    },
    data () {
        return {
            num: 10,
        }
    }
}
<\/script>
`)],-1))]),_:1}),s[12]||(s[12]=l("h2",{id:"%E6%A8%AA%E5%90%91%E6%BB%9A%E5%8A%A8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E6%A8%AA%E5%90%91%E6%BB%9A%E5%8A%A8"},"#"),o(" 横向滚动")],-1)),l("div",f,[a(i,{onOnScrollUpperleft:t.onScrollTop,onOnScrollLowerright:t.onScrollBottom,onOnScroll:t.onScroll,width:"600px",mode:"horizontal",disabled:"",style:{"white-space":"nowrap"}},{default:n(()=>[(e(!0),c(F,null,B(y.num,r=>(e(),h(d,{title:"我是标题",describe:"我是菜单描述",key:r,style:{width:"100px",display:"inline-block"}}))),128))]),_:1},8,["onOnScrollUpperleft","onOnScrollLowerright","onOnScroll"])]),a(m,null,{desc:n(()=>[...s[4]||(s[4]=[])]),highlight:n(()=>[...s[5]||(s[5]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-scroll"),l("span",{style:{color:"#B392F0"}}," @on-scroll-upperleft"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onScrollTop"'),l("span",{style:{color:"#B392F0"}}," @on-scroll-lowerright"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onScrollBottom"'),l("span",{style:{color:"#B392F0"}}," @on-scroll"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onScroll"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"600px"'),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'horizontal'"),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#B392F0"}},"  style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"white-space: nowrap;"'),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-cell"),l("span",{style:{color:"#B392F0"}}," title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"我是标题"'),l("span",{style:{color:"#B392F0"}},"  describe"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"我是菜单描述"'),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item in num"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 100px;display:inline-block"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cell"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-scroll"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onScrollBottom"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".num "),l("span",{style:{color:"#F97583"}},"+="),l("span",{style:{color:"#79B8FF"}}," 10")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onScrollTop"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(data)")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onScroll"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(data)")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            num: "),l("span",{style:{color:"#79B8FF"}},"10"),l("span",{style:{color:"#E1E4E8"}},",")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...s[6]||(s[6]=[])]),default:n(()=>[s[7]||(s[7]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-scroll @on-scroll-upperleft="onScrollTop" @on-scroll-lowerright="onScrollBottom" @on-scroll="onScroll" width="600px" mode='horizontal' disabled  style="white-space: nowrap;">
            <zmz-cell title="我是标题"  describe="我是菜单描述" v-for="item in num" :key="item" style="width: 100px;display:inline-block"></zmz-cell>
        </zmz-scroll>
    </div>
</template>
<script>
export default {
    methods: {
        onScrollBottom(data){
            this.num += 10
        },
        onScrollTop(data){
            console.log(data)
        },
        onScroll(data){
            console.log(data)
        }
    },
    data () {
        return {
            num: 10,
        }
    }
}
<\/script>
`)],-1))]),_:1}),s[13]||(s[13]=u('<h2 id="scroll-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#scroll-%E5%B1%9E%E6%80%A7">#</a> Scroll 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>mode</td><td>滚动方向</td><td>String</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>height</td><td>滚动为y轴方向需要设置</td><td>String</td><td>—</td><td>200px</td></tr><tr><td>width</td><td>滚动为x轴方向需要设置</td><td>String</td><td>—</td><td>100%</td></tr></tbody></table></div><h2 id="scroll-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#scroll-%E6%96%B9%E6%B3%95">#</a> Scroll 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-scroll-upperleft</td><td>y模式滚动顶部，x模式滚动左部</td><td>function(滚动值, e)</td></tr><tr><td>on-scroll-lowerright</td><td>y模式滚动底部，x模式滚动右部</td><td>function(滚动值, e)</td></tr><tr><td>on-scroll</td><td>滚动过程</td><td>function(滚动值, e)</td></tr></tbody></table></div><h2 id="scroll-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#scroll-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Scroll 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-scroll-width</td><td>–zmz-scroll-width</td><td>100%</td><td>宽度</td></tr><tr><td>@zmz-scroll-height</td><td>–zmz-scroll-height</td><td>200px</td><td>高度</td></tr></tbody></table></div>',6))])}const C=z(S,[["render",A]]);export{C as default};
