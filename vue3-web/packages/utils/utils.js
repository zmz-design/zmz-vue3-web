// 判断参数是在内
export function included(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

/**
 * 节流函数
 * @param {*} func 
 * @param {*} time 
 * @param {*} ctx 
 * @param {*} immediate 
 * @returns 
 */
export const debounce = (func, time, ctx, immediate) => {
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

/**
 * 阻止默认事件
 * @param {*} e 事件
 * @returns 
 */
export const pauseEvent = e => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
};

/**
 * 类型判断
 * @param {*} data  数据源
 * @param {*} type 类型
 * @returns 
 */
export const typeJudgment = (data, type) => {
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