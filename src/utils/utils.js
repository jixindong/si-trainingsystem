// ======================== 公共方法 ========================
// 深拷贝
function deepClone(target) {
	let result;

	if (typeof target === 'object') {
		if (Array.isArray(target)) {
			result = [];
			for (let i in target) {
				result.push(deepClone(target[i]));
			}
		} else if (target === null) {
			result = null;
		} else if (target.constructor === RegExp) {
			result = target;
		} else {
			result = {};
			for (let i in target) {
				result[i] = deepClone(target[i]);
			}
		}
	} else {
		result = target;
	}
	return result;
}

// ------------ 日期 ------------
// 获取当前日期
function getCurrentTime() {
	let date = new Date();
	return date.getFullYear() + '年' + (parseInt(date.getMonth()) + 1) + '月' + date.getDate() + '日';
}
// 获取日期字符串 年月日
function getDateString(timestamp) {
	let date = new Date(timestamp);
	return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
}
// 获取日期字符串 年月
function getDateStringII(timestamp) {
	let date = new Date(timestamp);
	return date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
}
// 获取日期字符串 年
function getDateStringIII(timestamp) {
	let date = new Date(timestamp);
	return date.getFullYear() + '年';
}

export {
	deepClone,
	getCurrentTime,
	getDateString,
	getDateStringII,
	getDateStringIII
};
