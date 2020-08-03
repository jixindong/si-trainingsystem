<template>
	<div class="sysLoginBd fColumn">
		<!-- 用户登录 -->
		<div class="loginWrapper">
			<div class="loginBox">
				<div class="title">单位用户登录</div>
				<div class="subtitle">用户编号：</div>
				<input type="text" v-model="iAccount" autocomplete="off"/>
				<div class="subtitle">密码：</div>
				<input type="password" v-model="iPassword" autocomplete="off"/>
				<div class="subtitle">验证码：</div>
				<div class="vCodeBox">
					<input type="text" name="iVCode" maxlength="4" v-model="iVCode" autocomplete="off"/>
					<img class="vCodeImg" src="@/assets/verificationCode.png" />
				</div>
				<div class="loginBtn hover" @click="login()">登录</div>
			</div>
		</div>
		<!-- 用户登录 end -->

		<!-- 信息公告栏 -->
		<div class="message">
			<!-- 通知公告 -->
			<div class="msgBox fColumn">
				<div class="titleBox fRow">
					<div class="title fRow">
						<img src="@/assets/notice.png" />
						<span>通知公告</span>
					</div>
					<span class="more hover">更多>></span>
				</div>
				<div class="contentBox fColumn">
					<div class="msg fRow" v-for="(item, index) in notice" :key="index">
						<span class="title hover" :title="item.title">{{ item.title }}</span>
						<span>{{ item.date }}</span>
					</div>
				</div>
			</div>

			<!-- 常用下载 -->
			<div class="msgBox fColumn">
				<div class="titleBox fRow">
					<div class="title fRow">
						<img src="@/assets/download.png" />
						<span>常用下载</span>
					</div>
					<span class="more hover">更多>></span>
				</div>
				<div class="contentBox fColumn">
					<div class="msg fRow" v-for="(item, index) in commonDownload" :key="index">
						<span class="title hover" :title="item.title">{{ item.title }}</span>
						<span>{{ item.date }}</span>
					</div>
				</div>
			</div>

			<!-- 常见问题 -->
			<div class="msgBox fColumn">
				<div class="titleBox fRow">
					<div class="title fRow">
						<img src="@/assets/repair.png" />
						<span>常见问题</span>
					</div>
					<span class="more hover">更多>></span>
				</div>
				<div class="contentBox fColumn">
					<div class="msg fRow" v-for="(item, index) in commonIssue" :key="index">
						<span class="title hover" :title="item.title">{{ item.title }}</span>
						<span>{{ item.date }}</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 信息公告栏 end -->
	</div>
</template>

<script>
export default {
	name: 'SysLoginBd',
	data: function() {
		return {
			iAccount: '', //账号 用户输入
			iPassword: '', //密码 用户输入
			iVCode: '', //验证码 用户输入
			notice: [
				{
					title: '关于转发《山东省人力资源和社会保障厅转发的通知》的通知',
					date: '06-04'
				},
				{
					title: '关于对稳岗返还结果进行确认的通知(市直各参保企业)',
					date: '06-03'
				},
				{
					title: '浏览器网银拦截问题处理方法',
					date: '05-29'
				},
				{
					title: '关于报送企业职工档案的通知',
					date: '05-28'
				},
				{
					title: '关于开展2020年度社会保险征缴稽核工作的通知（桓台县社保中心）',
					date: '05-26'
				}
			], //通知公告
			commonDownload: [
				{
					title: '关于淄川区单位领取电子社保卡的通知',
					date: '05-20'
				},
				{
					title: '社会保险费延缴缓缴申报表',
					date: '09-07'
				},
				{
					title: '关于2018年度参保单位申报缴纳社会保险费基数的通知（淄社险发【2018】34号）',
					date: '06-29'
				},
				{
					title: '关于公布企业职工中独生子女父母退休一次性养老补助计发基数的通知（淄人社字【2018】173号）',
					date: '06-29'
				},
				{
					title: '关于公布2018年度职工社会保险缴费及计发待遇基数的通知（淄人社字【2018】172号）',
					date: '06-29'
				}
			], //常用下载
			commonIssue: [
				{
					title: '系统运行说明',
					date: '10-30'
				}
			] //常见问题
		};
	},
	computed: {
		// 账号
		account() {
			return this.$store.state.entInfo.entAccount.accountName;
		},
		// 密码
		password() {
			return this.$store.state.entInfo.entAccount.password;
		}
	},
	methods: {
		login() {
			if (this.iAccount != this.account || this.iPassword != this.password) {
				this.$message.warning('账号或密码错误');
			} else if (this.iVCode != '6060') {
				this.$message.warning('验证码错误');
			} else {
				this.$message.success('登陆成功');

				if (this.$route.fullPath == '/sILogin') {
					this.$router.push({ path: '/sIOfficeHall' });
				} else if (this.$route.fullPath == '/mILogin') {
					this.$router.push({ path: '/mIOfficeHall' });
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.sysLoginBd {
	margin-bottom: 30px;
	.loginWrapper {
		width: 984px;
		min-width: 984px;
		height: 420px;
		background: url(../../../assets/sysLoginImg.png) center/cover no-repeat;
		box-shadow: 0 1px 3px #ccc;
		.loginBox {
			position: relative;
			top: 20px;
			display: flex;
			flex-flow: column nowrap;
			margin: 0 20px 0 auto;
			padding: 30px 40px;
			width: 350px;
			height: 380px;
			font-size: 14px;
			background-color: rgba(255, 255, 255, 0.6);
			box-shadow: 0 1px 3px #ccc;
			.title {
				color: #0094ff;
				font-size: 26px;
			}
			.subtitle {
				margin: 10px 0;
				color: #666;
				font-weight: bold;
			}
			select,
			input {
				padding: 10px;
				width: 100%;
				background-color: #fff;
				border: 0 none;
				box-shadow: 0 1px 3px #ccc;
			}
			.vCodeBox {
				display: flex;
				align-items: center;
				input[name='iVCode'] {
					width: 80px;
				}
				.vCodeImg {
					margin-left: 10px;
					width: 80px;
					height: 30px;
				}
			}
			.loginBtn {
				margin-top: 20px;
				padding: 6px 0;
				color: #fff;
				font-size: 18px;
				text-align: center;
				background-color: #0094ff;
				box-shadow: 0 1px 3px #ccc;
			}
		}
	}
	.message {
		display: flex;
		justify-content: space-between;
		width: 100%;
		.msgBox {
			justify-content: flex-start;
			margin: 10px 0;
			width: 330px;
			.titleBox {
				justify-content: space-between;
				padding: 5px;
				width: 100%;
				color: #015fe7;
				font-weight: bold;
				border-bottom: 2px solid #a6a7a7;
				.title {
					position: relative;
					&::after {
						position: absolute;
						bottom: -7px;
						left: -4px;
						width: 126px;
						height: 2px;
						content: '';
						background-color: #015ef7;
					}
					span {
						margin: 0 10px;
					}
				}
				.more {
					font-size: 14px;
					font-weight: normal;
				}
			}
			.contentBox {
				align-items: flex-start;
				padding: 20px 10px 20px 30px;
				width: 100%;
				.msg {
					position: relative;
					justify-content: space-between;
					margin: 5px 0;
					width: 100%;
					color: #666;
					font-size: 14px;
					font-weight: 300;
					&::before {
						position: absolute;
						top: 6px;
						left: -15px;
						width: 6px;
						height: 6px;
						content: '';
						background-color: #aaa;
						border-radius: 50%;
					}
					.title {
						max-width: 220px;
						color: #333;
						font-weight: 400;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
			}
		}
	}
}
</style>
