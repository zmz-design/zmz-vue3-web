import{_ as E,c as i,a as t,b as l,e as n,w as s,d as y,r as e,o as k}from"./index-Bfn7SEZ2.js";const b={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Backtop 返回顶部"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}},methods:{currentConfig(d){return this.$setting.currentConfig[d]},topClick(){alert("触发回调")},backtopClick(){alert("回到顶部")}}},m={class:"zmz-markdown-article"},z={class:"demo-block"},B={class:"demo-block"};function F(d,o,h,g,C,a){const p=e("warning-block"),c=e("zmz-backtop"),r=e("demo-block");return k(),i("div",m,[o[15]||(o[15]=t("h1",{id:"backtop-%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#backtop-%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8"},"#"),l(" Backtop 返回顶部")],-1)),o[16]||(o[16]=t("hr",null,null,-1)),n(p,null,{desc:s(()=>[...o[0]||(o[0]=[])]),highlight:s(()=>[...o[1]||(o[1]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"})])],-1)])]),code:s(()=>[...o[2]||(o[2]=[])]),default:s(()=>[o[3]||(o[3]=t("p",null,[l("定位属性需要使用"),t("code",null,"scroll-target"),l("来配置滚动容器")],-1))]),_:1}),o[17]||(o[17]=t("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),l(" 基础用法")],-1)),o[18]||(o[18]=t("p",null,"当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。",-1)),t("div",z,[n(c,{style:{"--zmz-backtop-position-zindex":"9999"},onOnClick:a.topClick,onOnBacktop:a.backtopClick,"scroll-target":".zmz-docs__doc"},null,8,["onOnClick","onOnBacktop"]),o[4]||(o[4]=l(" 默认位置距离页面右部和底部 50px，滚动至距顶端 400px 时显示。 ",-1))]),n(r,null,{desc:s(()=>[...o[5]||(o[5]=[])]),highlight:s(()=>[...o[6]||(o[6]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-backtop"),t("span",{style:{color:"#B392F0"}}," @on-click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"topClick"'),t("span",{style:{color:"#B392F0"}}," @on-backtop"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"backtopClick"'),t("span",{style:{color:"#B392F0"}}," scroll-target"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'".zmz-docs__doc"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-backtop"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        默认位置距离页面右部和底部 50px，滚动至距顶端 400px 时显示。")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"  methods: {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    topClick"),t("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        alert"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'触发回调'"),t("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    backtopClick"),t("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        alert"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'回到顶部'"),t("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"})])],-1)])]),code:s(()=>[...o[7]||(o[7]=[])]),default:s(()=>[o[8]||(o[8]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-backtop @on-click="topClick" @on-backtop="backtopClick" scroll-target=".zmz-docs__doc"></zmz-backtop>
        默认位置距离页面右部和底部 50px，滚动至距顶端 400px 时显示。
    </div>
</template>
<script>
export default {
  methods: {
    topClick () {
        alert('触发回调')
    },
    backtopClick() {
        alert('回到顶部')
    }
  }
}
<\/script>
`)],-1))]),_:1}),o[19]||(o[19]=t("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F"},"#"),l(" 自定义样式")],-1)),o[20]||(o[20]=t("p",null,"可以自定义回到顶部样式",-1)),t("div",B,[n(c,{style:{"--zmz-backtop-position-zindex":"9999"},onOnClick:a.topClick,onOnBacktop:a.backtopClick,"scroll-target":".zmz-docs__doc",bottom:100},{default:s(()=>[...o[9]||(o[9]=[t("div",{style:{"{\n          height":"100%",width:"100%","background-color":"#3f536e","box-shadow":"0 0 6px rgba(0,0,0, .12)","text-align":"center","line-height":"40px",color:"#fff","font-size":"14px","border-radius":"5px",padding:"0 15px"}},"回到顶部 ",-1)])]),_:1},8,["onOnClick","onOnBacktop"]),o[10]||(o[10]=l(" 可以自定义回到顶部样式 ",-1))]),n(r,null,{desc:s(()=>[...o[11]||(o[11]=[])]),highlight:s(()=>[...o[12]||(o[12]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-backtop"),t("span",{style:{color:"#B392F0"}}," @on-click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"topClick"'),t("span",{style:{color:"#B392F0"}}," @on-backtop"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"backtopClick"'),t("span",{style:{color:"#B392F0"}}," scroll-target"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'".zmz-docs__doc"'),t("span",{style:{color:"#B392F0"}}," :bottom"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"100"'),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," style"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"{')]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            height: 100%;")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            width: 100%;")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            background-color: #3f536e;")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            box-shadow: 0 0 6px rgba(0,0,0, .12);")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            text-align: center;")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            line-height: 40px;")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            color: #fff;")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            font-size:14px;")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            border-radius: 5px;")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},"            padding: 0 15px;")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#9ECBFF"}},'            }"'),t("span",{style:{color:"#E1E4E8"}},">回到顶部 </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            </"),t("span",{style:{color:"#85E89D"}},"zmz-backtop"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        可以自定义回到顶部样式")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),t("span",{class:"line"})])],-1)])]),code:s(()=>[...o[13]||(o[13]=[])]),default:s(()=>[o[14]||(o[14]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-backtop @on-click="topClick" @on-backtop="backtopClick" scroll-target=".zmz-docs__doc" :bottom="100">
            <div style="{
            height: 100%;
            width: 100%;
            background-color: #3f536e;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            color: #fff;
            font-size:14px;
            border-radius: 5px;
            padding: 0 15px;
            }">回到顶部 </div>
            </zmz-backtop>
        可以自定义回到顶部样式
    </div>
</template>
`)],-1))]),_:1}),o[21]||(o[21]=y('<h2 id="backtop-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#backtop-%E5%B1%9E%E6%80%A7">#</a> Backtop 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visibility-height</td><td>滚动高度</td><td><code>Number</code></td><td>-</td><td>400</td></tr><tr><td>bottom</td><td>组件距离底部距离</td><td><code>Number</code></td><td>-</td><td>50</td></tr><tr><td>right</td><td>组件距离右部距离</td><td><code>Number</code></td><td>-</td><td>50</td></tr><tr><td>duration</td><td>滚动持续时间</td><td><code>Number</code></td><td>-</td><td>10</td></tr><tr><td>icon</td><td>图标</td><td>String</td><td>-</td><td>-</td></tr><tr><td>scroll-target</td><td>存在定位无法监听滚动节点，使气泡随按钮滚动时是使用此属性</td><td><code>String</code></td><td>Class/Id/TagName</td><td>window</td></tr></tbody></table></div><h2 id="backtop-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#backtop-%E6%96%B9%E6%B3%95">#</a> Backtop 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-click</td><td>点击按钮回调事件</td><td>—</td></tr><tr><td>on-backtop</td><td>触发按钮回到顶部事件</td><td>—</td></tr></tbody></table></div><h2 id="backtop-%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#backtop-%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Backtop 样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-backtop-width</td><td>–zmz-backtop-width</td><td>40px</td><td>宽度</td></tr><tr><td>@zmz-backtop-height</td><td>–zmz-backtop-height</td><td>40px</td><td>高度</td></tr><tr><td>@zmz-backtop-radius</td><td>–zmz-backtop-radius</td><td>50%</td><td>圆角</td></tr><tr><td>@zmz-backtop-shadow</td><td>–zmz-backtop-shadow</td><td>0 0 6px rgba(0, 0, 0, .12)</td><td>阴影</td></tr><tr><td>@zmz-backtop-position-zindex</td><td>–zmz-backtop-position-zindex</td><td>9</td><td>定位层级</td></tr><tr><td>@zmz-backtop-position-right</td><td>–zmz-backtop-position-right</td><td>50px</td><td>距离右侧距离</td></tr><tr><td>@zmz-backtop-position-bottom</td><td>–zmz-backtop-position-bottom</td><td>50px</td><td>距离底部距离</td></tr><tr><td>@zmz-backtop-icon-color</td><td>–zmz-backtop-icon-color</td><td>14px</td><td>确认主题色</td></tr><tr><td>@zmz-backtop-icon-font-size</td><td>–zmz-backtop-icon-font-size</td><td>16px</td><td>图标大小</td></tr></tbody></table></div><div style="height:1000px;"></div>',7))])}const u=E(b,[["render",F]]);export{u as default};
