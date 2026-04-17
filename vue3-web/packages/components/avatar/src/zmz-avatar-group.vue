<template>
    <div class="zmz-avatar-group" :class="[zmzAvatarClass]">
        <div class="zmz-avatar-group__item" v-for="(item, index) in srcData" :key="index"
            :style="zmzAvatarGroupItemStyle(index)">
            <div class="zmz-avatar-group__icon" v-if="icon">
                <i class="zmz-avatar-group__icon__inner" :class="icon"></i>
            </div>
            <div class="zmz-avatar-group__img" v-if="src">
                <img class="zmz-avatar-group__img__inner" v-if="!isImgError" @error="imgError($event, index)" :style="[fitClass]"
                    :src="keyField ? item[keyField] : item">
                <template v-else>
                    <slot></slot>
                </template>
            </div>
            <div class="zmz-avatar-group__other" v-if="!src && !icon && $slots.default">
                <slot></slot>
            </div>

            <div class="zmz-avatar-group__more" v-if="isMore && (maxCount - 1) === index">
                +{{ moreTip }}
            </div>
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
export default {
    name: 'ZmzAvatarGroup',
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
            type: Array,
            default() {
                return []
            }
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
        alt: String,
        /**
         * 偏移
         */
        offset: {
            type: Number,
            default: 14
        },
        /**
         * 最大数量
         */
        maxCount: {
            type: Number,
            default: 5
        },
        /**
         * 指定对象字段
         */
        keyField: {
            type: String,
            default: ''
        },
    },
    emits: ['on-img-error'],
    setup(props, { emit }) {
        const isImgError = ref(false)

        // 公共类名
        const zmzAvatarClass = computed(() => {
            let params = []
            if (props.shape) {
                params.push(`zmz-avatar-group--${props.shape}`)
            }

            if (props.size) {
                params.push(`zmz-avatar-group--size-${props.size}`)
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
        const imgError = (e, index) => {
            isImgError.value = true
            emit('on-img-error', e, index)
        }

        // 子集公共样式
        const zmzAvatarGroupItemStyle = (index) => {
            let params = {}
            if (index > 0) {
                params['margin-left'] = '-' + props.offset + 'px'
            }
            return params;
        }

        const srcData = computed(() => {
            let params = props.src
            return params.filter((item, index) => index < props.maxCount)
        })

        // 更多
        const isMore = computed(() => {
            return props.src.length > props.maxCount
        })

        // 更多提示
        const moreTip = computed(() => {
            return props.src.length - props.maxCount;
        });

        return {
            zmzAvatarClass,
            fitClass,
            imgError,
            isImgError,
            zmzAvatarGroupItemStyle,
            isMore,
            moreTip,
            srcData
        };
    }
};
</script>
