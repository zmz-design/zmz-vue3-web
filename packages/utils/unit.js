/**
 * 单位默认补全
 * @param {*} data 数值字符串
 * @returns 
 */
export const unitDefaultCompletion = (data) => {
    // let companyList = ['em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ch', 'rem', 'vh', 'vw', 'vmin', 'vmax'];
    if (/^em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax|auto$/.test(data)) {
        return data
    } else {
        return data + 'px'
    }
}