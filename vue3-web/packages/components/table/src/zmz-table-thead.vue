<template>
    <table class="zmz-table__thead" cellspacing="0" cellpadding="0" border="0">
        <zmz-table-colgroup :data="column" space :scroll-bar="scrollBar"></zmz-table-colgroup>
        <thead>
            <tr>
                <th class="zmz-table__column" :data-title="item.props.label" :key="index"
                    v-for="(item, index) in columnList" :class="[setColumnClass(item)]">
                    <div class="zmz-table__cell" v-if="item.props.type === 'checkbox'">
                        <zmz-checkbox v-model="checkbox" :semiselection="semiselection"
                            @on-change="onAllChange"></zmz-checkbox>
                    </div>
                    <div class="zmz-table__cell" v-else-if="item.props.type === 'radio'">
                        <span></span>
                    </div>
                    <div class="zmz-table__cell" v-else>
                        {{ item.props.label }}
                        <span class="zmz-table__sortable" @click.stop="handleSortClick($event, item)"
                            v-if="item.props.sortable">
                            <!-- // 降序 -->
                            <i class="zmz-table__sortable__icon zmz-table__sortable__icon--asc"
                                @click="handleSortClick($event, item, 'asc')"></i>
                            <!-- // 升序 -->
                            <i class="zmz-table__sortable__icon zmz-table__sortable__icon--desc"
                                @click="handleSortClick($event, item, 'desc')"></i>
                        </span>
                    </div>
                </th>
                <th class="zmz-table__scroll" :style="{ 'width': scrollBar.width + 'px' }" v-if="scrollBar.width"></th>
            </tr>
        </thead>
    </table>
</template>
<script>
import { computed, ref, inject } from 'vue'
import ZmzTableColgroup from './zmz-table-colgroup.js';
import ZmzCheckbox from '../../form/checkbox/index.js';
export default {
    name: 'ZmzTableThead',
    components: {
        ZmzTableColgroup,
        ZmzCheckbox,
    },
    props: {
        /**
         * 列
         */
        column: {
            type: Array,
            default() {
                return [];
            }
        },
        /**
         * 总宽度
         */
        space: {
            type: Boolean,
            default: false
        },
        scrollBar: {
            type: Object,
            default() {
                return {
                    width: 0,
                    height: 0
                }
            }
        },
    },
    setup(props) {
        const zmzTable = inject('zmzTable', {});
        const checkbox = ref(false);
        const semiselection = ref(false);
        const sortOrders = ref([null, 'asc', 'desc'])

        const columnList = computed(() => {
            return props.column.map(item => item.Instance);
        })

        const setColumnClass = (row) => {
            let params = []
            params.push(`zmz-table__column--${row.props.align}`)
            if (row.props.sortable) {
                params.push(`zmz-table__column--sortable`);
                if (row.proxy.order) {
                    params.push(`zmz-table__column--sortable-${row.proxy.order}`);
                }
            }

            return params
        }

        const setCheckbox = (rowLength, selectLength) => {
            if (selectLength == 0 || rowLength == selectLength) {
                semiselection.value = false
            } else {
                semiselection.value = true
            }

            if (rowLength == selectLength) {
                checkbox.value = true
            } else {
                checkbox.value = false
            }
        }

        const onAllChange = (state) => {
            if (!state) {
                semiselection.value = false
            }
            zmzTable.setSelectAllCheckbox(state)
        }

        // 排序
        const handleSortClick = (event, row, sortState) => {
            event.stopPropagation();
            let order = row.proxy.order === sortState
                ? null
                : (sortState || toggleOrder(row));

            if (!row.props.sortable) return;

            if (!order) {
                row.proxy.order = null;
            } else {
                row.proxy.order = order;
            }
            zmzTable.onSortChange(row, order, event)
        }

        const toggleOrder = (column) => {
            if (column.proxy.order === '') return sortOrders.value[0];
            const index = sortOrders.value.indexOf(column.proxy.order || null);
            return sortOrders.value[index > sortOrders.value.length - 2 ? 0 : index + 1];
        }

        return {
            columnList,
            setColumnClass,
            semiselection,
            checkbox,
            setCheckbox,
            onAllChange,
            handleSortClick
        }
    }
};
</script>
