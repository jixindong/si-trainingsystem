<template>
	<div class="main">
		<!-- 系统办事大厅顶部 -->
		<sys-office-hall-hd />
		<!-- 系统办事大厅顶部 end -->

		<!-- 办事大厅tab切换 -->
		<div class="oHTab">
			<router-link class="oHLink hover" to="/sIOfficeHall/index">首页</router-link>
			<router-link class="oHLink hover" to="/sIOfficeHall/queryInfo">信息查询</router-link>
		</div>
		<!-- 办事大厅tab切换 end -->

		<!-- 办事大厅主体 -->
		<router-view />
		<!-- 办事大厅主体 end -->
	</div>
</template>

<script>
export default {
	name: 'SIOfficeHall',
	components: {
		SysOfficeHallHd: () => import('../components/sysOfficeHall/SysOfficeHallHd.vue') //系统办事大厅顶部
	}
};
</script>
