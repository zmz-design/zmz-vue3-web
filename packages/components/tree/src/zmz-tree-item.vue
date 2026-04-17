<template>
    <div class="zmz-tree__item"
        :class="{ 'zmz-tree__item--current': node.current, 'zmz-tree__item--expanded': node.expanded, 'zmz-tree__item--disabled': node.disabled }"
        @click.stop="handleParentNode(node)" @focus="handleFocus">
        <div class="zmz-tree__item__content" :style="[zmzTreeItemContentStyle]" tabindex="-1">
            <div class="zmz-tree__item__expanded" @click.stop="handleIconExpanded(node)">
                <template v-if="isExpandedIcon">
                    <slot name="icon" :node="node">
                        <i class="zmz-tree__item__expanded__icon" :class="[icon]" v-if="icon"></i>
                        <i class="zmz-tree__item__expanded__icon zmz-icon--arrow-right" v-else></i>
                    </slot>
                </template>
                <template  v-if="isLoading">
                    <i class="zmz-tree__item__loading__icon zmz-icon--loading"></i>
                </template>
            </div>
            <div class="zmz-tree__item__checkbox" v-if="showCheckbox">
                <zmz-checkbox @click.prevent.stop="handleCheckboxNode(node)" :modelValue="node.checked"
                    :semiselection="node.semiselection" :disabled="node.disabled"></zmz-checkbox>
            </div>
            <div class="zmz-tree__item__label" @click.stop="handleNode(node)">
                <zmz-tree-lable v-if="renderContent" :render-content="renderContent" :props="props"
                    :node="node"></zmz-tree-lable>
                <template v-else>
                    <slot name="default" :node="node">{{ node[labelKey] }}</slot>
                </template>
            </div>
        </div>
        <template v-if="currentChildren && currentChildren.length">
            <div class="zmz-tree__item__children" v-show="node.expanded">
                <zmz-tree-item v-for="(item, index) in currentChildren" :props="props" :node="item" :key="index"
                    :show-checkbox="showCheckbox" :indent="indent" :render-content="renderContent" :icon="icon">
                    <template #icon="{ node }">
                        <slot name="icon" :node="node"></slot>
                    </template>
                    <template #default="{ node }">
                        <slot name="default" :node="node"></slot>
                    </template>
                </zmz-tree-item>
            </div>
        </template>
    </div>
</template>
<script>
import { inject, computed, ref } from 'vue';
import ZmzCheckbox from '../../form/checkbox/index.js'
import ZmzTreeLable from './zmz-tree-label.js'

export default {
    name: 'ZmzTreeItem',
    components: {
        ZmzCheckbox,
        ZmzTreeLable
    },
    props: {
        node: Object,
        indent: Number,
        props: Object,
        showCheckbox: Boolean,
        renderContent: Function,
        icon: String
    },
    setup(props) {
        const zmzTree = inject('zmzTree', {});
        const childrenKey = ref(props.props.children || 'children');
        const labelKey = ref(props.props.label || 'label');

        const currentChildren = computed(() => {
            return props.node[childrenKey.value]
        })

        const isLoading = computed(() => {
            return 'loading' in props.node && props.node.loading
        })

        const isExpandedIcon = computed(() => {
            return (currentChildren.value && currentChildren.value.length) || ('loading' in props.node && !props.node.loading)
        })

        //点击icon
        const handleIconExpanded = (node) => {
            if (!isExpandedIcon.value) return;
            if (currentChildren.value && currentChildren.value.length == 0 && zmzTree.lazyLoadData) {
                node.loading = true;
                zmzTree.lazyLoadData(node, (children) => {
                    node.loading = false;
                    if (children.length) {
                        node[childrenKey.value] = children.map((item, index) => {
                            let label = item[labelKey.value];
                            let newParentId = `${node.nodeKey}-${index}`;
                            let newItem = zmzTree.filterTreeObj(item, { label, level: node.level + 1, nodeKey: newParentId, parentNodeKey: node.nodeKey });
                            return newItem;
                        });
                        node.expanded = true;
                    }
                })
            }
            if (currentChildren.value && currentChildren.value.length) {
                zmzTree.handleExpandedNode(node)
            }
        }

        //点击父级节点
        const handleParentNode = (node) => {
            if (!zmzTree.expandNodeClick) return;
            zmzTree.handleExpandedNode(node);
        }

        //点击节点
        const handleNode = node => {
            if (node.disabled) return;
            if (zmzTree.expandNodeClick) {
                handleIconExpanded(node)
            } else {
                zmzTree.handleSelectNode(node)
            }
        }
        const zmzTreeItemContentStyle = computed(() => {
            let params = {}
            if (props.node.level * props.indent) {
                params['padding-left'] = props.node.level * props.indent + 'px'
            }
            return params
        });

        // 点击复选框
        const handleCheckboxNode = node => {
            if (node.disabled) return;
            zmzTree.handleCheckboxNode(node);
        }

        return {
            zmzTreeItemContentStyle,
            handleParentNode,
            handleCheckboxNode,
            zmzTree,
            currentChildren,
            handleIconExpanded,
            isExpandedIcon,
            handleNode,
            labelKey,
            isLoading
        };
    }
};
</script>
