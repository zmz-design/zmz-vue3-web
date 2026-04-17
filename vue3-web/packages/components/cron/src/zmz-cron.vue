<template>
    <div class="zmz-cron">
        <div class="zmz-cron__tabs">
            <div class="zmz-cron__tabs__header">
                <div class="zmz-cron__tabs__header__item"
                    :class="{ 'zmz-cron__tabs__header__item--active': currentTabs == 'second' }"
                    @click="handleHeaderTabs('second')"><span class="zmz-cron__tabs__header__item__text">秒</span></div>
                <div class="zmz-cron__tabs__header__item"
                    :class="{ 'zmz-cron__tabs__header__item--active': currentTabs == 'minute' }"
                    @click="handleHeaderTabs('minute')"><span class="zmz-cron__tabs__header__item__text">分</span></div>
                <div class="zmz-cron__tabs__header__item"
                    :class="{ 'zmz-cron__tabs__header__item--active': currentTabs == 'hour' }"
                    @click="handleHeaderTabs('hour')"><span class="zmz-cron__tabs__header__item__text">时</span></div>
                <div class="zmz-cron__tabs__header__item"
                    :class="{ 'zmz-cron__tabs__header__item--active': currentTabs == 'day' }"
                    @click="handleHeaderTabs('day')"><span class="zmz-cron__tabs__header__item__text">日</span></div>
                <div class="zmz-cron__tabs__header__item"
                    :class="{ 'zmz-cron__tabs__header__item--active': currentTabs == 'week' }"
                    @click="handleHeaderTabs('week')"><span class="zmz-cron__tabs__header__item__text">周</span></div>
                <div class="zmz-cron__tabs__header__item"
                    :class="{ 'zmz-cron__tabs__header__item--active': currentTabs == 'month' }"
                    @click="handleHeaderTabs('month')"><span class="zmz-cron__tabs__header__item__text">月</span></div>
                <div class="zmz-cron__tabs__header__item"
                    :class="{ 'zmz-cron__tabs__header__item--active': currentTabs == 'year' }"
                    @click="handleHeaderTabs('year')"><span class="zmz-cron__tabs__header__item__text">年</span></div>
            </div>
            <div class="zmz-cron__tabs__section">
                <div class="zmz-cron__tabs__section__item" v-show="currentTabs == 'second'">
                    <second v-model="secondValue" lable="秒"></second>
                </div>
                <div class="zmz-cron__tabs__section__item" v-show="currentTabs == 'minute'">
                    <minute v-model="minuteValue" lable="分"></minute>
                </div>
                <div class="zmz-cron__tabs__section__item" v-show="currentTabs == 'hour'">
                    <hour v-model="hourValue" lable="时"></hour>
                </div>
                <div class="zmz-cron__tabs__section__item" v-show="currentTabs == 'day'">
                    <day v-model="dayValue" lable="日"></day>
                </div>
                <div class="zmz-cron__tabs__section__item" v-show="currentTabs == 'week'">
                    <week v-model="weekValue" lable="周"></week>
                </div>
                <div class="zmz-cron__tabs__section__item" v-show="currentTabs == 'month'">
                    <month v-model="monthValue" lable="月"></month>
                </div>
                <div class="zmz-cron__tabs__section__item" v-show="currentTabs == 'year'">
                    <year v-model="yearValue" lable="年"></year>
                </div>
            </div>
        </div>
        <!-- table -->
        <table border="0" cellspacing="0" cellpadding="0" class="zmz-cron__table">
            <thead class="zmz-cron__table__thead">
                <tr class="zmz-cron__table__thead__tr">
                    <th class="zmz-cron__table__thead__tr__th">秒</th>
                    <th class="zmz-cron__table__thead__tr__th">分</th>
                    <th class="zmz-cron__table__thead__tr__th">时</th>
                    <th class="zmz-cron__table__thead__tr__th">日</th>
                    <th class="zmz-cron__table__thead__tr__th">月</th>
                    <th class="zmz-cron__table__thead__tr__th">周</th>
                    <th class="zmz-cron__table__thead__tr__th">年</th>
                </tr>
            </thead>
            <tbody class="zmz-cron__table__tbody">
                <tr class="zmz-cron__table__tbody__tr" v-for="(item, index) in tableData" :key="index">
                    <td class="zmz-cron__table__tbody__tr__td">{{ item.secondValue }}</td>
                    <td class="zmz-cron__table__tbody__tr__td">{{ item.minuteValue }}</td>
                    <td class="zmz-cron__table__tbody__tr__td">{{ item.hourValue }}</td>
                    <td class="zmz-cron__table__tbody__tr__td">{{ item.dayValue }}</td>
                    <td class="zmz-cron__table__tbody__tr__td">{{ item.monthValue }}</td>
                    <td class="zmz-cron__table__tbody__tr__td">{{ item.weekValue }}</td>
                    <td class="zmz-cron__table__tbody__tr__td">{{ item.yearValue }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue';
import minute from './zmz-cron-minute.vue'
import second from './zmz-cron-second.vue'
import hour from './zmz-cron-hour.vue'
import day from './zmz-cron-day.vue'
import month from './zmz-cron-month.vue'
import week from './zmz-cron-week.vue'
import year from './zmz-cron-year.vue'
export default {
    name: 'ZmzCron',
    components: {
        minute,
        hour,
        day,
        month,
        week,
        year,
        second
    },
    props: {
        modelValue: {
            type: String,
            default: '* * * * * * *'
        }
    },
    setup(props, { emit }) {
        const currentTabs = ref('second')
        const secondValue = ref('*')
        const minuteValue = ref('*')
        const hourValue = ref('*')
        const dayValue = ref('*')
        const monthValue = ref('*')
        const weekValue = ref('*')
        const yearValue = ref('*')
        const tableData = ref([])

        const handleHeaderTabs = (index) => {
            currentTabs.value = index
        }

        onMounted(() => {
            updateValue()
        })

        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val)
            }
        })

        const updateValue = () => {
            if (!model.value) {
                return
            }
            let arrays = model.value.split(' ')
            secondValue.value = arrays[0]
            minuteValue.value = arrays[1]
            hourValue.value = arrays[2]
            dayValue.value = arrays[3]
            monthValue.value = arrays[4]
            weekValue.value = arrays[5]
            yearValue.value = arrays[6]
        }

        watch(() => model.value, () => {
            updateValue()
        })

        watch([() => secondValue.value, () => minuteValue.value, () => hourValue.value, () => dayValue.value, () => monthValue.value, () => weekValue.value, () => yearValue.value], () => {
            tableData.value = [{
                secondValue: secondValue.value,
                minuteValue: minuteValue.value,
                hourValue: hourValue.value,
                dayValue: dayValue.value,
                monthValue: monthValue.value,
                weekValue: weekValue.value,
                yearValue: yearValue.value
            }];

            if (!dayValue.value && !weekValue.value) {
                return ''
            }
            if (dayValue.value === '?' && weekValue.value === '?') {
                console.error('日期与星期不可以同时为“不指定”')
            }
            if (dayValue.value !== '?' && weekValue.value !== '?') {
                console.error('日期与星期必须有一个为“不指定”')
            }
            let newValue = `${secondValue.value} ${minuteValue.value} ${hourValue.value} ${dayValue.value} ${monthValue.value} ${weekValue.value} ${yearValue.value}`
            if (newValue !== model.value) {
                model.value = newValue
            }
        })

        return {
            secondValue,
            minuteValue,
            hourValue,
            dayValue,
            monthValue,
            weekValue,
            yearValue,
            currentTabs,
            handleHeaderTabs,
            tableData
        };
    }
}
</script>