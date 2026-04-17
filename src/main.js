import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
import ZMZUI from '@/../packages';
import '@/../packages/theme-default/src/index.less';

// 全局配置导入
import setting from '@docs/globalConfig';
import router from '@docs/router';
import store from '@docs/store';
import globalDirective from '@/globalDirective/index.js';
import services from '@/services/index.js';
import GlobalComponent from '@/component/index.js';

// 模拟请求
import '@docs/mock/index.js';

// 全局样式
import '@docs/assets/css/index.less';

// 国际化
import { createI18n } from 'vue-i18n';
import zmzLang from '@docs/language/index.js';

// 获取本地语言设置
const localLang = navigator.language.split('-')[0];
const storageLang = window.localStorage.getItem('zmzLang') || 'zh';
const currentLang = (storageLang.toLowerCase() !== 'zh') ? 'en' : storageLang;

const i18n = createI18n({
  globalInjection: true, // 全局生效 $t
  locale: currentLang || localLang || 'zh',
  messages: zmzLang,
  legacy: false,
});

// 创建应用实例
let app = null;

// 挂载应用的函数
const mountApp = (appName = '独立应用') => {
  try {
    app = createApp(App);

    // 配置全局属性
    app.config.globalProperties.$eventBus = mitt();
    app.config.globalProperties.$setting = setting;
    app.config.globalProperties.$services = services;

    // 开发环境性能监测
    app.config.performance = import.meta.env.MODE === 'development';

    // 注册全局指令
    app.use(globalDirective);

    // 全局错误处理
    app.config.errorHandler = (err, vm, info) => {
      console.group(`[ERROR] 组件 ${vm?.$options?.name || '未知'} 发生错误`);
      console.error('错误详情:', err);
      console.error('错误位置:', info);
      console.groupEnd();

      // 在生产环境中，可发送错误报告
      if (import.meta.env.PROD) {
        // 这里可以添加错误上报逻辑
        console.warn('生产环境中应上报错误:', err.message);
      }
    };

    // 全局组件、插件注册
    app
      .use(GlobalComponent)
      .use(store)
      .use(router)
      .use(ZMZUI)
      .use(i18n)
      .mount('#zmz-vue3-web');

    console.info(`[zmz-vue3-web] ${appName} 已成功启动`);
  } catch (error) {
    console.error(`[zmz-vue3-web] ${appName} 启动失败`, error);
    throw error;
  }
};

// 卸载应用的函数
const unmountApp = (appName = '独立应用') => {
  try {
    if (app) {
      app.unmount();
      app = null;
      console.info(`[zmz-vue3-web] ${appName} 已成功卸载`);
    }
  } catch (error) {
    console.error(`[zmz-vue3-web] ${appName} 卸载失败`, error);
  }
};

// 微前端环境处理
if (window.__MICRO_APP_ENVIRONMENT__) {
  // 微前端子应用模式
  window.mount = () => {
    mountApp('微前端子应用');
  };

  window.unmount = () => {
    unmountApp('微前端子应用');
  };

  // 初始化子应用
  if (typeof window.mount === 'function') {
    window.mount();
  }
} else {
  // 独立应用模式
  mountApp('独立应用');
}

// 导出应用实例（可选，用于调试等目的）
export { app, mountApp, unmountApp };