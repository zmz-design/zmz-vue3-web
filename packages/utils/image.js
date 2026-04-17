/**
 * 加载图片
 * @param {*} imageData 图片数据
 * @returns 
 */
export const imageLoad = (imageData) => {
    return Promise.all(
        [...imageData].map(() => function onLoad(item) {
            if (item.complete) {
                return Promise.resolve(true)
            } else {
                return new Promise(resolve => {
                    item.onload = resolve
                    item.onerror = resolve
                })
            }
        })
    )
}