import { render, createVNode } from 'vue'
import ZmzLoadingBox from './zmz-loading.vue';
let instance = null;
let loadingConstructor = (options = {}) => {
    let vm = createVNode(ZmzLoadingBox, options)
    render(vm, document.body);
    return vm.component
}


function transmit(options) {
    instance = loadingConstructor(options);
    instance.proxy.setZindex();

    // 用于手动消除
    return instance.proxy.loading().then(val => {
        return Promise.resolve(val);
    }).catch(err => {
        return Promise.reject(err);
    });
}

export default {
    name: 'ZmzLoadingEvent',
    start(options) {
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }
        return transmit(options);
    },
    close() {
        if (instance && instance.proxy) {
            instance.proxy.close();
        }
    }
}