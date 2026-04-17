<template>
    <div class="zmz-colorpicker__slider" @mousedown="handleMouseDown" ref="zmzColorpickerSlider">
        <div class="zmz-colorpicker__slider__bar">
            <slot />
        </div>
        <div class="zmz-colorpicker__slider__point" :style="[zmzColorpickerSliderPointStyle]"></div>
    </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
export default {
    name: 'ZmzColorpickerSlider',
    props: {
        /**
         * 绑定值
         */
        modelValue: {
            type: Number,
            default: 0
        },
        /**
         * 步长
         */
        step: {
            type: Number,
            default: 1
        },
        /**
         * 最小
         */
        min: {
            type: Number,
            default: 10
        },
        /**
         * 最大
         */
        max: {
            type: Number, default: 100
        },
        /**
         * 开始
         */
        startOn: {
            type: String,
            default: 'left'
        }
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const point = ref(0);
        const feedback = ref(true);
        const zmzColorpickerSlider = ref(null);

        const zmzColorpickerSliderPointStyle = computed(() => {
            let params = {};
            params[props.startOn] = point.value - 7 + 'px';
            return params;
        });

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        onMounted(() => {
            let position = (model.value - props.min) / (props.max - props.min);
            point.value = zmzColorpickerSlider.value.offsetWidth * position;
        });

        const handleMouseDown = ev => {
            if (ev.button === 0) {
                feedback.value = false;
                handleEven(ev);
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
            }
        };
        const handleMouseUp = () => {
            document.documentElement.style.cursor = '';
            feedback.value = true;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        const handleMouseMove = ev => {
            if (ev.buttons === 0) {
                document.documentElement.style.cursor = '';
                feedback.value = true;
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
                return;
            }
            handleEven(ev);
        };

        const handleEven = ev => {
            let boardcolors = zmzColorpickerSlider.value.getBoundingClientRect();
            let ox = ev.clientX - boardcolors.left;
            if (ox > zmzColorpickerSlider.value.offsetWidth) {
                ox = zmzColorpickerSlider.value.offsetWidth;
            }
            if (ox < 0) {
                ox = 0;
            }
            if (props.startOn === 'right') {
                ox = zmzColorpickerSlider.value.offsetWidth - ox;
            }
            handleDotChange(ox);
        };

        const handleDotChange = val => {
            if (point.value != val) {
                point.value = val;

                let target = val / zmzColorpickerSlider.value.offsetWidth;
                target = (props.max - props.min) * target + props.min;

                //处理精度
                let decimal = 1;
                let step = props.step.toString();
                let l = step.indexOf('.');
                if (l != -1) {
                    decimal = Math.pow(10, step.length - l - 1);
                }
                step = props.step * decimal;
                target = (Math.round(target / props.step) * step) / decimal;
                model.value = target;
                emit('on-change', target);
            }
        };

        return {
            handleMouseDown,
            zmzColorpickerSliderPointStyle,
            zmzColorpickerSlider
        };
    }
};
</script>
