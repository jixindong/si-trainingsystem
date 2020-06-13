// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 VueRouter
import Vue from "vue";
import VueRouter from "vue-router";

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error);
};

// 调用 VueRouter
Vue.use(VueRouter);

// 2. 创建 router 实例，配置 `routes`
const router = new VueRouter({
	mode: 'history',
	routes: [{
			path: '/',
			redirect: '/sILogin'
		},
		//社保系统登录页面
		{
			path: '/sILogin',
			component: () => import('../views/SILogin.vue'),
			meta: {
				title: '单位网上服务 社保系统登录'
			}
		},
		//医保系统登录页面
		{
			path: '/mILogin',
			component: () => import('../views/MILogin.vue'),
			meta: {
				title: '单位网上服务 医保系统登录'
			}
		},
		// 社保办事大厅页面
		{
			path: '/sIOfficeHall',
			redirect: '/sIOfficeHall/index',
			component: () => import('../views/SIOfficeHall.vue'),
			children: [
				// 社保办事大厅页面 首页组件
				{
					path: '/sIOfficeHall/index',
					redirect: '/sIOfficeHall/index/info',
					component: () => import('../components/sysOfficeHall/SIOfficeHallIndex.vue'),
					children: [
						// 社保办事大厅页面 首页组件 概况信息组件
						{
							path: '/sIOfficeHall/index/info',
							component: () => import('../components/sysOfficeHall/SIOfficeHallIndexInfo.vue'),
							meta: {
								title: '社保办事大厅 概况信息'
							}
						},
						// 社保办事大厅页面 首页组件 社会保险组件
						{
							path: '/sIOfficeHall/index/sI',
							component: () => import('../components/sysOfficeHall/SIOfficeHallIndexSI.vue'),
							meta: {
								title: '社保办事大厅 社会保险'
							}
						},
						// 社保办事大厅页面 首页组件 劳动关系组件
						{
							path: '/sIOfficeHall/index/lR',
							component: () => import('../components/sysOfficeHall/SIOfficeHallIndexLR.vue'),
							meta: {
								title: '社保办事大厅 劳动关系'
							}
						}
					]
				},
				// 社保办事大厅页面 信息查询组件
				{
					path: '/sIOfficeHall/queryInfo',
					component: () => import('../components/sysOfficeHall/SIOfficeHallQueryInfo.vue'),
					meta: {
						title: '社保办事大厅 信息查询'
					}
				}
			]
		},
		// 医保办事大厅页面
		{
			path: '/mIOfficeHall',
			redirect: '/mIOfficeHall/index',
			component: () => import('../views/MIOfficeHall.vue'),
			children: [
				// 医保办事大厅页面 首页组件
				{
					path: '/mIOfficeHall/index',
					redirect: '/mIOfficeHall/index/info',
					component: () => import('../components/sysOfficeHall/MIOfficeHallIndex.vue'),
					children: [
						// 医保办事大厅页面 首页组件 概况信息组件
						{
							path: '/mIOfficeHall/index/info',
							component: () => import('../components/sysOfficeHall/MIOfficeHallIndexInfo.vue'),
							meta: {
								title: '医保办事大厅 概况信息'
							}
						},
						// 医保办事大厅页面 首页组件 医疗保险组件
						{
							path: '/mIOfficeHall/index/mI',
							component: () => import('../components/sysOfficeHall/MIOfficeHallIndexMI.vue'),
							meta: {
								title: '医保办事大厅 医疗保险'
							}
						}
					]
				},
				// 医保办事大厅页面 信息查询组件
				{
					path: '/mIOfficeHall/queryInfo',
					component: () => import('../components/sysOfficeHall/MIOfficeHallQueryInfo.vue'),
					meta: {
						title: '医保办事大厅 信息查询'
					}
				}
			]
		},
		//404页面
		{
			path: '*',
			component: () => import('../views/Error.vue'),
			meta: {
				title: '404',
				favicon: require('../assets/404.png')
			}
		}
	]
});

// 全局后置钩子
router.afterEach((to) => {
	// 设置 title
	if (to.meta.title) {
		document.title = to.meta.title;
	} else {
		document.title = '单位网上办事大厅';
	}

	// 设置 favicon
	let favicon = document.querySelector('link[rel="icon"]');
	if (to.meta.favicon) {
		favicon.href = to.meta.favicon;
	} else {
		favicon.href = './favicon.ico';
	}

	// 自动回顶
	window.scrollTo(0, 0);
});

// 3. 抛出 router 实例
export default router;
