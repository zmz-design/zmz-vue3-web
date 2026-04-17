<template>
    <div v-zmzclickoutside="bodyCloseMenus" class="zmz-timepicker" ref="zmzTimepicker" :class="[zmzTimepickerClass]">
        <div class="zmz-timepicker__wrap" @click="handleTimepicker" :class="[zmzTimepickerWrapClass]"
            @mouseenter="hovering = true" @mouseleave="hovering = false">
            <span class="zmz-timepicker__prefix" v-if="prefix"><i
                    class="zmz-timepicker__icon zmz-icon--time"></i></span>
            <template v-if="type == 'timeselect' || type == 'time'">
                <input type="text" class="zmz-timepicker__input" @change="handleChange" @input="handleInput"
                    @focus="handleFocus" @blur="handleBlur" :disabled="globalFromDisabled"
                    :readonly="globalFromReadonly" :placeholder="placeholderText" :value="modelTimeSelectInput"
                    ref="zmzDatepickerInput" />
            </template>
            <template v-if="type == 'timerange'">
                <input type="text" class="zmz-timepicker__input" @change="handleChange" @input="handleInput"
                    @focus="handleFocus" @blur="handleBlur" :disabled="globalFromDisabled"
                    :readonly="globalFromReadonly" :placeholder="startPlaceholder" :value="modelTimeRangeStartInput"
                    ref="zmzDatepickerInput" />
                <span class="zmz-timepicker__division">{{ divisionRange }}</span>
                <input type="text" class="zmz-timepicker__input" @change="handleChange" @input="handleInput"
                    @focus="handleFocus" @blur="handleBlur" :disabled="globalFromDisabled"
                    :readonly="globalFromReadonly" :placeholder="endPlaceholder" :value="modelTimeRangeEndInput"
                    ref="zmzDatepickerInput" />
            </template>
            <span class="zmz-timepicker__suffix" v-if="suffix">
                <i class="zmz-timepicker__icon zmz-icon--error" v-if="showClear" @click.stop="clearInput"></i>
            </span>
        </div>
        <zmz-teleportdom :arrow="arrow" :teleport-dom="teleportDom" :parent-ref="zmzTimepicker"
            :visible="currentVisible" :placement="placement" :teleport="teleport"
            :class-name="[zmzTeleportdomClass, teleportClass]" :offset="offset" :popper-options="popperOptions"
            transition-name="zmz-fold-top" @on-close-before="handleBeforeLeave" @on-close="handleLeave"
            @on-close-after="handleAfterLeave" @on-open-before="handleBeforeEnter" @on-open="handleEnter"
            @on-open-after="handleAfterEnter">
            <div class="zmz-timepicker__dropdown" ref="zmzTimepickerPanel" @click="handlePanelClick">
                <div class="zmz-timepicker__content">
                    <zmz-timepicker-select @on-change="handleOnChangeSelect" v-model="model" v-model:time="timeListData"
                        :options="options" v-if="type == 'timeselect'"></zmz-timepicker-select>
                    <zmz-timepicker-time v-model="model" :default-value="modelDefaultValue"
                        v-if="type == 'time'"></zmz-timepicker-time>
                    <zmz-timepicker-range v-model="model" :default-value="modelDefaultValue"
                        v-if="type == 'timerange'"></zmz-timepicker-range>
                </div>
                <div class="zmz-timepicker__footer" v-if="type == 'time' || type == 'timerange'">
                    <zmz-button text size="mini" @click.stop="handleCanel">取消</zmz-button>
                    <zmz-button text type="primary" size="mini" @click.stop="handleConfirm">确认</zmz-button>
                </div>
            </div>
        </zmz-teleportdom>
    </div>
</template>

<script>
import { ref, computed, getCurrentInstance, inject } from 'vue';
import ZmzTimepickerTime from './zmz-timepicker-time.vue';
import ZmzTimepickerRange from './zmz-timepicker-range.vue';
import ZmzTimepickerSelect from './zmz-timepicker-select.vue';
import ZmzTeleportdom from '../../../teleportdom/if.vue';
import { determineTimeMinutes, determineTimeFormat, dateZeroFill, formatDate, updateDate, getHMS } from '../../../../utils/date.js';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzTimepicker',
    components: {
        ZmzTimepickerTime,
        ZmzTimepickerRange,
        ZmzTimepickerSelect,
        ZmzTeleportdom
    },
    props: {
        /**
         * 类型
         */
        type: {
            type: String,
            default: 'time',
            validator(value) {
                return ['time', 'timeselect', 'timerange'].includes(value)
            }
        },
        /**
         * 配置
         */
        options: {
            type: Object,
            default: () => {
                return {
                    start: '00:00',
                    step: '00:20',
                    end: '24:00'
                };
            }
        },
        /**
         * 提示
         */
        placeholder: {
            type: String,
            default: ''
        },
        /**
         * 分隔符
         */
        divisionRange: {
            type: String,
            default: '至'
        },
        /**
         * 开始提示
         */
        startPlaceholder: {
            type: String,
            default: ''
        },
        /**
         * 结束提示
         */
        endPlaceholder: {
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
         * 绑定值
         */
        modelValue: {
            type: [String, Number, Date, Array],
            default() {
                return new Date()
            }
        },
        /**
         * 格式
         */
        format: {
            type: String,
            default: 'HH:mm:ss'
        },
        /**
         * 清除按钮
         */
        clearbtn: {
            type: Boolean,
            default: true
        },
        appendToBody: {
            type: Boolean,
            default: false
        },
        /**
         *尺寸
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['large', 'medium', 'small', 'mini', 'default'].includes(value)
            }
        },
        /**
         * 默认值
         */
        defaultValue: {
            type: [Number, Date],
            default() {
                return new Date()
            }
        },
        /**
         * 前缀
         */
        prefix: {
            type: Boolean,
            default: true
        },
        /**
         * 后缀
         */
        suffix: {
            type: Boolean,
            default: true
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
    },
    emits: ['update:modelValue', 'on-input', 'on-focus', 'on-blur', 'on-canel', 'on-confirm', 'on-click', 'on-change', 'on-close-before', 'on-close', 'on-close-after', 'on-open-before', 'on-open', 'on-open-after'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const hovering = ref(false);
        const focused = ref(false);
        const currentVisible = ref(false);
        const zmzTimepicker = ref(null);
        const zmzDatepickerInput = ref(null);
        const zmzTimepickerPanel = ref(null);
        const zmzForm = inject('zmzForm', {});
        const zmzFormItem = inject('zmzFormItem', {});
        const modelTimeOld = ref(props.modelValue);
        const disableCloseAppendToBody = ref(false);

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const modelDefaultValue = computed(() => {
            if (props.defaultValue) {
                return new Date(props.defaultValue)
            }
            return new Date()
        })

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                emit('update:modelValue', val);
                emit('on-change', val);

                if (parentProxyForm.value) {
                    parentProxyForm.value.proxy.onValidate();
                }
            }
        });

        const parentProxyForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        // 包装时间格式
        const modelTimeSelectInput = computed(() => {
            if (props.format && props.type == 'time') {
                return model.value && formatDate(model.value, props.format);
            } else {
                return model.value;
            }
        });
        // 包装时间格式开始
        const modelTimeRangeStartInput = computed(() => {
            if (props.format && props.type == 'timerange') {
                return model.value[0] && formatDate(model.value[0], props.format);
            } else {
                return model.value[0];
            }
        });
        // 包装时间格式结束
        const modelTimeRangeEndInput = computed(() => {
            if (props.format && props.type == 'timerange') {
                return model.value[1] && formatDate(model.value[1], props.format);
            } else {
                return model.value[1];
            }
        });

        const handleOnChangeSelect = time => {
            model.value = time;
            emit('on-change', time);
            currentVisible.value = false;
        };

        // 确认
        const handleConfirm = () => {
            modelTimeOld.value = model.value;
            emit('on-confirm', model.value);
            currentVisible.value = false;
        };

        // 取消
        const handleCanel = () => {
            model.value = modelTimeOld.value;
            emit('on-canel', model.value);
            currentVisible.value = false;
        };

        // 是否显示日历
        const handleTimepicker = () => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            currentVisible.value = !currentVisible.value;
        };

        const clearInput = () => {
            model.value = '';
            modelTimeOld.value = '';
            currentVisible.value = false;
        };

        const handleChange = e => {
            emit('on-change', e.target.value);
        };

        const handleInput = e => {
            emit('on-input', e);
        };

        // 获取焦点
        const handleFocus = e => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            focused.value = true;
            emit('on-focus', e);
        };

        // 失去焦点
        const handleBlur = e => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            if (props.type == 'timeselect') {
                if (determineTimeMinutes(e.target.value)) {
                    model.value = timeListData.value.find(item => item === e.target.value);
                }
                e.target.value = model.value
            } else if (props.type == 'time') {
                if (determineTimeFormat(e.target.value)) {
                    const { hour, minute, second } = getHMS(e.target.value);
                    model.value = updateDate(new Date(modelDefaultValue.value), hour, minute, second);
                }
                e.target.value = formatDate(model.value, props.format)
            }
            // 此处有bug 如果clearbtn为false 不能正确输入显示
            focused.value = false;
            emit('on-blur', e);
        };

        const zmzTimepickerClass = computed(() => {
            let params = [];
            if (globalFromDisabled.value) {
                params.push('zmz-timepicker--disabled');
            }

            if (globalFromReadonly.value) {
                params.push('zmz-timepicker--readonly');
            }

            if (props.type) {
                params.push(`zmz-timepicker--${props.type}`)
            }

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-timepicker--size-${zmzFormSize.value || props.size}`)
            }

            if (currentVisible.value) {
                params.push('zmz-timepicker--focus');
            }

            if (props.prefix) {
                params.push('zmz-timepicker--prefix');
            }

            if (props.suffix || props.clearbtn) {
                params.push('zmz-timepicker--suffix');
            }

            return params;
        });

        const zmzTimepickerWrapClass = computed(() => {
            let params = [];
            return params;
        });

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

        // 触发关闭
        const bodyCloseMenus = e => {
            if (disableCloseAppendToBody.value) {
                disableCloseAppendToBody.value = false;
                return false;
            }
            if (zmzTimepicker.value && !zmzTimepicker.value.contains(e.target)) {
                if (currentVisible.value) {
                    currentVisible.value = false;
                    modelTimeOld.value = model.value;
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
            }
        };

        // timeselec数据
        const timeListData = computed(() => {
            var startTime = props.options.start.split(':');
            var startDate = parseInt(startTime[0] * 60) + parseInt(startTime[1]);
            var endTime = props.options.end.split(':');
            var endDate = parseInt(endTime[0] * 60) + parseInt(endTime[1]);
            var stepTime = props.options.step.split(':');
            var stepDate = parseInt(stepTime[0] * 60) + parseInt(stepTime[1]);
            var timeArr = [];
            var hours = endDate - startDate;
            for (var i = startDate; i <= hours; i++) {
                var str = '';
                if (i % stepDate == 0) {
                    str = dateZeroFill(parseInt(i / 60)) + ':' + dateZeroFill(i % 60);
                    if (str === '24:00') {
                        timeArr.push('23:59');
                    } else {
                        timeArr.push(str);
                    }
                }
            }
            return timeArr;
        });

        // 显示清除按钮
        const showClear = computed(() => {
            return (
                !globalFromDisabled.value &&
                !globalFromReadonly.value &&
                props.clearbtn &&
                (focused.value || hovering.value) &&
                ((model.value && (props.type == '' || props.type == 'timeselect')) || (props.type == 'timerange'))
            );
        });

        const handlePanelClick = () => {
            if (props.appendToBody) disableCloseAppendToBody.value = true;
        }

        const zmzTeleportdomClass = computed(() => {
            let params = ['zmz-teleportdom--timepicker']
            return params;
        })

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

        return {
            handleConfirm,
            handleCanel,
            model,
            showClear,
            currentVisible,
            hovering,
            handleTimepicker,
            clearInput,
            handleChange,
            handleInput,
            handleFocus,
            handleBlur,
            zmzDatepickerInput,
            // 范围
            zmzTimepickerClass,
            bodyCloseMenus,
            zmzTimepicker,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            handleOnChangeSelect,
            zmzTeleportdomClass,
            modelTimeSelectInput,
            modelTimeRangeStartInput,
            modelTimeRangeEndInput,
            zmzTimepickerPanel,
            zmzTimepickerWrapClass,
            timeListData,
            modelDefaultValue,
            handlePanelClick,
            placeholderText,
            globalFromReadonly,
            globalFromDisabled
        };
    }
};
</script>
