/**
 * @author zmz
 * QQ:1028470211
 * Email:1028470211@qq.com
 */
import ZmzCarousel from './src/zmz-carousel.vue';

ZmzCarousel.install = function (app) {
  app.component(ZmzCarousel.name, ZmzCarousel);
};

export default ZmzCarousel;
