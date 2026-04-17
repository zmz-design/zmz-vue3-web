import * as highlight from './highlight.js';
const directive = {
    ...highlight
}

const install = function (Vue) {
    Object.keys(directive).forEach(item => {
        Vue.directive(item, directive[item])
    })
}

export default install