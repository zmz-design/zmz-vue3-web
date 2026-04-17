<template>
    <ul class="zmz-pagination__numsize">
        <div class="zmz-pagination__numsize__current">第{{ current }}页</div>
        <div class="zmz-pagination__numsize__split">/</div>
        <div class="zmz-pagination__numsize__total">共{{ pageNumTotal }}页</div>
    </ul>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'ZmzPaginationNumsize',
    props: {
        /**
         * 总数
         */
        current: {
            type: Number,
            default: 0
        },
        /**
         * 每页显示条数
         */
        pageNumTotal: {
            type: Number,
            default: 10
        },
        /**
         * 尺寸
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['large', 'medium', 'default', 'small', 'mini'].includes(value)
            }
        },
        /**
         * 主题
         */
        theme: {
            type: String,
            default: 'primary',
            validator(value) {
                return ['success', 'warning', 'error', 'primary'].includes(value)
            }
        },
        /**
         * 过多折叠
         */
        fold: {
            type: Number,
            default: 5,
            coerce: function (v) {
                v = v > 0 ? v : 5;
                return v % 2 === 1 ? v : v + 1;
            }
        },
        /**
         * 只有一页时是否隐藏分页
         */
        onePageHidden: {
            type: Boolean,
            default: true
        },
        /**
         * 是否显示背景色
         */
        background: {
            type: Boolean,
            default: false
        },
        /**
         * 是否显示边线
         */
        border: {
            type: Boolean,
            default: false
        },
        /**
         * 上一页
         */
        prev: {
            type: Boolean,
            default: false
        },
        /**
         * 下一样
         */
        next: {
            type: Boolean,
            default: false
        },
        /**
         * 第一页
         */
        firstPage: {
            type: Boolean,
            default: false
        },
        /**
         * 最后一页
         */
        lastPage: {
            type: Boolean,
            default: false
        },
        /**
         * 页码
         */
        modelValue: {
            type: [Number, String],
            default: 1
        },
        /**
         * 布局
         */
        layout: {
            type: Array,
            default() {
                return []
            }
        }
    },
    emits: ['on-change', 'update:modelValue', 'on-next-page', 'on-prev-page'],
    setup(props, { emit }) {
        const model = computed({
            get() {
                return parseInt(props.modelValue);
            },
            set(val) {
                emit('update:modelValue', parseInt(val));
            }
        });

        // 总页数
        const pageTotal = computed(() => {
            return Math.ceil(props.total / props.pageSize);
        });

        // 获取分页页码
        const grouplist = computed(() => {
            var len = props.pageNumTotal,
                temp = [],
                list = [],
                count = Math.floor(props.fold / 2),
                center = model.value;
            if (len <= props.fold) {
                while (len--) {
                    temp.push({
                        text: props.pageNumTotal - len,
                        val: props.pageNumTotal - len
                    });
                }

                return temp;
            }
            while (len--) {
                temp.push(props.pageNumTotal - len);
            }

            var idx = temp.indexOf(center);
            idx < count && (center = center + count - idx);
            model.value > props.pageNumTotal - count && (center = props.pageNumTotal - count);
            temp = temp.splice(center - count - 1, props.fold);
            do {
                var t = temp.shift();
                list.push({
                    text: t,
                    val: t
                });
            } while (temp.length);

            if (props.pageNumTotal > props.fold) {
                if (model.value > count + 1) {
                    if (list[0].val - 1 == 1) {
                        list.unshift({
                            text: 1,
                            val: 1
                        });
                    } else {
                        list.unshift({
                            text: '···',
                            val: list[0].val - 1
                        });
                        list.unshift({
                            text: 1,
                            val: 1
                        });
                    }
                }
                if (model.value <= props.pageNumTotal + count) {
                    if (list[list.length - 1].val + 1 <= props.pageNumTotal) {
                        if (list[list.length - 1].val + 1 == props.pageNumTotal) {
                            list.push({
                                text: props.pageNumTotal,
                                val: props.pageNumTotal
                            });
                        } else {
                            list.push({
                                text: '···',
                                val: list[list.length - 1].val + 1
                            });
                            list.push({
                                text: props.pageNumTotal,
                                val: props.pageNumTotal
                            });
                        }
                    }
                }
            }
            return list;
        });

        // 选择当前
        const setCurrent = idx => {
            if (model.value != idx && idx > 0 && idx < props.pageNumTotal + 1) {
                model.value = idx;
                emit('on-change', idx);
            }
        };

        // 第一页
        const prevCurrent = idx => {
            if (model.value != idx && idx > 0 && idx < props.pageNumTotal + 1) {
                model.value = idx;
                emit('on-prev-page', idx);
                emit('on-change', idx);
            }
        };

        // 最后一页
        const nextCurrent = idx => {
            if (model.value != idx && idx > 0 && idx < props.pageNumTotal + 1) {
                model.value = idx;
                emit('on-next-page', idx);
                emit('on-change', idx);
            }
        };

        return {
            pageTotal,
            setCurrent,
            model,
            grouplist,
            prevCurrent,
            nextCurrent
        };
    }
};
</script>
