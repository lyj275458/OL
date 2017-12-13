// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/font/iconfont.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
Vue.use(ElementUI)
//Vue.use(vueResource)
//Vue.config.silent = true  取消vue所有日志和警告
Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  $,
  template: '<App/>',
  components: { App }
})
//保留小数点后面两位
 Vue.filter('Tofix',function(val){
   if(val==''||val==null){

   }else {
     val = val.toString().replace(/\$|\,/g,'');
     if(isNaN(val)) {
       val = "0";
     }
     let sign = (val == (val = Math.abs(val)));
     val = Math.floor(val*100+0.50000000001);
     let cents = val%100;
     val = Math.floor(val/100).toString();
     if(cents<10) {
       cents = "0" + cents
     }
     for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
       val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
     }

     return (((sign)?'':'-') + val + '.' + cents);
   }
 })
//拖拽
Vue.directive('drag',function(event){
  var oDiv = event;
  oDiv.onmousedown = function(ev){
    if(ev.target.className=='popover-head'){
      var disX = ev.clientX -oDiv.offsetLeft;
      var disY = ev.clientY - oDiv.offsetTop;
      document.onmousemove = function(ev){
        var l = ev.clientX-disX;
        var t = ev.clientY-disY;
        oDiv.style.left =  l+'px';
        oDiv.style.top = t+'px';
      };
      document.onmouseup = function(){
        document.onmousemove=null;
        document.onmouseup=null;
      };
    }
  };

});

export default vm;
