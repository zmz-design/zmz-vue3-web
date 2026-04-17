<template>
    <div class="zmz-empty">
        <div class="zmz-empty__icon" v-if="$slots.icon || icon">
            <slot name="icon">
                <i class="zmz-empty__icon__inner" :class="[icon]" :style="[iconStyle]" v-if="!isImage"></i>
                <img class="zmz-empty__icon__image" v-else :src="icon" :style="[imageStyle]" alt="Image or Icon" />
            </slot>
        </div>
        <div class="zmz-empty__title" v-if="$slots.title || title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="zmz-empty__describe" v-if="$slots.describe || describe">
            <slot name="describe">{{ describe }}</slot>
        </div>
        <div class="zmz-empty__custom" v-if="$slots.default">
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'ZmzEmpty',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            default: '暂无数据'
        },
        /**
         * 图标
         */
        icon: {
            type: String,
            default: 'zmz-icon--empty'
        },
        /**
         * 描述
         */
        describe: {
            type: String,
            default: ''
        },
        /**
         * 图标大小
         */
        iconSize: {
            type: [String, Array],
            default: ''
        },
        /**
         * 图标颜色
         */
        iconColor: {
            type: String,
            default: ''
        },
    },
    setup(props) {
        const iconStyle = computed(() => {
            let params = {}
            if (props.iconSize) {
                params['font-size'] = props.iconSize
            }

            if (props.iconColor) {
                params['color'] = props.iconColor
            }
            return params;
        });

        const imageStyle = computed(() => {
            let params = {}
            if (typeof props.iconSize == 'object' && props.iconSize.length) {
                params['width'] = props.iconSize[0];
                params['height'] = props.iconSize[1];
            } else {
                params['width'] = props.iconSize;
                params['height'] = props.iconSize;
            }
            return params
        });

        const isImage = computed(() => {
            return /\.(png|jpg|jpeg|gif|svg)$/i.test(props.icon)
        })


        return {
            iconStyle,
            imageStyle,
            isImage
        };
    }
};
</script>
