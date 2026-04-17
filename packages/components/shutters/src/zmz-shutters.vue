<template>
    <div class="zmz-shutters" ref="zmzShutters" :style="[zmzShuttersStyle]" @mouseout="handleMouseOut"
        @mouseover="handleMounseOver">
        <slot></slot>
    </div>
</template>
<script>
import { computed, ref, provide, nextTick } from 'vue';
import { unitDefaultCompletion } from '../../../utils/unit.js'
export default {
    name: 'ZmzShutters',
    componentName: 'ZmzShutters',
    props: {
        /**
         * 宽度
         */
        height: {
            type: [Number, String],
            default: 200
        },
        /**
         * 高度
         */
        width: [Number, String],
        /**
         * 激活
         */
        modelValue: {
            type: Number,
            default: -1
        },
        /**
         * 展开宽度
         */
        expandWidth: {
            type: Number,
            default: 0
        },
    },
    emits: ['update:modelValue', 'on-mouseout', 'on-mouseover', 'on-item-mouseout', 'on-item-mouseover', 'on-expand'],
    setup(props, { emit }) {
        const zmzShutters = ref(null);
        const zmzShuttersItemList = ref([]);
        const zmzShuttersItemDefaultWidth = ref(unitDefaultCompletion(props.width));
        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val)
            }
        })

        // 更新
        const updateDom = () => {
            zmzShuttersItemList.value.forEach((item, index) => {
                item.instance.proxy.index = index;
            })
            animateCommon()
        }

        // 公共动画
        const animateCommon = () => {
            nextTick(() => {
                if (zmzShutters.value) {
                    let expandWidth = 0;
                    let totalWidthOpen;
                    let totalWidthClose;
                    let zmzShuttersDom = zmzShutters.value.getBoundingClientRect()
                    if (props.expandWidth && zmzShuttersItemList.value.length > 1) {
                        expandWidth = props.expandWidth;
                        totalWidthOpen = (zmzShuttersDom.width - props.expandWidth) / (zmzShuttersItemList.value.length - 1);
                        totalWidthClose = zmzShuttersDom.width / zmzShuttersItemList.value.length;
                    } else {
                        totalWidthOpen = zmzShuttersDom.width / zmzShuttersItemList.value.length;
                        totalWidthClose = zmzShuttersDom.width / zmzShuttersItemList.value.length;
                        expandWidth = totalWidthClose;
                    }

                    zmzShuttersItemList.value.forEach((item, index) => {
                        if (model.value === -1) {
                            item.instance.proxy.width = totalWidthClose + 'px';
                        } else {
                            if (model.value !== index) {
                                item.instance.proxy.width = totalWidthOpen + 'px';
                            } else {
                                item.instance.proxy.width = expandWidth + 'px';
                            }
                        }
                    });
                }
            })
        }

        // 滑出父级
        const handleMouseOut = () => {
            model.value = -1
            animateCommon()
            emit('on-mouseout')
        }

        // 滑入父级
        const handleMounseOver = () => {
            emit('on-mouseover')
        }

        // 滑出子集
        const handleItemMouseout = (index) => {
            emit('on-item-mouseout', index)
            emit('on-expand', index)
        }

        // 滑入子集
        const handleItemMouseover = (index) => {
            model.value = index
            animateCommon()
            emit('on-item-mouseover', index)
            emit('on-expand', index)
        }

        const zmzShuttersStyle = computed(() => {
            let params = {}
            if (props.height) {
                params['height'] = unitDefaultCompletion(props.height)
            }

            if (props.width) {
                params['width'] = unitDefaultCompletion(props.width)
            }
            return params
        })


        provide('zmzShutters', {
            width: zmzShuttersItemDefaultWidth.value,
            height: unitDefaultCompletion(props.height),
            expand: props.expand,
            zmzShuttersItemList: zmzShuttersItemList,
            updateDom: updateDom,
            handleItemMouseout: handleItemMouseout,
            handleItemMouseover: handleItemMouseover,
            model: model
        })

        return {
            zmzShutters,
            zmzShuttersStyle,
            handleMouseOut,
            handleMounseOver
        };
    }
};
</script>
