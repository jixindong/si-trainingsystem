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
				// 职工基本信息
				num: '1', //个人编号
				IDType: '居民身份证(户口簿)', //证件类型
				IDNum: '370302198911046018', //证件号码
				name: '张三', //姓名
				formerName: '', //曾用名
				sex: '男', //性别
				nation: '汉族', //民族
				nationality: '中国', //国籍
				birthday: '1980年11月1日', //出生日期
				postalCode: '255000', //邮政编码
				administrativeDivision: '山东省淄博市张店区', //行政区划
				homeAddr: '山东省淄博市张店区马尚镇', //家庭住址
				correspondenceAddr: '山东省淄博市高新区东方之珠', //通讯地址
				residentialAddr: '山东省淄博市张店区远景大厦', //长期生活地址
				householdType: '非农业', //户口性质
				householdLocation: '山东省淄博市张店区东方之珠一单元3501', //户口所在地
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
				staffSort: '在岗人员', //职工类别
				staffType: '单位负责人', //职业（工种）
				employmentForm: '全日制', //用工形式
				// 职工社保信息
				siNum: '112233445566', //社保号
				insuredSort: '在职人员', //参保人员类别
				insuredSortName: '企业养老,一次性养老补助,失业,工伤', //投保类别名称
				insuredDate: '2020年6月10日', //投保日期
				reInsuredNum: '0', //续订次数
				insuredRecordDate: '2020年6月10日', //备案日期
				employmentYear: '2010年', //参加工作年份
				employmentDate: '2010年1月10日', //参加工作日期
				recruitStartDate: '2020年6月10日', //用工起始日期
				recruitEndDate: '', //用工终止日期
				laborContractSign: '是', //是否签订劳动合同
				laborContractStatus: '未到期', //劳动合同状态
				laborContractType: '固定期限', //劳动合同期限类型
				laborContractStartDate: '2020年5月1日', //劳动合同起始日期
				laborContractEndDate: '2020年5月31日', //劳动合同终止日期
				hireStartDate: '2020年6月10日', //试用起始日期
				hireEndDate: '', //试用终止日期
				subEntNum: '666', //二级单位编号
				subEntName: '问云教育', //二级单位名称
				chargeBase: '3300', //缴费基数
				manualNum: '123456', //手册编号
				// 职工缴费情况
				staffChargeStatus: [{
					insuranceType: '企业养老', //险种
					startDate: '1998年1月', //起始年月
					endDate: '1998年1月', //终止年月
					entMonthCharge: '21', //单位月缴费额
					staffMonthCharge: '12', //个人月缴费额
					staffChargeBase: '300.00', //个人缴费基数
					chargeDate: '1998年1月10日', //发生日期
					chargeCause: '单位应缴缴费' //发生原因
				}]
			}],
			// 企业人员增减情况
			entStaffChange: [{
					num: '1', //个人编号
					name: '张三', //姓名
					sex: '男', //性别
					IDNum: '370302198911046018', //身份证号码
					changeCause: '在职人员统筹范围内转入', //变更原因
					changeDate: '2018年1月10日', //变更年月
					handleDate: '2018年1月10日' //经办日期
				},
				{
					num: '2', //个人编号
					name: '李四', //姓名
					sex: '男', //性别
					IDNum: '370302198911046018', //身份证号码
					changeCause: '在职人员统筹范围内转入', //变更原因
					changeDate: '2019年1月10日', //变更年月
					handleDate: '2019年1月10日' //经办日期
				}
			],
			// 企业缴费情况
			entChargeStatus: [{
					chargeDate: '2020年3月', //缴费年月
					insuranceType: '企业养老', //险种
					chargeStaffNum: '10', //缴费人数
					entMonthCharge: '1570', //单位月缴费额
					entChargeFull: '已缴满', //单位缴满标志
					staffMonthCharge: '600', //个人月缴费额
					staffChargeFull: '已缴满' //个人缴满标志
				},
				{
					chargeDate: '2020年4月', //缴费年月
					insuranceType: '企业养老', //险种
					chargeStaffNum: '11', //缴费人数
					entMonthCharge: '1570', //单位月缴费额
					entChargeFull: '已缴满', //单位缴满标志
					staffMonthCharge: '600', //个人月缴费额
					staffChargeFull: '已缴满' //个人缴满标志
				},
				{
					chargeDate: '2020年5月', //缴费年月
					insuranceType: '失业', //险种
					chargeStaffNum: '12', //缴费人数
					entMonthCharge: '1570', //单位月缴费额
					entChargeFull: '已缴满', //单位缴满标志
					staffMonthCharge: '600', //个人月缴费额
					staffChargeFull: '已缴满' //个人缴满标志
				}
			],
			// 企业参保缴费证明
			entInsuredChargeCert: [{
					name: '张三', //姓名
					sex: '男', //性别
					IDNum: '370302198911046018', //身份证号码
					yl: '是', //养老
					ylStartDate: '2019年1月', //养老起始年月
					ylEndDate: '2019年5月', //养老终止年月
					mT: '是', //医疗
					mTStartDate: '2019年1月', //医疗起始年月
					mTEndDate: '2019年5月', //医疗终止年月
					ue: '否', //失业
					ueStartDate: '', //失业起始年月
					ueEndDate: '', //失业终止年月
					oI: '是', //工伤
					oIStartDate: '2019年1月', //工伤起始年月
					oIEndDate: '2019年5月', //工伤终止年月
					be: '否', //生育
					beStartDate: '', //生育起始年月
					beEndDate: '', //生育终止年月
					remark: '无' //备注
				},
				{
					name: '李四', //姓名
					sex: '男', //性别
					IDNum: '370302198911046019', //身份证号码
					yl: '是', //养老
					ylStartDate: '2020年1月', //养老起始年月
					ylEndDate: '2020年5月', //养老终止年月
					mT: '是', //医疗
					mTStartDate: '2020年1月', //医疗起始年月
					mTEndDate: '2020年5月', //医疗终止年月
					ue: '否', //失业
					ueStartDate: '', //失业起始年月
					ueEndDate: '', //失业终止年月
					oI: '否', //工伤
					oIStartDate: '', //工伤起始年月
					oIEndDate: '', //工伤终止年月
					be: '否', //生育
					beStartDate: '', //生育起始年月
					beEndDate: '', //生育终止年月
					remark: '没有备注' //备注
				}
			],
			// 企业缴费单据
			entChargeReceipts: [{
					serialNum: '10418111610016295279', //自动流水号
					fillTime: '2020年1月1日', //填写时间
					confirmTime: '', //确认时间
					receiptsStatus: '已作废', //单据状态
					siFundNum: '3660.66', //社保基金金额
					financeFundNum: '0.00', //财政基金金额
					prestoreFundNum: '0.00', //预存基金金额
					totalNum: '3660.66', //总金额
					remark: '网银缴费' //备注
				},
				{
					serialNum: '104181116100162952766', //自动流水号
					fillTime: '2020年6月1日', //填写时间
					confirmTime: '2020年6月1日', //确认时间
					receiptsStatus: '已确认', //单据状态
					siFundNum: '3660.99', //社保基金金额
					financeFundNum: '0.00', //财政基金金额
					prestoreFundNum: '0.00', //预存基金金额
					totalNum: '3660.99', //总金额
					remark: '网银缴费' //备注
				}
			],
			// 企业发票邮寄地址信息
			entInvoiceMailingAddr: {
				receiverName: '张三', //收件人
				receiverTel: '12345678910', //收件人电话
				receiverAddr: '山东省淄博市张店区敦化路诺德广场13A' //地址
			},
			// 企业定期待遇汇总信息
			entTreatmentSum: [{
				sumDate: '2020年6月',
				treatmentSum: [{
						siNum: '1234567891011', //社会保障号码
						name: '张三', //姓名
						sex: '男', //性别
						bankAccount: '123456789101114161', //银行账号
						birthday: '1970年1月1日', //出生日期
						employmentDate: '1980年1月1日', //参加工作日期
						retirementDate: '2020年1月1日', //离退休日期
						treatmentStartDate: '2020年1月1日', //待遇享受开始年月
						treatmentSort: '', //离退休类别
						treatmentStatus: '', //待遇发放状态
						treatmentNum: '6000' //定期待遇金额
					},
					{
						siNum: '1234567891011', //社会保障号码
						name: '李四', //姓名
						sex: '男', //性别
						bankAccount: '123456789101114161', //银行账号
						birthday: '1970年1月1日', //出生日期
						employmentDate: '1980年1月1日', //参加工作日期
						retirementDate: '2020年1月1日', //离退休日期
						treatmentStartDate: '2020年1月1日', //待遇享受开始年月
						treatmentSort: '', //离退休类别
						treatmentStatus: '', //待遇发放状态
						treatmentNum: '6000' //定期待遇金额
					}
				]
			}],
			// 企业电子单据信息
			entElecBillInfo: [{
				bizSerialNum: '12345678910', //业务流水号
				bizBatchNum: '12345678910', //业务批次号
				handleInsNum: '37039A01', //经办机构编号
				districtCode: '370340', //行政区划代码
				charger: '淄博问云软件技术有限公司', //交款人
				chargerType: '单位', //交款人类型
				chargeEntCode: '0307753597', //交款单位机构编码
				chargeEntName: '淄博问云软件技术有限公司', //交款单位机构名称
				elecBillCode: '110011', //电子票据代码
				elecBillNum: '001100', //电子票据号码
				elecBillTime: '2020年5月1日', //电子票据生成时间
				elecBillCheckCode: 'qbz95', //电子票据校验码
				H5: 'http://www.baidu.com' //H5页面地址
			}],
			// 企业申报
			entDeclare: [{
				declareProjectType: '在职增员', //申报项目
				bizSerialNum: '211001991', //业务流水号
				declareProjectName: '劳动用工备案', //申报项目名称
				declareStatus: '审核完成已读', //申报状态
				declareStaffNum: '1', //申报职工编号
				handleDate: '2020年6月10日', //经办日期
				submitDate: '2020年6月10日', //提交日期
				checkStatus: '已通过', //审核状态
				checkMsg: '已通过', //审核说明
				feedbackMsg: '审核完毕' //反馈信息
			}],
			// 企业在职增员
			entAddStaff: [],
			// 企业在职减员
			entMinusStaff: []
		}
	},
	getters: {},
	mutations: {
		// 修改密码
		modifyPassword(state, mp) {
			state.entInfo.entAccount.password = mp;
		},
		// 修改企业发票邮寄地址信息
		modifyEntIMA(state, me) {
			state.entInfo.entInvoiceMailingAddr = me;
		},
		// 企业在职增员
		entAddStaff(state, ea) {
			state.entInfo.entAddStaff = ea;
		},
		// 企业在职减员
		entMinusStaff(state, em) {
			state.entInfo.entMinusStaff = em;
		},
		// 更新企业职工信息
		updateEntStaffInfo(state, ue){
			ue.forEach(e => {
				if(e.addSICause){
					state.entInfo.entStaffInfo.push(e);
				}else{
					state.entInfo.entStaffInfo.forEach((value,index) => {
						if(value.IDNum == e.IDNum){
							state.entInfo.entStaffInfo.splice(index,1);
						}
					});
				}
			});
		},
		// 更新企业人员增减情况
		updateEntStaffChange(state, ue) {
			ue.forEach(e => {
				state.entInfo.entStaffChange.push(e);
			});
		}
	},
	actions: {
		// 修改密码
		modifyPassword(context, mp) {
			context.commit('modifyPassword', mp);
		},
		// 修改企业发票邮寄地址信息
		modifyEntIMA(context, me) {
			context.commit('modifyEntIMA', me);
		},
		// 企业在职增员
		entAddStaff(context, ea) {
			context.commit('entAddStaff', ea);
		},
		// 企业在职减员
		entMinusStaff(context, em) {
			context.commit('entMinusStaff', em);
		},
		// 更新企业职工信息
		updateEntStaffInfo(context, ue) {
			context.commit('updateEntStaffInfo', ue);
		},
		// 更新企业人员增减情况
		updateEntStaffChange(context, ue) {
			context.commit('updateEntStaffChange', ue);
		}
	},
	plugins: [persistedState({
		storage: window.sessionStorage
	})]
});

// 3. 抛出 Vuex 实例
export default store;
