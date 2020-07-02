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
// 获取日期时间戳 年月日
function getTimestamp(dateString) {
	if (!dateString) {
		return '';
	} else {
		let dateYC = dateString.indexOf('年'); //年字索引
		let dateMC = dateString.indexOf('月'); //月字索引
		let dateDC = dateString.indexOf('日'); //日字索引
		let dateY = dateString.slice(0, dateYC); //年
		let dateM = dateString.slice(dateYC + 1, dateMC).length == 2 ? dateString.slice(dateYC + 1, dateMC) : '0' + dateString.slice(dateYC + 1, dateMC); //月
		let dateD = dateString.slice(dateMC + 1, dateDC).length == 2 ? dateString.slice(dateMC + 1, dateDC) : '0' + dateString.slice(dateMC + 1, dateDC); //日
		return new Date(dateY + '/' + dateM + '/' + dateD + ' 00:00:00').getTime(); //时间戳
	}
}
// 获取日期时间戳 年月
function getTimestampII(dateString) {
	if (!dateString) {
		return '';
	} else {
		let dateYC = dateString.indexOf('年'); //年字索引
		let dateMC = dateString.indexOf('月'); //月字索引
		let dateY = dateString.slice(0, dateYC); //年
		let dateM = dateString.slice(dateYC + 1, dateMC).length == 2 ? dateString.slice(dateYC + 1, dateMC) : '0' + dateString.slice(dateYC + 1, dateMC); //月
		return new Date(dateY + '/' + dateM + '/' + '01' + ' 00:00:00').getTime(); //时间戳
	}
}
// 获取日期时间戳 年
function getTimestampIII(dateString) {
	if (!dateString) {
		return '';
	} else {
		let dateYC = dateString.indexOf('年'); //年字索引
		let dateY = dateString.slice(0, dateYC); //年
		return new Date(dateY + '/' + '01' + '/' + '01' + ' 00:00:00').getTime(); //时间戳
	}
}

export {
	deepClone,
	getCurrentTime,
	getDateString,
	getDateStringII,
	getDateStringIII,
	getTimestamp,
	getTimestampII,
	getTimestampIII
};
