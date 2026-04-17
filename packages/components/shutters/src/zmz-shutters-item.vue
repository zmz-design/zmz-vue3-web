<template>
    <div class="zmz-shutters__item" :class="[zmzShuttersItemClass]" :style="[shuttersItemStyle]"
        @mouseout="handleMouseOut(index)" @mouseover="handleMounseOver(index)">
        <slot></slot>
    </div>
</template>
<script>
import { computed, inject, ref, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue';
export default {
    name: 'ZmzShuttersItem',
    setup() {
        const Instance = getCurrentInstance();
        const zmzShutters = inject('zmzShutters', {});
        const index = ref(0);
        const width = ref(0);
        const isHover = ref(false)
        const shuttersItemStyle = computed(() => {
            let params = {}
            if (zmzShutters.height) {
                params['height'] = zmzShutters.height;
            }

            if (width.value) {
                params['width'] = width.value;
            }

            return params
        })

        onMounted(() => {
            addDom()
            updateDom()
        })

        onBeforeUnmount(() => {
            removeDom()
            updateDom()
        })

        const addDom = () => {
            zmzShutters.zmzShuttersItemList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateDom = () => {
            zmzShutters.updateDom();
        }

        const removeDom = () => {
            if (zmzShutters.zmzShuttersItemList.value && zmzShutters.zmzShuttersItemList.value.length) {
                const index = zmzShutters.zmzShuttersItemList.value.findIndex(item => item.uid === Instance.uid);
                zmzShutters.zmzShuttersItemList.value.splice(index, 1);
            }
        }

        const handleMounseOver = (index) => {
            isHover.value = true
            zmzShutters.handleItemMouseover(index)
        }
        const handleMouseOut = (index) => {
            isHover.value = false
            zmzShutters.handleItemMouseout(index)
        }

        const zmzShuttersItemClass = computed(() => {
            let params = [];
            if (isHover.value) {
                params.push('zmz-shutters__item--hover')
            }

            if (zmzShutters.model.value == index.value) {
                params.push('zmz-shutters__item--active')
            }
            return params
        })

        return {
            width,
            index,
            shuttersItemStyle,
            handleMouseOut,
            handleMounseOver,
            zmzShuttersItemClass
        };
    }
};
</script>
