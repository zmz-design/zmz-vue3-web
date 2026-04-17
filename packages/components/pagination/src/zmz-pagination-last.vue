<template>
    <div class="zmz-pagination__next" :class="{ 'zmz-pagination__next--disabled': isDisabled }"
        @click="handleOnNextPage">
        <button class="zmz-pagination__next__button" type="button" :disabled="isDisabled">
            {{ lastText ? lastText : '尾页' }}
        </button>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'ZmzPaginationLast',
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
        /**
         * 禁用分页
         */
         disabled: {
            type: Boolean,
            default: false
        },
    },
    emits: ['on-last-page'],
    setup(props, { emit }) {
        // 总页数
        const isDisabled = computed(() => {
            return props.current === props.pageNumTotal;
        });

        const handleOnNextPage = () => {
            if (isDisabled.value) return
            emit('on-last-page')
        }

        return {
            isDisabled,
            handleOnNextPage
        };
    }
};
</script>
