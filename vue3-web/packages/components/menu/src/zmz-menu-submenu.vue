<template>
    <li class="zmz-menu-submenu" @mouseleave="handleClosePanel" @mouseenter="handleOpenPanel" :class="[zmzSubmenuClass]" ref="zmzSubmenu">
        <div class="zmz-menu-submenu__title" tabindex="-1" @click="handleClick"
            :style="[zmzSubmenuTitleStyle]" :data-index="isShrink">
            <slot name="title"></slot>
            <i class="zmz-menu-submenu__title__arrow" :class="[iconActive]"></i>
        </div>
        <template v-if="isVertical && !isShrink">
            <zmz-transition-collapse>
                <div class="zmz-menu-submenu__dropdown" v-show="opened" :style="zmzSubmenuDropdownStyle">
                    <ul class="zmz-menu">
                        <slot></slot>
                    </ul>
                </div>
            </zmz-transition-collapse>
        </template>
        <template v-else>
            <transition name="zmz-fold-top">
                <div class="zmz-menu-submenu__dropdown" v-show="opened">
                    <ul class="zmz-menu">
                        <slot></slot>
                    </ul>
                </div>
            </transition>
        </template>
    </li>
</template>
<script>
import mixin from '../../../utils/mixin.js';
import { computed, onMounted, ref, inject, getCurrentInstance, onBeforeUnmount, provide } from 'vue';
export default {
    name: 'ZmzMenuSubmenu',
    componentName: 'ZmzMenuSubmenu',
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
        const zmzSubmenu = ref(null);
        const Instance = getCurrentInstance();
        const zmzMenu = inject('zmzMenu', {});
        const padding = ref(0);
        const opened = ref(zmzMenu.defaultActiveSubname.value.indexOf(props.name) > -1 ? true : false);
        const timer = ref(null);
        const childSubmenuList = ref([])
        const { findParent } = mixin();
        // 激活
        const active = computed(() => {
            return zmzMenu.defaultActiveName.value.indexOf(props.name) > -1;
        });
        // 激活icon
        const iconActive = computed(() => {
            return opened.value ? 'zmz-icon--arrow-top' : 'zmz-icon--arrow-bottom';
        });

        // 点击事件
        const handleClick = () => {
            if (props.disabled) return;
            if (zmzMenu.mode == 'horizontal' && zmzMenu.trigger != 'click') return;
            if (zmzMenu.mode == 'vertical' && zmzMenu.shrink.value) return;
            // 手风琴
            opened.value = !opened.value
            zmzMenu.updateSubOpen(props.name)
        };

        // 垂直
        const isVertical = computed(() => {
            return zmzMenu.mode == 'vertical'
        })

        // 打开面板
        const handleOpenPanel = () => {
            if (props.disabled) return;
            if (zmzMenu.mode == 'horizontal' && zmzMenu.trigger != 'hover') return;
            if (zmzMenu.mode == 'vertical' && !zmzMenu.shrink.value) return;
            clearTimeout(timer.value);
            timer.value = null;
            opened.value = true;
            zmzMenu.onSubToggle('open', props.name)
        };

        // 关闭面板
        const handleClosePanel = () => {
            if (props.disabled) return;
            if (zmzMenu.mode == 'horizontal' && zmzMenu.trigger != 'hover') return;
            if (zmzMenu.mode == 'vertical' && !zmzMenu.shrink.value) return;
            timer.value = setTimeout(() => {
                opened.value = false;
                zmzMenu.onSubToggle('close', props.name)
                clearTimeout(timer.value);
                timer.value = null;
            }, 100);
        };

        // 标题样式
        const zmzSubmenuTitleStyle = computed(() => {
            let params = {}

            if (levelPadding.value) {
                params['padding-left'] = levelPadding.value + 'px';
            }

            return params;
        })

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

        // 下拉样式
        const zmzSubmenuDropdownStyle = computed(() => {
            let params = {}
            return params;
        })

        // 公共类名
        const zmzSubmenuClass = computed(() => {
            let params = [];
            if (active.value) {
                params.push('zmz-menu-submenu--active')
            }

            if (props.disabled) {
                params.push('zmz-menu-submenu--disabled')
            }

            if (opened.value) {
                params.push('zmz-menu-submenu--open')
            }

            return params;
        });

        //是否收缩
        const isShrink = computed(() => {
            return zmzMenu.shrink.value
        })

        // 选中
        const onItemSelect = (name, path) => {
            if (zmzMenu.mode === 'horizontal') opened.value = false;
            zmzMenu.onItemSelect(name, path);
        }

        provide('zmzMenuSubMenu', {
            onItemSelect: onItemSelect,
        });

        onMounted(() => {
            addDom()
        })

        onBeforeUnmount(() => {
            removeDom()
        })

        const addDom = () => {
            zmzMenu.menuSubList.value.push({
                uid: Instance.uid,
                instance: Instance
            });

            const parentSubmenu = findParent(Instance.parent, 'ZmzMenuSubmenu');
            if (parentSubmenu) {
                if (!parentSubmenu.proxy.childSubmenuList) parentSubmenu.proxy.childSubmenuList = [];
                parentSubmenu.proxy.childSubmenuList.push({
                    uid: Instance.uid,
                    instance: Instance
                });
            }
        }

        const removeDom = () => {
            if (zmzMenu.menuSubList.value && zmzMenu.menuSubList.value.length) {
                const index = zmzMenu.menuSubList.value.findIndex(item => item.uid === Instance.uid);
                zmzMenu.menuSubList.value.splice(index, 1);
            }

            const parentSubmenu = findParent(Instance.parent, 'ZmzMenuSubmenu');
            if (parentSubmenu) {
                if (parentSubmenu.proxy.childSubmenuList && parentSubmenu.proxy.childSubmenuList.length) {
                    const index = parentSubmenu.proxy.childSubmenuList.findIndex(item => item.uid === Instance.uid);
                    parentSubmenu.proxy.childSubmenuList.splice(index, 1);
                }
            }
        }

        return {
            active,
            iconActive,
            opened,
            handleClick,
            handleClosePanel,
            handleOpenPanel,
            zmzSubmenuTitleStyle,
            isVertical,
            zmzSubmenu,
            zmzSubmenuClass,
            padding,
            isShrink,
            zmzSubmenuDropdownStyle,
            childSubmenuList
        };
    }
};
</script>
