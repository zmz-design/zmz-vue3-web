// 点击空白关闭
const zmzclickoutside = {
    mounted(el, binding) {
        el.__vueClickOutside__ = event => {
            event.stopPropagation();
            if (el && !el.contains(event.target)) {
                let methods = binding.value;
                methods(event)
            }
        };
        document.addEventListener('click', el.__vueClickOutside__);
    },
    unmounted: function (el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
    },
};

// 验证数字
const zmzverifynumber = {
    beforeMount(el, binding, vnode) {
        let findEle = (parent, type) => {
            return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
        }

        let trigger = (el, type) => {
            const e = document.createEvent('HTMLEvents')
            e.initEvent(type, true, true)
            el.dispatchEvent(e)
        }
        let input = findEle(el, 'input');
        input.addEventListener('compositionstart', () => {
            vnode.inputLocking = true
        })
        input.addEventListener('compositionend', () => {
            vnode.inputLocking = false
            input.dispatchEvent(new Event('input'))
        })
        input.addEventListener('input', () => {
            if (vnode.inputLocking) {
                return;
            }
            let oldValue = input.value;
            let newValue = input.value;
            if (binding.modifiers.float) {
                // 清除"数字"和"."以外的字符
                newValue = newValue.replace(/[^\d.]/g, '')
                // 只保留第一个, 清除多余的
                newValue = newValue.replace(/\.{2,}/g, '.')
                // 第一个字符如果是.号，则补充前缀0
                newValue = newValue.replace(/^\./g, '0.')
                // 0开头的只保留第一个0, 清除多余的
                newValue = newValue.replace(/^0{2,}/g, '0')
                // 两位数已上不能0开头
                if (/^0\d+/.test(newValue)) {
                    newValue = newValue.slice(1)
                }
                //保证.只出现一次，而不能出现两次以上
                newValue = newValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                // 保留几位小数
                if (typeof binding.value !== 'undefined') {
                    // 期望保留的最大小数位数
                    let pointKeep = 0
                    if (typeof binding.value === 'string' ||
                        typeof binding.value === 'number') {
                        pointKeep = parseInt(binding.value)
                    }
                    if (!isNaN(pointKeep)) {
                        if (!Number.isInteger(pointKeep) ||
                            pointKeep < 0) {
                            pointKeep = 0
                        }
                        const str = '^(\\d+)\\.(\\d{' + pointKeep + '}).*$'
                        const reg = new RegExp(str)
                        if (pointKeep === 0) {
                            // 不需要小数点
                            newValue = newValue.replace(reg, '$1')
                        } else {
                            // 通过正则保留小数点后指定的位数
                            newValue = newValue.replace(reg, '$1.$2')
                        }
                    }
                }
            } else {
                // 只保留整数
                newValue = newValue.replace(/[^\d]/g, '')
                newValue = newValue ? parseInt(newValue) : ''
            }
            // 判断是否需要更新，避免进入死循环
            if (+newValue !== +oldValue) {
                input.value = newValue
                trigger(input, 'input')
            }
        })
    }
}

// 防连击
const zmzpreventreclick = {
    mounted(el, binding) {
        var isclick = true;
        if (binding.modifiers.button) {
            el.disabled = false
        }
        el.__vuePreventReClick__ = () => {
            if (isclick) {
                let methods = binding.value;
                methods()
                if (binding.modifiers.button) {
                    el.disabled = true
                }
                isclick = false;
                //下面添加需要执行的事件
                el.timeId = setTimeout(() => {
                    if (binding.modifiers.button) {
                        el.disabled = false
                    }
                    isclick = true;
                    clearTimeout(el.timeId)
                }, 1000);
            }
        }

        el.addEventListener('click', el.__vuePreventReClick__)
    },
    unmounted: function (el) {
        document.removeEventListener('click', el.__vuePreventReClick__);
        el.__vuePreventReClick__ = null;
    }
}

// 可自由拖拽
const zmzfreedrag = {
    mounted(el, binding) {
        var startX = 0;
        var startY = 0;
        var startWidth = 0;
        var startHeight = 0;
        var isDown = false;
        var seat = null;
        var zmzConfig = binding.instance.$zmzConfig || 2000;
        // 生成占位
        el.__vueFreedragDown__ = e => {
            if (!binding.value) return;
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
            let elDom = el.getBoundingClientRect();
            startX = e.pageX - elDom.left;
            startY = e.pageY - elDom.top;
            startWidth = elDom.width
            startHeight = elDom.height
            //开关打开
            isDown = true;
            //设置样式  
            el.style.cursor = 'move';
            window.addEventListener('mousemove', el.__vueFreedragMove__)
            window.addEventListener('mouseup', el.__vueFreedragUp__)
        }

        el.__vueFreedragMove__ = e => {
            if (isDown) {
                if (!seat && binding.modifiers.seat) {
                    seat = document.createElement('div')
                    seat.style.width = startWidth + 'px';
                    seat.style.height = startHeight + 'px';
                    el.parentNode.appendChild(seat)
                }
                let left = e.pageX - startX;
                let top = e.pageY - startY;
                el.style.position = 'fixed';
                el.style.left = left + "px";
                el.style.top = top + "px";
                el.style.transition = "initial";
                el.style.zIndex = zmzConfig.zIndex;
            }
        }

        el.__vueFreedragUp__ = () => {
            isDown = false
            el.__vueFreedragDown__ = null;
            el.__vueFreedragMove__ = null;
        };

        el.addEventListener('mousedown', el.__vueFreedragDown__)
    },
    unmounted: function (el) {
        window.removeEventListener('mousedown', el.__vueFreedragDown__)
        window.removeEventListener('mousemove', el.__vueFreedragMove__)
        window.removeEventListener('mouseup', el.__vueFreedragUp__)
        el.__vueFreedragDown__ = null;
        el.__vueFreedragMove__ = null;
        el.__vueFreedragUp__ = null;
    }
}

// 复制
const zmzcopy = {
    mounted(el, binding) {
        const tips = el.getAttribute('zmzcopy-tips') || '复制成功';
        const type = el.getAttribute('zmzcopy-tips-type') || 'success';
        const text = el.getAttribute('zmzcopy-text') || binding.value;
        el.__vueCopy__ = () => {
            var inp = document.createElement('input'); // create input标签
            document.body.appendChild(inp) // 添加到body中
            inp.value = text // 给input设置value属性为需要copy的内容
            inp.select(); // 选中
            document.execCommand('copy', false); // copy已经选中的内容
            inp.remove(); // 删除掉这个dom
            if (binding.instance && binding.instance.$message) {
                binding.instance.$message[type](tips)
            } else {
                alert(tips)
            }
        }

        el.addEventListener('click', el.__vueCopy__)
    },
    unmounted: function (el) {
        document.removeEventListener('click', el.__vueCopy__);
        el.__vueCopy__ = null;
    }
}
export {
    zmzclickoutside,
    zmzverifynumber,
    zmzpreventreclick,
    zmzfreedrag,
    zmzcopy
}
