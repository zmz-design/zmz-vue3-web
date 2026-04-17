let zIndex = 2000;

/**
 * 下一个层级
 * @returns 
 */
const nextZindex = () => {
    return zIndex++
}

/**
 * 设置初始化层级
 * @param {} val 
 */
const setZindex = (val) => {
    zIndex = val
}

export {
    setZindex,
    nextZindex
}