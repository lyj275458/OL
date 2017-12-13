/**
 * Created by Yan on 17/11/9.
 */
import router from '../../router/index'
import axios from 'axios'
import qs from 'qs';
import * as types from '../fetch/type';
import { Message } from 'element-ui';
import { Loading } from 'element-ui';
import api from '../fetch/api'

const actions = {
  //弹框修改属性
  popoverAlert(context,where,event){
    context.commit('changeAlert',where)
  },
  //警示语
  mSuccess(context,data){
    Message({
      showClose: true,
      message:'操作成功',
      type: 'success'
    });
  },
  mWarning(context,data){
    Message({
      showClose: true,
      message:data.message,
      type:'warning'
    });
  },
  //导出方法
  export2Excel() {
    require.ensure([], () => {
      const { export_json_to_excel } = require('@/vendor/Export2Excel');
      const tHeader = ['1', '2', '3', '4', '5'];
      const filterVal = ['id', 'ownprice', 'pingjia', 'name', 'salestatus'];
      const list = this.tableData;
      const data = this.formatJson(filterVal,list)
      export_json_to_excel(tHeader, data, '列表excel');
    })
  },
  formatJson(filterVal,list) {
    console.log(list)
    return list.map(v => filterVal.map(j => v[j]))
  },
  //品牌模块切换
  classResultActions (context,data) {
    context.commit('classResultTypes',data)
  },
  //分类模块切换
  fenleiResultActions (context,data) {
    context.commit('fenleiClassResultTypes',data)
    //context.dispatch('getProductSpecsActions')
  },
  //清除数据
  clearAllActions(context){
    context.commit('CLEAR_ALL_DATA')
  },
  //axios封装
  saveFormPost (context,funUrl) {
    // axios.defaults.baseURL = context.state.editor.axiosUrl;
    axios({
      method: 'post',
      url: '/apis'+funUrl[0],
      dataType: 'JSON',
      data: qs.stringify(context.state.editor[funUrl[2]])
    })
      .then(function(res){
        Message({
          showClose: true,
          message: res.data.ok ? '操作成功' : res.data.message,
          type: res.data.ok ? 'success' : 'warning'
        });
        if(res.data.ok){
          context.dispatch('getAllTreeActions')
          if(funUrl[1] != ''){
            context.commit(types[funUrl[1]],res)
          }else{
          }
        }

      })
      .catch(function(err){
        console.log(err)
      })
  },
  saveFormGet (context,funUrl) {
    context.commit('changeloading')
    // axios.defaults.baseURL = context.state.editor.axiosUrl;
    axios({
      method: 'get',
      url: '/apis'+funUrl[0],
      dataType: 'JSON',
      params: context.state.editor[funUrl[2]]
    })
      .then(function(res){
        if(res.data.ok){
          context.commit('changeloading')
          if(res.data.result){
            if(funUrl[1] != ''){
              context.commit(types[funUrl[1]],res)
            }else{
            }
          }else{
            context.dispatch('clearAllActions')
          }
        }else{
          Message({
            showClose: true,
            message:res.data.message,
            type: 'warning'
          });
        }
      })
      .catch(function(err){
        context.commit('changeloading')
        console.log(err)
      })
  },
  //品牌获取
  getByIdActions (context,id) {
    let data={
      obj:'',
      str:'VeditorList',
      where:'3'
    }
    if(id){
      context.commit('classResultTypes',data)
      context.commit('SET_BY_ID',id)
      context.dispatch('saveFormGet',['/product/brand/getById','GET_BY_ID','getByIdMM',])
    }else{
      Message({
        showClose: true,
        message:'请输入品牌ID',
        type: 'warning'
      });
    }
  },
  //所有品牌
  getAllPpActions (context) {
    context.dispatch('saveFormGet',['/product/brand/getAll','GET_ALL_PPRESULT',{}])
  },
  //新增品牌
  newPushActions (context,data) {
    if(data.name && data.logo){
      context.commit('SET_NEW_PUSH',data)
      context.dispatch('deleteFormPost',['/product/brand/create','GET_NEW_PUSH','newPushMM','1'])
    }else{
      Message({
        showClose: true,
        message:'请输入完整信息',
        type: 'warning'
      });
    }
  },
  //删除/增加、编辑封装
  deleteFormPost (context,funUrl) {
    // axios.defaults.baseURL = context.state.editor.axiosUrl;
    axios({
      method: 'post',
      url: '/apis'+funUrl[0],
      dataType: 'JSON',
      data: qs.stringify(context.state.editor[funUrl[2]])
    })
      .then(function(res){
          Message({
            showClose: true,
            message:res.data.ok ? '操作成功' : '操作失败',
            type: res.data.ok ? 'success':'warning'
          })
        if(res.data.ok){
            context.dispatch('getAllPpActions')
            context.dispatch('getAllTreeActions')
        }
        // context.commit(types[funUrl[1]],res)
      })
      .catch(function(err){
        console.log(err)
      })
  },
  //删除品牌
  deletePpActions (context,id) {
    context.commit('SET_DELETE_PPRESULT',id)
    //context.dispatch('deleteFormPost',['/product/brand/delete','GET_DELETE_PPRESULT','deletePpMM'])
    api.deletePpApi('/apis/product/brand/delete',qs.stringify(context.state.editor.deletePpMM)).then(res => {
      if(res.ok){
        context.dispatch('mSuccess')
        context.dispatch('clearAllActions')
        context.dispatch('getAllPpActions')
      }else{
        context.dispatch('mWarning',res)
      }

    }).catch(
      (error) => {
        Message({
          showClose: true,
          message:'操作失败',
          type: 'warning'
        });
      }
    )
  },
  //修改品牌
  upDataPpActions (context,data) {
      context.commit('SET_UP_DATA_PPMM',data)
      context.dispatch('deleteFormPost',['/product/brand/update','','upDataPpMM'])
  },
  //检测品牌名
  checkPpActions (context,name) {
    if(name){
      context.commit('SET_CHECK_PP',name)
      context.dispatch('saveFormGet',['/product/brand/check','GET_CHECK_PP','checkPpMM'])
    }else{
      Message({
        showClose: true,
        message:'请输入品牌名称',
        type: 'warning'
      });
    }
},
  //获取该分类关联的品牌
  getCategoryBrandsActions(context,id){
    context.commit('SET_GET_CATEGORY_BRANDS',id)
    context.dispatch('saveFormGet',['/category/brand/getCategoryBrands','GET_GET_CATEGORY_BRANDS','getCategoryBrandsMM'])
  },
  //分类、获取整个分类
  getAllTreeActions(context){
  context.dispatch('saveFormGet',['/product/category/getAll','GET_ALL_TREE',{}])
  },
  //单个分类详情
  ByIdGetTreeActions(context,id){
    let data={
      obj:'',
      str:'VfenleiEditorList',
      where:'3'
    }
    if (id) {
      context.commit('fenleiClassResultTypes',data)
      context.commit('SET_BY_ID_GET_TREE',id)
      context.dispatch('saveFormGet',['/product/category/get','GET_BY_ID_GET_TREE','ByIdGetTreeMM'])
    } else {
      Message({
        showClose: true,
        message: '请输入分类ID',
        type: 'warning'
      });
    }
  },
  //删除分类
  deleteClassTreeActions(context,id){
      context.commit('SET_DELETE_CLASS_TREE',id)
      context.dispatch('deleteFormPost',['/product/category/delete','','deleteClassTreeMM'])
  },
  //新增分类
  pushClassTreeActions(context,data){
    if (data.name && data.logo) {
      context.commit('SET_PUSH_CLASS_TREE',data)
      context.dispatch('saveFormPost',['/product/category/create','GET_PUSH_CLASS_TREE','pushClassTreeMM'])
    }else {
      Message({
        showClose: true,
        message: '请输入完整信息',
        type: 'warning'
      });
    }

  },
  //更新分类
  upDataClassTreeActions (context,data) {
    context.commit('SET_UPDATA_CLASS_TREE',data)
    context.dispatch('saveFormPost',['/product/category/update','GET_PUSH_CLASS_TREE','updataClassTreeMM'])
  },
  //检测分类名称是否存在
  checkClassTreeActions(context,data){
    context.commit('SET_CHECK_CLASS_TREE',data)
    context.dispatch('saveFormGet',['/product/category/check','','checkClassTreeMM'])
  },
  //标签管理、获取所有
  getAllTagActions(context){
    context.dispatch('saveFormGet',['/product/Tag/getAll','GET_ALL_TAG_RESULT',{}])
  },
  // 删除标签
  deleteTagActions(context,id) {
    context.commit('SET_DELETE_TAG',id)
    context.dispatch('deleteFormPost',['/product/tag/delete','','deleteTagMM'])
  },
  //新增标签
  pushNewTagActions (context,data) {
    context.commit('SET_PUSH_NEW_TAG',data)
    context.dispatch('deleteFormPost',['/product/Tag/create','GET_PUSH_NEW_TAG','pushNewTagMM'])
  },
  //id获取标签
  getTagByIdActions(context,id){
    context.commit('SET_GET_TAG_BY_ID',id)
    context.dispatch('saveFormGet',['/product/Tag/getById','GET_GET_TAG_BY_ID','getTagByIdMM'])
  },
  //更新标签
  upDataTagActions (context,data) {
    context.commit('SET_PUSH_NEW_TAG',data)
    context.dispatch('deleteFormPost',['/product/Tag/update','','pushNewTagMM'])
  },

  //产品分类规格
  //修改大规格明细
  updateProductSpecActions (context,data){
    context.commit('SET_UPDATE_PRODUCT_SPEC',data)
    api.deletePpApi('/apis/product/category/spec/updateProductCategorySpec',qs.stringify(context.state.editor.updateProductSpecMM)).then(
      res => {
        if(res.ok){
          context.dispatch('mSuccess')
          context.dispatch('getProductSpecsActions',context.state.result.FlDataResult.obj)
        }else{
          context.dispatch('mWarning',res)
        }
      }).catch(
      (error) => {
        Message({
          showClose: true,
          message:'请求失败',
          type: 'warning'
        });
      }
    )

  },
  //修改一个小规格明细
  updateProductActions(context,data){
    context.commit('SET_UPDATE_PRODUCT',data)
    api.deletePpApi('/apis/product/category/spec/updateProductCategorySpecDetail',qs.stringify(context.state.editor.updateProductMM)).then(
      res => {
        if(res.ok){
          context.dispatch('mSuccess')
          context.dispatch('getProductSpecDetailsActions',data.specId)
        }else{
          context.dispatch('mWarning',res)
        }
      }).catch(
      (error) => {
        Message({
          showClose: true,
          message:'请求失败',
          type: 'warning'
        });
      }
    )
   // context.dispatch('deleteFormPost',['/product/category/spec/updateProductCategorySpecDetail','','updateProductMM'])
  },
  //删除分类下的一个商品规格模板
  deleteProductActions(context,id){
    context.commit('SET_DELETE_PRODUCT',id)
    api.deletePpApi('/apis/product/category/spec/deleteProductCategorySpec',qs.stringify(context.state.editor.deleteProductMM)).then(
      res =>{
        if(res.ok){
          context.dispatch('mSuccess')
          context.dispatch('getProductSpecsActions',{id:context.state.result.FlDataResult.obj.id})
        }else{
          context.dispatch('mWarning',res)
        }
      }).catch((error) => {
      Message({
        showClose: true,
        message:'请求失败',
        type: 'warning'
      });
    })
    //context.dispatch('deleteFormPost',['/product/category/spec/deleteProductCategorySpec','','deleteProductMM'])
  },
  //删除大规格模板下的一个小规格
  deleteSpecDetailActions(context,id){
    context.commit('SET_DELETE_PRODUCT',id)
    api.deletePpApi('/apis/product/category/spec/deleteProductCategorySpecDetail',qs.stringify(context.state.editor.deleteProductMM)).then(
      res => {
        if(res.ok){
          context.dispatch('mSuccess')
          context.dispatch('getProductSpecDetailsActions',context.state.result.smallguige.id)
        }else{
          context.dispatch('mWarning',res)
        }
      }).catch(
      (error) => {
        Message({
          showClose: true,
          message:'请求失败',
          type: 'warning'
        });
      }
    )
    //context.dispatch('deleteFormPost',['/product/category/spec/deleteProductCategorySpecDetail','','deleteProductMM'])
  },
  // 在分类下挂一个规格模板
  addProductSpecActions (context,data) {
    context.commit('SET_ADD_PRODUCT_SPEC',data)
    api.addguige('/apis/product/category/spec/addProductCategorySpec',qs.stringify(context.state.editor.addProductSpecMM)).then(
      res => {
        let datas={
          id:context.state.result.FlDataResult.obj.id
        }
        if(res.ok){
          context.dispatch('mSuccess')
          context.dispatch('getProductSpecsActions',datas)
        }else{
          context.dispatch('mWarning',res)
        }
      }).catch(
      (error) => {
        Message({
          showClose: true,
          message:'请求失败',
          type: 'warning'
        });
      }
    )
    //context.dispatch('deleteFormPost',['/product/category/spec/addProductCategorySpec','','addProductSpecMM'])
  },
  //在分类下的一个大规格下添加一个小规格
  addProductSpecDetailActions (context,data) {
    context.commit('SET_ADD_PRODUCT_SPEC_DETAIL',data)
    api.deletePpApi('/apis/product/category/spec/addProductCategorySpecDetail',qs.stringify(context.state.editor.addProductSpecDetailMM)).then(
      res => {
        if(res.ok){
          context.dispatch('mSuccess')
          context.dispatch('getProductSpecDetailsActions',data.specId)
        }else{
          context.dispatch('mWarning',res)
        }
      }).catch(
      (error) => {
        Message({
          showClose: true,
          message:'请求失败',
          type: 'warning'
        });
      }
    )
  },
  //编辑一个规格的能编辑的基本信息
  updateCategorySpecActions (context,data) {
    context.commit('SET_ADD_PRODUCT_SPEC',data)//参数和挂一个规格模板参数一样
    context.dispatch('deleteFormPost',['/product/category/spec/updateProductCategorySpec','','addProductSpecMM'])
  },
  //获得一个分类型所有大规格
  getProductSpecsActions (context,data) {
    context.commit('SET_GET_PRODUCT_SPECS',data)
    context.dispatch('saveFormGet',['/product/category/spec/getProductCategorySpecs','GET_GET_PRODUCT_SPECS','getProductSpecsMM'])
  },
  //获得一个分类大规格下的 所有规格特征明细
  getProductSpecDetailsActions (context,id) {
    context.commit('SET_GET_PRODUCT_SPECDETAILS',id)
    context.dispatch('saveFormGet',['/product/category/spec/getProductCategorySpecDetails','GET_GET_PRODUCT_SPECDETAILS','getProductSpecDetailsMM'])
  },
  //创建一个商品分类的参数模板
  createFenLeiMoActions(context,data){
    context.commit('SET_CREATE_FENLEI_MO',data)
    context.dispatch('deleteFormPost',['/product/category/param/create','','createFenLeiMoMM'])
  },
  //删除一个商品分类的参数模板
  deleteFenLeiMoACtions(context,id){
    context.commit('SET_DELETE_FENLEI_MO',id)
    context.dispatch('deleteFormPost',['/product/category/param/post','','deleteFenLeiMoMM'])
  },
  //更新一个商品分类的参数模板
  updataFenLeiMoActions(context,data){
    context.commit('SET_UPDATA_FENLEI_MO',data)
    context.dispatch('deleteFormPost',['/product/category/param/update','','updataFenLeiMoMM'])
  },
  //获取一个分类下的 商品参数模板
  getParamsByCategoryIdActions(context,id){
    if(id){
      context.commit('SET_PARAMS_BY_CATEGORYID',id)
      context.dispatch('saveFormGet',['/product/category/param/getProductCategoryParamsByCategoryId','GET_PARAMS_BY_CATEGORYID','getParamsByCategoryIdMM'])
    }else{
      Message({
        showClose: true,
        message:'请输入分类ID',
        type: 'warning'
      });
    }
  },
  //城市选择请求
  getcityListActions(context,id){
    axios.get('http://jisuarea.market.alicloudapi.com/area/query',{
      params: {
        parentid:id
      },
      headers: {
        "Authorization":"APPCODE fb1ee2813e9b433db7ff440eb8620446"
      }
    }).then(res => {
      context.commit('GET_SMALL_CITYLIST',res)
    })
  },
  //县选择请求
  getxianActions(context,id){
    axios.get('http://jisuarea.market.alicloudapi.com/area/query',{//post请求时 是三个参数  第一个是url 第二个传参 第三个配置项
      params: {
        parentid:id
      },
      headers: {
        "Authorization":"APPCODE fb1ee2813e9b433db7ff440eb8620446"
      }
    }).then(res => {
      context.commit('GET_XIANJI_LIST',res)
    }).catch(err => {
      context.state.result.trueOrfalse=true
    })
  },
  //时间选择接受
  timerResultActions (context,data) {
    let start=new Date()
    if(data=='最近24小时内'){
      let time=[new Date().setTime(new Date().getTime() - 3600 * 1000 * 24),start]
      context.commit('GET_VALUE_4',time)
    }
    if(data=='最近7天内'){
      let time=[new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 7),start]
      context.commit('GET_VALUE_4',time)
    }
    if(data=='最近一个月' || data=='最近30天内'){
      let time=[new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 30),start]
      context.commit('GET_VALUE_4',time)
    }
    if(data=='最近两个月'){
      let time=[new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 60),start]
      context.commit('GET_VALUE_4',time)
    }
    if(data=='最近三个月' || data=='三个月前'){
      let time=[new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 90),start]
      context.commit('GET_VALUE_4',time)
    }
  },


  alertshow(context){
    //context.state.editor.num=status  //actions里面可以直接改变state里的数据，也可以调用mutations里的方法（下面就是）
    //context.commit('change',status)//commit方法调用mutations里的方法进行改变state里的值//dispatch是调用actions内自身的方法
    context.dispatch('saveFormGet',['/city/getProvinces','',{}])
  },
  qingqiuActions(context,id){
    context.commit('SET_LOGIN_ALL_API',id)
    axios({
      method:"get",
      dataType:"JSON",
      url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
      params:context.state.editor.loginMM
    }).then((data)=>{
      var datas=eval(data.data)[0]
      console.log(datas)
      context.commit('GET_LOGIN_ALL_API',datas)
    })
  },
  dingdanListActions(context,obj){
    if(obj.input == ''){
      Message({
        showClose: true,
        message: "请输入商品ID",
        type: 'warning'
      });
    }else{
      context.commit('SET_DINGDAN_LIST_MM',obj)
      axios({
        method:"post",
        url:"/apis/mobile/order/myOrder",
        params:context.state.editor.dingdanListMM
      }).then((res)=>{
        context.commit('GET_DINGDAN_LIST_MM',res)
      })
    }
  }

}

export default actions
