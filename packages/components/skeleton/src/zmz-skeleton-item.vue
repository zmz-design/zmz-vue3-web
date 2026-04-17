<template>
    <div class="zmz-skeleton__item" :class="[zmzSkeletonItemClass]" :style="[zmzSkeletonItemStyle]">
    </div>
</template>
<script>
import { computed, inject, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue';
import { unitDefaultCompletion } from '../../../utils/unit.js'
export default {
    name: 'ZmzSkeletonItem',
    props: {
        /**
         * 下标
         */
        index: {
            type: Number,
            default: 0
        },
        /**
         * 宽度
         */
        width: {
            type: String,
            default: ''
        },
        /**
         * 类型
         */
        type: {
            type: String,
            default: 'text',
            validator(value) {
                return ['text', 'image'].includes(value)
            }
        },
        /**
         * 清除浮动
         */
        both: {
            type: Boolean,
            default: false
        },
        /**
         * 外边距
         */
        margin: {
            type: String,
            default: ''
        },
        /**
         * 内边距
         */
        padding: {
            type: String,
            default: ''
        },
        /**
         * 高度
         */
        height: {
            type: String,
            default: ''
        },
    },
    emits: ['update:modelValue'],
    setup(props) {
        const zmzSkeleton = inject('zmzSkeleton', {});
        const Instance = getCurrentInstance();

        // 公共类名
        const zmzSkeletonItemClass = computed(() => {
            let params = []
            if (props.both) {
                params.push(`zmz-skeleton__item--both`)
            }

            if (!zmzSkeleton.isChild) {
                if (props.index + 1 == zmzSkeleton.num) {
                    params.push('zmz-skeleton__item--last')
                }

                if (props.index > 0) {
                    params.push('zmz-skeleton__item--margin')
                }

                if (props.index == 0) {
                    params.push('zmz-skeleton__item--frist')

                }
            } else {
                if (props.index > 0) {
                    params.push('zmz-skeleton__item--margin')
                }
            }

            if (props.type) {
                params.push(`zmz-skeleton__item--${props.type}`)
            } else {
                params.push(`zmz-skeleton__item--${zmzSkeleton.type}`)
            }

            return params
        })

        // 公共样式
        const zmzSkeletonItemStyle = computed(() => {
            let params = {}
            if (props.type == 'image') {
                if (props.height) {
                    params['height'] = unitDefaultCompletion(props.height)
                } else {
                    params['height'] = '100px'
                }
            } else {
                params['height'] = unitDefaultCompletion(props.height)
            }

            if (props.width) {
                params['width'] = unitDefaultCompletion(props.width);
            }

            if (props.margin) {
                params['margin'] = props.margin
            }

            if (props.padding) {
                params['padding'] = props.padding
            }

            return params
        })

        onMounted(() => {
            addDom()
            updateDom()
        })

        onBeforeUnmount(() => {
            removeDom()
            updateDom()
        })

        const addDom = () => {
            zmzSkeleton.zmzSkeletonList.value.push({
                uid: Instance.uid,
                Instance: Instance
            });
        }

        const updateDom = () => {
            zmzSkeleton.updateDom();
        }

        const removeDom = () => {
            if (zmzSkeleton.zmzSkeletonList.value && zmzSkeleton.zmzSkeletonList.value.length) {
                const index = zmzSkeleton.zmzSkeletonList.value.findIndex(item => item.uid === Instance.uid);
                zmzSkeleton.zmzSkeletonList.value.splice(index, 1);
            }
        }

        return {
            zmzSkeletonItemClass,
            zmzSkeletonItemStyle
        };
    }
};
</script>
