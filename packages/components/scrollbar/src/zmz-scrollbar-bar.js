import { h, onBeforeUnmount, onMounted, ref, nextTick } from 'vue'
export default {
    name: 'ZmzScrollbarBar',
    props: {
        mode: Object,
        size: String,
        move: Number,
        wrap: Object,
        barStyle: Object,
        barClass: Array,
        barWrapStyle: Object,
        barWrapClass: Array,
    },
    setup(props) {
        const zmzScrollbarThumb = ref(null);
        const zmzScrollbarBar = ref(null)
        const sizeWidth = ref(0);
        const sizeHeight = ref(0);
        // 可以移动标识
        const cursorDown = ref(false)

        onMounted(() => {
            if (props.normal) return
            nextTick(() => {
                update()
            })
            if (!props.noResize) {
                window.addEventListener('resize', update) // 内容撑开的时候计算动态计算
            }
        })

        onBeforeUnmount(() => {
            if (props.normal) return
            if (!props.noResize) {
                window.removeEventListener('resize', update)
            }
            window.removeEventListener('mouseup', mouseUpThumb)
        })

        // 计算滚动条
        const update = () => {
            let heightPercentage, widthPercentage
            if (!props.wrap.value) return
            // 计算thumb的百分比
            heightPercentage = (props.wrap.value.clientHeight * 100 / props.wrap.value.scrollHeight)
            widthPercentage = (props.wrap.value.clientWidth * 100 / props.wrap.value.scrollWidth)
            // 当容器高度小于100时不需要滚动条
            sizeHeight.value = (heightPercentage < 100) ? (heightPercentage + '%') : ''
            sizeWidth.value = (widthPercentage < 100) ? (widthPercentage + '%') : ''
        }

        // 点击拖拽
        const clickThumbDrag = (e) => {
            // 防止右键点击事件
            if (e.ctrlKey || e.button === 2) {
                return
            }
            // 开始拖拽事件
            mouseDownThumb(e)
            props.mode[props.mode.axis] = (e.currentTarget[props.mode.offset] - (e[props.mode.client] - e.currentTarget
                .getBoundingClientRect()[props.mode.direction]))
        }

        // 点击跳转
        const clickThumbJump = (e) => {
            const offset = Math.abs(e.target.getBoundingClientRect()[props.mode.direction] - e[props.mode.client])
            // 获取滚动的一半距离
            const thumbHalf = (zmzScrollbarThumb.value[props.mode.offset] / 2)
            // 计算需要跳转的位置百分比
            const thumbPositionPercentage = ((offset - thumbHalf) * 100 / zmzScrollbarBar.value[props.mode.offset])
            // 设置父级的滚动top
            props.wrap.value[props.mode.scroll] = (thumbPositionPercentage * props.wrap.value[props.mode
                .scrollSize] / 100)
        }

        // 按下拖拽事件
        const mouseDownThumb = (e) => {
            e.stopImmediatePropagation()
            cursorDown.value = true
            window.addEventListener('mousemove', mouseMoveThumb)
            window.addEventListener('mouseup', mouseUpThumb)
            document.onselectstart = () => false
        }

        // 鼠标拖拽模拟
        const mouseMoveThumb = (e) => {
            if (cursorDown.value === false) return
            const prevPage = props.mode[props.mode.axis]
            if (!prevPage) return
            const offset = ((zmzScrollbarBar.value.getBoundingClientRect()[props.mode.direction] - e[props.mode
                .client]) * -
                1)
            const thumbClickPosition = (zmzScrollbarThumb.value[props.mode.offset] - prevPage)
            const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / zmzScrollbarBar.value[props.mode
                .offset])

            props.wrap.value[props.mode.scroll] = (thumbPositionPercentage * props.wrap.value[props.mode
                .scrollSize] / 100)
        }

        // 鼠标抬起事件
        const mouseUpThumb = () => {
            cursorDown.value = false
            props.mode[props.mode.axis] = 0
            // 移除拖拽事件
            window.removeEventListener('mousemove', mouseMoveThumb)
            window.removeEventListener('mouseup', mouseUpThumb)
            document.onselectstart = null
        }


        // 滚动条样式
        const renderThumbStyle = () => {
            const style = {}
            const translate = `translate${props.mode.axis}(${props.move}%)`
            style[props.mode.size] = props.size
            style.transform = translate
            style.msTransform = translate
            style.webkitTransform = translate
            return style
        }

        // 返回实例
        return () => {
            let barStyle = Object.assign({}, renderThumbStyle(), props.barStyle)
            return h('div', {
                class: ['zmz-scrollbar__bar', 'zmz-scrollbar__bar--' + props.mode.key, props.barWrapClass],
                ref: zmzScrollbarBar,
                onMousedown: clickThumbJump,
                style: props.barWrapStyle
            }, [
                h('div', {
                    ref: zmzScrollbarThumb,
                    class: ['zmz-scrollbar__bar__thumb', props.barClass],
                    onMousedown: clickThumbDrag,
                    style: barStyle
                })
            ])
        }
    }
}
