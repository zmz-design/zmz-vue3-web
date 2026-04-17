import {
    h,
    computed,
    inject,
    provide,
    ref,
    watch
} from 'vue'
export default {
    name: 'ZmzRow',
    componentName: 'ZmzRow',
    props: {
        /**
         * 生成标签
         */
        tag: {
            type: String,
            default: 'div'
        },
        /**
         * 间距
         */
        gutter: Number,
        /**
         * 盒子布局
         */
        flex: {
            type: Boolean,
            default: false
        },
        /**
         * 盒子换行
         */
        wrap: {
            type: Boolean,
            default: true
        },
        /**
         * 居中
         */
        justify: {
            type: String,
            default: '',
            validator(value) {
                return ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly', ''].includes(value)
            }
        },
        /**
         * 垂直
         */
        align: {
            type: String,
            default: '',
            validator(value) {
                return ['top', 'center', 'bottom', ''].includes(value)
            }
        }
    },
    setup(props, {
        slots
    }) {
        const gutterRef = ref(props.gutter)
        const zmzRowStyle = computed(() => {
            let params = {};
            if (gutterRef.value) {
                params.marginLeft = `-${gutterRef.value / 2}px`;
                params.marginRight = params.marginLeft;
            }
            return params;
        })

        const zmzRowClass = computed(() => {
            let params = []

            if (props.flex) {
                params.push('zmz-row--flex')

                if (props.justify) {
                    params.push(`zmz-row--flex-justify-${props.justify}`)
                }

                if (props.align) {
                    params.push(`zmz-row--flex-align-${props.align}`)
                }

                if (props.wrap) {
                    params.push('zmz-row--flex-wrap')
                }
            }

            return params
        })

        watch(() => props.gutter, (val) => {
            gutterRef.value = val
        })

        provide('gutter', gutterRef)

        return () => h(props.tag, {
            class: [
                'zmz-row',
                zmzRowClass.value
            ],
            style: zmzRowStyle.value
        }, slots.default && slots.default());
    }
};
