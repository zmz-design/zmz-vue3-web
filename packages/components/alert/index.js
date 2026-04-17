/**
 * @author zmz
 * QQ:1028470211
 * Email:1028470211@qq.com
 */
import ZmzAlert from './src/zmz-alert.vue';

ZmzAlert.install = function(app) {
    app.component(ZmzAlert.name, ZmzAlert);
};

export default ZmzAlert;
