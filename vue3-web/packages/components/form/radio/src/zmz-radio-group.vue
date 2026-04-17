<template>
    <div class="zmz-radiogroup" :class="[zmzRadioGroupClass]">
        <slot></slot>
    </div>
</template>
<script>
import { computed, inject, getCurrentInstance } from 'vue';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzRadioGroup',
    componentName: 'ZmzRadioGroup',
    props: {
        /**
         * 绑定值
         */
        modelValue: [String, Number, Boolean],
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
         * 垂直
         */
        vertical: {
            type: Boolean,
            default: false
        },
        /**
         * 按钮
         */
        button: {
            type: Boolean,
            default: false
        },
        /**
         * 按钮填充
         */
        buttonBorder: {
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
         * 原生name
         */
        name: {
            type: String,
            default: ''
        }
    },
    emits: ['on-change', 'update:modelValue'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const zmzForm = inject('zmzForm', {});

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const modelGroup = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                onGroupChange(val);
            }
        });

        const zmzRadioGroupName = computed(() => {
            if (props.name) {
                return props.name;
            } else {
                return 'zmzRadioGroup_' + new Date().getTime();
            }
        });

        const onGroupChange = val => {
            emit('update:modelValue', val);
            emit('on-change', val);
            if (findParent(parent, 'ZmzFormItem')) {
                findParent(parent, 'ZmzFormItem').proxy.onValidate();
            }
        };

        const zmzRadioGroupClass = computed(() => {
            let params = [];

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-radiogroup--size-${zmzFormSize.value || props.size}`)
            }

            if (props.vertical) {
                params.push('zmz-radiogroup--vertical');
            }

            if (props.button) {
                params.push('zmz-radiogroup--button');
            }

            if (props.button && props.buttonBorder) {
                params.push('zmz-radiogroup--button-border');
            }

            return params;
        });

        return {
            modelGroup,
            onGroupChange,
            zmzRadioGroupName,
            zmzRadioGroupClass
        };
    }
};
</script>
