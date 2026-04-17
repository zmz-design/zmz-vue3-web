<template>
    <div class="zmz-timeaxis__item">
        <div class="zmz-timeaxis__node" :style="zmzTimeaxisNodeStyle" :class="zmzTimeaxisNodeClass">
            <slot name="icon"><i class="zmz-timeaxis__node__icon" :class="icon"></i></slot>
        </div>
        <slot name="line">
            <div class="zmz-timeaxis__line"></div>
        </slot>
        <div class="zmz-timeaxis__item__wrap">
            <div class="zmz-timeaxis__title" v-if="title || $slots.title">
                <slot name="title">{{ title }}</slot>
            </div>
            <div class="zmz-timeaxis__content">
                <slot></slot>
            </div>
            <div class="zmz-timeaxis__date" v-if="date || $slots.date">
                <slot name="date">{{ date }}</slot>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'ZmzTimeaxisItem',
    props: {
        color: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        /**
         * 颜色
         */
        type: {
            type: String,
            default: '',
            validator(value) {
                return ['success', 'warning', 'error', 'primary', 'info', ''].includes(value)
            }
        },
    },
    setup(props, { emit }) {
        const zmzTimeaxisNodeStyle = computed(() => {
            let params = {};
            if (props.color) {
                params['background-color'] = props.color
            }

            return params
        })

        const zmzTimeaxisNodeClass = computed(() => {
            let params = [];
            if (props.type && !props.color) {
                params.push(`zmz-timeaxis__node--${props.type}`)
            }

            return params
        })

        // 关闭
        const handleClose = () => {
            emit('on-close', true);
        };
        return {
            handleClose,
            zmzTimeaxisNodeStyle,
            zmzTimeaxisNodeClass
        };
    }
};
</script>
