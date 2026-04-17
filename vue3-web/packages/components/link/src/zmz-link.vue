<template>
    <a class="zmz-link" :href="href" :target="target" :class="[zmzLinkClass]" v-bind="$attrs">
        <slot name="icon"><i class="zmz-link__icon" :class="icon" v-if="icon"></i></slot>
        <span class="zmz-link__inner">
            <slot></slot>
        </span>
    </a>
</template>

<script>
import { computed, defineComponent } from 'vue';
export default defineComponent({
    name: 'ZmzLink',
    props: {
        /**
         * 主题
         */
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['success', 'warning', 'error', 'primary', 'default', 'info'].includes(value)
            }
        },
        /**
         * 图标
         */
        icon: String,
        /**
         * 下划线
         */
        underline: {
            type: Boolean,
            default: false
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 原生target
         */
        target: String,
        /**
         * 原生href
         */
        href: String
    },
    setup(props) {
        const zmzLinkClass = computed(() => {
            let params = [];
            if (props.type) {
                params.push(`zmz-link--${props.type}`)
            }

            if (props.size) {
                params.push(`zmz-link--size-${props.size}`)
            }

            if (props.disabled) {
                params.push(`zmz-link--disabled`)
            }

            if (props.underline) {
                params.push(`zmz-link--underline`)
            }

            return params;
        });

        return {
            zmzLinkClass
        };
    }
});
</script>
