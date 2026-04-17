import { render, createVNode } from 'vue'
import Messagebox from './zmz-messagebox.vue';

let popupConstructor = (options = {}) => {
    let vm = createVNode(Messagebox, options)
    render(vm, document.body);
    return vm.component
}


function transmit(options) {
    let instance = popupConstructor(options);
    instance.proxy.setZindex();

    // 用于手动消除
    return instance.proxy.common()
}

const messagebox = {
    name: 'ZmzMessagebox',
    confirm(options) {
        return this.message('confirm', options);
    },
    alert(options) {
        return this.message('alert', options);
    },
    prompt(options) {
        return this.message('prompt', options);
    },
    message(type, options) {
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }
        options.type = type
        return transmit(options);
    }
}

export default messagebox