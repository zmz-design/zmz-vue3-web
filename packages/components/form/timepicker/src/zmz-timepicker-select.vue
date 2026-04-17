<template>
    <div class="zmz-timepicker__select">
        <zmz-scrollbar class="zmz-timepicker__scrollbar" ref="zmzTimepickerSelectBar">
            <div class="zmz-timepicker__select__item"
                :class="{ 'zmz-timepicker__select__item--active': item.active, 'zmz-timepicker__select__item--disabled': item.disabled }"
                v-for="(item, index) in selectTimeData" :key="index" @click="handleClick(item)"
                ref="zmzTimepickerSelectItem">
                {{ item.time }}
            </div>
        </zmz-scrollbar>
    </div>
</template>

<script>
import { ref, computed, nextTick } from 'vue';
export default {
    name: 'ZmzTimepickerSelect',
    props: {
        /**
         * 类型
         */
        type: {
            type: String,
            default: 'date'
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
         * 时间数据
         */
        time: {
            type: Array,
            default: () => []
        },
        /**
         * 绑定值
         */
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const zmzTimepickerSelectItem = ref(null);
        const zmzTimepickerSelectBar = ref(null);
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        const modelTime = computed({
            get() {
                return props.time;
            },
            set(val) {
                emit('update:time', val);
            }
        });

        const selectTimeData = computed(() => {
            let newList = [];
            modelTime.value.forEach((item, index) => {
                let active = false;
                let disabled = false;
                if (item === model.value) {
                    active = true;
                    nextTick(() => {
                        let height = zmzTimepickerSelectItem.value[0].offsetHeight;
                        setTimeout(() => {
                            if (zmzTimepickerSelectBar.value) {
                                zmzTimepickerSelectBar.value.$el.querySelector('.zmz-scrollbar__wrap').scrollTo(0, height * index);
                            }
                        }, 13);
                    });
                }
                if (props.options.minTime >= item || props.options.maxTime <= item) {
                    disabled = true;
                }
                newList.push({
                    time: item,
                    active: active,
                    disabled: disabled
                });
            });
            return newList;
        });

        const handleClick = item => {
            if (item.disabled) return;
            model.value = item.time;
            emit('on-change', item.time);
        };

        return {
            handleClick,
            selectTimeData,
            zmzTimepickerSelectBar,
            zmzTimepickerSelectItem,
            modelTime
        };
    }
};
</script>
