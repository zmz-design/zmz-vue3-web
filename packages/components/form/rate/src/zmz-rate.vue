<template>
    <div class="zmz-rate" :class="[zmzRateClass]">
        <div class="zmz-rate__item" @click="handleClick(index)"
            :class="[{ 'zmz-rate__item--active': index + 1 <= model }, itemClass(index)]"
            v-for="(item, index) in maxCount" :key="index">
            <div class="zmz-rate__item__first" :style="[decimalFirstStyle()]">
                <i class="zmz-rate__icon zmz-icon--stars" :style="[decimalStyle(index)]" @mouseleave="handleMouseleave(index)"
                    @mouseenter="handleMouseenter(index, 'half')"></i>
            </div>
            <div class="zmz-rate__item__second">
                <i class="zmz-rate__icon zmz-icon--stars" :style="[iconStyle(index)]" @mouseleave="handleMouseleave(index)"
                    @mouseenter="handleMouseenter(index, 'full')"></i>
            </div>
        </div>
        <div class="zmz-rate__promptext" :style="[zmzRatePromptextStyle]">{{ promptTextTitle }}</div>
    </div>
</template>

<script>
import { ref, getCurrentInstance, computed, inject } from 'vue';
import { findParent } from '../../../../utils/find.js';
import { typeJudgment } from '../../../../utils/utils.js';
export default {
    name: 'ZmzRate',
    props: {
        /**
         * 只读
         */
        readonly: {
            type: Boolean,
            default: false
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 绑定值
         */
        modelValue: {
            type: [Number, String],
            default: 0
        },
        /**
         * 最大值
         */
        maxCount: {
            type: [Number, String],
            default: 5
        },
        /**
         * 最小阈值
         */
        minThreshold: {
            type: [Number, String],
            default: 2
        },
        /**
         * 最大阈值
         */
        maxThreshold: {
            type: [Number, String],
            default: 4
        },
        /**
         * 渐变颜色组
         */
        colors: {
            type: [Array, Object],
            default: () => []
        },
        /**
         * 每颗星提示文字
         */
        promptText: {
            type: [Array, Object],
            default: () => []
        },
        /**
         * 提示文字颜色
         */
        promptTextColor: {
            type: String,
            default: ''
        },
        /**
         * 默认底色
         */
        bottomColor: {
            type: String,
            default: '#e8e8e8'
        },
        /**
         * 默认选中颜色
         */
        selectColor: {
            type: String,
            default: '#fadb14'
        },
        /**
         * 是否显示分数
         */
        scores: {
            type: Boolean,
            default: false
        },
        /**
         * 是否半颗
         */
        allowHalf: {
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
        }
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const current = ref(props.modelValue);
        const promptText = ref(props.promptText);
        const allowHalf = ref(props.allowHalf);
        const zmzForm = inject('zmzForm', {});

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const model = computed({
            get() {
                return Number(props.modelValue);
            },
            set(val) {
                if (globalFromReadonly.value || globalFromDisabled.value) return;
                emit('update:modelValue', val);
            }
        });

        const handleClick = index => {
            if (globalFromReadonly.value || globalFromDisabled.value) return;
            current.value = index + 1;
            emit('on-change', current.value);
            if (findParent(parent, 'ZmzFormItem')) {
                findParent(parent, 'ZmzFormItem').proxy.onValidate();
            }
        };

        const itemClass = index => {
            const starValue = index + 1;
            let className = '';
            if ((allowHalf.value && model.value + 0.5 >= starValue && model.value < starValue) || (globalFromReadonly.value && model.value + 0.5 >= starValue && model.value < starValue)) {
                className += ` zmz-rate__item--half zmz-rate__item--active`;
            } else {
                className += starValue <= model.value ? ` zmz-rate__item--full` : ` zmz-rate__item--zero`;
            }
            return className;
        };

        const decimalStyle = () => {
            return {
                color: getColors.value
            };
        };

        const decimalFirstStyle = () => {
            let width = '';
            if (globalFromReadonly.value) {
                width = `${valueDecimal.value}%`;
            } else if (allowHalf.value) {
                width = '50%';
            }
            return {
                width
            };
        };

        const valueDecimal = computed(() => {
            return model.value * 100 - Math.floor(model.value) * 100;
        });

        // 滑入
        const handleMouseenter = (index, type) => {
            if (globalFromReadonly.value || globalFromDisabled.value) return;
            if (allowHalf.value) {
                if (type == 'half') {
                    model.value = index + 0.5;
                } else if (type == 'full') {
                    model.value = index + 1;
                }
            } else {
                model.value = index + 1;
            }
        };

        // 滑出
        const handleMouseleave = index => {
            if (globalFromReadonly.value || globalFromDisabled.value) return;
            if (current.value > 0) {
                model.value = current.value;
            } else {
                if (index == 0) {
                    model.value = 0;
                } else {
                    model.value = index + 1;
                }
            }
        };

        const promptTextTitle = computed(() => {
            if (props.scores) {
                return model.value;
            } else {
                let index = Math.floor(model.value - 1);
                return promptText.value[index];
            }
        });

        const zmzRatePromptextStyle = computed(() => {
            return { color: props.promptTextColor };
        });

        const getColors = computed(() => {
            if (props.colors.length || Object.keys(props.colors).length !== 0) {
                const matchedKeys = Object.keys(colorsToObject.value)
                    .filter(key => {
                        const val = colorsToObject.value[key];
                        const excluded = typeJudgment(val, 'Object') ? val.excluded : false;
                        return excluded ? model.value < key : model.value <= key;
                    })
                    .sort((a, b) => a - b);
                const matchedValue = colorsToObject.value[matchedKeys[0]];
                return typeJudgment(matchedValue, 'Object') ? matchedValue.value : matchedValue || '';
            } else {
                return props.selectColor;
            }
        });

        const iconStyle = index => {
            return {
                color: index + 1 <= model.value ? getColors.value : props.bottomColor
            };
        };

        const colorsToObject = computed(() => {
            if (Array.isArray(props.colors)) {
                return {
                    [props.minThreshold]: props.colors[0],
                    [props.maxThreshold]: props.colors[1],
                    [props.maxCount]: props.colors[2]
                };
            } else {
                return props.colors;
            }
        });

        const zmzRateClass = computed(() => {
            let params = [];

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-rate--size-${zmzFormSize.value || props.size}`)
            }

            if (globalFromReadonly.value) {
                params.push('zmz-rate--readonly')
            }

            if (globalFromDisabled.value) {
                params.push('zmz-rate--disabled')
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
            model,
            handleMouseenter,
            handleMouseleave,
            current,
            handleClick,
            iconStyle,
            promptTextTitle,
            zmzRatePromptextStyle,
            itemClass,
            decimalStyle,
            decimalFirstStyle,
            zmzRateClass
        };
    }
};
</script>
