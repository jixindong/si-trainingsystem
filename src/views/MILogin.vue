<template>
	<div class="main sysLogin">
		<!-- 系统登录顶部栏 -->
		<sys-login-hd-bar />
		<!-- 系统登录顶部栏 end -->

		<div class="container">
			<!-- 系统登录banner -->
			<div class="sysLoginBanner"><img src="../assets/sysLoginMILogo.png" /></div>
			<!-- 系统登录banner end -->

			<!-- 系统登录主体 -->
			<sys-login-bd />
			<!-- 系统登录主体 end -->
		</div>

		<!-- 系统登录底部栏 -->
		<sys-login-ft-bar />
		<!-- 系统登录底部栏 end -->
	</div>
</template>

<script>
export default {
	name: 'SILogin',
	components: {
		SysLoginHdBar: () => import('../components/sysLogin/SysLoginHdBar.vue'), //系统登录顶部栏
		SysLoginBd: () => import('../components/sysLogin/SysLoginBd.vue'), //系统登录主体
		SysLoginFtBar: () => import('../components/sysLogin/SysLoginFtBar.vue') //系统登录底部栏
	}
};
</script>
