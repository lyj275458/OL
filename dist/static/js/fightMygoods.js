webpackJsonp([21,23],{287:function(e,t,s){s(681);var o=s(2)(s(370),s(756),"data-v-0567ec4d",null);e.exports=o.exports},370:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{useImg:"/static/images/use.jpg",iconImg:"/static/images/pinicon.png",goodsImg:"/static/images/goodsImg.png",headImg:"/static/images/headImg.png",smallImg:"/static/images/small.png",curObj:[],getMemberId:this.$route.query.memberId,searchObj:{staus:" "},isMore:!0,pageObj:{page:1},shareData:{title:"我们一起来拼团吧",description:"我的拼团订单",url:"",picURL:"http://ol-h5-preview.olquan.cn/static/images/pinpin.png",hide:!0,share:!1}}},created:function(){this.getList({}),console.log(this.searchObj.status),this.$store.commit("documentTitle","我的拼团")},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.addWeixinShare()},methods:{getList:function(){this.setCookie("number","");var e={memberId:this.$route.query.memberId,status:this.searchObj.status};this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.togetherJoinRecordList,e,this.getListBack,this)},getListBack:function(e){e.result?this.curObj=e.result:this.curObj=[],console.log(this.shareData),this.shareData.url="http://test-mobile.olquan.cn/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+"fightAlone/mygoods")},handleScroll:function(){var e=document.body.scrollHeight;this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;var t=window.innerHeight;if(this.scrollTop+t>=e-200&&this.isMore){this.isMore=!1;var s={page:this.pageObj.page+1,rows:20,memberId:this.$route.query.memberId,status:this.searchObj.status};this.pageObj.page=this.pageObj.page+1,this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.togetherJoinRecordList,s,this.getListMoreBack)}},getListMoreBack:function(e){e.result.length<20?(this.isMore=!1,this.showTrue=!0):this.isMore=!0;for(var t=0;t<e.result.length;t++)this.curObj.push(e.result[t])},getdetailOne:function(){this.searchObj.status="",this.getList({}),this.isMore=!0,this.pageObj.page=1},getdetailTwo:function(){this.searchObj.status="0",this.getList({}),this.isMore=!0,this.pageObj.page=1},getdetailThree:function(){this.searchObj.status="1",this.getList({}),this.isMore=!0,this.pageObj.page=1},getdetailFour:function(){this.searchObj.status="2",this.getList({}),this.isMore=!0,this.pageObj.page=1},getDetail:function(e,t){console.log(e),this.$router.push({path:"/order/detail/id/"+e+"?memberId="+t})},getFriend:function(e,t){console.log(t),this.$router.push({path:"/order/partake/id/"+e+"?memberId="+t})},goDetail:function(e){window.location.href=API_HOST+"weixin/product/newProductDetail?productId="+e+"&memberId="+this.$route.query.memberId},addWeixinShare:function(){var e={url:location.href,callback:""};console.log(location.href),this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.weixinShare,e,this.shareBack,this)},shareBack:function(e){this.wxShareFun(e.result,this.shareData)}}}},654:function(e,t,s){t=e.exports=s(3)(),t.push([e.id,".myGoods .goods-top[data-v-0567ec4d]{border-top:.01rem solid #f2f2f2}.myGoods .goods-top ul[data-v-0567ec4d]{padding:0 .24rem;color:#999;line-height:.9rem;background:#fff;display:flex;display:-moz-flex;display:-ms-flexbox;display:-webkit-flex;font-weight:700;-ms-flex-pack:justify;justify-content:space-between;-moz-box-pack:space-between;-webkit--moz-box-pack:space-between;font-size:.26rem}.myGoods .goods-top ul .special[data-v-0567ec4d]{color:#e50f72;border-bottom:.01rem solid #e50f72}.myGoods .goods-detail[data-v-0567ec4d]{margin-bottom:.1rem;background:#fff}.myGoods .goods-detail .top[data-v-0567ec4d]{font-size:.26rem;line-height:.76rem;border-bottom:.01rem solid #f2f2f2}.myGoods .goods-detail .top p[data-v-0567ec4d]{padding:0 .24rem;overflow:hidden}.myGoods .goods-detail .top p .left[data-v-0567ec4d]{float:left}.myGoods .goods-detail .top p .left i[data-v-0567ec4d]{font-style:normal;color:#ff0101}.myGoods .goods-detail .top p .right[data-v-0567ec4d]{float:right;color:#f8348b}.myGoods .goods-name .food[data-v-0567ec4d]{padding:.24rem;overflow:hidden;border-bottom:.01rem solid #f2f2f2}.myGoods .goods-name .food .fodImg[data-v-0567ec4d]{height:1.4rem;width:1.4rem;border-radius:.05rem;float:left;display:flex;display:-moz-flex;display:-ms-flexbox;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-align:center;-moz-align-items:center;align-items:center}.myGoods .goods-name .food .fodImg img[data-v-0567ec4d]{display:block;width:100%}.myGoods .goods-name .food .fodName[data-v-0567ec4d]{float:left;width:70%;margin-left:.24rem;font-size:.26rem;line-height:.38rem;word-wrap:break-word}.myGoods .goods-name .food .fodName span[data-v-0567ec4d]{line-height:.66rem}.myGoods .headImg[data-v-0567ec4d]{font-size:.2rem}.myGoods .headImg .headImg-list[data-v-0567ec4d]{overflow:hidden;padding:.14rem .24rem;border-bottom:.01rem solid #f2f2f2}.myGoods .headImg .headImg-list ul[data-v-0567ec4d]{float:left;overflow:hidden;line-height:.66rem}.myGoods .headImg .headImg-list ul li[data-v-0567ec4d]{float:left;height:.45rem;width:.45rem;border-radius:50%;margin-right:.1rem}.myGoods .headImg .headImg-list ul li img[data-v-0567ec4d]{display:block;height:100%;vertical-align:middle;width:100%;border-radius:50%}.myGoods .headImg .headImg-list p[data-v-0567ec4d]{float:right;color:#666;line-height:.46rem;font-weight:700;font-size:.24rem}.myGoods .bot[data-v-0567ec4d]{height:1.1rem;position:relative}.myGoods .bot .detail[data-v-0567ec4d]{width:1.2rem;color:#a2a2a2;border:.01rem solid #a2a2a2;border-radius:.05rem;right:2.08rem}.myGoods .bot .detail[data-v-0567ec4d],.myGoods .bot .fried[data-v-0567ec4d]{height:.68rem;font-size:.24rem;line-height:.7rem;text-align:center;top:50%;margin-top:-.25rem;position:absolute}.myGoods .bot .fried[data-v-0567ec4d]{width:1.6rem;color:#fffefe;border:.01rem solid #ff3893;background:#ff3893;border-radius:.05rem;right:.24rem}",""])},681:function(e,t,s){var o=s(654);"string"==typeof o&&(o=[[e.id,o,""]]);s(4)(o,{});o.locals&&(e.exports=o.locals)},756:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"myGoods"},[s("div",{staticClass:"goods-top"},[s("ul",[s("li",{class:{special:void 0==e.searchObj.status||""==e.searchObj.status},on:{click:e.getdetailOne}},[e._v("全部订单")]),e._v(" "),s("li",{class:{special:"0"==e.searchObj.status},on:{click:e.getdetailTwo}},[e._v("待拼团")]),e._v(" "),s("li",{class:{special:"1"==e.searchObj.status},on:{click:e.getdetailThree}},[e._v("拼团成功")]),e._v(" "),s("li",{class:{special:"2"==e.searchObj.status},on:{click:e.getdetailFour}},[e._v("拼团失败")])])]),e._v(" "),e._l(e.curObj,function(t){return s("div",{staticClass:" goods-detail"},[s("div",{staticClass:"top"},[s("p",[s("span",{directives:[{name:"show",rawName:"v-show",value:1==t.isOwner,expression:"item.isOwner==1"}],staticClass:"left"},[e._v("发起了拼团 ("+e._s(t.time)+")")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:1!=t.isOwner,expression:"item.isOwner!=1"}],staticClass:"left"},[e._v("参与了拼团 ("+e._s(t.time)+")")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:2==t.isSuccess,expression:"item.isSuccess==2"}],staticClass:"right"},[e._v("拼团失败")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:0==t.isSuccess,expression:"item.isSuccess==0"}],staticClass:"right"},[e._v("待拼团")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:1==t.isSuccess,expression:"item.isSuccess==1"}],staticClass:"right"},[e._v("拼团成功")])])]),e._v(" "),s("div",{staticClass:"goods-name"},[s("div",{staticClass:"food",on:{click:function(s){e.getDetail(t.togetherRecordId,e.getMemberId)}}},[s("p",{staticClass:"fodImg"},[s("img",{attrs:{src:t.productImage}})]),e._v(" "),s("p",{staticClass:"fodName"},[e._v(e._s(t.productName)+"\n\t\t\t\t\t"),s("br"),e._v(" "),s("span",[e._v("￥"+e._s(t.price))]),s("br"),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.score,expression:"item.score!=''"}],staticStyle:{color:"#949494","font-size":".24rem","line-height":"0"}},[e._v(e._s(t.score))])])])]),e._v(" "),s("div",{staticClass:"headImg"},[s("div",{staticClass:"headImg-list"},[s("ul",[e._l(t.joinMemberData,function(t,o){return o<6?s("li",[s("img",{attrs:{src:t.memberLogo}})]):e._e()}),e._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.joinMemberData.length>6,expression:"item.joinMemberData.length>6"}]},[s("img",{attrs:{src:e.smallImg}})])],2),e._v(" "),s("p",[e._v(e._s(t.joinMemberData.length)+"人与你拼团")])])]),e._v(" "),s("div",{staticClass:"bot"},[s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.isSuccess,expression:"item.isSuccess==1"}],staticClass:"detail",on:{click:function(s){e.getDetail(t.togetherRecordId,e.getMemberId)}}},[e._v("订单详情")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2!=t.isSuccess,expression:"item.isSuccess!=2"}],staticClass:"fried",on:{click:function(s){e.getFriend(t.togetherRecordId,e.getMemberId)}}},[e._v("邀请好友拼团")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2==t.isSuccess,expression:"item.isSuccess==2"}],staticClass:"fried",on:{click:function(s){e.goDetail(t.productId)}}},[e._v("重新拼团")])])])})],2)},staticRenderFns:[]}}});