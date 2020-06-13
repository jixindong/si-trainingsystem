<template>
	<div class="oHBd">
		<!-- 办事大厅 主体-首页 侧边栏 -->
		<div class="oHBdSidebar fColumn">
			<router-link class="oHBdSidebarLink fRow hover" to="/mIOfficeHall/index/info">
				<img src="../../assets/stack.png" />
				<span>概况信息</span>
			</router-link>
			<router-link class="oHBdSidebarLink fRow hover" to="/mIOfficeHall/index/mI">
				<img src="../../assets/si.png" />
				<span>医疗保险</span>
			</router-link>
		</div>
		<!-- 办事大厅 主体-首页 侧边栏 end -->

		<!-- 办事大厅 主体-首页 面板 -->
		<router-view />
		<!-- 办事大厅 主体-首页 面板 end -->
	</div>
</template>
