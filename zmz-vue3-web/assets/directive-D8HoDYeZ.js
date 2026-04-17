import{_ as D,c as C,a as s,b as l,i as E,e as n,w as o,d as c,g as y,t as A,r as p,l as d,o as i}from"./index-DDFEzhq1.js";const x={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Directive 指令"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),loading:!1,count:0,copy:"指令复制剪贴板",zmzverifynumber:""}},methods:{currentConfig(z){return this.$setting.currentConfig[z]},directiveClick1(){this.loading=!0,setTimeout(()=>{this.loading=!1},2e3)},directiveClick3(){this.$copy("服务复制剪贴板").then(()=>{this.$message.success("复制成功")})},directiveClick2(){this.count++}}},w={class:"zmz-markdown-article"},S={class:"demo-block"},L={class:"demo-block"},V={class:"demo-block"},$={class:"demo-block"},N={class:"demo-block"};function T(z,t,j,O,e,m){const B=p("zmz-input"),a=p("demo-block"),r=p("zmz-button"),u=p("zmz-space-item"),F=p("zmz-space"),v=d("zmzverifynumber"),b=d("zmzcopy"),h=d("zmz-loading"),g=d("zmzpreventreclick"),k=d("zmzfreedrag");return i(),C("div",w,[t[26]||(t[26]=s("h1",{id:"directive-%E6%8C%87%E4%BB%A4",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#directive-%E6%8C%87%E4%BB%A4"},"#"),l(" Directive 指令")],-1)),t[27]||(t[27]=s("hr",null,null,-1)),t[28]||(t[28]=s("p",null,"便捷式指令",-1)),t[29]||(t[29]=s("h2",{id:"%E9%AA%8C%E8%AF%81%E6%95%B0%E5%AD%97",tabindex:"-1"},[s("a",{class:"zmz-markdown-article-anchor",href:"#%E9%AA%8C%E8%AF%81%E6%95%B0%E5%AD%97"},"#"),l(" 验证数字")],-1)),t[30]||(t[30]=s("p",null,"让输入框只允许识别数字`(v-zmzverifynumber)",-1)),s("div",S,[E(n(B,{modelValue:e.zmzverifynumber,"onUpdate:modelValue":t[0]||(t[0]=f=>e.zmzverifynumber=f),placeholder:"验证数字"},null,8,["modelValue"]),[[v]])]),n(a,null,{desc:o(()=>[...t[1]||(t[1]=[])]),highlight:o(()=>[...t[2]||(t[2]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-input"),s("span",{style:{color:"#B392F0"}}," v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"zmzverifynumber"'),s("span",{style:{color:"#B392F0"}}," v-zmzverifynumber"),s("span",{style:{color:"#B392F0"}}," placeholder"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"验证数字"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-input"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            zmzverifynumber: "),s("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...t[3]||(t[3]=[])]),default:o(()=>[t[4]||(t[4]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-input v-model="zmzverifynumber" v-zmzverifynumber placeholder="验证数字"></zmz-input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            zmzverifynumber: ''
        };
    }
};
<\/script>
`)],-1))]),_:1}),t[31]||(t[31]=c('<h2 id="zmzverifynumber-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#zmzverifynumber-%E5%B1%9E%E6%80%A7">#</a> zmzverifynumber 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>保留几位</td><td>String</td><td>—</td><td>—</td></tr><tr><td>.float</td><td>是否小数修饰符</td><td>—</td><td>—</td><td>——</td></tr></tbody></table></div><h2 id="%E5%A4%8D%E5%88%B6%E5%89%AA%E8%B4%B4%E6%9D%BF" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%A4%8D%E5%88%B6%E5%89%AA%E8%B4%B4%E6%9D%BF">#</a> 复制剪贴板</h2><p>将数据复制到剪贴板，进行粘贴, 分指令<code>(v-zmzcopy)</code>和服务<code>($copy)</code></p>',4)),s("div",L,[n(F,null,{default:o(()=>[n(u,null,{default:o(()=>[E((i(),y(r,{type:"primary"},{default:o(()=>[...t[5]||(t[5]=[l("指令复制剪贴板",-1)])]),_:1})),[[b,e.copy]])]),_:1}),n(u,null,{default:o(()=>[n(r,{type:"primary",onClick:m.directiveClick3},{default:o(()=>[...t[6]||(t[6]=[l("服务复制剪贴板",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})]),n(a,null,{desc:o(()=>[...t[7]||(t[7]=[])]),highlight:o(()=>[...t[8]||(t[8]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},"><"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#B392F0"}}," v-zmzcopy"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"copy"'),s("span",{style:{color:"#E1E4E8"}},">指令复制剪贴板</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},"><"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"directiveClick3"'),s("span",{style:{color:"#E1E4E8"}},">服务复制剪贴板</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"zmz-space-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"zmz-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            copy: "),s("span",{style:{color:"#9ECBFF"}},"'指令复制剪贴板'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        directiveClick"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"$copy"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'服务复制剪贴板'"),s("span",{style:{color:"#E1E4E8"}},")."),s("span",{style:{color:"#B392F0"}},"then"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"                this"),s("span",{style:{color:"#E1E4E8"}},".$message."),s("span",{style:{color:"#B392F0"}},"success"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'复制成功'"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...t[9]||(t[9]=[])]),default:o(()=>[t[10]||(t[10]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item><zmz-button type="primary" v-zmzcopy="copy">指令复制剪贴板</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" @click="directiveClick3">服务复制剪贴板</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            copy: '指令复制剪贴板'
        };
    },
    methods: {
        directiveClick() {
            this.$copy('服务复制剪贴板').then(() => {
                this.$message.success('复制成功')
            })
        },
    }
};
<\/script>
`)],-1))]),_:1}),t[32]||(t[32]=c('<h2 id="zmzcopy-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#zmzcopy-%E5%B1%9E%E6%80%A7">#</a> zmzcopy 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>复制文本</td><td>String</td><td>—</td><td>——</td></tr><tr><td>zmzcopy-tips</td><td>指令行参数，复制提示</td><td>String</td><td>—</td><td>复制成功</td></tr><tr><td>zmzcopy-tips-type</td><td>指令行参数，提示类型，请参考$message弹窗</td><td>String</td><td>—</td><td>success</td></tr><tr><td>zmzcopy-text</td><td>指令行参数，复制文本，此参数存在value 失效</td><td>String</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="%E5%8A%A0%E8%BD%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%8A%A0%E8%BD%BD">#</a> 加载</h2><p>数据加载前展示, 指令<code>(v-zmzLoading)</code> 和服务 <code>($loading)</code></p>',4)),s("div",V,[E((i(),y(r,{type:"primary",onClick:m.directiveClick1,"zmzLoading-content":"努力加载中"},{default:o(()=>[...t[11]||(t[11]=[l("指令模式",-1)])]),_:1},8,["onClick"])),[[h,e.loading,void 0,{fullscreen:!0}]])]),n(a,null,{desc:o(()=>[...t[12]||(t[12]=[])]),highlight:o(()=>[...t[13]||(t[13]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#B392F0"}}," @click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"directiveClick1"'),s("span",{style:{color:"#B392F0"}}," v-zmz-loading.fullscreen"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"loading"'),s("span",{style:{color:"#B392F0"}}," zmzLoading-content"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"努力加载中"'),s("span",{style:{color:"#E1E4E8"}},">指令模式</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"    data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"        return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            loading: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        loadingButton"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"            this"),s("span",{style:{color:"#E1E4E8"}},".loading "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#79B8FF"}}," true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"            setTimeout"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"                this"),s("span",{style:{color:"#E1E4E8"}},".loading "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#79B8FF"}}," false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            }, "),s("span",{style:{color:"#79B8FF"}},"2000"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...t[14]||(t[14]=[])]),default:o(()=>[t[15]||(t[15]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-button type="primary" @click="directiveClick1" v-zmz-loading.fullscreen="loading" zmzLoading-content="努力加载中">指令模式</zmz-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        loadingButton() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        }
    }
};
<\/script>
`)],-1))]),_:1}),t[33]||(t[33]=c('<h2 id="zmzloading-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#zmzloading-%E5%B1%9E%E6%80%A7">#</a> zmzLoading 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>加载状态</td><td>Boolean</td><td>—</td><td>——</td></tr><tr><td>zmzLoading-content</td><td>指令行参数，加载文本</td><td>String</td><td>—</td><td>加载中</td></tr><tr><td>zmzLoading-icon</td><td>指令行参数，加载icon</td><td>String</td><td>—</td><td>zmz-icon–loading</td></tr><tr><td>zmzLoading-background</td><td>指令行参数，背景色</td><td>String</td><td>—</td><td>rgba(255, 255, 255, .7)</td></tr><tr><td>zmzLoading-loadingStyle</td><td>指令行参数，加载自定义样式</td><td>Object</td><td>Object</td><td>{}</td></tr><tr><td>zmzLoading-rotate</td><td>指令行参数，是否旋转</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>fullscreen</td><td>修饰符，是否全屏</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="%E9%98%B2%E8%BF%9E%E5%87%BB" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E9%98%B2%E8%BF%9E%E5%87%BB">#</a> 防连击</h2><p>防止用户快速点击按钮，造成重复调用,指令<code>(v-zmzpreventreclick)</code></p>',4)),s("div",$,[E((i(),y(r,{type:"primary"},{default:o(()=>[...t[16]||(t[16]=[l("快速点击",-1)])]),_:1})),[[g,m.directiveClick2,void 0,{button:!0}]]),l(" "+A(e.count),1)]),n(a,null,{desc:o(()=>[...t[17]||(t[17]=[])]),highlight:o(()=>[...t[18]||(t[18]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#B392F0"}}," v-zmzpreventreclick.button"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"directiveClick2"'),s("span",{style:{color:"#E1E4E8"}},">快速点击</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {{count}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#F97583"}}," default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        directiveClick"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'连击'"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...t[19]||(t[19]=[])]),default:o(()=>[t[20]||(t[20]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-button type="primary" v-zmzpreventreclick.button="directiveClick2">快速点击</zmz-button>
        {{count}}
    </div>
</template>
<script>
export default {
    methods: {
        directiveClick() {
            console.log('连击')
        }
    }
};
<\/script>
`)],-1))]),_:1}),t[34]||(t[34]=c('<h2 id="zmzpreventreclick-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#zmzpreventreclick-%E5%B1%9E%E6%80%A7">#</a> zmzpreventreclick 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>调用函数</td><td>Function</td><td>—</td><td>—</td></tr><tr><td>button</td><td>按钮添加disabled</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="%E8%87%AA%E7%94%B1%E6%8B%96%E6%8B%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E8%87%AA%E7%94%B1%E6%8B%96%E6%8B%BD">#</a> 自由拖拽</h2><p>添加指令可以自由拖拽位置,指令<code>(v-zmzfreedrag)</code></p>',4)),s("div",N,[E((i(),y(r,{type:"primary"},{default:o(()=>[...t[21]||(t[21]=[l("按下拖动",-1)])]),_:1})),[[k,!0]])]),n(a,null,{desc:o(()=>[...t[22]||(t[22]=[])]),highlight:o(()=>[...t[23]||(t[23]=[s("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo-block"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#B392F0"}}," type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#B392F0"}}," v-zmzfreedrag"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"true"'),s("span",{style:{color:"#E1E4E8"}},">按下拖动</"),s("span",{style:{color:"#85E89D"}},"zmz-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])],-1)])]),code:o(()=>[...t[24]||(t[24]=[])]),default:o(()=>[t[25]||(t[25]=s("pre",null,[s("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-button type="primary" v-zmzfreedrag="true">按下拖动</zmz-button>
    </div>
</template>
`)],-1))]),_:1}),t[35]||(t[35]=c('<h2 id="zmzfreedrag-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#zmzfreedrag-%E5%B1%9E%E6%80%A7">#</a> zmzfreedrag 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>是否开启拖拽</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>seat</td><td>是否添加占位修饰符.seat</td><td>—</td><td>—</td><td>—</td></tr></tbody></table></div>',2))])}const U=D(x,[["render",T]]);export{U as default};
