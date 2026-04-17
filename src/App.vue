<template>
    <router-view></router-view>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: ''
        }
    },
    mounted() {
        console.log(window, window.microApp)
        // 子应用的任意组件或入口中
        console.log('是否存在 jumpToMainApp：', typeof window.jumpToMainApp); // 应为 'function'
        if (window.__MICRO_APP_ENVIRONMENT__) {
            window.dispatchEvent(new CustomEvent('microapp-navigate', {
                detail: {
                    type: 'main',
                    path: '/target-path'
                }
            }));
            // 监听基座下发的数据变化
            window.microApp.addDataListener((data) => {
                // 当基座下发跳转指令时进行跳转
                if (data.path) {
                    router.push(data.path)
                }
            })
        }
    }
};
</script>
