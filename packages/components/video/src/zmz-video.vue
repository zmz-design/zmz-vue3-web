<template>
    <div class="zmz-video" ref="zmzVideo" :class="[fullscreenClass]" @click="paused">
        <!-- // 容器 -->
        <div class="zmz-video__container">
            <video ref="zmzVideoInner" x-webkit-airplay="allow" playsinline crossorigin="anonymous"
                :preload="options.preload" :autoplay="options.autoplay" x5-video-player-fullscreen="true"
                webkit-playsinline="true" x5-video-player-type="h5" x5-video-orientation="portraint"
                class="zmz-video-current" :poster="audioObj && audioObj.cover"
                :src="audioObj && audioObj.url" :muted="muted" :loop="options.loop"></video>
        </div>
        <!-- // 控制 -->
        <div class="zmz-video__controls">
            <!-- // 按钮 -->
            <div class="zmz-video__controls__left">
                <div class="zmz-video__unite zmz-video__play" @click.stop="paused">
                    <i class="zmz-icon--player-play" v-if="vaObj.isPlay"></i>
                    <i class="zmz-icon--arrow-right-fill" v-else></i>
                </div>
                <div class="zmz-video__unite zmz-video__time">
                    {{ vaObj.currentTime }}
                    <em>/</em>
                    {{ vaObj.duration }}
                </div>
            </div>
            <div class="zmz-video__controls__right">
                <!-- 清晰度 -->
                <div class="zmz-video__unite zmz-video__definition">
                    <span>清晰度</span>
                    <div class="zmz-video__definition__wrap zmz-video__unite__hover">
                        <div class="zmz-video__definitionBox">
                            <div class="zmz-video__definitionBox__li"
                                :class="{ 'is-active': index === options.defaultQuality, 'zmz-icon--check': index === options.defaultQuality }"
                                v-for="(item, index) in definitionList" :key="index" @click="definitionClick(item, index)">
                                <span>{{ item.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 倍速 -->
                <div class="zmz-video__unite zmz-video__double">
                    <span>倍速</span>
                    <div class="zmz-video__double__wrap zmz-video__unite__hover">
                        <div class="zmz-video__doubleBox">
                            <div class="zmz-video__doubleBox__li"
                                :class="{ 'is-active': item == options.defaultPlaybackSpeed, 'zmz-icon--check': item == options.defaultPlaybackSpeed }"
                                v-for="(item, index) in playbackRateList" :key="index" @click="playbackRateClick(item)">
                                <span>{{ item }}x</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 声音 -->
                <div class="zmz-video__unite zmz-video__voice">
                    <span>声音</span>
                    <div class="zmz-video__voice__wrap zmz-video__unite__hover">
                        <div class="zmz-video__voice__wrap__fixed">
                            <div class="zmz-video__voiceNum">{{ vaObj.volume }}%</div>
                            <div class="zmz-video__voiceBox" ref="progressvoice" @click.stop="barPlay($event, 'vertical')">
                                <div class="zmz-video__voiceBox__loaded"></div>
                                <div class="zmz-video__voiceBox__played" :style="{ height: progressbarHeight }">
                                    <div class="zmz-video__voiceBox__dot" ref="zmzVideoProgressDot"
                                        @mousedown="onDotDown($event, 'vertical')"></div>
                                </div>
                                <div class="zmz-video__voiceBox__bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 截图 -->
                <div class="zmz-video__unite zmz-video__picture" v-if="options.screenshot" @click.stop="screenshotClick()">
                    截图</div>
                <!-- 画中画 -->
                <div class="zmz-video__unite zmz-video__picture" @click.stop="picture()">画中画</div>
                <!-- 网页全屏 -->
                <div class="zmz-video__unite zmz-video__webFullscreen" @click.stop="webfullscreen('webfullscreen')">网页全屏
                </div>
                <!-- 全屏 -->
                <div class="zmz-video__unite zmz-video__fullscreen" @click.stop="fullscreen('fullscreen')">全屏</div>
            </div>
        </div>
        <div class="zmz-video__timeaxis">
            <div class="zmz-video__progress" ref="progressline" v-if="true" @click.stop="barPlay($event, 'horizontal')">
                <div class="zmz-video__progress__loaded"></div>
                <div class="zmz-video__progress__played" :style="{ width: progressbarWidth }">
                    <div class="zmz-video__progress__dot" ref="zmzVideoProgressDot" @mousedown="onDotDown($event, 'horizontal')"></div>
                </div>
                <div class="zmz-video__progress__bar"></div>
            </div>
        </div>
        <transition name="zmz-video__notice__slide--fade">
            <div class="zmz-video__notice" v-show="isNotice">{{ notice }}</div>
        </transition>
        <div class="zmz-video__logo" v-if="options.logo"><img class="zmz-video__logo__img" :src="options.logo" /></div>
        <!-- // 右键 -->
        <div class="zmz-video__rightmenu" ref="rightmenu" v-show="isRightmenu">
            <template v-if="contextmenuList.length">
                <div class="zmz-video__rightmenu__li" v-for="(item, index) in contextmenuList" :key="index">
                    <span v-if="item.click" @click="item.click(item)">{{ item.title }}</span>
                    <a :href="item.link" target="_blank" v-else>{{ item.title }}</a>
                </div>
            </template>
            <div class="zmz-video__rightmenu__li"><a href="https://www.zhuimengzhu.com" target="_blank">官网信息</a></div>
            <div class="zmz-video__rightmenu__li"><span> 版本v0.0.1</span></div>
        </div>
        <div class="zmz-video__mask" v-show="isRightmenu" @click.stop="maskClick"></div>
    </div>
</template>

<script>
import { computed, ref, reactive, defineComponent, onUnmounted, onMounted, nextTick, watch } from 'vue';
import { getVideoInstance, timeConversion } from '../../../utils/media.js';
export default defineComponent({
    name: 'ZmzVideo',
    props: {
        video: {
            type: Object,
            default: () => {
                return {};
            }
        },
        option: {
            type: Object,
            default: () => {
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
        'on-contextmenu',
        'on-autoplay',
        'on-notice',
        'on-canplay',
        'on-webfullscreen',
        'on-fullscreen',
        'on-drag',
        'on-picture',
        'on-playbackRate',
        'on-quality'
    ],
    setup(props, { emit }) {
        const zmzVideo = ref(null);
        const zmzVideoInner = ref(null);
        const progressbarWidth = ref(0);
        const progressbarHeight = ref(0);
        const rightmenu = ref(null);
        const isRightmenu = ref(false);
        const fullscreenClass = ref({});
        const zmzVideoProgressDot = ref(null);
        const progressline = ref(null);
        const progressvoice = ref(null);
        const isMove = ref(false);
        const mode = ref('horizontal');
        const va = ref(null);
        const isNotice = ref(false);
        const notice = ref('');
        const noticeTime = ref(null);
        const defaultArray = reactive({
            contextmenu: []
        });
        const defaultSpan = ref(2); // 默认跨度
        const option = reactive({
            muted: false, // 静音
            preload: 'auto', // 预加载
            loop: false, // 循环播放
            autoplay: false, // 自动播放
            screenshot: false, // 屏幕截图
            hotkey: false, // 开启热键
            fastForwardSpan: 2, // 快进跨度
            rewindSpan: 2, // 快退跨度
            volume: 0.5, // 默认音量
            playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2], // 可选的播放速率
            logo: '', // 自定义左上角logo
            contextmenu: [], // 右键菜单
            quality: [],
            defaultQuality: 0, // 默认质量
            defaultPlaybackSpeed: 1 // 默认倍速
        });
        const vaObj = reactive({
            currentTime: '00:00',
            duration: '00:00',
            currentTimeNum: 0,
            isPlay: false,
            volume: 0
        });
        const isClickCurrentTime = ref(false);
        // 参数配置
        const options = computed(() => {
            return Object.assign(option, props.option);
        });

        // 右键菜单列表
        const contextmenuList = computed(() => {
            return defaultArray.contextmenu.concat(options.value.contextmenu);
        });

        // 播放速率
        const playbackRateList = computed(() => {
            return options.value.playbackSpeed;
        });

        // 清晰度
        const definitionList = computed(() => {
            return props.video.quality;
        });

        // 屏幕截图
        const screenshotClick = () => {
            var canvas = (window.canvas = document.createElement('canvas'));
            canvas.width = zmzVideoInner.value.clientWidth;
            canvas.height = zmzVideoInner.value.clientHeight;
            canvas.getContext('2d').drawImage(zmzVideoInner.value, 0, 0, canvas.width, canvas.height); // 图片大小和视频分辨率一致
            var strDataURL = canvas.toDataURL('image/png'); // canvas中video中取一帧图片并转成dataURL
            var arr = strDataURL.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            var blob = new Blob([u8arr], {
                type: mime
            });
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = '截图';
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 1000);
        };

        // 消息通知
        const videoNotice = (data, time = 2000) => {
            isNotice.value = true;
            notice.value = data;
            if (noticeTime.value) {
                clearTimeout(noticeTime.value);
            }
            if (time > 0) {
                noticeTime.value = setTimeout(() => {
                    isNotice.value = false;
                }, time);
            }
            emit('on-notice', isNotice.value);
        };

        // 视频对象检测
        const audioObj = computed(() => {
            let params = {}
            if (options.value.quality && options.value.quality.length && va.value && va.value.video) {
                let url = options.value.quality[options.value.defaultQuality].url;
                let type = options.value.quality[options.value.defaultQuality].type;
                let cover = options.value.quality[options.value.defaultQuality].cover;
                var support = va.value && va.value.video.canPlayType(type);
                if (support) {
                    va.value.video.setAttribute('src', url);
                    va.value.video.setAttribute('data-type', type);
                    params['cover'] = cover? cover: options.value.cover;
                    params['src'] = url;
                    return params;
                } else {
                    videoNotice('警告:媒体类型不支持或不存在');
                }
            }
            return params
        });

        nextTick(() => {
            va.value = getVideoInstance(zmzVideoInner.value, options.value); // 传入实例
            // 监听加载
            va.value.on('canplay', function () {
                vaObj.duration = timeConversion(va.value.video.duration);
                progressbarWidth.value = (va.value.video.currentTime / va.value.video.duration) * 100 + '%';
                progressbarHeight.value = va.value.video.volume * 100 + '%';
                vaObj.volume = va.value.video.volume * 100;
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
                vaObj.currentTime = timeConversion(va.value.video.currentTime);
                vaObj.currentTimeNum = va.value.video.currentTime;
                progressbarWidth.value = (va.value.video.currentTime / va.value.video.duration) * 100 + '%';
                emit('on-timeupdate', va.value.video.currentTime);
            });
            // 监听 音量
            va.value.on('volumechange', () => {
                vaObj.volume = va.value.video.volume * 100;
                if (va.value.video.muted) {
                    progressbarHeight.value = '0%';
                } else {
                    progressbarHeight.value = va.value.video.volume * 100 + '%';
                }
                emit('on-volume', va.value.video.volume);
            });

            zmzVideo.value.addEventListener('contextmenu', contextMenu);

            // 监听失败
            va.value.on('error', function (data) {
                emit('on-error', data);
            });

            va.value.on('enterpictureinpicture', function () {
                if (va.value.video.paused) {
                    va.value.pause();
                    vaObj.isPlay = false;
                } else {
                    va.value.play();
                    vaObj.isPlay = true;
                }
                emit('on-picture', true);
                videoNotice('开启画中画模式');
            });

            va.value.on('leavepictureinpicture', function () {
                if (va.value.video.paused) {
                    va.value.pause();
                    vaObj.isPlay = false;
                } else {
                    va.value.play();
                    vaObj.isPlay = true;
                }
                emit('on-picture', false);
                videoNotice('关闭画中画模式');
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

        // 遮罩点击
        const maskClick = () => {
            isRightmenu.value = false;
            emit('on-contextmenu', false);
        };

        const paused = () => {
            va.value.toggle();
            emit('on-paused', vaObj.isPlay);
        };

        // 网页全屏
        const webfullscreen = () => {
            if (fullscreenClass.value['is-fullscreen']) {
                fullscreenClass.value['is-fullscreen'] = false;
                document.querySelector('body').style.overflow = '';
                document.querySelector('html').style.overflow = '';
            } else {
                fullscreenClass.value['is-fullscreen'] = true;
                document.querySelector('body').style.overflow = 'hidden';
                document.querySelector('html').style.overflow = 'hidden';
                if (document.fullscreenElement) {
                    handleFullScreen();
                    fullscreenClass.value['is-fullscreen'] = true;
                }
            }
            emit('on-webfullscreen', fullscreenClass.value['is-fullscreen']);
        };

        // 屏幕全屏
        const fullscreen = () => {
            handleFullScreen();
        };

        // 全屏事件
        const handleFullScreen = () => {
            fullscreenClass.value['is-fullscreen'] = false;
            let element = zmzVideo.value;
            // 判断是否已经是全屏
            // 如果是全屏，退出
            if (document.fullscreenElement) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                emit('on-fullscreen', false);
            } else {
                // 否则，进入全屏
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
                emit('on-fullscreen', true);
            }
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
        const mousemove = e => {
            if (isMove.value) {
                if (isRange(e)) {
                    if (mode.value == 'horizontal') {
                        let progressLeft = progressline.value.getBoundingClientRect();
                        let progresslineX = e.clientX - progressLeft.left;
                        let barWidth = progresslineX / progressline.value.offsetWidth;
                        progressbarWidth.value = barWidth * 100 + '%';
                        va.value.video.currentTime = va.value.video.duration * barWidth;
                    } else {
                        let voiceTop = progressvoice.value.getBoundingClientRect();
                        let voiceY = e.clientY - voiceTop.top;
                        let barHeight = 1 - voiceY / progressvoice.value.offsetHeight;
                        progressbarHeight.value = barHeight * 100 + '%';
                        va.value.video.volume = barHeight.toFixed(1);
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

        // 右键
        const contextMenu = (e) => {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
            isRightmenu.value = true;
            rightmenu.value.style.left = e.offsetX + 'px';
            rightmenu.value.style.top = e.offsetY + 'px';
            emit('on-contextmenu', true);
        };

        const isRange = e => {
            if (mode.value == 'horizontal') {
                var progressLeft = progressline.value.getBoundingClientRect();
                let min = progressLeft.left;
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

        // 画中画
        const picture = () => {
            //添加画中画功能开启关闭事件
            if (!document.pictureInPictureElement) {
                //开启
                va.value.video.requestPictureInPicture().catch(error => {
                    console.log(error, 'Video failed to enter Picture-in-Picture mode.');
                });
            } else {
                //关闭
                document.exitPictureInPicture().catch(error => {
                    console.log(error, 'Video failed to leave Picture-in-Picture mode.');
                });
            }
        };

        const barPlay = (e, type) => {
            if (isRange(e)) {
                if (type == 'horizontal') {
                    let progressLeft = progressline.value.getBoundingClientRect();
                    let progressX = e.clientX - progressLeft.left;
                    let barWidth = progressX / progressline.value.offsetWidth;
                    progressbarWidth.value = barWidth * 100 + '%';
                    va.value.video.currentTime = va.value.video.duration * barWidth;
                    isClickCurrentTime.value = true;
                } else {
                    let voiceTop = progressvoice.value.getBoundingClientRect();
                    let voiceY = e.clientY - voiceTop.top;
                    let barHeight = 1 - voiceY / progressvoice.value.offsetHeight;
                    progressbarHeight.value = barHeight * 100 + '%';
                    va.value.video.volume = barHeight.toFixed(1);
                }
            }
        };

        // 倍速切换
        const playbackRateClick = item => {
            option.defaultPlaybackSpeed = item;
            videoNotice('正在切换' + item + '倍播放速度');
            va.value.video.playbackRate = Number(item);
            emit('on-playbackRate', item);
        };

        // 清晰度切换
        const definitionClick = (item, index) => {
            option.defaultQuality = index;
            emit('on-quality', item.name);
            va.value
                .switchVideo({
                    url: item.url,
                    type: item.type
                })
                .then(data => {
                    if (data) {
                        isNotice.value = false;
                        videoNotice('正在切换' + item.name + '模式');
                    } else {
                        videoNotice('加载失败，媒体类型不支持');
                    }
                });
        };
        onUnmounted(() => {
            if (va.value) {
                va.value.destroy();
                va.value = null;
            }
            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);
            document.removeEventListener('mouseleave', mouseup);
            document.removeEventListener('contextmenu', contextMenu);
        });
        onMounted(() => {
            // 热键
            document.onkeydown = function (e) {
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
                    if (va.value.video.volume == 1) return;
                    va.value.video.volume = (parseFloat(va.value.video.volume) + 0.1).toFixed(1);
                    videoNotice('音量' + va.value.video.volume * 100 + '%');
                } else if (key == 40) {
                    // 下
                    if (va.value.video.volume == 0) return;
                    va.value.video.volume = (parseFloat(va.value.video.volume) - 0.1).toFixed(1);
                    videoNotice('音量' + va.value.video.volume * 100 + '%');
                } else if (key == 37) {
                    // 左
                    if (Object.prototype.hasOwnProperty.call(options.value, 'fastForwardSpan')) {
                        va.value.video.currentTime = va.value.video.currentTime - options.value.fastForwardSpan;
                        videoNotice('快退' + options.value.fastForwardSpan + '秒');
                    } else {
                        va.value.video.currentTime = va.value.video.currentTime - defaultSpan.value;
                        videoNotice('快退' + defaultSpan.value + '秒');
                    }
                } else if (key == 39) {
                    // 右
                    if (Object.prototype.hasOwnProperty.call(options.value, 'rewindSpan')) {
                        va.value.video.currentTime = va.value.video.currentTime + options.value.rewindSpan;
                        videoNotice('快进' + options.value.rewindSpan + '秒');
                    } else {
                        va.value.video.currentTime = va.value.video.currentTime + defaultSpan.value;
                        videoNotice('快进' + defaultSpan.value + '秒');
                    }
                }
            };
        });

        watch(
            () => vaObj.currentTimeNum,
            (news, olds) => {
                if (isClickCurrentTime.value) {
                    if (news - olds > 0) {
                        videoNotice('快进' + parseInt(news - olds) + '秒');
                    } else {
                        videoNotice('快退' + Math.abs(parseInt(news - olds)) + '秒');
                    }
                    isClickCurrentTime.value = false;
                }
            },
            { lazy: true }
        );

        return {
            zmzVideoInner,
            fullscreen,
            webfullscreen,
            fullscreenClass,
            paused,
            vaObj,
            onDotDown,
            zmzVideoProgressDot,
            progressline,
            picture,
            barPlay,
            progressvoice,
            mode,
            progressbarWidth,
            progressbarHeight,
            zmzVideo,
            rightmenu,
            isRightmenu,
            playbackRateList,
            playbackRateClick,
            definitionList,
            definitionClick,
            options,
            contextmenuList,
            maskClick,
            screenshotClick,
            muted,
            notice,
            isNotice,
            audioObj
        };
    }
});
</script>
