<template>
    <div class="zmz-dropdown__menu" :style="[zmzDropdownWrapMenuStyle]">
        <slot></slot>
    </div>
</template>
<script>
import { computed, inject } from 'vue';
export default {
    name: 'ZmzDropdownMenu',
    setup() {
        const zmzDropdown = inject('zmzDropdown');

        // 样式
        const zmzDropdownWrapMenuStyle = computed(() => {
            let params = {}
            if (zmzDropdown.width) {
                params['width'] = zmzDropdown.width
            }

            if (zmzDropdown.height) {
                params['height'] = zmzDropdown.height
            }

            if (zmzDropdown.height) {
                params['overflow-y'] = zmzDropdown.height ? 'auto' : ''
            }

            return params
        })

        return {
            zmzDropdownWrapMenuStyle,
        };
    }
};
</script>
