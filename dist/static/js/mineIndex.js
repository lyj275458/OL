webpackJsonp([10,23],{294:function(e,t,i){i(713);var a=i(2)(i(377),i(791),"data-v-ab1d17c6",null);e.exports=a.exports},377:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{getpinkImg:"/static/images/getpink.png",fenlingImg:"/static/images/fenling.png",diandianImg:"/static/images/diandian.png",buyfenImg:"/static/images/buyfen.png",tuifenImg:"/static/images/tuifen.png",sharefenImg:"/static/images/sharefen.png",buypackImg:"/static/images/buypack.png",zhuanImg:"/static/images/zhuan.png",giftImg:"/static/images/gift.png",tryImg:"/static/images/try.png",OLImg:"/static/images/OL.png",goldenImg:"/static/images/golden.png",whiteImg:"/static/images/white.png",rowImg:"/static/images/row.png",goImg:"/static/images/go.png",showTrue:!1,showFen:!1,curObj:{},listObj:{},time:"",memberId:"",pageObj:{page:1},isAndroid:"",isiOS:"",isMore:!0,shareData:{title:"会员权益",description:"快点来查看自己的会员权益吧",url:"",picURL:"http://ol-h5-preview.olquan.cn/static/images/zhuanxiang.png",hide:!0,share:!1},fenMoney:""}},components:{},mounted:function(){this.addWeixinShare(),window.addEventListener("scroll",this.handleScroll)},created:function(){this.getDetail(),this.getList(),this.showPhone(),this.getMoney(),this.$store.commit("documentTitle","会员权益")},computed:{},methods:{kaiPinkuse:function(){"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"weixin/member/openStore?&memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("1"),this.isiOS&&(window.location.href="https://www.baidu.com/ktfl"))},getMoney:function(){var e={};this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getStoreFee,e,this.getMoneyBack)},getMoneyBack:function(e){this.fenMoney=e.result},handleScroll:function(){var e=document.body.scrollHeight;this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;var t=window.innerHeight;if(this.scrollTop+t>=e-200&&this.isMore){this.isMore=!1;var i={page:this.pageObj.page+1,rows:20};this.pageObj.page=this.pageObj.page+1,this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getPlusRecommendData,i,this.getListMoreBack)}},getListMoreBack:function(e){e.result.length<20?(this.isMore=!1,this.showTrue=!0):this.isMore=!0;for(var t=0;t<e.result.length;t++)this.curObj.push(e.result[t]);console.log(this.curObj)},goIndex:function(){"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"ol/weixin/index/modelVM?code=index&memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("3"),this.isiOS&&(window.location.href="https://www.baidu.com/scsy"))},showPhone:function(){var e=navigator.userAgent;this.isAndroid=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,this.isiOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},getList:function(){this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getPlusRecommendData,this.dataObj,this.getListBack)},getListBack:function(e){this.curObj=e.result},goBuy:function(e){console.log(e),"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"weixin/product/newProductDetail?productId="+e+"&memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toModules(e),this.isiOS&&(window.location.href="https://www.baidu.com/cpxq"+e))},getPinkuse:function(){"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"weixin/member/renewConfirmOrder":(this.isAndroid&&OLquan.toProduct("8"),this.isiOS&&(window.location.href="https://www.baidu.com/flxf"))},getInvite:function(){"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"weixin/member/memberTwoCode2?memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("6"),this.isiOS&&(window.location.href="https://www.baidu.com/tghb"))},getDetailOne:function(){"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"weixin/freeUse/freeUse?type=3&memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("2"),this.isiOS&&(window.location.href="https://www.baidu.com/syzx"))},getDetailFour:function(){"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"weixin/member/openStore?memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("7"),this.isiOS&&(window.location.href="https://www.baidu.com/yqfl"))},gotoJifen:function(){window.location.href=CUR_URLBACK+"integral/uesget?memberId="+this.$route.query.memberId},getDetail:function(){var e={memberId:this.$route.query.memberId};this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getMember,e,this.getDetailBack,this)},getDetailBack:function(e){this.listObj=e.result,this.time=this.listObj.endStoreTime.split(" ")[0],this.shareData.url="http://test-mobile.olquan.cn/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+"mine/index"),"white"==this.listObj.levelCode||"golden"==this.listObj.levelCode?this.showFen=!1:this.showFen=!0},goMore:function(){"wx"==tsApp.getClientBrowser()||console.log(123),OLquan.toProduct("123")},toProduct:function(){},addWeixinShare:function(){var e={url:location.href,callback:""};this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.weixinShare,e,this.shareBack,this)},shareBack:function(e){this.wxShareFun(e.result,this.shareData)}}}},678:function(e,t,i){t=e.exports=i(3)(),t.push([e.id,".mine[data-v-ab1d17c6]{background:#f2f2f2;min-height:100%}.mine .member[data-v-ab1d17c6]{position:relative;padding:.24rem .24rem 0}.mine .member .dateTime[data-v-ab1d17c6]{background:url("+i(748)+") no-repeat 50%;background-size:cover;width:2.7rem;height:.68rem;position:absolute;top:.68rem;right:.25rem;padding-top:.2rem;font-size:.26rem;color:#fff}.mine .member .dateTime p[data-v-ab1d17c6]{margin-left:.36rem;margin-bottom:.08rem}.mine .member .dateTime img[data-v-ab1d17c6]{width:.17rem;height:.28rem;display:block;position:absolute;right:.15rem;top:50%;margin-top:-.14rem}.mine .member .headImg[data-v-ab1d17c6]{padding-left:.64rem;padding-top:.3rem;padding-right:.64rem;height:3.8rem;background:url("+i(747)+") no-repeat 50%;background-size:cover}.mine .member .headImg .headerImg[data-v-ab1d17c6]{display:inline-block;width:1rem;height:1rem;border-radius:50%;float:left}.mine .member .headImg .name[data-v-ab1d17c6]{font-size:.26rem;vertical-align:middle;margin-top:.15rem;margin-left:.2rem;float:left;color:#fff}.mine .member .headImg .name span[data-v-ab1d17c6]{text-align:center;margin-top:.12rem;width:1.2rem;display:inline-block;height:.32rem;border:.01rem solid #fff;border-radius:.3rem;font-size:.2rem;line-height:.34rem}.mine .member .headImg .leijifen[data-v-ab1d17c6]{font-size:.28rem;color:#fff;padding:.2rem 0 .16rem}.mine .member .headImg .leijifen span[data-v-ab1d17c6]{color:#fff600;font-weight:700}.mine .member .headImg .action[data-v-ab1d17c6]{display:flex;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;-ms-flex-pack:justify;justify-content:space-between;-moz-box-pack:space-between;-webkit--moz-box-pack:space-between}.mine .member .headImg .action .dataDetail[data-v-ab1d17c6]{color:#fff}.mine .member .headImg .action .dataDetail .top[data-v-ab1d17c6]{font-size:.32rem;margin-bottom:.2rem}.mine .member .headImg .action .dataDetail .cen[data-v-ab1d17c6]{font-size:.24rem;margin-bottom:.2rem}.mine .member .headImg .action .dataDetail .bot[data-v-ab1d17c6]{width:1rem;height:.38rem;background:#fff;color:#c8084f;font-size:.24rem;text-align:center;line-height:.38rem;border-radius:.38rem}.mine .member .fenquan[data-v-ab1d17c6]{display:flex;display:-ms-flexbox;display:-moz-flex}.mine .member .fenquan .sheng[data-v-ab1d17c6],.mine .member .fenquan[data-v-ab1d17c6]{-ms-flex-pack:center;justify-content:center;-moz-box-pack:center;-webkit--moz-box-pack:center}.mine .member .fenquan .sheng[data-v-ab1d17c6]{width:30%;display:flex;display:-moz-flex;display:-ms-flexbox;display:-webkit-flex;border:.01rem solid #fff;border-bottom:none;line-height:.64rem;margin:0 .05rem;position:relative;text-align:center;margin-top:.4rem;border-radius:.1rem .1rem 0 0}.mine .member .fenquan .sheng p[data-v-ab1d17c6]{font-size:.24rem;color:#fff;margin-left:.05rem}.mine .member .fenquan .sheng img[data-v-ab1d17c6]{width:.3rem;display:inline-block;vertical-align:middle;margin-top:-.2rem}.mine .pink-invio[data-v-ab1d17c6]{background:#fff}.mine .pink-invio .pinTop[data-v-ab1d17c6]{border-bottom:.01rem solid #f2f2f2}.mine .pink-invio .pinTop .top[data-v-ab1d17c6]{padding-left:.24rem;line-height:.84rem;font-size:.32rem;font-weight:700;text-align:center}.mine .tiao[data-v-ab1d17c6]{height:.2rem;width:100%;background:#f2f2f2}.mine .jinOwn[data-v-ab1d17c6]{padding-top:.2rem}.mine .jinOwn ul[data-v-ab1d17c6]{display:flex;display:-ms-flexbox;display:-moz-flex;-ms-flex-pack:start;justify-content:flex-start;-moz-box-pack:flex-start;-webkit--moz-box-pack:flex-start}.mine .jinOwn ul[data-v-ab1d17c6],.mine .jinOwn ul li[data-v-ab1d17c6]{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-wrap:wrap;-webkit-box-lines:multiple;-moz-flex-wrap:wrap}.mine .jinOwn ul li[data-v-ab1d17c6]{padding-bottom:.3rem;font-size:.24rem;text-align:center;width:33%;display:flex;display:-moz-flex;display:-ms-flexbox;display:-webkit-flex;-ms-flex-pack:center;justify-content:center;-moz-box-pack:center;-webkit--moz-box-pack:center}.mine .jinOwn ul li span[data-v-ab1d17c6]{color:#666;display:block;width:100%}.mine .jinOwn ul li img[data-v-ab1d17c6]{display:block;height:.52rem;width:.52rem;margin-bottom:.2rem}.mine .benefit[data-v-ab1d17c6]{padding:.2rem .4rem 0}.mine .benefit ul[data-v-ab1d17c6]{display:flex;display:-moz-flex;display:-ms-flexbox;display:-webkit-flex;-ms-flex-pack:start;justify-content:flex-start;-moz-box-pack:flex-start;-webkit--moz-box-pack:flex-start}.mine .benefit ul li[data-v-ab1d17c6]{margin-bottom:.2rem;font-size:.24rem;text-align:center;width:20%;display:flex;display:-moz-flex;display:-ms-flexbox;display:-webkit-flex;-ms-flex-pack:center;justify-content:center;-moz-box-pack:center;-webkit--moz-box-pack:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-wrap:wrap;-webkit-box-lines:multiple;-moz-flex-wrap:wrap}.mine .benefit ul li span[data-v-ab1d17c6]{color:#666;display:block}.mine .benefit ul li img[data-v-ab1d17c6]{display:block;height:.52rem;width:.52rem;margin-bottom:.2rem}.mine .jifenUse[data-v-ab1d17c6]{width:100%;padding:.1rem 0;background:#f2f2f2;padding-top:.2rem;display:flex;display:-ms-flexbox;display:-moz-flex;-ms-flex-pack:center;justify-content:center;-moz-box-pack:center;-webkit--moz-box-pack:center}.mine .jifenUse p[data-v-ab1d17c6]{font-size:.32rem;width:6.98rem;line-height:.88rem;border-radius:.9rem;border:.01rem solid #fc469a;background:#fff;color:#fc469a;text-align:center;position:relative;font-weight:700}.mine .jifenUse p img[data-v-ab1d17c6]{display:block;width:.17rem;height:.28rem;position:absolute;left:66%;top:50%;margin-top:-.14rem}.mine .getPink[data-v-ab1d17c6]{width:100%;background:#f2f2f2;padding-top:.66rem;position:relative;display:flex;display:-ms-flexbox;display:-moz-flex;-ms-flex-pack:center;justify-content:center;-moz-box-pack:center;-webkit--moz-box-pack:center;box-pack:center}.mine .getPink p[data-v-ab1d17c6]{font-size:.32rem;color:#fff;width:7rem;line-height:.9rem;border-radius:.05rem;background:#fc469a;text-align:center}.mine .getPink img[data-v-ab1d17c6]{position:absolute;left:50%;margin-left:-3.23rem;top:.12rem;display:block;width:6.46rem}.mine .pinkOwn[data-v-ab1d17c6]{width:100%;font-size:.28rem;text-align:center;line-height:.76rem;background:#f2f2f2}.mine .pinkOwn img[data-v-ab1d17c6]{display:inline-block;vertical-align:middle;width:1.32rem;height:.02rem}.mine .cent[data-v-ab1d17c6]{padding:.2rem .12rem}.mine .cent ul[data-v-ab1d17c6]{width:100%;display:flex;display:-ms-flexbox;display:-moz-flex;-ms-flex-pack:justify;justify-content:space-between;-moz-box-pack:space-between;-webkit--moz-box-pack:space-between;box-pack:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-wrap:wrap;-webkit-box-lines:multiple;-moz-flex-wrap:wrap}.mine .cent ul .special[data-v-ab1d17c6]{width:100%;height:.56rem;background:none;color:#9c9c9c;line-height:.56rem;text-align:center;font-size:.28rem}.mine .cent ul li[data-v-ab1d17c6]{width:49.5%;padding-bottom:.2rem;background:#fff;margin-bottom:.1rem;position:relative}.mine .cent ul li img[data-v-ab1d17c6]{display:block;width:100%;height:3.59rem}.mine .cent ul li .top[data-v-ab1d17c6]{font-weight:400;font-size:.28rem;color:#333;line-height:.3rem;padding:.08rem}.mine .cent ul li .botMoney[data-v-ab1d17c6]{display:block;overflow:hidden;font-size:.24rem;color:#b2b2b2;font-style:normal;margin-top:.1rem;padding-left:.05rem;padding-right:.24rem}.mine .cent ul li .botMoney .left[data-v-ab1d17c6]{float:left}.mine .cent ul li .botMoney .right[data-v-ab1d17c6]{float:right}",""])},713:function(e,t,i){var a=i(678);"string"==typeof a&&(a=[[e.id,a,""]]);i(4)(a,{});a.locals&&(e.exports=a.locals)},747:function(e,t,i){e.exports=i.p+"static/img/fenback.ada4bd2.png"},748:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABYCAYAAADcOOrYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZBREFDODc2RDBGNjExRTc4NTY3QzFFNjRFN0FCNThBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZBREFDODc3RDBGNjExRTc4NTY3QzFFNjRFN0FCNThBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkFEQUM4NzREMEY2MTFFNzg1NjdDMUU2NEU3QUI1OEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkFEQUM4NzVEMEY2MTFFNzg1NjdDMUU2NEU3QUI1OEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kiyY8AAADPUlEQVR42uzdWWtVZxgF4H2SmFCjsQ440GYQGpzvRGl/oX+pVO9Ki+KNraJiB8cLLdQ6Qwfb9yX7QG4NFHXleWARvZHwhuW38+397TO5MJkMH4j+RpYqe8YsjlmozFdmK3MD8M7ed3H2Vg5XDlX2KzLkFH1XZa2yOv4ZCCl6X5avVL6oHDB2yCr6zLh6n7B6Q17RJ2PBT1d2GjPkFX1f5eywsdEGhBW9L9PPVI6NKzoQVvS+3/3VuJoDgUX/rHK+ssM4IbPovdl2yhghs+j9O/i5YWNnHQgsem+6fVn53Pjg4zCzhZVcySG86OeVHLKL3vfIV40Mcou+XDlpXJBb9H4ZxDmjgtyiT3fYvRACgovev5d/akyQW/Q+fXbMiCC36H2//OzgFBpEF/3o4CQaRBe9X6t82mggu+j9AsdPjAZyi95/twEH4UVfsZpDftHXjQSyi94Pxthph/CiO5kG26Doy8YB2UXvy/ZF44Dsoh8xCsgv+kGjgOyi98EVH2UM4UXfPXixBMQX3aeewjYo+pIxQH7R3VYDRQcSir5gDJBf9HljgPyizxoD5BfdPXTYBkV/awyQX/S/jQHyi/6XMYAVHQgo+p/GAPlFf2kMkF/0F8YA+UV/bgxgRQdCim5DDsKL/m/lN6OA7KK3x0YB+UV/YhSQX/RnlVfGAdlFbw+MA/KLfs84IL/of1R+NxLILnq7YySQX/T7lTfGAtlF79dK3TYWyC56+8mqDvlF/6dy3Wggu+jt18pT44HsovdBl6vjVyC06K3vqduYg/Citx8HD9FAfNH7dtt3g3e/Q3TRW59qu2JUkF309rBy07ggu+jth8EJN4gvers8ru5AcNH7vvr3yg7ZRW/Tnfi7xge5RZ+u7H0Zf8MIIbfoU3345dvBfXaILnp7VPl68AQdRBe99UM1lyq3BgdhILborTfprlUuDo64QmzRp/oS/pth47HZ10YM79/c//Tv9uV7v7yin6Q7Wjle2WXckFX0zZfzP1d+qaxU1iv7jR2yir55hb83plf2tcqqVR6yir7Zy2Hj/ntnb+Vw5dC40s/5kUBG0Td7OqaPwE4qS5U9YxbHLFTmK7P+I4Ct+U+AAQBIjF7N958vpAAAAABJRU5ErkJggg=="},791:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mine"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"white"!=e.listObj.levelCode&&"golden"!=e.listObj.levelCode,expression:"listObj.levelCode!='white' && listObj.levelCode!='golden'"}],staticClass:"member"},[i("div",{staticClass:"headImg"},[i("div",{staticStyle:{overflow:"hidden"}},[i("img",{staticClass:"headerImg",attrs:{src:e.listObj.logo}}),e._v(" "),i("p",{staticClass:"name"},[e._v(e._s(e.listObj.nickName)),i("br"),e._v(" "),"white"==e.listObj.levelCode?i("span",[e._v("白领会员")]):"golden"==e.listObj.levelCode?i("span",[e._v("金领会员")]):i("span",[e._v("粉领会员")])])]),e._v(" "),i("div",{staticClass:"leijifen"},[e._v("已累计获得 "),i("span",[e._v(e._s(e.listObj.totalScore))]),e._v(" 积分")]),e._v(" "),i("div",{staticStyle:{width:"100%","margin-bottom":".24rem"}},[i("img",{staticStyle:{display:"block",width:"100%",height:"0.01rem"},attrs:{src:e.diandianImg}})]),e._v(" "),i("div",{staticClass:"action"},[i("div",{staticClass:"dataDetail",on:{click:e.getDetailOne}},[i("p",{staticClass:"top"},[e._v(e._s(e.listObj.freeUseOrderCount)),i("span",{staticStyle:{"font-size":".24rem"}},[e._v("件")])]),e._v(" "),i("p",{staticClass:"cen"},[e._v("获得试用产品")]),e._v(" "),i("p",{staticClass:"bot"},[e._v("去试用")])]),e._v(" "),i("div",{staticClass:"dataDetail",on:{click:e.getInvite}},[i("p",{staticClass:"top"},[e._v(e._s(e.listObj.fansCount)),i("span",{staticStyle:{"font-size":".24rem"}},[e._v("人")])]),e._v(" "),i("p",{staticClass:"cen"},[e._v("粉圈人数")]),e._v(" "),i("p",{staticClass:"bot"},[e._v("去邀请")])]),e._v(" "),i("div",{staticClass:"dataDetail",on:{click:e.getDetailFour}},[i("p",{staticClass:"top"},[e._v(e._s(e.listObj.storeFansCount)),i("span",{staticStyle:{"font-size":".24rem"}},[e._v("人")])]),e._v(" "),i("p",{staticClass:"cen"},[e._v("推荐粉领会员")]),e._v(" "),i("p",{staticClass:"bot"},[e._v("去推荐")])])]),e._v(" "),i("div",{staticClass:"dateTime",on:{click:e.getPinkuse}},[i("p",[e._v("续费")]),e._v(" "),i("p",{staticStyle:{"font-size":".24rem"}},[e._v(e._s(e.time)+" 到期")]),e._v(" "),i("img",{attrs:{src:e.rowImg}})])])]),e._v(" "),i("div",{staticStyle:{width:"100%"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"golden"==e.listObj.levelCode,expression:"listObj.levelCode=='golden'"}],staticStyle:{display:"block",width:"100%"},attrs:{src:e.goldenImg}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"white"==e.listObj.levelCode,expression:"listObj.levelCode=='white'"}],staticStyle:{display:"block",width:"100%","margin-bottom":".10rem"},attrs:{src:e.whiteImg},on:{click:e.goIndex}})]),e._v(" "),i("div",{staticClass:"pink-invio"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"white"==e.listObj.levelCode,expression:"listObj.levelCode=='white'"}],staticClass:"pinTop"},[i("p",{staticClass:"top"},[e._v("金领会员5大特权")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"white"==e.listObj.levelCode||"golden"==e.listObj.levelCode,expression:"listObj.levelCode=='white' || listObj.levelCode=='golden'"}],staticClass:"benefit"},[i("ul",[i("li",[i("img",{attrs:{src:e.buyfenImg}}),e._v(" "),i("span",[e._v("购物送积分")])]),e._v(" "),i("li",[i("img",{attrs:{src:e.tuifenImg}}),e._v(" "),i("span",[e._v("推荐赚积分")])]),e._v(" "),i("li",[i("img",{attrs:{src:e.sharefenImg}}),e._v(" "),i("span",[e._v("分享赚积分")])]),e._v(" "),i("li",[i("img",{attrs:{src:e.tryImg}}),e._v(" "),i("span",[e._v("积分试用")])]),e._v(" "),i("li",[i("img",{attrs:{src:e.OLImg}}),e._v(" "),i("span",[e._v("专属粉圈")])])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"white"==e.listObj.levelCode||"golden"==e.listObj.levelCode,expression:"listObj.levelCode=='white' || listObj.levelCode=='golden'"}],staticClass:"tiao"}),e._v(" "),i("div",{staticClass:"pinTop"},[i("p",{directives:[{name:"show",rawName:"v-show",value:"white"!=e.listObj.levelCode&&"golden"!=e.listObj.levelCode,expression:"listObj.levelCode!='white' && listObj.levelCode!='golden'"}],staticClass:"top"},[e._v("您已尊享粉领会员6大特权")]),e._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:"white"==e.listObj.levelCode||"golden"==e.listObj.levelCode,expression:"listObj.levelCode=='white' || listObj.levelCode=='golden'"}],staticClass:"top"},[e._v("开通粉领会员尊享6大特权")])]),e._v(" "),i("div",{staticClass:"jinOwn"},[i("ul",[i("li",{staticStyle:{"border-right":"0.01rem solid #ddd","border-bottom":"0.01rem solid #ddd"}},[i("img",{attrs:{src:e.buyfenImg}}),e._v(" "),i("span",[e._v("购物送积分")]),e._v(" "),i("span",{staticStyle:{"margin-top":".10rem"}},[e._v("双倍")])]),e._v(" "),i("li",{staticStyle:{"border-right":"0.01rem solid #ddd","border-bottom":"0.01rem solid #ddd"}},[i("img",{attrs:{src:e.tuifenImg}}),e._v(" "),i("span",[e._v("推荐赚积分")]),e._v(" "),i("span",{staticStyle:{"margin-top":".10rem"}},[e._v("3000")])]),e._v(" "),i("li",{staticStyle:{"border-bottom":"0.01rem solid #ddd"}},[i("img",{attrs:{src:e.sharefenImg}}),e._v(" "),i("span",[e._v("分享赚积分")]),e._v(" "),i("span",{staticStyle:{"margin-top":".10rem"}},[e._v("双倍")])]),e._v(" "),i("li",{staticStyle:{"border-right":"0.01rem solid #ddd",padding:".40rem 0"}},[i("img",{attrs:{src:e.buypackImg}}),e._v(" "),i("span",[e._v("更多试用")])]),e._v(" "),i("li",{staticStyle:{"border-right":"0.01rem solid #ddd",padding:".40rem 0"}},[i("img",{attrs:{src:e.zhuanImg}}),e._v(" "),i("span",[e._v("专属产品")])]),e._v(" "),i("li",{staticStyle:{padding:".40rem 0"}},[i("img",{attrs:{src:e.giftImg}}),e._v(" "),i("span",[e._v("粉领礼包")])])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"white"==e.listObj.levelCode||"golden"==e.listObj.levelCode,expression:"listObj.levelCode=='white' || listObj.levelCode=='golden'"}],staticClass:"getPink",on:{click:e.kaiPinkuse}},[i("p",[e._v("一步到位 ￥"+e._s(e.fenMoney)+"/年 享粉领特权")]),e._v(" "),i("img",{attrs:{src:e.getpinkImg}})]),e._v(" "),i("div",{staticClass:"jifenUse",on:{click:e.gotoJifen}},[i("p",[e._v("小积分 大用处\n\t\t\t\t"),i("img",{attrs:{src:e.goImg}})])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showFen,expression:"showFen"}],staticClass:"pinkOwn"},[i("span",{staticStyle:{margin:"0 .30rem","font-weight":"700"}},[e._v("粉领专享")])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showFen,expression:"showFen"}],staticClass:"cent"},[i("ul",[e._l(e.curObj,function(t){return i("li",{on:{click:function(i){e.goBuy(t.productId)}}},[i("img",{attrs:{src:t.image}}),e._v(" "),i("p",{staticClass:"top"},[e._v(e._s(t.productName))]),e._v(" "),i("p",{staticStyle:{"font-size":".34rem",color:"#fc469a","line-height":".32rem"}},[e._v("￥"+e._s(t.price)+"\n\t\t\t\t\t"),i("span",{staticStyle:{"font-weight":"normal","text-align":"center",width:".60rem",height:".32rem","font-size":".24rem",display:"inline-block",color:"#fff",background:"#fc469a"}},[e._v("粉领")])]),e._v(" "),i("p",{staticClass:"botMoney"},[i("span",{staticClass:"left"},[e._v("OL圈价：￥"+e._s(t.marketPrice))])])])}),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.showTrue,expression:"showTrue"}],staticClass:"special"},[e._v("没有更多了")])],2)])])},staticRenderFns:[]}}});