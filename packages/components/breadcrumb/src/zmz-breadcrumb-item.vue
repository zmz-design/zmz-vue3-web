<template>
    <span class="zmz-breadcrumb__item">
        <span class="zmz-breadcrumb__text">
            <slot></slot>
        </span>
        <i :class="segmenterIcon" class="zmz-breadcrumb__icon" v-if="segmenterIcon"></i>
        <i class="zmz-breadcrumb__icon" v-else>{{ segmenter }}</i>
    </span>
</template>
<script>
import { computed, getCurrentInstance, inject, onMounted, onBeforeUnmount } from 'vue';
export default {
    name: 'ZmzBreadcrumbItem',
    setup() {
        const Instance = getCurrentInstance();
        const zmzBreadcrumb = inject('zmzBreadcrumb', {});

        // 内容分割
        const segmenter = computed(() => {
            return zmzBreadcrumb.segmenter;
        });

        // 图标分割
        const segmenterIcon = computed(() => {
            return zmzBreadcrumb.segmenterIcon;
        });

        onMounted(() => {
            addDom()
            updateDom()
        })

        onBeforeUnmount(() => {
            removeDom()
            updateDom()
        })

        const addDom = () => {
            zmzBreadcrumb.zmzBreadcrumbList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateDom = () => {
            zmzBreadcrumb.updateDom();
        }

        const removeDom = () => {
            if (zmzBreadcrumb.zmzBreadcrumbList.value && zmzBreadcrumb.zmzBreadcrumbList.value.length) {
                const index = zmzBreadcrumb.zmzBreadcrumbList.value.findIndex(item => item.uid === Instance.uid);
                zmzBreadcrumb.zmzBreadcrumbList.value.splice(index, 1);
            }
        }

        return {
            segmenter,
            segmenterIcon
        };
    }
};
</script>
