<template>
    <li class="zmz-menu-item" @click="handleClick" @mouseover="handleMouseoverEvent" @mouseout="handleMouseoutEvent"
        ref="item" tabindex="-1" :class="[zmzMenuItemClass]" :style="[zmzMenuItemStyle]">
        <template v-if="isShrink && $slots.title">
            <zmz-tooltip :effect="tooltipEffect" placement="right" teleport>
                <div class="zmz-menu-item__icon">
                    <slot name="title"></slot>
                </div>
                <template #content>
                    <slot></slot>
                </template>
            </zmz-tooltip>
        </template>
        <template v-else>
            <slot name="title"></slot>
            <slot></slot>
        </template>
    </li>
</template>

<script>
import mixin from '../../../utils/mixin.js';
import { computed, onMounted, inject, getCurrentInstance, ref, onBeforeUnmount } from 'vue';
export default {
    name: 'ZmzMenuItem',
    props: {
        /**
         * 标志
         */
        name: {
            type: String,
            required: true
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const { findParent } = mixin();
        const Instance = getCurrentInstance();
        const zmzMenu = inject('zmzMenu', {});
        const zmzMenuSubMenu = inject('zmzMenuSubMenu', {});
        const selected = ref(false);
        const isHover = ref(false);

        // 是否收缩
        const isShrink = computed(() => {
            return zmzMenu.shrink.value
        })

        const tooltipEffect = computed(() => {
            return zmzMenu.tooltipEffect
        })

        // 选中
        const isSelected = computed(() => {
            return zmzMenu.defaultActiveName.value.indexOf(props.name) > -1 || selected.value;
        });

        // 递归父级
        const tellParents = (parents) => {
            if (props.disabled) return;
            let isFindParent = findParent(parents, 'ZmzMenuSubmenu')
            if (isFindParent) {
                zmzMenu.defaultActiveName.value.unshift(isFindParent.proxy.name);
                tellParents(isFindParent.parent);
            }
        };

        // 点击事件
        const handleClick = () => {
            if (props.disabled) return;
            zmzMenu.defaultActiveName.value = [];
            // 存在父级
            let findSubmenuDom = findParent(Instance.parent, 'ZmzMenuSubmenu')
            if (findSubmenuDom) {
                zmzMenu.defaultActiveName.value.unshift(props.name);
                tellParents(Instance.parent);
                if (findSubmenuDom) {
                    zmzMenuSubMenu.onItemSelect(props.name)
                }
            } else {
                zmzMenu.defaultActiveName.value.unshift(props.name);
                zmzMenu.onItemSelect(props.name)
            }
        };

        // 滑入
        const handleMouseoverEvent = () => {
            isHover.value = true
        };

        // 滑出
        const handleMouseoutEvent = () => {
            isHover.value = false
        };

        // 菜单样式
        const zmzMenuItemStyle = computed(() => {
            let params = {};
            if (levelPadding.value) {
                params['padding-left'] = levelPadding.value + 'px'
            }

            return params;
        });

        // 路由
        const isRouter = computed(() => {
            return zmzMenu.router;
        });

        // 公共类名
        const zmzMenuItemClass = computed(() => {
            let params = [];

            if (isHover.value) {
                params.push('zmz-menu-item--hover')
            }

            if (props.disabled) {
                params.push('zmz-menu-item--disabled')
            }

            if (isSelected.value) {
                params.push('zmz-menu-item--active')
            }
            return params;
        });


        onMounted(() => {
            addDom()
        })

        onBeforeUnmount(() => {
            removeDom()
        })

        const addDom = () => {
            zmzMenu.menuItemList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const removeDom = () => {
            if (zmzMenu.menuItemList.value && zmzMenu.menuItemList.value.length) {
                const index = zmzMenu.menuItemList.value.findIndex(item => item.uid === Instance.uid);
                zmzMenu.menuItemList.value.splice(index, 1);
            }
        }

        // 层级偏移
        const levelPadding = computed(() => {
            if (zmzMenu.mode != 'vertical' || zmzMenu.shrink.value) return '';
            let padding = 20;
            let parents = Instance.parent;
            while (parents && parents.type.componentName !== 'zmzMenu') {
                if (parents.type.componentName === 'ZmzMenuSubmenu') {
                    padding += 20;
                }
                parents = parents.parent;
            }
            return padding;
        })

        return {
            handleClick,
            isSelected,
            zmzMenuItemStyle,
            isRouter,
            handleMouseoverEvent,
            handleMouseoutEvent,
            zmzMenuItemClass,
            isShrink,
            selected,
            tooltipEffect
        };
    }
};
</script>
