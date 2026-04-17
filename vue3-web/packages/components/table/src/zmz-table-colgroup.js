import { h, watch, ref } from 'vue';
export default {
    name: 'ZmzTableColgroup',
    props: {
        /**
         * 数据
         */
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        space: {
            type: Boolean,
            default: false
        },
        scrollBar: {
            type: Object,
            default() {
                return {
                    width: 0,
                    height: 0
                }
            }
        },
    },
    setup(props) {
        const tabelColgroupData = ref([])
        // 监听数据变化
        watch(() => props.data, (val) => {
            tabelColgroupData.value = val
        }, { immediate: true, lazy: true })

        return () => {
            const child = () => {
                let params = [];
                tabelColgroupData.value.forEach((item, index) => {
                    if (item.Instance.props) {
                        params.push(h('col', {
                            name: 'zmzTableColumn__' + index,
                            key: index,
                            width: item.Instance.props.width || item.Instance.props.realWidth
                        }))
                    }
                })
                if (props.scrollBar && props.scrollBar.width && props.space) {
                    params.push(h('col', {
                        name: 'scroll',
                        width: props.scrollBar.width
                    }))
                }

                return params
            }
            return h('colgroup', {}, child());
        }
    }
};