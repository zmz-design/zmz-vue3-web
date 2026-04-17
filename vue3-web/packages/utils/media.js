/**
 * 音频实例
 * @param {*} audio 音频对象
 * @returns 
 */
const videoInstances = [];
export const getVideoInstance = (video, options) => {
    if (!video) return console.error('错误提示：音频对象不存在')
    const AudioClass = {
        video: video,
        option: {
            muted: false, // 静音
            preload: 'auto', // 预加载
            loop: false, // 循环播放
            autoplay: false, // 自动播放
            hotkey: false, // 开启热键
            fastForwardSpan: 2, // 快进跨度
            rewindSpan: 2, // 快退跨度
            volume: 0, // 默认音量
            playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2], // 可选的播放速率
            quality: [],
            defaultQuality: 0
        },
        videoEvents: [
            'abort',
            'canplay',
            'canplaythrough',
            'durationchange',
            'emptied',
            'ended',
            'error',
            'loadeddata',
            'loadedmetadata',
            'loadstart',
            'mozaudioavailable',
            'pause',
            'play',
            'playing',
            'progress',
            'ratechange',
            'seeked',
            'seeking',
            'stalled',
            'suspend',
            'timeupdate',
            'volumechange',
            'waiting',
            'enterpictureinpicture',
            'leavepictureinpicture',
        ],
        init: function (option) {
            this.video = video
            this.option = Object.assign(this.option, option)
            // 挂载事件
            this.videoEvents.forEach(item => {
                this.video.addEventListener(item, () => {
                    this.listenEvents.emit(item);
                });
            })
            videoInstances.push(this.video)
            return this;
        },
        play() { // 播放
            this.video.play()
        },
        pause() { //暂停
            this.video.pause()
        },
        seek(time) { //跳转到特定时间
            if (typeof time !== 'number') console.error('错误提示：seek参数类型不正确')
            this.video.currentTime = time
        },
        toggle() { //切换播放和暂停
            if (this.video.paused) {
                this.video.play();
            } else {
                this.video.pause();
            }
        },
        on(event, callback) { //绑定视频和播放器事件
            // //监听 event 事件,触发时调用 callback 函数
            this.listenEvents.on(event, callback)
        },
        off(event, callback) {
            //停止监听 event 事件
            let callbacks = this.listenEvents.storage[event];
            this.listenEvents.storage[event] = callbacks && callbacks.filter(fn => fn !== callback);
            return this
        },
        switchVideo(video) { //切换到其他音频
            return new Promise((resolve) => {
                var support = this.video.canPlayType(video.type);
                if (support) { // 存在此类型
                    this.video.src = video.url;
                    this.video.setAttribute('data-type', video.type);
                    resolve({
                        code: 1,
                        data: this.video
                    })
                } else {
                    resolve({
                        code: 0,
                        msg: '媒体类型不存在'
                    })
                }
            })
        },
        setQuality(index) { //设置清晰度
            return new Promise((resolve) => {
                if (this.option.quality.length) {
                    let currentQuality = this.option.quality.find((item, ind) => ind === index)
                    this.switchVideo(currentQuality).then((res) => {
                        resolve(res)
                    })
                } else {
                    resolve({
                        code: 0,
                        msg: '清晰度列表不能为空'
                    })
                }
            })
        },
        destroy() { //销毁
            if (this.video) {
                videoInstances.splice(videoInstances.indexOf(this.video), 1);
                this.video.pause();
                Object.keys(this.listenEvents.storage).forEach(item => {
                    if (this.videoEvents.indexOf(item) > -1) {
                        this.video.removeEventListener(item, this.listenEvents.storage[item]);
                    }
                })
                this.video.src = ''
                this.video.setAttribute('data-type', '');
                this.video.setAttribute('src', '');
                this.video = null
                this.listenEvents.emit('destroy');
                this.listenEvents.storage = {}
            }
        },
        setPlaybackRate(playbackRate) { //设置播放速度
            if (typeof playbackRate !== 'number') console.error('错误提示：setPlaybackRate参数类型不正确')
            this.video.playbackRate = parseFloat(playbackRate);
        },
        getPlaybackRate() { //获取播放速度
            return this.video.playbackRate;
        },
        setVolume(volume) { //设置音量
            if (typeof volume !== 'number') console.error('错误提示：setVolume参数类型不正确')
            this.video.volume = parseFloat(volume)
        },
        getVolume() { //获取音量
            return this.video.volume
        },
        listenEvents: { // 事件监听
            storage: {},
            on(name, callback) {
                if (typeof callback === 'function') {
                    if (!this.storage[name]) {
                        this.storage[name] = [];
                    }
                    this.storage[name].push(callback);
                }
            },
            emit(name, info) {
                if (this.storage[name] && this.storage[name].length) {
                    for (let i = 0; i < this.storage[name].length; i++) {
                        this.storage[name][i](info);
                    }
                }
            }
        }
    }
    return AudioClass.init(options)
}

/**
 * 音频实例
 * @param {*} audio 音频对象
 * @returns 
 */
const audioInstances = [];
export const getAudioInstance = (audio, options) => {
    // 判断类型错误
    if (!audio) return console.error('错误提示：音频对象不存在')
    const AudioClass = {
        audio: audio,
        option: {
            muted: false, // 静音
            preload: 'auto', // 预加载
            loop: false, // 循环播放
            autoplay: false, // 自动播放
            hotkey: false, // 开启热键
            fastForwardSpan: 2, // 快进跨度
            rewindSpan: 2, // 快退跨度
            volume: 0, // 默认音量
            playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2], // 可选的播放速率
            quality: [],
            defaultQuality: 0
        },
        audioEvents: [
            'abort',
            'canplay',
            'canplaythrough',
            'durationchange',
            'emptied',
            'ended',
            'error',
            'loadeddata',
            'loadedmetadata',
            'loadstart',
            'mozaudioavailable',
            'pause',
            'play',
            'playing',
            'progress',
            'ratechange',
            'seeked',
            'seeking',
            'stalled',
            'suspend',
            'timeupdate',
            'volumechange',
            'waiting',
            'enterpictureinpicture',
            'leavepictureinpicture',
        ],
        init: function (option) {
            this.audio = audio
            this.option = Object.assign(this.option, option)
            // 挂载事件
            this.audioEvents.forEach(item => {
                this.audio.addEventListener(item, () => {
                    this.listenEvents.emit(item);
                });
            })
            audioInstances.push(this.audio)
            return this;
        },
        play() { // 播放
            this.audio.play()
        },
        pause() { //暂停
            this.audio.pause()
        },
        seek(time) { //跳转到特定时间
            if (typeof time !== 'number') console.error('错误提示：seek参数类型不正确')
            this.audio.currentTime = time
        },
        toggle() { //切换播放和暂停
            if (this.audio.paused) {
                this.audio.play();
            } else {
                this.audio.pause();
            }
        },
        on(event, callback) { //绑定视频和播放器事件
            // //监听 event 事件,触发时调用 callback 函数
            this.listenEvents.on(event, callback)
        },
        off(event, callback) {
            //停止监听 event 事件
            let callbacks = this.listenEvents.storage[event];
            this.listenEvents.storage[event] = callbacks && callbacks.filter(fn => fn !== callback);
            return this
        },
        switchAudio(audio) { //切换到其他音频
            return new Promise((resolve) => {
                var support = this.audio.canPlayType(audio.type);
                if (support) { // 存在此类型
                    this.audio.src = audio.url;
                    this.audio.setAttribute('data-type', audio.type);
                    resolve({
                        code: 1,
                        data: this.audio
                    })
                } else {
                    resolve({
                        code: 0,
                        msg: '媒体类型不存在'
                    })
                }
            })
        },
        notice() { // 显示通知，时间的单位为毫秒，默认时间 2000 毫秒，默认透明度 0.8
        },
        setQuality(index) { //设置清晰度
            return new Promise((resolve) => {
                if (this.option.quality.length) {
                    let currentQuality = this.option.quality.find((item, ind) => ind === index)
                    this.switchAudio(currentQuality).then((res) => {
                        resolve(res)
                    })
                } else {
                    resolve({
                        code: 0,
                        msg: '清晰度列表不能为空'
                    })
                }
            })
        },
        destroy() { //销毁
            if (this.audio) {
                audioInstances.splice(audioInstances.indexOf(this.audio), 1);
                this.audio.pause();
                Object.keys(this.listenEvents.storage).forEach(item => {
                    if (this.audioEvents.indexOf(item) > -1) {
                        this.audio.removeEventListener(item, this.listenEvents.storage[item]);
                    }
                })
                this.audio.src = ''
                this.audio.setAttribute('data-type', '');
                this.audio.setAttribute('src', '');
                this.audio = null
                this.listenEvents.emit('destroy');
                this.listenEvents.storage = {}
            }
        },
        setPlaybackRate(playbackRate) { //设置播放速度
            if (typeof playbackRate !== 'number') console.error('错误提示：setPlaybackRate参数类型不正确')
                console.log(playbackRate)
            this.audio.playbackRate = parseFloat(playbackRate);
        },
        getPlaybackRate() { //获取播放速度
            return this.audio.playbackRate;
        },
        setVolume(volume) { //设置音量
            if (typeof volume !== 'number') console.error('错误提示：setVolume参数类型不正确')
            this.audio.volume = parseFloat(volume)
        },
        getVolume() { //获取音量
            return this.audio.volume
        },
        listenEvents: { // 事件监听
            storage: {},
            on(name, callback) {
                if (typeof callback === 'function') {
                    if (!this.storage[name]) {
                        this.storage[name] = [];
                    }
                    this.storage[name].push(callback);
                }
            },
            emit(name, info) {
                if (this.storage[name] && this.storage[name].length) {
                    for (let i = 0; i < this.storage[name].length; i++) {
                        this.storage[name][i](info);
                    }
                }
            }
        }
    }
    return AudioClass.init(options)
}

/**
 * 时间转换
 * @param {} time 时间
 */
export const timeConversion = (time) => {
    time = time || 0;
    if (time === 0 || time === Infinity || time.toString() === 'NaN') {
        return '00:00';
    }
    const add0 = (num) => (num < 10 ? '0' + num : '' + num);
    const hour = Math.floor(time / 3600);
    const min = Math.floor((time - hour * 3600) / 60);
    const sec = Math.floor(time - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
}