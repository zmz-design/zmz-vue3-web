<template>
    <div ref="zmzWaterfall" class="zmz-waterfall">
        <div class="zmz-waterfall__wrap" :style="[zmzWaterfallWrapStyle]">
            <zmz-waterfall-item v-for="(item, i) in newlist" :key="item.key || item.id" :item="item" :delay="delay"
                :class="{ 'zmz-waterfall__item__loaded': item.loaded }" :style="{
                    padding: padding,
                    width: waterfallItemWidth,
                    left: `${item.left || 0}px`,
                    top: item.loaded ? `${item.top || 0}px` : '100%'
                }" @on-load="onLoad(i, $event)">
                <slot v-bind="item"></slot>
            </zmz-waterfall-item>
        </div>

        <div class="zmz-waterfall__loading" v-if="onLoadData.length < newlist.length && loading" :style="[loadingStyle]">
            <i class="zmz-waterfall__loading__icon" :class="loadingIcon"></i>
            <div class="zmz-waterfall__loading__text">{{ loadingText }}</div>
        </div>
        <div class="zmz-waterfall__button" :style="[buttonStyle]" v-if="button">
            <div class="zmz-waterfall__button__inner" @click.stop.prevent="loadMore" v-if="$slots.button">
                <slot name="button"></slot>
            </div>
            <zmz-button v-else class="zmz-waterfall__button__inner" :type="buttonType" @click.stop.prevent="loadMore">{{
                buttonText }}</zmz-button>
        </div>
    </div>
</template>

<script>
import { computed, watch, ref, onMounted, onBeforeMount, nextTick } from 'vue';
import ZmzWaterfallItem from './zmz-waterfall-item.vue';
import { unitDefaultCompletion } from '../../../utils/unit.js';
import { createDefaultArray } from '../../../utils/array.js';
import { debounce } from '../../../utils/utils.js';


export default {
    name: 'ZmzWaterfall',
    components: {
        ZmzWaterfallItem
    },
    props: {
        /**
         * 数据
         */
        data: {
            type: Array,
            default: () => [],
            validator: (d = []) => {
                return !d.length || d[0].key;
            }
        },
        /**
         * 是否延迟加载
         */
        delay: {
            type: Boolean,
            default: true
        },
        /**
         * 间隔
         */
        gutter: {
            type: [Number, String],
            default: 0
        },
        /**
         * 每个子集的默认宽度
         */
        width: {
            type: [Number, String],
            default: 200
        },
        /**
         * 是否显示加载按钮
         */
        button: {
            type: Boolean,
            default: true
        },
        /**
         * 按钮样式
         */
        buttonStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 按钮文字
         */
        buttonText: {
            type: String,
            default: '加载更多'
        },
        /**
         * 按钮类型
         */
        buttonType: {
            type: String,
            default: 'default'
        },
        /**
         * 加载状态
         */
        loading: {
            type: Boolean,
            default: true
        },
        /**
         * 加载文字
         */
        loadingText: {
            type: String,
            default: '加载中...'
        },
        /**
         * 加载图标
         */
        loadingIcon: {
            type: String,
            default: 'zmz-icon--loading'
        },
        /**
         * 加载样式
         */
        loadingStyle: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    emits: ['on-ready', 'on-loadmore'],
    setup(props, { emit }) {
        const onLoadData = ref([]);
        const newlist = ref(props.data);
        const boxWidth = ref('100%');
        const boxHeight = ref(0);
        const zmzWaterfall = ref(null); // 瀑布流数据管理
        const colNum = ref(1);
        const dataList = ref([]); // 数据源
        const waterfallHeight = ref(0); // 容器高度
        const heightList = createDefaultArray(colNum.value); // 高度

        // 节流数据
        const debounceInitData = debounce(() => {
            let maxIndex = 0;
            const arr = onLoadData.value;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    maxIndex = i + 1;
                } else {
                    break;
                }
            }
            const newData = arr.slice(0, maxIndex);
            initData(newData);
            if (newData.length >= arr.length) {
                nextTick(() => {
                    emit('on-ready');
                });
            }
        });

        // 子集加载回调
        const onLoad = (index, item) => {
            onLoadData.value[index] = item;
            debounceInitData();
        };

        const concatData = (newData = [], oldData = []) => {
            newData.forEach((item, i) => {
                const oldItem = oldData[i] || {};
                oldItem.key === item.key && (newData[i] = oldItem);
            });
            return newData;
        };

        watch(
            () => props.data,
            val => {
                newlist.value = concatData(val, newlist.value);
            }
        );

        //边距
        const padding = computed(() => {
            return unitDefaultCompletion(parseInt(props.gutter) / 2);
        });

        // 子集宽度
        const waterfallItemWidth = computed(() => {
            return unitDefaultCompletion(props.width);
        });

        // 边距的宽
        const waterfallItemPaddingWidth = computed(() => {
            return parseInt(props.width) + parseInt(props.gutter);
        });

        // 重组数据
        const updateData = ({ data, height }) => {
            // 加载更多谷歌浏览器自动滚动到底部
            const oldScrollY = window.scrollY;
            newlist.value = newlist.value.length > data.length ? [...data, ...newlist.value.slice(data.length)] : data;
            boxHeight.value = height;
            window.scrollTo({ top: oldScrollY });
        };

        // 初始化数据
        const initData = optionData => {
            updateData(initWaterFallData(optionData));
        };

        // 设置瀑布流宽度
        const setWaterfallWidth = () => {
            colNum.value = Math.floor(zmzWaterfall.value.clientWidth / waterfallItemPaddingWidth.value) || 1;
            boxWidth.value = `${colNum.value * waterfallItemPaddingWidth.value}px`;
        };

        // 发生改变函数
        const windowResize = debounce(() => {
            setWaterfallWidth();
            updateData(resize(waterfallItemPaddingWidth.value, colNum.value));
        });

        // 异步更新
        onMounted(async () => {
            await nextTick();
            // 初始化瀑布流
            setWaterfallWidth();
            window.addEventListener('resize', windowResize);
        });

        // 卸载监听
        onBeforeMount(() => {
            window.removeEventListener('resize', windowResize);
        });

        // 初始化数据
        const initWaterFallData = (data = []) => {
            // 清空高度
            dataList.value = [];
            // 高度记录
            heightList.value = createDefaultArray(colNum.value);
            return prepare(data);
        };

        // 新增数据
        const prepare = (data = []) => {
            data.forEach(item => {
                const minIndex = finMinIndex(heightList.value);
                if (!item.loaded) {
                    item.left = minIndex * waterfallItemPaddingWidth.value;
                    item.top = Math.min(...heightList.value);
                    item.loaded = 1;
                }
                heightList.value[minIndex] += item.height || 100;
            });
            waterfallHeight.value = Math.max(...heightList.value, 0);
            dataList.value = dataList.value.length ? [...dataList.value, ...data] : data;
            return {
                data: dataList.value,
                height: waterfallHeight.value
            };
        };

        // 重置
        const resize = () => {
            const data = dataList.value.map(item => {
                item.loaded = 0;
                return item;
            });
            // 执行分组数据
            return initWaterFallData(data);
        };

        const finMinIndex = arr => {
            let min = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < arr[min]) min = i;
            }
            return min;
        };

        // 容器样式
        const zmzWaterfallWrapStyle = computed(() => {
            let params = {}
            if (boxWidth.value) {
                params['width'] = boxWidth.value
            }

            if (boxHeight.value) {
                params['height'] = boxHeight.value + 'px'
            }
            return params;
        });

        // 加载
        const loadMore = () => {
            emit('on-loadmore');
        };

        return {
            newlist,
            zmzWaterfall,
            padding,
            waterfallItemWidth,
            onLoad,
            onLoadData,
            zmzWaterfallWrapStyle,
            loadMore
        };
    }
};
</script>
