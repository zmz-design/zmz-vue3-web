<template>
    <div class="zmz-book" :style="[zmzBookStyle]" :class="[zmzBookClass]">
        <div class="zmz-book__wrap">
            <div v-for="(item, index) in pageDataList" :key="index" :data-index="item.isFront" class="zmz-book__item"
                :class="[item.className, { 'zmz-book__item--active': index == model }]"
                @click.stop="handleClick(index, item)"
                :style="[{ zIndex: item.zIndex }, zmzBookPageStyle, pageStyle(index, item)]">
                <!-- // 正面 -->
                <div class="zmz-book__item__front" :style="[item.frontStyle]">
                    <template v-if="$slots.frontImg">
                        <div class="zmz-book__item__imgwrap">
                            <slot name="frontImg" :item="item"></slot>
                        </div>
                    </template>
                    <template v-else>
                        <div class="zmz-book__item__imgwrap" v-if="item.frontImgUrl">
                            <img class="zmz-book__item__img" :src="item.frontImgUrl"
                                @error="$event.target.classList.add('error')" />
                        </div>
                    </template>
                    <div class="zmz-book__item__bodywrap">
                        <template v-if="$slots.front">
                            <slot name="front" :item="item"></slot>
                        </template>
                        <template v-else>
                            <div v-if="item.frontTitle" class="zmz-book__item__title" :class="[pageTitleClass]"
                                :style="[pageTitleStyle]">
                                <template v-if="$slots.frontTitle">
                                    <slot name="frontTitle" :title="frontTitle"></slot>
                                </template>
                                <template v-else>
                                    {{ item.frontTitle }}
                                </template>
                            </div>
                            <div v-if="item.frontContent" class="zmz-book__item__content" :class="[pageContentClass]"
                                :style="[pageContentStyle]">
                                <template v-if="$slots.frontContent">
                                    <slot name="frontContent" :content="frontContent"></slot>
                                </template>
                                <template v-else>
                                    {{ item.frontContent }}
                                </template>
                            </div>
                            <div class="zmz-book__item__enclosure"
                                v-if="item.frontEnclosure && item.frontEnclosure.length">
                                <template v-if="$slots.frontEnclosure">
                                    <slot name="frontEnclosure" :item="items"></slot>
                                </template>
                                <template v-else>
                                    <div class="zmz-book__item__enclosure__li"
                                        @click.stop="handleEnclosure(index, indexs, items)" :key="indexs"
                                        v-for="(items, indexs) in item.frontEnclosure" :style="[items.style]">
                                        {{ items.name }}
                                    </div>
                                </template>
                            </div>
                            <div v-if="item.frontPageNumber" class="zmz-book__item__number" :style="[pageNumberStyle]"
                                :class="[pageNumberClass]">
                                {{ item.frontPageNumber }}
                            </div>
                        </template>
                    </div>
                </div>
                <div class="zmz-book__item__background"></div>
                <!-- // 背面 -->
                <div class="zmz-book__item__behind" :style="[item.behindStyle]">
                    <template v-if="$slots.behindImg">
                        <div class="zmz-book__item__imgwrap">
                            <slot name="behindImg" :item="item"></slot>
                        </div>
                    </template>
                    <template v-else>
                        <div class="zmz-book__item__imgwrap" v-if="item.behindImgUrl">
                            <img class="zmz-book__item__img" :src="item.behindImgUrl"
                                @error="$event.target.classList.add('error')" />
                        </div>
                    </template>
                    <div class="zmz-book__item__bodywrap">
                        <template v-if="$slots.behind">
                            <slot name="behind" :item="item"></slot>
                        </template>
                        <template v-else>
                            <div v-if="item.behindTitle" class="zmz-book__item__title" :class="[pageTitleClass]"
                                :style="[pageTitleStyle]">
                                <template v-if="$slots.behindTitle">
                                    <slot name="behindTitle" :title="behindTitle"></slot>
                                </template>
                                <template v-else>
                                    {{ item.behindTitle }}
                                </template>
                            </div>
                            <div v-if="item.behindContent" class="zmz-book__item__content" :class="[pageContentClass]"
                                :style="[pageContentStyle]">
                                <template v-if="$slots.behindContent">
                                    <slot name="behindContent" :content="behindContent"></slot>
                                </template>
                                <template v-else>
                                    {{ item.behindContent }}
                                </template>
                            </div>
                            <div class="zmz-book__item__enclosure"
                                v-if="item.behindEnclosure && item.behindEnclosure.length">
                                <template v-if="$slots.behindEnclosure">
                                    <slot name="behindEnclosure" :item="items"></slot>
                                </template>
                                <template v-else>
                                    <div class="zmz-book__item__enclosure__li"
                                        @click.stop="handleEnclosure(index, indexs, items)" :key="indexs"
                                        v-for="(items, indexs) in item.behindEnclosure" :style="[items.style]">
                                        {{ items.name }}
                                    </div>
                                </template>
                            </div>
                            <div v-if="item.behindPageNumber" class="zmz-book__item__number" :style="[pageNumberStyle]"
                                :class="[pageNumberClass]">
                                {{ item.behindPageNumber }}
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div v-if="isEmpty" class="zmz-book__empty" :style="[zmzBookPageStyle]">
                <slot name="empty">
                    <div class="zmz-book__empty__icon" v-if="emptyIcon"><i class="zmz-book__empty__icon__inner"
                            :class="emptyIcon"></i></div>
                    <div class="zmz-book__empty__text">{{ emptyText }}</div>
                </slot>
            </div>
            <div v-if="isNomore" class="zmz-book__nomore" :style="[zmzBookPageStyle]">
                <slot name="nomore">
                    <div class="zmz-book__nomore__icon" v-if="nomoreIcon"><i class="zmz-book__nomore__icon__inner"
                            :class="nomoreIcon"></i></div>
                    <div class="zmz-book__nomore__text">{{ nomoreText }}</div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { unitDefaultCompletion } from '../../../utils/unit.js';

export default {
    name: 'ZmzBook',
    props: {
        /**
         * 宽度
         */
        width: {
            type: Number,
            default: 200
        },
        /**
         * 高度
         */
        height: {
            type: Number,
            default: 300
        },
        /**
         * 数据数据
         */
        data: {
            type: Array,
            default() {
                return []
            }
        },
        pageNumberStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        pageNumberClass: {
            type: Array,
            default() {
                return []
            }
        },
        pageTitleStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        pageTitleClass: {
            type: Array,
            default() {
                return []
            }
        },
        pageContentStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        pageContentClass: {
            type: Array,
            default() {
                return []
            }
        },
        emptyText: {
            type: String,
            default: '暂无数据'
        },
        emptyIcon: {
            type: String,
            default: ''
        },
        nomoreText: {
            type: String,
            default: '最后一页'
        },
        nomoreIcon: {
            type: String,
            default: ''
        },
        frontCover: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: [String, Number],
            default: 0
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 只读
         */
        readonly: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'on-enclosure-click', 'on-first-page', 'on-last-page', 'on-change-page'],
    setup(props, { emit }) {
        const pageData = ref(props.data);
        const len = ref(pageData.value.length);
        const rotateNum = ref(0);

        const model = computed({
            get() {
                return Number(props.modelValue);
            },
            set(val) {
                emit('update:modelValue', Number(val));
            }
        });

        // 书籍样式
        const zmzBookStyle = computed(() => {
            let params = {};
            if (props.width) {
                params['width'] = unitDefaultCompletion(parseFloat(props.width) * 2);
            }

            if (props.height) {
                params['height'] = unitDefaultCompletion(parseFloat(props.height));
            }
            return params;
        });

        // 书籍类名
        const zmzBookClass = computed(() => {
            let params = [];
            if (props.disabled) {
                params.push('zmz-book--disabled');
            }
            if (props.readonly) {
                params.push('zmz-book--readonly');
            }

            return params;
        });

        // 书页样式
        const zmzBookPageStyle = computed(() => {
            let params = {};
            if (props.width) {
                params['width'] = unitDefaultCompletion(props.width);
            }

            if (props.height) {
                params['height'] = unitDefaultCompletion(props.height);
            }
            return params;
        });

        onMounted(() => {
            let pageDataLength = pageData.value.length;
            pageData.value.map((item, index) => {
                item.behindImgUrl = item.behind?.imgUrl;
                item.behindEnclosure = item.behind?.enclosure;
                item.behindContent = item.behind?.content;
                item.behindTitle = item.behind?.title;
                item.behindStyle = item.behind?.style;
                item.frontImgUrl = item.front?.imgUrl;
                item.frontEnclosure = item.front?.enclosure;
                item.frontContent = item.front?.content;
                item.frontTitle = item.front?.title;
                item.frontStyle = item.front?.style;

                item.className = 'zmz-book__item--close';
                if (index == model.value - 1) {
                    item.isFront = true;
                    item.zIndex = pageDataLength--;
                    item.className = 'zmz-book__item--open';
                } else if (index > model.value - 1) {
                    // 后
                    item.zIndex = pageDataLength--;
                } else if (index < model.value - 1) {
                    // 前
                    item.isFront = true;
                    item.zIndex = 1;
                    item.className = 'zmz-book__item--open';
                }

                if (props.frontCover && index > 0) {
                    item.frontPageNumber = index * 2 - 1;
                    item.behindPageNumber = index * 2;
                } else if (!props.frontCover && index >= 0) {
                    item.frontPageNumber = (index + 1) * 2 - 1;
                    item.behindPageNumber = (index + 1) * 2;
                }
                // 页面动画周期
                let _d = (Math.min(Math.abs(model.value - index) * 25, 100) + 50) / 100;
                item.transitionDuration = `${_d}s`;
                return item;
            });
        });

        // 页面列表
        const pageDataList = computed(() => {
            return pageData.value;
        });

        // 手势翻页
        const handleClick = (index, item) => {
            if (props.disabled || props.readonly) return;
            if (item.isFront) {
                let rotateNums = 180;
                handleJump('prev', rotateNums, item);
            } else {
                let rotateNums = 1;
                handleJump('next', rotateNums, item);
            }

            if (index < model.value) {
                item.zIndex = len.value += 1;
            }

            if (index > model.value) {
                item.zIndex = len.value -= 1;
            }
            if (index == model.value) {
                item.zIndex = len.value += 1;
            }

            item.isFront = !item.isFront;
            emit('on-change-page', index);
        };

        // 跳转到指定页面
        const handleJump = (type, rotateNums, item) => {
            const pageMax = pageData.value.length - 1;
            if (type == 'prev') {
                model.value = model.value - 1;
            }

            if (type == 'next') {
                model.value = model.value + 1;
            }

            let timer = setInterval(() => {
                if (type == 'next') {
                    if (rotateNums == 180) {
                        clearInterval(timer);
                        rotateNums = 1;
                        timer = null;
                    } else {
                        rotateNums += 1;
                        rotateNum.value = rotateNums;

                        if (item.isFront && rotateNums >= 70) {
                            item.className = 'zmz-book__item--open';
                        }
                    }
                } else if (type == 'prev') {
                    if (rotateNums == 1) {
                        clearInterval(timer);
                        rotateNums = 180;
                        timer = null;
                    } else {
                        rotateNums -= 1;
                        rotateNum.value = rotateNums;
                        if (!item.isFront && rotateNums <= 120) {
                            item.className = 'zmz-book__item--close';
                        }
                    }
                }
            });
            if (model.value == '0') {
                emit('on-first-page', model.value);
            } else if (model.value == pageMax) {
                emit('on-last-page', model.value);
            }
        };

        // 为空
        const isEmpty = computed(() => {
            return pageDataList.value.length == 0;
        });

        // 没有更多
        const isNomore = computed(() => {
            return pageDataList.value.length && model.value == pageDataList.value.length;
        });

        // 书页样式
        const pageStyle = (index, item) => {
            let params = {};
            if (index == model.value) { // 激活页
                params['transform'] = 'translateZ(0px) rotateY(-' + rotateNum.value + 'deg)';
            }

            if (!item.isFront) { // 下一页
                params['transform'] = 'translateZ(0px) rotateY(0deg)';
            }

            if (item.isFront) { // 上一页
                params['transform'] = 'translateZ(0px) rotateY(-180deg)';
            }
            return params;
        };

        // 点击附件回调
        const handleEnclosure = (index, indexs, items) => {
            emit('on-enclosure-click', index, indexs, items);
        };

        return {
            zmzBookStyle,
            zmzBookPageStyle,
            handleClick,
            model,
            pageDataList,
            isEmpty,
            rotateNum,
            pageStyle,
            isNomore,
            handleEnclosure,
            zmzBookClass
        };
    }
};
</script>
