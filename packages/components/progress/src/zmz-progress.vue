<template>
    <div class="zmz-progress" :style="[styleWidth, styleHeight]" :class="[typeClass, sizeClass]">
        <div class="zmz-progress__line" :style="[styleWidth, styleHeight, lineBorderStyle, lineBgColorStyle]">
            <div class="zmz-progress__bar"
                :style="[{ width: numlen + '%' }, styleHeight, lineBorderStyle, lineColorStyle]"></div>
        </div>
        <div class="zmz-progress__text" :style="textColorStyle">{{ numlen }}%</div>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'ZmzProgress',
    props: {
        /**
         * 进度值
         */
        num: {
            type: Number,
            default: 0
        },
        /**
         * 类型
         */
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['success', 'warning', 'error', 'primary', 'info', 'default'].includes(value)
            }
        },
        /**
         * 大小
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['large', 'medium', 'default', 'small', 'mini'].includes(value)
            }
        },
        /**
         * 线宽
         */
        width: String,
        /**
         * 线高
         */
        height: String,
        /**
         * 线圆角
         */
        radius: String,
        /**
         * 线颜色
         */
        color: String,
        /**
         * 背景色
         */
        backgroundColor: String,
        /**
         * 文字颜色
         */
        textColor: String
    },
    emits: ['on-change'],
    setup(props, { emit }) {
        // 类型
        const typeClass = computed(() => {
            let params = []
            if (props.type) {
                params.push(`zmz-progress--${props.type}`);
            }
            return params;
        });
        // 大小
        const sizeClass = computed(() => {
            let params = []
            if (props.size) {
                params.push(`zmz-progress--size-${props.size}`);
            }
            return params;
        });

        // 长度
        const numlen = computed(() => {
            var num = props.num;
            if (num > 100) {
                num = 100;
            } else if (num < 0) {
                num = 0;
            }
            emit('on-change', num);
            return num;
        });

        // 样式宽度
        const styleWidth = computed(() => {
            let params = {}

            if (props.width) {
                params['width'] = props.width
            }

            return params
        });

        // 样式高度
        const styleHeight = computed(() => {
            let params = {}

            if (props.height) {
                params['height'] = props.height
            }

            return params
        });

        // 线样式
        const lineBorderStyle = computed(() => {
            let params = {}

            if (props.radius) {
                params['borderRadius'] = props.radius
            }

            return params
        });

        // 背景色
        const lineBgColorStyle = computed(() => {
            let params = {}

            if (props.backgroundColor) {
                params['background'] = props.backgroundColor
            }

            return params
        });

        // 颜色
        const lineColorStyle = computed(() => {
            let params = {}

            if (props.color) {
                params['background'] = props.color
            }

            return params
        });

        // 文字颜色
        const textColorStyle = computed(() => {
            let params = {}

            if (props.textColor) {
                params['color'] = props.textColor
            }

            return params
        });

        return {
            numlen,
            typeClass,
            sizeClass,
            styleWidth,
            styleHeight,
            lineBorderStyle,
            textColorStyle,
            lineColorStyle,
            lineBgColorStyle
        };
    }
};
</script>
