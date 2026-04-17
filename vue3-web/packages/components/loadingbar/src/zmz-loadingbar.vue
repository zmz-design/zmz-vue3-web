<template>
    <teleport :to="teleportDom" :disabled="!teleport" v-bind="$attrs">
        <div class="zmz-loadingbar" ref="zmzLoadingbar" v-show="currentVisible" :class="[teleportClass]">
            <div class="zmz-loadingbar__bar" :class="[zmzLoadingbarBarClass]" :style="[zmzLoadingbarBarStyle]"></div>
            <div class="zmz-loadingbar__spinner">
                <div class="zmz-loadingbar__spinner__icon" :class="[zmzLoadingbarSpinnerIconClass]"
                    :style="[zmzLoadingbarSpinnerIconStyle]">
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import { computed, ref, nextTick, watch } from 'vue';
import { nextZindex } from '../../../utils/zIndex.js';
export default {
    name: 'ZmzLoadingbar',
    props: {
        /**
         * 是否穿梭
         */
        teleport: {
            type: Boolean,
            default: true
        },
        /**
         * 穿梭节点
         */
        teleportDom: {
            type: String,
            default: 'body'
        },
        /**
         * 穿梭节点
         */
        teleportClass: [String, Array],
        /**
         * 显示
         */
        visible: {
            type: Boolean,
            default: true
        },
        /**
         * 总进度
         */
        totalProgress: {
            type: Number,
            default: 0
        },
        /**
         * 速度
         */
        speed: {
            type: Number,
            default: 5
        },
        /**
         * spinner加载动画
         */
        easing: {
            type: String,
            default: 'linear'
        },
        /**
         * 每次前进的百分比
         */
        percent: {
            type: Number,
            default: 0
        },
        /**
         * 颜色
         */
        color: {
            type: String,
            default: 'linear'
        },
        /**
         *  错误
         */
        error: {
            type: Boolean,
            default: false
        },
    },
    setup(props) {
        const currentVisible = ref(false);
        const zmzLoadingbar = ref(null);

        const zmzLoadingbarBarClass = computed(() => {
            let params = []
            if (props.error) {
                params.push('zmz-loadingbar__bar--error')
            }
            return params;
        })

        const zmzLoadingbarBarStyle = computed(() => {
            let params = {}
            if (props.color) {
                params['background'] = props.color
            }

            if (props.totalProgress) {
                params['width'] = props.totalProgress + '%'
            }

            return params;
        })

        const setZindex = () => {
            nextTick(() => {
                if (zmzLoadingbar.value) {
                    zmzLoadingbar.value.style['z-index'] = nextZindex();
                }
            })
        }

        watch(() => props.visible, (val) => {
            currentVisible.value = val
        }, {
            immediate: true
        })

        const zmzLoadingbarSpinnerIconStyle = computed(() => {
            let params = {}
            if (props.color) {
                params['border-top-color'] = props.color
                params['border-left-color'] = props.color
            }

            if (props.easing) {
                params['animation'] = 'zmz-loadingbar-spinner 500ms ' + props.easing + ' infinite'
            }

            return params
        })

        const zmzLoadingbarSpinnerIconClass = computed(() => {
            let params = []

            if (props.error) {
                params.push('zmz-loadingbar__spinner__icon--error')
            }

            return params
        })

        return {
            zmzLoadingbarBarClass,
            zmzLoadingbarBarStyle,
            zmzLoadingbar,
            setZindex,
            currentVisible,
            zmzLoadingbarSpinnerIconStyle,
            zmzLoadingbarSpinnerIconClass
        };
    }
};
</script>
