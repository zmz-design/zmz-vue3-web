import { computed, provide, ref, onMounted, h, watch } from 'vue';
import ZmzTabsNav from './zmz-tabs-nav.vue';
export default {
    name: 'ZmzTabs',
    props: {
        /**
         * 卡片激活name
         */
        modelValue: {
            type: [String, Number],
            default: ''
        },
        /**
         * 卡片风格
         */
        type: {
            type: String,
            default: '',
            validator(value) {
                return ['border-card', '', 'card'].includes(value)
            }
        },
        /**
         * 卡片动画
         */
        animated: {
            type: Boolean,
            default: false
        },
        /**
         * 卡片位置
         */
        tabPosition: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'left', 'right'].includes(value)
            }
        },
        /**
         * 激活辅助线
         */
        tabActiveLine: {
            type: Boolean,
            default: true
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
        /**
         * 标签是否自动撑开
         */
        stretch: {
            type: Boolean,
            default: false
        },
        // 删除回调
        beforeRemove: {
            type: Function,
            default() {
                return 'Default function'
            }
        }
    },
    emits: ['update:modelValue', 'on-change', 'on-editable', 'on-scroll-prev-next'],
    setup(props, {
        slots,
        emit
    }) {
        const zmzTabsList = ref([]);
        const transformIndex = ref(0);
        const scroll = ref(false);

        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val);
            }
        })

        watch(() => model.value, (newVal, oldVal) => {
            if (newVal != oldVal) {
                updateNavStatus()
            }
        })

        const zmzTabsClass = computed(() => {
            let params = []
            if (props.type) {
                params.push(`zmz-tabs--${props.type}`)
            }

            if (props.tabPosition) {
                params.push(`zmz-tabs--${props.tabPosition}`)
            }

            if (props.tabActiveLine && props.type == '') {
                params.push(`zmz-tabs--line`)
            }

            if (props.animated) {
                params.push('zmz-tabs--animated')
            }

            if (props.editable) {
                params.push('zmz-tabs--editable')
            }

            if (props.addable) {
                params.push('zmz-tabs--addable')
            }

            if (props.closable) {
                params.push('zmz-tabs--closable')
            }

            if (props.stretch) {
                params.push('zmz-tabs--stretch')
            }

            if (scroll.value) {
                params.push('zmz-tabs--scroll')
            }

            return params;
        });

        const handleTabsNavItemClick = (item) => {
            zmzTabsList.value.forEach((vm, index) => {
                if (item.instance.proxy.name == vm.instance.proxy.name) {
                    model.value = item.instance.proxy.name;
                    transformIndex.value = index
                    vm.instance.proxy.selected = true;
                    emit('on-change', vm.instance.proxy.name);
                } else {
                    vm.instance.proxy.selected = false;
                }
            });
        };

        const zmzTabsContentStyle = computed(() => {
            let params = {}
            if (props.animated) {
                params['transform'] = 'translateX(-' + 100 * transformIndex.value + '%)  translateZ(0px)'
            }
            return params
        })

        const zmzTabsContentClass = computed(() => {
            let params = [];
            if (props.animated) {
                params.push('zmz-tabs__content--animated')
            }
            return params
        })

        // 更新节点
        const updateNavDom = () => {
            updateNavStatus()
        }

        // 更新选中状态
        const updateNavStatus = () => {
            zmzTabsList.value.forEach(tab => tab.instance.proxy.selected = (tab.instance.proxy.name === model.value));
        }

        // 添加子节点
        const handleAddTabsItem = () => {
            emit('on-editable', null, 'add');
        }

        // 删除子节点
        const handleRemoveTabsItem = (ev, item) => {
            ev.stopPropagation();
            if (!props.beforeRemove) {
                handleRemoveTabs(item.instance.proxy);
            }
            const before = props.beforeRemove(item.instance.proxy);
            if (before && before.then) {
                before.then(() => {
                    handleRemoveTabs(item.instance.proxy);
                });
            } else {
                handleRemoveTabs(item.instance.proxy);
            }
        }

        // 删除公共
        const handleRemoveTabs = (item) => {
            emit('on-editable', item.name, 'remove');
        }

        // 点击右侧按钮
        const handleScrollPrevNextTabs = (active, offset) => {
            emit('on-scroll-prev-next', offset, active);
        }


        provide('zmzTabs', {
            zmzTabsList: zmzTabsList,
            animated: props.animated,
            type: props.type,
            transformIndex: transformIndex,
            handleTabsNavItemClick: handleTabsNavItemClick,
            handleAddTabsItem: handleAddTabsItem,
            handleRemoveTabsItem: handleRemoveTabsItem,
            updateNavDom: updateNavDom,
            scroll: scroll,
            handleScrollPrevNextTabs: handleScrollPrevNextTabs
        });

        onMounted(() => {
            updateNavDom();
        });

        return () => {
            let child = [
                h(ZmzTabsNav, {
                    animated: props.animated,
                    editable: props.editable,
                    addable: props.addable,
                    closable: props.closable
                }),
                h('div', {
                    class: ["zmz-tabs__content", zmzTabsContentClass.value],
                    style: [zmzTabsContentStyle.value],
                }, slots.default())
            ];

            if (props.tabPosition == 'right' || props.tabPosition == 'bottom') {
                child = [
                    h('div', {
                        class: ["zmz-tabs__content", zmzTabsContentClass.value],
                        style: [zmzTabsContentStyle.value],
                    }, slots.default()),
                    h(ZmzTabsNav, {
                        animated: props.animated,
                        editable: props.editable,
                        addable: props.addable,
                        closable: props.closable
                    })
                ];
            }

            return h('div', {
                class: ["zmz-tabs", zmzTabsClass.value]
            }, child);
        }
    }
};