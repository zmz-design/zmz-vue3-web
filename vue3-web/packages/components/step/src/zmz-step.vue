<template>
    <div class="zmz-step" :class="[zmzStepClass]">
        <slot></slot>
    </div>
</template>

<script>
import { provide, ref, onMounted, computed, watch } from 'vue';
export default {
    name: 'ZmzStep',
    componentName: 'ZmzStep',
    props: {
        /**
         * 当前
         */
        modelValue: {
            type: Number,
            default: 0,
            validator: val => val >= 0
        },
        /**
         * 状态
         */
        status: {
            type: String,
            default: 'process',
            validator(value) {
                return ['wait', 'process', 'finish', 'error'].includes(value)
            }
        },
        /**
         * 尺寸
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['default', 'small'].includes(value)
            }
        },
        /**
         * 偏移
         */
        margin: {
            type: Number,
            default: 0
        },
        /**
         * 对齐
         */
        textAlign: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'center', 'right'].includes(value)
            }
        },
        /**
         * 模式
         */
        mode: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].includes(value)
            }
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const zmzStepList = ref([]);

        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val)
            }
        })

        // 公共样式
        const zmzStepClass = computed(() => {
            let params = []
            if (props.mode) {
                params.push(`zmz-step--${props.mode}`)
            }

            if (props.mode === 'horizontal') {
                params.push(`zmz-step--${props.textAlign}`)
            }

            return params
        })

        // 当前
        const currentModel = computed(() => {
            if (model.value >= zmzStepList.value.length) {
                return zmzStepList.value.length;
            } else {
                return model.value;
            }
        });

        onMounted(() => {
            updateDom()
        })

        const updateStepsStatus = () => {
            const status = props.status;
            zmzStepList.value.forEach((child, index) => {
                const prevChild = zmzStepList.value[index - 1];
                if (index === currentModel.value) {
                    if (status === 'error') {
                        child.instance.proxy.internalStatus = 'error';
                        prevChild && (prevChild.instance.proxy.nextError = true);
                    } else {
                        child.instance.proxy.internalStatus = 'process';
                    }
                } else if (index < currentModel.value) {
                    child.instance.proxy.internalStatus = 'finish';
                } else {
                    child.instance.proxy.internalStatus = 'wait';
                }
                if (child.instance.proxy.finalStatus !== 'error' && prevChild) {
                    prevChild.instance.proxy.nextError = false;
                }
            });
        };
        watch(currentModel, () => {
            updateStepsStatus();
        }, { lazy: true });

        const updateDom = () => {
            zmzStepList.value.forEach((item, index) => {
                item.instance.proxy.index = index;
            });
            updateStepsStatus();
        }

        provide('zmzStep', {
            zmzStepList: zmzStepList,
            updateDom: updateDom,
            textAlign: props.textAlign,
            margin: props.margin
        });


        return {
            zmzStepClass
        };
    }
};
</script>
