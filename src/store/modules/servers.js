/*
*created by Yan on 17/12/13
*/
/*分模块开发，避免项目过大，导致单独store过去臃肿，状态都放在一个state对象里了，（当应用变得非常复杂时，store 对象就有可能变得相当臃肿。）
* 项目的某一个模块的状态都放在这里，便于管理，结构清晰，
* 此模块也是一个单独的store，只有actions有区别，里面的方法参数{dispatch, state, commit, rootState}；前三个只能访问本模块里的state和mutations
* rootState参数表示外面store内的state对象，意思是间接可以访问外部状态资源，（对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。）
* 同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState（外部state）：
* !!!对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
*  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
  同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
* */
import api from '../fetch/api'
import { Message } from 'element-ui';

const servers={
  state:{
    editor:{},
    page:{
      num:'',
      root:''
    }
  },
  mutations:{
    NUM(state,data){
      if(data){
        state.page.num=data
      }
    },
    ROOT(state,data){
      state.page.root=data.result.goodsResult
    },
    CLEAR_ALL(state){
      state.page.num='';
      state.page.root='';
    }
  },
  getters:{
    numResult: state => {
      return state.page.num
    },
    ROOTResult: state => {
      return state.page.root
    }
  },
  actions:{
    changeActions({dispatch, state, commit, rootState}){
      commit('ROOT',rootState)
    },
    heheActions({dispatch, state, commit, rootState},data){
     // alert(state.page.num)
      commit('NUM',data)
    },
    clearActions({dispatch, state, commit, rootState}){
      commit('CLEAR_ALL')
    }
  }
}

export default servers
