<script>
import { computed, h } from 'vue';
export default {
    name: 'ZmzCell',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * 描述
         */
        describe: {
            type: String,
            default: ''
        },
        /**
         * 打开方式
         */
        target: {
            type: String,
            default: ''
        },
        /**
         * 原生跳转
         */
        href: {
            type: String,
            default: ''
        },
        /**
         * 右边icon
         */
        iconRight: {
            type: String,
            default: ''
        },
        /**
         * 左边icon
         */
        iconLeft: {
            type: String,
            default: ''
        },
        /**
         * 图片左
         */
        imgLeft: {
            type: String,
            default: ''
        },
        /**
         * 图片右
         */
        imgRight: {
            type: String,
            default: ''
        },
        /**
         * 是否链接
         */
        link: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {

        const zmzCellClass = computed(() => {
            let params = []
            if (props.describe) {
                params.push('zmz-cell--describe')
            }
            return params
        })

        return () => {
            let tagType = 'div'
            let tagProps = {}
            if (props.link) {
                tagType = 'a'
                tagProps = {
                    href: props.href,
                    target: props.target
                }
            }

            let cellIconDom = ''
            let cellLeftDom = ''
            let cellRightDom = ''

            if (props.iconLeft || props.imgLeft) {
                let slot = ''
                if (props.iconLeft) {
                    slot = h('i', {
                        class: ['zmz-cell__icon__i',props.iconLeft]
                    })
                }

                if (props.imgLeft) {
                    slot = h('img', {
                        src: ['zmz-cell__icon__img', props.imgLeft]
                    })
                }

                cellIconDom = h('div', {
                    class: ['zmz-cell__icon']
                }, slot)
            }

            if (props.title) {
                let solt = ''
                if (props.describe) {
                    solt = h('p', {
                        class: ['zmz-cell__left__describe']
                    }, props.describe)
                }
                cellLeftDom = h('div', {
                    class: ['zmz-cell__left']
                }, [h('span', {
                    class: ['zmz-cell__left__title']
                }, props.title), solt])
            }


            if (props.iconRight || props.imgRight) {
                let slot = ''
                if (props.iconRight) {
                    slot = h('i', {
                        class: ['zmz-cell__right__i', props.iconRight]
                    })
                }

                if (props.imgRight) {
                    slot = h('img', {
                        src: [props.imgRight],
                        class: ['zmz-cell__right__img']
                    })
                }

                cellRightDom = h('div', {
                    class: ['zmz-cell__right']
                }, slot)
            }

            return h('div', {
                class: ['zmz-cell', zmzCellClass.value]
            }, h(tagType, { class: ['zmz-cell__wrap'], ...tagProps }, [
                cellIconDom,
                cellLeftDom,
                cellRightDom
            ]))
        }
    }
};
</script>
