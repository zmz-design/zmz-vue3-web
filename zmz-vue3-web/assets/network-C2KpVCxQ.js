import{_ as i,c as d,a as s,b as n,e,w as o,t as y,d as m,r as a,o as h}from"./index-DDFEzhq1.js";const k={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Network 网络"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),network:""}},watch:{},mounted(){window.addEventListener("online",()=>{this.onChange()}),this.$network().then(l=>{console.log(l)})},methods:{currentConfig(l){return this.$setting.currentConfig[l]},onChange(){this.$network().then(l=>{this.network=l})}}},w={class:"zmz-markdown-article"},u={class:"demo-block"},F={class:"zmz-mb-20"};function B(l,t,z,b,r,E){const c=a("zmz-button"),p=a("demo-block");return h(),d("div",w,[t[5]||(t[5]=s("h1",{id:"network-%E7%BD%91%E7%BB%9C",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#network-%E7%BD%91%E7%BB%9C"},"#"),n(" Network 网络")],-1)),t[6]||(t[6]=s("hr",null,null,-1)),t[7]||(t[7]=s("p",null,"监听网络变化",-1)),t[8]||(t[8]=s("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),n(" 基础用法")],-1)),t[9]||(t[9]=s("p",null,"组件当中提供了检测js，目前还没有办法实现在全局监听返回一个状态，暴露一个方法通过监听去调用返回参数",-1)),s("div",u,[s("div",F,[e(c,{onClick:E.onChange},{default:o(()=>[...t[0]||(t[0]=[n("网络",-1)])]),_:1},8,["onClick"])]),n(" "+y(r.network),1)]),e(p,null,{desc:o(()=>[...t[1]||(t[1]=[])]),highlight:o(()=>[...t[2]||(t[2]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmz-mb-20"'),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"onChange"'),s("span",{style:{color:"#E1E4E8"}},">网络</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {{network}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            network: {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    mounted"),s("span",{style:{color:"#E1E4E8"}},"() {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        window."),s("span",{style:{color:"#B392F0"}},"addEventListener"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'online'"),s("span",{style:{color:"#E1E4E8"}},", () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"onChange"),s("span",{style:{color:"#E1E4E8"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        })")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        onChange"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"data"),s("span",{style:{color:"#E1E4E8"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"$network"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"then"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"res"),s("span",{style:{color:"#F97583"}}," =>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"               this"),s("span",{style:{color:"#E1E4E8"}},".network "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," res")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })  ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...t[3]||(t[3]=[])]),default:o(()=>[t[4]||(t[4]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div class="zmz-mb-20">
            <zmz-button @click="onChange">网络</zmz-button>
        </div>
        {{network}}
    </div>
</template>
<script>
export default {
    data () {
        return {
            network: {}
        }
    },
    mounted() {
        window.addEventListener('online', () => {
            this.onChange()
        })
    },
    methods: {
        onChange(data) {
            this.$network().then(res => {
               this.network = res
            })  
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[10]||(t[10]=m('<h2 id="network.res-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#network.res-%E5%B1%9E%E6%80%A7">#</a> Network.res 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>effectiveType</td><td>有效网络连接类型</td><td>String</td><td>—</td><td>—</td></tr><tr><td>downlink</td><td>估算的下行速度/带宽</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>rtt</td><td>估算的往返时间</td><td>String</td><td>—</td><td>—</td></tr><tr><td>saveData</td><td>打开/请求数据保护模式</td><td>Boolean</td><td>—</td><td>—</td></tr></tbody></table></div>',2))])}const C=i(k,[["render",B]]);export{C as default};
