<template>
    <div class="zmz-image" :class="[zmzImageClass]" :style="[zmzImageStyle]">
        <div class="zmz-image__wrap">
            <img :class="['zmz-image__img', { 'zmz-image__preview': preview }]" @click="onPreviewOpen"
                v-if="!isImageError" @error="handleImageError" :style="[zmzImageImgStyle]" :src="src" :alt="alt" />
            <div class="zmz-image__error" :style="[zmzImageImgStyle]" v-else>
                <slot name="error">
                    加载失败
                </slot>
            </div>
        </div>
        <template v-if="preview">
            <zmzImagePreview :teleport-dom="previewTeleportDom" :teleport="previewTeleport"
                @on-btn-close="onPreviewClose" :current="current" :preview-image-list="previewPictureList"
                v-model="isPreview" @on-close-before="handleBeforeLeave" @on-close="handleLeave"
                @on-close-after="handleAfterLeave" @on-open-before="handleBeforeEnter" @on-open="handleEnter"
                @on-open-after="handleAfterEnter">
            </zmzImagePreview>
        </template>
    </div>
</template>
<script>
import zmzImagePreview from './zmz-image-preview.vue';
import { unitDefaultCompletion } from '../../../utils/unit.js';
import { computed, ref, watch } from 'vue';
export default {
    name: 'ZmzImage',
    components: {
        zmzImagePreview
    },
    props: {
        /**
         * 图片形状
         */
        shape: {
            type: String,
            default: 'square',
            validator(value) {
                return ['circle', 'square'].includes(value)
            }
        },
        /**
         * 图片地址
         */
        src: {
            type: String,
            default: ''
        },
        /**
         * 图片自适应类型
         */
        fit: {
            type: String,
            default: 'cover',
            validator(value) {
                return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value)
            }
        },
        /**
         * 原生 alt
         */
        alt: String,
        previewPictureList: {
            type: Array,
            default() {
                return []
            }
        },
        radius: {
            type: String,
            default: ''
        },
        /**
         * 是否穿梭
         */
        teleport: {
            type: Boolean,
            default: false
        },
        /**
         * 传送节点
         */
        teleportDom: {
            type: String,
            default: 'body'
        },
        width: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        },
        /**
        * 是否开启预览
        */
        preview: {
            type: Boolean,
            default: false
        },
        /**
         * 是否穿梭
         */
        previewTeleport: {
            type: Boolean,
            default: false
        },
        /**
         * 传送节点
         */
        previewTeleportDom: {
            type: String,
            default: 'body'
        },
    },
    emits: ['on-image-error', 'update:modelValue', 'on-open-before', 'on-open', 'on-open-after', 'on-close-before', 'on-close', 'on-close-after'],
    setup(props, { emit }) {
        const isImageError = ref(false);
        const isPreview = ref(false);

        watch(() => props.src, () => {
            isImageError.value = false
        })

        // 公共类名
        const zmzImageClass = computed(() => {
            let params = []
            if (!props.radius) {
                params.push(`zmz-image--${props.shape}`)
            }

            return params;
        });

        // 公共样式
        const zmzImageStyle = computed(() => {
            let params = {}
            if (props.radius) {
                params['border-radius'] = props.radius
            }

            if (props.width) {
                params['width'] = unitDefaultCompletion(props.width)
            }

            if (props.height) {
                params['height'] = unitDefaultCompletion(props.height)
            }
            return params;
        });

        // 图片样式
        const zmzImageImgStyle = computed(() => {
            let params = {}
            if (props.fit && !isImageError.value) {
                params['object-fit'] = props.fit
            }

            if (props.width) {
                params['width'] = unitDefaultCompletion(props.width)
            }

            if (props.height) {
                params['height'] = unitDefaultCompletion(props.height)
            }
            return params;
        });

        // 图片错误回调
        const handleImageError = (e) => {
            isImageError.value = true
            emit('on-image-error', e)
        }

        // 预览点击
        const onPreviewOpen = () => {
            if (!props.preview) return
            document.body.style.overflow = 'hidden'
            isPreview.value = true
        }

        // 关闭预览
        const onPreviewClose = () => {
            if (!props.preview) return
            document.body.style.overflow = ''
            isPreview.value = false
        }

        // 获取当前图片
        const current = computed(() => {
            const index = props.previewPictureList.indexOf(props.src);
            if (index >= 0) {
                return index;
            }
            return 0;
        })

        // 打开前
        const handleBeforeEnter = () => {
            emit('on-open-before');
        };

        // 打开中
        const handleEnter = () => {
            emit('on-open');
        };

        // 打开之后
        const handleAfterEnter = () => {
            emit('on-open-after');
        };

        // 关闭之前
        const handleBeforeLeave = () => {
            emit('on-close-before');
        };

        // 关闭中
        const handleLeave = () => {
            emit('on-close');
        };

        // 关闭之后
        const handleAfterLeave = () => {
            emit('on-close-after');
        };

        return {
            handleImageError,
            isImageError,
            isPreview,
            onPreviewOpen,
            onPreviewClose,
            current,
            zmzImageClass,
            zmzImageImgStyle,
            zmzImageStyle,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
        };
    }
};
</script>
