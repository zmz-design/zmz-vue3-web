<template>
    <form class="zmz-form" :class="[zmzFormClass]">
        <slot></slot>
    </form>
</template>

<script>
import { provide, ref, computed, watch } from 'vue';
export default {
    name: 'ZmzForm',
    componentName: 'ZmzForm',
    props: {
        /**
         * 数据源
         */
        model: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 验证源
         */
        rules: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 行内模式
         */
        inline: {
            type: Boolean,
            default: false
        },
        /**
         * 表单尺寸
         */
        size: {
            type: String,
            default: '',
            validator(value) {
                return ['large', 'medium', 'small', 'mini', 'default', ''].includes(value)
            }
        },
        /**
         * 隐藏必选
         */
         hideRequired: {
            type: Boolean,
            default: false
        },
        /**
         * 禁用所有
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * label对齐方式
         */
        labelPosition: {
            type: String,
            default: 'right',
            validator(value) {
                return ['left', 'right', 'top'].includes(value)
            }
        },
        /**
         * 	label宽度
         */
        labelWidth: [String, Number],
        /**
         * 占位符前缀
         */
        placeholderPrefixInput: String,
        /**
         * 占位符前缀
         */
        placeholderPrefixSelect: String
    },
    setup(props, { emit }) {
        const zmzFormList = ref([]);
        const labelPositions = ref(props.labelPosition)

        // 验证
        const validate = (callback) => {
            return new Promise(resolve => {
                let valid = true;
                let count = 0;
                let zmzFormListFields = zmzFormList.value.filter(item => item.instance.props.prop)
                if (zmzFormListFields.length === 0) {
                    resolve(valid);
                    if (typeof callback === 'function') {
                        callback(valid);
                    }
                }
                zmzFormListFields.forEach(field => {
                    field.instance.proxy.validate('', errors => {
                        if (errors) {
                            valid = false;
                        }
                        if (++count === zmzFormListFields.length) {
                            resolve(valid);
                            if (typeof callback === 'function') {
                                callback(valid);
                            }
                        }
                    });
                });
            });
        };

        // 验证字段
        const validateField = (prop, cb) => {
            const field = zmzFormList.value.filter(vm => vm.instance.proxy.prop === prop)[0];
            if (!field) { throw new Error('[ZMZUI3 warn]: must call validateField with valid prop string!'); }
            field.instance.proxy.validate('', cb);
        }

        // 重置验证
        const resetFields = () => {
            zmzFormList.value.forEach(item => item.instance.props.prop && item.instance.proxy.resetField());
        };

        // 清除验证
        const clearValidate = (fields = []) => {
            const fieldsData = fields.length
                ? (typeof fields === 'string'
                    ? zmzFormList.value.filter(item => fields === item.instance.proxy.prop)
                    : zmzFormList.value.filter(item => fields.indexOf(item.instance.proxy.prop) > -1)
                ) : zmzFormList.value;
            fieldsData.forEach(item => {
                item.instance.proxy.clearValidate();
            });
        }

        // 公共class
        const zmzFormClass = computed(() => {
            let params = []
            if (props.inline) {
                params.push('zmz-form--inline')
            }

            if (props.size) {
                params.push(`zmz-form--size-${props.size}`)
            }

            if (props.labelPosition) {
                params.push(`zmz-form--label-${props.labelPosition}`)
            }

            return params
        })

        // 表单大小 
        const formSize = computed(() => {
            return props.size
        })

        // 对齐方式
        const formLabelPosition = computed(() => {
            return props.labelPosition
        })

        // 标签宽度
        const formLabelWidth = computed(() => {
            return props.labelWidth
        })

        const onValidate = (props, error, msg) => {
            emit('on-validate', props, error, msg)
        }

        watch(() => props.labelPosition, (val) => {
            labelPositions.value = val
        })

        provide('zmzForm', {
            model: props.model,
            rules: props.rules,
            size: formSize,
            zmzFormList: zmzFormList,
            labelWidth: formLabelWidth,
            labelPosition: formLabelPosition,
            placeholderPrefixInput: props.placeholderPrefixInput,
            placeholderPrefixSelect: props.placeholderPrefixSelect,
            onValidate: onValidate,
            disabled: props.disabled,
            hideRequired: props.hideRequired
        });


        return {
            validate,
            resetFields,
            zmzFormClass,
            validateField,
            clearValidate
        };
    }
};
</script>
