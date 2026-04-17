<template>
    <div class="zmz-timepicker__range">
        <div class="zmz-timepicker__range__wrap zmz-timepicker__range__wrap--left">
            <div class="zmz-timepicker__range__title">开始时间</div>
            <div class="zmz-timepicker__range__content">
                <zmz-timepicker-time v-model="modelStart" type="start" :default-value="minDate"></zmz-timepicker-time>
            </div>
        </div>
        <div class="zmz-timepicker__range__wrap zmz-timepicker__range__wrap--right">
            <div class="zmz-timepicker__range__title">结束时间</div>
            <div class="zmz-timepicker__range__content">
                <zmz-timepicker-time v-model="modelEnd" type="end" :default-value="maxDate"
                    :min-time="modelStart"></zmz-timepicker-time>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, watch, ref, onMounted } from 'vue';
import ZmzTimepickerTime from './zmz-timepicker-time.vue';
import { latestTime, earliestTime } from '../../../../utils/date.js';
export default {
    name: 'ZmzTimepickerRange',
    components: {
        ZmzTimepickerTime
    },
    props: {
        /**
         * 绑定值
         */
        modelValue: [String, Number, Date, Array]
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const modelStart = ref(null);
        const modelEnd = ref(null);
        const minDate = ref(new Date());
        const maxDate = ref(latestTime(new Date(), 60 * 60 * 1000));

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        watch([() => modelStart.value, () => modelEnd.value], ([start, end]) => {
            if (start && !end) {
                model.value = [start, latestTime(start, 60 * 60 * 1000)];
            }

            if (!start && end) {
                model.value = [earliestTime(end, 60 * 60 * 1000), end];
            }

            if (start && end) {
                model.value = [start, end];
            }
        });

        onMounted(() => {
            if (model.value.length) {
                modelStart.value = model.value[0];
                modelEnd.value = model.value[1];
            }
        });

        return {
            modelStart,
            modelEnd,
            minDate,
            maxDate
        };
    }
};
</script>
