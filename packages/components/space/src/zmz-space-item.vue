<template>
    <div class="zmz-space-item" :style="[zmzSpacItemStyle]">
        <slot></slot>
    </div>
</template>
<script>
import { inject, onBeforeUnmount, onMounted, getCurrentInstance, computed, ref } from 'vue';
import mixin from '../../../utils/mixin.js';
export default {
    name: 'ZmzSpaceItem',
    props: {
        /**
         * 当前内间距
         */
        padding: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 当前外间距
         */
        margin: {
            type: Array,
            default() {
                return []
            }
        }
    },
    setup(props) {
        const { getValueSuffix } = mixin();
        const Instance = getCurrentInstance();
        const zmzSpace = inject('zmzSpace', '');
        const paddingChild = ref(props.padding)
        const marginChild = ref(props.margin)


        if (zmzSpace == '') {
            throw new Error('zmzSpaceItem 父标签不存在');
        }

        onMounted(() => {
            addDom()
            updateDom()
        })

        onBeforeUnmount(() => {
            removeDom()
            updateDom()
        })

        const addDom = () => {
            zmzSpace.spaceList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateDom = () => {
            zmzSpace.updateDom();
        }

        const removeDom = () => {
            if (zmzSpace.spaceList.value && zmzSpace.spaceList.value.length) {
                const index = zmzSpace.spaceList.value.findIndex(item => item.uid === Instance.uid);
                zmzSpace.spaceList.value.splice(index, 1);
            }
        }

        const zmzSpacItemStyle = computed(() => {
            let params = {};
            if (paddingChild.value.length) {
                let newPadding = []
                paddingChild.value.forEach(item => {
                    newPadding.push(getValueSuffix(item))
                })
                params['padding'] = newPadding.join(' ');
            }

            if (marginChild.value.length) {
                let newMargin = []
                marginChild.value.forEach(item => {
                    newMargin.push(getValueSuffix(item))
                })
                params['margin'] = newMargin.join(' ');
            }

            return params;
        });

        return {
            zmzSpacItemStyle,
            paddingChild,
            marginChild
        };
    }
};
</script>
