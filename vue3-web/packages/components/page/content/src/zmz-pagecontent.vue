<template>
    <div class="zmz-pagecontent" :style="[zmzPagecontentStyle]">
        <div class="zmz-pagecontent__header">
            <div class="zmz-pagecontent__header__title" v-if="title || $slots.title" :style="[titleStyle]">
                <slot name="title">{{ title }}</slot>
            </div>
            <div class="zmz-pagecontent__header__subtitle" :style="[subtitleStyle]" v-if="subtitle || $slots.subtitle">
                <slot name="subtitle">{{ subtitle }}</slot>
            </div>
        </div>
        <div class="zmz-pagecontent__info" :style="[infoStyle]" v-if="info || $slots.info">
            <slot name="info">
                <div class="zmz-pagecontent__info__item" v-for="(item, index) in info" :key="index">
                    <div class="zmz-pagecontent__info__item__label">{{ item.label }}</div>
                    <div class="zmz-pagecontent__info__item__content">{{ item.content }}</div>
                </div>
            </slot>
        </div>
        <div class="zmz-pagecontent__content" :style="[zmzPagecontentContentStyle]" v-if="$slots.default || content">
            <slot>
                <div class="zmz-pagecontent__content__wrap" v-if="html" v-html="html"></div>
                <div class="zmz-pagecontent__content__wrap" v-else v-text="content"></div>
            </slot>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'ZmzPagecontent',
    props: {
        /**
         * 标题
         */
        title: String,
        /**
         * 二级标题
         */
        subtitle: String,
        /**
         * 背景色
         */
        background: String,
        /**
         * 标题样式
         */
        titleStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 二级样式
         */
        subtitleStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 消息样式
         */
        infoStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 内容样式
         */
        contentStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 消息
         */
        info: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * html
         */
        html: {
            type: Boolean,
            default: false
        },
        /**
         * text
         */
        content: {
            type: String,
            default: ''
        },
        /**
         * 线
         */
        border: {
            type: String,
            default: ''
        },
    },
    setup(props) {
        // 公共样式
        const zmzPagecontentStyle = computed(() => {
            let params = {}
            if (props.background) {
                params['background'] = props.background;
            }
            return Object.assign(params, props.contentStyle);
        });

        // 内容样式
        const zmzPagecontentContentStyle = computed(() => {
            let params = {}
            if (props.background) {
                params['background'] = props.background;
                params['border-top'] = '1px solid' + props.background;
            }

            if (props.border) {
                params['border-top'] = '1px solid' + props.border;
            }

            return params;
        });

        return {
            zmzPagecontentStyle,
            zmzPagecontentContentStyle
        };
    }
};
</script>
