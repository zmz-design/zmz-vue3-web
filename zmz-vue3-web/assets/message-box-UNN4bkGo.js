import{_ as p,c as i,d as E,a as t,e as n,w as e,b as s,r as c,o as m}from"./index-DDFEzhq1.js";const y={name:"MdMessageBox",metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"MessageBox 弹框"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}},methods:{alert(){this.$messageBox.alert("这是一段内容").then(l=>{this.$message.success(l)})},confirm(){this.$messageBox.confirm({confirmBtnText:"确定",cancelBtnText:"取消",title:"确认消息",content:"这是一段内容"}).then(l=>{this.$message.success(l)}).catch(l=>{this.$message.error(l)})},destroy(){this.$messageBox.destroy()},prompt(){this.$messageBox.prompt({confirmBtnText:"确定",cancelBtnText:"取消",title:"标题名称",content:"请输入名称",inputValidation:"^[0-9]*$",inputErrorMsg:"输入错误"}).then(()=>{this.$message.success("正确")})},currentConfig(l){return this.$setting.currentConfig[l]}}},B={class:"zmz-markdown-article"},z={class:"demo-block"},g={class:"demo-block"},x={class:"demo-block"};function b(l,o,F,h,u,a){const r=c("zmz-button"),d=c("demo-block");return m(),i("div",B,[o[15]||(o[15]=E('<h1 id="messagebox-%E5%BC%B9%E6%A1%86" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#messagebox-%E5%BC%B9%E6%A1%86">#</a> MessageBox 弹框</h1><hr><h2 id="%E6%A6%82%E8%BF%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%A6%82%E8%BF%B0">#</a> 概述</h2><p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p><h2 id="%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA">#</a> 消息提示</h2>',5)),t("div",z,[n(r,{onClick:a.alert},{default:e(()=>[...o[0]||(o[0]=[s("弹框",-1)])]),_:1},8,["onClick"])]),n(d,null,{desc:e(()=>[...o[1]||(o[1]=[])]),highlight:e(()=>[...o[2]||(o[2]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"alert"'),t("span",{style:{color:"#E1E4E8"}},">弹框</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    methods"),t("span",{style:{color:"#E1E4E8"}},": {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        alert"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$messageBox."),t("span",{style:{color:"#B392F0"}},"alert"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'这是一段内容'"),t("span",{style:{color:"#E1E4E8"}},", "),t("span",{style:{color:"#9ECBFF"}},"'标题名称'"),t("span",{style:{color:"#E1E4E8"}},", {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"              yesBtnText: "),t("span",{style:{color:"#9ECBFF"}},"'确定'")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            })."),t("span",{style:{color:"#B392F0"}},"then"),t("span",{style:{color:"#E1E4E8"}},"(("),t("span",{style:{color:"#FFAB70"}},"res"),t("span",{style:{color:"#E1E4E8"}},") "),t("span",{style:{color:"#F97583"}},"=>"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                this"),t("span",{style:{color:"#E1E4E8"}},".$message."),t("span",{style:{color:"#B392F0"}},"success"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"`action: ${"),t("span",{style:{color:"#E1E4E8"}}," res"),t("span",{style:{color:"#9ECBFF"}}," }`"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            });")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:e(()=>[...o[3]||(o[3]=[])]),default:e(()=>[o[4]||(o[4]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <zmz-button @click="alert">弹框</zmz-button>
</template>
<script>
export default{
    methods: {
        alert () {
            this.$messageBox.alert('这是一段内容', '标题名称', {
              yesBtnText: '确定'
            }).then((res) => {
                this.$message.success(\`action: \${ res }\`);
            });
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[16]||(o[16]=t("h2",{id:"%E7%A1%AE%E8%AE%A4%E6%B6%88%E6%81%AF",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A1%AE%E8%AE%A4%E6%B6%88%E6%81%AF"},"#"),s(" 确认消息")],-1)),o[17]||(o[17]=t("p",null,"提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。",-1)),t("div",g,[n(r,{onClick:a.confirm},{default:e(()=>[...o[5]||(o[5]=[s("弹框",-1)])]),_:1},8,["onClick"])]),n(d,null,{desc:e(()=>[...o[6]||(o[6]=[])]),highlight:e(()=>[...o[7]||(o[7]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"confirm"'),t("span",{style:{color:"#E1E4E8"}},">弹框</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    methods"),t("span",{style:{color:"#E1E4E8"}},": {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        confirm"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$messageBox."),t("span",{style:{color:"#B392F0"}},"confirm"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'这是一段内容'"),t("span",{style:{color:"#E1E4E8"}},", "),t("span",{style:{color:"#9ECBFF"}},"'标题名称'"),t("span",{style:{color:"#E1E4E8"}},", {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"              yesBtnText: "),t("span",{style:{color:"#9ECBFF"}},"'确定'")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            })."),t("span",{style:{color:"#B392F0"}},"then"),t("span",{style:{color:"#E1E4E8"}},"(("),t("span",{style:{color:"#FFAB70"}},"res"),t("span",{style:{color:"#E1E4E8"}},") "),t("span",{style:{color:"#F97583"}},"=>"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                this"),t("span",{style:{color:"#E1E4E8"}},".$message."),t("span",{style:{color:"#B392F0"}},"success"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"`action: ${"),t("span",{style:{color:"#E1E4E8"}}," res"),t("span",{style:{color:"#9ECBFF"}}," }`"),t("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            });")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:e(()=>[...o[8]||(o[8]=[])]),default:e(()=>[o[9]||(o[9]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <zmz-button @click="confirm">弹框</zmz-button>
</template>
<script>
export default{
    methods: {
        confirm () {
            this.$messageBox.confirm('这是一段内容', '标题名称', {
              yesBtnText: '确定'
            }).then((res) => {
                this.$message.success(\`action: \${ res }\`);
            });
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[18]||(o[18]=t("h2",{id:"%E6%8F%90%E4%BA%A4%E5%86%85%E5%AE%B9",tabindex:"-1"},[t("a",{class:"zmz-markdown-article-anchor",href:"#%E6%8F%90%E4%BA%A4%E5%86%85%E5%AE%B9"},"#"),s(" 提交内容")],-1)),o[19]||(o[19]=t("p",null,"当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。",-1)),t("div",x,[n(r,{onClick:a.prompt},{default:e(()=>[...o[10]||(o[10]=[s("弹框",-1)])]),_:1},8,["onClick"])]),n(d,null,{desc:e(()=>[...o[11]||(o[11]=[])]),highlight:e(()=>[...o[12]||(o[12]=[t("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    <"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#B392F0"}}," @click"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"prompt"'),t("span",{style:{color:"#E1E4E8"}},">弹框</"),t("span",{style:{color:"#85E89D"}},"zmz-button"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F97583"}},"export"),t("span",{style:{color:"#F97583"}}," default"),t("span",{style:{color:"#E1E4E8"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"    methods"),t("span",{style:{color:"#E1E4E8"}},": {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#B392F0"}},"        prompt"),t("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"            this"),t("span",{style:{color:"#E1E4E8"}},".$messageBox."),t("span",{style:{color:"#B392F0"}},"prompt"),t("span",{style:{color:"#E1E4E8"}},"("),t("span",{style:{color:"#9ECBFF"}},"'标题名称'"),t("span",{style:{color:"#E1E4E8"}},", "),t("span",{style:{color:"#9ECBFF"}},"'请输入名称'"),t("span",{style:{color:"#E1E4E8"}},", {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"              confirmBtnText: "),t("span",{style:{color:"#9ECBFF"}},"'确定'"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"              cancelBtnText: "),t("span",{style:{color:"#9ECBFF"}},"'取消'"),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"              inputValidation: "),t("span",{style:{color:"#9ECBFF"}},'"^[0-9]*$"'),t("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"              inputErrorMsg: "),t("span",{style:{color:"#9ECBFF"}},"'输入错误'")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            })."),t("span",{style:{color:"#B392F0"}},"then"),t("span",{style:{color:"#E1E4E8"}},"(("),t("span",{style:{color:"#FFAB70"}},"res"),t("span",{style:{color:"#E1E4E8"}},") "),t("span",{style:{color:"#F97583"}},"=>"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                this"),t("span",{style:{color:"#E1E4E8"}},".$message."),t("span",{style:{color:"#B392F0"}},"success"),t("span",{style:{color:"#E1E4E8"}},"(res)")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            })."),t("span",{style:{color:"#B392F0"}},"catch"),t("span",{style:{color:"#E1E4E8"}},"(("),t("span",{style:{color:"#FFAB70"}},"res"),t("span",{style:{color:"#E1E4E8"}},") "),t("span",{style:{color:"#F97583"}},"=>"),t("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"                this"),t("span",{style:{color:"#E1E4E8"}},".$message."),t("span",{style:{color:"#B392F0"}},"error"),t("span",{style:{color:"#E1E4E8"}},"(res)        ")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"            });")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"script"),t("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),t("span",{class:"line"})])],-1)])]),code:e(()=>[...o[13]||(o[13]=[])]),default:e(()=>[o[14]||(o[14]=t("pre",null,[t("code",{class:"language-html"},`<template>
    <zmz-button @click="prompt">弹框</zmz-button>
</template>
<script>
export default{
    methods: {
        prompt () {
            this.$messageBox.prompt('标题名称', '请输入名称', {
              confirmBtnText: '确定',
              cancelBtnText: '取消',
              inputValidation: "^[0-9]*$",
              inputErrorMsg: '输入错误'
            }).then((res) => {
                this.$message.success(res)
            }).catch((res) => {
                this.$message.error(res)        
            });
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[20]||(o[20]=E('<h2 id="%E5%85%A8%E5%B1%80%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%85%A8%E5%B1%80%E6%96%B9%E6%B3%95">#</a> 全局方法</h2><p>如果你完整引入了 ZMZUI，它会为 app.config.globalProperties 添加如下全局方法：$messageBox。 因此在 Vue 中可以采用本页面中的方式调用 MessageBox。调用方法参数为：</p><ul><li><p><code>$messageBox.message(type, option)</code></p></li><li><p><code>$messageBox.alert(content,title, option)</code></p></li><li><p><code>$messageBox.confirm(content,title, option) </code></p></li><li><p><code>$messageBox.prompt(content,title, option)</code></p></li></ul><h2 id="messagebox-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#messagebox-%E5%B1%9E%E6%80%A7">#</a> MessageBox 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>—</td><td>—</td></tr><tr><td>content</td><td>内容</td><td>String</td><td>—</td><td>—</td></tr><tr><td>content-html</td><td>是否内容html</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>confirm-btn-text</td><td>确认按钮内容</td><td>String</td><td>—</td><td>‘确认’</td></tr><tr><td>cancel-btn-text</td><td>取消按钮内容</td><td>String</td><td>—</td><td>‘取消’</td></tr><tr><td>type</td><td>icon 主题</td><td>String</td><td>success/warning/primary/error/dark/default</td><td>default</td></tr><tr><td>content-center</td><td>内容是否居中</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>header-center</td><td>标题是否居中</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>footer-center</td><td>底部是否居中</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>是否整体居中</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>input-error-msg</td><td>prompt模式下的输入框验证错误提示</td><td>String</td><td>—</td><td>‘’</td></tr><tr><td>input-validation</td><td>prompt模式下的正则验证</td><td>String</td><td>—</td><td>‘^[0-9]*$’</td></tr><tr><td>placeholder</td><td>prompt模式下的输入框占位提示</td><td>String</td><td>—</td><td>‘’</td></tr><tr><td>messagebox-custom-class</td><td>Model 自定义类名</td><td>Array/String</td><td>—</td><td>—</td></tr><tr><td>messagebox-custom-style</td><td>Model 自定义样式</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>mask</td><td>是否显示遮罩</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>mask-closable</td><td>是否点击遮罩关闭</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>mask-custom-class</td><td>遮罩自定义类名</td><td>Array/String</td><td>—</td><td>—</td></tr><tr><td>mask-custom-style</td><td>遮罩自定义样式</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>before-close</td><td>关闭前操作</td><td>Function() return false用于关闭</td><td>—</td><td>—</td></tr><tr><td>show-close-btn</td><td>是否显示关闭按钮</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>是否按下esc关闭弹窗</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="messagebox-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#messagebox-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> MessageBox 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-messagebox-width</td><td>–zmz-messagebox-width</td><td>460px</td><td>宽度</td></tr><tr><td>@zmz-messagebox-header-padding</td><td>–zmz-messagebox-header-padding</td><td>10px 15px</td><td>顶部内边距</td></tr><tr><td>@zmz-messagebox-body-padding</td><td>–zmz-messagebox-body-padding</td><td>10px 15px</td><td>内容内边距</td></tr><tr><td>@zmz-messagebox-footer-padding</td><td>–zmz-messagebox-footer-padding</td><td>10px 15px</td><td>底部内边距</td></tr><tr><td>@zmz-messagebox-border-radius</td><td>–zmz-messagebox-border-radius</td><td>3px</td><td>盒子圆角</td></tr><tr><td>@zmz-messagebox-margin-top</td><td>–zmz-messagebox-margin-top</td><td>15vh</td><td>盒子距离顶部距离</td></tr><tr><td>@zmz-messagebox-background-color</td><td>–zmz-messagebox-background-color</td><td>消息主题颜色</td><td>背景颜色</td></tr><tr><td>@zmz-messagebox-title-color</td><td>–zmz-messagebox-title-color</td><td>默认主题颜色</td><td>标题颜色</td></tr><tr><td>@zmz-messagebox-title-font-size</td><td>–zmz-messagebox-title-font-size</td><td>16px</td><td>标题大小</td></tr><tr><td>@zmz-messagebox-close-color</td><td>–zmz-messagebox-close-color</td><td>消息主题颜色</td><td>关闭图标颜色</td></tr><tr><td>@zmz-messagebox-close-size</td><td>–zmz-messagebox-close-size</td><td>12px</td><td>关闭图标大小</td></tr><tr><td>@zmz-messagebox-body-color</td><td>–zmz-messagebox-body-color</td><td>默认主题颜色</td><td>内容颜色</td></tr><tr><td>@zmz-messagebox-body-font-size</td><td>–zmz-messagebox-body-font-size</td><td>12px</td><td>内容字体大小</td></tr><tr><td>@zmz-messagebox-body-icon-color</td><td>–zmz-messagebox-body-icon-color</td><td>默认主题颜色</td><td>内容图标颜色</td></tr><tr><td>@zmz-messagebox-body-icon-font-size</td><td>–zmz-messagebox-body-icon-font-size</td><td>16px</td><td>内容图标大小</td></tr><tr><td>@zmz-messagebox-error-color</td><td>–zmz-messagebox-error-color</td><td>错误主题颜色</td><td>错误文字颜色</td></tr><tr><td>@zmz-messagebox-error-font-size</td><td>–zmz-messagebox-error-font-size</td><td>12px</td><td>错误文字大小</td></tr></tbody></table></div>',7))])}const k=p(y,[["render",b]]);export{k as default};
