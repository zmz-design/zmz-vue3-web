<template>
    <teleport :to="teleportDom" :disabled="!teleport">
        <transition name="zmz-fade">
            <div class="zmz-drawer zmz-drawer__mask" ref="zmzDrawerMask" v-bind="$attrs" :style="[maskCustomStyle]"
                :class="[maskCustomClass]" v-if="model && mask" @click="handleCloseMask"></div>
        </transition>
        <transition :name="transitionName" @before-leave="handleBeforeLeave" @leave="handleLeave"
            @after-leave="handleAfterLeave" @before-enter="handleBeforeEnter" @enter="handleEnter"
            @after-enter="handleAfterEnter">
            <div class="zmz-drawer" ref="zmzDrawer" v-bind="$attrs" :style="[zmzDrawerStyle, drawerCustomStyle]"
                :class="[zmzDrawerClass, drawerCustomClass]" v-if="model">
                <div class="zmz-drawer__wrap">
                    <div class="zmz-drawer__header" :class="{ 'zmz-drawer__header--center': headerCenter }"
                        v-if="hideHeader">
                        <div class="zmz-drawer__header__title" v-if="$slots.header || title">
                            <slot name="header">{{ title }}</slot>
                        </div>
                        <div class="zmz-drawer__header__close" @click="handleClose('close')" v-if="showCloseBtn">
                            <slot name="close"><i class="zmz-drawer__header__close__icon zmz-icon--wrong"></i></slot>
                        </div>
                    </div>
                    <div class="zmz-drawer__body" :class="{ 'zmz-drawer__body--center': contentCenter }">
                        <slot name="default"></slot>
                    </div>
                    <div class="zmz-drawer__footer" :class="{ 'zmz-drawer__footer--center': footerCenter }"
                        v-if="hideFooter">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>
<script>
import { ref, computed, getCurrentInstance, nextTick, onMounted } from 'vue';
export default {
    name: 'ZmzDrawer',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * 显示关闭按钮
         */
        showCloseBtn: {
            type: Boolean,
            default: true
        },
        /**
         * 关闭回调
         */
        beforeClose: Function,
        /**
         * 大小
         */
        size: {
            type: String,
            default: '30%'
        },
        /**
         * 双向绑定
         */
        modelValue: {
            type: Boolean,
            default: false
        },
        /**
         * 内容居中
         */
        contentCenter: {
            type: Boolean,
            default: false
        },
        /**
         * 头部居中
         */
        headerCenter: {
            type: Boolean,
            default: false
        },
        /**
         * 底部居中
         */
        footerCenter: {
            type: Boolean,
            default: false
        },
        /**
         * 整体居中
         */
        center: {
            type: Boolean,
            default: false
        },
        /**
         * 方向
         */
        direction: {
            type: String,
            default: 'right',
            validator(value) {
                return ['top', 'bottom', 'right', 'left'].includes(value)
            }
        },
        /**
         * 自定义类名
         */
        drawerCustomClass: {
            type: [String, Array],
            default: ''
        },
        /**
         * 自定义样式
         */
        drawerCustomStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 隐藏头部
         */
        hideHeader: {
            type: Boolean,
            default: true
        },
        /**
         * 隐藏底部
         */
        hideFooter: {
            type: Boolean,
            default: true
        },
        /**
         * 销毁子元素
         */
        destroyOnClose: {
            type: Boolean,
            default: false
        },
        /**
         * 显示遮罩
         */
        mask: {
            type: Boolean,
            default: true
        },
        /**
         * 遮罩类名
         */
        maskCustomClass: {
            type: [String, Array],
            default: ''
        },
        /**
         * 遮罩样式
         */
        maskCustomStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 是否穿梭
         */
        teleport: {
            type: Boolean,
            default: false
        },
        /**
         * 穿梭节点
         */
        teleportDom: {
            type: String,
            default: 'body'
        },
        /**
         * 穿梭类名
         */
        teleportClass: {
            type: [String, Array],
            default: ''
        },
        /**
         * 点击遮罩关闭
         */
        maskClosable: {
            type: Boolean,
            default: true
        },
        /**
         * esc关闭
         */
        closeOnPressEscape: {
            type: Boolean,
            default: true
        }
    },
    emits: ['update:modelValue', 'on-open-before', 'on-open', 'on-open-after', 'on-close-before', 'on-close', 'on-close-after'],
    setup(props, { emit }) {
        const zmzDrawer = ref(null);
        const zmzDrawerMask = ref(null);
        const { proxy } = getCurrentInstance();
        const transitionName = computed(() => {
            return `zmz-slide-${props.direction}`;
        });

        // 点击关闭按钮
        const handleClose = () => {
            if (props.beforeClose && typeof props.beforeClose === 'function') {
                model.value = props.beforeClose(proxy);
            } else {
                model.value = false;
                emit('update:modelValue', false);
            }
        };

        // 点击背景关闭
        const handleCloseMask = () => {
            if (!props.maskClosable) return
            if (props.beforeClose && typeof props.beforeClose === 'function') {
                model.value = props.beforeClose(proxy);
            } else {
                model.value = false;
                emit('update:modelValue', false);
            }
        };

        // 关闭之前
        const handleBeforeLeave = () => {
            emit('on-close-before');
        };

        // 关闭中
        const handleLeave = () => {
            emit('on-close');
        };

        // 关闭之后
        const handleAfterLeave = () => {
            emit('on-close-after');
        };

        // 打开之前
        const handleBeforeEnter = () => {
            emit('on-open-before');
        };

        // 打开中
        const handleEnter = () => {
            setZindex();
            emit('on-open');
        };

        // 打开之后
        const handleAfterEnter = () => {
            emit('on-open-after');
        };

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        const zmzDrawerStyle = computed(() => {
            let params = {}
            if (props.direction == 'left' || props.direction == 'right') {
                params['width'] = props.size;
            }
            if (props.direction == 'top' || props.direction == 'bottom') {
                params['height'] = props.size;
            }
            return params;
        });

        const zmzDrawerClass = computed(() => {
            let params = [];

            if (props.direction) {
                params.push(`zmz-drawer--${props.direction}`);
            }

            if (props.center) {
                params.push('zmz-drawer--center');
            }

            return params;
        });

        const setZindex = () => {
            nextTick(() => {
                if (zmzDrawerMask.value) {
                    zmzDrawerMask.value.style['z-index'] = proxy.$zmzConfig.zIndex++;
                }
                if (zmzDrawer.value) {
                    zmzDrawer.value.style['z-index'] = proxy.$zmzConfig.zIndex++;
                }
            })
        }

        const keyDown = () => {
            let key = window.event.keyCode;
            // 箭头
            if (key == 27) {
                model.value = false;
                emit('update:modelValue', false);
            }
        };

        onMounted(() => {
            window.addEventListener('keydown', () => {
                if (props.closeOnPressEscape) {
                    keyDown();
                }
            });
        });

        return {
            handleClose,
            close,
            model,
            handleCloseMask,
            handleBeforeEnter,
            handleEnter,
            handleAfterEnter,
            handleBeforeLeave,
            handleLeave,
            handleAfterLeave,
            zmzDrawerClass,
            transitionName,
            zmzDrawerStyle,
            zmzDrawer,
            zmzDrawerMask
        };
    }
};
</script>
