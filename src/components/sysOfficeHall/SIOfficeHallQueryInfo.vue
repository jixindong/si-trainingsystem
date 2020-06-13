<template>
	<div class="oHBd">
		<!-- 办事大厅 主体-信息查询 侧边栏 -->
		<div class="sidebar">
			<!-- <el-scrollbar>
				<el-tree :data="menu" :props="menuProps" highlight-current accordion @node-click="menuNodeClick">
					<span slot-scope="{ node, data }">
						<img class="nodeImg" :src="data.img" />
						<span class="nodeText" :title="node.label">{{ node.label }}</span>
					</span>
				</el-tree>
			</el-scrollbar> -->
			<el-tree :data="menu" :props="menuProps" highlight-current accordion @node-click="menuNodeClick">
				<span slot-scope="{ node, data }">
					<img class="nodeImg" :src="data.img" />
					<span class="nodeText" :title="node.label">{{ node.label }}</span>
				</span>
			</el-tree>
		</div>
		<!-- 办事大厅 主体-信息查询 侧边栏 -->

		<!-- 办事大厅 主体-信息查询 面板 -->
		<div class="oHQPanel">
			<!-- ======================== 社会保险 ======================== -->
			<!-- 单位信息 -->
			<div v-show="panelSort == '1.1'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位信息</span>
				</div>

				<div class="contentBox">
					<el-form label-width="170px" size="mini">
						<el-row :gutter="10">
							<el-col :span="12">
								<el-form-item label="单位编号"><el-input :value="entInfo.entBasicInfo.entIDNum" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="11">
								<el-form-item label="单位名称"><el-input :value="entInfo.entBasicInfo.entName" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row>
							<el-col :span="23">
								<el-form-item label="单位地址"><el-input :value="entInfo.entBasicInfo.entAddr" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="缴费单位专管员姓名"><el-input :value="entInfo.entBasicInfo.paymasterName" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="缴费单位专管员所在部门"><el-input :value="entInfo.entBasicInfo.paymasterDept" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="7">
								<el-form-item label="缴费单位专管员电话"><el-input :value="entInfo.entBasicInfo.paymasterTel" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="行业代码"><el-input :value="entInfo.entBasicInfo.entTrade" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="隶属关系"><el-input :value="entInfo.entBasicInfo.entSubjection" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="7">
								<el-form-item label="工商登记执照种类"><el-input :value="entInfo.entBasicInfo.licenseSort" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="工商登记执照号码"><el-input :value="entInfo.entBasicInfo.licenseNum" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="工商登记发证日期"><el-input :value="entInfo.entBasicInfo.licenseDate" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="7">
								<el-form-item label="工商登记有效期限"><el-input :value="entInfo.entBasicInfo.licenseLimit" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="组织机构代码"><el-input :value="entInfo.entBasicInfo.entCode" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="法人代表姓名"><el-input :value="entInfo.entBasicInfo.entPersonName" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="7">
								<el-form-item label="法人代表证件编号"><el-input :value="entInfo.entBasicInfo.entPersonIDNum" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="法人代表电话"><el-input :value="entInfo.entBasicInfo.entPersonTel" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="邮政编码"><el-input :value="entInfo.entBasicInfo.entPostalCode" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="7">
								<el-form-item label="单位性质"><el-input :value="entInfo.entBasicInfo.entNature" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="经济类型"><el-input :value="entInfo.entBasicInfo.entEcoType" readonly></el-input></el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</div>
			</div>
			<!-- 单位信息 end -->

			<!-- 单位人员情况 -->
			<div v-show="panelSort == '1.2'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位人员情况</span>
				</div>

				<div class="contentBox">
					<el-form label-width="100px" size="mini">
						<el-row :gutter="10">
							<el-col :span="7">
								<el-form-item label="身份证号码"><el-input v-model="eSIDNum" clearable></el-input></el-form-item>
							</el-col>
							<el-col :span="7">
								<el-form-item label="姓名"><el-input v-model="eSName" clearable></el-input></el-form-item>
							</el-col>
							<el-col :span="7">
								<el-form-item label="参保人员类别">
									<el-select class="w90" v-model="eSInsuredSort" clearable>
										<el-option label="请选择" value=""></el-option>
										<el-option label="在职人员" value="在职人员"></el-option>
										<el-option label="离休人员" value="离休人员"></el-option>
										<el-option label="退休人员" value="退休人员"></el-option>
										<el-option label="退职人员" value="退职人员"></el-option>
										<el-option label="一次性退职人员" value="一次性退职人员"></el-option>
										<el-option label="中断人员" value="中断人员"></el-option>
										<el-option label="儿童" value="儿童"></el-option>
										<el-option label="学生" value="学生"></el-option>
										<el-option label="大学生" value="大学生"></el-option>
										<el-option label="成年居民" value="成年居民"></el-option>
										<el-option label="老年居民" value="老年居民"></el-option>
										<el-option label="缴费" value="缴费"></el-option>
										<el-option label="退保" value="退保"></el-option>
										<el-option label="发放" value="发放"></el-option>
										<el-option label="供养亲属" value="供养亲属"></el-option>
										<el-option label="新生儿" value="新生儿"></el-option>
										<el-option label="终保" value="终保"></el-option>
										<el-option label="中断" value="中断"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="3">
								<el-button size="mini" type="primary" plain @click="eSQuery">查询</el-button>
								<el-button size="mini" @click="eSClear">清空</el-button>
							</el-col>
						</el-row>

						<!--  -->
						<div>
							<el-table class="mgT20 mgB20" :data="eSInsureds" size="mini" stripe border>
								<el-table-column type="index" label="No." fixed></el-table-column>
								<el-table-column prop="num" label="个人编号" show-overflow-tooltip></el-table-column>
								<el-table-column prop="IDNum" label="身份证号码" show-overflow-tooltip></el-table-column>
								<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
								<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
								<el-table-column prop="nation" label="民族" show-overflow-tooltip></el-table-column>
								<el-table-column prop="tel" label="联系电话" show-overflow-tooltip></el-table-column>
								<el-table-column prop="correspondenceAddr" label="通讯地址" show-overflow-tooltip></el-table-column>
								<el-table-column prop="postalCode" label="邮政编码" show-overflow-tooltip></el-table-column>
								<el-table-column prop="employmentDate" label="参加工作日期" show-overflow-tooltip></el-table-column>
								<el-table-column prop="insuredSort" label="参保人员类别" show-overflow-tooltip></el-table-column>
								<el-table-column prop="subEntNum" label="二级单位编号" show-overflow-tooltip></el-table-column>
								<el-table-column prop="subEntName" label="二级单位名称" show-overflow-tooltip></el-table-column>
								<el-table-column prop="paymentBase" label="缴费基数" show-overflow-tooltip></el-table-column>
								<el-table-column prop="manualNum" label="手册编号" show-overflow-tooltip></el-table-column>
								<el-table-column prop="insuredSortName" label="投保类别名称" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>
						<!-- 			 -->

						<div class="fRow">
							<el-button class="mgLAuto" type="primary" size="mini" plain @click="eSCheckStaffInfo">查看人员信息</el-button>
							<el-button size="mini" @click="eSExportStaffInfo">导出人员信息</el-button>
							<el-button class="mgR20" size="mini" @click="eSPrint">打印养老参保凭证</el-button>
						</div>
					</el-form>
				</div>
			</div>
			<!-- 单位人员情况 end -->

			<!-- 职工增减变化 -->
			<div v-show="panelSort == '1.3'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>职工增减变化查询</span>
				</div>

				<div class="contentBox">
					<el-form label-width="150px" size="mini">
						<el-row>
							<el-col :span="10">
								<el-form-item label="经办起始日期"><el-date-picker v-model="eCHandleStartDate" type="date" placeholder="选择日期"></el-date-picker></el-form-item>
							</el-col>
							<el-col :span="10">
								<el-form-item label="经办终止日期"><el-date-picker v-model="eCHandleEndDate" type="date" placeholder="选择日期"></el-date-picker></el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button size="mini">查询</el-button>
								<el-button size="mini">清空</el-button>
							</el-col>
						</el-row>

						<el-table class="mgB20" :data="eCEmployeeChange" size="mini" stripe border>
							<el-table-column prop="id" label="No." show-overflow-tooltip></el-table-column>
							<el-table-column prop="sortNum" label="个人编号" show-overflow-tooltip></el-table-column>
							<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
							<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
							<el-table-column prop="IDNum" label="身份证号码" show-overflow-tooltip></el-table-column>
							<el-table-column prop="changeCause" label="变更原因" show-overflow-tooltip></el-table-column>
							<el-table-column prop="changeDate" label="变更年月" show-overflow-tooltip></el-table-column>
							<el-table-column prop="handleDate" label="经办日期" show-overflow-tooltip></el-table-column>
						</el-table>
					</el-form>
				</div>
			</div>
			<!-- 职工增减变化 end -->

			<!-- 单位缴费情况 -->
			<div v-show="panelSort == '1.4'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位缴费情况</span>
				</div>

				<div class="contentBox">
					<el-form label-width="150px" size="mini">
						<el-row>
							<el-col :span="8">
								<el-form-item label="起始年月"><el-date-picker v-model="ePayStartDate" type="date" placeholder="选择日期"></el-date-picker></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="终止年月"><el-date-picker v-model="ePayEndDate" type="date" placeholder="选择日期"></el-date-picker></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="险种标志">
									<el-select class="w90" v-model="ePayInsuranceType" clearable><el-option label="养老保险" value="1"></el-option></el-select>
								</el-form-item>
							</el-col>
						</el-row>

						<el-table :data="ePaymentStatus" stripe border>
							<el-table-column prop="id" label="No." show-overflow-tooltip></el-table-column>
							<el-table-column prop="payDate" label="缴费年月" show-overflow-tooltip></el-table-column>
							<el-table-column prop="insuranceType" label="险种" show-overflow-tooltip></el-table-column>
							<el-table-column prop="payPersonNum" label="缴费人数" show-overflow-tooltip></el-table-column>
							<el-table-column prop="entMonthPay" label="单位月缴费额" show-overflow-tooltip></el-table-column>
							<el-table-column prop="entPayFullSign" label="单位缴满标志" show-overflow-tooltip></el-table-column>
							<el-table-column prop="personMonthPay" label="个人月缴费额" show-overflow-tooltip></el-table-column>
							<el-table-column prop="personPayFullSign" label="个人缴满标志" show-overflow-tooltip></el-table-column>
						</el-table>
					</el-form>
				</div>
			</div>
			<!-- 单位缴费情况 end -->

			<!-- 打印单位参保缴费证明 -->
			<div v-show="panelSort == '1.5'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>打印单位参保缴费证明</span>
				</div>

				<div class="contentBox">
					<el-form label-width="150px" size="mini">
						<el-row>
							<el-col :span="10">
								<el-form-item label="起始年月"><el-date-picker v-model="pEStartDate" type="date" placeholder="选择日期"></el-date-picker></el-form-item>
							</el-col>
							<el-col :span="10">
								<el-form-item label="终止年月"><el-date-picker v-model="pEEndDate" type="date" placeholder="选择日期"></el-date-picker></el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button size="mini">查询</el-button>
								<el-button size="mini">清空</el-button>
							</el-col>
						</el-row>
					</el-form>
				</div>
			</div>
			<!-- 打印单位参保缴费证明 end -->

			<!-- 人员缴费情况 -->
			<div v-show="panelSort == '1.6'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>人员缴费情况</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 人员缴费情况 end -->

			<!-- 缴费单据 -->
			<div v-show="panelSort == '1.7'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>缴费单据查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 缴费单据 end -->

			<!-- 发票邮寄地址维护 -->
			<div v-show="panelSort == '1.8'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>发票邮寄地址维护</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 发票邮寄地址维护 end -->

			<!-- 单位定期待遇汇总信息 -->
			<div v-show="panelSort == '1.9'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位定期待遇汇总信息</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 单位定期待遇汇总信息 end -->

			<!-- 单位工伤已拨付 -->
			<div v-show="panelSort == '1.10'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位工伤已拨付</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 单位工伤已拨付 end -->

			<!-- 工商登记信息 -->
			<div v-show="panelSort == '1.11'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>工商登记信息</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 工商登记信息 end -->

			<!-- 工伤拨付明细 -->
			<div v-show="panelSort == '1.12'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>工伤拨付明细</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 工伤拨付明细 end -->

			<!-- 单位人员证照采集 -->
			<div v-show="panelSort == '1.13'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位人员证照采集</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 单位人员证照采集 end -->

			<!-- 电子单据信息 -->
			<div v-show="panelSort == '1.14'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>电子单据信息查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 电子单据信息 end -->

			<!-- 冲销电子单据信息 -->
			<div v-show="panelSort == '1.15'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>冲销电子单据信息查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 冲销电子单据信息 end -->

			<!-- 申报打印 -->
			<div v-show="panelSort == '1.16'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>申报打印</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 申报打印 end -->
			<!-- ======================== 社会保险 end ======================== -->

			<!-- ======================== 劳动关系 ======================== -->
			<!-- 用工备案 -->
			<div v-show="panelSort == '2.1'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>用工备案查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 用工备案 end -->

			<!-- 集体合同 -->
			<div v-show="panelSort == '2.2'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>集体合同查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 集体合同 end -->
			<!-- ======================== 劳动关系 end ======================== -->

			<!-- ======================== 申报查询 ======================== -->
			<!-- 申报 -->
			<div v-show="panelSort == '3'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>申报查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 申报 end -->

			<!-- 未提交 -->
			<div v-show="panelSort == '3.1'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>未提交</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 未提交 end -->

			<!-- 正在审核 -->
			<div v-show="panelSort == '3.2'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>正在审核</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 正在审核 end -->

			<!-- 审核完成 -->
			<div v-show="panelSort == '3.3'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>审核完成</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 审核完成 end -->

			<!-- 审核完成未读 -->
			<div v-show="panelSort == '3.3.1'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>审核完成未读</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 审核完成未读 end -->

			<!-- 审核完成已读 -->
			<div v-show="panelSort == '3.3.2'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>审核完成已读</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 审核完成已读 end -->
			<!-- ======================== 申报查询 end ======================== -->

			<!-- ======================== 消息查询 ======================== -->
			<div v-show="panelSort == '4'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>消息查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- ======================== 消息查询 end ======================== -->
		</div>
		<!-- 办事大厅 主体-信息查询 面板 end -->
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'SIOfficeHallQueryInfo',
	data() {
		return {
			// ------------------------ 侧边栏-菜单 ------------------------
			menu: [
				{
					id: '1',
					label: '社会保险',
					img: require('../../assets/si2.png'),
					children: [
						{
							id: '1.1',
							label: '单位信息查询',
							img: require('../../assets/architecture.png')
						},
						{
							id: '1.2',
							label: '单位人员查询',
							img: require('../../assets/editorialStaff.png')
						},
						{
							id: '1.3',
							label: '人员增减情况查询',
							img: require('../../assets/editorialStaff.png')
						},
						{
							id: '1.4',
							label: '单位缴费情况',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.5',
							label: '打印单位参保证明',
							img: require('../../assets/printer.png')
						},
						{
							id: '1.6',
							label: '人员缴费情况',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.7',
							label: '缴费单据查询',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.8',
							label: '发票邮寄地址维护',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.9',
							label: '单位定期待遇汇总信息',
							img: require('../../assets/magnifyingGlass.png')
						},
						{
							id: '1.10',
							label: '单位工伤已拨付',
							img: require('../../assets/person.png')
						},
						{
							id: '1.11',
							label: '工商登记信息',
							img: require('../../assets/editorialStaff.png')
						},
						{
							id: '1.12',
							label: '工伤拨付明细',
							img: require('../../assets/editorialStaff.png')
						},
						{
							id: '1.13',
							label: '单位人员证照采集',
							img: require('../../assets/editorialStaff.png')
						},
						{
							id: '1.14',
							label: '电子单据信息查询',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.15',
							label: '冲销电子单据信息查询',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.16',
							label: '申报打印',
							img: require('../../assets/printer.png')
						}
					]
				},
				{
					id: '2',
					label: '劳动关系',
					img: require('../../assets/monitor.png'),
					children: [
						{
							id: '2.1',
							label: '用工备案查询',
							img: require('../../assets/magnifyingGlass.png')
						},
						{
							id: '2.2',
							label: '集体合同查询',
							img: require('../../assets/magnifyingGlass.png')
						}
					]
				},
				{
					id: '3',
					label: '申报查询',
					img: require('../../assets/find.png'),
					children: [
						{
							id: '3.1',
							label: '未提交',
							img: require('../../assets/magnifyingGlass.png')
						},
						{
							id: '3.2',
							label: '正在审核',
							img: require('../../assets/magnifyingGlass.png')
						},
						{
							id: '3.3',
							label: '审核完成',
							img: require('../../assets/magnifyingGlass.png'),
							children: [
								{
									id: '3.3.1',
									label: '审核完成未读',
									img: require('../../assets/magnifyingGlass.png')
								},
								{
									id: '3.3.2',
									label: '审核完成已读',
									img: require('../../assets/magnifyingGlass.png')
								}
							]
						}
					]
				},
				{
					id: '4',
					label: '消息查询',
					img: require('../../assets/si2.png')
				}
			],
			menuProps: {
				label: 'label',
				children: 'children'
			},

			// ------------------------ 面板 ------------------------
			panelSort: '', //显示面板种类

			// 面板-单位人员情况
			eSIDNum: '', //身份证号码
			eSName: '', //姓名
			eSInsuredSort: '', //参保人员类别 Select
			eSInsureds: [], //参保人员

			// 面板-职工增减变化
			eCHandleStartDate: '', //经办起始日期
			eCHandleEndDate: '', //经办终止日期
			eCEmployeeChange: [], //职工增减变化

			// 面板-单位缴费情况
			ePayStartDate: '', //起始年月
			ePayEndDate: '', //终止年月
			ePayInsuranceType: '', //险种标志
			ePaymentStatus: [], //单位缴费情况

			// 面板-打印单位参保缴费证明
			pEStartDate: '', //起始年月
			pEEndDate: '' //终止年月
		};
	},
	computed: {
		...mapState({
			entInfo: state => state.entInfo //企业信息
		})
	},
	methods: {
		// 菜单节点 点击
		menuNodeClick(e) {
			this.panelSort = e.id;
		},
		// 单位人员情况 查询按钮
		eSQuery() {
			// this.entInfo.entStaffInfo.forEach(e => {
			// 	if()
			// });

			if (!this.eSIDNum && !this.eSName && !this.eSInsuredSort) {
				// 身份证号码、姓名、参保人员类别 均为空时
				this.eSInsureds = this.entInfo.entStaffInfo;
			} else {
				this.eSInsureds = [];
				// if (this.eSIDNum && !this.eSName && !this.eSInsuredSort) {
				// 	// 身份证号码不为空 姓名、参保人员类别为空时
				// 	this.entInfo.entStaffInfo.forEach(e => {
				// 		if (this.eSIDNum == e.IDNum) {
				// 			this.eSInsureds.push(e);
				// 		}
				// 	});
				// }else if(!this.eSIDNum && this.eSName && !this.eSInsuredSort){
				// 	// 姓名不为空 身份证号码、参保人员类别为空时
				// 	this.entInfo.entStaffInfo.forEach(e => {
				// 		if (this.eSIDNum == e.IDNum) {
				// 			this.eSInsureds.push(e);
				// 		}
				// 	});
				// }

				this.entInfo.entStaffInfo.forEach(e => {
					if (e.IDNum.indexOf(this.eSIDNum) != -1 || e.name.indexOf(this.eSName) != -1 || e.insuredSort.indexOf(this.eSInsuredSort) != -1) {
						this.eSInsureds.push(e);
					}
				});
			}
		},
		// 单位人员情况 清空按钮
		eSClear() {
			this.eSIDNum = '';
			this.eSName = '';
			this.eSInsuredSort = '';
			this.eSInsureds = [];
		},
		// 单位人员情况 查看人员信息按钮
		eSCheckStaffInfo() {},
		// 单位人员情况 导出人员信息按钮
		eSExportStaffInfo() {
			if (this.eSInsureds.length == 0) {
				this.$message.warning('暂无数据');
			} else {
				let eSInsureds = this.eSInsureds;
				// import('@/utils/Export2Excel').then(excel => {
				// 	excel.export_json_to_excel({
				// 		header: [
				// 			'No.',
				// 			'个人编号',
				// 			'身份证号码',
				// 			'姓名',
				// 			'性别',
				// 			'民族',
				// 			'联系电话',
				// 			'通讯地址',
				// 			'邮政编码',
				// 			'参加工作日期',
				// 			'参保人员类别',
				// 			'二级单位编号',
				// 			'二级单位名称',
				// 			'缴费基数',
				// 			'手册编号',
				// 			'投保类别名称'
				// 		], //表头 必填
				// 		data: eSInsureds, //具体数据 必填
				// 		filename: 'excel-list', //非必填
				// 		autoWidth: true, //非必填
				// 		bookType: 'xlsx' //非必填
				// 	});
				// });
			}
		},
		// 单位人员情况 打印养老参保凭证按钮
		eSPrint() {
			this.$message.info('此功能暂未开放');
		}
	}
};
</script>
