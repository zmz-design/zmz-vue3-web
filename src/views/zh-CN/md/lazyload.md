<script>
import cover from '@/assets/images/demo-img-1.png'
import error from '@/assets/images/demo-img-error.png'
import loading from '@/assets/images/demo-img-loading.png'

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
    data()  {
        return {
            title: 'Lazyload 图片懒加载' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            buglist: [
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover },
                { src: cover }
            ],
            errorimg: error,
            loadingimg: loading
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>

# Lazyload 图片懒加载
----
用于减少页面卡顿，提高网页下载速度，优化网页打开速度

## 基本用法
图片基于windows窗口实现的，基本用法请安装测试
<div class="demo-block boxNode" style="height:200px;overflow:auto">
    <img  v-zmzlazyload="{'src': item.src, scrollTarget: '.boxNode' ,'error':errorimg}" :key="index" v-for="(item, index) in buglist" style="display: block;height: 200px;">
</div>

::: demo
```html
<template>
    <div class="demo-block boxNode" style="height:200px;overflow:auto">
        <img  v-zmzlazyload="{'src': item.src, scrollTarget: '.boxNode' ,'error':errorimg}" :key="index" v-for="(item, index) in buglist" style="display: block;height: 200px;">
    </div>
</template>
<script>
export default {
    data()  {
        return {
            buglist: [
               { src: '展示图片地址' },
            ],
            errorimg: '错误图片地址',
            loadingimg: '加载图片地址'
        }
    }
}
</script>
```
:::

## 部分标签内用法
基于在特定标签盒子中的懒加载
<div class="demo-block">
    <div style="height: 200px;overflow: auto;" class='boxId'>
        <div style="height: 2000px;">
            <img  v-zmzlazyload="{'src': item.src, scrollTarget: '.boxId' ,'error':errorimg, loading:loadingimg}" :key="index" v-for="(item, index) in buglist" style="display: block;height: 200px;">
        </div>
    </div>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <div style="height: 200px;overflow: auto;" class='boxId'>
            <div style="height: 2000px;">
                <img  v-zmzlazyload="{'src': item.src, scrollTarget: '.boxId' ,'error':errorimg, loading:loadingimg}" :key="index" v-for="(item, index) in buglist" style="display: block;height: 200px;">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data()  {
        return {
            buglist: [
               { src: '展示图片地址' },
            ],
            errorimg: '错误图片地址',
            loadingimg: '加载图片地址'
        }
    }
}
</script>
```
:::

## Lazyload 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| v-zmzlazyload	      | 自定义参数指令     |	object    |	`src`,`error`,`loading`,`scrollTarget`|	`src` |

## Lazyload.v-zmzlazyload 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|src	      | 图片真实地址                        |	String    |	— |	—  |
|error     |	图片加载错误地址 |	String   |	—   |	—       |
|loading     |	图片加载中地址 |	String   |	—    |	—       |
|scroll-target     |	特定盒子节点 |	String   |	—         |	querySelector(可选)     |

## 全局
```javascript
app.use(ZMZUI3,{
  errorImage:'',
  loadingImage: '',
  scrollTarget: '',
  scrollDistance: ''
})
```
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|scroll-distance	      | 距离顶部多少开始显示       |	String/Number    |	— |	—  |
|error-image     |	图片加载错误地址 |	String   |	—   |	—       |
|loading-image     |	图片加载中地址 |	String   |	—    |	—       |
|scroll-target     |	特定盒子节点 |	String   |	—         |	querySelector(可选)    |

## 提示
动态加载图片如果图片没有高度会出现错误，请按实际情况进行配置
