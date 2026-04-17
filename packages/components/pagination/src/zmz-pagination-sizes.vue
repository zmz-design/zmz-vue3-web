<template>
    <div class="zmz-pagination__sizes">
        <zmz-select :size="size" :disabled="disabled" v-model="defaultModel" @on-change="handleChange">
            <zmz-select-option :value="item.value" :label="item.label" v-for="(item, index) in zmzSelectOptionDataList"
                :key="index"></zmz-select-option>
        </zmz-select>
    </div>
</template>

<script>
import { watch, computed, ref } from 'vue';
import ZmzSelect from '../../form/select/index.js';
import ZmzSelectOption from '../../form/select/option.js';
export default {
    name: 'ZmzPaginationSizes',
    components: {
        ZmzSelect,
        ZmzSelectOption
    },
    props: {
        current: {
            type: [Number, String],
            default: 10
        },
        pageSizeOption: {
            type: Array,
            default() {
                return [10, 20, 30, 40]
            }
        },
        /**
         * 禁用分页
         */
         disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 大小
         */
         size: {
            type: String,
            default: 'default'
        },
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const defaultModel = ref(10)

        watch(() => props.current, (val) => {
            defaultModel.value = val
        }, { immediate: true })

        const zmzSelectOptionDataList = computed(() => {
            let params = []
            if (Array.isArray(props.pageSizeOption) && props.pageSizeOption.length) {
                props.pageSizeOption.forEach((item) => {
                    params.push({
                        value: parseInt(item),
                        label: item + '条/页'
                    })
                })
            }
            return params
        })

        const handleChange = (val) => {
            emit('on-change', val)
        }

        return {
            defaultModel,
            zmzSelectOptionDataList,
            handleChange
        };
    }
};
</script>
