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
            title: 'Contaciner 布局容器' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description')
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    },
}
</script>
# Contaciner 布局容器
----
## 概述
以上组件采用了div+h5元素布局，使用前请确定使用的浏览器环境。此外，```zmz-container``` 的子元素可以是除 ```zmz-container``` 后面的元素，为了规范布局父元素也只能是 ```zmz-container```。
## 基本结构
用于布局的容器组件，方便快速搭建页面的基本结构：  
```header``` ：头部容器。  
```nav``` ：导航栏容器。  
```aside``` ：侧边栏容器。  
```main``` ：主区域容器。  
```section``` ：区域容器。  
```dialog``` ：对话框容器。  
```footer``` ：底部容器。  
## 基础布局
<div class="demo-block">
    <div class="demo-example-box zmz-md-container">
        <zmz-container>
            <zmz-container tag="header">Header</zmz-container>
            <zmz-container tag="main">Main</zmz-container>
        </zmz-container>
        <zmz-container>
            <zmz-container tag="header">Header</zmz-container>
            <zmz-container tag="main">Main</zmz-container>
            <zmz-container tag="footer">Footer</zmz-container>
        </zmz-container>
        <zmz-container>
            <zmz-container tag="header">Header</zmz-container>
            <zmz-container tag="main" class="zmz-md-main">
                <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                <zmz-container tag="main" style="width:70%;">Main</zmz-container>
            </zmz-container>
            <zmz-container tag="footer">Footer</zmz-container>
        </zmz-container>
        <zmz-container>
            <zmz-container tag="main" class="zmz-md-main">
                <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                <zmz-container tag="main" style="width:70%;line-height:400px;">Main</zmz-container>
            </zmz-container>
        </zmz-container>
        <zmz-container>
            <zmz-container tag="header">Header</zmz-container>
            <zmz-container tag="main" class="zmz-md-main">
                <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                <zmz-container tag="main" style="width:70%;line-height:400px;">Main</zmz-container>
            </zmz-container>
        </zmz-container>
        <zmz-container>
            <zmz-container tag="main" class="zmz-md-main">
                <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                <zmz-container tag="section" style="width:70%;height: 400px;">
                    <zmz-container tag="header">Header</zmz-container>
                    <zmz-container tag="main" style="height: 350px;line-height:350px;">Main</zmz-container>
                </zmz-container>
            </zmz-container>
        </zmz-container>
        <zmz-container>
            <zmz-container tag="main" class="zmz-md-main">
                <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                <zmz-container tag="section" style="width:70%;">
                    <zmz-container tag="header">Header</zmz-container>
                    <zmz-container tag="main" style="height: 300px;line-height:300px;">Main</zmz-container>
                    <zmz-container tag="footer">Footer</zmz-container>
                </zmz-container>
            </zmz-container>
        </zmz-container>
        <zmz-container>
            <zmz-container tag="main" class="zmz-md-main">
                <zmz-container tag="aside" style="width: 30%;">Aside</zmz-container>
                <zmz-container tag="main" style="width: 40%;line-height:400px;">Main</zmz-container>
                <zmz-container tag="aside" style="width: 30%;">Aside</zmz-container>
            </zmz-container>
        </zmz-container>
        <zmz-container>
            <zmz-container tag="header">Header</zmz-container>
            <zmz-container tag="main" class="zmz-md-main">
                <zmz-container tag="aside" style="width: 30%;">Aside</zmz-container>
                <zmz-container tag="main" style="width: 40%;line-height:400px;">Main</zmz-container>
                <zmz-container tag="aside" style="width: 30%;">Aside</zmz-container>
            </zmz-container>
        </zmz-container>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div class="demo-example-box zmz-md-container">
            <zmz-container>
                <zmz-container tag="header">Header</zmz-container>
                <zmz-container tag="main">Main</zmz-container>
            </zmz-container>
            <zmz-container>
                <zmz-container tag="header">Header</zmz-container>
                <zmz-container tag="main">Main</zmz-container>
                <zmz-container tag="footer">Footer</zmz-container>
            </zmz-container>
            <zmz-container>
                <zmz-container tag="header">Header</zmz-container>
                <zmz-container tag="main" class="zmz-md-main">
                    <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                    <zmz-container tag="main" style="width:70%;">Main</zmz-container>
                </zmz-container>
                <zmz-container tag="footer">Footer</zmz-container>
            </zmz-container>
            <zmz-container>
                <zmz-container tag="main" class="zmz-md-main">
                    <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                    <zmz-container tag="main" style="width:70%;line-height:400px;">Main</zmz-container>
                </zmz-container>
            </zmz-container>
            <zmz-container>
                <zmz-container tag="header">Header</zmz-container>
                <zmz-container tag="main" class="zmz-md-main">
                    <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                    <zmz-container tag="main" style="width:70%;line-height:400px;">Main</zmz-container>
                </zmz-container>
            </zmz-container>
            <zmz-container>
                <zmz-container tag="main" class="zmz-md-main">
                    <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                    <zmz-container tag="section" style="width:70%;height: 400px;">
                        <zmz-container tag="header">Header</zmz-container>
                        <zmz-container tag="main" style="height: 350px;line-height:350px;">Main</zmz-container>
                    </zmz-container>
                </zmz-container>
            </zmz-container>
            <zmz-container>
                <zmz-container tag="main" class="zmz-md-main">
                    <zmz-container tag="aside" style="width:30%;">Aside</zmz-container>
                    <zmz-container tag="section" style="width:70%;">
                        <zmz-container tag="header">Header</zmz-container>
                        <zmz-container tag="main" style="height: 300px;line-height:300px;">Main</zmz-container>
                        <zmz-container tag="footer">Footer</zmz-container>
                    </zmz-container>
                </zmz-container>
            </zmz-container>
            <zmz-container>
                <zmz-container tag="main" class="zmz-md-main">
                    <zmz-container tag="aside" style="width: 30%;">Aside</zmz-container>
                    <zmz-container tag="main" style="width: 40%;line-height:400px;">Main</zmz-container>
                    <zmz-container tag="aside" style="width: 30%;">Aside</zmz-container>
                </zmz-container>
            </zmz-container>
            <zmz-container>
                <zmz-container tag="header">Header</zmz-container>
                <zmz-container tag="main" class="zmz-md-main">
                    <zmz-container tag="aside" style="width: 30%;">Aside</zmz-container>
                    <zmz-container tag="main" style="width: 40%;line-height:400px;">Main</zmz-container>
                    <zmz-container tag="aside" style="width: 30%;">Aside</zmz-container>
                </zmz-container>
            </zmz-container>
        </div>
    </div>
</template>
```
:::


## Container 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 
|---------- |-------------- |---------- |--------------------------------  |-------- |
| tag | 自定义标签 | ``String`` | ``header``、``nav``、``aside``、``main``、``section``、``dialog``、``footer``、``div``,更多标签 |  div |
