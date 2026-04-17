<template>
    <div class="zmz-form__item" :class="[zmzFormItemClass]" :data-prop="prop">
        <div class="zmz-form__item__label" :class="[zmzFormItemLableClass, labelClass]"
            :style="[zmzFormItemLableStyle, labelStyle]" v-if="label">
            <span class="zmz-form__item__label__required" v-if="isRequired && !hideRequired">*</span>
            <slot name="label">{{ label }}</slot>
        </div>
        <div class="zmz-form__item__content" :class="[contentClass]" :style="[zmzFormItemContentStyle, contentStyle]">
            <slot></slot>
            <transition name="zmz-fold-top">
                <div v-if="validateState === 'error'" class="zmz-form__item__error">{{ validateMessage }}</div>
            </transition>
        </div>
    </div>
</template>
<script>
import { getCurrentInstance, ref, inject, computed, provide, onMounted, onBeforeUnmount, watch } from 'vue';
import AsyncValidator from 'async-validator';
import { unitDefaultCompletion } from '../../../../utils/unit.js';
export default {
    name: 'ZmzFormItem',
    componentName: 'ZmzFormItem',
    props: {
        /**
         * 标签文本
         */
        label: {
            type: String,
            default: ''
        },
        /**
         * 验证字段
         */
        prop: {
            type: String,
            default: ''
        },
        /**
         * 是否必填项
         */
        required: {
            type: Boolean,
            default: false
        },
        /**
         * 标签宽度
         */
        labelWidth: {
            type: [String, Number],
            default: ''
        },
        /**
         * 标签样式
         */
        labelStyle: {
            type: Object,
            default: () => { }
        },
        /**
         * 标签类名
         */
        labelClass: {
            type: Array,
            default: () => []
        },
        /**
         * 内容样式
         */
        contentStyle: {
            type: Object,
            default: () => { }
        },
        /**
         * 内容类名
         */
        contentClass: {
            type: Array,
            default: () => []
        },
        /**
         * 验证规则
         */
        rules: [Array, Object]
    },
    setup(props) {
        const Instance = getCurrentInstance();
        // xin
        const zmzForm = inject('zmzForm', '');
        const isRequired = ref(false);
        const validateState = ref('');
        const validateMessage = ref('')
        const validateDisabled = ref(false)

        onMounted(() => {
            addDom()
            if (props.prop) {
                let proxy = new Proxy(Instance.proxy, {})
                proxy.initialValue = fieldValue.value
            }
            updateDom()
            setRules()
        })

        watch(() => props.rules, () => {
            setRules()
        })

        watch(() => props.required, (n, o) => {
            isRequired.value = n;
            if (o && !n) {
                resetField();
            }
        })


        onBeforeUnmount(() => {
            removeDom()
            updateDom()
        })

        const addDom = () => {
            zmzForm.zmzFormList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateDom = () => {
            // zmzForm.updateDom();
        }

        const removeDom = () => {
            if (zmzForm.zmzFormList.value && zmzForm.zmzFormList.value.length) {
                const index = zmzForm.zmzFormList.value.findIndex(item => item.uid === Instance.uid);
                zmzForm.zmzFormList.value.splice(index, 1);
            }
        }

        const getPropByPath = (obj, path) => {
            let tempObj = obj;
            path = path.replace(/\[(\w+)\]/g, '.$1');
            path = path.replace(/^\./, '');

            let keyArr = path.split('.');
            let i = 0;

            for (let len = keyArr.length; i < len - 1; ++i) {
                let key = keyArr[i];
                if (key in tempObj) {
                    tempObj = tempObj[key];
                } else {
                    throw new Error('[ZMZUI3 warn]: please transfer a valid prop path to form item!');
                }
            }
            return {
                o: tempObj,
                k: keyArr[i],
                v: tempObj[keyArr[i]]
            };
        }

        const fieldValue = computed(() => {
            const model = zmzForm.model;
            if (!model || !props.prop) { return; }

            let path = props.prop;
            if (path.indexOf(':') !== -1) {
                path = path.replace(/:/, '.');
            }
            return getPropByPath(model, path).v;
        })

        // 重置验证
        const resetField = () => {
            validateState.value = 'success';
            validateMessage.value = '';

            let model = zmzForm.model;
            let value = fieldValue.value;
            let path = props.prop;
            if (path.indexOf(':') !== -1) {
                path = path.replace(/:/, '.');
            }
            let prop = getPropByPath(model, path);
            if (Array.isArray(value) && Instance.proxy.initialValue !== null) {
                validateDisabled.value = true;
                prop.o[prop.k] = [].concat(Instance.proxy.initialValue);
            } else {
                validateDisabled.value = true;
                prop.o[prop.k] = Instance.proxy.initialValue;
            }
        }

        // 验证
        const validate = (trigger, callback = function () { }) => {
            let rules = getFilteredRule(trigger);
            if (!rules || rules.length === 0) {
                if (!props.required) {
                    callback();
                    return true;
                } else {
                    rules = [{ required: true }];
                }
            }

            validateState.value = 'validating';

            let descriptor = {};
            descriptor[props.prop] = rules;

            const validator = new AsyncValidator(descriptor);
            let model = {};

            model[props.prop] = fieldValue.value;

            validator.validate(model, { firstFields: true }, errors => {
                validateState.value = !errors ? 'success' : 'error';
                validateMessage.value = errors ? errors[0].message : '';

                callback(validateMessage.value);

                zmzForm && zmzForm.onValidate(props.prop, !errors, validateMessage.value || null);
            });
            validateDisabled.value = false;
        }

        // 过滤验证
        const getFilteredRule = (trigger) => {
            const rules = getRules();
            return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
        }

        // 设置验证
        const setRules = () => {
            let rules = getRules();
            if (rules.length && props.required) {
                return;
            } else if (rules.length) {
                rules.every((item) => {
                    isRequired.value = item.required;
                });
            } else if (props.required) {
                isRequired.value = this.required;
            }
        }


        // 获取验证
        const getRules = () => {
            let rules = zmzForm.rules;
            const selfRules = props.rules;

            rules = rules ? rules[props.prop] : [];

            return [].concat(selfRules || rules || []);
        }

        const zmzFormItemClass = computed(() => {
            let params = []

            if (props.required || (setRules.value && setRules.value.required)) {
                params.push('zmz-form__item--required')
            }

            if (validateState.value == 'error') {
                params.push('zmz-form__item--error')
            }

            return params
        });


        const formBlur = () => {
            validate('blur');
        }

        const formChange = () => {
            if (validateDisabled.value) {
                validateDisabled.value = false;
                return;
            }
            validate('change');
        }

        // 验证
        const onValidate = (type) => {
            if (props.prop) {
                if (type === 'blur') formBlur()
                formChange()
            }
        };

        // 清除错误信息
        const clearValidate = () => {
            validateState.value = '';
            validateMessage.value = '';
        }

        //label类名
        const zmzFormItemLableClass = computed(() => {
            let params = [];
            return params;
        });

        // label样式
        const zmzFormItemLableStyle = computed(() => {
            let params = {};
            if (zmzForm.labelPosition.value == 'top') return params
            if (props.labelWidth) {
                params['width'] = unitDefaultCompletion(props.labelWidth);
            } else if (zmzForm.labelWidth.value) {
                params['width'] = unitDefaultCompletion(zmzForm.labelWidth.value);
            }

            return params;
        });

        // 内容样式
        const zmzFormItemContentStyle = computed(() => {
            let params = {};
            if (zmzForm.labelPosition.value == 'top') return params
            if (props.labelWidth) {
                params['margin-left'] = unitDefaultCompletion(props.labelWidth);
            } else if (zmzForm.labelWidth.value) {
                params['margin-left'] = unitDefaultCompletion(zmzForm.labelWidth.value);
            }

            return params;
        });

        //占位符前缀文本
        const placeholderPrefixTextInput = computed(() => {
            return zmzForm.placeholderPrefixInput ? zmzForm.placeholderPrefixInput + props.label : '';
        });

        //占位符前缀文本
        const placeholderPrefixTextSelect = computed(() => {
            return zmzForm.placeholderPrefixSelect ? zmzForm.placeholderPrefixSelect + props.label : '';
        });

        const hideRequired =  computed(() => {
            return zmzForm.hideRequired;
        });

        provide('zmzFormItem', {
            formLabel: props.label,
            placeholderPrefixTextInput: placeholderPrefixTextInput,
            placeholderPrefixTextSelect: placeholderPrefixTextSelect
        });

        return {
            validate,
            onValidate,
            setRules,
            resetField,
            zmzFormItemLableClass,
            zmzFormItemLableStyle,
            zmzFormItemContentStyle,
            clearValidate,
            validateMessage,
            validateState,
            zmzFormItemClass,
            isRequired,
            hideRequired
        };
    }
};
</script>
