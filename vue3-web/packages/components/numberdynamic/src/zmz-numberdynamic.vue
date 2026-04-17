<template>
    <span class="zmz-numberdynamic">
        <span ref="zmzNumberdynamicNumber" class="zmz-numberdynamic__number">{{ numberValue }}</span>
    </span>
</template>

<script>
import { ref, watch } from 'vue';
export default {
    name: 'ZmzNumberdynamic',
    props: {
        /**
         * 加载时间
         */
        time: {
            type: Number,
            default: 10
        },
        /**
         * 结束值
         */
        endValue: {
            type: Number,
            default: 0
        },
        /**
         * 开始值
         */
        startValue: {
            type: Number,
            default: 0
        },
        /**
         * 是否分割
         */
        division: {
            type: Boolean,
            default: false
        },
        /**
         * 分割位数
         */
        divisionDigit: {
            type: Number,
            default: 3
        },
        /**
         * 分割符号
         */
        divisionSymbol: {
            type: String,
            default: ','
        },
        /**
         * 加载速度
         */
        speed: {
            type: Number,
            default: 10
        }
    },
    emits: ['on-animation-end'],
    setup(props, { emit }) {
        const zmzNumberdynamicNumber = ref(null);
        const numberValue = ref(props.startValue)

        // 动态加载
        const numberGrow = () => {
            let step = ((props.endValue - numberValue.value) * 10) / (props.time * 100);
            let current = 0;
            let start = numberValue.value;
            let t = setInterval(function () {
                start += step;
                if (start > props.endValue) {
                    clearInterval(t);
                    start = props.endValue;
                    t = null;
                    emit('on-animation-end')
                }
                if (current === start) {
                    return;
                }
                current = parseInt(start);
                if (props.division) {
                    let regExp = new RegExp("(\\d)(?=(?:\\d{" + props.divisionDigit + "}[+]?)+$)", "g")
                    numberValue.value = current.toString().replace(regExp, '$1' + props.divisionSymbol);
                } else {
                    numberValue.value = current.toString();
                }
            }, props.speed);
        };

        watch([() => props.startValue, () => props.endValue], ([start, end]) => {
            numberValue.value = start;
            if (end) {
                numberGrow()
            }
        }, {
            deep: true,
            immediate: true
        })

        return {
            numberGrow,
            zmzNumberdynamicNumber,
            numberValue
        };
    }
};
</script>