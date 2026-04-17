<template>
    <div class="zmz-split" :class="[zmzSplitClass]" ref="zmzSplit">
        <template v-if="isHorizontal">
            <template v-if="$slots.left">
                <div class="zmz-split__left zmz-split__panel" :style="[splitPanelOne]">
                    <slot name="left"></slot>
                </div>
            </template>
            <div v-if="showSplitBtn" class="zmz-split__dragbtn" @mousedown="mousedownhandle"
                :style="[zmzSplitDragbtnStyle]" ref="zmzSplitDragbtn">
                <slot name="split">
                    <div class="zmz-split__dragbtn__icon"></div>
                </slot>
            </div>
            <template v-if="$slots.right">
                <div class="zmz-split__right zmz-split__panel" :style="[splitPanelTwo]">
                    <slot name="right"></slot>
                </div>
            </template>
        </template>
        <template v-else>
            <template v-if="$slots.top">
                <div class="zmz-split__top zmz-split__panel" :style="[splitPanelOne]">
                    <slot name="top"></slot>
                </div>
            </template>
            <div v-if="showSplitBtn" class="zmz-split__dragbtn" @mousedown="mousedownhandle"
                :style="[zmzSplitDragbtnStyle]" ref="zmzSplitDragbtn">
                <slot name="split">
                    <div class="zmz-split__dragbtn__icon"></div>
                </slot>
            </div>
            <template v-if="$slots.bottom">
                <div class="zmz-split__bottom zmz-split__panel" :style="[splitPanelTwo]">
                    <slot name="bottom"></slot>
                </div>
            </template>
        </template>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
export default {
    name: 'ZmzSplit',
    props: {
        /**
         * 模式
         */
        mode: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['vertical', 'horizontal'].includes(value);
            }
        },
        /**
         * 绑定
         */
        modelValue: {
            type: Number,
            default: 50
        },
        /**
         * 最小值
         */
        min: {
            type: Number,
            default: 10
        },
        /**
         * 最大值
         */
        max: {
            type: Number,
            default: 90
        },
        /**
         * 最大值
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 是否显示分割
         */
        showSplitBtn: {
            type: Boolean,
            default: true
        }
    },
    emits: ['update:modelValue', 'on-drag'],
    setup(props, { emit }) {
        const zmzSplit = ref(null);
        const zmzSplitDragbtn = ref(null);
        const isMove = ref(false);
        const xNum = ref(0);
        const yNum = ref(0);

        // 公共类名
        const zmzSplitClass = computed(() => {
            let params = []
            if (props.mode) {
                params.push(`zmz-split--${props.mode}`);
            }

            if (props.disabled) {
                params.push('zmz-split--disabled');
            }

            return params;
        });

        const model = computed({
            get() {
                return props.modelValue
            },
            set(value) {
                emit('update:modelValue', value)
            }
        })

        // 是否水平
        const isHorizontal = computed(() => {
            return props.mode === 'horizontal';
        })

        // 监听按下
        const mousedownhandle = (event) => {
            if (props.disabled) return
            var e = event || window.event;
            if (isHorizontal.value) {
                xNum.value = e.clientX - zmzSplitDragbtn.value?.offsetLeft - zmzSplitDragbtn.value?.offsetWidth / 2;
            } else {
                yNum.value = e.clientY - zmzSplitDragbtn.value?.offsetTop - zmzSplitDragbtn.value?.offsetHeight / 2;
            }
            isMove.value = true
            emit('on-drag', 'start', event)
            pauseEvent(event)
        }

        // 监听移动
        document.addEventListener('mousemove', function (event) {
            if (isMove.value) {
                var e = event || window.event;
                var oldModel = model.value;
                var moveX = 0, moveY = 0;
                if (isHorizontal.value) {
                    moveX = e.clientX - xNum.value; //得到距离左边移动距离   
                } else {
                    moveY = e.clientY - yNum.value; //得到距离上边移动距离
                }

                //可移动最大距离
                if (isHorizontal.value) {
                    oldModel = (moveX / zmzSplit.value?.offsetWidth) * 100;
                } else {
                    oldModel = (moveY / zmzSplit.value?.offsetHeight) * 100;
                }

                if (oldModel > props.max) {
                    oldModel = 90
                } else if (oldModel < props.min) {
                    oldModel = 10
                } else {
                    oldModel = parseInt(oldModel)
                }
                model.value = oldModel
                emit('on-drag', 'move', event)
                pauseEvent(event)
            }
        })

        document.addEventListener('mouseup', function (e) {
            isMove.value = false
            emit('on-drag', 'end', e)
            pauseEvent(e)
        })

        document.addEventListener('mouseleave', function (e) {
            isMove.value = false
            pauseEvent(e)
        })


        // 拖拽左
        const splitPanelOne = computed(() => {
            let params = {}
            if (isHorizontal.value) {
                params['right'] = (100 - model.value) + '%'
            } else {
                params['bottom'] = (100 - model.value) + '%'
            }
            return params
        })

        // 拖拽右
        const splitPanelTwo = computed(() => {
            let params = {}
            if (isHorizontal.value) {
                params['left'] = model.value + '%'
                params['padding-left'] = zmzSplitDragbtn.value?.offsetWidth + 'px'
            } else {
                params['top'] = model.value + '%'
                params['padding-top'] = zmzSplitDragbtn.value?.offsetHeight + 'px'
            }
            return params
        })

        // 拖拽按钮
        const zmzSplitDragbtnStyle = computed(() => {
            let params = {}
            if (isHorizontal.value) {
                params['left'] = model.value + '%'
            } else {
                params['top'] = model.value + '%'
            }
            return params
        })

        // 阻止默认事件
        const pauseEvent = e => {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        };

        return {
            model,
            splitPanelOne,
            splitPanelTwo,
            zmzSplitDragbtn,
            zmzSplit,
            zmzSplitDragbtnStyle,
            mousedownhandle,
            zmzSplitClass,
            isHorizontal
        };
    }
};
</script>