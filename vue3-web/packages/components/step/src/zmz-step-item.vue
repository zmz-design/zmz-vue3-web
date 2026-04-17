<template>
    <div class="zmz-step__item" :class="[zmzStepItemClass]" :style="[zmzStepItemStyle]">
        <div class="zmz-step__header">
            <slot name="icon">
                <div class="zmz-step__icons" v-if="icon"><i :class="['zmz-step__icons__inner', icon]"></i></div>
                <template v-else>
                    <div v-if="['process', 'wait'].indexOf(finalStatus) > -1" class="zmz-step__num">{{ index + 1 }}
                    </div>
                    <div class="zmz-step__icon" v-if="finalStatus === 'finish'"><i
                            class="zmz-step__icon__inner zmz-icon--check"></i></div>
                    <div class="zmz-step__icon" v-if="finalStatus === 'error'"><i
                            class="zmz-step__icon__inner zmz-icon--wrong"></i></div>
                </template>
            </slot>
        </div>
        <div class="zmz-step__line"></div>
        <div class="zmz-step__section">
            <div class="zmz-step__title">
                <slot name="title">{{ title }}</slot>
            </div>
            <div class="zmz-step__describe" v-if="$slots.default || description">
                <slot>{{ description }}</slot>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, getCurrentInstance, inject, ref, onMounted, onBeforeUnmount } from 'vue';
export default {
    name: 'ZmzStepItem',
    props: {
        /**
         * 图标
         */
        icon: String,
        /**
         * 标题
         */
        title: String,
        /**
         * 内容
         */
        status: {
            type: String,
            validator(value) {
                return ['wait', 'process', 'finish', 'error'].includes(value)
            }
        },
        /**
         * 描述
         */
        description: String
    },
    setup(props) {
        const Instance = getCurrentInstance();
        const zmzStep = inject('zmzStep', {});
        const index = ref(-1);
        const internalStatus = ref('');
        const nextError = ref(false);

        const zmzStepItemStyle = computed(() => {
            const style = {};
            if (zmzStep.textAlign == 'center') {
                if (index.value + 1 == stepsTotal.value) {
                    style['flex-basis'] = `${(1 / (stepsTotal.value - 1)) * 100}% !important`;
                } else {
                    style['flex-basis'] = `${(1 / (stepsTotal.value - 1)) * 100}%`;
                }
            } else {
                if (index.value + 1 == stepsTotal.value) {
                    style['flex-basis'] = 0;
                } else {
                    style['flex-basis'] = `${(1 / (stepsTotal.value - 1)) * 100}%`;
                }
            }
            return style;
        });

        // 总长度
        const stepsTotal = computed(() => {
            return zmzStep.zmzStepList.value.length;
        });

        // 状态
        const finalStatus = computed(() => {
            return props.status || internalStatus.value;
        });

        // 公共样式
        const zmzStepItemClass = computed(() => {
            const params = [];
            if (finalStatus.value) {
                params.push(`zmz-step__item--${finalStatus.value}`)
            }

            if (nextError.value) {
                params.push('zmz-step__item--next-error')
            }
            return params;
        });

        onMounted(() => {
            addDom()
            updateDom()
        })

        onBeforeUnmount(() => {
            removeDom()
            updateDom()
        })

        const addDom = () => {
            zmzStep.zmzStepList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateDom = () => {
            zmzStep.updateDom();
        }

        const removeDom = () => {
            if (zmzStep.zmzStepList.value && zmzStep.zmzStepList.value.length) {
                const index = zmzStep.zmzStepList.value.findIndex(item => item.uid === Instance.uid);
                zmzStep.zmzStepList.value.splice(index, 1);
            }
        }

        return {
            index,
            zmzStepItemStyle,
            finalStatus,
            zmzStepItemClass,
            internalStatus
        };
    }
};
</script>
