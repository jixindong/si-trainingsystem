<template>
	<div class="oHBd">
		<!-- 办事大厅 主体-信息查询 侧边栏 -->
		<div class="sidebar">
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

						<div>
							<el-table class="mgT20 mgB20" :data="eSInsureds" max-height="600" size="mini" stripe border @row-dblclick="eSTbRowDtl">
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
								<el-table-column prop="chargeBase" label="缴费基数" show-overflow-tooltip></el-table-column>
								<el-table-column prop="manualNum" label="手册编号" show-overflow-tooltip></el-table-column>
								<el-table-column prop="insuredSortName" label="投保类别名称" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>

						<div class="fRow">
							<el-button class="mgLAuto" type="primary" size="mini" plain @click="eSCheckStaffInfo">查看人员信息</el-button>
							<el-button size="mini" @click="eSExportStaffInfo">导出人员信息</el-button>
							<el-button class="mgR20" size="mini" @click="eSPrint">打印养老参保凭证</el-button>
						</div>
					</el-form>
				</div>

				<el-dialog title="单位人员详情" :visible.sync="eSDV" width="1024px" :before-close="eSDClose">
					<el-form label-width="124px" size="mini">
						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="个人编号"><el-input :value="eSDInfo.num" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="身份证号码"><el-input :value="eSDInfo.IDNum" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="姓名"><el-input :value="eSDInfo.name" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="曾用名"><el-input :value="eSDInfo.formerName" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="性别"><el-input :value="eSDInfo.sex" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="民族"><el-input :value="eSDInfo.nation" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="出生日期"><el-input :value="eSDInfo.birthday" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="邮政编码"><el-input :value="eSDInfo.postalCode" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="家庭住址"><el-input :value="eSDInfo.homeAddr" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="通讯地址"><el-input :value="eSDInfo.correspondenceAddr" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="长期生活地址"><el-input :value="eSDInfo.residentialAddr" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="户口性质"><el-input :value="eSDInfo.householdType" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="户口所在地"><el-input :value="eSDInfo.householdLocation" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="联系电话"><el-input :value="eSDInfo.tel" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="婚姻状况"><el-input :value="eSDInfo.maritalStatus" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="行政职务"><el-input :value="eSDInfo.administrativeRank" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="文化程度"><el-input :value="eSDInfo.educationDegree" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="所学专业"><el-input :value="eSDInfo.educationMajor" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="国家职业资格登记"><el-input :value="eSDInfo.NVQ" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="宗教信仰"><el-input :value="eSDInfo.religion" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="健康状况"><el-input :value="eSDInfo.healthCondition" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="联系人"><el-input :value="eSDInfo.contacts" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="个人身份"><el-input :value="eSDInfo.status" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="用工形式"><el-input :value="eSDInfo.employmentForm" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="参加工作日期"><el-input :value="eSDInfo.employmentDate" readonly></el-input></el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</el-dialog>
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
								<el-form-item label="经办起始日期">
									<el-date-picker v-model="sCHandleStartDate" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="10">
								<el-form-item label="经办终止日期">
									<el-date-picker v-model="sCHandleEndDate" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button type="primary" size="mini" plain @click="sCQuery">查询</el-button>
								<el-button size="mini" @click="sCClear">清空</el-button>
							</el-col>
						</el-row>

						<div>
							<el-table :data="sCStaffChange" max-height="680" size="mini" stripe border>
								<el-table-column type="index" label="No." fixed></el-table-column>
								<el-table-column prop="num" label="个人编号" show-overflow-tooltip></el-table-column>
								<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
								<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
								<el-table-column prop="IDNum" label="身份证号码" show-overflow-tooltip></el-table-column>
								<el-table-column prop="changeCause" label="变更原因" show-overflow-tooltip></el-table-column>
								<el-table-column prop="changeDate" label="变更年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="handleDate" label="经办日期" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>
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
							<el-col :span="6">
								<el-form-item label="起始年月">
									<el-date-picker v-model="ePStartDate" type="month" value-format="timestamp" placeholder="选择起始年月"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="6">
								<el-form-item label="终止年月">
									<el-date-picker v-model="ePEndDate" type="month" value-format="timestamp" placeholder="选择终止年月"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="险种标志">
									<el-select class="w90" v-model="ePInsuranceType" clearable>
										<el-option label="请选择" value=""></el-option>
										<el-option label="企业养老" value="企业养老"></el-option>
										<el-option label="机关事业养老" value="机关事业养老"></el-option>
										<el-option label="失业" value="失业"></el-option>
										<el-option label="职工医疗" value="职工医疗"></el-option>
										<el-option label="公务员" value="公务员"></el-option>
										<el-option label="大额" value="大额"></el-option>
										<el-option label="补充医疗" value="补充医疗"></el-option>
										<el-option label="门诊统筹" value="门诊统筹"></el-option>
										<el-option label="工伤" value="工伤"></el-option>
										<el-option label="生育" value="生育"></el-option>
										<el-option label="改革前养老" value="改革前养老"></el-option>
										<el-option label="职业年金" value="职业年金"></el-option>
										<el-option label="一次性养老补助" value="一次性养老补助"></el-option>
										<el-option label="津贴补贴" value="津贴补贴"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button type="primary" size="mini" plain @click="ePQuery">查询</el-button>
								<el-button size="mini" @click="ePClear">清空</el-button>
							</el-col>
						</el-row>

						<div>
							<el-table :data="ePChargeStatus" max-height="670" stripe border>
								<el-table-column type="index" label="No." fixed></el-table-column>
								<el-table-column prop="chargeDate" label="缴费年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="insuranceType" label="险种" show-overflow-tooltip></el-table-column>
								<el-table-column prop="chargeStaffNum" label="缴费人数" show-overflow-tooltip></el-table-column>
								<el-table-column prop="entMonthCharge" label="单位月缴费额" show-overflow-tooltip></el-table-column>
								<el-table-column prop="entChargeFull" label="单位缴满标志" show-overflow-tooltip></el-table-column>
								<el-table-column prop="staffMonthCharge" label="个人月缴费额" show-overflow-tooltip></el-table-column>
								<el-table-column prop="staffChargeFull" label="个人缴满标志" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>
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
								<el-form-item label="起始年月">
									<el-date-picker v-model="pCStartDate" type="month" value-format="timestamp" placeholder="选择起始年月"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="10">
								<el-form-item label="终止年月">
									<el-date-picker v-model="pCEndDate" type="month" value-format="timestamp" placeholder="选择终止年月"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button type="primary" size="mini" plain @click="pCQuery">查询</el-button>
								<el-button size="mini" @click="pCClear">清空</el-button>
							</el-col>
						</el-row>

						<div>
							<el-table :data="pCInsuredChargeCert" max-height="620" stripe border @selection-change="pCICCMSChange">
								<el-table-column type="index" label="No." fixed></el-table-column>
								<el-table-column type="selection"></el-table-column>
								<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
								<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
								<el-table-column prop="IDNum" label="身份证号码" show-overflow-tooltip></el-table-column>
								<el-table-column prop="yl" label="养老" show-overflow-tooltip></el-table-column>
								<el-table-column prop="ylStartDate" label="养老起始年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="ylEndDate" label="养老终止年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="mT" label="医疗" show-overflow-tooltip></el-table-column>
								<el-table-column prop="mTStartDate" label="医疗起始年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="mTEndDate" label="医疗终止年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="ue" label="失业" show-overflow-tooltip></el-table-column>
								<el-table-column prop="ueStartDate" label="失业起始年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="ueEndDate" label="失业终止年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="oI" label="工伤" show-overflow-tooltip></el-table-column>
								<el-table-column prop="oIStartDate" label="工伤起始年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="oIEndDate" label="工伤终止年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="be" label="生育" show-overflow-tooltip></el-table-column>
								<el-table-column prop="beStartDate" label="生育起始年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="beEndDate" label="生育终止年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="remark" label="备注" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>

						<el-row class="mgT20 mgB20">
							<el-col :span="4" :offset="1">共 {{ pCInsuredChargeCert.length }} 行，选中 {{ pCICCMS.length }} 行</el-col>
						</el-row>

						<div class="fRow">
							<el-button class="mgLAuto" type="primary" size="mini" plain @click="pCPrint">打印社会保险参保缴费名单</el-button>
							<el-button class="mgR20" size="mini" @click="pCExportInsuredList">下载社会保险参保缴费名单</el-button>
						</div>
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

				<div class="contentBox">
					<el-form label-width="100px" size="mini">
						<el-row>
							<el-col :span="7">
								<el-form-item label="选择职工" required>
									<el-input :value="sPChoiceStaff" readonly><el-button slot="append" icon="el-icon-search" @click="sPSearchStaff"></el-button></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="7">
								<el-form-item label="姓名"><el-input :value="sPStaffName" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="7">
								<el-form-item label="险种标志" required>
									<el-select v-model="sPInsuranceSign" clearable>
										<el-option label="请选择" value=""></el-option>
										<el-option label="企业养老" value="企业养老"></el-option>
										<el-option label="机关事业养老" value="机关事业养老"></el-option>
										<el-option label="失业" value="失业"></el-option>
										<el-option label="职工医疗" value="职工医疗"></el-option>
										<el-option label="公务员" value="公务员"></el-option>
										<el-option label="大额" value="大额"></el-option>
										<el-option label="补充医疗" value="补充医疗"></el-option>
										<el-option label="门诊统筹" value="门诊统筹"></el-option>
										<el-option label="工伤" value="工伤"></el-option>
										<el-option label="生育" value="生育"></el-option>
										<el-option label="改革前养老" value="改革前养老"></el-option>
										<el-option label="职业年金" value="职业年金"></el-option>
										<el-option label="一次性养老补助" value="一次性养老补助"></el-option>
										<el-option label="津贴补贴" value="津贴补贴"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="3">
								<el-button type="primary" size="mini" plain @click="sPQuery">查询</el-button>
								<el-button size="mini" @click="sPClear">清空</el-button>
							</el-col>
						</el-row>

						<div>
							<el-table :data="sPStaffChargeStatus" max-height="660" stripe border>
								<el-table-column type="index" label="No." fixed></el-table-column>
								<el-table-column prop="insuranceType" label="险种" show-overflow-tooltip></el-table-column>
								<el-table-column prop="startDate" label="起始年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="endDate" label="终止年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="entMonthCharge" label="单位月缴费额" show-overflow-tooltip></el-table-column>
								<el-table-column prop="staffMonthCharge" label="个人月缴费额" show-overflow-tooltip></el-table-column>
								<el-table-column prop="staffChargeBase" label="个人缴费基数" show-overflow-tooltip></el-table-column>
								<el-table-column prop="chargeDate" label="发生日期" show-overflow-tooltip></el-table-column>
								<el-table-column prop="chargeCause" label="发生原因" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>
					</el-form>
				</div>

				<el-dialog title="人员信息" :visible.sync="sPDV" width="1024px" :before-close="sPDClose">
					<el-table :data="entInfo.entStaffInfo" max-height="500" stripe border @row-dblclick="sPDTbRowCh">
						<el-table-column type="index" label="No."></el-table-column>
						<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
						<el-table-column prop="IDNum" label="身份证号码" show-overflow-tooltip></el-table-column>
						<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
						<el-table-column prop="birthday" label="出生日期" show-overflow-tooltip></el-table-column>
						<el-table-column prop="nation" label="民族" show-overflow-tooltip></el-table-column>
					</el-table>
				</el-dialog>
			</div>
			<!-- 人员缴费情况 end -->

			<!-- 缴费单据 -->
			<div v-show="panelSort == '1.7'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>缴费单据查询</span>
				</div>

				<div class="contentBox">
					<el-form label-width="150px" size="mini">
						<el-row>
							<el-col :span="10">
								<el-form-item label="起始日期" required>
									<el-date-picker v-model="pRStartDate" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="10">
								<el-form-item label="终止日期" required>
									<el-date-picker v-model="pREndDate" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button type="primary" size="mini" plain @click="pRQuery">查询</el-button>
								<el-button size="mini" @click="pRClear">清空</el-button>
							</el-col>
						</el-row>

						<div>
							<el-table :data="pRChargeReceipts" max-height="660" stripe border>
								<el-table-column type="index" label="No." fixed></el-table-column>
								<el-table-column prop="serialNum" label="自动流水号" show-overflow-tooltip></el-table-column>
								<el-table-column prop="fillTime" label="填写时间" show-overflow-tooltip></el-table-column>
								<el-table-column prop="confirmTime" label="确认时间" show-overflow-tooltip></el-table-column>
								<el-table-column prop="receiptsStatus" label="单据状态" show-overflow-tooltip></el-table-column>
								<el-table-column prop="siFundNum" label="社保基金金额" show-overflow-tooltip></el-table-column>
								<el-table-column prop="financeFundNum" label="财政基金金额" show-overflow-tooltip></el-table-column>
								<el-table-column prop="prestoreFundNum" label="预存基金金额" show-overflow-tooltip></el-table-column>
								<el-table-column prop="totalNum" label="总金额" show-overflow-tooltip></el-table-column>
								<el-table-column prop="remark" label="备注" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>
					</el-form>
				</div>
			</div>
			<!-- 缴费单据 end -->

			<!-- 发票邮寄地址信息 -->
			<div v-show="panelSort == '1.8'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>发票邮寄地址信息</span>
				</div>

				<div class="contentBox">
					<el-form label-width="150px" size="mini">
						<el-row>
							<el-col :span="10">
								<el-form-item label="收件人" required><el-input v-model="entInfo.entInvoiceMailingAddr.receiverName"></el-input></el-form-item>
							</el-col>
							<el-col :span="10">
								<el-form-item label="收件人电话" required><el-input v-model="entInfo.entInvoiceMailingAddr.receiverTel"></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row>
							<el-col :span="20">
								<el-form-item label="地址" required><el-input v-model="entInfo.entInvoiceMailingAddr.receiverAddr"></el-input></el-form-item>
							</el-col>
						</el-row>

						<div class="fColumn">
							<span class="mgB10 colorRed">注意：缴费成功后发票统一用挂号信邮寄至单位，请确认单位通信联系地址无误。</span>
							<el-button type="primary" size="mini" plain @click="iASave">保存</el-button>
						</div>
					</el-form>
				</div>
			</div>
			<!-- 发票邮寄地址信息 end -->

			<!-- 单位定期待遇汇总信息 -->
			<div v-show="panelSort == '1.9'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位定期待遇汇总信息</span>
				</div>

				<div class="contentBox">
					<el-form label-width="100px" size="mini">
						<el-row>
							<el-col :span="7" :offset="2">
								<el-form-item label="查询年月" required>
									<el-date-picker v-model="eTSearchDate" type="month" value-format="timestamp" placeholder="选择年月"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="3" :offset="12">
								<el-button type="primary" size="mini" plain @click="eTQuery">查询</el-button>
								<el-button size="mini" @click="eTClear">清空</el-button>
							</el-col>
						</el-row>

						<div>
							<el-table :data="eTTreatmentSum" max-height="660" stripe border show-summary :summary-method="eTTbSum">
								<el-table-column type="index" label="No." fixed></el-table-column>
								<el-table-column prop="siNum" label="社会保障号码" show-overflow-tooltip></el-table-column>
								<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
								<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
								<el-table-column prop="bankAccount" label="银行账号" show-overflow-tooltip></el-table-column>
								<el-table-column prop="birthday" label="出生日期" show-overflow-tooltip></el-table-column>
								<el-table-column prop="employmentDate" label="参加工作日期" show-overflow-tooltip></el-table-column>
								<el-table-column prop="retirementDate" label="离退休日期" show-overflow-tooltip></el-table-column>
								<el-table-column prop="treatmentStartDate" label="待遇享受开始年月" show-overflow-tooltip></el-table-column>
								<el-table-column prop="treatmentSort" label="离退休类别" show-overflow-tooltip></el-table-column>
								<el-table-column prop="treatmentStatus" label="待遇发放状态" show-overflow-tooltip></el-table-column>
								<el-table-column prop="treatmentNum" label="定期待遇金额" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>
					</el-form>
				</div>
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

				<div>
					<el-table :data="entInfo.entElecBillInfo" max-height="720" stripe border>
						<el-table-column type="index" label="No." fixed></el-table-column>
						<el-table-column prop="bizSerialNum" label="业务流水号" show-overflow-tooltip></el-table-column>
						<el-table-column prop="bizBatchNum" label="业务批次号" show-overflow-tooltip></el-table-column>
						<el-table-column prop="handleInsNum" label="经办机构编号" show-overflow-tooltip></el-table-column>
						<el-table-column prop="districtCode" label="行政区划码" show-overflow-tooltip></el-table-column>
						<el-table-column prop="charger" label="交款人" show-overflow-tooltip></el-table-column>
						<el-table-column prop="chargerType" label="交款人类型" show-overflow-tooltip></el-table-column>
						<el-table-column prop="chargeEntCode" label="交款单位机构编码" show-overflow-tooltip></el-table-column>
						<el-table-column prop="chargeEntName" label="交款单位机构名称" show-overflow-tooltip></el-table-column>
						<el-table-column prop="elecBillCode" label="电子票据代码" show-overflow-tooltip></el-table-column>
						<el-table-column prop="elecBillNum" label="电子票据号码" show-overflow-tooltip></el-table-column>
						<el-table-column prop="elecBillTime" label="电子票据生成时间" show-overflow-tooltip></el-table-column>
						<el-table-column prop="elecBillCheckCode" label="电子票据校验码" show-overflow-tooltip></el-table-column>
						<el-table-column prop="H5" label="H5页面地址" show-overflow-tooltip></el-table-column>
					</el-table>
				</div>
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

				<div class="contentBox">
					<el-form label-width="140px" size="mini">
						<el-row>
							<el-col :span="8">
								<el-form-item label="证件类型">
									<el-select class="w90" v-model="rRIDType" clearable>
										<el-option label="请选择" value=""></el-option>
										<el-option label="居民身份证(户口簿)" value="居民身份证(户口簿)"></el-option>
										<el-option label="中国人民解放军军官证" value="中国人民解放军军官证"></el-option>
										<el-option label="中国人民武装警察警官证" value="中国人民武装警察警官证"></el-option>
										<el-option label="香港特区护照、港澳居民往来内地通行证" value="香港特区护照、港澳居民往来内地通行证"></el-option>
										<el-option label="澳门特区护照、港澳居民往来内地通行证" value="澳门特区护照、港澳居民往来内地通行证"></el-option>
										<el-option label="台湾居民来往大陆通行证" value="台湾居民来往大陆通行证"></el-option>
										<el-option label="外国人护照" value="外国人护照"></el-option>
										<el-option label="残疾人证" value="残疾人证"></el-option>
										<el-option label="军烈属证明" value="军烈属证明"></el-option>
										<el-option label="社会保障卡" value="社会保障卡"></el-option>
										<el-option label="其他身份证件" value="其他身份证件"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="证件号码"><el-input class="w90" v-model="rRIDNum"></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="姓名"><el-input class="w90" v-model="rRName"></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row>
							<el-col :span="8">
								<el-form-item label="是否签订劳动合同">
									<el-select class="w90" v-model="rRLaborContractSign" clearable>
										<el-option label="请选择" value=""></el-option>
										<el-option label="是" value="是"></el-option>
										<el-option label="否" value="否"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="合同起始日期">
									<el-date-picker class="w90" v-model="rRLaborContractStartDate" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="合同终止日期">
									<el-date-picker class="w90" v-model="rRLaborContractEndDate" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row>
							<el-col :span="8">
								<el-form-item label="合同当前状态">
									<el-select class="w90" v-model="rRLaborContractStatus" clearable>
										<el-option label="请选择" value=""></el-option>
										<el-option label="已到期" value="已到期"></el-option>
										<el-option label="一个月内到期" value="一个月内到期"></el-option>
										<el-option label="未到期" value="未到期"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col class="fRow" :span="4" :offset="12">
								<el-button class="mgLAuto" type="primary" size="mini" plain @click="rRQuery">查询</el-button>
								<el-button class="mgR20" size="mini" @click="rRClear">清空</el-button>
							</el-col>
						</el-row>

						<div>
							<el-table :data="rRRecruitRecord" max-height="520" stripe border show-summary :summary-method="rRTbSum">
								<el-table-column type="index" label="No." fixed></el-table-column>
								<el-table-column prop="IDType" label="证件类型" show-overflow-tooltip></el-table-column>
								<el-table-column prop="IDNum" label="证件号码" show-overflow-tooltip></el-table-column>
								<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
								<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
								<el-table-column prop="householdType" label="户籍类型" show-overflow-tooltip></el-table-column>
								<el-table-column prop="staffSort" label="职工类别" show-overflow-tooltip></el-table-column>
								<el-table-column prop="employmentForm" label="用工形式" show-overflow-tooltip></el-table-column>
								<el-table-column prop="employmentDate" label="用工起始日期" show-overflow-tooltip></el-table-column>
								<el-table-column prop="laborContractSign" label="是否签订劳动合同" show-overflow-tooltip></el-table-column>
								<el-table-column prop="laborContractStatus" label="合同状态" show-overflow-tooltip></el-table-column>
								<el-table-column prop="laborContractType" label="合同期限类型" show-overflow-tooltip></el-table-column>
								<el-table-column prop="laborContractStartDate" label="合同起始日期" show-overflow-tooltip></el-table-column>
								<el-table-column prop="laborContractEndDate" label="合同终止日期" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>

						<div class="fRow mgT20"><el-button class="mgR20 mgLAuto" type="primary" size="mini" plain @click="rRExportRoster">导出花名册</el-button></div>
					</el-form>
				</div>
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

			<!-- ======================== 申报信息 ======================== -->
			<div v-show="panelSort == '3' || panelSort == '3.1' || panelSort == '3.2' || panelSort == '3.3' || panelSort == '3.3.1' || panelSort == '3.3.2'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>申报信息</span>
				</div>

				<div class="contentBox">
					<el-form label-width="120px" size="mini">
						<el-row>
							<el-col :span="10">
								<el-form-item label="申报项目">
									<el-select class="w90" v-model="dQDeclareProjectType" clearable>
										<el-option label="请选择" value=""></el-option>
										<el-option label="在职增员" value="在职增员"></el-option>
										<el-option label="在职减员" value="在职减员"></el-option>
										<el-option label="缴费基数申报" value="缴费基数申报"></el-option>
										<el-option label="单位信息变更" value="单位信息变更"></el-option>
										<el-option label="个人信息变更" value="个人信息变更"></el-option>
										<el-option label="减员职工缴费基数申报" value="减员职工缴费基数申报"></el-option>
										<el-option label="职工险种增加" value="职工险种增加"></el-option>
										<el-option label="养老缴费历史维护" value="养老缴费历史维护"></el-option>
										<el-option label="特殊工种工作履历维护" value="特殊工种工作履历维护"></el-option>
										<el-option label="缴费申报" value="缴费申报"></el-option>
										<el-option label="养老转入申请" value="养老转入申请"></el-option>
										<el-option label="预约服务登记" value="预约服务登记"></el-option>
										<el-option label="离退休人员登记" value="离退休人员登记"></el-option>
										<el-option label="退休待遇核定" value="退休待遇核定"></el-option>
										<el-option label="养老待遇终止" value="养老待遇终止"></el-option>
										<el-option label="遗属增加" value="遗属增加"></el-option>
										<el-option label="缴费年限认定" value="缴费年限认定"></el-option>
										<el-option label="工伤业务申报" value="工伤业务申报"></el-option>
										<el-option label="单位招聘登记" value="单位招聘登记"></el-option>
										<el-option label="发布招聘岗位" value="发布招聘岗位"></el-option>
										<el-option label="招聘岗位管理" value="招聘岗位管理"></el-option>
										<el-option label="现场招聘会参与" value="现场招聘会参与"></el-option>
										<el-option label="工伤事故报告" value="工伤事故报告"></el-option>
										<el-option label="新增就业登记" value="新增就业登记"></el-option>
										<el-option label="工伤认定申报" value="工伤认定申报"></el-option>
										<el-option label="新增失业登记" value="新增失业登记"></el-option>
										<el-option label="创业登记" value="创业登记"></el-option>
										<el-option label="贷款申请" value="贷款申请"></el-option>
										<el-option label="劳动用工备案" value="劳动用工备案"></el-option>
										<el-option label="集体合同备案" value="集体合同备案"></el-option>
										<el-option label="劳动用工综合管理" value="劳动用工综合管理"></el-option>
										<el-option label="集体合同综合管理" value="集体合同综合管理"></el-option>
										<el-option label="单位年审" value="单位年审"></el-option>
										<el-option label="特殊工时申报" value="特殊工时申报"></el-option>
										<el-option label="创业补贴" value="创业补贴"></el-option>
										<el-option label="单位更名" value="单位更名"></el-option>
										<el-option label="公益性岗位补贴" value="公益性岗位补贴"></el-option>
										<el-option label="企业吸纳补贴" value="企业吸纳补贴"></el-option>
										<el-option label="稳岗补贴申请" value="稳岗补贴申请"></el-option>
										<el-option label="撤销缴费申报" value="撤销缴费申报"></el-option>
										<el-option label="社保卡信息采集" value="社保卡信息采集"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="10">
								<el-form-item label="申报状态">
									<el-select class="w90" v-model="dQDeclareStatus" clearable>
										<el-option label="请选择" value=""></el-option>
										<el-option label="未提交" value="未提交"></el-option>
										<el-option label="正在审核" value="正在审核"></el-option>
										<el-option label="审核完成" value="审核完成"></el-option>
										<el-option label="审核完成未读" value="审核完成未读"></el-option>
										<el-option label="审核完成已读" value="审核完成已读"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row>
							<el-col :span="10">
								<el-form-item label="申报起始年月">
									<el-date-picker class="w90" v-model="dQDeclareStartDate" type="month" value-format="timestamp" placeholder="选择申报起始年月"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="10">
								<el-form-item label="申报终止年月">
									<el-date-picker class="w90" v-model="dQDeclareEndDate" type="month" value-format="timestamp" placeholder="选择申报起始年月"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button type="primary" size="mini" plain @click="dQQuery">查询</el-button>
								<el-button size="mini" @click="dQClear">清空</el-button>
							</el-col>
						</el-row>

						<div>
							<el-table :data="dQDeclareInfo" max-height="620" stripe border @row-dblclick="dQTbRowDtl">
								<el-table-column type="index" label="No." fixed></el-table-column>
								<el-table-column prop="bizSerialNum" label="业务流水号" show-overflow-tooltip></el-table-column>
								<el-table-column prop="declareProjectName" label="申报项目名称" show-overflow-tooltip></el-table-column>
								<el-table-column prop="declareStatus" label="申报状态" show-overflow-tooltip></el-table-column>
								<el-table-column prop="handleDate" label="经办日期" show-overflow-tooltip></el-table-column>
								<el-table-column prop="submitDate" label="提交日期" show-overflow-tooltip></el-table-column>
								<el-table-column prop="feedbackMsg" label="反馈信息" show-overflow-tooltip></el-table-column>
							</el-table>
						</div>
					</el-form>
				</div>

				<el-dialog title="劳动用工备案明细" :visible.sync="dQDV" width="1024px" :before-close="dQDClose">
					<el-form label-width="124px" size="mini">
						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="姓名"><el-input v-model="dQDInfo.name" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="性别"><el-input v-model="dQDInfo.sex" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="出生日期"><el-input v-model="dQDInfo.birthday" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="有效证件类型"><el-input v-model="dQDInfo.IDType" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="有效证件号码"><el-input v-model="dQDInfo.IDNum" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="民族"><el-input v-model="dQDInfo.nation" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="国籍"><el-input v-model="dQDInfo.nationality" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="户口性质"><el-input v-model="dQDInfo.householdType" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="户籍详细地址"><el-input v-model="dQDInfo.householdLocation" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="行政区划"><el-input v-model="dQDInfo.administrativeDivision" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="现住址"><el-input v-model="dQDInfo.homeAddr" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="邮政编码"><el-input v-model="dQDInfo.postalCode" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="文化程度"><el-input v-model="dQDInfo.educationDegree" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="职工类别"><el-input v-model="dQDInfo.staffSort" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="是否签订劳动合同"><el-input v-model="dQDInfo.laborContractSign" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="社保号"><el-input v-model="dQDInfo.siNum" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="投保日期"><el-input v-model="dQDInfo.insuredDate" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="续订次数"><el-input v-model="dQDInfo.reInsuredNum" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="审核状态"><el-input v-model="dQDInfo.checkStatus" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="审核说明"><el-input v-model="dQDInfo.checkMsg" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="合同状态"><el-input v-model="dQDInfo.laborContractStatus" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="合同期限类型"><el-input v-model="dQDInfo.laborContractType" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="合同起始日期"><el-input v-model="dQDInfo.laborContractStartDate" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="合同终止日期"><el-input v-model="dQDInfo.laborContractEndDate" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="用工形式"><el-input v-model="dQDInfo.employmentForm" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="用工起始日期"><el-input v-model="dQDInfo.recruitStartDate" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="用工终止日期"><el-input v-model="dQDInfo.recruitEndDate" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="参加工作日期"><el-input v-model="dQDInfo.employmentDate" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="使用起始日期"><el-input v-model="dQDInfo.hireStartDate" readonly></el-input></el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="使用终止日期"><el-input v-model="dQDInfo.hireEndDate" readonly></el-input></el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="备案日期"><el-input v-model="dQDInfo.insuredRecordDate" readonly></el-input></el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</el-dialog>
			</div>
			<!-- ======================== 申报信息 end ======================== -->

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
							label: '单位定期待遇汇总',
							img: require('../../assets/magnifyingGlass.png')
						},
						// {
						// 	id: '1.10',
						// 	label: '单位工伤已拨付',
						// 	img: require('../../assets/person.png')
						// },
						// {
						// 	id: '1.11',
						// 	label: '工商登记信息',
						// 	img: require('../../assets/editorialStaff.png')
						// },
						// {
						// 	id: '1.12',
						// 	label: '工伤拨付明细',
						// 	img: require('../../assets/editorialStaff.png')
						// },
						// {
						// 	id: '1.13',
						// 	label: '单位人员证照采集',
						// 	img: require('../../assets/editorialStaff.png')
						// },
						{
							id: '1.14',
							label: '电子单据信息查询',
							img: require('../../assets/bill.png')
						},
						// {
						// 	id: '1.15',
						// 	label: '冲销电子单据信息查询',
						// 	img: require('../../assets/bill.png')
						// },
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
						}
						// {
						// 	id: '2.2',
						// 	label: '集体合同查询',
						// 	img: require('../../assets/magnifyingGlass.png')
						// }
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

			// ------------------------ 面板-单位人员情况 ------------------------
			eSIDNum: '', //身份证号码
			eSName: '', //姓名
			eSInsuredSort: '', //参保人员类别
			eSInsureds: [], //参保人员
			eSDV: false, //单位人员详情对话框 是否显示
			eSDInfo: '', //单位人员详情对话框信息

			// ------------------------ 面板-职工增减变化 ------------------------
			sCHandleStartDate: '', //经办起始日期
			sCHandleEndDate: '', //经办终止日期
			sCStaffChange: [], //职工增减变化

			// ------------------------ 面板-单位缴费情况 ------------------------
			ePStartDate: '', //起始年月
			ePEndDate: '', //终止年月
			ePInsuranceType: '', //险种标志
			ePChargeStatus: [], //单位缴费情况

			// ------------------------ 面板-打印单位参保缴费证明 ------------------------
			pCStartDate: '', //起始年月
			pCEndDate: '', //终止年月
			pCInsuredChargeCert: [], //单位参保缴费证明
			pCICCMS: [], //单位参保缴费证明表格 已选择

			// ------------------------ 面板-人员缴费情况 ------------------------
			sPChoiceStaff: '', //选择职工
			sPStaffName: '', //姓名
			sPInsuranceSign: '', //险种标志
			sPStaffChargeStatusAll: [], //人员全部缴费情况
			sPStaffChargeStatus: [], //人员缴费情况
			sPDV: false, //人员信息对话框 是否显示

			// ------------------------ 面板-缴费单据 ------------------------
			pRStartDate: '', //起始日期
			pREndDate: '', //终止日期
			pRChargeReceipts: [], //缴费单据

			// ------------------------ 面板-单位定期待遇汇总信息 ------------------------
			eTSearchDate: '', //查询年月
			eTTreatmentSum: [], //单位定期待遇汇总信息

			// ------------------------ 面板-用工备案查询 ------------------------
			rRIDType: '', //证件类型
			rRIDNum: '', //证件号码
			rRName: '', //姓名
			rRLaborContractSign: '', //是否签订劳动合同
			rRLaborContractStartDate: '', //劳动合同起始日期
			rRLaborContractEndDate: '', //劳动合同终止日期
			rRLaborContractStatus: '', //劳动合同状态
			rRRecruitRecord: [], //用工备案

			// ------------------------ 面板-申报信息 ------------------------
			dQDeclareProjectType: '', //申报项目
			dQDeclareStatus: '', //申报状态
			dQDeclareStartDate: '', //申报起始年月
			dQDeclareEndDate: '', //申报终止年月
			dQDeclareInfo: [], //申报信息
			dQDV: false, //劳动用工备案明细对话框 是否显示
			dQDInfo: '' //劳动用工备案明细对话框信息
		};
	},
	computed: {
		...mapState({
			entInfo: state => state.entInfo //企业信息
		})
	},
	methods: {
		// ------------------------ 侧边栏-菜单 ------------------------
		// 菜单节点 点击事件
		menuNodeClick(e) {
			if (e.id == '1.16' || e.id == '4') {
				this.panelSort = '';
				this.$message.info('此功能暂未开放');
			} else {
				this.panelSort = e.id;

				if (e.id == '3') {
					this.dQDeclareStatus = '';
				} else if (e.id == '3.1') {
					this.dQDeclareStatus = '未提交';
				} else if (e.id == '3.2') {
					this.dQDeclareStatus = '正在审核';
				} else if (e.id == '3.3') {
					this.dQDeclareStatus = '审核完成';
				} else if (e.id == '3.3.1') {
					this.dQDeclareStatus = '审核完成未读';
				} else if (e.id == '3.3.2') {
					this.dQDeclareStatus = '审核完成已读';
				}
			}
		},

		// ------------------------ 导出Excel ------------------------
		exportExcel(tHeader, filterVal, list, fileName) {
			require.ensure([], () => {
				let { export_json_to_excel } = require('../../vendor/Export2Excel.js');
				let data = this.formatJson(filterVal, list);
				export_json_to_excel(tHeader, data, fileName);
			});
		},
		formatJson(filterVal, jsonData) {
			return jsonData.map(v => filterVal.map(j => v[j]));
		},

		// ------------------------ 日期 ------------------------
		getTimestamp(date) {
			let dateYC = date.indexOf('年'); //年字索引
			let dateMC = date.indexOf('月'); //月字索引
			let dateDC = date.indexOf('日'); //日字索引
			let dateY = date.slice(0, dateYC); //年
			let dateM = date.slice(dateYC + 1, dateMC).length == 2 ? date.slice(dateYC + 1, dateMC) : '0' + date.slice(dateYC + 1, dateMC); //月
			let dateD = date.slice(dateMC + 1, dateDC).length == 2 ? date.slice(dateMC + 1, dateDC) : '0' + date.slice(dateMC + 1, dateDC); //日
			return new Date(dateY + '/' + dateM + '/' + dateD + ' 00:00:00').getTime(); //时间戳
		},
		getTimestampII(date) {
			let dateYC = date.indexOf('年'); //年字索引
			let dateMC = date.indexOf('月'); //月字索引
			let dateY = date.slice(0, dateYC); //年
			let dateM = date.slice(dateYC + 1, dateMC).length == 2 ? date.slice(dateYC + 1, dateMC) : '0' + date.slice(dateYC + 1, dateMC); //月
			return new Date(dateY + '/' + dateM + '/' + '01' + ' 00:00:00').getTime(); //时间戳
		},

		// ------------------------ 面板-单位人员情况 ------------------------
		// 查询按钮
		eSQuery() {
			// 身份证号码、姓名、参保人员类别 均为空时
			if (!this.eSIDNum && !this.eSName && !this.eSInsuredSort) {
				this.eSInsureds = this.entInfo.entStaffInfo;
			} else {
				this.eSInsureds = [];
				this.entInfo.entStaffInfo.forEach(e => {
					if (e.IDNum.indexOf(this.eSIDNum) != -1 || e.name.indexOf(this.eSName) != -1 || e.insuredSort.indexOf(this.eSInsuredSort) != -1) {
						this.eSInsureds.push(e);
					}
				});
			}
		},
		// 清空按钮
		eSClear() {
			this.eSIDNum = '';
			this.eSName = '';
			this.eSInsuredSort = '';
			this.eSInsureds = [];
		},
		// 查看人员信息按钮
		eSCheckStaffInfo() {
			this.$message.info('请双击需要查看人员信息所在行');
		},
		// 查看单位人员详情
		eSTbRowDtl(row) {
			this.eSDV = true;
			this.eSDInfo = row;
		},
		// 单位人员详情对话框 关闭事件
		eSDClose() {
			this.eSDV = false;
		},
		// 导出人员信息按钮
		eSExportStaffInfo() {
			let list = this.eSInsureds;

			if (list.length == 0) {
				this.$message.warning('暂无数据');
			} else {
				let tHeader = [
					'个人编号',
					'身份证号码',
					'姓名',
					'性别',
					'民族',
					'联系电话',
					'通讯地址',
					'邮政编码',
					'参加工作日期',
					'参保人员类别',
					'二级单位编号',
					'二级单位名称',
					'缴费基数',
					'手册编号',
					'投保类别名称'
				];
				let filterVal = [
					'num',
					'IDNum',
					'name',
					'sex',
					'nation',
					'tel',
					'correspondenceAddr',
					'postalCode',
					'employmentDate',
					'insuredSort',
					'subEntNum',
					'subEntName',
					'chargeBase',
					'manualNum',
					'insuredSortName'
				];
				this.exportExcel(tHeader, filterVal, list, '单位人员情况');
			}
		},
		// 打印养老参保凭证按钮
		eSPrint() {
			this.$message.info('此功能暂未开放');
		},

		// ------------------------ 面板-职工增减变化 ------------------------
		// 查询按钮
		sCQuery() {
			// 经办起始日期、经办终止日期 均为空时
			if (!this.sCHandleStartDate && !this.sCHandleEndDate) {
				this.sCStaffChange = this.entInfo.entStaffChange;
			} else {
				this.sCStaffChange = [];
				this.entInfo.entStaffChange.forEach(e => {
					let timestamp = this.getTimestamp(e.handleDate);

					if (timestamp >= this.sCHandleStartDate && timestamp <= this.sCHandleEndDate) {
						this.sCStaffChange.push(e);
					}
				});
			}
		},
		// 清空按钮
		sCClear() {
			this.sCHandleStartDate = '';
			this.sCHandleEndDate = '';
			this.sCStaffChange = [];
		},

		// ------------------------ 面板-单位缴费情况 ------------------------
		// 查询按钮
		ePQuery() {
			// 起始年月、终止年月、险种标志 均为空时
			if (!this.ePStartDate && !this.ePEndDate && !this.ePInsuranceType) {
				this.ePChargeStatus = this.entInfo.entChargeStatus;
			} else {
				this.ePChargeStatus = [];
				this.entInfo.entChargeStatus.forEach(e => {
					let timestamp = this.getTimestampII(e.chargeDate);

					if (timestamp >= this.ePStartDate && timestamp <= this.ePEndDate && e.insuranceType.indexOf(this.ePInsuranceType) != -1) {
						this.ePChargeStatus.push(e);
					}
				});
			}
		},
		// 清空按钮
		ePClear() {
			this.ePStartDate = '';
			this.ePEndDate = '';
			this.ePInsuranceType = '';
			this.ePChargeStatus = [];
		},

		// ------------------------ 面板-打印单位参保缴费证明 ------------------------
		// 查询按钮
		pCQuery() {
			// 起始年月、终止年月 均为空时
			if (!this.pCStartDate && !this.pCEndDate) {
				this.pCInsuredChargeCert = this.entInfo.entInsuredChargeCert;
			} else {
				this.pCInsuredChargeCert = [];
				this.entInfo.entInsuredChargeCert.forEach(e => {
					let ylStartDate = e.ylStartDate == '' ? '' : this.getTimestampII(e.ylStartDate);
					let ylEndDate = e.ylEndDate == '' ? '' : this.getTimestampII(e.ylEndDate);
					let mTStartDate = e.mTStartDate == '' ? '' : this.getTimestampII(e.mTStartDate);
					let mTEndDate = e.mTEndDate == '' ? '' : this.getTimestampII(e.mTEndDate);
					let ueStartDate = e.ueStartDate == '' ? '' : this.getTimestampII(e.ueStartDate);
					let ueEndDate = e.ueEndDate == '' ? '' : this.getTimestampII(e.ueEndDate);
					let oIStartDate = e.oIStartDate == '' ? '' : this.getTimestampII(e.oIStartDate);
					let oIEndDate = e.oIEndDate == '' ? '' : this.getTimestampII(e.oIEndDate);
					let beStartDate = e.beStartDate == '' ? '' : this.getTimestampII(e.beStartDate);
					let beEndDate = e.beEndDate == '' ? '' : this.getTimestampII(e.beEndDate);

					if (
						(this.pCStartDate <= ylStartDate && this.pCEndDate >= ylEndDate) ||
						(this.pCStartDate <= mTStartDate && this.pCEndDate >= mTEndDate) ||
						(this.pCStartDate <= ueStartDate && this.pCEndDate >= ueEndDate) ||
						(this.pCStartDate <= oIStartDate && this.pCEndDate >= oIEndDate) ||
						(this.pCStartDate <= beStartDate && this.pCEndDate >= beEndDate)
					) {
						this.pCInsuredChargeCert.push(e);
					}
				});
			}
		},
		// 清空按钮
		pCClear() {
			this.pCStartDate = '';
			this.pCEndDate = '';
			this.pCInsuredChargeCert = [];
			this.pCICCMS = [];
		},
		// 单位参保缴费证明表格 多选
		pCICCMSChange(e) {
			this.pCICCMS = e;
		},
		// 打印社会保险参保缴费名单按钮
		pCPrint() {
			this.$message.info('此功能暂未开放');
		},
		// 下载社会保险参保缴费名单按钮
		pCExportInsuredList() {
			let list = this.pCInsuredChargeCert;

			if (list.length == 0) {
				this.$message.warning('暂无数据');
			} else {
				let tHeader = [
					'姓名',
					'性别',
					'身份证号码',
					'养老',
					'养老起始年月',
					'养老终止年月',
					'医疗',
					'医疗起始年月',
					'医疗终止年月',
					'失业',
					'失业起始年月',
					'失业终止年月',
					'工伤',
					'工伤起始年月',
					'工伤终止年月',
					'生育',
					'生育起始年月',
					'生育终止年月',
					'备注'
				];
				let filterVal = [
					'name',
					'sex',
					'IDNum',
					'yl',
					'ylStartDate',
					'ylEndDate',
					'mT',
					'mTStartDate',
					'mTEndDate',
					'ue',
					'ueStartDate',
					'ueEndDate',
					'oI',
					'oIStartDate',
					'oIEndDate',
					'be',
					'beStartDate',
					'beEndDate',
					'remark'
				];
				this.exportExcel(tHeader, filterVal, list, '社会保险参保缴费名单');
			}
		},

		// ------------------------ 面板-人员缴费情况 ------------------------
		// 搜索职工按钮
		sPSearchStaff() {
			this.sPDV = true;
		},
		// 选择人员信息
		sPDTbRowCh(row) {
			this.sPChoiceStaff = row.IDNum;
			this.sPStaffName = row.name;
			this.sPStaffChargeStatusAll = row.staffChargeStatus;
			this.sPDV = false;
		},
		// 人员信息对话框 关闭事件
		sPDClose() {
			this.sPDV = false;
		},
		// 查询按钮
		sPQuery() {
			if (!this.sPChoiceStaff) {
				this.$message.warning('请选择职工');
			} else if (!this.sPInsuranceSign) {
				this.$message.warning('请选择险种标志');
			} else {
				this.sPStaffChargeStatus = [];
				this.sPStaffChargeStatusAll.forEach(e => {
					if (e.insuranceType == this.sPInsuranceSign) {
						this.sPStaffChargeStatus.push(e);
					}
				});
			}
		},
		// 清空按钮
		sPClear() {
			this.sPChoiceStaff = '';
			this.sPStaffName = '';
			this.sPInsuranceSign = '';
			this.sPStaffChargeStatusAll = [];
			this.sPStaffChargeStatus = [];
		},

		// ------------------------ 面板-缴费单据 ------------------------
		// 查询按钮
		pRQuery() {
			if (!this.pRStartDate || !this.pREndDate) {
				this.$message.warning('请选择起始日期和终止日期');
			} else {
				this.pRChargeReceipts = [];
				this.entInfo.entChargeReceipts.forEach(e => {
					let timestamp = this.getTimestamp(e.fillTime);

					if (timestamp >= this.pRStartDate && timestamp <= this.pREndDate) {
						this.pRChargeReceipts.push(e);
					}
				});
			}
		},
		// 清空按钮
		pRClear() {
			this.pRStartDate = '';
			this.pREndDate = '';
			this.pRChargeReceipts = [];
		},

		// ------------------------ 面板-发票邮寄地址信息 ------------------------
		// 保存按钮
		iASave() {
			if (!this.entInfo.entInvoiceMailingAddr.receiverName || !this.entInfo.entInvoiceMailingAddr.receiverTel || !this.entInfo.entInvoiceMailingAddr.receiverAddr) {
				this.$message.warning('请完善发票邮寄地址信息');
			} else {
				this.$store.dispatch('modifyEntIMA', this.entInfo.entInvoiceMailingAddr);
				this.$message.success('保存发票邮寄地址信息成功');
			}
		},

		// ------------------------ 面板-单位定期待遇汇总信息 ------------------------
		// 单位定期待遇汇总信息表格 合计
		eTTbSum(param) {
			let { columns, data } = param;
			let sums = [];

			columns.forEach((column, index) => {
				if (index === 0) {
					sums[index] = 'Σ';
					return;
				}

				let values = data.map(item => Number(item[column.property]));

				if (column.property == 'treatmentNum') {
					sums[index] = values.reduce((prev, curr) => {
						let value = Number(curr);
						if (!isNaN(value)) {
							return prev + curr;
						} else {
							return prev;
						}
					}, 0);
					sums[index] += ' 元';
				} else {
					sums[index] = '';
				}
			});

			return sums;
		},
		// 查询按钮
		eTQuery() {
			if (!this.eTSearchDate) {
				this.$message.warning('请选择查询年月');
			} else {
				this.eTTreatmentSum = [];
				this.entInfo.entTreatmentSum.forEach(e => {
					let timestamp = this.getTimestampII(e.sumDate);

					if (timestamp == this.eTSearchDate) {
						this.eTTreatmentSum = e.treatmentSum;
					}
				});
			}
		},
		// 清空按钮
		eTClear() {
			this.eTSearchDate = '';
			this.eTTreatmentSum = [];
		},

		// ------------------------ 面板-用工备案查询 ------------------------
		// 用工备案查询表格 合计
		rRTbSum() {
			let sums = [];

			sums[0] = 'Σ';
			sums[1] = this.rRRecruitRecord.length + ' 人';

			return sums;
		},
		// 查询按钮
		rRQuery() {
			if (
				!this.rRIDType &&
				!this.rRIDNum &&
				!this.rRName &&
				!this.rRLaborContractSign &&
				!this.rRLaborContractStartDate &&
				!this.rRLaborContractEndDate &&
				!this.rRLaborContractStatus
			) {
				this.rRRecruitRecord = this.entInfo.entStaffInfo;
			} else {
				this.rRRecruitRecord = [];
				this.entInfo.entStaffInfo.forEach(e => {
					let laborContractStartDate = this.getTimestamp(e.laborContractStartDate);
					let laborContractEndDate = this.getTimestamp(e.laborContractEndDate);

					if (
						e.IDType.indexOf(this.rRIDType) != -1 &&
						e.IDNum.indexOf(this.rRIDNum) != -1 &&
						e.name.indexOf(this.rRName) != -1 &&
						e.laborContractSign.indexOf(this.rRLaborContractSign) != -1 &&
						e.laborContractStatus.indexOf(this.rRLaborContractStatus) != -1 &&
						laborContractStartDate >= this.rRLaborContractStartDate &&
						(!this.rRLaborContractEndDate || laborContractEndDate <= this.rRLaborContractEndDate)
					) {
						this.rRRecruitRecord.push(e);
					}
				});
			}
		},
		// 清空按钮
		rRClear() {
			this.rRIDType = '';
			this.rRIDNum = '';
			this.rRName = '';
			this.rRLaborContractSign = '';
			this.rRLaborContractStartDate = '';
			this.rRLaborContractEndDate = '';
			this.rRLaborContractStatus = '';
			this.rRRecruitRecord = [];
		},
		// 导出花名册按钮
		rRExportRoster() {
			let list = this.rRRecruitRecord;

			if (list.length == 0) {
				this.$message.warning('暂无数据');
			} else {
				let tHeader = [
					'证件类型',
					'证件号码',
					'姓名',
					'性别',
					'户籍类型',
					'职工类别',
					'用工形式',
					'用工起始日期',
					'是否签订劳动合同',
					'合同状态',
					'合同期限类型',
					'合同起始日期',
					'合同终止日期'
				];
				let filterVal = [
					'IDType',
					'IDNum',
					'name',
					'sex',
					'householdType',
					'staffSort',
					'employmentForm',
					'employmentDate',
					'laborContractSign',
					'laborContractStatus',
					'laborContractType',
					'laborContractStartDate',
					'laborContractEndDate'
				];
				this.exportExcel(tHeader, filterVal, list, '用工备案查询花名册');
			}
		},

		// ------------------------ 面板-申报信息 ------------------------
		// 查询按钮
		dQQuery() {
			if (!this.dQDeclareProjectType && !this.dQDeclareStatus && !this.dQDeclareStartDate && !this.dQDeclareEndDate) {
				this.dQDeclareInfo = this.entInfo.entDeclare;
			} else {
				this.dQDeclareInfo = [];
				this.entInfo.entDeclare.forEach(e => {
					let handleDate = this.getTimestamp(e.handleDate);

					if (
						e.declareProjectType.indexOf(this.dQDeclareProjectType) != -1 &&
						e.declareStatus.indexOf(this.dQDeclareStatus) != -1 &&
						handleDate >= this.dQDeclareStartDate &&
						(!this.dQDeclareEndDate || handleDate <= this.dQDeclareEndDate)
					) {
						this.dQDeclareInfo.push(e);
					}
				});
			}
		},
		// 清空按钮
		dQClear() {
			this.dQDeclareProjectType = '';
			this.dQDeclareStatus = '';
			this.dQDeclareStartDate = '';
			this.dQDeclareEndDate = '';
			this.dQDeclareInfo = [];
		},
		// 查看劳动用工备案明细
		dQTbRowDtl(row) {
			// 根据 申报职工编号 查找 职工信息
			this.entInfo.entStaffInfo.forEach(e => {
				if (e.num == row.declareStaffNum) {
					this.dQDInfo = e;
				}
			});

			// 审核状态、审核说明
			this.dQDInfo.checkStatus = row.checkStatus;
			this.dQDInfo.checkMsg = row.checkMsg;

			this.dQDV = true;
		},
		// 劳动用工备案明细对话框 关闭事件
		dQDClose() {
			this.dQDV = false;
		}
	}
};
</script>
