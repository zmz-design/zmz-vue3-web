<template>
    <div class="zmz-timepicker__time" ref="zmzTimepickerTime">
        <div class="zmz-timepicker__time__hour">
            <zmz-scrollbar class="zmz-timepicker__scrollbar" ref="zmzTimepickerTimeHour">
                <div class="zmz-timepicker__time__item"
                    :class="{ 'zmz-timepicker__time__item--active': item.date == hourCurrent, 'zmz-timepicker__time__item--disabled': item.disabled }"
                    ref="zmzTimepickerTimeLi" @click="handleClick('hour', item)" v-for="(item, index) in hourListData"
                    :key="index">
                    {{ initDate(item.date) }}
                </div>
            </zmz-scrollbar>
        </div>
        <div class="zmz-timepicker__time__minute">
            <zmz-scrollbar class="zmz-timepicker__scrollbar" ref="zmzTimepickerTimeMinute">
                <div class="zmz-timepicker__time__item"
                    :class="{ 'zmz-timepicker__time__item--active': item.date == minuteCurrent, 'zmz-timepicker__time__item--disabled': item.disabled }"
                    ref="zmzTimepickerTimeLi" @click="handleClick('minute', item)" v-for="(item, index) in minuteListData"
                    :key="index">
                    {{ initDate(item.date) }}
                </div>
            </zmz-scrollbar>
        </div>
        <div class="zmz-timepicker__time__second">
            <zmz-scrollbar class="zmz-timepicker__scrollbar" ref="zmzTimepickerTimeSecond">
                <div class="zmz-timepicker__time__item"
                    :class="{ 'zmz-timepicker__time__item--active': item.date == secondCurrent, 'zmz-timepicker__time__item--disabled': item.disabled }"
                    ref="zmzTimepickerTimeLi" @click="handleClick('second', item)" v-for="(item, index) in secondListData"
                    :key="index">
                    {{ initDate(item.date) }}
                </div>
            </zmz-scrollbar>
        </div>
    </div>
</template>

<script>
import { ref, computed, nextTick, watch } from 'vue';
import { updateDate } from '../../../../utils/date.js';
export default {
    name: 'ZmzTimepickerTime',
    props: {
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
         * 默认值
         */
        defaultValue: {
            type: [Number, Date],
            default() {
                return new Date()
            }
        },
        /**
         * 最小值
         */
        minTime: {
            type: [Date, String],
            default() {
                return new Date()
            }
        },
        /**
         * 最小值
         */
        type: {
            type: String,
            default: 'start',
            validator(value) {
                return ['start', 'end'].includes(value)
            }
        }
    },
    emits: ['on-change', 'update:modelValue', 'on-canel', 'on-confirm', 'on-click'],
    setup(props, { emit }) {
        const zmzTimepickerTime = ref(null);
        const zmzTimepickerTimeLi = ref(null);
        const zmzTimepickerTimeHour = ref(null);
        const zmzTimepickerTimeMinute = ref(null);
        const zmzTimepickerTimeSecond = ref(null);
        const minTimeHourCurrent = ref(null)
        const minTimeMinuteCurrent = ref(null)
        const minTimeSecondCurrent = ref(null)

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('on-change', val);
                emit('update:modelValue', val);
            }
        });

        watch(() => props.minTime, (val) => {
            if (val && props.type == 'end') {
                minTimeHourCurrent.value = new Date(val).getHours();
                minTimeMinuteCurrent.value = new Date(val).getMinutes();
                minTimeSecondCurrent.value = new Date(val).getSeconds();
            }
        }, { immediate: true, lazy: true })

        // 正常
        const hourCurrent = computed(() => {
            if (model.value) {
                return new Date(model.value).getHours();
            } else {
                return new Date(props.defaultValue).getHours();
            }
        });

        const minuteCurrent = computed(() => {
            if (model.value) {
                return new Date(model.value).getMinutes();
            } else {
                return new Date(props.defaultValue).getMinutes();
            }
        });

        const secondCurrent = computed(() => {
            if (model.value) {
                return new Date(model.value).getSeconds();
            } else {
                return new Date(props.defaultValue).getSeconds();
            }
        });

        const hourListData = computed(() => {
            let hourList = [];
            for (let i = 0; i < 24; i++) {
                let disabled = false;
                let active = false;
                if (hourCurrent.value == i && hourCurrent.value != '') {
                    active = true;
                    nextTick(() => {
                        setTimeout(() => {
                            if (zmzTimepickerTimeLi.value[0]) {
                                let height = zmzTimepickerTimeLi.value[0].offsetHeight;
                                zmzTimepickerTimeHour.value.$el.querySelector('.zmz-scrollbar__wrap').scrollTo(0, height * i);
                            }
                        }, 13);
                    });
                }

                if (minTimeHourCurrent.value > i) {
                    disabled = true;
                }

                hourList.push({
                    date: i,
                    active: active,
                    disabled: disabled
                });
            }
            return hourList;
        });

        const minuteListData = computed(() => {
            let minuteList = [];
            for (let i = 0; i < 60; i++) {
                let disabled = false;
                let active = false;
                if (minuteCurrent.value == i && minuteCurrent.value != '') {
                    active = true;
                    nextTick(() => {
                        setTimeout(() => {
                            if (zmzTimepickerTimeLi.value[0]) {
                                let height = zmzTimepickerTimeLi.value[0].offsetHeight;
                                zmzTimepickerTimeMinute.value.$el.querySelector('.zmz-scrollbar__wrap').scrollTo(0, height * i);
                            }
                        }, 13);
                    });
                }
                if (minTimeHourCurrent.value >= hourCurrent.value && minTimeMinuteCurrent.value > i) {
                    disabled = true;
                }

                minuteList.push({
                    date: i,
                    active: active,
                    disabled: disabled
                });
            }
            return minuteList;
        });

        const secondListData = computed(() => {
            let secondList = [];
            for (let i = 0; i < 60; i++) {
                let disabled = false;
                let active = false;
                if (secondCurrent.value == i && secondCurrent.value != '') {
                    active = true;
                    nextTick(() => {
                        setTimeout(() => {
                            if (zmzTimepickerTimeLi.value[0]) {
                                let height = zmzTimepickerTimeLi.value[0].offsetHeight;
                                zmzTimepickerTimeSecond.value.$el.querySelector('.zmz-scrollbar__wrap').scrollTo(0, height * i);
                            }
                        }, 13);
                    });
                }

                if (minTimeHourCurrent.value >= hourCurrent.value && minTimeMinuteCurrent.value >= minuteCurrent.value && minTimeSecondCurrent.value > i) {
                    disabled = true;
                }

                secondList.push({
                    date: i,
                    active: active,
                    disabled: disabled
                });
            }
            return secondList;
        });

        const handleClick = (type, item) => {
            if (item.disabled) return;
            if (type == 'hour') {
                model.value = updateDate(getDate(model.value), item.date, minuteCurrent.value, secondCurrent.value);
            }

            if (type == 'minute') {
                model.value = updateDate(getDate(model.value), hourCurrent.value, item.date, secondCurrent.value);
            }

            if (type == 'second') {
                model.value = updateDate(getDate(model.value), hourCurrent.value, minuteCurrent.value, item.date);
            }
            emit('on-click');
        };

        const getDate = (date) => {
            if (date) {
                return new Date(date)
            }
            return new Date()
        }

        // 末尾补0
        const initDate = val => {
            if (val < 10) {
                return '0' + parseInt(val);
            } else {
                return parseInt(val);
            }
        };

        return {
            hourCurrent,
            minuteCurrent,
            secondCurrent,
            handleClick,
            hourListData,
            minuteListData,
            secondListData,
            model,
            initDate,
            zmzTimepickerTime,
            zmzTimepickerTimeLi,
            zmzTimepickerTimeHour,
            zmzTimepickerTimeMinute,
            zmzTimepickerTimeSecond
        };
    }
};
</script>
