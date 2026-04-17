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
            title: 'Network 网络' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            network: ''
        }
    },
    watch: {
        
    },
    mounted() {
        window.addEventListener('online', () => {
            this.onChange()
        })
        this.$network().then(res => {
            console.log(res)
        })
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        onChange() {
            this.$network().then(res => {
               this.network = res
            })  
        }
    }
}
</script>
# Network 网络
----
监听网络变化
## 基础用法
组件当中提供了检测js，目前还没有办法实现在全局监听返回一个状态，暴露一个方法通过监听去调用返回参数
<div class="demo-block">
    <div class="zmz-mb-20">
        <zmz-button @click="onChange">网络</zmz-button>
    </div>
    {{network}}
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div class="zmz-mb-20">
            <zmz-button @click="onChange">网络</zmz-button>
        </div>
        {{network}}
    </div>
</template>
<script>
export default {
    data () {
        return {
            network: {}
        }
    },
    mounted() {
        window.addEventListener('online', () => {
            this.onChange()
        })
    },
    methods: {
        onChange(data) {
            this.$network().then(res => {
               this.network = res
            })  
        }
    }
}
</script>
```
:::

## Network.res 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| effectiveType | 有效网络连接类型 | String | — | — |
| downlink | 估算的下行速度/带宽 | Number | — | — |
| rtt | 估算的往返时间 | String |  — |  —  |
| saveData | 打开/请求数据保护模式 | Boolean | — | — |
