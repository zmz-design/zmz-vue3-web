<template>
    <div class="zmz-music" ref="zmzMusic" :class="[zmzMusicClass]">
        <div class="zmz-music__console">
            <div class="zmz-music__cover">
                <div class="zmz-music__cover--img"><img :src="currentSong.pic" :alt="currentSong.title"
                        :title="currentSong.title" /></div>
                <div class="zmz-music__cover--info">
                    <div class="zmz-music__cover--info__songname">{{ currentSong.title }}</div>
                    <div class="zmz-music__cover--info__author">{{ currentSong.author }}</div>
                </div>
            </div>
            <div class="zmz-music__subject">
                <div class="zmz-music__subject--playnav">
                    <div class="zmz-music__subject--playnav__prev"><i class="zmz-icon--player-left" @click="handlePrev"></i>
                    </div>
                    <div class="zmz-music__subject--playnav__play" @click="handlePlay">
                        <i class="zmz-icon--player-play" v-if="vaObj.isPlay"></i>
                        <i class="zmz-icon--arrow-right-fill" v-else></i>
                    </div>
                    <div class="zmz-music__subject--playnav__next"><i class="zmz-icon--player-right"
                            @click="handleNext"></i></div>
                </div>
                <div class="zmz-music__subject--progress">
                    <div class="zmz-music__subject--progress__timeStart">{{ vaObj.currentTime }}</div>
                    <div class="zmz-music__subject--progress__line">
                        <zmz-slider :min="0" v-model="musicValue" @on-change="sliderVal"></zmz-slider>
                    </div>
                    <div class="zmz-music__subject--progress__timeEnd">{{ vaObj.duration }}</div>
                </div>
                <div class="zmz-music__subject--Other">
                    <div class="zmz-music__subject--Other__loop">
                        <i :class="{ 'zmz-icon--player-loop': currentLoop == 0, 'zmz-icon--player-single': currentLoop == 1, 'zmz-icon--player-random': currentLoop == 2 }"
                            @click="handleLoop"></i>
                    </div>
                    <div class="zmz-music__subject--Other__volume" @click="volumemuted">
                        <i class="zmz-icon--player-volume" v-if="options.muted"></i>
                        <i class="zmz-icon--player-volume-mute" v-else></i>
                    </div>
                    <div class="zmz-music__subject--Other__volumeline">
                        <zmz-slider :min="0" v-model="volumevalue" @on-change="volumemutedslider"></zmz-slider>
                    </div>
                    <div class="zmz-music__subject--Other__lyric">
                        <i class="zmz-icon--player-lyric" @click="handleLrcblock()"></i>
                        <i class="zmz-icon--menu" @click="handleSonglist()"></i>
                    </div>
                </div>
                <zmz-audio :option="options" class="zmz-music__audio" @on-load="getExample" style="opacity: 0;width: 0;height: 0;"></zmz-audio>
            </div>
        </div>
        <div class="zmz-music__lrc" v-if="islrc">
            <div class="zmz-music__lrc--overflow">
                <div ref="lrcBox" class="zmz-music__lrc--box">
                    <span v-if="lrcList.length === 0">暂无歌词</span>
                    <ul v-if="lrcList.length >= 0">
                        <li v-for="(item, index) in lrcObj" :key="index" :class="{ currLrc: index === lrcIndex }">{{ item.V
                        }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="zmz-music__song" v-if="issong">
            <div class="zmz-music__song--title">
                <span>序号</span>
                <span>歌曲标题</span>
                <span>歌手</span>
            </div>
            <div class="zmz-music__song--list">
                <div class="zmz-music__song--item" :class="{ 'is-active': currentActive == index }" :key="index"
                    v-for="(item, index) in album" @click="handleClick(index)">
                    <span>{{ index + 1 }}.</span>
                    <span>{{ item.title }}</span>
                    <span>{{ item.author }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, reactive, nextTick, onUnmounted } from 'vue';
import ZmzSlider from '../../form/slider/index.js';
import { timeConversion } from '../../../utils/media.js';
export default {
    name: 'ZmzMusic',
    components: {
        ZmzSlider
    },
    props: {
        /**
         * 音乐数组
         */
        album: {
            type: Array,
            default() {
                return [];
            }
        },
        /**
         * 当前播放
         */
        albumCurrent: {
            type: Number,
            default: 0
        },
        /**
         * 音量
         */
        volume: {
            type: Number,
            default: 0
        },
    },
    emits: [
        'on-pause',
        'on-paused',
        'on-play',
        'on-timeupdate',
        'on-ended',
        'on-volume',
        'on-error',
        'on-canplay',
        'on-song-next',
        'on-song-prev',
        'on-song-change',
        'on-song-prev-last',
        'on-song-next-last'
    ],
    setup(props, { emit }) {
        const zmzMusic = ref(null);
        const zmzMusicWidth = ref(0);
        const audioRef = ref(null);
        const volumevalue = ref(props.volume);
        const currentTime = ref('00:00');
        const lrcObj = ref([]);
        const lrcList = ref([]);
        const musicValue = ref(0);
        const lrcIndex = ref(0);
        const lrcBox = ref(null);
        const islrc = ref(false);
        const issong = ref(false);
        const currentLoop = ref(0);
        const currentActive = ref(props.albumCurrent);
        const option = reactive({
            muted: false, // 静音
            loop: false, // 循环播放
            hotkey: false, // 开启热键
            autoplay: false, // 自动播放
            defaultQuality: 0,
            quality: [],
        });
        const vaObj = reactive({
            currentTime: '00:00',
            duration: '00:00',
            isPlay: false,
        });

        // 参数配置
        const options = computed(() => {
            return Object.assign(option, { quality: props.album, defaultQuality: props.albumCurrent });
        });

        // 当前歌曲
        const currentSong = computed(() => {
            return options.value && options.value.quality[options.value.defaultQuality]
        })

        nextTick(() => {
            zmzMusicWidth.value = zmzMusic.value.clientWidth;
            window.addEventListener('resize', resize);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', resize);
            if (audioRef.value) {
                audioRef.value.removeEventListener('canplay', canplay)
                audioRef.value.removeEventListener('pause', pause)
                audioRef.value.removeEventListener('play', play)
                audioRef.value.removeEventListener('ended', ended)
                audioRef.value.removeEventListener('error', error)
                audioRef.value.removeEventListener('timeupdate', timeupdate)

            }
        })

        const resize = () => {
            if (zmzMusic.value) {
                zmzMusicWidth.value = zmzMusic.value.clientWidth;
            }
        }

        // 公共类名
        const zmzMusicClass = computed(() => {
            let params = '';
            if (zmzMusicWidth.value > 1140) {
                params = 'is-xs';
            } else if (zmzMusicWidth.value < 1140 && zmzMusicWidth.value >= 870) {
                params = 'is-sm';
            } else if (zmzMusicWidth.value < 870 && zmzMusicWidth.value >= 600) {
                params = 'is-md';
            } else if (zmzMusicWidth.value < 600) {
                params = 'is-mn';
            }
            return params;
        });

        const canplay = () => {
            // 监听audio是否加载完毕，如果加载完毕，则读取audio播放时间
            volumemutedslider(volumevalue.value)
            vaObj.duration = timeConversion(audioRef.value.duration);
            vaObj.currentTime = timeConversion(audioRef.value.currentTime);
            lrcObj.value = handleLrc(currentSong.value.lrc);
            let playPromise = audioRef.value.play()
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audioRef.value.play()
                }).catch(() => {

                })
            }
            emit('on-canplay');
        }

        const pause = () => {
            vaObj.isPlay = false;
            emit('on-pause');
        }

        const play = () => {
            vaObj.isPlay = true;
            emit('on-play');
        }

        const ended = () => {
            if (currentLoop.value == 0) {
                options.value.loop = false;
                // 顺序播放
                if (options.value.defaultQuality == props.album.length - 1) {
                    audioRef.value.pause();
                    emit('on-song-prev-last', options.value.defaultQuality)
                } else {
                    handleNext();
                }
            } else if (currentLoop.value == 1) {
                // 单曲循环
                options.value.loop = true;
                currentActive.value = options.value.defaultQuality;
            } else if (currentLoop.value == 2) {
                // 随机播放
                options.value.loop = false;
                var randindex = parseInt(Math.random() * props.album.length);
                options.value.defaultQuality = randindex;
                currentActive.value = randindex;
            }
            emit('on-ended', currentLoop.value)
        }

        const error = () => {
            emit('on-error');
        }

        const timeupdate = () => {
            if (!isNaN(audioRef.value.duration)) {
                vaObj.currentTime = timeConversion(audioRef.value.currentTime);
                musicValue.value = parseInt((audioRef.value.currentTime / audioRef.value.duration) * 100);
                lrcObj.value.map((v, index) => {
                    if (v.T === Math.floor(audioRef.value.currentTime)) {
                        lrcIndex.value = index;
                        if (islrc.value) {
                            lrcBox.value.style.top = lrcBox.value.offsetParent.clientHeight / 2 - 30 * index + 'px';
                        }
                    }
                });
            }
            emit('on-timeupdate', audioRef.value.currentTime)
        }

        // 获取audio返回的音频实例标签
        const getExample = ref => {
            audioRef.value = ref.audio;
            //监听加载是否完毕
            audioRef.value.addEventListener('canplay', canplay);

            // 监听暂停
            audioRef.value.addEventListener('pause', pause);
            // 监听播放
            audioRef.value.addEventListener('play', play);

            // 检测播放是否已经结束
            audioRef.value.addEventListener('ended', ended);

            // 加载错误调用
            audioRef.value.addEventListener('error', error);

            //监听播放时间
            audioRef.value.addEventListener('timeupdate', timeupdate);
        };

        // 上一曲
        const handlePrev = () => {
            if (options.value.defaultQuality == 0) {
                emit('on-song-prev-last')
            } else {
                options.value.defaultQuality--;
                emit('on-song-prev', options.value.defaultQuality)
                emit('on-song-change', options.value.defaultQuality)
            }
        };

        // 下一曲
        const handleNext = () => {
            if (options.value.defaultQuality == props.album.length - 1) {
                emit('on-song-next-last')
            } else {
                options.value.defaultQuality++;
                emit('on-song-next', options.value.defaultQuality)
                emit('on-song-change', options.value.defaultQuality)
            }
        };

        // 点击歌曲切换
        const handleClick = index => {
            musicValue.value = 0;
            currentActive.value = index;
            options.value.defaultQuality = index;
        };

        // 播放方式
        const handleLoop = () => {
            currentLoop.value++;
            if (currentLoop.value > 2) {
                currentLoop.value = 0;
            } else if (currentLoop.value < 0) {
                currentLoop.value = 1;
            }
        };

        // 滑动声音
        const volumemutedslider = value => {
            if (value == 0) {
                options.value.muted = false;
            } else {
                options.value.muted = true;
            }
            volumevalue.value = value;
            audioRef.value.volume = value / 100;
        };

        // 静音
        const volumemuted = () => {
            if (audioRef.value.muted) {
                audioRef.value.muted = false;
                options.value.muted = true;
            } else {
                audioRef.value.muted = true;
                options.value.muted = false;
            }
        };

        // 显示列表
        const handleSonglist = () => {
            issong.value = !issong.value;
            if (issong.value) {
                islrc.value = false;
            }
        };

        // 显示歌词
        const handleLrcblock = () => {
            islrc.value = !islrc.value;
            if (islrc.value) {
                issong.value = false;
            }
        };

        // 点击播放暂停
        const handlePlay = () => {
            if (audioRef.value.paused) {
                audioRef.value.play();
            } else {
                audioRef.value.pause();
            }
            emit('on-paused', vaObj.isPlay);
        };

        // 拖拽修改进度时间
        const sliderVal = value => {
            if (audioRef.value.currentTime >= 0 && !isNaN(audioRef.value.duration)) {
                audioRef.value.currentTime = (value / 100) * audioRef.value.duration;
                vaObj.currentTime = timeConversion(audioRef.value.currentTime);
            }
        };

        // 格式化歌词
        const handleLrc = v => {
            var lyrics = v.split('[');
            v.split('[').map(v => {
                lrcList.value.push(v.slice(9));
            });
            lrcList.value.shift(); // / 截取时会多一个空的
            lyrics.shift();
            var b = [];
            lyrics.map(v => {
                b.push('[' + v);
            });
            lyrics = b;
            var lrcObj = [];
            for (var i = 0; i < lyrics.length; i++) {
                var lyric = decodeURIComponent(lyrics[i]);
                var timeReg = /\[\d*:\d*((\.|\\:)\d*)*\]/g;
                var timeRegExpArr = lyric.match(timeReg);
                if (!timeRegExpArr) continue;
                var clause = lyric.replace(timeReg, '');
                var clausse = clause.replace(/\n/, '');
                for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
                    var t = timeRegExpArr[k];
                    const min = Number(String(t.match(/\[\d*/i)).slice(1));
                    const sec = Number(String(t.match(/:\d*/i)).slice(1));
                    var time = min * 60 + sec;
                    lrcObj.push({ T: time, V: clausse });
                }
            }
            return lrcObj;
        };

        return {
            getExample,
            zmzMusic,
            zmzMusicClass,
            sliderVal,
            volumemuted,
            volumemutedslider,
            handlePlay,
            lrcBox,
            currentTime,
            musicValue,
            issong,
            islrc,
            volumevalue,
            currentLoop,
            handleLrcblock,
            lrcList,
            lrcObj,
            lrcIndex,
            handlePrev,
            handleNext,
            handleSonglist,
            currentActive,
            handleClick,
            handleLoop,
            options,
            currentSong,
            vaObj
        };
    }
};
</script>
