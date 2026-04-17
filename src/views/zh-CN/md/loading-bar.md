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
    data() {
        return {
            title: 'LoadingBar 加载进度条' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        start () {
            this.$loadingbar.start({
                visible: true
            })
        },
        end () {
            this.$loadingbar.end()
        },
        error () {
            this.$loadingbar.error()
        },
        setSpeed () {
            this.$loadingbar.start({
                visible: true,
                speed: 10
            })
        },
        setSpinner () {
            this.$loadingbar.start({
                visible: true,
                easing: 'ease'
            })
        },
        setPercentNum () {
            this.$loadingbar.start({
                visible: true,
                percent: 0.1
            })
        },
        setShowSpinner () {
            this.$loadingbar.start({
                visible: false
            })
        }
    }
}
</script>
# LoadingBar 加载进度条
----
全局创建了一个用于显示页面加载、异步请求的加载进度条。
因为可复用性的关系，```LoadingBar``` 只会全局创建一个实例，而且在 ```app.config.globalProperties``` 中添加了全局对象 ```$Loading```，可以直接通过 ```this.$Loading``` 操作实例
## 基础用法
通过调用 $Loading 提供的三种方法来控制全局的加载进度条 ```start()```、```end()```、```error()```
<div class="demo-block">
    <div class="demo-button">
       <zmz-button @click="start">开始</zmz-button>
       <zmz-button @click="end">结束</zmz-button>
       <zmz-button @click="error">错误</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-button @click="start">开始</zmz-button>
    <zmz-button @click="end">结束</zmz-button>
    <zmz-button @click="error">错误</zmz-button>
</template>
<script>
  export default{
    methods: {
      start () {
        this.$loadingbar.start()
      },
      end () {
        this.$loadingbar.end()
      },
      error () {
        this.$loadingbar.error()
      }
    }
  }
</script>
```
:::

## 常规配置
提供 LoadingBar 的全局配置，通过```start(传入配置对象)```，使用方法如下：

<div class="demo-block">
    <div class="demo-inline">
       <zmz-button @click="setSpeed">设置speed速度</zmz-button>
       <zmz-button @click="setSpinner">设置spinner动画效果</zmz-button>
       <zmz-button @click="setPercentNum">设置percentNum每次加载的比例</zmz-button>
       <zmz-button @click="setShowSpinner">设置是否显示spinner</zmz-button>
    </div>
</div>

::: demo
```html
<template>
    <zmz-button @click="setSpeed">设置speed速度</zmz-button>
    <zmz-button @click="setSpinner">设置spinner动画效果</zmz-button>
    <zmz-button @click="setPercentNum">设置percentNum每次加载的比例</zmz-button>
    <zmz-button @click="setShowSpinner">设置是否显示spinner</zmz-button>
</template>
<script>
export default{
    methods: {
        start () {
            this.$loadingbar.start({
                showSpinner: true
            })
        },
        end () {
            this.$loadingbar.end()
        },
        error () {
            this.$loadingbar.error()
        },
        setSpeed () {
            this.$loadingbar.start({
                speed: 10
            })
        },
        setSpinner () {
            this.$loadingbar.start({
                easing: 'ease'
            })
        },
        setPercentNum () {
            this.$loadingbar.start({
                percentNum: 0.1
            })
        },
        setShowSpinner () {
            this.$loadingbar.start({
                showSpinner: false
            })
        }
    }
}
</script>
```
:::

## LoadingBar 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible | 是否显示 | String | — | false |
| speed | 加载速度 | Number | 0-100 | 5 |
| easing | spinner加载动画 | String | linear, ease, cubic-bezier... | 贝萨尔曲线值|
| percent | 每次前进的百分比 | Float | 0-1 | Math.random() |
| color | 自定义颜色 | String | — | — |
| total-progress | 总进度 | Number | — | 0 |
| error | 错误 | Boolean | — | false |
| teleport | 是否穿梭 | Boolean | 	true/false | false |
| teleport-dom | 自身是否插入至 位置 元素 | String | 	— | 'body' |
| teleport-class | 自定义穿梭类名 | String/Array | 	— | — |

## LoadingBar 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-loadingbar-height             |  --zmz-loadingbar-height                  | 3px     | 高度      |
| @zmz-loadingbar-icon-size       |  --zmz-loadingbar-icon-size           | 18px      | 图标大小        |
| @zmz-loadingbar-icon-color   |  --zmz-loadingbar-icon-color     | 确认主题颜色        | 图标颜色    |
| @zmz-loadingbar-icon-error-color      |  --zmz-loadingbar-icon-error-color         |  错误主题颜色         | 图标错误颜色  |
| @zmz-loadingbar-transition  |  --zmz-loadingbar-transition     | all 0.2s cubic-bezier(0, 0, 0.76, 0.76)         | 动画过度      |
| @zmz-loadingbar-background-color         |  --zmz-loadingbar-background-color            | transparent       | 背景颜色        |
| @zmz-loadingbar-loading-background-color    |  --zmz-loadingbar-loading-background-color  | 确认主题颜色 | 加载背景颜色  |
| @zmz-loadingbar-error-background-color |  --zmz-loadingbar-error-background-color  | 错误主题颜色    | 错误背景颜色    |