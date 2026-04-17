<template>
    <transition name="zmz-fade">
        <div class="zmz-tag" :class="[zmzTagClass]">
            <span class="zmz-tag__text">
                <slot></slot>
            </span>
            <i class="zmz-tag__icon zmz-icon--wrong" v-if="closable" @click="handleClose"></i>
        </div>
    </transition>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'ZmzTag',
    props: {
        /**
         * 关闭按钮
         */
        closable: {
            type: Boolean,
            default: false
        },
        /**
         * 尺寸
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['large', 'medium', 'default', 'small', 'mini'].includes(value)
            }
        },
        /**
         * 颜色
         */
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['success', 'warning', 'error', 'primary', 'default', 'info'].includes(value)
            }
        },
        /**
         * 效果
         */
        effect: {
            type: String,
            default: '',
            validator(value) {
                return ['plain', 'linear', ''].includes(value)
            }
        },
    },
    setup(props, { emit }) {
        // 公共类名
        const zmzTagClass = computed(() => {
            let params = [];
            if (props.type) {
                params.push(`zmz-tag--${props.type}`)
            }

            if (props.size) {
                params.push(`zmz-tag--size-${props.size}`)
            }

            if (props.effect) {
                params.push(`zmz-tag--${props.effect}`)
            }

            return params
        })

        // 关闭
        const handleClose = () => {
            emit('on-close', true);
        };
        return {
            handleClose,
            zmzTagClass
        };
    }
};
</script>
