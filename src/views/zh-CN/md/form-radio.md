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
            title: 'Radio 单选框' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            radio: true,
            data: 'A'
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onChange(value) {
            console.log(value)
        }
    }
}
</script>
# Radio 单选框
----
## 基础用法
在一组选项中进行单选
<div class="demo-block">
    <zmz-radio v-model="radio" @on-change="onChange" label="单选项" :value="true"></zmz-radio>
    <zmz-radio v-model="radio" @on-change="onChange" label="单选项" :value="false"></zmz-radio>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-radio v-model="radio" @on-change="onChange" label="单选项" :value="true"></zmz-radio>
        <zmz-radio v-model="radio" @on-change="onChange" label="单选项" :value="false"></zmz-radio>
    </div>
</template>
<script>
export default {
    data () {
        return {
            radio: true,
        }
    }
}
</script>

```
:::

## 禁用只读状态
添加属性 ``disabled`` 或 ``readonly``
<div class="demo-block">
    <zmz-radio v-model="radio" label="单选项" :value="true" disabled>禁用单选项</zmz-radio>
    <zmz-radio v-model="radio" label="单选项" :value="false" disabled>禁用单选项</zmz-radio>
    <zmz-radio v-model="radio" label="单选项" :value="true" readonly>只读单选项</zmz-radio>
    <zmz-radio v-model="radio" label="单选项" :value="false" readonly>只读单选项</zmz-radio>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-radio v-model="radio" label="单选项" :value="true" disabled>禁用单选项</zmz-radio>
        <zmz-radio v-model="radio" label="单选项" :value="false" disabled>禁用单选项</zmz-radio>
        <zmz-radio v-model="radio" label="单选项" :value="true" readonly>只读单选项</zmz-radio>
        <zmz-radio v-model="radio" label="单选项" :value="false" readonly>只读单选项</zmz-radio>
    </div>
</template>
<script>
export default {
    data () {
        return {
            radio: true,
        }
    }
}
</script>

```
:::

## 单选框组
在组选项中进行单选
<div class="demo-block">
    <zmz-radio-group v-model="data" @on-change="onChange">
        <zmz-radio label="单选框组A" value="A">单选框组A</zmz-radio>
        <zmz-radio label="单选框组B" value="B">单选框组B</zmz-radio>
        <zmz-radio label="单选框组C" value="C">单选框组C</zmz-radio>
    </zmz-radio-group>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-radio-group v-model="data">
            <zmz-radio label="单选框组A" value="A">单选框组A</zmz-radio>
            <zmz-radio label="单选框组B" value="B">单选框组B</zmz-radio>
            <zmz-radio label="单选框组C" value="C">单选框组C</zmz-radio>
        </zmz-radio-group>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: 'A'
        }
    }
}
</script>

```
:::

## 单选框组禁用
添加属性 ``disabled``
<div class="demo-block">
    <zmz-space title="选项禁用">
        <zmz-radio-group v-model="data">
            <zmz-radio label="单选框组A" value="A" disabled>单选框组A</zmz-radio>
            <zmz-radio label="单选框组B" value="B">单选框组B</zmz-radio>
            <zmz-radio label="单选框组C" value="C">单选框组C</zmz-radio>
        </zmz-radio-group>
    </zmz-space>
    <zmz-space title="组禁用">
        <zmz-radio-group v-model="data" disabled>
            <zmz-radio label="单选框组A" value="A">单选框组A</zmz-radio>
            <zmz-radio label="单选框组B" value="B">单选框组B</zmz-radio>
            <zmz-radio label="单选框组C" value="C">单选框组C</zmz-radio>
        </zmz-radio-group>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="选项禁用">
            <zmz-radio-group v-model="data">
                <zmz-radio label="单选框组A" value="A" disabled>单选框组A</zmz-radio>
                <zmz-radio label="单选框组B" value="B">单选框组B</zmz-radio>
                <zmz-radio label="单选框组C" value="C">单选框组C</zmz-radio>
            </zmz-radio-group>
        </zmz-space>
        <zmz-space title="组禁用">
            <zmz-radio-group v-model="data" disabled>
                <zmz-radio label="单选框组A" value="A">单选框组A</zmz-radio>
                <zmz-radio label="单选框组B" value="B">单选框组B</zmz-radio>
                <zmz-radio label="单选框组C" value="C">单选框组C</zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: 'A'
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
        <zmz-radio v-model="data" disabled label="单选框组A" value="1" border>单选框组A</zmz-radio>
    </zmz-space>
    <zmz-space title="组边框">
        <zmz-radio-group v-model="data">
            <zmz-radio label="单选框组A" value="1" disabled border>单选框组A</zmz-radio>
            <zmz-radio label="单选框组B" value="2" border>单选框组B</zmz-radio>
            <zmz-radio label="单选框组C" value="3" border>单选框组C</zmz-radio>
        </zmz-radio-group>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-radio v-model="data" disabled label="单选框组A" value="1" border>单选框组A</zmz-radio>
        </zmz-space>
        <zmz-space title="组边框">
            <zmz-radio-group v-model="data">
                <zmz-radio label="单选框组A" value="1" disabled border>单选框组A</zmz-radio>
                <zmz-radio label="单选框组B" value="2" border>单选框组B</zmz-radio>
                <zmz-radio label="单选框组C" value="3" border>单选框组C</zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '1'
        }
    }
}
</script>
```
:::

## 自定义内容
添加插槽 ``radio``
<div class="demo-block">
    <zmz-space title="选项边框">
        <zmz-radio v-model="data" disabled label="单选框组A" value="1" border>
            <template #radio>
                自定义内容
            </template>
        </zmz-radio>
    </zmz-space>
    <zmz-space title="组边框">
        <zmz-radio-group v-model="data">
            <zmz-radio label="单选框组A" value="1" border>
                <template #radio>
                    自定义内容1
                </template>
            </zmz-radio>
            <zmz-radio label="单选框组B" value="2" border>
                <template #radio>
                    自定义内容2
                </template>
            </zmz-radio>
            <zmz-radio label="单选框组C" value="3" disabled border>
                <template #radio>
                    自定义内容3
                </template>
            </zmz-radio>
        </zmz-radio-group>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-radio v-model="data" disabled label="单选框组A" value="1" border>
                <template #radio>
                    自定义内容
                </template>
            </zmz-radio>
        </zmz-space>
        <zmz-space title="组边框">
            <zmz-radio-group v-model="data">
                <zmz-radio label="单选框组A" value="1" border>
                    <template #radio>
                        自定义内容1
                    </template>
                </zmz-radio>
                <zmz-radio label="单选框组B" value="2" border>
                    <template #radio>
                        自定义内容2
                    </template>
                </zmz-radio>
                <zmz-radio label="单选框组C" value="3" disabled border>
                    <template #radio>
                        自定义内容3
                    </template>
                </zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '单选框组A'
        }
    }
}
</script>
```
:::

## 单选组垂直
添加属性 ``vertical``
<div class="demo-block">
    <zmz-space title="选项边框">
        <zmz-radio-group v-model="data" vertical>
            <zmz-radio label="单选框组A" value="1">
            </zmz-radio>
            <zmz-radio label="单选框组B" value="2">
            </zmz-radio>
            <zmz-radio label="单选框组C" value="3">
            </zmz-radio>
        </zmz-radio-group>
    </zmz-space>
    <zmz-space title="选项边框">
        <zmz-radio-group v-model="data" vertical>
            <zmz-radio label="单选框组A" value="1" border>
                <template #radio>
                    自定义内容1
                </template>
            </zmz-radio>
            <zmz-radio label="单选框组B" value="2" border>
                <template #radio>
                    自定义内容2
                </template>
            </zmz-radio>
            <zmz-radio label="单选框组C" value="3" border>
                <template #radio>
                    自定义内容3
                </template>
            </zmz-radio>
        </zmz-radio-group>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="选项边框">
            <zmz-radio-group v-model="data" vertical>
                <zmz-radio label="单选框组A" value="1">
                </zmz-radio>
                <zmz-radio label="单选框组B" value="2">
                </zmz-radio>
                <zmz-radio label="单选框组C" value="3">
                </zmz-radio>
            </zmz-radio-group>
        </zmz-space>
        <zmz-space title="选项边框">
            <zmz-radio-group v-model="data" vertical>
                <zmz-radio label="单选框组A" value="1" border>
                    <template #radio>
                        自定义内容1
                    </template>
                </zmz-radio>
                <zmz-radio label="单选框组B" value="2" border>
                    <template #radio>
                        自定义内容2
                    </template>
                </zmz-radio>
                <zmz-radio label="单选框组C" value="3" border>
                    <template #radio>
                        自定义内容3
                    </template>
                </zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '单选框组A'
        }
    }
}
</script>
```
:::

## 按钮样式
添加属性 ``button``
<div class="demo-block">
    <zmz-space title="按钮组">
        <zmz-radio-group v-model="data" button>
            <zmz-radio label="单选框组A" disabled value="1"></zmz-radio>
            <zmz-radio label="单选框组B" value="2"></zmz-radio>
            <zmz-radio label="单选框组C" value="3"></zmz-radio>
        </zmz-radio-group>
    </zmz-space>
    <zmz-space title="边线组">
        <zmz-radio-group v-model="data" button button-border>
            <zmz-radio label="单选框组A"  value="1">
            </zmz-radio>
            <zmz-radio label="单选框组B" disabled value="2">
            </zmz-radio>
            <zmz-radio label="单选框组C" value="3">
            </zmz-radio>
        </zmz-radio-group>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="按钮组">
            <zmz-radio-group v-model="data" button>
                <zmz-radio label="单选框组A" disabled value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space>
        <zmz-space title="边线组">
            <zmz-radio-group v-model="data" button button-border>
                <zmz-radio label="单选框组A"  value="1">
                </zmz-radio>
                <zmz-radio label="单选框组B" disabled value="2">
                </zmz-radio>
                <zmz-radio label="单选框组C" value="3">
                </zmz-radio>
            </zmz-radio-group>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '单选框组A'
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
        <zmz-radio v-model="radio" label="单选框" value="0" size="large"></zmz-radio>
        <zmz-radio v-model="radio" label="单选框" value="1" size="medium"></zmz-radio>
        <zmz-radio v-model="radio" label="单选框" value="2" size="default"></zmz-radio>
        <zmz-radio v-model="radio" label="单选框" value="3" size="small"></zmz-radio>
        <zmz-radio v-model="radio" label="单选框" value="4" size="mini"></zmz-radio>
    </zmz-space>
    <zmz-space title="边线">
        <zmz-radio v-model="radio" label="单选框" border value="0" size="large"></zmz-radio>
        <zmz-radio v-model="radio" label="单选框" border value="1" size="medium"></zmz-radio>
        <zmz-radio v-model="radio" label="单选框" border value="2" size="default"></zmz-radio>
        <zmz-radio v-model="radio" label="单选框" border value="3" size="small"></zmz-radio>
        <zmz-radio v-model="radio" label="单选框" border value="4" size="mini"></zmz-radio>
    </zmz-space>
    <zmz-space title="选项组普通" mode="vertical">
        <zmz-space-item>
            <zmz-radio-group v-model="data" size="large">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" size="medium">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" size="default">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" size="small">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" size="mini">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
    </zmz-space>
    <zmz-space title="按钮组填充" mode="vertical">
        <zmz-space-item>
            <zmz-radio-group v-model="data" button size="large">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" button size="medium">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" button size="default">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" button size="small">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" button size="mini">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
    </zmz-space>
    <zmz-space title="按钮组边线" mode="vertical">
        <zmz-space-item>
            <zmz-radio-group v-model="data" button button-border size="large">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" button button-border size="medium">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" button button-border size="default">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" button button-border size="small">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
        <zmz-space-item>
            <zmz-radio-group v-model="data" button button-border size="mini">
                <zmz-radio label="单选框组A" value="1"></zmz-radio>
                <zmz-radio label="单选框组B" value="2"></zmz-radio>
                <zmz-radio label="单选框组C" value="3"></zmz-radio>
            </zmz-radio-group>
        </zmz-space-item>
    </zmz-space>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <zmz-space title="普通">
            <zmz-radio v-model="radio" label="单选框" value="0" size="large"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" value="1" size="medium"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" value="2" size="default"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" value="3" size="small"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" value="4" size="mini"></zmz-radio>
        </zmz-space>
        <zmz-space title="边线">
            <zmz-radio v-model="radio" label="单选框" border value="0" size="large"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" border value="1" size="medium"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" border value="2" size="default"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" border value="3" size="small"></zmz-radio>
            <zmz-radio v-model="radio" label="单选框" border value="4" size="mini"></zmz-radio>
        </zmz-space>
        <zmz-space title="选项组普通" mode="vertical">
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="large">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="medium">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="default">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="small">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" size="mini">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space title="按钮组填充" mode="vertical">
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="large">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="medium">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="default">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="small">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button size="mini">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
        </zmz-space>
        <zmz-space title="按钮组边线" mode="vertical">
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="large">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="medium">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="default">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="small">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
            <zmz-space-item>
                <zmz-radio-group v-model="data" button button-border size="mini">
                    <zmz-radio label="单选框组A" value="1"></zmz-radio>
                    <zmz-radio label="单选框组B" value="2"></zmz-radio>
                    <zmz-radio label="单选框组C" value="3"></zmz-radio>
                </zmz-radio-group>
            </zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: '单选框组A'
        }
    }
}
</script>
```
:::

## Radio 属性

| 参数		| 说明						| 类型					| 可选值									| 默认值	|
|----------	|--------------				|----------				|--------------------------------			|--------	|
| v-model	| 绑定显示参数				| boolean				| —								| false		|
| size		| 尺寸						| String				| large / medium / default / small / mini	| default	|
| disabled	| 禁用						| Boolean				| —								| false		|
| readonly	| 只读						| Boolean				| —								| false		|
| name		| 原生name属性				| String				| —										| —		|
| value		| 自定义值					| String/Number/Boolean	| —										| —		|
| label		| 自定义文本				| String/Number/Boolean	| —										| —		|

## Radio 方法

| 事件      | 说明          | 返回值  |
|---------- |-------------- |---- |
| on-change | 绑定显示参数 | value |

## Radiogroup 属性

| 参数			| 说明									| 类型		| 可选值									| 默认值	|
|----------		|--------------							|----------	|--------------------------------			|--------	|
| v-model		| 绑定显示参数							| Array		| —										| —		|
| size			| 尺寸									| String	| large / medium / default / small / mini	| default	|
| button		| 是否按钮样式							| Boolean	| —								| false		|
| button-border	| 按钮边线								| Boolean	| —								| false		|
| vertical		| 是否垂直								| Boolean	| —								| false		|
| disabled		| 禁用									| Boolean	| —								| false		|
| readonly		| 只读									| Boolean	| —								| false		|
| name			| 原生name属性, 会被单个radio的name覆盖	| String	| —										| —		|

## Radiogroup 方法

| 事件		| 说明			| 返回值|
|----------	|--------------	|----	|
| on-change	| 绑定显示参数	| value	|

## Radio 插槽
| 参数		| 说明					|参数                    |
|----------	|--------------			|---------            |
| default	| label自定义内容插槽	|—       |
| radio    | label自定义内容插槽    |#radio="item"    |

## Radio 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-radio-height            |  --zmz-radio-height                 | 32px     | 宽度      |
| @zmz-radio-padding         |  --zmz-radio-padding           | 8px     | 内边距        |
| @zmz-radio-font-size      |  --zmz-radio-font-size       | 12px          | 字体    |
| @zmz-radio-background-color    |  --zmz-radio-background-color        | #fff          | 背景      |
| @zmz-radio-icon-size       |  --zmz-radio-icon-size          | 0px       | 点默认大小        |
| @zmz-radio-border-color   |  --zmz-radio-border-color     | #e3e6ef         | 边线    |
| @zmz-radio-border-radius  |  --zmz-radio-border-radius     | 3px         | 圆角      |
| @zmz-radio-text-color|  --zmz-radio-text-color   | 默认主题颜色      | 字体颜色|