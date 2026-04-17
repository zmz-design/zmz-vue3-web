<template>
    <div class="zmz-graphic">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'ZmzGraphic',
    props: {
        /**
         * 间距
         */
        spacing: {
            type: String,
            default: '5px 0 5px 0'
        }
    }
};
</script>
