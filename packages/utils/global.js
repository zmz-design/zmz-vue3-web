class ZmzGlobal {
    browser() {
        let params = {}
        var u = navigator.userAgent.toLowerCase();
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // Chrome
        let chrome = u.indexOf("chrome") > -1 && u.indexOf("safari") > -1;
        let ref_chrome = /chrome\/[\d.]+/gi;
        let match_chrome = u.match(ref_chrome)
        params['Chrome'] = {
            name: 'chrome浏览器',
            is: chrome,
            v: match_chrome && match_chrome.toString()
        }
        // Safari
        let safari = u.indexOf("safari") > -1 && u.indexOf("chrome") == -1;
        let ref_safari = /safari\/[\d.]+/gi;
        let match_safari = u.match(ref_safari)
        params['Safari'] = {
            name: 'safari浏览器',
            is: safari,
            v: match_safari && match_safari.toString()
        }

        // 火狐
        let firefox = u.indexOf("firefox") > -1;
        let ref_firefox = /firefox\/[\d.]+/gi;
        let match_firefox = u.match(ref_firefox)
        params['Firefox'] = {
            name: 'firefox浏览器',
            is: firefox,
            v: match_firefox && match_firefox.toString()
        }

        // 欧朋
        let opera = u.indexOf("opera") > -1;
        let ref_opera = /chrome\/[\d.]+/gi;
        let match_opera = u.match(ref_opera)
        params['Opera'] = {
            name: 'opera浏览器',
            is: opera,
            v: match_opera && match_opera.toString()
        }

        // IE
        //判断是否IE浏览器start
        var ie = u.indexOf("compatible") > -1 && u.indexOf("msie") > -1 && !u.indexOf("opera") > -1; //判断是否IE<11浏览器
        var reIE = new RegExp("msie (\\d+\\.\\d+);");
        reIE.test(u);
        var IEVersion = parseFloat(RegExp["$1"]);
        params['IE'] = {
            name: 'ie浏览器',
            is: ie,
            v: ''
        }

        params['IE7'] = {
            name: 'ie7浏览器',
            is: ie && IEVersion == 7,
            v: ''
        }

        params['IE8'] = {
            name: 'ie8浏览器',
            is: ie && IEVersion == 8,
            v: ''
        }

        params['IE9'] = {
            name: 'ie9浏览器',
            is: ie && IEVersion == 9,
            v: ''
        }

        params['IE10'] = {
            name: 'ie10浏览器',
            is: ie && IEVersion == 10,
            v: ''
        }

        params['IE11'] = {
            name: 'ie11浏览器',
            is: u.indexOf('trident') > -1 && u.indexOf("rv:11.0") > -1,
            v: ''
        }
        // 是否为移动终端
        params['Mobile'] = {
            name: 'mobile',
            is: !!u.match(/applewebkit.*mobile.*/)
        }

        // 是否为iphone或者QQHD浏览器
        params['IPhone'] = {
            name: 'iphone',
            is: u.indexOf('iphone') > -1
        }
        params['IPhoneSE'] = {
            name: 'iphonese',
            is: u.indexOf('iphone') > -1 && width == 375
        }
        params['IPhone11'] = {
            name: 'iphone11',
            is: u.indexOf('iphone') > -1 && width == 414
        }
        params['IPhone12Pro'] = {
            name: 'iphone12pro',
            is: u.indexOf('iphone') > -1 && width == 390
        }

        // 是否edg浏览器
        let edge = u.indexOf("windows nt 6.1; trident/7.0;") > -1 && !(u.indexOf("compatible") > -1 && u.indexOf(
            "msie") > -1) || u.indexOf('edg') > -1
        let ref_edge = /edg\/[\d.]+/gi;
        let match_edge = u.match(ref_edge)
        params['Edge'] = {
            name: 'edge浏览器',
            is: edge,
            v: match_edge && match_edge.toString()
        }

        // IE内核
        params['Trident'] = {
            name: 'ie内核',
            is: u.indexOf('trident') > -1
        }

        // opera内核
        params['Presto'] = {
            name: 'opera内核',
            is: u.indexOf('presto') > -1
        }

        // 苹果、谷歌内核
        params['WebKit'] = {
            name: '苹果、谷歌内核',
            is: u.indexOf('applewebkit') > -1
        }

        // 火狐内核
        params['Gecko'] = {
            name: '火狐内核',
            is: u.indexOf('gecko') > -1 && u.indexOf('khtml') === -1
        }

        // ios终端
        params['Ios'] = {
            name: 'ios终端',
            is: !!u.match(/\(i[^;]+;( U;)? cpu.+mac os x/)
        }

        // android终端
        params['Android'] = {
            name: 'android终端',
            is: u.indexOf('android') > -1 || u.indexOf('adr') > -1
        }

        // 是否iPad
        params['IPad'] = {
            name: 'ipad平板',
            is: u.indexOf('ipad') > -1
        }

        // 是否web应该程序，没有头部与底部
        params['WebApp'] = {
            name: 'webapp',
            is: u.indexOf('safari') === -1
        }

        // 是否微信 （2015-01-22新增）
        params['Weixin'] = {
            name: '微信',
            is: u.indexOf('micromessenger') > -1
        }

        // 是否QQ
        params['Qq'] = {
            name: 'qq',
            is: u.match(/\bqq\b/i) == "qq"
        }

        // 微信开发者工具
        params['Wechatdevtools'] = {
            name: '微信开发者工具',
            is: u.indexOf('wechatdevtools') > -1
        }

        // qq浏览器
        params['Qqbrowser'] = {
            name: 'qq浏览器',
            is: u.indexOf('mqqbrowser') > -1
        }

        // uc浏览器
        params['Ucbrowser'] = {
            name: 'uc浏览器',
            is: u.indexOf('ucbrowser') > -1
        }

        // 百度app
        params['Baiduapp'] = {
            name: '百度app',
            is: u.indexOf('baiduboxapp') > -1
        }

        // 小米浏览器
        params['Miuibrowser'] = {
            name: '小米浏览器',
            is: u.indexOf('miuibrowser') > -1
        }
        return params
    }
}

let zmzGlobal = (Vue) => {
    return new ZmzGlobal(Vue)
}

export default zmzGlobal
