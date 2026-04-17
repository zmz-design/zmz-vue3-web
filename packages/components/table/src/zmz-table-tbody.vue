<template>
    <table class="zmz-table__tbody" cellspacing="0" cellpadding="0" border="0">
        <zmz-table-colgroup :data="column"></zmz-table-colgroup>
        <tbody>
            <tr class="zmz-table__row" :key="row.columnKey" v-for="(row, index) in zmzDataList"
                :class="[setRowClass(row, index)]" :style="[setRowStyle(index)]" @click="onRowClick(row, index, $event)"
                @dblclick="onRowDblclick(row, index, $event)"
                @contextmenu.prevent="onRowContextmenu(row, index, $event)"
                @mouseenter="onRowMouseover(row, index, $event)" @mouseleave="onRowMouseout(row, index, $event)">
                <td class="zmz-table__column" v-for="(cell, cellIndex) in zmzDataColumn"
                    :key="cellIndex" :class="[setColumnClass(cell)]" @click.stop="onCellClick(cell, row, index, $event)"
                    @dblclick.stop="onCellDblclick(cell, row, index, $event)"
                    @contextmenu.prevent.stop="onCellContextmenu(cell, row, index, $event)"
                    @mouseover.stop="onCellMouseover(cell, row, index, $event)"
                    @mouseout.stop="onCellMouseout(cell, row, index, $event)">
                    <template v-if="cell.slots && cell.slots.default">
                        <zmz-table-render :item="row" :item-column="cell" :index="index"></zmz-table-render>
                    </template>
                    <template v-else>
                        <div class="zmz-table__cell" v-if="cell.type === 'radio'">
                            <zmz-radio v-model="row.radio" :name="row.nameKey" @click.prevent.stop="radioChange(index)"
                                :value="true"></zmz-radio>
                        </div>
                        <div class="zmz-table__cell" v-else-if="cell.type === 'checkbox'">
                            <zmz-checkbox v-model="row.checkbox" :name="row.nameKey"
                                @click.prevent.stop="checkboxChange(row, index)" :value="true"></zmz-checkbox>
                        </div>
                        <div class="zmz-table__cell" v-else-if="cell.type === 'index'">
                            {{ index }}
                        </div>
                        <div class="zmz-table__cell" v-else>
                            {{ row.row[cell.prop] }}
                        </div>
                    </template>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { computed, ref, inject, watch } from 'vue';
import ZmzTableColgroup from './zmz-table-colgroup.js';
import ZmzTableRender from './zmz-table-render.js';
import ZmzRadio from '../../form/radio/index.js';
import ZmzCheckbox from '../../form/checkbox/index.js';
export default {
    name: 'ZmzTableTbody',
    components: {
        ZmzTableColgroup,
        ZmzTableRender,
        ZmzRadio,
        ZmzCheckbox
    },
    props: {
        data: {
            type: Array,
            default: () => {
                return [];
            }
        },
        /**
         * 列
         */
        column: {
            type: Array,
            default: () => {
                return [];
            }
        },
        /**
         * 行内类名
         */
        rowClassName: [String, Function],
        /**
         * 斑马纹
         */
        stripes: {
            type: Boolean,
            default: false
        },
        /**
         * 斑马纹颜色
         */
        stripesColor: String,
        /**
         * 滑入行
         */
        rowHover: {
            type: Object,
            default: () => {
                return {};
            }
        },
    },
    setup(props) {
        const zmzTable = inject('zmzTable', {});
        const zmzDataList = ref([])
        const isSort = ref(false);
        const sortField = ref('');
        const sortOrder = ref('');

        // 设置类名
        const setRowClass = (row, rowIndex) => {
            let params = []
            if (typeof props.rowClassName === 'string') {
                params.push(props.rowClassName);
            } else if (typeof props.rowClassName === 'function') {
                params.push(props.rowClassName.call(null, {
                    row,
                    rowIndex
                }));
            }

            if (props.stripes && !props.stripesColor && rowIndex % 2 == 1) {
                params.push('zmz-table__row--stripes')
            }

            if (row.align) {
                params.push(`zmz-table__column--${row.align}`)
            }

            if (row.radio) {
                params.push(`zmz-table__row--active`)
            }

            if (props.rowHover.index === row.index) {
                params.push(`zmz-table__row--hover`)
            }

            return params
        }

        // 设置类名
        const setColumnClass = (row) => {
            let params = []
            if (row && row.align) {
                params.push(`zmz-table__column--${row.align}`)
            }

            return params
        }

        // 样式
        const setRowStyle = (rowIndex) => {
            let params = {}
            if (props.stripes && props.stripesColor && rowIndex % 2 == 1) {
                params['background'] = props.stripesColor
            }

            return params
        }

        // 数据
        const zmzDataListSort = () => {
            let params = props.data.map(item => {
                return { ...item, ...item.row }
            })
            return params.sort((a, b) => {
                if (zmzTable.defaultSort && !isSort.value && !sortField.value && !sortOrder.value) {
                    return compareValues(a, b, zmzTable.defaultSort['prop'], zmzTable.defaultSort['order']);
                } else if (sortField.value && sortOrder.value) {
                    return compareValues(a, b, sortField.value, sortOrder.value);
                }
            })
        }

        // 栏目列
        const zmzDataColumn = computed(() => {
            return props.column.map((item) => {
                return {
                    ...item.Instance.props,
                    slots: item.Instance.slots
                }
            })
        })

        // 单选
        const radioChange = (index) => {
            zmzDataList.value.forEach((items, indexs) => {
                items.radio = false
                if (index === indexs) {
                    items.radio = true
                }
            })
        }

        // 多选
        const checkboxChange = (item, index) => {
            zmzDataList.value.forEach((items, indexs) => {
                if (index == indexs) {
                    items.checkbox = !items.checkbox
                }
            })
            let dataSelect = zmzDataList.value.filter(item => item.checkbox);
            zmzTable.onSelectCheckbox(item, zmzDataList.value.length, dataSelect.length)
        }

        // 单选选中
        const setRadioCurrentRow = (index) => {
            zmzDataList.value.forEach((item, indexs) => {
                item.radio = false
                if (indexs == index) {
                    zmzTable.onSelectRadio(item)
                    item.radio = true
                }
            })
        }

        // 单选清空
        const clearRadioCurrentRow = () => {
            zmzDataList.value.forEach((item) => {
                item.radio = false
            })
        }

        // 多选选中
        const setCheckboxCurrentRow = (row) => {
            let params = []
            zmzDataList.value.forEach((item, index) => {
                // item.checkbox = false
                row.forEach(items => {
                    if (items === index) {
                        item.checkbox = true
                        params.push(item)
                    }
                })
            })
            let dataSelect = zmzDataList.value.filter(item => item.checkbox);
            zmzTable.onSelectCheckbox(params, zmzDataList.value.length, dataSelect.length)
        }

        // 多选清空
        const clearCheckboxCurrentRow = () => {
            let params = [];
            zmzDataList.value.forEach((item) => {
                item.checkbox = false
            })
            let dataSelect = zmzDataList.value.filter(item => item.checkbox);
            zmzTable.onSelectCheckbox(params, zmzDataList.value.length, dataSelect.length)
        }

        // 单击行
        const onRowClick = (item, index, event) => {
            zmzTable.onRowClick(item, index, event)
        }

        // 双击行
        const onRowDblclick = (item, index, event) => {
            zmzTable.onRowDblclick(item, index, event)
        }

        // 右击行
        const onRowContextmenu = (item, index, event) => {
            zmzTable.onRowContextmenu(item, index, event)
        }

        // 滑入行
        const onRowMouseover = (item, index, event) => {
            zmzTable.onRowMouseover(item, index, event)
        }

        // 滑出行
        const onRowMouseout = (item, index, event) => {
            zmzTable.onRowMouseout(item, index, event)
        }

        // 单击格
        const onCellClick = (cell, row, index, event) => {
            zmzTable.onCellClick(cell, row, index, event)
        }

        // 双击格
        const onCellDblclick = (cell, row, index, event) => {
            zmzTable.onCellDblclick(cell, row, index, event)
        }

        // 右击格
        const onCellContextmenu = (cell, row, index, event) => {
            zmzTable.onCellContextmenu(cell, row, index, event)
        }

        // 滑入格
        const onCellMouseover = (cell, row, index, event) => {
            zmzTable.onCellMouseover(cell, row, index, event)
        }

        // 滑出格
        const onCellMouseout = (cell, row, index, event) => {
            zmzTable.onCellMouseout(cell, row, index, event)
        }

        // 全选
        const onSelectAllCheckbox = (state) => {
            zmzDataList.value.forEach((item) => {
                item.checkbox = state
            })
            let row = zmzDataList.value.filter(item => item.checkbox)
            zmzTable.onSelectAllCheckbox(state, row)
        }

        // 更新排序
        const onUpdateSort = (field, order) => {
            if (order) {
                isSort.value = true;
                sortField.value = field;
                sortOrder.value = order;
            } else {
                isSort.value = false;
                sortField.value = '';
                sortOrder.value = '';
            }
        }

        const compareValues = (a, b, key, order = 'asc') => {
            if (zmzTable.sortMethod && typeof zmzTable.sortMethod == 'function') {
                return zmzTable.sortMethod(a, b);
            }
            if (!Object.prototype.hasOwnProperty.call(a, key) || !Object.prototype.hasOwnProperty.call(b, key)) {
                // 该属性在任何一个对象上都不存在
                return 0;
            }
            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        }

        watch([() => props.data, () => sortField.value, () => sortOrder.value, () => isSort.value], () => {
            zmzDataList.value = zmzDataListSort()
        }, {
            immediate: true,
            deep: true
        })


        return {
            setRowClass,
            setRowStyle,
            setColumnClass,
            zmzDataColumn,
            radioChange,
            checkboxChange,
            setRadioCurrentRow,
            clearRadioCurrentRow,
            setCheckboxCurrentRow,
            clearCheckboxCurrentRow,
            onRowClick,
            onRowDblclick,
            onRowContextmenu,
            onRowMouseover,
            onRowMouseout,
            onCellClick,
            onCellDblclick,
            onCellContextmenu,
            onCellMouseover,
            onCellMouseout,
            onSelectAllCheckbox,
            onUpdateSort,
            zmzDataList
        }
    }
};
</script>
