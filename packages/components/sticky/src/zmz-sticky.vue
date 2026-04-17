<template>
    <div class="zmz-sticky" ref="zmzSticky">
        <div class="zmz-sticky__wrap">
            <slot></slot>
        </div>
        <div class="zmz-sticky__seat"></div>
    </div>
</template>
<script>
import { computed, ref, onUnmounted, nextTick } from 'vue';
export default {
    name: 'ZmzSticky',
    props: {
        /**
         * 	开启状态
         */
        modelValue: [Boolean],
        /**
         * 距离窗口顶部达到指定偏移量
         */
        offsetTop: {
            type: Number,
            default: 0
        },
        /**
         * 	距离窗口底部达到指定偏移量
         */
        offsetBottom: {
            type: Number,
            default: 0
        },
        /**
         * 吸顶层级
         */
        zIndex: {
            type: Number,
            default: 0
        },
        /**
         * 	向上吸顶还是向下吸底
         */
        direction: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom'].includes(value)
            }
        },
        /**
         * 滚动容器
         */
        scrollTarget: {
            type: String,
            default: ''
        }
    },
    emits: ['on-change', 'update:modelValue'],
    setup(props, { emit }) {
        const zmzSticky = ref([]);
        const offsetTop = ref(null);
        const offsetHeight = ref(null);
        const offsetWidth = ref(null);

        nextTick(() => {
            offsetTop.value = zmzSticky.value.offsetTop;
            offsetHeight.value = zmzSticky.value.offsetHeight;
            offsetWidth.value = zmzSticky.value.offsetWidth;
            if (props.scrollTarget && document.querySelector(props.scrollTarget)) {
                document.querySelector(props.scrollTarget).addEventListener('scroll', onScroll);
            } else {
                window.addEventListener('scroll', onScroll);
            }
        });

        onUnmounted(() => {
            if (props.scrollTarget && document.querySelector(props.scrollTarget)) {
                document.querySelector(props.scrollTarget).removeEventListener('scroll', onScroll);
            } else {
                window.removeEventListener('scroll', onScroll);
            }
        });

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        // 滚动
        const onScroll = e => {
            let scrollTop = 0;
            if (props.scrollTarget && document.querySelector(props.scrollTarget)) {
                scrollTop = document.querySelector(props.scrollTarget).scrollTop;
            } else {
                scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            }

            const windowHeight = window.innerHeight;
            if (!model.value) return;
            // top
            if (scrollTop >= offsetTop.value - props.offsetTop && props.direction == 'top') {
                if (zmzSticky.value.firstChild) {
                    zmzSticky.value.firstChild.style.top = props.offsetTop + 'px';
                    zmzSticky.value.firstChild.style.width = offsetWidth.value + 'px';
                    zmzSticky.value.firstChild.style.position = 'fixed';
                    if (props.zIndex) {
                        zmzSticky.value.firstChild.style.zIndex = props.zIndex;
                    }
                }
                if (zmzSticky.value.lastChild) {
                    zmzSticky.value.lastChild.style.width = zmzSticky.value.firstChild.offsetWidth + 'px';
                    zmzSticky.value.lastChild.style.height = zmzSticky.value.firstChild.offsetHeight + 'px';
                    zmzSticky.value.lastChild.style.display = 'inline-block';
                }
                emit('on-change', true, props.direction);
            } else if (scrollTop < offsetTop.value - props.offsetTop && props.direction == 'top') {
                if (zmzSticky.value.firstChild) {
                    zmzSticky.value.firstChild.style.top = '';
                    zmzSticky.value.firstChild.style.width = '';
                    zmzSticky.value.firstChild.style.position = '';
                    if (props.zIndex) {
                        zmzSticky.value.firstChild.style.zIndex = '';
                    }
                }
                if (zmzSticky.value.lastChild) {
                    zmzSticky.value.lastChild.style.display = 'none';
                }
                emit('on-change', false, props.direction);
            }

            // bottom
            if (scrollTop + windowHeight >= offsetTop.value + offsetHeight.value + props.offsetBottom && props.direction == 'bottom') {
                if (zmzSticky.value.firstChild) {
                    zmzSticky.value.firstChild.style.bottom = props.offsetBottom + 'px';
                    zmzSticky.value.firstChild.style.width = offsetWidth.value + 'px';
                    zmzSticky.value.firstChild.style.position = 'fixed';
                    if (props.zIndex) {
                        zmzSticky.value.firstChild.style.zIndex = props.zIndex;
                    }
                }
                if (zmzSticky.value.lastChild) {
                    zmzSticky.value.lastChild.style.width = zmzSticky.value.firstChild.offsetWidth + 'px';
                    zmzSticky.value.lastChild.style.height = zmzSticky.value.firstChild.offsetHeight + 'px';
                    zmzSticky.value.lastChild.style.display = 'inline-block';
                }
                emit('on-change', true, props.direction);
            } else if (scrollTop < offsetTop.value + offsetHeight.value + props.offsetBottom && props.direction == 'bottom') {
                if (zmzSticky.value.firstChild) {
                    zmzSticky.value.firstChild.style.bottom = '';
                    zmzSticky.value.firstChild.style.width = '';
                    zmzSticky.value.firstChild.style.position = '';
                    if (props.zIndex) {
                        zmzSticky.value.firstChild.style.zIndex = '';
                    }
                }
                if (zmzSticky.value.lastChild) {
                    zmzSticky.value.lastChild.style.display = 'none';
                }
                emit('on-change', false, props.direction);
            }
            e.stopPropagation();
        };

        return {
            zmzSticky
        };
    }
};
</script>
