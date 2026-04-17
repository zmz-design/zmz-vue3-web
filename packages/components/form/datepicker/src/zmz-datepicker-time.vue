<template>
    <div class="zmz-datepicker__times">
        <div class="zmz-datepicker__times__date"><zmz-input :disabled="disabledDate" v-model="modelDateInput" @on-blur="handleBlur"></zmz-input></div>
        <div class="zmz-datepicker__times__time">
            <zmz-timepicker
                :disabled="disabledTime"
                v-model="model"
                :default-value="modelOld"
                @on-open="handleOpen"
                :clearbtn="false"
                :prefix="false"
                :suffix="false"
            ></zmz-timepicker>
        </div>
    </div>
</template>
<script>
import { ref, computed, watch, onMounted } from 'vue';
import ZmzInput from '../../input/index.js';
import ZmzTimepicker from '../../timepicker/index.js';
import { updateDate, determineTimeOrDate, getYMD } from '../../../../utils/date.js';
export default {
    name: 'ZmzDatepickerTime',
    components: {
        ZmzInput,
        ZmzTimepicker
    },
    props: {
        modelValue: {
            type: [String, Number, Date],
            default: () => new Date()
        },
        old: {
            type: [String, Number, Date],
            default: () => new Date()
        },
        disabledTime: {
            type: Boolean,
            default: false
        },
        disabledDate: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'update:old', 'on-blur'],
    setup(props, { emit }) {
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
                return props.old ? new Date(props.old) : new Date();
            },
            set(val) {
                emit('update:old', val);
            }
        });

        const hour = computed(() => {
            if (model.value) {
                return new Date(model.value).getHours();
            } else {
                return new Date().getHours();
            }
        });

        const minute = computed(() => {
            if (model.value) {
                return new Date(model.value).getMinutes();
            } else {
                return new Date().getMinutes();
            }
        });

        const second = computed(() => {
            if (model.value) {
                return new Date(model.value).getSeconds();
            } else {
                return new Date().getSeconds();
            }
        });

        const modelDateInput = ref('');

        watch(
            () => model.value,
            val => {
                modelDateInput.value = getYMD(val, 'string');
            }
        );

        onMounted(() => {
            modelDateInput.value = getYMD(model.value, 'string');
        });

        const handleBlur = e => {
            if (determineTimeOrDate(e.target.value)) {
                model.value = updateDate(new Date(e.target.value), hour.value, minute.value, second.value);
                emit('on-blur', model.value);
            }
        };

        const handleOpen = () => {
            if (!model.value) {
                model.value = new Date();
                modelOld.value = new Date();
            }
        };

        return {
            model,
            modelOld,
            handleBlur,
            handleOpen,
            modelDateInput
        };
    }
};
</script>
