<template>
    <div class="zmz-graphic__image" :style="[zmzGraphicImageStyle]">
        <slot name="image" class="zmz-graphic__image__img"><img :src="src" class="zmz-graphic__image__img" /></slot>
    </div>
</template>
<script>
import { computed } from 'vue';
import { unitDefaultCompletion } from '../../../utils/unit.js';
export default {
    name: 'ZmzGraphicImage',
    props: {
        /**
         * 宽度
         */
        width: {
            type: [String, Number],
            default: ''
        },
        /**
         * 高度
         */
        height: {
            type: [String, Number],
            default: ''
        },
        /**
         * 地址
         */
        src: {
            type: String,
            default: ''
        },
        /**
         * 间距
         */
        spacing: {
            type: [String, Number],
            default: 20
        },
        /**
         * 圆角
         */
        radius: {
            type: [String, Number],
            default: '10'
        }
    },
    setup(props) {
        // 公共样式
        const zmzGraphicImageStyle = computed(() => {
            let params = {}

            if (props.width) {
                params['width'] = unitDefaultCompletion(props.width)
            }

            if (props.height) {
                params['height'] = unitDefaultCompletion(props.height)
            }

            if (props.spacing) {
                params['margin-right'] = unitDefaultCompletion(props.spacing)
            }

            if (props.radius) {
                params['border-radius'] = unitDefaultCompletion(props.radius)
            }

            return params
        })

        return {
            zmzGraphicImageStyle
        };
    }
};
</script>
