<template>
    <div class="zmz-comment">
        <slot></slot>
    </div>
</template>
<script>
import { provide } from 'vue';
export default {
    name: 'ZmzComment',
    props: {
        /**
         * 嵌套偏移
         */
        offset: {
            type: String,
            default: '70px'
        }
    },
    setup(props) {

        provide('zmzComment', {
            offset: props.offset
        })

        return {};
    }
};
</script>
