<script>
import Render from '../../../utils/render.js';
import { createResizeObserver } from '../../../utils/dom.js';
import { h } from "vue";
export default {
    name: 'ZmzTabsNav',
    inject: ['zmzTabs'],
    components: {
        Render
    },
    props: {
        /**
         * 卡片动画
         */
        animated: {
            type: Boolean,
            default: false
        },
        /**
         * 标签可增加和可关闭
         */
        editable: {
            type: Boolean,
            default: false
        },
        /**
         * 标签可增加
         */
        addable: {
            type: Boolean,
            default: false
        },
        /**
         * 标签可关闭
         */
        closable: {
            type: Boolean,
            default: false
        },
    },
    created() {
        this.$nextTick(() => {
            this.update()
            this.updateNavScroll()
            //dom对象发生变化后的操作逻辑赋值给dom对象
            this.resizeObserver = createResizeObserver(() => {
                this.updateNavScroll()
            })
            if (this.resizeObserver && this.$refs.zmzTabsNav) {
                //观察的对象
                this.resizeObserver.observe(this.$refs.zmzTabsNav)
            }
        })
    },
    beforeUnmount() {
        if (this.resizeObserver && this.$refs.zmzTabsNav) {
            this.resizeObserver.unobserve(this.$refs.zmzTabsNav)
            this.resizeObserver = null
        }
    },
    data() {
        return {
            navStyle: {
                transform: ''
            },
            resizeObserver: null
        }
    },
    methods: {
        update() {
            if (this.$refs['zmzTabsNavItem' + this.zmzTabs.transformIndex.value] && this.$refs['zmzTabsNavLine'] && this.animated) {
                let transform = "transform:translateX(" + this.$refs['zmzTabsNavItem' + this.zmzTabs.transformIndex.value].offsetLeft + "px)"
                let width = "width:" + this.$refs['zmzTabsNavItem' + this.zmzTabs.transformIndex.value].offsetWidth + "px;"
                this.$refs['zmzTabsNavLine'].style = width + transform;
            }
        },
        handleTabs(item) {
            if (item.instance.proxy.disabled) return
            this.zmzTabs.handleTabsNavItemClick(item)
            this.update()
        },
        getCurrentScrollOffset() {
            const { navStyle } = this;
            return navStyle.transform
                ? Number(navStyle.transform.match(/translateX\(-(\d+(\.\d+)*)px\)/)[1])
                : 0;
        },
        setOffset(value) {
            this.navStyle.transform = `translateX(-${value}px)`;
        },
        // 左键滚动
        scrollPrev() {
            const zmzTabsNavScroll = this.$refs.zmzTabsNavScroll.offsetWidth;
            const currentOffset = this.getCurrentScrollOffset();
            if (!currentOffset) return;
            let newOffset = currentOffset > zmzTabsNavScroll
                ? currentOffset - zmzTabsNavScroll
                : 0;
            this.setOffset(newOffset);
            this.zmzTabs.handleScrollPrevNextTabs('prev', newOffset)
        },
        // 右键滚动
        scrollNext() {
            const zmzTabsNav = this.$refs.zmzTabsNav.offsetWidth;
            const zmzTabsNavScroll = this.$refs.zmzTabsNavScroll.offsetWidth;
            const currentOffset = this.getCurrentScrollOffset();
            if (zmzTabsNav - currentOffset <= zmzTabsNavScroll) return;
            let newOffset = zmzTabsNav - currentOffset > zmzTabsNavScroll * 2
                ? currentOffset + zmzTabsNavScroll
                : (zmzTabsNav - zmzTabsNavScroll);
            this.setOffset(newOffset);
            this.zmzTabs.handleScrollPrevNextTabs('next', newOffset)
        },
        // 获取滚动
        updateNavScroll() {
            const zmzTabsNav = this.$refs.zmzTabsNav.offsetWidth;
            const zmzTabsNavScroll = this.$refs.zmzTabsNavScroll.offsetWidth;
            const currentOffset = this.getCurrentScrollOffset();
            if (zmzTabsNavScroll < zmzTabsNav) {
                this.zmzTabs.scroll.value = true
                if (zmzTabsNav - currentOffset < zmzTabsNavScroll) {
                    this.setOffset(zmzTabsNav - zmzTabsNavScroll);
                }
            } else {
                this.zmzTabs.scroll.value = false
                if (currentOffset > 0) {
                    this.setOffset(0);
                }
            }
        }
    },
    render() {
        let addTable = h('div', {
            class: ['zmz-tabs__header__push'],
            onClick: (ev) => this.zmzTabs.handleAddTabsItem(ev)
        }, [
            h('i', {
                class: ['zmz-icon--add']
            })
        ])

        let prevDom = h('div', {
            class: ['zmz-tabs__header__wrap__prev'],
            onClick: () => this.scrollPrev()
        }, [
            h('i', {
                class: ['zmz-icon--arrow-left']
            })
        ])

        let nextDom = h('div', {
            class: ['zmz-tabs__header__wrap__next'],
            onClick: () => this.scrollNext()
        }, [
            h('i', {
                class: ['zmz-icon--arrow-right']
            })
        ])

        let addTableOreditable = null
        if (this.editable || this.addable) {
            addTableOreditable = addTable
        }

        let zmzTabsScrollPrev = null
        let zmzTabsScrollNext = null

        if (this.zmzTabs.scroll.value) {
            zmzTabsScrollPrev = prevDom
            zmzTabsScrollNext = nextDom
        }

        let zmzTabsType = null
        if (this.animated && this.zmzTabs.type == '') {
            zmzTabsType = h('div', {
                class: ['zmz-tabs__nav--line'],
                ref: 'zmzTabsNavLine',
                style: this.update()
            })
        }


        let zmzTabsList = []
        this.zmzTabs.zmzTabsList.value.forEach((item, index) => {
            let itemIcon = null
            if (item.instance.proxy.icon && !item.instance.proxy.$slots.title) {
                itemIcon = h('i', {
                    class: ['zmz-tabs__nav--item__icon', item.instance.proxy.icon]
                })
            }

            let itemlabel = null
            if (item.instance.proxy.label && !item.instance.proxy.$slots.title && (typeof item.instance.proxy.label != 'function')) {
                itemlabel = h('span', {}, item.instance.proxy.label)
            }

            let itemTitle = null
            if (item.instance.proxy.$slots.title) {
                itemTitle = item.instance.proxy.$slots.title()
            }

            let itemRender = null
            if ((typeof item.instance.proxy.label == 'function')) {
                itemRender = h('render', {
                    render: item.instance.proxy.label
                })
            }

            let itemClosable = null
            if ((this.editable || this.closable) && item.instance.proxy.closable) {
                itemClosable = h('i', {
                    class: ['zmz-icon--wrong zmz-tabs__nav--item__closicon'],
                    onClick: (ev) => this.zmzTabs.handleRemoveTabsItem(ev, item)
                })
            }

            zmzTabsList.push(h('div', {
                class: ["zmz-tabs__nav--item", { 'zmz-tabs__nav--item--active': item.instance.proxy.selected }, { 'zmz-tabs__nav--item--disabled': item.instance.proxy.disabled }],
                ref: 'zmzTabsNavItem' + index,
                key: index,
                onClick: () => this.handleTabs(item)
            }, [itemIcon, itemlabel, itemTitle, itemRender, itemClosable]))
        })

        return h('div', {
            class: ['zmz-tabs__header']
        }, [
            h('div', {
                class: ["zmz-tabs__header__wrap"],
                ref: 'zmzTabsHeaderWrap'
            }, [
                zmzTabsScrollPrev,
                zmzTabsScrollNext,
                h('div', {
                    class: ["zmz-tabs__header__wrap__scroll"],
                    ref: 'zmzTabsNavScroll'
                }, [
                    h('div', {
                        class: ["zmz-tabs__nav"],
                        ref: 'zmzTabsNav',
                        style: this.navStyle
                    }, [
                        zmzTabsList,
                        zmzTabsType
                    ])
                ])
            ]),
            addTableOreditable
        ])
    }

};
</script>
