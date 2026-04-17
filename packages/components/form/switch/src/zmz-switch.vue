<template>
    <div class="zmz-switch" @click="headleClick" :class="[zmzSwitchClass]" :style="[zmzSwitchStyle]">
        <input class="zmz-switch__input" type="hidden" :value="model" :name="name" />
        <div class="zmz-switch__wrap" :style="[zmzSwitchStyle, zmzSwitchWrapStyle]">
            <span class="zmz-switch__wrap__dot" :style="[zmzSwitchDotStyle]">
                <template v-if="loading">
                    <i class="zmz-switch__wrap__dot__icon zmz-icon--loading"></i>
                </template>
                <template v-if="(openIcon || closeIcon) && !loading">
                    <i :class="zmzSwitchDotIcon"></i>
                </template>
            </span>
            <div class="zmz-switch__wrap__text" :style="[zmzSwitchStyle]">
                <slot name="open" v-if="model === openValue"></slot>
                <slot name="close" v-if="model === closeValue"></slot>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import { getCurrentInstance, computed, inject } from 'vue';
import { unitDefaultCompletion } from '../../../../utils/unit.js';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzSwitch',
    props: {
        /**
         * 是否禁用
         */
        name: {
            type: String,
        },
        /**
         * 是否禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 是否只读
         */
        readonly: {
            type: Boolean,
            default: false
        },
        /**
         * 双向绑定
         */
        modelValue: {
            type: [Boolean, String, Number],
            default: false
        },
        /**
         * 尺寸
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['large', 'medium', 'default', 'small', 'mini'].includes(value)
            }
        },
        /**
         * 打开值
         */
        openValue: {
            type: [Boolean, String, Number],
            default: true
        },
        /**
         * 关闭值
         */
        closeValue: {
            type: [Boolean, String, Number],
            default: false
        },
        /**
         * 打开颜色
         */
        openColor: {
            type: String,
            default: ''
        },
        /**
         * 关闭颜色
         */
        closeColor: {
            type: String,
            default: ''
        },
        /**
         * 打开border颜色
         */
        openBorderColor: {
            type: String,
            default: ''
        },
        /**
         * 关闭border颜色
         */
        closeBorderColor: {
            type: String,
            default: ''
        },
        /**
         * 打开icon
         */
        openIcon: {
            type: String,
            default: ''
        },
        /**
         * 关闭icon
         */
        closeIcon: {
            type: String,
            default: ''
        },
        /**
         * 打开icon颜色
         */
        openIconColor: {
            type: String,
            default: ''
        },
        /**
         * 关闭icon
         */
        closeIconColor: {
            type: String,
            default: ''
        },
        /**
         * 打开dot颜色
         */
        openDotColor: {
            type: String,
            default: ''
        },
        /**
         * 关闭dot颜色
         */
        closeDotColor: {
            type: String,
            default: ''
        },
        /**
         * 加载
         */
        loading: {
            type: Boolean,
            default: false
        },
        /**
         * 宽度
         */
        width: {
            type: [String, Number],
            default: ''
        },
        /**
         * 打开前阻止
         */
        beforeChange: {
            type: Function,
            default() {
                return 'Default function'
            }
        }
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const zmzForm = inject('zmzForm', {});

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const handleChange = () => {
            const checked = model.value === props.openValue ? props.closeValue : props.openValue;
            model.value = checked;
            emit('on-change', checked);
            if (findParent(parent, 'ZmzFormItem')) {
                findParent(parent, 'ZmzFormItem').proxy.onValidate();
            }
        };

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        const headleClick = (event) => {
            event.preventDefault();
            if (globalFromDisabled.value || globalFromReadonly.value || props.loading) return;
            if (typeof props.beforeChange === 'function' && Object.prototype.toString.call(props.beforeChange()) === '[object Promise]') {
                props.beforeChange().then(() => {
                    handleChange()
                });
            } else {
                handleChange()
            }
        };

        // 公共类名
        const zmzSwitchClass = computed(() => {
            let params = [];

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-switch--size-${zmzFormSize.value || props.size}`);
            }

            if (model.value === props.openValue) {
                params.push('zmz-switch--checked');
            }

            if (globalFromDisabled.value) {
                params.push('zmz-switch--disabled');
            }

            if (globalFromReadonly.value) {
                params.push('zmz-switch--readonly');
            }

            if (props.loading) {
                params.push('zmz-switch--loading');
            }

            return params;
        });

        // 公共样式
        const zmzSwitchStyle = computed(() => {
            let params = {};

            if (props.width) {
                params['width'] = unitDefaultCompletion(props.width);
            }

            return params;
        });

        // 容器样式
        const zmzSwitchWrapStyle = computed(() => {
            let params = {};

            if (props.openColor || props.closeColor) {
                params['background'] = model.value === props.openValue ? props.openColor : props.closeColor;
                params['border-color'] = model.value === props.openValue ? props.openColor : props.closeColor;
            }

            if (props.openBorderColor || props.closeBorderColor) {
                params['border-color'] = model.value === props.openValue ? props.openBorderColor : props.closeBorderColor;
            }

            return params;
        });

        // dot图标
        const zmzSwitchDotIcon = computed(() => {
            let params = '';

            if (props.openIcon || props.closeIcon) {
                params = model.value === props.openValue ? props.openIcon : props.closeIcon;
            }

            return params;
        });

        // dot颜色
        const zmzSwitchDotStyle = computed(() => {
            let params = {};

            if (props.openDotColor || props.closeDotColor) {
                params['background'] = model.value === props.openValue ? props.openDotColor : props.closeDotColor;
            }

            if (props.openIconColor || props.closeIconColor) {
                params['color'] = model.value === props.openValue ? props.openIconColor : props.closeIconColor;
            }

            return params;
        });

        // 全局禁用
        const globalFromDisabled = computed(() => {
            return (zmzForm && zmzForm.disabled) ? zmzForm.disabled : props.disabled;
        })

        // 全局禁用
        const globalFromReadonly = computed(() => {
            return (zmzForm && zmzForm.readonly) ? zmzForm.readonly : props.readonly;
        })

        return {
            headleClick,
            zmzSwitchClass,
            model,
            zmzSwitchStyle,
            zmzSwitchWrapStyle,
            zmzSwitchDotIcon,
            zmzSwitchDotStyle
        };
    }
};
</script>
