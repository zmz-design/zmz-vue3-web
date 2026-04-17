import { h } from 'vue';
export default {
    name: 'ZmzTreeLabel',
    props: {
        node: Object,
        props: Object,
        renderContent: Function
    },
    setup(props, options) {
        return () => {
            return (props.renderContent(h, { ...options, node: props.node }))
        }
    }
};