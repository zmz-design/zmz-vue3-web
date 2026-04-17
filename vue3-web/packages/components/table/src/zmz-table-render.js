import { h } from 'vue';
export default {
    name: 'ZmzTableRender',
    props: {
        /**
         * 数据对象
         */
        item: {
            type: Object,
            default() {
                return {
                    name: ''
                }
            }
        },
        /**
         * 插槽对象
         */
        itemColumn: Object,
        /**
         * 下标
         */
        index: Number
    },
    setup(props) {
        let children = null;

        if (props.itemColumn.slots.default && props.item) {
            children = props.itemColumn.slots.default({
                row: { ...props.item },
                rowIndex: props.index
            })
        } else {
            children = props.item[props.itemColumn.props.prop]
        }

        return () => {
            return h('div', { class: ['zmz-table__cell'] }, children)
        }
    }

};
