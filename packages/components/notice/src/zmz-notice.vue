<template>
    <transition name="zmz-slide-right" @after-leave="handleAfterLeave">
        <div class="zmz-notice" :class="[zmzNoticeClass, noticeCustomClass]" v-bind="$attrs" v-show="visible"
            @mouseenter="clearTimer" @mouseleave="startTimer">
            <i :class="[icon]" v-if="icon"></i>
            <i :class="[zmzNoticeTypeClass]" v-else></i>
            <div class="zmz-notice__wrap">
                <div class="zmz-notice__title">{{ title }}</div>
                <div v-if="!html" class="zmz-notice__content">{{ content }}</div>
                <div v-else v-html="notice" class="zmz-notice__content"></div>
            </div>
            <div class="zmz-notice__close" v-if="showCloseBtn">
                <i class="zmz-notice__close__btn zmz-icon--wrong" @click="close"></i>
            </div>
        </div>
    </transition>
</template>

<script>
import Notice from '../index.js';
import { ref, computed, onMounted, onBeforeUnmount, getCurrentInstance, onUnmounted } from 'vue';
export default {
    name: 'ZmzNotice',
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
            default: 'default',
            validator(value) {
                return ['success', 'warning', 'default', 'error', 'primary', 'info'].includes(value);
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
        noticeCustomClass: [Array, String],
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
        showCloseBtn: {
            type: Boolean,
            default: true
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
        icon: String,
        /**
         * 标题
         */
        title: {
            type: String,
            default: '提示'
        },
    },
    setup(props) {
        const visible = ref(false);
        const timer = ref(null);
        const { proxy } = getCurrentInstance();

        // 公共类名
        const zmzNoticeClass = computed(() => {
            let params = [];
            if (props.type) {
                if (props.background) {
                    params.push(`zmz-notice--background-${props.type}`)
                } else {
                    params.push(`zmz-notice--${props.type}`)
                }
            }

            return params
        });

        // 类型icon
        const zmzNoticeTypeClass = computed(() => {
            let params = [];
            if (props.type && !props.icon) {
                params.push(`zmz-notice__icon zmz-icon--${props.type}-fill`)
            }

            return params
        })

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
            Notice.close(props.id);
            visible.value = false;
            if (proxy.$el && proxy.$el.parentNode) {
                document.body.removeChild(proxy.$el.parentNode);
            }
        };

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

        // 显示
        const show = () => {
            visible.value = true
        }

        // 关闭之后
        const handleAfterLeave = () => {
            if (proxy.$el && proxy.$el.parentNode) {
                proxy.$el.parentNode.removeChild(proxy.$el);
            }
        };

        return {
            timer,
            zmzNoticeClass,
            close,
            clearTimer,
            startTimer,
            keydowns,
            visible,
            show,
            handleAfterLeave,
            zmzNoticeTypeClass
        };
    }
};
</script>
