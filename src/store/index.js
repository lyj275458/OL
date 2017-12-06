/**
 * Created by Yan on 17/11/09.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
})

export default store
