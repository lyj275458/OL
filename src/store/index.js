/**
 * Created by Yan on 17/11/09.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import servers from './modules/servers'

Vue.use(Vuex)
const store = new Vuex.Store({
  namespaced: true,//命名空间模块
  state,
  mutations,
  actions,
  getters,
  modules: {
    servers : servers
  }
})

export default store
