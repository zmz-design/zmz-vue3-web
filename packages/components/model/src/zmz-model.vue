<template>
    <teleport :to="teleportDom" :disabled="!teleport">
        <transition name="zmz-fade">
            <div class="zmz-model zmz-model__mask" ref="zmzModelMask" v-bind="$attrs" :style="[maskCustomStyle]"
                :class="[maskCustomClass]" v-if="model && mask" @click="handleCloseMask"></div>
        </transition>
        <transition name="zmz-fade-top" @before-leave="handleBeforeLeave" @leave="handleLeave"
            @after-leave="handleAfterLeave" @before-enter="handleBeforeEnter" @enter="handleEnter"
            @after-enter="handleAfterEnter">
            <div class="zmz-model" v-bind="$attrs" ref="zmzModel" :class="[zmzModelClass, modelCustomClass]"
                :style="[zmzModelStyle, modelCustomStyle]" v-if="model">
                <div class="zmz-model__wrap" :style="[zmzModelWrapStyle]">
                    <div class="zmz-model__header" :class="{ 'zmz-model__header--center': headerCenter }"
                        v-if="hideHeader">
                        <div class="zmz-model__header--title" v-if="$slots.header || title">
                            <slot name="header">{{ title }}</slot>
                        </div>
                        <div class="zmz-model__header--close" @click="handleClose" v-if="showCloseBtn">
                            <slot name="close"><i class="zmz-model__header--close__icon zmz-icon--wrong"></i></slot>
                        </div>
                    </div>
                    <div class="zmz-model__body" :class="{ 'zmz-model__footer--center': contentCenter }">
                        <slot name="default"></slot>
                    </div>
                    <div class="zmz-model__footer" :class="{ 'zmz-model__footer--center': footerCenter }"
                        v-if="hideFooter">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>
<script>
import { ref, computed, onMounted, getCurrentInstance, nextTick, onUnmounted, defineComponent } from 'vue';
import { nextZindex } from '../../../utils/zIndex.js';
import { addEventListener, removeEventListener } from '../../../utils/dom.js'
export default defineComponent({
    name: 'ZmzModel',
    props: {
        /**
         * 默认宽度
         */
        width: {
            type: String,
            default: '500px'
        },
        /**
         * 是否整体居中
         */
        center: {
            type: Boolean,
            default: false
        },
        /**
         * 点击遮罩关闭
         */
        maskClosable: {
            type: Boolean,
            default: false
        },
        /**
         * 按下esc关闭
         */
        closeOnPressEscape: {
            type: Boolean,
            default: true
        },
        /**
         * 标题
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * 显示关闭
         */
        showCloseBtn: {
            type: Boolean,
            default: true
        },
        /**
         * 是否阻止关闭
         */
        beforeClose: Function,
        /**
         * 动态绑定
         */
        modelValue: {
            type: Boolean,
            default: false
        },
        /**
         * 内容是否居中
         */
        contentCenter: {
            type: Boolean,
            default: false
        },
        /**
         * 标题是否居中
         */
        headerCenter: {
            type: Boolean,
            default: false
        },
        /**
         * 底部是否居中
         */
        footerCenter: {
            type: Boolean,
            default: false
        },
        /**
         * 是否显示头部
         */
        hideHeader: {
            type: Boolean,
            default: true
        },
        /**
         * 是否显示底部
         */
        hideFooter: {
            type: Boolean,
            default: true
        },
        /**
         * 是否显示头部
         */
        border: {
            type: Boolean,
            default: false
        },
        /**
         * 是否显示遮罩
         */
        mask: {
            type: Boolean,
            default: true
        },
        /**
         * 是否穿梭
         */
        teleport: {
            type: Boolean,
            default: true
        },
        /**
         * 传送节点
         */
        teleportDom: {
            type: String,
            default: 'body'
        },
        /**
         * 模态框偏移
         */
        offsetTop: {
            type: String,
            default: ''
        },
        /**
         * 自定义类名
         */
        modelCustomClass: {
            type: [String, Array],
            default: ''
        },
        /**
         * 自定义样式
         */
        modelCustomStyle: {
            type: Object,
            default() {
                return {}
            }
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
    },
    emits: ['update:modelValue', 'on-open-before', 'on-open', 'on-open-after', 'on-close-before', 'on-close', 'on-close-after'],
    setup(props, { emit }) {
        const zmzModelMask = ref(null);
        const zmzModel = ref(null);
        const { proxy } = getCurrentInstance();

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

        // 点击关闭按钮
        const handleClose = () => {
            if (props.beforeClose && typeof props.beforeClose === 'function') {
                model.value = props.beforeClose(proxy);
            } else {
                model.value = false;
            }
        };

        // 点击背景关闭
        const handleCloseMask = () => {
            if (!props.maskClosable) return;
            if (props.beforeClose && typeof props.beforeClose === 'function') {
                model.value = props.beforeClose(proxy);
            } else {
                model.value = false;
            }
        };

        // 打开前
        const handleBeforeEnter = () => {
            emit('on-open-before');
        };

        // 打开中
        const handleEnter = () => {
            setZindex()
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

        const handleKeyDown = (event) => {
            if (props.closeOnPressEscape) {
                if (event.keyCode == 27) {
                    model.value = false;
                }
            }

        };

        onMounted(() => {
            addEventListener(window, 'keydown', handleKeyDown)
        });

        onUnmounted(() => {
            removeEventListener(window, 'keydown', handleKeyDown)
        })

        const setZindex = () => {
            nextTick(() => {
                if (zmzModelMask.value) {
                    zmzModelMask.value.style['z-index'] = nextZindex();
                }
                if (zmzModel.value) {
                    zmzModel.value.style['z-index'] = nextZindex();
                }
            })
        }

        const zmzModelStyle = computed(() => {
            let params = {};
            return params;
        });

        const zmzModelWrapStyle = computed(() => {
            let params = {};
            if (props.width) {
                params['width'] = props.width;
            }

            if (props.offsetTop) {
                params['offsetTop'] = props.offsetTop;
            }
            return params;
        });

        const zmzModelClass = computed(() => {
            let params = [];

            if (props.center) {
                params.push('zmz-model--center');
            }

            if (props.border) {
                params.push('zmz-model--border');
            }

            return params;
        });

        return {
            model,
            handleClose,
            handleCloseMask,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            zmzModelMask,
            zmzModelClass,
            zmzModelStyle,
            zmzModel,
            zmzModelWrapStyle
        };
    }
});
</script>
