<template>
	<div class="oHBd">
		<!-- 办事大厅 主体-首页 侧边栏 -->
		<div class="oHBdSidebar fColumn">
			<router-link class="oHBdSidebarLink fRow hover" to="/sIOfficeHall/index/info">
				<img src="../../assets/stack.png" />
				<span>概况信息</span>
			</router-link>
			<router-link class="oHBdSidebarLink fRow hover" to="/sIOfficeHall/index/sI">
				<img src="../../assets/si.png" />
				<span>社会保险</span>
			</router-link>
			<router-link class="oHBdSidebarLink fRow hover" to="/sIOfficeHall/index/lR">
				<img src="../../assets/userList.png" />
				<span>劳动关系</span>
			</router-link>
		</div>
		<!-- 办事大厅 主体-首页 侧边栏 end -->

		<!-- 办事大厅 主体-首页 面板 -->
		<router-view />
		<!-- 办事大厅 主体-首页 面板 end -->
	</div>
</template>
