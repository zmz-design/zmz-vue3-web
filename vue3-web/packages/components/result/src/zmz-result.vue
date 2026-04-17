<template>
    <div class="zmz-result">
        <div class="zmz-result__icon" :class="zmzResultIconClass" v-if="$slots.icon || type">
            <slot name="icon"><i :class="[zmzResultIconIClass]" :style="[zmzResultIconStyle]"></i></slot>
        </div>
        <div class="zmz-result__title" v-if="$slots.title || title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="zmz-result__describes" v-if="$slots.describes || describes">
            <slot name="describes">{{ describes }}</slot>
        </div>
        <div class="zmz-result__extra" v-if="$slots.extra || extra">
            <slot name="extra">{{ extra }}</slot>
        </div>
        <div class="zmz-result__actions" v-if="$slots.actions || actions">
            <slot name="actions">{{ actions }}</slot>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'ZmzResult',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * 图标
         */
        type: {
            type: String,
            default: 'info',
            validator(value) {
                return ['success', 'warning', 'error', 'info'].includes(value)
            }
        },
        /**
         * 描述
         */
        describes: {
            type: String,
            default: ''
        },
        /**
         * 补充信息
         */
        extra: {
            type: String,
            default: ''
        },
        /**
         * 操作
         */
        actions: {
            type: String,
            default: ''
        },
        /**
         * 图标大小
         */
        iconSize: String,
        /**
         * 图标颜色
         */
        iconColor: String
    },
    setup(props) {
        const zmzResultIconClass = computed(() => {
            let params = []
            if (props.type) {
                params.push(`zmz-result__icon--${props.type}`)
            }
            return params;
        });

        const zmzResultIconIClass = computed(() => {
            let params = []
            if (props.type) {
                params.push(`zmz-icon--${props.type}`)
            }
            return params;
        });

        const zmzResultIconStyle = computed(() => {
            let params = {}
            if (props.iconSize) {
                params['font-size'] = props.iconSize
            }

            if (props.iconColor) {
                params['font-size'] = props.iconColor
            }
            return params;
        });

        return {
            zmzResultIconClass,
            zmzResultIconStyle,
            zmzResultIconIClass
        };
    }
};
</script>
