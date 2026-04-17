<template>
    <div class="preview-wrapper">
        <div class="preview-wrapper__wrap">
            <div class="preview-wrapper__btn" @click="codeAll">
                <zmz-tooltip content="复制全部"><zmz-icon name="copy" size="14"></zmz-icon></zmz-tooltip>
            </div>
            <div class="preview-wrapper__code" ref="preview-highlights">
                <slot name="highlight"></slot>
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
    methods: {
        // 复制全部
        codeAll() {
            let outerText = this.$refs['preview-highlights'].outerText;
            this.$copy(outerText).then(() => {
                this.$message.success('复制成功')
            })
        }
    }
};
</script>
<style lang="less">
// 演示容器
.preview-wrapper {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 14px;
    margin-bottom: 20px;

    &:hover {
        .preview-wrapper__btn {
            display: flex;
        }
    }

    // 主体
    &__wrap {
        transition: max-height 0.3s ease;
        overflow: hidden;
        position: relative;
    }

    &__code {
        position: relative;
        z-index: 1;

        &>pre {
            margin: 0 !important;
            code {
                font-family: Consolas, Menlo, Courier, monospace;
                line-height: 22px;
                border: none;
            }
        }
    }

    // 按钮
    &__btn {
        position: absolute;
        right: 5px;
        top: 5px;
        border: 1px solid #2e2e32;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
        padding: 0 8px;
        background: #161f32;
        align-items: center;
        justify-content: flex-end;
        height: 36px;
        font-size: 12px;
        border-radius: 5px;
        z-index: 2;
        display: none;
    }
}
</style>