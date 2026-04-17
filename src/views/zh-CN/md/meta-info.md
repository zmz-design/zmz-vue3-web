<script>
 export default {
    metaInfo () {
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
            }]
        }
    },
    data () {
        return {
            title: 'MetaInfo优化' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        } 
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
 }
</script>
# MetaInfo
----
你可以直接在组件内设置 metaInfo 便可以自动挂载到你的页面中。如果你需要随着数据的变化，自动更新你的title、meta等信息，那么用此

## 常规用法

<div class="demo-block">
  <p>打开控制台，看看这个页面的 title, meta, 和 link 哦，是不是发生了变化</p>
</div>


::: demo
```js
<script>
export default {
    metaInfo () {
        return {
            title: 'MetaInfo优化',
            meta: [
            {
                name: 'keywords',
                content: 'MetaInfo优化'
            },
            {
              name: 'description',
              content: 'MetaInfo优化'
            }]
        }
    }
}
</script>
```
:::

## async 异步加载

<div class="demo-block">
  <p>如果你的title或者meta或者link是异步加载的，那么你可能需要这样使用</p>
</div>


::: demo
```js
<script>
export default {
    metaInfo () {
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
            }]
        }
    },
    data () {
        return {
            title: 'MetaInfo优化' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        } 
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
```
:::