// 查找组件父
export const findComponentsUp = (proxy, componentName) => {
    let parents = [];
    const parent = proxy.$parent;
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUp(parent, componentName));
    } else {
        return [];
    }
}

// 查找组件
export const findComponent = (proxy, name) => {
    let parentOld = proxy;
    let parentList = [];
    while (parentOld) {
        if (parentOld.$options.name === name) {
            parentList.push(parentOld);
        }
        parentOld = parentOld.$parent;
    }
    return parentList;
}

// 查找组件子
export const findComponentDown = (proxy, name) => {
    let parentOld = proxy;
    let parentList = [];
    while (parentOld) {
        if (parentOld.$options.name === name) {
            parentList.push(parentOld);
        }
        parentOld = parentOld.$parent;
    }
    return parentList;
}


/**
 * 查找父级
 * @param {*} parent 父级
 * @param {*} name 指定名称
 * @returns 
 */
export const findParent = (parent, name) => {
    let parentOld = parent;
    while (parentOld) {
        if (parentOld.type.componentName === name) {
            return parentOld;
        }
        parentOld = parentOld.parent;
    }
    return false;
}