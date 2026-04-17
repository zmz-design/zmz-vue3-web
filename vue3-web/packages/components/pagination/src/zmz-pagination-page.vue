<template>
    <div class="zmz-pagination__page">
        <div class="zmz-pagination__page__item" v-for="(p, i) in grouplist" :key="i"
            :class="{ 'zmz-pagination__page__item--active': defaultModel == p.val, 'zmz-pagination__page__item--disabled': disabled }"
            @click="handleCurrent(p.val)">
            {{ p.text }}
        </div>
    </div>
</template>

<script>
import { computed, watch, ref } from 'vue';
export default {
    name: 'ZmzPaginationPage',
    props: {
        /**
         * 每页显示条数
         */
        pageNumTotal: {
            type: Number,
            default: 10
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
         * 页码
         */
        current: {
            type: [Number, String],
            default: 1
        },
        /**
         * 禁用分页
         */
        disabled: {
            type: Boolean,
            default: false
        },
    },
    emits: ['on-change', 'update:modelValue'],
    setup(props, { emit }) {
        const defaultModel = ref(props.current)

        watch(() => props.current, (val) => {
            defaultModel.value = parseInt(val)
        }, { immediate: true })

        // 获取分页页码
        const grouplist = computed(() => {
            var len = props.pageNumTotal,
                temp = [],
                list = [],
                count = Math.floor(props.fold / 2),
                center = defaultModel.value;
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
            defaultModel.value > props.pageNumTotal - count && (center = props.pageNumTotal - count);
            temp = temp.splice(center - count - 1, props.fold);
            do {
                var t = temp.shift();
                list.push({
                    text: t,
                    val: t
                });
            } while (temp.length);

            if (props.pageNumTotal > props.fold) {
                if (defaultModel.value > count + 1) {
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
                if (defaultModel.value <= props.pageNumTotal + count) {
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
        const handleCurrent = idx => {
            if(props.disabled) return;
            if (defaultModel.value != idx && idx > 0 && idx < props.pageNumTotal + 1) {
                defaultModel.value = idx;
                emit('on-change', idx);
            }
        };

        return {
            handleCurrent,
            defaultModel,
            grouplist,
        };
    }
};
</script>
