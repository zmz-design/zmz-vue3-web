<template>
    <div class="zmz-colorpicker__presetcolor__lists">
        <div class="zmz-colorpicker__presetcolor__lists__item" v-for="(item, index) in presetColor" :key="index"
            @click="handlePresetClick(item)">
            <span class="zmz-colorpicker__presetcolor__lists__item__span" :style="{ backgroundColor: item }"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZmzColorpickerPreset',
    props: {
        presetColor: {
            type: Array,
            default: () => []
        }
    },
    emits: ['on-change'],
    setup(props, { emit }) {
        const handlePresetClick = data => {
            emit('on-change', data);
        };

        return {
            handlePresetClick,
        };
    }
};
</script>
