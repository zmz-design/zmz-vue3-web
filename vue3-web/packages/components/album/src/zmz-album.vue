<template>
    <div class="zmz-album" :class="[zmzAlbumClass]">
        <div class="zmz-album__wrap" v-if="!isMultiple" :style="[zmzAlbumWrapStyle, zmzAlbumCommonStyle]">
            <img :src="image" :class="['zmz-album__img', { 'zmz-album__preview': preview }]" :style="[zmzAlbumImgStyle]"
                @click.stop="handlePreviewClick(image)" @error="handleImageError" v-if="!isImagesError" />
            <div class="zmz-album__error" :style="[zmzAlbumWrapStyle, zmzAlbumCommonStyle]" v-else>
                <slot name="error">
                    加载失败
                </slot>
            </div>
        </div>
        <div class="zmz-album__wrap" v-else>
            <div class="zmz-album__row" v-for="(item, index) in imagesUrlList" :key="index">
                <div class="zmz-album__item" v-for="(child, childIndex) in item" :key="childIndex"
                    :style="[zmzAlbumWrapStyle, zmzAlbumCommonStyle]">
                    <img :src="child" @error="(e) => handleImageError(e, index, childIndex)"
                        :class="['zmz-album__img', { 'zmz-album__preview': preview }]" :style="[zmzAlbumImgStyle]"
                        @click="handlePreviewClick(child)" />
                    <template v-for="itemErr, indexErr in imgErrorIndex" :key="indexErr">
                        <template v-for="itemChildErr, indexChildErr in imgErrorChildIndex" :key="indexChildErr">
                            <template v-if="itemErr == index && itemChildErr == childIndex">
                                <div class="zmz-album__error" :style="[zmzAlbumWrapStyle, zmzAlbumCommonStyle]">
                                    <slot name="error">
                                        加载失败
                                    </slot>
                                </div>
                            </template>
                        </template>
                    </template>
                    <div :class="['zmz-album__text', { 'zmz-album__preview': preview }]"
                        @click.stop="handlePreviewClick(child)"
                        v-if="image.length > rowCount * imagesUrlList.length && index === imagesUrlList.length - 1 && childIndex === imagesUrlList[imagesUrlList.length - 1].length - 1">
                        +{{ moreNumber }}
                    </div>
                </div>
            </div>
        </div>
        <template v-if="preview">
            <zmz-image-preview :teleport="previewTeleport" :teleportDom="previewTeleportDom" @on-btn-close="onBtnClose"
                :current="current" :preview-image-list="previewImageList" v-model="isPreview"></zmz-image-preview>
        </template>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
export default {
    name: 'ZmzAlbum',
    props: {
        /**
         * 图片地址
         */
        image: {
            type: [String, Array],
            default: ''
        },
        /**
         * 宽度
         */
        width: {
            type: String,
            default: '100%'
        },
        /**
         * 高度
         */
        height: {
            type: String,
            default: '100%'
        },
        /**
         * 图片自适应
         */
        fit: {
            type: String,
            default: 'cover',
            validator(value) {
                return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value)
            }
        },
        /**
         * 间隔
         */
        gutter: {
            type: String,
            default: ''
        },
        /**
         * 最大个数
         */
        maxCount: {
            type: [Number, String],
            default: 9
        },
        /**
         * 是否开启预览
         */
        preview: {
            type: Boolean,
            default: false
        },
        /**
         * 每行个数
         */
        rowCount: {
            type: [Number, String],
            default: 3
        },
        /**
         * 自定义图片圆角
         */
        radius: {
            type: String,
            default: ''
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
    emits: ['on-image-error'],
    setup(props, { emit }) {
        const isImagesError = ref(false);
        const imgErrorIndex = ref([]);
        const imgErrorChildIndex = ref([]);
        const isPreview = ref(false);
        const gutter = ref(props.gutter);
        const current = ref(0);

        // 圆角样式
        const zmzAlbumCommonStyle = computed(() => {
            let params = {}
            if (props.radius) {
                params['border-radius'] = props.radius
            }
            return params;
        });

        // 图片列表
        const imagesUrlList = computed(() => {
            const newList = [];
            props.image.map((item, index) => {
                if (index + 1 <= props.maxCount) {
                    const itemIndex = Math.floor(index / props.rowCount);
                    if (!newList[itemIndex]) {
                        newList[itemIndex] = [];
                    }
                    newList[itemIndex].push(item);
                }
            });
            return newList;
        });

        // 更多提示
        const moreNumber = computed(() => {
            return props.image.length - props.maxCount;
        });

        // 图片错误
        const handleImageError = (e, index, childIndex) => {
            if (isMultiple.value) {
                imgErrorIndex.value.push(index);
                imgErrorChildIndex.value.push(childIndex);
                e.target.style.display = 'none';
            } else {
                isImagesError.value = true;
            }
            emit('on-image-error', e);
        };

        const onBtnClose = () => {
            document.body.style.overflow = '';
            isPreview.value = false
        };

        const zmzAlbumClass = computed(() => {
            let params = []

            if (isMultiple.value) {
                params.push(`zmz-album--multiple`)
            } else {
                params.push(`zmz-album--single`)
            }
            return params
        })

        //判断图片多个还是单个
        const isMultiple = computed(() => {

            if (typeof props.image == 'string') {
                return false
            }

            return true;
        });

        // 列样式
        const zmzAlbumWrapStyle = computed(() => {
            const params = {};
            if (gutter.value && isMultiple.value) {
                params['margin-right'] = gutter.value;
                params['margin-bottom'] = gutter.value;
            }

            if (props.width) {
                params['width'] = props.width;
            }

            if (props.height) {
                params['height'] = props.height;
            }

            return params;
        });

        // 自适应类名
        const zmzAlbumImgStyle = computed(() => {
            let params = {}
            if (props.fit) {
                params['object-fit'] = props.fit;
            }
            return params;
        });

        // 预览
        const handlePreviewClick = (child) => {
            if (!props.preview) return
            document.body.style.overflow = 'hidden'
            let index = previewImageList.value.findIndex(item => item === child);
            current.value = index
            isPreview.value = true
        }

        const previewImageList = computed(() => {
            let params = []
            if (typeof props.image == 'string') {
                params.push(props.image)
            } else {
                params.push(...props.image)
            }
            return params;
        })

        return {
            handleImageError,
            isImagesError,
            isPreview,
            handlePreviewClick,
            onBtnClose,
            current,
            zmzAlbumCommonStyle,
            isMultiple,
            imagesUrlList,
            moreNumber,
            zmzAlbumWrapStyle,
            zmzAlbumImgStyle,
            imgErrorIndex,
            imgErrorChildIndex,
            zmzAlbumClass,
            previewImageList
        };
    }
};
</script>
