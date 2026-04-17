<template>
    <div class="zmz-input" :class="[zmzInputclass]" @mouseenter="hovering = true" @mouseleave="hovering = false"
        v-bind="$attrs">
        <div class="zmz-input__prepend" v-if="$slots.prepend" ref="zmzInputPrepend" :class="[prependClass]"
            :style="[zmzInputPrependStyle, prependStyle]">
            <slot name="prepend"></slot>
        </div>
        <input :type="typeInner" class="zmz-input__input" @input="handleInput" @focus="handleFocus" @blur="handleBlur"
            :autocomplete="autocomplete" :disabled="globalFromDisabled" :readonly="globalFromReadonly"
            :placeholder="placeholderText" :autofocus="autofocus" :name="name" v-model="model"
            :style="[zmzInputInputStyle]" :maxlength="maxlength" />
        <div class="zmz-input__append" v-if="$slots.append" ref="zmzInputAppend" :class="[appendClass]"
            :style="[zmzInputAppendStyle, appendStyle]">
            <slot name="append"></slot>
        </div>
        <!-- // 前后缀 -->
        <div class="zmz-input__suffix" v-if="isSuffix" :style="[zmzInputSuffixStyle]">
            <span class="zmz-input__suffix__icon" v-if="showPasswordBtn" @click.stop="handleSwitchPassword">
                <i :class="showPasswordBtnIcon"></i>
            </span>
            <span class="zmz-input__suffix__icon" v-if="(suffixIcon || $slots.suffix)" @click="suffixClick">
                <slot name="suffix"><i class="zmz-input__suffix__icon__inner" :class="suffixIcon"></i></slot>
            </span>
            <span class="zmz-input__suffix__icon" v-if="showClearBtn" @click.stop="clearInput">
                <i class="zmz-input__suffix__icon__inner zmz-icon--error"></i>
            </span>
            <span class="zmz-input__suffix__text" v-if="showWordLimit" @click.stop="clearInput">
                {{ model.length }}/{{ maxlength }}
            </span>
        </div>
        <div class="zmz-input__prefix" v-if="isPrefix" :style="[zmzInputPrefixStyle]">
            <span class="zmz-input__prefix__icon" v-if="(prefixIcon || $slots.prefix)" @click="prefixClick">
                <slot name="prefix"><i class="zmz-input__prefix__icon__inner" :class="prefixIcon"></i></slot>
            </span>
        </div>
    </div>
</template>

<script>
import { computed, ref, getCurrentInstance, inject } from 'vue';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzInput',
    props: {
        /**
         * 类型
         */
        type: {
            type: String,
            default: 'text'
        },
        /**
         * 占位符
         */
        placeholder: {
            type: String,
            default: ''
        },
        /**
         * 自动填充
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
         * 只读
         */
        readonly: {
            type: Boolean,
            default: false
        },
        /**
         * 获取焦点
         */
        autofocus: {
            type: Boolean,
            default: false
        },
        /**
         * 焦点边线
         */
        focusBorder: {
            type: Boolean,
            default: true
        },
        /**
         * 清空按钮
         */
        clearbtn: {
            type: Boolean,
            default: false
        },
        /**
         * 切换按钮
         */
        togglePasswordBtn: {
            type: Boolean,
            default: true
        },
        /**
         * 后缀图标
         */
        suffixIcon: {
            type: String,
            default: ''
        },
        /**
         * 后缀是否显示
         */
        suffix: {
            type: Boolean,
            default: true
        },
        /**
         * 前缀是否显示
         */
        prefix: {
            type: Boolean,
            default: true
        },
        /**
         * 后缀图标
         */
        prefixIcon: {
            type: String,
            default: ''
        },
        /**
         * 前置pandding
         */
        prependPadding: {
            type: Number,
            default: -1
        },
        /**
         * 前置Style
         */
        prependStyle: {
            type: String,
            default: ''
        },
        /**
         * 前置Class
         */
        prependClass: {
            type: String,
            default: ''
        },
        /**
         * 后置pandding
         */
        appendPadding: {
            type: Number,
            default: -1
        },
        /**
         * 后置Style
         */
        appendStyle: {
            type: String,
            default: ''
        },
        /**
         * 后置Class
         */
        appendClass: {
            type: String,
            default: ''
        },
        /**
         * 输入限制
         */
        showWordLimit: {
            type: Boolean,
            default: false
        },
        /**
         * 最大值
         */
        maxlength: {
            type: Number,
            default: -1
        },
        /**
         * 绑定值
         */
        modelValue: [String, Array, Number],
    },
    emits: ['on-change', 'on-prefix-icon', 'on-suffix-icon', 'on-clear', 'on-password-switch', 'on-focus', 'on-blur', 'update:modelValue'],
    setup(props, { emit, slots }) {
        const { parent } = getCurrentInstance();
        const focused = ref(false);
        const hovering = ref(false);
        const typeInner = ref(props.type);
        const focus = ref(props.autofocus);
        const focusTag = ref(props.autofocus);
        const iconWIdth = ref(25);
        const zmzInputAppend = ref(null);
        const zmzInputPrepend = ref(null)
        const zmzForm = inject('zmzForm', {});
        const zmzFormItem = inject('zmzFormItem', {});

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
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

        //绑定
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                emit('update:modelValue', val);
            }
        });

        const handleInput = (event) => {
            emit('on-change', event.target.value);
        }

        // 获取焦点
        const handleFocus = (event) => {
            focus.value = true;
            focused.value = true;
            emit('on-focus', event, model.value);
        };

        // 失去焦点
        const handleBlur = (event) => {
            emit('on-blur', event, model.value);
            focus.value = false;
            focused.value = false;
            if (parentProxyItem.value) {
                parentProxyItem.value.proxy.onValidate('blur');
            }
        };

        // 后缀公共样式
        const zmzInputSuffixStyle = computed(() => {
            let params = {}

            if (props.suffixIcon && (showClearBtn.value || showPasswordBtn.value)) {
                params['width'] = iconWIdth.value * 2 + 'px';
            }

            if (props.type == 'password' && showClearBtn.value && showPasswordBtn.value) {
                params['width'] = iconWIdth.value * 2 + 'px';
            }

            if (zmzInputAppend.value) {
                params['right'] = zmzInputAppend.value.offsetWidth + 'px';
            }

            return params;
        });

        // 前缀缀公共样式
        const zmzInputPrefixStyle = computed(() => {
            let params = {}

            if (props.suffixIcon && (showClearBtn.value || showPasswordBtn.value)) {
                params['width'] = iconWIdth.value * 2 + 'px';
            }

            if (props.type == 'password' && showClearBtn.value && showPasswordBtn.value) {
                params['width'] = iconWIdth.value * 2 + 'px';
            }

            if (zmzInputPrepend.value) {
                params['left'] = zmzInputPrepend.value.offsetWidth + 'px';
            }

            return params;
        });

        //前置样式
        const zmzInputPrependStyle = computed(() => {
            let params = {}

            if (props.prependPadding > -1) {
                params['padding-left'] = props.prependPadding + 'px';
                params['padding-right'] = props.prependPadding + 'px';
            }

            return params;
        });

        //前置样式
        const zmzInputAppendStyle = computed(() => {
            let params = {}

            if (props.appendPadding > -1) {
                params['padding-left'] = props.appendPadding + 'px';
                params['padding-right'] = props.appendPadding + 'px';
            }

            return params;
        });


        // input公共样式
        const zmzInputInputStyle = computed(() => {
            let params = {}

            if (props.suffixIcon && (showClearBtn.value || showPasswordBtn.value)) {
                params['padding-right'] = iconWIdth.value * 2 + 'px';
            }

            if (props.type == 'password' && showClearBtn.value && showPasswordBtn.value) {
                params['padding-right'] = iconWIdth.value * 2 + 'px';
            }

            return params;
        });

        // 是否显示后缀
        const isSuffix = computed(() => {
            return props.suffix && (props.suffixIcon || showClearBtn.value || showPasswordBtn.value || slots.suffix || (props.showWordLimit && props.maxlength));
        });

        // 是否显示前缀
        const isPrefix = computed(() => {
            return props.prefix && (props.prefixIcon || slots.prefix);
        });

        // 获取父元素
        const parentProxyItem = computed(() => {
            return findParent(parent, 'ZmzFormItem')
        })

        // 显示清空按钮
        const showClearBtn = computed(() => {
            return model.value && props.clearbtn && (focused.value || hovering.value);
        });

        // 显示密码按钮
        const showPasswordBtn = computed(() => {
            return model.value && props.type == 'password' && props.togglePasswordBtn;
        });

        // 显示密码图标
        const showPasswordBtnIcon = computed(() => {
            return typeInner.value === 'password' ? 'zmz-icon--eye-close' : 'zmz-icon--eye'
        });

        //公共class
        const zmzInputclass = computed(() => {
            let params = []

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-input--size-${zmzFormSize.value || props.size}`)
            }

            if (props.type == 'number') {
                params.push('zmz-input--number')
            }

            if (globalFromDisabled.value) {
                params.push('zmz-input--disabled')
            }

            if (globalFromReadonly.value) {
                params.push('zmz-input--readonly')
            }

            if (props.showPassword) {
                params.push('zmz-input--showPassword')
            }

            if (props.focusBorder && focus.value && !globalFromDisabled.value) {
                params.push('zmz-input--focus')
            }

            if (isSuffix.value) {
                params.push('zmz-input--suffix')
            }

            if (isPrefix.value) {
                params.push('zmz-input--prefix')
            }

            if (slots.prepend || slots.append) {
                params.push('zmz-input--ground')
            }

            if (slots.prepend) {
                params.push('zmz-input--ground-prepend')
            }

            if (slots.append) {
                params.push('zmz-input--ground-append')
            }

            return params;
        });

        //切换密码验证
        const handleSwitchPassword = () => {
            if (typeInner.value == 'password') {
                typeInner.value = 'text';
            } else {
                typeInner.value = 'password';
            }
            emit('on-password-switch', typeInner.value);
        };

        const clearInput = () => {
            model.value = '';
            emit('on-clear');
        };

        const suffixClick = () => {
            emit('on-suffix-icon');
        }

        const prefixClick = () => {
            emit('on-prefix-icon');
        }

        return {
            model,
            zmzInputclass,
            showClearBtn,
            showPasswordBtn,
            showPasswordBtnIcon,
            handleSwitchPassword,
            handleBlur,
            handleFocus,
            hovering,
            clearInput,
            focusTag,
            placeholderText,
            typeInner,
            suffixClick,
            zmzInputSuffixStyle,
            zmzInputInputStyle,
            zmzInputPrefixStyle,
            prefixClick,
            isSuffix,
            isPrefix,
            zmzInputAppend,
            zmzInputPrepend,
            zmzInputPrependStyle,
            zmzInputAppendStyle,
            handleInput,
            globalFromDisabled,
            globalFromReadonly
        };
    }
};
</script>
