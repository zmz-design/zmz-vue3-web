<template>
    <div class="zmz-collapse__item" :class="[zmzCollapseItemClass]">
        <div class="zmz-collapse__title" @click="handleClick">
            <slot name="title">{{ title }} <i class="zmz-collapse__icon zmz-icon--arrow-right"></i></slot>
        </div>
        <zmz-transition-collapse>
            <div v-show="isActive">
                <div class="zmz-collapse__content">
                    <slot></slot>
                </div>
            </div>
        </zmz-transition-collapse>
    </div>
</template>
<script>
import { inject, getCurrentInstance, onMounted, onBeforeUnmount, computed } from 'vue';
export default {
    name: 'ZmzCollapseItem',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            requre: true
        },
        /**
         * 唯一标识
         */
        name: [String, Number],
        /**
         * 是否禁用
         */
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const zmzCollapse = inject('zmzCollapse', {});
        const Instance = getCurrentInstance();

        const handleClick = () => {
            if (props.disabled) return
            zmzCollapse.handleItemClick(props.name)
        }

        const isActive = computed(() => {
            if (typeof zmzCollapse.model.value === 'string' || typeof zmzCollapse.model.value === 'number') {
                return zmzCollapse.model.value === props.name
            } else {
                return zmzCollapse.model.value.indexOf(props.name) > -1;
            }
        })

        onMounted(() => {
            addDom()
        })

        onBeforeUnmount(() => {
            removeDom()
        })

        const addDom = () => {
            zmzCollapse.zmzCollapseList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const removeDom = () => {
            if (zmzCollapse.zmzCollapseList.value && zmzCollapse.zmzCollapseList.value.length) {
                const index = zmzCollapse.zmzCollapseList.value.findIndex(item => item.uid === Instance.uid);
                zmzCollapse.zmzCollapseList.value.splice(index, 1);
            }
        }

        // 公共类名
        const zmzCollapseItemClass = computed(() => {
            let params = []
            if (isActive.value) {
                params.push('zmz-collapse__item--active')
            }

            if (props.disabled) {
                params.push('zmz-collapse__item--disabled')
            }
            return params
        })

        return {
            isActive,
            zmzCollapseItemClass,
            handleClick,
        };
    }
};
</script>
