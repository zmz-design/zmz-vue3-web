/**
 * @author zmz
 * QQ:1028470211
 * Email:1028470211@qq.com
 */

import ZmzLoadingDirective from './src/zmz-loading-directive.js';
import ZmzLoading from './src/zmz-loading.vue';
import ZmzLoadingEvent from './src/zmz-loading.js';

ZmzLoading.install = function(app) {
    app.component(ZmzLoading.name, ZmzLoading);
};

ZmzLoadingEvent.install = function(app) {
    app.component(ZmzLoadingEvent.name, ZmzLoadingEvent);
};

export {
  ZmzLoadingDirective,
  ZmzLoading,
  ZmzLoadingEvent
};