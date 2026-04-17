import { render, createVNode } from 'vue'
import Message from './zmz-message.vue';
import { nextZindex } from '../../../utils/zIndex.js';
let offsetList = [];
let container = null
let verticalOffset = 0

let popupConstructor = (options = {}) => {
    let id = 'zmz-message-' + new Date().getTime();
    container = document.createElement('div');
    container.id = id;
    container.style.position = 'fixed';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = nextZindex();
    verticalOffset = options.offset || 0;
    offsetList.forEach(item => {
        verticalOffset += item.el.offsetHeight + 16;
    });
    verticalOffset += 16;
    container.style.top = `${verticalOffset}px`;
    options.id = id;
    let vm = createVNode(Message, options)
    render(vm, container);
    document.body.appendChild(container)
    offsetList.push(vm);
    return vm.component
}


function transmit(options) {
    let instance = popupConstructor(options);
    // 用于手动消除
    return instance.proxy.show()
}

const commonFun = (that, type, options) => {
    let defaultOptions = {}
    if (typeof options === 'string' || typeof options === 'boolean') {
        defaultOptions.content = String(options)
    } else {
        defaultOptions = options
    }
    defaultOptions.type = type
    return that.message(defaultOptions);
}

const ZmzMessage = {
    name: 'ZmzMessage',
    default(options) {
        return commonFun(this, 'default', options);
    },
    primary(options) {
        return commonFun(this, 'primary', options);
    },
    success(options) {
        return commonFun(this, 'success', options);
    },
    warning(options) {
        return commonFun(this, 'warning', options);
    },
    error(options) {
        return commonFun(this, 'error', options);
    },
    info(options) {
        return commonFun(this, 'info', options);
    },
    message(options, userOnClose) {
        return transmit(options, userOnClose);
    },
    close(id, userOnClose) {
        let len = offsetList.length;
        let index = -1;
        for (let i = 0; i < len; i++) {
            if (id === offsetList[i].component.proxy.id) {
                index = i;
                if (typeof userOnClose === 'function') {
                    userOnClose(offsetList[i]);
                }
                offsetList.splice(i, 1);
                break;
            }
        }
        if (len <= 1 || index === -1 || index > offsetList.length - 1) return;
        const removedHeight = offsetList[index].el.offsetHeight;
        for (let i = index; i < len - 1; i++) {
            let dom = offsetList[i].el.parentNode;
            dom.style['top'] = (parseInt(dom.style['top'], 10) - removedHeight - 16) + 'px';
        }
    },
    closeAll() {
        for (let i = offsetList.length - 1; i >= 0; i--) {
            offsetList[i].close();
        }
    }
}

export default ZmzMessage
