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
            title: 'Waterfall 瀑布流' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            data: [],
            pageNumber: 1,
            sizeNumber: 18,
            totalNumber: 0,
        };
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        more() {
           return this.pageNumber * this.sizeNumber < this.totalNumber;
        }
    },
    methods: {
        loadMore() {
            if (this.more) {
                this.pageNumber += 1;
                this.fetchData();
            }
        },
        async fetchData() {
            const prev = (this.pageNumber - 1) * this.sizeNumber;
            const images = [...Array(this.sizeNumber).keys()].map((key) => {
                console.log(key)
                let src = new URL(`../../../assets/images/${key}.jpg`, import.meta.url).href
                console.log(src)
                return {
                    key: key + 1 + prev,
                    src: src
                }
            });
            this.totalNumber = 500;
            this.data = [...this.data, ...images];
        },
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Waterfall 瀑布流
----
用于数据不规则垂直排列。

## 基本用法

<div class="demo-alert demo-block">
    <zmz-waterfall loading :gutter="10" width="250px" :data="data" :delay="true" button button-type="success" button-text="加载" @on-loadmore="loadMore">
        <template #default="item">
            <div class="zmz-waterfall-demoItem">
              <img class="img" :src="item.src"/>
              <p>{{ item.key }}</p>
            </div>
        </template>
    </zmz-waterfall>
</div>

::: demo
```html
<template>
    <zmz-waterfall loading :gutter="10" width="250px" :data="data" :delay="true" button button-type="success" button-text="加载" @on-loadmore="loadMore">
        <template #default="item">
            <div class="zmz-waterfall-demoItem">
              <img class="img" :src="item.src"/>
              <p>{{ item.key }}</p>
            </div>
        </template>
    </zmz-waterfall>
</template>
<script>
export default {
    data() {
        return {
            data: [],
            payload: {
                page: 1,
                size: 18,
            },
            pageNumber: 1,
            sizeNumber: 18,
            totalNumber: 0,
        };
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        hasMore() {
           return this.pageNumber * this.sizeNumber < this.totalNumber;
        }
    },
    methods: {
        loadMore() {
            if (this.hasMore) {
                this.payload.page += 1;
                this.fetchData();
            }
        },
        async fetchData() {
            const prev = (this.pageNumber - 1) * this.sizeNumber;
            const images = [...Array(this.sizeNumber).keys()].map((key) => ({
                key: key + 1 + prev,
                src: require(`./images/${key}.jpg`),
            }));
            this.totalNumber = 500;
            this.data = [...this.data, ...images];
        }
    }
};
</script>
```
:::

## Waterfall 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 数据 | Array | — | [] |
| gutter | 间隔 | Number | — | 0 |
| delay | 是否延迟加载 | Boolean | — | true |
| loading | 是否显示loading | Boolean | — | true |
| button | 是否显示加载按钮 | Boolean | — | true |
| button-type | 按钮主题 | String | — | 参考button组件 |
| button-text | 按钮文字 | String | — | 加载更多 |
| button-style | 按钮盒子样式 | Object | — | — |
| loading | 是否显示loading | Boolean | — | true |
| loading-text | 加载文字 | String | — | 加载中... |
| loading-style | 加载盒子样式 | Object | — | — |
| loading-icon | 加载icon | String | — | zmz-icon--loading |
| width | 每个子集的默认宽度 | String/Number | — | 200 |


## Waterfall 方法

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-ready | 准备就绪回调 | — |
| on-loadmore | 加载按钮事件 | — |

## Waterfall slot插槽
| 名称      | 说明          | 参数          |
|---------- |-------------- |---------- |
| — | 默认插槽 |#default="item" |

## Waterfall 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-waterfall-button-padding              |  --zmz-waterfall-button-padding                  | 20px 0      |按钮内边距     |
| @zmz-waterfall-loading-padding          |  --zmz-waterfall-loading-padding          | 20px 0      | 加载内边距        |
| @zmz-waterfall-loading-color      |  --zmz-waterfall-loading-color        | #999         | 加载颜色    |
| @zmz-waterfall-loading-font-size      |  --zmz-waterfall-loading-font-size      | 12px         | 加载字体大小      |
| @zmz-waterfall-loading-icon-size       |  --zmz-waterfall-loading-icon-size          |  12px       | 加载图标大小        |
| @zmz-waterfall-loading-text-margin-left  |  --zmz-waterfall-loading-text-margin-left     | 10px          | 加载字体左边距    |
