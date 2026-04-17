/**
 * @author zmz
 * QQ:1028470211
 * Email:1028470211@qq.com
 */
import { render, createVNode } from 'vue'
import ZmzLoadingbar from './src/zmz-loadingbar.vue';

let timer = null;
let removeTimer = null;

let popupConstructor = (options = {}) => {
    let vm = createVNode(ZmzLoadingbar, options)
    render(vm, document.body);
    return vm.component
}


function transmit(options) {
    let instance = popupConstructor(options);
    instance.proxy.setZindex();
    return instance.props
}

export default {
    name: 'ZmzLoadingBar',
    init(options) {
        return transmit(options);
    },
    start(options) {
        let instance = this.init();
        instance.totalProgress = 0;
        instance.error = false;
        Object.keys(options).forEach((key) => {
            if (key === 'error' || key === 'totalProgress') {
                return;
            }
            instance[key] = options[key]
        })
        timer = setInterval(() => {
            if (instance.totalProgress < 90) {
                instance.totalProgress += (instance.percent || Math.random()) * instance.speed;
            }
        }, 100);
    },
    end() {
        let instance = this.init()
        instance.totalProgress = 100
        instance.error = false;
        instance.visible = true
        if (removeTimer) {
            clearTimeout(removeTimer)
        }
        removeTimer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            instance.visible = false
        }, 200)
        return instance
    },
    error() {
        let instance = this.end()
        instance.totalProgress = 100
        instance.error = true
    },
}