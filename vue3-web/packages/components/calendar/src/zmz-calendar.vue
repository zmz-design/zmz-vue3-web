<template>
    <div class="zmz-calendar">
        <div class="zmz-calendar__header">
            <div class="zmz-calendar__header__left">
                <slot name="date" :date="calendar">
                    {{ calendar.year }}
                    <em class="zmz-calendar__header__left__inner">年</em>
                    {{ calendar.month }}
                    <em class="zmz-calendar__header__left__inner">月</em>
                </slot>
            </div>
            <div class="zmz-calendar__header__right" v-if="showButton">
                <div class="zmz-calendar__header__right__btn">
                    <span class="zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--left"
                        @click="handleState('prev', 0)"
                        :class="{ 'zmz-calendar__header__right__btn__inner--active': isStateIndex === 0 }">
                        <i class="zmz-icon--arrow-left"></i>
                    </span>
                    <span
                        class="zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--center"
                        @click="handleState('day', 1)"
                        :class="{ 'zmz-calendar__header__right__btn__inner--active': isStateIndex === 1 }">今天</span>
                    <span class="zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--right"
                        @click="handleState('next', 2)"
                        :class="{ 'zmz-calendar__header__right__btn__inner--active': isStateIndex === 2 }">
                        <i class="zmz-icon--arrow-right"></i>
                    </span>
                </div>
                <div class="zmz-calendar__header__right__btn">
                    <span class="zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--month"
                        @click="handleToggle('month', 0)"
                        :class="{ 'zmz-calendar__header__right__btn__inner--active': isToggleIndex === 0 }">月</span>
                    <span class="zmz-calendar__header__right__btn__inner zmz-calendar__header__right__btn__inner--year"
                        @click="handleToggle('year', 1)"
                        :class="{ 'zmz-calendar__header__right__btn__inner--active': isToggleIndex === 1 }">年</span>
                </div>
            </div>
        </div>
        <slot :months="monthsList" :weeks="weeks" :days="calendar.dayList" :state="isMonth">
            <template v-if="isMonth">
                <div class="zmz-calendar__months">
                    <div v-for="(item, index) in monthsList" :key="index" class="zmz-calendar__months__li"
                        @click="handleMonthsClick(item)">
                        <div class="zmz-calendar__months__wrap"
                            :class="{ 'zmz-calendar__months__wrap--current': item.current, 'zmz-calendar__months__wrap--active': calendar.isMonth == item.index }">
                            <div class="zmz-calendar__months__wrap__text">
                                <slot name="month" :item="item">{{ item.text }}</slot>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="zmz-calendar__weeks">
                    <div v-for="(item, index) in weeks" :key="index" class="zmz-calendar__weeks__li">
                        <slot name="week" :item="item">{{ item }}</slot>
                    </div>
                </div>
                <div class="zmz-calendar__days">
                    <div v-for="(item, index) in calendar.dayList" :key="index" class="zmz-calendar__days__li"
                        @click="handleDaysClick(item)">
                        <div class="zmz-calendar__days__wrap"
                            :class="{ 'zmz-calendar__days__wrap--current': today == item.date, 'zmz-calendar__days__wrap--active': calendar.isDay == item.date, 'zmz-calendar__days__wrap--month': !item.isMonth }">
                            <div class="zmz-calendar__days__wrap__text">
                                <slot name="day" :item="item">{{ item.day }}</slot>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </slot>
    </div>
</template>
<script>
import { ref, computed, onMounted, reactive } from 'vue';
export default {
    name: 'ZmzCalendar',
    props: {
        /**
         * 当前时间
         */
        modelValue: {
            type: Date,
            default() {
                return new Date()
            }
        },
        /**
         * 月份
         */
        months: {
            type: Array,
            default() {
                return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            }
        },
        /**
         * 周
         */
        weeks: {
            type: Array,
            default() {
                return ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
            }
        },
        /**
         * 显示按钮
         */
        showButton: {
            type: Boolean,
            default: true
        },
    },
    emits: ['on-prev-year', 'on-next-year', 'on-prev-month', 'on-next-month', 'on-month', 'on-day', 'on-toggle-month-year', 'update:modelValue'],
    setup(props, { emit }) {
        const isMonth = ref(false);
        const isToggleIndex = ref(-1);
        const isStateIndex = ref(-1);
        const today = ref('');
        const calendar = reactive({
            dayList: [], //二维数组，循环行，循环列
            prev: [],
            current: [],
            next: [],
            year: '',
            month: '',
            isDay: '', //判断是否是'今天'
            isMonth: '', //判断是否是'当月'
            isYear: '' //判断是否是'当年'
        });

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        // 月
        const monthsList = computed(() => {
            var arr = [];
            let date = new Date(model.value);
            props.months.forEach((items, indexs) => {
                if ((date.getMonth()) == indexs) {
                    arr.push({
                        index: initDate(indexs + 1),
                        text: items,
                        year: date.getFullYear(),
                        current: true
                    });
                } else {
                    arr.push({
                        index: initDate(indexs + 1),
                        text: items,
                        year: date.getFullYear(),
                        current: false
                    });
                }
            });
            return arr;
        });

        // 切换月年
        const handleToggle = (type, index) => {
            if (type === 'month') {
                isMonth.value = false;
                isToggleIndex.value = index;
            } else {
                isMonth.value = true;
                isToggleIndex.value = index;
            }
            emit('on-toggle-month-year', index)
        };

        // 状态
        const handleState = (type, index) => {
            if (type === 'prev') {
                isStateIndex.value = index;
                if (isToggleIndex.value == 1) {
                    getPrevYear();
                } else {
                    getPrevMonth();
                }
            } else if (type === 'next') {
                isStateIndex.value = index;
                if (isToggleIndex.value == 1) {
                    getNextYear();
                } else {
                    getNextMonth();
                }
            } else {
                isStateIndex.value = index;
                backToday();
            }
        };

        // 上一年
        const getPrevYear = () => {
            if (calendar.year != 1995) {
                calendar.year = initDate(--calendar.year);
            } else {
                calendar.year = --calendar.year;
            }
            getMonthDays();
            currentDay();
            emit('on-prev-year', 0);
        };

        // 上一月
        const getPrevMonth = () => {
            if (calendar.month != 1) {
                calendar.month = initDate(--calendar.month);
            } else {
                calendar.month = 12;
                calendar.year = --calendar.year;
            }
            getMonthDays();
            currentDay();
            emit('on-prev-month', 0);
        };

        // 下一年
        const getNextYear = () => {
            if (calendar.year != 1995) {
                calendar.year = initDate(++calendar.year);
            } else {
                calendar.year = ++calendar.year;
            }
            getMonthDays();
            currentDay();
            emit('on-next-year', 1);
        };

        // //下一月
        const getNextMonth = () => {
            if (calendar.month < 12) {
                calendar.month = initDate(++calendar.month);
            } else {
                calendar.month = '01';
                calendar.year = ++calendar.year;
            }
            getMonthDays();
            currentDay();
            emit('on-next-month', 1);
        };

        // 初始化时间
        const initDate = val => {
            if (val < 10) {
                return '0' + val;
            } else {
                return val;
            }
        };

        // 当前天数
        const currentDay = () => {
            //获取今天,高亮显示今天
            let date = new Date(model.value);
            let y = calendar.year;
            let m = calendar.month;

            if (y === date.getFullYear() && m == date.getMonth() + 1) {
                //如果是当年当月
                calendar.isDay = y + '-' + m + '-' + initDate(date.getDate()); //获取到今天的号数
                calendar.isMonth = m;
                calendar.isYear = y;
            } else {
                calendar.isDay = -1;
                calendar.isMonth = -1;
                calendar.isYear = -1;
            }
        };

        // 最后时间
        const getLastDate = (year, month) => {
            return new Date(year, month, 0);
        };

        // 获取天数
        const getMonthDays = () => {
            //获取上月 当前月和下月天数
            let y = calendar.year;
            let m = calendar.month;
            let preYear; //上一年
            let preMonth; //上一月
            let nextYear; //下一年
            let nextMonth; //下一月
            calendar.current = [];
            calendar.prev = [];
            calendar.next = [];

            // 当前月天数
            for (let i = 1; i <= getLastDate(y, m).getDate(); i++) {
                //date用于日期判断，day用于显示，flag用于状态判断
                calendar.current.push({
                    date: y + '-' + m + '-' + initDate(i),
                    day: i,
                    month: m,
                    year: y,
                    disable: true,
                    isMonth: true,
                    state: 1
                });
            }

            /*上月*/
            let d = getLastDate(y, m - 1).getDate(); //上月一共多少天
            preYear = m == 1 ? y - 1 : y; //当前月是1月，那么上一月的年份要-1
            preMonth = m == 1 ? 12 : initDate(parseInt(m) - 1); //当前月是1月，那么上一月是12月
            for (let j = getLastDate(y, m - 1).getDay(); j >= 0; j--) {
                calendar.prev.push({
                    date: preYear + '-' + preMonth + '-' + (d - j),
                    day: d - j,
                    month: preMonth,
                    year: preYear,
                    disable: true,
                    isMonth: false,
                    state: 0
                });
            }

            /*下月*/
            nextYear = m == 12 ? y + 1 : y; //当前月是12月，那么下一月的年份要+1
            nextMonth = m == 12 ? '01' : initDate(parseInt(m) + 1); //当前月是12月，那么下一月是1月
            for (let k = 1; k <= 42 - calendar.current.length - calendar.prev.length; k++) {
                calendar.next.push({
                    date: nextYear + '-' + nextMonth + '-' + initDate(k),
                    day: k,
                    month: nextMonth,
                    year: nextYear,
                    disable: true,
                    isMonth: false,
                    state: 2
                });
            }
            calendar.dayList = [];
            // 数组合并
            let tempArr = calendar.prev.concat(calendar.current, calendar.next);
            calendar.dayList = tempArr;
        };

        //返回今天
        const backToday = () => {
            let d = new Date(model.value);
            calendar.year = d.getFullYear();
            calendar.month = initDate(d.getMonth() + 1);
            currentDay();
            getMonthDays();
        };

        // 天点击
        const handleDaysClick = key => {
            if (key.state == 0) {
                getPrevMonth();
            } else if (key.state == 2) {
                getNextMonth();
            }
            if (!key.isMonth) return;
            calendar.isDay = key.date;
            emit('on-day', key)
        };

        // 月点击
        const handleMonthsClick = key => {
            calendar.isMonth = key.index;
            isMonth.value = false;
            isToggleIndex.value = 0
            calendar.month = key.index;
            getMonthDays()
            emit('on-month', key)
        };

        onMounted(() => {
            let date = new Date(model.value);
            today.value = date.getFullYear() + '-' + initDate(date.getMonth() + 1) + '-' + initDate(date.getDate());
            backToday();
        });

        return {
            monthsList,
            isMonth,
            handleToggle,
            isToggleIndex,
            isStateIndex,
            handleState,
            calendar,
            handleDaysClick,
            handleMonthsClick,
            today
        };
    }
};
</script>
