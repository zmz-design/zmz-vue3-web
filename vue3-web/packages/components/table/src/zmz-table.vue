<template>
    <div class="zmz-table" ref="zmzTable" :style="[zmzTableStyle]" :class="[zmzTableClass]">
        <!-- // 主体头 -->
        <div class="zmz-table__thead-wrap" ref="zmzTableTheadWrap">
            <zmz-table-thead :column="tableHeader" space :scroll-bar="scrollBar" :style="zmzTableTheadWidthStyle"
                ref="zmzTableThead"></zmz-table-thead>
        </div>
        <!-- // 主体身 -->
        <div class="zmz-table__tbody-wrap" ref="zmzTableTbodyWrap" :style="[zmzTableTbodyWrapStyle]"
            @mousewheel="mousewheelFunc">
            <zmz-table-tbody :row-class-name="rowClassName" :stripes-color="stripesColor" :stripes="stripes"
                :data="zmzTableData" :column="tableHeader" ref="zmzTableTbody" :style="zmzTableTbodyWidthStyle"
                :row-hover="rowHover"></zmz-table-tbody>
            <div class="zmz-table__empty" :style="[zmzTableTbodyWidthStyle]" v-if="!zmzTableData.length">
                <div class="zmz-table__empty__text">暂无数据</div>
            </div>
        </div>

        <!-- // 固定左 -->
        <div class="zmz-table__fixed-left" v-if="isFixedLeft" :style="[zmzTableFixedLeftStyle]" ref="zmzTableFixedLeft">
            <div class="zmz-table__fixed-left__thead-wrap">
                <zmz-table-thead :column="tableHeader" :style="zmzTableTheadWidthStyle"></zmz-table-thead>
            </div>
            <div class="zmz-table__fixed-left__tbody-wrap" ref="zmzTableFixedLeftTbodyWrap"
                :style="[zmzTableFixedLeftTbodyWrapStyle]" @mousewheel="mousewheelFunc">
                <zmz-table-tbody :row-class-name="rowClassName" :stripes-color="stripesColor" :data="zmzTableData"
                    :column="tableHeader" :style="zmzTableTbodyWidthStyle" :row-hover="rowHover"></zmz-table-tbody>
            </div>
        </div>

        <!-- // 固定右 -->
        <div class="zmz-table__fixed-right" v-if="isFixedRight" :style="[zmzTableFixedRightStyle]"
            ref="zmzTableFixedRight">
            <div class="zmz-table__fixed-right__thead-wrap">
                <zmz-table-thead :column="tableHeader" :style="zmzTableTheadWidthStyle"></zmz-table-thead>
            </div>
            <div class="zmz-table__fixed-right__tbody-wrap" ref="zmzTableFixedRightTbodyWrap"
                :style="[zmzTableFixedRightTbodyWrapStyle]" @mousewheel="mousewheelFunc">
                <zmz-table-tbody :row-class-name="rowClassName" :stripes-color="stripesColor" :data="zmzTableData"
                    :column="tableHeader" :style="zmzTableTbodyWidthStyle" :row-hover="rowHover"></zmz-table-tbody>
            </div>
        </div>

        <!-- //补白 -->
        <div class="zmz-table__fixed-right--supplement" :style="[zmzTableFixedRightSupplementStyle]" v-if="isScrollY">
        </div>
        <div class="zmz-table__columns-hidden">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { computed, nextTick, ref, defineComponent, onMounted, provide, onUpdated, watch, onUnmounted } from 'vue';
import ZmzTableTbody from './zmz-table-tbody.vue';
import ZmzTableThead from './zmz-table-thead.vue';
import { parseWidth } from '../../../utils/change';
import { unitDefaultCompletion } from '../../../utils/unit';
import { createResizeObserver } from '../../../utils/dom';
export default defineComponent({
    name: 'ZmzTable',
    components: {
        ZmzTableTbody,
        ZmzTableThead
    },
    props: {
        data: {
            type: Array,
            default: () => {
                return [];
            }
        },
        column: {
            type: Array,
            default: () => {
                return [];
            }
        },
        checkbox: {
            type: Boolean,
            default: false
        },
        checkboxKey: {
            type: String,
            default: ''
        },
        /**
         * 高度
         */
        height: [Number, String],
        /**
         * 最大高度
         */
        maxHeight: [Number, String],
        /**
         * 边线
         */
        border: {
            type: Boolean,
            default: false
        },
        /**
         * 行内类名
         */
        rowClassName: [String, Function],
        /**
         * 斑马纹
         */
        stripes: {
            type: Boolean,
            default: false
        },
        /**
         * 斑马纹颜色
         */
        stripesColor: String,
        /**
        * 自适应
        */
        fit: {
            type: Boolean,
            default: true
        },
        /**
         * 默认排序
         */
        defaultSort: Object,
        /**
         * 排序方法
         */
        sortMethod: Function
    },
    emits: ['on-select', 'on-sort-change', 'on-select-radio', 'on-select-checkbox', 'on-select-all-checkbox', 'on-row-click', 'on-row-dblclick', 'on-row-contextmenu', 'on-row-contextmenu', 'on-row-mouseover', 'on-row-mouseout', 'on-cell-click', 'on-cell-dblclick', 'on-cell-contextmenu', 'on-cell-mouseover', 'on-cell-mouseout'],
    setup(props, { emit }) {
        // 主 ref
        const zmzTable = ref();
        const zmzTableTbody = ref(null);
        const zmzTableThead = ref(null);
        // 头部 ref
        const zmzTableTheadWrap = ref(null);
        // 内容 ref
        const zmzTableTbodyWrap = ref(null);
        const zmzTableFixedLeftTbodyWrap = ref(null);
        const zmzTableFixedRightTbodyWrap = ref(null);
        // body宽度
        const zmzTableTbodyWidth = ref(0);
        // 滚动高度
        const zmzTableList = ref([]);
        const scrollStateX = ref('start');
        const scrollStateY = ref('start');

        const columnKey = ref(0);
        // 获取顶部固定高度
        const zmzTableTheadHeight = ref(0);
        const zmzTableTbodyHeight = ref(0);
        const isScrollX = ref(false);
        const isScrollY = ref(false);
        const rowHover = ref({});
        const dataClone = ref(null);
        const zmzTableData = ref([]);
        const divResizeObserver = ref(null);

        // 异步更新
        onMounted(async () => {
            await nextTick();
            zmzTableTheadHeight.value = zmzTableTheadWrap.value.getBoundingClientRect().height;
            isScrollY.value = zmzTableTbody.value.$el.offsetHeight > zmzTableTbodyWrap.value.offsetHeight
            // updateDom()
            // 滚动条判断
            if (zmzTableTbodyWrap.value) {
                zmzTableTbodyWrap.value.addEventListener('scroll', zmzTableTbodyWrapScroll);
            }

            if (zmzTableFixedLeftTbodyWrap.value) {
                zmzTableFixedLeftTbodyWrap.value.addEventListener('scroll', zmzTableFixedTbodyWrapScroll);
            }

            if (zmzTableFixedRightTbodyWrap.value) {
                zmzTableFixedRightTbodyWrap.value.addEventListener('scroll', zmzTableFixedTbodyWrapScroll);
            }

            divResizeObserver.value = createResizeObserver(() => {
                setWidth()
                setHeight()
            });
            if (divResizeObserver.value && zmzTable.value) {
                divResizeObserver.value.observe(zmzTable.value);
            }
        });

        onUnmounted(() => {
            if (divResizeObserver.value && zmzTable.value) {
                divResizeObserver.value.unobserve(zmzTable.value);
                divResizeObserver.value = null;
            }
            if (zmzTableTbodyWrap.value) {
                zmzTableTbodyWrap.value.removeEventListener('scroll', zmzTableTbodyWrapScroll);
            }

            if (zmzTableFixedLeftTbodyWrap.value) {
                zmzTableFixedLeftTbodyWrap.value.removeEventListener('scroll', zmzTableFixedTbodyWrapScroll);
            }

            if (zmzTableFixedRightTbodyWrap.value) {
                zmzTableFixedRightTbodyWrap.value.removeEventListener('scroll', zmzTableFixedTbodyWrapScroll);
            }
        })

        const zmzTableTbodyWrapScroll = (e) => {
            let { scrollTop, scrollLeft, scrollWidth, scrollHeight, clientWidth, clientHeight } = zmzTableTbodyWrap.value;
            zmzTableTheadWrap.value.scrollLeft = e.target.scrollLeft;

            if (isScrollY.value) {
                if (zmzTableFixedLeftTbodyWrap.value) {
                    zmzTableFixedLeftTbodyWrap.value.scrollTop = e.target.scrollTop;
                }

                if (zmzTableFixedRightTbodyWrap.value) {
                    zmzTableFixedRightTbodyWrap.value.scrollTop = e.target.scrollTop;
                }

                scrollEvent(Math.ceil(scrollTop), scrollHeight, clientHeight, 'y')
            }

            if (isScrollX.value) {
                if (zmzTableFixedLeftTbodyWrap.value) {
                    zmzTableFixedLeftTbodyWrap.value.scrollLeft = e.target.scrollLeft;
                }

                if (zmzTableFixedRightTbodyWrap.value) {
                    zmzTableFixedRightTbodyWrap.value.scrollLeft = e.target.scrollLeft;
                }

                scrollEvent(Math.ceil(scrollLeft), scrollWidth, clientWidth, 'x')
            }
        }

        const zmzTableFixedTbodyWrapScroll = (e) => {
            let { scrollTop, scrollHeight, clientHeight } = zmzTableTbodyWrap.value;

            if (isScrollY.value) {
                if (zmzTableTbodyWrap.value) {
                    zmzTableTbodyWrap.value.scrollTop = e.target.scrollTop;
                }

                scrollEvent(scrollTop, scrollHeight, clientHeight, 'y')
            }
        }

        // 判断滚动位置
        const scrollEvent = (scrollLeftOrTop, scrollWidthOrHeight, clientWidthOrHeight, type) => {
            // 滚动条剩余
            if (scrollLeftOrTop == 0) {
                // 开始位置
                if (type == 'x') {
                    scrollStateX.value = 'start';
                } else {
                    scrollStateY.value = 'start';
                }

            } else if (scrollLeftOrTop >= (scrollWidthOrHeight - clientWidthOrHeight)) {
                // 结束位置
                if (type == 'x') {
                    scrollStateX.value = 'end';
                } else {
                    scrollStateY.value = 'end';
                }
            } else {
                // 中间位置
                if (type == 'x') {
                    scrollStateX.value = 'center';
                } else {
                    scrollStateY.value = 'center';
                }
            }
        }

        onUpdated(async () => {
            await nextTick();
            zmzTableTheadHeight.value = zmzTableTheadWrap.value.getBoundingClientRect().height;
            isScrollY.value = zmzTableTbody.value.$el.offsetHeight > zmzTableTbodyWrap.value.offsetHeight
            setWidth()
            setHeight()
        })

        // table头部
        const tableHeader = computed(() => {
            let params = [];
            let leftList = [];
            let rightList = [];
            let notRightLeftList = [];
            zmzTableList.value.forEach(item => {
                if (item.Instance.props.fixed === 'left' || item.Instance.props.fixed === true) {
                    leftList.push(item)
                }

                if (item.Instance.props.fixed === 'right') {
                    rightList.push(item)
                }

                if (item.Instance.props.fixed !== 'left' && item.Instance.props.fixed !== 'right' && item.Instance.props.fixed !== true) {
                    notRightLeftList.push(item)
                }

            })
            return params.concat(leftList, notRightLeftList, rightList)
        })

        // table类名
        const zmzTableClass = computed(() => {
            let params = [];

            if (props.border) {
                params.push('zmz-table--border')
            }

            if (isScrollX.value) {
                params.push('zmz-table--overflow-scrollx')
            }

            if (isScrollY.value) {
                params.push('zmz-table--overflow-scrolly')
            }

            // 判断方向
            if (isScrollX.value) {
                params.push(`zmz-table--overflow-scrollx-${scrollStateX.value}`);
            }

            if (isScrollY.value) {
                params.push(`zmz-table--overflow-scrolly-${scrollStateY.value}`);
            }

            return params
        })

        // table样式
        const zmzTableStyle = computed(() => {
            let params = {}
            if (props.height) {
                params['height'] = unitDefaultCompletion(props.height);
            }

            if (props.maxHeight) {
                params['max-height'] = unitDefaultCompletion(props.maxHeight);
            }
            return params
        })

        // body 样式
        const zmzTableTbodyWrapStyle = computed(() => {
            let params = {}
            if (props.height) {
                params['height'] = zmzTableTbodyHeight.value + 'px';
            }
            if (props.maxHeight) {
                params['max-height'] = zmzTableTbodyHeight.value + 'px';
            }
            return params
        })

        // head样式
        const zmzTableTheadWidthStyle = computed(() => {
            let params = {};
            let width = zmzTableTbodyWidth.value;
            if (isScrollY.value) {
                width = zmzTableTbodyWidth.value - (scrollBar.value.width)
            }
            params['width'] = width + 'px';
            return params;
        })

        // body样式
        const zmzTableTbodyWidthStyle = computed(() => {
            let params = {};
            let width = zmzTableTbodyWidth.value;
            if (isScrollY.value) {
                width = zmzTableTbodyWidth.value - (scrollBar.value.width)
            }
            params['width'] = width + 'px';
            return params;
        })

        const getColumns = () => {
            const column = []
            zmzTableList.value.forEach(item => {
                item.Instance.props.width = parseWidth(item.Instance.props.width)
                column.push(item.Instance.props)
            })
            return column
        }

        const setWidth = () => {
            if (!zmzTable.value) return;
            let flattenColumns = getColumns();
            let bodyMinWidth = 0;
            let flexColumns = flattenColumns.filter((item) => typeof item.width !== 'number');
            if (flattenColumns.length > 0 && props.fit) {
                flattenColumns.forEach(item => {
                    bodyMinWidth += item.width || item.minWidth || 80
                })
                // 当内容宽度小于盒子宽度
                if (bodyMinWidth <= zmzTable.value.offsetWidth - scrollBar.value.width) {
                    isScrollX.value = false;
                    const totalFlexWidth = zmzTable.value.offsetWidth - scrollBar.value.width - bodyMinWidth;

                    const allColumnsWidth = flexColumns.reduce((prev, column) => prev + (column.minWidth || 80), 0);
                    const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
                    let noneFirstWidth = 0;

                    flexColumns.forEach((item, index) => {
                        if (index === 0) return;
                        const flexWidth = Math.floor((item.minWidth || 80) * flexWidthPerPixel);
                        noneFirstWidth += flexWidth;
                        item.realWidth = (item.minWidth || 80) + flexWidth;
                    });

                    if (flexColumns.length) {
                        flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
                    }
                } else {
                    isScrollX.value = true;
                    flexColumns.forEach((item) => {
                        item.realWidth = item.minWidth || 80;
                    });
                }
                zmzTableTbodyWidth.value = Math.max(bodyMinWidth, zmzTable.value.offsetWidth);
            } else {
                flattenColumns.forEach((item) => {
                    if (!item.width && !item.minWidth) {
                        item.realWidth = 80;
                    } else {
                        item.realWidth = item.width || item.minWidth || 80;
                    }

                    bodyMinWidth += item.realWidth;
                });
                isScrollX.value = bodyMinWidth > zmzTable.value.offsetWidth;
                zmzTableTbodyWidth.value = bodyMinWidth;
            }
        }

        const setHeight = () => {
            if (!zmzTable.value) return;
            let tableHeight = props.height || props.maxHeight
            if (tableHeight) {
                let zmzTableHeight = zmzTable.value.getBoundingClientRect().height;
                let tableTheadHeight = zmzTableTheadHeight.value;
                zmzTableTbodyHeight.value = zmzTableHeight - tableTheadHeight;
            }
        }

        // 更新dom
        const updateDom = () => {
            if (zmzTable.value && zmzTableTbodyWrap.value && zmzTableTbody.value) {
                setWidth()
                setHeight()
            }
        }

        // 固定左 start
        // 是否存在固定左
        const isFixedLeft = computed(() => {
            return zmzTableList.value.filter(item => item.Instance.props.fixed === 'left' || item.Instance.props.fixed === true).length
        })

        // 固定左主样式
        const zmzTableFixedLeftStyle = computed(() => {
            let params = {};
            let width = 0;
            let flattenColumns = getColumns();
            flattenColumns.forEach(item => {
                if (item.fixed === 'left' || item.fixed === true) {
                    width += item.width || item.realWidth
                }
            })

            if (props.height) {
                let heigth = (zmzTableTbodyHeight.value + zmzTableTheadHeight.value)
                if (isScrollX.value) {
                    heigth = (zmzTableTbodyHeight.value + zmzTableTheadHeight.value) - scrollBar.value.height
                }
                params['height'] = heigth + 'px';
            }

            if (props.maxHeight) {
                let heigth = (zmzTableTbodyHeight.value + zmzTableTheadHeight.value)
                if (isScrollX.value) {
                    heigth = (zmzTableTbodyHeight.value + zmzTableTheadHeight.value) - scrollBar.value.height
                }
                params['max-height'] = (heigth) + 'px';
            }

            if (isScrollX.value) {
                params['bottom'] = scrollBar.value.height + 'px';
            }

            params['width'] = width + 'px'

            return params;
        })

        // 固定左身子样式
        const zmzTableFixedLeftTbodyWrapStyle = computed(() => {
            let params = {};
            if (props.height) {
                let heigth = zmzTableTbodyHeight.value
                if (isScrollX.value) {
                    heigth = zmzTableTbodyHeight.value - scrollBar.value.height
                }
                params['height'] = heigth + 'px';
            }

            if (props.maxHeight) {
                let heigth = zmzTableTbodyHeight.value
                if (isScrollX.value) {
                    heigth = zmzTableTbodyHeight.value - scrollBar.value.height
                }
                params['max-height'] = (heigth) + 'px';
            }
            params['top'] = zmzTableTheadHeight.value + 'px';

            return params;
        })
        // 固定左 end

        // 固定右 start
        // 是否存在固定右
        const isFixedRight = computed(() => {
            return zmzTableList.value.filter(item => item.Instance.props.fixed === 'right').length
        })

        const zmzTableFixedRightStyle = computed(() => {
            let params = {};
            let width = 0;
            let flattenColumns = getColumns();
            flattenColumns.forEach(item => {
                if (item.fixed === 'right') {
                    width += item.width || item.realWidth;
                }
            })
            if (isScrollY.value) {
                params['right'] = scrollBar.value.width + 'px';
            }

            if (props.height) {
                let heigth = (zmzTableTbodyHeight.value + zmzTableTheadHeight.value)
                if (isScrollX.value) {
                    heigth = (zmzTableTbodyHeight.value + zmzTableTheadHeight.value) - scrollBar.value.height
                }
                params['height'] = heigth + 'px';
            }

            if (props.maxHeight) {
                let heigth = (zmzTableTbodyHeight.value + zmzTableTheadHeight.value)
                if (isScrollX.value) {
                    heigth = (zmzTableTbodyHeight.value + zmzTableTheadHeight.value) - scrollBar.value.height
                }
                params['max-height'] = (heigth) + 'px';
            }

            if (isScrollX.value) {
                params['bottom'] = scrollBar.value.height + 'px';
            }

            params['width'] = width + 'px';

            return params;
        })

        // 固定右身子样式
        const zmzTableFixedRightTbodyWrapStyle = computed(() => {
            let params = {};

            if (props.height) {
                let heigth = zmzTableTbodyHeight.value
                if (isScrollX.value) {
                    heigth = zmzTableTbodyHeight.value - scrollBar.value.height
                }
                params['height'] = heigth + 'px';
            }

            if (props.maxHeight) {
                let heigth = zmzTableTbodyHeight.value
                if (isScrollX.value) {
                    heigth = zmzTableTbodyHeight.value - scrollBar.value.height
                }
                params['max-height'] = (heigth) + 'px';
            }

            params['top'] = zmzTableTheadHeight.value + 'px';

            return params;
        })
        // 固定右 end

        // 补白
        const zmzTableFixedRightSupplementStyle = computed(() => {
            let params = {};
            params['height'] = zmzTableTheadHeight.value + 'px';
            params['width'] = scrollBar.value.width + 'px';
            return params;
        });

        // 获取浏览器滚动条宽度
        const scrollBar = computed(() => {
            let width;
            let height;

            if (width !== undefined) return width;
            if (height !== undefined) return height;

            const outer = document.createElement('div');
            outer.className = 'zmz-table__tbody-wrap';
            outer.style.visibility = 'hidden';
            outer.style.width = '100px';
            outer.style.height = '100px';
            outer.style.position = 'absolute';
            outer.style.top = '-9999px';
            document.body.appendChild(outer);
            const widthNoScroll = outer.offsetWidth;
            const heightNoScroll = outer.offsetHeight;

            outer.style.overflow = 'scroll';
            const inner = document.createElement('div');
            inner.style.width = '100%';
            inner.style.height = '100%';
            outer.appendChild(inner);
            const widthWithScroll = inner.offsetWidth;
            const heightWithScroll = inner.offsetHeight;

            outer.parentNode.removeChild(outer);
            width = widthNoScroll - widthWithScroll;
            height = heightNoScroll - heightWithScroll;

            return {
                width,
                height
            }
        })

        const mousewheelEvent = (type) => {
            if (!zmzTableTbodyWrap.value) return
            let { scrollTop, scrollHeight, clientHeight } = zmzTableTbodyWrap.value;

            if (type === 'top') {
                if (zmzTableFixedLeftTbodyWrap.value) {
                    zmzTableFixedLeftTbodyWrap.value.scrollTop = zmzTableTbodyWrap.value.scrollTop - 40;
                }
                if (zmzTableFixedRightTbodyWrap.value) {
                    zmzTableFixedRightTbodyWrap.value.scrollTop = zmzTableTbodyWrap.value.scrollTop - 40;
                }
            }

            if (type === 'bottom') {
                if (zmzTableFixedLeftTbodyWrap.value) {
                    zmzTableFixedLeftTbodyWrap.value.scrollTop = zmzTableTbodyWrap.value.scrollTop + 40;
                }
                if (zmzTableFixedRightTbodyWrap.value) {
                    zmzTableFixedRightTbodyWrap.value.scrollTop = zmzTableTbodyWrap.value.scrollTop + 40;
                }
            }

            if (isScrollY.value) {
                scrollEvent(Math.round(scrollTop), scrollHeight, clientHeight, 'y')
            }
        }

        const mousewheelFunc = (event) => {
            if (event.wheelDelta) {
                if (event.wheelDelta > 0) {
                    mousewheelEvent('top');
                }
                if (event.wheelDelta < 0) {
                    mousewheelEvent('bottom');
                }
            } else if (event.detail) { //Firefox 滑轮事件
                if (event.detail > 0) {
                    mousewheelEvent('top');
                }
                if (event.detail < 0) {
                    mousewheelEvent('bottom');
                }
            }
        }

        const getTabelData = () => {
            return props.data.map((item, index) => {
                return {
                    index: index + 1,
                    row: item,
                    columnKey: columnKey.value++,
                    nameKey: new Date().getTime() + '',
                    checkbox: false,
                    radio: false,
                }
            })
        };

        // 事件集合
        // 单选选中
        const setRadioCurrentRow = (data) => {
            zmzTableTbody.value.setRadioCurrentRow(data)
        }
        // 单选清空
        const clearRadioCurrentRow = (data) => {
            zmzTableTbody.value.clearRadioCurrentRow(data)
        }

        // 多选选中
        const setCheckboxCurrentRow = (data) => {
            zmzTableTbody.value.setCheckboxCurrentRow(data)
        }
        // 多选清空
        const clearCheckboxCurrentRow = (data) => {
            zmzTableTbody.value.clearCheckboxCurrentRow(data)
        }

        //单选选中返回
        const onSelectRadio = (row) => {
            emit('on-select-radio', row)
        }
        //多选选中返回
        const onSelectCheckbox = (row, rowLength, selectLength) => {
            zmzTableThead.value.setCheckbox(rowLength, selectLength)
            emit('on-select-checkbox', row)
        }

        // 全选选中
        const setSelectAllCheckbox = (state) => {
            zmzTableTbody.value.onSelectAllCheckbox(state)
        }

        // 全选返回
        const onSelectAllCheckbox = (state, row) => {
            emit('on-select-all-checkbox', state, row)
        }

        // 单击行
        const onRowClick = (row, index, event) => {
            emit('on-row-click', row, index, event)
            emit('on-select', row)
        }

        // 双击行
        const onRowDblclick = (row, index, event) => {
            emit('on-row-dblclick', row, index, event)
        }

        // 右击行
        const onRowContextmenu = (row, index, event) => {
            emit('on-row-contextmenu', row, index, event)
        }

        // 滑入行 
        const onRowMouseover = (row, index, event) => {
            rowHover.value = row
            emit('on-row-mouseover', row, index, event)
        }

        // 滑出行
        const onRowMouseout = (row, index, event) => {
            rowHover.value = {}
            emit('on-row-mouseout', row, index, event)
        }

        // 单击格
        const onCellClick = (cell, row, index, event) => {
            emit('on-cell-click', cell, row, index, event)
        }

        // 双击格
        const onCellDblclick = (cell, row, index, event) => {
            emit('on-cell-dblclick', cell, row, index, event)
        }

        // 右击格
        const onCellContextmenu = (cell, row, index, event) => {
            emit('on-cell-contextmenu', cell, row, index, event)
        }

        // 滑入格
        const onCellMouseover = (cell, row, index, event) => {
            emit('on-cell-mouseover', cell, row, index, event)
        }

        // 滑出格
        const onCellMouseout = (cell, row, index, event) => {
            emit('on-cell-mouseout', cell, row, index, event)
        }

        // 排序
        const onSortChange = (row, order, event) => {
            zmzTableTbody.value.onUpdateSort(row.props.prop, order, event)
            emit('on-sort-change', row, order, event)
        }

        watch(() => props.data, () => {
            zmzTableData.value = getTabelData()
        }, { immediate: true, deep: true })

        // 其他操作
        provide('zmzTable', {
            zmzTableList: zmzTableList,
            updateDom: updateDom,
            defaultSort: props.defaultSort,
            sortMethod: props.sortMethod,
            columnKey: columnKey,
            onSelectRadio: onSelectRadio,
            onSelectCheckbox: onSelectCheckbox,
            setSelectAllCheckbox: setSelectAllCheckbox,
            onRowClick: onRowClick,
            onRowDblclick: onRowDblclick,
            onRowContextmenu: onRowContextmenu,
            onCellClick: onCellClick,
            onCellDblclick: onCellDblclick,
            onCellContextmenu: onCellContextmenu,
            onRowMouseover: onRowMouseover,
            onRowMouseout: onRowMouseout,
            onCellMouseover: onCellMouseover,
            onCellMouseout: onCellMouseout,
            onSelectAllCheckbox: onSelectAllCheckbox,
            onSortChange: onSortChange,
            dataClone: dataClone
        })

        return {
            zmzTable,
            zmzTableTbodyWrap,
            zmzTableTheadWrap,
            tableHeader,
            zmzTableClass,
            zmzTableStyle,
            zmzTableTbodyWrapStyle,
            zmzTableTbody,
            zmzTableThead,
            scroll,
            isScrollY,
            zmzTableTheadWidthStyle,
            zmzTableTbodyWidthStyle,
            zmzTableList,
            zmzTableFixedRightTbodyWrap,
            zmzTableData,
            rowHover,
            scrollBar,
            isFixedRight,
            zmzTableFixedRightStyle,
            zmzTableFixedRightTbodyWrapStyle,
            isFixedLeft,
            zmzTableFixedLeftStyle,
            zmzTableFixedLeftTbodyWrapStyle,
            zmzTableFixedLeftTbodyWrap,
            zmzTableFixedRightSupplementStyle,
            setRadioCurrentRow,
            clearRadioCurrentRow,
            setCheckboxCurrentRow,
            clearCheckboxCurrentRow,
            mousewheelFunc
        };
    }
});
</script>
