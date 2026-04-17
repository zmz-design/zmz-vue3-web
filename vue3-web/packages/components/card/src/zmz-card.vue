<template>
    <div class="zmz-card" :class="[zmzCardClass]">
        <div class="zmz-card__header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="zmz-card__body">
            <slot></slot>
        </div>
        <div class="zmz-card__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'ZmzCard',
    props: {
        /**
         * 是否显示阴影
         */
        boxShadow: {
            type: String,
            default: 'hover',
            validator(value) {
                return ['always', 'hover', 'never'].includes(value)
            }
        },
        /**
         * 头部边线
         */
        headerBorder: {
            type: Boolean,
            default: true
        },
        /**
         * 底部边线
         */
        footerBorder: {
            type: Boolean,
            default: true
        },
        /**
        * 边线
        */
        border: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const zmzCardClass = computed(() => {
            let params = []
            if (props.boxShadow) {
                params.push(`zmz-card--${props.boxShadow}`);
            }

            if (props.headerBorder) {
                params.push(`zmz-card--header-border`)
            }

            if (props.footerBorder) {
                params.push(`zmz-card--footer-border`)
            }

            if (props.border) {
                params.push(`zmz-card--border`)
            }

            return params;
        });

        return {
            zmzCardClass
        };
    }
};
</script>
