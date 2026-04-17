<template>
    <div class="zmz-graphic__text" :style="[zmzGraphicTextStyle]">
        <div class="zmz-graphic__text__wrap">
            <div class="zmz-graphic__text__wrap__title" v-if="title || $slots.title">
                <slot name="title">{{ title }}</slot>
            </div>
            <div class="zmz-graphic__text__wrap__content" v-if="content || $slots.content">
                <slot name="content">{{ content }}</slot>
            </div>
        </div>
        <div class="zmz-graphic__text__other" v-if="$slots.other || $slots.default">
            <template v-if="$slots.default">
                <slot></slot>
            </template>
            <template v-if="$slots.other">
                <slot name="other"></slot>
            </template>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'ZmzGraphicText',
    props: {
        /**
         * 标题
         */
        title: String,
        /**
         * 内容
         */
        content: String,
        /**
         * 对齐方式
         */
        justifyContent: {
            type: String,
            default: 'space-around'
        },
        /**
         * 间距
         */
        spacing: {
            type: String,
            default: '5px 0 5px 0'
        }
    },
    setup(props) {
        // 公共样式
        const zmzGraphicTextStyle = computed(() => {
            let params = {}
            if (props.justifyContent) {
                params['justify-content'] = props.justifyContent
            }

            if (props.spacing) {
                params['padding'] = props.spacing
            }
            return params;
        });

        return {
            zmzGraphicTextStyle
        };
    }
};
</script>
