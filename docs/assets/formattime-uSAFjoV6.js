import{_ as i,c as m,d as p,a as t,e,w as o,b as s,r as c,o as d}from"./index-Bfn7SEZ2.js";const y={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Formattime 时间处理"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),time:new Date().getTime()+10*1e3,time2:new Date().getTime()-600*1e3}},methods:{currentConfig(r){return this.$setting.currentConfig[r]}}},F={class:"zmz-markdown-article"},u={class:"demo-block"},B={class:"demo-block"},f={class:"demo-block"};function z(r,l,D,b,E,w){const n=c("zmz-formattime"),a=c("demo-block");return d(),m("div",F,[l[12]||(l[12]=p('<h1 id="formattime-%E6%97%B6%E9%97%B4%E5%A4%84%E7%90%86" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#formattime-%E6%97%B6%E9%97%B4%E5%A4%84%E7%90%86">#</a> Formattime 时间处理</h1><hr><p>对时间的处理提供两种格式<code>relativetime</code>,<code>countdown</code>,<code>currenttime</code></p><h2 id="%E6%97%B6%E9%97%B4" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%97%B6%E9%97%B4">#</a> 时间</h2><p>默认动态时间</p>',5)),t("div",u,[e(n,{"default-time":"0000-00-00 00:00:00"})]),e(a,null,{desc:o(()=>[...l[0]||(l[0]=[])]),highlight:o(()=>[...l[1]||(l[1]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#B392F0"}}," default-time"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"0000-00-00 00:00:00"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:o(()=>[...l[2]||(l[2]=[])]),default:o(()=>[l[3]||(l[3]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-formattime default-time="0000-00-00 00:00:00"></zmz-formattime>
    </div>
</template>
`)],-1))]),_:1}),l[13]||(l[13]=t("h2",{id:"%E5%80%92%E8%AE%A1%E6%97%B6",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E5%80%92%E8%AE%A1%E6%97%B6"},"#"),s(" 倒计时")],-1)),l[14]||(l[14]=t("p",null,[s("使用type="),t("code",null,"countdown"),s("切换倒计时显示")],-1)),t("div",B,[e(n,{time:E.time,"default-time":"00天00时00分00秒",type:"countdown"},null,8,["time"]),e(n,{time:"2021-06-09","default-time":"0000-00-00",type:"countdown"}),e(n,{time:"2021-06-09 12:12:00","default-time":"0000-00-00 00:00:00",type:"countdown"})]),e(a,null,{desc:o(()=>[...l[4]||(l[4]=[])]),highlight:o(()=>[...l[5]||(l[5]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#B392F0"}}," :time"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"time"'),t("span",{style:{color:"#B392F0"}}," default-time"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"00天00时00分00秒"'),t("span",{style:{color:"#B392F0"}}," type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"countdown"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#B392F0"}}," time"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"2021-06-09"'),t("span",{style:{color:"#B392F0"}},"  default-time"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"0000-00-00"'),t("span",{style:{color:"#B392F0"}}," type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"countdown"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#B392F0"}}," time"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"2021-06-09 12:12:00"'),t("span",{style:{color:"#B392F0"}},"  default-time"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"0000-00-00 00:00:00"'),t("span",{style:{color:"#B392F0"}}," type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"countdown"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        return"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            time: ("),t("span",{style:{color:"#F97583"}},"new"),t("span",{style:{color:"#B392F0"}}," Date"),t("span",{style:{color:"#E1E4E8"}},"())."),t("span",{style:{color:"#B392F0"}},"getTime"),t("span",{style:{color:"#E1E4E8"}},"() "),t("span",{style:{color:"#F97583"}},"+"),t("span",{style:{color:"#79B8FF"}}," 10"),t("span",{style:{color:"#F97583"}}," *"),t("span",{style:{color:"#79B8FF"}}," 1"),t("span",{style:{color:"#F97583"}}," *"),t("span",{style:{color:"#79B8FF"}}," 1000"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:o(()=>[...l[6]||(l[6]=[])]),default:o(()=>[l[7]||(l[7]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-formattime :time="time" default-time="00天00时00分00秒" type="countdown"></zmz-formattime>
        <zmz-formattime time="2021-06-09"  default-time="0000-00-00" type="countdown"></zmz-formattime>
        <zmz-formattime time="2021-06-09 12:12:00"  default-time="0000-00-00 00:00:00" type="countdown"></zmz-formattime>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time: (new Date()).getTime() + 10 * 1 * 1000,
        };
    }
}
<\/script>
`)],-1))]),_:1}),l[15]||(l[15]=t("h2",{id:"%E7%9B%B8%E5%AF%B9%E6%97%B6%E9%97%B4",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E7%9B%B8%E5%AF%B9%E6%97%B6%E9%97%B4"},"#"),s(" 相对时间")],-1)),l[16]||(l[16]=t("p",null,[s("使用type="),t("code",null,"relativetime"),s("切换相对时间显示")],-1)),t("div",f,[e(n,{time:E.time2,type:"relativetime"},null,8,["time"])]),e(a,null,{desc:o(()=>[...l[8]||(l[8]=[])]),highlight:o(()=>[...l[9]||(l[9]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#B392F0"}}," class"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"demo-block"'),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        <"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#B392F0"}}," :time"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"time2"'),t("span",{style:{color:"#B392F0"}}," type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"relativetime"'),t("span",{style:{color:"#E1E4E8"}},"></"),t("span",{style:{color:"#85E89D"}},"zmz-formattime"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    </"),t("span",{style:{color:"#85E89D"}},"div"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    data"),t("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"        return"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            time2: ("),t("span",{style:{color:"#F97583"}},"new"),t("span",{style:{color:"#B392F0"}}," Date"),t("span",{style:{color:"#E1E4E8"}},"())."),t("span",{style:{color:"#B392F0"}},"getTime"),t("span",{style:{color:"#E1E4E8"}},"() "),t("span",{style:{color:"#F97583"}},"-"),t("span",{style:{color:"#79B8FF"}}," 60"),t("span",{style:{color:"#F97583"}}," *"),t("span",{style:{color:"#79B8FF"}}," 10"),t("span",{style:{color:"#F97583"}}," *"),t("span",{style:{color:"#79B8FF"}}," 1000"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:o(()=>[...l[10]||(l[10]=[])]),default:o(()=>[l[11]||(l[11]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-formattime :time="time2" type="relativetime"></zmz-formattime>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time2: (new Date()).getTime() - 60 * 10 * 1000,
        };
    }
}
<\/script>
`)],-1))]),_:1}),l[17]||(l[17]=p('<h2 id="formattime-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#formattime-%E5%B1%9E%E6%80%A7">#</a> Formattime 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>time</td><td>时间格式，时间戳或年月日或年月日时分秒，注意必须是完整时间格式</td><td>String/Number</td><td>—</td><td>—</td></tr><tr><td>default-time</td><td>默认展示格式</td><td>String/Number</td><td>—</td><td>—</td></tr><tr><td>type</td><td>时间类型</td><td>String</td><td>relativetime(相对时间)/countdown(倒计时)/currenttime(当前时间)</td><td>currenttime</td></tr><tr><td>relativetime-options</td><td>参数配置</td><td>Object</td><td>{Y, M, D, W, h, s, m}</td><td>{Y: 年前, M:月前, W:周前, D:天前, h:小时前, m:分钟前, s:刚刚}</td></tr><tr><td>countdown-options</td><td>参数配置</td><td>Object</td><td>{Y, M, D, W, h, s, m}</td><td>{Y: 年前, M:月前, W:周前, D:天前, h:小时前, m:分钟前, s:刚刚}</td></tr><tr><td>currenttime-options</td><td>参数配置</td><td>Object</td><td>{format}</td><td>{format:‘yyyy-MM-dd hh:mm:ss’}</td></tr></tbody></table></div>',2))])}const h=i(y,[["render",z]]);export{h as default};
