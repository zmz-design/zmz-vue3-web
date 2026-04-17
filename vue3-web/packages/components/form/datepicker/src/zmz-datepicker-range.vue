<template>
    <div class="zmz-datepicker__range">
        <div class="zmz-datepicker__range__wrap zmz-datepicker__range__wrap--left">
            <div class="zmz-datepicker__range__days" v-if="type == 'daterange' || type == 'datetimerange'">
                <zmz-datepicker-day
                    v-model="modelStart"
                    v-model:motion="motionList"
                    v-model:current="modelCurrentStart"
                    :type="type"
                    :move-in-out="moveInOut"
                    :start-time="startTime"
                    :end-time="endTime"
                    :default-value="defaultValueStart"
                    @on-click="handleStartClick"
                    @on-prev-month="hanldePrevMonthStart"
                    @on-prev-year="hanldePrevYearStart"
                    @on-next-month="hanldeNextMonthStart"
                    @on-next-year="hanldeNextYearStart"
                    @on-mouseenter="handleStartOnMouseenter"
                    :right-btn="!linkage"
                    :nextYearDisabled="yearDisabled"
                    :nextMonthDisabled="monthDisabled"
                ></zmz-datepicker-day>
            </div>
            <div class="zmz-datepicker__range__month" v-if="type == 'monthrange'">
                <zmz-datepicker-month
                    v-model="modelStart"
                    v-model:motion="motionList"
                    v-model:current="modelCurrentStart"
                    :type="type"
                    :move-in-out="moveInOut"
                    :start-time="startTime"
                    :end-time="endTime"
                    :default-value="defaultValueStart"
                    @on-click="handleStartClick"
                    @on-prev-month="hanldePrevMonthStart"
                    @on-prev-year="hanldePrevYearStart"
                    @on-next-month="hanldeNextMonthStart"
                    @on-next-year="hanldeNextYearStart"
                    @on-mouseenter="handleStartOnMouseenter"
                    :right-btn="!linkage"
                    :nextYearDisabled="yearDisabled"
                    :nextMonthDisabled="monthDisabled"
                ></zmz-datepicker-month>
            </div>
        </div>
        <div class="zmz-datepicker__range__wrap zmz-datepicker__range__wrap--right">
            <div class="zmz-datepicker__range__days" v-if="type == 'daterange' || type == 'datetimerange'">
                <zmz-datepicker-day
                    v-model="modelEnd"
                    v-model:motion="motionList"
                    v-model:current="modelCurrentEnd"
                    :type="type"
                    :move-in-out="moveInOut"
                    :start-time="startTime"
                    :end-time="endTime"
                    :default-value="defaultValueEnd"
                    @on-click="handleEndClick"
                    @on-prev-month="hanldePrevMonthEnd"
                    @on-prev-year="hanldePrevYearEnd"
                    @on-next-month="hanldeNextMonthEnd"
                    @on-next-year="hanldeNextYearEnd"
                    @on-mouseenter="handleEndOnMouseenter"
                    :left-btn="!linkage"
                    :prevYearDisabled="yearDisabled"
                    :prevMonthDisabled="monthDisabled"
                ></zmz-datepicker-day>
            </div>
            <div class="zmz-datepicker__range__month" v-if="type == 'monthrange'">
                <zmz-datepicker-month
                    v-model="modelEnd"
                    v-model:motion="motionList"
                    v-model:current="modelCurrentEnd"
                    :type="type"
                    :move-in-out="moveInOut"
                    :start-time="startTime"
                    :end-time="endTime"
                    :default-value="defaultValueEnd"
                    @on-click="handleEndClick"
                    @on-prev-month="hanldePrevMonthEnd"
                    @on-prev-year="hanldePrevYearEnd"
                    @on-next-month="hanldeNextMonthEnd"
                    @on-next-year="hanldeNextYearEnd"
                    @on-mouseenter="handleEndOnMouseenter"
                    :left-btn="!linkage"
                    :prevYearDisabled="yearDisabled"
                    :prevMonthDisabled="monthDisabled"
                ></zmz-datepicker-month>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';
import { getDiffDate, getYear, getMonth, getDiffMonth } from '../../../../utils/date.js';
import ZmzDatepickerDay from './zmz-datepicker-day.vue';
import ZmzDatepickerMonth from './zmz-datepicker-month.vue';
export default {
    name: 'ZmzDatepickerRange',
    components: {
        ZmzDatepickerDay,
        ZmzDatepickerMonth
    },
    props: {
        type: {
            type: String,
            default: 'monthrange'
        },
        modelValue: {
            type: Array,
            default: () => []
        },
        start: {
            type: [Date, String, Number],
            default: () => new Date()
        },
        end: {
            type: [Date, String, Number],
            default: () => new Date()
        },
        linkage: {
            type: Boolean,
            default: true
        }
    },
    emits: ['update:modelValue', 'update:end', 'update:start', 'on-click', 'on-change'],
    setup(props, { emit }) {
        const startTime = ref('');
        const endTime = ref('');
        const motionList = ref([]);
        const moveInOut = ref(false);
        const defaultValueEnd = ref('');
        const defaultValueStart = ref(new Date());
        const modelCurrentStart = ref('');
        const modelCurrentEnd = ref('');
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                if (props.disabled) return;
                emit('update:modelValue', val);
                emit('on-change', val);
            }
        });

        const modelStart = computed({
            get() {
                return props.start;
            },
            set(val) {
                if (props.disabled) return;
                emit('update:start', val);
            }
        });

        const modelEnd = computed({
            get() {
                return props.end;
            },
            set(val) {
                if (props.disabled) return;
                emit('update:end', val);
            }
        });

        watch(
            () => model.value,
            val => {
                if (props.type == 'monthrange') {
                    motionList.value = getDiffMonth(val[0], val[1]);
                } else {
                    motionList.value = getDiffDate(val[0], val[1]);
                }
            }
        );

        onMounted(() => {
            if (props.type == 'monthrange') {
                motionList.value = getDiffMonth(model.value[0], model.value[1]);
            } else {
                motionList.value = getDiffDate(model.value[0], model.value[1]);
            }
        });

        // 鼠标划过
        const handleStartOnMouseenter = data => {
            motionList.value = data;
        };

        const handleEndOnMouseenter = data => {
            motionList.value = data;
        };

        const handleStartClick = item => {
            if (moveInOut.value) {
                endTime.value = item.date;
                moveInOut.value = false;
                if (startTime.value < endTime.value) {
                    emit('on-click', startTime.value, endTime.value, moveInOut.value);
                } else {
                    emit('on-click', endTime.value, startTime.value, moveInOut.value);
                }
            } else {
                motionList.value = [];
                motionList.value.push(item.date);
                startTime.value = item.date;
                endTime.value = '';
                moveInOut.value = true;
                emit('on-click', startTime.value, '', moveInOut.value);
            }
        };

        const handleEndClick = item => {
            if (moveInOut.value) {
                endTime.value = item.date;
                moveInOut.value = false;
                if (startTime.value < endTime.value) {
                    emit('on-click', startTime.value, endTime.value);
                } else {
                    emit('on-click', endTime.value, startTime.value);
                }
            } else {
                motionList.value = [];
                motionList.value.push(item.date);
                startTime.value = item.date;
                endTime.value = '';
                moveInOut.value = true;
                emit('on-click', startTime.value, '', moveInOut.value);
            }
        };

        // 左
        // 上上月开始
        const hanldePrevMonthStart = (year, month) => {
            if (props.linkage) {
                // 联动
                modelStart.value = new Date(year, month - 1, 0);
                modelEnd.value = new Date(year, month, 0);
            } else {
                modelStart.value = new Date(year, month - 1, 0);
            }
        };

        // 上下月结束
        const hanldeNextMonthStart = (year, month) => {
            modelStart.value = new Date(year, month + 1, 0);
        };
        // 上上年开始
        const hanldePrevYearStart = (year, month) => {
            if (props.linkage) {
                // 联动
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
        };
        // 上下年结束
        const hanldeNextYearStart = (year, month) => {
            modelStart.value = new Date(year + 1, month, 0);
        };
        // 右
        // 下上月开始
        const hanldePrevMonthEnd = (year, month) => {
            modelEnd.value = new Date(year, month - 1, 0);
        };
        // 下下月结束
        const hanldeNextMonthEnd = (year, month) => {
            if (props.linkage) {
                // 联动
                modelStart.value = new Date(year, month, 0);
                modelEnd.value = new Date(year, month + 1, 0);
            } else {
                modelEnd.value = new Date(year, month + 1, 0);
            }
        };
        // 下上年开始
        const hanldePrevYearEnd = (year, month) => {
            modelEnd.value = new Date(year - 1, month, 0);
        };
        // 下下年结束
        const hanldeNextYearEnd = (year, month) => {
            if (props.linkage) {
                // 联动
                if (props.type == 'monthrange') {
                    modelStart.value = new Date(year, month, 0);
                    modelEnd.value = new Date(year + 1, month, 0);
                } else {
                    modelStart.value = new Date(year + 1, month - 1, 0);
                    modelEnd.value = new Date(year + 1, month, 0);
                }
            } else {
                modelEnd.value = new Date(year + 1, month, 0);
            }
        };
        // 年禁用
        const yearDisabled = computed(() => {
            if (props.type == 'monthrange') {
                if (getYear(modelStart.value) == getYear(modelEnd.value) - 1) {
                    return true;
                }
            } else {
                if (getYear(modelStart.value) == getYear(modelEnd.value)) {
                    return true;
                }
            }
            return false;
        });
        // 月禁用
        const monthDisabled = computed(() => {
            if (getYear(modelStart.value) == getYear(modelEnd.value) && getMonth(modelStart.value) == getMonth(modelEnd.value) - 1) {
                return true;
            }
            return false;
        });

        return {
            model,
            modelStart,
            modelEnd,
            startTime,
            endTime,
            handleStartOnMouseenter,
            handleEndOnMouseenter,
            handleStartClick,
            handleEndClick,
            motionList,
            moveInOut,
            defaultValueStart,
            defaultValueEnd,
            modelCurrentStart,
            modelCurrentEnd,
            hanldePrevMonthStart,
            hanldePrevYearStart,
            hanldeNextMonthStart,
            hanldeNextYearStart,
            hanldePrevMonthEnd,
            hanldePrevYearEnd,
            hanldeNextMonthEnd,
            hanldeNextYearEnd,
            yearDisabled,
            monthDisabled
        };
    }
};
</script>
