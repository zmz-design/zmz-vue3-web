import Hljs from 'highlight.js'
// import 'highlight.js/styles/solarized-light.css'
// import 'highlight.js/styles/monokai-sublime.css'
// import 'highlight.js/styles/school-book.css'


function highlightCodeAndShowLineNumbers(el, binding) {
    // 获取代码块元素
    const blocks = el.querySelectorAll('pre code')
    // 循环处理每个代码块
    blocks.forEach((block) => {
        // 检查是否需要显示行号
        if (binding.value && binding.value.showLineNumbers) {
            // 获取代码块内容
            const code = block.innerText

            // 将代码块内容分割成行
            const lines = code.split('\n')

            // 创建包含行号的伪元素
            const lineNumberContainer = document.createElement('span')
            lineNumberContainer.className = 'number-container'

            // 循环创建并添加行号
            lines.forEach((line, index) => {
                const lineNumber = index + 1
                const lineNumberElement = document.createElement('span')
                lineNumberElement.className = 'line-number'
                lineNumberElement.textContent = lineNumber
                lineNumberContainer.appendChild(lineNumberElement)
            })

            // 将伪元素插入代码块前面
            block.parentNode.insertBefore(lineNumberContainer, block)
        } else {
            // 如果不需要显示行号，移除之前添加的行号伪元素
            const lineNumberContainer = block.previousElementSibling
            if (
                lineNumberContainer &&
                lineNumberContainer.className === 'number-container'
            ) {
                lineNumberContainer.remove()
            }
        }
    })
}


export const highlight = {
    // 被绑定元素插入父节点时调用
    mounted: function (el, binding) {
        console.log("inserted")
        let blocks = el.querySelectorAll('pre code');
        for (let i = 0; i < blocks.length; i++) {
            Hljs.highlightElement(blocks[i])
        }

        highlightCodeAndShowLineNumbers(el, binding)
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    updated: function (el, binding) {
        console.log("updated")
        let blocks = el.querySelectorAll('pre code');
        for (let i = 0; i < blocks.length; i++) {
            Hljs.highlightElement(blocks[i])
        }


        highlightCodeAndShowLineNumbers(el, binding)
    }
}