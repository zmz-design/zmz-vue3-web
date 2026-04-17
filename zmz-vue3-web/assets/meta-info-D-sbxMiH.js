import{_ as r,c as E,d as c,e as a,w as o,a as s,b as n,r as p,o as i}from"./index-DDFEzhq1.js";const y={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"MetaInfo优化"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}},methods:{currentConfig(e){return this.$setting.currentConfig[e]}}},d={class:"zmz-markdown-article"};function F(e,l,m,f,u,B){const t=p("demo-block");return i(),E("div",d,[l[8]||(l[8]=c('<h1 id="metainfo" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#metainfo">#</a> MetaInfo</h1><hr><p>你可以直接在组件内设置 metaInfo 便可以自动挂载到你的页面中。如果你需要随着数据的变化，自动更新你的title、meta等信息，那么用此</p><h2 id="%E5%B8%B8%E8%A7%84%E7%94%A8%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%B8%B8%E8%A7%84%E7%94%A8%E6%B3%95">#</a> 常规用法</h2><div class="demo-block"><p>打开控制台，看看这个页面的 title, meta, 和 link 哦，是不是发生了变化</p></div>',5)),a(t,null,{desc:o(()=>[...l[0]||(l[0]=[])]),highlight:o(()=>[...l[1]||(l[1]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    metaInfo"),s("span",{style:{color:"#E1E4E8"}}," () {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            title: "),s("span",{style:{color:"#9ECBFF"}},"'MetaInfo优化'"),s("span",{style:{color:"#E1E4E8"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            meta: [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                name: "),s("span",{style:{color:"#9ECBFF"}},"'keywords'"),s("span",{style:{color:"#E1E4E8"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#9ECBFF"}},"'MetaInfo优化'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              name: "),s("span",{style:{color:"#9ECBFF"}},"'description'"),s("span",{style:{color:"#E1E4E8"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              content: "),s("span",{style:{color:"#9ECBFF"}},"'MetaInfo优化'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            }]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...l[2]||(l[2]=[])]),default:o(()=>[l[3]||(l[3]=s("pre",null,[s("code",{class:"language-js"},`<script>
export default {
    metaInfo () {
        return {
            title: 'MetaInfo优化',
            meta: [
            {
                name: 'keywords',
                content: 'MetaInfo优化'
            },
            {
              name: 'description',
              content: 'MetaInfo优化'
            }]
        }
    }
}
<\/script>
`)],-1))]),_:1}),l[9]||(l[9]=s("h2",{id:"async-%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#async-%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD"},"#"),n(" async 异步加载")],-1)),l[10]||(l[10]=s("div",{class:"demo-block"},[s("p",null,"如果你的title或者meta或者link是异步加载的，那么你可能需要这样使用")],-1)),a(t,null,{desc:o(()=>[...l[4]||(l[4]=[])]),highlight:o(()=>[...l[5]||(l[5]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    metaInfo"),s("span",{style:{color:"#E1E4E8"}}," () {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            title: "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".title,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            meta: [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                name: "),s("span",{style:{color:"#9ECBFF"}},"'keywords'"),s("span",{style:{color:"#E1E4E8"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                content: "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".keywords")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              name: "),s("span",{style:{color:"#9ECBFF"}},"'description'"),s("span",{style:{color:"#E1E4E8"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              content: "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".description")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            }]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            title: "),s("span",{style:{color:"#9ECBFF"}},"'MetaInfo优化'"),s("span",{style:{color:"#F97583"}}," +"),s("span",{style:{color:"#79B8FF"}}," this"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"currentConfig"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'tails'"),s("span",{style:{color:"#E1E4E8"}},"),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            keywords: "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"currentConfig"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'keywords'"),s("span",{style:{color:"#E1E4E8"}},"),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            description: "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"currentConfig"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'description'"),s("span",{style:{color:"#E1E4E8"}},"),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        currentConfig"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"data"),s("span",{style:{color:"#E1E4E8"}},"){")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"            return"),s("span",{style:{color:"#79B8FF"}}," this"),s("span",{style:{color:"#E1E4E8"}},".$setting.currentConfig[data];")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...l[6]||(l[6]=[])]),default:o(()=>[l[7]||(l[7]=s("pre",null,[s("code",{class:"language-js"},`<script>
export default {
    metaInfo () {
        return {
            title: this.title,
            meta: [
            {
                name: 'keywords',
                content: this.keywords
            },
            {
              name: 'description',
              content: this.description
            }]
        }
    },
    data () {
        return {
            title: 'MetaInfo优化' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        } 
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
<\/script>
`)],-1))]),_:1})])}const C=r(y,[["render",F]]);export{C as default};
