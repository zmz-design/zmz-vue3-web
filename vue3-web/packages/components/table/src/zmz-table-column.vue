<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
import { getCurrentInstance, onMounted, inject, onBeforeUnmount, ref } from 'vue';
import { findParent } from '../../../utils/find.js';
export default {
    name: 'ZmzTableColumn',
    componentName: 'ZmzTableColumn',
    props: {
        /**
         * 文本
         */
        label: {
            type: String,
            default: ""
        },
        /**
         * 字段
         */
        prop: {
            type: String,
            default: ""
        },
        /**
         * 宽度
         */
        width: {
            type: String,
            default: ""
        },
        /**
         * 最小宽度
         */
        minWidth: {
            type: String,
            default: ""
        },
        /**
         * 固定列
         */
        fixed: {
            type: [Boolean, String],
            default: false,
            validator(value) {
                return [true, false, 'left', 'right'].includes(value)
            }
        },
        /**
         * 类型
         */
        type: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'index', 'radio', 'checkbox'].includes(value)
            }
        },
        /**
         * 多级表头特有
         */
        parent: {
            type: Boolean,
            default: false
        },
        /**
         * 类型
         */
        align: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'center', 'right'].includes(value)
            }
        },
        /**
         * 排序
         */
        sortable: {
            type: Boolean,
            default: false
        },
    },
    setup() {
        const order = ref(null);
        const zmzTable = inject('zmzTable', {});
        const Instance = getCurrentInstance();
        if (zmzTable == '') {
            throw new Error('zmzTableColumn 父标签不存在');
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
            zmzTable.zmzTableList.value.push({
                uid: Instance.uid,
                Instance: Instance
            });

            const parentColumn = findParent(Instance.parent, 'ZmzTableColumn');
            if (parentColumn) {
                if (!parentColumn.childColumnList) parentColumn.childColumnList = [];
                parentColumn.childColumnList.push({
                    uid: Instance.uid,
                    Instance: Instance
                });
            }
        }

        const updateDom = () => {
            zmzTable.updateDom();
        }

        const removeDom = () => {
            if (zmzTable.zmzTableList.value && zmzTable.zmzTableList.value.length) {
                const index = zmzTable.zmzTableList.value.findIndex(item => item.uid === Instance.uid);
                zmzTable.zmzTableList.value.splice(index, 1);
            }

            const parentColumn = findParent(Instance.parent, 'ZmzTableColumn');
            if (parentColumn) {
                if (parentColumn.childColumnList && parentColumn.childColumnList.length) {
                    const index = parentColumn.childColumnList.findIndex(item => item.uid === Instance.uid);
                    parentColumn.childColumnList.splice(index, 1);
                }
            }
        }

        return {
            order
        };
    }
};
</script>
