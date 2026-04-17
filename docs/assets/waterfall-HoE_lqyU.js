import{_ as m,c as g,a as t,b as s,e as E,w as e,d as F,r as p,o as u,t as b}from"./index-Bfn7SEZ2.js";const z="/zmz-vue3-web/assets/0-D_XGZQ5_.jpg",h="/zmz-vue3-web/assets/1-UsGU3XYD.jpg",B="/zmz-vue3-web/assets/10-DWsA3BRr.jpg",_="/zmz-vue3-web/assets/11-CDBpLCaX.jpg",f="/zmz-vue3-web/assets/12-B2A4aZok.jpg",w="/zmz-vue3-web/assets/13-BvhgB8Pn.jpg",v="/zmz-vue3-web/assets/14-BSELsbzS.jpg",j="/zmz-vue3-web/assets/15-DGAKM9lE.jpg",N="/zmz-vue3-web/assets/16-DHblnsnZ.jpg",k="/zmz-vue3-web/assets/17-9-ETMmTS.jpg",C="/zmz-vue3-web/assets/2-BuXqFdfi.jpg",D="/zmz-vue3-web/assets/3-x8wL9fss.jpg",x="/zmz-vue3-web/assets/4-DvEB0N5t.jpg",A="/zmz-vue3-web/assets/404-BPeSWx7S.jpg",M="/zmz-vue3-web/assets/5-CS1RHVCE.jpg",S="/zmz-vue3-web/assets/6-CdRxIo9l.jpg",W="/zmz-vue3-web/assets/7-DAQQCQMs.jpg",L="/zmz-vue3-web/assets/8-DFbHCxkE.jpg",X="/zmz-vue3-web/assets/9-BnXmKuWX.jpg",$={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Waterfall 瀑布流"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),data:[],pageNumber:1,sizeNumber:18,totalNumber:0}},mounted(){this.fetchData()},computed:{more(){return this.pageNumber*this.sizeNumber<this.totalNumber}},methods:{loadMore(){this.more&&(this.pageNumber+=1,this.fetchData())},async fetchData(){const a=(this.pageNumber-1)*this.sizeNumber,l=[...Array(this.sizeNumber).keys()].map(o=>{console.log(o);let n=new URL(Object.assign({"../../../assets/images/0.jpg":z,"../../../assets/images/1.jpg":h,"../../../assets/images/10.jpg":B,"../../../assets/images/11.jpg":_,"../../../assets/images/12.jpg":f,"../../../assets/images/13.jpg":w,"../../../assets/images/14.jpg":v,"../../../assets/images/15.jpg":j,"../../../assets/images/16.jpg":N,"../../../assets/images/17.jpg":k,"../../../assets/images/2.jpg":C,"../../../assets/images/3.jpg":D,"../../../assets/images/4.jpg":x,"../../../assets/images/404.jpg":A,"../../../assets/images/5.jpg":M,"../../../assets/images/6.jpg":S,"../../../assets/images/7.jpg":W,"../../../assets/images/8.jpg":L,"../../../assets/images/9.jpg":X})[`../../../assets/images/${o}.jpg`],import.meta.url).href;return console.log(n),{key:o+1+a,src:n}});this.totalNumber=500,this.data=[...this.data,...l]},currentConfig(a){return this.$setting.currentConfig[a]}}},I={class:"zmz-markdown-article"},O={class:"demo-alert demo-block"},V={class:"zmz-waterfall-demoItem"},Q=["src"];function R(a,l,o,n,c,d){const i=p("zmz-waterfall"),y=p("demo-block");return u(),g("div",I,[l[4]||(l[4]=t("h1",{id:"waterfall-%E7%80%91%E5%B8%83%E6%B5%81",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#waterfall-%E7%80%91%E5%B8%83%E6%B5%81"},"#"),s(" Waterfall 瀑布流")],-1)),l[5]||(l[5]=t("hr",null,null,-1)),l[6]||(l[6]=t("p",null,"用于数据不规则垂直排列。",-1)),l[7]||(l[7]=t("h2",{id:"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"},"#"),s(" 基本用法")],-1)),t("div",O,[E(i,{loading:"",gutter:10,width:"250px",data:c.data,delay:!0,button:"","button-type":"success","button-text":"加载",onOnLoadmore:d.loadMore},{default:e(r=>[t("div",V,[t("img",{class:"img",src:r.src},null,8,Q),t("p",null,b(r.key),1)])]),_:1},8,["data","onOnLoadmore"])]),E(y,null,{desc:e(()=>[...l[0]||(l[0]=[])]),highlight:e(()=>[...l[1]||(l[1]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-waterfall"),t("span",{style:{color:"#B392F0"}}," loading"),t("span",{style:{color:"#B392F0"}}," :gutter"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"10"'),t("span",{style:{color:"#B392F0"}}," width"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"250px"'),t("span",{style:{color:"#B392F0"}}," :data"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"data"'),t("span",{style:{color:"#B392F0"}}," :delay"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"true"'),t("span",{style:{color:"#B392F0"}}," button"),t("span",{style:{color:"#B392F0"}}," button-type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"success"'),t("span",{style:{color:"#B392F0"}}," button-text"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"加载"'),t("span",{style:{color:"#B392F0"}}," @on-loadmore"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"loadMore"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}}," #"),t("span",{style:{color:"#B392F0"}},"default"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"'),t("span",{style:{color:"#E1E4E8"}},"item"),t("span",{style:{color:"#9ECBFF"}},'"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"zmz-waterfall-demoItem"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"              <"),t("span",{style:{color:"#85E89D"}},"img"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"img"'),t("span",{style:{color:"#B392F0"}}," :src"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"item.src"'),t("span",{style:{color:"#E1E4E8"}},"/>")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"              <"),t("span",{style:{color:"#85E89D"}},"p"),t("span",{style:{color:"#E1E4E8"}},">{{ item.key }}</"),t("span",{style:{color:"#85E89D"}},"p"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        </"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"zmz-waterfall"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        return"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            data: [],")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            payload: {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                page: "),t("span",{style:{color:"#79B8FF"}},"1"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                size: "),t("span",{style:{color:"#79B8FF"}},"18"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            pageNumber: "),t("span",{style:{color:"#79B8FF"}},"1"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            sizeNumber: "),t("span",{style:{color:"#79B8FF"}},"18"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            totalNumber: "),t("span",{style:{color:"#79B8FF"}},"0"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    mounted"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"        this"),t("span",{style:{color:"#E1E4E8"}},"."),t("span",{style:{color:"#B392F0"}},"fetchData"),t("span",{style:{color:"#E1E4E8"}},"();")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    computed: {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        hasMore"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"           return"),t("span",{style:{color:"#79B8FF"}}," this"),t("span",{style:{color:"#E1E4E8"}},".pageNumber "),t("span",{style:{color:"#F97583"}},"*"),t("span",{style:{color:"#79B8FF"}}," this"),t("span",{style:{color:"#E1E4E8"}},".sizeNumber "),t("span",{style:{color:"#F97583"}},"<"),t("span",{style:{color:"#79B8FF"}}," this"),t("span",{style:{color:"#E1E4E8"}},".totalNumber;")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        loadMore"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"            if"),t("span",{style:{color:"#E1E4E8"}}," ("),t("span",{style:{color:"#79B8FF"}},"this"),t("span",{style:{color:"#E1E4E8"}},".hasMore) {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                this"),t("span",{style:{color:"#E1E4E8"}},".payload.page "),t("span",{style:{color:"#F97583"}},"+="),t("span",{style:{color:"#79B8FF"}}," 1"),t("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                this"),t("span",{style:{color:"#E1E4E8"}},"."),t("span",{style:{color:"#B392F0"}},"fetchData"),t("span",{style:{color:"#E1E4E8"}},"();")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        async"),t("span",{style:{color:"#B392F0"}}," fetchData"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"            const"),t("span",{style:{color:"#79B8FF"}}," prev"),t("span",{style:{color:"#F97583"}}," ="),t("span",{style:{color:"#E1E4E8"}}," ("),t("span",{style:{color:"#79B8FF"}},"this"),t("span",{style:{color:"#E1E4E8"}},".pageNumber "),t("span",{style:{color:"#F97583"}},"-"),t("span",{style:{color:"#79B8FF"}}," 1"),t("span",{style:{color:"#E1E4E8"}},") "),t("span",{style:{color:"#F97583"}},"*"),t("span",{style:{color:"#79B8FF"}}," this"),t("span",{style:{color:"#E1E4E8"}},".sizeNumber;")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"            const"),t("span",{style:{color:"#79B8FF"}}," images"),t("span",{style:{color:"#F97583"}}," ="),t("span",{style:{color:"#E1E4E8"}}," ["),t("span",{style:{color:"#F97583"}},"..."),t("span",{style:{color:"#B392F0"}},"Array"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#79B8FF"}},"this"),t("span",{style:{color:"#E1E4E8"}},".sizeNumber)."),t("span",{style:{color:"#B392F0"}},"keys"),t("span",{style:{color:"#E1E4E8"}},"()]."),t("span",{style:{color:"#B392F0"}},"map"),t("span",{style:{color:"#E1E4E8"}},"(("),t("span",{style:{color:"#FFAB70"}},"key"),t("span",{style:{color:"#E1E4E8"}},") "),t("span",{style:{color:"#F97583"}},"=>"),t("span",{style:{color:"#E1E4E8"}}," ({")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                key: key "),t("span",{style:{color:"#F97583"}},"+"),t("span",{style:{color:"#79B8FF"}}," 1"),t("span",{style:{color:"#F97583"}}," +"),t("span",{style:{color:"#E1E4E8"}}," prev,")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"                src: "),t("span",{style:{color:"#B392F0"}},"require"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"`./images/${"),t("span",{style:{color:"#E1E4E8"}},"key"),t("span",{style:{color:"#9ECBFF"}},"}.jpg`"),t("span",{style:{color:"#E1E4E8"}},"),")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            }));")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".totalNumber "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#79B8FF"}}," 500"),t("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".data "),t("span",{style:{color:"#F97583"}},"="),t("span",{style:{color:"#E1E4E8"}}," ["),t("span",{style:{color:"#F97583"}},"..."),t("span",{style:{color:"#79B8FF"}},"this"),t("span",{style:{color:"#E1E4E8"}},".data, "),t("span",{style:{color:"#F97583"}},"..."),t("span",{style:{color:"#E1E4E8"}},"images];")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:e(()=>[...l[2]||(l[2]=[])]),default:e(()=>[l[3]||(l[3]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <zmz-waterfall loading :gutter="10" width="250px" :data="data" :delay="true" button button-type="success" button-text="加载" @on-loadmore="loadMore">
        <template #default="item">
            <div class="zmz-waterfall-demoItem">
              <img class="img" :src="item.src"/>
              <p>{{ item.key }}</p>
            </div>
        </template>
    </zmz-waterfall>
</template>
<script>
export default {
    data() {
        return {
            data: [],
            payload: {
                page: 1,
                size: 18,
            },
            pageNumber: 1,
            sizeNumber: 18,
            totalNumber: 0,
        };
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        hasMore() {
           return this.pageNumber * this.sizeNumber < this.totalNumber;
        }
    },
    methods: {
        loadMore() {
            if (this.hasMore) {
                this.payload.page += 1;
                this.fetchData();
            }
        },
        async fetchData() {
            const prev = (this.pageNumber - 1) * this.sizeNumber;
            const images = [...Array(this.sizeNumber).keys()].map((key) => ({
                key: key + 1 + prev,
                src: require(\`./images/\${key}.jpg\`),
            }));
            this.totalNumber = 500;
            this.data = [...this.data, ...images];
        }
    }
};
<\/script>
`)],-1))]),_:1}),l[8]||(l[8]=F('<h2 id="waterfall-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#waterfall-%E5%B1%9E%E6%80%A7">#</a> Waterfall 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>数据</td><td>Array</td><td>—</td><td>[]</td></tr><tr><td>gutter</td><td>间隔</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>delay</td><td>是否延迟加载</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>loading</td><td>是否显示loading</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>button</td><td>是否显示加载按钮</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>button-type</td><td>按钮主题</td><td>String</td><td>—</td><td>参考button组件</td></tr><tr><td>button-text</td><td>按钮文字</td><td>String</td><td>—</td><td>加载更多</td></tr><tr><td>button-style</td><td>按钮盒子样式</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>是否显示loading</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>loading-text</td><td>加载文字</td><td>String</td><td>—</td><td>加载中…</td></tr><tr><td>loading-style</td><td>加载盒子样式</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>loading-icon</td><td>加载icon</td><td>String</td><td>—</td><td>zmz-icon–loading</td></tr><tr><td>width</td><td>每个子集的默认宽度</td><td>String/Number</td><td>—</td><td>200</td></tr></tbody></table></div><h2 id="waterfall-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#waterfall-%E6%96%B9%E6%B3%95">#</a> Waterfall 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-ready</td><td>准备就绪回调</td><td>—</td></tr><tr><td>on-loadmore</td><td>加载按钮事件</td><td>—</td></tr></tbody></table></div><h2 id="waterfall-slot%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#waterfall-slot%E6%8F%92%E6%A7%BD">#</a> Waterfall slot插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>—</td><td>默认插槽</td><td>#default=“item”</td></tr></tbody></table></div><h2 id="waterfall-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#waterfall-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Waterfall 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-waterfall-button-padding</td><td>–zmz-waterfall-button-padding</td><td>20px 0</td><td>按钮内边距</td></tr><tr><td>@zmz-waterfall-loading-padding</td><td>–zmz-waterfall-loading-padding</td><td>20px 0</td><td>加载内边距</td></tr><tr><td>@zmz-waterfall-loading-color</td><td>–zmz-waterfall-loading-color</td><td>#999</td><td>加载颜色</td></tr><tr><td>@zmz-waterfall-loading-font-size</td><td>–zmz-waterfall-loading-font-size</td><td>12px</td><td>加载字体大小</td></tr><tr><td>@zmz-waterfall-loading-icon-size</td><td>–zmz-waterfall-loading-icon-size</td><td>12px</td><td>加载图标大小</td></tr><tr><td>@zmz-waterfall-loading-text-margin-left</td><td>–zmz-waterfall-loading-text-margin-left</td><td>10px</td><td>加载字体左边距</td></tr></tbody></table></div>',8))])}const G=m($,[["render",R]]);export{G as default};
