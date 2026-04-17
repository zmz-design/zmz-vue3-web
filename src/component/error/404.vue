<template>
    <div class="zmz-common-404">
        <div><img src="@/assets/images/404.jpg" alt="" /></div>
        <div class="zmz-common-404__tip">
            访问的路径不存在
            <span @click="goBack">返回</span>
        </div>
    </div>
</template>

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
    name: 'NotFoundPage',
    data() {
        return {
            title: '404' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description')
        };
    },
    mounted() {
        console.log(this.$route)
    },
    methods: {
        currentConfig(data) {
            console.log(this.$setting)
            return this.$setting.currentConfig[data];
        },
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>
<style scoped lang="less">
.zmz-common-404 {
    text-align: center;
    padding-top: 60px;

    &__tip {
        color: #3f536e;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 2px;

        span {
            cursor: pointer;
            color: #e70006;
        }
    }
}
</style>