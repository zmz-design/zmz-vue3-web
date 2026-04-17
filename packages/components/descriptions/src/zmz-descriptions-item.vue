<template>
    <tr class="zmz-descriptions__tr">
        <template v-if="isVertical">
            <zmzDescriptionsCell v-for="(item, index) in row" :key="index" :cell="item" type="item" tag="td">
            </zmzDescriptionsCell>
        </template>
        <template v-else>
            <template v-for="(item, index) in row">
                <template v-if="isBorder">
                    <zmzDescriptionsCell :key="index" :cell="item" type="label" tag="td"></zmzDescriptionsCell>
                    <zmzDescriptionsCell :key="index" :cell="item" type="content" tag="td"></zmzDescriptionsCell>
                </template>
                <zmzDescriptionsCell v-else :key="index" :cell="item" type="item" tag="td"></zmzDescriptionsCell>
            </template>
        </template>
    </tr>
</template>
<script>
import { computed, inject } from 'vue';
import zmzDescriptionsCell from './zmz-descriptions-cell.js';
export default {
    name: 'ZmzDescriptionsItem',
    components: {
        zmzDescriptionsCell
    },
    props: {
        /**
         * 标签
         */
        label: {
            type: String,
            default: ''
        },
        /**
         * 数据
         */
        row: {
            type: Array
        },
        /**
         * 合并
         */
        span: {
            type: [Number, String],
            default: 1
        },
        /**
         * label样式
         */
        labelStyle: {
            type: Object,
            default: () => { }
        },
        /**
         * content样式
         */
        contentStyle: {
            type: Object,
            default: () => { }
        },
        /**
         * label类名
         */
        labelClass: {
            type: [String, Array],
            default: ''
        },
        /**
         * content内容
         */
        contentClass: {
            type: [String, Array],
            default: ''
        }
    },
    setup() {
        const zmzDescriptions = inject('zmzDescriptions', {})
        const isVertical = computed(() => {
            return zmzDescriptions.mode == 'vertical'
        });

        const isBorder = computed(() => {
            return zmzDescriptions.border
        });

        return {
            isBorder,
            isVertical
        };
    }
};
</script>
