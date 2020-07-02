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
				birthdayTs: '',
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
				insuredDateTs: '',
				insuredRecordDate: '2020年6月10日', //备案日期
				insuredRecordDateTs: '',
				employmentYear: '2010年', //参加工作年份
				employmentYearTs: '',
				employmentDate: '2010年1月10日', //参加工作日期
				recruitStartDate: '2020年6月10日', //用工起始日期
				recruitStartDateTs: '',
				recruitEndDate: '', //用工终止日期
				recruitEndDateTs: '',
				laborContractSign: '是', //是否签订劳动合同
				laborContractStatus: '未到期', //劳动合同状态
				laborContractType: '固定期限', //劳动合同期限类型
				laborContractStartDate: '2020年5月1日', //劳动合同起始日期
				laborContractStartDateTs: '',
				laborContractEndDate: '2020年5月31日', //劳动合同终止日期
				laborContractEndDateTs: '',
				laborContractRelieveDate: '', //劳动合同解除日期
				laborContractRelieveDateTs: '',
				laborContractRelieveCause: '', //劳动合同解除原因
				reInsuredNum: '0', //续订次数
				hireStartDate: '2020年6月10日', //试用起始日期
				hireStartDateTs: '',
				hireEndDate: '', //试用终止日期
				hireEndDateTs: '',
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
				}],
				// 职工工资情况
				yesteryearWageSum: '', //上年度工资
				yesteryearActualMonth: '', //上年实发月数
				yesteryearMonthWage: '' //上年月工资
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
		},
		// 公共选项
		commonOptions: {
			// 证件类型
			IDType: [
				'居民身份证(户口簿)',
				'中国人民解放军军官证',
				'中国人民武装警察警官证',
				'香港特区护照、港澳居民往来内地通行证',
				'澳门特区护照、港澳居民往来内地通行证',
				'台湾居民来往大陆通行证',
				'外国人护照',
				'残疾人证',
				'军烈属证明',
				'社会保障卡',
				'其他身份证件'
			],
			// 民族
			nation: [
				'汉族',
				'蒙古族',
				'回族',
				'藏族',
				'维吾尔族',
				'苗族',
				'彝族',
				'壮族',
				'布依族',
				'朝鲜族',
				'满族',
				'侗族',
				'瑶族',
				'白族',
				'土家族',
				'哈尼族',
				'哈萨克族',
				'傣族',
				'黎族',
				'傈僳族',
				'佤族',
				'畲族',
				'高山族',
				'拉祜族',
				'水族',
				'东乡族',
				'纳西族',
				'景颇族',
				'柯尔克孜族',
				'土族',
				'达斡尔族',
				'仫佬族',
				'羌族',
				'布朗族',
				'撒拉族',
				'毛南族',
				'仡佬族',
				'锡伯族',
				'阿昌族',
				'普米族',
				'塔吉克族',
				'怒族',
				'乌兹别克族',
				'俄罗斯族',
				'鄂温克族',
				'德昂族',
				'保安族',
				'裕固族',
				'京族',
				'塔塔尔族',
				'独龙族',
				'鄂伦春族',
				'赫哲族',
				'门巴族',
				'珞巴族',
				'基诺族',
				'外籍人士',
				'其他'
			],
			// 户口性质
			householdType: [
				'非农业户口(城镇)',
				'本地非农业户口(本地城镇)',
				'外地非农业户口(外地城镇)',
				'农业户口(农村)',
				'本地农业户口(本地农村)',
				'外地农业户口(外地农村)',
				'台港澳人员',
				'外籍人士'
			],
			// 文化程度
			educationDegree: [
				'不限',
				'博士',
				'硕士研究生',
				'大学本科',
				'大专以上',
				'大学专科',
				'中专以上',
				'中专中技',
				'职专',
				'技工学校',
				'普通高中',
				'职业高中',
				'初级中学',
				'小学',
				'文盲或半文盲',
				'其他'
			],
			// 职工类别
			staffSort: [
				'在岗人员',
				'本单位内退人员',
				'劳务派遣人员',
				'离退休返聘人员',
				'在校学生',
				'其他'
			],
			// 职业(工种)
			staffType: [
				'单位负责人',
				'企业管理员',
				'专业、技术人员',
				'科研人员',
				'工程技术人员',
				'农业技术人员',
				'飞机船舶技术人员',
				'卫生专业技术人员',
				'经济业务人员',
				'金融业务人员',
				'法律专业人员',
				'教学人员',
				'文学艺术工作者',
				'体育工作者',
				'新闻出版社文化工作者',
				'办事人员',
				'行政办公人员',
				'安全保卫和消防人员',
				'邮政电信业务人员',
				'商业、服务业人员',
				'购销人员',
				'仓储人员',
				'餐饮服务人员',
				'饭店、旅游娱乐服务人员',
				'运输服务人员',
				'医疗卫生辅助服务人员',
				'社会服务人员',
				'农林牧渔水利生产人员',
				'种植业生产人员',
				'林业及动植物保护人员',
				'畜牧业生产人员',
				'渔业生产人员',
				'水利设施管理养护人员',
				'农林机械操作和能源开发人员',
				'生产运输工人',
				'勘测及矿物开采工人',
				'金属冶炼轧制工',
				'化工产品生产工',
				'机械制造加工工',
				'机电产品装配工',
				'机械设备修理工',
				'电力设备装运检修工',
				'电子元器件制造装调工',
				'橡胶塑料制品生产工',
				'纺织针织印染工',
				'裁剪缝纫毛皮革制作工',
				'粮油食品饮料生产工',
				'烟草制品加工工',
				'药品生产制造工',
				'木材人造板生产制作工',
				'制浆造纸纸制品生产工',
				'建筑材料生产加工工',
				'玻璃陶瓷搪瓷生产工',
				'广播影视品制作播放人员',
				'制版印刷人员',
				'工艺、美术品制作人员',
				'文体用品乐器制作人员',
				'建筑和工程施工人员',
				'驾驶员和运输工人',
				'环境监测废物处理人员',
				'检验、计量人员',
				'体力工人',
				'其他'
			],
			// 用工形式
			employmentForm: [
				'全日制',
				'非全日制'
			],
			// 劳动合同期限类型
			laborContractType: [
				'固定期限',
				'无固定期限',
				'以完成一定任务为期限'
			]
		},
		// 试题
		examQuestions:[
			{
				id:1,
				title:'劳动关系增员'
			},
			{
				id:2,
				title:'劳动关系减员'
			},
			{
				id:3,
				title:'社会保障增员'
			},
			{
				id:4,
				title:'社会保障减员'
			},
			{
				id:5,
				title:'缴费基数申报'
			},
			{
				id:6,
				title:'社保缴费(网上缴费)'
			}
		],
		// 答题记录
		answerRecord:{}
	},
	getters: {},
	mutations: {
		// 修改密码
		modifyPassword(state, mp) {
			state.entInfo.entAccount.password = mp;
		},
		// 更新企业职工信息 职工数量
		updateEntStaffInfo(state, us) {
			us.forEach(e => {
				if (e.addSICause) {
					state.entInfo.entStaffInfo.push(e);
				} else {
					state.entInfo.entStaffInfo.forEach((value, index) => {
						if (value.IDNum == e.IDNum) {
							state.entInfo.entStaffInfo.splice(index, 1);
						}
					});
				}
			});
		},
		// 修改企业职工信息 职工信息
		modifyEntStaffInfo(state, ms) {
			ms.forEach(e => {
				state.entInfo.entStaffInfo.forEach((value, index) => {
					if (value.IDNum == e.IDNum) {
						state.entInfo.entStaffInfo[index] = e;
					}
				});
			});
		},
		// 更新企业职工工资情况
		updateEntStaffWageStatus(state, sw) {
			sw.forEach(e => {
				state.entInfo.entStaffInfo.forEach((value, index) => {
					if (value.IDNum == e.IDNum) {
						state.entInfo.entStaffInfo[index] = e;
					}
				});
			});
		},
		// 更新企业人员增减情况
		updateEntStaffChange(state, sc) {
			sc.forEach(e => {
				state.entInfo.entStaffChange.push(e);
			});
		},
		// 企业缴费情况
		entChargeStatus(state, cs) {
			cs.forEach(e => {
				state.entInfo.entChargeStatus.push(e);
			});
		},
		// 修改企业发票邮寄地址信息
		modifyEntIMA(state, ia) {
			state.entInfo.entInvoiceMailingAddr = ia;
		},
		// 企业在职增员
		entAddStaff(state, as) {
			state.entInfo.entAddStaff = as;
		},
		// 企业在职减员
		entMinusStaff(state, ms) {
			state.entInfo.entMinusStaff = ms;
		}
	},
	actions: {
		// 修改密码
		modifyPassword(context, mp) {
			context.commit('modifyPassword', mp);
		},
		// 更新企业职工信息 职工数量
		updateEntStaffInfo(context, us) {
			context.commit('updateEntStaffInfo', us);
		},
		// 修改企业职工信息 职工信息
		modifyEntStaffInfo(context, ms) {
			context.commit('modifyEntStaffInfo', ms);
		},
		// 更新企业职工工资情况
		updateEntStaffWageStatus(context, sw) {
			context.commit('updateEntStaffWageStatus', sw);
		},
		// 更新企业人员增减情况
		updateEntStaffChange(context, sc) {
			context.commit('updateEntStaffChange', sc);
		},
		// 企业缴费情况
		entChargeStatus(context, cs) {
			context.commit('entChargeStatus', cs);
		},
		// 修改企业发票邮寄地址信息
		modifyEntIMA(context, ia) {
			context.commit('modifyEntIMA', ia);
		},
		// 企业在职增员
		entAddStaff(context, as) {
			context.commit('entAddStaff', as);
		},
		// 企业在职减员
		entMinusStaff(context, ms) {
			context.commit('entMinusStaff', ms);
		}
	},
	plugins: [persistedState({
		storage: window.sessionStorage
	})]
});

// 3. 抛出 Vuex 实例
export default store;
