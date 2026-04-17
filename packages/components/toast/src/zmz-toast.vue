<template>
    <transition name="zmz-fade">
        <div class="zmz-toast-mask" ref="zmzTeleportMask" v-bind="$attrs" :style="[maskCustomStyle]" :class="[maskCustomClass]"
            v-show="currentVisible && mask"></div>
    </transition>
    <transition :name="zmzToastTransition" @before-leave="handleBeforeLeave" @leave="handleLeave"
        @after-leave="handleAfterLeave" @before-enter="handleBeforeEnter" @enter="handleEnter"
        @after-enter="handleAfterEnter">
        <div class="zmz-toast" v-bind="$attrs" ref="zmzToast" v-show="currentVisible"
            :class="[zmzToastClass, toastCustomClass]" :style="toastCustomStyle">
            <div class="zmz-toast__wrap">
                <div class="zmz-toast__icon" :class="zmzIconClass" v-if="type != 'text'">
                </div>
                <div class="zmz-toast__text" v-if="type != 'icon'">
                    {{ content }}
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { ref, computed, onUnmounted, reactive, nextTick } from 'vue';
import { nextZindex } from '../../../utils/zIndex.js';
export default {
    name: 'ZmzToast',
    props: {
        /**
         * 内容
         */
        content: {
            type: String
        },
        /**
         * 展示位置
         */
        placement: {
            type: String,
            default: 'center',
            validator(value) {
                return ['top', 'center', 'bottom'].includes(value)
            }
        },
        /**
         * 显示时间
         */
        duration: {
            type: Number,
            default: 2000
        },
        /**
         * 消息类型
         */
        icon: {
            type: String,
            default: ''
        },
        /**
         * 标志
         */
        type: {
            type: String,
            default: 'text-icon',
            validator(value) {
                return ['text', 'icon', 'text-icon', 'loading', 'success', 'warning', 'error'].includes(value)
            }
        },
        /**
         * 是否显示遮罩
         */
        mask: {
            type: Boolean,
            default: false
        },
        /**
         * 遮罩类名
         */
        maskCustomClass: [Array, String],
        /**
         * 遮罩样式
         */
        maskCustomStyle: Object,
        /**
         * 自定义类名
         */
        toastCustomClass: [Array, String],
        /**
         * 自定义样式
         */
        toastCustomStyle: Object,
    },
    emits: ['on-open-before', 'on-open', 'on-open-after', 'on-close-before', 'on-close', 'on-close-after'],
    setup(props, { emit }) {
        const currentVisible = ref(false);
        const zmzTeleportMask = ref(null);
        const zmzToast = ref(null);
        const reactives = reactive({
            promise: null,
            resolve: null,
            reject: null
        })

        const zmzToastTransition = computed(() => {
            return 'zmz-scales-' + props.placement
        })

        const zmzToastClass = computed(() => {
            let params = [];

            if (props.type) {
                params.push('zmz-toast--' + props.type)
            }

            if (props.placement) {
                params.push('zmz-toast--' + props.placement)
            }

            return params;
        });

        const zmzIconClass = computed(() => {
            let params = [];
            if (props.type == 'text-icon') {
                params.push(props.icon)
            } else if (props.type == 'icon') {
                params.push(props.content)
            } else if (props.type == 'loading') {
                params.push('zmz-icon--loading','zmz-toast__icon--rotate')
            } else {
                if (props.icon) {
                    params.push(props.icon)
                } else {
                    params.push('zmz-icon--' + props.type)
                }
            }

            return params;
        });


        onUnmounted(() => {
            reactives.promise = null;
            reactives.resolve = null;
            reactives.reject = null;
        });

        const common = () => {
            reactives.promise = new Promise((resolve, reject) => {
                currentVisible.value = true;
                if (Math.abs(props.duration) != 0) {
                    setTimeout(() => {
                        currentVisible.value = false;
                    }, props.duration)
                }
                reactives.resolve = resolve;
                reactives.reject = reject;
            });
            // 返回promise对象
            return reactives.promise;
        };

        const clear = () => {
            reactives.promise = new Promise((resolve, reject) => {
                currentVisible.value = false;
                reactives.resolve = resolve;
                reactives.reject = reject;
            });
            // 返回promise对象
            return reactives.promise;
        };

        // 打开前
        const handleBeforeEnter = () => {
            emit('on-open-before');
        };

        // 打开中
        const handleEnter = () => {
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

        const setZindex = () => {
            nextTick(() => {
                if (zmzTeleportMask.value) {
                    zmzTeleportMask.value.style['z-index'] = nextZindex();
                }
                if (zmzToast.value) {
                    zmzToast.value.style['z-index'] = nextZindex();
                }
            })
        }

        return {
            confirm,
            alert,
            prompt,
            currentVisible,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            zmzTeleportMask,
            zmzToast,
            setZindex,
            common,
            zmzToastClass,
            zmzIconClass,
            clear,
            zmzToastTransition
        };
    }
};
</script>
