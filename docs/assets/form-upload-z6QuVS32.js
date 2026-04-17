import{_ as h,c as d,a as l,b as s,e as a,w as o,d as F,r as i,o as y,t as f}from"./index-Bfn7SEZ2.js";const B={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Upload 上传"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),fileList:[{name:"1.jpeg",url:"https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png"},{name:"2.jpeg",url:"https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png"}],model:[],multiple:!1,type:"file",inside:!0,imgurl:""}},methods:{currentConfig(n){return this.$setting.currentConfig[n]},callback(n){console.log(n)},onSuccess(n){console.log("上传成功",n)},onChange(n){console.log("发生改变文件",n)},onFile(n){console.log("选中文件",n)},changeType(n){n==0?this.type="file":n==1?this.type="base64":n==2&&(this.type="blob")},onRemove(n,t,c){console.log("删除文件",n,t,c)},beforeRemove(){return new Promise(n=>{this.$messageBox.alert("删除提示","确定删除当前",{yesBtnText:"确定"}).then(t=>{this.$message.success(`action: ${t}`),n(!0)})})},onPreview(n,t,c){console.log("预览文件",n,t,c)},upload(){console.log(this.model)}}},z={class:"zmz-markdown-article"},g={class:"demo-block"},v={class:"demo-block"},w={class:"demo-block"},b={style:{width:"100px",height:"100px",border:"1px solid #f1f1f1","text-align":"center","line-height":"100px"}},C=["src"],x={key:1,class:"zmz-icon--add",style:{"font-size":"22px"}},k={class:"demo-block"},D={class:"demo-block"},A={class:"demo-upload"},L={class:"demo-upload"};function j(n,t,c,P,e,m){const p=i("zmz-upload"),r=i("demo-block"),u=i("zmz-button");return y(),d("div",z,[t[27]||(t[27]=l("h1",{id:"upload-%E4%B8%8A%E4%BC%A0",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#upload-%E4%B8%8A%E4%BC%A0"},"#"),s(" Upload 上传")],-1)),t[28]||(t[28]=l("hr",null,null,-1)),t[29]||(t[29]=l("h2",{id:"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"},"#"),s(" 基本用法")],-1)),l("div",g,[a(p,{limit:3,"show-file-list":"",onOnPreview:m.onPreview,action:"http://localhost:3000/api/hunqing/uploads",type:"file",modelValue:e.fileList,"onUpdate:modelValue":t[0]||(t[0]=E=>e.fileList=E)},null,8,["onOnPreview","modelValue"])]),a(r,null,{desc:o(()=>[...t[7]||(t[7]=[])]),highlight:o(()=>[...t[8]||(t[8]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#B392F0"}}," :limit"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#B392F0"}}," show-file-list"),l("span",{style:{color:"#B392F0"}}," @on-preview"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onPreview"'),l("span",{style:{color:"#B392F0"}}," action"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"http://localhost:3000/api/hunqing/uploads"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"file"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"fileList"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            fileList: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {name: "),l("span",{style:{color:"#9ECBFF"}},"'1.jpeg'"),l("span",{style:{color:"#E1E4E8"}},", url: "),l("span",{style:{color:"#9ECBFF"}},"'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'"),l("span",{style:{color:"#E1E4E8"}},"}, ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {name: "),l("span",{style:{color:"#9ECBFF"}},"'2.jpeg'"),l("span",{style:{color:"#E1E4E8"}},", url: "),l("span",{style:{color:"#9ECBFF"}},"'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'"),l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onPreview"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(data)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[9]||(t[9]=[])]),default:o(()=>[t[10]||(t[10]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-upload :limit="3" show-file-list @on-preview="onPreview" action="http://localhost:3000/api/hunqing/uploads" type="file" v-model="fileList"></zmz-upload>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList: [
                {name: '1.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}, 
                {name: '2.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}
            ]
        }
    },
    methods: {
        onPreview(data) {
            console.log(data)
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[30]||(t[30]=l("h2",{id:"%E5%9B%BE%E7%89%87%E7%BC%A9%E7%95%A5%E5%9B%BE",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9B%BE%E7%89%87%E7%BC%A9%E7%95%A5%E5%9B%BE"},"#"),s(" 图片缩略图")],-1)),l("div",v,[a(p,{onOnPreview:m.onPreview,"file-list-type":"picture","show-file-list":"",action:"http://localhost:3000/api/hunqing/uploads",type:"file",modelValue:e.fileList,"onUpdate:modelValue":t[1]||(t[1]=E=>e.fileList=E)},null,8,["onOnPreview","modelValue"])]),a(r,null,{desc:o(()=>[...t[11]||(t[11]=[])]),highlight:o(()=>[...t[12]||(t[12]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#B392F0"}}," @on-preview"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onPreview"'),l("span",{style:{color:"#B392F0"}}," file-list-type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"picture"'),l("span",{style:{color:"#B392F0"}}," show-file-list"),l("span",{style:{color:"#B392F0"}}," action"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"http://localhost:3000/api/hunqing/uploads"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"file"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"fileList"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            fileList: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {name: "),l("span",{style:{color:"#9ECBFF"}},"'1.jpeg'"),l("span",{style:{color:"#E1E4E8"}},", url: "),l("span",{style:{color:"#9ECBFF"}},"'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'"),l("span",{style:{color:"#E1E4E8"}},"}, ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {name: "),l("span",{style:{color:"#9ECBFF"}},"'2.jpeg'"),l("span",{style:{color:"#E1E4E8"}},", url: "),l("span",{style:{color:"#9ECBFF"}},"'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'"),l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onPreview"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"(data)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[13]||(t[13]=[])]),default:o(()=>[t[14]||(t[14]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <zmz-upload @on-preview="onPreview" file-list-type="picture" show-file-list action="http://localhost:3000/api/hunqing/uploads" type="file" v-model="fileList"></zmz-upload>
</template>
<script>
export default {
    data() {
        return {
            fileList: [
                {name: '1.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}, 
                {name: '2.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}
            ],
        }
    },
    methods: {
        onPreview(data) {
            console.log(data)
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[31]||(t[31]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E7%89%87%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E7%89%87%E7%94%A8%E6%B3%95"},"#"),s(" 自定义图片用法")],-1)),l("div",w,[a(p,{type:"file",modelValue:e.model,"onUpdate:modelValue":t[2]||(t[2]=E=>e.model=E),limit:1},{default:o(()=>[l("div",b,[e.model&&e.model.length?(y(),d("img",{key:0,src:e.model[0].url},null,8,C)):(y(),d("i",x))])]),_:1},8,["modelValue"])]),a(r,null,{desc:o(()=>[...t[15]||(t[15]=[])]),highlight:o(()=>[...t[16]||(t[16]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"file"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model"'),l("span",{style:{color:"#B392F0"}}," :limit"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:100px;height:100px;border: 1px solid #f1f1f1;text-align:center;line-height:100px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"img"),l("span",{style:{color:"#B392F0"}}," v-if"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model && model.length"'),l("span",{style:{color:"#B392F0"}}," :src"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model[0].url"'),l("span",{style:{color:"#E1E4E8"}},"/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-icon--add"'),l("span",{style:{color:"#B392F0"}}," v-else"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"font-size: 22px;"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"i"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            model: []")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[17]||(t[17]=[])]),default:o(()=>[t[18]||(t[18]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-upload type="file" v-model="model" :limit="1">
            <div style="width:100px;height:100px;border: 1px solid #f1f1f1;text-align:center;line-height:100px;">
                <img v-if="model && model.length" :src="model[0].url"/>
                <i class="zmz-icon--add" v-else style="font-size: 22px;"></i>
            </div>
        </zmz-upload>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model: []
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[32]||(t[32]=l("h2",{id:"%E7%85%A7%E7%89%87%E5%A2%99",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%85%A7%E7%89%87%E5%A2%99"},"#"),s(" 照片墙")],-1)),l("div",k,[a(p,{"file-list-type":"picture-card",modelValue:e.fileList,"onUpdate:modelValue":t[3]||(t[3]=E=>e.fileList=E)},null,8,["modelValue"])]),a(r,null,{desc:o(()=>[...t[19]||(t[19]=[])]),highlight:o(()=>[...t[20]||(t[20]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#B392F0"}}," file-list-type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"picture-card"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"fileList"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            fileList: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {name: "),l("span",{style:{color:"#9ECBFF"}},"'1.jpeg'"),l("span",{style:{color:"#E1E4E8"}},", url: "),l("span",{style:{color:"#9ECBFF"}},"'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'"),l("span",{style:{color:"#E1E4E8"}},"}, ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {name: "),l("span",{style:{color:"#9ECBFF"}},"'2.jpeg'"),l("span",{style:{color:"#E1E4E8"}},", url: "),l("span",{style:{color:"#9ECBFF"}},"'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'"),l("span",{style:{color:"#E1E4E8"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[21]||(t[21]=[])]),default:o(()=>[t[22]||(t[22]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-upload file-list-type="picture-card" v-model="fileList"></zmz-upload>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList: [
                {name: '1.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}, 
                {name: '2.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'},
            ],
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[33]||(t[33]=l("h2",{id:"%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0"},"#"),s(" 多文件上传")],-1)),t[34]||(t[34]=l("p",null,[s("添加属性 "),l("code",null,"multiple")],-1)),l("div",D,[l("div",A,[a(u,{style:{"margin-right":"20px"},onClick:t[4]||(t[4]=E=>e.multiple=!e.multiple)},{default:o(()=>[s("切换"+f(e.multiple?"单选":"多选"),1)]),_:1}),a(u,{style:{"margin-right":"20px"},onClick:t[5]||(t[5]=E=>e.inside=!e.inside)},{default:o(()=>[s("切换"+f(e.inside?"外置":"内置"),1)]),_:1})]),l("div",L,[a(p,{"show-file-list":"",multiple:!e.multiple,"inside-request":e.inside,action:"http://localhost:3000/api/hunqing/uploads",type:e.type,modelValue:e.fileList,"onUpdate:modelValue":t[6]||(t[6]=E=>e.fileList=E)},null,8,["multiple","inside-request","type","modelValue"])])]),a(r,null,{desc:o(()=>[...t[23]||(t[23]=[])]),highlight:o(()=>[...t[24]||(t[24]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-upload"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-right: 20px;"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"multiple = !multiple"'),l("span",{style:{color:"#E1E4E8"}},">切换{{ multiple? '单选': '多选'}}</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-right: 20px;"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"inside = !inside"'),l("span",{style:{color:"#E1E4E8"}},">切换{{ inside? '外置': '内置'}}</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-upload"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#B392F0"}}," show-file-list"),l("span",{style:{color:"#B392F0"}}," :multiple"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"multiple"'),l("span",{style:{color:"#B392F0"}}," :inside-request"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"inside"'),l("span",{style:{color:"#B392F0"}}," action"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"http://localhost:3000/api/hunqing/uploads"'),l("span",{style:{color:"#B392F0"}}," :type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"type"'),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"fileList"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            fileList: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {name: "),l("span",{style:{color:"#9ECBFF"}},"'1.jpeg'"),l("span",{style:{color:"#E1E4E8"}},", url: "),l("span",{style:{color:"#9ECBFF"}},"'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'"),l("span",{style:{color:"#E1E4E8"}},"}, ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {name: "),l("span",{style:{color:"#9ECBFF"}},"'2.jpeg'"),l("span",{style:{color:"#E1E4E8"}},", url: "),l("span",{style:{color:"#9ECBFF"}},"'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'"),l("span",{style:{color:"#E1E4E8"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            multiple: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            type: "),l("span",{style:{color:"#9ECBFF"}},"'file'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            inside: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...t[25]||(t[25]=[])]),default:o(()=>[t[26]||(t[26]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div class="demo-upload">
            <zmz-button style="margin-right: 20px;" @click="multiple = !multiple">切换{{ multiple? '单选': '多选'}}</zmz-button>
            <zmz-button style="margin-right: 20px;" @click="inside = !inside">切换{{ inside? '外置': '内置'}}</zmz-button>
        </div>
        <div class="demo-upload">
            <zmz-upload show-file-list :multiple="multiple" :inside-request="inside" action="http://localhost:3000/api/hunqing/uploads" :type="type" v-model="fileList"></zmz-upload>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList: [
                {name: '1.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'}, 
                {name: '2.jpeg', url: 'https://www.zhuimengzhu.com/doc/cover/20220208/56865cd50589f7acc731d663cd80c0bf.png'},
            ],
            multiple: false,
            type: 'file',
            inside: false,
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[35]||(t[35]=F('<h2 id="upload-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#upload-%E5%B1%9E%E6%80%A7">#</a> Upload 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>文件数组</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>method</td><td>请求方式</td><td>POST</td><td>—</td><td>POST</td></tr><tr><td>action</td><td>请求地址</td><td>—</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>是否多选</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>file-list-type</td><td>列表类型</td><td>String</td><td>text/picture/picture-card</td><td>text</td></tr><tr><td>accept</td><td>允许上传类型</td><td>String</td><td>—</td><td>—</td></tr><tr><td>limit</td><td>最大上传个数</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>inside-request</td><td>内置请求（外置触发on-file）</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>headers</td><td>请求头部</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>data</td><td>请求参数</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>name</td><td>属性名</td><td>String</td><td>—</td><td>file</td></tr><tr><td>with-credentials</td><td>是否发送cookie</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>show-file-list</td><td>显示上传列表</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>tip</td><td>是否显示上传提示</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>tip-text</td><td>上传提示</td><td>String</td><td>—</td><td>只能上传jpg/png文件，且不超过500kb</td></tr><tr><td>before-upload</td><td>上传前钩子，Promise resolve(true)上传 resolve(false)不上传</td><td>Function</td><td>—</td><td>function(response, file, fileList)</td></tr><tr><td>before-remove</td><td>移除前钩子，Promise resolve(true)删除 resolve(false)不删除</td><td>Function</td><td>—</td><td>function(index, file, fileList)</td></tr><tr><td>http-request</td><td>覆盖默认的上传行为，可以自定义上传的实现</td><td>Function</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="upload-%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#upload-%E4%BA%8B%E4%BB%B6">#</a> Upload 事件</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-success</td><td>文件上传成功回调</td><td>function(response, file, fileList)</td></tr><tr><td>on-remove</td><td>删除列表文件回调</td><td>function(index， file， fileList)</td></tr><tr><td>on-preview</td><td>点击列表预览回调</td><td>function(index， file， fileList)</td></tr><tr><td>on-file</td><td>文件对象回调(外置请求)</td><td>function(file)</td></tr><tr><td>on-change</td><td>上传发生改变回调</td><td>function(file， fileList)</td></tr><tr><td>on-error</td><td>上传失败回调</td><td>function(error, file, fileList)</td></tr><tr><td>on-exceed</td><td>文件超出限制回调</td><td>function(file, fileList)</td></tr><tr><td>on-progress</td><td>上传进度回调</td><td>function(event, file, fileList)</td></tr></tbody></table></div><h2 id="upload-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#upload-%E6%8F%92%E6%A7%BD">#</a> Upload 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>default</td><td>默认上传按钮插槽</td><td>—</td></tr></tbody></table></div><h2 id="upload-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#upload-%E6%96%B9%E6%B3%95">#</a> Upload 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>submit</td><td>手动上传</td><td>—</td></tr></tbody></table></div><h2 id="upload-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#upload-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Upload 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-upload-border-radius</td><td>–zmz-upload-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-upload-border-color</td><td>–zmz-upload-border-color</td><td>#e3e6ef</td><td>默认边线颜色</td></tr><tr><td>@zmz-upload-tip-font-size</td><td>–zmz-upload-tip-font-size</td><td>12px</td><td>提示字体大小</td></tr><tr><td>@zmz-upload-tip-color</td><td>–zmz-upload-tip-color</td><td>默认主题颜色</td><td>提示字体颜色</td></tr></tbody></table></div>',10))])}const q=h(B,[["render",j]]);export{q as default};
