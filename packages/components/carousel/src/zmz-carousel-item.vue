<template>
    <div class="zmz-carousel__item" v-show="isReady" :style="[zmzCarouselItemStyle]" :class="[zmzCarouselItemClass]"
        @click.stop="handleItemClick">
        <slot></slot>
    </div>
</template>
<script>
import { computed, onMounted, getCurrentInstance, inject, onBeforeUnmount, ref } from 'vue';
export default {
    name: 'ZmzCarouselItem',
    props: {
        index: {
            type: Number
        }
    },
    setup(props) {
        const Instance = getCurrentInstance();
        const zmzCarousel = inject('zmzCarousel', {});
        const isActive = ref(false);
        const isNext = ref(false);
        const isPrev = ref(false);
        const scale = ref(1);
        const translate = ref(0);
        const isReady = ref(false);
        const isStage = ref(false);
        const isAnimat = ref(false);

        onMounted(() => {
            addDom()
            updateDom()
        })

        onBeforeUnmount(() => {
            removeDom()
            updateDom()
        })

        const addDom = () => {
            zmzCarousel.zmzCarouselList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateDom = () => {
            zmzCarousel.updateDom();
        }

        const removeDom = () => {
            if (zmzCarousel.zmzCarouselList.value && zmzCarousel.zmzCarouselList.value.length) {
                const index = zmzCarousel.zmzCarouselList.value.findIndex(item => item.id === Instance.uid);
                zmzCarousel.zmzCarouselList.value.splice(index, 1);
            }
        }

        const getNextIndex = (activeIndex, length) => {
            let nextIndex = activeIndex + 1

            if (nextIndex > length - 1) {
                return 0
            }

            return nextIndex;
        }

        const getPrevIndex = (activeIndex, length) => {
            let prevIndex = activeIndex - 1

            if (prevIndex < 0) {
                return length - 1
            }

            return prevIndex;
        }

        const getCurrentIndex = (index, activeIndex, length) => {
            if (activeIndex === 0 && index === length - 1) {
                return -1
            } else if (activeIndex === length - 1 && index === 0) {
                return length
            } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
                return length + 1
            } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
                return -2
            }

            return index
        }


        const setCardTranslate = (index, activeIndex) => {
            const distance = zmzCarousel.zmzCarouselWrapDistance.value;
            const scale = zmzCarousel.scale ? zmzCarousel.scale : (zmzCarousel.effect == 'card' ? 0.8 : 1);
            if (isStage.value) {
                return (distance * ((2 - scale) * (index - activeIndex) + 1)) / 4;
            } else if (index < activeIndex) {
                return (-(1 + scale) * distance) / 4;
            }

            return ((3 + scale) * distance) / 4;
        }

        const setTranslate = (index, activeIndex) => {
            const distance = zmzCarousel.zmzCarouselWrapDistance.value;
            return distance * (index - activeIndex);
        }

        const setCustomTranslate = (index, activeIndex, length) => {
            return zmzCarousel.effectTranslate ? zmzCarousel.effectTranslate(index, activeIndex, length) : setTranslate(index, activeIndex)
        }

        const setTranslateItem = (index, activeIndex, oldIndex) => {
            const length = zmzCarousel.zmzCarouselList.value.length;
            if (zmzCarousel.effect !== 'card' && oldIndex !== undefined) {
                isAnimat.value = index === activeIndex || index === oldIndex;
            }
            if (index !== activeIndex && length > 2 && zmzCarousel.loop) {
                index = getCurrentIndex(index, activeIndex, length);
            }

            isActive.value = index === activeIndex;
            isPrev.value = props.index === getPrevIndex(activeIndex, length)
            isNext.value = props.index === getNextIndex(activeIndex, length)

            if (zmzCarousel.effect === 'card') {
                isStage.value = Math.round(Math.abs(index - activeIndex)) <= 1;
                translate.value = setCardTranslate(index, activeIndex);
            } else if (zmzCarousel.effect === 'fade') {
                translate.value = 0;
            } else if (zmzCarousel.effect === 'custom') {
                translate.value = setCustomTranslate(index, activeIndex, length);
            } else {
                translate.value = setTranslate(index, activeIndex);
            }

            scale.value = isActive.value ? (zmzCarousel.activeScale ? zmzCarousel.activeScale : 1) : (zmzCarousel.scale ? zmzCarousel.scale : (zmzCarousel.effect == 'card' ? 0.8 : 1));

            isReady.value = true;
        }

        const handleItemClick = () => {
            if (zmzCarousel.effect === 'card') {
                zmzCarousel.setActiveItemPosition(props.index);
            }
        }

        const zmzCarouselItemStyle = computed(() => {
            let params = {}
            const translateType = zmzCarousel.isVertical.value ? 'translateY' : 'translateX';
            params['transform'] = `${translateType}(${translate.value}px) scale(${scale.value})`;
            return params
        })

        const zmzCarouselItemClass = computed(() => {
            let params = []
            if (isActive.value) {
                params.push('zmz-carousel__item--active')
            }


            if (isNext.value) {
                params.push('zmz-carousel__item--next')
            }

            if (isPrev.value) {
                params.push('zmz-carousel__item--prev')
            }

            return params
        })

        return {
            zmzCarouselItemStyle,
            zmzCarouselItemClass,
            handleItemClick,
            setTranslateItem,
            isReady
        };
    }
};
</script>
