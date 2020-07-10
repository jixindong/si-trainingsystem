<template>
	<div class="oHIOperation fColumn">
		<!-- ======================== 主体 ======================== -->
		<!-- 基本信息 -->
		<div class="basicInfo fRow">
			<img class="mgR20" src="@/assets/build.png" />
			<div>
				<div>
					<span class="mgR20">业务办理单位编号：0303830001</span>
					<span>业务办理机构：淄博市张店区企业</span>
				</div>
				<div>业务办理单位名称：淄博问云教育科技有限公司</div>
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
						<span class="colorBlack dot hover" @click="tASDIDShow">在职增员</span>
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
						<span class="dot">缴费申报(银行代扣)</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">养老转入申请</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">企业养老保险关系转入</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span class="colorBlack dot hover" @click="tMSDIDShow">在职减员</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">人员信息变更</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">养老缴费历史维护</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">撤销缴费申报</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">打印单位养老账户清单</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">补缴转招前临时性用工养老保险费</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span class="colorBlack dot hover" @click="tCBDDShow">缴费基数申报</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">减员职工缴费基数申报</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">特殊工种工作履历维护</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">社保缴费(网上支付)</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">退役军人养老保险关系转入</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>
			</div>
		</div>
		<!-- 参保缴费申报 end -->

		<!-- 养老支付申报 -->
		<div class="funBox fColumn">
			<div class="titleBox fRow">
				<img class="mgR10" src="@/assets/agedness.png" />
				<span>养老支付申报</span>
			</div>
			<div class="subtitle">养老支付申报主要养老信息进行管理</div>
			<div class="contentBox fRow">
				<div class="column">
					<div class="funItem fRow">
						<span class="dotII">离退休人员登记</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dotII">缴费年限认定</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span class="dotII">养老待遇终止</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span class="dotII">遗属增加</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>
			</div>
		</div>
		<!-- 养老支付申报 end -->

		<!-- 稳岗补贴申报 -->
		<div class="funBox fColumn">
			<div class="titleBox fRow">
				<img class="mgR10" src="@/assets/agedness.png" />
				<span>稳岗补贴申报</span>
			</div>
			<div class="subtitle">稳岗补贴申报主要针对稳岗补贴信息进行管理</div>
			<div class="contentBox fRow">
				<div class="column">
					<div class="funItem fRow">
						<span>稳岗补贴申请</span>
						<img class="hover" src="@/assets/function.png" />
					</div>
				</div>
			</div>
		</div>
		<!-- 稳岗补贴申报 end -->
		<!-- ======================== 主体 end ======================== -->

		<!-- ======================== 在职增员 ======================== -->
		<!-- 录入增员申报信息对话框 -->
		<el-dialog title="录入增员申报信息" width="1024px" :visible.sync="tASDIDV" :before-close="tASDIDClose">
			<div>
				<el-table :data="tASDIDInfo" max-height="400px" stripe border>
					<el-table-column type="index" label="No." fixed></el-table-column>
					<el-table-column prop="IDNum" label="证件号码" show-overflow-tooltip></el-table-column>
					<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
					<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
					<el-table-column prop="birthday" label="出生日期" show-overflow-tooltip></el-table-column>
					<el-table-column prop="employmentForm" label="用工形式" show-overflow-tooltip></el-table-column>
					<el-table-column prop="addStaffDate" label="增员年月" show-overflow-tooltip></el-table-column>
					<el-table-column prop="employmentDate" label="参加工作日期" show-overflow-tooltip></el-table-column>
					<el-table-column prop="subEntName" label="二级单位名称" show-overflow-tooltip></el-table-column>
				</el-table>
			</div>

			<el-row class="mgT20" type="flex" justify="end">
				<el-button size="mini" @click="sADShow">在职增员</el-button>
				<el-button size="mini" @click="unopenFunction">修改一行</el-button>
				<el-button size="mini" @click="unopenFunction">删除一行</el-button>
				<el-button size="mini" @click="unopenFunction">批量增员</el-button>
				<el-button size="mini" @click="unopenFunction">打印单个增员</el-button>
				<el-button size="mini" @click="unopenFunction">打印列表</el-button>
				<el-button size="mini" @click="tASDIDDeclareSubmit">申报提交</el-button>
				<el-button size="mini" @click="unopenFunction">申报作废</el-button>
			</el-row>
		</el-dialog>
		<!-- 录入增员申报信息对话框 end -->

		<!-- 人员新增对话框 -->
		<el-dialog title="人员新增" width="1024px" :visible.sync="sADV" :before-close="sADClose">
			<el-form class="dialogForm" :model="sADInfo" :rules="sADFormRules" ref="sADFormRef" label-width="136px" size="mini">
				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>基本信息</span>
				</div>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="IDNum" label="证件号码"><el-input v-model="sADInfo.IDNum" :disabled="sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="16">
						<el-button class="mgR20" size="mini" :disabled="sADIsQuery" @click="sADQuery">查询</el-button>
						<span class="colorRed">请输入正确的证件号码后点击【查询】按钮</span>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="name" label="姓名"><el-input v-model="sADInfo.name" disabled></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="birthdayTs" label="出生日期">
							<el-date-picker class="w100" v-model="sADInfo.birthdayTs" type="date" value-format="timestamp" placeholder="选择日期" disabled></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="sex" label="性别"><el-input v-model="sADInfo.sex" disabled></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="nation" label="民族">
							<el-select v-model="sADInfo.nation" clearable :disabled="!sADIsQuery">
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.nation" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="employmentForm" label="用工形式">
							<el-select v-model="sADInfo.employmentForm" clearable :disabled="!sADIsQuery">
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.employmentForm" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="educationDegree" label="文化程度">
							<el-select v-model="sADInfo.educationDegree" clearable :disabled="!sADIsQuery">
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.educationDegree" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="educationMajor" label="所学专业"><el-input v-model="sADInfo.educationMajor" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="householdType" label="户口性质">
							<el-select v-model="sADInfo.householdType" clearable :disabled="!sADIsQuery">
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.householdType" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="postalCode" label="邮政编码"><el-input v-model="sADInfo.postalCode" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="maritalStatus" label="婚姻状况"><el-input v-model="sADInfo.maritalStatus" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="formerName" label="曾用名"><el-input v-model="sADInfo.formerName" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="householdLocation" label="户口所在地"><el-input v-model="sADInfo.householdLocation" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="correspondenceAddr" label="通讯地址"><el-input v-model="sADInfo.correspondenceAddr" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="homeAddr" label="家庭住址"><el-input v-model="sADInfo.homeAddr" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="administrativeDivision" label="行政区划">
							<el-input v-model="sADInfo.administrativeDivision" :disabled="!sADIsQuery"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="staffType" label="专业技术职务级别"><el-input v-model="sADInfo.staffType" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="administrativeRank" label="行政职务"><el-input v-model="sADInfo.administrativeRank" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="tel" label="手机号码"><el-input v-model="sADInfo.tel" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="contacts" label="联系人"><el-input v-model="sADInfo.contacts" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="contactsTel" label="联系人电话"><el-input v-model="sADInfo.contactsTel" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="status" label="个人身份"><el-input v-model="sADInfo.status" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="healthCondition" label="健康状况"><el-input v-model="sADInfo.healthCondition" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="religion" label="宗教信仰"><el-input v-model="sADInfo.religion" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="NVQ" label="国家职业资格等级"><el-input v-model="sADInfo.NVQ" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="email" label="电子邮箱"><el-input v-model="sADInfo.email" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="politicsStatus" label="政治面貌"><el-input v-model="sADInfo.politicsStatus" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>参保信息</span>
				</div>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="addSICause" label="增加原因"><el-input v-model="sADInfo.addSICause" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="addStaffDateTs" label="增员年月">
							<el-date-picker
								class="w100"
								v-model="sADInfo.addStaffDateTs"
								type="month"
								value-format="timestamp"
								placeholder="选择年月"
								:disabled="!sADIsQuery"
							></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="chargeWage" label="缴费工资"><el-input v-model="sADInfo.chargeWage" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="employmentDateTs" label="参加工作日期">
							<el-date-picker
								class="w100"
								v-model="sADInfo.employmentDateTs"
								type="date"
								value-format="timestamp"
								placeholder="选择日期"
								:disabled="!sADIsQuery"
							></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="manualNum" label="手册编号"><el-input v-model="sADInfo.manualNum" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="subEntName" label="二级单位"><el-input v-model="sADInfo.subEntName" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="belongStreet" label="所属街道"><el-input v-model="sADInfo.belongStreet" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="belongCommunity" label="所属社区"><el-input v-model="sADInfo.belongCommunity" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="maxChargeDate" label="最大缴费年月"><el-input v-model="sADInfo.maxChargeDate" :disabled="!sADIsQuery"></el-input></el-form-item>
					</el-col>
				</el-row>

				<div>
					<el-table :data="sADInfo.staffChargeStatus" stripe border @selection-change="sADSChange">
						<el-table-column type="index" label="No." fixed></el-table-column>
						<el-table-column type="selection"></el-table-column>
						<el-table-column prop="insuranceType" label="企业养老" show-overflow-tooltip></el-table-column>
						<el-table-column label="参保日期">
							<template slot-scope="scope">
								<el-date-picker class="w100" v-model="scope.row.startDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
							</template>
						</el-table-column>
						<el-table-column label="缴费基数">
							<template slot-scope="scope">
								<el-input v-model="scope.row.staffChargeBase"></el-input>
							</template>
						</el-table-column>
					</el-table>

					<div class="mgT20">共 {{ sADInfo.staffChargeStatus.length }} 行，选中 {{ sADTbMS.length }} 行</div>
				</div>

				<el-row type="flex" justify="end">
					<el-button size="mini" @click="sADSave">保存</el-button>
					<el-button size="mini" @click="sADReset">重置</el-button>
				</el-row>
			</el-form>
		</el-dialog>
		<!-- 人员新增对话框 end -->
		<!-- ======================== 在职增员 end ======================== -->

		<!-- ======================== 在职减员 ======================== -->
		<!-- 录入减员申报信息对话框 -->
		<el-dialog title="录入减员申报信息" width="1024px" :visible.sync="tMSDIDV" :before-close="tMSDIDClose">
			<div>
				<el-table :data="tMSDIDInfo" max-height="400px" stripe border>
					<el-table-column type="index" label="No." fixed></el-table-column>
					<el-table-column prop="IDNum" label="证件号码" show-overflow-tooltip></el-table-column>
					<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
					<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
					<el-table-column prop="birthday" label="出生日期" show-overflow-tooltip></el-table-column>
					<el-table-column prop="employmentForm" label="用工形式" show-overflow-tooltip></el-table-column>
					<el-table-column prop="laborContractRelieveDate" label="减员日期" show-overflow-tooltip></el-table-column>
					<el-table-column prop="laborContractRelieveCause" label="减员原因" show-overflow-tooltip></el-table-column>
					<el-table-column prop="laborContractRelieveDate" label="解除合同日期" show-overflow-tooltip></el-table-column>
				</el-table>
			</div>

			<el-row class="mgT20" type="flex" justify="end">
				<el-button size="mini" @click="mSDShow">职工减员</el-button>
				<el-button size="mini" @click="unopenFunction">修改一行</el-button>
				<el-button size="mini" @click="unopenFunction">删除一行</el-button>
				<el-button size="mini" @click="unopenFunction">批量导入</el-button>
				<el-button size="mini" @click="unopenFunction">打印</el-button>
				<el-button size="mini" @click="tMSDIDDeclareSubmit">申报提交</el-button>
				<el-button size="mini" @click="unopenFunction">申报作废</el-button>
			</el-row>
		</el-dialog>
		<!-- 录入减员申报信息对话框 end -->

		<!-- 职工减员对话框 -->
		<el-dialog title="职工减员" width="1024px" :visible.sync="mSDV" :before-close="mSDClose">
			<el-form label-width="110px" size="mini" :model="mSDInfo" :rules="mSDFormRules" ref="mSDFormRef">
				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="siNum" label="社会保障号码">
							<el-input v-model="mSDInfo.siNum" :disabled="mSDIsQuery">
								<el-button slot="append" icon="el-icon-search" :disabled="mSDIsQuery" @click="mSDQuery"></el-button>
							</el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="IDNum" label="证件号码"><el-input v-model="mSDInfo.IDNum" disabled></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="name" label="姓名"><el-input v-model="mSDInfo.name" disabled></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="employmentForm" label="用工形式">
							<el-select v-model="mSDInfo.employmentForm" clearable :disabled="!mSDIsQuery">
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.employmentForm" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="sex" label="性别"><el-input v-model="mSDInfo.sex" disabled></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="birthdayTs" label="出生日期">
							<el-date-picker class="w100" v-model="mSDInfo.birthdayTs" type="date" value-format="timestamp" placeholder="选择日期" disabled></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="subEntNum" label="二级单位编号"><el-input v-model="mSDInfo.subEntNum" :disabled="!mSDIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="subEntName" label="二级单位名称"><el-input v-model="mSDInfo.subEntName" :disabled="!mSDIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="minusStaffDateTs" label="减员年月">
							<el-date-picker
								class="w100"
								v-model="mSDInfo.minusStaffDateTs"
								type="month"
								value-format="timestamp"
								placeholder="选择日期"
								:disabled="!mSDIsQuery"
							></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="minusStaffCause" label="减员原因"><el-input v-model="mSDInfo.minusStaffCause" :disabled="!mSDIsQuery"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="laborContractRelieveCause" label="合同解除原因">
							<el-input v-model="mSDInfo.laborContractRelieveCause" :disabled="!mSDIsQuery"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="laborContractRelieveDateTs" label="合同解除日期">
							<el-date-picker
								class="w100"
								v-model="mSDInfo.laborContractRelieveDateTs"
								type="date"
								value-format="timestamp"
								placeholder="选择日期"
								:disabled="!mSDIsQuery"
							></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row type="flex" justify="end">
					<el-button size="mini" @click="mSDSave">保存</el-button>
					<el-button type="primary" size="mini" plain @click="mSDReset">重置</el-button>
				</el-row>
			</el-form>
		</el-dialog>
		<!-- 职工减员对话框 end -->
		<!-- ======================== 在职减员 end ======================== -->

		<!-- ======================== 缴费基数申报 ======================== -->
		<el-dialog title="录入缴费基数申报" width="1024px" :visible.sync="tCBDDV" :before-close="tCBDDClose">
			<el-form label-width="100px" size="mini">
				<div>
					<el-table :data="tCBDDInfo" max-height="300px" stripe border>
						<el-table-column type="index" label="No." fixed></el-table-column>
						<el-table-column prop="siNum" label="社保号" show-overflow-tooltip></el-table-column>
						<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
						<el-table-column prop="IDNum" label="证件号码" show-overflow-tooltip></el-table-column>
						<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
						<el-table-column prop="subEntName" label="二级单位名称" show-overflow-tooltip></el-table-column>
						<el-table-column label="上年度工资收入">
							<template slot-scope="scope">
								<el-input v-model="scope.row.yesteryearWageSum"></el-input>
							</template>
						</el-table-column>
						<el-table-column label="上年实发月数">
							<template slot-scope="scope">
								<el-input v-model="scope.row.yesteryearActualMonth"></el-input>
							</template>
						</el-table-column>
						<el-table-column prop="yesteryearMonthWage" label="上年月工资" show-overflow-tooltip></el-table-column>
						<el-table-column prop="chargeBase" label="缴费基数" show-overflow-tooltip></el-table-column>
					</el-table>
				</div>

				<el-row class="mgT20">
					<el-col :span="12">
						<el-form-item label="查找职工">
							<el-input placeholder="请输入职工社保号码" v-model="tCBDDTSiNum">
								<el-button slot="append" icon="el-icon-search" @click="tCBDDQuery"></el-button>
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row type="flex" justify="end">
					<el-button size="mini" @click="tCBDDSave">保存</el-button>
					<el-button size="mini" @click="unopenFunction">申报提交</el-button>
					<el-button size="mini" @click="unopenFunction">申报作废</el-button>
				</el-row>
			</el-form>
		</el-dialog>
		<!-- ======================== 缴费基数申报 end ======================== -->
	</div>
</template>

<script>
import { mapState } from 'vuex';
const utils = require('@/utils/utils.js');

export default {
	name: 'SIOfficeHallIndexSI',
	data() {
		return {
			// ======================== 公共 ========================
			currentTime: '', //当前日期

			// ======================== 在职增员 ========================
			// ------------ 录入增员申报信息对话框 ------------
			tASDIDV: false, //是否显示
			tASDIDInfo: [], //信息

			// ------------ 人员新增对话框 ------------
			sADV: false, //是否显示
			sADIsQuery: false, //是否查询
			sADInfo: {
				IDNum: '', //证件号码
				name: '', //姓名
				formerName: '', //曾用名
				sex: '', //性别
				nation: '', //民族
				birthday: '', //出生日期
				birthdayTs: '',
				postalCode: '', //邮政编码
				administrativeDivision: '', //行政区划
				homeAddr: '', //家庭住址
				correspondenceAddr: '', //通讯地址
				householdType: '', //户口性质
				householdLocation: '', //户口所在地
				belongStreet: '', //所属街道
				belongCommunity: '', //所属社区
				tel: '', //联系电话
				email: '', //电子邮箱
				maritalStatus: '', //婚姻状况
				politicsStatus: '', //政治面貌
				administrativeRank: '', //行政职务
				educationDegree: '', //文化程度
				educationMajor: '', //所学专业
				NVQ: '', //国家职业资格登记
				religion: '', //宗教信仰
				healthCondition: '', //健康状况
				contacts: '', //联系人
				contactsTel: '', //联系人电话
				status: '', //个人身份
				staffType: '', //职业（工种）
				addSICause: '', //增加原因
				addStaffDate: '', //增员年月
				addStaffDateTs: '',
				employmentForm: '', //用工形式
				employmentDate: '', //参加工作日期
				employmentDateTs: '',
				subEntName: '', //二级单位名称
				chargeWage: '', //缴费工资
				maxChargeDate: '', //最大缴费年月
				manualNum: '', //手册编号
				// 职工缴费情况
				staffChargeStatus: [
					{
						insuranceType: '企业养老', //险种
						startDate: '', //起始年月
						startDateTs: '',
						endDate: '', //终止年月
						entMonthCharge: '', //单位月缴费额
						staffMonthCharge: '', //个人月缴费额
						staffChargeBase: '', //个人缴费基数
						chargeDate: '', //发生日期
						chargeCause: '单位应缴缴费' //发生原因
					},
					{
						insuranceType: '失业', //险种
						startDate: '', //起始年月
						startDateTs: '',
						endDate: '', //终止年月
						entMonthCharge: '', //单位月缴费额
						staffMonthCharge: '', //个人月缴费额
						staffChargeBase: '', //个人缴费基数
						chargeDate: '', //发生日期
						chargeCause: '单位应缴缴费' //发生原因
					},
					{
						insuranceType: '工伤', //险种
						startDate: '', //起始年月
						startDateTs: '',
						endDate: '', //终止年月
						entMonthCharge: '', //单位月缴费额
						staffMonthCharge: '', //个人月缴费额
						staffChargeBase: '', //个人缴费基数
						chargeDate: '', //发生日期
						chargeCause: '单位应缴缴费' //发生原因
					}
				]
			}, //信息
			sADFormRules: {
				IDNum: [
					{
						required: true,
						message: '请输入证件号码',
						trigger: 'blur'
					}
				],
				name: [
					{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}
				],
				birthdayTs: [
					{
						required: true,
						message: '请选择出生日期',
						trigger: 'blur'
					}
				],
				sex: [
					{
						required: true,
						message: '请输入性别',
						trigger: 'blur'
					}
				],
				nation: [
					{
						required: true,
						message: '请选择民族',
						trigger: 'change'
					}
				],
				employmentForm: [
					{
						required: true,
						message: '请选择用工形式',
						trigger: 'change'
					}
				],
				educationDegree: [
					{
						required: true,
						message: '请选择文化程度',
						trigger: 'change'
					}
				],
				educationMajor: [
					{
						required: true,
						message: '请输入所学专业',
						trigger: 'blur'
					}
				],
				householdType: [
					{
						required: true,
						message: '请选择户口性质',
						trigger: 'change'
					}
				],
				postalCode: [
					{
						required: true,
						message: '请输入邮政编码',
						trigger: 'blur'
					}
				],
				maritalStatus: [
					{
						required: true,
						message: '请输入婚姻状况',
						trigger: 'blur'
					}
				],
				householdLocation: [
					{
						required: true,
						message: '请输入户口所在地',
						trigger: 'blur'
					}
				],
				correspondenceAddr: [
					{
						required: true,
						message: '请输入通讯地址',
						trigger: 'blur'
					}
				],
				homeAddr: [
					{
						required: true,
						message: '请输入家庭住址',
						trigger: 'blur'
					}
				],
				administrativeDivision: [
					{
						required: true,
						message: '请输入行政区划',
						trigger: 'blur'
					}
				],
				staffType: [
					{
						required: true,
						message: '请输入专业技术级别',
						trigger: 'blur'
					}
				],
				administrativeRank: [
					{
						required: true,
						message: '请输入行政职务',
						trigger: 'blur'
					}
				],
				tel: [
					{
						required: true,
						message: '请输入联系电话',
						trigger: 'blur'
					}
				],
				contacts: [
					{
						required: true,
						message: '请输入联系人',
						trigger: 'blur'
					}
				],
				contactsTel: [
					{
						required: true,
						message: '请输入联系人电话',
						trigger: 'blur'
					}
				],
				status: [
					{
						required: true,
						message: '请输入个人身份',
						trigger: 'blur'
					}
				],
				healthCondition: [
					{
						required: true,
						message: '请输入健康状况',
						trigger: 'blur'
					}
				],
				religion: [
					{
						required: true,
						message: '请输入宗教信仰',
						trigger: 'blur'
					}
				],
				NVQ: [
					{
						required: true,
						message: '请输入国家职业资格登记',
						trigger: 'blur'
					}
				],
				addSICause: [
					{
						required: true,
						message: '请输入增加原因',
						trigger: 'blur'
					}
				],
				addStaffDateTs: [
					{
						required: true,
						message: '请选择增员年月',
						trigger: 'blur'
					}
				],
				chargeWage: [
					{
						required: true,
						message: '请输入缴费工资',
						trigger: 'blur'
					}
				],
				employmentDateTs: [
					{
						required: true,
						message: '请选择参加工作日期',
						trigger: 'blur'
					}
				],
				belongStreet: [
					{
						required: true,
						message: '请输入所属街道',
						trigger: 'blur'
					}
				],
				belongCommunity: [
					{
						required: true,
						message: '请输入所属社区',
						trigger: 'blur'
					}
				]
			}, //表单验证规则
			sADTbMS: [], //参保信息表格 多选

			// ======================== 在职减员 ========================
			// ------------ 录入减员申报信息对话框 ------------
			tMSDIDV: false, //是否显示
			tMSDIDInfo: [], //信息

			// ------------ 职工减员对话框 ------------
			mSDV: false, //是否显示
			mSDIsQuery: false, //是否查询
			mSDInfo: {
				IDNum: '', //证件号码
				name: '', //姓名
				sex: '', //性别
				birthday: '', //出生日期
				birthdayTs: '',
				siNum: '', //社保号
				employmentForm: '', //用工形式
				subEntNum: '', //二级单位编号
				subEntName: '', //二级单位名称
				minusStaffCause: '', //减员原因
				minusStaffDate: '', //减员年月
				minusStaffDateTs: '',
				laborContractRelieveDate: '', //合同解除日期
				laborContractRelieveDateTs: '',
				laborContractRelieveCause: '' //合同解除原因
			}, //信息
			mSDFormRules: {
				IDNum: [
					{
						required: true,
						message: '请输入证件号码',
						trigger: 'blur'
					}
				],
				name: [
					{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}
				],
				sex: [
					{
						required: true,
						message: '请输入性别',
						trigger: 'blur'
					}
				],
				birthdayTs: [
					{
						required: true,
						message: '请选择出生日期',
						trigger: 'blur'
					}
				],
				minusStaffDateTs: [
					{
						required: true,
						message: '请选择减员年月',
						trigger: 'blur'
					}
				],
				minusStaffCause: [
					{
						required: true,
						message: '请输入减员原因',
						trigger: 'blur'
					}
				]
			}, //表单验证规则

			// ======================== 缴费基数申报 ========================
			// ------------ 录入缴费基数申报对话框 ------------
			tCBDDV: false, //是否显示
			tCBDDInfo: [], //信息
			tCBDDTSiNum: '' //输入职工社保号码
		};
	},
	computed: {
		...mapState({
			entInfo: state => state.entInfo, //企业信息
			commonOptions: state => state.commonOptions //公共选项
		})
	},
	watch: {
		// ======================== 在职增员 ========================
		// ------------ 人员新增对话框 ------------
		sADInfo: {
			handler(e) {
				// 出生日期
				if (e.birthdayTs) {
					this.sADInfo.birthday = utils.getDateString(e.birthdayTs);
				} else {
					this.sADInfo.birthday = '';
				}

				// 增员年月
				if (e.addStaffDateTs) {
					this.sADInfo.addStaffDate = utils.getDateStringII(e.addStaffDateTs);
				} else {
					this.sADInfo.addStaffDate = '';
				}

				// 参加工作日期
				if (e.employmentDateTs) {
					this.sADInfo.employmentDate = utils.getDateString(e.employmentDateTs);
				} else {
					this.sADInfo.employmentDate = '';
				}

				// 职工缴费情况
				if (e.staffChargeStatus[0].startDateTs) {
					this.sADInfo.staffChargeStatus[0].startDate = utils.getDateString(e.staffChargeStatus[0].startDateTs);
				} else {
					this.sADInfo.staffChargeStatus[0].startDate = '';
				}
				if (e.staffChargeStatus[1].startDateTs) {
					this.sADInfo.staffChargeStatus[1].startDate = utils.getDateString(e.staffChargeStatus[0].startDateTs);
				} else {
					this.sADInfo.staffChargeStatus[1].startDate = '';
				}
				if (e.staffChargeStatus[2].startDateTs) {
					this.sADInfo.staffChargeStatus[2].startDate = utils.getDateString(e.staffChargeStatus[0].startDateTs);
				} else {
					this.sADInfo.staffChargeStatus[2].startDate = '';
				}
			},
			deep: true
		},

		// ======================== 在职减员 ========================
		// ------------ 职工减员对话框 ------------
		mSDInfo: {
			handler(e) {
				// 出生日期
				if (e.birthdayTs) {
					this.mSDInfo.birthday = utils.getDateString(e.birthdayTs);
				} else {
					this.mSDInfo.birthday = '';
				}

				// 减员年月
				if (e.minusStaffDateTs) {
					this.mSDInfo.minusStaffDate = utils.getDateStringII(e.minusStaffDateTs);
				} else {
					this.mSDInfo.minusStaffDate = '';
				}

				// 合同解除日期
				if (e.laborContractRelieveDateTs) {
					this.mSDInfo.laborContractRelieveDate = utils.getDateString(e.laborContractRelieveDateTs);
				} else {
					this.mSDInfo.laborContractRelieveDate = '';
				}
			},
			deep: true
		}
	},
	methods: {
		// ======================== 公共 ========================
		// ------------ 未开放功能按钮 ------------
		unopenFunction() {
			this.$message.info('此功能暂未开放');
		},

		// ======================== 在职增员 ========================
		// ------------ 录入增员申报信息对话框 ------------
		// 显示
		tASDIDShow() {
			this.tASDIDV = true;
		},
		// 申报提交按钮
		tASDIDDeclareSubmit() {
			if (this.tASDIDInfo.length == 0) {
				this.$message.warning('没有录入人员信息，不能提交中心审批');
			} else {
				this.tASDIDInfo.forEach(e => {
					e.num = e.IDNum;
					e.changeCause = e.addSICause;
					e.changeDate = e.addStaffDate;
					e.handleDate = this.currentTime;
				});
				this.tASDIDV = false;
				this.$store.dispatch('updateEntStaffInfo', this.tASDIDInfo);
				this.$store.dispatch('updateEntStaffChange', this.tASDIDInfo);
				this.$message.success('提交成功');
			}
		},
		// 关闭事件
		tASDIDClose() {
			this.tASDIDV = false;
		},

		// ------------ 人员新增对话框 ------------
		// 显示
		sADShow() {
			this.sADV = true;
		},
		// 查询按钮
		sADQuery() {
			if (!this.sADInfo.IDNum) {
				this.$message.warning('请输入证件号码');
			} else {
				let isQueried = false;

				this.entInfo.entAddStaff.forEach(e => {
					if (e.IDNum == this.sADInfo.IDNum) {
						this.sADInfo = utils.deepClone(e);
						this.sADIsQuery = true;
						isQueried = true;
					}
				});

				if (!isQueried) {
					this.$message.warning('未查询到相关数据');
				} else {
					this.$message.success('查询成功');
				}
			}
		},
		// 参保信息表格 多选
		sADSChange(e) {
			this.sADTbMS = e;
		},
		// 保存按钮
		sADSave() {
			this.$refs.sADFormRef.validate(valid => {
				if (valid) {
					this.tASDIDInfo.push(utils.deepClone(this.sADInfo));
					this.sADV = false;
					this.$refs.sADFormRef.resetFields();
					this.$message.success('保存成功');
				} else {
					this.$message.warning('请完善所有【必填】信息');
				}
			});
		},
		// 重置按钮
		sADReset() {
			this.sADIsQuery = false;
			this.$refs.sADFormRef.resetFields();
			this.$message.success('输入信息已重置');
		},
		// 关闭事件
		sADClose() {
			this.sADV = false;
		},

		// ======================== 在职减员 ========================
		// ------------ 录入减员申报信息对话框 ------------
		// 显示
		tMSDIDShow() {
			this.tMSDIDV = true;
		},
		// 申报提交按钮
		tMSDIDDeclareSubmit() {
			if (this.tMSDIDInfo.length == 0) {
				this.$message.warning('没有录入人员信息，不能提交中心审批');
			} else {
				this.tMSDIDInfo.forEach(e => {
					e.num = e.IDNum;
					e.changeCause = e.minusStaffCause;
					e.changeDate = e.minusStaffDate;
					e.handleDate = this.currentTime;
				});
				this.tMSDIDV = false;
				this.$store.dispatch('updateEntStaffInfo', this.tMSDIDInfo);
				this.$store.dispatch('updateEntStaffChange', this.tMSDIDInfo);
				this.$message.success('提交成功');
			}
		},
		// 关闭事件
		tMSDIDClose() {
			this.tMSDIDV = false;
		},

		// ------------ 职工减员对话框 ------------
		// 显示
		mSDShow() {
			this.mSDV = true;
		},
		// 查询按钮
		mSDQuery() {
			if (!this.mSDInfo.siNum) {
				this.$message.warning('请输入社保号码');
			} else {
				let isQueried = false;

				this.entInfo.entMinusStaff.forEach(e => {
					if (e.siNum == this.mSDInfo.siNum) {
						this.mSDInfo = utils.deepClone(e);
						this.mSDIsQuery = true;
						isQueried = true;
					}
				});

				if (!isQueried) {
					this.$message.warning('未查询到相关数据');
				} else {
					this.$message.success('查询成功');
				}
			}
		},
		// 保存按钮
		mSDSave() {
			this.$refs.mSDFormRef.validate(valid => {
				if (valid) {
					this.tMSDIDInfo.push(utils.deepClone(this.mSDInfo));
					this.mSDV = false;
					this.$refs.mSDFormRef.resetFields();
					this.$message.success('保存成功');
				} else {
					this.$message.warning('请完善所有【必填】信息');
				}
			});
		},
		// 重置按钮
		mSDReset() {
			this.mSDIsQuery = false;
			this.$refs.mSDFormRef.resetFields();
			this.$message.success('输入信息已重置');
		},
		// 关闭事件
		mSDClose() {
			this.mSDV = false;
		},

		// ======================== 缴费基数申报 ========================
		// ------------ 录入缴费基数申报对话框 ------------
		// 显示
		tCBDDShow() {
			this.tCBDDV = true;
		},
		// 查询按钮
		tCBDDQuery() {
			if (!this.tCBDDTSiNum) {
				this.$message.warning('请输入职工社保号码');
			} else {
				let isQueried = false;

				this.tCBDDInfo = [];
				this.entInfo.entStaffInfo.forEach(e => {
					if (e.siNum == this.tCBDDTSiNum) {
						isQueried = true;
						this.tCBDDInfo.push(e);
					}
				});

				if (!isQueried) {
					this.$message.warning('暂无相关数据');
				} else {
					this.$message.success('查询成功');
				}
			}
		},
		// 保存按钮
		tCBDDSave() {
			if (this.tCBDDInfo.length == 0) {
				this.$message.warning('暂无数据');
			} else {
				this.tCBDDV = false;
				this.$store.dispatch('updateEntStaffWageStatus', this.tCBDDInfo);
				this.$message.success('保存成功');
			}
		},
		// 关闭事件
		tCBDDClose() {
			this.tCBDDV = false;
		}
	},
	mounted() {
		// 获取当前日期
		this.currentTime = utils.getCurrentTime();
	}
};
</script>
