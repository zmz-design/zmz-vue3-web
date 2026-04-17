<template>
    <div class="zmz-breadcrumb">
        <slot></slot>
    </div>
</template>
<script>
import { provide, ref } from 'vue';
export default {
    name: 'ZmzBreadcrumb',
    componentName: 'ZmzBreadcrumb',
    props: {
        /**
         * 分段器
         */
        segmenter: {
            type: String,
            default: '/'
        },
        /**
         * 分段图标
         */
        segmenterIcon: String,
    },
    setup(props) {
        const zmzBreadcrumbList = ref([]);
        const updateDom = () => { }

        provide('zmzBreadcrumb', {
            zmzBreadcrumbList: zmzBreadcrumbList,
            segmenter: props.segmenter,
            segmenterIcon: props.segmenterIcon,
            updateDom: updateDom
        });

        return {};
    }
};
</script>
