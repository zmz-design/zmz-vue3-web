<!-- 秒,分钟 -->
<template>
    <div class="zmz-cron-datetime">
        <div class="zmz-cron-datetime__item">
            <div class="zmz-cron-datetime__item__radio" :class="{ 'zmz-cron-datetime__item__radio--active': currentType == '1' }"
                @click="handleTypeClick('1')">
                <span class="zmz-cron-datetime__item__radio__dot"></span>
                <span class="zmz-cron-datetime__item__radio__text">每分</span>
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
                    @input="handleCycleStart('2')" :min="1" :max="59">
            </div>
            <div class="zmz-cron-datetime__item__text">至</div>
            <div class="zmz-cron-datetime__item__input">
                <input class="zmz-cron-datetime__item__input__inner" type="number" v-model="cycle.end"
                    @input="handleCycleEnd('2')" :min="2" :max="59">
            </div>
            <div class="zmz-cron-datetime__item__text">分</div>
        </div>
        <div class="zmz-cron-datetime__item">
            <div class="zmz-cron-datetime__item__radio" :class="{ 'zmz-cron-datetime__item__radio--active': currentType == '3' }"
                @click="handleTypeClick('3')">
                <span class="zmz-cron-datetime__item__radio__dot"></span>
                <span class="zmz-cron-datetime__item__radio__text">循环</span>
            </div>
            <div class="zmz-cron-datetime__item__text">从</div>
            <div class="zmz-cron-datetime__item__input">
                <input class="zmz-cron-datetime__item__input__inner" type="number" v-model="loop.start"
                    @input="handleLoopStart('3')" :min="0" :max="59">
            </div>
            <div class="zmz-cron-datetime__item__text">分开始，每</div>
            <div class="zmz-cron-datetime__item__input">
                <input class="zmz-cron-datetime__item__input__inner" type="number" v-model="loop.end"
                    @input="handleLoopEnd('3')" :min="1" :max="59">
            </div>
            <div class="zmz-cron-datetime__item__text">分执行一次</div>
        </div>
        <div class="zmz-cron-datetime__item zmz-cron-datetime__item__column">
            <div class="zmz-cron-datetime__item__radio" :class="{ 'zmz-cron-datetime__item__radio--active': currentType == '4' }"
                @click="handleTypeClick('4')">
                <span class="zmz-cron-datetime__item__radio__dot"></span>
                <span class="zmz-cron-datetime__item__radio__text">指定</span>
            </div>
            <div class="zmz-cron-datetime__item__checkbox__group">
                <div class="zmz-cron-datetime__item__checkbox__group__item" v-for="i in 6" :key="i">
                    <div @change="type = '4'" v-for="j in 10" :key="j" class="zmz-cron-datetime__item__checkbox"
                        :class="{ 'zmz-cron-datetime__item__checkbox--active': appoint.includes((i - 1) + '' + (j - 1)) }"
                        @click="handleMonth('4', (i - 1) + '' + (j - 1))">
                        <span class="zmz-cron-datetime__item__checkbox__dot"></span>
                        <span class="zmz-cron-datetime__item__checkbox__text">{{ (i - 1) + '' + (j - 1) }}</span>
                    </div>
                </div>
            </div>
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
        const currentType = ref('1')
        const cycle = reactive({ // 周期
            start: 1,
            end: 2
        })

        const week = reactive({
            start: 1,
            end: 2
        })
        const loop = reactive({ // 周期
            start: 0,
            end: 1
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
                case '7': // 指定周
                    result.push(`${week.start}#${week.end}`)
                    break
                case '8': // 工作日
                    result.push(`${work.value}W`)
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

        const handleCycleStart = (type) => {
            if (cycle.start > cycle.end) {
                cycle.start = cycle.end
            }

            currentType.value = type
            setValue()
        }

        const handleCycleEnd = (type) => {
            if (cycle.start > cycle.end) {
                cycle.end = cycle.start
            }

            currentType.value = type
            setValue()
        }

        const handleLoopStart = (type) => {
            currentType.value = type
            setValue()
        }

        const handleLoopEnd = (type) => {
            currentType.value = type
            setValue()
        }

        const handleLast = (type) => {
            currentType.value = type
            setValue()
        }

        const handleWork = (type) => {
            currentType.value = type
            setValue()
        }

        const handleMonth = (type, i) => {
            let index = appoint.value.findIndex(item => item == i)
            if (index > -1) {
                appoint.value.splice(index, 1);
            } else {
                appoint.value.push(i);
            }
            currentType.value = type
            setValue()
        }

        return {
            currentType,
            cycle,
            loop,
            work,
            week,
            last,
            appoint,
            handleTypeClick,
            updateModelValue,
            model,
            handleCycleStart,
            handleCycleEnd,
            handleLoopStart,
            handleLoopEnd,
            handleMonth,
            handleLast,
            handleWork
        };
    }
}
</script>