import { isVNode } from "vue";


/**
 * 打平树数据
 * @param {*} tree 
 * @param {*} field 
 * @returns 
 */
export function flattenTreeData(tree, field = 'children') {
	var result = [];
	let fn = (data, field) => {
		for (var i = 0; i < data.length; i++) {
			result.push(data[i])
			if (data[i][field] && Array.isArray(data[i][field]) && data[i][field].length) {
				fn(data[i][field], field)
			}
		}
	}
	fn(tree, field)
	return result;
}

/**
 * 数组去重
 * @param {*} arr 数组
 * @returns 
 */
export const duplicateRemovalArrayMap = (arr) => {
	var result = [];
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		if (!obj[arr[i].key]) {
			result.push(arr[i]);
			obj[arr[i].key] = true;
		}
	}
	return result
}

/**
 * 多维转一维
 * @param {*} arr 数组
 * @returns 
 */
export const allToOneArray = (arr) => {
	return [].concat(...arr.map(item =>
		Array.isArray(item) ? allToOneArray(item) : item
	))
}

/**
 * 默认填充数组
 * @param {*} colNum 数量
 * @param {*} initail 默认值
 * @param {*} arr 数组
 * @returns 
 */

export const createDefaultArray = (colNum = 1, initail = () => 0, arr = []) => {
	if (arr.length < colNum) {
		arr.push(initail());
		return createDefaultArray(colNum, initail, arr);
	}
	return arr;
};


// 打平子元素
export function flattenChildren(children) {
	const vnode = Array.isArray(children) ? children : [children];
	const result = [];

	vnode.forEach(child => {
		if (Array.isArray(child)) {
			result.push(...flattenChildren(child))
		} else if (isVNode(child) && Array.isArray(child.children)) {
			result.push(...flattenChildren(child.children))
		} else {
			result.push(child)
			if (isVNode(child) && child.component && child.component.subTree) {
				result.push(...flattenChildren(child.component.subTree))
			}
		}
	})
	return result;
}

/**
 * 验证类型
 * @param {*} any 
 * @returns 
 */
export function checkType(any) {
	return Object.prototype.toString.call(any).slice(8, -1)
}

/**
 * 深拷贝
 * @param {*} any 
 * @returns 
 */
export function deepClone(any) {
	if (checkType(any) === 'Object') { // 拷贝对象
		let o = {};
		for (let key in any) {
			o[key] = deepClone(any[key])
		}
		return o;
	} else if (checkType(any) === 'Array') { // 拷贝数组
		var arr = []
		for (let i = 0, leng = any.length; i < leng; i++) {
			arr[i] = deepClone(any[i])
		}
		return arr;
	} else if (checkType(any) === 'Function') { // 拷贝函数
		return new Function('return ' + any.toString()).call(this)
	} else if (checkType(any) === 'Date') { // 拷贝日期
		return new Date(any.valueOf())
	} else if (checkType(any) === 'RegExp') { // 拷贝正则
		return new RegExp(any)
	} else if (checkType(any) === 'Map') { // 拷贝Map 集合
		let m = new Map()
		any.forEach((v, k) => {
			m.set(k, deepClone(v))
		})
		return m
	} else if (checkType(any) === 'Set') { // 拷贝Set 集合
		let s = new Set()
		for (let val of any.values()) {
			s.add(deepClone(val))
		}
		return s
	}
	return any;
}