<template>
    <div v-zmzclickoutside="bodyCloseMenus" class="zmz-cascader" ref="zmzCascader" :class="[zmzCascaderClass]"
        @mouseenter="hovering = true" @mouseleave="hovering = false" @click="handleSelectClick">
        <div class="zmz-cascader__prefix" v-if="prefix">
            <slot name="prefix">
                <i class="zmz-select__icon" :class="prefixIcon"></i>
            </slot>
        </div>
        <input type="text" class="zmz-cascader__input" readonly="readonly" :disabled="globalFromDisabled"
            v-model="inputModel" :name="name" :placeholder="placeholderText" :autocomplete="autocomplete" />
        <div class="zmz-cascader__suffix">
            <span class="zmz-cascader__clear" v-if="isClear" @click.stop="handleClear">
                <i class="zmz-cascader__icon zmz-icon--error"></i>
            </span>
            <span class="zmz-cascader__toggle" v-else>
                <i class="zmz-cascader__icon zmz-icon--arrow-bottom"></i>
            </span>
        </div>
        <zmz-teleportdom :arrow="arrow" :teleport-dom="teleportDom" :parent-ref="zmzCascader" :visible="currentVisible"
            :placement="placement" :teleport="teleport" :class-name="[zmzTeleportdomClass, teleportClass]"
            :offset="offset" :popper-options="popperOptions" transition-name="zmz-fold-top"
            @on-close-before="handleBeforeLeave" @on-close="handleLeave" @on-close-after="handleAfterLeave"
            @on-open-before="handleBeforeEnter" @on-open="handleEnter" @on-open-after="handleAfterEnter">
            <div class="zmz-cascader__dropdown" ref="zmzCascaderContainer">
                <div class="zmz-cascader__panel" v-for="(item, index) in cascaderPanelData" :key="index">
                    <div class="zmz-cascader__item" v-for="(items, indexs) in item"
                        @click="handleItemClick($event, index, items)" :key="indexs"
                        :class="{ 'zmz-cascader__item--active': items.selected, 'zmz-cascader__item--disabled': items.disabled }">
                        <div class="zmz-cascader__item__text">
                            <slot :item="items">{{ items.label }}</slot>
                        </div>
                        <i v-if="items.children" class="zmz-cascader__item__icon zmz-icon--arrow-right"></i>
                    </div>
                </div>
            </div>
        </zmz-teleportdom>
    </div>
</template>
<script>
import { computed, ref, getCurrentInstance, inject } from 'vue';
import { findParent } from '../../../../utils/find.js';
import ZmzTeleportdom from '../../../teleportdom/show.vue';

export default {
    name: 'ZmzCascader',
    components: {
        ZmzTeleportdom
    },
    props: {
        /**
         * 配置
         */
        options: {
            type: Array,
            defautl() {
                return []
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
         * 自动完成
         */
        autocomplete: {
            type: String,
            default: 'off'
        },
        // 占位符
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
         * 清空按钮
         */
        clearbtn: {
            type: Boolean,
            default: false
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
         * 绑定值
         */
        modelValue: {
            type: Array,
            defautl() {
                return []
            }
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
            default: 'bottom-start'
        },
        /**
         * 是否穿梭
         */
        teleport: {
            type: Boolean,
            default: true
        },
        /**
         * 穿梭类名
         */
        teleportClass: {
            type: [Array, String],
            default: ''
        },
        /**
         * 穿梭节点
         */
        teleportDom: {
            type: String,
            default: 'body'
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
        theme: {
            type: String,
            default: 'white',
            validator(value) {
                return ['black', 'white'].includes(value)
            }
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
    },
    emits: ['update:modelValue', 'on-clear', 'on-change', 'on-blur', 'on-expand-change', 'on-close-before', 'on-close', 'on-close-after', 'on-open-before', 'on-open', 'on-open-after'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const cascaderData = ref([props.options]);
        const currentVisible = ref(false);
        const inputModel = ref('');
        const hovering = ref(false);
        const zmzCascader = ref(null);
        const zmzCascaderContainer = ref(null);
        const zmzForm = inject('zmzForm', {});
        const zmzFormItem = inject('zmzFormItem', {});
        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const zmzTeleportdomClass = computed(() => {
            let params = ['zmz-teleportdom--cascader']
            if (props.theme) {
                params.push(`zmz-teleportdom--cascader-${props.theme}`);
            }
            return params;
        })

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                emit('update:modelValue', val);
                if (parentProxyItemForm.value) {
                    parentProxyItemForm.value.proxy.onValidate();
                }
            }
        });

        const parentProxyItemForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        const getCascaderList = () => {
            cascaderData.value = [props.options];
            let label = [];
            var getCascader = function (data) {
                data.forEach(item => {
                    item.selected = false;
                    model.value.forEach(items => {
                        if (item.value == items) {
                            item.selected = true;
                            if (item.children) {
                                cascaderData.value.push(item.children);
                            }
                            label.push(item.label);
                        }
                    });
                    if (item.children) {
                        getCascader(item.children);
                    }
                });
            };
            getCascader(props.options);
            inputModel.value = format(label);
            return cascaderData.value;
        };

        const cascaderPanelData = computed(() => {
            return getCascaderList();
        });

        const format = data => {
            return data.join('/');
        };

        const handleItemClick = (event, index, item) => {
            if (item.disabled) return;
            event.stopPropagation();
            emit('on-change', item.value);
            if (cascaderPanelData.value.length !== 1 + index) {
                cascaderPanelData.value.splice(index + 1, cascaderPanelData.value.length - 1);
            }

            cascaderPanelData.value[index].map(child => {
                child['selected'] = false;
            });
            item['selected'] = true;
            if (item.children) {
                cascaderPanelData.value.push(item.children);
            } else {
                let newModel = [];
                cascaderPanelData.value.forEach(item => {
                    item.forEach(items => {
                        if (items.selected) {
                            newModel.push(items.value);
                        }
                    });
                });
                emit('on-expand-change', newModel);
                model.value = newModel;
                currentVisible.value = false;
            }
        };

        const handleSelectClick = () => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            currentVisible.value = !currentVisible.value;
            if (currentVisible.value) {
                getCascaderList();
            }
        };

        const isClear = computed(() => {
            return inputModel.value && props.clearbtn && hovering.value && !currentVisible.value;
        });

        const handleClear = () => {
            inputModel.value = '';
            cascaderData.value.forEach(item => {
                item.forEach(items => {
                    items.selected = false;
                });
            });
            cascaderData.value = [props.options];
            emit('update:modelValue', []);
            emit('on-clear');
        };

        // 公共样式
        const zmzCascaderClass = computed(() => {
            let params = []

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-cascader--size-${zmzFormSize.value || props.size}`)
            }

            if (globalFromDisabled.value) {
                params.push(`zmz-cascader--disabled`)
            }

            if (currentVisible.value) {
                params.push(`zmz-cascader--open`)
            }

            if (globalFromReadonly.value) {
                params.push(`zmz-cascader--readonly`)
            }

            if (hovering.value && !globalFromDisabled.value) {
                params.push(`zmz-cascader--focus`)
            }

            if (props.suffix) {
                params.push(`zmz-cascader--suffix`)
            }

            if (props.prefix) {
                params.push(`zmz-cascader--prefix`)
            }
            
            return params;
        });

        // 点击关闭
        const bodyCloseMenus = e => {
            if (zmzCascader.value && !zmzCascader.value.contains(e.target)) {
                if (currentVisible.value == true) {
                    emit('on-blur', true);
                    currentVisible.value = false;
                    if (parentProxyItemForm.value) {
                        parentProxyItemForm.value.proxy.onValidate();
                    }
                }
            }
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

        const placeholderText = computed(() => {
            return props.placeholder ? props.placeholder : zmzFormItem.placeholderPrefixTextSelect ? zmzFormItem.placeholderPrefixTextSelect.value : '';
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
            cascaderData,
            currentVisible,
            handleSelectClick,
            inputModel,
            isClear,
            hovering,
            handleItemClick,
            handleClear,
            zmzCascaderClass,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            zmzCascader,
            zmzCascaderContainer,
            cascaderPanelData,
            bodyCloseMenus,
            zmzTeleportdomClass,
            placeholderText,
            globalFromDisabled
        };
    }
};
</script>
