import{_ as i,c as y,a as t,b as s,e as n,w as e,d as m,r as p,o as k}from"./index-Bfn7SEZ2.js";const u={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"describe",content:this.describe}]}},data(){return{title:"Watermark 水印"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),describe:this.currentConfig("describe"),watermark:!1,watermark2:!1,watermark3:!1,table:[{name:"追梦猪1",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"},{name:"追梦猪2",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"},{name:"追梦猪3",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"},{name:"追梦猪4",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"},{name:"追梦猪5",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"},{name:"追梦猪6",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"}],tableHead:[{title:"姓名",field:"name"},{title:"生日",field:"birthday"},{title:"地址",field:"address"},{title:"性别",field:"sex"},{title:"操作",slot:"bin"}]}},methods:{currentConfig(c){return this.$setting.currentConfig[c]}}},z={class:"zmz-markdown-article"},F={class:"demo-block"},w={class:"demo-block"},b={class:"demo-block"};function f(c,l,B,h,o,g){const r=p("zmz-button"),E=p("zmz-watermark"),d=p("demo-block");return k(),y("div",z,[l[22]||(l[22]=t("h1",{id:"watermark-%E6%B0%B4%E5%8D%B0",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#watermark-%E6%B0%B4%E5%8D%B0"},"#"),s(" Watermark 水印")],-1)),l[23]||(l[23]=t("hr",null,null,-1)),l[24]||(l[24]=t("p",null,"展示当前页面归属",-1)),l[25]||(l[25]=t("h2",{id:"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"},"#"),s(" 基本用法")],-1)),t("div",F,[n(r,{onClick:l[0]||(l[0]=a=>o.watermark=!o.watermark)},{default:e(()=>[...l[6]||(l[6]=[s("切换水印",-1)])]),_:1}),n(E,{modelValue:o.watermark,"onUpdate:modelValue":l[1]||(l[1]=a=>o.watermark=a),rotate:20,content:"追梦猪",width:"100",height:"100"},{default:e(()=>[...l[7]||(l[7]=[t("div",{style:{height:"300px"}},null,-1)])]),_:1},8,["modelValue"])]),n(d,null,{desc:e(()=>[...l[8]||(l[8]=[])]),highlight:e(()=>[...l[9]||(l[9]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"watermark = !watermark"'),t("span",{style:{color:"#E1E4E8"}},">切换水印</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-watermark"),t("span",{style:{color:"#B392F0"}}," v-model"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"watermark"'),t("span",{style:{color:"#B392F0"}}," :rotate"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"20"'),t("span",{style:{color:"#B392F0"}}," content"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"追梦猪"'),t("span",{style:{color:"#B392F0"}}," width"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"100"'),t("span",{style:{color:"#B392F0"}}," height"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"100"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," style"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"height: 300px"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        </"),t("span",{style:{color:"#85E89D"}},"zmz-watermark"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        return"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            watermark: "),t("span",{style:{color:"#79B8FF"}},"false"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:e(()=>[...l[10]||(l[10]=[])]),default:e(()=>[l[11]||(l[11]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-button @click="watermark = !watermark">切换水印</zmz-button>
        <zmz-watermark v-model="watermark" :rotate="20" content="追梦猪" width="100" height="100">
            <div style="height: 300px"></div>
        </zmz-watermark>
    </div>
</template>
<script>
export default {
    data() {
        return {
            watermark: false,
        };
    }
};
<\/script>
`)],-1))]),_:1}),l[26]||(l[26]=t("h2",{id:"%E5%85%A8%E5%B1%8F",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E5%85%A8%E5%B1%8F"},"#"),s(" 全屏")],-1)),t("div",w,[n(r,{onClick:l[2]||(l[2]=a=>o.watermark2=!o.watermark2)},{default:e(()=>[...l[12]||(l[12]=[s("切换",-1)])]),_:1}),n(E,{modelValue:o.watermark2,"onUpdate:modelValue":l[3]||(l[3]=a=>o.watermark2=a),fullscreen:"",zindex:999,rotate:45,"content-options":{color:"#f00"},content:["追梦猪","2024-10-10","工号:007"]},null,8,["modelValue"])]),n(d,null,{desc:e(()=>[...l[13]||(l[13]=[])]),highlight:e(()=>[...l[14]||(l[14]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"watermark2 = !watermark2"'),t("span",{style:{color:"#E1E4E8"}},">切换</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-watermark"),t("span",{style:{color:"#B392F0"}}," v-model"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"watermark2"'),t("span",{style:{color:"#B392F0"}}," fullscreen"),t("span",{style:{color:"#B392F0"}}," :zindex"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},"'999'"),t("span",{style:{color:"#B392F0"}}," :rotate"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"45"'),t("span",{style:{color:"#B392F0"}}," :content-options"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"{color: '#f00'}"`),t("span",{style:{color:"#B392F0"}}," :content"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},`"['追梦猪', '2024-10-10', '工号:007']"`),t("span",{style:{color:"#E1E4E8"}}," ></"),t("span",{style:{color:"#85E89D"}},"zmz-watermark"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        return"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            watermark2: "),t("span",{style:{color:"#79B8FF"}},"false")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:e(()=>[...l[15]||(l[15]=[])]),default:e(()=>[l[16]||(l[16]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-button @click="watermark2 = !watermark2">切换</zmz-button>
        <zmz-watermark v-model="watermark2" fullscreen :zindex='999' :rotate="45" :content-options="{color: '#f00'}" :content="['追梦猪', '2024-10-10', '工号:007']" ></zmz-watermark>
    </div>
</template>
<script>
export default {
    data() {
        return {
            watermark2: false
        };
    }
};
<\/script>
`)],-1))]),_:1}),l[27]||(l[27]=t("h2",{id:"%E5%9B%BE%E7%89%87",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9B%BE%E7%89%87"},"#"),s(" 图片")],-1)),l[28]||(l[28]=t("p",null,"使用图片需要让服务器图片可以被访问，取消同域限制",-1)),t("div",b,[n(r,{onClick:l[4]||(l[4]=a=>o.watermark3=!o.watermark3)},{default:e(()=>[...l[17]||(l[17]=[s("切换",-1)])]),_:1}),n(E,{zindex:999,modelValue:o.watermark3,"onUpdate:modelValue":l[5]||(l[5]=a=>o.watermark3=a),"image-zoom":.5,rotate:10,image:"https://www.zhuimengzhu.com/doc/cover/20220223/6ef437cb48d7109cf7262fe45ffd2059.png",fullscreen:""},null,8,["modelValue"])]),n(d,null,{desc:e(()=>[...l[18]||(l[18]=[])]),highlight:e(()=>[...l[19]||(l[19]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"watermark3 = !watermark3"'),t("span",{style:{color:"#E1E4E8"}},">切换</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-watermark"),t("span",{style:{color:"#B392F0"}},"  :zindex"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},"'999'"),t("span",{style:{color:"#B392F0"}}," v-model"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"watermark3"'),t("span",{style:{color:"#B392F0"}}," :image-zoom"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"0.5"'),t("span",{style:{color:"#B392F0"}}," :rotate"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"10"'),t("span",{style:{color:"#B392F0"}}," image"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"https://www.zhuimengzhu.com/doc/cover/20220223/6ef437cb48d7109cf7262fe45ffd2059.png"'),t("span",{style:{color:"#B392F0"}}," fullscreen"),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-watermark"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        return"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            watermark3: "),t("span",{style:{color:"#79B8FF"}},"false")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:e(()=>[...l[20]||(l[20]=[])]),default:e(()=>[l[21]||(l[21]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
    <zmz-button @click="watermark3 = !watermark3">切换</zmz-button>
        <zmz-watermark  :zindex='999' v-model="watermark3" :image-zoom="0.5" :rotate="10" image="https://www.zhuimengzhu.com/doc/cover/20220223/6ef437cb48d7109cf7262fe45ffd2059.png" fullscreen></zmz-watermark>
    </div>
</template>
<script>
export default {
    data() {
        return {
            watermark3: false
        };
    }
};
<\/script>
`)],-1))]),_:1}),l[29]||(l[29]=m('<h2 id="watermark-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#watermark-%E5%B1%9E%E6%80%A7">#</a> Watermark 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>水印显示隐藏</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>width</td><td>水印宽度</td><td>Number</td><td>—</td><td>220</td></tr><tr><td>height</td><td>水印高度</td><td>Number</td><td>—</td><td>220</td></tr><tr><td>alpha</td><td>水印透明度</td><td>Number</td><td>—</td><td>.5</td></tr><tr><td>content</td><td>水印内容</td><td>String / Array</td><td>—</td><td>—</td></tr><tr><td>image</td><td>水印图片</td><td>String</td><td>—</td><td>—</td></tr><tr><td>image-zoom</td><td>水印图片缩放</td><td>Number</td><td>—</td><td>1</td></tr><tr><td>content-options</td><td>水印文本内容配置</td><td>Object</td><td>—</td><td>{ baseline: ‘middle’, color: ‘#2d8ff4’,align: ‘center’}</td></tr><tr><td>rotate</td><td>水印旋转</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>fullscreen</td><td>是否全屏</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="content-options-%E9%85%8D%E7%BD%AE" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#content-options-%E9%85%8D%E7%BD%AE">#</a> content-options 配置</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>space</td><td>水印文本内容间隔</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>baseline</td><td>文本基线</td><td>String</td><td>alphabetic/top/hanging/middle/ideographic/bottom</td><td>middle</td></tr><tr><td>color</td><td>水印颜色</td><td>String</td><td>—</td><td>#2d8ff4</td></tr><tr><td>align</td><td>水印对齐方式</td><td>String</td><td>start/end/center/left/right</td><td>center</td></tr><tr><td>font</td><td>水印字体样式参照canvas font</td><td>String</td><td>—</td><td>12px Arial</td></tr></tbody></table></div><h2 id="watermark-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#watermark-%E6%8F%92%E6%A7%BD">#</a> Watermark 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽，使用将展示局部水印</td></tr></tbody></table></div>',6))])}const D=i(u,[["render",f]]);export{D as default};
