<template>
    <label class="zmz-checkbox" :class="[zmzCheckedClass]">
        <div v-if="$slots.checkbox" class="zmz-checkbox__wrap">
            <div class="zmz-checkbox__text">
                <slot name="checkbox" :checked="isChecked"></slot>
            </div>
            <input type="checkbox" v-model="model" :disable="globalFromDisabled" :readonly="globalFromReadonly"
                :value="value" :checked="isChecked" :name="zmzCheckboxName" class="zmz-checkbox__input" />
        </div>
        <div class="zmz-checkbox__wrap" v-else>
            <span class="zmz-checkbox__icon" v-if="isButton">
                <slot name="icon"><i class="zmz-checkbox__icon__inner"></i></slot>
            </span>
            <input type="checkbox" v-model="model" :disable="globalFromDisabled" :readonly="globalFromReadonly"
                :value="value" :checked="isChecked" :name="zmzCheckboxName" class="zmz-checkbox__input" />
            <span class="zmz-checkbox__text" v-if="$slots.default || label">
                <slot>{{ label }}</slot>
            </span>
        </div>
    </label>
</template>

<script>
import { computed, getCurrentInstance, inject } from 'vue';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzCheckbox',
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
        name: {
            type: String,
            default: ''
        },
        /**
         * 边框
         */
        border: {
            type: Boolean,
            default: false
        },
        /**
         * 文本
         */
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        /**
         * 值
         */
        value: {
            type: [String, Number, Boolean],
            default: ''
        },
        /**
         * 双向绑定
         */
        modelValue: [Boolean],
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
         * 半选
         */
        semiselection: {
            type: Boolean,
            default: false
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
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                if (parentProxy.value) {
                    parentProxy.value.proxy.onGroupChange(val);
                } else {
                    emit('update:modelValue', val);
                    emit('on-change', val);
                }

                if (parentProxyForm.value) {
                    parentProxyForm.value.proxy.onValidate();
                }
            }
        });

        const parentProxyForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        const parentProxy = computed(() => {
            return findParent(parent, 'ZmzCheckboxGroup');
        });

        const labelOrValue = computed(() => {
            if (props.value) {
                return props.value;
            } else {
                return props.label;
            }
        });

        const isChecked = computed(() => {
            const val = model.value;
            if (typeof val === 'boolean') {
                return val;
            } else if (val instanceof Array) {
                return val.includes(labelOrValue.value);
            }
            return null;
        });

        const zmzCheckboxName = computed(() => {
            if (props.name) {
                return props.name;
            }
            if (parentProxy.value) {
                return parent.proxy.zmzCheckboxGroupName;
            }
            return ''
        });

        const isDisabled = computed(() => {
            return (parentProxy.value && parentProxy.value.proxy.disabled) ? parentProxy.value.proxy.disabled : props.disabled;
        });

        const isReadonly = computed(() => {
            return (parentProxy.value && parentProxy.value.proxy.readonly) ? parentProxy.value.proxy.readonly : props.readonly;
        });

        const zmzCheckedClass = computed(() => {
            let params = [];

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-checkbox--size-${zmzFormSize.value || props.size}`)
            }

            if (props.border) {
                params.push('zmz-checkbox--border');
            }

            if (isChecked.value) {
                params.push('zmz-checkbox--checked');
            }
            if (props.semiselection && !isChecked.value) {
                params.push('zmz-checkbox--semiselection');
            }

            if (globalFromDisabled.value) {
                params.push('zmz-checkbox--disabled')
            }

            if (globalFromReadonly.value) {
                params.push('zmz-checkbox--readonly')
            }

            return params;
        });

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
            labelOrValue,
            globalFromDisabled,
            globalFromReadonly,
            zmzCheckedClass,
            isButton,
            zmzCheckboxName,
        };
    }
};
</script>
