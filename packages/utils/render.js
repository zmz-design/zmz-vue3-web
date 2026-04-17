import { h } from 'vue';
export default {
    name: "ZmzRender",
    props: {
        render: {
            type: Function,
            default() {
                return 'Default function'
            }
        }
    },
    render() {
        return this.render(h);
    },
};