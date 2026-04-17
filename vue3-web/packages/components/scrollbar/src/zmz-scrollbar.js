import { h, onBeforeUnmount, onMounted, ref, computed, nextTick } from 'vue'
import ZmzScrollbarBar from './zmz-scrollbar-bar.js';
export default {
    name: 'ZmzScrollbar',
    props: {
        /**
         * 容器样式
         */
        wrapStyle: Object,
        /**
         * 容器类名
         */
        wrapClass: Array,
        /**
         * 视图样式
         */
        viewStyle: Object,
        /**
         * 视图类名
         */
        viewClass: Array,
        /**
         * bar样式
         */
        barStyle: Object,
        /**
         * bar类名
         */
        barClass: Array,
        /**
         * bar容器
         */
        barWrapStyle: Object,
        // bar容器样式
        barWrapClass: Array,
        /**
         * 自适应
         */
        noResize: Boolean,
        /**
         * 自动宽度
         */
        autoBarWidth: {
            type: Boolean,
            default: false
        },
        /**
         * 垂直
         */
        vertical: {
            type: Boolean,
            default: true
        },
        /**
         * 是否显示滚动条
         */
        showScrollBar: {
            type: Boolean,
            default: true
        },
        /**
         * 原生滚动
         */
        nativeScrollbar: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {
        const zmzScrollbarWrap = ref(null);
        const zmzScrollbarView = ref(null);
        const zmzScrollbar = ref(null);
        const sizeWidth = ref(0);
        const sizeHeight = ref(0);
        const moveX = ref(0);
        const moveY = ref(0);
        const barWidth = ref(17)
        // 纵坐标
        const vertical = ref({
            offset: 'offsetHeight',
            scroll: 'scrollTop',
            scrollSize: 'scrollHeight',
            size: 'height',
            key: 'vertical',
            axis: 'Y',
            client: 'clientY',
            direction: 'top'
        })

        // 横坐标
        const horizontal = ref({
            offset: 'offsetWidth',
            scroll: 'scrollLeft',
            scrollSize: 'scrollWidth',
            size: 'width',
            key: 'horizontal',
            axis: 'X',
            client: 'clientX',
            direction: 'left'
        })

        // 数组转换成对象
        const toObject = (arr) => {
            let res = {}
            for (let i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    extend(res, arr[i])
                }
            }
            return res
        }

        const extend = (to, _from) => {
            for (let key in _from) {
                to[key] = _from[key]
            }
            return to
        }

        // 获取浏览器滚动条宽度
        const scrollBarWidth = computed(() => {
            let scrollBarWidth;
            if (scrollBarWidth !== undefined) return scrollBarWidth
            const outer = document.createElement('div')
            outer.className = 'zmz-scrollbar__wrap'
            outer.style.visibility = 'hidden'
            outer.style.width = '100px'
            outer.style.position = 'absolute'
            outer.style.top = '-9999px'
            document.body.appendChild(outer)
            const widthNoScroll = outer.offsetWidth
            outer.style.overflow = 'scroll'
            const inner = document.createElement('div')
            inner.style.width = '100%'
            outer.appendChild(inner)
            const widthWithScroll = inner.offsetWidth
            outer.parentNode.removeChild(outer)
            scrollBarWidth = widthNoScroll - widthWithScroll
            return scrollBarWidth
        })

        onMounted(() => {
            if (!props.nativeScrollbar) {
                nextTick(() => {
                    update()
                })
                if (!props.noResize) {
                    window.addEventListener('resize', update) // 内容撑开的时候计算动态计算
                }
            }
        })

        onBeforeUnmount(() => {
            if (!props.nativeScrollbar) {
                if (!props.noResize) {
                    window.removeEventListener('resize', update)
                }
            }
        })

        // 计算滚动条
        const update = () => {
            let heightPercentage, widthPercentage;
            if (!zmzScrollbarWrap.value) return
            // 计算thumb的百分比
            heightPercentage = (zmzScrollbarWrap.value.clientHeight * 100 / zmzScrollbarWrap.value.scrollHeight)
            widthPercentage = (zmzScrollbarWrap.value.clientWidth * 100 / zmzScrollbarWrap.value.scrollWidth)
            // 当容器高度小于100时不需要滚动条
            sizeHeight.value = (heightPercentage < 100) ? (heightPercentage + '%') : ''
            sizeWidth.value = (widthPercentage < 100) ? (widthPercentage + '%') : ''
        }

        const handleScroll = () => {
            moveY.value = ((zmzScrollbarWrap.value.scrollTop * 100) / zmzScrollbarWrap.value.clientHeight)
            moveX.value = ((zmzScrollbarWrap.value.scrollLeft * 100) / zmzScrollbarWrap.value.clientWidth)
        }

        // 返回实例
        return () => {
            // 获取浏览器滚动条宽度
            if (props.autoBarWidth) {
                barWidth.value = scrollBarWidth.value
            }
            let style = props.wrapStyle
            // 如果宽度获取成功
            if (barWidth.value) {
                const gutterWith = `-${barWidth.value}px`
                const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`
                // 设置margin隐藏原有滚动条
                if (Array.isArray(props.wrapStyle)) {
                    style = toObject(props.wrapStyle)
                    style.marginRight = style.marginBottom = gutterWith
                } else if (typeof props.wrapStyle === 'string') {
                    style += gutterStyle
                } else {
                    style = gutterStyle
                }
            }

            if (props.nativeScrollbar) {
                style = `margin-bottom: 0; margin-right: 0;`
            }

            // 创建slots视图
            const view = h('div', {
                class: ['zmz-scrollbar__view', props.viewClass],
                style: props.viewStyle,
                ref: zmzScrollbarView
            }, slots.default())

            // 创建容器
            const wrapdiv = h('div', {
                class: [props.wrapClass, 'zmz-scrollbar__wrap', barWidth.value ? '' :
                    'zmz-scrollbar__wrap--hidden-default'
                ],
                style: style,
                ref: zmzScrollbarWrap,
                onScroll: handleScroll
            }, [view])

            let nodes;
            // 如果不需要显示滚动条
            if (!props.nativeScrollbar) {
                nodes = [wrapdiv]
                if (sizeWidth.value) {
                    nodes.push(
                        h(ZmzScrollbarBar, {
                            class: [{
                                'zmz-scrollbar__bar--show': props.showScrollBar
                            }],
                            mode: horizontal.value,
                            move: moveX.value,
                            size: sizeWidth.value,
                            barStyle: props.barStyle,
                            barClass: props.barClass,
                            barWrapStyle: props.barWrapStyle,
                            barWrapClass: props.barWrapClass,
                            wrap: zmzScrollbarWrap
                        })
                    )
                }

                if (sizeHeight.value) {
                    nodes.push(
                        h(ZmzScrollbarBar, {
                            class: [{
                                'zmz-scrollbar__bar--show': props.showScrollBar
                            }],
                            mode: vertical.value,
                            move: moveY.value,
                            size: sizeHeight.value,
                            barStyle: props.barStyle,
                            barClass: props.barClass,
                            barWrapStyle: props.barWrapStyle,
                            barWrapClass: props.barWrapClass,
                            wrap: zmzScrollbarWrap
                        })
                    )
                }
            } else {
                nodes = [
                    h('div', {
                        class: [props.wrapClass, 'zmz-scrollbar__wrap', { 'zmz-scrollbar__wrap--native': props.nativeScrollbar }],
                        style: style,
                        ref: zmzScrollbarWrap
                    }, [view])
                ]
            }

            return h('div', {
                class: ['zmz-scrollbar'],
                ref: zmzScrollbar
            }, nodes)
        }
    }
}
