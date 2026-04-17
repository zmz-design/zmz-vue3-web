<script>
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
    data() {
        return {
            title: 'Dropdown 下拉菜单' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            dropdown: ''
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onChange(data) {
            console.log(data)
        },
        onVisibleChange(data) {
            console.log(data)
        }
    }
}
</script>
# Dropdown 下拉菜单
----
## 基础用法
点击到下拉菜单上，展开更多操作。
<div class="demo-block">
    <zmz-space>
        <zmz-dropdown v-model="dropdown" @on-change="onChange">
            <div>下拉菜单<i class="zmz-icon--arrow-bottom"></i></div>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
        <zmz-dropdown v-model="dropdown" @on-change="onChange">
            <zmz-button  type="primary">
                下拉菜单
                <i class="zmz-icon--arrow-bottom"></i>
            </zmz-button>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-change="onChange">
                <div>下拉菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange">
                <zmz-button  type="primary">
                    下拉菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
</script>
```
:::

## 触发方式
可以使用属性 ``trigger`` 配置 click 激活或者 hover 激活
<div class="demo-block">
    <zmz-space>
        <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click">
            <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item disabled>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
        <zmz-dropdown v-model="dropdown" @on-change="onChange" trigger="hover">
            <zmz-button  type="primary">
                滑入触发菜单
                <i class="zmz-icon--arrow-bottom"></i>
            </zmz-button>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click">
                <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" trigger="hover">
                <zmz-button  type="primary">
                    滑入触发菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
</script>
```
:::

## 显示方向
可以使用属性 ``placement`` 配置 菜单显示方向
<div class="demo-block">
    <zmz-space>
        <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="top" >
            <zmz-button  type="primary">
                上方显示菜单
                <i class="zmz-icon--arrow-bottom"></i>
            </zmz-button>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
        <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="bottom">
            <zmz-button  type="primary">
                下方显示菜单
                <i class="zmz-icon--arrow-bottom"></i>
            </zmz-button>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
        <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="left-end">
            <zmz-button  type="primary">
                左方显示菜单
                <i class="zmz-icon--arrow-bottom"></i>
            </zmz-button>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
        <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="right-end">
            <zmz-button  type="primary">
                右方显示菜单
                <i class="zmz-icon--arrow-bottom"></i>
            </zmz-button>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="top" >
                <zmz-button  type="primary">
                    上方显示菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="bottom">
                <zmz-button  type="primary">
                    下方显示菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="left-end">
                <zmz-button  type="primary">
                    左方显示菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-change="onChange" placement="right-end">
                <zmz-button  type="primary">
                    右方显示菜单
                    <i class="zmz-icon--arrow-bottom"></i>
                </zmz-button>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
</script>
```
:::

## 触发回调
可以使用方法 ``on-change`` 接收回调变化，默认为选择项下标，可修改index值
<div class="demo-block">
    <zmz-space>
        <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click">
            <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
        <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click">
            <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item index="1">下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item index="2">下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item index="3">下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item index="4">下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item index="5">下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click">
                <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
            <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click">
                <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item index="1">下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item index="2">下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item index="3">下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item index="4">下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item index="5">下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
</script>
```
:::

## 禁用状态
可以使用属性 ``disabled`` 禁用
<div class="demo-block">
    <zmz-space>
        <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click" disabled>
            <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-dropdown v-model="dropdown" @on-visible-change="onVisibleChange" @on-change="onChange" trigger="click" disabled>
                <div>点击触发菜单<i class="zmz-icon--arrow-bottom"></i></div>
                <template #dropdown>
                    <zmz-dropdown-menu>
                        <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                        <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    </zmz-dropdown-menu>
                </template>
            </zmz-dropdown>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
</script>
```
:::

## 下拉限制滚动条
超多选项下拉出现滚动条和控制宽度
<div class="demo-block">
    <zmz-dropdown v-model="dropdown" height="200px" width="200px">
        <div>下拉菜单<i class="zmz-icon--arrow-bottom"></i></div>
        <template #dropdown>
            <zmz-dropdown-menu>
                <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
            </zmz-dropdown-menu>
        </template>
    </zmz-dropdown>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-dropdown v-model="dropdown" height="200px" width="200px">
            <div>下拉菜单<i class="zmz-icon--arrow-bottom"></i></div>
            <template #dropdown>
                <zmz-dropdown-menu>
                    <zmz-dropdown-item>下拉菜单1</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单2</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单3</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单4</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                    <zmz-dropdown-item>下拉菜单5</zmz-dropdown-item>
                </zmz-dropdown-menu>
            </template>
        </zmz-dropdown>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdown: ''
        };
    }
}
</script>
```
:::

## Dropdown 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 备注  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| v-model | 下拉框下标值 | String, Number | — | — |— |
| placement | 下拉显示位置 | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |— |
| show | 下拉是否显示 | Boolean | — | false |— |
| height | 下拉盒子的高度 | String | — | — | 需要单位 |
| width | 下拉盒子的宽度 | String | — | — | 需要单位 |
| arrow | 下拉盒子的角 | Boolean | — | false | —  |
| disabled | 是否禁用 | Boolean | — | false | —  |
| teleport | 是否穿梭 | Boolean | 	— | false |
| teleport-dom | 自身是否插入至 位置 元素 | String | 	— | body |
| teleport-class | 自定义穿梭类名 | String/Array | 	— | — |
| trigger | 触发方式 | String | click/hover | hover |
| hide-on-click | 点击是否隐藏 | Boolean | — | true |

## Dropdown-item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 备注  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| index | 下标值 | String/Number | — | — | —  |
| disabled | 是否禁用 | Boolean | — | false | —  |

## Dropdown 方法
| 参数      | 说明          | 类型      | 回调参数                           |
|---------- |-------------- |---------- |--------------------------------  |
| on-change | 点击回调事件 | — | value,index  |
| on-visible-change | 面板显示触发 | — | —  |

## Dropdown 插槽

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| — | 标题内容 | — | —	| — |
| dropdown | 自定义菜单 | — | —    | — |

## Dropdown 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-dropdown-header-color             |  --zmz-dropdown-header-color                  | 默认主题颜色     | 字体颜色      |
| @zmz-dropdown-header-font-size       |  --zmz-dropdown-header-font-size           | 12px       | 字体大小        |
| @zmz-dropdown-menu-box-shadow     |  --zmz-dropdown-menu-box-shadow        | 0 1px 6px rgba(0, 0, 0, .2)         | 菜单阴影  |
| @zmz-dropdown-menu-background-color   |  --zmz-dropdown-menu-background-color     | #fff        | 菜单背景颜色    |
| @zmz-dropdown-menu-border-radius  |  --zmz-dropdown-menu-border-radius     | 3px        | 圆角      |
| @zmz-dropdown-item-color         |  --zmz-dropdown-item-color            | 默认主题颜色       | 选项默认颜色        |
| @zmz-dropdown-item-height         |  --zmz-dropdown-item-height            | 30px       | 选项高度        |
| @zmz-dropdown-item-font-size       |  --zmz-dropdown-item-font-size           | 12px       | 选项字体大小        |
| @zmz-dropdown-item-active-color        |  --zmz-dropdown-item-active-color            |  确认主题颜色       | 选项激活        |
| @zmz-dropdown-item-hover-color        |  --zmz-dropdown-item-hover-color            |  确认主题颜色       | 选项滑过        |
| @zmz-dropdown-item-hover-background-color        |  --zmz-dropdown-item-hover-background-color            |  #f4f9fe       | 选项滑过背景       |
| @zmz-dropdown-item-disabled-background-color        |  --zmz-dropdown-item-disabled-background-color            |  #fff       | 选项禁用背景       |