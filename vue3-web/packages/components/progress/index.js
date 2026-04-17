/**
 * @author zmz
 * QQ:1028470211
 * Email:1028470211@qq.com
 */
import ZmzProgress from './src/zmz-progress.vue';

ZmzProgress.install = function(app) {
    app.component(ZmzProgress.name, ZmzProgress);
};

export default ZmzProgress;
