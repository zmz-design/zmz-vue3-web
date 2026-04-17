<template>
    <div class="zmz-skeleton" :class="[zmzSkeletonClass]" :style="[zmzSkeletonStyle]">
        <template v-if="$slots.loading">
            <template v-if="model">
                <slot name="loading"></slot>
            </template>
            <template v-else>
                <slot></slot>
            </template>
        </template>
        <template v-else>
            <slot>
                <zmz-skeleton-item v-for="(item, index) in num" :key="index" :index="index"></zmz-skeleton-item>
            </slot>
        </template>
    </div>
</template>
<script>
import { computed, ref, provide, onMounted } from 'vue';
import { unitDefaultCompletion } from '../../../utils/unit.js'
import ZmzSkeletonItem from './zmz-skeleton-item.vue';
export default {
    name: 'ZmzSkeleton',
    components: {
        ZmzSkeletonItem
    },
    props: {
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
         * 数量
         */
        num: {
            type: Number,
            default: 4
        },
        /**
         * 动画
         */
        animation: {
            type: Boolean,
            default: false
        },
        /**
         * 显示
         */
        modelValue: {
            type: Boolean,
            default: false
        },
        /**
         * 宽度
         */
        width: {
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
    setup(props, { slots, emit }) {
        const zmzSkeletonList = ref([])
        // 公共类名
        const zmzSkeletonClass = computed(() => {
            let params = []

            if (props.animation) {
                params.push('zmz-skeleton--animation')
            }

            return params
        })

        //公共样式
        const zmzSkeletonStyle = computed(() => {
            let params = {};

            if (props.width) {
                params['width'] = unitDefaultCompletion(props.width);
            }

            if (props.height) {
                params['height'] = unitDefaultCompletion(props.height);
            }

            return params;
        })

        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val)
            }
        })

        const slotsDefault = computed(() => {
            if (slots.default) {
                return true
            } else {
                return false
            }
        })

        onMounted(() => {
            updateDom()
        })

        // 更新下标
        const updateDom = () => {
            zmzSkeletonList.value.forEach((item, index) => {
                item.Instance.props.index = index;
            })
        }

        provide('zmzSkeleton', {
            type: props.type,
            num: props.num,
            isChild: slotsDefault.value,
            zmzSkeletonList: zmzSkeletonList,
            updateDom: updateDom
        })

        return {
            model,
            zmzSkeletonClass,
            zmzSkeletonStyle
        };
    }
};
</script>