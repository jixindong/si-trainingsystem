<template>
	<div class="sysOfficeHallHd fRow">
		<!-- logo -->
		<img src="../../assets/sysOfficeHallHdSILogo.png" v-if="currentSign == 's'" />
		<img src="../../assets/sysOfficeHallHdMILogo.png" v-if="currentSign == 'm'" />
		<!-- logo end -->

		<!-- 账号设置 下拉菜单 -->
		<el-dropdown trigger="click" @command="accountSettings">
			<span class="accountSettingsBtn hover">
				<span>账号设置</span>
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="0">
					<i class="el-icon-unlock"></i>
					<span>修改密码</span>
				</el-dropdown-item>
				<el-dropdown-item command="1">
					<i class="el-icon-office-building"></i>
					<span>单位信息</span>
				</el-dropdown-item>
				<el-dropdown-item command="2">
					<i class="el-icon-switch-button"></i>
					<span>退出</span>
				</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<!-- 账号设置 下拉菜单 end -->

		<!-- 修改密码 对话框 -->
		<el-dialog title="修改密码" width="800px" :visible.sync="cPDV" :before-close="cPDClose">
			<el-form :model="iPassword" :rules="passwordRules" ref="passwordRef" label-width="100px" status-icon>
				<el-form-item label="原密码" prop="iOPassword" required>
					<el-input type="password" placeholder="请输入原密码" v-model="iPassword.iOPassword"></el-input>
				</el-form-item>
				<el-form-item label="新密码" prop="iNPassword" required>
					<el-input type="password" placeholder="请输入新密码" v-model="iPassword.iNPassword"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="iCNPassword" required>
					<el-input type="password" placeholder="请输入确认密码" v-model="iPassword.iCNPassword"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitPF()">确认修改</el-button>
					<el-button @click="resetPF()">重置</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<!-- 修改密码 对话框 end -->

		<!-- 单位信息 对话框 -->
		<el-dialog title="单位信息" width="800px" :visible.sync="cIDV" :before-close="cIDClose" custom-class="centInfoDialog">
			<el-form label-width="100px">
				<el-form-item label="单位名称"><el-input type="text" value="淄博问云软件技术有限公司" size="mini"></el-input></el-form-item>

				<el-col :span="12">
					<el-form-item label="开通时间"><el-input type="text" value="2017-01-12" size="mini"></el-input></el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="组织机构代码"><el-input type="text" value="91370303060449475K" size="mini"></el-input></el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="专管员姓名"><el-input type="text" value="张三" size="mini"></el-input></el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="专管员电话"><el-input type="text" value="12345678910" size="mini"></el-input></el-form-item>
				</el-col>
			</el-form>

			<el-button class="updateInfoBtn" size="mini">基于社保更新单位信息</el-button>

			<el-table :data="entInfoTb" height="217" size="mini" border :header-cell-style="{ color: '#0094ff' }">
				<el-table-column prop="id" label="No." width="50"></el-table-column>
				<el-table-column prop="businessScope" label="业务领域"></el-table-column>
				<el-table-column prop="entName" label="单位名称"></el-table-column>
				<el-table-column prop="hlInsName" label="经办机构名称"></el-table-column>
			</el-table>
		</el-dialog>
		<!-- 单位信息 对话框 end -->
	</div>
</template>

<script>
export default {
	name: 'SysOfficeHallHd',
	data() {
		// 原密码 用户输入 校验规则
		let vOP = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入原密码'));
			} else if (value != this.oPassword) {
				callback(new Error('原密码错误'));
			} else {
				callback();
			}
		};
		// 新密码 用户输入 校验规则
		let vNP = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入新密码'));
			} else if (value.length < 6 || value.length > 16) {
				callback(new Error('密码长度应为6到16位'));
			} else if (value == this.oPassword) {
				callback(new Error('新旧密码不能一样'));
			} else {
				callback();
			}
		};
		// 确认密码 用户输入 校验规则
		let vCNP = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入确认密码'));
			} else if (value != this.iPassword.iNPassword) {
				callback(new Error('两次输入不一致'));
			} else {
				callback();
			}
		};
		return {
			currentSign: '', //当前页面标识 s=社保,m=医保
			cPDV: false, //修改密码 对话框 显示
			iPassword: {
				iOPassword: '', //原密码 用户输入
				iNPassword: '', //新密码 用户输入
				iCNPassword: '' //确认密码 用户输入
			}, //密码 用户输入
			passwordRules: {
				iOPassword: [{ required: true, message: '请输入原密码', trigger: 'change' }, { validator: vOP, trigger: 'blur' }], //原密码 用户输入
				iNPassword: [{ required: true, message: '请输入新密码', trigger: 'change' }, { validator: vNP, trigger: 'blur' }], //新密码 用户输入
				iCNPassword: [{ required: true, message: '请输入确认密码', trigger: 'change' }, { validator: vCNP, trigger: 'blur' }] //确认密码 用户输入
			}, //密码校验规则
			cIDV: false, //单位信息 对话框 显示
			entInfoTb: [
				{
					id: 1,
					businessScope: '社会保险',
					entName: '淄博问云软件技术有限公司',
					hlInsName: '淄博市高新区社会保险事业处'
				}
			] //单位信息 表格
		};
	},
	computed: {
		// 原密码
		oPassword() {
			return this.$store.state.entInfo.entAccount.password;
		}
	},
	methods: {
		// 设置当前页面标识
		setCurrentSign() {
			if (this.$route.fullPath.indexOf('/sIOfficeHall') != -1) {
				this.currentSign = 's';
			} else if (this.$route.fullPath.indexOf('/mIOfficeHall') != -1) {
				this.currentSign = 'm';
			}
		},
		// 账号设置
		accountSettings(e) {
			if (e == 0) {
				// 修改密码
				this.cPDV = true;
			} else if (e == 1) {
				// 单位信息
				this.cIDV = true;
			} else {
				// 退出
				this.$confirm('确认退出？', '退出', {
					confirmButtonText: '退出',
					cancelButtonText: '取消',
					type: 'info'
				})
					.then(() => {
						this.$message.success('退出成功');

						if (this.currentSign == 's') {
							this.$router.push({ path: '/sILogin' });
						} else if (this.currentSign == 'm') {
							this.$router.push({ path: '/mILogin' });
						}
					})
					.catch(() => {
						this.$message.info('操作已取消');
					});
			}
		},
		// 修改密码 对话框 关闭前的回调
		cPDClose(done) {
			this.$confirm('确认关闭？', '提示', {
				confirmButtonText: '关闭',
				cancelButtonText: '取消',
				type: 'info'
			})
				.then(() => {
					this.$refs.passwordRef.resetFields();
					done();
				})
				.catch(() => {});
		},
		// 修改密码 对话框 确认修改按钮
		submitPF() {
			this.$refs.passwordRef.validate(valid => {
				if (valid) {
					this.cPDV = false; //修改密码 对话框 显示
					this.$message.success('修改密码成功，请重新登录');
					this.$store.dispatch('modifyPassword', this.iPassword.iNPassword); //修改密码

					if (this.currentSign == 's') {
						this.$router.push({ path: '/sILogin' });
					} else if (this.currentSign == 'm') {
						this.$router.push({ path: '/mILogin' });
					}
				} else {
					this.$message.error('修改密码失败');
				}
			});
		},
		// 修改密码 对话框 重置按钮
		resetPF() {
			this.$refs.passwordRef.resetFields();
			this.$message.success('输入信息已重置');
		},
		// 单位信息 对话框 关闭前的回调
		cIDClose(done) {
			this.$confirm('确认关闭？', '提示', {
				confirmButtonText: '关闭',
				cancelButtonText: '取消',
				type: 'info'
			})
				.then(() => {
					done();
				})
				.catch(() => {});
		}
	},
	mounted() {
		// 设置当前页面标识
		this.setCurrentSign();
	}
};
</script>

<style lang="scss" scoped>
.sysOfficeHallHd {
	justify-content: space-between;
	padding: 0 90px 0 50px;
	min-width: 1200px;
	height: 64px;
	background: url(../../assets/sysOfficeHallHdBg.png) repeat-x;
	.accountSettingsBtn {
		color: #fff;
		outline: 0 none;
	}
	// 单位信息 对话框
	.centInfoDialog {
		.el-form .el-form-item {
			margin-bottom: 10px;
		}
		.updateInfoBtn {
			margin: 0 0 20px 608px;
		}
	}
	// 单位信息 对话框 end
}
</style>
