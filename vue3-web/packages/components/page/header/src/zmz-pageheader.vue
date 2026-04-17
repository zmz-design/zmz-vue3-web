<template>
    <div class="zmz-pageheader" :style="[zmzPageheaderStyle]">
        <div class="zmz-pageheader__left">
            <div class="zmz-pageheader__back" @click="handleBack">
                <slot name="icon"><i class="zmz-pageheader__back__icon zmz-icon--back"></i></slot>
            </div>
            <div class="zmz-pageheader__wrap">
                <div class="zmz-pageheader__title">
                    <slot name="title">{{ title }}</slot>
                </div>
                <div class="zmz-pageheader__subtitle">
                    <slot name="subtitle">{{ subtitle }}</slot>
                </div>
            </div>
        </div>
        <div class="zmz-pageheader__right" v-if="$slots.operation">
            <slot name="operation"></slot>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'ZmzPageheader',
    props: {
        /**
         * 标题
         */
        title: String,
        /**
         * 二级标题
         */
        subtitle: String,
        /**
         * 高度
         */
        height: String
    },
    emits: ['on-back'],
    setup(props, { emit }) {
        const handleBack = () => {
            emit('on-back');
        };

        // 公共样式
        const zmzPageheaderStyle = computed(() => {
            let params = []
            if (props.height) {
                params['height'] = props.height
            }
            return params
        })

        return {
            handleBack,
            zmzPageheaderStyle
        };
    }
};
</script>
