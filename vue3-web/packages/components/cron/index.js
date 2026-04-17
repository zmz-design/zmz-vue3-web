/**
 * @author zmz
 * QQ:1028470211
 * Email:1028470211@qq.com
 */
import ZmzCron from './src/zmz-cron.vue';

ZmzCron.install = function(app) {
    app.component(ZmzCron.name, ZmzCron);
};

export default ZmzCron;
