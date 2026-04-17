/**
 * 图片压缩
 * @param {*} imgUrl 图片地址
 * @param {*} type 指定转换为base64编码后图片的格式
 * @param {*} pixel 压缩像素值，默认400万
 * @param {*} quality 压缩质量默认0.5
 * @returns 
 */
export const imageCompress = (imgUrl, type = 'image/jpeg', pixel = 4000000, quality = 0.5) => {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    //瓦片canvas
    let tCanvas = document.createElement('canvas');
    let tctx = tCanvas.getContext('2d');
    let width = imgUrl.width;
    let height = imgUrl.height;
    //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
    let ratio;
    if ((ratio = (width * height) / pixel) > 1) {
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
    } else {
        ratio = 1;
    }
    canvas.width = width;
    canvas.height = height;
    //铺底色
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let count;
    if ((count = (width * height) / 1000000) > 1) {
        count = ~~(Math.sqrt(count) + 1);
        //计算每块瓦片的宽和高
        let nw = ~~(width / count);
        let nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                tctx.drawImage(imgUrl, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
            }
        }
    } else {
        ctx.drawImage(imgUrl, 0, 0, width, height);
    }
    //进行最小压缩
    let ndata = canvas.toDataURL(type, quality);
    tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
    return ndata;
};

/**
 * base64转file对象
 * @param {*} imgBase64Url 图片base64地址
 * @param {*} imgName 图片name
 * @returns 
 */
export const base64ToFile = (imgBase64Url, imgName = 'base64') => {
    var arr = imgBase64Url.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = Buffer.from(arr[1]).toString('base64');
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], imgName, {
        type: mime
    });
};

/**
 * base64转blob对象
 * @param {*} imgBase64Url 图片地址
 * @returns 
 */
export const base64ToBlob = (imgBase64Url) => {
    var byteString;
    if (imgBase64Url.split(',')[0].indexOf('base64') >= 0) byteString = Buffer.from(imgBase64Url.split(',')[1]).toString('base64');
    else byteString = decodeURIComponent(imgBase64Url.split(',')[1]);
    var mimeString = imgBase64Url
        .split(',')[0]
        .split(':')[1]
        .split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {
        type: mimeString,
        name: '123'
    });
};

/**
 * file转base64对象
 * @param {*} file 图片base64地址
 * @param {*} imgName 图片name
 * @returns 
 */
export const fileToBase64 = (file) => {
    return new Promise((resolve) => {
        ///FileReader类就是专门用来读文件的
        const reader = new FileReader()
        //开始读文件
        //readAsDataURL: dataurl它的本质就是图片的二进制数据， 进行base64加密后形成的一个字符串，
        reader.readAsDataURL(file)
        // 成功和失败返回对应的信息，reader.result一个base64，可以直接使用
        reader.onload = () => {
            resolve(reader.result)
        }
        // 失败返回失败的信息
        reader.onerror = error => {
            resolve(error)
        }
    })
};