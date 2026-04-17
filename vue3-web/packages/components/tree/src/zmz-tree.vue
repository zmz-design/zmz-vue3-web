<template>
    <div class="zmz-tree">
        <zmz-tree-item v-for="(item, index) in dataTree" :key="index" :props="props" :node="item" :indent="indent"
            :show-checkbox="showCheckbox" :render-content="renderContent" :icon="icon">
            <template #icon="{ node }">
                <slot name="icon" :node="node"></slot>
            </template>
            <template #default="{ node }">
                <slot name="default" :node="node"></slot>
            </template>
        </zmz-tree-item>
        <div class="zmz-tree__empty" v-if="dataTree.length == 0">
            <slot name="empty">{{ emptyText }}</slot>
        </div>
    </div>
</template>
<script>
import { ref, computed, watch, provide } from 'vue';
import ZmzTreeItem from './zmz-tree-item.vue';
import { flattenTreeData } from '../../../utils/array.js';
export default {
    name: 'ZmzTree',
    components: {
        ZmzTreeItem
    },
    props: {
        /**
         * 数据
         */
        data: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 偏移
         */
        indent: {
            type: Number,
            default: 15
        },
        /**
         * 唯一
         */
        nodeKey: {
            type: String,
            default: ''
        },
        /**
         * 字段
         */
        props: {
            type: Object,
            default: () => {
                return {
                    label: 'label',
                    children: 'children'
                };
            }
        },
        /**
        * 展开全部
        */
        expandAll: {
            type: Boolean,
            default: false
        },
        /**
         * 严格父节点
         */
        checkStrictly: {
            type: Boolean,
            default: false
        },
        /**
         * 点击收缩节点
         */
        expandNodeClick: {
            type: Boolean,
            default: true
        },
        /**
         * 多选
         */
        multiple: {
            type: Boolean,
            default: false
        },
        /**
         * 懒加载数据
         */
        lazyLoadData: Function,
        /**
         * 空提示
         */
        emptyText: {
            type: String,
            default: "暂无数据"
        },
        /**
         * 图标
         */
        icon: {
            type: String,
            default: ""
        },
        /**
         * 是否显示复选框
         */
        showCheckbox: {
            type: Boolean,
            default: false
        },
        /**
         * 默认复选选中
         */
        defaultCheckedKeys: {
            type: Array,
            default() {
                return [];
            }
        },
        /**
         * 默认选中
         */
        defaultSelectKeys: {
            type: Array,
            default() {
                return [];
            }
        },
        /**
         * 默认展开
         */
        defaultExpandedKeys: {
            type: Array,
            default() {
                return [];
            }
        },
        /**
         * 过滤节点方法
         */
        filterNodeMethod: Function,
        /**
         * 自定义渲染内容
         */
        renderContent: Function
    },
    emits: ['on-select-change', 'on-check-change', 'on-filter-change', 'on-expand-change'],
    setup(props, { emit }) {
        const dataTree = ref([]);
        const childrenKey = ref(props.props.children || 'children');
        const labelKey = ref(props.props.label || 'label');
        const filterTree = (arr, parentId = null, level = 0) => {
            return arr.map((item, index) => {
                let currentLevel = level;
                let children = item[childrenKey.value];
                let label = item[labelKey.value];
                let newChildren = {};
                let newParentId = parentId ? `${parentId}-${index}` : `${index}`;
                let newItem = filterTreeObj(item, { label, level: currentLevel, nodeKey: newParentId, parentNodeKey: parentId })
                if (children && children.length) {
                    newChildren[childrenKey.value] = filterTree(children, newParentId, currentLevel + 1)
                }

                if (props.expandAll) {
                    newItem['expanded'] = props.expandAll
                }

                return Object.assign({}, newItem, newChildren)
            })
        };

        const filterTreeObj = (item, other) => {
            const defaultConfig = {
                expanded: false,//打开关闭
                disabled: false, // 禁用
                current: false,//选中
                checked: false,//复选框选中
                semiselection: false,//复选框半选中
            };

            let newItem = {};
            for (const key in item) {
                if (Object.keys(defaultConfig).includes(key)) {
                    newItem[key] = item[key];

                }
            }

            if (props.expandAll) {
                newItem['expanded'] = props.expandAll
            }

            newItem['node'] = item

            return Object.assign(defaultConfig, item, newItem, other)
        }

        const flattenDataTree = computed(() => {
            return flattenTreeData(dataTree.value, childrenKey.value)
        })

        // 展开节点
        const handleExpandedNode = (node) => {
            let children = node[childrenKey.value];
            if (children && children.length) {
                node.expanded = !node.expanded;
                emit('on-expand-change', node);
            }
        }

        // 选中节点
        const handleSelectNode = (node) => {
            flattenDataTree.value.forEach(item => {
                if (node.nodeKey != item.nodeKey && !props.multiple) {
                    item.current = false;
                }
            })
            node.current = !node.current;
            emit('on-select-change', node)
        }

        //复选框选中节点
        const handlecheckboxNode = (node) => {
            if (props.showCheckbox) {
                let currentNodeState = !node.checked && !node.semiselection;
                node.checked = currentNodeState;
                node.semiselection = false;
                refreshAllParentNodes(node);
                refreshAllChildNodes(node, { checked: currentNodeState, semiselection: false });
                emit('on-check-change', node)
            }
        }

        // 更新子集
        const refreshAllChildNodes = (node, changes) => {
            if (props.checkStrictly) return;
            for (const key in changes) {
                node[key] = changes[key];
            }
            if (node[childrenKey.value] && node[childrenKey.value].length) {
                node[childrenKey.value].forEach(item => {
                    refreshAllChildNodes(item, changes)
                });
            }
        };

        // 更新父集
        const refreshAllParentNodes = node => {
            if (props.checkStrictly) return;
            let parentNode = flattenDataTree.value.find(item => item.nodeKey == node.parentNodeKey)
            if (typeof parentNode == 'undefined') return;
            if (node.checked == parentNode.checked && node.semiselection == parentNode.semiselection) return;
            if (node.checked) {
                parentNode.checked = parentNode[childrenKey.value].every(item => item.checked);
                parentNode.semiselection = !parentNode.checked;
            } else {
                parentNode.checked = false;
                parentNode.semiselection = parentNode[childrenKey.value].some(item => item.checked || item.semiselection);
            }
            refreshAllParentNodes(parentNode)
        }

        const handleFilters = (data, keyword, filterNodeMethods) => {
            return data.reduce((acc, element) => {
                console.log(element)
                if (filterNodeMethods(keyword, element)) {
                    acc.push(element)
                } else if (element[childrenKey.value] && element[childrenKey.value].length) {
                    const childResult = handleFilters(element[childrenKey.value], keyword, filterNodeMethods);
                    if (childResult.length) {
                        let children = {};
                        children[childrenKey.value] = childResult;
                        acc.push({ ...element, ...children })
                    }
                }
                return acc;
            }, [])
        }

        // 获取指定节点
        const getNodes = (nodeKey) => {
            if (!props.nodeKey) throw new Error('[zmz-tree] nodeKey is required in getNodes');
            if (!nodeKey) return;
            return flattenDataTree.value.filter(item => item[props.nodeKey] === nodeKey).map(item => item.node)
        }

        // 获取展开节点
        const getExpandedNodes = () => {
            return flattenDataTree.value.filter(item => item.expanded).map(item => item.node)
        }

        // 设置展开节点
        const setExpandedNodes = (nodeKeys) => {
            if (!props.nodeKey) throw new Error('[zmz-tree] nodeKey is required in setExpandedNodes');
            let nodeKeysList = Array.isArray(nodeKeys) ? nodeKeys : [nodeKeys];
            flattenDataTree.value.forEach(item => {
                item.expanded = false;
            })

            flattenDataTree.value.forEach(item => {
                nodeKeysList.forEach((nodeKey) => {
                    if (item[props.nodeKey] == nodeKey) {
                        item.expanded = true;
                    }
                })
            })
        }

        // 获取选中节点
        const getSelectNodes = () => {
            return flattenDataTree.value.filter(item => item.current).map(item => item.node)
        }

        // 设置选中节点
        const setSelectNodes = (nodeKeys) => {
            if (!props.nodeKey) throw new Error('[zmz-tree] nodeKey is required in setSelectNodes');
            let nodeKeysList = Array.isArray(nodeKeys) ? nodeKeys : [nodeKeys];
            flattenDataTree.value.forEach(item => {
                item.current = false;
            })
            flattenDataTree.value.forEach(item => {
                nodeKeysList.forEach((nodeKey, index, array) => {
                    if (!props.multiple && item[props.nodeKey] == nodeKey && index == (array.length - 1)) {
                        item.current = true;
                    }
                    if (props.multiple && item[props.nodeKey] == nodeKey) {
                        item.current = true;
                    }
                })
            })
        }

        // 获取复选框选中节点
        const getCheckedNodes = () => {
            return flattenDataTree.value.filter(item => item.checked).map(item => item.node)
        }

        // 设置复选框选中节点
        const setCheckedNodes = (nodeKeys) => {
            if (!props.nodeKey) throw new Error('[zmz-tree] nodeKey is required in setcheckedNodes')
            let nodeKeysList = Array.isArray(nodeKeys) ? nodeKeys : [nodeKeys];
            flattenDataTree.value.forEach(item => {
                item.checked = false;
                item.semiselection = false;
            })
            flattenDataTree.value.forEach(item => {
                nodeKeysList.forEach(nodeKey => {
                    if (item[props.nodeKey] == nodeKey) {
                        handlecheckboxNode(item)
                    }
                })
            })
        }

        // 获取复选框半选中节点
        const getSemiselectionNodes = () => {
            return flattenDataTree.value.filter(item => item.semiselection).map(item => item.node)
        }

        // 获取复选框半选和选中节点
        const getCheckedAndSemiselectionNodes = () => {
            return flattenDataTree.value.filter(item => item.checked || item.semiselection).map(item => item.node)
        }

        // 删除节点
        const remove = (nodeKey) => {
            if (!props.nodeKey) throw new Error('[zmz-tree] nodeKey is required in remove');
            if (!nodeKey) return;
            handleAddRemoveCommon("remove", {}, nodeKey)
        }
        // 追加子节点
        const append = (data, nodeKey) => {
            if (!props, nodeKey) throw new Error('[zmz-tree] nodeKey is required in append');
            if (!nodeKey) return;
            handleAddRemoveCommon("append", data, nodeKey)
        }

        //节点之前添加
        const insertBefore = (data, nodeKey) => {
            if (!props.nodeKey) throw new Error('[zmz-tree] nodeKey is required in insertBefore');
            if (!nodeKey) return;
            handleAddRemoveCommon("before", data, nodeKey)
        }
        // 节点之后添加
        const insertAfter = (data, nodeKey) => {
            if (!props.nodeKey) throw new Error('[zmz-tree] nodeKey is required in insertAfter');
            if (!nodeKey) return;
            handleAddRemoveCommon("after", data, nodeKey)
        }

        // 过滤
        const filter = (keyword) => {
            if (!props.filterNodeMethod) throw new Error('[zmz-tree] filterNodeMethod is required when filter');
            if (keyword) {
                dataTree.value = handleFilters(filterTree(props.data), keyword, props.filterNodeMethod)
            } else {
                dataTree.value = filterTree(props.data);
                emit('on-filter-change', keyword, dataTree.value)
            }
        }

        //添加删除公共
        const handleAddRemoveCommon = (type, newNode, targetNodeKey) => {
            let fn = (node) => {
                node.forEach((item, index, array) => {
                    let children = item[childrenKey.value];
                    if (item[props.nodeKey] && item[props.nodeKey] == targetNodeKey) {
                        if (type == 'before') {
                            let newchild = filterTreeObj(newNode, { node: newNode, level: item.level, parent: item.parent });
                            array.splice(index, 0, newchild);
                            if (props.showCheckbox) {
                                refreshAllParentNodes(newchild);
                                refreshAllChildNodes(newchild, { checked: newchild.checked, semiselection: false });
                            }
                        }

                        if (type === 'after') {
                            let newchild = filterTreeObj(newNode, { node: newNode, level: item.level, parent: item.parent });
                            array.splice(index + 1, 0, newchild);
                            if (props.showCheckbox) {
                                refreshAllParentNodes(newchild);
                                refreshAllChildNodes(newchild, { checked: newchild.checked, semiselection: false });
                            }
                        }

                        if (type === 'remove') {
                            array.splice(index, 1)
                        }

                        if (type === 'remove') {
                            let newchild = filterTreeObj(newNode, { node: newNode, level: item.level + 1, parent: item.parent });
                            if (children && children.length) {
                                children.push(newchild);
                            } else {
                                children = [newchild];
                            }

                            if (props.showCheckbox) {
                                refreshAllParentNodes(newchild);
                                refreshAllChildNodes(newchild, { checked: newchild.checked, semiselection: false });
                            }
                        }
                    }

                    if (children && children.length) {
                        fn(children)
                    }
                })
            }

            fn(dataTree.value)
        }

        // 监听元数据
        watch(() => props.data, (newVal) => {
            dataTree.value = filterTree(newVal);
        }, {
            deep: true,
            immediate: true
        })

        //默认复选选中
        watch(() => props.defaultCheckedKeys, (newVal) => {
            if (newVal && newVal.length) {
                setCheckedNodes(newVal)
            }
        }, {
            deep: true,
            immediate: true
        })

        //默认选中
        watch(() => props.defaultSelectKeys, (newVal) => {
            if (newVal && newVal.length) {
                setSelectNodes(newVal)
            }
        }, {
            deep: true,
            immediate: true
        })

        // 默认展开
        watch(() => props.defaultExpandedKeys, (newVal) => {
            if (newVal && newVal.length) {
                setExpandedNodes(newVal)
            }
        }, {
            deep: true,
            immediate: true
        })

        provide('zmzTree', {
            handleExpandedNode: handleExpandedNode,
            handleSelectNode: handleSelectNode,
            expandNodeClick: props.expandNodeClick,
            handleCheckboxNode: handlecheckboxNode,
            lazyLoadData: props.lazyLoadData,
            filterTreeObj: filterTreeObj,
            renderContent: props.renderContent
        })

        return {
            dataTree,
            filter,
            getNodes,
            getExpandedNodes,
            setExpandedNodes,
            getSelectNodes,
            setSelectNodes,
            getCheckedNodes,
            setCheckedNodes,
            getSemiselectionNodes,
            getCheckedAndSemiselectionNodes,
            remove,
            append,
            insertBefore,
            insertAfter
        };
    }
};
</script>
