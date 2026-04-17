<template>
    <transition name="zmz-fade-top" @after-leave="handleAfterLeave">
        <div class="zmz-message" :class="[zmzMessageClass, messageCustomClass]" v-show="visible"
            @mouseenter="clearTimer" @mouseleave="startTimer" v-bind="$attrs">
            <i :class="[icon]" v-if="icon"></i>
            <i :class="[zmzMessageTypeClass]" v-else></i>
            <div v-if="!html" class="zmz-message__content">{{ content }}</div>
            <div v-else v-html="message" class="zmz-message__content"></div>
            <div class="zmz-message__close" v-if="showCloseButton" @click="close">
                <i class="zmz-message__close__icon zmz-icon--wrong"></i>
            </div>
        </div>
    </transition>
</template>

<script>
import Messages from './index.js';
import { ref, computed, onMounted, onBeforeUnmount, getCurrentInstance, onUnmounted } from 'vue';
export default {
    name: 'ZmzMessage',
    props: {
        /**
         * 内容
         */
        content: {
            type: String,
            default: ''
        },
        /**
         * 类型
         */
        type: {
            type: String,
            default: 'info',
            validator(value) {
                return ['success', 'warning', 'error', 'info', 'primary'].includes(value);
            }
        },
        /**
         * 背景色
         */
        background: {
            type: Boolean,
            default: false
        },
        /**
         * id
         */
        id: String,
        /**
         * 关闭时间
         */
        duration: {
            type: Number,
            default: 3000
        },
        /**
         * 自定义类名
         */
        messageCustomClass: [Array, String],
        /**
         * 弹窗偏移
         */
        offset: {
            type: Number,
            default: 20
        },
        onClose: Function,
        /**
         * 显示关闭按钮
         */
        showCloseButton: {
            type: Boolean,
            default: false
        },
        /**
         * 是否html
         */
        html: {
            type: Boolean,
            default: false
        },
        /**
         * 是否居中
         */
        center: {
            type: Boolean,
            default: false
        },
        /**
         * 自动关闭
         */
        autoClosed: {
            type: Boolean,
            default: true
        },
        /**
         * 图标
         */
        icon: String
    },
    emits: ['on-close'],
    setup(props) {
        const visible = ref(false);
        const timer = ref(null);
        const { proxy } = getCurrentInstance();
        // 公共类
        const zmzMessageClass = computed(() => {
            let params = [];
            if (props.type) {
                if (props.background) {
                    params.push(`zmz-message--background-${props.type}`)
                } else {
                    params.push(`zmz-message--${props.type}`)
                }
            }
            if (props.center) {
                params.push('zmz-message--center')
            }

            if (props.showCloseBtn) {
                params.push('zmz-message--closable')
            }

            return params
        })

        const zmzMessageTypeClass = computed(() => {
            let params = [];
            if (props.type && !props.icon) {
                params.push(`zmz-message__icon zmz-icon--${props.type}-fill`)
            }

            return params
        })

        const handleAfterLeave = () => {
            if (proxy.$el && proxy.$el.parentNode) {
                proxy.$el.parentNode.removeChild(proxy.$el);
            }
        };

        onUnmounted(() => {
            if (timer.value) {
                clearTimeout(timer.value);
                timer.value = null;
            }
        });

        // 关闭
        const close = () => {
            if (props.onClose && typeof props.onClose === 'function') {
                props.onClose(proxy);
            }
            Messages.close(props.id);
            visible.value = false;
            if (proxy.$el && proxy.$el.parentNode) {
                document.body.removeChild(proxy.$el.parentNode);
            }
        };

        // 显示
        const show = () => {
            visible.value = true
        }

        // 清除时间
        const clearTimer = () => {
            if (timer.value) {
                clearTimeout(timer.value);
                timer.value = null;
            }
        };

        // 开始时间
        const startTimer = () => {
            if (props.duration > 0) {
                timer.value = setTimeout(() => {
                    if (props.autoClosed) {
                        close();
                    }
                }, props.duration);
            }
        };

        // 按键关闭
        const keydowns = e => {
            if (e.keyCode === 27) {
                // esc关闭消息
                if (props.autoClosed) {
                    close();
                }
            }
        };

        onMounted(() => {
            startTimer();
            document.addEventListener('keydown', keydowns);
        });

        onBeforeUnmount(() => {
            document.removeEventListener('keydown', keydowns);
        });

        return {
            handleAfterLeave,
            close,
            clearTimer,
            startTimer,
            keydowns,
            zmzMessageClass,
            zmzMessageTypeClass,
            show,
            visible
        };
    }
};
</script>
