<template>
    <div class="zmz-pagefooter" :style="[zmzPagefooterStyle]">
        <div class="zmz-pagefooter__wrap" :style="[zmzPagefooterWrapStyle]">
            <div class="zmz-pagefooter__content" :style="[zmzPagefooterCommonStyle]">
                <slot></slot>
            </div>
            <div class="zmz-pagefooter__copyright" v-if="$slots.copyright || copyright"
                :style="[zmzPagefooterCommonStyle]">
                <slot name="copyright">{{ copyright }}</slot>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'ZmzPagefooter',
    props: {
        copyright: {
            type: String,
            default: ''
        },
        safetyWidth: {
            type: String,
            default: '100%'
        },
        fixed: {
            type: Boolean,
            default: false
        },
        background: {
            type: String,
            default: '#fff'
        },
        zIndex: {
            type: Number,
            default: 9
        },
        color: {
            type: String,
            default: ''
        }
    },
    setup(props) {

        // 公共样式
        const zmzPagefooterStyle = computed(() => {
            let params = {}

            if (props.fixed) {
                params['position'] = 'fixed';
                params['bottom'] = '0';
                params['left'] = '0';
                params['right'] = '0';
            }

            if (props.background) {
                params['background'] = props.background;
            }

            if (props.zIndex) {
                params['zIndex'] = props.zIndex;
            }


            return params;
        });

        // 公共样式
        const zmzPagefooterWrapStyle = computed(() => {
            let params = {}
            if (props.safetyWidth) {
                params['width'] = props.safetyWidth;
            }

            return params;
        });

        const zmzPagefooterCommonStyle = computed(() => {
            let params = {}
            if (props.color) {
                params['color'] = props.color;
            }

            return params;
        });


        return {
            zmzPagefooterStyle,
            zmzPagefooterWrapStyle,
            zmzPagefooterCommonStyle
        };
    }
};
</script>
