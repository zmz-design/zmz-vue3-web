<template>
    <label class="zmz-radio" :class="[zmzRadioClass]">
        <div v-if="$slots.radio" class="zmz-radio__wrap">
            <div class="zmz-radio__text">
                <slot name="radio" :item="{ 'checked': isChecked }"></slot>
            </div>
        </div>
        <div v-else class="zmz-radio__wrap">
            <span class="zmz-radio__icon" v-if="isButton">
                <i class="zmz-radio__icon__inner"></i>
            </span>
            <span class="zmz-radio__text" v-if="$slots.default || label">
                <slot>{{ label }}</slot>
            </span>
        </div>
        <input type="radio" v-model="model" :disable="globalFromDisabled" :readonly="globalFromReadonly"
                :name="zmzRadioName" :value="value" :checked="isChecked" class="zmz-radio__input" />
    </label>
</template>
<script>
import { computed, getCurrentInstance, inject } from 'vue';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzRadio',
    props: {
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
         * 原生name
         */
        name: String,
        /**
         * 边线
         */
        border: {
            type: Boolean,
            default: false
        },
        /**
         * 文本
         */
        label: {
            type: [String, Boolean, Number],
            default: ''
        },
        /**
         * 值
         */
        value: {
            type: [String, Boolean, Number],
            default: ''
        },
        /**
         * 绑定
         */
        modelValue: [Boolean, String, Number],
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
    emits: ['on-change', 'update:modelValue'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const zmzForm = inject('zmzForm', {});

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const model = computed({
            get() {
                return parentProxy.value && parentProxy.value.proxy ? parentProxy.value.proxy.modelGroup : props.modelValue;
            },
            set(value) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                if (parentProxy.value) {
                    parentProxy.value.proxy.onGroupChange(value);
                } else {
                    emit('update:modelValue', value);
                    emit('on-change', value);
                }
                if (parentProxyForm.value) {
                    parentProxyForm.value.proxy.onValidate();
                }
            }
        });

        // 找到form
        const parentProxyForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        // 找到父级
        const parentProxy = computed(() => {
            return findParent(parent, 'ZmzRadioGroup');
        });

        // name
        const zmzRadioName = computed(() => {
            if (props.name) {
                return props.name;
            }
            if (parentProxy.value) {
                return parent.proxy.zmzRadioGroupName;
            }
            return ''
        });

        // 选中
        const isChecked = computed(() => {
            let val = model.value;
            if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
                return val === props.value;
            }
            return null;
        });

        // 禁用
        const isDisabled = computed(() => {
            return (parentProxy.value && parentProxy.value.proxy.disabled) ? parentProxy.value.proxy.disabled : props.disabled;
        });

        // 只读
        const isReadonly = computed(() => {
            return (parentProxy.value && parentProxy.value.proxy.readonly) ? parentProxy.value.proxy.readonly : props.readonly;
        });

        // 类名
        const zmzRadioClass = computed(() => {
            let params = [];
            if (zmzFormSize.value || props.size) {
                params.push(`zmz-radio--size-${zmzFormSize.value || props.size}`);
            }

            if (props.border) {
                params.push('zmz-radio--border');
            }

            if (isChecked.value) {
                params.push('zmz-radio--checked');
            }

            if (globalFromDisabled.value) {
                params.push('zmz-radio--disabled');
            }

            if (globalFromReadonly.value) {
                params.push('zmz-radio--readonly');
            }

            return params;
        });

        // 按钮
        const isButton = computed(() => {
            return !(parentProxy.value && parentProxy.value.proxy.button);
        });

        // 全局禁用
        const globalFromDisabled = computed(() => {
            return (zmzForm && zmzForm.disabled) ? zmzForm.disabled : isDisabled.value;
        })

        // 全局禁用
        const globalFromReadonly = computed(() => {
            return (zmzForm && zmzForm.readonly) ? zmzForm.readonly : isReadonly.value;
        })

        return {
            model,
            isChecked,
            globalFromDisabled,
            globalFromReadonly,
            zmzRadioName,
            zmzRadioClass,
            isButton,
        };
    }
};
</script>
