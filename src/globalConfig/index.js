import logo from '@/assets/images/logo.png';
let globalConfig = {
    keywords: 'zmz-vue3-web',
    description: '基于Vue3.0的网站快速成型UI组件库',
    copyright: 'Copyright © 2021-2022 追梦猪'
}
// mock 模拟开关
const mockConfig = {
    switch: false,
    url: 'http://localhost:8080'
}
// 默认配置
const defaultConfig = {
    // logo
    logo: logo,
    // 名称
    name: '追梦猪',
    // 标题
    title: 'zmz-vue3-web文档 - 基于Vue3.0的网站快速成型UI组件库',
    // 小尾巴（适用非首页）
    tails: ' - 基于Vue3.0的网站快速成型UI组件库',
    // 关键字
    keywords: globalConfig.keywords,
    // 描述
    description: globalConfig.description,
    // 路由入口
    router: '/docs',
    // 版权
    copyright: globalConfig.copyright,
    // 备案
    record: '冀ICP备18035267号',
    // 备案地址
    recordUrl: '//beian.miit.gov.cn/',
    // 地址
    baseUrl: location.origin,
    // 公共菜单
    menuUrl: [{
        'name': 'home',
        'url': '/',
        'router': true
    }, {
        'name': 'document',
        'url': '/docs/introduce',
        'router': true
    }]
}

// 文档配置
export const currentConfig = Object.assign({}, defaultConfig, globalConfig)


const setting = {
    // 文档配置
    currentConfig,
    globalConfig
}
export default setting;
