<template>
    <div class="zmz-anchor__item" ref="zmzAnchorItem">
        <div class="zmz-anchor__item__link" @click="goAnchor(href, index)" v-if="hashOrhistory" :style="itemStyle">
            <slot>{{ title }}</slot>
        </div>
        <a class="zmz-anchor__item__link" :href="href" v-else :style="itemStyle">
            <slot>{{ title }}</slot>
        </a>
    </div>
</template>
<script>
import { computed, getCurrentInstance, inject, onMounted, defineComponent, ref, onBeforeUnmount } from 'vue';
import { unitDefaultCompletion } from '../../../utils/unit.js';
export default defineComponent({
    name: 'ZmzAnchorItem',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            requre: ''
        },
        /**
         * 目标id
         */
        href: {
            type: String,
            default: ''
        },
        /**
         * 偏移
         */
        offset: {
            type: [String, Number],
            default: ''
        },
    },
    setup(props) {
        const Instance = getCurrentInstance();
        const zmzAnchor = inject('zmzAnchor', {});
        const index = ref(0);
        const zmzAnchorItem = ref(null);
        const hashOrhistory = computed(() => {
            return zmzAnchor.mode === 'custom'
        })

        // 跳转锚点
        const goAnchor = (selector) => {
            let scrollTop = 0;
            let top = 0;
            if (zmzAnchor.scrollTarget && document.querySelector(zmzAnchor.scrollTarget)) {
                if (zmzAnchor.scrollTarget) {
                    scrollTop = document.querySelector(zmzAnchor.scrollTarget).scrollTop;
                } else {
                    scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                }

                if (typeof selector === 'number') {
                    top = selector - scrollTop;
                } else {
                    const anchor = document.getElementById(selector) || { offsetTop: 0 };
                    top = anchor.offsetTop - scrollTop;
                }

                if (zmzAnchor.scrollTarget) {
                    document.querySelector(zmzAnchor.scrollTarget).scrollBy({ top, behavior: 'smooth' })
                } else {
                    window.scrollBy({ top, behavior: 'smooth' })
                }
            } else {
                console.error('警告:scrollTarget参数不是滚动目标节点，请检查！')
            }

        }

        const itemStyle = computed(() => {
            let params = {}
            if (props.offset) {
                params['padding-left'] = unitDefaultCompletion(props.offset)
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
            zmzAnchor.zmzAnchorList.value.push({
                uid: Instance.uid,
                Instance: Instance
            });
        }

        const updateDom = () => {
            zmzAnchor.updateDom();
        }

        const removeDom = () => {
            if (zmzAnchor.zmzAnchorList.value && zmzAnchor.zmzAnchorList.value.length) {
                const index = zmzAnchor.zmzAnchorList.value.findIndex(item => item.uid === Instance.uid);
                zmzAnchor.zmzAnchorList.value.splice(index, 1);
            }
        }

        return {
            goAnchor,
            hashOrhistory,
            index,
            zmzAnchorItem,
            itemStyle
        };
    }
});
</script>
