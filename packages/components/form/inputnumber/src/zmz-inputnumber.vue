<template>
    <div class="zmz-inputnumber" :class="[zmzInputnumberClass]">
        <div class="zmz-inputnumber__reduce" @mousedown="handleReduceClick" @mouseenter="handleMouseenter"
            @mouseleave="handleMouseleave" v-if="controls" :class="[zmzInputnumberReduceClass]">
            <i class="zmz-inputnumber__icon" :class="[zmzInputnumberIconReduceClass]"></i>
        </div>
        <div class="zmz-inputnumber__wrap">
            <input type="text" class="zmz-inputnumber__input" @input="handleInput" @focus="handleFocus"
                @blur="handleBlur" @keydown="handleKeyDown" :autocomplete="autocomplete" :disabled="globalFromDisabled"
                :readonly="globalFromReadonly" :name="name" v-model="model" />
        </div>
        <div class="zmz-inputnumber__add" @mousedown="handleAddClick" @mouseenter="handleMouseenter"
            @mouseleave="handleMouseleave" v-if="controls" :class="[zmzInputnumberAddClass]">
            <i class="zmz-inputnumber__icon" :class="[zmzInputnumberIconAddClass]"></i>
        </div>
    </div>
</template>
<script>
import { computed, ref, inject, getCurrentInstance } from 'vue';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzInputnumber',
    props: {
        /**
         * 原生
         */
        autocomplete: {
            type: String,
            default: 'off'
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
         * 原生name
         */
        name: {
            type: String,
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
         * 控制器
         */
        controls: {
            type: Boolean,
            default: true
        },
        /**
         * 位置
         */
        controlsPosition: {
            type: String,
            default: '',
            validator(value) {
                return ['left', 'right', ''].includes(value)
            }
        },
        /**
         * 只读
         */
        readonly: {
            type: Boolean,
            default: false
        },
        /**
         * 双向绑定
         */
        modelValue: {
            type: [Number, String],
            default: 0
        },
        /**
         * 最大值
         */
        max: {
            type: Number,
            default: Infinity
        },
        /**
         * 最小值
         */
        min: {
            type: Number,
            default: -Infinity
        },
        /**
         * 步长
         */
        step: {
            type: Number,
            default: 1
        },
        /**
         * 精度值
         */
        accuracy: {
            type: Number,
            default: 0
        }
    },
    emits: ['on-change', 'update:modelValue'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const hovering = ref(false);
        const focused = ref(false);
        const disabledAdd = ref(false);
        const disabledReduce = ref(false);
        const zmzForm = inject('zmzForm', {});

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const model = computed({
            get() {
                let currentValue = isNaN(props.modelValue) || !props.modelValue ? 0 : props.modelValue;
                return props.accuracy ? parseFloat(currentValue).toFixed(props.accuracy) : parseFloat(currentValue);
            },
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                let currentValue = isNaN(val) || !val ? 0 : val;
                emit('update:modelValue', props.accuracy ? parseFloat(currentValue).toFixed(props.accuracy) : parseFloat(currentValue));

                if (parentProxyForm.value) {
                    parentProxyForm.value.proxy.onValidate();
                }
            }
        });

        const parentProxyForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        const stepNumber = computed(() => {
            let step = 1;
            if (props.step > 1 && !props.accuracy) {
                step = parseInt(props.step);
            } else if (props.accuracy) {
                step = props.step;
            }
            return step;
        });

        const handleFocus = () => {
            focused.value = true;
        };

        const handleBlur = () => {
            focused.value = false;
            if (!model.value) return;
            if (parseFloat(model.value) > props.max) {
                model.value = props.max;
            } else {
                model.value = parseInt(model.value);
            }
        };

        const handleInput = e => {
            if (!e.data) {
                model.value = 0;
            }

            if (isNaN(e.data)) {
                model.value = 0;
            }
        };

        const zmzInputnumberClass = computed(() => {
            let params = []

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-inputnumber--size-${zmzFormSize.value || props.size}`)
            }

            if (props.controls) {
                params.push('zmz-inputnumber--controls')
            }

            if (props.controls && props.controlsPosition) {
                params.push(`zmz-inputnumber--controls-${props.controlsPosition}`)
            }

            if (hovering.value) {
                params.push('zmz-inputnumber--hover')
            }

            if (focused.value) {
                params.push('zmz-inputnumber--focus')
            }

            if (globalFromDisabled.value) {
                params.push('zmz-inputnumber--disabled')
            }

            if (globalFromReadonly.value) {
                params.push('zmz-inputnumber--readonly')
            }

            return params;
        });

        const zmzInputnumberIconReduceClass = computed(() => {
            let params = ''
            if (props.controls) {
                params = 'zmz-icon--reduce'
            }

            if (props.controls && props.controlsPosition) {
                params = 'zmz-icon--arrow-bottom'
            }
            return params;
        });

        const zmzInputnumberIconAddClass = computed(() => {
            let params = ''
            if (props.controls) {
                params = 'zmz-icon--add'
            }

            if (props.controls && props.controlsPosition) {
                params = 'zmz-icon--arrow-top'
            }
            return params;
        });

        const zmzInputnumberReduceClass = computed(() => {
            let params = []
            if (disabledReduce.value) {
                params.push('zmz-inputnumber__reduce--disabeld')
            }

            return params;
        });

        const zmzInputnumberAddClass = computed(() => {
            let params = []
            if (disabledAdd.value) {
                params.push('zmz-inputnumber__add--disabeld')
            }
            return params;
        });

        const timerHandlerReduce = () => {
            let current = model.value
            if (Number(current) - Number(stepNumber.value) <= props.min) {
                current = props.min;
                disabledReduce.value = true;
            } else {
                disabledAdd.value = false;
                disabledReduce.value = false;
                current = Number(current) - Number(stepNumber.value);
            }
            model.value = current
            emit('on-change', props.accuracy ? parseFloat(current).toFixed(props.accuracy) : parseFloat(current));
        };

        const timerHandlerAdd = () => {
            let current = model.value
            if (Number(current) + Number(stepNumber.value) >= props.max) {
                current = props.max;
                disabledAdd.value = true;
            } else {
                disabledReduce.value = false;
                disabledAdd.value = false;
                current = Number(current) + Number(stepNumber.value);
            }
            model.value = current
            emit('on-change', props.accuracy ? parseFloat(current).toFixed(props.accuracy) : parseFloat(current));
        };

        const handleReduceClick = () => {
            const period = 100;
            const timer = setInterval(() => {
                timerHandlerReduce();
            }, period);
            const startTime = new Date().getTime();

            const handler = () => {
                const endTime = new Date().getTime();
                if (endTime - startTime < period) timerHandlerReduce();
                clearInterval(timer);
                document.removeEventListener('mouseup', handler);
            };
            document.addEventListener('mouseup', handler);
        };

        const handleAddClick = () => {
            const period = 100;
            const timer = setInterval(() => {
                timerHandlerAdd();
            }, period);
            const startTime = new Date().getTime();
            const handler = () => {
                const endTime = new Date().getTime();
                if (endTime - startTime < period) timerHandlerAdd();
                clearInterval(timer);
                document.removeEventListener('mouseup', handler);
            };
            document.addEventListener('mouseup', handler);
        };

        const handleKeyDown = e => {
            if (e.keyCode === 38) {
                e.preventDefault();
                timerHandlerAdd();
            } else if (e.keyCode === 40) {
                e.preventDefault();
                timerHandlerReduce();
            }
        };

        const handleMouseenter = () => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            hovering.value = true;
        };

        const handleMouseleave = () => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            hovering.value = false;
        };

        // 全局禁用
        const globalFromDisabled = computed(() => {
            return (zmzForm && zmzForm.disabled) ? zmzForm.disabled : props.disabled;
        })

        // 全局禁用
        const globalFromReadonly = computed(() => {
            return (zmzForm && zmzForm.readonly) ? zmzForm.readonly : props.readonly;
        })

        return {
            model,
            zmzInputnumberClass,
            handleBlur,
            handleFocus,
            handleInput,
            handleReduceClick,
            handleAddClick,
            handleKeyDown,
            handleMouseenter,
            handleMouseleave,
            globalFromReadonly,
            globalFromDisabled,
            zmzInputnumberIconReduceClass,
            zmzInputnumberIconAddClass,
            zmzInputnumberReduceClass,
            zmzInputnumberAddClass
        };
    }
};
</script>
