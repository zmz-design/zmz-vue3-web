<template>
    <div class="zmz-divider" :class="[zmzDividerClass]" :style="[zmzDividerStyle]">
        <div class="zmz-divider__text" :style="[zmzDividerTextStyle]" v-if="$slots.default">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'ZmzDivider',
    props: {
        /**
         * 模式
         */
        mode: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['vertical', 'horizontal'].includes(value)
            }
        },
        /**
         * 位置
         */
        textAlign: {
            type: String,
            default: 'center',
            validator(value) {
                return ['center', 'left', 'right'].includes(value)
            }
        },
        /**
         * 是否虚线
         */
        dashed: {
            type: Boolean,
            default: false
        },
        /**
         * 文字大小
         */
        textSize: {
            type: String,
            default: ''
        },
        /**
         * 字体颜色
         */
        textColor: {
            type: String,
            default: ''
        },
        /**
         * 线宽
         */
        lineWidth: {
            type: String,
            default: ''
        },
        /**
         * 线颜色
         */
        lineColor: {
            type: String,
            default: ''
        },
        /**
         * 文字加粗
         */
        textWeight: {
            type: String,
            default: ''
        },
        /**
         * 线边距
         */
        lineMargin: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        // 公共类名
        const zmzDividerClass = computed(() => {
            let params = []
            if (props.mode) {
                params.push(`zmz-divider--${props.mode}`);
            }

            if (props.textAlign) {
                params.push(`zmz-divider--${props.textAlign}`);
            }

            if (props.dashed) {
                params.push(`zmz-divider--dashed`);

            }

            return params;
        });

        /**
         * 公共样式
         */
        const zmzDividerStyle = computed(() => {
            let params = {}

            if (props.lineWidth && props.mode == 'horizontal') {
                params['border-top-width'] = props.lineWidth
            }

            if (props.lineWidth && props.mode == 'vertical') {
                params['border-right-width'] = props.lineWidth
            }

            if (props.lineColor && props.mode == 'horizontal') {
                params['border-top-color'] = props.lineColor
            }

            if (props.lineColor && props.mode == 'vertical') {
                params['border-right-color'] = props.lineColor
            }

            if (props.lineMargin && props.mode == 'horizontal') {
                params['margin'] = props.lineMargin + ' 0'
            }

            if (props.lineMargin && props.mode == 'vertical') {
                params['margin'] = '0 ' + props.lineMargin
            }
            return params;
        });

        /**
         * 文字样式
         */
        const zmzDividerTextStyle = computed(() => {
            let params = {}

            if (props.textSize) {
                params['font-size'] = props.textSize
            }

            if (props.textColor) {
                params['color'] = props.textColor
            }

            if (props.textWeight) {
                params['font-weight'] = props.textWeight
            }

            return params;
        })

        return {
            zmzDividerClass,
            zmzDividerTextStyle,
            zmzDividerStyle
        };
    }
};
</script>
