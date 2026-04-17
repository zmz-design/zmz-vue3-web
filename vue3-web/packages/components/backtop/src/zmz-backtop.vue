<template>
    <div class="zmz-backtop" @click="handleBacktop" v-if="isShow" :style="[zmzBacktopStyle]">
        <slot>
            <div class="zmz-backtop__button">
                <i class="zmz-backtop__icon" :class="icon"></i>
            </div>
        </slot>
    </div>
</template>

<script>
import { computed, ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
export default {
    name: 'ZmzBacktop',
    props: {
        visibilityHeight: {
            type: Number,
            default: 400
        },
        /**
         * 滚动时间
         */
        duration: {
            type: Number,
            default: 10
        },
        /**
         * 右部距离
         */
        right: {
            type: Number,
            default: 50
        },
        /**
         * 底部距离
         */
        bottom: {
            type: Number,
            default: 50
        },
        /**
         * 滚动目标
         */
        scrollTarget: {
            type: String,
            default: ''
        },
        /**
         * 图标
         */
        icon: {
            type: String,
            default: 'zmz-icon--arrow-top'
        }
    },
    emits: ['on-backtop', 'on-click'],
    setup(props, { emit }) {
        const isShow = ref(false);
        const scrollTop = ref(0);
        const scrollEvent = ref(null);
        const stepTime = ref(null)

        // 公共样式
        const zmzBacktopStyle = computed(() => {
            let params = {}
            if (props.right) {
                params['right'] = props.right + 'px'
            }

            if (props.bottom) {
                params['bottom'] = props.bottom + 'px'
            }
            return params;
        });

        // 回到顶部
        const handleBacktop = () => {
            stepTime.value = setInterval(() => {
                let step = scrollTop.value / 4;
                if (props.scrollTarget) {
                    document.querySelector(props.scrollTarget).scrollTop -= step;
                    document.querySelector(props.scrollTarget).scrollTop -= step;
                } else {
                    document.documentElement.scrollTop -= step;
                    document.body.scrollTop -= step;
                }

                if (scrollTop.value === 0) {
                    emit('on-backtop');
                    clearInterval(stepTime.value);
                    stepTime.value = null
                }
            }, props.duration);
            emit('on-click');
        };

        // 滚动
        const handleScroll = () => {
            if (props.scrollTarget) {
                scrollTop.value = document.querySelector(props.scrollTarget).scrollTop;
            } else {
                scrollTop.value = document.body.scrollTop || document.documentElement.scrollTop;
            }

            if (scrollTop.value > props.visibilityHeight) {
                isShow.value = true;
            } else {
                isShow.value = false;
            }
        };

        onMounted(() => {
            nextTick(() => {
                if (props.scrollTarget && document.querySelector(props.scrollTarget)) {
                    scrollEvent.value = document.querySelector(props.scrollTarget).addEventListener('scroll', handleScroll);
                } else {
                    scrollEvent.value = window.addEventListener('scroll', handleScroll);
                }
            })
        });

        onBeforeUnmount(() => {
            if (scrollEvent.value) {
                if (props.scrollTarget && document.querySelector(props.scrollTarget)) {
                    document.querySelector(props.scrollTarget).removeEventListener('scroll', handleScroll);
                } else {
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        });

        return {
            zmzBacktopStyle,
            handleBacktop,
            handleScroll,
            isShow
        };
    }
};
</script>
