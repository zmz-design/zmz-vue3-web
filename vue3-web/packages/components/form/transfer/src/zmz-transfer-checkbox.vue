<template>
    <div class="zmz-transfer__panel">
        <div class="zmz-transfer__panel__header">
            <div class="zmz-transfer__panel__header__checkbox">
                <zmz-checkbox v-model="isAllChecked" :semiselection="semiselection" @on-change="handleAllCheckedChange"
                    :disabled="disabled" :readonly="readonly">
                    <template v-if="$slots.rightTitle">
                        <slot name="rightTitle"></slot>
                    </template>
                    <template v-if="$slots.leftTitle">
                        <slot name="leftTitle"></slot>
                    </template>
                    <template v-if="!$slots.rightTitle && !$slots.leftTitle">
                        {{ title }}
                    </template>
                </zmz-checkbox>
            </div>
            <div class="zmz-transfer__panel__header__total">
                <template v-if="$slots.leftCount">
                    <slot name="leftCount" :selectedtotal="selectedTotal" :datatotal="dataTotal"></slot>
                </template>
                <template v-if="$slots.rightCount">
                    <slot name="rightCount" :selectedtotal="selectedTotal" :datatotal="dataTotal"></slot>
                </template>
                <template v-if="!$slots.leftCount && !$slots.rightCount">
                    {{ selectedTotal }}/{{ dataTotal }}
                </template>
            </div>
        </div>
        <div class="zmz-transfer__panel__bodyer">
            <zmz-input type="text" v-if="search" v-model="searchQuery" size="mini" :disabled="disabled" :readonly="readonly"
                class="zmz-transfer__panel__bodyer__search" :placeholder="searchPlaceholder" />
            <zmz-checkbox-group v-model="model" @on-change="checkboxGroupOnChange" :disabled="disabled"
                :readonly="readonly">
                <zmz-checkbox class="zmz-transfer__panel__bodyer__item" :disabled="item[fieldAlias.disabled]"
                    v-for="(item, index) in filteredData" :key="index" :label="item.label" :value="item[fieldAlias.key]">
                    <template v-if="$slots.leftLabel">
                        <slot name="leftLabel" :item="item"></slot>
                    </template>
                    <template v-if="$slots.rightLabel">
                        <slot name="rightLabel" :item="item"></slot>
                    </template>
                    <template v-if="!$slots.leftLabel && !$slots.rightLabel">
                        {{ item.label }}
                    </template>
                </zmz-checkbox>
            </zmz-checkbox-group>
            <div class="zmz-transfer__panel__bodyer__empty" v-if="filteredData.length == 0">
                <template v-if="searchQuery">{{ searchEmptyText }}</template>
                <template v-else>{{ emptyText }}</template>
            </div>
        </div>
        <div class="zmz-transfer__panel__footer" v-if="$slots.leftFooter || $slots.rightFooter">
            <template v-if="$slots.leftFooter">
                <slot name="leftFooter"></slot>
            </template>
            <template v-if="$slots.rightFooter">
                <slot name="rightFooter"></slot>
            </template>
        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue';
import ZmzInput from '../../input/index.js';
export default {
    name: 'ZmzTransfer',
    components: {
        ZmzInput
    },
    props: {
        modelValue: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: ''
        },
        titles: Array,
        format: Object,
        fieldAlias: Object,
        filterMethod: Function,
        emptyText: String,
        searchEmptyText: String,
        searchPlaceholder: String,
        search: Boolean,
        searchMethod: Function,
        disabled: Boolean,
        readonly: Boolean,
        leftDefaultChecked: Array,
        rightDefaultChecked: Array,
        insert: String
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const isAllChecked = ref(false);
        const checkedList = ref([]);
        const searchQuery = ref('')
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
                emit('on-change', val);
            }
        });

        const semiselection = computed(() => {
            return model.value.length > 0 && model.value.length < tobeselected.value.length
        })

        // 待选总数
        const tobeselected = computed(() => {
            return filteredData.value.filter(item => !item[props.fieldAlias.disabled])
        })

        // 总数
        const dataTotal = computed(() => {
            return filteredData.value.length;
        });

        const filteredData = computed(() => {
            return props.data.filter(item => {
                if (typeof props.filterMethod === 'function') {
                    return props.filterMethod(searchQuery.value, item);
                } else {
                    const label = item[props.fieldAlias.label] || item[props.fieldAlias.key].toString();
                    return label.toLowerCase().indexOf(searchQuery.value.toLowerCase()) > -1;
                }
            });
        });

        // 左发生改变
        const checkboxGroupOnChange = data => {
            model.value = data;
            let checkedCount = data.length;
            isAllChecked.value = checkedCount === tobeselected.value.length;
            emit('on-change', data);
        };

        // 选中总数
        const selectedTotal = computed(() => {
            return model.value.length;
        });

        // 点选总数
        const handleAllCheckedChange = state => {
            if (tobeselected.value.length == 0) {
                isAllChecked.value = false
            }
            if (semiselection.value) {
                isAllChecked.value = true
            }
            model.value = state
                ? filteredData.value
                    .map(item => {
                        if (!item[props.fieldAlias.disabled]) {
                            return item[props.fieldAlias.key];
                        }
                    })
                    .filter(function (val) {
                        return val;
                    })
                : [];
        };

        return {
            dataTotal,
            selectedTotal,
            checkboxGroupOnChange,
            checkedList,
            handleAllCheckedChange,
            isAllChecked,
            filteredData,
            model,
            searchQuery,
            semiselection
        };
    }
};
</script>
