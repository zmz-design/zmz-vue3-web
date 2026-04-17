import { createVNode, render } from 'vue'
import ZmzLoading from './zmz-loading.vue';
import { addClass, removeClass } from '../../../utils/dom.js'
let ZmzLoadingDirective = () => { }
let loadingConstructor = (el, options = {}) => {
    let vm = createVNode(ZmzLoading, options)
    render(vm, el);
    return vm.component.proxy
}

ZmzLoadingDirective.install = app => {
    const appendDom = (el, binding) => {
        if (!binding.modifiers.fullscreen) {
            addClass(el, 'zmz-loading--parent')
        }
    };

    const removeDom = (el, binding) => {
        if (!binding.modifiers.fullscreen) {
            removeClass(el, 'zmz-loading--parent')
        }
    };

    app.directive('zmz-loading', {
        beforeMount(el, binding) {
            const options = {};
            const content = el.getAttribute('zmzLoading-content');
            const loadingStyle = el.getAttribute('zmzLoading-loading-style');
            const loadingClass = el.getAttribute('zmzLoading-loading-class');
            const background = el.getAttribute('zmzLoading-background');
            const rotate = el.getAttribute('zmzLoading-rotate');
            const icon = el.getAttribute('zmzLoading-icon');
            const teleport = el.getAttribute('zmzLoading-teleport');
            const mode = el.getAttribute('zmzLoading-mode');


            if (binding.modifiers.fullscreen) {
                options['fullscreen'] = binding.modifiers.fullscreen
            }

            if (teleport === "true") {
                options['teleport'] = Boolean(teleport)
            }

            if (binding.modifiers.teleport) {
                options['teleport'] = binding.modifiers.teleport
            }

            if (content) {
                options['content'] = content
            }

            if (loadingStyle) {
                options['loadingStyle'] = loadingStyle
            }

            if (loadingClass) {
                options['loadingClass'] = loadingClass
            }

            if (background) {
                options['background'] = background
            }

            if (icon) {
                options['icon'] = icon
            }

            if (rotate) {
                options['rotate'] = rotate
            }

            if (mode) {
                options['mode'] = mode
            }

            el.instance = loadingConstructor(el, options);
        },
        mounted(el, binding) {
            if (el.instance && binding.value) {
                appendDom(el, binding);
                el.instance.isOpen = binding.value
            }
        },
        updated(el, binding) {
            if (el.instance && binding.value !== binding.oldValue) {
                el.instance.isOpen = binding.value
                appendDom(el, binding);
            }
        },

        unmounted(el, binding) {
            if (el.instance) {
                removeDom(el, binding)
                el.instance.isOpen = false
            }
        }
    });
};

export default ZmzLoadingDirective
