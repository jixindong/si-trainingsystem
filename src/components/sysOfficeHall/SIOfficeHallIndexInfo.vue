<template>
	<div class="oHIInfo fColumn">
		<!-- 顶部 -->
		<div class="hd">
			<img src="../../assets/company.png" />

			<div class="entMsg fColumn">
				<div>欢迎您，{{ entName }}！</div>
				<div class="functionBox fRow">
					<!-- 未提交申报 -->
					<div class="functionItem fRow">
						<img src="../../assets/unreadDoc.png" />
						<div class="tipText fColumn">
							<span class="sort">1条</span>
							<span>未提交申报</span>
						</div>
					</div>

					<!-- 正在审核申报 -->
					<div class="functionItem fRow">
						<img src="../../assets/readDoc.png" />
						<div class="tipText fColumn">
							<span class="sortII">0条</span>
							<span>正在审核申报</span>
						</div>
					</div>

					<!-- 审核完成未读申报 -->
					<div class="functionItem fRow">
						<img src="../../assets/docList.png" />
						<div class="tipText fColumn">
							<span class="sortIII">2条</span>
							<span>审核完成未读申报</span>
						</div>
					</div>
				</div>
			</div>

			<div class="laborNotice fColumn">
				<div class="notice">
					本月到期合同工：
					<span>0</span>
				</div>
				<div class="notice">
					本月用工备案审核不通过：
					<span>0</span>
				</div>
			</div>
		</div>
		<!-- 顶部 end -->

		<!-- 中部 -->
		<div class="bd fRow">
			<!-- 通知公告 -->
			<div class="msgBox mgR10">
				<div class="titleBox fRow">
					<img src="../../assets/note.png" />
					<span>通知公告</span>
					<img class="hover" src="../../assets/more.png" />
				</div>
				<div class="contentBox">
					<div class="msgItem fRow" v-for="(item, index) in notice" :key="index">
						<span class="textEllipsis hover" :title="item.title">{{ item.title }}</span>
						<span>{{ item.date }}</span>
					</div>
				</div>
			</div>

			<!-- 待办事项 -->
			<div class="msgBox">
				<div class="titleBox fRow">
					<img src="../../assets/teacup.png" />
					<span>待办事项</span>
					<img class="hover" src="../../assets/refresh.png" />
					<img class="hover" src="../../assets/more.png" />
				</div>
				<div class="contentBox">
					<div class="msgItem fRow" v-for="(item, index) in backlog" :key="index">
						<span class="hover" :title="item.title">{{ item.title }}</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 中部 end -->

		<!-- 底部 -->
		<div class="ft fColumn">
			<div class="titleBox fRow">
				<img src="../../assets/putin.png" />
				<span>我的功能</span>
				<i class="el-icon-s-tools hover"></i>
			</div>
		</div>
		<!-- 底部 end -->
	</div>
</template>

<script>
export default {
	name: 'SIOfficeHallIndexInfo',
	data() {
		return {
			notice: [
				{
					title: '关于转发《山东省人力资源和社会保障厅转发的通知》的通知',
					date: '2020-06-04'
				},
				{
					title: '关于对稳岗返还结果进行确认的通知(市直各参保企业)',
					date: '2020-06-03'
				},
				{
					title: '浏览器网银拦截问题处理方法',
					date: '2020-05-29'
				},
				{
					title: '关于报送企业职工档案的通知',
					date: '2020-05-28'
				},
				{
					title: '关于开展2020年度社会保险征缴稽核工作的通知（桓台县社保中心）',
					date: '2020-05-26'
				}
			], //通知公告
			backlog: [
				{
					title: '查看【12456789 淄博问云软件技术有限公司】减员职工缴费基数申报的审核结果'
				},
				{
					title: '录入【12456789 淄博问云软件技术有限公司】单位信息维护的申报信息'
				},
				{
					title: '查看【12456789 淄博问云软件技术有限公司】缴费申报的应缴信息'
				}
			] //待办事项
		};
	},
	computed: {
		// 公司名称
		entName() {
			return this.$store.state.entInfo.entBasicInfo.entName;
		}
	}
};
</script>
