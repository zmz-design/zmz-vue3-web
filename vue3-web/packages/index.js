/**
 * @author zmz
 * QQ: 1028470211
 * Email: 1028470211@qq.com
 * @description zmz-vue3-web 组件库入口
 */

// ==================== 导入模块 ====================
// 组件
import * as components from './components';

// 指令
import * as directives from './utils/directive.js';

// 工具函数
import zmzGlobal from './utils/global.js';
import * as zmzTools from './utils/index.js';
import { setZindex } from './utils/zIndex.js';

// 样式资源
import './theme-default/lib/index.css';

// 包信息
import pack from '../package.json';

// ==================== 常量定义 ====================
const DEFAULT_CONFIG = {
  size: '',
  zIndex: 2000
};

// 需要挂载到全局的组件实例
const GLOBAL_PROPERTIES = {
  $copy: 'ZmzCopy',
  $network: 'ZmzNetwork',
  $loading: 'ZmzLoadingEvent',
  $loadingbar: 'ZmzLoadingBar',
  $message: 'ZmzMessage',
  $toast: 'ZmzToast',
  $messageBox: 'ZmzMessageBox',
  $notice: 'ZmzNotice'
};

// ==================== 工具函数 ====================
/**
 * 合并配置
 * @param {Object} options - 用户配置
 * @param {Object} defaultConfig - 默认配置
 * @returns {Object} 合并后的配置
 */
const mergeConfig = (options = {}, defaultConfig) => ({
  ...defaultConfig,
  ...options,
  // 确保 zIndex 是数字类型
  zIndex: Number(options.zIndex) || defaultConfig.zIndex
});

/**
 * 注册所有组件
 * @param {Object} app - Vue 应用实例
 * @param {Object} config - 全局配置
 */
const registerComponents = (app, config) => {
  Object.values(components).forEach(component => {
    // 确保组件存在且有 install 方法
    if (component && component.install) {
      app.use(component, config);
    } else if (component && component.name) {
      // 如果组件没有 install 方法但有 name，直接注册
      app.component(component.name, component);
    }
  });
};

/**
 * 注册所有指令
 * @param {Object} app - Vue 应用实例
 */
const registerDirectives = (app) => {
  Object.entries(directives).forEach(([name, directive]) => {
    if (directive) {
      app.directive(name, directive);
    }
  });
};

/**
 * 挂载全局属性
 * @param {Object} app - Vue 应用实例
 * @param {Object} config - 全局配置
 */
const mountGlobalProperties = (app, config) => {
  // 基础配置
  app.config.globalProperties.$zmzConfig = config;
  app.config.globalProperties.$zmzGlobal = zmzGlobal(config);
  app.config.globalProperties.$zmzTools = zmzTools;

  // 挂载组件实例
  Object.entries(GLOBAL_PROPERTIES).forEach(([property, componentName]) => {
    const component = components[componentName];
    if (component) {
      app.config.globalProperties[property] = component;
    } else {
      console.warn(`[zmz-vue3-web] 组件 ${componentName} 未找到，无法挂载到 $${property.slice(1)}`);
    }
  });
};

// ==================== 导出模块 ====================

// 导出所有组件（支持按需引入）
export * from './components';

// 导出指令
export * from './utils/directive.js';

// 导出工具函数
export { zmzGlobal, zmzTools, setZindex };

// 导出包版本
export const version = pack.version;

/**
 * 组件库安装方法
 * @param {Object} app - Vue 应用实例
 * @param {Object} options - 安装选项
 * @param {string} options.size - 全局组件尺寸
 * @param {number} options.zIndex - 全局 zIndex 起始值
 * @returns {Object} Vue 应用实例
 */
export const install = (app, options = {}) => {
  // 防止重复安装
  if (app._zmzInstalled) {
    console.warn('[zmz-vue3-web] 组件库已安装，请勿重复安装');
    return app;
  }

  // 合并配置
  const config = mergeConfig(options, DEFAULT_CONFIG);

  // 设置全局 zIndex
  setZindex(config.zIndex);

  // 注册组件
  registerComponents(app, config);

  // 注册指令
  registerDirectives(app);

  // 挂载全局属性
  mountGlobalProperties(app, config);

  // 标记已安装
  app._zmzInstalled = true;

  return app;
};

// 默认导出（支持 Vue.use()）
export default {
  version: pack.version,
  install,
  // 解构导出所有组件，方便直接使用
  ...components
};