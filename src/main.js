import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js'; //引入 路由配置文件
import store from './store/index.js'; //引入 Vuex
import ElementUI from 'element-ui'; //引入 ElementUI
import 'element-ui/lib/theme-chalk/index.css'; //引入 ElementUI 样式
import './style/common.scss'; //引入 公共样式

Vue.config.productionTip = false; //关闭生产提示
Vue.use(ElementUI); //使用 ElementUI

// 设置 全局后置钩子
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
	}else{
		favicon.href = '/favicon.ico';
	}
	// 自动回顶
	window.scrollTo(0, 0);
});

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
