export default class Color {
    constructor() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        //不透明度
        this.a = 1;
        //色相
        this.h = 0;
        //饱和度
        this.s = 0;
        //亮度
        this.l = 0;

        this.init(arguments)

        this.COLORHUES = []
        this.colorhues()
    }

    /**
     *
     * @param {array} params
     */
    init(params) {
        if (!params || params.length == 0) return;

        if (params.length == 1) {
            // let format = ['rgb', 'rgba', 'hsl', 'hsla', 'hex'];
            let p = params[0]
            if (typeof p == "string") {
                this.formHTML(p)
            }
            if (typeof p == "number") {
                this.fromHex("#" + (0x1000000 | p).toString(16).slice(1))
            } else if (typeof p == 'object') {
                let keys = p.keys();
                if (keys.includes('r', 'g', 'b')) {
                    this.fromRGB(p.r, p.g, p.b);
                } else if (keys.includes('h', 's', 'l')) {
                    this.fromHSL(p.h, p.s, p.l);
                }
            }
        } else {
            this.fromRGB(...params)
        }
    }

    /**
     * 设置RGB,并 更新hsl
     * @param {number} r 0-255
     * @param {number} g 0-255
     * @param {number} b 0-255
     */
    fromRGB(r, g, b) {
        if (!isNaN(r)) this.r = Math.round(r);
        if (!isNaN(g)) this.g = Math.round(g);
        if (!isNaN(b)) this.b = Math.round(b);
        let hsl = this.rgb2hsl(this.r, this.g, this.b);
        this.h = hsl[0];
        this.s = hsl[1];
        this.l = hsl[2];
        return this;

    }

    /**
     * 设置HSL,并更新RGB
     * @param {number} h 0-360
     * @param {number} s 0-100
     * @param {number} l 0-100
     */
    fromHSL(h, s, l) {
        if (!isNaN(h)) this.h = Math.round(h);
        if (!isNaN(s)) this.s = Math.round(s);
        if (!isNaN(l)) this.l = Math.round(l);

        let rgb = this.hsl2rgb(this.h, this.s, this.l);
        this.r = rgb[0];
        this.g = rgb[1];
        this.b = rgb[2];
        return this;
    }

    fromHex(str) {
        let rgb = this.hex2rgb(str);
        this.r = rgb[0];
        this.g = rgb[1];
        this.b = rgb[2];
        this.a = rgb[3] != null ? rgb[3] / 100 : 1;
        this.fromRGB();
        return this;
    }

    /**
 * 解析颜色字符串（替代原 formHTML，移除 eval 安全风险）
 * @param {string} str 颜色字符串（支持 Hex/RGB/RGBA/HSL/HSLA）
 * @returns {this} 链式调用，方便后续操作
 */
    formHTML(str) {
        const trimmedStr = str.trim(); // 去除首尾空格，兼容不规则输入

        // 1. 处理 Hex 格式（#fff、#ffffff、#ffff、#ffffffff）
        if (trimmedStr.startsWith('#')) {
            this.fromHex(trimmedStr);
            return this;
        }

        // 2. 处理 RGB/RGBA 格式（正则匹配：支持空格、整数通道值、小数透明度）
        const rgbRegex = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i;
        const rgbMatch = trimmedStr.match(rgbRegex);
        if (rgbMatch) {
            // 提取通道值并转为数字，透明度默认1（0-1范围）
            const r = Number(rgbMatch[1]);
            const g = Number(rgbMatch[2]);
            const b = Number(rgbMatch[3]);
            const a = rgbMatch[4] ? Number(rgbMatch[4]) : 1;
            // 边界校验：确保 RGB 通道在 0-255，透明度在 0-1
            this.fromRGB(
                Math.max(0, Math.min(255, r)),
                Math.max(0, Math.min(255, g)),
                Math.max(0, Math.min(255, b)),
                Math.max(0, Math.min(1, a))
            );
            return this;
        }

        // 3. 处理 HSL/HSLA 格式（正则匹配：支持空格、整数色相/饱和度/亮度、小数透明度）
        const hslRegex = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i;
        const hslMatch = trimmedStr.match(hslRegex);
        if (hslMatch) {
            // 提取通道值并转为数字，透明度默认1（0-1范围）
            const h = Number(hslMatch[1]);
            const s = Number(hslMatch[2]);
            const l = Number(hslMatch[3]);
            const a = hslMatch[4] ? Number(hslMatch[4]) : 1;
            // 边界校验：确保色相 0-360，饱和度/亮度 0-100，透明度 0-1
            this.fromHSL(
                Math.max(0, Math.min(360, h)),
                Math.max(0, Math.min(100, s)),
                Math.max(0, Math.min(100, l)),
                Math.max(0, Math.min(1, a))
            );
            return this;
        }

        // 若格式不支持，抛出明确错误（便于调试）
        throw new Error(`不支持的颜色格式：${str}，请使用 Hex/RGB/RGBA/HSL/HSLA 格式`);
    }


    toHex() {
        return this.rgb2hex(this.r, this.g, this.b, this.a * 100);
    }

    toRGB() {
        let rgb = `${this.r},${this.g},${this.b}`
        if (this.a !== 1) {
            return `rgba(${rgb},${Math.round(this.a)})`
        }
        return `rgb(${rgb})`
    }

    toHSL() {
        let hsl = `${this.h},${this.s},${this.l}`
        if (this.a !== 1) {
            return `hsla(${hsl},${Math.round(this.a)})`
        }
        return `hsl(${hsl})`
    }

    hsla(h, s, l, a) {
        let rgb = this.hsl2rgb(h, s, l, a);
        return {
            r: rgb[0],
            g: rgb[1],
            b: rgb[2],
            h,
            s,
            l
        };
    }

    /**
     * rgb2hsl
     *
     * @param {number} r 红色颜色值 0~255
     * @param {number} g 绿色颜色值 0~255
     * @param {number} b 蓝色颜色值 0~255
     */
    rgb2hsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var diff = max - min;
        var h = 0;
        var l = (max + min) / 2;
        var s = 0;

        if (max === min) {
            h = 0;
        } else if (max === r && g >= b) {
            h = 60 * ((g - b) / diff);
        } else if (max === r && g < b) {
            h = 60 * ((g - b) / diff) + 360;
        } else if (max === g) {
            h = 60 * ((b - r) / diff) + 120;
        } else if (max === b) {
            h = 60 * ((r - g) / diff) + 240;
        }

        if (l === 0 || max === min) {
            s = 0;
        } else if (0 < l && l <= 0.5) {
            s = diff / (2 * l);
        } else if (l > 0.5) {
            s = diff / (2 - 2 * l);
        }
        return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
    }
    /**
     * rgb2hsv
     *
     * @param {number} r 红色颜色值 0~255
     * @param {number} g 绿色颜色值 0~255
     * @param {number} b 蓝色颜色值 0~255
     */

    rgb2hsv(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var diff = max - min;
        var h = 0;
        var v = max;
        var s = max === 0 ? 0 : diff / max; // h

        if (max === min) {
            h = 0;
        } else if (max === r && g >= b) {
            h = 60 * ((g - b) / diff);
        } else if (max === r && g < b) {
            h = 60 * ((g - b) / diff) + 360;
        } else if (max === g) {
            h = 60 * ((b - r) / diff) + 120;
        } else if (max === b) {
            h = 60 * ((r - g) / diff) + 240;
        }
        return [Math.round(h), Math.round(s * 100), Math.round(v * 100)];
    }
    /**
     * rgb2hex
     *
     * @param {number} r 红色颜色值 0~255
     * @param {number} g 绿色颜色值 0~255
     * @param {number} b 蓝色颜色值 0~255
     * @param {number} a 透明度 0~100，默认100
     */

    rgb2hex(r, g, b, a) {
        if (typeof a === 'undefined' || a === 100) {
            a = '';
        } else {
            a = Math.round(255 * a / 100);
            a = (a | 1 << 8).toString(16).slice(1);
        }
        var val = (b | g << 8 | r << 16 | 1 << 24).toString(16).slice(1);
        return '#' + val.toUpperCase() + a.toUpperCase();
    }
    /**
     * hsl2rgb
     *
     * @param {number} h Hue 色调 0 ~ 360
     * @param {number} s Saturation 饱和度 0 ~ 100
     * @param {number} l Lightness 亮度 0 ~ 100
     */

    hsl2rgb(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        var r = 0;
        var g = 0;
        var b = 0;
        var p = 0;
        var q = 0;

        function rgb(t, p, q) {
            if (t < 1.0 / 6.0) {
                return p + (q - p) * 6.0 * t;
            } else if (t >= 1.0 / 6.0 && t < 1.0 / 2.0) {
                return q;
            } else if (t >= 1.0 / 2.0 && t < 2.0 / 3.0) {
                return p + (q - p) * (2.0 / 3.0 - t) * 6.0;
            } else {
                return p;
            }
        }

        function _rgb(t) {
            if (t < 0) {
                return t + 1.0;
            } else if (t > 1) {
                return t - 1.0;
            } else {
                return t;
            }
        }

        if (s === 0) {
            r = g = b = l;
        } else {
            q = l < 0.5 ? l * (1.0 + s) : l + s - l * s;
            p = 2.0 * l - q;
            r = rgb(_rgb(h + 1.0 / 3.0), p, q);
            g = rgb(_rgb(h), p, q);
            b = rgb(_rgb(h - 1.0 / 3.0), p, q);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    /**
     * hsv2rgb
     *
     * @param {number} h Hue 色调 0 ~ 360
     * @param {number} s Saturation 饱和度 0 ~ 100
     * @param {number} v Value 明度 0 ~ 100
     */

    hsv2rgb(h, s, v) {
        h /= 1;
        s /= 100;
        v /= 100;
        var r = 0;
        var g = 0;
        var b = 0;

        if (s === 0) {
            r = g = b = v;
        } else {
            var _h = h / 60;

            var i = Math.floor(_h);
            var f = _h - i;
            var p = v * (1 - s);
            var q = v * (1 - f * s);
            var t = v * (1 - (1 - f) * s);

            switch (i) {
                case 0:
                    r = v;
                    g = t;
                    b = p;
                    break;

                case 1:
                    r = q;
                    g = v;
                    b = p;
                    break;

                case 2:
                    r = p;
                    g = v;
                    b = t;
                    break;

                case 3:
                    r = p;
                    g = q;
                    b = v;
                    break;

                case 4:
                    r = t;
                    g = p;
                    b = v;
                    break;

                case 5:
                    r = v;
                    g = p;
                    b = q;
                    break;
            }
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    /**
     * hex2rgb
     *
     * @param {string} r hex颜色值 eg: #000、#325312、#b2c343
     */

    hex2rgb(hex) {
        hex = hex.replace(/^#/, '');
        var a = null;

        if (hex.length === 8) {
            a = parseInt(hex.slice(6, 8), 16) / 255;
            hex = hex.slice(0, 6);
        }

        if (hex.length === 4) {
            a = parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
            hex = hex.slice(0, 3);
        }

        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }

        var num = parseInt(hex, 16);
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        var rgb = [r, g, b];

        if (a !== null) {
            rgb.push(Math.round(a * 100));
        }

        return rgb;
    }


    colorhues() {
        for (let i = 0; i <= 360; i++) {
            let arr = this.hsl2rgb(i, 100, 50);
            arr.r = arr[0];
            arr.g = arr[1];
            arr.b = arr[2];
            this.COLORHUES.push(arr);
        }
    }

    /**
     *
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @returns {{r: (*|number), b: (*|number), s: number, g: (*|number), h: number, l: number}}
     */
    rgb(r, g, b) {
        r = Number.isInteger(r) ? r : Math.round(r * 255);
        g = Number.isInteger(g) ? g : Math.round(g * 255);
        b = Number.isInteger(b) ? r : Math.round(b * 255);
        let hsl = this.rgb2hsl(r, g, b)
        return {
            r: r,
            g: g,
            b: b,
            h: hsl[0],
            s: hsl[1],
            l: hsl[2]
        }
    }

    rgba(r, g, b, a) {
        r = Number.isInteger(r) ? r : Math.round(r * 255);
        g = Number.isInteger(g) ? g : Math.round(g * 255);
        b = Number.isInteger(b) ? b : Math.round(b * 255);
        let hsl = this.rgb2hsl(r, g, b)
        return {
            r: r,
            g: g,
            b: b,
            a: a != null ? a : 1,
            h: hsl[0],
            s: hsl[1],
            l: hsl[2]
        }
    }

    hsl(h, s, l) {
        let rgb = this.hsl2rgb(h, s, l);
        return {
            r: rgb[0],
            g: rgb[1],
            b: rgb[2]
        };
    }
}
