<template>
    <div class="demo-wrapper">
        <div class="demo-wrapper__container" :style="{ height: isExpand ? 'auto' : '0' }">
            <div class="demo-wrapper__container__code demo-wrapper__container__code--expand">
                <div class="highlight-wrapper" ref="highlights">
                    <slot name="highlight"></slot>
                </div>
            </div>
        </div>
        <div class="demo-wrapper__btn">
            <span class="demo-wrapper__btn__togglecode" @click="toggle">{{ isExpand ? '隐藏代码' : '显示代码' }}</span>
            <div class="demo-wrapper__btn__coderun">
                <span class="demo-wrapper__btn__coderun__run" @click="codeRun">
                    <zmz-tooltip content="在线运行"><zmz-icon name="run-1" size="14"></zmz-icon></zmz-tooltip>
                </span>
                <span class="demo-wrapper__btn__coderun__run" @click="codeAll">
                    <zmz-tooltip content="复制全部"><zmz-icon name="copy" size="14"></zmz-icon></zmz-tooltip>
                </span>
                <span class="demo-wrapper__btn__coderun__run" @click="codeTemplate">
                    <zmz-tooltip content="复制template"><zmz-icon name="demo-template" size="14"></zmz-icon></zmz-tooltip>
                </span>
                <span class="demo-wrapper__btn__coderun__run" @click="codeScript">
                    <zmz-tooltip content="复制javascript"><zmz-icon name="demo-javascript"
                            size="14"></zmz-icon></zmz-tooltip>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpand: false
        };
    },
    computed: {
        codeHtml() {
            return this.$slots.highlight()[0].el.innerText;
        }
    },
    methods: {
        toggle() {
            this.isExpand = !this.isExpand;
        },
        // 在线运行
        codeRun() {
            sessionStorage.setItem('runCode', JSON.stringify(this.$refs.highlights.outerText))
            window.microApp.getData().pushState({
                path: '/zmz-play'
            })
        },
        // 复制全部
        codeAll() {
            let outerText = this.$refs.highlights.outerText;
            this.$copy(outerText).then(() => {
                this.$message.success('复制成功')
            })
        },
        // 复制模板
        codeTemplate() {
            this.$refs.highlights.outerText.replace(/<template(?:(?!<\/template>).|\n)*?<\/template>/gm, (str) => {
                this.$copy(str).then(() => {
                    this.$message.success('复制成功')
                })
            })
        },
        // 复制脚本
        codeScript() {
            this.$refs.highlights.outerText.replace(/<script(?:(?!<\/script>).|\n)*?<\/script>/gm, (str) => {
                this.$copy(str).then(() => {
                    this.$message.success('复制成功')
                })
            })
        },
    },
    mounted() {
        window.addEventListener('mount', () => {
            console.log('加载完成')
        }, { once: true }); // 只监听一次
    }
};
</script>
<style lang="less">
// 演示容器
.demo-wrapper {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #f7f7f7;
    border: 1px solid var(--theme-color-border);
    margin-bottom: 20px;

    pre code {
        font-family: Consolas, Menlo, Courier, monospace;
        line-height: 22px;
        border: none;
    }

    // 主体
    &__container {
        transition: max-height 0.3s ease;
        overflow: hidden;

        // 代码
        &__code {
            overflow-y: auto;
            border-bottom: 1px solid #eee;

            &--expand {
                border-color: var(--theme-color-border);

                .docs-demo__triangle {
                    transform: rotate(180deg);
                }

                .highlight-wrapper {
                    display: block;

                    p,
                    pre {
                        margin: 0;
                    }

                    .hljs {
                        padding: 0;
                    }
                }
            }
        }
    }

    // 按钮
    &__btn {
        position: relative;
        height: 36px;

        &__togglecode {
            width: 100%;
            line-height: 36px;
            text-align: center;
            display: inline-block;
            color: var(--theme-color-text);
            font-size: 12px;
            padding: 0 15px;
            background-color: var(--theme-color-subbackground);
            cursor: pointer;
        }

        &__coderun {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            color: var(--theme-color-text);
            font-size: 12px;
            cursor: pointer;
            padding: 0 15px;
            display: flex;
            align-items: center;

            &__run {
                font-size: 12px;
                margin: 0 10px;
                color: #808695;
            }
        }
    }
}
</style>