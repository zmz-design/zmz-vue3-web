<script>
import { ZmzButton } from '../../../../packages/index.js';
export default {
    metaInfo() {
        return {
            title: this.title,
            meta: [
                {
                    name: 'keywords',
                    content: this.keywords
                },
                {
                    name: 'description',
                    content: this.description
                }
            ]
        };
    },
    data () {
        return {
            title: 'Tree 树型' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
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
            keyword: '',
            tree4: [{
                "label": "树形菜单1",
                "loading": false,
                "children": []
            }],
        }
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
        },
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        handleFilter (data) {
            this.$refs['zmztree'].filter(this.keyword)
        },
        renderContent(h, { node, data, store }) {
            return h('span', {
                 class:"custom-tree-node"
            }, [
                h('span', {}, node.label),
                h('span', {}, [
                    h(ZmzButton, {
                        text: true
                    }, () => '操作')
                ])
            ])
        },
        handleFilterNodeMethod(kerword, node) {
            if (!kerword) return true;
            return node.label.indexOf(kerword) !== -1;
        },
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
}
</script>
# Tree 树型
----
## 基础用法
用清晰的层级结构展示信息，可展开或折叠。
<div class="demo-block">
    <zmz-tree :data="tree1" :expand-node-click="false" expand-all></zmz-tree>
</div>

::: demo
```html
<template>
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
</script>
```
:::

## 可勾选
设置属性 ``show-checkbox`` 可以对节点进行勾选。
<div class="demo-block">
    <zmz-tree :data="tree1" node-key="id" show-checkbox expand-all></zmz-tree>
</div>

::: demo
```html
<template>
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
</script>
```
:::

## 展开与选中
默认展开和默认选中
<div class="demo-block">
    <zmz-tree :data="tree2" show-checkbox node-key="id" :default-checked-keys="['1-1']" :default-expanded-keys="['1', '1-1']"></zmz-tree>
</div>

::: demo
```html
<template>
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
</script>
```
:::

## 禁用状态
使用```disabled```属性,可将某些节点设置为禁用状态
<div class="demo-block">
    <zmz-tree :data="tree3" node-key="id" show-checkbox expand-all></zmz-tree>
</div>

::: demo
```html
<template>
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
</script>
```
:::

## 树节点的选择
通过内置方法操作节点
<div class="demo-block">
    <zmz-tree :data="tree3" ref="tree"  show-checkbox node-key="id" expand-all></zmz-tree>
    <zmz-space style="margin-top:20px;">
        <zmz-button @click="setCheckedNodes">通过key设置</zmz-button>
        <zmz-button @click="getCheckedNodes">通过key获取</zmz-button>
        <zmz-button @click="clearCheckedNodes">清空</zmz-button>
    </zmz-space>
</div>

::: demo
```html
<template>
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
</script>
```
:::

## 自定义节点
节点的内容支持自定义，可以在节点区添加按钮或图标等内容
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

::: demo
```html
<template>
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
</script>
```
:::

## 搜索节点
通过关键字过滤树节点
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

::: demo
```html
<template>
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
</script>
```
:::

## 异步加载
使用 lazy-load-data 属性可以异步加载子节点数据，需要给数据增加 loading 来标识当前是否在加载中。
<div class="demo-block">
    <zmz-tree :data="tree4" node-key="id" ref="zmztree" :lazy-load-data="handleLazyLoadData"></zmz-tree>
</div>

::: demo
```html
<template>
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
</script>
```
:::

## Tree 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|-------------------- |-------------- |---------- |--------------------------------  |-------- |
| data | 绑定参数 | Array | — | — |
| node-key | 唯一标识 | String | — | id |
| expand-all | 是否默认展开所有节点 | Boolean | — | false |
| indent | 层级偏移距离 | Number | — | 15 |
| expand-node-click | 	是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点图标的时候才会展开或者收缩节点。 | Boolean | — | true |
| multiple |     是否支持多选 | Boolean | — | false |
| show-checkbox |     是否显示复选框 | Boolean | — | false |
| empty-text | 空提示 | String | — | 暂无数据 |
| icon | 自定义展开图标 | String | — | — |
| default-checked-keys | 默认有复选框节点的 key 的数组 | Array | — | — |
| default-select-keys | 默认无复选框节点的 key 的数组 | Array | — | — |
| default-expanded-keys | 默认展开的节点的 key 的数组 | Array | — | — |
| check-strictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法父节点 | Boolean | — | false |
| lazy-load-data | 懒加载数据方法 | Funciton | — | —  |
| filter-node-method | 过滤节点方法 | Funciton | — | —  |
| render-content | 自定义渲染节点方法 | Funciton | — | —  |


## Tree 节点自定义 props属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|-------------------- |-------------- |---------- |--------------------------------  |-------- |
| label | 指定节点标签为节点对象的某个属性值 | String | — | label |
| children | 指定子树为节点对象的某个属性值 | String | — | children |

## Tree 事件
| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-select-change | 选中回调 | function(node) |
| on-check-change | 复选回调 | function(node) |
| on-filter-change | 过滤回调 | function(node) |
| on-expand-change | 展开回调 | function(keyword, data) |

## Tree 方法
| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| getNodes | 获取节点 | function(nodekey) |
| getExpandedNodes | 获取展开节点 | function() |
| setExpandedNodes | 设置展开节点 | function(nodekey) |
| getSelectNodes | 获取选中节点 | function() |
| setSelectNodes | 设置选中节点 | function(nodekey) |
| getCheckedNodes | 获取复选节点 | function() |
| setCheckedNodes | 设置复选节点 | function(nodekey) |
| getSemiselectionNodes | 获取半选节点 | function() |
| getCheckedAndSemiselectionNodes | 获取复选半选节点 | function() |
| remove | 删除节点 | function(nodekey) |
| append | 当前节点添加子节点 | function(data, nodekey) |
| insertBefore | 节点之前添加 | function(data, nodekey) |
| insertAfter | 节点之后添加 | function(data, nodekey) |

## Tree 数据对象
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 标题 | String | — | — |
| children | 子集 | Array | — | — |
| disabled | 禁用字段 | Boolean | — | — |
| loading | 懒加载字段 | — | — | false |
| current | 选择字段 | — | — | — |
| checked | 复选字段 | — | — | — |

## Tree 插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |
| icon | 图标插槽 |

## Tree 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-tree-item-height              |  --zmz-tree-item-height                  | 30px     | 高度      |
| @zmz-tree-item-color          |  --zmz-tree-item-color           | #3f536e       | 文字颜色        |
| @zmz-tree-item-active-color      |  --zmz-tree-item-active-color         | 确认主题色         | 文字激活颜色    |
| @zmz-tree-item-font-size      |  --zmz-tree-item-font-size         | 12px          | 文字大小      |
| @zmz-tree-empty-color       |  --zmz-tree-empty-color          | 默认主题颜色       | 空文字颜色        |
| @zmz-tree-empty-font-size   |  --zmz-tree-empty-font-size      | 12px          | 空文字大小    |