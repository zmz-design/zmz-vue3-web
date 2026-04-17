<template>
    <div v-zmzclickoutside="bodyCloseMenus" class="zmz-datepicker" ref="zmzDatepicker" :class="[zmzDatepickerClass]">
        <!-- //显示框 -->
        <div class="zmz-datepicker__wrap" @click="handleCalendar" :class="[zmzDatepickerWrapClass]"
            @mouseenter="hovering = true" @mouseleave="hovering = false">
            <span class="zmz-datepicker__prefix" v-if="prefix"><i
                    class="zmz-datepicker__icon zmz-icon--calendar"></i></span>
            <template v-if="type == 'daterange' || type == 'datetimerange' || type == 'monthrange'">
                <input type="text" class="zmz-datepicker__input" @change="handleChange" @input="handleInput"
                    @focus="handleFocus" @blur="handleBlur" :disabled="globalFromDisabled"
                    :readonly="globalFromReadonly" :placeholder="startPlaceholder" :value="modelStartInput" />
                <span class="zmz-datepicker__division">{{ divisionRange }}</span>
                <input type="text" class="zmz-datepicker__input" @change="handleChange" @input="handleInput"
                    @focus="handleFocus" @blur="handleBlur" :disabled="globalFromDisabled"
                    :readonly="globalFromReadonly" :placeholder="endPlaceholder" :value="modelEndInput" />
            </template>
            <template v-else>
                <input type="text" class="zmz-datepicker__input" @change="handleChange" @input="handleInput"
                    @focus="handleFocus" @blur="handleBlur" :disabled="globalFromDisabled"
                    :readonly="globalFromReadonly" :placeholder="placeholderText" :value="modelInput" />
            </template>
            <span class="zmz-datepicker__suffix" v-if="suffix"><i class="zmz-datepicker__icon zmz-icon--error"
                    v-if="showClear" @click.stop="handleClear"></i></span>
        </div>
        <!-- //日期选择 -->
        <zmz-teleportdom :arrow="arrow" :teleport-dom="teleportDom" :parent-ref="zmzDatepicker"
            :visible="currentVisible" :placement="placement" :teleport="teleport"
            :class-name="[zmzTeleportdomClass, teleportClass]" :offset="offset" :popper-options="popperOptions"
            transition-name="zmz-fold-top" @on-close-before="handleBeforeLeave" @on-close="handleLeave"
            @on-close-after="handleAfterLeave" @on-open-before="handleBeforeEnter" @on-open="handleEnter"
            @on-open-after="handleAfterEnter">
            <div class="zmz-datepicker__panel" :class="[zmzDatepickerPanelClass]" ref="zmzDatepickerContainer"
                @click="handlePanelClick">
                <div class="zmz-datepicker__panel__wrap">
                    <div class="zmz-datepicker__panel__wrap__sidebar" v-if="shortcut.length">
                        <zmz-scrollbar class="zmz-datepicker__scrollbar" ref="zmzDatepickerTimeHour">
                            <div class="zmz-datepicker__panel__wrap__sidebar__item" v-for="(item, index) in shortcut"
                                :key="index" @click="handleShortcut(item)">
                                <zmz-button text :disabled="item.disabled">{{ item.text }}</zmz-button>
                            </div>
                        </zmz-scrollbar>
                    </div>
                    <div class="zmz-datepicker__panel__wrap__content">
                        <div class="zmz-datepicker__panel__wrap__content__header"
                            v-if="type == 'datetime' || type == 'datetimerange'">
                            <template v-if="type == 'datetime'">
                                <zmz-datepicker-time v-model="model" v-model:old="modelOld"
                                    @on-blur="hanldeOnBlur"></zmz-datepicker-time>
                            </template>
                            <template v-if="type == 'datetimerange'">
                                <zmz-datepicker-time-range v-model="model" :disabled="rangeDatetimeState"
                                    v-model:old="modelOld" @on-blur="hanldeOnBlur"></zmz-datepicker-time-range>
                            </template>
                        </div>
                        <div class="zmz-datepicker__panel__wrap__content__wrap">
                            <!-- // 时间选择 -->
                            <!-- // 日 -->
                            <zmz-datepicker-day @on-prev-month="hanldePrevMonthDay" @on-prev-year="hanldePrevYearDay"
                                @on-next-month="hanldeNextMonthDay" @on-next-year="hanldeNextYearDay"
                                @on-click="handleDateClick" v-model:current="modelDateCurrent" v-model="modelDate"
                                :type="type" v-if="type == 'date' || type == 'datetime'"></zmz-datepicker-day>
                            <!-- // 年 -->
                            <zmz-datepicker-year v-model="modelDate" v-model:current="modelDateCurrent"
                                @on-prev-year="hanldePrevYearDay" @on-next-year="hanldeNextYearDay"
                                @on-click="handleDateClick" :type="type" v-if="type == 'year'"></zmz-datepicker-year>
                            <!-- // 月 -->
                            <zmz-datepicker-month v-model="modelDate" v-model:current="modelDateCurrent"
                                @on-prev-year="hanldePrevYearDay" @on-next-year="hanldeNextYearDay"
                                @on-click="handleDateClick" :type="type" v-if="type == 'month'"></zmz-datepicker-month>
                            <!-- //日期范围选择 -->
                            <zmz-datepicker-range :type="type" v-model="model" v-model:start="modelStart"
                                v-model:end="modelEnd" @on-click="handleRangeClickStartEnd"
                                v-if="type == 'daterange' || type == 'monthrange' || type == 'datetimerange'"></zmz-datepicker-range>
                        </div>
                    </div>
                </div>
                <div class="zmz-datepicker__panel__footer" v-if="type == 'datetime' || type == 'datetimerange'">
                    <zmz-button class="zmz-datepicker__panel__footer__button" text v-if="type == 'datetime'"
                        size="mini" @click.stop="handleCurrent">当前</zmz-button>
                    <zmz-button class="zmz-datepicker__panel__footer__button" v-if="type == 'datetimerange'" text
                        size="mini" @click.stop="handleClear">清空</zmz-button>
                    <zmz-button class="zmz-datepicker__panel__footer__button" text type="primary" size="mini"
                        @click.stop="handleConfirm">确认</zmz-button>
                </div>
            </div>
        </zmz-teleportdom>
    </div>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance, watch, inject } from 'vue';
import { getNextMonth, getCurrentMonth, getCurrentYear, getNextYear, updateDate, formatDate, publicTimeFormat } from '../../../../utils/date.js';
import { findParent } from '../../../../utils/find.js';
import ZmzDatepickerMonth from './zmz-datepicker-month.vue';
import ZmzDatepickerRange from './zmz-datepicker-range.vue';
import ZmzDatepickerYear from './zmz-datepicker-year.vue';
import ZmzDatepickerDay from './zmz-datepicker-day.vue';
import ZmzDatepickerTime from './zmz-datepicker-time.vue';
import ZmzDatepickerTimeRange from './zmz-datepicker-time-range.vue';
import ZmzTeleportdom from '../../../teleportdom/if.vue';
export default {
    name: 'ZmzDatepicker',
    components: {
        ZmzDatepickerMonth,
        ZmzDatepickerRange,
        ZmzDatepickerYear,
        ZmzDatepickerDay,
        ZmzDatepickerTime,
        ZmzDatepickerTimeRange,
        ZmzTeleportdom
    },
    props: {
        type: {
            type: String,
            default: 'date'
        },
        placeholder: {
            type: String,
            default: ''
        },
        divisionRange: {
            type: String,
            default: '至'
        },
        startPlaceholder: {
            type: String,
            default: ''
        },
        endPlaceholder: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        hover: {
            type: Boolean,
            default: false
        },
        focuss: {
            type: Boolean,
            default: false
        },
        blurs: {
            type: Boolean,
            default: false
        },
        modelValue: [String, Number, Date, Array],
        format: {
            type: String,
            default: ''
        },
        linkage: {
            // 联动
            type: Boolean,
            default: true
        },
        shortcut: {
            type: Array,
            default: () => []
        },
        prefix: {
            type: Boolean,
            default: true
        },
        suffix: {
            type: Boolean,
            default: true
        },
        timestamp: {
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
    emits: ['on-focus', 'on-blur', 'update:modelValue', 'on-click', 'on-change', 'on-close-before', 'on-close', 'on-close-after', 'on-open-before', 'on-open', 'on-open-after'],
    setup(props, { emit }) {
        const modelOld = ref(props.modelValue);
        const { parent } = getCurrentInstance();
        const hovering = ref(false);
        const focused = ref(false);
        const clearbtn = ref(true);
        const currentVisible = ref(false);
        const zmzDatepicker = ref(null);
        const modelDate = ref(new Date());
        const modelDateCurrent = ref(null);
        const zmzDatepickerContainer = ref(null);
        const rangeDatetimeState = ref(false);
        const modelStart = ref('');
        const modelEnd = ref('');
        const disableCloseAppendToBody = ref(false);
        const zmzForm = inject('zmzForm', {});
        const zmzFormItem = inject('zmzFormItem', {});


        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                if (globalFromDisabled.value) return;
                if (props.timestamp) {
                    emit('update:modelValue', new Date(val).getTime());
                } else {
                    emit('update:modelValue', val);
                }

                if (parentProxyForm.value) {
                    parentProxyForm.value.proxy.onValidate();
                }
            }
        });

        const parentProxyForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        watch(
            () => model.value,
            val => {
                if (val) {
                    modelDate.value = val;
                    modelDateCurrent.value = val;
                }
            }
        );

        const year = computed(() => {
            return new Date().getFullYear();
        });

        const month = computed(() => {
            return new Date().getMonth() + 1;
        });

        const day = computed(() => {
            return new Date().getDate() + 1;
        });

        const yearMonthDay = computed(() => {
            return year.value + '/' + month.value + '/' + day.value;
        });

        // 是否显示日历
        const handleCalendar = () => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            currentVisible.value = !currentVisible.value;
        };

        const handleChange = e => {
            emit('on-change', e);
        };

        const handleInput = e => {
            emit('on-change', e);
        };

        // 获取焦点
        const handleFocus = e => {
            focused.value = true;
            emit('on-focus', e);
        };

        // 失去焦点
        const handleBlur = e => {
            focused.value = false;
            emit('on-blur', e);
        };

        const bodyCloseMenus = e => {
            if (disableCloseAppendToBody.value) {
                disableCloseAppendToBody.value = false;
                return false;
            }

            if (currentVisible.value) {
                e.preventDefault();
                e.stopPropagation();
                if (zmzDatepicker.value && zmzDatepicker.value.contains(e.target)) return;
                currentVisible.value = false;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
        };

        const zmzDatepickerClass = computed(() => {
            let params = [];
            if (globalFromDisabled.value) {
                params.push('zmz-datepicker--disabled');
            }

            if (globalFromReadonly.value) {
                params.push('zmz-datepicker--readonly');
            }

            if (props.type.indexOf('range') > -1) {
                params.push('zmz-datepicker--range');
            }

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-datepicker--size-${zmzFormSize.value || props.size}`)
            }

            if (currentVisible.value) {
                params.push('zmz-datepicker--focus');
            }

            if (props.prefix) {
                params.push('zmz-datepicker--prefix');
            }

            if (props.suffix || props.clearbtn) {
                params.push('zmz-datepicker--suffix');
            }

            return params;
        });

        const zmzDatepickerPanelClass = computed(() => {
            let params = [];

            if (props.type.indexOf('range') > -1) {
                params.push('zmz-datepicker__panel--range');
            }

            if (props.shortcut.length) {
                params.push('zmz-datepicker__panel--shortcut');
            }

            return params;
        });

        const zmzDatepickerWrapClass = computed(() => {
            let params = [];
            return params;
        });
        // date
        const modelInput = computed(() => {
            return model.value && formatDate(model.value, props.format || publicTimeFormat(props.type));
        });

        // 默认操作
        onMounted(() => {
            if (props.type == 'daterange' || props.type == 'datetimerange') {
                modelStart.value = getCurrentMonth(new Date());
                modelEnd.value = getNextMonth(new Date());
            }

            if (props.type == 'monthrange') {
                modelStart.value = getCurrentYear(new Date());
                modelEnd.value = getNextYear(new Date());
            }
        });

        // 点击回调
        const handleDateClick = item => {
            // 年月日
            if (props.type == 'date') {
                model.value = new Date(item.date);
                modelDate.value = item.date;
                modelDateCurrent.value = item.date;
                currentVisible.value = false;
            }

            if (props.type == 'month') {
                model.value = new Date(item.date);
                currentVisible.value = false;
            }

            if (props.type == 'year') {
                model.value = new Date(item.date);
                currentVisible.value = false;
            }

            // 年月日时分秒
            if (props.type == 'datetime') {
                let date = new Date();
                if (modelOld.value) {
                    date = new Date(modelOld.value);
                }
                model.value = updateDate(new Date(item.date), date.getHours(), date.getMinutes(), date.getSeconds());
                modelOld.value = updateDate(new Date(item.date), date.getHours(), date.getMinutes(), date.getSeconds());
                modelDate.value = item.date;
                modelDateCurrent.value = item.date;
            }
        };

        const hanldeOnBlur = (date, type) => {
            if (type == 'start') {
                modelStart.value = date;
                modelEnd.value = getNextMonth(date);
            }
        };

        // 范围开始显示
        const modelStartInput = computed(() => {
            return model.value[0] && formatDate(model.value[0], props.format || publicTimeFormat(props.type));
        });

        // 范围结束显示
        const modelEndInput = computed(() => {
            return model.value[1] && formatDate(model.value[1], props.format || publicTimeFormat(props.type));
        });

        // 范围开始结束点击
        const handleRangeClickStartEnd = (start, end, state) => {
            if (props.type == 'daterange') {
                if (start && end) {
                    model.value = [new Date(start), new Date(end)];
                    currentVisible.value = false;
                }
            }

            if (props.type == 'monthrange') {
                if (start && end) {
                    model.value = [new Date(start), new Date(end)];
                    currentVisible.value = false;
                }
            }

            if (props.type == 'datetimerange') {
                rangeDatetimeState.value = state;
                if (start && end) {
                    model.value = [new Date(start), new Date(end)];
                } else {
                    model.value = [new Date(start), new Date(start)];
                }
            }
        };

        // 快捷键
        const handleShortcut = item => {
            if (item.onClick) {
                model.value = item.onClick(model.value);
                currentVisible.value = false;
            }
        };

        // 清空
        const handleEmpty = () => { };

        // 当前
        const handleCurrent = () => {
            if (props.type == 'datetime') {
                model.value = new Date();
                currentVisible.value = false;
                modelDateCurrent.value = yearMonthDay.value;
                modelDate.value = yearMonthDay.value;
            }
        };

        // 普通确定
        const handleConfirm = () => {
            if (props.type == 'datetime' || props.type == 'datetimerange') {
                currentVisible.value = false;
                if (!model.value) {
                    model.value = new Date();
                }
            }
        };

        // 左
        // 上月开始
        const hanldePrevMonthDay = (year, month) => {
            if (props.type == 'month' || props.type == 'year' || props.type == 'date' || props.type == 'datetime') {
                modelDate.value = new Date(year, month - 1, 0);
            }

            if (props.type.indexOf('range') > -1) {
                if (props.linkage) {
                    // 联动
                    modelStart.value = new Date(year, month - 1, 0);
                    modelEnd.value = new Date(year, month, 0);
                } else {
                    modelStart.value = new Date(year, month - 1, 0);
                }
            }
        };

        // 下月结束
        const hanldeNextMonthDay = (year, month) => {
            if (props.type == 'month' || props.type == 'year' || props.type == 'date' || props.type == 'datetime') {
                modelDate.value = new Date(year, month + 1, 0);
            }
            if (props.type.indexOf('range') > -1) {
                modelStart.value = new Date(year, month + 1, 0);
            }
        };
        // 上年开始
        const hanldePrevYearDay = (year, month) => {
            if (props.type == 'month' || props.type == 'date' || props.type == 'datetime') {
                modelDate.value = new Date(year - 1, month, 0);
            }

            if (props.type == 'year') {
                if (modelDate.value <= 100) {
                    modelDate.value = 1990 - 10;
                } else {
                    modelDate.value = new Date(year - 10, month, 0);
                }
            }

            if (props.type.indexOf('range') > -1) {
                if (props.linkage) {
                    if (props.type == 'monthrange') {
                        modelStart.value = new Date(year - 1, month, 0);
                        modelEnd.value = new Date(year, month, 0);
                    } else {
                        modelStart.value = new Date(year - 1, month, 0);
                        modelEnd.value = new Date(year - 1, month + 1, 0);
                    }
                } else {
                    modelStart.value = new Date(year - 1, month, 0);
                }
            }
        };
        // 下年结束
        const hanldeNextYearDay = (year, month) => {
            if (props.type == 'month' || props.type == 'date' || props.type == 'datetime') {
                modelDate.value = new Date(year + 1, month, 0);
            }

            if (props.type == 'year') {
                modelDate.value = new Date(year + 10, month, 0);
            }

            if (props.type.indexOf('range') > -1) {
                modelStart.value = new Date(year + 1, month, 0);
            }
        };

        // 清除
        const handleClear = () => {
            if (props.type == 'date' || props.type == 'datetime') {
                model.value = '';
                modelDateCurrent.value = new Date();
                modelDate.value = new Date();
            }

            if (props.type.indexOf('range') > -1) {
                model.value = [];
            }

            currentVisible.value = false;
        };

        // 显示清除按钮
        const showClear = computed(() => {
            return !globalFromDisabled.value && !globalFromReadonly.value && clearbtn.value && (focused.value || hovering.value) && model.value;
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

        // 点击面板
        const handlePanelClick = () => {
            if (props.teleport) disableCloseAppendToBody.value = true;
        };

        const zmzTeleportdomClass = computed(() => {
            let params = ['zmz-teleportdom--datepicker'];
            if (props.type.indexOf('range') > -1) {
                params.push('zmz-datepicker--range');
            }
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
            model,
            showClear,
            currentVisible,
            hovering,
            handleCalendar,
            handleClear,
            handleChange,
            handleInput,
            handleFocus,
            handleBlur,
            zmzDatepicker,
            modelStart,
            modelEnd,
            zmzDatepickerClass,
            handleEmpty,
            handleConfirm,
            handleCurrent,
            modelInput,
            zmzDatepickerWrapClass,
            handleDateClick,
            modelDate,
            modelDateCurrent,
            hanldePrevMonthDay,
            hanldePrevYearDay,
            hanldeNextMonthDay,
            hanldeNextYearDay,
            handleRangeClickStartEnd,
            modelStartInput,
            modelEndInput,
            bodyCloseMenus,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            zmzDatepickerContainer,
            modelOld,
            hanldeOnBlur,
            rangeDatetimeState,
            zmzDatepickerPanelClass,
            handleShortcut,
            handlePanelClick,
            zmzTeleportdomClass,
            placeholderText,
            globalFromDisabled,
            globalFromReadonly
        };
    }
};
</script>
