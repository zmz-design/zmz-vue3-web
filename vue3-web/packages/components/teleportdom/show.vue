<template>
    <teleport :to="teleportDom" :disabled="!teleport" v-bind="$attrs">
        <transition :name="transitionName" @before-leave="handleBeforeLeave" @leave="handleLeave"
            @after-leave="handleAfterLeave" @before-enter="handleBeforeEnter" @enter="handleEnter"
            @after-enter="handleAfterEnter">
            <div v-show="visible" class="zmz-teleportdom" ref="zmzTeleportdom" :class="className" v-bind="$attrs"
                @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" @click.stop="handleClick">
                <div class="zmz-teleportdom__arrow" ref="menuHorn" data-popper-arrow v-if="arrow"></div>
                <slot></slot>
            </div>
        </transition>
    </teleport>
</template>

<script>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { createPopper } from '@popperjs/core';
import { nextZindex } from '../../utils/zIndex.js';

export default {
    name: 'ZmzTeleportdom',
    props: {
        /**
         * 穿梭位置
         */
        placement: {
            type: String,
            default: 'bottom'
        },
        /**
         * 类名
         */
        className: {
            type: [String, Array],
            default: ''
        },
        /**
         * 是否显示
         */
        visible: {
            type: Boolean
        },
        /**
         * 动画名称
         */
        transitionName: {
            type: String,
            default: 'transition-drop'
        },
        /**
         * 穿梭父节点
         */
        parentRef: {
            type: Object,
            default: () => { }
        },
        /**
         * 是否显示辅助指向
         */
        arrow: {
            type: Boolean,
            default: false
        },
        /**
         * 是否穿梭
         */
        teleport: {
            type: Boolean
        },
        /**
         * 穿梭节点
         */
        teleportDom: {
            type: String,
            default: 'body'
        },
        offset: {
            type: Array,
            default() {
                return [0, 0]
            }
        },
        popperOptions: {
            type: Array,
            default() {
                return []
            }
        },
    },
    emits: ['on-mouseenter', 'on-mouseleave', 'on-click', 'on-close-before', 'on-close', 'on-close-after', 'on-open-before', 'on-open', 'on-open-after'],
    setup(props, { emit }) {
        const zmzTeleportdom = ref(null);
        const popper = ref(null);
        const update = () => {
            // if (isServer) return;
            nextTick(() => {
                if (zmzTeleportdom.value) {
                    zmzTeleportdom.value.style['z-index'] = nextZindex();
                }
                if (popper.value) {
                    popper.value.update();
                } else {

                    let modifiers = [
                        {
                            name: 'offset',
                            options: {
                                offset: props.offset,
                            }
                        },
                        {
                            name: 'popperOffsets',
                        },
                        {
                            name: 'arrow',
                        },
                        {
                            name: 'computeStyles',
                            options: {
                                gpuAcceleration: false,
                                adaptive: false
                            },
                        },
                        {
                            name: 'preventOverflow',
                            options: {
                                padding: 5,
                                boundariesElement: 'scrollParent', // 父元素如果可以滚动，就会使用它作为边界
                            },
                        }
                    ].concat(props.popperOptions);

                    popper.value = createPopper(props.parentRef, zmzTeleportdom.value, {
                        strategy: 'fixed',
                        placement: props.placement,
                        padding: 10,
                        modifiers: modifiers,
                    });
                }
            });
        }


        const destroy = () => {
            if (popper.value) {
                popper.value.destroy();
                popper.value = null;
            }
        }

        const handleMouseenter = (e) => {
            emit('on-mouseenter', e);
        }

        const handleMouseleave = (e) => {
            emit('on-mouseleave', e);
        }

        const handleClick = (e) => {
            emit('on-click', e)
        }

        onBeforeUnmount(() => {
            destroy()
        })

        watch(
            () => props.visible,
            val => {
                if (props.parentRef) {
                    if (val) {
                        update();
                    }
                }
            },
            { immediate: true }
        );

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
        const handleBeforeEnter = async () => {
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

        return {
            update,
            destroy,
            handleClick,
            handleMouseleave,
            handleMouseenter,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            zmzTeleportdom
        };
    }
};
</script>