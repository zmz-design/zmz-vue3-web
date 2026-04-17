import{_ as b,c as B,a as l,b as s,e as n,w as a,d as z,r as i,o as C,t as u}from"./index-Bfn7SEZ2.js";const h={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Table 表格"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),table:[{name:"追梦猪1",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"},{name:"追梦猪2",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"},{name:"追梦猪3",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"},{name:"追梦猪4",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"},{name:"追梦猪5",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室"}],table2:[{name:"1追梦猪",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室",occupation:"前端",province:"河北省",city:"石家庄",like:"打游戏"},{name:"2追梦猪",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室",occupation:"前端",province:"河北省",city:"石家庄",like:"打游戏"},{name:"4追梦猪",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室",occupation:"前端",province:"河北省",city:"石家庄",like:"打游戏"},{name:"3追梦猪",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室",occupation:"前端",province:"河北省",city:"石家庄",like:"打游戏"},{name:"5追梦猪",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室",occupation:"前端",province:"河北省",city:"石家庄",like:"打游戏"},{name:"6追梦猪",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室",occupation:"前端",province:"河北省",city:"石家庄",like:"打游戏"},{name:"7追梦猪",sex:"男",birthday:"2019-8-17",address:"石家庄新华区塔坛3201室",occupation:"前端",province:"河北省",city:"石家庄",like:"打游戏"}]}},methods:{handleClick(c){console.log(c)},currentConfig(c){return this.$setting.currentConfig[c]},selectCol(){this.$refs.table.setRadioCurrentRow(1)},resetSelectCol(){this.$refs.table.clearRadioCurrentRow()},selectCol2(){this.$refs.table2.setCheckboxCurrentRow([1,2])},resetSelectCol2(){this.$refs.table2.clearCheckboxCurrentRow()},tableRowClassName({rowIndex:c}){return c===1?"warning-row":c===3?"success-row":""},sortMethod(c,o){return c.name>o.name}}},D={class:"zmz-markdown-article"},x={class:"demo-block"},w={class:"demo-block"},f={class:"demo-block"},k={class:"demo-block"},g={class:"demo-block"},v={class:"demo-block"},A={class:"demo-block"},R={class:"demo-block"},S={class:"demo-block"},N={class:"demo-block"},T={class:"demo-block"},I={class:"demo-block"};function V(c,o,M,j,E,d){const e=i("zmz-table-column"),t=i("zmz-table"),p=i("demo-block"),r=i("zmz-button"),y=i("zmz-space-item"),F=i("zmz-space");return C(),B("div",D,[o[54]||(o[54]=l("h1",{id:"table-%E8%A1%A8%E6%A0%BC",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#table-%E8%A1%A8%E6%A0%BC"},"#"),s(" Table 表格")],-1)),o[55]||(o[55]=l("hr",null,null,-1)),o[56]||(o[56]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),o[57]||(o[57]=l("p",null,"基础的表格展示数据用法。",-1)),l("div",x,[n(t,{data:E.table},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"sex",label:"性别",width:"180"}),n(e,{prop:"address",label:"地址"})]),_:1},8,["data"])]),n(p,null,{desc:a(()=>[...o[0]||(o[0]=[])]),highlight:a(()=>[...o[1]||(o[1]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"性别"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"  export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪1'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪2'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪3'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪4'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪5'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[2]||(o[2]=[])]),default:a(()=>[o[3]||(o[3]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table'>
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
  }
<\/script>
`)],-1))]),_:1}),o[58]||(o[58]=l("h2",{id:"%E5%B8%A6%E6%96%91%E9%A9%AC%E7%BA%B9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B8%A6%E6%96%91%E9%A9%AC%E7%BA%B9"},"#"),s(" 带斑马纹")],-1)),o[59]||(o[59]=l("p",null,[s("添加属性"),l("code",null,"stripes"),s("设置隔行变色, 属性"),l("code",null,"stripes-color"),s("可自定义斑马纹颜色。")],-1)),l("div",w,[n(t,{data:E.table,stripes:""},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"sex",label:"性别",width:"180"}),n(e,{prop:"address",label:"地址"})]),_:1},8,["data"])]),n(p,null,{desc:a(()=>[...o[4]||(o[4]=[])]),highlight:a(()=>[...o[5]||(o[5]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#B392F0"}}," stripes"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"性别"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"  export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[6]||(o[6]=[])]),default:a(()=>[o[7]||(o[7]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table' stripes>
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
  }
<\/script>
`)],-1))]),_:1}),o[60]||(o[60]=l("h2",{id:"%E5%B8%A6%E8%BE%B9%E6%A1%86%E8%A1%A8%E6%A0%BC",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B8%A6%E8%BE%B9%E6%A1%86%E8%A1%A8%E6%A0%BC"},"#"),s(" 带边框表格")],-1)),o[61]||(o[61]=l("p",null,[s("添加属性"),l("code",null,"border"),s("设置边线")],-1)),l("div",f,[n(t,{data:E.table,border:""},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"sex",label:"性别",width:"180"}),n(e,{prop:"address",label:"地址"})]),_:1},8,["data"])]),n(p,null,{desc:a(()=>[...o[8]||(o[8]=[])]),highlight:a(()=>[...o[9]||(o[9]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"性别"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"  export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[10]||(o[10]=[])]),default:a(()=>[o[11]||(o[11]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table' border>
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
  }
<\/script>
`)],-1))]),_:1}),o[62]||(o[62]=l("h2",{id:"%E5%B8%A6%E7%8A%B6%E6%80%81%E8%A1%A8%E6%A0%BC",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B8%A6%E7%8A%B6%E6%80%81%E8%A1%A8%E6%A0%BC"},"#"),s(" 带状态表格")],-1)),o[63]||(o[63]=l("p",null,"基础的表格展示数据用法。",-1)),l("div",k,[n(t,{data:E.table,border:"","row-class-name":d.tableRowClassName},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"address",label:"地址",width:"180"}),n(e,{prop:"sex",label:"性别",width:"180"})]),_:1},8,["data","row-class-name"])]),n(p,null,{desc:a(()=>[...o[12]||(o[12]=[])]),highlight:a(()=>[...o[13]||(o[13]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," :row-class-name"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tableRowClassName"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"性别"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"  export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        tableRowClassName"),l("span",{style:{color:"#E1E4E8"}},"({ "),l("span",{style:{color:"#FFAB70"}},"rowIndex"),l("span",{style:{color:"#E1E4E8"}}," }) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"          if"),l("span",{style:{color:"#E1E4E8"}}," (rowIndex "),l("span",{style:{color:"#F97583"}},"==="),l("span",{style:{color:"#79B8FF"}}," 1"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#9ECBFF"}}," 'warning-row'"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#F97583"}}," if"),l("span",{style:{color:"#E1E4E8"}}," (rowIndex "),l("span",{style:{color:"#F97583"}},"==="),l("span",{style:{color:"#79B8FF"}}," 3"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#9ECBFF"}}," 'success-row'"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"          return"),l("span",{style:{color:"#9ECBFF"}}," ''"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[14]||(o[14]=[])]),default:a(()=>[o[15]||(o[15]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table' border :row-class-name="tableRowClassName">
        <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
        <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
        <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
        <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    },
    methods: {
        tableRowClassName({ rowIndex }) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        },
    }
  }
<\/script>
`)],-1))]),_:1}),o[64]||(o[64]=l("h2",{id:"%E5%9B%BA%E5%AE%9A%E5%A4%B4%E9%83%A8",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9B%BA%E5%AE%9A%E5%A4%B4%E9%83%A8"},"#"),s(" 固定头部")],-1)),o[65]||(o[65]=l("p",null,[s("纵向内容过多时，设置"),l("code",null,"height"),s("固定头部。")],-1)),l("div",g,[n(t,{data:E.table2,border:"",height:250},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"address",label:"地址"}),n(e,{prop:"sex",label:"性别",width:"180"})]),_:1},8,["data"])]),n(p,null,{desc:a(()=>[...o[16]||(o[16]=[])]),highlight:a(()=>[...o[17]||(o[17]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table2'"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," :height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"250"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"性别"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"  export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[18]||(o[18]=[])]),default:a(()=>[o[19]||(o[19]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table2' border :height="250">
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
  }
<\/script>
`)],-1))]),_:1}),o[66]||(o[66]=l("h2",{id:"%E5%9B%BA%E5%AE%9A%E5%88%97",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9B%BA%E5%AE%9A%E5%88%97"},"#"),s(" 固定列")],-1)),o[67]||(o[67]=l("p",null,"横向内容过多时，可选择固定列",-1)),l("div",v,[n(t,{data:E.table2,border:""},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180",fixed:"left"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"address",label:"地址",width:"180"}),n(e,{prop:"address",label:"地址2",width:"180"}),n(e,{prop:"address",label:"地址3",width:"180"}),n(e,{prop:"address",label:"地址4",width:"180"}),n(e,{prop:"address",label:"地址5",width:"180"}),n(e,{prop:"address",label:"地址6",width:"180"}),n(e,{prop:"occupation",label:"职业",width:"180"}),n(e,{prop:"province",label:"省份",width:"180"}),n(e,{prop:"city",label:"市区",width:"180"}),n(e,{prop:"like",label:"爱好",width:"180",fixed:"right"})]),_:1},8,["data"])]),n(p,null,{desc:a(()=>[...o[20]||(o[20]=[])]),highlight:a(()=>[...o[21]||(o[21]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table2'"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#B392F0"}}," fixed"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"left"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址2"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址3"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址4"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址5"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址6"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"occupation"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"职业"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"province"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"省份"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"city"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"市区"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"like"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"爱好"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#B392F0"}}," fixed"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"  export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table2: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                name: "),l("span",{style:{color:"#9ECBFF"}},"'1追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                name: "),l("span",{style:{color:"#9ECBFF"}},"'2追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                name: "),l("span",{style:{color:"#9ECBFF"}},"'4追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                name: "),l("span",{style:{color:"#9ECBFF"}},"'3追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                name: "),l("span",{style:{color:"#9ECBFF"}},"'5追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                name: "),l("span",{style:{color:"#9ECBFF"}},"'6追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                name: "),l("span",{style:{color:"#9ECBFF"}},"'7追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[22]||(o[22]=[])]),default:a(()=>[o[23]||(o[23]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table2' border>
      <zmz-table-column prop="name" label="姓名" width="180" fixed="left"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址2" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址3" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址4" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址5" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址6" width="180"></zmz-table-column>
      <zmz-table-column prop="occupation" label="职业" width="180"></zmz-table-column>
      <zmz-table-column prop="province" label="省份" width="180"></zmz-table-column>
      <zmz-table-column prop="city" label="市区" width="180"></zmz-table-column>
      <zmz-table-column prop="like" label="爱好" width="180" fixed="right"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table2: [
              {
                name: '1追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '2追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '4追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '3追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '5追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '6追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '7追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }
          ]
        }
    }
  }
<\/script>
`)],-1))]),_:1}),o[68]||(o[68]=l("h2",{id:"%E5%9B%BA%E5%AE%9A%E5%88%97%E5%92%8C%E8%A1%A8%E5%A4%B4",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9B%BA%E5%AE%9A%E5%88%97%E5%92%8C%E8%A1%A8%E5%A4%B4"},"#"),s(" 固定列和表头")],-1)),o[69]||(o[69]=l("p",null,"横纵内容过多时，可选择固定列和表头。",-1)),l("div",A,[n(t,{data:E.table2,border:"",height:"250"},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180",fixed:"left"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"address",label:"地址",width:"180"}),n(e,{prop:"address",label:"地址2",width:"180"}),n(e,{prop:"address",label:"地址3",width:"180"}),n(e,{prop:"address",label:"地址4",width:"180"}),n(e,{prop:"address",label:"地址5",width:"180"}),n(e,{prop:"address",label:"地址6",width:"180"}),n(e,{prop:"occupation",label:"职业",width:"180"}),n(e,{prop:"province",label:"省份",width:"180"}),n(e,{prop:"city",label:"市区",width:"180"}),n(e,{prop:"like",label:"爱好",width:"180",fixed:"right"})]),_:1},8,["data"])]),n(p,null,{desc:a(()=>[...o[24]||(o[24]=[])]),highlight:a(()=>[...o[25]||(o[25]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table2'"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#B392F0"}}," fixed"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"left"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址2"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址3"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址4"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址5"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址6"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"occupation"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"职业"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"province"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"省份"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"city"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"市区"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"like"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"爱好"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#B392F0"}}," fixed"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"  export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪1'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪2'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪3'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪4'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪5'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪6'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪7'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              occupation: "),l("span",{style:{color:"#9ECBFF"}},"'前端'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              province: "),l("span",{style:{color:"#9ECBFF"}},"'河北省'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              city: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"              like: "),l("span",{style:{color:"#9ECBFF"}},"'打游戏'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[26]||(o[26]=[])]),default:a(()=>[o[27]||(o[27]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table2' border>
      <zmz-table-column prop="name" label="姓名" width="180" fixed="left"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址2" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址3" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址4" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址5" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址6" width="180"></zmz-table-column>
      <zmz-table-column prop="occupation" label="职业" width="180"></zmz-table-column>
      <zmz-table-column prop="province" label="省份" width="180"></zmz-table-column>
      <zmz-table-column prop="city" label="市区" width="180"></zmz-table-column>
      <zmz-table-column prop="like" label="爱好" width="180" fixed="right"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
            {
              name: '追梦猪1',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪2',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪3',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪4',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪5',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪6',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪7',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }
          ]
        }
    }
  }
<\/script>
`)],-1))]),_:1}),o[70]||(o[70]=l("h2",{id:"%E6%9C%80%E5%A4%A7%E9%AB%98%E5%BA%A6",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E6%9C%80%E5%A4%A7%E9%AB%98%E5%BA%A6"},"#"),s(" 最大高度")],-1)),o[71]||(o[71]=l("p",null,"当数据量动态变化时，可以为 Table 设置一个最大高度",-1)),l("div",R,[n(t,{data:E.table2,border:"","max-height":250},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"address",label:"地址"}),n(e,{prop:"sex",label:"性别",width:"180"})]),_:1},8,["data"])]),n(p,null,{desc:a(()=>[...o[28]||(o[28]=[])]),highlight:a(()=>[...o[29]||(o[29]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table2'"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," :max-height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"250"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"性别"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"  export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table2: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[30]||(o[30]=[])]),default:a(()=>[o[31]||(o[31]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table2' border :max-height="250">
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table2: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[72]||(o[72]=l("h2",{id:"%E5%8D%95%E9%80%89",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8D%95%E9%80%89"},"#"),s(" 单选")],-1)),o[73]||(o[73]=l("p",null,"选择单行数据时使用 radio",-1)),l("div",S,[n(t,{data:E.table,ref:"table",border:"","max-height":250},{default:a(()=>[n(e,{prop:"name",width:"50",type:"radio",align:"center"}),n(e,{prop:"name",label:"姓名",width:"180"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"address",label:"地址"}),n(e,{prop:"sex",label:"性别",width:"180"})]),_:1},8,["data"]),n(F,{class:"zmz-mt-20"},{default:a(()=>[n(y,null,{default:a(()=>[n(r,{type:"primary",onClick:d.selectCol},{default:a(()=>[...o[32]||(o[32]=[s("选择第二行",-1)])]),_:1},8,["onClick"])]),_:1}),n(y,null,{default:a(()=>[n(r,{onClick:d.resetSelectCol},{default:a(()=>[...o[33]||(o[33]=[s("取消选择",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})]),n(p,null,{desc:a(()=>[...o[34]||(o[34]=[])]),highlight:a(()=>[...o[35]||(o[35]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table'"),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"table"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," :max-height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"250"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"50"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," align"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"center"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"性别"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-mt-20"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"selectCol"'),l("span",{style:{color:"#E1E4E8"}},">选择第二行</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"resetSelectCol"'),l("span",{style:{color:"#E1E4E8"}},">取消选择</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}}," export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪1'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪2'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪3'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪4'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪5'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        selectCol"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs.table."),l("span",{style:{color:"#B392F0"}},"setRadioCurrentRow"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        resetSelectCol"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs.table."),l("span",{style:{color:"#B392F0"}},"clearRadioCurrentRow"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[36]||(o[36]=[])]),default:a(()=>[o[37]||(o[37]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table' ref="table" border :max-height="250">
      <zmz-table-column prop="name" width="50" type="radio" align="center"></zmz-table-column>
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
    <zmz-space class="zmz-mt-20">
      <zmz-space-item><zmz-button type="primary" @click="selectCol">选择第二行</zmz-button></zmz-space-item>
      <zmz-space-item><zmz-button @click="resetSelectCol">取消选择</zmz-button></zmz-space-item>
    </zmz-space>
  </div>
</template>
<script>
 export default {
    data () {
        return {
            table: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    },
    methods: {
        selectCol(data){
            this.$refs.table.setRadioCurrentRow(1)
        },
        resetSelectCol(data){
            this.$refs.table.clearRadioCurrentRow()
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[74]||(o[74]=l("h2",{id:"%E5%A4%9A%E9%80%89",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%A4%9A%E9%80%89"},"#"),s(" 多选")],-1)),o[75]||(o[75]=l("p",null,"选择多行数据时使用 checkbox",-1)),l("div",N,[n(t,{data:E.table2,ref:"table2",border:"","max-height":250},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"50",type:"checkbox",align:"center"}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"address",label:"地址"}),n(e,{prop:"sex",label:"性别",width:"180"})]),_:1},8,["data"]),n(F,{class:"zmz-mt-20"},{default:a(()=>[n(y,null,{default:a(()=>[n(r,{type:"primary",onClick:d.selectCol2},{default:a(()=>[...o[38]||(o[38]=[s("选择第二,三行",-1)])]),_:1},8,["onClick"])]),_:1}),n(y,null,{default:a(()=>[n(r,{onClick:d.resetSelectCol2},{default:a(()=>[...o[39]||(o[39]=[s("取消选择",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1})]),n(p,null,{desc:a(()=>[...o[40]||(o[40]=[])]),highlight:a(()=>[...o[41]||(o[41]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table2'"),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"table2"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," :max-height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"250"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"50"'),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"checkbox"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," align"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"center"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"性别"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmz-mt-20"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"selectCol2"'),l("span",{style:{color:"#E1E4E8"}},">选择第二,三行</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"resetSelectCol2"'),l("span",{style:{color:"#E1E4E8"}},">取消选择</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}}," export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table2: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪1'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪2'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪3'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪4'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪5'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        selectCol"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs.table2."),l("span",{style:{color:"#B392F0"}},"setRadioCurrentRow"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        resetSelectCol"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},"){")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"            this"),l("span",{style:{color:"#E1E4E8"}},".$refs.table2."),l("span",{style:{color:"#B392F0"}},"clearRadioCurrentRow"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[42]||(o[42]=[])]),default:a(()=>[o[43]||(o[43]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table2' ref="table2" border :max-height="250">
      <zmz-table-column prop="name" label="姓名" width="50" type="checkbox" align="center"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
    <zmz-space class="zmz-mt-20">
      <zmz-space-item><zmz-button type="primary" @click="selectCol2">选择第二,三行</zmz-button></zmz-space-item>
      <zmz-space-item><zmz-button @click="resetSelectCol2">取消选择</zmz-button></zmz-space-item>
    </zmz-space>
  </div>
</template>
<script>
 export default {
    data () {
        return {
            table2: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    },
    methods: {
        selectCol(data){
            this.$refs.table2.setRadioCurrentRow(1)
        },
        resetSelectCol(data){
            this.$refs.table2.clearRadioCurrentRow()
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[76]||(o[76]=l("h2",{id:"%E6%8E%92%E5%BA%8F",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E6%8E%92%E5%BA%8F"},"#"),s(" 排序")],-1)),o[77]||(o[77]=l("p",null,"对表格进行排序，可快速查找或对比数据。",-1)),l("div",T,[n(t,{data:E.table2,border:"","max-height":250},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180",align:"left",sortable:""}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"address",label:"地址"}),n(e,{prop:"sex",label:"性别",width:"180"})]),_:1},8,["data"])]),n(p,null,{desc:a(()=>[...o[44]||(o[44]=[])]),highlight:a(()=>[...o[45]||(o[45]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table2'"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," :max-height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"250"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," align"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"left"'),l("span",{style:{color:"#B392F0"}}," sortable"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"性别"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}}," export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table2: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪1'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪2'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪3'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪4'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪5'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[46]||(o[46]=[])]),default:a(()=>[o[47]||(o[47]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table2' border :max-height="250">
      <zmz-table-column prop="name" label="姓名" width="180" align="left" sortable></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
 export default {
    data () {
        return {
            table2: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[78]||(o[78]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF"},"#"),s(" 自定义模板")],-1)),o[79]||(o[79]=l("p",null,"自定义列的显示内容，可组合其他组件使用。",-1)),l("div",I,[n(t,{data:E.table2,border:"","max-height":250},{default:a(()=>[n(e,{prop:"name",label:"姓名",width:"180",align:"left"},{default:a(m=>[s(u(m.row?.name),1)]),_:1}),n(e,{prop:"birthday",label:"生日",width:"180"}),n(e,{prop:"address",label:"地址"}),n(e,{prop:"sex",label:"操作",width:"180"},{default:a(m=>[n(F,{interval:!1,"show-last-padding":!1},{default:a(()=>[n(y,null,{default:a(()=>[n(r,{type:"primary"},{default:a(()=>[...o[48]||(o[48]=[s("查看",-1)])]),_:1})]),_:1}),n(y,null,{default:a(()=>[n(r,{type:"error"},{default:a(()=>[...o[49]||(o[49]=[s("删除",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),n(p,null,{desc:a(()=>[...o[50]||(o[50]=[])]),highlight:a(()=>[...o[51]||(o[51]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},"'table2'"),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," border"),l("span",{style:{color:"#B392F0"}}," :max-height"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"250"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"姓名"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#FDAEB7","font-style":"italic"}}," align"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"left"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"default"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"scope"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        {{scope.row.name}}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"birthday"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"生日"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"address"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"地址"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#B392F0"}}," prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"sex"'),l("span",{style:{color:"#B392F0"}}," label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"操作"'),l("span",{style:{color:"#B392F0"}}," width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"180"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"default"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"scope"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}},">查看</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"error"'),l("span",{style:{color:"#E1E4E8"}},">删除</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"zmz-table-column"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"zmz-table"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}}," export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"    data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"        return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            table: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪1'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪2'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪3'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪4'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  name: "),l("span",{style:{color:"#9ECBFF"}},"'追梦猪5'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  sex: "),l("span",{style:{color:"#9ECBFF"}},"'男'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  birthday: "),l("span",{style:{color:"#9ECBFF"}},"'2019-8-17'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                  address: "),l("span",{style:{color:"#9ECBFF"}},"'石家庄新华区塔坛3201室'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:a(()=>[...o[52]||(o[52]=[])]),default:a(()=>[o[53]||(o[53]=l("pre",null,[l("code",{class:"language-html"},`<template>
  <div class="demo-block">
    <zmz-table :data='table2' border :max-height="250">
      <zmz-table-column prop="name" label="姓名" width="180" align="left">
        <template #default="scope">
        {{scope.row.name}}
        </template>
      </zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="操作" width="180">
        <template #default="scope">
          <zmz-space>
            <zmz-space-item><zmz-button type="primary">查看</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error">删除</zmz-button></zmz-space-item>
          </zmz-space>
        </template>
      </zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
 export default {
    data () {
        return {
            table: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
}
<\/script>
`)],-1))]),_:1}),o[80]||(o[80]=z('<h2 id="table-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#table-%E5%B1%9E%E6%80%A7">#</a> Table 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>绑定数据</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>column</td><td>绑定数据头部</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>height</td><td>设置高度，可固定表头</td><td>String/Number</td><td>—</td><td>—</td></tr><tr><td>border</td><td>是否显示边线</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>stripes</td><td>隔行变色斑马纹路</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>stripes-color</td><td>自定义隔行变色颜色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>row-class-name</td><td>自定义行内类名</td><td>Function({row,rowIndex})/String</td><td>—</td><td>—</td></tr><tr><td>default-sort</td><td>默认的排序列的 prop 字段和order顺序</td><td>Object</td><td>prop：字段， order:排序(desc, asc)</td><td>如果只指定了prop, 没有指定order, 则默认顺序是asc</td></tr></tbody></table></div><h2 id="table-thead-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#table-thead-%E5%B1%9E%E6%80%A7">#</a> Table-Thead 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>table的th表头</td><td>—</td><td>—</td><td>—</td></tr><tr><td>width</td><td>表格宽度</td><td>—</td><td>—</td><td>自动</td></tr><tr><td>field</td><td>title对应数据字段名称</td><td>—</td><td>—</td><td>—</td></tr><tr><td>fixed</td><td>列固定</td><td>string</td><td>left、right</td><td>—</td></tr></tbody></table></div><h2 id="tabs-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tabs-%E6%96%B9%E6%B3%95">#</a> Tabs 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>on-select</td><td>切换回调</td><td>row</td><td>—</td></tr><tr><td>on-select-radio</td><td>选中radio回调</td><td>row</td><td>—</td></tr><tr><td>on-select-checkbox</td><td>选中checkbox回调</td><td>row</td><td>[]</td></tr><tr><td>on-select-all-checkbox</td><td>选中全部checkbox触发</td><td>state, row</td><td>—</td></tr><tr><td>on-sort-change</td><td>排序筛选时触发</td><td>row, order, event</td><td>—</td></tr><tr><td>on-row-click</td><td>当某一行被单击时会触发该事件</td><td>row, index, event</td><td>—</td></tr><tr><td>on-row-dblclick</td><td>当某一行被双击时会触发该事件</td><td>row, index, event</td><td>—</td></tr><tr><td>on-row-contextmenu</td><td>当某一行被右击时会触发该事件</td><td>row, index, event</td><td>—</td></tr><tr><td>on-row-mouseover</td><td>滑入某一行时会触发该事件</td><td>row, index, event</td><td>—</td></tr><tr><td>on-row-mouseout</td><td>滑出某一行时会触发该事件</td><td>row, index, event</td><td>—</td></tr><tr><td>on-cell-click</td><td>当某一单元格被单击时会触发该事件</td><td>cell, row, index, event</td><td>—</td></tr><tr><td>on-cell-dblclick</td><td>当某一单元格被双击时会触发该事件</td><td>cell, row, index, event</td><td>—</td></tr><tr><td>on-cell-mouseover</td><td>滑入某一单元格时会触发该事件</td><td>cell, row, index, event</td><td>—</td></tr><tr><td>on-cell-mouseout</td><td>滑出某一单元格时会触发该事件</td><td>cell, row, index, event</td><td>—</td></tr></tbody></table></div><h2 id="table-methods-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#table-methods-%E6%96%B9%E6%B3%95">#</a> Table-Methods 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>setRadioCurrentRow</td><td>设置选中项</td><td>下标</td><td>Number/String</td></tr><tr><td>clearRadioCurrentRow</td><td>清除选中项</td><td>—</td><td>—</td></tr><tr><td>setCheckboxCurrentRow</td><td>设置多选选中项</td><td>下标</td><td>Number/String</td></tr><tr><td>clearCheckboxCurrentRow</td><td>清除多选选中项</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="table-column-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#table-column-%E5%B1%9E%E6%80%A7">#</a> Table-column 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>内置列类型</td><td>String</td><td>left、right</td><td>—</td></tr><tr><td>label</td><td>表头文本</td><td>String</td><td>—</td><td>—</td></tr><tr><td>width</td><td>表格宽度</td><td>String</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>表格最小宽度</td><td>String</td><td>—</td><td>80</td></tr><tr><td>prop</td><td>数据对应字段</td><td>String</td><td>—</td><td>—</td></tr><tr><td>parent</td><td>多级表头嵌套顶级父级特有</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>fixed</td><td>列固定</td><td>String/Boolean</td><td>left、right、false、true</td><td>false</td></tr><tr><td>align</td><td>对齐方式</td><td>String</td><td>left、right、center</td><td>left</td></tr><tr><td>sortable</td><td>对应列是否可以排序，如果设置为 ‘custom’</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table></div><h2 id="table-column-slot%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#table-column-slot%E6%8F%92%E6%A7%BD">#</a> Table-column slot插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>{ row, rowIndex }</td><td>默认插槽</td></tr></tbody></table></div>',12))])}const q=b(h,[["render",V]]);export{q as default};
