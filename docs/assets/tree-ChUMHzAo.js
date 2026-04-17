import{_ as z,c as C,a as l,b as s,e as o,w as e,d as h,Z as u,r as p,o as k,t as f}from"./index-DyRJxyCP.js";const x={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"Tree 树型"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description"),tree1:[{label:"树形菜单1",children:[{label:"树形菜单1-1",children:[{label:"树形菜单1-1-1"},{label:"树形菜单1-1-2"}]},{label:"树形菜单1-2",children:[{label:"树形菜单1-2-1"},{label:"树形菜单1-2-2"}]}]}],tree2:[{label:"树形菜单1",id:"1",children:[{label:"树形菜单1-1",id:"1-1",children:[{label:"树形菜单1-1-1",id:"1-1-1"},{label:"树形菜单1-1-2",id:"1-1-2"}]},{label:"树形菜单1-2",id:"1-2",children:[{label:"树形菜单1-2-1",id:"1-2-1"},{label:"树形菜单1-2-2",id:"1-2-2"}]}]}],tree3:[{label:"树形菜单1",id:"1",children:[{label:"树形菜单1-1",id:"1-1",disabled:!0,children:[{label:"树形菜单1-1-1",id:"1-1-1",disabled:!0},{label:"树形菜单1-1-2",id:"1-1-2"}]},{label:"树形菜单1-2",id:"1-2",children:[{label:"树形菜单1-2-1",id:"1-2-1",disabled:!0},{label:"树形菜单1-2-2",id:"1-2-2"}]}]}],keyword:"",tree4:[{label:"树形菜单1",loading:!1,children:[]}]}},methods:{setCheckedNodes(t){this.$refs.tree.setCheckedNodes(["1-1","1-2-1"])},getCheckedNodes(t){console.log(this.$refs.tree.getCheckedNodes())},clearCheckedNodes(t){this.$refs.tree.setCheckedNodes([])},currentConfig(t){return this.$setting.currentConfig[t]},handleFilter(t){this.$refs.zmztree.filter(this.keyword)},renderContent(t,{node:n,data:B,store:m}){return t("span",{class:"custom-tree-node"},[t("span",{},n.label),t("span",{},[t(u,{text:!0},()=>"操作")])])},handleFilterNodeMethod(t,n){return t?n.label.indexOf(t)!==-1:!0},handleLazyLoadData(t,n){setTimeout(()=>{n([{label:"异步子集",loading:!1,children:[]}])},1e3)}}},D={class:"zmz-markdown-article"},g={class:"demo-block"},A={class:"demo-block"},v={class:"demo-block"},w={class:"demo-block"},N={class:"demo-block"},T={class:"demo-block"},L={style:{display:"flex"}},S={class:"demo-block"},V={class:"demo-block"};function M(t,n,B,m,a,c){const E=p("zmz-tree"),r=p("demo-block"),d=p("zmz-button"),i=p("zmz-space"),y=p("zmz-space-item"),b=p("zmz-input");return k(),C("div",D,[n[39]||(n[39]=l("h1",{id:"tree-%E6%A0%91%E5%9E%8B",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#tree-%E6%A0%91%E5%9E%8B"},"#"),s(" Tree 树型")],-1)),n[40]||(n[40]=l("hr",null,null,-1)),n[41]||(n[41]=l("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"#"),s(" 基础用法")],-1)),n[42]||(n[42]=l("p",null,"用清晰的层级结构展示信息，可展开或折叠。",-1)),l("div",g,[o(E,{data:a.tree1,"expand-node-click":!1,"expand-all":""},null,8,["data"])]),o(r,null,{desc:e(()=>[...n[1]||(n[1]=[])]),highlight:e(()=>[...n[2]||(n[2]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree1"'),l("span",{style:{color:"#B392F0"}}," :expand-node-click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"'),l("span",{style:{color:"#B392F0"}}," expand-all"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                tree1: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...n[3]||(n[3]=[])]),default:e(()=>[n[4]||(n[4]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tree :data="tree1" :expand-node-click="false" expand-all></zmz-tree>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tree1: [{
                    "label": "树形菜单1",
                    "children": [{
                        "label": "树形菜单1-1",
                        "children": [{
                            "label": "树形菜单1-1-1",
                        }, {
                            "label": "树形菜单1-1-2",
                        }]
                    }, {
                        "label": "树形菜单1-2",
                        "children": [{
                            "label": "树形菜单1-2-1",
                        }, {
                            "label": "树形菜单1-2-2",
                        }]
                    }]
                }],
            };
        }
    };
<\/script>
`)],-1))]),_:1}),n[43]||(n[43]=l("h2",{id:"%E5%8F%AF%E5%8B%BE%E9%80%89",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%8F%AF%E5%8B%BE%E9%80%89"},"#"),s(" 可勾选")],-1)),n[44]||(n[44]=l("p",null,[s("设置属性 "),l("code",null,"show-checkbox"),s(" 可以对节点进行勾选。")],-1)),l("div",A,[o(E,{data:a.tree1,"node-key":"id","show-checkbox":"","expand-all":""},null,8,["data"])]),o(r,null,{desc:e(()=>[...n[5]||(n[5]=[])]),highlight:e(()=>[...n[6]||(n[6]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree1"'),l("span",{style:{color:"#B392F0"}}," node-key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"id"'),l("span",{style:{color:"#B392F0"}}," show-checkbox"),l("span",{style:{color:"#B392F0"}}," expand-all"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                tree1: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...n[7]||(n[7]=[])]),default:e(()=>[n[8]||(n[8]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tree :data="tree1" node-key="id" show-checkbox expand-all></zmz-tree>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tree1: [{
                    "label": "树形菜单1",
                    "children": [{
                        "label": "树形菜单1-1",
                        "children": [{
                            "label": "树形菜单1-1-1",
                        }, {
                            "label": "树形菜单1-1-2",
                        }]
                    }, {
                        "label": "树形菜单1-2",
                        "children": [{
                            "label": "树形菜单1-2-1",
                        }, {
                            "label": "树形菜单1-2-2",
                        }]
                    }]
                }],
            };
        }
    };
<\/script>
`)],-1))]),_:1}),n[45]||(n[45]=l("h2",{id:"%E5%B1%95%E5%BC%80%E4%B8%8E%E9%80%89%E4%B8%AD",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%B1%95%E5%BC%80%E4%B8%8E%E9%80%89%E4%B8%AD"},"#"),s(" 展开与选中")],-1)),n[46]||(n[46]=l("p",null,"默认展开和默认选中",-1)),l("div",v,[o(E,{data:a.tree2,"show-checkbox":"","node-key":"id","default-checked-keys":["1-1"],"default-expanded-keys":["1","1-1"]},null,8,["data"])]),o(r,null,{desc:e(()=>[...n[9]||(n[9]=[])]),highlight:e(()=>[...n[10]||(n[10]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree2"'),l("span",{style:{color:"#B392F0"}}," show-checkbox"),l("span",{style:{color:"#B392F0"}}," node-key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"id"'),l("span",{style:{color:"#B392F0"}}," :default-checked-keys"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"['1-1']"`),l("span",{style:{color:"#B392F0"}}," :default-expanded-keys"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},`"['1', '1-1']"`),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                tree2: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...n[11]||(n[11]=[])]),default:e(()=>[n[12]||(n[12]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tree :data="tree2" show-checkbox node-key="id" :default-checked-keys="['1-1']" :default-expanded-keys="['1', '1-1']"></zmz-tree>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tree2: [{
                    "label": "树形菜单1",
                    "id": "1",
                    "children": [{
                        "label": "树形菜单1-1",
                        "id": "1-1",
                        "children": [{
                            "label": "树形菜单1-1-1",
                            "id": "1-1-1",
                        }, {
                            "label": "树形菜单1-1-2",
                            "id": "1-1-2",
                        }]
                    }, {
                        "label": "树形菜单1-2",
                        "id": "1-2",
                        "children": [{
                            "label": "树形菜单1-2-1",
                            "id": "1-2-1",
                        }, {
                            "label": "树形菜单1-2-2",
                            "id": "1-2-2",
                        }]
                    }]
                }],
            };
        }
    };
<\/script>
`)],-1))]),_:1}),n[47]||(n[47]=l("h2",{id:"%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81"},"#"),s(" 禁用状态")],-1)),n[48]||(n[48]=l("p",null,[s("使用"),l("code",null,"disabled"),s("属性,可将某些节点设置为禁用状态")],-1)),l("div",w,[o(E,{data:a.tree3,"node-key":"id","show-checkbox":"","expand-all":""},null,8,["data"])]),o(r,null,{desc:e(()=>[...n[13]||(n[13]=[])]),highlight:e(()=>[...n[14]||(n[14]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree3"'),l("span",{style:{color:"#B392F0"}}," node-key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"id"'),l("span",{style:{color:"#B392F0"}}," expand-all"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"               tree3: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "disabled"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "disabled"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "disabled"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...n[15]||(n[15]=[])]),default:e(()=>[n[16]||(n[16]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tree :data="tree3" node-key="id" expand-all></zmz-tree>
    </div>
</template>
<script>
    export default {
        data() {
            return {
               tree3: [{
                    "label": "树形菜单1",
                    "id": "1",
                    "children": [{
                        "label": "树形菜单1-1",
                        "id": "1-1",
                        "disabled": true,
                        "children": [{
                            "label": "树形菜单1-1-1",
                            "id": "1-1-1",
                            "disabled": true,
                        }, {
                            "label": "树形菜单1-1-2",
                            "id": "1-1-2",
                        }]
                    }, {
                        "label": "树形菜单1-2",
                        "id": "1-2",
                        "children": [{
                            "label": "树形菜单1-2-1",
                            "id": "1-2-1",
                            "disabled": true,
                        }, {
                            "label": "树形菜单1-2-2",
                            "id": "1-2-2",
                        }]
                    }]
                }],
            };
        }
    };
<\/script>
`)],-1))]),_:1}),n[49]||(n[49]=l("h2",{id:"%E6%A0%91%E8%8A%82%E7%82%B9%E7%9A%84%E9%80%89%E6%8B%A9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E6%A0%91%E8%8A%82%E7%82%B9%E7%9A%84%E9%80%89%E6%8B%A9"},"#"),s(" 树节点的选择")],-1)),n[50]||(n[50]=l("p",null,"通过内置方法操作节点",-1)),l("div",N,[o(E,{data:a.tree3,ref:"tree","show-checkbox":"","node-key":"id","expand-all":""},null,8,["data"]),o(i,{style:{"margin-top":"20px"}},{default:e(()=>[o(d,{onClick:c.setCheckedNodes},{default:e(()=>[...n[17]||(n[17]=[s("通过key设置",-1)])]),_:1},8,["onClick"]),o(d,{onClick:c.getCheckedNodes},{default:e(()=>[...n[18]||(n[18]=[s("通过key获取",-1)])]),_:1},8,["onClick"]),o(d,{onClick:c.clearCheckedNodes},{default:e(()=>[...n[19]||(n[19]=[s("清空",-1)])]),_:1},8,["onClick"])]),_:1})]),o(r,null,{desc:e(()=>[...n[20]||(n[20]=[])]),highlight:e(()=>[...n[21]||(n[21]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree3"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree"'),l("span",{style:{color:"#B392F0"}},"  show-checkbox"),l("span",{style:{color:"#B392F0"}}," node-key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"id"'),l("span",{style:{color:"#B392F0"}}," expand-all"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-top:20px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"setCheckedNodes"'),l("span",{style:{color:"#E1E4E8"}},">通过key设置</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"getCheckedNodes"'),l("span",{style:{color:"#E1E4E8"}},">通过key获取</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," @click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"clearCheckedNodes"'),l("span",{style:{color:"#E1E4E8"}},">清空</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                tree3: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "disabled"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "disabled"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "disabled"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            setCheckedNodes"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".$refs.tree."),l("span",{style:{color:"#B392F0"}},"setCheckedNodes"),l("span",{style:{color:"#E1E4E8"}},"(["),l("span",{style:{color:"#9ECBFF"}},"'1-1'"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#9ECBFF"}},"'1-2-1'"),l("span",{style:{color:"#E1E4E8"}},"])")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            getCheckedNodes"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"this"),l("span",{style:{color:"#E1E4E8"}},".$refs.tree."),l("span",{style:{color:"#B392F0"}},"getCheckedNodes"),l("span",{style:{color:"#E1E4E8"}},"())")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            clearCheckedNodes"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".$refs.tree."),l("span",{style:{color:"#B392F0"}},"setCheckedNodes"),l("span",{style:{color:"#E1E4E8"}},"([])")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...n[22]||(n[22]=[])]),default:e(()=>[n[23]||(n[23]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tree :data="tree3" ref="tree"  show-checkbox node-key="id" expand-all></zmz-tree>
        <zmz-space style="margin-top:20px;">
            <zmz-button @click="setCheckedNodes">通过key设置</zmz-button>
            <zmz-button @click="getCheckedNodes">通过key获取</zmz-button>
            <zmz-button @click="clearCheckedNodes">清空</zmz-button>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tree3: [{
                    "label": "树形菜单1",
                    "id": "1",
                    "children": [{
                        "label": "树形菜单1-1",
                        "id": "1-1",
                        "disabled": true,
                        "children": [{
                            "label": "树形菜单1-1-1",
                            "id": "1-1-1",
                            "disabled": true,
                        }, {
                            "label": "树形菜单1-1-2",
                            "id": "1-1-2",
                        }]
                    }, {
                        "label": "树形菜单1-2",
                        "id": "1-2",
                        "children": [{
                            "label": "树形菜单1-2-1",
                            "id": "1-2-1",
                            "disabled": true,
                        }, {
                            "label": "树形菜单1-2-2",
                            "id": "1-2-2",
                        }]
                    }]
                }],
            };
        },
        methods: {
            setCheckedNodes (data) {
                this.$refs.tree.setCheckedNodes(['1-1', '1-2-1'])
            },
            getCheckedNodes (data) {
                console.log(this.$refs.tree.getCheckedNodes())
            },
            clearCheckedNodes (data) {
                this.$refs.tree.setCheckedNodes([])
            }
        }
    };
<\/script>
`)],-1))]),_:1}),n[51]||(n[51]=l("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8A%82%E7%82%B9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8A%82%E7%82%B9"},"#"),s(" 自定义节点")],-1)),n[52]||(n[52]=l("p",null,"节点的内容支持自定义，可以在节点区添加按钮或图标等内容",-1)),l("div",T,[o(i,{style:{width:"100%"}},{default:e(()=>[o(y,{style:{width:"50%"}},{default:e(()=>[n[25]||(n[25]=l("div",{style:{"text-align":"center","margin-bottom":"20px"}},"使用slot插槽",-1)),o(E,{data:a.tree3,ref:"tree","show-checkbox":"","node-key":"id","expand-all":""},{default:e(({node:F})=>[l("div",L,[l("span",null,f(F.label),1),o(d,{text:""},{default:e(()=>[...n[24]||(n[24]=[s("操作",-1)])]),_:1})])]),_:1},8,["data"])]),_:1}),o(y,{style:{width:"50%"}},{default:e(()=>[n[26]||(n[26]=l("div",{style:{"text-align":"center","margin-bottom":"20px"}},"使用render-content函数",-1)),o(E,{data:a.tree3,ref:"tree","show-checkbox":"","node-key":"id","expand-all":"","render-content":c.renderContent},null,8,["data","render-content"])]),_:1})]),_:1})]),o(r,null,{desc:e(()=>[...n[27]||(n[27]=[])]),highlight:e(()=>[...n[28]||(n[28]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:100%;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:50%;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text-align: center;margin-bottom:20px;"'),l("span",{style:{color:"#E1E4E8"}},">使用slot插槽</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree3"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree"'),l("span",{style:{color:"#B392F0"}},"  show-checkbox"),l("span",{style:{color:"#B392F0"}}," node-key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"id"'),l("span",{style:{color:"#B392F0"}}," expand-all"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," #"),l("span",{style:{color:"#B392F0"}},"default"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},"{ node }"),l("span",{style:{color:"#9ECBFF"}},'"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"display:flex;"'),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">{{node.label}}</"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},"><"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," text"),l("span",{style:{color:"#E1E4E8"}},">操作</"),l("span",{style:{color:"#85E89D"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width:50%;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text-align: center;margin-bottom:20px;"'),l("span",{style:{color:"#E1E4E8"}},">使用render-content函数</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree3"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree"'),l("span",{style:{color:"#B392F0"}},"  show-checkbox"),l("span",{style:{color:"#B392F0"}}," node-key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"id"'),l("span",{style:{color:"#B392F0"}}," expand-all"),l("span",{style:{color:"#B392F0"}}," :render-content"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"renderContent"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                tree3: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "disabled"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "disabled"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "disabled"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "id"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        renderContent"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"h"),l("span",{style:{color:"#E1E4E8"}},", { "),l("span",{style:{color:"#FFAB70"}},"node"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"store"),l("span",{style:{color:"#E1E4E8"}}," }) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," (")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#9ECBFF"}},'"custom-tree-node"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">{node.label}</"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#79B8FF"}},"zmz-button"),l("span",{style:{color:"#B392F0"}}," text"),l("span",{style:{color:"#E1E4E8"}},">操作</"),l("span",{style:{color:"#79B8FF"}},"zmz-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                </"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...n[29]||(n[29]=[])]),default:e(()=>[n[30]||(n[30]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space style="width:100%;">
            <zmz-space-item style="width:50%;">
                <div style="text-align: center;margin-bottom:20px;">使用slot插槽</div>
                <zmz-tree :data="tree3" ref="tree"  show-checkbox node-key="id" expand-all>
                    <template #default="{ node }">
                        <div style="display:flex;"><span>{{node.label}}</span><zmz-button text>操作</zmz-button></div>
                    </template>
                </zmz-tree>
            </zmz-space-item>
            <zmz-space-item style="width:50%;">
                <div style="text-align: center;margin-bottom:20px;">使用render-content函数</div>
                <zmz-tree :data="tree3" ref="tree"  show-checkbox node-key="id" expand-all :render-content="renderContent"></zmz-tree>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tree3: [{
                    "label": "树形菜单1",
                    "id": "1",
                    "children": [{
                        "label": "树形菜单1-1",
                        "id": "1-1",
                        "disabled": true,
                        "children": [{
                            "label": "树形菜单1-1-1",
                            "id": "1-1-1",
                            "disabled": true,
                        }, {
                            "label": "树形菜单1-1-2",
                            "id": "1-1-2",
                        }]
                    }, {
                        "label": "树形菜单1-2",
                        "id": "1-2",
                        "children": [{
                            "label": "树形菜单1-2-1",
                            "id": "1-2-1",
                            "disabled": true,
                        }, {
                            "label": "树形菜单1-2-2",
                            "id": "1-2-2",
                        }]
                    }]
                }],
            };
        },
    methods: {
        renderContent(h, { node, data, store }) {
            return (
            <span class="custom-tree-node">
                <span>{node.label}</span>
                <span>
                <zmz-button text>操作</zmz-button>
                </span>
            </span>);
        }
    }
    };
<\/script>
`)],-1))]),_:1}),n[53]||(n[53]=l("h2",{id:"%E6%90%9C%E7%B4%A2%E8%8A%82%E7%82%B9",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E6%90%9C%E7%B4%A2%E8%8A%82%E7%82%B9"},"#"),s(" 搜索节点")],-1)),n[54]||(n[54]=l("p",null,"通过关键字过滤树节点",-1)),l("div",S,[o(i,{mode:"vertical"},{default:e(()=>[o(y,null,{default:e(()=>[o(b,{modelValue:a.keyword,"onUpdate:modelValue":n[0]||(n[0]=F=>a.keyword=F),onOnBlur:c.handleFilter,placeholder:"输入关键字进行过滤"},null,8,["modelValue","onOnBlur"])]),_:1}),o(y,null,{default:e(()=>[o(E,{data:a.tree1,"node-key":"id",ref:"zmztree","expand-all":"","filter-node-method":c.handleFilterNodeMethod},null,8,["data","filter-node-method"])]),_:1})]),_:1})]),o(r,null,{desc:e(()=>[...n[31]||(n[31]=[])]),highlight:e(()=>[...n[32]||(n[32]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#B392F0"}}," mode"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"vertical"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    <"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#B392F0"}}," v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"keyword"'),l("span",{style:{color:"#B392F0"}}," @on-blur"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleFilter"'),l("span",{style:{color:"#B392F0"}},"  placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"输入关键字进行过滤"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-input"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            <"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                <"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree1"'),l("span",{style:{color:"#B392F0"}}," node-key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"id"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmztree"'),l("span",{style:{color:"#B392F0"}}," expand-all"),l("span",{style:{color:"#B392F0"}}," :filter-node-method"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleFilterNodeMethod"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            </"),l("span",{style:{color:"#85E89D"}},"zmz-space-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"zmz-space"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                tree1: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                        "children"'),l("span",{style:{color:"#E1E4E8"}},": [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }, {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                            "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1-2-2"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    }]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            handleFilter"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"data"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#79B8FF"}},"                this"),l("span",{style:{color:"#E1E4E8"}},".$refs["),l("span",{style:{color:"#9ECBFF"}},"'zmztree'"),l("span",{style:{color:"#E1E4E8"}},"]."),l("span",{style:{color:"#B392F0"}},"filter"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"this"),l("span",{style:{color:"#E1E4E8"}},".keyword)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            handleFilterNodeMethod"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#FFAB70"}},"kerword"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"node"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"                if"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"!"),l("span",{style:{color:"#E1E4E8"}},"kerword) "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#79B8FF"}}," true"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"                return"),l("span",{style:{color:"#E1E4E8"}}," node.label."),l("span",{style:{color:"#B392F0"}},"indexOf"),l("span",{style:{color:"#E1E4E8"}},"(kerword) "),l("span",{style:{color:"#F97583"}},"!=="),l("span",{style:{color:"#F97583"}}," -"),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...n[33]||(n[33]=[])]),default:e(()=>[n[34]||(n[34]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                    <zmz-input v-model="keyword" @on-blur="handleFilter"  placeholder="输入关键字进行过滤"></zmz-input>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-tree :data="tree1" node-key="id" ref="zmztree" expand-all :filter-node-method="handleFilterNodeMethod"></zmz-tree>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tree1: [{
                    "label": "树形菜单1",
                    "children": [{
                        "label": "树形菜单1-1",
                        "children": [{
                            "label": "树形菜单1-1-1",
                        }, {
                            "label": "树形菜单1-1-2",
                        }]
                    }, {
                        "label": "树形菜单1-2",
                        "children": [{
                            "label": "树形菜单1-2-1",
                        }, {
                            "label": "树形菜单1-2-2",
                        }]
                    }]
                }],
            };
        },
        methods: {
            handleFilter (data) {
                this.$refs['zmztree'].filter(this.keyword)
            },
            handleFilterNodeMethod(kerword, node) {
                if (!kerword) return true;
                return node.label.indexOf(kerword) !== -1;
            }
        }
    };
<\/script>
`)],-1))]),_:1}),n[55]||(n[55]=l("h2",{id:"%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD",tabindex:"-1"},[l("a",{class:"zmz-markdown-article-anchor",href:"#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD"},"#"),s(" 异步加载")],-1)),n[56]||(n[56]=l("p",null,"使用 lazy-load-data 属性可以异步加载子节点数据，需要给数据增加 loading 来标识当前是否在加载中。",-1)),l("div",V,[o(E,{data:a.tree4,"node-key":"id",ref:"zmztree","lazy-load-data":c.handleLazyLoadData},null,8,["data","lazy-load-data"])]),o(r,null,{desc:e(()=>[...n[35]||(n[35]=[])]),highlight:e(()=>[...n[36]||(n[36]=[l("pre",{class:"shiki-demo",style:{"background-color":"#24292e",color:"#e1e4e8"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-block"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#B392F0"}}," :data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"tree4"'),l("span",{style:{color:"#B392F0"}}," node-key"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"id"'),l("span",{style:{color:"#B392F0"}}," ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"zmztree"'),l("span",{style:{color:"#B392F0"}}," :lazy-load-data"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleLazyLoadData"'),l("span",{style:{color:"#E1E4E8"}},"></"),l("span",{style:{color:"#85E89D"}},"zmz-tree"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"    export"),l("span",{style:{color:"#F97583"}}," default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"        data"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"            return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                tree4: [{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "label"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#9ECBFF"}},'"树形菜单1"'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "loading"'),l("span",{style:{color:"#E1E4E8"}},": "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9ECBFF"}},'                    "children"'),l("span",{style:{color:"#E1E4E8"}},": []")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        methods: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"            handleLazyLoadData"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"item"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"callback"),l("span",{style:{color:"#E1E4E8"}},") {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"                setTimeout"),l("span",{style:{color:"#E1E4E8"}},"(() "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"                    const"),l("span",{style:{color:"#79B8FF"}}," data"),l("span",{style:{color:"#F97583"}}," ="),l("span",{style:{color:"#E1E4E8"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            label: "),l("span",{style:{color:"#9ECBFF"}},"'异步子集'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            loading: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                            children: []")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                    ];")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#B392F0"}},"                    callback"),l("span",{style:{color:"#E1E4E8"}},"(data);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"                }, "),l("span",{style:{color:"#79B8FF"}},"1000"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])],-1)])]),code:e(()=>[...n[37]||(n[37]=[])]),default:e(()=>[n[38]||(n[38]=l("pre",null,[l("code",{class:"language-html"},`<template>
    <div class="demo-block">
        <zmz-tree :data="tree4" node-key="id" ref="zmztree" :lazy-load-data="handleLazyLoadData"></zmz-tree>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tree4: [{
                    "label": "树形菜单1",
                    "loading": false,
                    "children": []
                }],
            };
        },
        methods: {
            handleLazyLoadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            label: '异步子集',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    };
<\/script>
`)],-1))]),_:1}),n[57]||(n[57]=h('<h2 id="tree-%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tree-%E5%B1%9E%E6%80%A7">#</a> Tree 属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>绑定参数</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>node-key</td><td>唯一标识</td><td>String</td><td>—</td><td>id</td></tr><tr><td>expand-all</td><td>是否默认展开所有节点</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>indent</td><td>层级偏移距离</td><td>Number</td><td>—</td><td>15</td></tr><tr><td>expand-node-click</td><td>是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点图标的时候才会展开或者收缩节点。</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>multiple</td><td>是否支持多选</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>show-checkbox</td><td>是否显示复选框</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>empty-text</td><td>空提示</td><td>String</td><td>—</td><td>暂无数据</td></tr><tr><td>icon</td><td>自定义展开图标</td><td>String</td><td>—</td><td>—</td></tr><tr><td>default-checked-keys</td><td>默认有复选框节点的 key 的数组</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>default-select-keys</td><td>默认无复选框节点的 key 的数组</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>default-expanded-keys</td><td>默认展开的节点的 key 的数组</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>check-strictly</td><td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法父节点</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>lazy-load-data</td><td>懒加载数据方法</td><td>Funciton</td><td>—</td><td>—</td></tr><tr><td>filter-node-method</td><td>过滤节点方法</td><td>Funciton</td><td>—</td><td>—</td></tr><tr><td>render-content</td><td>自定义渲染节点方法</td><td>Funciton</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="tree-%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89-props%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tree-%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89-props%E5%B1%9E%E6%80%A7">#</a> Tree 节点自定义 props属性</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>指定节点标签为节点对象的某个属性值</td><td>String</td><td>—</td><td>label</td></tr><tr><td>children</td><td>指定子树为节点对象的某个属性值</td><td>String</td><td>—</td><td>children</td></tr></tbody></table></div><h2 id="tree-%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tree-%E4%BA%8B%E4%BB%B6">#</a> Tree 事件</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>on-select-change</td><td>选中回调</td><td>function(node)</td></tr><tr><td>on-check-change</td><td>复选回调</td><td>function(node)</td></tr><tr><td>on-filter-change</td><td>过滤回调</td><td>function(node)</td></tr><tr><td>on-expand-change</td><td>展开回调</td><td>function(keyword, data)</td></tr></tbody></table></div><h2 id="tree-%E6%96%B9%E6%B3%95" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tree-%E6%96%B9%E6%B3%95">#</a> Tree 方法</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>事件名称</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>getNodes</td><td>获取节点</td><td>function(nodekey)</td></tr><tr><td>getExpandedNodes</td><td>获取展开节点</td><td>function()</td></tr><tr><td>setExpandedNodes</td><td>设置展开节点</td><td>function(nodekey)</td></tr><tr><td>getSelectNodes</td><td>获取选中节点</td><td>function()</td></tr><tr><td>setSelectNodes</td><td>设置选中节点</td><td>function(nodekey)</td></tr><tr><td>getCheckedNodes</td><td>获取复选节点</td><td>function()</td></tr><tr><td>setCheckedNodes</td><td>设置复选节点</td><td>function(nodekey)</td></tr><tr><td>getSemiselectionNodes</td><td>获取半选节点</td><td>function()</td></tr><tr><td>getCheckedAndSemiselectionNodes</td><td>获取复选半选节点</td><td>function()</td></tr><tr><td>remove</td><td>删除节点</td><td>function(nodekey)</td></tr><tr><td>append</td><td>当前节点添加子节点</td><td>function(data, nodekey)</td></tr><tr><td>insertBefore</td><td>节点之前添加</td><td>function(data, nodekey)</td></tr><tr><td>insertAfter</td><td>节点之后添加</td><td>function(data, nodekey)</td></tr></tbody></table></div><h2 id="tree-%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tree-%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1">#</a> Tree 数据对象</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>标题</td><td>String</td><td>—</td><td>—</td></tr><tr><td>children</td><td>子集</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用字段</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>懒加载字段</td><td>—</td><td>—</td><td>false</td></tr><tr><td>current</td><td>选择字段</td><td>—</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>复选字段</td><td>—</td><td>—</td><td>—</td></tr></tbody></table></div><h2 id="tree-%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tree-%E6%8F%92%E6%A7%BD">#</a> Tree 插槽</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>默认插槽</td></tr><tr><td>icon</td><td>图标插槽</td></tr></tbody></table></div><h2 id="tree-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#tree-%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F">#</a> Tree 默认样式变量</h2><div class="zmz-markdown-article-table"><table><thead><tr><th>less变量</th><th>css3变量</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>@zmz-tree-item-height</td><td>–zmz-tree-item-height</td><td>30px</td><td>高度</td></tr><tr><td>@zmz-tree-item-color</td><td>–zmz-tree-item-color</td><td>#3f536e</td><td>文字颜色</td></tr><tr><td>@zmz-tree-item-active-color</td><td>–zmz-tree-item-active-color</td><td>确认主题色</td><td>文字激活颜色</td></tr><tr><td>@zmz-tree-item-font-size</td><td>–zmz-tree-item-font-size</td><td>12px</td><td>文字大小</td></tr><tr><td>@zmz-tree-empty-color</td><td>–zmz-tree-empty-color</td><td>默认主题颜色</td><td>空文字颜色</td></tr><tr><td>@zmz-tree-empty-font-size</td><td>–zmz-tree-empty-font-size</td><td>12px</td><td>空文字大小</td></tr></tbody></table></div>',14))])}const Z=z(x,[["render",M]]);export{Z as default};
