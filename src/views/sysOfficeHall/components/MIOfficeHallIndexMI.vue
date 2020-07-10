<template>
	<div class="oHIOperation fColumn">
		<!-- ======================== 主体 ======================== -->
		<!-- 基本信息 -->
		<div class="basicInfo fRow">
			<img class="mgR20" src="@/assets/build.png" />
			<div>
				<div>
					<span class="mgR20">业务办理单位编号：037753597</span>
					<span>业务办理机构：高新区企业</span>
				</div>
				<div>业务办理单位名称：淄博问云软件技术有限公司</div>
			</div>
		</div>
		<!-- 基本信息 end -->

		<!-- 参保缴费申报 -->
		<div class="funBox fColumn">
			<div class="titleBox fRow">
				<img class="mgR10" src="@/assets/declaration.png" />
				<span>参保缴费申报</span>
			</div>
			<div class="subtitle">参保缴费申报主要针对参保人员信息进行管理等</div>
			<div class="contentBox fRow">
				<div class="column">
					<div class="funItem fRow">
						<span class="dot">在职增员</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">单位信息变更</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">职工险种增加</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="colorBlack dot hover" @click="cCDDShow">社保缴费(网上缴费)</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span class="dot">在职减员</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">人员信息变更</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">缴费申报(银行代扣)</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">社保缴费(电汇)</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span class="dot">缴费基数申报</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">减员职工缴费基数申报</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">撤销缴费申报</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">缴费单据管理</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>
			</div>
		</div>
		<!-- 参保缴费申报 end -->
		<!-- ======================== 主体 end ======================== -->

		<!-- ======================== 社保缴费(网上缴费) ======================== -->
		<!-- 选择缴费年月对话框 -->
		<el-dialog title="选择缴费年月" width="1024px" :visible.sync="cCDDV" :before-close="cCDDClose">
			<el-form class="dialogForm colorBlack fs24" label-width="30px" size="mini">
				<div class="mgB10">
					<span>您单位已经缴费至：</span>
					<span class="colorRed">{{ cCDDCheckList[10] }}</span>
				</div>

				<div class="dialogTitleBox fRow"><img class="mgR10" src="@/assets/edit.png" /></div>

				<div>请选择本次缴费年月：</div>

				<div class="mgT20 mgB20">
					<el-checkbox-group v-model="cCDDCheckList">
						<el-checkbox v-for="(item, index) in recently12Month" :key="index" :label="item" :disabled="index != 11"></el-checkbox>
					</el-checkbox-group>
				</div>

				<el-row type="flex" justify="end">
					<el-button size="mini" @click="wOBPDShow">查看应缴</el-button>
					<el-button size="mini" @click="cCDDClose">取消</el-button>
				</el-row>
			</el-form>
		</el-dialog>
		<!-- 选择缴费年月对话框 end -->

		<!-- 等待网银支付对话框 -->
		<el-dialog title="等待网银支付" width="1024px" :visible.sync="wOBPDV" :before-close="wOBPDClose">
			<div class="fs16">
				<div>
					<span class="mgR10">订单号：</span>
					<span class="mgR100">IBK11001100110011</span>
					<span class="mgR10">应付金额：</span>
					<span class="colorRed">2400.00元</span>
				</div>

				<div class="mgT20">
					<span class="mgR10">订单描述：</span>
					<span class="colorGreen">{{ entInfo.entBasicInfo.entName }}社保 {{ recently12Month[11] }}</span>
				</div>

				<div class="mgT20">支付确认：</div>
				<div class="fColumn">
					<span class="mgB10 colorOrange">请在新打开的页面上完成支付。</span>
					<span class="colorGray">完成后请根据您的支付情况点击下面的按钮：</span>

					<div class="mgT20">
						<el-button type="success" size="small" @click="cTRDShow('success')">支付成功</el-button>
						<el-button type="danger" size="small" @click="cTRDShow('error')">支付失败</el-button>
					</div>
				</div>
			</div>
		</el-dialog>
		<!-- 等待网银支付对话框 end -->

		<!-- 缴费记账报告对话框 -->
		<el-dialog :title="cTRDTitle" width="1024px" :visible.sync="cTRDV" :before-close="cTRDClose">
			<el-form class="dialogForm">
				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>单据信息</span>
				</div>

				<div>
					<span class="mgR10">单据号：</span>
					<span class="mgR100">Y11001100110011</span>
					<span class="mgR10">金额：</span>
					<span>2400.00元</span>
				</div>

				<div class="mgT20 mgB20">
					<span class="mgR10">记账说明：</span>
					<span class="colorRed">{{ cTRDTallyState }}</span>
				</div>

				<div class="dialogTitleBox fRow" v-show="cTRDTallyState == '缴费成功！'">
					<img class="mgR10" src="@/assets/find.png" />
					<span>明细信息</span>
				</div>

				<div v-show="cTRDTallyState == '缴费成功！'">
					<el-table :data="cTRDInfo" max-height="300px" stripe border>
						<el-table-column type="index" label="No." fixed></el-table-column>
						<el-table-column prop="insuranceType" label="险种类别" show-overflow-tooltip></el-table-column>
						<el-table-column prop="chargeType" label="类别" show-overflow-tooltip></el-table-column>
						<el-table-column prop="chargeDate" label="缴费年月" show-overflow-tooltip></el-table-column>
						<el-table-column prop="chargeStaffNum" label="缴费人数" show-overflow-tooltip></el-table-column>
						<el-table-column prop="entMonthCharge" label="单位缴费额" show-overflow-tooltip></el-table-column>
						<el-table-column prop="staffMonthCharge" label="个人缴费额" show-overflow-tooltip></el-table-column>
						<el-table-column prop="interest" label="利息" show-overflow-tooltip></el-table-column>
						<el-table-column prop="overdueFine" label="滞纳金" show-overflow-tooltip></el-table-column>
						<el-table-column prop="sum" label="合计" show-overflow-tooltip></el-table-column>
						<el-table-column prop="remark" label="备注" show-overflow-tooltip></el-table-column>
					</el-table>
				</div>

				<el-row class="mgT20" type="flex" justify="end" v-show="cTRDTallyState == '缴费成功！'"><el-button size="small" @click="cTRDComplete">完成</el-button></el-row>

				<div class="fColumn" v-show="cTRDTallyState == '缴费失败！'">
					<span class="mgB20 colorOrange fs24">缴费失败，请重新缴费！</span>
					<el-button size="small" @click="cTRDClose">关闭</el-button>
				</div>
			</el-form>
		</el-dialog>
		<!-- 缴费记账报告对话框 end -->

		<!-- 维护发票邮寄地址对话框 -->
		<el-dialog title="维护发票邮寄地址" width="1024px" :visible.sync="pIMADV" :before-close="pIMADClose">
			<el-form class="dialogForm" label-width="100px" size="mini" :model="entInfo.entInvoiceMailingAddr" :rules="pIMADFormRules" ref="pIMADFormRef">
				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>发票邮寄地址信息</span>
				</div>

				<el-row>
					<el-col :span="10">
						<el-form-item prop="receiverName" label="收件人"><el-input v-model="entInfo.entInvoiceMailingAddr.receiverName"></el-input></el-form-item>
					</el-col>
					<el-col :span="10">
						<el-form-item prop="receiverTel" label="收件人电话"><el-input v-model="entInfo.entInvoiceMailingAddr.receiverTel"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="20">
						<el-form-item prop="receiverAddr" label="地址"><el-input v-model="entInfo.entInvoiceMailingAddr.receiverAddr"></el-input></el-form-item>
					</el-col>
				</el-row>

				<div class="fColumn colorRed">
					<span>注意：缴费成功后发票统一用挂号信邮寄至单位，请确认单位通信联系地址无误。</span>
					<span class="mgT20">地址的格式为：xx省 xx市 xx区/县 + 详细地址</span>
				</div>

				<el-row class="mgT20" type="flex" justify="end"><el-button size="mini" @click="pIMADNextStep">下一步</el-button></el-row>
			</el-form>
		</el-dialog>
		<!-- 维护发票邮寄地址对话框 end -->
		<!-- ======================== 社保缴费(网上缴费) end ======================== -->
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'MIOfficeHallIndexMI',
	data() {
		return {
			// ======================== 公共 ========================
			recently12Month: [], //最近12个月

			// ======================== 社保缴费(网上缴费) ========================
			// ------------ 选择缴费年月对话框 ------------
			cCDDV: false, //是否显示
			cCDDCheckList: [], //多选框组选中列表

			// ------------ 等待网银支付对话框 ------------
			wOBPDV: false, //是否显示

			// ------------ 缴费记账报告对话框 ------------
			cTRDV: false, //是否显示
			cTRDTitle: '', //标题
			cTRDTallyState: '', //记账说明
			cTRDInfo: [
				{
					chargeDate: '', //缴费年月
					chargeType: '计划缴费', //缴费类别
					insuranceType: '企业养老', //险种
					chargeStaffNum: '11', //缴费人数
					entMonthCharge: '1900.00', //单位月缴费额
					entChargeFull: '已缴满', //单位缴满标志
					staffMonthCharge: '500.00', //个人月缴费额
					staffChargeFull: '已缴满', //个人缴满标志
					interest: '0.00', //利息
					overdueFine: '0.00', //滞纳金
					sum: '2400.00', //合计
					remark: '' //备注
				}
			], //信息

			// ------------ 维护发票邮寄地址对话框 ------------
			pIMADV: false, //是否显示
			pIMADFormRules: {
				receiverName: [
					{
						required: true,
						message: '请输入收件人',
						trigger: 'blur'
					}
				],
				receiverTel: [
					{
						required: true,
						message: '请输入收件人电话',
						trigger: 'blur'
					}
				],
				receiverAddr: [
					{
						required: true,
						message: '请输入地址',
						trigger: 'blur'
					}
				]
			} //表单验证规则
		};
	},
	computed: {
		...mapState({
			entInfo: state => state.entInfo //企业信息
		})
	},
	methods: {
		// ======================== 公共 ========================
		// ------------ 日期 ------------
		// 获取最近12个月
		getRecently12Month() {
			let recently12Month = [];
			let date = new Date();

			date.setMonth(date.getMonth() + 1, 1);
			for (let i = 0; i < 12; i++) {
				date.setMonth(date.getMonth() - 1);
				let month = date.getMonth() + 1;
				month = month < 10 ? '0' + month : month;
				recently12Month.push(date.getFullYear() + '年' + month + '月');
			}

			this.recently12Month = recently12Month.reverse();
			this.cCDDCheckList = recently12Month.slice(0, 11);
			this.cTRDInfo.forEach(e => {
				e.chargeDate = this.recently12Month[11];
			});
		},

		// ======================== 社保缴费(网上缴费) ========================
		// ------------ 选择缴费年月对话框 ------------
		// 显示
		cCDDShow() {
			this.$confirm('如果不使用网银缴费，请勿使用此功能进行操作，否则影响单位正常缴费业务，确认使用网银缴费？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'info'
			})
				.then(() => {
					this.cCDDV = true;
				})
				.catch(() => {
					this.$message.info('操作已取消');
				});
		},
		// 关闭事件
		cCDDClose() {
			this.cCDDV = false;
		},

		// ------------ 等待网银支付对话框 ------------
		// 显示
		wOBPDShow() {
			if (this.cCDDCheckList.length != 12) {
				this.$message.warning('请选择本次缴费年月');
			} else {
				this.wOBPDV = true;
			}
		},
		// 关闭事件
		wOBPDClose() {
			this.wOBPDV = false;
		},

		// ------------ 缴费记账报告对话框 ------------
		// 显示
		cTRDShow(e) {
			if (e == 'success') {
				this.cTRDTitle = '缴费成功记账报告';
				this.cTRDTallyState = '缴费成功！';
			} else {
				this.cTRDTitle = '缴费失败记账报告';
				this.cTRDTallyState = '缴费失败！';
			}

			this.cTRDV = true;
		},
		// 完成按钮
		cTRDComplete() {
			this.$confirm('是否选择邮寄发票？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'info'
			})
				.then(() => {
					this.pIMADV = true;
				})
				.catch(() => {
					this.$message.success('缴费操作已完成');
				})
				.finally(() => {
					this.cCDDV = false;
					this.wOBPDV = false;
					this.cTRDV = false;
					this.$store.dispatch('entChargeStatus', this.cTRDInfo);
				});
		},
		// 关闭事件
		cTRDClose() {
			this.cTRDV = false;
		},

		// ------------ 维护发票邮寄地址对话框 ------------
		// 下一步按钮
		pIMADNextStep() {
			this.$refs.pIMADFormRef.validate(valid => {
				if (valid) {
					this.pIMADV = false;
					this.$store.dispatch('modifyEntIMA', this.entInfo.entInvoiceMailingAddr);
					this.$message.success('发票邮寄成功');
				} else {
					this.$message.warning('请完善所有【必填】信息');
				}
			});
		},
		// 关闭事件
		pIMADClose() {
			this.pIMADV = false;
		}
	},
	mounted() {
		// 获取最近12个月
		this.getRecently12Month();
	}
};
</script>
