<template>
    <teleport :to="teleportDom" :disabled="!teleport" v-bind="$attrs">
        <div class="zmz-anchor" :style="[zmzAnchorStyle]" v-bind="$attrs">
            <div class="zmz-anchor__line">
                <div class="zmz-anchor__line__dot" ref="zmzAnchorLineDot" :style="[zmzAnchorLineDotStyle]"></div>
            </div>
            <slot></slot>
        </div>
    </teleport>
</template>
<script>
import { computed, provide, ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue';
import { nextZindex } from '../../../utils/zIndex.js';
export default {
    name: 'ZmzAnchor',
    props: {
        /**
         * 滚动容器
         */
        scrollTarget: {
            type: String,
            requre: ''
        },
        /**
         * 激活层
         */
        modelValue: {
            type: [String, Number],
            default: 0
        },
        /**
         * 是否穿梭
         */
        teleport: {
            type: Boolean,
            default: false
        },
        /**
         * 传送节点
         */
        teleportDom: {
            type: String,
            default: 'body'
        },
        /**
         * 模式
         */
        mode: {
            type: String,
            default: 'custom',
            validator(value) {
                return ['native', 'custom'].includes(value)
            }
        }
    },
    emits: ['on-change', 'update:modelValue'],
    setup(props, { emit }) {
        const { proxy } = getCurrentInstance();
        const zmzAnchorList = ref([])
        const zmzAnchorLineDot = ref(null)
        const zmzAnchorLineDotHeight = ref(0)
        const top = ref(0)
        const zIndex = ref(0)
        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val)
            }
        });

        // 滚动判断
        const scrollEvent = () => {
            let scrollTop = 0
            if (props.scrollTarget && document.querySelector(props.scrollTarget)) {
                scrollTop = document.querySelector(props.scrollTarget).scrollTop;
            } else {
                scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            }
            zmzAnchorList.value.forEach((item, index) => {
                if (document.getElementById(item.Instance.proxy.href) && (document.getElementById(item.Instance.proxy.href).offsetTop - document.getElementById(item.Instance.proxy.href).offsetHeight / 2 < scrollTop)) {
                    top.value = item.Instance.proxy.$el.offsetTop + item.Instance.proxy.$el.offsetHeight / 2
                    emit('on-change', index, top.value)
                }
            })
        }

        onUnmounted(() => {
            if (props.scrollTarget && document.querySelector(props.scrollTarget)) {
                document.querySelector(props.scrollTarget).removeEventListener('scroll', scrollEvent);
            } else {
                window.removeEventListener('scroll', scrollEvent);
            }
        })

        nextTick(() => {
            if (props.scrollTarget && document.querySelector(props.scrollTarget)) {
                document.querySelector(props.scrollTarget).addEventListener('scroll', scrollEvent);
            } else {
                window.addEventListener('scroll', scrollEvent);
            }
        })

        onMounted(() => {
            zmzAnchorList.value.forEach((item, index) => {
                item.Instance.proxy.index = index;
                if (index == model.value) {
                    top.value = item.Instance.proxy.$el.offsetTop + item.Instance.proxy.$el.offsetHeight / 2
                }
            })
            if (proxy.$zmzConfig) {
                zIndex.value = proxy.$zmzConfig.zIndex++;
            }
        })

        // 激活状态
        const zmzAnchorLineDotStyle = computed(() => {
            let params = {}
            params['top'] = top.value - zmzAnchorLineDotHeight.value / 2 + 'px'
            return params
        })

        // 公共样式
        const zmzAnchorStyle = computed(() => {
            let params = {};
            params['zIndex'] = nextZindex();
            return params
        })

        // 更新
        const updateDom = () => {
            if (!zmzAnchorLineDot.value) return
            zmzAnchorLineDotHeight.value = zmzAnchorLineDot.value.offsetHeight
        }

        provide('zmzAnchor', {
            zmzAnchorList: zmzAnchorList,
            updateDom: updateDom,
            scrollTarget: props.scrollTarget,
            mode: props.mode
        })


        return {
            zmzAnchorLineDotStyle,
            zmzAnchorLineDot,
            zmzAnchorStyle
        };
    }
};
</script>
