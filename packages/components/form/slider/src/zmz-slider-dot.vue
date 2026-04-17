<template>
    <div class="zmz-slider__block" ref="zmzSliderBlock" @mousedown.stop="handleMousedown" :class="[zmzSliderBlockClass]"
        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @focus="handleMouseEnter" @blur="handleMouseLeave"
        :style="[zmzSliderBlockStyle]">
        <div class="zmz-slider__block__dot"></div>
    </div>
</template>
<script>
import { computed, onUnmounted, ref } from 'vue';
export default {
    name: 'ZmzSliderDot',
    props: {
        /**
         * 绑定
         */
        modelValue: {
            type: [Number, String, Array],
            default: 0
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 只读
         */
        readonly: {
            type: Boolean,
            default: false
        },
        /**
         * 节点
         */
        eldom: {
            type: Object,
            default: () => { }
        },
        /**
         * 模式
         */
        vertical: {
            type: Boolean,
            default: false
        },
        /**
         * 步长
         */
        step: {
            type: Number,
            default: 0
        }
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const isMove = ref(false);
        const isHover = ref(false);
        const zmzSliderBlock = ref(null);
        const startX = ref(0);
        const startY = ref(0);
        const moveNumber = ref(0);

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        const handleMouseLeave = () => {
            isHover.value = false;
        };

        const handleMouseEnter = () => {
            isHover.value = true;
        };

        // 按下
        const handleMousedown = e => {
            if (props.disabled || props.readonly) return;
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
            let elDom = e.target.getBoundingClientRect();
            if (props.vertical) {
                startY.value = e.pageY - elDom.top;
            } else {
                startX.value = e.pageX - elDom.left;
            }

            isMove.value = true;
            // 滑动块x坐标
            window.addEventListener('mousemove', handleMousemove);
            window.addEventListener('mouseup', handleMouseup);
            window.addEventListener('mouseleave', handleMouseup);
        };

        // 抬起
        const handleMouseup = () => {
            isMove.value = false;
        };

        // 移动
        const handleMousemove = e => {
            if (isMove.value) {
                // 屏幕滑动事件
                let elDom = props.eldom.getBoundingClientRect();
                if (props.vertical) {
                    let moveY = e.pageY - startY.value - elDom.top;
                    // 获取滑动x坐标
                    moveNumber.value = (moveY / elDom.height) * 100;
                } else {
                    let moveX = e.pageX - startX.value - elDom.left;
                    // 获取滑动x坐标
                    moveNumber.value = (moveX / elDom.width) * 100;
                }

                if (moveNumber.value <= 0) {
                    moveNumber.value = 0;
                } else if (moveNumber.value >= 100) {
                    moveNumber.value = 100;
                }
                model.value = Math.round(moveNumber.value);
                emit('on-change', Math.round(moveNumber.value))
            }
        };

        onUnmounted(() => {
            window.removeEventListener('mousemove', handleMousemove);
            window.removeEventListener('mouseup', handleMouseup);
            window.removeEventListener('mouseleave', handleMouseup);
        });

        const zmzSliderBlockClass = computed(() => {
            let params = [];
            if (isHover.value && !props.disabled && !props.readonly) {
                params.push('zmz-slider__block--hover');
            }
            return params;
        });

        const zmzSliderBlockStyle = computed(() => {
            let params = {};
            if (props.vertical) {
                params['top'] = model.value + '%';
            } else {
                params['left'] = model.value + '%';
            }

            return params;
        });

        return {
            zmzSliderBlock,
            handleMousedown,
            isHover,
            handleMouseLeave,
            handleMouseEnter,
            model,
            zmzSliderBlockClass,
            zmzSliderBlockStyle
        };
    }
};
</script>
