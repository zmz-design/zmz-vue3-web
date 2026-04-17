<script>
import { h } from 'vue';
export default {
    name: 'ZmzContainer',
    props: {
        /**
         * 自定义元素标签
         */
        tag: {
            type: String,
            default: 'div'
        }
    },
    setup(props, { slots }) {
        return () => {
            return h(props.tag, {
                class: [props.tag !== 'div' ? `zmz-${props.tag}` : 'zmz-container']
            }, slots.default && slots.default())
        }
    }
};
</script>
