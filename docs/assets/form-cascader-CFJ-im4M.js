import{_ as b,c as i,a as l,b as s,e as E,w as o,d as B,r as t,o as d,t as F,j as v}from"./index-DyRJxyCP.js";const C={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Cascader 级联选择器"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),cascader:[],options:[{value:"zhinan",label:"指南",disabled:!0,children:[{value:"jieshao",label:"介绍",children:[{value:"texing",label:"特性"},{value:"zhichi",label:"支持"},{value:"gongxian",label:"贡献"}]},{value:"anzhuang",label:"安装",children:[{value:"npmanzhuang",label:"npm 安装"},{value:"yumanzhuang",label:"yum 安装"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"基础",children:[{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"表单",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"cascader",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"upload",label:"Upload 上传"}]},{value:"data",label:"数据",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"model",label:"Model 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"fold",label:"Fold 折叠面板"}]}]}]}},methods:{currentConfig(r){return this.$setting.currentConfig[r]},onChange(){}}},m={class:"zmz-markdown-article"},h={class:"demo-block"},g={class:"demo-block"},z={class:"demo-block"},x={key:0},f={class:"demo-block"},k={class:"demo-block"};function w(r,n,D,A,a,u){const c=t("zmz-cascader"),p=t("demo-block"),y=t("zmz-space");return d(),i("div",m,[n[30]||(n[30]=l("h1",{id:"cascader-%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9%E5%99%A8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#cascader-%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9%E5%99%A8"},"#"),s(" Cascader 级联选择器")],-1)),n[31]||(n[31]=l("hr",null,null,-1)),n[32]||(n[32]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),n[33]||(n[33]=l("p",null,"逐级展示",-1)),l("div",h,[E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[0]||(n[0]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},clearbtn:"",onOnChange:u.onChange},null,8,["modelValue","options","onOnChange"])]),E(p,null,{desc:o(()=>[...n[10]||(n[10]=[])]),highlight:o(()=>[...n[11]||(n[11]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#B392F0"}}," @on-change"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"onChange"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            cascader: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'zhichi'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'支持'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'gongxian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'贡献'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'yumanzhuang'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'yum 安装'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'button'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Button 按钮'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'form'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'表单'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'radio'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Radio 单选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'checkbox'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Checkbox 多选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Input 输入框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input-number'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'InputNumber 计数器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Select 选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Cascader 级联选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'switch'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Switch 开关'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'slider'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Slider 滑块'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'time-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'TimePicker 时间选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'date-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'DatePicker 日期选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'upload'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Upload 上传'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'data'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'数据'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Table 表格'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tag'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tag 标签'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'progress'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Progress 进度条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tree'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tree 树形控件'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'pagination'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Pagination 分页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'badge'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Badge 标记'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'alert'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Alert 警告'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'loading'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Loading 加载'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Message 消息提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message-box'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'MessageBox 弹框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'menu'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'NavMenu 导航菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tabs'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tabs 标签页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'breadcrumb'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Breadcrumb 面包屑'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'dropdown'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Dropdown 下拉菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'steps'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Steps 步骤条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'model'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Model 对话框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tooltip'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tooltip 文字提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'popover'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Popover 弹出框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'card'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Card 卡片'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'carousel'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Carousel 走马灯'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'fold'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Fold 折叠面板'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...n[12]||(n[12]=[])]),default:o(()=>[n[13]||(n[13]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn @on-change="onChange"></zmz-cascader>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
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
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
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
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
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
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
<\/script>

`)],-1))]),_:1}),n[34]||(n[34]=l("h2",{id:"%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%BA%A7%E8%81%94",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E5%8F%AA%E8%AF%BB%E7%BA%A7%E8%81%94"},"#"),s(" 禁用只读级联")],-1)),n[35]||(n[35]=l("p",null,[s("使用 "),l("code",null,"disabled"),s(" 或 "),l("code",null,"readonly"),s(" 来禁用或只读")],-1)),l("div",g,[E(y,null,{default:o(()=>[E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[1]||(n[1]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},disabled:""},null,8,["modelValue","options"]),E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[2]||(n[2]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},readonly:""},null,8,["modelValue","options"])]),_:1})]),E(p,null,{desc:o(()=>[...n[14]||(n[14]=[])]),highlight:o(()=>[...n[15]||(n[15]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," disabled"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," readonly"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            cascader: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'zhichi'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'支持'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'gongxian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'贡献'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'yumanzhuang'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'yum 安装'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'button'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Button 按钮'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'form'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'表单'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'radio'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Radio 单选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'checkbox'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Checkbox 多选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Input 输入框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input-number'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'InputNumber 计数器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Select 选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Cascader 级联选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'switch'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Switch 开关'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'slider'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Slider 滑块'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'time-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'TimePicker 时间选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'date-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'DatePicker 日期选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'upload'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Upload 上传'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'data'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'数据'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Table 表格'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tag'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tag 标签'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'progress'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Progress 进度条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tree'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tree 树形控件'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'pagination'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Pagination 分页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'badge'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Badge 标记'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'alert'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Alert 警告'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'loading'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Loading 加载'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Message 消息提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message-box'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'MessageBox 弹框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'menu'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'NavMenu 导航菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tabs'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tabs 标签页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'breadcrumb'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Breadcrumb 面包屑'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'dropdown'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Dropdown 下拉菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'steps'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Steps 步骤条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'model'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Model 对话框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tooltip'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tooltip 文字提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'popover'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Popover 弹出框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'card'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Card 卡片'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'carousel'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Carousel 走马灯'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'fold'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Fold 折叠面板'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...n[16]||(n[16]=[])]),default:o(()=>[n[17]||(n[17]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" disabled></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" readonly></zmz-cascader>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
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
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
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
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
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
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
<\/script>

`)],-1))]),_:1}),n[36]||(n[36]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8A%82%E7%82%B9%E5%86%85%E5%AE%B9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8A%82%E7%82%B9%E5%86%85%E5%AE%B9"},"#"),s(" 自定义节点内容")],-1)),l("div",z,[E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[3]||(n[3]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},clearbtn:""},{default:o(({item:e})=>[l("span",null,F(e.label),1),e.children?(d(),i("span",x," ("+F(e.children.length)+") ",1)):v("",!0)]),_:1},8,["modelValue","options"])]),E(p,null,{desc:o(()=>[...n[18]||(n[18]=[])]),highlight:o(()=>[...n[19]||(n[19]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#B392F0"}}," v-slot"),l("span",{style:{color:"#E1E4E8"}},":"),l("span",{style:{color:"#B392F0"}},"default"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"{ item }"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">{{ item.label }}</"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#B392F0"}}," v-if"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"item.children"'),l("span",{style:{color:"#E1E4E8"}},"> ({{ item.children.length }}) </"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            cascader: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'zhichi'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'支持'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'gongxian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'贡献'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'yumanzhuang'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'yum 安装'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'button'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Button 按钮'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'form'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'表单'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'radio'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Radio 单选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'checkbox'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Checkbox 多选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Input 输入框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input-number'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'InputNumber 计数器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Select 选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Cascader 级联选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'switch'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Switch 开关'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'slider'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Slider 滑块'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'time-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'TimePicker 时间选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'date-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'DatePicker 日期选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'upload'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Upload 上传'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'data'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'数据'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Table 表格'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tag'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tag 标签'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'progress'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Progress 进度条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tree'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tree 树形控件'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'pagination'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Pagination 分页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'badge'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Badge 标记'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'alert'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Alert 警告'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'loading'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Loading 加载'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Message 消息提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message-box'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'MessageBox 弹框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'menu'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'NavMenu 导航菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tabs'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tabs 标签页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'breadcrumb'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Breadcrumb 面包屑'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'dropdown'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Dropdown 下拉菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'steps'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Steps 步骤条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'model'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Model 对话框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tooltip'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tooltip 文字提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'popover'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Popover 弹出框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'card'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Card 卡片'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'carousel'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Carousel 走马灯'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'fold'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Fold 折叠面板'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...n[20]||(n[20]=[])]),default:o(()=>[n[21]||(n[21]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn>
            <template v-slot:default="{ item }">
                <span>{{ item.label }}</span>
                <span v-if="item.children"> ({{ item.children.length }}) </span>
            </template>
        </zmz-cascader>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
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
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
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
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
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
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
<\/script>

`)],-1))]),_:1}),n[37]||(n[37]=l("h2",{id:"%E5%8F%AF%E6%B8%85%E7%A9%BA",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8F%AF%E6%B8%85%E7%A9%BA"},"#"),s(" 可清空")],-1)),l("div",f,[E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[4]||(n[4]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},clearbtn:""},null,8,["modelValue","options"])]),E(p,null,{desc:o(()=>[...n[22]||(n[22]=[])]),highlight:o(()=>[...n[23]||(n[23]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            cascader: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'zhichi'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'支持'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'gongxian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'贡献'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'yumanzhuang'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'yum 安装'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'button'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Button 按钮'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'form'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'表单'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'radio'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Radio 单选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'checkbox'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Checkbox 多选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Input 输入框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input-number'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'InputNumber 计数器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Select 选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Cascader 级联选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'switch'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Switch 开关'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'slider'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Slider 滑块'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'time-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'TimePicker 时间选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'date-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'DatePicker 日期选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'upload'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Upload 上传'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'data'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'数据'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Table 表格'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tag'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tag 标签'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'progress'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Progress 进度条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tree'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tree 树形控件'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'pagination'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Pagination 分页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'badge'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Badge 标记'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'alert'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Alert 警告'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'loading'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Loading 加载'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Message 消息提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message-box'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'MessageBox 弹框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'menu'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'NavMenu 导航菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tabs'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tabs 标签页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'breadcrumb'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Breadcrumb 面包屑'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'dropdown'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Dropdown 下拉菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'steps'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Steps 步骤条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'model'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Model 对话框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tooltip'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tooltip 文字提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'popover'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Popover 弹出框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'card'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Card 卡片'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'carousel'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Carousel 走马灯'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'fold'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Fold 折叠面板'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...n[24]||(n[24]=[])]),default:o(()=>[n[25]||(n[25]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn></zmz-cascader>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
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
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
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
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
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
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
<\/script>

`)],-1))]),_:1}),n[38]||(n[38]=l("h2",{id:"%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8"},"#"),s(" 不同尺寸")],-1)),n[39]||(n[39]=l("p",null,"提供多种尺寸",-1)),l("div",k,[E(y,{mode:"vertical"},{default:o(()=>[E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[5]||(n[5]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},clearbtn:"",size:"large"},null,8,["modelValue","options"]),E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[6]||(n[6]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},clearbtn:"",size:"medium"},null,8,["modelValue","options"]),E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[7]||(n[7]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},clearbtn:"",size:"default"},null,8,["modelValue","options"]),E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[8]||(n[8]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},clearbtn:"",size:"small"},null,8,["modelValue","options"]),E(c,{modelValue:a.cascader,"onUpdate:modelValue":n[9]||(n[9]=e=>a.cascader=e),options:a.options,placeholder:"请选择",style:{width:"250px"},clearbtn:"",size:"mini"},null,8,["modelValue","options"])]),_:1})]),E(p,null,{desc:o(()=>[...n[26]||(n[26]=[])]),highlight:o(()=>[...n[27]||(n[27]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"large"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"medium"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"default"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"small"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"cascader"'),l("span",{style:{color:"#B392F0"}}," :options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"'),l("span",{style:{color:"#B392F0"}}," placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"请选择"'),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 250px;"'),l("span",{style:{color:"#B392F0"}}," clearbtn"),l("span",{style:{color:"#B392F0"}}," size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"mini"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-cascader"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            cascader: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            options: [")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'zhichi'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'支持'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'gongxian'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'贡献'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'yumanzhuang'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'yum 安装'")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'button'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Button 按钮'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'form'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'表单'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'radio'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Radio 单选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'checkbox'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Checkbox 多选框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Input 输入框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'input-number'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'InputNumber 计数器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Select 选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'cascader'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Cascader 级联选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'switch'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Switch 开关'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'slider'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Slider 滑块'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'time-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'TimePicker 时间选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'date-picker'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'DatePicker 日期选择器'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'upload'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Upload 上传'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'data'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'数据'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Table 表格'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tag'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tag 标签'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'progress'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Progress 进度条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tree'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tree 树形控件'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'pagination'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Pagination 分页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'badge'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Badge 标记'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Notice'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'alert'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Alert 警告'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'loading'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Loading 加载'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Message 消息提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'message-box'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'MessageBox 弹框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Navigation'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'menu'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'NavMenu 导航菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tabs'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tabs 标签页'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'breadcrumb'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Breadcrumb 面包屑'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'dropdown'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Dropdown 下拉菜单'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'steps'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Steps 步骤条'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            value: "),l("span",{style:{color:"#9ECBFF"}},"'others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'Others'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'model'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Model 对话框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'tooltip'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Tooltip 文字提示'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'popover'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Popover 弹出框'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'card'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Card 卡片'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'carousel'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Carousel 走马灯'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    value: "),l("span",{style:{color:"#9ECBFF"}},"'fold'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                    label: "),l("span",{style:{color:"#9ECBFF"}},"'Fold 折叠面板'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"})])],-1)])]),code:o(()=>[...n[28]||(n[28]=[])]),default:o(()=>[n[29]||(n[29]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="large"></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="medium"></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="default"></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="small"></zmz-cascader>
            <zmz-cascader v-model="cascader" :options="options" placeholder="请选择" style="width: 250px;" clearbtn size="mini"></zmz-cascader>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cascader: [],
            options: [
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
                                {
                                    value: 'zhichi',
                                    label: '支持'
                                },
                                {
                                    value: 'gongxian',
                                    label: '贡献'
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
                                },
                                {
                                    value: 'yumanzhuang',
                                    label: 'yum 安装'
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
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: '表单',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: '数据',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'model',
                                    label: 'Model 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'fold',
                                    label: 'Fold 折叠面板'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
<\/script>

`)],-1))]),_:1}),n[40]||(n[40]=B('<h2 id="cascader-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#cascader-%E5%B1%9E%E6%80%A7">#</a> Cascader 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定显示参数</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸</td><td>String</td><td>large / medium / default / small / mini</td><td>default</td></tr><tr><td>name</td><td>cascader input 的 name 属性</td><td>String</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>readonly</td><td>只读</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>clearbtn</td><td>清空按钮</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>placeholder</td><td>输入时需要显示的提示文案</td><td>String</td><td>请选择</td><td>—</td></tr><tr><td>autocomplete</td><td>原生属性，自动补全</td><td>String</td><td>on, off</td><td>off</td></tr><tr><td>prefix</td><td>是否强制显示前缀图标</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>suffix</td><td>是否强制显示后缀图标</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>prefix-icon</td><td>更换添加前缀图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>suffix-icon</td><td>更换添加后缀图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>teleport</td><td>是否穿梭</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>teleport-dom</td><td>自身是否插入至 位置 元素</td><td>String</td><td>—</td><td>body</td></tr><tr><td>teleport-class</td><td>自定义穿梭类名</td><td>String/Array</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>下拉显示位置</td><td>String</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>arrow</td><td>下拉盒子的角</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>offset</td><td>盒子偏移</td><td>Array</td><td>—</td><td>[0, 10]</td></tr><tr><td>popper-options</td><td>popper2.js 的参数</td><td>Array</td><td>—</td><td>[]</td></tr></tbody></table></div><h2 id="cascader%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#cascader%E5%B1%9E%E6%80%A7">#</a> Cascader属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td>String/Number</td><td>—</td><td>—</td></tr><tr><td>label</td><td>选项的标签</td><td>String/Number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用当前项</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="cascader-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#cascader-%E6%96%B9%E6%B3%95">#</a> Cascader 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-change</td><td>value值改变时触发</td><td>value</td></tr><tr><td>on-clear</td><td>input清空时触发</td><td>—</td></tr><tr><td>on-expand-change</td><td>展开下级触发</td><td>—</td></tr><tr><td>on-open-before</td><td>打开之前</td><td>—</td></tr><tr><td>on-open</td><td>打开中</td><td>—</td></tr><tr><td>on-open-after</td><td>打开之后</td><td>—</td></tr><tr><td>on-close-before</td><td>关闭之前</td><td>—</td></tr><tr><td>on-close</td><td>关闭中</td><td>—</td></tr><tr><td>on-close-after</td><td>关闭之后</td><td>—</td></tr></tbody></table></div><h2 id="cascader-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#cascader-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Cascader 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-cascader-height</td><td>–zmz-cascader-height</td><td>32px</td><td>高度</td></tr><tr><td>@zmz-cascader-background-color</td><td>–zmz-cascader-background-color</td><td>#fff</td><td>背景颜色</td></tr><tr><td>@zmz-cascader-padding</td><td>–zmz-cascader-padding</td><td>8px</td><td>内边距</td></tr><tr><td>@zmz-cascader-font-size</td><td>–zmz-cascader-font-size</td><td>12px</td><td>字体大小</td></tr><tr><td>@zmz-cascader-text-color</td><td>–zmz-cascader-text-color</td><td>默认主题颜色</td><td>字体颜色</td></tr><tr><td>@zmz-cascader-text-active-color</td><td>–zmz-cascader-text-active-color</td><td>确认主题颜色</td><td>字体激活颜色</td></tr><tr><td>@zmz-cascader-text-hover-color</td><td>–zmz-cascader-text-hover-color</td><td>确认主题颜色</td><td>字体滑过颜色</td></tr><tr><td>@zmz-cascader-text-background-color</td><td>–zmz-cascader-text-background-color</td><td>#fff</td><td>字体背景颜色</td></tr><tr><td>@zmz-cascader-placeholder-color</td><td>–zmz-cascader-placeholder-color</td><td>#99a4b2</td><td>占位符颜色</td></tr><tr><td>@zmz-cascader-border-radius</td><td>–zmz-cascader-border-radius</td><td>3px</td><td>圆角</td></tr><tr><td>@zmz-cascader-border-color</td><td>–zmz-cascader-border-color</td><td>#e3e6ef</td><td>默认边线颜色</td></tr><tr><td>@zmz-cascader-border-hover-color</td><td>–zmz-cascader-border-hover-color</td><td>#d2d5dc</td><td>滑过边线颜色</td></tr><tr><td>@zmz-cascader-border-active-color</td><td>–zmz-cascader-cascader-active-color</td><td>确认主题颜色</td><td>激活边线颜色</td></tr><tr><td>@zmz-cascader-suffix-icon-color</td><td>–zmz-cascader-suffix-icon-color</td><td>#8794a5</td><td>后缀图标颜色</td></tr><tr><td>@zmz-cascader-suffix-icon-size</td><td>–zmz-cascader-suffix-icon-size</td><td>12px</td><td>后缀图标大小</td></tr><tr><td>@zmz-cascader-item-text-color</td><td>–zmz-cascader-item-text-color</td><td>#909399</td><td>选项字体颜色</td></tr><tr><td>@zmz-cascader-item-text-font-size</td><td>–zmz-cascader-item-text-font-size</td><td>12px</td><td>选项字体大小</td></tr><tr><td>@zmz-cascader-dropdown-background-color</td><td>–zmz-cascader-dropdown-background-color</td><td>#fff</td><td>选项背景颜色</td></tr><tr><td>@zmz-cascader-dropdown-border-color</td><td>–zmz-cascader-dropdown-border-color</td><td>#e3e6ef</td><td>选项线颜色</td></tr><tr><td>@zmz-cascader-dropdown-box-shadow</td><td>–zmz-cascader-dropdown-box-shadow</td><td>0 2px 12px 0 #e5e5e5</td><td>选项阴影</td></tr></tbody></table></div>',8))])}const S=b(C,[["render",w]]);export{S as default};
