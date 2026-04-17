<template>
    <div class="zmz-showmore" :class="[zmzShowmoreClass]">
        <div class="zmz-showmore__text">
            <slot>{{ filterText }}</slot>
        </div>
        <span @click="handleShowMore" class="zmz-showmore__button" v-if="fold">
            <slot name="button" long="defaultLong" contentLong="contentLong" :fold="fold"
                :foldShowButton="foldShowButton" :foldHideButton="foldHideButton">
                <template v-if="defaultLong !== -1 && defaultLong < contentLong && foldShowButton">
                    {{ showText }}
                </template>
                <template v-if="defaultLong !== -1 && defaultLong === contentLong && foldHideButton">
                    {{ hideText }}
                </template>
            </slot>
        </span>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
    name: 'ZmzShowmore',
    props: {
        /**
         * 长度
         */
        long: {
            type: Number,
            default: -1
        },
        /**
         * 文字
         */
        content: {
            type: String,
            default: ''
        },
        /**
         * 显示文字
         */
        showText: {
            type: String,
            default: '显示更多'
        },
        /**
         * 隐藏文字
         */
        hideText: {
            type: String,
            default: '收起更多'
        },
        /**
         * 是否折叠
         */
        fold: {
            type: Boolean,
            default: true
        },
        /**
         * 折叠方式
         */
        foldHideButton: {
            type: Boolean,
            default: true
        },
        /**
         * 折叠方式
         */
        foldShowButton: {
            type: Boolean,
            default: true
        },
        /**
         * 折叠方式
         */
        foldType: {
            type: String,
            default: 'line',
            validator(value) {
                return ['line', 'block'].includes(value)
            }
        },
        /**
         * 主题
         */
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['success', 'warning', 'error', 'primary', 'default', 'info'].includes(value)
            }
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['on-fold'],
    setup(props, { emit }) {
        const defaultLong = ref(props.long);
        const filterText = computed(() => {
            if (defaultLong.value !== -1 && defaultLong.value < props.content.length) {
                return props.content.substring(0, defaultLong.value) + '...';
            }
            return props.content;
        });

        const zmzShowmoreClass = computed(() => {
            let params = ''
            if (props.foldType) {
                params = `zmz-showmore--${props.foldType}`
            }

            if (props.type) {
                params = `zmz-showmore--${props.type}`
            }
            return [{ 'zmz-showmore--disbaled': props.disabled }, params];
        });


        const contentLong = computed(() => {
            return props.content.length
        });

        const handleShowMore = () => {
            if (props.disabled) return
            if (defaultLong.value === props.content.length) {
                emit('on-fold', 'hide')
                defaultLong.value = props.long
            } else {
                emit('on-fold', 'show')
                defaultLong.value = props.content.length
            }
        };
        return {
            filterText,
            handleShowMore,
            defaultLong,
            zmzShowmoreClass,
            contentLong
        };
    }
};
</script>
