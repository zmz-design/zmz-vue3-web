<template>
    <div class="zmz-checkboxgroup" :class="[zmzCheckboxGroupClass]">
        <slot></slot>
    </div>
</template>
<script>
import { computed, inject, getCurrentInstance } from 'vue';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzCheckboxGroup',
    componentName: 'ZmzCheckboxGroup',
    props: {
        /**
         * 双向绑定
         */
        modelValue: Array,
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
         * 是否按钮
         */
        button: {
            type: Boolean,
            default: false
        },
        /**
         * 是否边线
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
        },
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

        const onGroupChange = val => {
            emit('update:modelValue', val);
            emit('on-change', val);
            if (findParent(parent, 'ZmzFormItem')) {
                findParent(parent, 'ZmzFormItem').proxy.onValidate();
            }
        };

        const zmzCheckboxGroupName = computed(() => {
            if (props.name) {
                return props.name
            } else {
                return 'zmzCheckboxGroup_' + new Date().getTime();
            }
        });

        const zmzCheckboxGroupClass = computed(() => {
            let params = [];

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-checkboxgroup--size-${zmzFormSize.value || props.size}`)
            }

            if (props.vertical) {
                params.push('zmz-checkboxgroup--vertical')
            }

            if (props.button) {
                params.push('zmz-checkboxgroup--button')
            }

            if (props.button && props.buttonBorder) {
                params.push('zmz-checkboxgroup--button-border')
            }

            return params;
        })

        return {
            modelGroup,
            onGroupChange,
            zmzCheckboxGroupClass,
            zmzCheckboxGroupName
        };
    }
};
</script>
