import babelpolyfill from 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import VueRouter from 'vue-router'
import comFun from './common/index.js';
import routes from './routes';
import store from './store';
import fastclick from 'fastclick'
import * as CommonServer from './api/CommonServer.js'; 
import './css/reset.css';
import focus from './components/directive/directive.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Mint from 'mint-ui';
import loading from './components/iscroll/index.js';
Vue.use(loading)
Vue.use(Mint);

Vue.use(VueAwesomeSwiper)
//需要有微信授权后才能访问的页面
const authPageArr=['coupon/receive','test']
fastclick.attach(document.body);
Vue.use(comFun)
Vue.use(VueRouter)
Vue.use(VueLazyload, {
  loading: '/static/images/default.png'
})
const router = new VueRouter({
    mode: 'history',
    routes
  })

store.commit('ajaxObj',CommonServer);
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
  //设置cookie
function setCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 3 * 24 * 60 * 60 * 1000); //3天过期  
    document.cookie=name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
    return true;
};
function urlParam(name) {
    var url =location.search; //获取url中"?"符后的字串 
    // console.log(r)
    // if (r!=null) return unescape(r[2]); return null;    
    console.log(location.search)
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1) { 
      var str = url.substr(1); 
     
      let strs = str.split("&"); 
     
      for(var i = 0; i < strs.length; i ++) { 
        theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
      } 

    } 
    return theRequest; 
}
//设置loading

router.beforeEach(function (to, from, next) {
  //console.log(to)
  //console.log(next)
  
  let defaultStyle = 'fading-circle';
  Vue.$indicator.open({
    spinnerType: defaultStyle
  });
  if(to.name){
    //setCookie('ticket','0000');
     //需要先判断是否微信授权过

  //setCookie('ticket','c65b012813bb40ec936b1d260d6f4ad2');  

     if(to.name.indexOf('Auth')!=-1){
      //开发设计时可以在这拦截  打包时注意去除；
      var codeuid=urlParam('codeuid').codeuid;
      //console.log(codeuid)
        if(getCookie('ticket')){//已经授权登录过          
           if(codeuid){//如果有codeuid
             // console.log(getCookie('codeuid'))
              if(codeuid==getCookie('codeuid')){
                
                 next();
              }else{                
                //与本地不相等就要重新授权
                setCookie('codeuid',codeuid);
                setCookie('ticket','');
                setCookie('authJump',window.location.href);
                next('/common/auth')
              }           
           }else{
             next();
           }
        }else{
          setCookie('codeuid',codeuid);
          setCookie('authJump',window.location.href);
          next('/common/auth')
        }
        

     }else{
         next();
     }
   }else{
      next();
   }
 
  
  
})

// config 授权对象，data---分享数据
Vue.prototype.wxShareFun = function(wconfig,data) { 
  //console.log(data)
  
  
	let _this = this;
  //var menuItem=[];
      //if(data.hide){
      	//alert(1212)
        //menuItem=['menuItem:share:appMessage','menuItem:share:timeline'];
         //menuItem=['menuItem:onMenuShareAppMessage','menuItem:onMenuShareTimeline'];
      //}
//			console.log('wconfig')
//			console.log(wconfig)
			
      wx.config({
        debug:false,
        appId:wconfig.appId,
        timestamp:wconfig.timestamp,
        nonceStr:wconfig.noncestr,
        signature:wconfig.sign,
        jsApiList: [
          'checkJsApi',
          'chooseImage',
          'previewImage',
          'uploadImage',
          'downloadImage',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
//        'onMenuShareQQ',
          'getLocation',
          'hideMenuItems'
        ]
      }); 
     
      wx.ready(function() {
                //alert(JSON.stringify(data))
                if(data.hide){
	                	wx.hideMenuItems({
	                    menuList: ['menuItem:copyUrl','menuItem:openWithQQBrowser','menuItem:openWithSafari']
	                     
	                });
                }
                if(data.share){
                	wx.hideMenuItems({
	                    menuList: ['menuItem:share:appMessage','menuItem:share:timeline']
	                     
	                });
                }
//             wx.hideMenuItems({
//                  menuList: menuItem
//                   
//              });
                //alert(menuItem)
                //console.log(menuItem)
                //位置
//              
//               wx.getLocation({  
//                 type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'  
//                 success: function (res) {                        
//                     _this.loactionObj.latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90  
//                     _this.loactionObj.longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。  
//                     var speed = res.speed; // 速度，以米/每秒计  
//                     var accuracy = res.accuracy; // 位置精度  
//                 }  
//               });  
                wx.onMenuShareTimeline({
                    title: data.title, // 分享标题
                    link: data.url, // 分享链接
                    imgUrl: data.picURL, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                        //this.$toast('分享成功')
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareAppMessage({
                    title: data.title, // 分享标题
                    desc: data.description, // 分享描述
                    link: data.url, // 分享链接
                    imgUrl: data.picURL, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        // 用户确认分享后执行的回调函数
                        // setShareCount()
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    },
                    fail:function(){
                    },
                    trigger:function(){
                    }
                });
								//alert(JSON.stringify(data))
//              wx.onMenuShareQQ({
//                  title: data.title, // 分享标题
//                  desc: data.description, // 分享描述
//                  link: data.url, // 分享链接
//                  imgUrl: data.picURL, // 分享图标
//                  success: function() {
//                      // 用户确认分享后执行的回调函数
//                      // setShareCount()
//                  },
//                  cancel: function() {
//                      // 用户取消分享后执行的回调函数
//                  }
//              });
            });
  
}
//分享end
// config 授权对象，data---分享数据
Vue.prototype.wxCloseFun = function(data) {
			wx.ready(function() {
	        //alert(JSON.stringify(data))
	        if(data){
	        	wx.hideMenuItems({
		            menuList: ['menuItem:copyUrl','menuItem:share:timeline','menuItem:share:appMessage']
		             
		        });
	        }
	        
	
	    });
  
}
//分享end
router.afterEach(function (to) {
  setTimeout(function() {
    Vue.$indicator.close();
  }, 400);
 
})
 
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
      App
    },
    store,
    router
  })
