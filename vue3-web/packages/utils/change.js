export const stringToNumber = () => {

}


// 解析宽度
export const parseWidth = (width) => {
    if (width !== undefined) {
        width = parseInt(width, 10);
        if (isNaN(width)) {
            width = null;
        }
    }
    return width;
}