import { ref, reactive, getCurrentInstance } from 'vue'
export default function() {
    const _events = ref({}) // 存储监听
    const that = getCurrentInstance();
    const instances = ref([])
    const config = reactive({

    })
    // 监听函数
    const eventObj = reactive({
        on: (name, callback) => {
            if (typeof callback === 'function') {
                if (!_events.value[name]) {
                    _events.value[name] = [];
                }
                _events.value[name].push(callback);
            }
        },
        emit: (name, info) => {
            if (_events.value[name] && _events.value[name].length) {
                for (let i = 0; i < _events.value[name].length; i++) {
                    _events.value[name][i](info);
                }
            }
        }
    })
    let videoEvents = ref([
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
    ]);
    const vaObj = reactive({
        VA: null,
        Element: null,
        play: () => { //播放视频
            if (tipError())
                vaObj.VA.play()
        },
        pause: () => { //暂停视频
            if (tipError())
                vaObj.VA.pause()
        },
        seek: () => { //跳转到特定时间
        },
        toggle: () => { //切换播放和暂停
            if (tipError())
                if (vaObj.VA.paused) {
                    vaObj.VA.play();
                } else {
                    vaObj.VA.pause();
                }
        },
        on: (event, callback) => { //绑定视频和播放器事件
            // //监听 event 事件,触发时调用 callback 函数
            if (tipError())
                eventObj.on(event, callback)
        },
        off(event, callback) {
            //停止监听 event 事件
            let callbacks = _events.value[event];
            _events.value[event] = callbacks && callbacks.filter(fn => fn !== callback);
            return this
        },
        switchVA: (va) => { //切换到其他视频
            return new Promise((resolve) => {
                var support = vaObj.VA.canPlayType(va.type);
                if (support) { // 存在此类型
                    vaObj.VA.src = va.url;
                    vaObj.VA.setAttribute('data-type', va.type);
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        },
        notice: () => { // 显示通知，时间的单位为毫秒，默认时间 2000 毫秒，默认透明度 0.8
        },
        switchQuality: () => { //切换清晰度
        },
        destroy: () => { //销毁播放器
            if (vaObj.VA) {
                instances.value.splice(instances.value.indexOf(that), 1);
                vaObj.VA.pause();
                Object.keys(_events.value).forEach(item => {
                    if (videoEvents.value.indexOf(item) > -1) {
                        vaObj.VA.removeEventListener(item, _events.value[item]);
                    }
                })
                vaObj.VA.src = '';
                vaObj.VA = null
                eventObj.emit('destroy');
                _events.value = {}
            }
        },
        speed: () => { //设置视频速度
        },
        volume: () => { //设置视频音量
        },
        danmaku: () => { //弹幕
            return {
                send: '', // 提交一个新弹幕
                draw: '', // 实时绘制一个新弹幕
                opacity: '', // 设置弹幕透明度，透明度值在 0 到 1 之间
                clear: '', //清除所有弹幕
                hide: '', //隐藏弹幕
                show: '' //显示弹幕
            }
        },
        fullScreen: () => { //两个类型：web 和 browser，默认类型是 browser
            return {
                request: '', // 进入全屏
                cancel: '', // 退出全屏
            }
        },
    })

    // 获取实例
    const getVA = (element, va, options) => {
        Object.assign(config, options)
        vaObj.Element = element
        vaObj.VA = va
        if (options.volume) {
            vaObj.VA.volume = options.volume
        }
        videoEvents.value.forEach(item => {
            vaObj.VA.addEventListener(item, () => {
                eventObj.emit(item);
            });
        })
        instances.value.push(that)
        return vaObj
    }

    // const tipSuccess = (msg) => {
    //     if (!vaObj.VA)
    //         return console.error('警告：' + msg)
    //     else return true
    // }

    const tipError = () => {
        if (!vaObj.VA)
            return console.error('错误提示：请实例化video')
        else return true
    }

    // const tipWarning = (msg) => {
    //     console.error('警告：' + msg)
    //     return false
    // }

    const timeConversion = (second) => {
        second = second || 0;
        if (second === 0 || second === Infinity || second.toString() === 'NaN') {
            return '00:00';
        }
        const add0 = (num) => (num < 10 ? '0' + num : '' + num);
        const hour = Math.floor(second / 3600);
        const min = Math.floor((second - hour * 3600) / 60);
        const sec = Math.floor(second - hour * 3600 - min * 60);
        return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
    }

    // const children = (curEle, tagName) => {
    //     var nodeList = curEle.childNodes;
    //     var ary = [];
    //     if (/MSIE(6|7|8)/.test(navigator.userAgent)) {
    //         for (var i = 0; i < nodeList.length; i++) {
    //             var curNode = nodeList[i];
    //             if (curNode.nodeType === 1) {
    //                 ary[ary.length] = curNode;
    //             }
    //         }
    //     } else {
    //         ary = Array.prototype.slice.call(curEle.children);
    //     }

    //     // 获取指定子元素
    //     if (typeof tagName === "string") {
    //         for (var k = 0; k < ary.length; k++) {
    //             var curTag = ary[k];
    //             if (curTag.nodeName.toLowerCase() !== tagName.toLowerCase()) {
    //                 ary.splice(k, 1);
    //                 k--;
    //             }
    //         }
    //     }
    //     return ary;
    // }

    // 播放器事件
    // screenshot
    // thumbnails_show
    // thumbnails_hide
    // danmaku_show
    // danmaku_hide
    // danmaku_clear
    // danmaku_loaded
    // danmaku_send
    // danmaku_opacity
    // contextmenu_show
    // contextmenu_hide
    // notice_show
    // notice_hide
    // quality_start
    // quality_end
    // destroy
    // resize
    // fullscreen
    // fullscreen_cancel
    // subtitle_show
    // subtitle_hide
    // subtitle_change


    // 监听是否播放完毕

    // handleended() {
    //     this.audioRef.addEventListener('ended', () => {
    //         this.audioRef.pause();
    //         this.isplay = false;
    //         if (this.currentLoop == 0) {
    //             // 顺序播放
    //             this.handleNext();
    //             this.audioRef.play();
    //             this.isplay = true;
    //         } else if (this.currentLoop == 1) {
    //             // 单曲循环
    //             this.loop = true;
    //             this.audioRef.currentTime = 0;
    //             this.currentActive = this.songIndex;
    //             // this.songIndex = this.songIndex;
    //             this.audioRef.play();
    //             this.isplay = true;
    //         } else if (this.currentLoop == 2) {
    //             // 随机播放
    //             var randindex = parseInt(Math.random() * this.dataSong.length);
    //             console.log(randindex);
    //             this.currentActive = randindex;
    //             this.songIndex = randindex;
    //             this.audioRef.play();
    //             this.isplay = true;
    //         }
    //     });
    // }

    // 视频事件

    // 音频事件

    return {
        getVA,
        timeConversion
    }
}
