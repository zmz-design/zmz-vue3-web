<template>
    <div class="zmz-loupe" ref="zmzLoupe" :style="[zmzLoupeStyle]" @mousemove="handleMouseMove"
        @mouseover="isMagnifier = true" @mouseout="isMagnifier = false">
        <div class="zmz-loupe__image">
            <img :src="src" class="zmz-loupe__image__inner" />
        </div>
        <div class="zmz-loupe__magnifier" ref="zmzLoupeMagnifier" :style="[zmzLoupeMaskStyle]" v-show="isMagnifier"><img
                :style="[imgStyle]" class="zmz-loupe__magnifier__image" :src="src" ref="zmzLoupeMagnifierImg" /></div>
    </div>
</template>

<script>
import { computed, ref, nextTick, defineComponent } from 'vue';
export default defineComponent({
    name: 'ZmzLoupe',
    props: {
        /**
         * 图片地址
         */
        src: {
            type: String,
            default: ''
        },
        /**
         * 宽度
         */
        width: {
            type: Number,
            default: 400
        },
        /**
         * 高度
         */
        height: {
            type: Number,
            default: 400
        },
        /**
         * 放大倍数
         */
        magnifierMultiple: {
            type: Number,
            default: 2
        },
        /**
         * 放大镜背景色
         */
        magnifierBackground: String,
        /**
         * 放大镜阴影
         */
        magnifierShadow: String,
        /**
        * 放大镜宽度
        */
        magnifierWidth: String,
        /**
        * 放大镜高度
        */
        magnifierHeight: String
    },
    data() {
        return {
            currentIndex: 0
        };
    },
    emits: ['on-change'],
    setup(props, { emit }) {
        const zmzLoupeMagnifier = ref(null);
        const zmzLoupeMagnifierImg = ref(null)
        const zmzLoupe = ref(null)
        const isMagnifier = ref(false)
        // 图片样式
        const imgStyle = computed(() => {
            let params = {}
            params['width'] = props.width * props.magnifierMultiple + 'px'
            params['height'] = props.height * props.magnifierMultiple + 'px'
            return params
        })

        const zmzLoupeStyle = computed(() => {
            let params = {}
            params['width'] = props.width + 'px'
            params['height'] = props.height + 'px'
            return params
        })

        // 鼠标移动
        const handleMouseMove = e => {
            nextTick(() => {
                let loupe = zmzLoupe.value.getBoundingClientRect()
                let left = e.pageX - loupe.left - zmzLoupeMagnifier.value.offsetWidth / 2
                let top = e.pageY - loupe.top - zmzLoupeMagnifier.value.offsetHeight / 2
                // //约束范围
                if (left <= 0 - zmzLoupeMagnifier.value.offsetWidth / 2) {
                    left = 0 - zmzLoupeMagnifier.value.offsetWidth / 2;
                }
                if (left >= zmzLoupe.value.offsetWidth - zmzLoupeMagnifier.value.offsetWidth / 2) {
                    left = zmzLoupe.value.offsetWidth - zmzLoupeMagnifier.value.offsetWidth / 2;
                }
                if (top <= 0 - zmzLoupeMagnifier.value.offsetHeight / 2) {
                    top = 0 - zmzLoupeMagnifier.value.offsetHeight / 2;
                }
                if (top >= zmzLoupe.value.offsetHeight - zmzLoupeMagnifier.value.offsetHeight / 2) {
                    top = zmzLoupe.value.offsetHeight - zmzLoupeMagnifier.value.offsetHeight / 2;
                }

                zmzLoupeMagnifier.value.style.left = left + 'px';
                zmzLoupeMagnifier.value.style.top = top + 'px';
                zmzLoupeMagnifierImg.value.style.left = (-props.magnifierMultiple) * left - zmzLoupeMagnifier.value.offsetWidth * (props.magnifierMultiple - 1) / 2 + 'px';
                zmzLoupeMagnifierImg.value.style.top = (-props.magnifierMultiple) * top - zmzLoupeMagnifier.value.offsetHeight * (props.magnifierMultiple - 1) / 2 + 'px';
                emit('on-change', { left, top })
            })
        };

        // 遮罩样式
        const zmzLoupeMaskStyle = computed(() => {
            let params = {}
            if (props.magnifierBackground) {
                params['background'] = props.magnifierBackground
            }

            if (props.magnifierShadow) {
                params['box-shadow'] = props.magnifierShadow
            }

            if (props.magnifierHeight) {
                params['height'] = props.magnifierHeight
            }

            if (props.magnifierWidth) {
                params['width'] = props.magnifierWidth

            }
            return params
        })

        return {
            handleMouseMove,
            zmzLoupeMagnifier,
            zmzLoupeMagnifierImg,
            zmzLoupe,
            imgStyle,
            zmzLoupeMaskStyle,
            isMagnifier,
            zmzLoupeStyle
        };
    }
});
</script>