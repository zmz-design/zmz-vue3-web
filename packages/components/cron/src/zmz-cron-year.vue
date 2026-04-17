<template>
    <div class="zmz-cron-datetime" :val="model">
        <div class="zmz-cron-datetime__item">
            <div class="zmz-cron-datetime__item__radio" :class="{ 'zmz-cron-datetime__item__radio--active': currentType == '1' }"
                @click="handleTypeClick('1')">
                <span class="zmz-cron-datetime__item__radio__dot"></span>
                <span class="zmz-cron-datetime__item__radio__text">每年</span>
            </div>
        </div>
        <div class="zmz-cron-datetime__item">
            <div class="zmz-cron-datetime__item__radio" :class="{ 'zmz-cron-datetime__item__radio--active': currentType == '5' }"
                @click="handleTypeClick('5')">
                <span class="zmz-cron-datetime__item__radio__dot"></span>
                <span class="zmz-cron-datetime__item__radio__text">不指定</span>
            </div>
        </div>
        <div class="zmz-cron-datetime__item">
            <div class="zmz-cron-datetime__item__radio" :class="{ 'zmz-cron-datetime__item__radio--active': currentType == '2' }"
                @click="handleTypeClick('2')">
                <span class="zmz-cron-datetime__item__radio__dot"></span>
                <span class="zmz-cron-datetime__item__radio__text">周期</span>
            </div>
            <div class="zmz-cron-datetime__item__text">从</div>
            <div class="zmz-cron-datetime__item__input">
                <input class="zmz-cron-datetime__item__input__inner" type="number" v-model="cycle.start"
                    @input="handleCycleStart('2')" :min="2000">
            </div>
            <div class="zmz-cron-datetime__item__text">年至</div>
            <div class="zmz-cron-datetime__item__input">
                <input class="zmz-cron-datetime__item__input__inner" type="number" v-model="cycle.end"
                    @input="handleCycleEnd('2')" :min="2000">
            </div>
            <div class="zmz-cron-datetime__item__text">年</div>
        </div>
    </div>
</template>
  
<script>
import { computed, onMounted, reactive, ref, watch } from 'vue';
export default {
    props: {
        modelValue: {
            type: String,
            default: '*'
        }
    },
    setup(props, { emit }) {
        const year = new Date().getFullYear()
        const currentType = ref('1')
        const cycle = reactive({ // 周期
            start: year,
            end: year
        })

        const week = reactive({
            start: 0,
            end: 0
        })
        const loop = reactive({ // 周期
            start: 0,
            end: 0
        })

        const work = ref(0)

        const last = ref(0)

        const appoint = ref([])

        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val)
            }
        })

        const updateModelValue = () => {
            if (!model.value) {
                return
            }
            if (model.value === '?') {
                currentType.value = '5'
            } else if (model.value.indexOf('-') !== -1) { // 2周期
                if (model.value.split('-').length === 2) {
                    currentType.value = '2'
                    cycle.start = model.value.split('-')[0]
                    cycle.end = model.value.split('-')[1]
                }
            } else if (model.value.indexOf('/') !== -1) { // 3循环
                if (model.value.split('/').length === 2) {
                    currentType.value = '3'
                    loop.start = model.value.split('/')[0]
                    loop.end = model.value.split('/')[1]
                }
            } else if (model.value.indexOf('*') !== -1) { // 1每
                currentType.value = '1'
            } else if (model.value.indexOf('L') !== -1) { // 6最后
                currentType.value = '6'
                last.value = model.value.replace('L', '')
            } else if (model.value.indexOf('#') !== -1) { // 7指定周
                if (model.value.split('#').length === 2) {
                    currentType.value = '7'
                    week.start = model.value.split('#')[0]
                    week.end = model.value.split('#')[1]
                }
            } else if (model.value.indexOf('W') !== -1) { // 8工作日
                currentType.value = '8'
                work.value = model.value.replace('W', '')
            } else { // *
                currentType.value = '4'
                appoint.value = model.value.split(',')
            }
        }

        const handleTypeClick = (index) => {
            currentType.value = index
            setValue()
        }

        const setValue = () => {
            let result = [];
            switch (currentType.value) {
                case '1': // 每秒
                    result.push('*')
                    break
                case '2': // 年期
                    result.push(`${cycle.start}-${cycle.end}`)
                    break
                case '3': // 循环
                    result.push(`${loop.start}/${loop.end}`)
                    break
                case '4': // 指定
                    result.push(appoint.value.join(','))
                    break
                case '6': // 最后
                    result.push(`${last.value === 0 ? '' : last.value}L`)
                    break
                default: // 不指定
                    result.push('?')
                    break
            }
            model.value = result.join('');
        }

        onMounted(() => {
            setValue()
            updateModelValue()
        })

        watch(() => model.value, () => {
            updateModelValue()
        })

        const handleCycleStart = (index) => {
            if (cycle.start > cycle.end) {
                cycle.start = cycle.end
            }

            currentType.value = index
            setValue()
        }

        const handleCycleEnd = (index) => {
            if (cycle.start > cycle.end) {
                cycle.end = cycle.start
            }

            currentType.value = index
            setValue()
        }

        return {
            currentType,
            cycle,
            loop,
            work,
            last,
            appoint,
            handleTypeClick,
            updateModelValue,
            model,
            handleCycleStart,
            handleCycleEnd
        };
    }
}
</script>