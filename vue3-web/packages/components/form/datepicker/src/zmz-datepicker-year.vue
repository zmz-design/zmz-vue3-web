<template>
    <div class="zmz-datepicker__years">
        <div class="zmz-datepicker__title">
            <div class="zmz-datepicker__title__prev">
                <div class="zmz-datepicker__title__prev__year" @click="handlePrevYearClick"><i class="zmz-icon--doublearrow-left"></i></div>
            </div>
            <div class="zmz-datepicker__title__text" @click="getSwitchYear">
                <span class="zmz-datepicker__title__text__label">{{ yearStart }} 年</span>
                <span class="zmz-datepicker__title__text__label">-</span>
                <span class="zmz-datepicker__title__text__label">{{ yearEnd }} 年</span>
            </div>
            <div class="zmz-datepicker__title__next">
                <div class="zmz-datepicker__title__next__year" @click="handleNextYearClick"><i class="zmz-icon--doublearrow-right"></i></div>
            </div>
        </div>
        <div class="zmz-datepicker__years__year">
            <div class="zmz-datepicker__years__year__ul" v-for="(item, itemIndex) in yearListData" :key="itemIndex">
                <div class="zmz-datepicker__years__year__ul__li" v-for="(keyItem, keyIndex) in item" :key="keyIndex" @click="handleYearClick(keyItem)">
                    <div
                        class="zmz-datepicker__years__year__ul__li__text"
                        :class="{
                            'zmz-datepicker__years__year__ul__li__text--active': keyItem.active,
                            'zmz-datepicker__years__year__ul__li__text--current': keyItem.current,
                            'zmz-datepicker__years__year__ul__li__text--disabled': keyItem.disable
                        }"
                    >
                        <span class="zmz-datepicker__years__year__ul__li__text__label">{{ keyItem.year }}年</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { formatDate } from '../../../../utils/date.js';
export default {
    name: 'ZmzDatepickerYear',
    props: {
        type: {
            type: String,
            default: 'date'
        },
        modelValue: {
            type: [String, Number, Date, Array],
            default: () => new Date()
        },
        current: {
            type: [String, Number, Date],
            default: () => new Date()
        },
        defaultValue: {
            type: [String, Number, Date],
            default: () => new Date()
        }
    },
    emits: ['update:modelValue', 'on-change', 'on-click', 'on-prev-year', 'on-next-year'],
    setup(props, { emit }) {
        const toYear = ref(new Date().getFullYear());
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
                emit('on-change', val);
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
                return new Date().getMonth();
            }
        });

        // 点击年回调
        const handleYearClick = item => {
            emit('on-click', item);
        };

        // 获取年数
        const yearListData = computed(() => {
            let yearList = [];
            let yearCurrent = [];
            // 获取年份
            for (let i = year.value - Number(year.value % 10); i <= Number(year.value) + (9 - (year.value % 10)); i++) {
                let current = false;
                let active = false;

                if (i == formatDate(modelCurrent.value, 'yyyy')) {
                    current = true;
                }

                if (i == formatDate(props.defaultValue, 'yyyy')) {
                    active = true;
                }

                yearCurrent.push({
                    year: i,
                    date: i + '-01-01',
                    disable: false,
                    current: current,
                    active: active
                });
            }

            // 数组分组，每4个一组
            for (let i = 0; i < yearCurrent.length; i += 4) {
                yearList.push(yearCurrent.slice(i, i + 4));
            }

            return yearList;
        });

        const yearStart = computed(() => {
            return year.value - Number(year.value % 10);
        });

        const yearEnd = computed(() => {
            return year.value + Number(9 - (year.value % 10));
        });

        // 上一年
        const handlePrevYearClick = () => {
            emit('on-prev-year', yearStart.value, month.value);
        };
        // 下一年
        const handleNextYearClick = () => {
            emit('on-next-year', yearEnd.value, month.value);
        };

        return {
            yearListData,
            toYear,
            handleYearClick,
            yearStart,
            yearEnd,
            handlePrevYearClick,
            handleNextYearClick
        };
    }
};
</script>
