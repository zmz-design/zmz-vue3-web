<template>
    <transition name="zmz-fade">
        <div class="zmz-alert" :class="[zmzAlertClass]" v-show="model">
            <slot name="icon"><i class="zmz-alert__icon" :class="[zmzAlertIconClass]" v-if="showIcon"></i></slot>
            <div class="zmz-alert__wrap">
                <div class="zmz-alert__title" :class="[zmzAlertTitleClass]" v-if="isTitle">
                    <slot name="title">{{ title }}</slot>
                </div>
                <div class="zmz-alert__description" v-if="isDescription">
                    <slot>{{ description }}</slot>
                </div>
            </div>
            <slot name="closebtn">
                <i v-if="closable" class="zmz-alert__closebtn" :class="closeTextClass" @click="handleClose">
                    {{ closeText }}
                </i>
            </slot>
        </div>
    </transition>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'ZmzAlert',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            requre: ''
        },
        /**
         * 类型
         */
        effect: {
            type: String,
            default: '',
            validator(value) {
                return ['plain', 'linear', ''].includes(value)
            }
        },
        /**
         * 类型
         */
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['success', 'warning', 'error', 'default', 'primary', 'info'].includes(value)
            }
        },
        /**
         * 显示图标
         */
        showIcon: {
            type: Boolean,
            default: false
        },
        /**
         * 显示图标
         */
        icon: {
            type: String,
            default: 'zmz-icon--wrong'
        },
        /**
         * 居中
         */
        center: {
            type: Boolean,
            default: false
        },
        /**
         * 关闭文字
         */
        closeText: {
            type: String,
            default: ''
        },
        /**
         * 关闭按钮
         */
        closable: {
            type: Boolean,
            default: false
        },
        /**
         * 描述
         */
        description: {
            type: String,
            default: ''
        },
        /**
         * 是否显示
         */
        show: {
            type: Boolean,
            default: true
        }
    },
    emits: ['on-close', 'update:show'],
    setup(props, { emit, slots }) {
        const zmzAlertTitleClass = computed(() => {
            let params = []
            if (isDescription.value) {
                params.push('zmz-alert__title--bold')
            }
            return params;
        });

        const zmzAlertIconClass = computed(() => {
            let params = []
            if (props.type) {
                params.push(`zmz-icon--${props.type}`)
            }

            return params;
        });

        const zmzAlertClass = computed(() => {

            let params = []
            if (props.type) {
                params.push(`zmz-alert--${props.type}`)
            }

            if (props.center) {
                params.push(`zmz-alert--center`)
            }

            if (props.effect) {
                params.push(`zmz-alert--${props.effect}`)
            }

            return params;
        })

        const model = computed({
            get() {
                return props.show
            },
            set(val) {
                emit('update:show', val)
            }
        })

        const handleClose = () => {
            model.value = false
            emit('on-close');
        };

        const isDescription = computed(() => {
            return (slots.default && slots.default()[0]?.children || props.description)
        })

        const isTitle = computed(() => {
            return (slots.title && slots.title()[0]?.children || props.title)
        })

        const closeTextClass = computed(() => {
            return props.closeText ? 'zmz-alert__closebtn--text' : props.icon
        })

        return {
            handleClose,
            zmzAlertTitleClass,
            zmzAlertIconClass,
            zmzAlertClass,
            model,
            isDescription,
            isTitle,
            closeTextClass
        };
    }
};
</script>
