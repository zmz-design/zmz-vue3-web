<template>
    <li class="zmz-menu-item-group">
        <div class="zmz-menu-item-group__title" :style="[zmzMenuItemGroupTitleStyle]">
            {{ title }}</div>
        <ul class="zmz-menu">
            <slot></slot>
        </ul>
    </li>
</template>
<script>
import { computed, inject, getCurrentInstance } from 'vue';
export default {
    name: 'ZmzMenuGroup',
    componentName: 'ZmzMenuGroup',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            default: ''
        },
    },
    setup() {
        const zmzMenu = inject('zmzMenu', {});
        const { parent } = getCurrentInstance();

        // 标题配置
        const zmzMenuItemGroupTitleStyle = computed(() => {
            let params = {};

            if (levelPadding.value) {
                params['padding-left'] = levelPadding.value + 'px'
            }

            return params;
        });

        // padding值
        const levelPadding = computed(() => {
            if (zmzMenu.mode != 'vertical' || zmzMenu.shrink.value) return '';
            let padding = 20;
            let parents = parent;
            while (parents && parents.type.componentName !== 'zmzMenu') {
                if (parents.type.componentName === 'ZmzMenuSubmenu') {
                    padding += 20;
                }
                parents = parents.parent;
            }
            return padding;
        })

        return {
            zmzMenuItemGroupTitleStyle
        };
    }
};
</script>
