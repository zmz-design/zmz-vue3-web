<template>
    <div class="zmz-datepicker__timesrange">
        <zmz-datepicker-time
            :disabled-date="disabled"
            :disabled-time="disabled"
            v-model="modelStart"
            v-model:old="modelStartOld"
            @on-blur="hanldeOnBlur($event, 'start')"
        ></zmz-datepicker-time>
        <zmz-datepicker-time
            :disabled-date="disabled"
            :disabled-time="disabled"
            v-model="modelEnd"
            v-model:old="modelEndOld"
            @on-blur="hanldeOnBlur($event, 'end')"
        ></zmz-datepicker-time>
    </div>
</template>
<script>
import { ref, computed, watch, onMounted } from 'vue';
import { latestTime, earliestTime } from '../../../../utils/date.js';
import ZmzDatepickerTime from './zmz-datepicker-time.vue';
export default {
    name: 'ZmzDatepickerTimeRange',
    components: {
        ZmzDatepickerTime
    },
    props: {
        modelValue: {
            type: Array,
            default: () => []
        },
        old: {
            type: [String, Number, Date, Array],
            default: () => new Date()
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'update:old', 'on-blur'],
    setup(props, { emit }) {
        const modelStart = ref(null);
        const modelEnd = ref(null);
        const modelStartOld = ref(null);
        const modelEndOld = ref(null);
        const modelDateInput = ref('');
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        const modelOld = computed({
            get() {
                return props.old;
            },
            set(val) {
                emit('update:old', val);
            }
        });

        watch(
            () => model.value,
            news => {
                modelStart.value = news[0];
                modelEnd.value = news[1];
                modelStartOld.value = news[0];
                modelEndOld.value = news[1];
            }
        );

        watch([() => modelStart.value, () => modelEnd.value], ([start, end]) => {
            if (start && !end) {
                modelStartOld.value = start;
                model.value = [start, latestTime(start, 60 * 60 * 1000)];
            }

            if (!start && end) {
                modelEndOld.value = end;
                model.value = [earliestTime(end, 60 * 60 * 1000), end];
            }

            if (start && end) {
                modelStartOld.value = start;
                modelEndOld.value = end;
                model.value = [start, end];
            }
        });

        onMounted(() => {
            if (model.value.length == 2) {
                modelStart.value = model.value[0];
                modelEnd.value = model.value[1];
                modelStartOld.value = model.value[0];
                modelEndOld.value = model.value[1];
            }
        });

        const handleOpen = () => {
            if (!model.value) {
                model.value = new Date();
                modelOld.value = new Date();
            }
        };

        const hanldeOnBlur = (date, type) => {
            emit('on-blur', date, type);
        };

        return {
            model,
            handleOpen,
            modelDateInput,
            modelStart,
            modelEnd,
            modelStartOld,
            modelEndOld,
            modelOld,
            hanldeOnBlur
        };
    }
};
</script>
