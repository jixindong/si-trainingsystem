<template>
	<div class="oHIOperation fColumn">
		<!-- ======================== 主体 ======================== -->
		<!-- 基本信息 -->
		<div class="basicInfo fRow">
			<img class="mgR20" src="../../assets/build.png" />
			<div>
				<div>
					<span class="mgR20">业务办理单位编号：20170102361931</span>
					<span>业务办理机构：高新区</span>
				</div>
				<div>业务办理单位名称：淄博问云软件技术有限公司</div>
			</div>
		</div>
		<!-- 基本信息 end -->

		<!-- 劳动关系申报 -->
		<div class="funBox fColumn">
			<div class="titleBox fRow">
				<img class="mgR10" src="../../assets/declaration.png" />
				<span>劳动关系申报</span>
			</div>
			<div class="subtitle">参保缴费申报主要针对参保人员信息进行管理等</div>
			<div class="contentBox fRow">
				<div class="column">
					<div class="funItem fRow">
						<span class="colorBlack dot hover" @click="tRRDIDVShow">劳动用工备案</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">集体合同综合管理</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span class="colorBlack dot hover" @click="tRRIMDIDShow">劳动用工综合管理</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
					<div class="funItem fRow">
						<span class="dot">用工备案申报查询</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span class="dot">集体合同备案</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
				</div>
			</div>
		</div>
		<!-- 劳动关系申报 end -->

		<!-- 劳务派遣行政许可申请 -->
		<div class="funBox fColumn">
			<div class="titleBox fRow">
				<img class="mgR10" src="../../assets/paper.png" />
				<span>劳务派遣行政许可申请</span>
			</div>
			<div class="subtitle">劳务派遣行政许可申请主要管理劳务派遣行政许可申请信息</div>
			<div class="contentBox fRow">
				<div class="column">
					<div class="funItem fRow">
						<span>劳务派遣行政许可申请</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span>劳务派遣行政许可延续申请</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
				</div>

				<div class="column">
					<div class="funItem fRow">
						<span>劳务派遣行政许可变更申请</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
				</div>
			</div>
		</div>
		<!-- 劳务派遣行政许可申请 end -->

		<!-- 单位更名 -->
		<div class="funBox fColumn">
			<div class="titleBox fRow">
				<img class="mgR10" src="../../assets/declaration.png" />
				<span>单位更名</span>
			</div>
			<div class="subtitle">主要用于企业进行修改劳动关系单位名称</div>
			<div class="contentBox fRow">
				<div class="column">
					<div class="funItem fRow">
						<span>单位更名</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
				</div>
			</div>
		</div>
		<!-- 单位更名 end -->

		<!-- 特殊工时申报 -->
		<div class="funBox fColumn">
			<div class="titleBox fRow">
				<img class="mgR10" src="../../assets/declaration.png" />
				<span>特殊工时申报</span>
			</div>
			<div class="subtitle">特殊工时申报主要用于特殊工时信息申报</div>
			<div class="contentBox fRow">
				<div class="column">
					<div class="funItem fRow">
						<span>特殊工时申报</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
				</div>
			</div>
		</div>
		<!-- 特殊工时申报 end -->

		<!-- 三项制度申报 -->
		<div class="funBox fColumn">
			<div class="titleBox fRow">
				<img class="mgR10" src="../../assets/declaration.png" />
				<span>三项制度申报</span>
			</div>
			<div class="subtitle">三项制度申报主要用于企业工资分配三项制度备案</div>
			<div class="contentBox fRow">
				<div class="column">
					<div class="funItem fRow">
						<span>三项制度申报</span>
						<img class="hover" src="../../assets/function.png" />
					</div>
				</div>
			</div>
		</div>
		<!-- 三项制度申报 end -->
		<!-- ======================== 主体 end ======================== -->

		<!-- ======================== 公共 ======================== -->
		<el-dialog title="等待中心审批" width="60%" :visible.sync="wCDDV" :before-close="wCDDClose">
			<div class="mgB10 colorRed">您办理的用工备案业务已经成功提交，请携带相关材料到有关部门办理业务！</div>

			<div>
				<el-table :data="wCDDInfo" max-height="400" size="mini" stripe border>
					<el-table-column type="index" label="No." fixed></el-table-column>
					<el-table-column prop="IDType" label="有效证件类型" show-overflow-tooltip></el-table-column>
					<el-table-column prop="IDNum" label="有效证件号码" show-overflow-tooltip></el-table-column>
					<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
					<el-table-column prop="birthday" label="出生日期" show-overflow-tooltip></el-table-column>
					<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
					<el-table-column prop="householdType" label="户口性质" show-overflow-tooltip></el-table-column>
					<el-table-column prop="nation" label="民族" show-overflow-tooltip></el-table-column>
					<el-table-column prop="educationDegree" label="文化程度" show-overflow-tooltip></el-table-column>
					<el-table-column prop="administrativeDivision" label="行政区划" show-overflow-tooltip></el-table-column>
				</el-table>
			</div>
		</el-dialog>
		<!-- ======================== 公共 end ======================== -->

		<!-- ======================== 劳动用工备案 ======================== -->
		<!-- 录入用工备案申报信息对话框 -->
		<el-dialog title="录入用工备案申报信息" :visible.sync="tRRDIDV" width="60%" :before-close="tRRDIDClose">
			<div>
				<el-table :data="tRRDIDInfo" max-height="400" size="mini" stripe border>
					<el-table-column type="index" label="No." fixed></el-table-column>
					<el-table-column prop="IDType" label="有效证件类型" show-overflow-tooltip></el-table-column>
					<el-table-column prop="IDNum" label="有效证件号码" show-overflow-tooltip></el-table-column>
					<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
					<el-table-column prop="birthday" label="出生日期" show-overflow-tooltip></el-table-column>
					<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
					<el-table-column prop="householdType" label="户口性质" show-overflow-tooltip></el-table-column>
					<el-table-column prop="nation" label="民族" show-overflow-tooltip></el-table-column>
					<el-table-column prop="educationDegree" label="文化程度" show-overflow-tooltip></el-table-column>
					<el-table-column prop="administrativeDivision" label="行政区划" show-overflow-tooltip></el-table-column>
				</el-table>
			</div>

			<el-row class="mgT20" type="flex" justify="end">
				<el-button size="mini" @click="tRRDIDAddRecruit">新增用工备案</el-button>
				<el-button size="mini" @click="unopenFunction">修改用工备案</el-button>
				<el-button size="mini" @click="unopenFunction">删除用工备案</el-button>
				<el-button size="mini" @click="unopenFunction">批量新增</el-button>
				<el-button size="mini" @click="tRRDIDDeclareSubmit">申报提交</el-button>
				<el-button size="mini" @click="unopenFunction">申报作废</el-button>
			</el-row>
		</el-dialog>
		<!-- 录入用工备案申报信息对话框 end -->

		<!-- 录入备案信息对话框 -->
		<el-dialog title="录入备案信息" :visible.sync="tRIDV" width="60%" :before-close="tRIDClose">
			<el-form class="dialogForm" label-width="136px" size="mini" :model="tRIDInfo" :rules="tRIDFormRules" ref="tRIDFormRef">
				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>劳动者信息</span>
				</div>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="IDType" label="有效证件类型">
							<el-select class="w100" v-model="tRIDInfo.IDType" clearable>
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
						<el-form-item prop="IDNum" label="有效证件号码"><el-input v-model="tRIDInfo.IDNum"></el-input></el-form-item>
					</el-col>
					<el-button size="mini">提取数据</el-button>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="name" label="姓名"><el-input v-model="tRIDInfo.name"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="birthdayTs" label="出生日期">
							<el-date-picker class="w100" v-model="tRIDInfo.birthdayTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="sex" label="性别">
							<el-select class="w100" v-model="tRIDInfo.sex" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option label="男" value="男"></el-option>
								<el-option label="女" value="女"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="householdType" label="户口性质">
							<el-select class="w100" v-model="tRIDInfo.householdType" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.householdType" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="nation" label="民族">
							<el-select v-model="tRIDInfo.nation" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.nation" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="educationDegree" label="文化程度">
							<el-select v-model="tRIDInfo.educationDegree" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.educationDegree" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="administrativeDivision" label="行政区划"><el-input v-model="tRIDInfo.administrativeDivision"></el-input></el-form-item>
					</el-col>
					<el-col :span="16">
						<el-form-item prop="householdLocation" label="户籍详细地址"><el-input v-model="tRIDInfo.householdLocation"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="16">
						<el-form-item prop="homeAddr" label="现住址"><el-input v-model="tRIDInfo.homeAddr"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="siNum" label="社保号"><el-input v-model="tRIDInfo.siNum"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="insuredDateTs" label="投保日期">
							<el-date-picker class="w100" v-model="tRIDInfo.insuredDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="postalCode" label="邮政编码"><el-input v-model="tRIDInfo.postalCode"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="employmentYearTs" label="参加工作年份">
							<el-date-picker class="w100" v-model="tRIDInfo.employmentYearTs" type="year" value-format="timestamp" placeholder="选择年份"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="nationality" label="国籍"><el-input v-model="tRIDInfo.nationality"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="staffType" label="职业(工种)">
							<el-select v-model="tRIDInfo.staffType" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.staffType" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>劳动用工信息</span>
				</div>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="staffSort" label="职工类别">
							<el-select class="w100" v-model="tRIDInfo.staffSort" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.staffSort" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="subEntName" label="派遣单位名称"><el-input v-model="tRIDInfo.subEntName"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="laborContractSign" label="是否签订劳动合同">
							<el-select class="w100" v-model="tRIDInfo.laborContractSign" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option label="是" value="是"></el-option>
								<el-option label="否" value="否"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="insuredRecordDateTs" label="备案日期">
							<el-date-picker class="w100" v-model="tRIDInfo.insuredRecordDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="employmentForm" label="用工形式">
							<el-select class="w100" v-model="tRIDInfo.employmentForm" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.employmentForm" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="recruitStartDateTs" label="用工起始日期">
							<el-date-picker class="w100" v-model="tRIDInfo.recruitStartDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="recruitEndDateTs" label="用工终止日期">
							<el-date-picker class="w100" v-model="tRIDInfo.recruitEndDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="laborContractStatus" label="合同状态"><el-input v-model="tRIDInfo.laborContractStatus"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="laborContractType" label="合同期限类型">
							<el-select class="w100" v-model="tRIDInfo.laborContractType" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.laborContractType" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="laborContractStartDateTs" label="合同起始日期">
							<el-date-picker class="w100" v-model="tRIDInfo.laborContractStartDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="laborContractEndDateTs" label="合同终止日期">
							<el-date-picker class="w100" v-model="tRIDInfo.laborContractEndDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="hireStartDateTs" label="试用起始日期">
							<el-date-picker class="w100" v-model="tRIDInfo.hireStartDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="hireEndDateTs" label="试用终止日期">
							<el-date-picker class="w100" v-model="tRIDInfo.hireEndDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<div class="fRow">
					<el-button size="mini" @click="tRIDSave">保存</el-button>
					<el-button type="primary" size="mini" plain @click="tRIDReset">重置</el-button>
				</div>
			</el-form>
		</el-dialog>
		<!-- 录入备案信息对话框 end -->
		<!-- ======================== 劳动用工备案 end ======================== -->

		<!-- ======================== 劳动用工综合管理 ======================== -->
		<!-- 录入用工备案综合管理申报信息对话框 -->
		<el-dialog title="录入用工备案综合管理申报信息" width="60%" :visible.sync="tRRIMDIDV" :before-close="tRRIMDIDClose">
			<div>
				<el-table :data="tRRIMDIDInfo" max-height="400" size="mini" stripe border>
					<el-table-column type="index" label="No." fixed></el-table-column>
					<el-table-column prop="IDType" label="有效证件类型" show-overflow-tooltip></el-table-column>
					<el-table-column prop="IDNum" label="有效证件号码" show-overflow-tooltip></el-table-column>
					<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
					<el-table-column prop="birthday" label="出生日期" show-overflow-tooltip></el-table-column>
					<el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
					<el-table-column prop="householdType" label="户口性质" show-overflow-tooltip></el-table-column>
					<el-table-column prop="nation" label="民族" show-overflow-tooltip></el-table-column>
					<el-table-column prop="educationDegree" label="文化程度" show-overflow-tooltip></el-table-column>
					<el-table-column prop="administrativeDivision" label="行政区划" show-overflow-tooltip></el-table-column>
				</el-table>
			</div>

			<el-row class="mgT20" type="flex" justify="end">
				<el-dropdown trigger="click" @command="tRRIMDIDOperatEnter">
					<el-button class="mgR10" size="mini">续签解除终止操作入口</el-button>

					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="0">修改</el-dropdown-item>
						<el-dropdown-item command="1">变更</el-dropdown-item>
						<el-dropdown-item command="2">续签</el-dropdown-item>
						<el-dropdown-item command="3">解除</el-dropdown-item>
						<el-dropdown-item command="4">终止</el-dropdown-item>
						<el-dropdown-item command="5">中止</el-dropdown-item>
						<el-dropdown-item command="6">恢复</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-button size="mini" @click="unopenFunction">修改一行</el-button>
				<el-button size="mini" @click="unopenFunction">删除一行</el-button>
				<el-button size="mini" @click="unopenFunction">批量续订</el-button>
				<el-button size="mini" @click="unopenFunction">批量解除</el-button>
				<el-button size="mini" @click="unopenFunction">批量终止</el-button>
				<el-button size="mini" @click="tRRIMDIDDeclareSubmit">申报提交</el-button>
				<el-button size="mini" @click="unopenFunction">申报作废</el-button>
			</el-row>
		</el-dialog>
		<!-- 录入用工备案综合管理申报信息对话框 end -->

		<!-- 用工备案信息解除对话框 -->
		<el-dialog title="用工备案信息解除" width="60%" :visible.sync="rRIRDV" :before-close="rRIRDClose">
			<el-form class="dialogForm" label-width="124px" size="mini" :model="rRIRDInfo" :rules="rRIRDFormRules" ref="rRIRDFormRef">
				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>选择人员</span>
				</div>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="IDType" label="有效证件类型">
							<el-select class="w100" v-model="rRIRDInfo.IDType" clearable>
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
						<el-form-item prop="IDNum" label="有效证件号码"><el-input v-model="rRIRDInfo.IDNum"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="name" label="姓名"><el-input v-model="rRIRDInfo.name"></el-input></el-form-item>
					</el-col>
				</el-row>

				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>劳动者信息</span>
				</div>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="birthdayTs" label="出生日期">
							<el-date-picker class="w100" v-model="rRIRDInfo.birthdayTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="sex" label="性别">
							<el-select class="w100" v-model="rRIRDInfo.sex" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option label="男" value="男"></el-option>
								<el-option label="女" value="女"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="householdType" label="户口性质">
							<el-select v-model="rRIRDInfo.householdType" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.householdType" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="nation" label="民族">
							<el-select v-model="rRIRDInfo.nation" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.nation" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="educationDegree" label="文化程度">
							<el-select v-model="rRIRDInfo.educationDegree" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.educationDegree" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="administrativeDivision" label="行政区划"><el-input v-model="rRIRDInfo.administrativeDivision"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="16">
						<el-form-item prop="householdLocation" label="户籍详细地址"><el-input v-model="rRIRDInfo.householdLocation"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="siNum" label="社保号"><el-input v-model="rRIRDInfo.siNum"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="16">
						<el-form-item prop="homeAddr" label="现住址"><el-input v-model="rRIRDInfo.homeAddr"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="insuredDateTs" label="投保日期">
							<el-date-picker class="w100" v-model="rRIRDInfo.insuredDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="postalCode" label="邮政编码"><el-input v-model="rRIRDInfo.postalCode"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="employmentYearTs" label="参加工作年份">
							<el-date-picker class="w100" v-model="rRIRDInfo.employmentYearTs" type="year" value-format="timestamp" placeholder="选择年份"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="nationality" label="国籍"><el-input v-model="rRIRDInfo.nationality"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="staffType" label="职业(工种)">
							<el-select v-model="rRIRDInfo.staffType" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.staffType" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>劳动用工信息</span>
				</div>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="staffSort" label="职工类别">
							<el-select class="w100" v-model="rRIRDInfo.staffSort" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.staffSort" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="laborContractSign" label="是否签订劳动合同"><el-input v-model="rRIRDInfo.laborContractSign"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="reInsuredNum" label="续订次数"><el-input v-model="rRIRDInfo.reInsuredNum"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="employmentForm" label="用工形式">
							<el-select class="w100" v-model="rRIRDInfo.employmentForm" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.employmentForm" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="recruitStartDateTs" label="用工起始日期">
							<el-date-picker class="w100" v-model="rRIRDInfo.recruitStartDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="recruitEndDateTs" label="用工终止日期">
							<el-date-picker class="w100" v-model="rRIRDInfo.recruitEndDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="laborContractType" label="合同期限类型">
							<el-select class="w100" v-model="rRIRDInfo.laborContractType" clearable>
								<el-option label="请选择" value=""></el-option>
								<el-option v-for="(item, index) in commonOptions.laborContractType" :key="index" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="laborContractStartDateTs" label="劳动合同起始日期">
							<el-date-picker class="w100" v-model="rRIRDInfo.laborContractStartDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="laborContractEndDateTs" label="劳动合同终止日期">
							<el-date-picker class="w100" v-model="rRIRDInfo.laborContractEndDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="hireStartDateTs" label="试用起始日期">
							<el-date-picker class="w100" v-model="rRIRDInfo.hireStartDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="hireEndDateTs" label="试用终止日期">
							<el-date-picker class="w100" v-model="rRIRDInfo.hireEndDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<div class="dialogTitleBox fRow">
					<img class="mgR10" src="@/assets/edit.png" />
					<span>用工备案解除信息</span>
				</div>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="laborContractRelieveDateTs" label="合同解除日期">
							<el-date-picker
								class="w100"
								v-model="rRIRDInfo.laborContractRelieveDateTs"
								type="date"
								value-format="timestamp"
								placeholder="选择日期"
							></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="16">
						<el-form-item prop="laborContractRelieveCause" label="合同解除原因"><el-input v-model="rRIRDInfo.laborContractRelieveCause"></el-input></el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item prop="insuredRecordDateTs" label="备案日期">
							<el-date-picker class="w100" v-model="rRIRDInfo.insuredRecordDateTs" type="date" value-format="timestamp" placeholder="选择日期"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item prop="laborContractStatus" label="合同状态"><el-input v-model="rRIRDInfo.laborContractStatus"></el-input></el-form-item>
					</el-col>
				</el-row>

				<div class="fRow">
					<el-button size="mini" @click="rRIRDSave">保存</el-button>
					<el-button type="primary" size="mini" plain @click="rRIRDReset">重置</el-button>
				</div>
			</el-form>
		</el-dialog>
		<!-- 用工备案信息解除对话框 end -->
		<!-- ======================== 劳动用工综合管理 end ======================== -->
	</div>
</template>

<script>
import { mapState } from 'vuex';
const utils = require('../../utils/utils.js');

export default {
	name: 'SIOfficeHallIndexLR',
	data() {
		return {
			// ======================== 公共 ========================
			// ------------ 等待中心审批对话框 ------------
			wCDDV: false, //是否显示
			wCDDInfo: [], //信息

			// ======================== 劳动用工备案 ========================
			// ------------ 录入用工备案申报信息对话框 ------------
			tRRDIDV: false, //是否显示
			tRRDIDInfo: [], //信息

			// ------------ 录入备案信息对话框 ------------
			tRIDV: false, //是否显示
			tRIDInfo: {
				IDType: '', //证件类型
				IDNum: '', //证件号码
				name: '', //姓名
				formerName: '', //曾用名
				sex: '', //性别
				nation: '', //民族
				nationality: '', //国籍
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
				staffSort: '', //职工类别
				staffType: '', //职业（工种）
				addSICause: '', //增加原因
				addStaffDate: '', //增员年月
				addStaffDateTs: '',
				employmentForm: '', //用工形式
				employmentDate: '', //参加工作日期
				employmentDateTs: '',
				employmentYear: '', //参加工作年份
				employmentYearTs: '',
				subEntName: '', //二级单位名称
				chargeWage: '', //缴费工资
				maxChargeDate: '', //最大缴费年月
				siNum: '', //社保号
				insuredDate: '', //投保日期
				insuredDateTs: '',
				insuredRecordDate: '', //备案日期
				insuredRecordDateTs: '',
				recruitStartDate: '', //用工起始日期
				recruitStartDateTs: '',
				recruitEndDate: '', //用工终止日期
				recruitEndDateTs: '',
				laborContractSign: '', //是否签订劳动合同
				laborContractStatus: '', //劳动合同状态
				laborContractType: '', //劳动合同期限类型
				laborContractStartDate: '', //劳动合同起始日期
				laborContractStartDateTs: '',
				laborContractEndDate: '', //劳动合同终止日期
				laborContractEndDateTs: '',
				hireStartDate: '', //试用起始日期
				hireStartDateTs: '',
				hireEndDate: '', //试用终止日期
				hireEndDateTs: '',
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
			tRIDFormRules: {
				IDType: [
					{
						required: true,
						message: '请选择证件类型',
						trigger: 'change'
					}
				],
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
						message: '请选择性别',
						trigger: 'change'
					}
				],
				householdType: [
					{
						required: true,
						message: '请选择户口性质',
						trigger: 'change'
					}
				],
				nation: [
					{
						required: true,
						message: '请选择民族',
						trigger: 'blur'
					}
				],
				educationDegree: [
					{
						required: true,
						message: '请选择文化程度',
						trigger: 'change'
					}
				],
				administrativeDivision: [
					{
						required: true,
						message: '请输入行政区划',
						trigger: 'blur'
					}
				],
				staffSort: [
					{
						required: true,
						message: '请选择职工类别',
						trigger: 'change'
					}
				],
				laborContractSign: [
					{
						required: true,
						message: '请选择是否签订劳动合同',
						trigger: 'change'
					}
				],
				insuredRecordDate: [
					{
						required: true,
						message: '请输入备案日期',
						trigger: 'blur'
					}
				]
			}, //表单验证规则

			// ======================== 劳动用工综合管理 ========================
			// ------------ 录入用工备案综合管理申报信息对话框 ------------
			tRRIMDIDV: false, //是否显示
			tRRIMDIDInfo: [], //信息

			// ------------ 用工备案信息解除对话框 ------------
			rRIRDV: false, //是否显示
			rRIRDInfo: {
				IDType: '', //证件类型
				IDNum: '', //证件号码
				name: '', //姓名
				sex: '', //性别
				nation: '', //民族
				nationality: '', //国籍
				birthday: '', //出生日期
				birthdayTs: '',
				postalCode: '', //邮政编码
				administrativeDivision: '', //行政区划
				homeAddr: '', //家庭住址
				householdType: '', //户口性质
				householdLocation: '', //户口所在地
				educationDegree: '', //文化程度
				staffSort: '', //职工类别
				staffType: '', //职业（工种）
				employmentForm: '', //用工形式
				siNum: '', //社保号
				insuredDate: '', //投保日期
				insuredDateTs: '',
				insuredRecordDate: '', //备案日期
				insuredRecordDateTs: '',
				employmentYear: '', //参加工作年份
				employmentYearTs: '',
				recruitStartDate: '', //用工起始日期
				recruitStartDateTs: '',
				recruitEndDate: '', //用工终止日期
				recruitEndDateTs: '',
				laborContractSign: '', //是否签订劳动合同
				reInsuredNum: '', //续订次数
				laborContractStatus: '', //劳动合同状态
				laborContractType: '', //劳动合同期限类型
				laborContractStartDate: '', //劳动合同起始日期
				laborContractStartDateTs: '',
				laborContractEndDate: '', //劳动合同终止日期
				laborContractEndDateTs: '',
				laborContractRelieveDate: '', //合同解除日期
				laborContractRelieveDateTs: '',
				laborContractRelieveCause: '', //合同解除原因
				hireStartDate: '', //试用起始日期
				hireStartDateTs: '',
				hireEndDate: '', //试用终止日期
				hireEndDateTs: ''
			}, //信息
			rRIRDFormRules: {
				IDType: [
					{
						required: true,
						message: '请选择证件类型',
						trigger: 'change'
					}
				],
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
						message: '请选择性别',
						trigger: 'change'
					}
				],
				siNum: [
					{
						required: true,
						message: '请输入社保号',
						trigger: 'blur'
					}
				],
				laborContractRelieveDateTs: [
					{
						required: true,
						message: '请选择合同解除日期',
						trigger: 'blur'
					}
				],
				laborContractRelieveCause: [
					{
						required: true,
						message: '请输入合同解除原因',
						trigger: 'blur'
					}
				],
				insuredRecordDateTs: [
					{
						required: true,
						message: '请选择备案日期',
						trigger: 'blur'
					}
				]
			} //表单验证规则
		};
	},
	computed: {
		...mapState({
			commonOptions: state => state.commonOptions //公共选项
		})
	},
	watch: {
		// ======================== 劳动用工备案 ========================
		// ------------ 录入备案信息对话框 ------------
		tRIDInfo: {
			handler(e) {
				// 出生日期
				if (e.birthdayTs) {
					this.tRIDInfo.birthday = utils.getDateString(e.birthdayTs);
				} else {
					this.tRIDInfo.birthday = '';
				}

				// 投保日期
				if (e.insuredDateTs) {
					this.tRIDInfo.insuredDate = utils.getDateString(e.insuredDateTs);
				} else {
					this.tRIDInfo.insuredDate = '';
				}

				// 备案日期
				if (e.insuredRecordDateTs) {
					this.tRIDInfo.insuredRecordDate = utils.getDateString(e.insuredRecordDateTs);
				} else {
					this.tRIDInfo.insuredRecordDate = '';
				}

				// 参加工作年份
				if (e.employmentYearTs) {
					this.tRIDInfo.employmentYear = utils.getDateStringIII(e.employmentYearTs);
				} else {
					this.tRIDInfo.employmentYear = '';
				}

				// 用工起始日期
				if (e.recruitStartDateTs) {
					this.tRIDInfo.recruitStartDate = utils.getDateString(e.recruitStartDateTs);
				} else {
					this.tRIDInfo.recruitStartDate = '';
				}

				// 用工终止日期
				if (e.recruitEndDateTs) {
					this.tRIDInfo.recruitEndDate = utils.getDateString(e.recruitEndDateTs);
				} else {
					this.tRIDInfo.recruitEndDate = '';
				}

				// 劳动合同起始日期
				if (e.laborContractStartDateTs) {
					this.tRIDInfo.laborContractStartDate = utils.getDateString(e.laborContractStartDateTs);
				} else {
					this.tRIDInfo.laborContractStartDate = '';
				}

				// 劳动合同终止日期
				if (e.laborContractEndDateTs) {
					this.tRIDInfo.laborContractEndDate = utils.getDateString(e.laborContractEndDateTs);
				} else {
					this.tRIDInfo.laborContractEndDate = '';
				}

				// 试用起始日期
				if (e.hireStartDateTs) {
					this.tRIDInfo.hireStartDate = utils.getDateString(e.hireStartDateTs);
				} else {
					this.tRIDInfo.hireStartDate = '';
				}

				// 试用终止日期
				if (e.hireEndDateTs) {
					this.tRIDInfo.hireEndDate = utils.getDateString(e.hireEndDateTs);
				} else {
					this.tRIDInfo.hireEndDate = '';
				}
			},
			deep: true
		},

		// ======================== 劳动用工综合管理 ========================
		// ------------ 用工备案信息解除对话框 ------------
		rRIRDInfo: {
			handler(e) {
				// 出生日期
				if (e.birthdayTs) {
					this.rRIRDInfo.birthday = utils.getDateString(e.birthdayTs);
				} else {
					this.rRIRDInfo.birthday = '';
				}

				// 投保日期
				if (e.insuredDateTs) {
					this.rRIRDInfo.insuredDate = utils.getDateString(e.insuredDateTs);
				} else {
					this.rRIRDInfo.insuredDate = '';
				}

				// 备案日期
				if (e.insuredRecordDateTs) {
					this.rRIRDInfo.insuredRecordDate = utils.getDateString(e.insuredRecordDateTs);
				} else {
					this.rRIRDInfo.insuredRecordDate = '';
				}

				// 参加工作年份
				if (e.employmentYearTs) {
					this.rRIRDInfo.employmentYear = utils.getDateStringIII(e.employmentYearTs);
				} else {
					this.rRIRDInfo.employmentYear = '';
				}

				// 用工起始日期
				if (e.recruitStartDateTs) {
					this.rRIRDInfo.recruitStartDate = utils.getDateString(e.recruitStartDateTs);
				} else {
					this.rRIRDInfo.recruitStartDate = '';
				}

				// 用工终止日期
				if (e.recruitEndDateTs) {
					this.rRIRDInfo.recruitEndDate = utils.getDateString(e.recruitEndDateTs);
				} else {
					this.rRIRDInfo.recruitEndDate = '';
				}

				// 劳动合同起始日期
				if (e.laborContractStartDateTs) {
					this.rRIRDInfo.laborContractStartDate = utils.getDateString(e.laborContractStartDateTs);
				} else {
					this.rRIRDInfo.laborContractStartDate = '';
				}

				// 劳动合同终止日期
				if (e.laborContractEndDateTs) {
					this.rRIRDInfo.laborContractEndDate = utils.getDateString(e.laborContractEndDateTs);
				} else {
					this.rRIRDInfo.laborContractEndDate = '';
				}

				// 合同解除日期
				if (e.laborContractRelieveDateTs) {
					this.rRIRDInfo.laborContractRelieveDate = utils.getDateString(e.laborContractRelieveDateTs);
				} else {
					this.rRIRDInfo.laborContractRelieveDate = '';
				}

				// 试用起始日期
				if (e.hireStartDateTs) {
					this.rRIRDInfo.hireStartDate = utils.getDateString(e.hireStartDateTs);
				} else {
					this.rRIRDInfo.hireStartDate = '';
				}

				// 试用终止日期
				if (e.hireEndDateTs) {
					this.rRIRDInfo.hireEndDate = utils.getDateString(e.hireEndDateTs);
				} else {
					this.rRIRDInfo.hireEndDate = '';
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

		// ------------ 等待中心审批对话框 ------------
		// 关闭事件
		wCDDClose() {
			this.wCDDV = false;
		},

		// ======================== 劳动用工备案 ========================
		// ------------ 录入用工备案申报信息对话框 ------------
		// 显示
		tRRDIDVShow() {
			this.tRRDIDV = true;
		},
		// 新增用工备案按钮
		tRRDIDAddRecruit() {
			this.tRIDV = true;
		},
		// 申报提交按钮
		tRRDIDDeclareSubmit() {
			if (this.tRRDIDInfo.length == 0) {
				this.$message.warning('没有录入人员信息，不能提交中心审批');
			} else {
				this.wCDDInfo = this.tRRDIDInfo;
				this.wCDDV = true;
				this.$store.dispatch('entAddStaff', this.tRRDIDInfo);
				this.$message.success('提交成功');
			}
		},
		// 关闭事件
		tRRDIDClose() {
			this.tRRDIDV = false;
		},

		// ------------ 录入备案信息对话框 ------------
		// 保存按钮
		tRIDSave() {
			this.$refs.tRIDFormRef.validate(valid => {
				if (valid) {
					this.tRRDIDInfo.push(utils.deepClone(this.tRIDInfo));
					this.tRIDV = false;
					this.$refs.tRIDFormRef.resetFields();
					this.$message.success('保存成功');
				} else {
					this.$message.warning('请完善所有【必填】信息');
				}
			});
		},
		// 重置按钮
		tRIDReset() {
			this.$refs.tRIDFormRef.resetFields();
			this.$message.success('输入信息已重置');
		},
		// 关闭事件
		tRIDClose() {
			this.tRIDV = false;
		},

		// ======================== 劳动用工综合管理 ========================
		// ------------ 录入用工备案综合管理申报信息对话框 ------------
		// 显示
		tRRIMDIDShow() {
			alert('如需办理用工备案续签、变更等业务，请点击按钮【续签解除终止操作入口】！');
			this.tRRIMDIDV = true;
		},
		// 续签解除终止操作入口
		tRRIMDIDOperatEnter(e) {
			if (e == 3) {
				this.rRIRDV = true;
			}
		},
		// 申报提交按钮
		tRRIMDIDDeclareSubmit() {
			if (this.tRRIMDIDInfo.length == 0) {
				this.$message.warning('没有录入人员信息，不能提交中心审批');
			} else {
				this.wCDDInfo = this.tRRIMDIDInfo;
				this.wCDDV = true;
				this.$store.dispatch('entMinusStaff', this.tRRIMDIDInfo);
				this.$message.success('提交成功');
			}
		},
		// 关闭事件
		tRRIMDIDClose() {
			this.tRRIMDIDV = false;
		},

		// ------------ 用工备案信息解除对话框 ------------
		// 保存按钮
		rRIRDSave() {
			this.$refs.rRIRDFormRef.validate(valid => {
				if (valid) {
					this.tRRIMDIDInfo.push(utils.deepClone(this.rRIRDInfo));
					this.rRIRDV = false;
					this.$refs.rRIRDFormRef.resetFields();
					this.$message.success('保存成功');
				} else {
					this.$message.warning('请完善所有【必填】信息');
				}
			});
		},
		// 重置按钮
		rRIRDReset() {
			this.$refs.rRIRDFormRef.resetFields();
			this.$message.success('输入信息已重置');
		},
		// 关闭事件
		rRIRDClose() {
			this.rRIRDV = false;
		}
	}
};
</script>
