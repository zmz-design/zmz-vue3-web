<template>
    <div class="zmz-comment__item">
        <div class="zmz-comment__wrap">
            <div class="zmz-comment__wrap__left" v-if="avatar || $slots.avatar">
                <slot name="avatar">
                    <div class="zmz-comment__avatar">
                        <img class="zmz-comment__avatar__inner" :src="avatar" />
                    </div>
                </slot>
            </div>
            <div class="zmz-comment__wrap__right">
                <div class="zmz-comment__title" v-if="title || $slots.title">
                    <slot name="title">{{ title }}</slot>
                </div>
                <div class="zmz-comment__content" v-if="content || $slots.content">
                    <slot name="content">{{ content }}</slot>
                </div>
                <div class="zmz-comment__operation">
                    <div class="zmz-comment__date" v-if="date || $slots.date">
                        <slot name="date">{{ date }}</slot>
                    </div>
                    <div class="zmz-comment__button" v-if="$slots.button">
                        <slot name="button"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="zmz-comment__nested" :style="{ 'margin-left': itemOffset }">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { computed, inject } from 'vue';
export default {
    name: 'ZmzCommentItem',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * 内容
         */
        content: {
            type: String,
            default: ''
        },
        /**
         * 时间
         */
        date: {
            type: String,
            default: ''
        },
        /**
         * 头像
         */
        avatar: String,
        /**
         * 偏移
         */
        offset: {
            type: String,
            default: '70px'
        },
    },
    setup(props) {
        const zmzComment = inject('zmzComment', {});

        // 偏移
        const itemOffset = computed(() => {
            return props.offset ? props.offset : zmzComment.offset
        })
        return {
            itemOffset
        };
    }
};
</script>
