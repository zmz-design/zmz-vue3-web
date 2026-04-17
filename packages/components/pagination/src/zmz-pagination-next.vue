<template>
    <div class="zmz-pagination__next" :class="{ 'zmz-pagination__next--disabled': isDisabled }"
        @click="handleOnNextPage">
        <button class="zmz-pagination__next__button" type="button" :disabled="isDisabled">
            <template v-if="nextText">{{ nextText }}</template>
            <i class="zmz-pagination__button__icon zmz-icon--arrow-right" v-else></i>
        </button>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'ZmzPaginationNext',
    props: {
        /**
         * 当前值
         */
        current: {
            type: Number,
            default: 0
        },
        /**
         * 最大值
         */
        pageNumTotal: {
            type: Number,
            default: 0
        },
        nextText: {
            type: String,
            default: ''
        },
        /**
         * 禁用分页
         */
        disabled: {
            type: Boolean,
            default: false
        },
    },
    emits: ['on-next-page'],
    setup(props, { emit }) {
        // 总页数
        const isDisabled = computed(() => {
            return props.current === props.pageNumTotal;
        });

        const handleOnNextPage = () => {
            if (isDisabled.value) return
            emit('on-next-page')
        }

        return {
            isDisabled,
            handleOnNextPage
        };
    }
};
</script>
