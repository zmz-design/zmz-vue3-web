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
            title: 'Amount 财务金额' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            amount: '103456789000000.22'
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Amount 财务金额
----
用于转换财务金额

### 基本用法
页面中的非浮层元素，不会自动消失。

<div class="demo-block">
    <zmz-space mode="vertical">
        <zmz-space-item>{{amount}}</zmz-space-item>
        <zmz-space-item><zmz-amount :amount="amount"></zmz-amount></zmz-space-item>
    </zmz-space>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-space mode="vertical">
            <zmz-space-item>{{amount}}</zmz-space-item>
            <zmz-space-item><zmz-amount :amount="amount"></zmz-amount></zmz-space-item>
        </zmz-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            amount: '1234567890'
        };
    }
};
</script>
```
:::

### Amount 属性
| 参数		| 说明									| 类型		| 可选值						| 默认值	|
|----------	|------------------------------------	|----------	|-------------					|--------	|
| amount		| 金额值				|String/Number	| —							|—		|
| uppercase-num		| 大写数字			| Array	| —							| ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']	|
| dec-unit		| 小数单位						| Array	| —							| ['角', '分', '毫', '厘']	|
| int-unit		| 整数单位						| Array	| —							| ["", "万", "亿", "兆"]	|
| int-radice-unit		| 整数基数单位						| Array	| —							| ["", "拾", "佰", "仟"]	|
| int-last-unit		| 整数最后单位						| String	| —							| "元"	|
| int-last-eger		| 整数最后补齐单位						| String	| —							| "整"	|

### Amount 插槽
| 名称      |返回值      | 说明       |
|------------- |-----------|----------- |
| - |amount|默认插槽|