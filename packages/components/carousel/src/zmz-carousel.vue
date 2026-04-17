<template>
    <div class="zmz-carousel" @mouseleave="handleMouseleave" @mouseenter="handleMouseenter" :style="[zmzCarouselStyle]"
        :class="[zmzCarouselClass]">
        <div class="zmz-carousel__wrap" ref="zmzCarouselWrap" :style="[zmzCarouselWrapStyle]">
            <transition :name="mode == 'horizontal' ? 'zmz-carousel-arrow-left' : 'zmz-carousel-arrow-top'">
                <div class="zmz-carousel__arrow zmz-carousel__arrow--prev" :class="[zmzCarouselArrowLeftClass]"
                    @click.stop="handleBtnPrev" v-show="isArrow">
                    <i class="zmz-carousel__arrow__icon zmz-icon--arrow-left"></i>
                </div>
            </transition>
            <transition :name="mode == 'horizontal' ? 'zmz-carousel-arrow-right' : 'zmz-carousel-arrow-bottom'">
                <div class="zmz-carousel__arrow zmz-carousel__arrow--next" :class="[zmzCarouselArrowRightClass]"
                    @click.stop="handleBtnNext" v-show="isArrow">
                    <i class="zmz-carousel__arrow__icon zmz-icon--arrow-right"></i>
                </div>
            </transition>
            <slot></slot>
        </div>
        <div class="zmz-carousel__indicator" ref="zmzCarouselIndicator" :class="[zmzCarouselDotClass]"
            v-if="indicator !== 'none'">
            <div class="zmz-carousel__indicator__item"
                :class="{ 'zmz-carousel__indicator__item__active': index === activeIndex }"
                v-for="(item, index) in zmzCarouselList" :key="index" @mouseenter="handleDotMouseenter(index)"
                @click.stop="handleDotClick(index)">
                <span class="zmz-carousel__indicator__item__inner"></span>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, onMounted, onUnmounted, provide, ref, nextTick, watch } from 'vue';
import mixin from '../../../utils/mixin.js';
import { unitDefaultCompletion } from '../../../utils/unit.js';
export default {
    name: 'ZmzCarousel',
    props: {
        /**
         * 激活层
         */
        modelValue: {
            type: Number,
            default: 0
        },
        /**
         * 高度
         */
        height: {
            type: [Number, String],
            default: 0
        },
        /**
         * 点位置
         */
        indicator: {
            type: String,
            default: 'inside',
            validator(value) {
                return ['none', 'outside', 'inside'].includes(value);
            }
        },
        /**
         * 指示器触发
         */
        trigger: {
            type: String,
            default: 'click',
            validator(value) {
                return ['click', 'hover'].includes(value);
            }
        },
        /**
         * 箭头
         */
        arrow: {
            type: String,
            default: 'hover',
            validator(value) {
                return ['always', 'hover', 'never'].includes(value);
            }
        },
        /**
         * 自动轮播
         */
        autoplay: {
            type: Boolean,
            default: false
        },
        /**
         * 循环
         */
        loop: {
            type: Boolean,
            default: false
        },
        /**
         * 过度时间
         */
        delay: {
            type: Number,
            default: 3000
        },
        /**
         * 模式
         */
        mode: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].includes(value);
            }
        },
        /**
         * 效果
         */
        effect: {
            type: String,
            default: 'slide',
            validator(value) {
                return ['slide', 'card', 'fade', 'custom'].includes(value);
            }
        },
        /**
         * 默认缩放
         */
        scale: Number,
        /**
         * 激活缩放
         */
        activeScale: Number,
        /**
         * 自定义效果
         */
        effectTranslate: Function,
        /**
         * 可滑动
         */
        swipeable: {
            type: Boolean,
            default: true
        }
    },
    emits: ['on-change', 'update:modelValue'],
    setup(props, { emit }) {
        const { isMobile } = mixin();
        const zmzCarousel = ref(null)
        const itemWidth = ref(0);
        const itemHeight = ref(0);
        const transitionStyle = ref(null);
        const transformStyle = ref(null);
        const zmzCarouselWrap = ref(null);
        const timer = ref(null);
        const zmzCarouselList = ref([]);
        const zmzCarouselIndex = ref(1)
        const activeIndex = ref(-1);
        const delay = ref(3000);
        const isMove = ref(false);
        const moveXY = ref(0);
        const startXY = ref(0);
        const distanceXY = ref(0);
        const arrow = ref(false);
        const zmzCarouselIndicator = ref(null);

        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val)
            }
        });

        onMounted(() => {
            nextTick(() => {
                if (model.value < zmzCarouselList.value.length && model.value >= 0) {
                    activeIndex.value = model.value
                }

                handleStartTimer();
                if (zmzCarouselWrap.value && props.swipeable) {
                    zmzCarouselWrap.value.addEventListener('mousedown', handleMouseDown);
                    zmzCarouselWrap.value.addEventListener('mousemove', handleMouseMove);
                    zmzCarouselWrap.value.addEventListener('mouseup', handleMouseUp);
                    zmzCarouselWrap.value.addEventListener('mouseleave', handleMouseUp);
                    zmzCarouselWrap.value.addEventListener('touchstart', handleMouseDown);
                    zmzCarouselWrap.value.addEventListener('touchmove', handleMouseMove);
                    zmzCarouselWrap.value.addEventListener('touchend', handleMouseUp);
                }
                window.addEventListener('resize', handleResize);
                document.addEventListener('visibilitychange', handleVisibilityChange);
            });
        })

        onUnmounted(() => {
            handleClearTimer()
            if (zmzCarouselWrap.value && props.swipeable) {
                zmzCarouselWrap.value.removeEventListener('mousedown', handleMouseDown);
                zmzCarouselWrap.value.removeEventListener('mousemove', handleMouseMove);
                zmzCarouselWrap.value.removeEventListener('mouseup', handleMouseUp);
                zmzCarouselWrap.value.removeEventListener('mouseleave', handleMouseUp);
                zmzCarouselWrap.value.removeEventListener('touchstart', handleMouseDown);
                zmzCarouselWrap.value.removeEventListener('touchmove', handleMouseMove);
                zmzCarouselWrap.value.removeEventListener('touchend', handleMouseUp);
            }
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('resize', handleResize);
        });

        const handleResize = () => {
        };

        const isVertical = computed(() => props.mode === 'vertical');

        const zmzCarouselWrapDistance = computed(() => {
            return zmzCarouselWrap.value[isVertical.value ? 'offsetHeight' : 'offsetWidth']
        });

        // 按下
        const handleMouseDown = e => {
            if (!isMove.value) {
                pauseEvent(e);
                handleClearTimer();
                let client = isVertical.value ? 'clientY' : 'clientX'
                startXY.value = isMobile() ? e.touches[0][client] : e[client]
                isMove.value = true;
            }
        };

        // 移动
        const handleMouseMove = e => {
            if (isMove.value) {
                pauseEvent(e);
                let client = isVertical.value ? 'clientY' : 'clientX'
                moveXY.value = isMobile() ? e.touches[0][client] : e[client]
                distanceXY.value = moveXY.value - startXY.value;
            }
        };

        // 抬起
        const handleMouseUp = e => {
            if (isMove.value) {
                pauseEvent(e);
                if (isMove.value && Math.abs(distanceXY.value) > zmzCarouselWrapDistance.value / 3) {
                    if (distanceXY.value > 0) {
                        //上一张
                        setActiveItemPosition(activeIndex.value - 1)
                    } else {
                        //下一张
                        setActiveItemPosition(activeIndex.value + 1)
                    }
                }
                isMove.value = false;
                startXY.value = 0;
                moveXY.value = 0;
                distanceXY.value = 0;
            }
        };

        const pauseEvent = e => {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        };

        const handleVisibilityChange = () => {
            let visibilityState = document.visibilityState;
            if (visibilityState === 'visible') {
                // 打开标签
                handleResetTimer();
            }
            if (visibilityState === 'hidden') {
                // 切换标签
                handleClearTimer();
            }
        };

        // 移入点
        const handleDotMouseenter = (index) => {
            if (props.trigger === 'click') return
            activeIndex.value = index;
        }

        // 指示点点击
        const handleDotClick = index => {
            if (props.trigger === 'hover') return
            activeIndex.value = index;
        };

        // 移出
        const handleMouseleave = () => {
            arrow.value = false
            handleStartTimer();
        };

        // 移入
        const handleMouseenter = () => {
            arrow.value = true
            handleClearTimer();
        };

        // 上一页
        const handleBtnPrev = () => {
            if (!props.loop && activeIndex.value === 0) return;
            setActiveItemPosition(activeIndex.value - 1)
        };

        // 下一页
        const handleBtnNext = () => {
            if (!props.loop && activeIndex.value === zmzCarouselList.value.length - 1) return;
            setActiveItemPosition(activeIndex.value + 1)
        };

        watch(() => zmzCarouselList.value, (newVal) => {
            if (newVal.length > 0) setActiveItemPosition(model.value)
        })

        watch(() => activeIndex.value, (newVal, oldVal) => {
            updateItemPosition(oldVal);
            model.value = newVal
            if (oldVal > -1) {
                emit('on-change', newVal, oldVal);
            }
        })

        watch(() => props.autoplay, (newVal) => {
            newVal ? handleStartTimer() : handleClearTimer();
        })

        watch(() => props.delay, () => {
            handleResetTimer();
        })

        const handleClearTimer = () => {
            if (timer.value) {
                clearInterval(timer.value);
                timer.value = null;
            }
        }

        const updateItemPosition = (oldIndex) => {
            zmzCarouselList.value.forEach((item, index) => {
                item.instance.proxy.setTranslateItem(index, activeIndex.value, oldIndex);
            });
        }

        const setActiveItemPosition = (index) => {
            index = Number(index);
            if (isNaN(index) || index !== Math.floor(index)) {
                console.warn('[ZMZ-UI Warn][zmz-carousel]index must be an integer.');
                return;
            }
            let length = zmzCarouselList.value.length;
            const oldIndex = activeIndex.value;
            if (index < 0) {
                activeIndex.value = props.loop ? length - 1 : 0;
            } else if (index >= length) {
                activeIndex.value = props.loop ? 0 : length - 1;
            } else {
                activeIndex.value = index;
            }
            if (oldIndex === activeIndex.value) {
                updateItemPosition(oldIndex);
            }
            handleResetTimer();
        }

        const handleStartTimer = () => {
            if (!props.autoplay || timer.value) return
            timer.value = setInterval(playSlides, delay.value)
        }

        const playSlides = () => {
            if (activeIndex.value < zmzCarouselList.value.length - 1) {
                activeIndex.value++;
            } else {
                activeIndex.value = 0;
            }
        }

        const handleResetTimer = () => {
            handleClearTimer();
            handleStartTimer();
        }

        // 公共样式
        const zmzCarouselStyle = computed(() => {
            let params = {}
            return params
        })

        // 公共类名
        const zmzCarouselClass = computed(() => {
            let params = []
            if (props.mode) {
                params.push(`zmz-carousel--${props.mode}`);
            }

            if (props.effect) {
                params.push(`zmz-carousel--${props.effect}`);
            }
            return params
        })

        // 公共类名
        const zmzCarouselWrapStyle = computed(() => {
            let params = {}
            if (props.height) {
                params['height'] = unitDefaultCompletion(props.height)
            }
            return params
        })

        // 箭头
        const isArrow = computed(() => {
            let params = false
            if (props.arrow === 'never') {
                params = false
            } else if (props.arrow === 'always') {
                params = true
            } else if (props.arrow === 'hover' && arrow.value) {
                params = true
            }
            return params
        })

        // 点类名
        const zmzCarouselDotClass = computed(() => {
            let params = [];
            if (props.indicator) {
                params.push(`zmz-carousel__indicator--${props.indicator}`);
            }
            return params;
        });

        // 箭头按钮样式
        const zmzCarouselArrowLeftClass = computed(() => {
            let params = [];
            if (activeIndex.value === 0 && !props.loop) {
                params.push(`zmz-carousel__arrow--disabled`);
            }
            return params;
        });

        // 箭头按钮样式
        const zmzCarouselArrowRightClass = computed(() => {
            let params = [];
            if (activeIndex.value === zmzCarouselList.value.length - 1 && !props.loop) {
                params.push(`zmz-carousel__arrow--disabled`);
            }
            return params;
        });


        const updateDom = () => {
            zmzCarouselList.value.forEach((item, index) => {
                item.instance.props.index = index;
            });
        }

        provide('zmzCarousel', {
            zmzCarouselList: zmzCarouselList,
            width: itemWidth,
            height: itemHeight,
            updateDom: updateDom,
            zmzCarouselIndex: zmzCarouselIndex,
            loop: props.loop,
            zmzCarousel: zmzCarousel,
            effect: props.effect,
            scale: props.scale,
            activeScale: props.activeScale,
            isVertical: isVertical,
            zmzCarouselWrapDistance: zmzCarouselWrapDistance,
            effectTranslate: props.effectTranslate,
            setActiveItemPosition: setActiveItemPosition
        });

        return {
            zmzCarouselList,
            transitionStyle,
            transformStyle,
            handleBtnNext,
            handleBtnPrev,
            zmzCarouselWrap,
            handleMouseleave,
            handleMouseenter,
            handleDotClick,
            itemWidth,
            zmzCarouselDotClass,
            zmzCarouselStyle,
            zmzCarouselWrapStyle,
            zmzCarouselIndex,
            activeIndex,
            handleDotMouseenter,
            isArrow,
            zmzCarouselArrowLeftClass,
            zmzCarouselArrowRightClass,
            zmzCarouselClass,
            zmzCarousel,
            zmzCarouselIndicator
        };
    }
};
</script>
