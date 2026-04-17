import { h, computed, inject } from 'vue';
export default {
    name: 'ZmzDescriptionsCell',
    props: {
        /**
         * 数据
         */
        cell: {
            type: Object,
            default: () => { }
        },
        /**
         * 类型
         */
        type: {
            type: String,
            default: ''
        },
        /**
         * 标签
         */
        tag: {
            type: String,
            default: 'td'
        }
    },
    setup(props) {

        const zmzDescriptions = inject('zmzDescriptions', {})

        const item = computed(() => {
            return {
                children: props.cell.children,
                label: props.cell.props.label,
                span: props.cell.props.span ? props.cell.props.span : 1,
                labelStyle: props.cell.props['label-style'] ? props.cell.props['label-style'] : zmzDescriptions.labelStyle,
                contentStyle: props.cell.props['content-style'] ? props.cell.props['content-style'] : zmzDescriptions.contentStyle,
                labelClass: props.cell.props['label-class'] ? props.cell.props['label-class'] : zmzDescriptions.labelClass,
                contentClass: props.cell.props['content-class'] ? props.cell.props['content-class'] : zmzDescriptions.contentClass
            };
        })

        return () => {
            let defaultSlot = ''
            if (item.value.children && item.value.children.default) {
                defaultSlot = item.value.children.default()
            }

            let labelText = ''
            if (item.value.children && item.value.children.label) {
                labelText = item.value.children.label()
            } else {
                labelText = item.value.label
            }

            let labelMargin = ''
            if (!labelText) {
                labelMargin = {
                    'margin-right': 0
                }
            }
            switch (props.type) {
                case 'label':
                    return h(props.tag, {
                        class: ['zmz-descriptions__label', item.value.labelClass],
                        colSpan: 1,
                        style: {
                            ...item.value.labelStyle,
                            ...labelMargin
                        }
                    }, labelText)
                case 'content':
                    return h(props.tag, {
                        class: ['zmz-descriptions__content', item.value.contentClass],
                        colSpan: item.value.span * 2 - 1,
                        style: {
                            ...item.value.contentStyle
                        }
                    }, defaultSlot)
                default:
                    return h(props.tag, {
                        class: ['zmz-descriptions__td'],
                        colSpan: item.value.span
                    }, [
                        h('div', {
                            class: ['zmz-descriptions__item']
                        }, [
                            [
                                h('div', {
                                    class: ['zmz-descriptions__label', item.value.labelClass],
                                    style: {
                                        ...item.value.labelStyle,
                                        ...labelMargin
                                    }
                                }, labelText),
                                h('div', {
                                    class: ['zmz-descriptions__content', item.value.contentClass],
                                    style: {
                                        ...item.value.contentStyle
                                    }
                                }, defaultSlot)
                            ]
                        ])
                    ])
            }
        }
    }
};
