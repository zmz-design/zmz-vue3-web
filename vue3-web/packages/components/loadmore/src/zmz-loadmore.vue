<template>
    <div class="zmz-loadmore" :style="{ 'height': height }">
        <div class="zmz-loadmore__wrap">
            <div class="zmz-loadmore__wrap__left" :style="{ 'width': lineWidth }">
                <template v-if="isLineLeftSlot">
                    <slot name="lineLeft"></slot>
                </template>
                <template v-if="isLineSlot">
                    <slot name="line"></slot>
                </template>
                <template v-if="!isLineLeftSlot && !isLineSlot">
                    <span v-if="isLine" class="zmz-loadmore__wrap__left__line"></span>
                    <template v-if="isLineText">
                        {{ lineText }}
                    </template>
                </template>
            </div>
            <div class="zmz-loadmore__wrap__center" @click="handleClick" :class="[zmzLoadmoreWrapCenterClass]" :style="[zmzLoadmoreWrapCenterStyle]">
                <div class="zmz-loadmore__icon" v-if="model == 'loading'">
                    <slot name="icon"><i :class="[icon]" :style="[iconStyle]"></i></slot>
                </div>
                <div class="zmz-loadmore__text">
                    {{ titleText }}
                </div>
            </div>
            <div class="zmz-loadmore__wrap__right" :style="{ 'width': lineWidth }">
                <template v-if="isLineRightSlot">
                    <slot name="lineRight"></slot>
                </template>
                <template v-if="isLineSlot">
                    <slot name="line"></slot>
                </template>
                <template v-if="!isLineRightSlot && !isLineSlot">
                    <span v-if="isLine" class="zmz-loadmore__wrap__right__line"></span>
                    <template v-if="isLineText">
                        {{ lineText }}
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'ZmzLoadmore',
    props: {
        /**
         * icon
         */
        icon: {
            type: String,
            default: 'zmz-icon--loading'
        },
        /**
         * 颜色
         */
        color: {
            type: String,
            default: ''
        },
        /**
         * 线是否显示
         */
        line: {
            type: Boolean,
            default: true
        },
        /**
         * 字体
         */
        lineText: {
            type: String,
            default: ''
        },
        /**
         * icon大小
         */
        iconSize: {
            type: String,
            default: ''
        },
        /**
         * icon颜色
         */
        iconColor: {
            type: String,
            default: ''
        },
        /**
         * 加载高度
         */
        height: {
            type: String,
            default: ''
        },
        /**
         * 内容宽度
         */
        lineWidth: {
            type: String,
            default: ''
        },
        /**
         * 加载前
         */
        loadbefore: {
            type: String,
            default: '点击加载更多'
        },
        /**
         * 加载后
         */
        loadafter: {
            type: String,
            default: '加载完毕'
        },
        /**
         * 加载中
         */
        loading: {
            type: String,
            default: '正在加载'
        },
        /**
         * 没有更多
         */
        nomore: {
            type: String,
            default: '没有更多'
        },
        /**
         * 绑定值
         */
        modelValue: {
            type: String,
            default: 'loadbefore',
            validator(value) {
                return ['loadbefore', 'loadafter', 'loading', 'nomore'].includes(value)
            }
        },
        /**
         * 自定义加载文字
         */
        loadingText: {
            type: String,
            default: ''
        }
    },
    emits: ['on-click', 'update:modelValue'],
    setup(props, { slots, emit }) {

        const iconStyle = computed(() => {
            return {
                'font-size': props.iconSize,
                'color': props.iconColor
            };
        });

        const zmzLoadmoreWrapCenterStyle = computed(() => {
            return {
                'color': props.color
            };
        });

        const isLine = computed(() => {
            if (props.line && !props.lineText && slots && !slots.line && !slots.lineLeft && !slots.lineRight) {
                return true
            }

            if ((!props.line && !props.lineText && slots && !slots.line && !slots.lineLeft && !slots.lineRight) || (!props.line && props.lineText && !slots && !slots.line && !slots.lineLeft && !slots.lineRight)) {
                return false
            }

            if (props.line && props.lineText && slots && !slots.line && !slots.lineLeft && !slots.lineRight) {
                return false
            }
            return false;
        });

        const isLineText = computed(() => {
            if (props.line && !props.lineText && !slots.lineLeft && !slots.lineRight) {
                return true
            }

            if ((!props.line && !props.lineText && !slots.lineLeft && !slots.lineRight) || (!props.line && props.lineText && !slots.lineLeft && !slots.lineRight)) {
                return false
            }
            if (props.line && props.lineText && !slots.lineLeft && !slots.lineRight) {
                return true
            }

            return false;
        });
        const isLineSlot = computed(() => {
            if (props.line && slots && slots.line) {
                return true
            }

            if (props.line && slots && !slots.line) {
                return false
            }

            return false;
        });

        const isLineLeftSlot = computed(() => {
            if (props.line && slots && slots.line && slots.lineLeft) {
                return false
            }

            if (props.line && slots && !slots.line && slots.lineLeft) {
                return true
            }

            if (props.line && slots && !slots.line && !slots.lineLeft) {
                return false
            }

            return false;
        });

        const isLineRightSlot = computed(() => {
            if (props.line && slots && slots.line && slots.lineRight) {
                return false
            }

            if (props.line && slots && !slots.line && slots.lineRight) {
                return true
            }

            if (props.line && slots && !slots.line && !slots.lineRight) {
                return false
            }

            return false;
        });

        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val)
            }
        })

        const titleText = computed(() => {
            if (props.loadingText) {
                return props.loadingText;
            } else {
                return props[model.value];
            }
        })

        const handleClick = () => {
            if (model.value != 'loading' || model.value != 'nomore') return
            emit('on-click', model.value)
        }

        const zmzLoadmoreWrapCenterClass = computed(() => {
            return {
                'zmz-loadmore__wrap__center--cursor': (model.value == 'loadbefore' || model.value == 'loadafter')
            };
        })

        return {
            isLine,
            isLineText,
            isLineSlot,
            isLineLeftSlot,
            isLineRightSlot,
            model,
            titleText,
            handleClick,
            zmzLoadmoreWrapCenterClass,
            iconStyle,
            zmzLoadmoreWrapCenterStyle
        };
    }
};
</script>
