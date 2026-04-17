<template>
    <div class="zmz-descriptions" :class="[zmzDescriptionsClass]">
        <div class="zmz-descriptions__header" v-if="$slots.title || title || $slots.operation || operation">
            <div class="zmz-descriptions__header__title" v-if="$slots.title || title">
                <slot name="title">{{ title }}</slot>
            </div>
            <div class="zmz-descriptions__header__operation" v-if="$slots.operation || operation">
                <slot name="operation">{{ operation }}</slot>
            </div>
        </div>
        <div class="zmz-descriptions__body">
            <table class="zmz-descriptions__table">
                <tbody class="zmz-descriptions__tbody">
                    <zmzDescriptionsItem v-for="item, index in children" :key="index" :row="item"></zmzDescriptionsItem>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { computed, ref, provide } from 'vue';
import { flattenChildren } from '../../../utils/array.js'
export default {
    name: 'ZmzDescriptions',
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * 操作
         */
        operation: {
            type: String,
            default: ''
        },
        /**
         * 最大列
         */
        maxCount: {
            type: [String, Number],
            default: 3
        },
        /**
         * 样式
         */
        labelStyle: {
            type: Object,
            default: () => { }
        },
        /**
         * 内容样式
         */
        contentStyle: {
            type: Object,
            default: () => { }
        },
        /**
         * 类名label
         */
        labelClass: {
            type: [String, Array],
            default: ''
        },
        /**
         * 类名content
         */
        contentClass: {
            type: [String, Array],
            default: ''
        },
        /**
         * 边线
         */
        border: {
            type: Boolean,
            default: false
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
    setup(props, { slots }) {
        const rows = ref([]);
        const temp = ref([]);
        const count = ref(0);
        const totalSpan = ref(0);

        provide('zmzDescriptions', {
            labelStyle: props.labelStyle,
            contentStyle: props.contentStyle,
            labelClass: props.labelClass,
            contentClass: props.contentClass,
            border: props.border,
            mode: props.mode
        })
        const children = computed(() => {
            return childrenData();
        });

        const childrenData = () => {
            let children = flattenChildren(slots.default());
            rows.value = [];
            temp.value = [];
            totalSpan.value = 0;
            count.value = props.maxCount;
            children.forEach((node, index, array) => {
                const span = node.props?.span || 1;
                if (index < array.length - 1) {
                    totalSpan.value += span > count.value ? count.value : span;
                }

                // 获取最后一个占比
                if (index == array.length - 1) {
                    const lastSpan = props.maxCount - (totalSpan.value % props.maxCount);
                    temp.value.push(filledNode(node, lastSpan, count.value, true));
                    rows.value.push(temp.value);
                    return;
                }

                if (span < count.value) {
                    count.value -= span;
                    temp.value.push(node);
                } else {
                    temp.value.push(filledNode(node, span, count.value));
                    rows.value.push(temp.value);
                    count.value = props.maxCount;
                    temp.value = [];
                }
            });
            return rows.value
        }

        const filledNode = (node, span, count, isLast = false) => {
            if (!node.props) {
                node.props = {};
            }
            if (span > count) {
                node.props.span = count;
            }
            if (isLast) {
                node.props.span = span;
            }
            return node;
        };

        const zmzDescriptionsClass = computed(() => {
            let params = ''
            if (props.mode) {
                params = `zmz-descriptions--${props.mode}`
            }
            return [{
                'zmz-descriptions--border': props.border
            }, params];
        });

        return {
            children,
            zmzDescriptionsClass
        };
    }
};
</script>
