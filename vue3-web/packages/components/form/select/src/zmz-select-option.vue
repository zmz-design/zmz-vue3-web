<template>
    <div class="zmz-select__item" :class="[zmzOptionClass]" @click="setCurrentValue(value, label)">{{ label }}</div>
</template>
<script>
import { computed, getCurrentInstance, inject, onMounted, onBeforeUnmount } from 'vue';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzSelectOption',
    props: {
        /**
         * 值
         */
        value: [String, Number],
        /**
         * 文本
         */
        label: [String, Number],
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const zmzSelect = inject('zmzSelect', {});
        const { parent } = getCurrentInstance();
        const Instance = getCurrentInstance();
        const parentProxy = computed(() => {
            return findParent(parent, 'ZmzSelect');
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
            zmzSelect.zmzSelectList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateDom = () => {
            zmzSelect.updateDom();
        }

        const removeDom = () => {
            if (zmzSelect.zmzSelectList.value && zmzSelect.zmzSelectList.value.length) {
                const index = zmzSelect.zmzSelectList.value.findIndex(item => item.uid === Instance.uid);
                zmzSelect.zmzSelectList.value.splice(index, 1);
            }
        }

        const handleLableText = () => {
            parentProxy.value.proxy.selectLabel = props.label;
        };

        const isSelected = computed(() => {
            if (parentProxy.value.proxy.model == props.value) {
                handleLableText();
                return true;
            }
            return false;
        });

        const zmzOptionClass = computed(() => {
            let params = [];
            if (isSelected.value) {
                params.push('zmz-select__item--selected');
            }

            if (props.disabled) {
                params.push('zmz-select__item--disabled');
            }

            return params;
        });

        const setCurrentValue = (value, label) => {
            if (props.disabled) return;
            if (parentProxy.value) {
                parentProxy.value.proxy.model = value;
                parentProxy.value.proxy.selectLabel = label;
                zmzSelect.currentVisible.value = false;
            }
        };

        return {
            setCurrentValue,
            zmzOptionClass
        };
    }
};
</script>
