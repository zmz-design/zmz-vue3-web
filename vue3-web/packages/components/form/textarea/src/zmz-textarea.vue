<template>
    <div class="zmz-textarea" :class="[zmzTextareaClass]">
        <textarea v-model="model" :rows="rows" :name="name" @input="handleInput" :disabled="globalFromDisabled"
            :readonly="globalFromReadonly" :maxlength="maxCount" :minlength="minlength" :autofocus="autofocus"
            class="zmz-textarea__inner" :class="{ 'zmz-textarea__textarea__outrange': outrangeStatus }"
            :placeholder="placeholderText" :dirname="dirname" :cols="cols" :wrap="wrap" @blur="handleBlur"></textarea>
        <span class="zmz-textarea__count" v-if="maxlength && showWordLimit">
            <template v-if="$slots.count">
                <slot name="count" :status="outrangeStatus" :count="censusNumber" :maxCount="maxlength"></slot>
            </template>
            <template v-else>
                <span class="zmz-textarea__num" :class="{ 'zmz-textarea__num--outrange': outrangeStatus }">{{
                    censusNumber
                    }}</span>
                <template v-if="maxlength != -1">
                    <span class="zmz-textarea__division">/</span>
                    <span class="zmz-textarea__total">{{ maxlength }}</span>
                </template>
            </template>
        </span>
    </div>
</template>

<script>
import { computed, getCurrentInstance, inject } from 'vue';
import { findParent } from '../../../../utils/find.js';

export default {
    name: 'ZmzTextarea',
    props: {
        /**
         * 	超出字符是否裁剪
         */
        cut: {
            type: Boolean,
            default: false
        },
        /**
         * 伸缩
         */
        resize: {
            type: Boolean,
            default: true
        },
        /**
         * 获取焦点
         */
        autofocus: {
            type: Boolean,
            default: false
        },
        /**
         * 绑定
         */
        modelValue: [Number, String, Boolean],
        /**
         * 显示文字限制
         */
        showWordLimit: {
            type: Boolean,
            default: false
        },
        /**
         * 占位符
         */
        placeholder: {
            type: String,
            default: ''
        },
        /**
         * 行高
         */
        rows: {
            type: Number,
            default: 4
        },
        /**
         * 行宽
         */
        cols: Number,
        /**
         * 最大长度
         */
        maxlength: {
            type: Number,
            default: -1
        },
        /**
         * 最小长度
         */
        minlength: Number,
        /**
         * 原生属性name
         */
        name: {
            type: String,
            default: ''
        },
        /**
         * 提交字段
         */
        dirname: {
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
         * 只读
         */
        readonly: {
            type: Boolean,
            default: false
        },
        /**
         * 换行提交
         */
        wrap: {
            type: String,
            default: 'soft',
            validator(value) {
                return ['soft', 'hard'].includes(value)
            }
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
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const zmzFormItem = inject('zmzFormItem', {});
        const zmzForm = inject('zmzForm', {});

        // 获取父元素
        const parentProxyItem = computed(() => {
            return findParent(parent, 'ZmzFormItem')
        })

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                emit('update:modelValue', val);
            }
        });

        const handleInput = () => {
            let value = model.value;
            emit('on-change', value);
        };

        const maxCount = computed(() => {
            if (props.cut) {
                return props.maxlength
            }
            return -1
        })

        const outrangeStatus = computed(() => {
            if (props.maxlength == -1) {
                return false
            }
            return model.value.length > props.maxlength && props.showWordLimit;
        });

        // 统计字数
        const censusNumber = computed(() => {
            return model.value.length;
        });

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const zmzTextareaClass = computed(() => {
            let params = [];
            if (globalFromDisabled.value) {
                params.push('zmz-textarea--disabled');
            }

            if (globalFromReadonly.value) {
                params.push('zmz-textarea--readonly');
            }

            if (props.resize) {
                params.push('zmz-textarea--resize');
            }

            if (outrangeStatus.value) {
                params.push('zmz-textarea--outrange');
            }

            if (props.showWordLimit) {
                params.push('zmz-textarea--limit');
            }

            if (props.cols) {
                params.push('zmz-textarea--cols');

            }

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-switch--size-${zmzFormSize.value || props.size}`);
            }

            return params;
        });


        // 占位符文本
        const placeholderText = computed(() => {
            return props.placeholder ? props.placeholder : zmzFormItem.placeholderPrefixTextInput ? zmzFormItem.placeholderPrefixTextInput.value : '';
        });

        // 全局禁用
        const globalFromDisabled = computed(() => {
            return (zmzForm && zmzForm.disabled) ? zmzForm.disabled : props.disabled;
        })

        // 全局禁用
        const globalFromReadonly = computed(() => {
            return (zmzForm && zmzForm.readonly) ? zmzForm.readonly : props.readonly;
        })

        const handleBlur = () => {
            if (parentProxyItem.value) {
                parentProxyItem.value.proxy.onValidate('blur');
            }
        }

        return {
            model,
            handleInput,
            censusNumber,
            outrangeStatus,
            zmzTextareaClass,
            maxCount,
            placeholderText,
            handleBlur,
            globalFromDisabled,
            globalFromReadonly
        };
    }
};
</script>
