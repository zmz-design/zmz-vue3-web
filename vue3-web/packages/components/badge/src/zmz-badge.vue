<template>
    <div class="zmz-badge" :class="[zmzBadgeClass]">
        <slot></slot>
        <template v-if="show">
            <div class="zmz-badge__dot" :class="[zmzBadgeDotClass]" v-if="dot" :style="[zmzBadgeDotStyle]"></div>
            <div class="zmz-badge__num" :class="[zmzBadgeDotClass]" v-else>
                <slot name="num">{{ numOrMax }}</slot>
            </div>
        </template>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'ZmzBadge',
    props: {
        /**
         * 主题
         */
        type: {
            type: String,
            default: 'primary',
            validator(value) {
                return ['success', 'warning', 'error', 'primary', 'default', 'info'].includes(value)
            }
        },
        /**
         * 最大值
         */
        max: Number,
        /**
         * 最小值
         */
        num: {
            type: Number,
            default: 0
        },
        /**
         * 是否点
         */
        dot: {
            type: Boolean,
            default: false
        },
        /**
         * 点大小
         */
        dotSize: {
            type: Number,
            default: 0
        },
        /**
         * 是否显示
         */
        show: {
            type: Boolean,
            default: true
        },
        /**
         * 是否固定
         */
        fixed: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {

        // 主题
        const zmzBadgeClass = computed(() => {
            let params = []
            if (props.fixed) {
                params.push('zmz-badge--fixed')
            }

            return params;
        });
        // 主题
        const zmzBadgeDotClass = computed(() => {
            let params = []
            if (props.type) {
                params.push('zmz-badge__num--' + props.type)
            }
            return params;
        });

        // 数值
        const numOrMax = computed(() => {
            let num = 0;
            if (props.max) {
                if (props.num < props.max) {
                    num = props.num;
                } else {
                    num = props.max + '+';
                }
            } else {
                num = props.num;
            }
            return num;
        });

        // 点样式
        const zmzBadgeDotStyle = computed(() => {
            let params = {}
            if (props.dotSize) {
                params['width'] = props.dotSize + 'px'
                params['height'] = props.dotSize + 'px'
                params['right'] = props.dotSize / 2 + 'px'
            }
            return params;
        });

        return {
            zmzBadgeClass,
            zmzBadgeDotClass,
            numOrMax,
            zmzBadgeDotStyle
        };
    }
};
</script>
