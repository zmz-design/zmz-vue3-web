<template>
    <div class="zmz-datepicker__months">
        <div class="zmz-datepicker__title">
            <div class="zmz-datepicker__title__prev" v-if="leftBtn">
                <div class="zmz-datepicker__title__prev__year" :class="{ 'zmz-datepicker__title__prev__disabled': prevYearDisabled }" @click="handlePrevYearClick">
                    <i class="zmz-icon--doublearrow-left"></i>
                </div>
            </div>
            <div class="zmz-datepicker__title__text" @click="getSwitchYear">
                <span class="zmz-datepicker__title__text__label">{{ year }} 年</span>
            </div>
            <div class="zmz-datepicker__title__next" v-if="rightBtn">
                <div class="zmz-datepicker__title__next__year" :class="{ 'zmz-datepicker__title__next__disabled': nextYearDisabled }" @click="handleNextYearClick">
                    <i class="zmz-icon--doublearrow-right"></i>
                </div>
            </div>
        </div>
        <div class="zmz-datepicker__months__month">
            <div class="zmz-datepicker__months__month__ul" v-for="(item, itemIndex) in monthListData" :key="itemIndex">
                <div
                    class="zmz-datepicker__months__month__ul__li"
                    v-for="(keyItem, keyIndex) in item"
                    :key="keyIndex"
                    :class="{ 'zmz-datepicker__months__month__ul__li--disabled': keyItem.disable }"
                    @click="handleMonthClick(keyItem)"
                    @mouseenter="handleDayMouseenter(keyItem)"
                >
                    <div
                        class="zmz-datepicker__months__month__ul__li__text"
                        :class="{
                            'zmz-datepicker__months__month__ul__li__text--start': keyItem.start,
                            'zmz-datepicker__months__month__ul__li__text--motion': keyItem.motion,
                            'zmz-datepicker__months__month__ul__li__text--end': keyItem.end,
                            'zmz-datepicker__months__month__ul__li__text--current': keyItem.current,
                            'zmz-datepicker__months__month__ul__li__text--active': keyItem.active
                        }"
                    >
                        <span class="zmz-datepicker__months__month__ul__li__text__label">{{ keyItem.month }}月</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { dateZeroFill, getDiffMonth, formatDate } from '../../../../utils/date.js';
export default {
    name: 'ZmzDatepickerMonth',
    props: {
        modelValue: {
            type: [String, Number, Date],
            default: () => new Date()
        },
        current: {
            type: [String, Number, Date],
            default: () => new Date()
        },
        defaultValue: {
            type: [String, Number, Date],
            default: () => new Date()
        },
        motion: {
            type: Array,
            default: () => []
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'date'
        },
        moveInOut: {
            type: Boolean,
            default: true
        },
        startTime: {
            type: String,
            default: ''
        },
        endTime: {
            type: String,
            default: ''
        },
        leftBtn: {
            type: Boolean,
            default: true
        },
        rightBtn: {
            type: Boolean,
            default: true
        },
        prevYearDisabled: {
            type: Boolean,
            default: false
        },
        nextYearDisabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'on-change', 'on-prev-year', 'on-next-year', 'on-click', 'on-mouseenter'],
    setup(props, { emit }) {
        const dateTimeStart = ref('');
        const dateTimeEnd = ref('');
        const isMoveInOut = ref(false);
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        const modelCurrent = computed({
            get() {
                return props.current;
            },
            set(val) {
                emit('update:current', val);
            }
        });

        const modelMotion = computed({
            get() {
                return props.motion;
            },
            set(val) {
                emit('update:motion', val);
            }
        });

        watch(
            () => props.moveInOut,
            val => {
                isMoveInOut.value = val;
            }
        );

        watch(
            () => props.startTime,
            val => {
                dateTimeStart.value = val;
            }
        );

        watch(
            () => props.endTime,
            val => {
                dateTimeEnd.value = val;
            }
        );

        // 点击月回调
        const handleMonthClick = item => {
            emit('on-click', item);
        };

        const year = computed(() => {
            if (model.value) {
                return new Date(model.value).getFullYear();
            } else {
                return new Date().getFullYear();
            }
        });

        const month = computed(() => {
            if (model.value) {
                return new Date(model.value).getMonth() + 1;
            } else {
                return new Date().getMonth() + 1;
            }
        });

        // 获取单月天数
        const monthListData = computed(() => {
            let monthCurrent = [];
            let monthList = [];
            // 获取月份
            for (let i = 1; i <= 12; i++) {
                let date = year.value + '/' + dateZeroFill(i);
                let current = false;
                let active = false;
                let start = false;
                let motion = false;
                let end = false;

                if (date == formatDate(modelCurrent.value, 'yyyy/MM')) {
                    current = true;
                }

                if (date == formatDate(props.defaultValue, 'yyyy/MM')) {
                    active = true;
                }

                if (modelMotion.value[0] == date) {
                    start = true;
                }

                if (modelMotion.value[modelMotion.value.length - 1] == date) {
                    end = true;
                }
                modelMotion.value.forEach(item => {
                    if (item == date) {
                        motion = true;
                    }
                });

                monthCurrent.push({
                    month: dateZeroFill(i),
                    date: date,
                    year: year.value,
                    day: '01',
                    disable: false,
                    current: current,
                    active: active,
                    start: start,
                    motion: motion,
                    end: end
                });
            }

            // 数组分组，每4个一组
            for (let i = 0; i < monthCurrent.length; i += 4) {
                monthList.push(monthCurrent.slice(i, i + 4));
            }
            return monthList;
        });

        // 上一年
        const handlePrevYearClick = () => {
            if (props.prevYearDisabled) return;
            emit('on-prev-year', year.value, month.value);
        };
        // 下一年
        const handleNextYearClick = () => {
            if (props.nextYearDisabled) return;
            emit('on-next-year', year.value, month.value);
        };

        const handleDayMouseenter = item => {
            if (isMoveInOut.value) {
                if (dateTimeStart.value <= item.date) {
                    emit('on-mouseenter', getDiffMonth(dateTimeStart.value, item.date));
                } else if (dateTimeStart.value >= item.date) {
                    emit('on-mouseenter', getDiffMonth(item.date, dateTimeStart.value));
                }
            }
        };

        return {
            monthListData,
            handleMonthClick,
            year,
            handlePrevYearClick,
            handleNextYearClick,
            handleDayMouseenter
        };
    }
};
</script>
