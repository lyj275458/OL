import Vue from 'vue';
import Vuex from 'vuex';
import appShell from './app-shell';
Vue.use(Vuex);
//全局的为维护老页面，新的全部用appShell命名空间下的
export default new Vuex.Store({
	state:{
	  ajaxObj:{},
	  documentTitle:'',
	  applyObj:{},
	},
	mutations: {		
		//通用标题设置 
		documentTitle(state,val){
			state.documentTitle = val;
		},
		//控制全局loading
		ajaxObj (state, obj) {
			console.log(obj)
	    	state.ajaxObj = obj;
	    },
		applyObj(state,val){
			state.applyObj = val;
		},
	},
	//
    modules: {
        appShell
    }
});

