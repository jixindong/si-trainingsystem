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
	routes: [
		{
			path:'/',
			redirect:'/sILogin'
		},
		//社保系统登录页面
		{
			path:'/sILogin',
			component:() => import('../views/SILogin.vue'),
			meta:{
				title:'单位网上服务 社保系统登录'
			}
		},
		//医保系统登录页面
		{
			path:'/mILogin',
			component:() => import('../views/MILogin.vue'),
			meta:{
				title:'单位网上服务 医保系统登录'
			}
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

// 3. 抛出 router 实例
export default router;
