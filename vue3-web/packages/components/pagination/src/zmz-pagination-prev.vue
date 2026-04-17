<template>
    <div class="zmz-pagination__prev" :class="{ 'zmz-pagination__prev--disabled': isDisabled }"
        @click="handleOnPrevPage">
        <button class="zmz-pagination__prev__button" type="button" :disabled="isDisabled">
            <template v-if="prevText">{{ prevText }}</template>
            <i class="zmz-pagination__button__icon zmz-icon--arrow-left" v-else></i>
        </button>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'ZmzPaginationPrev',
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
        prevText: {
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
    emits: ['on-prev-page'],
    setup(props, { emit }) {

        // 总页数
        const isDisabled = computed(() => {
            return props.current === 1;
        });

        const handleOnPrevPage = () => {
            if (isDisabled.value) return
            emit('on-prev-page')
        }

        return {
            isDisabled,
            handleOnPrevPage
        };
    }
};
</script>
