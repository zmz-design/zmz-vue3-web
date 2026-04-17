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
            title: 'Transition 内置动画' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            // 缩放动画
            zoomDataList: [
                {
                    value: 'zmz-zoom',
                    label: 'zmz-zoom',
                    title: '缩放',
                    show: true
                },
                {
                    value: 'zmz-zoom-top',
                    label: 'zmz-zoom-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-zoom-bottom',
                    label: 'zmz-zoom-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-zoom-left',
                    label: 'zmz-zoom-left',
                    title: '向左',
                    show: true
                },
                {
                    value: 'zmz-zoom-right',
                    label: 'zmz-zoom-right',
                    title: '向右',
                    show: true
                },
            ],
            // 旋转
            rotateDataList: [
                {
                    value: 'zmz-rotate-bottom-left',
                    label: 'zmz-rotate-bottom-left',
                    title: '向下左',
                    show: true
                },
                {
                    value: 'zmz-rotate-bottom-right',
                    label: 'zmz-rotate-bottom-right',
                    title: '向下右',
                    show: true
                },
                {
                    value: 'zmz-rotate-top-left',
                    label: 'zmz-rotate-top-left',
                    title: '向上左',
                    show: true
                },
                {
                    value: 'zmz-rotate-top-right',
                    label: 'zmz-rotate-top-right',
                    title: '向下右',
                    show: true
                },
                {
                    value: 'zmz-rotate',
                    label: 'zmz-rotate',
                    title: '居中',
                    show: true
                },
            ],
            // 淡入淡出
            fadeDataList: [
                {
                    value: 'zmz-fade',
                    label: 'zmz-fade',
                    title: '淡入淡出',
                    show: true
                },
                {
                    value: 'zmz-fade-bottom',
                    label: 'zmz-fade-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-fade-top',
                    label: 'zmz-fade-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-fade-right',
                    label: 'zmz-fade-right',
                    title: '向右',
                    show: true
                },
                {
                    value: 'zmz-fade-left',
                    label: 'zmz-fade-left',
                    title: '向左',
                    show: true
                },
            ],
            // 滑入滑出
            slideDataList: [
                {
                    value: 'zmz-slide-bottom',
                    label: 'zmz-slide-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-slide-top',
                    label: 'zmz-slide-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-slide-right',
                    label: 'zmz-slide-right',
                    title: '向右',
                    show: true
                },
                {
                    value: 'zmz-slide-left',
                    label: 'zmz-slide-left',
                    title: '向左',
                    show: true
                },
            ],
            // 折叠动画
            foldDataList: [
                {
                    value: 'zmz-fold-top',
                    label: 'zmz-fold-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-fold-bottom',
                    label: 'zmz-fold-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-fold-left',
                    label: 'zmz-fold-left',
                    title: '向左',
                    show: true
                },
                {
                    value: 'zmz-fold-right',
                    label: 'zmz-fold-right',
                    title: '向右',
                    show: true
                },
                {
                    value: 'zmz-fold-center-x',
                    label: 'zmz-fold-center-x',
                    title: '水平',
                    show: true
                },
                {
                    value: 'zmz-fold-center-y',
                    label: 'zmz-fold-center-y',
                    title: '垂直',
                    show: true
                }
            ],
            show: true,
            show2: true
        };
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
</script>

# Transition 内置动画
----
组件过度动画

## 淡入淡出
<div class="demo-block">
    <zmz-grid :column="4" border square>
        <zmz-grid-item v-for="item,index in fadeDataList" :key="index">
            <div class="demo-md-transition">
                <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                <div class="demo-md-transition__section">
                    <transition :name="item.value">
                        <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                    </transition>
                </div>
                <div class="demo-md-transition__footer">{{item.title}}</div>
            </div>
        </zmz-grid-item>
    </zmz-grid>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in fadeDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fadeDataList: [
                {
                    value: 'zmz-fade',
                    label: 'zmz-fade',
                    title: '淡入淡出',
                    show: true
                },
                {
                    value: 'zmz-fade-bottom',
                    label: 'zmz-fade-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-fade-top',
                    label: 'zmz-fade-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-fade-right',
                    label: 'zmz-fade-right',
                    title: '向右',
                    show: true
                },
                {
                    value: 'zmz-fade-left',
                    label: 'zmz-fade-left',
                    title: '向左',
                    show: true
                },
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
</script>
```
:::

## 旋转动画
<div class="demo-block">
    <zmz-grid :column="4" border square>
        <zmz-grid-item v-for="item,index in rotateDataList" :key="index">
            <div class="demo-md-transition">
                <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                <div class="demo-md-transition__section">
                    <transition :name="item.value">
                        <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                    </transition>
                </div>
                <div class="demo-md-transition__footer">{{item.title}}</div>
            </div>
        </zmz-grid-item>
    </zmz-grid>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in rotateDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rotateDataList: [
                {
                    value: 'zmz-rotate-bottom-left',
                    label: 'zmz-rotate-bottom-left',
                    title: '向下左',
                    show: true
                },
                {
                    value: 'zmz-rotate-bottom-right',
                    label: 'zmz-rotate-bottom-right',
                    title: '向下右',
                    show: true
                },
                {
                    value: 'zmz-rotate-top-left',
                    label: 'zmz-rotate-top-left',
                    title: '向上左',
                    show: true
                },
                {
                    value: 'zmz-rotate-top-right',
                    label: 'zmz-rotate-top-right',
                    title: '向下右',
                    show: true
                },
                {
                    value: 'zmz-rotate',
                    label: 'zmz-rotate',
                    title: '居中',
                    show: true
                },
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
</script>
```
:::

## 滑入动画
<div class="demo-block">
    <zmz-grid :column="4" border square>
        <zmz-grid-item v-for="item,index in slideDataList" :key="index">
            <div class="demo-md-transition">
                <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                <div class="demo-md-transition__section">
                    <transition :name="item.value">
                        <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                    </transition>
                </div>
                <div class="demo-md-transition__footer">{{item.title}}</div>
            </div>
        </zmz-grid-item>
    </zmz-grid>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in slideDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slideDataList: [
                {
                    value: 'zmz-slide-bottom',
                    label: 'zmz-slide-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-slide-top',
                    label: 'zmz-slide-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-slide-right',
                    label: 'zmz-slide-right',
                    title: '向右',
                    show: true
                },
                {
                    value: 'zmz-slide-left',
                    label: 'zmz-slide-left',
                    title: '向左',
                    show: true
                },
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
</script>
```
:::


## 折叠动画
<div class="demo-block">
    <zmz-grid :column="4" border square>
        <zmz-grid-item v-for="item,index in foldDataList" :key="index">
            <div class="demo-md-transition">
                <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                <div class="demo-md-transition__section">
                    <transition :name="item.value">
                        <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                    </transition>
                </div>
                <div class="demo-md-transition__footer">{{item.title}}</div>
            </div>
        </zmz-grid-item>
    </zmz-grid>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in foldDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            foldDataList: [
                {
                    value: 'zmz-fold-top',
                    label: 'zmz-fold-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-fold-bottom',
                    label: 'zmz-fold-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-fold-left',
                    label: 'zmz-fold-left',
                    title: '向左',
                    show: true
                },
                {
                    value: 'zmz-fold-right',
                    label: 'zmz-fold-right',
                    title: '向右',
                    show: true
                },
                {
                    value: 'zmz-fold-center-x',
                    label: 'zmz-fold-center-x',
                    title: '水平',
                    show: true
                },
                {
                    value: 'zmz-fold-center-y',
                    label: 'zmz-fold-center-y',
                    title: '垂直',
                    show: true
                }
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
</script>
```
:::

## 缩放动画
<div class="demo-block">
    <zmz-grid :column="4" border square>
        <zmz-grid-item v-for="item,index in zoomDataList" :key="index">
            <div class="demo-md-transition">
                <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                <div class="demo-md-transition__section">
                    <transition :name="item.value">
                        <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                    </transition>
                </div>
                <div class="demo-md-transition__footer">{{item.title}}</div>
            </div>
        </zmz-grid-item>
    </zmz-grid>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-grid :column="4" border square>
            <zmz-grid-item v-for="item,index in zoomDataList" :key="index">
                <div class="demo-md-transition">
                    <div class="demo-md-transition__header"><zmz-button @click="handleTransition(item)">显示动画</zmz-button></div>
                    <div class="demo-md-transition__section">
                        <transition :name="item.value">
                            <div v-show="item.show" class="zmz-transition-box">{{item.label}}</div>
                        </transition>
                    </div>
                    <div class="demo-md-transition__footer">{{item.title}}</div>
                </div>
            </zmz-grid-item>
        </zmz-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            zoomDataList: [
                {
                    value: 'zmz-zoom',
                    label: 'zmz-zoom',
                    title: '缩放',
                    show: true
                },
                {
                    value: 'zmz-zoom-top',
                    label: 'zmz-zoom-top',
                    title: '向上',
                    show: true
                },
                {
                    value: 'zmz-zoom-bottom',
                    label: 'zmz-zoom-bottom',
                    title: '向下',
                    show: true
                },
                {
                    value: 'zmz-zoom-left',
                    label: 'zmz-zoom-left',
                    title: '向左',
                    show: true
                },
                {
                    value: 'zmz-zoom-right',
                    label: 'zmz-zoom-right',
                    title: '向右',
                    show: true
                },
            ]
        };
    },
    methods: {
        handleTransition(item) {
            item.show = !item.show
        }
    }
}
</script>
```
:::

## 展开动画
<div class="demo-block">
    <div style="margin-bottom: 20px; display:flex;">
        <zmz-button size="medium" style="margin-left: 20px;" @click="show = !show">显示动画</zmz-button>
    </div>
    <div style="height:100px;">
        <zmz-transition-collapse>
            <div v-show="show">
                <div class="zmz-transition-box">zmz-transition-collapse</div>
            </div>
        </zmz-transition-collapse>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px; display:flex;">
            <zmz-button size="medium" style="margin-left: 20px;" @click="show = !show">显示动画</zmz-button>
        </div>
        <div style="height:100px;">
            <zmz-transition-collapse>
                <div v-show="show">
                    <div class="zmz-transition-box">zmz-transition-collapse</div>
                </div>
            </zmz-transition-collapse>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: true
        };
    }
}
</script>
```
:::

## 动画组

<div class="demo-block">
    <div style="margin-bottom: 20px; display:flex;">
        <zmz-button size="medium" style="margin-left: 20px;" @click="show2 = !show2">显示动画</zmz-button>
    </div>
    <div style="height:100px;display:flex;">
        <transition-group name="zmz-fold-center-x">
            <div v-show="show2" :key="0" class="zmz-transition-box" style="margin-right: 20px;">zmz-fold-center-x</div>
            <div v-show="show2" :key="0" class="zmz-transition-box">zmz-fold-center-x</div>
        </transition-group>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px; display:flex;">
            <zmz-button size="medium" style="margin-left: 20px;" @click="show2 = !show2">显示动画</zmz-button>
        </div>
        <div style="height:100px;display:flex;">
            <transition-group name="zmz-fold-center-x">
                <div v-show="show2" :key="0" class="zmz-transition-box" style="margin-right: 20px;">zmz-fold-center-x</div>
                <div v-show="show2" :key="0" class="zmz-transition-box">zmz-fold-center-x</div>
            </transition-group>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show2: true
        };
    }
}
</script>
```
:::
