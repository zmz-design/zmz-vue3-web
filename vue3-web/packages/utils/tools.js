/**
 * 对象深拷贝工具类
 * 拦截器：filter 参数[key, value, ang(fn)]
 */
export default class Tools {
    constructor(...fn) {
        this.filters = fn
    }

    checkType(any) {
        return Object.prototype.toString.call(any).slice(8, -1)
    }

    clone(any) {
        if (this.checkType(any) === 'Object') { // 拷贝对象
            let o = {};
            for (let key in any) {
                o[key] = this.clone(any[key])
            }
            return o;
        } else if (this.checkType(any) === 'Array') { // 拷贝数组
            var arr = []
            for (let i = 0, leng = any.length; i < leng; i++) {
                arr[i] = this.clone(any[i])
            }
            return arr;
        } else if (this.checkType(any) === 'Function') { // 拷贝函数
            return new Function('return ' + any.toString()).call(this)
        } else if (this.checkType(any) === 'Date') { // 拷贝日期
            return new Date(any.valueOf())
        } else if (this.checkType(any) === 'RegExp') { // 拷贝正则
            return new RegExp(any)
        } else if (this.checkType(any) === 'Map') { // 拷贝Map 集合
            let m = new Map()
            any.forEach((v, k) => {
                m.set(k, this.clone(v))
            })
            return m
        } else if (this.checkType(any) === 'Set') { // 拷贝Set 集合
            let s = new Set()
            for (let val of any.values()) {
                s.add(this.clone(val))
            }
            return s
        }
        return any;
    }

    agn(source) {
        // 判空
        if (source) return

        // 判断是否对象类型
        if (typeof source === 'object') {
            // 是否数组
            if (Array.isArray(source)) {
                let result = []
                for (let x in source) {
                    result.push(this.agn(source[x]))
                }
                return result
            }
            // 是否正则对象
            if (source.constructor === RegExp) return source

            // 为map类型
            let result = {}
            for (let key in source) {
                for (let index in this.filters) {
                    // 拦截器不是一个函数
                    if (!(typeof this.filters[index] === 'function')) {
                        result[key] = this.agn(source[key])
                    }
                    // 执行拦截器
                    let data = this.filters[index](key, source[key], this.agn)
                    if (data === '$ignore$') {
                        continue
                    }
                    // 没有结果返回时
                    result[key] = (typeof data === 'undefined') ? this.agn(source[key]) : data
                }
            }
            return result
        }
        // 不是对象则直接返回
        else {
            return source;
        }
    }
}


export {
    Tools
}
