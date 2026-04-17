<template>
    <div class="zmz-audio" ref="zmzAudio">
        <!-- // 容器 -->
        <div class="zmz-audio__container">
            <audio ref="zmzAudioInner" :preload="options.preload" class="zmz-video-current"
                :src="audioObj && audioObj.url" :muted="muted" :loop="options.loop">
                Your browser does not support the audio element.
            </audio>
        </div>
        <!-- // 控制 -->
        <div class="zmz-audio__controls">
            <!-- // 按钮 -->
            <div class="zmz-audio__controls__left">
                <div class="zmz-audio__unite zmz-audio__play" @click.stop="paused">
                    <i class="zmz-audio__play__icon zmz-icon--player-play" v-if="vaObj.isPlay"></i>
                    <i class="zmz-audio__play__icon zmz-icon--arrow-right-fill" v-else></i>
                </div>
                <div class="zmz-audio__unite zmz-audio__time">
                    <div class="zmz-audio__time__start">{{ vaObj.currentTime }}</div>
                    <div class="zmz-audio__time__split">/</div>
                    <div class="zmz-audio__time__end">{{ vaObj.duration }}</div>
                </div>
            </div>
            <div class="zmz-audio__controls__center">
                <div class="zmz-audio__timeaxis">
                    <div class="zmz-audio__progress" ref="progressline" @click.stop="barPlay($event, 'horizontal')">
                        <div class="zmz-audio__progress__loaded"></div>
                        <div class="zmz-audio__progress__played" :style="{ width: progressbarWidth }">
                            <div class="zmz-audio__progress__dot" ref="zmzAudioProgressDot"
                                @mousedown="onDotDown($event, 'horizontal')">
                            </div>
                        </div>
                        <div class="zmz-audio__progress__bar"></div>
                    </div>
                </div>
            </div>
            <div class="zmz-audio__controls__right">
                <!-- 清晰度 -->
                <div class="zmz-audio__unite zmz-audio__definition">
                    <span>音质</span>
                    <div class="zmz-audio__definition__wrap zmz-audio__unite__hover">
                        <div class="zmz-audio__definitionBox">
                            <div class="zmz-audio__definitionBox__li"
                                :class="{ 'is-active': index === options.defaultQuality, 'zmz-icon--check': index === options.defaultQuality }"
                                v-for="(item, index) in definitionList" :key="index"
                                @click="definitionClick(item, index)">
                                <span>{{ item.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 倍速 -->
                <div class="zmz-audio__unite zmz-audio__double">
                    <span>倍速</span>
                    <div class="zmz-audio__double__wrap zmz-audio__unite__hover">
                        <div class="zmz-audio__doubleBox">
                            <div class="zmz-audio__doubleBox__li"
                                :class="{ 'is-active': item == options.defaultPlaybackSpeed, 'zmz-icon--check': item == options.defaultPlaybackSpeed }"
                                v-for="(item, index) in playbackRateList" :key="index" @click="playbackRateClick(item)">
                                <span>{{ item }}x</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 声音 -->
                <div class="zmz-audio__unite zmz-audio__voice">
                    <span>声音</span>
                    <div class="zmz-audio__voice__wrap zmz-audio__unite__hover">
                        <div class="zmz-audio__voice__wrap__fixed">
                            <div class="zmz-audio__voiceNum">{{ vaObj.volume }}%</div>
                            <div class="zmz-audio__voiceBox" ref="progressvoice"
                                @click.stop="barPlay($event, 'vertical')">
                                <div class="zmz-audio__voiceBox__loaded"></div>
                                <div class="zmz-audio__voiceBox__played" :style="{ height: progressbarHeight }">
                                    <div class="zmz-audio__voiceBox__dot" ref="zmzAudioProgressDot"
                                        @mousedown="onDotDown($event, 'vertical')"></div>
                                </div>
                                <div class="zmz-audio__voiceBox__bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, reactive, defineComponent, onUnmounted, onMounted, nextTick } from 'vue';
import { getAudioInstance, timeConversion } from '../../../utils/media.js';

export default defineComponent({
    name: 'ZmzAudio',
    props: {
        /**
         * 配置
         */
        option: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    emits: [
        'on-load',
        'on-pause',
        'on-paused',
        'on-play',
        'on-timeupdate',
        'on-volume',
        'on-error',
        'on-autoplay',
        'on-canplay',
        'on-drag',
        'on-playbackRate',
        'on-quality'
    ],
    setup(props, { emit }) {
        const zmzAudioInner = ref(null);
        const zmzAudio = ref(null);
        const progressbarWidth = ref(0);
        const progressbarHeight = ref(0);
        const zmzAudioProgressDot = ref(null);
        const progressline = ref(null);
        const progressvoice = ref(null);
        const isMove = ref(false);
        const mode = ref('horizontal');
        const va = ref(null);
        const defaultSpan = ref(2); // 默认跨度
        const option = reactive({
            muted: false, // 静音
            preload: 'auto', // 预加载
            loop: false, // 循环播放
            autoplay: false, // 自动播放
            hotkey: false, // 开启热键
            fastForwardSpan: 2, // 快进跨度
            rewindSpan: 2, // 快退跨度
            volume: 0, // 默认音量
            playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3], // 可选的播放速率
            defaultPlaybackSpeed: 1,
            defaultQuality: 0
        });
        const vaObj = reactive({
            currentTime: '00:00',
            duration: '00:00',
            currentTimeNum: 0,
            isPlay: false,
            volume: 0
        });
        // 参数配置
        const options = computed(() => {
            return Object.assign(option, props.option);
        });

        // 播放速率
        const playbackRateList = computed(() => {
            return options.value.playbackSpeed;
        });

        // 清晰度
        const definitionList = computed(() => {
            return options.value.quality;
        });

        // 视频对象检测
        const audioObj = computed(() => {
            let params = {}
            if (options.value.quality && options.value.quality.length && va.value && va.value.audio) {
                let url = options.value.quality[options.value.defaultQuality].url;
                let type = options.value.quality[options.value.defaultQuality].type;
                va.value.audio.setAttribute('src', url);
                va.value.audio.setAttribute('data-type', type);
                params['src'] = url;
            }
            return params
        });

        nextTick(() => {
            va.value = getAudioInstance(zmzAudioInner.value, options.value); // 传入实例
            // 监听加载
            va.value.on('canplay', function () {
                vaObj.duration = timeConversion(va.value.audio.duration);
                progressbarWidth.value = (va.value.audio.currentTime / va.value.audio.duration) * 100 + '%';
                progressbarHeight.value = va.value.audio.volume * 100 + '%';
                vaObj.volume = va.value.audio.volume * 100;
                emit('on-canplay', va.value);
            });
            // 监听暂停
            va.value.on('pause', function (data) {
                vaObj.isPlay = false;
                emit('on-pause', data);
            });
            // 监听播放
            va.value.on('play', function (data) {
                vaObj.isPlay = true;
                emit('on-play', data);
            });
            // 监听时间
            va.value.on('timeupdate', function () {
                vaObj.currentTime = timeConversion(va.value.audio.currentTime);
                vaObj.currentTimeNum = va.value.audio.currentTime;
                progressbarWidth.value = (va.value.audio.currentTime / va.value.audio.duration) * 100 + '%';
                emit('on-timeupdate', va.value.audio.currentTime);
            });
            // 监听 音量
            va.value.on('volumechange', () => {
                // 静音bug
                if (va.value.audio.muted) {
                    progressbarHeight.value = '0%';
                } else {
                    progressbarHeight.value = va.value.audio.volume * 100 + '%';
                }
                vaObj.volume = va.value.audio.volume * 100;
                emit('on-volume', va.value.audio.volume);
            });

            // 监听失败
            va.value.on('error', function (data) {
                emit('on-error', data);
            });

            emit('on-load', va.value);
        });
        // 自动播放
        const muted = computed(() => {
            if (options.value.autoplay) {
                emit('on-autoplay', true);
                return true;
            }
            emit('on-autoplay', false);
            return false;
        });

        // 播放
        const paused = () => {
            va.value.toggle();
            emit('on-paused', vaObj.isPlay);
        };

        // 按下点
        const onDotDown = (event, type) => {
            mode.value = type;
            if (event.stopPropagation) event.stopPropagation();
            if (event.preventDefault) event.preventDefault();
            mousedown(event);
            // 滑动块x坐标
            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
            document.addEventListener('mouseleave', mouseup);
        };

        // 按下
        const mousedown = () => {
            isMove.value = true;
            emit('on-drag', 1, mode.value);
        };

        // 移动
        const mousemove = (e) => {
            if (isMove.value) {
                if (isMode(e)) {
                    if (mode.value == 'horizontal') {
                        let progresslineLeft = progressline.value.getBoundingClientRect();
                        let progresslineX = e.clientX - progresslineLeft.left;
                        let barWidth = progresslineX / progressline.value.offsetWidth;
                        progressbarWidth.value = barWidth * 100 + '%';
                        va.value.audio.currentTime = va.value.audio.duration * barWidth;
                    } else {
                        let voiceTop = progressvoice.value.getBoundingClientRect();
                        let voiceY = e.clientY - voiceTop.top;
                        let barHeight = 1 - voiceY / progressvoice.value.offsetHeight;
                        progressbarHeight.value = barHeight * 100 + '%';
                        va.value.audio.volume = barHeight.toFixed(1);
                    }
                }
                emit('on-drag', 2, mode.value);
                if (e.stopPropagation) e.stopPropagation();
                if (e.preventDefault) e.preventDefault();
            }
        };

        // 抬起
        const mouseup = () => {
            isMove.value = false;
            emit('on-drag', 3, mode.value);
        };

        // 音量或进度模式
        const isMode = e => {
            if (mode.value == 'horizontal') {
                var progresslineLeft = progressline.value.getBoundingClientRect();
                let min = progresslineLeft.left;
                let max = min + progressline.value.offsetWidth;
                if (e.clientX < min || e.clientX > max) return false;
            } else {
                var voiceTop = progressvoice.value.getBoundingClientRect();
                let min = voiceTop.top;
                let max = min + progressvoice.value.offsetHeight;
                if (e.clientY < min || e.clientY > max) return false;
            }
            return true;
        };

        const barPlay = (e, type) => {
            if (isMode(e)) {
                if (type == 'horizontal') {
                    let progresslineLeft = progressline.value.getBoundingClientRect();
                    let progresslineX = e.clientX - progresslineLeft.left;
                    let barWidth = progresslineX / progressline.value.offsetWidth;
                    progressbarWidth.value = barWidth * 100 + '%';
                    va.value.audio.currentTime = va.value.audio.duration * barWidth;
                } else {
                    let voiceTop = progressvoice.value.getBoundingClientRect();
                    let voiceY = e.clientY - voiceTop.top;
                    let barHeight = 1 - voiceY / progressvoice.value.offsetHeight;
                    progressbarHeight.value = barHeight * 100 + '%';
                    va.value.audio.volume = barHeight.toFixed(1);
                }
            }
        };

        // 倍速切换
        const playbackRateClick = item => {
            option.defaultPlaybackSpeed = item;
            va.value.audio.playbackRate = Number(item);
            emit('on-playbackRate', item);
        };

        // 清晰度切换
        const definitionClick = (item, index) => {
            option.defaultQuality = index;
            emit('on-quality', item.name);
            va.value
                .switchAudio({
                    url: item.url,
                    type: item.type
                })
        };

        // 快捷键
        const keyDown = e => {
            if (!options.value.hotkey) return;
            let key = window.event.keyCode;
            if (key == 32) {
                // 空格
                paused();
                if (e.stopPropagation) e.stopPropagation();
                if (e.preventDefault) e.preventDefault();
            }
            // 箭头
            if (key == 38) {
                // 上
                if (va.value.audio.volume == 1) return;
                va.value.audio.volume = (parseFloat(va.value.audio.volume) + 0.1).toFixed(1);
            } else if (key == 40) {
                // 下
                if (va.value.audio.volume == 0) return;
                va.value.audio.volume = (parseFloat(va.value.audio.volume) - 0.1).toFixed(1);
            } else if (key == 37) {
                // 左
                if (Object.prototype.hasOwnProperty.call(options.value, 'fastForwardSpan')) {
                    va.value.audio.currentTime = va.value.audio.currentTime - options.value.fastForwardSpan;
                } else {
                    va.value.audio.currentTime = va.value.audio.currentTime - defaultSpan.value;
                }
            } else if (key == 39) {
                // 右
                if (Object.prototype.hasOwnProperty.call(options.value, 'rewindSpan')) {
                    va.value.audio.currentTime = va.value.audio.currentTime + options.value.rewindSpan;
                } else {
                    va.value.audio.currentTime = va.value.audio.currentTime + defaultSpan.value;
                }
            }
        };

        onUnmounted(() => {
            if (va.value) {
                va.value.destroy();
                va.value = null;
            }
            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);
            document.removeEventListener('mouseleave', mouseup);
            document.removeEventListener('keydown', keyDown);
        });
        onMounted(() => {
            document.addEventListener('keydown', keyDown);
        });

        return {
            zmzAudioInner,
            paused,
            vaObj,
            onDotDown,
            zmzAudioProgressDot,
            progressline,
            barPlay,
            progressvoice,
            mode,
            progressbarWidth,
            progressbarHeight,
            zmzAudio,
            playbackRateList,
            playbackRateClick,
            definitionList,
            definitionClick,
            options,
            muted,
            audioObj
        };
    }
});
</script>
