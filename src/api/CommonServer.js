import $ from 'jquery';
//import reqwest from 'reqwest';
//require('es6-promise').polyfill();
// To add to window  
/*if (!window.Promise) {  
  window.Promise = Promise;  
  console.log('Promise')
};*/
import axios from 'axios';
//import Qs from 'qs'
import config from './config';
import Client from './client';
const co = require('co');
//接口地址
const API = {
			getTogetherList:'mobile/together/getTogetherList',//拼团产品列表
			getBestTogetherList:'mobile/together/getBestTogetherList',//获取销量10款最好的商品
      togetherJoinRecordList:'mobile/together/togetherJoinRecordList',//我参与的拼单
      togetherRecordDetail:'mobile/together/togetherRecordDetail',//拼团详情
      getTogetherBanners:'mobile/together/getTogetherBanners',//拼团轮播图
      getIndexTogetherList:'mobile/together/getIndexTogetherList',//拼团首页数据
      weixinShare:'weixin/js/sign',//分享接口
      activityProductList:'mobile/product/activity/activityProductList',//商品活动列表
      getNormal:'mobile/product/getNormal',//获取产品规格和库存
      activityImg:'mobile/product/activity/getById',//获取商品活动信息
      getByModelCode:'mobile/model/getByModelCode',//根据模板CODE获取页面数据
      findProductByContentId:'mobile/model/findProductByContentId',//根据contenId获取产品
      getMember:'mobile/member/getMember',//根据member获取用户信息
      getPlusRecommendData:'mobile/oneYuanBuy/getPlusRecommendData',//粉领特权推荐商品
      recommendProduct:'mobile/product/recommendProduct',//产品相关的推荐产品
      getStoreFee:'/mobile/store/getStoreFee',//开通粉领价格
      getScoreDataAll:'mobile/oneYuanBuy/getScoreDataAll',//试用中心
};
function getCookie(argument) {
    var arrCookie = document.cookie.split(";");
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split("="); //从 = 的位置 分割每对cookie     
     
      if (arr[0].replace(/(^\s*)/g, "")==argument) { //如果前面是 userId 就是找到了
        return arr[1]; //将后面的值赋给 userId ，跳出循环                  
        break;
      }
    }
};
//签名方案
const comAjax=function(url,data,callBack,self){
//	console.log(data)
    //const client = new Client('30245434', 'd3b9d97961c1f954351a24626047d181');
      co(function* () {
        //var url = 'http://api.aaaa.com/postform';    
//      var result = yield client.post(API_HOST+url, {
//        headers: {
//          'Accept': 'application/json',
//          //'X-Ca-Stage' : 'TEST',
//          'Content-Type': 'application/x-www-form-urlencoded;',
//          'C-User-Ticket': getCookie('ticket')
//        },
//        data:data
//      });
          //console.log(result)

       $.ajax({
       type: "POST",
       url: API_HOST+url,
       data: data,
       dataType: "json",
//     headers:result,
       success: function(data){   
					//console.log(data)
					if(data.code==0){
							callBack(data);
					}else{
						 self.$toast(data.message);
					}
					
//          if (data.code == 200) {
//              callBack(data.result);
//          } else if(data.code == 401) {  //重新授权
//              sessionStorage.removeItem('isLogin');
//              self.setCookie('authJump',window.location.href);
//              self.$router.push({path:'/common/auth'});
//              self.$toast(data.msg);
//          }else if(data.code == 406){//店铺关闭
//               self.$router.push({path:'/close/closeshop'});
//          }
//          else{
//              //self.$toast(data.msg);
//          }
       },
       // error:function(){
            
       // },
       
   });
   
    return;
    config.headers=result;
   
    axios.post(API_HOST+url,data,config).then((response) => {
       console.log(response)
        if (response.status == 200) {
            //接口返回正常状态
            if (response.data.code == 200) {
                callBack(response.data.data);
            } else if(response.data.code == 401) {  //重新登录
                self.$toast(response.data.msg);
                sessionStorage.removeItem('isLogin');
                self.setCookie('authJump',window.location.href);
                self.$router.push({path:'/common/auth'});
                
            }else if(data.code == 406){//店铺关闭
                 self.$router.push({path:'/close/closeshop'});
            }
            else{
                self.$toast(data.msg);
            }
        } else {
           self.$toast(response.data.msg);
        }
    })



      
  });
}

export {
    API,
    comAjax
};