<template>
    <div class="zmz-select__group">
        <div class="zmz-select__group__lable" v-if="label">{{ label }}</div>
        <div class="zmz-select__group__wrap">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZmzSelectOptionGroup',
    props: {
        /**
         * 文本
         */
        label: {
            type: String,
            default: ''
        }
    }
};
</script>
