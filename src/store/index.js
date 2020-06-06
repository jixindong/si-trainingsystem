import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';

// 调用 Vuex
Vue.use(Vuex);

// 2. 创建 Vuex 实例
const store = new Vuex.Store({
	state:{},
	getters:{},
	mutations:{},
	actions:{},
	plugins: [persistedState({
		storage: window.sessionStorage
	})]
});

// 3. 抛出 Vuex 实例
export default store;