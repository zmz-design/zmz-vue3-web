import { createRouter, createWebHashHistory } from 'vue-router';
const requireComponent = import.meta.glob('./modules/*.js', { eager: true })
const modules = [];
Object.keys(requireComponent).forEach((fileName) => {
    // 获取配置
    const componentConfig = requireComponent[fileName];
    const item = componentConfig.default
    // 若该组件是通过"export default"导出的，优先使用".default"，否则退回到使用模块的根
    modules.push(...item)
})

// 总路由
const routes = [
    ...modules,
    {
        path: "/:catchAll(.*)",
        component: () => import(`@/component/error/404.vue`)
    }
];
console.log(routes)
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
                offset: { y: 20 }  // 可选的偏移量
            };
        }
    }
})

router.afterEach(() => {
    window.scrollTo(0, 0)
    let docsWrap = document.querySelector('.zmz-docs--doc')
    if (docsWrap) {
        docsWrap.scrollTo(0, 0)
    }
})

export default router