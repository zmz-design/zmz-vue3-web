import { computed, ref, h, watch } from 'vue';
import ZmzPaginationTotal from './zmz-pagination-total.vue';
import ZmzPaginationPrev from './zmz-pagination-prev.vue';
import ZmzPaginationNext from './zmz-pagination-next.vue';
import ZmzPaginationJumper from './zmz-pagination-jumper.vue';
import ZmzPaginationPage from './zmz-pagination-page.vue';
import ZmzPaginationSizes from './zmz-pagination-sizes.vue';
import ZmzPaginationPagenumsize from './zmz-pagination-numsize.vue';
import ZmzPaginationPageLast from './zmz-pagination-last.vue';
import ZmzPaginationPageFirst from './zmz-pagination-first.vue';

import ZmzSelect from '../../form/select/index.js';
import ZmzSelectItem from '../../form/select/option.js';
import ZmzInput from '../../form/input/index.js';
export default {
    name: 'ZmzPagination',
    components: {
        ZmzSelect,
        ZmzSelectItem,
        ZmzInput,
        ZmzPaginationTotal,
        ZmzPaginationPage,
        ZmzPaginationPrev,
        ZmzPaginationNext,
        ZmzPaginationJumper,
        ZmzPaginationPagenumsize,
        ZmzPaginationPageLast,
        ZmzPaginationPageFirst
    },
    props: {
        /**
         * 页数配置
         */
        pageSizeOption: {
            type: Array,
            default: () => [10, 20, 30, 40]
        },
        /**
         * 总数
         */
        total: {
            type: Number,
            default: 0
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
         * 类型
         */
        type: {
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
            default: false
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
         * 禁用分页
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 上一页
         */
        prevText: {
            type: String,
            default: ''
        },
        /**
         * 下一样
         */
        nextText: {
            type: String,
            default: ''
        },
        /**
         * 第一页
         */
        firstText: {
            type: String,
            default: ''
        },
        /**
         * 最后一页
         */
        lastText: {
            type: String,
            default: ''
        },
        /**
         * 页码
         */
        pageNum: {
            type: [Number, String],
            default: 1
        },
        /**
         * 每页显示条数
         */
        pageSize: {
            type: [Number, String],
            default: 10
        },
        /**
         * 布局
         */
        layout: {
            type: Array,
            default() {
                return ['total', 'prev', 'page', 'next', 'sizes', 'jumper']
            }
        }
    },
    emits: ['on-num-change', 'on-size-change', 'update:page-size', 'update:page-num', 'on-prev-page', 'on-next-page', 'on-first-page', 'on-last-page'],
    setup(props, { emit }) {
        const defaultPageSize = ref(props.pageSize);
        const defaultPageNum = ref(props.pageNum);
        const modelPageNum = computed({
            get() {
                return parseInt(props.pageNum);
            },
            set(val) {
                emit('update:page-num', parseInt(val));
            }
        });


        const modelPageSize = computed({
            get() {
                return parseInt(props.pageSize);
            },
            set(val) {
                emit('update:page-size', parseInt(val));
            }
        });

        // 公共类名
        const zmzPaginationClass = computed(() => {
            let params = [];
            if (props.border) {
                params.push('zmz-pagination--border');
            }

            if (props.background) {
                params.push('zmz-pagination--background');
            }

            if (props.type) {
                params.push(`zmz-pagination--${props.type}`);
            }

            if (props.size) {
                params.push(`zmz-pagination--size-${props.size}`);
            }

            if (props.disabled) {
                params.push(`zmz-pagination--disabled`);
            }

            return params;
        });

        // 总页数
        const pageNumTotal = computed(() => {
            return Math.ceil(props.total / defaultPageSize.value);
        });

        const handlePageChange = (num) => {
            if (props.disabled) return
            defaultPageNum.value = num
            modelPageNum.value = num
            emit('on-num-change', num)
        }

        const handleOnNextPage = () => {
            if (props.disabled) return
            let oldModel = defaultPageNum.value
            oldModel = oldModel + 1
            modelPageNum.value = oldModel
            handlePageChange(oldModel)
            emit('on-next-page', oldModel)
        }

        const handleOnPrevPage = () => {
            if (props.disabled) return
            let oldModel = defaultPageNum.value
            oldModel = oldModel - 1
            modelPageNum.value = oldModel
            handlePageChange(oldModel)
            emit('on-prev-page', oldModel)
        }

        const handleOnFirstPage = () => {
            if (props.disabled) return
            modelPageNum.value = 1
            handlePageChange(1)
            emit('on-first-page', 1)
        }

        const handleOnLastPage = () => {
            if (props.disabled) return
            modelPageNum.value = pageNumTotal.value
            handlePageChange(pageNumTotal.value)
            emit('on-last-page', pageNumTotal.value)
        }

        const handleSizesChange = (size) => {
            if (props.disabled) return
            defaultPageSize.value = size;
            modelPageSize.value = size;
            if (defaultPageNum.value > pageNumTotal.value) {
                modelPageNum.value = pageNumTotal.value
            }
            emit('on-size-change', size)
        }

        watch(() => props.pageSize, (size) => {
            defaultPageSize.value = parseInt(size)
        }, { immediate: true })

        watch(() => props.pageNum, (num) => {
            defaultPageNum.value = parseInt(num)
        }, { immediate: true })

        watch(() => modelPageSize.value, (size) => {
            defaultPageSize.value = parseInt(size)
        }, { immediate: true })

        watch(() => modelPageNum.value, (num) => {
            defaultPageNum.value = parseInt(num)
        }, { immediate: true })

        return () => {
            if (props.onePageHidden && (!pageNumTotal.value || pageNumTotal.value === 1)) return null;
            const layoutTemplate = {
                'total': <ZmzPaginationTotal total={props.total}></ZmzPaginationTotal>,
                'jumper': <ZmzPaginationJumper size={props.size} disabled={props.disabled} current={defaultPageNum.value} pageNumTotal={pageNumTotal.value} onOnChange={handlePageChange}></ZmzPaginationJumper>,
                'page': <ZmzPaginationPage disabled={props.disabled} fold={props.fold} current={defaultPageNum.value} pageNumTotal={pageNumTotal.value} onOnChange={handlePageChange}></ZmzPaginationPage>,
                'sizes': <ZmzPaginationSizes size={props.size} disabled={props.disabled} current={defaultPageSize.value} pageSizeOption={props.pageSizeOption} onOnChange={handleSizesChange}></ZmzPaginationSizes>,
                'prev': <ZmzPaginationPrev disabled={props.disabled} prevText={props.prevText} current={defaultPageNum.value} pageNumTotal={pageNumTotal.value} onOnPrevPage={handleOnPrevPage}></ZmzPaginationPrev>,
                'next': <ZmzPaginationNext disabled={props.disabled} nextText={props.nextText} current={defaultPageNum.value} pageNumTotal={pageNumTotal.value} onOnNextPage={handleOnNextPage}></ZmzPaginationNext>,
                'numsize': <ZmzPaginationPagenumsize current={defaultPageNum.value} pageNumTotal={pageNumTotal.value}></ZmzPaginationPagenumsize>,
                'first': <ZmzPaginationPageFirst disabled={props.disabled} firstText={props.firstText} current={defaultPageNum.value} pageNumTotal={pageNumTotal.value} onOnFirstPage={handleOnFirstPage}></ZmzPaginationPageFirst>,
                'last': <ZmzPaginationPageLast disabled={props.disabled} lastText={props.lastText} current={defaultPageNum.value} pageNumTotal={pageNumTotal.value} onOnLastPage={handleOnLastPage}></ZmzPaginationPageLast>,
            }
            const template = []
            props.layout.forEach(item => {
                if (item && layoutTemplate[item] && layoutTemplate[item].type && layoutTemplate[item].type.name) {
                    template.push(h('div', {
                        class: ['zmz-pagination__item']
                    }, layoutTemplate[item]))
                }
            })

            return h('div', {
                class: ['zmz-pagination', zmzPaginationClass.value]
            }, { default: () => template })
        }
    }
};
