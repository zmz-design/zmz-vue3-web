<template>
    <transition class="zmz-tooltip" v-bind="$attrs" ref="zmzTooltip" name="zmz-fade">
        <slot></slot>
    </transition>
    <zmz-teleportdom v-bind="$attrs" :offset="offset" :popper-options="popperOptions" :class-name="[zmzTeleportdomClass, teleportClass]"
        :arrow="arrow" :teleport-dom="teleportDom" :parent-ref="zmzTooltip" :visible="currentVisible"
        :placement="placement" :teleport="teleport" transition-name="zmz-fade" @on-close-before="handleBeforeLeave"
        @on-close="handleLeave" @on-close-after="handleAfterLeave" @on-open-before="handleBeforeEnter"
        @on-open="handleEnter" @on-open-after="handleAfterEnter">
        <div class="zmz-tooltip__wrap" :class="[zmzTooltipWrapStyle]">
            <div class="zmz-tooltip__content">
                <slot name="content">{{ content }}</slot>
            </div>
        </div>
    </zmz-teleportdom>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
import ZmzTeleportdom from '../../teleportdom/show.vue';
export default {
    name: 'ZmzTooltip',
    components: {
        ZmzTeleportdom
    },
    props: {
        /**
         * 内容
         */
        content: {
            type: String,
            default: ''
        },
        /**
         * 主题
         */
        effect: {
            type: String,
            default: 'black',
            validator(value) {
                return ['black', 'white'].includes(value)
            }
        },
        /**
         * 辅助三角
         */
        arrow: {
            type: Boolean,
            default: true
        },
        /**
         * 弹出位置
         */
        placement: {
            type: String,
            default: 'bottom',
            validator(value) {
                return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].includes(value)
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
            type: [Array, String],
            default: ''
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 弹出方式
         */
        trigger: {
            type: String,
            default: 'hover',
            validator(value) {
                return ['hover', 'click', 'focus'].includes(value)
            }
        },
        /**
         * 偏移
         */
        offset: {
            type: Array,
            default() {
                return [0, 10]
            }
        },
        /**
         * 配置
         */
        popperOptions: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 双向绑定
         */
        modelValue: {
            type: Boolean,
            default: false
        },
        /**
         * 宽度
         */
        maxWidth: {
            type: String,
            default: ''
        },
    },
    emits: ['on-change', 'on-close-before', 'on-close', 'on-close-after', 'on-open-before', 'on-open', 'on-open-after'],
    setup(props, { emit }) {
        const zmzTooltip = ref(null);
        const currentVisible = ref(false);
        const mouseenterEvent = ref(null);
        const mouseleaveEvent = ref(null);
        const focusEvent = ref(null);
        const blurEvent = ref(null);
        const clickEvent = ref(null);

        const zmzTeleportdomClass = computed(() => {
            let params = ['zmz-tooltip', 'zmz-teleportdom--tooltip']
            if (props.effect) {
                params.push(`zmz-teleportdom--tooltip-${props.effect}`);
            }
            return params;
        })

        const zmzTooltipWrapStyle = computed(() => {
            let params = {}
            if (props.maxWidth) {
                params['max-width'] = props.maxWidth;
            }
            return params;
        })

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

        const focusE = () => {
            if (props.disabled) return
            currentVisible.value = true
            emit('on-change', true)
        }

        const blurE = () => {
            if (props.disabled) return
            currentVisible.value = false
            emit('on-change', false)
        }

        const mouseleaveE = () => {
            if (props.disabled) return
            currentVisible.value = false
            emit('on-change', false)
        }
        const mouseenterE = () => {
            if (props.disabled) return
            currentVisible.value = true
            emit('on-change', true)
        }
        const clickE = () => {
            if (props.disabled) return
            currentVisible.value = !currentVisible.value
            emit('on-change', currentVisible.value)
        }

        onMounted(() => {
            nextTick(() => {
                if (props.trigger == 'hover') {
                    mouseenterEvent.value = zmzTooltip.value.addEventListener('mouseenter', mouseenterE)
                    mouseleaveEvent.value = zmzTooltip.value.addEventListener('mouseleave', mouseleaveE)
                } else if (props.trigger == 'focus') {
                    focusEvent.value = zmzTooltip.value.addEventListener('focus', focusE)
                    blurEvent.value = zmzTooltip.value.addEventListener('blur', blurE)
                } else if (props.trigger == 'click') {
                    clickEvent.value = zmzTooltip.value.addEventListener('click', clickE)
                }
            })
        })

        onBeforeUnmount(() => {

            if (mouseenterEvent.value) {
                zmzTooltip.value.removeEventListener('mouseenter', mouseenterE)
            }
            if (mouseleaveEvent.value) {
                zmzTooltip.value.removeEventListener('mouseleave', mouseleaveE)
            }
            if (focusEvent.value) {
                zmzTooltip.value.removeEventListener('focus', focusE)
            }
            if (blurEvent.value) {
                zmzTooltip.value.removeEventListener('blur', blurE)
            }
            if (clickEvent.value) {
                zmzTooltip.value.removeEventListener('click', clickE)
            }
        })

        return {
            zmzTooltip,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            currentVisible,
            zmzTeleportdomClass,
            zmzTooltipWrapStyle
        };
    }
};
</script>
