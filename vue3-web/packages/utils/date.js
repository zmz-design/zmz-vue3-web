
// 转换时分秒
const formatHMS = (data, mask) => {
    if (!data || data && (typeof data != 'string')) return;
    var date = data.split(':');
    var zeroize = function (value, length) {
        if (!length) length = 2;
        value = String(value);
        for (var i = 0, zeros = ''; i < (length - value.length); i++) {
            zeros += '0';
        }
        return zeros + value;
    };

    // HH 时 MM 分 dd 秒
    return mask.replace(/([hHmsaAZqQwW])\1?|"[^"]*"|'[^']*'/g,
        function ($0) {
            switch ($0) {
                case 'h': // 12小时一位
                    return date[0] % 12 || 12;
                case 'hh': // 12小时两位
                    return zeroize(date[0] % 12 || 12);
                case 'H': // 24小时制一位
                    return date[0];
                case 'HH': // 24小时制两位
                    return zeroize(date[0]);
                case 'm': // 分钟一位
                    return date[1];
                case 'mm': // 分钟两位
                    return zeroize(date[1]);
                case 's': // 秒一位
                    return date[2];
                case 'ss': // 秒两位
                    return zeroize(date[2]);
                default:
                    return $0.substr(1, $0.length - 2);
            }
        });
};


// 时间列表
const getTimeList = (data) => {
    var startTime = data.start.split(":");
    var startDate = parseInt(startTime[0] * 60) + parseInt(startTime[1]);
    var endTime = data.end.split(":");
    var endDate = parseInt(endTime[0] * 60) + parseInt(endTime[1]);
    var stepTime = data.step.split(":");
    var stepDate = parseInt(stepTime[0] * 60) + parseInt(stepTime[1]);
    var timeArr = []
    var hours = (endDate - startDate)
    for (var i = startDate; i <= hours; i++) {
        var str = ''
        if (i % stepDate == 0) {
            str = zero(parseInt(i / 60)) + ':' + zero(i % 60);
            if (str === '24:00') {
                timeArr.push('23:59')
            } else {
                timeArr.push(str)
            }
        }
    }
    return timeArr;
}

// 补零
const zero = (data) => {
    return data < 10 ? '0' + parseInt(data) : data
}

// 获取上个月
const getPrevMonth = (datetime) => {
    let date = new Date(datetime);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let newYear = year;
    let newMonth = parseInt(month);
    if (newMonth == 0) {
        newYear = parseInt(newYear) - 1;
        newMonth = 12;
    }

    let newDay = day;
    let newDays = new Date(newYear, newMonth, 0);
    newDays = newDays.getDate();

    if (newDay > newDays) {
        newDay = newDays;
    }

    if (newMonth < 10) {
        newMonth = '0' + newMonth;
    }

    if (newDay) {
        return newYear + '/' + newMonth + '/' + newDay;
    } else {
        return newYear + '/' + newMonth;
    }
}

// 获取上年
const getPrevYear = (datetime) => {
    let date = new Date(datetime);
    let year = date.getFullYear() - 1;
    let month = date.getMonth();
    let day = date.getDate();
    let newYear = year;
    let newMonth = parseInt(month) - 2;
    if (newMonth == 0) {
        newYear = parseInt(newYear) - 1;
        newMonth = 12;
    }

    let newDay = day;
    let newDays = new Date(newYear, newMonth, 0);
    newDays = newDays.getDate();

    if (newDay > newDays) {
        newDay = newDays;
    }

    if (newMonth < 10) {
        newMonth = '0' + newMonth;
    }

    if (newDay) {
        return newYear + '/' + newMonth + '/' + newDay;
    } else {
        return newYear + '/' + newMonth;
    }
}

// 获取年份
const getYear = (date) => {
    return new Date(date).getFullYear()
}

// 获取月份
const getMonth = (date) => {
    return new Date(date).getMonth() + 1
}

// 判断日期格式
const isDate = (date) => {
    if (date === null || date === undefined) return false
    if (isNaN(new Date(date).getTime())) return false
    if (!/^(\d{4})(-|\/)([0-1][0-9])(-|\/)([0-5][0-9])$/.test(date)) return false
    return true
};

// 判断日期时间格式
const isDateTime = (date) => {
    if (date === null || date === undefined) return false
    if (isNaN(new Date(date).getTime())) return false
    if (!/^(\d{4})(-|\/)([0-1][0-9])(-|\/)([0-5][0-9])\s{1}([01]?[0-9]|2[0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/.test(
        date)) return false
    return true
};

// 判断日期时间格式
const isTime = (date) => {
    if (date === null || date === undefined) return false
    if (!/^([01]?[0-9]|2[0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/.test(date)) return false
    return true
};

// 格式化时间
const formatTimeDate = (date, format) => {
    if (!format) return date;
}
export {
    getTimeList,
    formatHMS,
    zero,
    getPrevMonth,
    getYear,
    getMonth,
    getPrevYear,
    isDate,
    isDateTime,
    isTime,
    formatTimeDate
}

/**
 * 相对时间
 * @param {*} date 日期
 * @param {*} options 配置
 * @returns 
 */
export const relativeFormattime = (date, options = {}) => {
    var minute = 1000 * 60;
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
    let timeString = ''
    if (yearC == 1) {
        timeString = ' ' + parseInt(yearC) + (options && options.Y ? options.Y : '年前');
    } else if (monthC >= 1 && monthC <= 12) {
        timeString = ' ' + parseInt(monthC) + (options && options.M ? options.M : '月前');
    } else if (weekC >= 1 && weekC <= 4) {
        timeString = ' ' + parseInt(weekC) + (options && options.W ? options.W : '周前');
    } else if (dayC >= 1 && dayC <= 7) {
        timeString = ' ' + parseInt(dayC) + (options && options.D ? options.D : '天前');
    } else if (hourC >= 1 && hourC <= 24) {
        timeString = ' ' + parseInt(hourC) + (options && options.H ? options.H : '小时前');
    } else if (minC >= 1 && minC <= 60) {
        timeString = ' ' + parseInt(minC) + (options && options.S ? options.S : '分钟前');
    } else if (diffValue >= 0 && diffValue <= minute) {
        timeString = options && options.Y ? options.Y : '刚刚';
    } else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var Ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
        var Nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
        var Nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
        var Nsecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
        timeString = Nyear + '-' + Nmonth + '-' + Ndate + ' ' + Nhour + ':' + Nminute + ':' + Nsecond;
    }
    return timeString
}
/**
 * 日期时间格式判断
 * @param {*} datetime 日期时间
 * @returns 
 */
export const determineTimeOrDate = (datetime) => {
    var dateMatch = String(datetime).match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
    if (dateMatch == null) return false;
    var d = new Date(dateMatch[1], dateMatch[3] - 1, dateMatch[4], dateMatch[5], dateMatch[6], dateMatch[7]);
    return d.getFullYear() == dateMatch[1] && d.getMonth() + 1 == dateMatch[3] && d.getDate() == dateMatch[4] && d.getHours() == dateMatch[5] && d.getMinutes() == dateMatch[6] && d.getSeconds() == dateMatch[7];
}
/**
 * 时间格式判断
 * @param {*} time 日期
 * @returns 
 */
export const determineTimeFormat = (time) => {
    let dateMatch = String(time).match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/g);
    if (dateMatch == null) {
        return false;
    }
    if (dateMatch[1] > 24 || dateMatch[3] > 60 || dateMatch[4] > 60) {
        return false;
    }
    return true;
}

/**
 * 日期格式判断
 * @param {*} date 日期
 * @returns 
 */
export const determineDateFormat = (date) => {
    let dateMatch = String(date).match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (dateMatch == null) return false;
    var d = new Date(dateMatch[1], dateMatch[3] - 1, dateMatch[4]);
    return d.getFullYear() == dateMatch[1] && d.getMonth() + 1 == dateMatch[3] && d.getDate() == dateMatch[4];
}

/**
 * 最晚时间
 * @param {*} date 时间
 * @param {*} amount 时间戳
 * @returns 
 */
export const latestTime = function (date, amount) {
    return new Date(Math.min(date.getTime() + amount));
};


/**
 * 最早时间
 * @param {*} date 时间
 * @param {*} amount 时间戳
 * @returns 
 */
export const earliestTime = function (date, amount) {
    return new Date(Math.min(date.getTime() - amount));
};

/**
 * 时间补0
 * @param {*} num 数值
 * @returns 
 */
export const dateZeroFill = (num) => {
    if (num < 10) {
        return '0' + parseInt(num);
    } else {
        return parseInt(num);
    }
};

/**
 * 时间分钟
 * @param {*} date 时间
 * @returns 
 */
export const determineTimeMinutes = (date) => {
    if (date === null || date === undefined) return false
    if (!/^([01]?[0-9]|2[0-3])(:)([0-5][0-9])$/.test(date)) return false
    return true
};

/**
 * 时间转换
 * @param {*} date 时间
 * @param {*} format 格式化
 * @returns 
 */
export const formatDate = (date, format) => {
    if (!date) return
    Date.prototype.format = function (mask) {
        var d = this;
        var zeroize = function (value, length) {
            if (!length) length = 2;
            value = String(value);
            for (var i = 0, zeros = ''; i < (length - value.length); i++) {
                zeros += '0';
            }
            return zeros + value;
        };
        return mask.replace(/d{1,4}|M{1,4}|S{1,3}|yy(?:yy)?|([hHmsaAZqQwW])\1?|[llLoszz]|"[^"]*"|'[^']*'/g,
            function ($0) {
                switch ($0) {
                    case 'd': // 日期一位
                        return d.getDate();
                    case 'dd': // 日期两位
                        return zeroize(d.getDate());
                    case 'ddd': // 星期 简写
                        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
                    case 'dddd': // 星期 英文
                        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                            'Saturday'
                        ][d.getDay()];
                    case 'M': // 月份一位
                        return d.getMonth() + 1;
                    case 'MM': // 月份两位
                        return zeroize(d.getMonth() + 1);
                    case 'MMM': // 月份英文简写
                        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
                            'Nov', 'Dec'
                        ][d.getMonth()];
                    case 'MMMM': // 月份英文
                        return ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                            'August', 'September', 'October', 'November', 'December'
                        ][d.getMonth()];
                    case 'yy': // 年两位
                        return String(d.getFullYear()).substr(2);
                    case 'yyyy': // 年四位
                        return d.getFullYear();
                    case 'h': // 12小时一位
                        return d.getHours() % 12 || 12;
                    case 'hh': // 12小时两位
                        return zeroize(d.getHours() % 12 || 12);
                    case 'H': // 24小时制一位
                        return d.getHours();
                    case 'HH': // 24小时制两位
                        return zeroize(d.getHours());
                    case 'm': // 分钟一位
                        return d.getMinutes();
                    case 'mm': // 分钟两位
                        return zeroize(d.getMinutes());
                    case 's': // 秒一位
                        return d.getSeconds();
                    case 'ss': // 秒两位
                        return zeroize(d.getSeconds());
                    case 'SSS': // 毫秒三位
                        return zeroize(d.getMilliseconds(), 3);
                    case 'SS': // 毫秒二位
                        var m = d.getMilliseconds();
                        if (m > 99) m = Math.round(m / 10);
                        return zeroize(m);
                    case 'S': // 毫秒一位
                        return d.getMilliseconds();
                    case 'aa': // 上午下午小写
                        return d.getHours() < 12 ? 'am' : 'pm';
                    case 'AA': // 上午下午大写
                        return d.getHours() < 12 ? 'AM' : 'PM';
                    case 'ZZ': // 时区
                        return d.toUTCString().match(/[A-Z]+$/);
                    case 'q': // 数字季度
                        return Math.floor((d.getMonth() + 3) / 3);
                    case 'qq': // 数字季度
                        return zeroize(Math.floor((d.getMonth() + 3) / 3));
                    case 'Q': // 大写季度
                        return ['一', '二', '三', '四'][Math.floor((d.getMonth() + 3) / 3) - 1];
                    case 'w': // 大写季度
                        return ['7', '1', '2', '3', '4', '5', '6'][d.getDay()];
                    case 'ww': // 大写季度
                        return ['07', '01', '02', '03', '04', '05', '06'][d.getDay()];
                    case 'W': // 大写季度
                        return ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
                    default:
                        return $0.substr(1, $0.length - 2);
                }
            });
    };
    if (format) {
        return new Date(date).format(format)
    } else {
        return new Date(date)
    }
}

/**
 * 修改时间
 * @param {*} date 时间
 * @param {*} h 时
 * @param {*} m 分
 * @param {*} s 秒
 * @returns 
 */
export const updateDate = (date, h, m, s) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s)
}


/**
 * 获取时分秒
 * @param {*} date 时间
 * @returns 
 */
export const getHMS = (date) => {
    const values = (date || '').split(':');
    if (values.length == 3) {
        const hour = parseInt(values[0], 10);
        const minute = parseInt(values[1], 10);
        const second = parseInt(values[2], 10);
        return {
            hour,
            minute,
            second
        };
    }
    return {
        hour: '',
        minute: '',
        second: ''
    };
}

/**
 * 获取下个月
 * @param {*} datetime 时间
 * @returns 
 */
export const getNextMonth = (datetime) => {
    let date = new Date(datetime);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let newYear = year;
    let newMonth = parseInt(month) + 2;
    if (newMonth == 13) {
        newYear = parseInt(newYear) + 1;
        newMonth = 1;
    }

    let newDay = day;
    let newDays = new Date(newYear, newMonth, 0);
    newDays = newDays.getDate();
    if (newDay > newDays) {
        newDay = newDays;
    }

    if (newMonth < 10) {
        newMonth = '0' + newMonth;
    }

    if (newDay < 10) {
        newDay = '0' + newDay;
    }

    if (newDay) {
        return newYear + '/' + newMonth + '/' + newDay;
    } else {
        return newYear + '/' + newMonth;
    }
}

/**
 * 获取当前月
 * @param {*} datetime 时间
 * @returns 
 */
export const getCurrentMonth = (datetime) => {
    let date = new Date(datetime);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let newYear = year;
    let newMonth = parseInt(month) + 1;
    if (newMonth == 13) {
        newYear = parseInt(newYear) + 1;
        newMonth = 1;
    }

    let newDay = day;
    let newDays = new Date(newYear, newMonth, 0);
    newDays = newDays.getDate();
    if (newDay > newDays) {
        newDay = newDays;
    }

    if (newMonth < 10) {
        newMonth = '0' + newMonth;
    }

    if (newDay < 10) {
        newDay = '0' + newDay;
    }

    if (newDay) {
        return newYear + '/' + newMonth + '/' + newDay;
    } else {
        return newYear + '/' + newMonth;
    }
}

/**
 * 获取当年
 * @param {*} datetime 时间
 * @returns 
 */
export const getCurrentYear = (datetime) => {
    let date = new Date(datetime);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let newYear = year;
    let newMonth = parseInt(month) + 1;
    if (newMonth == 13) {
        newYear = parseInt(newYear) + 1;
        newMonth = 1;
    }

    let newDay = day;
    let newDays = new Date(newYear, newMonth, 0);
    newDays = newDays.getDate();
    if (newDay > newDays) {
        newDay = newDays;
    }

    if (newMonth < 10) {
        newMonth = '0' + newMonth;
    }

    if (newDay) {
        return newYear + '/' + newMonth + '/' + newDay;
    } else {
        return newYear + '/' + newMonth;
    }
}

/**
 * 获取下年
 * @param {*} datetime 时间
 * @returns 
 */
export const getNextYear = (datetime) => {
    let date = new Date(datetime);
    let year = date.getFullYear() + 1;
    let month = date.getMonth();
    let day = date.getDate();
    let newYear = year;
    let newMonth = parseInt(month) + 2;
    if (newMonth == 13) {
        newYear = parseInt(newYear) + 1;
        newMonth = 1;
    }

    let newDay = day;
    let newDays = new Date(newYear, newMonth, 0);
    newDays = newDays.getDate();
    if (newDay > newDays) {
        newDay = newDays;
    }

    if (newMonth < 10) {
        newMonth = '0' + newMonth;
    }

    if (newDay) {
        return newYear + '/' + newMonth + '/' + newDay;
    } else {
        return newYear + '/' + newMonth;
    }
}

/**
 * 公共格式
 */
export const publicTimeFormat = (type) => {
    let format = {
        date: 'yyyy-MM-dd',
        month: 'yyyy-MM',
        datetime: 'yyyy-MM-dd HH:mm:ss',
        time: 'HH:mm:ss',
        week: 'yyyywWW',
        timerange: 'HH:mm:ss',
        daterange: 'yyyy-MM-dd',
        monthrange: 'yyyy-MM',
        datetimerange: 'yyyy-MM-dd HH:mm:ss',
        year: 'yyyy'
    }
    return type && format[type] ? format[type] : format.date
};

/**
 * 获取最后时间
 * @param {*} year 年
 * @param {*} month 月
 * @returns 
 */
export const getLastDate = (year, month) => {
    return new Date(year, month, 0);
};

/**
 * 获取两日期之间日期列表函数
 * @param {*} startDate 开始时间
 * @param {*} endDate 结束时间
 * @returns 
 */
export const getDiffDate = (startDate, endDate) => {
    //初始化日期列表，数组
    var diffdate = new Array();
    var i = 0;
    var startYear = new Date(startDate).getFullYear()
    var startMonth = new Date(startDate).getMonth() + 1
    var startDay = new Date(startDate).getDate()
    var EndYear = new Date(endDate).getFullYear()
    var EndMonth = new Date(endDate).getMonth() + 1
    var EndDay = new Date(endDate).getDate()
    var startTime = startYear + '/' + zero(startMonth) + '/' + zero(startDay);
    var EndTime = EndYear + '/' + zero(EndMonth) + '/' + zero(EndDay);
    //开始日期小于等于结束日期,并循环
    while (new Date(startTime) <= new Date(EndTime)) {
        diffdate[i] = startTime;

        //获取开始日期时间戳
        var startTime_ts = new Date(startTime).getTime();

        //增加一天时间戳后的日期
        var next_date = startTime_ts + (24 * 60 * 60 * 1000);

        //拼接年月日，这里的月份会返回（0-11），所以要+1
        var next_dates_y = new Date(next_date).getFullYear() + '/';
        var next_dates_m = zero(new Date(next_date).getMonth() + 1) + '/';
        var next_dates_d = zero(new Date(next_date).getDate());

        startTime = next_dates_y + next_dates_m + next_dates_d;

        //增加数组key
        i++;
    }
    return diffdate
}

/**
 * 获取两日期之间日期列表函数
 * @param {*} startTime 开始时间
 * @param {*} endTime 结束时间
 * @returns 
 */
export const getDiffMonth = (startTime, endTime) => {
    var diffdate = new Array();
    var startDateYear = new Date(startTime).getFullYear();
    var startDateMonth = new Date(startTime).getMonth();
    var endDateYear = new Date(endTime).getFullYear();
    var endDateMonth = new Date(endTime).getMonth();
    // 获取月份相减
    var startDateNum = parseInt(startDateYear) * 12 + parseInt(startDateMonth);
    var endDateNum = parseInt(endDateYear) * 12 + parseInt(endDateMonth);
    var timeTotal = Math.abs(startDateNum - endDateNum) + 1;
    for (var i = 0; i < timeTotal; i++) {
        let date = new Date(startDateYear, startDateMonth + i, 1)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        diffdate.push(year + '/' + zero(month))
    }
    return diffdate
}

/**
 * 获取年月日
 * @param {*} date 时间
 * @param {*} type 类型
 * @returns 
 */
export const getYMD = (date, type) => {
    if (!date) return
    let newDate = new Date(date)

    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    if (type == 'string') {
        return year + '/' + zero(month) + '/' + zero(day);
    } else {
        return {
            year,
            month,
            day
        }
    }
}