<template>
    <div class="zmz-grid" :class="[zmzGridClass]">
        <slot></slot>
    </div>
</template>
<script>
import { ref, provide, onMounted, computed } from 'vue';
export default {
    name: 'ZmzGrid',
    componentName: 'ZmzGrid',
    props: {
        /**
         * 宫格的列数
         */
        column: {
            type: [Number, String],
            default: 4
        },
        /**
         * 宫格间隔
         */
        gutter: {
            type: String,
            default: ''
        },
        /**
         * 宫格对齐方式
         */
        align: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'center', 'right'].includes(value)
            }
        },
        /**
         * 是否显示边线
         */
        border: {
            type: Boolean,
            default: false
        },
        /**
        * 是否宽高一致
        */
        square: {
            type: Boolean,
            default: false
        }
    },
    emits: ['on-change'],
    setup(props, { emit }) {
        const zmzGridList = ref([]);

        onMounted(() => {
            updateDom()
        })

        // 公共类名
        const zmzGridClass = computed(() => {
            let params = []
            if (props.align) {
                params.push(`zmz-grid--${props.align}`)
            }

            if (props.border) {
                params.push(`zmz-grid--border`)
            }
            return params;
        });
        const onChange = (index) => {
            emit('on-change', index)
        }

        const updateDom = () => {
            zmzGridList.value.forEach((item, index) => {
                item.instance.proxy.index = index
            })
        }

        provide('zmzGrid', {
            zmzGridList: zmzGridList,
            column: props.column,
            updateDom: updateDom,
            gutter: props.gutter,
            square: props.square,
            onChange: onChange
        })


        return {
            zmzGridClass,
            onChange
        }
    },
};
</script>
