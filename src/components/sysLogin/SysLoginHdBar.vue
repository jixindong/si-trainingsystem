<template>
	<div class="sysLoginHdBar">
		<div class="container fRow">
			<span>{{ currentTime }}</span>
			<span>{{ week }}</span>
			<span class="hover">加入收藏</span>
			<span>|</span>
			<span class="hover">设为首页</span>
			<span>|</span>
			<span class="hover">淄博市人社局网站</span>

			<el-dropdown trigger="click" @command="setting">
				<span class="setting hover"></span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="0">刷新 F5</el-dropdown-item>
					<el-dropdown-item command="1" v-show="currentSign == 's'">切换为【医保】地址</el-dropdown-item>
					<el-dropdown-item command="2" v-show="currentSign == 'm'">切换为【社保】地址</el-dropdown-item>
					<el-dropdown-item command="3">清除Cookie</el-dropdown-item>
					<el-dropdown-item command="4">开发者工具 F12</el-dropdown-item>
					<el-dropdown-item command="5">插件管理</el-dropdown-item>
					<el-dropdown-item command="6">关于</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SysLoginHdBar',
	data: function() {
		return {
			currentTime: '', //当前时间
			week: '', //当前星期几
			currentSign: '' //当前页面标识 s=社保,m=医保
		};
	},
	methods: {
		// 获取当前时间
		getCurrentTime() {
			let date = new Date();
			let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
			this.currentTime = date.getFullYear() + '年' + (parseInt(date.getMonth()) + 1) + '月' + date.getDate() + '日';
			this.week = weeks[date.getDay()];
		},
		// 设置当前页面标识
		setCurrentSign() {
			if(this.$route.fullPath == '/sILogin'){
				this.currentSign = 's';
			}else if(this.$route.fullPath == '/mILogin'){
				this.currentSign = 'm';
			}
		},
		// 设置按钮
		setting(e) {
			if (e == 0) {
				// 刷新
				location.reload();
			} else if (e == 1) {
				// 切换为【医保】地址
				this.$router.push({
					path: '/mILogin'
				});
				// 设置当前页面标识
				this.setCurrentSign();
			} else if (e == 2) {
				// 切换为【社保】地址
				this.$router.push({
					path: '/sILogin'
				});
				// 设置当前页面标识
				this.setCurrentSign();
			}else if(e == 3){
				// 清除Cookie
				this.$message.success('痕迹已清除');
			}else if(e == 6){
				// 关于
				this.$alert('当前版本 V1.1.3','关于',{
					confirmButtonText:'关闭'
				});
			}
		}
	},
	mounted() {
		// 获取当前时间
		this.getCurrentTime();
		// 设置当前页面标识
		this.setCurrentSign();
	}
};
</script>

<style lang="scss" scoped>
.sysLoginHdBar {
	color: #fff;
	font-size: 14px;
	font-weight: 300;
	background-color: #016eee;
	span {
		margin: 4px 8px;
		&:nth-of-type(3) {
			margin-left: auto;
		}
		&:nth-last-of-type(4),
		&:nth-of-type(6) {
			pointer-events: none;
		}
	}
	.setting {
		position: relative;
		top: 2px;
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(../../assets/setting.png) center/cover no-repeat;
	}
}
</style>
