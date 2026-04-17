import{_ as p,c as i,d,a as s,e as o,w as l,b as t,r as c,o as y}from"./index-Bfn7SEZ2.js";const b={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"LoadingBar 加载进度条"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}},methods:{currentConfig(r){return this.$setting.currentConfig[r]},start(){this.$loadingbar.start({visible:!0})},end(){this.$loadingbar.end()},error(){this.$loadingbar.error()},setSpeed(){this.$loadingbar.start({visible:!0,speed:10})},setSpinner(){this.$loadingbar.start({visible:!0,easing:"ease"})},setPercentNum(){this.$loadingbar.start({visible:!0,percent:.1})},setShowSpinner(){this.$loadingbar.start({visible:!1})}}},z={class:"zmz-markdown-article"},m={class:"demo-block"},g={class:"demo-button"},u={class:"demo-block"},B={class:"demo-inline"};function F(r,n,h,k,f,e){const a=c("zmz-button"),E=c("demo-block");return y(),i("div",z,[n[15]||(n[15]=d('<h1 id="loadingbar-%E5%8A%A0%E8%BD%BD%E8%BF%9B%E5%BA%A6%E6%9D%A1" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loadingbar-%E5%8A%A0%E8%BD%BD%E8%BF%9B%E5%BA%A6%E6%9D%A1">#</a> LoadingBar 加载进度条</h1><hr><p>全局创建了一个用于显示页面加载、异步请求的加载进度条。<br> 因为可复用性的关系，<code>LoadingBar</code> 只会全局创建一个实例，而且在 <code>app.config.globalProperties</code> 中添加了全局对象 <code>$Loading</code>，可以直接通过 <code>this.$Loading</code> 操作实例</p><h2 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">#</a> 基础用法</h2><p>通过调用 $Loading 提供的三种方法来控制全局的加载进度条 <code>start()</code>、<code>end()</code>、<code>error()</code></p>',5)),s("div",m,[s("div",g,[o(a,{onClick:e.start},{default:l(()=>[...n[0]||(n[0]=[t("开始",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.end},{default:l(()=>[...n[1]||(n[1]=[t("结束",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.error},{default:l(()=>[...n[2]||(n[2]=[t("错误",-1)])]),_:1},8,["onClick"])])]),o(E,null,{desc:l(()=>[...n[3]||(n[3]=[])]),highlight:l(()=>[...n[4]||(n[4]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"start"'),s("span",{style:{color:"#E1E4E8"}},">开始</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"end"'),s("span",{style:{color:"#E1E4E8"}},">结束</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"error"'),s("span",{style:{color:"#E1E4E8"}},">错误</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"  export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"      start"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"        this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"start"),s("span",{style:{color:"#E1E4E8"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"      end"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"        this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"end"),s("span",{style:{color:"#E1E4E8"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"      error"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"        this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"error"),s("span",{style:{color:"#E1E4E8"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"})])],-1)])]),code:l(()=>[...n[5]||(n[5]=[])]),default:l(()=>[n[6]||(n[6]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <zmz-button @click="start">开始</zmz-button>
    <zmz-button @click="end">结束</zmz-button>
    <zmz-button @click="error">错误</zmz-button>
</template>
<script>
  export default{
    methods: {
      start () {
        this.$loadingbar.start()
      },
      end () {
        this.$loadingbar.end()
      },
      error () {
        this.$loadingbar.error()
      }
    }
  }
<\/script>
`)],-1))]),_:1}),n[16]||(n[16]=s("h2",{id:"%E5%B8%B8%E8%A7%84%E9%85%8D%E7%BD%AE",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B8%B8%E8%A7%84%E9%85%8D%E7%BD%AE"},"#"),t(" 常规配置")],-1)),n[17]||(n[17]=s("p",null,[t("提供 LoadingBar 的全局配置，通过"),s("code",null,"start(传入配置对象)"),t("，使用方法如下：")],-1)),s("div",u,[s("div",B,[o(a,{onClick:e.setSpeed},{default:l(()=>[...n[7]||(n[7]=[t("设置speed速度",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.setSpinner},{default:l(()=>[...n[8]||(n[8]=[t("设置spinner动画效果",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.setPercentNum},{default:l(()=>[...n[9]||(n[9]=[t("设置percentNum每次加载的比例",-1)])]),_:1},8,["onClick"]),o(a,{onClick:e.setShowSpinner},{default:l(()=>[...n[10]||(n[10]=[t("设置是否显示spinner",-1)])]),_:1},8,["onClick"])])]),o(E,null,{desc:l(()=>[...n[11]||(n[11]=[])]),highlight:l(()=>[...n[12]||(n[12]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"setSpeed"'),s("span",{style:{color:"#E1E4E8"}},">设置speed速度</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"setSpinner"'),s("span",{style:{color:"#E1E4E8"}},">设置spinner动画效果</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"setPercentNum"'),s("span",{style:{color:"#E1E4E8"}},">设置percentNum每次加载的比例</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"setShowSpinner"'),s("span",{style:{color:"#E1E4E8"}},">设置是否显示spinner</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}},"{")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    methods"),s("span",{style:{color:"#E1E4E8"}},": {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        start"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"start"),s("span",{style:{color:"#E1E4E8"}},"({")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                showSpinner: "),s("span",{style:{color:"#79B8FF"}},"true")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        end"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"end"),s("span",{style:{color:"#E1E4E8"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        error"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"error"),s("span",{style:{color:"#E1E4E8"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        setSpeed"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"start"),s("span",{style:{color:"#E1E4E8"}},"({")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                speed: "),s("span",{style:{color:"#79B8FF"}},"10")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        setSpinner"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"start"),s("span",{style:{color:"#E1E4E8"}},"({")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                easing: "),s("span",{style:{color:"#9ECBFF"}},"'ease'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        setPercentNum"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"start"),s("span",{style:{color:"#E1E4E8"}},"({")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                percentNum: "),s("span",{style:{color:"#79B8FF"}},"0.1")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        setShowSpinner"),s("span",{style:{color:"#E1E4E8"}}," () {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".$loadingbar."),s("span",{style:{color:"#B392F0"}},"start"),s("span",{style:{color:"#E1E4E8"}},"({")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                showSpinner: "),s("span",{style:{color:"#79B8FF"}},"false")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"})])],-1)])]),code:l(()=>[...n[13]||(n[13]=[])]),default:l(()=>[n[14]||(n[14]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <zmz-button @click="setSpeed">设置speed速度</zmz-button>
    <zmz-button @click="setSpinner">设置spinner动画效果</zmz-button>
    <zmz-button @click="setPercentNum">设置percentNum每次加载的比例</zmz-button>
    <zmz-button @click="setShowSpinner">设置是否显示spinner</zmz-button>
</template>
<script>
export default{
    methods: {
        start () {
            this.$loadingbar.start({
                showSpinner: true
            })
        },
        end () {
            this.$loadingbar.end()
        },
        error () {
            this.$loadingbar.error()
        },
        setSpeed () {
            this.$loadingbar.start({
                speed: 10
            })
        },
        setSpinner () {
            this.$loadingbar.start({
                easing: 'ease'
            })
        },
        setPercentNum () {
            this.$loadingbar.start({
                percentNum: 0.1
            })
        },
        setShowSpinner () {
            this.$loadingbar.start({
                showSpinner: false
            })
        }
    }
}
<\/script>
`)],-1))]),_:1}),n[18]||(n[18]=d('<h2 id="loadingbar-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loadingbar-%E5%B1%9E%E6%80%A7">#</a> LoadingBar 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visible</td><td>是否显示</td><td>String</td><td>—</td><td>false</td></tr><tr><td>speed</td><td>加载速度</td><td>Number</td><td>0-100</td><td>5</td></tr><tr><td>easing</td><td>spinner加载动画</td><td>String</td><td>linear, ease, cubic-bezier…</td><td>贝萨尔曲线值</td></tr><tr><td>percent</td><td>每次前进的百分比</td><td>Float</td><td>0-1</td><td>Math.random()</td></tr><tr><td>color</td><td>自定义颜色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>total-progress</td><td>总进度</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>error</td><td>错误</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>teleport</td><td>是否穿梭</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>teleport-dom</td><td>自身是否插入至 位置 元素</td><td>String</td><td>—</td><td>‘body’</td></tr><tr><td>teleport-class</td><td>自定义穿梭类名</td><td>String/Array</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="loadingbar-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#loadingbar-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> LoadingBar 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-loadingbar-height</td><td>–zmz-loadingbar-height</td><td>3px</td><td>高度</td></tr><tr><td>@zmz-loadingbar-icon-size</td><td>–zmz-loadingbar-icon-size</td><td>18px</td><td>图标大小</td></tr><tr><td>@zmz-loadingbar-icon-color</td><td>–zmz-loadingbar-icon-color</td><td>确认主题颜色</td><td>图标颜色</td></tr><tr><td>@zmz-loadingbar-icon-error-color</td><td>–zmz-loadingbar-icon-error-color</td><td>错误主题颜色</td><td>图标错误颜色</td></tr><tr><td>@zmz-loadingbar-transition</td><td>–zmz-loadingbar-transition</td><td>all 0.2s cubic-bezier(0, 0, 0.76, 0.76)</td><td>动画过度</td></tr><tr><td>@zmz-loadingbar-background-color</td><td>–zmz-loadingbar-background-color</td><td>transparent</td><td>背景颜色</td></tr><tr><td>@zmz-loadingbar-loading-background-color</td><td>–zmz-loadingbar-loading-background-color</td><td>确认主题颜色</td><td>加载背景颜色</td></tr><tr><td>@zmz-loadingbar-error-background-color</td><td>–zmz-loadingbar-error-background-color</td><td>错误主题颜色</td><td>错误背景颜色</td></tr></tbody></table></div>',4))])}const D=p(b,[["render",F]]);export{D as default};
