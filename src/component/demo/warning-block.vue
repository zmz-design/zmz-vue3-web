<template>
    <div class="docs-warn-wrapper">
        <p class="docs-warn-wrapper__title">TIP</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'warning-block',
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
            location.href = '/run.html'
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
    }
};
</script>
