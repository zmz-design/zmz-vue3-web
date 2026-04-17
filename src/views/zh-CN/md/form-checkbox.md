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
    data () {
        return {
            title: 'Checkbox 复选框' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            checkbox: true,
            checkbox2: false,
            data: ['A'],
            semiselection: true,
            semiselectionValue: false,
            defaults: ['A', "B", "C"]
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        handleChangeAll(val) {
            this.data = val ? this.defaults : [];
            this.semiselection = false;
        },
        handleChange(value) {
            let checkedCount = value.length;
            this.semiselectionValue = checkedCount === this.defaults.length;
            this.semiselection = checkedCount > 0 && checkedCount < this.defaults.length;
        },
    }
}
</script>
# Checkbox 复选框
----
## 基础用法
在一组选项中进行多选
<div class="demo-block">
    <zmz-checkbox v-model="checkbox">复选项A</zmz-checkbox>
    <zmz-checkbox v-model="checkbox2">复选项B</zmz-checkbox>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-checkbox v-model="checkbox">复选项A</zmz-checkbox>
        <zmz-checkbox v-model="checkbox2">复选项B</zmz-checkbox>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                checkbox: true,
                checkbox2: false,
            }
        }
    }
</script>
```
:::

## 禁用只读状态
添加属性 ``disabled`` 或  ``readonly``
<div class="demo-block">
    <zmz-checkbox disabled v-model="checkbox">禁用复选项A</zmz-checkbox>
    <zmz-checkbox disabled v-model="checkbox2">禁用复选项B</zmz-checkbox>
    <zmz-checkbox readonly v-model="checkbox">只读复选项A</zmz-checkbox>
    <zmz-checkbox readonly v-model="checkbox2">只读复选项B</zmz-checkbox>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-checkbox disabled v-model="checkbox">禁用复选项A</zmz-checkbox>
        <zmz-checkbox disabled v-model="checkbox2">禁用复选项B</zmz-checkbox>
        <zmz-checkbox readonly v-model="checkbox">只读复选项A</zmz-checkbox>
        <zmz-checkbox readonly v-model="checkbox2">只读复选项B</zmz-checkbox>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                checkbox: true,
                checkbox2: false,
            }
        }
    }
</script>
```
:::

## 半选状态
添加属性 ``semiselection`` 半选
<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>
            <zmz-checkbox label="全选" @on-change="handleChangeAll" v-model="semiselectionValue" :semiselection="semiselection" :value="false"></zmz-checkbox>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" @on-change="handleChange">
                <zmz-checkbox label="复选项A" value="A">复选项A</zmz-checkbox>
                <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
                <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>
                <zmz-checkbox label="全选" @on-change="handleChangeAll" v-model="semiselectionValue" :semiselection="semiselection" :value="false"></zmz-checkbox>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" @on-change="handleChange">
                    <zmz-checkbox label="复选项A" value="A">复选项A</zmz-checkbox>
                    <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
                    <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: ['A'],
                semiselection: true,
                semiselectionValue: false,
                defaults: ['A', "B", "C"]
            }
        },
        methods: {
            handleChangeAll(val) {
                this.data = val ? this.defaults : [];
                this.semiselection = false;
            },
            handleChange(value) {
                let checkedCount = value.length;
                this.semiselectionValue = checkedCount === this.defaults.length;
                this.semiselection = checkedCount > 0 && checkedCount < this.defaults.length;
            },
        }
    }
</script>
```
:::

## 多选框组
在组选项中进行多选
<div class="demo-block">
    <zmz-checkbox-group v-model="data">
      <zmz-checkbox label="复选项A" value="A">复选项A</zmz-checkbox>
      <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
      <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
    </zmz-checkbox-group>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-checkbox-group v-model="data">
        <zmz-checkbox label="复选项A" value="A">复选项A</zmz-checkbox>
        <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
        <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
        </zmz-checkbox-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: ['A']
            }
        }
    }
</script>
```
:::

## 多选框组禁用
添加属性 ``disabled``
<div class="demo-block">
    <zmz-space title="选项禁用">
        <zmz-checkbox-group v-model="data">
            <zmz-checkbox label="复选项A" value="A" disabled>复选项A</zmz-checkbox>
            <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
            <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
        </zmz-checkbox-group>
    </zmz-space>
    <zmz-space title="组禁用">
        <zmz-checkbox-group v-model="data" disabled>
            <zmz-checkbox label="复选项A" value="A">复选项A</zmz-checkbox>
            <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
            <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
        </zmz-checkbox-group>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="选项禁用">
            <zmz-checkbox-group v-model="data">
                <zmz-checkbox label="复选项A" value="A" disabled>复选项A</zmz-checkbox>
                <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
                <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
        <zmz-space title="组禁用">
            <zmz-checkbox-group v-model="data" disabled>
                <zmz-checkbox label="复选项A" value="A">复选项A</zmz-checkbox>
                <zmz-checkbox label="复选项B" value="B">复选项B</zmz-checkbox>
                <zmz-checkbox label="复选项C" value="C">复选项C</zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: ['复选项A']
        }
    }
}
</script>
```
:::

## 边框
添加属性 ``border``
<div class="demo-block">
    <zmz-space title="选项边框">
        <zmz-checkbox class="demo-checkbox" v-model="checkbox" disabled label="复选框组A" value="1" border>复选框组A</zmz-checkbox>
    </zmz-space>
     <zmz-space title="组边框">
        <zmz-checkbox-group v-model="data">
            <zmz-checkbox label="复选框组A" value="A" disabled border>复选框组A</zmz-checkbox>
            <zmz-checkbox label="复选框组B" value="B" border>复选框组B</zmz-checkbox>
            <zmz-checkbox label="复选框组C" value="C" border>复选框组C</zmz-checkbox>
        </zmz-checkbox-group>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-checkbox class="demo-checkbox" v-model="checkbox" disabled label="复选框组A" value="1" border>复选框组A</zmz-checkbox>
        </zmz-space>
        <zmz-space title="组边框">
            <zmz-checkbox-group v-model="data">
                <zmz-checkbox label="复选框组A" value="A" disabled border>复选框组A</zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="B" border>复选框组B</zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="C" border>复选框组C</zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: ['A']
        }
    }
}
</script>
```
:::

## 自定义内容
添加插槽 ``checkbox``
<div class="demo-block">
    <zmz-space title="选项边框">
        <zmz-checkbox class="demo-checkbox" v-model="checkbox" disabled label="复选框组A" value="1" border>
            <template #checkbox="item">
                自定义内容{{item.checkbox}}
            </template>
        </zmz-checkbox>
    </zmz-space>
    <zmz-space title="组边框">
        <zmz-checkbox-group v-model="data">
            <zmz-checkbox label="复选框组A" value="1" border>
                <template #checkbox="item">
                    自定义内容1
                </template>
            </zmz-checkbox>
            <zmz-checkbox label="复选框组B" value="2" border>
                <template #checkbox="item">
                    自定义内容2{{item.checked}}
                </template>
            </zmz-checkbox>
            <zmz-checkbox label="复选框组C" value="3" disabled border>
                <template #checkbox>
                    自定义内容3
                </template>
            </zmz-checkbox>
        </zmz-checkbox-group>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-checkbox class="demo-checkbox" v-model="checkbox" disabled label="复选框组A" value="1" border>
                <template #checkbox="item">
                    自定义内容{{item.checkbox}}
                </template>
            </zmz-checkbox>
        </zmz-space>
        <zmz-space title="组边框">
            <zmz-checkbox-group v-model="data">
                <zmz-checkbox label="复选框组A" value="1" border>
                    <template #checkbox="item">
                        自定义内容1
                    </template>
                </zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2" border>
                    <template #checkbox="item">
                        自定义内容2{{item.checked}}
                    </template>
                </zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3" disabled border>
                    <template #checkbox>
                        自定义内容3
                    </template>
                </zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: ['A']
        }
    }
}
</script>
```
:::

## 复选组垂直
添加属性 ``vertical``
<div class="demo-block">
    <zmz-space title="选项边框">
        <zmz-checkbox-group v-model="data" vertical>
            <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
            <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
            <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
        </zmz-checkbox-group>
    </zmz-space>
    <zmz-space title="选项边框">
        <zmz-checkbox-group v-model="data" vertical>
            <zmz-checkbox label="复选框组A" value="1" border>
                <template #checkbox>
                    自定义内容1
                </template>
            </zmz-checkbox>
            <zmz-checkbox label="复选框组B" value="2" border>
                <template #checkbox>
                    自定义内容2
                </template>
            </zmz-checkbox>
            <zmz-checkbox label="复选框组C" value="3" border>
                <template #checkbox>
                    自定义内容3
                </template>
            </zmz-checkbox>
        </zmz-checkbox-group>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-checkbox-group v-model="data" vertical>
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
        <zmz-space title="选项边框">
            <zmz-checkbox-group v-model="data" vertical>
                <zmz-checkbox label="复选框组A" value="1" border>
                    <template #checkbox>
                        自定义内容1
                    </template>
                </zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2" border>
                    <template #checkbox>
                        自定义内容2
                    </template>
                </zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3" border>
                    <template #checkbox>
                        自定义内容3
                    </template>
                </zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: ['A']
        }
    }
}
</script>
```
:::

## 按钮样式
添加属性 ``button``
<div class="demo-block">
    <zmz-space title="按钮填充">
        <zmz-checkbox-group v-model="data" button>
            <zmz-checkbox label="复选框组A" disabled value="1"></zmz-checkbox>
            <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
            <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
        </zmz-checkbox-group>
    </zmz-space>
    <zmz-space title="按钮边线">
        <zmz-checkbox-group v-model="data" button button-border>
            <zmz-checkbox label="复选框组A"  value="1"></zmz-checkbox>
            <zmz-checkbox label="复选框组B" disabled value="2"></zmz-checkbox>
            <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
        </zmz-checkbox-group>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="按钮填充">
            <zmz-checkbox-group v-model="data" button>
                <zmz-checkbox label="复选框组A" disabled value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
        <zmz-space title="按钮边线">
            <zmz-checkbox-group v-model="data" button button-border>
                <zmz-checkbox label="复选框组A"  value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" disabled value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: []
        }
    }
}
</script>
```
:::

## 不同尺寸
提供多种尺寸
<div class="demo-block">
    <zmz-space title="普通">
        <zmz-checkbox v-model="checkbox" label="复选框" value="0" size="large"></zmz-checkbox>
        <zmz-checkbox v-model="checkbox" label="复选框" value="1" size="medium"></zmz-checkbox>
        <zmz-checkbox v-model="checkbox" label="复选框" value="2" size="default"></zmz-checkbox>
        <zmz-checkbox v-model="checkbox" label="复选框" value="3" size="small"></zmz-checkbox>
        <zmz-checkbox v-model="checkbox" label="复选框" value="4" size="mini"></zmz-checkbox>
    </zmz-space>
    <zmz-space title="边线">
        <zmz-checkbox v-model="checkbox" label="复选框" border value="0" size="large"></zmz-checkbox>
        <zmz-checkbox v-model="checkbox" label="复选框" border value="1" size="medium"></zmz-checkbox>
        <zmz-checkbox v-model="checkbox" label="复选框" border value="2" size="default"></zmz-checkbox>
        <zmz-checkbox v-model="checkbox" label="复选框" border value="3" size="small"></zmz-checkbox>
        <zmz-checkbox v-model="checkbox" label="复选框" border value="4" size="mini"></zmz-checkbox>
    </zmz-space>
    <zmz-space title="选项组普通" mode="vertical">
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" size="large">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" size="medium">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" size="default">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" size="small">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" size="mini">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
    </zmz-space>
    <zmz-space title="按钮组填充" mode="vertical">
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" button size="large">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" button size="medium">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" button size="default">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" button size="small">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" button size="mini">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
    </zmz-space>
    <zmz-space title="按钮组边线" mode="vertical">
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" button button-border size="large">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" button button-border size="medium">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" button button-border size="default">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-checkbox-group v-model="data" button button-border size="small">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
        <zmz-space-item>
             <zmz-checkbox-group v-model="data" button button-border size="mini">
                <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
            </zmz-checkbox-group>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="普通">
            <zmz-checkbox v-model="checkbox" label="复选框" value="0" size="large"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" value="1" size="medium"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" value="2" size="default"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" value="3" size="small"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" value="4" size="mini"></zmz-checkbox>
        </zmz-space>
        <zmz-space title="边线">
            <zmz-checkbox v-model="checkbox" label="复选框" border value="0" size="large"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" border value="1" size="medium"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" border value="2" size="default"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" border value="3" size="small"></zmz-checkbox>
            <zmz-checkbox v-model="checkbox" label="复选框" border value="4" size="mini"></zmz-checkbox>
        </zmz-space>
        <zmz-space title="选项组普通" mode="vertical">
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="large">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="medium">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="default">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="small">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" size="mini">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space title="按钮组填充" mode="vertical">
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="large">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="medium">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="default">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="small">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button size="mini">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space title="按钮组边线" mode="vertical">
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="large">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="medium">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="default">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="small">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-checkbox-group v-model="data" button button-border size="mini">
                    <zmz-checkbox label="复选框组A" value="1"></zmz-checkbox>
                    <zmz-checkbox label="复选框组B" value="2"></zmz-checkbox>
                    <zmz-checkbox label="复选框组C" value="3"></zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            checkbox: false,
            data: []
        }
    }
}
</script>
```
:::

## Checkbox 属性

| 参数			| 说明						| 类型						| 可选值									| 默认值	|
|----------		|--------------				|----------					|--------------------------------			|--------	|
| v-model		| 绑定显示参数				| String / Number / Boolean	| —								| false		|
| size			| 尺寸						| String					| large / medium / default / small / mini	| default	|
| disabled		| 禁用						| Boolean					| —								| false		|
| readonly		| 只读						| Boolean					| —								| false		|
| name			| 原生name属性				| String					| —										| —		|
| value			| 自定义值					| String/Number/Boolean		| —										| —		|
| label			| 自定义文本				| String/Number/Boolean		| —										| —		|
| semiselection	| 半选择状态				| Boolean					| —								| false		|
## Checkbox 方法

| 事件      | 说明          | 返回值  |
|---------- |-------------- |---- |
| on-change | 绑定显示参数 | value |

## Checkboxgroup 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model		| 绑定显示参数							| Array		| —										| —		|
| size			| 尺寸									| String	| large / medium / default / small / mini	| default	|
| button		| 是否按钮样式							| Boolean	| —								| false		|
| button-border	| 按钮边线								| Boolean	| —								| false		|
| vertical		| 是否垂直								| Boolean	| —								| false		|
| disabled		| 禁用									| Boolean	| —								| false		|
| readonly		| 只读									| Boolean	| —								| false		|
| name			| 原生name属性, 会被单个radio的name覆盖	| String	| —										| —		|

## Checkboxgroup 方法

| 事件		| 说明			| 返回值|
|----------	|--------------	|----	|
| on-change	| 绑定显示参数	| value	|

## Checkbox 插槽
| 参数		| 说明					|参数			|
|----------	|--------------			|---------		|
| default	| label自定义内容插槽	|—				|
| checkbox		| label自定义内容插槽	|#checkbox="item"	|

## Checkbox 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-checkbox-height            |  --zmz-checkbox-height                 | 32px     | 宽度      |
| @zmz-checkbox-padding         |  --zmz-checkbox-padding           | 8px     | 内边距        |
| @zmz-checkbox-font-size      |  --zmz-checkbox-font-size       | 12px          | 字体    |
| @zmz-checkbox-background-color    |  --zmz-checkbox-background-color        | #fff          | 背景      |
| @zmz-checkbox-icon-size       |  --zmz-checkbox-icon-size          | 0px       | 点默认大小        |
| @zmz-checkbox-border-color   |  --zmz-checkbox-border-color     | #e3e6ef         | 边线    |
| @zmz-checkbox-border-radius  |  --zmz-checkbox-border-radius     | 3px         | 圆角      |
| @zmz-checkbox-text-color|  --zmz-checkbox-text-color   | 默认主题颜色      | 字体颜色|