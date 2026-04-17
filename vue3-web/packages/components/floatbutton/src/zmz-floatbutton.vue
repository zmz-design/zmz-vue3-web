<template>
    <div ref="zmzFloatbutton" class="zmz-floatbutton" :style="[zmzFloatbuttonStyle]" :class="[zmzFloatbuttonClass]">
        <!-- 展开菜单 -->
        <template v-if="$slots.default">
            <transition name="zmz-fade-bottom">
                <div v-if="innerValue" ref="zmzFloatbuttonGroup" class="zmz-floatbutton__menu">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <!-- 主按钮 -->
        <div class="zmz-floatbutton__button" :class="[zmzFloatbuttonButtonClass]" ref="zmzFloatbuttonButton"
            @mousedown="startDrag" @touchstart="startDrag" @contextmenu.prevent="handleRightMenu">
            <template v-if="group">
                <slot></slot>
            </template>
            <template v-else>
                <slot name="button">
                    <zmz-floatbutton-item @click.prevent="handleClick"><i
                            class="zmz-icon--menu-1"></i></zmz-floatbutton-item>
                </slot>
            </template>
        </div>
    </div>
</template>

<script>
import { computed, nextTick, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import ZmzFloatbuttonItem from './zmz-floatbutton-item';

export default {
    name: 'ZmzFloatbutton',
    components: { ZmzFloatbuttonItem },
    props: {
        /** 是否吸附到边缘 */
        adsorption: {
            type: Boolean,
            default: false
        },
        /** 开启组模式 */
        group: {
            type: Boolean,
            default: false
        },
        /** 禁用按钮 */
        disabled: {
            type: Boolean,
            default: false
        },
        /** 禁用按钮 */
        drag: {
            type: Boolean,
            default: false
        },
        /** 按钮类型 */
        type: {
            type: String,
            default: 'default',
            validator: (value) => ['success', 'warning', 'error', 'primary', 'default', 'info'].includes(value)
        },
        /** 按钮形状 */
        shape: {
            type: String,
            default: 'circle',
            validator: (value) => ['circle', 'square'].includes(value)
        },
        offset: {
            type: [Number, String],
            default: 20,
            validator: (val) => {
                const num = typeof val === 'string' ? parseFloat(val) : val;
                return !isNaN(num) && num >= 0;
            }
        },
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit, slots }) {
        const zmzFloatbutton = ref(null);
        const zmzFloatbuttonButton = ref(null);
        const zmzFloatbuttonGroup = ref(null);
        const innerValue = ref(false);
        const isDragging = ref(false);
        const isDragActive = ref(false);
        const isTransition = ref(false);
        const isDragEnd = ref(false);

        const startX = ref(0);
        const startY = ref(0);
        const offsetX = ref(0);
        const offsetY = ref(0);

        const position = reactive({
            left: 'auto',
            top: 'auto',
            right: '20px',
            bottom: '20px'
        });

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(value) {
                emit('update:modelValue', value);

            }
        })

        watch(
            () => model.value,
            (newVal) => {
                innerValue.value = newVal;
            },
            { immediate: true }
        );

        const getDragPadding = () => {
            return typeof props.offset === 'string'
                ? parseFloat(props.offset)
                : props.offset;
        };

        const initPosition = async () => {
            await nextTick();
            if (!zmzFloatbutton.value) return;
            const padding = getDragPadding();
            position.left = 'auto';
            position.top = 'auto';
            position.right = Math.max(padding, 20) + 'px';
            position.bottom = Math.max(padding, 20) + 'px';

            if (props.adsorption) snapToEdge();
        };

        const startDrag = (e) => {
            if (e.button !== 2) return;
            if (props.disabled) return;
            e.preventDefault();
            const buttonDom = zmzFloatbutton.value;
            if (!buttonDom) return;

            const touch = e.type === 'touchstart' ? e.touches[0] : e;
            const clientX = touch.clientX;
            const clientY = touch.clientY;

            const buttonRect = buttonDom.getBoundingClientRect();

            offsetX.value = clientX - buttonRect.left;
            offsetY.value = clientY - buttonRect.top;

            startX.value = clientX;
            startY.value = clientY;

            isDragging.value = true;
            isDragActive.value = false
            isDragEnd.value = false;
            closeExpand(); // 拖拽时自动关闭展开的菜单
        };

        const handleDrag = (e) => {
            if (props.disabled) return
            if (!props.drag) return;
            if (!isDragging.value) return

            const touch = e.type === 'touchmove' ? e.touches[0] : e;
            const currentX = touch.clientX;
            const currentY = touch.clientY;

            const deltaX = Math.abs(currentX - startX.value);
            const deltaY = Math.abs(currentY - startY.value);

            if ((deltaX > 5 || deltaY > 5)) {
                isDragActive.value = true;
                e.preventDefault();
            }

            if (isDragActive.value) {
                const buttonDom = zmzFloatbutton.value;
                if (!buttonDom) return;

                const buttonRect = buttonDom.getBoundingClientRect();
                const padding = getDragPadding();
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;

                let targetLeft = currentX - offsetX.value;
                let targetTop = currentY - offsetY.value;

                const maxLeft = screenWidth - buttonRect.width - padding;
                targetLeft = Math.max(padding, Math.min(maxLeft, targetLeft));

                const maxTop = screenHeight - buttonRect.height - padding;
                targetTop = Math.max(padding, Math.min(maxTop, targetTop));

                position.left = `${targetLeft}px`;
                position.top = `${targetTop}px`;
                position.right = 'auto';
                position.bottom = 'auto';

                isTransition.value = false;
            }
        };

        const stopDrag = (e) => {
            if (e.button !== 2) return;
            if (props.disabled) return
            if (isDragActive.value && props.adsorption) {
                snapToEdge();
            }

            if (isDragActive.value) {
                isDragEnd.value = true;
                // 【关键】延迟重置标记（300ms，覆盖点击事件触发时机），避免快速点击误触
                setTimeout(() => {
                    isDragEnd.value = false;
                }, 300);
            }

            isDragging.value = false;
            isDragActive.value = false
            startX.value = 0;
            startY.value = 0;
        };

        const snapToEdge = () => {
            const buttonDom = zmzFloatbutton.value;
            if (!buttonDom) return;

            const buttonRect = buttonDom.getBoundingClientRect();
            const padding = getDragPadding();
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            const btnWidth = buttonRect.width;
            const btnHeight = buttonRect.height;
            const btnCenterX = buttonRect.left + btnWidth / 2;
            const btnCenterY = buttonRect.top + btnHeight / 2;

            const validArea = {
                maxX: screenWidth - padding,
                minX: padding,
                maxY: screenHeight - padding,
                minY: padding
            };

            const distances = {
                left: btnCenterX - validArea.minX,
                right: validArea.maxX - btnCenterX,
                top: btnCenterY - validArea.minY,
                bottom: validArea.maxY - btnCenterY
            };

            const nearestEdge = Object.keys(distances).reduce((a, b) =>
                distances[a] < distances[b] ? a : b
            );

            const edgePositions = {
                left: {
                    left: `${validArea.minX}px`,
                    top: `${Math.max(validArea.minY, Math.min(validArea.maxY - btnHeight, btnCenterY - btnHeight / 2))}px`
                },
                right: {
                    left: `${validArea.maxX - btnWidth}px`,
                    top: `${Math.max(validArea.minY, Math.min(validArea.maxY - btnHeight, btnCenterY - btnHeight / 2))}px`
                },
                top: {
                    left: `${Math.max(validArea.minX, Math.min(validArea.maxX - btnWidth, btnCenterX - btnWidth / 2))}px`,
                    top: `${validArea.minY}px`
                },
                bottom: {
                    left: `${Math.max(validArea.minX, Math.min(validArea.maxX - btnWidth, btnCenterX - btnWidth / 2))}px`,
                    top: `${validArea.maxY - btnHeight}px`
                }
            };

            Object.assign(position, edgePositions[nearestEdge]);
            position.right = 'auto';
            position.bottom = 'auto';
            isTransition.value = true;

            setTimeout(() => {
                isTransition.value = false;
            }, 300);
        };

        const handleClick = () => {
            if (props.disabled || isDragActive.value || isDragEnd.value) return;
            isDragging.value = false
            innerValue.value = !innerValue.value;
            console.log(innerValue.value)
        };


        const closeExpand = () => {
            if (innerValue.value) innerValue.value = false;
        };

        const handleClickOutside = (e) => {
            if (!zmzFloatbutton.value || innerValue.value === false) return;
            const isClickInside = zmzFloatbutton.value.contains(e.target) ||
                (zmzFloatbuttonGroup.value && zmzFloatbuttonGroup.value.contains(e.target));
            if (!isClickInside) closeExpand();
        };

        const handleRightMenu = (e) => {
            e.preventDefault()
        };

        onMounted(async () => {
            await nextTick();
            initPosition();

            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('touchmove', handleDrag, { passive: false }); // 需preventDefault，passive设为false
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchend', stopDrag);
            document.addEventListener('click', handleClickOutside);
            window.addEventListener('resize', snapToEdge); // 窗口 resize 时重新吸边
        });

        onUnmounted(() => {
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('touchmove', handleDrag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchend', stopDrag);
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('resize', snapToEdge);
        });

        const zmzFloatbuttonClass = computed(() => {
            let params = []

            if (innerValue.value) {
                params.push('zmz-floatbutton-open')
            }

            if (isDragging.value) {
                params.push('zmz-floatbutton-dragging')
            }

            if (props.type) {
                params.push('zmz-floatbutton--' + props.type)
            }

            if (props.shape && !props.group) {
                params.push('zmz-floatbutton--shape-' + props.shape)
            }

            if (props.disabled) {
                params.push('zmz-floatbutton--disabled')
            }

            return params
        })

        const zmzFloatbuttonButtonClass = computed(() => {
            let params = []

            if (props.group) {
                params.push('zmz-floatbutton__button--group')
            }

            return params
        })

        const zmzFloatbuttonStyle = computed(() => {
            let params = {}

            if (isTransition.value) {
                params['transition'] = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }

            if (position && Object.keys(position).length > 0) {
                params = Object.assign(params, position)
            }
            return params
        })

        return {
            zmzFloatbutton,
            zmzFloatbuttonButton,
            zmzFloatbuttonGroup,
            zmzFloatbuttonClass,
            zmzFloatbuttonStyle,
            zmzFloatbuttonButtonClass,
            innerValue,
            handleClick,
            startDrag,
            isDragEnd,
            handleRightMenu
        };
    }
};
</script>