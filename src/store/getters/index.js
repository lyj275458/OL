/**
 * Created by Yan on 17/11/9.
 */

 import Vue from 'vue'

 const getters = {//返回state内的数据进行模板使用
   //弹框属性输出
   popoverAlive: state => {
     return state.result.popoverAlive
   },
   //品牌模块切换
   classResult : state => {
     return state.result.classResult
   },
   //分类模块切换
   fenleiCalssResult: state => {
     return state.result.fenleiCalssResult
   },
   //切换接受
   upDataPpResult : state => {
     return state.result.upDataPpResult
   },
   //分类切换接受
   FlDataResult : state => {
     return state.result.FlDataResult
   },
   //id品牌
   getByIdResult: state => {
     return state.result.getByIdResult
   },
   //所有品牌
   getAllPpResult: state => {
     return state.result.getAllPpResult
   },
   //新增品牌
   newPushResult: state => {
     return state.result.newPushResult
   },
   //all分类
   getAllTreeResult: state => {
     return state.result.getAllTreeResult
   },
   //单个分类详情
   ByIdGetTreeResult: state => {
     return state.result.ByIdGetTreeResult
   },
   //获得一个分类型所有大规格
   getProductSpecsResult: state => {
     return state.result.getProductSpecsResult
   },
   //获得一个分类大规格下的 所有规格特征明细
   getProductSpecDetailsResult: state => {
     return state.result.getProductSpecDetailsResult
   },
   //大规格编辑
   smallguigeResult: state => {
     return state.result.smallguige
   },
   //小规格编辑
   updataSmallResult: state => {
     return state.result.updataSmall
   },
   //获取一个分类下的 商品参数模板
   getParamsByCategoryIdResult: state => {
     return state.result.getParamsByCategoryIdResult
   },
   //时间选择器
   pickerOptions2:state => {
     return state.result.pickerOptions2
   },
   //省市选择器
   cityListResult: state => {
     return state.result.cityList
   },
   //城市列表
   smallCityList: state => {
     return state.result.smallCityList
   },
   //县级列表
   xianjiList: state => {
     return state.result.xianjiList
   },
   //是否禁用
   trueOrfalse: state => {
     return state.result.trueOrfalse
   },
   //loading
   loading: state => {
     return state.result.loading
   },
   //时间选择
   value4Result: state => {
     return state.result.value4Result
   },

    alertnum: state => {
      return state.editor.num
    },
   loginResult: state => {
      return state.result.loginResult
   },
   dingdanListResult: state =>{
     return state.result.dingdanListResult
   }

 }

 export default  getters
