<template>
    <ul class="zmz-menu" :class="[zmzMenuClass]" ref="zmzMenu">
        <slot></slot>
    </ul>
</template>
<script>
import { computed, provide, ref, watch, getCurrentInstance } from 'vue';
import { findComponentsUp } from '../../../utils/find.js';
export default {
    name: 'ZmzMenu',
    componentName: 'ZmzMenu',
    props: {
        /**
         * 激活菜单
         */
        defaultActiveName: {
            type: Array,
            default: () => {
                return []
            }
        },
        /**
         * 激活二级菜单
         */
        defaultActiveSubname: {
            type: Array,
            default: () => {
                return []
            }
        },
        /**
         * 模式
         */
        mode: {
            type: String,
            default: 'vertical',
            validator(value) {
                return ['vertical', 'horizontal'].includes(value);
            }
        },
        /**
         * 路由
         */
        router: {
            type: Boolean,
            default: false
        },
        /**
         * 收缩
         */
        shrink: {
            type: Boolean,
            default: false
        },
        /**
         * 手风琴
         */
        accordion: {
            type: Boolean,
            default: false
        },
        /**
         * 主题
         */
        effect: {
            type: String,
            default: 'light',
            validator(value) {
                return ['primary', 'light', 'dark'].includes(value);
            }
        },
        /**
         * 提示窗主题
         */
        tooltipEffect: {
            type: String,
            default: 'black',
            validator(value) {
                return ['black', 'white'].includes(value);
            }
        },
        /**
         * 菜单激活方式
         */
        trigger: {
            type: String,
            default: 'hover',
            validator(value) {
                return ['click', 'hover'].includes(value)
            }
        }
    },
    emits: ['on-select', 'on-submenu-toggle'],
    setup(props, { emit }) {
        const instance = getCurrentInstance();
        const router = instance.appContext.config.globalProperties.$router;
        const defaultActiveName = ref(props.defaultActiveName);
        const defaultActiveSubname = ref(props.defaultActiveSubname);
        const menuItemList = ref([]);
        const menuSubList = ref([]);
        const zmzMenu = ref(null);
        const openSubmenu = ref([]);
        const isShrink = ref(false)

        // 公共类名
        const zmzMenuClass = computed(() => {
            let params = []
            if (props.mode) {
                params.push(`zmz-menu--${props.mode}`);
            }

            if (props.effect) {
                params.push(`zmz-menu--${props.effect}`);
            }

            if (props.shrink && props.mode == 'vertical') {
                params.push(`zmz-menu--shrink`);
            }

            if (props.activeMenuBorder) {
                params.push(`zmz-menu--border`);
            }

            return params
        })

        const updateSubOpen = (name) => {
            let nameList = [...openSubmenu.value]
            let index = nameList.indexOf(name)
            if (props.accordion) menuSubList.value.forEach(item => {
                item.instance.proxy.opened = false
            })
            if (index > -1) {
                let currentSubmenu = null;
                menuSubList.value.forEach(item => {
                    if (name === item.instance.proxy.name) {
                        currentSubmenu = item.instance.proxy
                        item.instance.proxy.opened = false
                    }
                })

                if (findComponentsUp(currentSubmenu, 'ZmzMenuSubmenu')) {
                    findComponentsUp(currentSubmenu, 'ZmzMenuSubmenu').forEach(item => {
                        item.opened = true
                    })
                }

                currentSubmenu.childSubmenuList.map(item => item).forEach(item => {
                    item.instance.proxy.opened = false
                });
            } else {
                if (props.accordion) {
                    let currentSubmenu = null;
                    menuSubList.value.forEach(item => {
                        if (name === item.instance.proxy.name) {
                            currentSubmenu = item.instance.proxy;
                            item.instance.proxy.opened = true
                        }
                    })

                    if (findComponentsUp(currentSubmenu, 'ZmzMenuSubmenu')) {
                        findComponentsUp(currentSubmenu, 'ZmzMenuSubmenu').forEach(item => {
                            item.opened = true
                        })
                    }
                }
            }

            let openSubmenus = menuSubList.value.filter(item => item.instance.proxy.opened).map(item => item.instance.proxy.name)
            openSubmenu.value = [...openSubmenus]
        }

        watch(
            () => props.defaultActiveName,
            (val) => {
                defaultActiveName.value = val
            },
            { lazy: true }
        );

        watch(
            () => props.defaultActiveSubname,
            (val) => {
                defaultActiveSubname.value = val
            },
            { lazy: true }
        );


        watch(
            () => props.shrink,
            (val) => {
                isShrink.value = val
            },
            { immediate: true, lazy: true }
        );


        // 选中菜单
        const onItemSelect = (name) => {
            emit('on-select', name)
            if (props.router && name) {
                routeToItem(name, (error) => {
                    if (error) {
                        if (error.name === 'NavigationDuplicated') return
                        console.error(error)
                    }
                });
            }
        }

        // 路由菜单
        const routeToItem = (route, onError) => {
            try {
                router.push(route, () => { }, onError);
            } catch (e) {
                console.error(e);
            }
        }

        // 打开
        const onSubToggle = (action, name) => {
            emit('on-submenu-toggle', { action, name })
        }

        provide('zmzMenu', {
            mode: props.mode,
            defaultActiveName: defaultActiveName,
            defaultActiveSubname: defaultActiveSubname,
            menuItemList: menuItemList,
            menuSubList: menuSubList,
            router: props.router,
            shrink: isShrink,
            updateSubOpen: updateSubOpen,
            accordion: props.accordion,
            trigger: props.trigger,
            tooltipEffect: props.tooltipEffect,
            onItemSelect: onItemSelect,
            onSubToggle: onSubToggle
        });
        return {
            zmzMenuClass,
            zmzMenu
        };
    }
};
</script>
