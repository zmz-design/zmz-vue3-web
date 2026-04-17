<template>
    <div v-zmzclickoutside="bodyCloseMenus" class="zmz-select" ref="zmzSelect" :class="[zmzSelectClass]"
        @mouseenter="hovering = true" @mouseleave="hovering = false">
        <div class="zmz-select__input" @click="handleClick" :class="[zmzSelectInput]">
            <div class="zmz-select__input__prefix" v-if="prefix">
                <slot name="prefix">
                    <i class="zmz-select__input__prefix__icon" :class="prefixIcon"></i>
                </slot>
            </div>
            <input type="text" class="zmz-select__input__inner" readonly="readonly" :value="selectLabel" :name="name"
                :placeholder="placeholderText" :autocomplete="autocomplete" />
            <div class="zmz-select__input__suffix" v-if="suffix">
                <span class="zmz-select__input__clear" v-if="isClear" @click.stop="clearInput">
                    <slot name="clear">
                        <i class="zmz-select__icon zmz-icon--error"></i>
                    </slot>
                </span>
                <span class="zmz-select__input__toggle" v-else>
                    <slot name="suffix">
                        <i class="zmz-select__icon zmz-icon--arrow-bottom"></i>
                    </slot>
                </span>
            </div>
        </div>

        <zmz-teleportdom :arrow="arrow" :offset="offset" :popper-options="popperOptions" :teleport-dom="teleportDom"
            :parent-ref="zmzSelect" :visible="currentVisible" :placement="placement" :teleport="teleport"
            :class-name="[zmzTeleportdomClass, teleportClass]" transition-name="zmz-fold-top"
            @on-mouseenter="handleMouseenter" @on-mouseleave="handleMouseleave" @on-close-before="handleBeforeLeave"
            @on-close="handleLeave" @on-close-after="handleAfterLeave" @on-open-before="handleBeforeEnter"
            @on-open="handleEnter" @on-open-after="handleAfterEnter" :style="[zmzSelectTeleportStyle]">
            <div class="zmz-select__dropdown" ref="zmzSelectContainer" v-show="currentVisible">
                <slot></slot>
                <template v-if="!isEmpty">
                    <div class="zmz-select__empty">
                        <slot name="empty">{{ emptyText }}</slot>
                    </div>
                </template>
            </div>
        </zmz-teleportdom>
    </div>
</template>
<script>
import { computed, provide, ref, getCurrentInstance, onMounted, inject } from 'vue';
import { findParent } from '../../../../utils/find.js';
import ZmzTeleportdom from '../../../teleportdom/show.vue';

export default {
    name: 'ZmzSelect',
    componentName: 'ZmzSelect',
    components: {
        ZmzTeleportdom
    },
    props: {
        /**
         * 占位符
         */
        placeholder: {
            type: String,
            default: ''
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
         * 清除按钮
         */
        clearbtn: {
            type: Boolean,
            default: false
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
            default: false
        },
        /**
         * 后缀图标
         */
        prefixIcon: {
            type: String,
            default: ''
        },
        /**
         * 原生的自动完成功能
         */
        autocomplete: {
            type: String,
            default: 'off'
        },
        /**
         * 双向绑定
         */
        modelValue: [String, Number],
        /**
         * 打开
         */
        open: {
            type: Boolean,
            default: false
        },
        /**
         * 空
         */
        emptyText: {
            type: String,
            default: '暂无数据'
        },
        /**
         * 辅助三角
         */
        arrow: {
            type: Boolean,
            default: true
        },
        /**
         * 弹出位置
         */
        placement: {
            type: String,
            default: 'bottom'
        },
        /**
         * 是否穿梭
         */
        teleport: {
            type: Boolean,
            default: true
        },
        /**
         * 穿梭节点
         */
        teleportDom: {
            type: String,
            default: 'body'
        },
        /**
         * 穿梭类名
         */
        teleportClass: {
            type: [Array, String],
            default: ''
        },
        /**
         * 偏移
         */
        offset: {
            type: Array,
            default() {
                return [0, 10]
            }
        },
        /**
         * 配置
         */
        popperOptions: {
            type: Array,
            default() {
                return []
            }
        },
    },
    emits: ['on-change', 'on-focus', 'on-clear', 'on-blur', 'update:modelValue', 'on-close-before', 'on-close', 'on-close-after', 'on-open-before', 'on-open', 'on-open-after'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const selectLabel = ref('');
        const zmzFormItem = inject('zmzFormItem', {});
        const zmzForm = inject('zmzForm', {});
        const zmzSelect = ref(null);
        const zmzSelectContainer = ref(null);
        const isFocus = ref(false);
        const hovering = ref(false);
        const timeout = ref(null);
        const currentVisible = ref(false);
        const zmzSelectList = ref([])

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                onGroupChange(val);
            }
        });

        onMounted(() => {
            if (props.open) {
                currentVisible.value = props.open;
            }
        });

        const placeholderText = computed(() => {
            return props.placeholder ? props.placeholder : zmzFormItem.placeholderPrefixTextSelect ? zmzFormItem.placeholderPrefixTextSelect.value : '';
        });

        const parentProxyForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        const onGroupChange = val => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            isFocus.value = false;
            emit('update:modelValue', val);
            emit('on-change', val);
            emit('on-blur', true);
            if (parentProxyForm.value) {
                parentProxyForm.value.proxy.onValidate();
            }
        };

        const zmzSelectClass = computed(() => {
            let params = [];

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-select--size-${zmzFormSize.value || props.size}`)
            }

            if (currentVisible.value) {
                params.push('zmz-select--open');
            }

            if (globalFromDisabled.value) {
                params.push('zmz-select--disabled');
            }

            if (globalFromReadonly.value) {
                params.push('zmz-select--readonly');
            }

            if (isFocus.value) {
                params.push('zmz-select--focus');
            }
            return params;
        });

        const zmzTeleportdomClass = computed(() => {
            let params = ['zmz-teleportdom--select']
            if (props.effect) {
                params.push(`zmz-teleportdom--tooltip-${props.effect}`);
            }

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-teleportdom--select--size-${zmzFormSize.value || props.size}`)
            }
            return params;
        })

        const zmzSelectInput = computed(() => {
            let params = []
            if (props.suffix) {
                params.push(`zmz-select__input--suffix`);
            }

            if (props.prefix) {
                params.push(`zmz-select__input--prefix`);
            }
            return params;
        })

        // 点击打开
        const handleClick = () => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            isFocus.value = true;
            if (currentVisible.value) {
                currentVisible.value = false;
                if (parentProxyForm.value) {
                    parentProxyForm.value.proxy.onValidate();
                }
            } else {
                emit('on-focus', true);
                currentVisible.value = true;
            }
        };

        const bodyCloseMenus = e => {
            if (zmzSelect.value && !zmzSelect.value.contains(e.target)) {
                isFocus.value = false;
                if (currentVisible.value == true) {
                    emit('on-blur', true);
                    currentVisible.value = false;
                    if (parentProxyForm.value) {
                        parentProxyForm.value.proxy.onValidate();
                    }
                }
            }
        };

        // 为空判断
        const isEmpty = computed(() => {
            return zmzSelectList.value.length ? true : false
        });

        // 是否显示清除按钮
        const isClear = computed(() => {
            return selectLabel.value && props.clearbtn && hovering.value && !currentVisible.value;
        });

        // 清除
        const clearInput = () => {
            selectLabel.value = '';
            emit('update:modelValue', '');
            emit('on-clear');
        };

        // 关闭之前
        const handleBeforeLeave = () => {
            emit('on-close-before');
        };

        // 关闭中
        const handleLeave = () => {
            emit('on-close');
        };

        // 关闭之后
        const handleAfterLeave = () => {
            emit('on-close-after');
        };

        // 打开前
        const handleBeforeEnter = () => {
            emit('on-open-before');
        };
        // 打开中
        const handleEnter = () => {
            emit('on-open');
        };

        // 打开之后
        const handleAfterEnter = () => {
            emit('on-open-after');
        };

        const handleMouseenter = () => {
            if (props.trigger === 'custom') return false;
            if (props.trigger !== 'hover') {
                return false;
            }
            if (timeout.value) {
                clearTimeout(timeout.value);
                timeout.value = null
            }

            timeout.value = setTimeout(() => {
                currentVisible.value = true;
            }, 250);
        }

        const handleMouseleave = () => {
            if (props.trigger === 'custom') return false;
            if (props.trigger !== 'hover') {
                return false;
            }
            if (timeout.value) {
                clearTimeout(timeout.value);
                timeout.value = null
                timeout.value = setTimeout(() => {
                    currentVisible.value = false;
                }, 150);
            }
        }

        const zmzSelectTeleportStyle = computed(() => {
            let params = {}
            if (zmzSelectContainer.value && currentVisible.value) {
                let attr = zmzSelect.value.getBoundingClientRect();
                params['min-width'] = attr.width + 'px';
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

        const updateDom = () => {
        }

        provide('zmzSelect', {
            currentVisible,
            updateDom: updateDom,
            zmzSelectList: zmzSelectList
        });

        return {
            model,
            handleClick,
            selectLabel,
            currentVisible,
            isEmpty,
            hovering,
            clearInput,
            isClear,
            zmzSelectClass,
            zmzSelect,
            zmzSelectContainer,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            onGroupChange,
            bodyCloseMenus,
            placeholderText,
            handleMouseenter,
            handleMouseleave,
            zmzSelectTeleportStyle,
            globalFromDisabled,
            globalFromReadonly,
            zmzTeleportdomClass,
            zmzSelectInput
        };
    }
};
</script>
