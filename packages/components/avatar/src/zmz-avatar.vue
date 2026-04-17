<template>
    <div class="zmz-avatar" :class="[zmzAvatarClass]">
        <div class="zmz-avatar__icon" v-if="icon">
            <i class="zmz-avatar__icon__inner" :class="icon"></i>
        </div>
        <div class="zmz-avatar__img" v-if="src">
            <img class="zmz-avatar__img__inner" v-if="!isImgError" @error="imgError" :style="[fitClass]" :src="src">
            <template v-else>
                <slot></slot>
            </template>
        </div>
        <div class="zmz-avatar__custom" v-if="$slots.default">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
export default {
    name: 'ZmzAvatar',
    props: {
        /**
         * 头像形状
         */
        shape: {
            type: String,
            default: 'circle',
            validator(value) {
                return ['circle', 'square'].includes(value)
            }
        },
        /**
         * 尺寸
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['large', 'medium', 'small', 'mini', 'default'].includes(value)
            }
        },
        /**
         * 图标
         */
        icon: {
            type: String,
            default: ''
        },
        /**
         * 地址
         */
        src: {
            type: String,
            default: ''
        },
        /**
         * 图片缩放类型
         */
        fit: {
            type: String,
            default: 'cover',
            validator(value) {
                return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value)
            }
        },
        /**
         * 原生属性
         */
        alt: String
    },
    emits: ['on-image-error'],
    setup(props, { emit }) {
        const isImgError = ref(false)

        // 公共类名
        const zmzAvatarClass = computed(() => {
            let params = []
            if (props.shape) {
                params.push(`zmz-avatar--${props.shape}`)
            }

            if (props.size) {
                params.push(`zmz-avatar--size-${props.size}`)
            }
            return params;
        });

        // 图片
        const fitClass = computed(() => {
            let params = {};
            if (props.fit) {
                params['object-fit'] = props.fit;
            }
            return params;
        });

        // 错误回调
        const imgError = (e) => {
            isImgError.value = true
            emit('on-image-error', e)
        }

        return {
            zmzAvatarClass,
            fitClass,
            imgError,
            isImgError,
        };
    }
};
</script>
