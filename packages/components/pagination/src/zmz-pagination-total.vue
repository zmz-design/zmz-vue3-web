<template>
    <div class="zmz-pagination__total">
        共{{ total }}条
    </div>
</template>

<script>
export default {
    name: 'ZmzPaginationTotal',
    props: {
        /**
         * 总数
         */
        total: {
            type: Number,
            default: 0
        }
    }
};
</script>