import ResizePolyfill from 'resize-observer-polyfill';
// 添加 class
export function addClass(ele, cName) {
    var arr = ele.className.split(' ').concat(cName.split(" "));
    for (var i = 0; i < arr.length; i++) {
        for (var k = arr.length - 1; k > i; k--) {
            (arr[k] === "") && arr.splice(k, 1);
            (arr[i] === arr[k]) && arr.splice(k, 1);
        }
    }
    ele.className = arr.join(" ");
}

// 删除class
export function removeClass(ele, cName) {
    var arr1 = ele.className.split(' ');
    var arr2 = cName.split(" ");
    for (var i = 0; i < arr2.length; i++)for (var j = arr1.length - 1; j >= 0; j--)(arr2[i] === arr1[j]) && arr1.splice(j, 1)
    ele.className = arr1.join(" ")
}

// 监听
export const addEventListener = (function () {
    if (typeof document === 'undefined') {
        return () => { };
    }

    if (document.addEventListener) {
        return (node, eventName, handler, capture) => node.addEventListener(eventName, handler, capture || false);
    }

    if (document.attachEvent) {
        return (node, eventName, handler) =>
            node.attachEvent(`on${eventName}`, (e) => {
                e = e || window.event;
                e.target = e.target || e.srcElement;
                e.currentTarget = node;
                handler.call(node, e);
            });
    }
})();

export const on = addEventListener;

export const removeEventListener = (function () {
    if (typeof document === 'undefined') {
        return () => { };
    }

    if (document.addEventListener) {
        return (node, eventName, handler, capture) =>
            node.removeEventListener(eventName, handler, capture || false);
    }

    if (document.attachEvent) {
        return (node, eventName, handler) =>
            node.detachEvent(`on${eventName}`, handler);
    }
})();

export const off = removeEventListener;

export const createResizeObserver = (callback) => {
    if (window.resizeObserver) {
      return window.resizeObserver
    }
    let observer = window.resizeObserver;
    if (!observer) {
      observer = ResizePolyfill
    }
  
    return new observer(entities => {
      if (entities && entities.length) {
        entities.forEach(entity => {
          //contentRect:位置大小信息
          //target:dom信息
          const { contentRect, target } = entity;
          if (callback) {
            callback(contentRect, target)//目标对象发生改变之后的逻辑操作
          }
        })
      }
    })
  }
  