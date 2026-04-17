import { render, createVNode } from 'vue'
import toast from './src/zmz-toast.vue';

let popupConstructor = (options = {}) => {
    let vm = createVNode(toast, options)
    render(vm, document.body);
    return vm.component
}


function transmit(options) {
    let instance = popupConstructor(options);
    instance.proxy.setZindex();

    // 用于手动消除
    return instance.proxy.common().then(val => {
        return Promise.resolve(val);
    }).catch(err => {
        return Promise.reject(err);
    });
}

function clear() {
    let instance = popupConstructor();
    // 用于手动消除
    return instance.proxy.clear().then(val => {
        return Promise.resolve(val);
    }).catch(err => {
        return Promise.reject(err);
    });
}

export default {
    name: 'ZmzToast',
    success(options) {
        return this.common('success', options);
    },
    error(options) {
        return this.common('error', options);
    },
    warning(options) {
        return this.common('warning', options);
    },
    loading(options) {
        return this.common('loading', options);
    },
    clear() {
        return clear();
    },
    text(options) {
        return this.common('text', options);
    },
    icon(options) {
        return this.common('icon', options);
    },
    toast(options) {
        return transmit(options);
    },
    common(type, options) {
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }

        options.type = type
        return transmit(options);
    }
}