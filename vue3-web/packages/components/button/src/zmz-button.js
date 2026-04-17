import { computed, defineComponent, inject, h } from 'vue';
export default defineComponent({
    name: 'ZmzButton',
    props: {
        /**
         * 类型
         */
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['success', 'warning', 'error', 'primary', 'default', 'info'].includes(value);
            }
        },
        /**
         * 大小
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['large', 'medium', 'default', 'small', 'mini'].includes(value);
            }
        },
        /**
         * 圆角
         */
        round: {
            type: Boolean,
            default: false
        },
        /**
         * 加载中
         */
        loading: {
            type: Boolean,
            default: false
        },
        /**
         * 加载中图标
         */
        loadingIcon: {
            type: String,
            default: 'zmz-icon--loading'
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 图标
         */
        icon: {
            type: String,
            default: ''
        },
        /**
         * 朴素
         */
        plain: {
            type: Boolean,
            default: false
        },
        /**
         * 虚线
         */
        dashed: {
            type: Boolean,
            default: false
        },
        /**
         * 圆型
         */
        circle: {
            type: Boolean,
            default: false
        },
        /**
         * 链接
         */
        link: {
            type: Boolean,
            default: false
        },
        /**
         * 文字
         */
        text: {
            type: Boolean,
            default: false
        },
        /**
         * 文字背景
         */
        textBg: {
            type: Boolean,
            default: false
        },
        /**
         * 原生类型
         */
        nativeType: {
            type: String,
            default: 'button'
        },
        /**
         * 标签
         */
        tag: {
            type: String,
            default: 'button'
        },
        /**
         * 长按钮
         */
        long: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots, attrs }) {
        const zmzForm = inject('zmzForm', {});
        const zmzButtonClass = computed(() => {
            let params = [];
            if (props.type === 'text') {
                params.push(`zmz-button--text`)
                params.push(`zmz-button--text-${props.textColor}`)
            } else {
                if (props.type) {
                    params.push(`zmz-button--${props.type}`)
                }

                if (zmzFormSize.value) {
                    params.push(`zmz-button--size-${zmzFormSize.value}`)
                }

                if (props.round) {
                    params.push(`zmz-button--round`)
                }

                if (props.plain) {
                    params.push(`zmz-button--plain`)
                }

                if (props.dashed) {
                    params.push(`zmz-button--dashed`)
                }

                if (props.loading) {
                    params.push(`zmz-button--loading`)
                }

                if (props.text) {
                    params.push(`zmz-button--text`)
                }

                if (props.text && props.textBg) {
                    params.push(`zmz-button--text-bg`)
                }

                if (props.link) {
                    params.push(`zmz-button--link`)
                }

                if (props.circle && !props.loading) {
                    params.push(`zmz-button--circle`)
                }

                if (props.long) {
                    params.push(`zmz-button--long`)
                }
            }

            if (props.disabled) {
                params.push(`zmz-button--disabled`)
            }

            return params
        })

        const zmzButtonStyle = computed(() => {
            let params = {}
            return params
        })

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.formSize ? zmzForm.formSize.value : props.size;
        });

        // 返回实例
        return () => {
            let defaultSlots = '';
            let iconSlots = '';
            let loadingSlots = '';

            if (slots.default) {
                defaultSlots = h('span', { 
                    class: ["zmz-button__inner"]
                }, slots.default())
            }

            if (slots.icon) {
                iconSlots = h('slot', { name: "icon" }, slots.icon())
            }

            if (!slots.icon && props.icon && !props.loading) {
                iconSlots = h("i", {
                    class: ["zmz-button__icon", props.icon]
                })
            }

            if (slots.loading) {
                loadingSlots = h('slot', { name: "loading" }, slots.loading())
            }

            if (!slots.loading && props.loading && !props.circle) {
                loadingSlots = h("i", {
                    class: ["zmz-button__icon", props.loadingIcon]
                })
            }

            return h(props.tag, {
                ...attrs,
                class: ['zmz-button', zmzButtonClass.value],
                style: zmzButtonStyle.value,
                type: props.nativeType,
            }, [
                iconSlots,
                loadingSlots,
                defaultSlots
            ])
        }
    }
});
