import{_ as J,c as g,a as l,b as s,e,w as n,d as K,r as p,o as z,F as v,f as D,g as k}from"./index-Bfn7SEZ2.js";const M={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},methods:{currentConfig(d){return this.$setting.currentConfig[d]},add(){this.model4.items.push({label:"新增",value:""})},del(){this.model4.items.splice(-1)},resetFields(d){this.$refs[d].resetFields()},clearsAll(d){this.$refs[d].clearValidate()},clears(d,o){this.$refs[d].clearValidate(o)},onSubmit(d){this.$refs[d].validate(o=>{o?this.$message.success("效验成功"):this.$message.error("校验失败")})}},data(){var d=(a,r,c)=>{if(!r)return c(new Error("年龄不能为空"));setTimeout(()=>{r<18?c(new Error("必须年满18岁")):c()},1e3)},o=(a,r,c)=>{r===""?c(new Error("请输入密码")):(this.model2.password2!==""&&this.$refs.myForms.validateField("password2"),c())},w=(a,r,c)=>{r===""?c(new Error("请再次输入密码")):r!==this.model2.password?c(new Error("两次输入密码不一致!")):c()};const V=()=>{const a=[];for(let r=1;r<=15;r++)a.push({key:r,label:`左选项 ${r}`,disabled:r%4===0});return a};return{title:"Form 表单"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),data:"right",size:"default",model:{input:"",select:"",radio:"",datepicker:"",slider:"",checkbox:[],switch:!0,textarea:"",cascader:[],colorpicker:"",timepicker:"",inputnumber:1,rate:"",upload:[],transfer:[]},model2:{password:"",username:""},model3:{password:"",password2:"",age:""},model4:{items:[{label:"新增",value:""}]},rules:{input:[{required:!0,message:"请输入",trigger:"blur"}],select:[{required:!0,message:"请选择",trigger:"change"}],radio:[{required:!0,message:"请选择",trigger:"change"}],datepicker:[{required:!0,type:"date",message:"请选择",trigger:"change"}],checkbox:[{required:!0,type:"array",message:"请选择",trigger:"change"}],textarea:[{required:!0,message:"请输入",trigger:"blur"}],cascader:[{required:!0,type:"array",message:"请选择",trigger:"change"}],colorpicker:[{required:!0,message:"请选择",trigger:"blur"}],rate:[{required:!0,type:"number",message:"请选择",trigger:"change"}],upload:[{required:!0,type:"array",message:"请选择",trigger:"change"}],timepicker:[{required:!0,type:"date",message:"请选择",trigger:"change"}]},rules2:{password:[{required:!0,message:"请输入",trigger:"blur"}],username:[{required:!0,message:"请输入",trigger:"blur"}]},rules3:{password:[{validator:o,trigger:"blur"}],password2:[{validator:w,trigger:"blur"}],age:[{validator:d,type:"string",trigger:"blur"}]},transferList:V(),input:"",options:[{value:"member",label:"会员"},{value:"people",label:"普通"},{value:"admin",label:"超级管理员"}],options2:[{value:"zhinan",label:"指南",disabled:!0,children:[{value:"jieshao",label:"介绍",children:[{value:"texing",label:"特性"}]},{value:"anzhuang",label:"安装",children:[{value:"npmanzhuang",label:"npm 安装"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"基础",children:[{value:"icon",label:"Icon 图标"}]}]}]}}},Q={class:"zmz-markdown-article"},R={class:"demo-block"},W={style:{width:"500px"}},X={class:"demo-block"},Y={class:"demo-block"},Z={style:{"margin-bottom":"20px"}},_={style:{width:"500px"}},$={class:"demo-block"},ll={style:{width:"500px"}},sl={class:"demo-block"},ol={style:{"margin-bottom":"20px"}},el={style:{width:"500px"}},nl={class:"demo-block"},al={class:"zmz-mb-20"},El={style:{width:"500px"}};function tl(d,o,w,V,a,r){const c=p("zmz-input"),t=p("zmz-form-item"),h=p("zmz-select-option"),x=p("zmz-select"),y=p("zmz-radio"),C=p("zmz-radio-group"),A=p("zmz-slider"),u=p("zmz-checkbox"),q=p("zmz-checkbox-group"),U=p("zmz-switch"),S=p("zmz-inputnumber"),j=p("zmz-datepicker"),P=p("zmz-timepicker"),L=p("zmz-cascader"),I=p("zmz-colorpicker"),T=p("zmz-textarea"),N=p("zmz-rate"),O=p("zmz-upload"),G=p("zmz-transfer"),i=p("zmz-button"),m=p("zmz-space-item"),B=p("zmz-space"),b=p("zmz-form"),f=p("demo-block");return z(),g("div",Q,[o[108]||(o[108]=l("h1",{id:"form-%E8%A1%A8%E5%8D%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#form-%E8%A1%A8%E5%8D%95"},"#"),s(" Form 表单")],-1)),o[109]||(o[109]=l("hr",null,null,-1)),o[110]||(o[110]=l("p",null,"由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据",-1)),o[111]||(o[111]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),l("div",R,[l("div",W,[e(b,{model:a.model,rules:a.rules,ref:"oneForm","placeholder-prefix-select":"请选择","placeholder-prefix-input":"请输入","label-width":"100px"},{default:n(()=>[e(t,{label:"输入框",prop:"input"},{default:n(()=>[e(c,{modelValue:a.model.input,"onUpdate:modelValue":o[0]||(o[0]=E=>a.model.input=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"下拉框",prop:"select"},{default:n(()=>[e(x,{modelValue:a.model.select,"onUpdate:modelValue":o[1]||(o[1]=E=>a.model.select=E)},{default:n(()=>[(z(!0),g(v,null,D(a.options,(E,F)=>(z(),k(h,{value:E.value,label:E.label,key:F},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"单选框",prop:"radio"},{default:n(()=>[e(C,{modelValue:a.model.radio,"onUpdate:modelValue":o[2]||(o[2]=E=>a.model.radio=E)},{default:n(()=>[e(y,{label:"男",value:"1"},{default:n(()=>[...o[48]||(o[48]=[s("男",-1)])]),_:1}),e(y,{label:"女",value:"0"},{default:n(()=>[...o[49]||(o[49]=[s("女",-1)])]),_:1}),e(y,{label:"未知",value:"2"},{default:n(()=>[...o[50]||(o[50]=[s("未知",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"滑块",prop:"slider"},{default:n(()=>[e(A,{modelValue:a.model.slider,"onUpdate:modelValue":o[3]||(o[3]=E=>a.model.slider=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"复选框",prop:"checkbox"},{default:n(()=>[e(q,{modelValue:a.model.checkbox,"onUpdate:modelValue":o[4]||(o[4]=E=>a.model.checkbox=E)},{default:n(()=>[e(u,{label:"篮球",value:"1"},{default:n(()=>[...o[51]||(o[51]=[s("篮球",-1)])]),_:1}),e(u,{label:"游泳",value:"2"},{default:n(()=>[...o[52]||(o[52]=[s("游泳",-1)])]),_:1}),e(u,{label:"健身",value:"3"},{default:n(()=>[...o[53]||(o[53]=[s("健身",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"开关",prop:"switch"},{default:n(()=>[e(U,{modelValue:a.model.switch,"onUpdate:modelValue":o[5]||(o[5]=E=>a.model.switch=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"数字输入框",prop:"inputnumber"},{default:n(()=>[e(S,{modelValue:a.model.inputnumber,"onUpdate:modelValue":o[6]||(o[6]=E=>a.model.inputnumber=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"日期选择器",prop:"datepicker"},{default:n(()=>[e(j,{modelValue:a.model.datepicker,"onUpdate:modelValue":o[7]||(o[7]=E=>a.model.datepicker=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"时间选择器",prop:"timepicker"},{default:n(()=>[e(P,{modelValue:a.model.timepicker,"onUpdate:modelValue":o[8]||(o[8]=E=>a.model.timepicker=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"级联选择器",prop:"cascader"},{default:n(()=>[e(L,{modelValue:a.model.cascader,"onUpdate:modelValue":o[9]||(o[9]=E=>a.model.cascader=E),options:a.options2},null,8,["modelValue","options"])]),_:1}),e(t,{label:"颜色选择器",prop:"colorpicker"},{default:n(()=>[e(I,{modelValue:a.model.colorpicker,"onUpdate:modelValue":o[10]||(o[10]=E=>a.model.colorpicker=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"文本域",prop:"textarea"},{default:n(()=>[e(T,{modelValue:a.model.textarea,"onUpdate:modelValue":o[11]||(o[11]=E=>a.model.textarea=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"评价",prop:"rate"},{default:n(()=>[e(N,{modelValue:a.model.rate,"onUpdate:modelValue":o[12]||(o[12]=E=>a.model.rate=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"上传"},{default:n(()=>[e(O,{modelValue:a.model.upload,"onUpdate:modelValue":o[13]||(o[13]=E=>a.model.upload=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"穿梭框",prop:"transfer",rules:[{required:!0,type:"array",message:"请选择",trigger:"change"}]},{default:n(()=>[e(G,{modelValue:a.model.transfer,"onUpdate:modelValue":o[14]||(o[14]=E=>a.model.transfer=E),data:a.transferList},null,8,["modelValue","data"])]),_:1}),e(t,null,{default:n(()=>[e(B,null,{default:n(()=>[e(m,null,{default:n(()=>[e(i,{type:"primary",onClick:o[15]||(o[15]=E=>r.onSubmit("oneForm"))},{default:n(()=>[...o[54]||(o[54]=[s("确认",-1)])]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(i,{onClick:o[16]||(o[16]=E=>r.resetFields("oneForm"))},{default:n(()=>[...o[55]||(o[55]=[s("重置",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),e(f,null,{desc:n(()=>[...o[56]||(o[56]=[])]),highlight:n(()=>[...o[57]||(o[57]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:500px"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#B392F0"}}," :model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model"'),l("span",{style:{color:"#B392F0"}}," :rules"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"rules"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"oneForm"'),l("span",{style:{color:"#B392F0"}}," placeholder-prefix-select"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," placeholder-prefix-input"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请输入"'),l("span",{style:{color:"#B392F0"}}," label-width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"100px"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"输入框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.input"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"下拉框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.select"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(item,index) in options"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.value"'),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.label"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"index"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.radio"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"男"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},">男</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"女"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"0"'),l("span",{style:{color:"#E1E4E8"}},">女</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"未知"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},">未知</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"滑块"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"slider"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.slider"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.checkbox"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"篮球"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},">篮球</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"游泳"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},">游泳</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"健身"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">健身</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"开关"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"switch"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-switch"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.switch"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-switch"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"数字输入框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"inputnumber"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-inputnumber"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.inputnumber"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-inputnumber"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"日期选择器"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"datepicker"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-datepicker"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.datepicker"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-datepicker"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"时间选择器"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"timepicker"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-timepicker"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.timepicker"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-timepicker"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"级联选择器"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"颜色选择器"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"colorpicker"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-colorpicker"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.colorpicker"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-colorpicker"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"文本域"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"textarea"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-textarea"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.textarea"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-textarea"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"评价"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"rate"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-rate"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.rate"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-rate"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"上传"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.upload"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-upload"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"穿梭框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"transfer"'),l("span",{style:{color:"#B392F0"}}," :rules"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"[{ required: true, type: 'array', message: '请选择' , trigger: 'change'}]"`),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.transfer"'),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"transferList"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-transfer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"onSubmit('oneForm')"`),l("span",{style:{color:"#E1E4E8"}},">确认</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"resetFields('oneForm')"`),l("span",{style:{color:"#E1E4E8"}},">重置</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        resetFields"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"resetFields"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onSubmit"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"validate"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"res"),l("span",{style:{color:"#F97583"}}," =>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"                if"),l("span",{style:{color:"#E1E4E8"}}," (res) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"success"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'效验成功'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'校验失败'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        const"),l("span",{style:{color:"#B392F0"}}," generateData"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," () "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            const"),l("span",{style:{color:"#79B8FF"}}," data"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," [];")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            for"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," i "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," 1"),l("span",{style:{color:"#E1E4E8"}},"; i "),l("span",{style:{color:"#F97583"}},"<="),l("span",{style:{color:"#79B8FF"}}," 15"),l("span",{style:{color:"#E1E4E8"}},"; i"),l("span",{style:{color:"#F97583"}},"++"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              data."),l("span",{style:{color:"#B392F0"}},"push"),l("span",{style:{color:"#E1E4E8"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                key: i,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                label: "),l("span",{style:{color:"#9ECBFF"}},"`左选项 ${"),l("span",{style:{color:"#E1E4E8"}}," i"),l("span",{style:{color:"#9ECBFF"}}," }`"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                disabled: i "),l("span",{style:{color:"#F97583"}},"%"),l("span",{style:{color:"#79B8FF"}}," 4"),l("span",{style:{color:"#F97583"}}," ==="),l("span",{style:{color:"#79B8FF"}}," 0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," data;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            model: { ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},", ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                select: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                radio: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                datepicker: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                slider: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                checkbox: [] ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                switch: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                textarea: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                cascader: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                colorpicker: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                timepicker: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                inputnumber: "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                rate: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                upload: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                transfer: []")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            transferList: "),l("span",{style:{color:"#B392F0"}},"generateData"),l("span",{style:{color:"#E1E4E8"}},"(),")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            input: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            rules: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请输入'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                select: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                radio: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                datepicker: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type:"),l("span",{style:{color:"#9ECBFF"}},"'date'"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                checkbox: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type:"),l("span",{style:{color:"#9ECBFF"}},"'array'"),l("span",{style:{color:"#E1E4E8"}},",message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                textarea: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请输入'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                cascader: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type: "),l("span",{style:{color:"#9ECBFF"}},"'array'"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                colorpicker: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                rate: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type: "),l("span",{style:{color:"#9ECBFF"}},"'number'"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                upload: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type: "),l("span",{style:{color:"#9ECBFF"}},"'array'"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                timepicker: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type: "),l("span",{style:{color:"#9ECBFF"}},"'date'"),l("span",{style:{color:"#E1E4E8"}},",message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'member'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'会员'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'people'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'普通'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'admin'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'超级管理员'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options2: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'zhinan'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'指南'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    disabled: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'jieshao'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'介绍'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'texing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'特性'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'anzhuang'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'安装'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'npmanzhuang'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'npm 安装'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'zujian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'组件'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'basic'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'基础'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'icon'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Icon 图标'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...o[58]||(o[58]=[])]),default:n(()=>[o[59]||(o[59]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="width:500px">
            <zmz-form :model="model" :rules="rules" ref="oneForm" placeholder-prefix-select="请选择" placeholder-prefix-input="请输入" label-width="100px">
                <zmz-form-item label="输入框" prop="input">
                    <zmz-input v-model="model.input"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="下拉框" prop="select">
                    <zmz-select v-model="model.select">
                    <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
                    </zmz-select>
                </zmz-form-item>
                <zmz-form-item label="单选框" prop="radio">
                    <zmz-radio-group v-model="model.radio">
                        <zmz-radio label="男" value="1">男</zmz-radio>
                        <zmz-radio label="女" value="0">女</zmz-radio>
                        <zmz-radio label="未知" value="2">未知</zmz-radio>
                    </zmz-radio-group>
                </zmz-form-item>
                <zmz-form-item label="滑块" prop="slider">
                    <zmz-slider v-model="model.slider"></zmz-slider>
                </zmz-form-item>
                <zmz-form-item label="复选框" prop="checkbox">
                    <zmz-checkbox-group v-model="model.checkbox">
                    <zmz-checkbox label="篮球" value="1">篮球</zmz-checkbox>
                    <zmz-checkbox label="游泳" value="2">游泳</zmz-checkbox>
                    <zmz-checkbox label="健身" value="3">健身</zmz-checkbox>
                    </zmz-checkbox-group>
                </zmz-form-item>
                <zmz-form-item label="开关" prop="switch">
                    <zmz-switch v-model="model.switch"></zmz-switch>
                </zmz-form-item>
                <zmz-form-item label="数字输入框" prop="inputnumber">
                    <zmz-inputnumber v-model="model.inputnumber"></zmz-inputnumber>
                </zmz-form-item>
                <zmz-form-item label="日期选择器" prop="datepicker">
                    <zmz-datepicker v-model="model.datepicker"></zmz-datepicker>
                </zmz-form-item>
                <zmz-form-item label="时间选择器" prop="timepicker">
                    <zmz-timepicker v-model="model.timepicker"></zmz-timepicker>
                </zmz-form-item>
                <zmz-form-item label="级联选择器" prop="cascader">
                    <zmz-cascader v-model="model.cascader" :options="options2"></zmz-cascader>
                </zmz-form-item>
                <zmz-form-item label="颜色选择器" prop="colorpicker">
                    <zmz-colorpicker v-model="model.colorpicker"></zmz-colorpicker>
                </zmz-form-item>
                <zmz-form-item label="文本域" prop="textarea">
                    <zmz-textarea v-model="model.textarea"></zmz-textarea>
                </zmz-form-item>
                <zmz-form-item label="评价" prop="rate">
                    <zmz-rate v-model="model.rate"></zmz-rate>
                </zmz-form-item>
                <zmz-form-item label="上传">
                    <zmz-upload v-model="model.upload"></zmz-upload>
                </zmz-form-item>
                <zmz-form-item label="穿梭框" prop="transfer" :rules="[{ required: true, type: 'array', message: '请选择' , trigger: 'change'}]">
                    <zmz-transfer v-model="model.transfer" :data="transferList"></zmz-transfer>
                </zmz-form-item>
                <zmz-form-item>
                    <zmz-space>
                        <zmz-space-item><zmz-button type="primary" @click="onSubmit('oneForm')">确认</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="resetFields('oneForm')">重置</zmz-button></zmz-space-item>
                    </zmz-space>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        resetFields(name) {
            this.$refs[name].resetFields()
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    },
    data() {
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: \`左选项 \${ i }\`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            model: { 
                input: '', 
                select: '' ,
                radio: '' ,
                datepicker: '' ,
                slider: '' ,
                checkbox: [] ,
                switch: true,
                textarea: '',
                cascader: [],
                colorpicker: '',
                timepicker: '',
                inputnumber: 1,
                rate: '',
                upload: [],
                transfer: []
            },
            transferList: generateData(),
            input: '',
            rules: {
                input: [{ required: true, message: '请输入' , trigger: 'blur'}],
                select: [{ required: true, message: '请选择' , trigger: 'change'}],
                radio: [{ required: true, message: '请选择' , trigger: 'change'}],
                datepicker: [{ required: true, type:'date', message: '请选择' , trigger: 'change'}],
                checkbox: [{ required: true, type:'array',message: '请选择' , trigger: 'change'}],
                textarea: [{ required: true, message: '请输入' , trigger: 'blur'}],
                cascader: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                colorpicker: [{ required: true, message: '请选择' , trigger: 'blur'}],
                rate: [{ required: true, type: 'number', message: '请选择' , trigger: 'change'}],
                upload: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                timepicker: [{ required: true, type: 'date',message: '请选择' , trigger: 'change'}],
            },
            options: [
                {
                    value: 'member',
                    label: '会员'
                },
                {
                    value: 'people',
                    label: '普通'
                },
                {
                    value: 'admin',
                    label: '超级管理员'
                }
            ],
            options2: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                }
                            ]
                        },
                    ]
                }
            ]
        };
    }
};
<\/script>
`)],-1))]),_:1}),o[112]||(o[112]=l("h2",{id:"%E8%A1%8C%E5%86%85%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%A1%8C%E5%86%85%E7%94%A8%E6%B3%95"},"#"),s(" 行内用法")],-1)),l("div",X,[e(b,{model:a.model2,rules:a.rules2,inline:!0,ref:"twoForm"},{default:n(()=>[e(t,{label:"用户名",prop:"username"},{default:n(()=>[e(c,{modelValue:a.model.username,"onUpdate:modelValue":o[17]||(o[17]=E=>a.model.username=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"密码",prop:"password"},{default:n(()=>[e(c,{modelValue:a.model.password,"onUpdate:modelValue":o[18]||(o[18]=E=>a.model.password=E)},null,8,["modelValue"])]),_:1}),e(t,null,{default:n(()=>[e(B,null,{default:n(()=>[e(m,null,{default:n(()=>[e(i,{type:"primary",onClick:o[19]||(o[19]=E=>r.onSubmit("twoForm"))},{default:n(()=>[...o[60]||(o[60]=[s("确认",-1)])]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(i,{onClick:o[20]||(o[20]=E=>r.resetFields("twoForm"))},{default:n(()=>[...o[61]||(o[61]=[s("重置",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),e(f,null,{desc:n(()=>[...o[62]||(o[62]=[])]),highlight:n(()=>[...o[63]||(o[63]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#B392F0"}}," :model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model2"'),l("span",{style:{color:"#B392F0"}}," :rules"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"rules2"'),l("span",{style:{color:"#B392F0"}}," :inline"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"true"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"twoForm"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"用户名"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"username"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.username"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"密码"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"password"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.password"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"onSubmit('twoForm')"`),l("span",{style:{color:"#E1E4E8"}},">确认</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"resetFields('twoForm')"`),l("span",{style:{color:"#E1E4E8"}},">重置</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            model2: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                password: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                username: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            rules2: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                password: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请输入'"),l("span",{style:{color:"#E1E4E8"}}," ,  trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                username: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请输入'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        resetFields"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"resetFields"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onSubmit"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"validate"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"res"),l("span",{style:{color:"#F97583"}}," =>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"                if"),l("span",{style:{color:"#E1E4E8"}}," (res) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"success"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'效验成功'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'校验失败'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...o[64]||(o[64]=[])]),default:n(()=>[o[65]||(o[65]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-form :model="model2" :rules="rules2" :inline="true" ref="twoForm">
            <zmz-form-item label="用户名" prop="username">
                <zmz-input v-model="model.username"></zmz-input>
            </zmz-form-item>
            <zmz-form-item label="密码" prop="password">
                <zmz-input v-model="model.password"></zmz-input>
            </zmz-form-item>
            <zmz-form-item>
                <zmz-space>
                    <zmz-space-item><zmz-button type="primary" @click="onSubmit('twoForm')">确认</zmz-button></zmz-space-item>
                    <zmz-space-item><zmz-button @click="resetFields('twoForm')">重置</zmz-button></zmz-space-item>
                </zmz-space>
            </zmz-form-item>
        </zmz-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model2: {
                password: '',
                username: '',
            },
            rules2: {
                password: [{ required: true, message: '请输入' ,  trigger: 'blur'}],
                username: [{ required: true, message: '请输入' , trigger: 'blur'}],
            },
        };
    },
    methods: {
        resetFields(name) {
            this.$refs[name].resetFields()
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    }
};
<\/script>
`)],-1))]),_:1}),o[113]||(o[113]=l("h2",{id:"%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F"},"#"),s(" 对齐方式")],-1)),l("div",Y,[l("div",Z,[e(C,{modelValue:a.data,"onUpdate:modelValue":o[21]||(o[21]=E=>a.data=E),button:""},{default:n(()=>[e(y,{value:"left"},{default:n(()=>[...o[66]||(o[66]=[s("左对齐",-1)])]),_:1}),e(y,{value:"right"},{default:n(()=>[...o[67]||(o[67]=[s("右对齐",-1)])]),_:1}),e(y,{value:"top"},{default:n(()=>[...o[68]||(o[68]=[s("顶部对齐",-1)])]),_:1})]),_:1},8,["modelValue"])]),l("div",_,[e(b,{model:a.model,ref:"myForm","label-width":"100px","label-position":a.data},{default:n(()=>[e(t,{label:"名称",prop:"input"},{default:n(()=>[e(c,{modelValue:a.model.input,"onUpdate:modelValue":o[22]||(o[22]=E=>a.model.input=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"下拉框",prop:"select"},{default:n(()=>[e(x,{modelValue:a.model.select,"onUpdate:modelValue":o[23]||(o[23]=E=>a.model.select=E)},{default:n(()=>[(z(!0),g(v,null,D(a.options,(E,F)=>(z(),k(h,{value:E.value,label:E.label,key:F},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"单选框",prop:"radio"},{default:n(()=>[e(C,{modelValue:a.model.radio,"onUpdate:modelValue":o[24]||(o[24]=E=>a.model.radio=E)},{default:n(()=>[e(y,{label:"男",value:"1"},{default:n(()=>[...o[69]||(o[69]=[s("男",-1)])]),_:1}),e(y,{label:"女",value:"0"},{default:n(()=>[...o[70]||(o[70]=[s("女",-1)])]),_:1}),e(y,{label:"未知",value:"2"},{default:n(()=>[...o[71]||(o[71]=[s("未知",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","label-position"])])]),e(f,null,{desc:n(()=>[...o[72]||(o[72]=[])]),highlight:n(()=>[...o[73]||(o[73]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-bottom: 20px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"left"'),l("span",{style:{color:"#E1E4E8"}},">左对齐</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},">右对齐</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"top"'),l("span",{style:{color:"#E1E4E8"}},">顶部对齐</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:500px"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#B392F0"}}," :model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"myForm"'),l("span",{style:{color:"#B392F0"}}," label-width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"100px"'),l("span",{style:{color:"#B392F0"}}," :label-position"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"名称"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.input"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"下拉框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.select"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                       <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(item,index) in options"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.value"'),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.label"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"index"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.radio"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"男"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},">男</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"女"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"0"'),l("span",{style:{color:"#E1E4E8"}},">女</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"未知"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},">未知</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            model: { ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},", ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                select: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                radio: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            transferList: "),l("span",{style:{color:"#B392F0"}},"generateData"),l("span",{style:{color:"#E1E4E8"}},"(),")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'left'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'member'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'会员'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'people'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'普通'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'admin'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'超级管理员'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...o[74]||(o[74]=[])]),default:n(()=>[o[75]||(o[75]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;">
            <zmz-radio-group v-model="data" button>
                <zmz-radio value="left">左对齐</zmz-radio>
                <zmz-radio value="right">右对齐</zmz-radio>
                <zmz-radio value="top">顶部对齐</zmz-radio>
            </zmz-radio-group>
        </div>
        <div style="width:500px">
            <zmz-form :model="model" ref="myForm" label-width="100px" :label-position="data">
                <zmz-form-item label="名称" prop="input">
                    <zmz-input v-model="model.input"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="下拉框" prop="select">
                    <zmz-select v-model="model.select">
                       <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
                    </zmz-select>
                </zmz-form-item>
                <zmz-form-item label="单选框" prop="radio">
                    <zmz-radio-group v-model="model.radio">
                        <zmz-radio label="男" value="1">男</zmz-radio>
                        <zmz-radio label="女" value="0">女</zmz-radio>
                        <zmz-radio label="未知" value="2">未知</zmz-radio>
                    </zmz-radio-group>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model: { 
                input: '', 
                select: '' ,
                radio: '' ,
            },
            transferList: generateData(),
            data: 'left',
            options: [
                {
                    value: 'member',
                    label: '会员'
                },
                {
                    value: 'people',
                    label: '普通'
                },
                {
                    value: 'admin',
                    label: '超级管理员'
                }
            ],
        };
    }
};
<\/script>
`)],-1))]),_:1}),o[114]||(o[114]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99"},"#"),s(" 自定义校验规则")],-1)),l("div",$,[l("div",ll,[e(b,{model:a.model3,rules:a.rules3,ref:"threeForms","label-width":"100px","label-position":a.data},{default:n(()=>[e(t,{label:"密码",prop:"password"},{default:n(()=>[e(c,{modelValue:a.model3.password,"onUpdate:modelValue":o[25]||(o[25]=E=>a.model3.password=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"确认密码",prop:"password2"},{default:n(()=>[e(c,{modelValue:a.model3.password2,"onUpdate:modelValue":o[26]||(o[26]=E=>a.model3.password2=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"年龄",prop:"age"},{default:n(()=>[e(c,{modelValue:a.model3.age,"onUpdate:modelValue":o[27]||(o[27]=E=>a.model3.age=E)},null,8,["modelValue"])]),_:1}),e(t,null,{default:n(()=>[e(B,null,{default:n(()=>[e(m,null,{default:n(()=>[e(i,{type:"primary",onClick:o[28]||(o[28]=E=>r.onSubmit("threeForms"))},{default:n(()=>[...o[76]||(o[76]=[s("确认",-1)])]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(i,{onClick:o[29]||(o[29]=E=>r.resetFields("threeForms"))},{default:n(()=>[...o[77]||(o[77]=[s("重置",-1)])]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(i,{onClick:o[30]||(o[30]=E=>r.clears("threeForms","age"))},{default:n(()=>[...o[78]||(o[78]=[s("清空年龄验证",-1)])]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(i,{onClick:o[31]||(o[31]=E=>r.clearsAll("threeForms"))},{default:n(()=>[...o[79]||(o[79]=[s("清空全部验证",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","label-position"])])]),e(f,null,{desc:n(()=>[...o[80]||(o[80]=[])]),highlight:n(()=>[...o[81]||(o[81]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:500px"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#B392F0"}}," :model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model3"'),l("span",{style:{color:"#B392F0"}}," :rules"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"rules3"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"threeForms"'),l("span",{style:{color:"#B392F0"}}," label-width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"100px"'),l("span",{style:{color:"#B392F0"}}," :label-position"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"密码"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"password"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model3.password"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"确认密码"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"password2"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model3.password2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"年龄"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"age"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model3.age"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"onSubmit('threeForms')"`),l("span",{style:{color:"#E1E4E8"}},">确认</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"resetFields('threeForms')"`),l("span",{style:{color:"#E1E4E8"}},">重置</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"clears('threeForms', 'age')"`),l("span",{style:{color:"#E1E4E8"}},">清空年龄验证</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"clearsAll('threeForms')"`),l("span",{style:{color:"#E1E4E8"}},">清空全部验证</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        resetFields"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"resetFields"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        clearsAll"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"clearValidate"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        clears"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"fileds"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"clearValidate"),l("span",{style:{color:"#E1E4E8"}},"(fileds)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onSubmit"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"validate"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"res"),l("span",{style:{color:"#F97583"}}," =>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"                if"),l("span",{style:{color:"#E1E4E8"}}," (res) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"success"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'效验成功'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'校验失败'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        var"),l("span",{style:{color:"#B392F0"}}," validateAge"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"rule"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"value"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"callback"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            if"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"!"),l("span",{style:{color:"#E1E4E8"}},"value) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"              return"),l("span",{style:{color:"#B392F0"}}," callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'年龄不能为空'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            setTimeout"),l("span",{style:{color:"#E1E4E8"}},"(() "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"              if"),l("span",{style:{color:"#E1E4E8"}}," (value "),l("span",{style:{color:"#F97583"}},"<"),l("span",{style:{color:"#79B8FF"}}," 18"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"                callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'必须年满18岁'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"                callback"),l("span",{style:{color:"#E1E4E8"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, "),l("span",{style:{color:"#79B8FF"}},"1000"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"          var"),l("span",{style:{color:"#B392F0"}}," validatePass"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"rule"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"value"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"callback"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            if"),l("span",{style:{color:"#E1E4E8"}}," (value "),l("span",{style:{color:"#F97583"}},"==="),l("span",{style:{color:"#9ECBFF"}}," ''"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'请输入密码'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"              if"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#79B8FF"}},"this"),l("span",{style:{color:"#E1E4E8"}},".model2.password2 "),l("span",{style:{color:"#F97583"}},"!=="),l("span",{style:{color:"#9ECBFF"}}," ''"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".$refs.myForms."),l("span",{style:{color:"#B392F0"}},"validateField"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'password2'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"          var"),l("span",{style:{color:"#B392F0"}}," validatePass2"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"rule"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"value"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"callback"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            if"),l("span",{style:{color:"#E1E4E8"}}," (value "),l("span",{style:{color:"#F97583"}},"==="),l("span",{style:{color:"#9ECBFF"}}," ''"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'请再次输入密码'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#F97583"}}," if"),l("span",{style:{color:"#E1E4E8"}}," (value "),l("span",{style:{color:"#F97583"}},"!=="),l("span",{style:{color:"#79B8FF"}}," this"),l("span",{style:{color:"#E1E4E8"}},".model2.password) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'两次输入密码不一致!'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'right'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            size: "),l("span",{style:{color:"#9ECBFF"}},"'default'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            model3: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                password: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                password2: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                age: "),l("span",{style:{color:"#9ECBFF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            rules3: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                password: [{ validator: validatePass , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                password2: [{ validator: validatePass2 , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                age: [{ validator: validateAge , type: "),l("span",{style:{color:"#9ECBFF"}},"'string'"),l("span",{style:{color:"#E1E4E8"}}," ,trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...o[82]||(o[82]=[])]),default:n(()=>[o[83]||(o[83]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="width:500px">
            <zmz-form :model="model3" :rules="rules3" ref="threeForms" label-width="100px" :label-position="data">
                <zmz-form-item label="密码" prop="password">
                    <zmz-input v-model="model3.password"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="确认密码" prop="password2">
                    <zmz-input v-model="model3.password2"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="年龄" prop="age">
                    <zmz-input v-model="model3.age"></zmz-input>
                </zmz-form-item>
                <zmz-form-item>
                    <zmz-space>
                        <zmz-space-item><zmz-button type="primary" @click="onSubmit('threeForms')">确认</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="resetFields('threeForms')">重置</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="clears('threeForms', 'age')">清空年龄验证</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="clearsAll('threeForms')">清空全部验证</zmz-button></zmz-space-item>
                    </zmz-space>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        resetFields(name) {
            this.$refs[name].resetFields()
        },
        clearsAll(name) {
            this.$refs[name].clearValidate()
        },
        clears(name, fileds) {
            this.$refs[name].clearValidate(fileds)
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    },
    data() {
        var validateAge = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }, 1000);
          };
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.model2.password2 !== '') {
                this.$refs.myForms.validateField('password2');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.model2.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
        return {
            data: 'right',
            size: 'default',
            model3: {
                password: '',
                password2: '',
                age: ''
            },
            rules3: {
                password: [{ validator: validatePass , trigger: 'blur'}],
                password2: [{ validator: validatePass2 , trigger: 'blur'}],
                age: [{ validator: validateAge , type: 'string' ,trigger: 'blur'}]
            }
        };
    }
};
<\/script>
`)],-1))]),_:1}),o[115]||(o[115]=l("h2",{id:"%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8"},"#"),s(" 不同尺寸")],-1)),l("div",sl,[l("div",ol,[e(C,{modelValue:a.size,"onUpdate:modelValue":o[32]||(o[32]=E=>a.size=E),button:""},{default:n(()=>[e(y,{value:"large"},{default:n(()=>[...o[84]||(o[84]=[s("超大",-1)])]),_:1}),e(y,{value:"medium"},{default:n(()=>[...o[85]||(o[85]=[s("中等",-1)])]),_:1}),e(y,{value:"default"},{default:n(()=>[...o[86]||(o[86]=[s("默认",-1)])]),_:1}),e(y,{value:"small"},{default:n(()=>[...o[87]||(o[87]=[s("小",-1)])]),_:1}),e(y,{value:"mini"},{default:n(()=>[...o[88]||(o[88]=[s("迷你",-1)])]),_:1})]),_:1},8,["modelValue"])]),l("div",el,[e(b,{model:a.model,rules:a.rules,ref:"fourForm","label-width":"100px",size:a.size},{default:n(()=>[e(t,{label:"输入框",prop:"input"},{default:n(()=>[e(c,{modelValue:a.model.input,"onUpdate:modelValue":o[33]||(o[33]=E=>a.model.input=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"下拉框",prop:"select"},{default:n(()=>[e(x,{modelValue:a.model.select,"onUpdate:modelValue":o[34]||(o[34]=E=>a.model.select=E)},{default:n(()=>[(z(!0),g(v,null,D(a.options,(E,F)=>(z(),k(h,{value:E.value,label:E.label,key:F},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"单选框",prop:"radio"},{default:n(()=>[e(C,{modelValue:a.model.radio,"onUpdate:modelValue":o[35]||(o[35]=E=>a.model.radio=E)},{default:n(()=>[e(y,{label:"男",value:"1"},{default:n(()=>[...o[89]||(o[89]=[s("男",-1)])]),_:1}),e(y,{label:"女",value:"0"},{default:n(()=>[...o[90]||(o[90]=[s("女",-1)])]),_:1}),e(y,{label:"未知",value:"2"},{default:n(()=>[...o[91]||(o[91]=[s("未知",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"滑块",prop:"slider"},{default:n(()=>[e(A,{modelValue:a.model.slider,"onUpdate:modelValue":o[36]||(o[36]=E=>a.model.slider=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"复选框",prop:"checkbox"},{default:n(()=>[e(q,{modelValue:a.model.checkbox,"onUpdate:modelValue":o[37]||(o[37]=E=>a.model.checkbox=E)},{default:n(()=>[e(u,{label:"篮球",value:"1"},{default:n(()=>[...o[92]||(o[92]=[s("篮球",-1)])]),_:1}),e(u,{label:"游泳",value:"2"},{default:n(()=>[...o[93]||(o[93]=[s("游泳",-1)])]),_:1}),e(u,{label:"健身",value:"3"},{default:n(()=>[...o[94]||(o[94]=[s("健身",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"开关",prop:"switch"},{default:n(()=>[e(U,{modelValue:a.model.switch,"onUpdate:modelValue":o[38]||(o[38]=E=>a.model.switch=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"数字输入框",prop:"inputnumber"},{default:n(()=>[e(S,{modelValue:a.model.inputnumber,"onUpdate:modelValue":o[39]||(o[39]=E=>a.model.inputnumber=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"日期选择器",prop:"datepicker"},{default:n(()=>[e(j,{modelValue:a.model.datepicker,"onUpdate:modelValue":o[40]||(o[40]=E=>a.model.datepicker=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"时间选择器",prop:"timepicker"},{default:n(()=>[e(P,{modelValue:a.model.timepicker,"onUpdate:modelValue":o[41]||(o[41]=E=>a.model.timepicker=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"级联选择器",prop:"cascader"},{default:n(()=>[e(L,{modelValue:a.model.cascader,"onUpdate:modelValue":o[42]||(o[42]=E=>a.model.cascader=E),options:a.options2},null,8,["modelValue","options"])]),_:1}),e(t,{label:"颜色选择器",prop:"colorpicker"},{default:n(()=>[e(I,{modelValue:a.model.colorpicker,"onUpdate:modelValue":o[43]||(o[43]=E=>a.model.colorpicker=E)},null,8,["modelValue"])]),_:1}),e(t,{label:"评价",prop:"rate"},{default:n(()=>[e(N,{modelValue:a.model.rate,"onUpdate:modelValue":o[44]||(o[44]=E=>a.model.rate=E)},null,8,["modelValue"])]),_:1}),e(t,null,{default:n(()=>[e(B,null,{default:n(()=>[e(m,null,{default:n(()=>[e(i,{type:"primary",onClick:o[45]||(o[45]=E=>r.onSubmit("fourForm"))},{default:n(()=>[...o[95]||(o[95]=[s("确认",-1)])]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(i,{onClick:o[46]||(o[46]=E=>r.resetFields("fourForm"))},{default:n(()=>[...o[96]||(o[96]=[s("重置",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","size"])])]),e(f,null,{desc:n(()=>[...o[97]||(o[97]=[])]),highlight:n(()=>[...o[98]||(o[98]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-bottom: 20px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"size"'),l("span",{style:{color:"#B392F0"}}," button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},">超大</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},">中等</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},">默认</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},">小</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},">迷你</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:500px"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#B392F0"}}," :model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model"'),l("span",{style:{color:"#B392F0"}}," :rules"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"rules"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"fourForm"'),l("span",{style:{color:"#B392F0"}}," label-width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"100px"'),l("span",{style:{color:"#B392F0"}}," :size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"size"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"输入框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"input"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.input"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"下拉框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"select"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.select"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(item,index) in options"'),l("span",{style:{color:"#B392F0"}}," :value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.value"'),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.label"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"index"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-select-option"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"单选框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.radio"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"男"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},">男</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"女"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"0"'),l("span",{style:{color:"#E1E4E8"}},">女</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"未知"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},">未知</"),l("span",{style:{color:"#85E89D"}},"zmz-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"滑块"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"slider"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.slider"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-slider"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"复选框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.checkbox"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"篮球"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},">篮球</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"游泳"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},">游泳</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"健身"'),l("span",{style:{color:"#B392F0"}}," value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">健身</"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"开关"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"switch"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-switch"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.switch"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-switch"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"数字输入框"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"inputnumber"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-inputnumber"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.inputnumber"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-inputnumber"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"日期选择器"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"datepicker"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-datepicker"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.datepicker"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-datepicker"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"时间选择器"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"timepicker"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-timepicker"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.timepicker"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-timepicker"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"级联选择器"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options2"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"颜色选择器"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"colorpicker"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-colorpicker"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.colorpicker"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-colorpicker"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"评价"'),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"rate"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-rate"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model.rate"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-rate"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"onSubmit('fourForm')"`),l("span",{style:{color:"#E1E4E8"}},">确认</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"resetFields('fourForm')"`),l("span",{style:{color:"#E1E4E8"}},">重置</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        resetFields"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"resetFields"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onSubmit"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"validate"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"res"),l("span",{style:{color:"#F97583"}}," =>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"                if"),l("span",{style:{color:"#E1E4E8"}}," (res) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"success"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'效验成功'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'校验失败'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        var"),l("span",{style:{color:"#B392F0"}}," validateAge"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"rule"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"value"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"callback"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            if"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"!"),l("span",{style:{color:"#E1E4E8"}},"value) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"              return"),l("span",{style:{color:"#B392F0"}}," callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'年龄不能为空'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            setTimeout"),l("span",{style:{color:"#E1E4E8"}},"(() "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"              if"),l("span",{style:{color:"#E1E4E8"}}," (value "),l("span",{style:{color:"#F97583"}},"<"),l("span",{style:{color:"#79B8FF"}}," 18"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"                callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'必须年满18岁'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"                callback"),l("span",{style:{color:"#E1E4E8"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, "),l("span",{style:{color:"#79B8FF"}},"1000"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"          var"),l("span",{style:{color:"#B392F0"}}," validatePass"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"rule"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"value"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"callback"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            if"),l("span",{style:{color:"#E1E4E8"}}," (value "),l("span",{style:{color:"#F97583"}},"==="),l("span",{style:{color:"#9ECBFF"}}," ''"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'请输入密码'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"              if"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#79B8FF"}},"this"),l("span",{style:{color:"#E1E4E8"}},".model2.password2 "),l("span",{style:{color:"#F97583"}},"!=="),l("span",{style:{color:"#9ECBFF"}}," ''"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".$refs.myForms."),l("span",{style:{color:"#B392F0"}},"validateField"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'password2'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"          var"),l("span",{style:{color:"#B392F0"}}," validatePass2"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"rule"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"value"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"callback"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            if"),l("span",{style:{color:"#E1E4E8"}}," (value "),l("span",{style:{color:"#F97583"}},"==="),l("span",{style:{color:"#9ECBFF"}}," ''"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'请再次输入密码'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#F97583"}}," if"),l("span",{style:{color:"#E1E4E8"}}," (value "),l("span",{style:{color:"#F97583"}},"!=="),l("span",{style:{color:"#79B8FF"}}," this"),l("span",{style:{color:"#E1E4E8"}},".model2.password) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#B392F0"}}," Error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'两次输入密码不一致!'"),l("span",{style:{color:"#E1E4E8"}},"));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"              callback"),l("span",{style:{color:"#E1E4E8"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        const"),l("span",{style:{color:"#B392F0"}}," generateData"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," () "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            const"),l("span",{style:{color:"#79B8FF"}}," data"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," [];")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            for"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," i "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#79B8FF"}}," 1"),l("span",{style:{color:"#E1E4E8"}},"; i "),l("span",{style:{color:"#F97583"}},"<="),l("span",{style:{color:"#79B8FF"}}," 15"),l("span",{style:{color:"#E1E4E8"}},"; i"),l("span",{style:{color:"#F97583"}},"++"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              data."),l("span",{style:{color:"#B392F0"}},"push"),l("span",{style:{color:"#E1E4E8"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                key: i,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                label: "),l("span",{style:{color:"#9ECBFF"}},"`左选项 ${"),l("span",{style:{color:"#E1E4E8"}}," i"),l("span",{style:{color:"#9ECBFF"}}," }`"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                disabled: i "),l("span",{style:{color:"#F97583"}},"%"),l("span",{style:{color:"#79B8FF"}}," 4"),l("span",{style:{color:"#F97583"}}," ==="),l("span",{style:{color:"#79B8FF"}}," 0")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," data;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            size: "),l("span",{style:{color:"#9ECBFF"}},"'default'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            model: { ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},", ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                select: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                radio: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                datepicker: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                slider: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}}," ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                checkbox: [] ,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                switch: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                textarea: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                cascader: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                colorpicker: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                timepicker: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                inputnumber: "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                rate: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                upload: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                transfer: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            rules: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                input: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请输入'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                select: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                radio: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                datepicker: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type:"),l("span",{style:{color:"#9ECBFF"}},"'date'"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                checkbox: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type:"),l("span",{style:{color:"#9ECBFF"}},"'array'"),l("span",{style:{color:"#E1E4E8"}},",message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                textarea: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请输入'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                cascader: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type: "),l("span",{style:{color:"#9ECBFF"}},"'array'"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                colorpicker: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                rate: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type: "),l("span",{style:{color:"#9ECBFF"}},"'number'"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                upload: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type: "),l("span",{style:{color:"#9ECBFF"}},"'array'"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                timepicker: [{ required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", type: "),l("span",{style:{color:"#9ECBFF"}},"'date'"),l("span",{style:{color:"#E1E4E8"}},",message: "),l("span",{style:{color:"#9ECBFF"}},"'请选择'"),l("span",{style:{color:"#E1E4E8"}}," , trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},"}],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            transferList: "),l("span",{style:{color:"#B392F0"}},"generateData"),l("span",{style:{color:"#E1E4E8"}},"(),")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'member'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'会员'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'people'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'普通'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'admin'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'超级管理员'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options2: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'zhinan'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'指南'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    disabled: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'jieshao'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'介绍'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'texing'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'特性'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'anzhuang'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'安装'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'npmanzhuang'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'npm 安装'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    value: "),l("span",{style:{color:"#9ECBFF"}},"'zujian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    label: "),l("span",{style:{color:"#9ECBFF"}},"'组件'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'basic'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'基础'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'icon'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Icon 图标'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...o[99]||(o[99]=[])]),default:n(()=>[o[100]||(o[100]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;">
            <zmz-radio-group v-model="size" button>
                <zmz-radio value="large">超大</zmz-radio>
                <zmz-radio value="medium">中等</zmz-radio>
                <zmz-radio value="default">默认</zmz-radio>
                <zmz-radio value="small">小</zmz-radio>
                <zmz-radio value="mini">迷你</zmz-radio>
            </zmz-radio-group>
        </div>
        <div style="width:500px">
            <zmz-form :model="model" :rules="rules" ref="fourForm" label-width="100px" :size="size">
                <zmz-form-item label="输入框" prop="input">
                    <zmz-input v-model="model.input"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="下拉框" prop="select">
                    <zmz-select v-model="model.select">
                    <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
                    </zmz-select>
                </zmz-form-item>
                <zmz-form-item label="单选框" prop="radio">
                    <zmz-radio-group v-model="model.radio">
                        <zmz-radio label="男" value="1">男</zmz-radio>
                        <zmz-radio label="女" value="0">女</zmz-radio>
                        <zmz-radio label="未知" value="2">未知</zmz-radio>
                    </zmz-radio-group>
                </zmz-form-item>
                <zmz-form-item label="滑块" prop="slider">
                    <zmz-slider v-model="model.slider"></zmz-slider>
                </zmz-form-item>
                <zmz-form-item label="复选框" prop="checkbox">
                    <zmz-checkbox-group v-model="model.checkbox">
                    <zmz-checkbox label="篮球" value="1">篮球</zmz-checkbox>
                    <zmz-checkbox label="游泳" value="2">游泳</zmz-checkbox>
                    <zmz-checkbox label="健身" value="3">健身</zmz-checkbox>
                    </zmz-checkbox-group>
                </zmz-form-item>
                <zmz-form-item label="开关" prop="switch">
                    <zmz-switch v-model="model.switch"></zmz-switch>
                </zmz-form-item>
                <zmz-form-item label="数字输入框" prop="inputnumber">
                    <zmz-inputnumber v-model="model.inputnumber"></zmz-inputnumber>
                </zmz-form-item>
                <zmz-form-item label="日期选择器" prop="datepicker">
                    <zmz-datepicker v-model="model.datepicker"></zmz-datepicker>
                </zmz-form-item>
                <zmz-form-item label="时间选择器" prop="timepicker">
                    <zmz-timepicker v-model="model.timepicker"></zmz-timepicker>
                </zmz-form-item>
                <zmz-form-item label="级联选择器" prop="cascader">
                    <zmz-cascader v-model="model.cascader" :options="options2"></zmz-cascader>
                </zmz-form-item>
                <zmz-form-item label="颜色选择器" prop="colorpicker">
                    <zmz-colorpicker v-model="model.colorpicker"></zmz-colorpicker>
                </zmz-form-item>
                <zmz-form-item label="评价" prop="rate">
                    <zmz-rate v-model="model.rate"></zmz-rate>
                </zmz-form-item>
                <zmz-form-item>
                    <zmz-space>
                        <zmz-space-item><zmz-button type="primary" @click="onSubmit('fourForm')">确认</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="resetFields('fourForm')">重置</zmz-button></zmz-space-item>
                    </zmz-space>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        resetFields(name) {
            this.$refs[name].resetFields()
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    },
    data() {
        var validateAge = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }, 1000);
          };
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.model2.password2 !== '') {
                this.$refs.myForms.validateField('password2');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.model2.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: \`左选项 \${ i }\`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            size: 'default',
            model: { 
                input: '', 
                select: '' ,
                radio: '' ,
                datepicker: '' ,
                slider: '' ,
                checkbox: [] ,
                switch: true,
                textarea: '',
                cascader: [],
                colorpicker: '',
                timepicker: '',
                inputnumber: 1,
                rate: '',
                upload: [],
                transfer: [],
            },
            rules: {
                input: [{ required: true, message: '请输入' , trigger: 'blur'}],
                select: [{ required: true, message: '请选择' , trigger: 'change'}],
                radio: [{ required: true, message: '请选择' , trigger: 'change'}],
                datepicker: [{ required: true, type:'date', message: '请选择' , trigger: 'change'}],
                checkbox: [{ required: true, type:'array',message: '请选择' , trigger: 'change'}],
                textarea: [{ required: true, message: '请输入' , trigger: 'blur'}],
                cascader: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                colorpicker: [{ required: true, message: '请选择' , trigger: 'blur'}],
                rate: [{ required: true, type: 'number', message: '请选择' , trigger: 'change'}],
                upload: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                timepicker: [{ required: true, type: 'date',message: '请选择' , trigger: 'change'}],
            },
            transferList: generateData(),
            options: [
                {
                    value: 'member',
                    label: '会员'
                },
                {
                    value: 'people',
                    label: '普通'
                },
                {
                    value: 'admin',
                    label: '超级管理员'
                }
            ],
            options2: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                }
                            ]
                        },
                    ]
                }
            ]
        };
    }
};
<\/script>
`)],-1))]),_:1}),o[116]||(o[116]=l("h2",{id:"%E5%8A%A8%E6%80%81%E6%96%B0%E5%A2%9E%E5%88%A0%E9%99%A4",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8A%A8%E6%80%81%E6%96%B0%E5%A2%9E%E5%88%A0%E9%99%A4"},"#"),s(" 动态新增删除")],-1)),l("div",nl,[l("div",al,[e(B,null,{default:n(()=>[e(m,null,{default:n(()=>[e(i,{type:"primary",onClick:r.add},{default:n(()=>[...o[101]||(o[101]=[s("新增",-1)])]),_:1},8,["onClick"])]),_:1}),e(m,null,{default:n(()=>[e(i,{type:"error",onClick:r.del},{default:n(()=>[...o[102]||(o[102]=[s("删除",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})]),l("div",El,[e(b,{model:a.model4,ref:"myForms2","label-width":"100px","label-position":a.data},{default:n(()=>[(z(!0),g(v,null,D(a.model4.items,(E,F)=>(z(),k(t,{prop:"items."+F+".value",label:E.label+F,key:F,rules:{required:!0,message:"请输入新增"+F,trigger:"blur"}},{default:n(()=>[e(c,{modelValue:E.value,"onUpdate:modelValue":H=>E.value=H},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","label","rules"]))),128)),e(t,null,{default:n(()=>[e(B,null,{default:n(()=>[e(m,null,{default:n(()=>[e(i,{type:"primary",onClick:o[47]||(o[47]=E=>r.onSubmit("myForms2"))},{default:n(()=>[...o[103]||(o[103]=[s("确认",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","label-position"])])]),e(f,null,{desc:n(()=>[...o[104]||(o[104]=[])]),highlight:n(()=>[...o[105]||(o[105]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-mb-20"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"add"'),l("span",{style:{color:"#E1E4E8"}},">新增</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"error"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"del"'),l("span",{style:{color:"#E1E4E8"}},">删除</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:500px"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#B392F0"}}," :model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"model4"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"myForms2"'),l("span",{style:{color:"#B392F0"}}," label-width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"100px"'),l("span",{style:{color:"#B392F0"}}," :label-position"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"data"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#B392F0"}}," :label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.label"'),l("span",{style:{color:"#B392F0"}}," v-for"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"(item,index) in model4.items"'),l("span",{style:{color:"#B392F0"}}," :key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"index"'),l("span",{style:{color:"#B392F0"}}," :rules"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"[{ required: true, message: '请输入' , trigger: 'blur'}]"`),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.value"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"onSubmit('myForms2')"`),l("span",{style:{color:"#E1E4E8"}},">确认</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-form"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        add"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".model4.items."),l("span",{style:{color:"#B392F0"}},"push"),l("span",{style:{color:"#E1E4E8"}},"({label: "),l("span",{style:{color:"#9ECBFF"}},"'新增'"),l("span",{style:{color:"#E1E4E8"}},", value: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},"})")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        del"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".model4.items."),l("span",{style:{color:"#B392F0"}},"splice"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#F97583"}},"-"),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        onSubmit"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs[name]."),l("span",{style:{color:"#B392F0"}},"validate"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"res"),l("span",{style:{color:"#F97583"}}," =>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"                if"),l("span",{style:{color:"#E1E4E8"}}," (res) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"success"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'效验成功'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                    this"),l("span",{style:{color:"#E1E4E8"}},".$message."),l("span",{style:{color:"#B392F0"}},"error"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'校验失败'"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            data: "),l("span",{style:{color:"#9ECBFF"}},"'right'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            size: "),l("span",{style:{color:"#9ECBFF"}},"'default'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            model4: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                items: [{label: "),l("span",{style:{color:"#9ECBFF"}},"'新增'"),l("span",{style:{color:"#E1E4E8"}},", value: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},"}]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:n(()=>[...o[106]||(o[106]=[])]),default:n(()=>[o[107]||(o[107]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <div class="zmz-mb-20">
            <zmz-space>
                <zmz-space-item><zmz-button type="primary" @click="add">新增</zmz-button></zmz-space-item>
                <zmz-space-item><zmz-button type="error" @click="del">删除</zmz-button></zmz-space-item>
            </zmz-space>
        </div>
        <div style="width:500px">
            <zmz-form :model="model4" ref="myForms2" label-width="100px" :label-position="data">
                <zmz-form-item :label="item.label" v-for="(item,index) in model4.items" :key="index" :rules="[{ required: true, message: '请输入' , trigger: 'blur'}]">
                    <zmz-input v-model="item.value"></zmz-input>
                </zmz-form-item>
                <zmz-form-item>
                    <zmz-space>
                        <zmz-space-item><zmz-button type="primary" @click="onSubmit('myForms2')">确认</zmz-button></zmz-space-item>
                    </zmz-space>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        add() {
            this.model4.items.push({label: '新增', value: ''})
        },
        del() {
            this.model4.items.splice(-1)
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    },
    data() {
        return {
            data: 'right',
            size: 'default',
            model4: {
                items: [{label: '新增', value: ''}]
            }
        };
    }
};
<\/script>
`)],-1))]),_:1}),o[117]||(o[117]=K('<h2 id="form-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#form-%E5%B1%9E%E6%80%A7">#</a> Form 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>model</td><td>表单对象</td><td>Object</td><td>—</td><td>{}</td><td>—</td></tr><tr><td>rules</td><td>表单验证规则，具体配置查看 async-validator</td><td>Object</td><td>—</td><td>{}</td><td>—</td></tr><tr><td>inline</td><td>是否开启行内表单模式</td><td>Boolean</td><td>false/true</td><td>false</td><td>—</td></tr><tr><td>show-message</td><td>是否显示校验错误信息</td><td>Boolean</td><td>false/true</td><td>true</td><td>—</td></tr><tr><td>hide-required-mark</td><td>是否隐藏所有表单项的必选标记</td><td>Boolean</td><td>false/true</td><td>false</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用该表单内的所有组件</td><td>Boolean</td><td>false/true</td><td>false</td><td>—</td></tr><tr><td>label-width</td><td>label宽度</td><td>String/Number</td><td>—</td><td>—</td><td>—</td></tr><tr><td>label-position</td><td>label对齐方式</td><td>String</td><td>left/center/top</td><td>right</td><td>—</td></tr><tr><td>placeholder-prefix-input</td><td>是否开启输入框尊敬语气，例如，请输入，不开起只显示label内容</td><td>String</td><td>—</td><td>—</td><td>—</td></tr><tr><td>placeholder-prefix-select</td><td>是否开启选择框尊敬语气，例如，请选择，不开起只显示label内容</td><td>String</td><td>—</td><td>—</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td><td>—</td></tr></tbody></table></div><h2 id="form-%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#form-%E4%BA%8B%E4%BB%B6">#</a> Form 事件</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-validate</td><td>任一表单项被校验后触发，返回表单项 prop、校验状态、错误消息</td><td>Function(prop, error, msg)</td></tr></tbody></table></div><h2 id="form-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#form-%E6%96%B9%E6%B3%95">#</a> Form 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>clearValidate</td><td>清除验证结果</td><td>Function(props: array | string)</td></tr><tr><td>resetFields</td><td>重置表单</td><td>Function(props: array | string)</td></tr><tr><td>validateField</td><td>单个字段验证</td><td>Function(props: string| array , function)</td></tr><tr><td>validate</td><td>表单验证，通过返回true，失败返回false</td><td>Function(function)</td></tr></tbody></table></div><h2 id="form-item-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#form-item-%E5%B1%9E%E6%80%A7">#</a> Form-item 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>prop</td><td>表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的</td><td>String</td><td>—</td><td>—</td></tr><tr><td>label</td><td>标签文本</td><td>String</td><td>—</td><td>—</td></tr><tr><td>label-style</td><td>内联方式, 自定义label样式</td><td>Object</td><td>—</td><td>{}</td></tr><tr><td>label-class</td><td>类名方式, 自定义label类名</td><td>Array</td><td>—</td><td>[]</td></tr><tr><td>content-style</td><td>内联方式, 自定义content样式</td><td>Object</td><td>—</td><td>{}</td></tr><tr><td>content-class</td><td>类名方式, 自定义content类名</td><td>Array</td><td>—</td><td>[]</td></tr><tr><td>rules</td><td>表单验证规则，具体配置查看 async-validator</td><td>Object</td><td>—</td><td>{}</td></tr><tr><td>label-width</td><td>label宽度</td><td>String/Number</td><td>—</td><td>—</td></tr><tr><td>required</td><td>是否必填</td><td>Boolean</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="form-item-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#form-item-%E6%8F%92%E6%A7%BD">#</a> Form-item 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽</td></tr><tr><td>label</td><td>标题插槽</td></tr></tbody></table></div><h2 id="form-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#form-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Form 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-form-height</td><td>–zmz-form-height</td><td>32px</td><td>高度</td></tr><tr><td>@zmz-form-font-size</td><td>–zmz-form-font-size</td><td>12px</td><td>字体默认</td></tr><tr><td>@zmz-form-error-text-color</td><td>–zmz-form-error-text-color</td><td>错误主题颜色</td><td>错误文字颜色</td></tr><tr><td>@zmz-form-error-text-font-size</td><td>–zmz-form-error-text-font-size</td><td>12px</td><td>错误文字大小</td></tr><tr><td>@zmz-form-required-text-color</td><td>–zmz-form-required-text-color</td><td>错误主题颜色</td><td>错误文字大小</td></tr></tbody></table></div>',12))])}const pl=J(M,[["render",tl]]);export{pl as default};
