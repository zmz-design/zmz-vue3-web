import { computed, ref } from 'vue'
export default function () {
    const count = ref(1);
    const plusOne = computed(() => count.value + 1);
    const findParent = (parent, name) => {
        let parentOld = parent;
        while (parentOld) {
            if (parentOld.type.componentName === name) {
                return parentOld;
            }
            parentOld = parentOld.parent;
        }
        return false;
    }

    const findComponent = (proxy, name) => {
        let parentOld = proxy;
        let parentList = [];
        while (parentOld) {
            if (parentOld.$options.name === name) {
                parentList.push(parentOld);
            }
            parentOld = parentOld.$parent;
        }
        return parentList;
    }

    const findParent2 = (that, name) => {
        let parent = that.parent;
        while (parent) {
            if (parent.type.componentName === name) {
                that.parent = parent;
                return true;
            }
            parent = parent.parent;
        }
        return false;
    }

    const isMobile = () => {
        if ((navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        ))) {
            return true
        } else {
            return false
        }
    }

    // rgb 转 hsl
    const rgbToHsl = (r, g, b) => {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return [h, s, l];
    }

    // color 转 rgb
    const colorRgb = (sColor) => {
        sColor = sColor.toLowerCase();
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是16进制颜色
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var j = 1; j < 7; j += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(j, j + 2)));
            }
            return sColorChange;
        }
        return sColor;
    }

    // 事件监听
    const eventListener = (target, eventType, callback) => {
        if (target.addEventListener) {
            target.addEventListener(eventType, callback, false);
            return {
                remove() {
                    target.removeEventListener(eventType, callback, false);
                }
            };
        } else if (target.attachEvent) {
            target.attachEvent('on' + eventType, callback);
            return {
                remove() {
                    target.detachEvent('on' + eventType, callback);
                }
            };
        }
    }

    // 时间转换
    const formatEvent = (date, format) => {
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
        if (format && format != 'timestamp') {
            return new Date(date).format(format)
        } else if (format && format == 'timestamp') {
            return new Date(date).getTime()
        } else {
            return new Date(date)
        }
    }

    // 上个月
    const getPreMonthEvent = date => {
        let [year, month, day] = date.split('-'); // 分割数组获取年月日
        let newYear = year;
        let newMonth = parseInt(month) - 1;
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

        if (newMonth < 10) { // 小于10补0
            newMonth = '0' + newMonth;
        }

        if (newDay) {
            return newYear + '-' + newMonth + '-' + newDay;
        } else {
            return newYear + '-' + newMonth;
        }
    };

    // 获取下个月
    const getNextMonthEvent = date => {
        let [year, month, day] = date.split('-'); // 分割数组获取年月日
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
            return newYear + '-' + newMonth + '-' + newDay;
        } else {
            return newYear + '-' + newMonth;
        }
    };

    // 定义后缀
    const getValueSuffix = (data) => {
        // let companyList = ['em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ch', 'rem', 'vh', 'vw', 'vmin',
        //     'vmax'
        // ];
        if (typeof (data) == 'string') {
            if (/^em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax|auto$/.test(data)) {
                return data
            } else {
                return data + 'px'
            }
        }

        if (typeof (data) == 'number') {
            return data + 'px'
        }
    }

    const isDataType = (data, type) => {
        if (Object.prototype.toString.call(data) === "[object Array]" && type == 'Array') {
            return true
        } else if (Object.prototype.toString.call(data) === "[object Number]" && type == 'Number') {
            return true
        } else if (Object.prototype.toString.call(data) === "[object String]" && type == 'String') {
            return true
        } else if (Object.prototype.toString.call(data) === "[object Boolean]" && type == 'Boolean') {
            return true
        } else if (Object.prototype.toString.call(data) === "[object Object]" && type == 'Object') {
            return true
        } else if (Object.prototype.toString.call(data) === "[object Null]" && type == 'Null') {
            return true
        } else {
            return false
        }
    }

    // 获取元素属性
    const getElementAttr = (el) => {
        let rect = {
            left: el.offsetLeft,
            top: el.offsetTop,
            width: el.offsetWidth,
            height: el.offsetHeight
        };
        do {
            el = el.offsetParent;
            if (el == null) return rect;
            rect.left += el.offsetLeft;
            rect.top += el.offsetTop
        } while (el != document.body)
        return rect;
    }

    const getColorConversion = (value, type) => {
        if (type == 'rgb' || type == 'rgba') {
            if (/rgba?/.test(value)) {
                var array = value.split(',');
                //不符合rgb或rgb规则直接return
                if (array.length < 3) return '';
                value = '#';
                for (var i = 0, color;
                    (color = array[i++]);) {
                    if (i < 4) {
                        //前三位转换成16进制
                        color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
                        value += color.length == 1 ? '0' + color : color;
                    } else {
                        //rgba的透明度转换成16进制
                        color = color.replace(')', '');
                        var colorA = parseInt(color * 255);
                        var colorAHex = colorA.toString(16);
                        value += colorAHex;
                    }
                }
                value = value.toUpperCase();
                return value;
            } else {
                return value
            }
        } else if (type == 'hsl' || type == 'hsla') {
            if (/hsla?/.test(value)) {
                const removeSpace = (str) => {
                    return str.replaceAll(' ', '').replaceAll('&nbsp;', '').replaceAll('\u0026nbsp;', '')
                }
                const hsl = /hsla?\((\d+),*([\d.]+)%?,*([\d.]+)%?,*([\d.]+)?\)/g.exec(removeSpace(value));
                const h = parseInt(hsl[1]) / 360;
                const s = parseInt(hsl[2]) / 100;
                const l = parseInt(hsl[3]) / 100;
                let a = hsl[4];

                const hue2rgb = (p, q, t) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                }
                let r, g, b;
                if (s == 0) {
                    r = g = b = l;
                } else {
                    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    const p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1 / 3);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1 / 3);
                }
                var oldValue = ''
                if (a != undefined) {
                    oldValue = `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)}, ${a})`;
                } else {
                    oldValue = `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
                }

                var oldarray = oldValue.split(',');
                //不符合rgb或rgb规则直接return
                if (oldarray.length < 3) return '';
                var newValue = '#';
                for (let i = 0, color; (color = oldarray[i++]);) {
                    if (i < 4) {
                        //前三位转换成16进制
                        color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
                        newValue += color.length == 1 ? '0' + color : color;
                    } else {
                        //rgba的透明度转换成16进制
                        color = color.replace(')', '');
                        let colorA = parseInt(color * 255);
                        let colorAHex = colorA.toString(16);
                        newValue += colorAHex;
                    }
                }
                newValue = newValue.toUpperCase();
                return newValue;
            } else {
                return value
            }
        } else {
            return value
        }
    }

    // 节流
    const debounce = (func, time, ctx, immediate) => {
        let timer
        const rtn = (...params) => {
            clearTimeout(timer)
            if (immediate) {
                let callNow = !timer
                timer = setTimeout(() => {
                    timer = null
                }, time)
                if (callNow) func.apply(ctx, params)
            } else {
                timer = setTimeout(() => {
                    func.apply(ctx, params)
                }, time)
            }
        }
        return rtn
    }

    // 加载图片
    const imageLoad = (imageData) => {
        return Promise.all(
            [...imageData].map(() => function onLoad(item) {
                if (item.complete) {
                    return Promise.resolve(true)
                } else {
                    return new Promise(resolve => {
                        item.onload = resolve
                        item.onerror = resolve
                    })
                }
            })
        )
    }

    const getDefaultArr = (colNum = 1, initail = () => 0, arr = []) => {
        if (arr.length < colNum) {
            arr.push(initail());
            return getDefaultArr(colNum, initail, arr);
        }
        return arr;
    };

    // 防连击
    const preventReClick = (that) => {

        if (that) {
            var time = new Date().getTime();
            var flag = true;
            if (that.preventContinuousClickedTime) {
                flag = (time - that.preventContinuousClickedTime) > 1500;
            } else {
                that.preventContinuousClickedTime = time;
                var timer = setTimeout(function () {
                    that.preventContinuousClickedTime = null,
                        clearTimeout(timer)
                }, 1500)
            }
            return flag
        }
    }

    return {
        count,
        plusOne,
        findParent,
        findParent2,
        isMobile,
        rgbToHsl,
        colorRgb,
        eventListener,
        formatEvent,
        getPreMonthEvent,
        getNextMonthEvent,
        getValueSuffix,
        isDataType,
        getElementAttr,
        getColorConversion,
        debounce,
        imageLoad,
        getDefaultArr,
        preventReClick,
        findComponent
    }
}
