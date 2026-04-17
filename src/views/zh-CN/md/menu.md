<script>
export default{
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
            title: 'Menu 菜单' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            defaultActiveName: ['1'],
            data: true,
            effect: 'primary'
        } 
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onSelect(data) {
            console.log(data)
        }
    }
}
</script>
# Menu 菜单
----
## 概述
为网站提供菜单导航指引前进方向！
## 基础用法

## 顶栏
网站广泛的基础用法。

<div class="demo-block">
    <zmz-menu :default-active-name="['1']"  mode="horizontal">
        <zmz-menu-item name="1">
            <i class="zmz-icon--home"></i>
            <span>我的首页</span>
        </zmz-menu-item>
        <zmz-menu-submenu name="2">
            <template #title>
                <i class="zmz-icon--database"></i>
                <span>数据管理</span>
            </template>
            <zmz-menu-group title="组1">
                <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
            </zmz-menu-group>
            <zmz-menu-group title="组2">
                <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
            </zmz-menu-group>
        </zmz-menu-submenu>
        <zmz-menu-submenu name="3">
            <template #title>
                <i class="zmz-icon--console"></i>
                <span>命令管理</span>
            </template>
            <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
            <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
            <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
            <zmz-menu-submenu name="3-4">
                <template #title>
                    <span>选项4</span>
                </template>
                <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4-4">
                    <template #title>
                        <span>选项5</span>
                    </template>
                    <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3-4-5">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
        </zmz-menu-submenu>
        <zmz-menu-item name="4" disabled>
            <i class="zmz-icon--setup"></i>
            <span>系统管理</span>
        </zmz-menu-item>
    </zmz-menu>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-menu :default-active-name="['1']"  mode="horizontal">
            <zmz-menu-item name="1">
                <i class="zmz-icon--home"></i>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <i class="zmz-icon--setup"></i>
                <span>系统管理</span>
            </zmz-menu-item>
        </zmz-menu>
    </div>
</template>
```
:::

## 侧栏
垂直菜单，可内嵌子菜单。

<div class="demo-block">
    <div style="width:240px;">
        <zmz-menu :default-active-name="['1']">
            <zmz-menu-item name="1">
                <i class="zmz-icon--home"></i>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1-1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2-1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3-1</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4-1</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1-1-1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2-1-1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3-1-1</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4-2</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1-1-2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2-1-2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3-1-2</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <i class="zmz-icon--setup"></i>
                <span>系统管理</span>
            </zmz-menu-item>
        </zmz-menu>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="width:240px;">
            <zmz-menu :default-active-name="['1']">
                <zmz-menu-item name="1">
                    <i class="zmz-icon--home"></i>
                    <span>我的首页</span>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <i class="zmz-icon--setup"></i>
                    <span>系统管理</span>
                </zmz-menu-item>
            </zmz-menu>
        </div>
    </div>
</template>
```
:::

## 内置主题
通过设置属性 effect 为 light、dark、primary 可以选择主题。

<div class="demo-block">
   <zmz-space  mode="vertical">
        <zmz-menu :default-active-name="['1', '4']" mode="horizontal" effect="light">
            <zmz-menu-item name="1">
                <i class="zmz-icon--home"></i>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1" disabled><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <i class="zmz-icon--setup"></i>
                <span>系统管理</span>
            </zmz-menu-item>
        </zmz-menu>
        <zmz-menu :default-active-name="['1']" mode="horizontal" effect="primary">
            <zmz-menu-item name="1">
                <i class="zmz-icon--home"></i>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <i class="zmz-icon--setup"></i>
                <span>系统管理</span>
            </zmz-menu-item>
        </zmz-menu>
        <zmz-menu :default-active-name="['1']" mode="horizontal" effect="dark">
            <zmz-menu-item name="1">
                <i class="zmz-icon--home"></i>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <i class="zmz-icon--setup"></i>
                <span>系统管理</span>
            </zmz-menu-item>
        </zmz-menu>
    </zmz-space>
    <zmz-space>
        <zmz-menu :default-active-name="['1']" effect="light" style="width:240px;">
            <zmz-menu-item name="1">
                <i class="zmz-icon--home"></i>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <i class="zmz-icon--setup"></i>
                <span>系统管理</span>
            </zmz-menu-item>
        </zmz-menu>
        <zmz-menu :default-active-name="['1']" effect="primary" style="width:240px;">
            <zmz-menu-item name="1">
                <i class="zmz-icon--home"></i>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <i class="zmz-icon--setup"></i>
                <span>系统管理</span>
            </zmz-menu-item>
        </zmz-menu>
        <zmz-menu :default-active-name="['1']" effect="dark" style="width:240px;">
            <zmz-menu-item name="1">
                <i class="zmz-icon--home"></i>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <i class="zmz-icon--setup"></i>
                <span>系统管理</span>
            </zmz-menu-item>
        </zmz-menu>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div class="demo-block__header">
            <zmz-menu :default-active-name="['1', '4']" mode="horizontal" effect="light">
                <zmz-menu-item name="1">
                    <i class="zmz-icon--home"></i>
                    <span>我的首页</span>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <i class="zmz-icon--setup"></i>
                    <span>系统管理</span>
                </zmz-menu-item>
            </zmz-menu>
            <zmz-menu :default-active-name="['1']" mode="horizontal" effect="primary">
                <zmz-menu-item name="1">
                    <i class="zmz-icon--home"></i>
                    <span>我的首页</span>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <i class="zmz-icon--setup"></i>
                    <span>系统管理</span>
                </zmz-menu-item>
            </zmz-menu>
            <zmz-menu :default-active-name="['1']" mode="horizontal" effect="dark">
                <zmz-menu-item name="1">
                    <i class="zmz-icon--home"></i>
                    <span>我的首页</span>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <i class="zmz-icon--setup"></i>
                    <span>系统管理</span>
                </zmz-menu-item>
            </zmz-menu>
        </div>
        <div  class="demo-block__footer">
            <zmz-menu :default-active-name="['1']" effect="light">
                <zmz-menu-item name="1">
                    <i class="zmz-icon--home"></i>
                    <span>我的首页</span>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <i class="zmz-icon--setup"></i>
                    <span>系统管理</span>
                </zmz-menu-item>
            </zmz-menu>
            <zmz-menu :default-active-name="['1']" effect="primary">
                <zmz-menu-item name="1">
                    <i class="zmz-icon--home"></i>
                    <span>我的首页</span>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <i class="zmz-icon--setup"></i>
                    <span>系统管理</span>
                </zmz-menu-item>
            </zmz-menu>
            <zmz-menu :default-active-name="['1']" effect="dark">
                <zmz-menu-item name="1">
                    <i class="zmz-icon--home"></i>
                    <span>我的首页</span>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <i class="zmz-icon--setup"></i>
                    <span>系统管理</span>
                </zmz-menu-item>
            </zmz-menu>
        </div>
    </div>
</template>
```
:::

## 收缩
垂直菜单，可内嵌子菜单。

<div class="demo-block">
    <div>
        <zmz-radio-group v-model="data">
            <zmz-radio :label="false" :value="false">展开</zmz-radio>
            <zmz-radio :label="true" :value="true">收缩</zmz-radio>
        </zmz-radio-group>
    </div>
    <div class="demo-block__footer">
        <zmz-menu :default-active-name="['1']" :shrink="data"  :style="{'width':!data?'200px':'60px'}">
            <zmz-menu-item name="1">
                <template #title>
                    <i class="zmz-icon--home"></i>
                </template>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <span>系统管理</span>
                <template #title>
                    <i class="zmz-icon--setup"></i>
                </template>
            </zmz-menu-item>
        </zmz-menu>
        <zmz-menu :default-active-name="['1']" :shrink="data" effect="primary" :style="{'width':!data?'200px':'60px'}">
            <zmz-menu-item name="1">
                <span>我的首页</span>
                <template #title>
                    <i class="zmz-icon--home"></i>
                </template>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <span>系统管理</span>
                <template #title>
                    <i class="zmz-icon--setup"></i>
                </template>
            </zmz-menu-item>
        </zmz-menu>
        <zmz-menu :default-active-name="['1']" :shrink="data" effect="dark"  :style="{'width':!data?'200px':'60px'}">
            <zmz-menu-item name="1">
                <span>我的首页</span>
                <template #title>
                    <i class="zmz-icon--home"></i>
                </template>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <span>系统管理</span>
                <template #title>
                    <i class="zmz-icon--setup"></i>
                </template>
            </zmz-menu-item>
        </zmz-menu>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div>
            <zmz-radio-group v-model="data">
                <zmz-radio :label="false" :value="false">展开</zmz-radio>
                <zmz-radio :label="true" :value="true">收缩</zmz-radio>
            </zmz-radio-group>
        </div>
        <div class="demo-block__footer">
            <zmz-menu :default-active-name="['1']" :shrink="data"  :style="{'width':!data?'200px':'60px'}">
                <zmz-menu-item name="1">
                    <template #title>
                        <i class="zmz-icon--home"></i>
                    </template>
                    <span>我的首页</span>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <span>系统管理</span>
                    <template #title>
                        <i class="zmz-icon--setup"></i>
                    </template>
                </zmz-menu-item>
            </zmz-menu>
            <zmz-menu :default-active-name="['1']" :shrink="data" effect="primary" :style="{'width':!data?'200px':'60px'}">
                <zmz-menu-item name="1">
                    <span>我的首页</span>
                    <template #title>
                        <i class="zmz-icon--home"></i>
                    </template>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <span>系统管理</span>
                    <template #title>
                        <i class="zmz-icon--setup"></i>
                    </template>
                </zmz-menu-item>
            </zmz-menu>
            <zmz-menu :default-active-name="['1']" :shrink="data" effect="dark"  :style="{'width':!data?'200px':'60px'}">
                <zmz-menu-item name="1">
                    <span>我的首页</span>
                    <template #title>
                        <i class="zmz-icon--home"></i>
                    </template>
                </zmz-menu-item>
                <zmz-menu-submenu name="2">
                    <template #title>
                        <i class="zmz-icon--database"></i>
                        <span>数据管理</span>
                    </template>
                    <zmz-menu-group title="组1">
                        <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                    </zmz-menu-group>
                    <zmz-menu-group title="组2">
                        <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                    </zmz-menu-group>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3">
                    <template #title>
                        <i class="zmz-icon--console"></i>
                        <span>命令管理</span>
                    </template>
                    <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                        <zmz-menu-submenu name="3-4-4">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                        <zmz-menu-submenu name="3-4-5">
                            <template #title>
                                <span>选项4</span>
                            </template>
                            <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                            <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                        </zmz-menu-submenu>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
                <zmz-menu-item name="4" disabled>
                    <span>系统管理</span>
                    <template #title>
                        <i class="zmz-icon--setup"></i>
                    </template>
                </zmz-menu-item>
            </zmz-menu>
        </div>
    </div>
</template>
```
:::


## 自定义颜色
使用内置属性自定义颜色

<div class="demo-block">
    <zmz-menu :default-active-name="[]" style="width:240px;--zmz-menu-background-color:#393d49;--zmz-menu-subbackground-color:#282b33;--zmz-menu-text-color:#c1c2c6;--zmz-menu-subtext-color:#c1c2c6;--zmz-menu-text-active-color:#fff;--zmz-menu-subtext-active-color:#fff;--zmz-menu-text-hover-color:#fff;--zmz-menu-text-border-color:#282b33;--zmz-menu-text-hover-border-color:#282b33;--zmz-menu-text-active-border-color:#282b33;--zmz-menu-subtext-hover-color:#fff;--zmz-menu-text-background-color:#393d49;--zmz-menu-text-active-background-color:#393d49;--zmz-menu-subtext-background-color:#282b33;--zmz-menu-text-hover-background-color:#393d49;--zmz-menu-subtext-hover-background-color:#393d49;--zmz-menu-subtext-active-background-color:#393d49">
        <zmz-menu-item name="1">
            <i class="zmz-icon--home"></i>
            <span>我的首页</span>
        </zmz-menu-item>
        <zmz-menu-submenu name="2">
            <template #title>
                <i class="zmz-icon--database"></i>
                <span>数据管理</span>
            </template>
            <zmz-menu-group title="组1">
                <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
            </zmz-menu-group>
            <zmz-menu-group title="组2">
                <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
            </zmz-menu-group>
        </zmz-menu-submenu>
        <zmz-menu-submenu name="3">
            <template #title>
                <i class="zmz-icon--console"></i>
                <span>命令管理</span>
            </template>
            <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
            <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
            <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
            <zmz-menu-submenu name="3-4">
                <template #title>
                    <span>选项4</span>
                </template>
                <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                </zmz-menu-submenu>
                <zmz-menu-submenu name="3-4-5">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
        </zmz-menu-submenu>
        <zmz-menu-item name="4" disabled>
            <i class="zmz-icon--setup"></i>
            <span>系统管理</span>
        </zmz-menu-item>
    </zmz-menu>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-menu :default-active-name="[]" style="width:240px;--zmz-menu-background-color:#393d49;--zmz-menu-subbackground-color:#282b33;--zmz-menu-text-color:#c1c2c6;--zmz-menu-subtext-color:#c1c2c6;--zmz-menu-text-active-color:#fff;--zmz-menu-subtext-active-color:#fff;--zmz-menu-text-hover-color:#fff;--zmz-menu-text-border-color:#282b33;--zmz-menu-text-hover-border-color:#282b33;--zmz-menu-text-active-border-color:#282b33;--zmz-menu-subtext-hover-color:#fff;--zmz-menu-text-background-color:#393d49;--zmz-menu-text-active-background-color:#393d49;--zmz-menu-subtext-background-color:#282b33;--zmz-menu-text-hover-background-color:#393d49;--zmz-menu-subtext-hover-background-color:#393d49;--zmz-menu-subtext-active-background-color:#393d49">
            <zmz-menu-item name="1">
                <i class="zmz-icon--home"></i>
                <span>我的首页</span>
            </zmz-menu-item>
            <zmz-menu-submenu name="2">
                <template #title>
                    <i class="zmz-icon--database"></i>
                    <span>数据管理</span>
                </template>
                <zmz-menu-group title="组1">
                    <zmz-menu-item name="2-1"><span>选项2</span></zmz-menu-item>
                </zmz-menu-group>
                <zmz-menu-group title="组2">
                    <zmz-menu-item name="2-2"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-item name="2-3"><span>选项4</span></zmz-menu-item>
                </zmz-menu-group>
            </zmz-menu-submenu>
            <zmz-menu-submenu name="3">
                <template #title>
                    <i class="zmz-icon--console"></i>
                    <span>命令管理</span>
                </template>
                <zmz-menu-item name="3-1"><span>选项1</span></zmz-menu-item>
                <zmz-menu-item name="3-2"><span>选项2</span></zmz-menu-item>
                <zmz-menu-item name="3-3"><span>选项3</span></zmz-menu-item>
                <zmz-menu-submenu name="3-4">
                    <template #title>
                        <span>选项4</span>
                    </template>
                    <zmz-menu-item name="3-4-1"><span>选项1</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-2"><span>选项2</span></zmz-menu-item>
                    <zmz-menu-item name="3-4-3"><span>选项3</span></zmz-menu-item>
                    <zmz-menu-submenu name="3-4-4">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-4-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-4-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                    <zmz-menu-submenu name="3-4-5">
                        <template #title>
                            <span>选项4</span>
                        </template>
                        <zmz-menu-item name="3-4-5-1"><span>选项1</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-2"><span>选项2</span></zmz-menu-item>
                        <zmz-menu-item name="3-4-5-3"><span>选项3</span></zmz-menu-item>
                    </zmz-menu-submenu>
                </zmz-menu-submenu>
            </zmz-menu-submenu>
            <zmz-menu-item name="4" disabled>
                <i class="zmz-icon--setup"></i>
                <span>系统管理</span>
            </zmz-menu-item>
        </zmz-menu>
    </div>
</template>
```
:::

## Menu 属性

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| mode | 模式 | String |   horizontal / vertical   | vertical |
| default-active-name | 默认激活菜单 | Array | - | [] |
| default-active-subname | 默认打开二级菜单 | Array | - | [] |
| router | 开启router路由，name作为导航path | Boolean | - | false |
| accordion | 是否开启手风琴模式，开启以后只展开一个菜单 | Boolean | - | false |
| trigger | 下拉菜单打开方式 | String | click/hover | hover |
| effect | 内置主题效果  | String | light/dark/primary | light |
| tooltip-effect | 提示框主题效果  | String | black / white | black |
| shrink | 是否收缩菜单 | Boolean | - | false |

## Menu 事件
| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |-------- |
| on-select | 菜单激活回调 | name: 选中菜单项的 name, namePath: 选中菜单项的 name path |
| on-submenu-toggle | submenu菜单打开关闭回调 | name: 打开菜单项的 name, active: 打开关闭类型 |


## Menu-SubMenu 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 唯一标志 | String | — | — |
| disabled | 是否禁用 | Boolean | — | false |

## Menu-Item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 唯一标志 | string | — | - |
| disabled | 是否禁用 | boolean | — | false |

## Menu-Group 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 分组标题 | string | — | — |

## Menu 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-menu-size             |  --zmz-menu-size                  | 52px     | 高度      |
| @zmz-menu-subsize             |  --zmz-menu-subsize                  | 36px     | 二级高度      |
| @zmz-menu-border-radius             |  --zmz-menu-border-radius                  | 3px     | 圆角      |
| @zmz-menu-text-font-size             |  --zmz-menu-text-font-size                  | 14px     | 字体大小      |
| @zmz-menu-grouptext-color            |  --zmz-menu-grouptext-color                  |  #999    | 组文字颜色      |
| @zmz-menu-background-color            |  --zmz-menu-background-color                  |  #fff    | 背景色      |
| @zmz-menu-subbackground-color            |  --zmz-menu-subbackground-color                  |  #fff    | 二级背景色      |
| @zmz-menu-text-color             |  --zmz-menu-text-color                  | 默认主题颜色     | 默认文字      |
| @zmz-menu-text-hover-color      |  --zmz-menu-text-hover-color          | 确认主题颜色       | 滑过文字        |
| @zmz-menu-text-active-color     |  --zmz-menu-text-active-color        |  确认主题颜色         | 激活文字  |
| @zmz-menu-subtext-color             |  --zmz-menu-subtext-color                  | 默认主题颜色     | 二级默认文字      |
| @zmz-menu-subtext-hover-color      |  --zmz-menu-subtext-hover-color          | 确认主题颜色       | 二级滑过文字        |
| @zmz-menu-subtext-active-color     |  --zmz-menu-subtext-active-color        |  确认主题颜色         | 二级激活文字  |
| @zmz-menu-text-background-color             |  --zmz-menu-text-background-color                  | #fff     | 默认背景      |
| @zmz-menu-text-hover-background-color      |  --zmz-menu-text-hover-background-color          | #fff       | 滑过背景        |
| @zmz-menu-text-active-background-color     |  --zmz-menu-text-active-background-color        |  #fff         | 激活背景  |
| @zmz-menu-subtext-background-color             |  --zmz-menu-subtext-background-color                  | #fff     | 二级默认背景      |
| @zmz-menu-subtext-hover-background-color      |  --zmz-menu-subtext-hover-background-color          | #fff       | 二级滑过背景        |
| @zmz-menu-subtext-active-background-color     |  --zmz-menu-subtext-active-background-color        |  #fff         | 二级激活背景  |
| @zmz-menu-text-border-color             |  --zmz-menu-text-border-color                  | transparent     | 默认边线      |
| @zmz-menu-text-hover-border-color      |  --zmz-menu-text-hover-border-color          | 确认主题颜色       | 滑过边线       |
| @zmz-menu-text-active-border-color     |  --zmz-menu-text-active-border-color        |  确认主题颜色         | 激活边线  |
| @zmz-menu-subtext-border-color             |  --zmz-menu-subtext-border-color                  | transparent     | 二级默认边线      |
| @zmz-menu-subtext-hover-border-color      |  --zmz-menu-subtext-hover-border-color          | transparent       | 二级滑过边线       |
| @zmz-menu-subtext-active-border-color     |  --zmz-menu-subtext-active-border-color        |  transparent         | 二级激活边线  |