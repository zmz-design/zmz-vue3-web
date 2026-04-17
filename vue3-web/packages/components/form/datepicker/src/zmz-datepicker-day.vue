<template>
    <div class="zmz-datepicker__days">
        <div class="zmz-datepicker__title">
            <div class="zmz-datepicker__title__prev" v-if="leftBtn">
                <div class="zmz-datepicker__title__prev__year"
                    :class="{ 'zmz-datepicker__title__prev__disabled': prevYearDisabled }" @click="handlePrevYearClick"><i
                        class="zmz-icon--doublearrow-left"></i></div>
                <div class="zmz-datepicker__title__prev__month"
                    :class="{ 'zmz-datepicker__title__prev__disabled': prevMonthDisabled }" @click="hanldePrevMonthClick"><i
                        class="zmz-icon--arrow-left"></i></div>
            </div>
            <div class="zmz-datepicker__title__text" @click="handleTitleSwitch">
                <span class="zmz-datepicker__title__text__label">{{ year }} 年</span>
                <span class="zmz-datepicker__title__text__label">{{ month }} 月</span>
            </div>
            <div class="zmz-datepicker__title__next" v-if="rightBtn">
                <div class="zmz-datepicker__title__next__month"
                    :class="{ 'zmz-datepicker__title__next__disabled': nextMonthDisabled }" @click="hanldeNextMonthClick"><i
                        class="zmz-icon--arrow-right"></i></div>
                <div class="zmz-datepicker__title__next__year"
                    :class="{ 'zmz-datepicker__title__next__disabled': nextYearDisabled }" @click="handleNextYearClick"><i
                        class="zmz-icon--doublearrow-right"></i></div>
            </div>
        </div>
        <div class="zmz-datepicker__days__week">
            <div class="zmz-datepicker__days__week__li" v-for="(item, index) in weekListData" :key="index">
                <span class="zmz-datepicker__days__week__li__text">{{ item }}</span>
            </div>
        </div>
        <div class="zmz-datepicker__days__day">
            <div class="zmz-datepicker__days__day__ul" v-for="(item, index) in dayListData" :key="index">
                <div class="zmz-datepicker__days__day__ul__li" v-for="(keyItem, keyIndex) in item" :key="keyIndex" :class="{
                    'zmz-datepicker__days__day__ul__li--disabled': keyItem.disable
                }" @click="handleDayClick(keyItem)" @mouseenter="handleDayMouseenter(keyItem)">
                    <div class="zmz-datepicker__days__day__ul__li__text" :class="{
                        'zmz-datepicker__days__day__ul__li__text--start': keyItem.start,
                        'zmz-datepicker__days__day__ul__li__text--motion': keyItem.motion,
                        'zmz-datepicker__days__day__ul__li__text--end': keyItem.end,
                        'zmz-datepicker__days__day__ul__li__text--current': keyItem.current,
                        'zmz-datepicker__days__day__ul__li__text--active': keyItem.active,
                        'zmz-datepicker__days__day__ul__li__text--nomonth': keyItem.isMonth
                    }">
                        <span class="zmz-datepicker__days__day__ul__li__text__label">{{ keyItem.day }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { dateZeroFill, getLastDate, getDiffDate, formatDate } from '../../../../utils/date.js';
export default {
    name: 'ZmzDatepickerDay',
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
        prevMonthDisabled: {
            type: Boolean,
            default: false
        },
        nextYearDisabled: {
            type: Boolean,
            default: false
        },
        nextMonthDisabled: {
            type: Boolean,
            default: false
        },
    },
    emits: ['update:modelValue', 'on-click', 'on-change', 'on-prev-year', 'on-next-year', 'on-prev-month', 'on-next-month', 'on-mouseenter'],
    setup(props, { emit }) {
        const weekListData = ref(['日', '一', '二', '三', '四', '五', '六']);
        const dateTimeStart = ref('');
        const dateTimeEnd = ref('');
        const isMoveInOut = ref(false);
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

        const modelCurrent = computed({
            get() {
                return props.current;
            },
            set(val) {
                if (props.disabled) return;
                emit('update:current', val);
            }
        });

        const modelMotion = computed({
            get() {
                return props.motion;
            },
            set(val) {
                if (props.disabled) return;
                emit('update:current', val);
            }
        });

        watch(() => props.moveInOut, (val) => {
            isMoveInOut.value = val
        })

        watch(() => props.startTime, (val) => {
            dateTimeStart.value = val
        })

        watch(() => props.endTime, (val) => {
            dateTimeEnd.value = val
        })

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

        const day = computed(() => {
            if (model.value) {
                return new Date(model.value).getDate() + 1;
            } else {
                return new Date().getDate();
            }
        });

        // 点击天回调
        const handleDayClick = item => {
            if (props.disabled) return;
            emit('on-click', item);
        };

        // 获取当月天数
        const dayListData = computed(() => {
            //获取上月 当前月和下月天数
            let preYear; //上一年
            let preMonth; //上一月
            let nextYear; //下一年
            let nextMonth; //下一月
            let dayList = [];
            let dayCurrent = [];
            let dayPrev = [];
            let dayNext = [];
            // 当前月天数
            for (let i = 1; i <= getLastDate(year.value, month.value).getDate(); i++) {
                //date用于日期判断，day用于显示，flag用于状态判断
                let date = year.value + '/' + dateZeroFill(month.value) + '/' + dateZeroFill(i);
                let current = false;
                let active = false;
                let start = false;
                let motion = false;
                let end = false;
                if (date == formatDate(modelCurrent.value, 'yyyy/MM/dd')) {
                    current = true;
                }

                if (date == formatDate(props.defaultValue, 'yyyy/MM/dd')) {
                    active = true;
                }
                if (modelMotion.value[0] == date) {
                    start = true
                }
                if (modelMotion.value[modelMotion.value.length - 1] == date) {
                    end = true
                }
                modelMotion.value.forEach((item) => {
                    if (item == date) {
                        motion = true;
                    }
                });

                dayCurrent.push({
                    date: date,
                    day: i,
                    month: month.value,
                    year: year.value,
                    disable: false,
                    isMonth: false,
                    current: current,
                    active: active,
                    state: 1,
                    start: start,
                    motion: motion,
                    end: end
                });
            }

            // 上月
            let d = getLastDate(year.value, month.value - 1).getDate(); //上月一共多少天
            preYear = month.value == 1 ? year.value - 1 : year.value; //当前月是1月，那么上一月的年份要-1
            preMonth = month.value == 1 ? 12 : parseInt(month.value) - 1; //当前月是1月，那么上一月是12月
            for (let j = getLastDate(year.value, month.value - 1).getDay(); j >= 0; j--) {
                let date = preYear + '/' + dateZeroFill(preMonth) + '/' + (d - j);
                let current = false;
                if (date == formatDate(model.value, 'yyyy/MM/dd')) {
                    current = true;
                }
                dayPrev.push({
                    date: date,
                    day: d - j,
                    month: preMonth,
                    year: preYear,
                    disable: false,
                    isMonth: true,
                    current: current,
                    active: false,
                    state: 1,
                    start: false,
                    motion: false,
                    end: false
                });
            }

            // 下月
            nextYear = month.value == 12 ? year.value + 1 : year.value; //当前月是12月，那么下一月的年份要+1
            nextMonth = month.value == 12 ? 1 : parseInt(month.value) + 1; //当前月是12月，那么下一月是1月
            for (let k = 1; k <= 42 - dayCurrent.length - dayPrev.length; k++) {
                let date = nextYear + '/' + dateZeroFill(nextMonth) + '/' + dateZeroFill(k);
                let current = false;
                if (date == formatDate(model.value, 'yyyy/MM/dd')) {
                    current = true;
                }
                dayNext.push({
                    date: date,
                    day: k,
                    month: nextMonth,
                    year: nextYear,
                    disable: false,
                    isMonth: true,
                    current: current,
                    active: false,
                    state: 2,
                    start: false,
                    motion: false,
                    end: false
                });
            }
            // 数组合并
            let tempArrDay = dayPrev.concat(dayCurrent, dayNext);
            // 数组分组，每7个一组
            for (let i = 0; i < tempArrDay.length; i += 7) {
                dayList.push(tempArrDay.slice(i, i + 7));
            }
            return dayList;
        });

        const handleDayMouseenter = item => {
            if (isMoveInOut.value) {
                if (dateTimeStart.value <= item.date) {
                    emit('on-mouseenter', getDiffDate(dateTimeStart.value, item.date))
                } else if (dateTimeStart.value >= item.date) {
                    emit('on-mouseenter', getDiffDate(item.date, dateTimeStart.value))
                }
            }
        };

        // 下一月
        const hanldeNextMonthClick = () => {
            if (props.nextMonthDisabled) return
            emit('on-next-month', year.value, month.value, day.value)
        }

        // 上一月
        const hanldePrevMonthClick = () => {
            if (props.prevMonthDisabled) return
            emit('on-prev-month', year.value, month.value, day.value)
        }

        // 下一年
        const handleNextYearClick = () => {
            if (props.nextYearDisabled) return
            emit('on-next-year', year.value, month.value, day.value)
        }

        // 上一年
        const handlePrevYearClick = () => {
            if (props.prevYearDisabled) return
            emit('on-prev-year', year.value, month.value, day.value)
        }

        const handleTitleSwitch = () => {

        }

        return {
            weekListData,
            handleDayClick,
            dayListData,
            year,
            month,
            handleDayMouseenter,
            hanldeNextMonthClick,
            hanldePrevMonthClick,
            handleNextYearClick,
            handlePrevYearClick,
            handleTitleSwitch
        };
    }
};
</script>
