import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';

// 调用 Vuex
Vue.use(Vuex);

// 2. 创建 Vuex 实例
const store = new Vuex.Store({
	state: {
		// 企业信息
		entInfo: {
			// 企业账户
			entAccount: {
				accountName: '91370303060449475K',
				password: '123456'
			},
			// 企业基本信息
			entBasicInfo: {
				entName: '淄博问云软件技术有限公司', //企业名称
				entIDNum: '0307753597', //企业编号
				entCode: '91370303060449475K', //组织机构代码
				entPostalCode: '255000', //邮政编码
				entAddr: '山东省淄博市高新区万杰路106号凯发事务所', //企业地址
				entTrade: '科学研究、技术服务和地质勘察', //行业代码
				entNature: '企业', //单位性质
				entEcoType: '私营', //经济类型
				entPersonName: '崔太喜', //法人代表姓名
				entPersonIDNum: '370523198211135311', //法人代表证件编号
				entPersonTel: '12345678910', //法人代表电话
				entSubjection: '某县(区)', //隶属关系
				paymasterName: '罗翔', //缴费单位专管员姓名
				paymasterDept: '办公室', //缴费单位专管员所在部门
				paymasterTel: '12345678910', //缴费单位专管员电话
				licenseSort: '企业营业执照', //工商登记执照种类
				licenseNum: '91370303060449475K', //工商登记执照号码
				licenseDate: '2013年1月17日', //工商登记发证日期
				licenseLimit: '长期' //工商登记有效期限
			},
			// 企业职工信息
			entStaffInfo: [{
				// 企业职工基本信息
				num: '1', //个人编号
				IDNum: '370302198911046018', //身份证号码
				name: '张三', //姓名
				formerName: '', //曾用名
				sex: '男', //性别
				nation: '汉族', //民族
				birthday: '1980年11月1日', //出生日期
				postalCode: '255000', //邮政编码
				homeAddr: '山东省淄博市张店区马尚镇', //家庭住址
				correspondenceAddr: '山东省淄博市高新区东方之珠', //通讯地址
				residentialAddr: '山东省淄博市张店区远景大厦', //长期生活地址
				householdType: '非农业', //户口性质
				householdLocation: '山东省淄博市张店区', //户口所在地
				tel: '12345678910', //联系电话
				maritalStatus: '未婚', //婚姻状况
				administrativeRank: '张店区副区长', //行政职务
				educationDegree: '硕士研究生', //文化程度
				educationMajor: '互联网大数据', //所学专业
				NVQ: '高级注册会计师', //国家职业资格登记
				religion: '基督教', //宗教信仰
				healthCondition: '健康', //健康状况
				contacts: '罗翔', //联系人
				status: 'CEO', //个人身份
				employmentForm: '董事长', //用工形式
				employmentDate: '2010年1月10日', //参加工作日期
				// 企业职工社保信息
				insuredSort: '在职人员', //参保人员类别
				insuredSortName: '企业养老,一次性养老补助,失业,工伤', //投保类别名称
				subEntNum: '666', //二级单位编号
				subEntName: '问云教育', //二级单位名称
				paymentBase: '1.0', //缴费基数
				manualNum: '123456', //手册编号
			}],
			// 企业人员增减情况
			entStaffPOMCase: [{
				num: '1', //个人编号
				name: '张三', //姓名
				sex: '男', //性别
				IDNum: '370302198911046018', //身份证号码
				changeCause: '在职人员统筹范围内转入', //变更原因
				changeDate: '2010年1月10日', //变更年月
				handleDate: '2010年1月10日' //经办日期
			}]
		}
	},
	getters: {},
	mutations: {
		// 修改密码
		modifyPassword(state, mp) {
			state.entInfo.entAccount.password = mp;
		}
	},
	actions: {
		// 修改密码
		modifyPassword(context, mp) {
			context.commit('modifyPassword', mp);
		}
	},
	plugins: [persistedState({
		storage: window.sessionStorage
	})]
});

// 3. 抛出 Vuex 实例
export default store;
