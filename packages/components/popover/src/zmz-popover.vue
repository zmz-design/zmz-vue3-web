<template>
    <transition class="zmz-popover" v-bind="$attrs" ref="zmzPopover" name="zmz-fade">
        <slot></slot>
    </transition>
    <zmz-teleportdom v-bind="$attrs" :offset="offset" :popper-options="popperOptions"
        :class-name="[zmzTeleportdomClass, teleportClass]" :arrow="arrow" :teleport-dom="teleportDom"
        :parent-ref="zmzPopover" :visible="model" :placement="placement" :teleport="teleport"
        transition-name="zmz-fade" @on-close-before="handleBeforeLeave" @on-close="handleLeave"
        @on-close-after="handleAfterLeave" @on-open-before="handleBeforeEnter" @on-open="handleEnter"
        @on-open-after="handleAfterEnter">
        <div class="zmz-popover__wrap" v-if="$slots.content">
            <div class="zmz-popover__content">
                <slot name="content"></slot>
            </div>
        </div>
        <div class="zmz-popover__wrap" v-else>
            <div class="zmz-popover__title" v-if="title">{{ title }}</div>
            <div class="zmz-popover__content" v-if="content">
                {{ content }}
            </div>
        </div>
    </zmz-teleportdom>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
import ZmzTeleportdom from '../../teleportdom/show.vue';

export default {
    name: 'ZmzPopover',
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
         * 标题
         */
        title: {
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
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'on-change', 'on-close-before', 'on-close', 'on-close-after', 'on-open-before', 'on-open', 'on-open-after'],
    setup(props, { emit }) {
        const zmzPopover = ref(null);
        const mouseenterEvent = ref(null);
        const mouseleaveEvent = ref(null);
        const focusEvent = ref(null);
        const blurEvent = ref(null);
        const onClickEvent = ref(null);
        const offClickEvent = ref(null);

        const zmzTeleportdomClass = computed(() => {
            let params = ['zmz-popover', 'zmz-teleportdom--popover']
            if (props.effect) {
                params.push(`zmz-teleportdom--popover-${props.effect}`);
            }
            return params;
        })

        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val)
            }
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
            model.value = true
            emit('on-change', true)
        }

        const blurE = () => {
            if (props.disabled) return
            model.value = false
            emit('on-change', false)
        }

        const mouseleaveE = () => {
            if (props.disabled) return
            model.value = false
            emit('on-change', false)
        }
        const mouseenterE = () => {
            if (props.disabled) return
            model.value = true
            emit('on-change', true)
        }
        const clickE = () => {
            if (props.disabled) return
            model.value = !model.value
            emit('on-change', model.value)
        }

        const bodyCloseMenus = e => {
            if (zmzPopover.value && !zmzPopover.value.contains(e.target)) {
                if (model.value) {
                    model.value = false;
                }
            }
        };

        onMounted(() => {
            nextTick(() => {
                if (props.trigger == 'hover') {
                    mouseenterEvent.value = zmzPopover.value.addEventListener('mouseenter', mouseenterE)
                    mouseleaveEvent.value = zmzPopover.value.addEventListener('mouseleave', mouseleaveE)
                } else if (props.trigger == 'focus') {
                    focusEvent.value = zmzPopover.value.addEventListener('focus', focusE)
                    blurEvent.value = zmzPopover.value.addEventListener('blur', blurE)
                } else if (props.trigger == 'click') {
                    onClickEvent.value = zmzPopover.value.addEventListener('click', clickE)
                    offClickEvent.value = document.addEventListener('click', bodyCloseMenus)
                }
            })
        })

        onBeforeUnmount(() => {

            if (mouseenterEvent.value) {
                zmzPopover.value.removeEventListener('mouseenter', mouseenterE)
            }
            if (mouseleaveEvent.value) {
                zmzPopover.value.removeEventListener('mouseleave', mouseleaveE)
            }
            if (focusEvent.value) {
                zmzPopover.value.removeEventListener('focus', focusE)
            }
            if (blurEvent.value) {
                zmzPopover.value.removeEventListener('blur', blurE)
            }
            if (onClickEvent.value) {
                zmzPopover.value.removeEventListener('click', clickE)
            }
            if (offClickEvent.value) {
                document.removeEventListener('click', clickE)
            }
        })

        return {
            zmzPopover,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            zmzTeleportdomClass,
            model,
            bodyCloseMenus
        };
    }
};
</script>
