<script setup>
  export default {
    name: 'MdMessageBox',
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
            title: 'MessageBox 弹框' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        } 
    },
    methods: {
        alert () {
            this.$messageBox.alert('这是一段内容').then((res) => {
                this.$message.success(res)
            });
        },
        confirm () {
            this.$messageBox.confirm({
                confirmBtnText: '确定',
                cancelBtnText: '取消',
                title: '确认消息',
                content: '这是一段内容'
            }).then((res) => {
                this.$message.success(res)
            }).catch((res) => {
                this.$message.error(res)        
            });
        },
        destroy () {
            this.$messageBox.destroy();
        },
        prompt () {
            this.$messageBox.prompt({
                confirmBtnText: '确定',
                cancelBtnText: '取消',
                title: '标题名称',
                content: '请输入名称',
                inputValidation: "^[0-9]*$",
                inputErrorMsg: '输入错误'
            }).then(() => {
                this.$message.success('正确')
            })
        },
        currentConfig(data){
          return this.$setting.currentConfig[data];
        }
    }
  }
</script>
# MessageBox 弹框
----
## 概述
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
## 消息提示

<div class="demo-block">
    <zmz-button @click="alert">弹框</zmz-button>
</div>

::: demo
```html
<template>
    <zmz-button @click="alert">弹框</zmz-button>
</template>
<script>
export default{
    methods: {
        alert () {
            this.$messageBox.alert('这是一段内容', '标题名称', {
              yesBtnText: '确定'
            }).then((res) => {
                this.$message.success(`action: ${ res }`);
            });
        }
    }
}
</script>
```
:::

## 确认消息
提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。
<div class="demo-block">
    <zmz-button @click="confirm">弹框</zmz-button>
</div>

::: demo
```html
<template>
    <zmz-button @click="confirm">弹框</zmz-button>
</template>
<script>
export default{
    methods: {
        confirm () {
            this.$messageBox.confirm('这是一段内容', '标题名称', {
              yesBtnText: '确定'
            }).then((res) => {
                this.$message.success(`action: ${ res }`);
            });
        }
    }
}
</script>
```
:::
## 提交内容
当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。
<div class="demo-block">
    <zmz-button @click="prompt">弹框</zmz-button>
</div>

::: demo
```html
<template>
    <zmz-button @click="prompt">弹框</zmz-button>
</template>
<script>
export default{
    methods: {
        prompt () {
            this.$messageBox.prompt('标题名称', '请输入名称', {
              confirmBtnText: '确定',
              cancelBtnText: '取消',
              inputValidation: "^[0-9]*$",
              inputErrorMsg: '输入错误'
            }).then((res) => {
                this.$message.success(res)
            }).catch((res) => {
                this.$message.error(res)        
            });
        }
    }
}
</script>
```
:::

## 全局方法
如果你完整引入了 ZMZUI，它会为 app.config.globalProperties 添加如下全局方法：$messageBox。 因此在 Vue 中可以采用本页面中的方式调用 MessageBox。调用方法参数为：

* ```$messageBox.message(type, option)```

* ```$messageBox.alert(content,title, option)```

* ```$messageBox.confirm(content,title, option) ```

* ```$messageBox.prompt(content,title, option)```

## MessageBox 属性

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| title | 标题 | String |   —   | — |
| content | 内容 | String | 	— | — |
| content-html | 是否内容html | Boolean |     — | false |
| confirm-btn-text | 确认按钮内容 | String |     — | '确认' |
| cancel-btn-text | 取消按钮内容 | String | 	— | '取消' |
| type | icon 主题 | String | 	success/warning/primary/error/dark/default | 	default |
| content-center |内容是否居中 | Boolean | 		— | 	false |
| header-center | 标题是否居中 | Boolean | 		— | 	false |
| footer-center | 底部是否居中 | Boolean | 		— | 	false |
| center | 是否整体居中 | Boolean | 		— | 	false |
| input-error-msg | prompt模式下的输入框验证错误提示 | String | — |  '' |
| input-validation | prompt模式下的正则验证 | String | — |  '^[0-9]*$' |
| placeholder | prompt模式下的输入框占位提示 | String | — |  '' |
| messagebox-custom-class | Model 自定义类名 | Array/String |     — | — |
| messagebox-custom-style | Model 自定义样式 | Object |     — | — |
| mask | 是否显示遮罩 | Boolean |     — | true |
| mask-closable | 是否点击遮罩关闭 | Boolean |     — | false |
| mask-custom-class | 遮罩自定义类名 | Array/String |     — | — |
| mask-custom-style | 遮罩自定义样式 | Object |     — | — |
| before-close | 关闭前操作 | Function() return false用于关闭 |     — | — |
| show-close-btn | 是否显示关闭按钮 | Boolean |     — | true |
| close-on-press-escape | 是否按下esc关闭弹窗 | boolean |     — | false |

## MessageBox 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-messagebox-width             |  --zmz-messagebox-width                  | 460px      | 宽度      |
| @zmz-messagebox-header-padding       |  --zmz-messagebox-header-padding           | 10px 15px       | 顶部内边距        |
| @zmz-messagebox-body-padding  |  --zmz-messagebox-body-padding     | 10px 15px          | 内容内边距    |
| @zmz-messagebox-footer-padding     |  --zmz-messagebox-footer-padding        |  10px 15px          | 底部内边距  |
| @zmz-messagebox-border-radius  |  --zmz-messagebox-border-radius     | 3px          |盒子圆角      |
| @zmz-messagebox-margin-top        |  --zmz-messagebox-margin-top           | 15vh       | 盒子距离顶部距离        |
| @zmz-messagebox-background-color     |  --zmz-messagebox-background-color       | 消息主题颜色          | 背景颜色    |
| @zmz-messagebox-title-color      |  --zmz-messagebox-title-color         | 默认主题颜色         | 标题颜色      |
| @zmz-messagebox-title-font-size     |  --zmz-messagebox-title-font-size        | 16px         | 标题大小      |
| @zmz-messagebox-close-color     |  --zmz-messagebox-close-color        | 消息主题颜色         | 关闭图标颜色      |
| @zmz-messagebox-close-size     |  --zmz-messagebox-close-size       | 12px         | 关闭图标大小      |
| @zmz-messagebox-body-color    |  --zmz-messagebox-body-color        | 默认主题颜色         | 内容颜色      |
| @zmz-messagebox-body-font-size     |  --zmz-messagebox-body-font-size        | 12px         | 内容字体大小      |
| @zmz-messagebox-body-icon-color     |  --zmz-messagebox-body-icon-color        | 默认主题颜色         | 内容图标颜色    |
| @zmz-messagebox-body-icon-font-size     |  --zmz-messagebox-body-icon-font-size        | 16px    | 内容图标大小      |
| @zmz-messagebox-error-color     |  --zmz-messagebox-error-color         | 错误主题颜色         | 错误文字颜色      |
| @zmz-messagebox-error-font-size     |  --zmz-messagebox-error-font-size        | 12px         | 错误文字大小      |
