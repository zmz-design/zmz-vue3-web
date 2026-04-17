<template>
    <div class="zmz-tabs__content--item" :class="[{ 'zmz-tabs__content--item--active': selected }]"
        :style="[zmzTabsContentItemStyle]">
        <slot></slot>
    </div>
</template>
<script >
import { getCurrentInstance, inject, ref, computed, onMounted, onBeforeUnmount, defineComponent } from 'vue';
export default defineComponent({
    name: 'ZmzTabsItem',
    props: {
        label: {
            type: [String, Function],
            default: ''
        },
        name: {
            type: [String, Number],
            default: '0'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: true
        },
        icon: {
            type: String,
            default: ''
        }
    },
    setup() {
        const Instance = getCurrentInstance();
        const zmzTabs = inject('zmzTabs', {});
        const selected = ref(false);
        onMounted(() => {
            addNavDom()
            updateNavDom()
        })

        onBeforeUnmount(() => {
            removeNavDom()
            updateNavDom()
        })

        const addNavDom = () => {
            zmzTabs.zmzTabsList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateNavDom = () => {
            zmzTabs.updateNavDom();
        }

        const removeNavDom = () => {
            if (zmzTabs.zmzTabsList.value && zmzTabs.zmzTabsList.value.length) {
                const index = zmzTabs.zmzTabsList.value.findIndex(item => item.uid === Instance.uid);
                zmzTabs.zmzTabsList.value.splice(index, 1);
            }
        }

        const zmzTabsContentItemStyle = computed(() => {
            let params = {}
            if (zmzTabs.animated) {
                if (selected.value) {
                    params['visibility'] = 'visible'
                } else {
                    params['visibility'] = 'hidden'
                }
            }
            return params
        })

        return {
            selected,
            zmzTabsContentItemStyle
        };
    }
});
</script>
