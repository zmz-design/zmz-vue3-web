/**
 * 颜色转换
 * @param {*} value 颜色值
 * @param {*} type 颜色类型
 * @returns 
 */
export const getColorConversion = (value, type) => {
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