<template>
    <i :class="zmzIconClass" :style="zmzIconStyle"></i>
</template>

<script>
import { computed } from 'vue';
import { unitDefaultCompletion } from '../../../utils/unit.js';
export default {
    name: 'ZmzIcon',
    props: {
        /**
         * 名称
         */
        name: {
            type: String,
            default: '',
            required: true
        },
        /**
         * 图标大小
         */
        size: {
            type: [String, Number],
            default: 12
        },
        /**
         * 图标颜色
         */
        color: {
            type: String,
            default: ''
        },
        /**
         * 高度
         */
        height: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const zmzIconClass = computed(() => {
            return `zmz-icon--${props.name}`
        })

        const zmzIconStyle = computed(() => {
            let params = {}

            if (props.size) {
                params['fontSize'] = unitDefaultCompletion(props.size)
            }

            if (props.color) {
                params['color'] = props.color
            }
            return params
        })

        return {
            zmzIconStyle,
            zmzIconClass
        };
    }
};
</script>
