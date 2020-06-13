<template>
	<div class="oHBd">
		<!-- 办事大厅 主体-信息查询 侧边栏 -->
		<div class="sidebar">
			<el-scrollbar>
				<el-tree :data="menu" :props="menuProps" highlight-current accordion @node-click="menuNodeClick">
					<span slot-scope="{ node, data }">
						<img class="nodeImg" :src="data.img" />
						<span class="nodeText" :title="node.label">{{ node.label }}</span>
					</span>
				</el-tree>
			</el-scrollbar>
		</div>
		<!-- 办事大厅 主体-信息查询 侧边栏 -->

		<!-- 办事大厅 主体-信息查询 面板 -->
		<div class="oHQPanel">
			<!-- ======================== 医疗保险 ======================== -->
			<!-- 单位信息 -->
			<div v-show="panelSort == '1.1'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位信息查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 单位信息 end -->

			<!-- 单位人员 -->
			<div v-show="panelSort == '1.2'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位人员查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 单位人员 end -->

			<!-- 人员增减情况 -->
			<div v-show="panelSort == '1.3'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>人员增减情况查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 人员增减情况 end -->

			<!-- 单位缴费情况 -->
			<div v-show="panelSort == '1.4'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位缴费情况</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 单位缴费情况 end -->

			<!-- 打印单位参保证明 -->
			<div v-show="panelSort == '1.5'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>打印单位参保证明</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 打印单位参保证明 end -->

			<!-- 人员缴费情况 -->
			<div v-show="panelSort == '1.6'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>人员缴费情况</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 人员缴费情况 end -->

			<!-- 缴费单据查询 -->
			<div v-show="panelSort == '1.7'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>缴费单据查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 缴费单据查询 end -->

			<!-- 发票邮寄地址维护 -->
			<div v-show="panelSort == '1.8'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>发票邮寄地址维护</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 发票邮寄地址维护 end -->

			<!-- 单位生育已拨付 -->
			<div v-show="panelSort == '1.9'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>单位生育已拨付</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 单位生育已拨付 end -->

			<!-- 慢性病职工查询 -->
			<div v-show="panelSort == '1.10'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>慢性病职工查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 慢性病职工查询 end -->

			<!-- 住院职工查询 -->
			<div v-show="panelSort == '1.11'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>住院职工查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 住院职工查询 end -->

			<!-- 申报打印 -->
			<div v-show="panelSort == '1.12'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>申报打印</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 申报打印 end -->
			<!-- ======================== 医疗保险 end ======================== -->

			<!-- ======================== 申报查询 ======================== -->
			<!-- 申报 -->
			<div v-show="panelSort == '2'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>申报查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 申报 end -->

			<!-- 未提交 -->
			<div v-show="panelSort == '2.1'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>未提交</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 未提交 end -->

			<!-- 正在审核 -->
			<div v-show="panelSort == '2.2'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>正在审核</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 正在审核 end -->

			<!-- 审核完成 -->
			<div v-show="panelSort == '2.3'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>审核完成</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 审核完成 end -->

			<!-- 审核完成未读 -->
			<div v-show="panelSort == '2.3.1'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>审核完成未读</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 审核完成未读 end -->

			<!-- 审核完成已读 -->
			<div v-show="panelSort == '2.3.2'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>审核完成已读</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- 审核完成已读 end -->
			<!-- ======================== 申报查询 end ======================== -->

			<!-- ======================== 消息查询 ======================== -->
			<div v-show="panelSort == '3'">
				<div class="titleBox fRow">
					<img class="mgR10" src="../../assets/edit.png" />
					<span>消息查询</span>
				</div>

				<div class="contentBox"></div>
			</div>
			<!-- ======================== 消息查询 end ======================== -->
		</div>
		<!-- 办事大厅 主体-信息查询 面板 end -->
	</div>
</template>

<script>
export default {
	name: 'MIOfficeHallQueryInfo',
	data() {
		return {
			// ------------------------ 侧边栏-菜单 ------------------------
			menu: [
				{
					id: '1',
					label: '医疗保险',
					img: require('../../assets/si2.png'),
					children: [
						{
							id: '1.1',
							label: '单位信息查询',
							img: require('../../assets/architecture.png')
						},
						{
							id: '1.2',
							label: '单位人员查询',
							img: require('../../assets/editorialStaff.png')
						},
						{
							id: '1.3',
							label: '人员增减情况查询',
							img: require('../../assets/editorialStaff.png')
						},
						{
							id: '1.4',
							label: '单位缴费情况',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.5',
							label: '打印单位参保证明',
							img: require('../../assets/printer.png')
						},
						{
							id: '1.6',
							label: '人员缴费情况',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.7',
							label: '缴费单据查询',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.8',
							label: '发票邮寄地址维护',
							img: require('../../assets/bill.png')
						},
						{
							id: '1.9',
							label: '单位生育已拨付',
							img: require('../../assets/person.png')
						},
						{
							id: '1.10',
							label: '慢性病职工查询',
							img: require('../../assets/miBill.png')
						},
						{
							id: '1.11',
							label: '住院职工查询',
							img: require('../../assets/miBill.png')
						},
						{
							id: '1.12',
							label: '申报打印',
							img: require('../../assets/printer.png')
						}
					]
				},
				{
					id: '2',
					label: '申报查询',
					img: require('../../assets/find.png'),
					children: [
						{
							id: '2.1',
							label: '未提交',
							img: require('../../assets/magnifyingGlass.png')
						},
						{
							id: '2.2',
							label: '正在审核',
							img: require('../../assets/magnifyingGlass.png')
						},
						{
							id: '2.3',
							label: '审核完成',
							img: require('../../assets/magnifyingGlass.png'),
							children: [
								{
									id: '2.3.1',
									label: '审核完成未读',
									img: require('../../assets/magnifyingGlass.png')
								},
								{
									id: '2.3.2',
									label: '审核完成已读',
									img: require('../../assets/magnifyingGlass.png')
								}
							]
						}
					]
				},
				{
					id: '3',
					label: '消息查询',
					img: require('../../assets/si2.png')
				}
			],
			menuProps: {
				label: 'label',
				children: 'children'
			},

			// ------------------------ 面板 ------------------------
			panelSort: '' //显示面板种类
		};
	},
	methods: {
		// 菜单节点 点击
		menuNodeClick(e) {
			this.panelSort = e.id;
		}
	}
};
</script>
