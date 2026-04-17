<template>
    <teleport :to="teleportDom" :disabled="!teleport">
        <transition name="zmz-fade" @before-leave="handleBeforeLeave" @leave="handleLeave"
            @after-leave="handleAfterLeave" @before-enter="handleBeforeEnter" @enter="handleEnter"
            @after-enter="handleAfterEnter">
            <div class="zmz-loading" ref="zmzLoading" :class="[zmzLoadingClass, loadingClass]" v-show="isOpen"
                :style="[zmzLoadingStyle, loadingStyle]" v-bind="$attrs">
                <div class="zmz-loading__wrap">
                    <slot>
                        <div class="zmz-loading__icon" v-if="icon"><i class="zmz-loading__icon__inner"
                                :class="[icon, zmzIconClass]"></i></div>
                        <div class="zmz-loading__content" v-if="content">{{ content }}</div>
                    </slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script>
import { computed, reactive, getCurrentInstance, nextTick, ref, watch } from 'vue';
import { nextZindex } from '../../../utils/zIndex.js';
export default {
    name: 'ZmzLoading',
    props: {
        /**
         * 文本
         */
        content: {
            type: String,
            default: ''
        },
        /**
         * 图标
         */
        icon: {
            type: String,
            default: 'zmz-icon--loading'
        },
        /**
         * 背景
         */
        background: {
            type: String,
            default: ''
        },
        /**
         * 样式
         */
        loadingStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 类名
         */
        loadingClass: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 旋转
         */
        rotate: {
            type: Boolean,
            default: true
        },
        /**
         * 模式
         */
        mode: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['vertical', 'horizontal'].includes(value);
            }
        },
        /**
         * 全屏
         */
        fullscreen: {
            type: Boolean,
            default: false
        },
        /**
         * 绑定
         */
        modelValue: {
            type: Boolean,
            default: false
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
        }
    },
    emits: ['update:modelValue', 'on-open-before', 'on-open', 'on-open-after', 'on-close-before', 'on-close', 'on-close-after'],
    setup(props, { emit }) {
        const { proxy } = getCurrentInstance();
        const zmzLoading = ref(null);
        const isOpen = ref(false);
        const reactives = reactive({
            promise: null,
            resolve: null,
            reject: null
        })

        // 图标类名
        const zmzIconClass = computed(() => {
            let params = []
            if (props.rotate) {
                params.push('zmz-loading__icon__rotate')
            }
            return params;
        });

        // 公共类名
        const zmzLoadingClass = computed(() => {
            let params = []
            if (props.fullscreen) {
                params.push('zmz-loading--fullscreen')
            }

            if (props.mode) {
                params.push(`zmz-loading--${props.mode}`)
            }
            return params;
        });

        // 公共样式
        const zmzLoadingStyle = computed(() => {
            let params = {}
            if (props.background) {
                params['background'] = props.background
            }
            return params;
        })

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        const close = () => {
            isOpen.value = false
        }

        const loading = () => {
            reactives.promise = new Promise((resolve, reject) => {
                isOpen.value = true
                setZindex();
                reactives.resolve = resolve(proxy);
                reactives.reject = reject(proxy);
            });
            // 返回promise对象
            return reactives.promise;
        };

        const setZindex = () => {
            nextTick(() => {
                if (zmzLoading.value) {
                    zmzLoading.value.style['z-index'] = nextZindex();
                }
            })
        }

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

        watch(() => model.value, (val) => {
            isOpen.value = val
        }, {
            immediate: true
        })

        return {
            zmzIconClass,
            zmzLoadingClass,
            isOpen,
            zmzLoadingStyle,
            loading,
            close,
            zmzLoading,
            setZindex,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
        };
    }
};
</script>
