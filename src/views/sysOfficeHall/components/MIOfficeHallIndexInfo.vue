<template>
	<div class="oHIInfo fColumn">
		<!-- 顶部 -->
		<div class="hd">
			<img src="@/assets/company.png" />

			<div class="entMsg fColumn">
				<div>欢迎您，{{ entName }}！</div>
				<div class="functionBox fRow">
					<!-- 未提交申报 -->
					<div class="functionItem fRow">
						<img src="@/assets/unreadDoc.png" />
						<div class="tipText fColumn">
							<span class="sort">1条</span>
							<span>未提交申报</span>
						</div>
					</div>

					<!-- 正在审核申报 -->
					<div class="functionItem fRow">
						<img src="@/assets/readDoc.png" />
						<div class="tipText fColumn">
							<span class="sortII">0条</span>
							<span>正在审核申报</span>
						</div>
					</div>

					<!-- 审核完成未读申报 -->
					<div class="functionItem fRow">
						<img src="@/assets/docList.png" />
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
					<img src="@/assets/note.png" />
					<span>通知公告</span>
					<img class="hover" src="@/assets/more.png" />
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
					<img src="@/assets/teacup.png" />
					<span>待办事项</span>
					<img class="hover" src="@/assets/refresh.png" />
					<img class="hover" src="@/assets/more.png" />
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
				<img src="@/assets/putin.png" />
				<span>我的功能</span>
				<i class="el-icon-s-tools hover"></i>
			</div>
			<div class="contentBox">
				<div class="funBtn fColumn hover" title="在职增员">
					<img src="@/assets/addEmployee.png" />
					<span>在职增员</span>
				</div>
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
					title: '关于暂停受理职工基本医疗保险费单位缴纳业务的公告',
					date: '2020-02-28'
				},
				{
					title: '淄博高新区人力资源和社会保障局业务咨询电话公告',
					date: '2019-11-29'
				},
				{
					title: '通告',
					date: '2019-10-27'
				},
				{
					title: '需要重新签订银行代扣协议的重要通知',
					date: '2019-08-05'
				},
				{
					title: '全市医保缴费培训计划通知',
					date: '2019-07-22'
				},
				{
					title: '关于做好养老保险信息系统省集中和医疗保险信息系统移交工作有关问题的通知',
					date: '2019-07-17'
				},
				{
					title: '关于做好养老保险信息系统省集中和医疗保险信息系统移交工作有关问题的通知',
					date: '2019-07-17'
				},
				{
					title: '关于做好养老保险信息系统省集中和医疗保险信息系统移交工作有关问题的通知',
					date: '2019-07-17'
				}
			], //通知公告
			backlog: [
				{
					title: '录入【12456789 淄博问云软件技术有限公司】单位信息维护申报信息'
				},
				{
					title: '查看【12456789 淄博问云软件技术有限公司】减员职工缴费基数申报的审核结果'
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
