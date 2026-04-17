<template>
    <teleport :to="teleportDom" :disabled="!teleport" v-bind="$attrs">
        <transition name="zmz-fade-top" @before-leave="handleBeforeLeave" @leave="handleLeave"
            @after-leave="handleAfterLeave" @before-enter="handleBeforeEnter" @enter="handleEnter"
            @after-enter="handleAfterEnter">
            <div class="zmz-image-preview" :style="[zmzImagePreviewStyle]" v-if="model">
                <div class="zmz-image-preview__mask"></div>
                <div class="zmz-image-preview__num">
                    <span class="zmz-image-preview__num__current">{{ index + 1 }}</span><span
                        class="zmz-image-preview__num__split">/</span><span class="zmz-image-preview__num__total">{{
                            previewImageList.length }}</span>
                </div>
                <div class="zmz-image-preview__btn">
                    <div class="zmz-image-preview__btn__prev" @click="handlePrev"><i class="zmz-icon--arrow-left"></i>
                    </div>
                    <div class="zmz-image-preview__btn__next" @click="handleNext"><i class="zmz-icon--arrow-right"></i>
                    </div>
                </div>
                <div class="zmz-image-preview__close" @click="handleClose"><i class="zmz-icon--wrong"></i></div>
                <div class="zmz-image-preview__console">
                    <div class="zmz-image-preview__console__li" @click="handleEnlarge"><i class="zmz-icon--enlarge"></i>
                    </div>
                    <div class="zmz-image-preview__console__li" @click="handleNarrow"><i class="zmz-icon--narrow"></i>
                    </div>
                    <div class="zmz-image-preview__console__li" @click="handleFullscreenToEqual">
                        <i class="zmz-icon--fullscreen" v-if="!isFullscreenToEqual"></i>
                        <i class="zmz-icon--equal" v-else></i>
                    </div>
                    <div class="zmz-image-preview__console__li" @click="handleRotateLeft"><i
                            class="zmz-icon--rotate-left"></i>
                    </div>
                    <div class="zmz-image-preview__console__li" @click="handleRotateRight"><i
                            class="zmz-icon--rotate-right"></i></div>
                </div>
                <div class="zmz-image-preview__panel">
                    <img :class="{ 'is-move': isMove }" v-show="!isImgError" ref="img" @mousedown="handleMouseDown"
                        @load="handleImageLoad" @error="handleImageError" :style="[zmzImagePreviewPanelImgStyle]"
                        :src="previewImageListOne" />
                    <div class="zmz-image-preview__error" v-show="isImgError">
                        <slot name="error">加载失败</slot>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>
<script>
import { computed, ref, onMounted, onUnmounted, reactive, watch } from 'vue';
import { nextZindex } from '../../../utils/zIndex.js';
export default {
    name: 'ZmzImagePreview',
    props: {
        /**
         * 图片列表
         */
        previewImageList: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 是否显示
         */
        modelValue: [Boolean],
        /**
         * 图片下标
         */
        current: {
            type: Number,
            default: 0
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
    },
    emits: ['update:modelValue', 'on-preview-down', 'on-preview-move', 'on-preview-up', 'on-preview-equal', 'on-preview-prev', 'on-preview-next', 'on-preview-wheel', 'on-preview-rotate-right', 'on-preview-rotate-left', 'on-preview-enlarge', 'on-preview-narrow', 'on-button-close', 'on-open-before', 'on-open', 'on-open-after', 'on-close-before', 'on-close', 'on-close-after', 'on-image-load', 'on-image-error'],
    setup(props, { emit }) {
        const isImgError = ref(false);
        const isFullscreenToEqual = ref(false);
        const isMove = ref(false);
        const transform = reactive({
            scale: 1,
            rotate: 0,
            offsetX: 0,
            offsetY: 0,
            position: 'absolute'
        });
        const startX = ref(0);
        const startY = ref(0);
        const img = ref(null);
        const index = ref(props.current);
        const zIndex = ref(nextZindex());
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        const handleImageError = e => {
            isImgError.value = true;
            emit('on-image-error', e);
        };

        const handleImageLoad = e => {
            isImgError.value = false;
            emit('on-image-load', e);
        };

        const previewClick = () => {
            model.value = false;
        };

        // 点击关闭
        const handleClose = () => {
            model.value = false;
            emit('on-button-close');
        };

        // 关闭之前
        const handleBeforeLeave = () => {
            emit('on-close-before');
        };

        // 关闭中
        const handleLeave = () => {
            transform.scale = 1;
            transform.rotate = 0;
            transform.offsetX = 0;
            transform.offsetY = 0;
            transform.position = 'absolute';
            emit('on-close');
        };

        // 关闭之后
        const handleAfterLeave = () => {
            emit('on-close-after');
        };

        // 打开之前
        const handleBeforeEnter = () => {
            emit('on-open-before');
        };

        // 打开中
        const handleEnter = () => {
            zIndex.value = nextZindex();
            emit('on-open');
        };

        // 打开之后
        const handleAfterEnter = () => {
            emit('on-open-after');
        };

        // 放大
        const handleEnlarge = () => {
            transform.scale = parseFloat((transform.scale += 0.2).toFixed(1));
            emit('on-preview-enlarge', transform)
        };

        // 缩小
        const handleNarrow = () => {
            if (transform.scale <= 0.2) return;
            transform.scale = parseFloat((transform.scale -= 0.2).toFixed(1));
            emit('on-preview-narrow', transform)
        };

        // 左旋转
        const handleRotateLeft = () => {
            transform.rotate -= 90;
            emit('on-preview-rotate-left', transform)
        };

        // 右旋转
        const handleRotateRight = () => {
            transform.rotate += 90;
            emit('on-preview-rotate-right', transform)
        };

        // 等比例缩放
        const handleFullscreenToEqual = () => {
            isFullscreenToEqual.value = !isFullscreenToEqual.value;
            emit('on-preview-equal', isFullscreenToEqual.value)
        };

        //公共图片样式
        const zmzImagePreviewPanelImgStyle = computed(() => {
            let params = {
                transform: `scale(${transform.scale}) rotate(${transform.rotate}deg)`,
                transition: 'transform 0.4s ease 0s',
                position: transform.position
            };
            if (transform.offsetX) {
                params['left'] = transform.offsetX + 'px';
            }

            if (transform.offsetY) {
                params['top'] = transform.offsetY + 'px';
            }
            if (!isFullscreenToEqual.value) {
                params['max-height'] = '100%';
                params['max-width'] = '100%';
            }

            return params;
        });

        // 上一个
        const handlePrev = () => {
            if (index.value <= 0) {
                index.value = props.previewImageList.length - 1;
            } else {
                index.value--;
            }
            emit('on-preview-prev', index.value, props.previewImageList.length)
        };

        // 下一个
        const handleNext = () => {
            if (index.value >= props.previewImageList.length - 1) {
                index.value = 0;
            } else {
                index.value++;
            }
            emit('on-preview-next', index.value, props.previewImageList.length)
        };

        // 按下
        const handleMouseDown = e => {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
            startX.value = e.pageX - img.value.offsetLeft;
            startY.value = e.pageY - img.value.offsetTop;
            isMove.value = true;
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            emit('on-preview-down', transform)
        };

        // 移动
        const handleMouseMove = e => {
            if (isMove.value) {
                transform.offsetX = e.pageX - startX.value;
                transform.offsetY = e.pageY - startY.value;
                emit('on-preview-move', transform)
            }
        };

        // 抬起
        const handleMouseUp = () => {
            isMove.value = false;
            emit('on-preview-up')
        };

        // 鼠标滚动
        const handlMousewheel = e => {
            if (!model.value) return;
            if (e.stopPropagation) e.stopPropagation();
            if (getWheelDelta(e) < 0) {
                transform.scale = parseFloat((transform.scale += 0.02).toFixed(2));
            } else {
                if (transform.scale <= 0.2) return;
                transform.scale = parseFloat((transform.scale -= 0.02).toFixed(2));
            }
            emit('on-preview-wheel', transform)
        };

        // 鼠标滚动方法
        const getWheelDelta = e => {
            // 滚动操作方法
            var ev = e || window.event;
            if (ev.wheelDelta) {
                // 非火狐适用
                return ev.wheelDelta;
            } else if (ev.detail) {
                // 火狐适用
                return ev.detail * -40;
            }
        };

        // 单个
        const previewImageListOne = computed(() => {
            return props.previewImageList[index.value];
        });

        // 样式
        const zmzImagePreviewStyle = computed(() => {
            return `z-index: ${zIndex.value}`;
        });

        onMounted(() => {
            document.addEventListener('mousewheel', handlMousewheel, { passive: true });
        });

        onUnmounted(() => {
            document.removeEventListener('mousewheel', handlMousewheel);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        });

        watch(
            () => props.current,
            val => {
                index.value = val;
            },
            { lazy: false }
        );

        return {
            handleImageError,
            isImgError,
            model,
            previewClick,
            handleClose,
            handleBeforeEnter,
            handleEnter,
            handleAfterEnter,
            handleBeforeLeave,
            handleLeave,
            handleAfterLeave,
            handleEnlarge,
            handleNarrow,
            handleFullscreenToEqual,
            handleRotateLeft,
            handleRotateRight,
            zmzImagePreviewPanelImgStyle,
            isFullscreenToEqual,
            handleMouseDown,
            img,
            isMove,
            previewImageListOne,
            handlePrev,
            handleNext,
            zmzImagePreviewStyle,
            handleImageLoad,
            index
        };
    }
};
</script>
