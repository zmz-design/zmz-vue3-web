<script>
import iconList from '@docs/globalJson/icon.json';
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
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        copyClick(icon) {
            this.$copy(icon).then(() => {
                this.$message.success('复制成功')
            })
        }
    },
    data() {
        return {
            title: 'Icon 图标' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            icons:iconList
        };
    }
}
</script>
# Icon 图标

----
语义化的矢量图形，```zmz-vue3-web``` 使用开源的 Iconfont (阿里妈妈MUX倾力打造的矢量图标管理、交流平台) 作为图标库，并制作成了 ```icon font```。
## 基础用法

使用 ```class="zmz-icon"```来声明图标，具体图标的名称请 ```copy``` 相应的标签

<div class="demo-block">
    <zmz-space>
        <i class="zmz-icon--primary-fill zmz-fs-24"></i>
        <i class="zmz-icon--success-fill zmz-fs-24"></i>
        <i class="zmz-icon--warning-fill zmz-fs-24"></i>
        <i class="zmz-icon--error-fill zmz-fs-24"></i>
        <i class="zmz-icon--info-fill zmz-fs-24"></i>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <i class="zmz-icon--primary-fill zmz-fs-24"></i>
            <i class="zmz-icon--success-fill zmz-fs-24"></i>
            <i class="zmz-icon--warning-fill zmz-fs-24"></i>
            <i class="zmz-icon--error-fill zmz-fs-24"></i>
            <i class="zmz-icon--info-fill zmz-fs-24"></i>
        </zmz-space>
    </div>
</template>
```
:::

## 组件用法

使用 ```<zmz-icon name="error-fill"></zmz-icon>``` 来声明图标，具体图标的名称请 ```copy``` 相应的标签

<div class="demo-block">
    <zmz-space>
        <zmz-icon name="primary-fill" size="24"></zmz-icon>
        <zmz-icon name="success-fill" size="24"></zmz-icon>
        <zmz-icon name="warning-fill" size="24"></zmz-icon>
        <zmz-icon name="error-fill" size="24"></zmz-icon>
        <zmz-icon name="info-fill" size="24"></zmz-icon>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space>
            <zmz-icon name="primary-fill" size="24"></zmz-icon>
            <zmz-icon name="success-fill" size="24"></zmz-icon>
            <zmz-icon name="warning-fill" size="24"></zmz-icon>
            <zmz-icon name="error-fill" size="24"></zmz-icon>
            <zmz-icon name="info-fill" size="24"></zmz-icon>
        </zmz-space>
    </div>
</template>
```
:::

## 图标示例
<div class="zmz-docs-icon">
    <div class="zmz-docs-icon__item" v-for="(item,index) in icons" :key="index">
        <h3 class="zmz-docs-icon__item__title" :id="encodeURIComponent(item.title)">{{item.title}}</h3>
        <ul class="zmz-docs-icon__item__content">
            <li v-for="(items,indexs) in item.gather" :key="indexs" @click="copyClick(items)">
                <span>
                <i :class="items"></i>
                {{items}}
                </span>
            </li>
        </ul>
    </div>
</div>