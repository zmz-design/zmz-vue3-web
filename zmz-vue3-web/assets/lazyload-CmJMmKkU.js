import{_ as b,c as r,a as s,b as l,F as y,f as g,e as m,w as e,d as z,r as F,l as u,o as a,i as h}from"./index-DDFEzhq1.js";const o="/zmz-vue3-web/assets/demo-img-1-ct9qwYik.png",B="/zmz-vue3-web/assets/demo-img-error-BjhHnFte.png",v="/zmz-vue3-web/assets/demo-img-loading-DB8CL4Ni.png",x={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Lazyload 图片懒加载"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),buglist:[{src:o},{src:o},{src:o},{src:o},{src:o},{src:o},{src:o},{src:o},{src:o},{src:o},{src:o},{src:o},{src:o}],errorimg:B,loadingimg:v}},methods:{currentConfig(d){return this.$setting.currentConfig[d]}}},k={class:"zmz-markdown-article"},f={class:"demo-block boxNode",style:{height:"200px",overflow:"auto"}},C={class:"demo-block"},w={style:{height:"200px",overflow:"auto"},class:"boxId"},A={style:{height:"2000px"}};function D(d,t,N,S,n,I){const i=F("demo-block"),p=u("zmzlazyload");return a(),r("div",k,[t[8]||(t[8]=s("h1",{id:"lazyload-%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#lazyload-%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD"},"#"),l(" Lazyload 图片懒加载")],-1)),t[9]||(t[9]=s("hr",null,null,-1)),t[10]||(t[10]=s("p",null,"用于减少页面卡顿，提高网页下载速度，优化网页打开速度",-1)),t[11]||(t[11]=s("h2",{id:"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"},"#"),l(" 基本用法")],-1)),t[12]||(t[12]=s("p",null,"图片基于windows窗口实现的，基本用法请安装测试",-1)),s("div",f,[(a(!0),r(y,null,g(n.buglist,(E,c)=>h((a(),r("img",{key:c,style:{display:"block",height:"200px"}})),[[p,{src:E.src,scrollTarget:".boxNode",error:n.errorimg}]])),128))]),m(i,null,{desc:e(()=>[...t[0]||(t[0]=[])]),highlight:e(()=>[...t[1]||(t[1]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block boxNode"'),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"height:200px;overflow:auto"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"img"),s("span",{style:{color:"#B392F0"}},"  v-zmzlazyload"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"{'src': item.src, scrollTarget: '.boxNode' ,'error':errorimg}"`),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"index"'),s("span",{style:{color:"#B392F0"}}," v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"(item, index) in buglist"'),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"display: block;height: 200px;"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"()  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            buglist: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"               { src: "),s("span",{style:{color:"#9ECBFF"}},"'展示图片地址'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            errorimg: "),s("span",{style:{color:"#9ECBFF"}},"'错误图片地址'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            loadingimg: "),s("span",{style:{color:"#9ECBFF"}},"'加载图片地址'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:e(()=>[...t[2]||(t[2]=[])]),default:e(()=>[t[3]||(t[3]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block boxNode" style="height:200px;overflow:auto">
        <img  v-zmzlazyload="{'src': item.src, scrollTarget: '.boxNode' ,'error':errorimg}" :key="index" v-for="(item, index) in buglist" style="display: block;height: 200px;">
    </div>
</template>
<script>
export default {
    data()  {
        return {
            buglist: [
               { src: '展示图片地址' },
            ],
            errorimg: '错误图片地址',
            loadingimg: '加载图片地址'
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[13]||(t[13]=s("h2",{id:"%E9%83%A8%E5%88%86%E6%A0%87%E7%AD%BE%E5%86%85%E7%94%A8%E6%B3%95",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E9%83%A8%E5%88%86%E6%A0%87%E7%AD%BE%E5%86%85%E7%94%A8%E6%B3%95"},"#"),l(" 部分标签内用法")],-1)),t[14]||(t[14]=s("p",null,"基于在特定标签盒子中的懒加载",-1)),s("div",C,[s("div",w,[s("div",A,[(a(!0),r(y,null,g(n.buglist,(E,c)=>h((a(),r("img",{key:c,style:{display:"block",height:"200px"}})),[[p,{src:E.src,scrollTarget:".boxId",error:n.errorimg,loading:n.loadingimg}]])),128))])])]),m(i,null,{desc:e(()=>[...t[4]||(t[4]=[])]),highlight:e(()=>[...t[5]||(t[5]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"height: 200px;overflow: auto;"'),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'boxId'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"height: 2000px;"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"img"),s("span",{style:{color:"#B392F0"}},"  v-zmzlazyload"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"{'src': item.src, scrollTarget: '.boxId' ,'error':errorimg, loading:loadingimg}"`),s("span",{style:{color:"#B392F0"}}," :key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"index"'),s("span",{style:{color:"#B392F0"}}," v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"(item, index) in buglist"'),s("span",{style:{color:"#B392F0"}}," style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"display: block;height: 200px;"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"()  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            buglist: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"               { src: "),s("span",{style:{color:"#9ECBFF"}},"'展示图片地址'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            errorimg: "),s("span",{style:{color:"#9ECBFF"}},"'错误图片地址'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            loadingimg: "),s("span",{style:{color:"#9ECBFF"}},"'加载图片地址'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:e(()=>[...t[6]||(t[6]=[])]),default:e(()=>[t[7]||(t[7]=s("pre",null,[s("code",{class:"language-html"},`
<template>
    <div class="demo-block">
        <div style="height: 200px;overflow: auto;" class='boxId'>
            <div style="height: 2000px;">
                <img  v-zmzlazyload="{'src': item.src, scrollTarget: '.boxId' ,'error':errorimg, loading:loadingimg}" :key="index" v-for="(item, index) in buglist" style="display: block;height: 200px;">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data()  {
        return {
            buglist: [
               { src: '展示图片地址' },
            ],
            errorimg: '错误图片地址',
            loadingimg: '加载图片地址'
        }
    }
}
<\/script>
`)],-1))]),_:1}),t[15]||(t[15]=z(`<h2 id="lazyload-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#lazyload-%E5%B1%9E%E6%80%A7">#</a> Lazyload 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-zmzlazyload</td><td>自定义参数指令</td><td>object</td><td><code>src</code>,<code>error</code>,<code>loading</code>,<code>scrollTarget</code></td><td><code>src</code></td></tr></tbody></table></div><h2 id="lazyload.v-zmzlazyload-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#lazyload.v-zmzlazyload-%E5%B1%9E%E6%80%A7">#</a> Lazyload.v-zmzlazyload 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图片真实地址</td><td>String</td><td>—</td><td>—</td></tr><tr><td>error</td><td>图片加载错误地址</td><td>String</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>图片加载中地址</td><td>String</td><td>—</td><td>—</td></tr><tr><td>scroll-target</td><td>特定盒子节点</td><td>String</td><td>—</td><td>querySelector(可选)</td></tr></tbody></table></div><h2 id="%E5%85%A8%E5%B1%80" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%85%A8%E5%B1%80">#</a> 全局</h2><pre><code class="language-javascript">app.use(ZMZUI3,{
  errorImage:&#39;&#39;,
  loadingImage: &#39;&#39;,
  scrollTarget: &#39;&#39;,
  scrollDistance: &#39;&#39;
})
</code></pre><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>scroll-distance</td><td>距离顶部多少开始显示</td><td>String/Number</td><td>—</td><td>—</td></tr><tr><td>error-image</td><td>图片加载错误地址</td><td>String</td><td>—</td><td>—</td></tr><tr><td>loading-image</td><td>图片加载中地址</td><td>String</td><td>—</td><td>—</td></tr><tr><td>scroll-target</td><td>特定盒子节点</td><td>String</td><td>—</td><td>querySelector(可选)</td></tr></tbody></table></div><h2 id="%E6%8F%90%E7%A4%BA" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%8F%90%E7%A4%BA">#</a> 提示</h2><p>动态加载图片如果图片没有高度会出现错误，请按实际情况进行配置</p>`,9))])}const L=b(x,[["render",D]]);export{L as default};
