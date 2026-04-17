<template>
    <div class="zmz-pagination__prev" :class="{ 'zmz-pagination__prev--disabled': isDisabled }"
        @click="handleOnPrevPage">
        <button class="zmz-pagination__prev__button" type="button" :disabled="isDisabled">
            {{ firstText ? firstText : '首页' }}
        </button>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'ZmzPaginationFirst',
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
        firstText: {
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
    emits: ['on-first-page'],
    setup(props, { emit }) {

        // 总页数
        const isDisabled = computed(() => {
            return props.current === 1;
        });

        const handleOnPrevPage = () => {
            if (isDisabled.value) return
            emit('on-first-page')
        }

        return {
            isDisabled,
            handleOnPrevPage
        };
    }
};
</script>
