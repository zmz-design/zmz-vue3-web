import { h, computed, inject } from 'vue'
export default {
    name: 'ZmzCol',
    props: {
        /**
         * 栅格占比
         */
        span: {
            type: Number,
            default: 24
        },
        /**
         * 生成标签
         */
        tag: {
            type: String,
            default: 'div'
        },
        /**
         * 偏移量
         */
        offset: Number,
        /**
         * 向前
         */
        pull: Number,
        /**
         * 向后
         */
        push: Number,
        /**
         * 以下栅格阶段
         */
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
    },
    setup(props, {
        slots
    }) {
        const gutterInject = inject('gutter', 0)
        const zmzColStyle = computed(() => {
            let params = {};
            if (gutterInject.value) {
                let gutterValue = gutterInject.value
                params.paddingLeft = gutterValue / 2 + 'px';
                params.paddingRight = params.paddingLeft;
            }
            return params
        })

        const zmzColClass = computed(() => {
            let params = [];
            ['span', 'offset', 'pull', 'push'].forEach(prop => {
                if (props[prop]) {
                    params.push(
                        prop !== 'span' ?
                            `zmz-col-${prop}-${props[prop]}` :
                            `zmz-col-${props[prop]}`
                    );
                }
            });

            ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
                if (typeof props[size] === 'number') {
                    params.push(`zmz-col-${size}-${props[size]}`);
                } else if (typeof props[size] === 'object') {
                    let props = props[size];
                    Object.keys(props).forEach(prop => {
                        params.push(
                            prop !== 'span' ?
                                `zmz-col-${size}-${prop}-${props[prop]}` :
                                `zmz-col-${size}-${props[prop]}`
                        );
                    });
                }
            });
            return params
        })

        return () => h(props.tag, {
            class: ['zmz-col', zmzColClass.value],
            style: zmzColStyle.value
        }, slots.default && slots.default())
    }
};
