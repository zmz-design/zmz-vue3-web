import{_ as v,c as u,d as m,a as o,e,w as t,b as l,r as c,o as F,t as z}from"./index-DyRJxyCP.js";const f={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Popover 悬浮层提示"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),disabled:!0,popover:!1,popover2:!1,popover3:!1,popover4:!1,popover5:!1,popover6:!1,popover7:!1}},methods:{currentConfig(y){return this.$setting.currentConfig[y]}}},B={class:"zmz-markdown-article"},b={class:"demo-block"},g={class:"demo-block"},D={class:"demo-block"},k={style:{"margin-top":"10px","text-align":"right"}},h={class:"demo-block"};function C(y,s,x,A,n,w){const a=c("zmz-button"),r=c("zmz-popover"),E=c("zmz-space-item"),i=c("zmz-space"),d=c("demo-block");return F(),u("div",B,[s[34]||(s[34]=m('<h1 id="popover-%E6%82%AC%E6%B5%AE%E5%B1%82%E6%8F%90%E7%A4%BA" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#popover-%E6%82%AC%E6%B5%AE%E5%B1%82%E6%8F%90%E7%A4%BA">#</a> Popover 悬浮层提示</h1><hr><h2 id="%E6%A6%82%E8%BF%B0" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E6%A6%82%E8%BF%B0">#</a> 概述</h2><p>与tooltip文字提示类似，Popover 悬浮层扩展内容性更强。</p><h2 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">#</a> 基础用法</h2>',5)),o("div",b,[e(i,null,{default:t(()=>[e(E,null,{default:t(()=>[e(r,{modelValue:n.popover,"onUpdate:modelValue":s[0]||(s[0]=p=>n.popover=p),placement:"top-start",title:"hover激活标题",content:"这是一段激活内容,这是一段激活内容,这是一段激活内容"},{default:t(()=>[e(a,null,{default:t(()=>[...s[10]||(s[10]=[l("hover激活",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(E,null,{default:t(()=>[e(r,{modelValue:n.popover2,"onUpdate:modelValue":s[1]||(s[1]=p=>n.popover2=p),placement:"top",trigger:"click",title:"click激活标题",content:"这是一段激活内容,这是一段激活内容,这是一段激活内容"},{default:t(()=>[e(a,null,{default:t(()=>[...s[11]||(s[11]=[l("click激活",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(E,null,{default:t(()=>[e(r,{modelValue:n.popover3,"onUpdate:modelValue":s[2]||(s[2]=p=>n.popover3=p),placement:"top-end",trigger:"focus",title:"focus激活标题",content:"这是一段激活内容,这是一段激活内容,这是一段激活内容"},{default:t(()=>[e(a,null,{default:t(()=>[...s[12]||(s[12]=[l("focus激活",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),e(d,null,{desc:t(()=>[...s[13]||(s[13]=[])]),highlight:t(()=>[...s[14]||(s[14]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"popover"'),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"top-start"'),o("span",{style:{color:"#B392F0"}}," title"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"hover激活标题"'),o("span",{style:{color:"#B392F0"}}," content"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"这是一段激活内容,这是一段激活内容,这是一段激活内容"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">hover激活</"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"popover2"'),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"top"'),o("span",{style:{color:"#B392F0"}}," trigger"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"click"'),o("span",{style:{color:"#B392F0"}}," title"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"click激活标题"'),o("span",{style:{color:"#B392F0"}}," content"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"这是一段激活内容,这是一段激活内容,这是一段激活内容"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">click激活</"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"popover3"'),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"top-end"'),o("span",{style:{color:"#B392F0"}}," trigger"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"focus"'),o("span",{style:{color:"#B392F0"}}," title"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"focus激活标题"'),o("span",{style:{color:"#B392F0"}}," content"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"这是一段激活内容,这是一段激活内容,这是一段激活内容"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">focus激活</"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"  export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            popover: "),o("span",{style:{color:"#79B8FF"}},"false"),o("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            popover2: "),o("span",{style:{color:"#79B8FF"}},"false"),o("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            popover3: "),o("span",{style:{color:"#79B8FF"}},"false")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        }  ")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:t(()=>[...s[15]||(s[15]=[])]),default:t(()=>[s[16]||(s[16]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-popover v-model="popover" placement="top-start" title="hover激活标题" content="这是一段激活内容,这是一段激活内容,这是一段激活内容">
                    <zmz-button>hover激活</zmz-button>
                </zmz-popover>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-popover v-model="popover2" placement="top" trigger="click" title="click激活标题" content="这是一段激活内容,这是一段激活内容,这是一段激活内容">
                    <zmz-button>click激活</zmz-button>
                </zmz-popover>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-popover v-model="popover3" placement="top-end" trigger="focus" title="focus激活标题" content="这是一段激活内容,这是一段激活内容,这是一段激活内容">
                    <zmz-button>focus激活</zmz-button>
                </zmz-popover>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            popover: false,
            popover2: false,
            popover3: false
        }  
    }
  }
<\/script>
`)],-1))]),_:1}),s[35]||(s[35]=o("h2",{id:"%E7%A6%81%E7%94%A8%E7%94%A8%E6%B3%95",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E7%94%A8%E6%B3%95"},"#"),l(" 禁用用法")],-1)),s[36]||(s[36]=o("p",null,[l("添加属性"),o("code",null,"disabled")],-1)),o("div",g,[e(r,{modelValue:n.popover4,"onUpdate:modelValue":s[4]||(s[4]=p=>n.popover4=p),disabled:n.disabled,content:"点击关闭popover功能"},{default:t(()=>[e(a,{onClick:s[3]||(s[3]=p=>n.disabled=!n.disabled)},{default:t(()=>[l("点击"+z(n.disabled?"开启":"关闭")+"popover功能",1)]),_:1})]),_:1},8,["modelValue","disabled"])]),e(d,null,{desc:t(()=>[...s[17]||(s[17]=[])]),highlight:t(()=>[...s[18]||(s[18]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"popover4"'),o("span",{style:{color:"#B392F0"}}," :disabled"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"disabled"'),o("span",{style:{color:"#B392F0"}}," content"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"点击关闭popover功能"'),o("span",{style:{color:"#E1E4E8"}}," >")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#B392F0"}}," @click"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"disabled = !disabled"'),o("span",{style:{color:"#E1E4E8"}},">点击{{disabled?'开启':'关闭'}}popover功能</"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"  export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            disabled: "),o("span",{style:{color:"#79B8FF"}},"true"),o("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            popover4: "),o("span",{style:{color:"#79B8FF"}},"false")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        }  ")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:t(()=>[...s[19]||(s[19]=[])]),default:t(()=>[s[20]||(s[20]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-popover v-model="popover4" :disabled="disabled" content="点击关闭popover功能" >
            <zmz-button @click="disabled = !disabled">点击{{disabled?'开启':'关闭'}}popover功能</zmz-button>
        </zmz-popover>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            disabled: true,
            popover4: false
        }  
    }
  }
<\/script>
`)],-1))]),_:1}),s[37]||(s[37]=o("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9"},"#"),l(" 自定义内容")],-1)),o("div",D,[e(r,{placement:"top",trigger:"click",modelValue:n.popover5,"onUpdate:modelValue":s[7]||(s[7]=p=>n.popover5=p)},{content:t(()=>[s[23]||(s[23]=o("div",null,"这里是自定义popover提示内容",-1)),o("div",k,[e(a,{text:"",size:"mini",style:{color:"#fff"},onClick:s[5]||(s[5]=p=>n.popover5=!1)},{default:t(()=>[...s[21]||(s[21]=[l("取消",-1)])]),_:1}),e(a,{type:"primary",size:"mini",style:{"margin-left":"10px"},onClick:s[6]||(s[6]=p=>n.popover5=!1)},{default:t(()=>[...s[22]||(s[22]=[l("确认",-1)])]),_:1})])]),default:t(()=>[e(a,null,{default:t(()=>[l("自定义内容,当前状态"+z(n.popover5),1)]),_:1})]),_:1},8,["modelValue"])]),e(d,null,{desc:t(()=>[...s[24]||(s[24]=[])]),highlight:t(()=>[...s[25]||(s[25]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"top"'),o("span",{style:{color:"#B392F0"}}," trigger"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"click"'),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"popover5"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}}," #"),o("span",{style:{color:"#B392F0"}},"content"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">这里是自定义popover提示内容</"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," style"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"margin-top:10px;text-align:right;"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#B392F0"}}," text"),o("span",{style:{color:"#B392F0"}}," style"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"color:#fff;"'),o("span",{style:{color:"#B392F0"}}," @click"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"popover5 = false"'),o("span",{style:{color:"#E1E4E8"}},">取消</"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#B392F0"}}," type"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"primary"'),o("span",{style:{color:"#B392F0"}}," size"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"mini"'),o("span",{style:{color:"#B392F0"}}," style"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"margin-left:10px;"'),o("span",{style:{color:"#B392F0"}},"  @click"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"popover5 = false"'),o("span",{style:{color:"#E1E4E8"}},">确认</"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">自定义内容,当前状态{{popover5}}</"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"  export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            popover5: "),o("span",{style:{color:"#79B8FF"}},"false")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        }  ")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:t(()=>[...s[26]||(s[26]=[])]),default:t(()=>[s[27]||(s[27]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-popover placement="top" trigger="click" v-model="popover5">
            <template #content>
                <div>这里是自定义popover提示内容</div>
                <div style="margin-top:10px;text-align:right;">
                    <zmz-button text style="color:#fff;" @click="popover5 = false">取消</zmz-button>
                    <zmz-button type="primary" size="mini" style="margin-left:10px;"  @click="popover5 = false">确认</zmz-button>
                </div>
            </template>
            <zmz-button>自定义内容,当前状态{{popover5}}</zmz-button>
        </zmz-popover>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            popover5: false
        }  
    }
  }
<\/script>
`)],-1))]),_:1}),s[38]||(s[38]=o("h2",{id:"%E4%B8%BB%E9%A2%98",tabindex:"-1"},[o("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%BB%E9%A2%98"},"#"),l(" 主题")],-1)),o("div",h,[e(i,null,{default:t(()=>[e(E,null,{default:t(()=>[e(r,{placement:"top",effect:"black",content:"默认黑主题",modelValue:n.popover6,"onUpdate:modelValue":s[8]||(s[8]=p=>n.popover6=p)},{default:t(()=>[e(a,null,{default:t(()=>[...s[28]||(s[28]=[l("默认黑主题",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(E,null,{default:t(()=>[e(r,{placement:"top",effect:"white",content:"白主题",modelValue:n.popover7,"onUpdate:modelValue":s[9]||(s[9]=p=>n.popover7=p)},{default:t(()=>[e(a,null,{default:t(()=>[...s[29]||(s[29]=[l("白主题",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),e(d,null,{desc:t(()=>[...s[30]||(s[30]=[])]),highlight:t(()=>[...s[31]||(s[31]=[o("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    <"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#B392F0"}}," class"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"demo-block"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        <"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"top"'),o("span",{style:{color:"#B392F0"}}," effect"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"black"'),o("span",{style:{color:"#B392F0"}}," content"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"默认黑主题"'),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"popover6"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">默认黑主题</"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            <"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                <"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#B392F0"}}," placement"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"top"'),o("span",{style:{color:"#B392F0"}}," effect"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"white"'),o("span",{style:{color:"#B392F0"}}," content"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"白主题"'),o("span",{style:{color:"#B392F0"}}," v-model"),o("span",{style:{color:"#E1E4E8"}},"="),o("span",{style:{color:"#9ECBFF"}},'"popover7"'),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                    <"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">白主题</"),o("span",{style:{color:"#85E89D"}},"zmz-button"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"                </"),o("span",{style:{color:"#85E89D"}},"zmz-popover"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            </"),o("span",{style:{color:"#85E89D"}},"zmz-space-item"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        </"),o("span",{style:{color:"#85E89D"}},"zmz-space"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    </"),o("span",{style:{color:"#85E89D"}},"div"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"template"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"<"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"  export"),o("span",{style:{color:"#F97583"}}," default"),o("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"    data"),o("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"        return"),o("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            popover6: "),o("span",{style:{color:"#79B8FF"}},"false"),o("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"            popover7: "),o("span",{style:{color:"#79B8FF"}},"false")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"        }  ")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E1E4E8"}},"</"),o("span",{style:{color:"#85E89D"}},"script"),o("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),o("span",{class:"line"})])],-1)])]),code:t(()=>[...s[32]||(s[32]=[])]),default:t(()=>[s[33]||(s[33]=o("pre",null,[o("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-space-item>
                <zmz-popover placement="top" effect="black" content="默认黑主题" v-model="popover6">
                    <zmz-button>默认黑主题</zmz-button>
                </zmz-popover>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-popover placement="top" effect="white" content="白主题" v-model="popover7">
                    <zmz-button>白主题</zmz-button>
                </zmz-popover>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            popover6: false,
            popover7: false
        }  
    }
  }
<\/script>
`)],-1))]),_:1}),s[39]||(s[39]=m('<h2 id="popover-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#popover-%E5%B1%9E%E6%80%A7">#</a> Popover 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>placement</td><td>展示位置</td><td><code>String</code></td><td>top-start/top/top-end/bottom-start/bottom/bottom-end/left-start/left/left-end/right-start/right/right-end</td><td>bottom</td></tr><tr><td>title</td><td>标题</td><td><code>String</code></td><td>—</td><td>—</td></tr><tr><td>content</td><td>内容</td><td><code>String</code></td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>Boolean</code></td><td>—</td><td>false</td></tr><tr><td>effect</td><td>主题</td><td><code>String</code></td><td>black/white</td><td>black</td></tr><tr><td>trigger</td><td>激活方式</td><td><code>String</code></td><td>hover/click/focus</td><td>hover</td></tr><tr><td>teleport</td><td>是否穿梭</td><td><code>Boolean</code></td><td>true/false</td><td>false</td></tr><tr><td>teleport-dom</td><td>Model 自身是否插入至 位置 元素</td><td><code>String</code></td><td>—</td><td>body</td></tr><tr><td>arrow</td><td>下拉盒子的角</td><td><code>Boolean</code></td><td>true/false</td><td>true</td></tr><tr><td>offset</td><td>盒子偏移</td><td><code>Array</code></td><td>—</td><td>[0, 10]</td></tr><tr><td>popper-options</td><td>popper2.js 的参数</td><td><code>Array</code></td><td>—</td><td>[]</td></tr></tbody></table></div><h2 id="popover-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#popover-%E6%96%B9%E6%B3%95">#</a> Popover 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>打开变化值改变时触发</td><td>function(value:true|false)</td></tr><tr><td>on-open-before</td><td>打开之前</td><td>—</td></tr><tr><td>on-open</td><td>打开中</td><td>—</td></tr><tr><td>on-open-after</td><td>打开之后</td><td>—</td></tr><tr><td>on-close-before</td><td>关闭之前</td><td>—</td></tr><tr><td>on-close</td><td>关闭中</td><td>—</td></tr><tr><td>on-close-after</td><td>关闭之后</td><td>—</td></tr></tbody></table></div><h2 id="popover-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#popover-%E6%8F%92%E6%A7%BD">#</a> Popover 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>content</td><td>自定义内容</td></tr></tbody></table></div><h2 id="popover-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#popover-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Popover 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-popover-min-width</td><td>–zmz-popover-min-width</td><td>10px</td><td>最新宽度</td></tr><tr><td>@zmz-popover-max-width</td><td>–zmz-popover-max-width</td><td>250px</td><td>最大宽度</td></tr><tr><td>@zmz-popover-title-line-height</td><td>–zmz-popover-title-line-height</td><td>1.2</td><td>行高</td></tr><tr><td>@zmz-popover-content-line-height</td><td>–zmz-popover-content-line-height</td><td>1.2</td><td>行高</td></tr><tr><td>@zmz-popover-border-radius</td><td>–zmz-popover-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-popover-title-color</td><td>–zmz-popover-title-color</td><td>#fff</td><td>标题颜色</td></tr><tr><td>@zmz-popover-title-font-size</td><td>–zmz-popover-title-font-size</td><td>12px</td><td>标题字体大小</td></tr><tr><td>@zmz-popover-title-margin-bottom</td><td>–zmz-popover-title-margin-bottom</td><td>12px</td><td>标题下边距</td></tr><tr><td>@zmz-popover-content-color</td><td>–zmz-popover-content-color</td><td>#fff</td><td>内容颜色</td></tr><tr><td>@zmz-popover-content-font-size</td><td>–zmz-popover-content-font-size</td><td>12px</td><td>内容字体大小</td></tr><tr><td>@zmz-popover-background-color</td><td>–zmz-popover-background-color</td><td>#2e3133</td><td>背景颜色</td></tr><tr><td>@zmz-popover-padding</td><td>–zmz-popover-padding</td><td>10px</td><td>内容边距</td></tr><tr><td>@zmz-popover-box-shadow</td><td>–zmz-popover-box-shadow</td><td>0 1px 6px rgba(0, 0, 0, .39)</td><td>背景阴影</td></tr></tbody></table></div>',8))])}const S=v(f,[["render",C]]);export{S as default};
