<template>
    <div class="zmz-slider" ref="zmzSlider" :class="[zmzSliderClass]" :style="[zmzSliderStyle]">
        <div class="zmz-slider__line" @click="handleClick">
            <div class="zmz-slider__line__bar" :style="[lineStyle]"></div>
        </div>
        <zmz-slider-dot ref="zmzLeftDot" :step="step" :disabled="globalFromDisabled" :readonly="globalFromReadonly"
            :eldom="zmzSlider" :vertical="vertical" v-model="leftValue" @on-change="onChange"></zmz-slider-dot>
        <zmz-slider-dot ref="zmzRightDot" :step="step" :disabled="globalFromDisabled" :readonly="globalFromReadonly"
            :eldom="zmzSlider" :vertical="vertical" v-model="rightValue" v-if="range"
            @on-change="onChange"></zmz-slider-dot>
    </div>
</template>

<script type="text/javascript">
import { computed, onMounted, ref, watch, getCurrentInstance, inject } from 'vue';
import mixin from '../../../../utils/mixin.js';
import ZmzSliderDot from './zmz-slider-dot.vue';
export default {
    name: 'ZmzSlider',
    components: {
        ZmzSliderDot
    },
    props: {
        /**
         * 最大值
         */
        max: {
            type: Number,
            default: 100
        },
        /**
         * 最小值
         */
        min: {
            type: Number,
            default: 0
        },
        /**
         * 步长
         */
        step: {
            type: Number,
            default: 2
        },
        /**
         * 范围
         */
        range: {
            type: Boolean,
            default: false
        },
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
         * 尺寸
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['large', 'medium', 'small', 'mini', 'default'].includes(value)
            }
        },
        /**
         * 模式
         */
        vertical: {
            type: Boolean,
            default: false
        },
        /**
         * 高度
         */
        height: {
            type: [Number, String],
            default: ''
        },
    },
    emits: ['on-change', 'rightValue', 'update:modelValue'],
    setup(props, { emit }) {
        const { findParent, getValueSuffix } = mixin();
        const { parent } = getCurrentInstance();
        const zmzSlider = ref(null);
        const leftValue = ref(0);
        const rightValue = ref(0);
        const zmzLeftDot = ref(null);
        const zmzRightDot = ref(null);

        const zmzForm = inject('zmzForm', {});
        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                emit('update:modelValue', val);
                if (parentProxyItemForm.value) {
                    parentProxyItemForm.value.proxy.onValidate();
                }
            }
        });

        const parentProxyItemForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        watch(
            () => leftValue.value,
            val => {
                if (props.range) {
                    if (rightValue.value > leftValue.value) {
                        model.value = [Math.round(val), Math.round(rightValue.value)];
                    } else {
                        model.value = [Math.round(rightValue.value), Math.round(val)];
                    }
                } else {
                    model.value = Math.round(val);
                }
            }
        );

        watch(
            () => rightValue.value,
            val => {
                if (rightValue.value > leftValue.value) {
                    model.value = [Math.round(leftValue.value), Math.round(val)];
                } else {
                    model.value = [Math.round(val), Math.round(leftValue.value)];
                }
            }
        );

        watch(
            () => model.value,
            val => {
                if (props.range) {
                    if (rightValue.value > leftValue.value) {
                        leftValue.value = val[0];
                        rightValue.value = val[1];
                    } else {
                        leftValue.value = val[1];
                        rightValue.value = val[0];
                    }
                } else {
                    leftValue.value = val;
                }
            }
        );

        const onChange = (val) => {
            emit('on-change', val);
        }

        onMounted(() => {
            if (props.range) {
                leftValue.value = Math.round(model.value[0]);
                rightValue.value = Math.round(model.value[1]);
            } else {
                leftValue.value = Math.round(model.value);
            }
        });

        // 计算宽度偏移
        const lineStyle = computed(() => {
            let params = {};
            if (props.vertical) {
                if (props.range) {
                    if (rightValue.value > leftValue.value) {
                        params['height'] = rightValue.value - leftValue.value + '%';
                        params['top'] = leftValue.value + '%';
                    } else {
                        params['height'] = leftValue.value - rightValue.value + '%';
                        params['top'] = rightValue.value + '%';
                    }
                } else {
                    params['top'] = 0 + '%';
                    params['height'] = leftValue.value + '%';
                }
            } else {
                if (props.range) {
                    if (rightValue.value > leftValue.value) {
                        params['width'] = rightValue.value - leftValue.value + '%';
                        params['left'] = leftValue.value + '%';
                    } else {
                        params['width'] = leftValue.value - rightValue.value + '%';
                        params['left'] = rightValue.value + '%';
                    }
                } else {
                    params['left'] = 0 + '%';
                    params['width'] = leftValue.value + '%';
                }
            }
            return params;
        });

        // 点击触发
        const handleClick = e => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            let elDom = zmzSlider.value.getBoundingClientRect();
            if (props.range) {
                let leftDot = zmzLeftDot.value.$el.getBoundingClientRect();
                let rightDot = zmzRightDot.value.$el.getBoundingClientRect();
                // 计算中间位置
                if (props.vertical) {
                    if (leftDot.top < rightDot.top) {
                        if (e.pageY - leftDot.top < (rightDot.top - leftDot.top) / 2) {
                            leftValue.value = ((e.pageY - elDom.top) / elDom.height) * 100;
                        } else {
                            rightValue.value = ((e.pageY - elDom.top) / elDom.height) * 100;
                        }
                    } else {
                        if (e.pageY - rightDot.top < (leftDot.top - rightDot.top) / 2) {
                            rightValue.value = ((e.pageY - elDom.top) / elDom.height) * 100;
                        } else {
                            leftValue.value = ((e.pageY - elDom.top) / elDom.height) * 100;
                        }
                    }
                } else {
                    if (leftDot.left < rightDot.left) {
                        if (e.pageX - leftDot.left < (rightDot.left - leftDot.left) / 2) {
                            leftValue.value = ((e.pageX - elDom.left) / elDom.width) * 100;
                        } else {
                            rightValue.value = ((e.pageX - elDom.left) / elDom.width) * 100;
                        }
                    } else {
                        if (e.pageX - rightDot.left < (leftDot.left - rightDot.left) / 2) {
                            rightValue.value = ((e.pageX - elDom.left) / elDom.width) * 100;
                        } else {
                            leftValue.value = ((e.pageX - elDom.left) / elDom.width) * 100;
                        }
                    }
                }
            } else {
                if (props.vertical) {
                    let height = ((e.pageY - elDom.top) / elDom.height) * 100;
                    model.value = height;
                    leftValue.value = height;
                } else {
                    let width = ((e.pageX - elDom.left) / elDom.width) * 100;
                    model.value = width;
                    leftValue.value = width;
                }
            }
        };

        const zmzSliderClass = computed(() => {
            let params = []

            let size = zmzFormSize.value || props.size;

            if (size) {
                params.push(`zmz-slider--size-${size}`);
            }

            if (globalFromDisabled.value) {
                params.push(`zmz-slider--disabled`);
            }

            if (globalFromReadonly.value) {
                params.push(`zmz-slider--readonly`);
            }

            if (props.vertical) {
                params.push(`zmz-slider--vertical`);
            }

            return params
        })

        const zmzSliderStyle = computed(() => {
            let params = {}
            if (props.height) {
                params['height'] = getValueSuffix(props.height)
            }
            return params
        })

        // 全局禁用
        const globalFromDisabled = computed(() => {
            return (zmzForm && zmzForm.disabled) ? zmzForm.disabled : props.disabled;
        })

        // 全局禁用
        const globalFromReadonly = computed(() => {
            return (zmzForm && zmzForm.readonly) ? zmzForm.readonly : props.readonly;
        })

        return {
            zmzSlider,
            handleClick,
            model,
            leftValue,
            rightValue,
            lineStyle,
            zmzLeftDot,
            zmzRightDot,
            zmzSliderClass,
            zmzSliderStyle,
            onChange,
            globalFromDisabled,
            globalFromReadonly
        };
    }
};
</script>
