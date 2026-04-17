<template>
    <ul class="zmz-pagination__jumper">
        <div class="zmz-pagination__jumper__text">跳至</div>
        <div class="zmz-pagination__jumper__input">
            <zmz-input :size="size" :disabled="disabled" v-model="defaultModel" @on-blur="handleOnBlur"></zmz-input>
        </div>
        <div class="zmz-pagination__jumper__text">页</div>
    </ul>
</template>

<script>
import { watch, ref } from 'vue';
import ZmzInput from '../../form/input/index.js';
export default {
    name: 'ZmzPaginationJumper',
    components: {
        ZmzInput,
    },
    props: {
        current: {
            type: [Number, String],
            default: 1
        },
        /**
         * 最大值
         */
        pageNumTotal: {
            type: Number,
            default: 0
        },
        /**
         * 禁用分页
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 大小
         */
        size: {
            type: String,
            default: 'default'
        },
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const defaultModel = ref(props.current)

        watch(() => props.current, (val) => {
            if (props.pageNumTotal < val) {
                defaultModel.value = props.pageNumTotal
            } else {
                defaultModel.value = val
            }
        }, { immediate: true })

        const handleOnBlur = (e) => {
            let currentValue = 0
            if (props.pageNumTotal < parseInt(e.target.value)) {
                currentValue = props.pageNumTotal
            } else {
                currentValue = parseInt(e.target.value)
            }
            defaultModel.value = currentValue
            emit('on-change', currentValue)
        }

        return {
            handleOnBlur,
            defaultModel
        };
    }
};
</script>
