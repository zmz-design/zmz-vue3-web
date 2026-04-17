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
                    name: 'describe',
                    content: this.describe
                }
            ]
        };
    },
    data() {
        return {
            title: 'Loading 加载' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            loading: false,
            loading2: false,
            loading3: false,
            loading4: false
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        loadingSwitch() {
            this.loading2 = true
            setTimeout(() => {
                // this.loading2 = false
            }, 2000)
        },
        loadingButton1() {
            this.loading3 = true
            setTimeout(() => {
                this.loading3 = false
            }, 2000)
        },
        loadingButton2() {
            this.$loading.start({
                fullscreen: true,
                content: 'Loading',
                icon: 'zmz-icon--loading',
                background: 'rgba(0, 0, 0, 0.2)',
            }).then(res => {
                console.log(res)
                setTimeout(() => {
                    res.close()
                }, 2000)
            })
        }
    }
};
</script>
# Loading 加载
----
在数据未加载时显示加载提示

## 基本用法
使用loading加载需要放置相对定位容器
<div class="demo-block">
    <div style="margin-bottom: 20px;"><zmz-button @click="loading = !loading">切换{{loading}}</zmz-button></div>
    <div style="position:relative;margin-bottom: 20px;">
        <div>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
        </div>
        <zmz-loading v-model="loading"></zmz-loading>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;"><zmz-button @click="loading = !loading">切换{{loading}}</zmz-button></div>
        <div style="position:relative;margin-bottom: 20px;">
            <div>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            </div>
            <zmz-loading v-model="loading"></zmz-loading>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true
        };
    }
};
</script>
```
:::

## 自定义内容
<div class="demo-block">
    <div style="margin-bottom: 20px;"><zmz-button @click="loading = !loading">切换{{loading}}</zmz-button></div>
    <div style="position:relative;margin-bottom: 20px;">
        <div>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
        </div>
        <zmz-loading v-model="loading" rotate background="rgba(0, 0, 0, .7)" :loading-style="{color: '#fff'}"></zmz-loading>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;"><zmz-button @click="loading = !loading">切换{{loading}}</zmz-button></div>
        <div style="position:relative;margin-bottom: 20px;">
            <div>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
                <p>使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器,使用loading加载需要放置相对定位容器</p>
            </div>
            <zmz-loading v-model="loading" rotate background="rgba(0, 0, 0, .7)" :loading-style="{color: '#fff'}"></zmz-loading>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true
        };
    }
};
</script>
```
:::

## 全屏加载
<div class="demo-block">
    <div style="margin-bottom: 20px;"><zmz-button @click="loadingSwitch">切换</zmz-button></div>
    <zmz-loading v-model="loading2" fullscreen background="rgba(0, 0, 0, .7)" :loading-style="{color: '#fff'}"></zmz-loading>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;"><zmz-button @click="loadingSwitch">切换</zmz-button></div>
        <zmz-loading v-model="loading" fullscreen background="rgba(0, 0, 0, .7)" :loading-style="{color: '#fff'}"></zmz-loading>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false
        };
    },
    methods: {
        loadingSwitch() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        }
    }
};
</script>
```
:::

## 指令模式
参数通过``zmz-loading-``设置参数
<div class="demo-block" v-zmz-loading="loading3" zmz-loading-content="努力加载中">
    <zmz-space>
        <zmz-space-item><zmz-button type="primary" @click="loadingButton1">指令模式</zmz-button></zmz-space-item>
        <zmz-space-item><zmz-button type="primary" @click="loadingButton2">服务模式</zmz-button></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block" v-zmz-loading="loading" zmz-loading-content="努力加载中">
        <zmz-space>
            <zmz-space-item><zmz-button type="primary" @click="loadingButton1">指令模式</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="primary" @click="loadingButton2">服务模式</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        loadingButton1() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        },
        loadingButton2() {
            this.$loading({
                fullscreen: true,
                content: 'Loading',
                icon: 'zmz-icon--loading',
                background: 'rgba(0, 0, 0, 0.2)'
            }).then(res => {
                setTimeout(() => {
                    res.close()
                }, 2000)
            })
        }
    }
};
</script>
```
:::


## Loading 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| v-model/modelValue      |    状态 |    ``Boolean``   |    —    |    false  |
| content      |	加载文本 |	``String``   |	—    |	-  |
| icon   | 加载icon | ``String``  | —  |  zmz-icon--loading  |
| background |  背景色  |    ``String``    |   —  |   rgba(255, 255, 255, .7)     |
| loading-style |  加载自定义样式  |    ``Object``    |   —    |    —      |
| loading-class |  加载自定义类名 |    ``Array``    |   —     |    —      |
| rotate | 是否旋转 | ``Boolean`` |  — | true |
| fullscreen      |  是否全屏 |   ``Boolean``  |    — | false |
| mode | 模式 | ``String`` |   ``horizontal`` / ``vertical``   | horizontal |

## Loading slot插槽
| 名称      | 说明          |
|---------- |-------------- |
| — | 默认插槽 |

## Loading 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-loading-content-color             |  --zmz-loading-content-color                  | @global-theme     | 内容颜色      |
| @zmz-loading-animation-name       |  --zmz-loading-animation-name           | zmz-loading       | 动画名称        |
| @zmz-loading-animation-duration   |  --zmz-loading-animation-duration     | 1.4s         | 动画时间    |
| @zmz-loading-animation-timing      |  --zmz-loading-animation-timing         |  linear         | 动画过度  |
| @zmz-loading-animation-iteration  |  --zmz-loading-animation-iteration     | infinite         | 动画迭代      |
| @zmz-loading-background-color         |  --zmz-loading-background-color            | rgba(255, 255, 255, 0.9)       | 背景颜色        |
