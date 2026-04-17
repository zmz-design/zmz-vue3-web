import CryptoJS from 'crypto-js'
import * as JsEncryptModule from 'jsencrypt';
import JSEncrypt from './jsencrypt'

/**
 * 加密算法
 * @param data
 * @returns {string}
 */
export const encrypted = (srcs, secret) => {
    let srcutf8 = CryptoJS.enc.Utf8.parse(JSON.stringify(srcs));
    let secretutf8 = CryptoJS.enc.Utf8.parse(secret);
    const encrypted = CryptoJS.AES.encrypt(srcutf8, secretutf8, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    var encryptedBase64 = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    return encryptedBase64.toString();
}

/**
 * 解密算法
 * @param data
 * @returns {string}
 */
export const decrypted = (srcs, secret) => {
    //console.log("AES解密前",  srcs);
    //let srcutf8 = CryptoJS.enc.Utf8.parse(Base64.decode(srcs));
    let secretutf8 = CryptoJS.enc.Utf8.parse(secret);
    let decrypted = CryptoJS.AES.decrypt(srcs, secretutf8, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
}

/**
 * 加密算法
 * @param data
 * @returns {string}
 */
export const encrypt = (content, secret) => {
    let encryptPublicKey = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0mYQWP0r8jqMPZ9fXQj5
    7IeyuSL44K5yOV4nxxCJq0UaetmNO4tqCIykTJgFLIqrKZ+DQ+vCnPvhksGEf39W
    Pg1o6/zYcFYOnFSQRcq2/lSJr04cW9fRyjMgVAUnRLSCS90IT41LrQyUsuM5aPj4
    c3yh+k1OwV2EL3nLzRs2UQSjIHVR2eEKAnsUC2VThFJ9JDmm7hHXFHzECuKHZhNR
    p5dVUyb9N4QEBtaMvn9zDqdUwfP+RQC3qajrnya18jryv3jY6BVWBFh+owFRLMPE
    tAjqJDzWp/Pm2mZDVJBSfAov37JFplT2Jo/lr7h6OI3gMpiWR3Zs2SsBhMdsnkM0
    IQIDAQAB
    -----END PUBLIC KEY-----`;
    let encrypt = new JsEncryptModule.JSEncrypt();
    encrypt.setPublicKey(encryptPublicKey);
    let signature = encrypt.encrypt(JSON.stringify(content));
    return encrypted(signature, secret);
}

/**
 * 加密算法
 * @param data
 * @returns {string}
 */
export const encrypts = (content, secret) => {
    let encryptPublicKey = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0mYQWP0r8jqMPZ9fXQj5
    7IeyuSL44K5yOV4nxxCJq0UaetmNO4tqCIykTJgFLIqrKZ+DQ+vCnPvhksGEf39W
    Pg1o6/zYcFYOnFSQRcq2/lSJr04cW9fRyjMgVAUnRLSCS90IT41LrQyUsuM5aPj4
    c3yh+k1OwV2EL3nLzRs2UQSjIHVR2eEKAnsUC2VThFJ9JDmm7hHXFHzECuKHZhNR
    p5dVUyb9N4QEBtaMvn9zDqdUwfP+RQC3qajrnya18jryv3jY6BVWBFh+owFRLMPE
    tAjqJDzWp/Pm2mZDVJBSfAov37JFplT2Jo/lr7h6OI3gMpiWR3Zs2SsBhMdsnkM0
    IQIDAQAB
    -----END PUBLIC KEY-----`;
    const encryptor = new JSEncrypt()
    encryptor.setPublicKey(encryptPublicKey)
    let signature = encryptor.encryptLong(JSON.stringify(content));
    return encrypted(signature, secret);
}

/**
 * 反转义
 * @param {*} str 
 * @returns 
 */
export const htmlDecode = function (str) { // 反转义
    if (!str) return '';
    var s = "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br\/>/g, "\n");
    return s;
}

/**
 * 数字到数字格式化
 * @param {*} value 
 * @param {*} toFixed 
 * @returns 
 */
export function numToUnitNum(value, toFixed = 2) {
    if (!value) return toFixed ? '0.00' : 0
    if (value >= 100000000 || value <= -100000000) {
        return Number(value / 100000000).toFixed(toFixed)
    } else if (value >= 10000 || value <= -10000) {
        return Number(value / 10000).toFixed(toFixed)
    } else {
        return Number(value).toFixed(toFixed)
    }
}
/**
 * 数字到单位格式化
 * @param {*} value 
 * @param {*} toFixed 
 * @returns 
 */
export function numToUnitName(value, unit = '') {
    if (!value) unit
    value = Math.abs(value)
    if (value >= 100000000) {
        return "亿"
    } else if (value >= 10000) {
        return "万"
    } else {
        return unit
    }
}

/**
 * 防抖
 * @param {*} func 
 * @param {*} wait 
 * @returns 
 */
export const debounce = (func, wait) => {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    }
}