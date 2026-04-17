import { provide, ref, computed, onMounted, watch, h } from 'vue';
import ZmzSpaceItem from './zmz-space-item.vue'
export default {
    name: 'ZmzSpace',
    props: {
        /**
         * 标题
         */
        title: {
            type: String
        },
        mode: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['vertical', 'horizontal'].includes(value);
            }
        },
        /**
         * 间隔
         */
        interval: {
            type: Boolean,
            default: true
        },
        /**
         * 全局内间距
         */
        padding: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 全局外间距
         */
        margin: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 显示最后外边距
         */
        showLastMargin: {
            type: Boolean,
            default: true
        },
        /**
         * 显示最后内边距
         */
        showLastPadding: {
            type: Boolean,
            default: true
        },
        /**
         * 显示第一外边距
         */
        showFirstMargin: {
            type: Boolean,
            default: true
        },
        /**
         * 显示第一内边距
         */
        showFirstPadding: {
            type: Boolean,
            default: true
        },
        /**
         * 自定义标签
         */
        tag: {
            type: String,
            default: 'div'
        }
    },
    setup(props, { slots, attrs }) {
        const spaceList = ref([]);
        const updateDom = () => {
            spaceList.value.forEach((item, index) => {
                let currentItem = item.instance;
                currentItem.proxy.paddingChild = padding.value;
                currentItem.proxy.marginChild = props.margin;

                if (index == 0 && !props.showFirstMargin) {
                    currentItem.proxy.marginChild = [];
                }

                if (index == 0 && !props.showFirstPadding) {
                    currentItem.proxy.paddingChild = [];
                }

                if (index == spaceList.value.length - 1 && !props.showLastMargin) {
                    currentItem.proxy.marginChild = [];
                }

                if (index == spaceList.value.length - 1 && !props.showLastPadding) {
                    currentItem.proxy.paddingChild = [];
                }
            })
        }

        const padding = computed(() => {
            let params = []
            if (props.mode === 'horizontal' && props.padding.length == 0) {
                params = [0, 20, 0, 0]
            } else if (props.mode === 'horizontal' && props.padding.length) {
                params = props.padding
            }

            if (props.mode === 'vertical' && props.padding.length == 0) {
                params = [0, 0, 20, 0]
            } else if (props.mode === 'vertical' && props.padding.length) {
                params = props.padding
            }
            return params
        })

        const zmzSpaceClass = computed(() => {
            let params = [];
            if (props.mode) {
                params.push(`zmz-space--${props.mode}`)
            }

            if (props.interval) {
                params.push(`zmz-space--interval`)
            }

            if (props.title || slots.title) {
                params.push(`zmz-space--title`)
            }

            return params;
        });

        onMounted(() => {
            updateDom()
        })

        watch(() => padding.value, () => {
            updateDom()
        })

        provide('zmzSpace', {
            spaceList: spaceList,
            updateDom: updateDom
        })

        // 返回实例
        return () => {
            let title = '';
            let content = '';
            if (slots.title) {
                title = h('slot', { name: "title" }, slots.title())
            }

            if (!slots.title && props.title) {
                title = h('div', {
                    class: "zmz-space__title"
                }, props.title)
            }

            if (props.title || slots.title) {
                content = h('div', {
                    class: "zmz-space__content"
                }, slots.default())
            } else {
                let items = slots.default();
                if (items && items.length) {
                    content = items.map((child) => {
                        if (child.children && Array.isArray(child.children)) {
                            return child.children.map((childs) => {
                                let item = null;
                                if (childs.type && childs.type.name == "ZmzSpaceItem") {
                                    item = h(() => childs);
                                } else {
                                    item = h(ZmzSpaceItem, {}, () => childs);
                                }
                                return item
                            })
                        } else {
                            let item = null;
                            if (child.type && child.type.name == "ZmzSpaceItem") {
                                item = h(() => child);
                            } else {
                                item = h(ZmzSpaceItem, {}, () => child);
                            }

                            return item
                        }
                    })
                } else {
                    content = null;
                }
            }

            return h(props.tag, {
                ...attrs,
                class: ['zmz-space', zmzSpaceClass.value],
            }, [
                title,
                content
            ])
        }
    }
};
