<template>
    <div class="zmz-scroll" ref="zmzScroll" :style="[zmzScrollStyle]" :class="[zmzScrollClass]">
        <slot></slot>
    </div>
</template>
<script>
import { computed, ref, onMounted } from 'vue';
export default {
    name: 'ZmzScroll',
    props: {
        /**
         * 模式
         */
        mode: {
            type: String,
            default: 'vertical',
            validator(value) {
                return ['horizontal', 'vertical'].includes(value)
            }
        },
        /**
         * 高度
         */
        height: {
            type: String,
            default: '200px'
        },
        /**
         * 宽度
         */
        width: {
            type: String,
            default: '100%'
        },
    },
    emits: ['on-scroll-lowerright', 'on-scroll-upperleft', 'on-scroll'],
    setup(props, { emit }) {
        const zmzScroll = ref(null);

        onMounted(() => {
            zmzScroll.value.addEventListener('scroll', (e) => {
                var scrollTopLeft = 0
                var clientHeightWidth = 0
                var scrollBoxHeightWidth = 0

                if (props.mode == 'y') {
                    scrollTopLeft = zmzScroll.value.scrollTop;
                    clientHeightWidth = zmzScroll.value.clientHeight;
                    scrollBoxHeightWidth = zmzScroll.value.scrollHeight;
                } else {
                    scrollTopLeft = zmzScroll.value.scrollLeft;
                    clientHeightWidth = zmzScroll.value.clientWidth;
                    scrollBoxHeightWidth = zmzScroll.value.scrollWidth;
                }

                if (scrollTopLeft + clientHeightWidth == scrollBoxHeightWidth) {
                    emit('on-scroll-lowerright', scrollTopLeft, e)
                } else {
                    emit('on-scroll', scrollTopLeft, e)
                }

                if (scrollTopLeft == 0) {
                    emit('on-scroll-upperleft', scrollTopLeft, e)
                }
            })
        })

        // 公共类名
        const zmzScrollClass = computed(() => {
            let params = []
            if (props.mode) {
                params.push(`zmz-scroll--${props.mode}`)
            }
            return params;
        })

        // 公共样式
        const zmzScrollStyle = computed(() => {
            let params = {}

            if (props.height) {
                params['height'] = props.height
            }

            if (props.width) {
                params['width'] = props.width
            }

            return params
        })

        return {
            zmzScroll,
            zmzScrollStyle,
            zmzScrollClass
        };
    }
};
</script>