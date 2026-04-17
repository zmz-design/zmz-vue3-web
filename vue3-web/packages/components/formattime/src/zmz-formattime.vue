<template>
    <div class="zmz-formattime">
        <span class="zmz-formattime__date">{{ formatTime }}</span>
    </div>
</template>
<script>
import { onMounted, ref, onUnmounted } from 'vue';
import { determineDateFormat, determineTimeOrDate, determineTimeFormat, formatDate } from '../../../utils/date.js'
export default {
    name: 'ZmzFormattime',
    props: {
        /**
         * 时间
         */
        time: {
            type: [String, Number],
            default: ''
        },
        /**
         * 默认展示
         */
        defaultTime: {
            type: [String, Number],
            default: ''
        },
        /**
         * 类型
         */
        type: {
            type: String,
            default: 'currenttime',
            validator(value) {
                return ['countdown', 'relativetime', 'currenttime'].includes(value)
            }
        },
        relativetimeOptions: {
            type: Object,
            default() {
                return {}
            }
        },
        countdownOptions: {
            type: Object,
            default() {
                return {}
            }
        },
        currenttimeOptions: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    setup(props) {
        const timer = ref(null);
        const formatTime = ref(props.defaultTime);

        onMounted(() => {
            handleCommonDateFormat(props.time)
        });

        onUnmounted(() => {
            if (timer.value) {
                clearInterval(timer.value);
                timer.value = null;
            }
        });

        const handleCommonDateFormat = (date) => {
            var compatible = 0;
            if (determineTimeFormat(date)) {
                return;
            }
            if (determineDateFormat(date)) {
                compatible = new Date(date.replace(/-/g, '/')).getTime();
            }
            if (determineTimeOrDate(date)) {
                compatible = new Date(date.replace(/-/g, '/')).getTime();
            }

            if (typeof date === 'number') {
                compatible = date;
            }

            // 倒计时
            if (props.type === 'countdown') {
                handleCountdown(compatible)
            } else if (props.type === 'relativetime') {
                handleRelativetime(compatible)
            } else {
                handleCurrenttime()
            }
        }
        // 当前时间
        const handleCurrenttime = () => {
            timer.value = setInterval(() => {
                formatTime.value = formatDate(new Date(), props.currenttimeOptions && props.currenttimeOptions.format ? props.currenttimeOptions.format : 'yyyy-MM-dd hh:mm:ss');
            }, 1000);
        }

        // 倒计时
        const handleCountdown = date => {
            timer.value = setInterval(() => {
                var datetime = new Date(date) - new Date(); //计算剩余的毫秒数
                if (datetime < 0) {
                    clearInterval(timer.value);
                    timer.value = null;
                } else {
                    var d = parseInt(datetime / 1000 / 60 / 60 / 24, 10);
                    var h = parseInt((datetime / 1000 / 60 / 60) % 24, 10);
                    var m = parseInt((datetime / 1000 / 60) % 60, 10); //计算剩余的分钟
                    var s = parseInt((datetime / 1000) % 60, 10); //计算剩余的秒数
                    let dateD = (d < 10 ? '0' + d : d) + (props.countdownOptions && props.countdownOptions.d ? props.countdownOptions.d : '天');
                    let dateH = (h < 10 ? '0' + h : h) + (props.countdownOptions && props.countdownOptions.h ? props.countdownOptions.h : '时');
                    let dateM = (m < 10 ? '0' + m : m) + (props.countdownOptions && props.countdownOptions.m ? props.countdownOptions.m : '分');
                    let dateS = (s < 10 ? '0' + s : s) + (props.countdownOptions && props.countdownOptions.s ? props.countdownOptions.s : '秒');
                    formatTime.value = dateD + dateH + dateM + dateS
                }
            }, 1000);
        };

        // 相对时间
        const handleRelativetime = date => {
            var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
            var hour = minute * 60;
            var day = hour * 24;
            var week = day * 7;
            var month = day * 30;
            var year = day * 365;
            var now = new Date().getTime(); //获取当前时间毫秒
            var dateTimeStamp = new Date(date).getTime();
            var diffValue = now - dateTimeStamp; //时间差
            var minC = diffValue / minute; //计算时间差的分，时，天，周，月
            var hourC = diffValue / hour;
            var dayC = diffValue / day;
            var weekC = diffValue / week;
            var monthC = diffValue / month;
            var yearC = diffValue / year;
            if (yearC == 1) {
                formatTime.value = parseInt(yearC) + (props.relativetimeOptions && props.relativetimeOptions.Y ? props.relativetimeOptions.Y : '年前');
            } else if (monthC >= 1 && monthC <= 12) {
                formatTime.value = parseInt(monthC) + (props.relativetimeOptions && props.relativetimeOptions.M ? props.relativetimeOptions.M : '月前');
            } else if (weekC >= 1 && weekC <= 4) {
                formatTime.value = parseInt(weekC) + (props.relativetimeOptions && props.relativetimeOptions.W ? props.relativetimeOptions.W : '周前');
            } else if (dayC >= 1 && dayC <= 7) {
                formatTime.value = parseInt(dayC) + (props.relativetimeOptions && props.relativetimeOptions.D ? props.relativetimeOptions.D : '天前');
            } else if (hourC >= 1 && hourC <= 24) {
                formatTime.value = parseInt(hourC) + (props.relativetimeOptions && props.relativetimeOptions.h ? props.relativetimeOptions.h : '小时前');
            } else if (minC >= 1 && minC <= 60) {
                formatTime.value = parseInt(minC) + (props.relativetimeOptions && props.relativetimeOptions.m ? props.relativetimeOptions.m : '分钟前');
            } else if (diffValue >= 0 && diffValue <= minute) {
                formatTime.value = props.relativetimeOptions && props.relativetimeOptions.s ? props.relativetimeOptions.s : '刚刚';
            } else {
                var datetime = new Date();
                datetime.setTime(dateTimeStamp);
                var Nyear = datetime.getFullYear();
                var Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
                var Ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
                var Nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
                var Nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
                var Nsecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
                formatTime.value = Nyear + '-' + Nmonth + '-' + Ndate + ' ' + Nhour + ':' + Nminute + ':' + Nsecond;
            }
        };

        return {
            formatTime
        };
    }
};
</script>
