<template>
    <div class="zmz-barrage" :class="{ 'zmz-barrage--paused': paused, 'zmz -barrage-hidden': hidden }">
        <div class="zmz-barrage__wrap" ref="zmzBarrageWrap"></div>
    </div>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, ref, nextTick, watch, createApp, h } from 'vue';
export default defineComponent({
    name: 'ZmzBarrage',
    props: {
        data: {
            type: Array,
            default: () => []
        },
        //循环播放
        loop: {
            type: Boolean,
            default: false
        },
        // 自动播放
        autoplay: {
            type: Boolean,
            default: true
        },
        // 速度
        speeds: {
            type: Number,
            default: 200.
        },
        // 轨道数
        tracks: {
            type: Number,
            default: 3
        },
        offsetRight: {
            type: Number,
            default: 10
        },
        // 偏移
        offsetTop: {
            type: Number,
            default: 10
        },
        // 默认字号
        fontSize: {
            type: Number,
            default: 18
        },
        // 默认颜色
        color: {
            type: String,
            default: '#000'
        },
        //刷新频率
        debounce: {
            type: Number,
            default: 0
        },
        //使用htm1
        useHtml: {
            type: Boolean,
            default: false
        },
        // 是否开启悬浮暂停
        suspend: {
            type: Boolean,
            default: false
        }
    },
    emits: ['on-barrage-track-change', 'on-barrage-loop', 'on-barrage-item-mousemove', 'on-barrage-item-mouseout', 'on-barrage-item-loop-end', 'on-barrage-item-end', 'on-barrage-end'],
    setup(props, { emit, slots }) {
        const zmzBarrageWrap = ref(null)
        const index = ref(0);
        const trackList = ref([]);
        const barrageList = ref([]);
        const timer = ref(null);
        const paused = ref(false);
        const hidden = ref(false);

        onMounted(() => {
            init()
        })

        onUnmounted(() => {
            clearTimer();
        })

        watch(() => props.tracks, () => {
            changeTrack()
        })

        watch(() => props.data, (val) => {
            barrageList.value = [...val]
        }, { immediate: true })

        const init = () => {
            initTrack();
            if (props.autoplay) {
                play();
            }
        }
        const initTrack = () => {
            for (let x = 0; x < props.tracks; x++) {//建立弹幕墙,此处的循环次数为当前页面运行的弹幕行数
                trackList.value[x] = [];
            }
        }

        const changeTrack = () => {
            if (trackList.value.length > props.tracks) { // 减
                let trackIndex = trackList.value.length - props.tracks;
                trackList.value = trackList.value.splice(trackIndex);
            } else if (trackList.value.length < props.tracks) { // 加
                let trackIndex = props.tracks - trackList.value.length;
                trackList.value = trackList.value.concat(new Array(trackIndex).fill([]));
            }
            emit('on-barrage-track-change', props.tracks)
        }

        const play = () => {
            clearTimer();
            execute();
            paused.value = false;
            if (Math.abs(props.debounce) == 0) {
                timer.value = requestAnimationFrame(play.bind(this));
            } else {
                timer.value = setTimeout(() => { play() }, Math.abs(props.debounce));
            }
        }

        const pause = () => {
            paused.value = true;
            clearTimer();
        }


        const reset = () => {
            paused.value = false;
            index.value = 0;
            clearTimer();
            initTrack();
            nextTick(() => {
                zmzBarrageWrap.value.innerHTML = '';
            })
        }
        const show = () => {
            hidden.value = false;
        }

        const hide = () => {
            hidden.value = true
        }
        const clearTimer = () => {
            if (timer.value) {
                if (Math.abs(props.debounce) == 0) {
                    cancelAnimationFrame(timer.value)
                } else {
                    clearTimeout(timer.value)
                    timer.value = null
                }
            }
        }

        const execute = () => {
            if (props.loop && barrageList.value.length - index.value) {
                emit('on-barrage-loop', index.value)
                index.value = 0
                insert()
            } else {
                insert()
            }
        }

        // 插入
        const insert = (item) => {
            let currentIndex = props.loop ? index.value % barrageList.value.length : index.value;
            let itemDanmu = item || barrageList.value[currentIndex];
            if (itemDanmu && itemDanmu.content) {
                nextTick(() => {// 检测是否可以插入弹幕
                    if (zmzBarrageWrap.value) {
                        let trackIndex = getTrackIndex();
                        if (trackIndex > -1) {
                            let elem = document.createElement('div');
                            if (slots.default) {
                                elem = getRenderSlots(itemDanmu, currentIndex)
                            } else {
                                if (props.useHtml) {
                                    elem.innerHTML = itemDanmu.content;
                                } else {
                                    elem.innerHTML = itemDanmu.content;
                                }
                            }
                            elem.classList.add('zmz-barrage__item');
                            zmzBarrageWrap.value.appendChild(elem);
                            trackList.value[trackIndex].push(elem);
                            elem.classList.add('zmz-barrage__item--move');
                            elem.style.fontSize = `${props.fontSize}px`;
                            elem.style.color = `${props.color}`;
                            if (itemDanmu.style != null && itemDanmu.style != undefined && Object.keys(itemDanmu.style).length) {
                                for (const key in itemDanmu.style) {
                                    elem.style[key] = itemDanmu.style[key]
                                }
                            }
                            let height = elem.offsetHeight;
                            let width = elem.offsetWidth;
                            let wrapWidth = zmzBarrageWrap.value.offsetWidth;
                            if (typeof (itemDanmu.height) == 'number') {
                                height = itemDanmu.height;
                            }

                            let animationDuration = (wrapWidth + width) / props.speeds;
                            if (itemDanmu.speeds && typeof (itemDanmu.speeds) == 'number') {
                                animationDuration = (wrapWidth + width) / (props.speeds + parseFloat(itemDanmu.speeds));
                            }

                            elem.style.height = `${height}px`;
                            elem.style.top = `${trackIndex * (height + props.offsetTop)}px`;
                            elem.style.width = `${width}px`;
                            elem.style.setProperty('--zmz-barrage-item-move-width', `-${wrapWidth + width}px`);
                            elem.style.animationDuration = `${animationDuration}s`;
                            elem.dataset.index = index.value;
                            elem.dataset.itemspeeds = itemDanmu.speeds ? itemDanmu.speeds : '';
                            props.suspend && elem.addEventListener('mousemove', (event) => {
                                elemMousemove(event, elem);
                            })
                            props.suspend && elem.addEventListener('mouseout', (event) => {
                                elemMouseout(event, elem)
                            })
                            elem.addEventListener('animationend', (event) => {
                                elemAnimationend(event, elem);
                            })
                            index.value++
                        }
                    }
                })
            }
        }

        const getRenderSlots = (node, index) => {
            const renderDom = createApp({
                render() {
                    return h('div', {}, [
                        slots.default &&
                        slots.default({
                            node: node,
                            index: index,
                        }),
                    ])
                },
            })

            const elem = renderDom.mount(document.createElement('div'))
            return elem && elem.$el;
        }

        const elemMousemove = (event, elem) => {
            elem.classList.add('zmz-barrage__item--paused');
            emit('on-barrage-item-mousemove', event, elem);
        }

        const elemMouseout = (event, elem) => {
            elem.classList.remove('zmz-barrage__item--paused');
            emit('on-barrage-item-mouseout', event, elem);
        }

        const elemAnimationend = (event, elem) => {
            if (props.loop) {
                emit('on-barrage-item-loop-end', event, elem.dataset.index);
            } else {
                emit('on-barrage-item-end', event, elem.dataset.index);
            }
            if (index.value == barrageList.value.length - 1 && !props.loop) {
                emit('on-barrage-end', event, elem.dataset.index);
            }
            for (let i = 0; i < trackList.value.length; i++) {
                for (let x = 0; x < trackList.value[i].length; x++) {
                    if (trackList.value[i][x] == elem) {
                        trackList.value[i].splice(x, 1);
                        break;
                    }
                }
            }
            props.suspend && elem.removeEventListener('mousemove', (event) => {
                elemMousemove(event, elem)
            });
            props.suspend && elem.removeEventListener('mouseout', (event) => {
                elemMouseout(event, elem)
            });
            elem.removeEventListener('animationend', (event) => {
                elemAnimationend(event, elem)
            });
            zmzBarrageWrap.value.removeChild(elem);
        }

        const addcurrent = (item) => {
            if (index.value == barrageList.value.length) {
                barrageList.value.push(item);
                return barrageList.value.length - 1
            } else {
                const index = index.value % barrageList.value.length;
                barrageList.value.splice(index, 0, item)
                return index + 1
            }
        }
        const addEnd = (item) => {
            barrageList.value.push(item);
            return barrageList.value.length - 1
        }
        const getTrackIndex = () => {
            for (let i = 0; i < trackList.value.length; i++) {
                let item = trackList.value[i];
                if (item && item.length) {// 为true表示当前轨道有弹幕
                    for (let j = 0; j < item.length; j++) {
                        let elem = item[item.length - 1];//获取弹幕最后
                        let lastDamuLeft = getRightSafeDistance(elem) - props.offsetRight;
                        if (lastDamuLeft <= 0) {//安全距离不够跳出循环
                            break;
                        }

                        if (j === item.length - 1) {//距离够返回轨道位置
                            return i % props.tracks
                        }
                    }
                } else { // 为false表示当前轨道没有弹幕
                    return i % props.tracks
                }
            }
            // 找不到合适轨道
            return -1;
        }

        const getRightSafeDistance = (elem) => {
            return zmzBarrageWrap.value.getBoundingClientRect().right - elem.getBoundingClientRect().right
        }

        const resize = () => {
            nextTick(() => {
                if (zmzBarrageWrap.value) {
                    const items = zmzBarrageWrap.value.children;
                    const width = zmzBarrageWrap.value.offsetWidth;
                    console.log(items)
                    for (let i = 0; i < items.length; i++) {
                        const elem = items[i];
                        elem.style.setProperty('--zmz-barrage-item-move-width', `-${width + elem.offsetWidth}px`);
                        let animationDuration = (width + elem.offsetWidth) / elem.dataset.itemspeeds;
                        if (parseFloat(elem.dataset.itemspeeds)) {
                            animationDuration = (width + elem.offsetWidth) / (props.speeds + parseFloat(elem.dataset.itemspeeds))
                        }
                        elem.style.animationDuration = `${animationDuration}s`;
                    }
                }
            })
        }



        return {
            zmzBarrageWrap,
            hidden,
            pause,
            show,
            reset,
            hide,
            addcurrent,
            addEnd,
            resize,
            clearTimer,
            paused
        };
    }
});
</script>