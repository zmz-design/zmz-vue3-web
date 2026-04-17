<template>
    <div class="zmz-dropdown__item" :data-index="index" :class="[zmzDropdownItemClass]" @click="handleClick(index)">
        <slot></slot>
    </div>
</template>
<script>
import { inject, getCurrentInstance, computed, onMounted, onBeforeUnmount } from 'vue';
export default {
    name: 'ZmzDropdownItem',
    props: {
        /**
         * 下标
         */
        index: {
            type: [Number, String]
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
    },
    setup(props) {
        const Instance = getCurrentInstance();
        const zmzDropdown = inject('zmzDropdown', {});

        // 点击
        const handleClick = (index) => {
            zmzDropdown.handleItemClick(index)
        };

        // 公共类名
        const zmzDropdownItemClass = computed(() => {
            let params = [];
            if (props.index == zmzDropdown.model.value) {
                params.push('zmz-dropdown__item--active')
            }
            if (props.disabled) {
                params.push('zmz-dropdown__item--disabled')
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
            zmzDropdown.zmzDropdownList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateDom = () => {
            zmzDropdown.updateDom();
        }

        const removeDom = () => {
            if (zmzDropdown.zmzDropdownList.value && zmzDropdown.zmzDropdownList.value.length) {
                const index = zmzDropdown.zmzDropdownList.value.findIndex(item => item.uid === Instance.uid);
                zmzDropdown.zmzDropdownList.value.splice(index, 1);
            }
        }

        return {
            handleClick,
            zmzDropdownItemClass
        };
    }
};
</script>
