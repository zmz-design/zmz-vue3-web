<template>
    <div class="zmz-collapse" :class="zmzCollapseClass">
        <slot></slot>
    </div>
</template>
<script>
import { computed, provide, ref } from 'vue';
export default {
    name: 'ZmzCollapse',
    props: {
        /**
         * 激活
         */
        modelValue: [String, Number, Array],
        /**
         * 	手风琴模式
         */
        accordion: {
            type: Boolean,
            default: false
        },
        /**
         * 	边线
         */
        border: {
            type: Boolean,
            default: false
        }
    },
    emits: ['on-change', 'update:modelValue'],
    setup(props, { emit }) {
        const zmzCollapseList = ref([])
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        })

        const onChange = (value) => {
            model.value = value
            emit('on-change', value);
        }

        const handleItemClick = (name) => {
            if (props.accordion) {
                let value = model.value === name ? '' : name
                onChange(value)
            } else {
                let value = getFilterActiveKeys();
                if (value.indexOf(name) > -1) {
                    let index = value.findIndex(item => item == name)
                    value.splice(index, 1)
                } else {
                    value.push(name)
                }
                onChange(value)
            }
        }

        const getFilterActiveKeys = () => {
            let activeKeys = model.value || []
            if (Object.prototype.toString.call(activeKeys) !== '[object Array]') {
                activeKeys = [activeKeys]
            }

            if (props.accordion && activeKeys.length) {
                activeKeys = [activeKeys[0]]
            }

            return activeKeys
        }

        const zmzCollapseClass = computed(() => {
            let params = [];

            if (props.border) {
                params.push('zmz-collapse--border')
            }
            return params;
        })

        provide('zmzCollapse', {
            zmzCollapseList: zmzCollapseList,
            handleItemClick: handleItemClick,
            model: model
        });

        return {
            zmzCollapseClass
        };
    }
};
</script>
