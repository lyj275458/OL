webpackJsonp([14,18],{288:function(t,e,s){s(670);var i=s(2)(s(367),s(740),"data-v-15883edf",null);t.exports=i.exports},367:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{addSelect:0,no1Img:"/static/images/no1.png",no2Img:"/static/images/no2.png",no3Img:"/static/images/no3.png",no4Img:"/static/images/no4.png",no5Img:"/static/images/no5.png",one2Img:"/static/images/one2.png",two2Img:"/static/images/two2.png",three2Img:"/static/images/three2.png",four2Img:"/static/images/four2.png",five2Img:"/static/images/five2.png",six2Img:"/static/images/six2.png",seven2Img:"/static/images/seven2.png",eight2Img:"/static/images/eight2.png",isAndroid:"",isiOS:"",searchBarFixed:!1,shareData:{title:"小积分，大用处",description:"OL圈积分使用说明",url:"",picURL:"http://ol-site.olquan.com/plug/mobile/img/logoo.jpg",hide:!0,share:!1},iPhone:!1,Pc:!1}},beforeCreate:function(){},created:function(){this.browserRedirect(),this.showPhone(),this.getUrl(),this.$store.commit("documentTitle","积分说明")},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.addWeixinShare()},methods:{getUrl:function(){this.shareData.url="http://test-mobile.olquan.cn/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+"integral/uesget")},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector(".top").offsetTop;t>e?this.searchBarFixed=!0:this.searchBarFixed=!1},changeOne:function(){this.addSelect=0,document.body.scrollTop=0,document.documentElement.scrollTop=0},changeTwo:function(){this.addSelect=1,document.body.scrollTop=0,document.documentElement.scrollTop=0},showPhone:function(){var t=navigator.userAgent;this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,this.isiOS=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},getDetailOne:function(){this.iPhone?"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"weixin/freeUse/freeUse?type=3&memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("2"),this.isiOS&&(window.location.href="https://www.baidu.com/syzx")):window.location.href=API_HOST+"weixin/freeUse/freeUse?type=3&memberId="+this.$route.query.memberId},getDetailTwo:function(){this.iPhone?"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"ol/weixin/index/modelVM?code=index&memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("3"),this.isiOS&&(window.location.href="https://www.baidu.com/scsy")):window.location.href=API_HOST+"ol/weixin/index/modelVM?code=index&memberId="+this.$route.query.memberId},getDetailThree:function(){this.iPhone?"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"ol/withdraw.html?memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("4"),this.isiOS&&(window.location.href="https://www.baidu.com/wdqb")):window.location.href=API_HOST+"ol/withdraw.html?memberId="+this.$route.query.memberId},gotoZhuan:function(){window.location.href=CUR_URLBACK+"mine/index?memberId="+this.$route.query.memberId},getDetailFour:function(){this.iPhone?"wx"==tsApp.getClientBrowser()?window.location.href=API_HOST+"weixin/member/memberTwoCode2?memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("6"),this.isiOS&&(window.location.href="https://www.baidu.com/tghb")):window.location.href=API_HOST+"weixin/member/memberTwoCode2?memberId="+this.$route.query.memberId},getDetailFive:function(){this.iPhone?"wx"==tsApp.getClientBrowser()?window.location.href=CUR_URLBACK+"index/index?memberId="+this.$route.query.memberId:(this.isAndroid&&OLquan.toProduct("5"),this.isiOS&&(window.location.href="https://www.baidu.com/ptlb")):window.location.href=CUR_URLBACK+"index/index?memberId="+this.$route.query.memberId},browserRedirect:function(){var t=navigator.userAgent.toLowerCase(),e="ipad"==t.match(/ipad/i),s="iphone os"==t.match(/iphone os/i),i="midp"==t.match(/midp/i),a="rv:1.2.3.4"==t.match(/rv:1.2.3.4/i),n="ucweb"==t.match(/ucweb/i),o="android"==t.match(/android/i),r="windows ce"==t.match(/windows ce/i),c="windows mobile"==t.match(/windows mobile/i);e||s||i||a||n||o||r||c?(this.iPhone=!0,console.log(this.iPhone)):(this.Pc=!0,console.log(this.Pc))},addWeixinShare:function(){var t={url:location.href,callback:""};this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.weixinShare,t,this.shareBack,this)},shareBack:function(t){this.wxShareFun(t.result,this.shareData)}}}},647:function(t,e,s){e=t.exports=s(4)(),e.push([t.id,".ues[data-v-15883edf]{background:#fff;font-size:.3rem}.ues .top[data-v-15883edf]{line-height:1.4rem;margin-bottom:.2rem}.ues .top .isFixed[data-v-15883edf]{position:fixed;background-color:#fff;top:0;z-index:22;width:100%;padding:0;margin:0}.ues .top .isFixed[data-v-15883edf],.ues .top ul[data-v-15883edf]{display:flex;display:-ms-flexbox;display:-moz-flex;-ms-flex-pack:distribute;justify-content:space-around;-moz-box-pack:space-around;-webkit--moz-box-pack:space-around;box-pack:space-around}.ues .top ul li span i[data-v-15883edf]{font-style:normal}.ues .top ul li .special[data-v-15883edf]{border-bottom:.01rem solid #fc469a;color:#fc469a}.ues .howuse[data-v-15883edf]{display:flex;display:-ms-flexbox;display:-moz-flex;-ms-flex-pack:distribute;justify-content:space-around;-moz-box-pack:space-around;-webkit--moz-box-pack:space-around;box-pack:space-around;margin-bottom:.8rem;padding:0 .2rem}.ues .howuse .left[data-v-15883edf]{width:50%}.ues .howuse .left img[data-v-15883edf]{display:block;height:.82rem;width:.82rem;border-radius:50%;margin-top:.6rem}.ues .howuse .left .tittle[data-v-15883edf]{font-size:.32rem;font-weight:700;color:#000;line-height:.72rem}.ues .howuse .left span[data-v-15883edf]{font-size:.24rem;color:#666;line-height:.38rem}.ues .howuse .right[data-v-15883edf]{width:50%;display:flex;display:-ms-flexbox;display:-moz-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-moz-box-pack:center;-webkit--moz-box-pack:center;box-pack:center}.ues .howuse .right img[data-v-15883edf]{display:block;width:100%}.ues .answer .sep[data-v-15883edf]{text-align:center;font-size:.36rem;line-height:.72rem}.ues .answer .sep i[data-v-15883edf]{font-style:normal}.ues .answer .question[data-v-15883edf]{padding:.2rem}.ues .answer .question .ques[data-v-15883edf]{font-size:.32rem;font-weight:700;line-height:.64rem;margin-bottom:.1rem}.ues .answer .question .ans[data-v-15883edf]{font-size:.28rem;color:#666;line-height:.42rem;margin-bottom:.2rem}",""])},670:function(t,e,s){var i=s(647);"string"==typeof i&&(i=[[t.id,i,""]]);s(5)(i,{});i.locals&&(t.exports=i.locals)},740:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ues"},[s("div",{staticClass:"top"},[s("ul",{class:1==t.searchBarFixed?"isFixed":""},[s("li",[s("span",{class:{special:0===t.addSelect},on:{click:t.changeOne}},[s("i",[t._v("/")]),t._v("   "),s("b",[t._v("小积分大用处")]),t._v("   "),s("i",[t._v("/")])])]),t._v(" "),s("li",[s("span",{class:{special:1===t.addSelect},on:{click:t.changeTwo}},[s("i",[t._v("/")]),t._v("   "),s("b",[t._v("积分哪儿来")]),t._v("   "),s("i",[t._v("/")])])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.addSelect,expression:"addSelect===0"}],staticClass:"howuse",on:{click:t.getDetailOne}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.no1Img}}),t._v(" "),s("p",{staticClass:"tittle"},[t._v("攒积分试商品")]),t._v(" "),s("span",[t._v("参与积分试用")]),s("br"),t._v(" "),s("span",[t._v("支付所需积分加保证金")]),s("br"),t._v(" "),s("span",[t._v("随心试用")]),s("br"),t._v(" "),s("span",[t._v("保证金全退")]),s("br"),t._v(" "),s("span",{staticStyle:{color:"#000","line-height":".64rem"}},[t._v("去试用 >>")]),s("br")]),t._v(" "),s("div",{staticClass:"right"},[s("img",{attrs:{src:t.one2Img}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.addSelect,expression:"addSelect===0"}],staticClass:"howuse",on:{click:t.getDetailTwo}},[s("div",{staticClass:"right"},[s("img",{attrs:{src:t.two2Img}})]),t._v(" "),s("div",{staticClass:"left",staticStyle:{"text-align":"right"}},[s("img",{staticStyle:{"margin-left":"2.40rem"},attrs:{src:t.no2Img}}),t._v(" "),s("p",{staticClass:"tittle"},[t._v("小积分当钱用")]),t._v(" "),s("span",[t._v("100积分=1元钱")]),s("br"),t._v(" "),s("span",[t._v("购物选择积分支付")]),s("br"),t._v(" "),s("span",[t._v("轻松抵现")]),s("br"),t._v(" "),s("span",{staticStyle:{color:"#000","line-height":".64rem"}},[t._v("去下单 >>")]),s("br")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.addSelect,expression:"addSelect===0"}],staticClass:"howuse",on:{click:t.getDetailThree}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.no3Img}}),t._v(" "),s("p",{staticClass:"tittle"},[t._v("积分可提现")]),t._v(" "),s("span",[t._v("申请提现")]),s("br"),t._v(" "),s("span",[t._v("想怎么花就怎么花")]),s("br"),t._v(" "),s("span",{staticStyle:{color:"#000","line-height":".64rem"}},[t._v("去提现 >>")]),s("br")]),t._v(" "),s("div",{staticClass:"right"},[s("img",{attrs:{src:t.three2Img}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.addSelect,expression:"addSelect===1"}],staticClass:"howuse",on:{click:t.getDetailTwo}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.no1Img}}),t._v(" "),s("p",{staticClass:"tittle"},[t._v("购物送积分")]),t._v(" "),s("span",[t._v("商城购物,可获得产品相应积分")]),s("br"),t._v(" "),s("span",[t._v("注：粉领可获得金领双倍积分")]),s("br"),t._v(" "),s("span",{staticStyle:{color:"#000","line-height":".64rem"}},[t._v("去购物 >>")]),s("br")]),t._v(" "),s("div",{staticClass:"right"},[s("img",{attrs:{src:t.four2Img}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.addSelect,expression:"addSelect===1"}],staticClass:"howuse",on:{click:t.getDetailFour}},[s("div",{staticClass:"right"},[s("img",{attrs:{src:t.five2Img}})]),t._v(" "),s("div",{staticClass:"left",staticStyle:{"text-align":"right"}},[s("img",{staticStyle:{"margin-left":"2.40rem"},attrs:{src:t.no2Img}}),t._v(" "),s("p",{staticClass:"tittle"},[t._v("推荐会员送积分")]),t._v(" "),s("span",[t._v("①每推荐1个白领，送10积分")]),s("br"),t._v(" "),s("span",[t._v("②每推荐1个金领，送100积分")]),s("br"),t._v(" "),s("span",[t._v("③每推荐1个粉领，送3000积分")]),s("br"),t._v(" "),s("span",{staticStyle:{color:"#000","line-height":".64rem"}},[t._v("去推荐 >>")]),s("br")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.addSelect,expression:"addSelect===1"}],staticClass:"howuse",on:{click:t.getDetailFive}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.no3Img}}),t._v(" "),s("p",{staticClass:"tittle"},[t._v("拼团赚积分")]),t._v(" "),s("span",[t._v("一键开团")]),s("br"),t._v(" "),s("span",[t._v("即可成为团长")]),s("br"),t._v(" "),s("span",[t._v("邀请好友参团")]),s("br"),t._v(" "),s("span",[t._v("团长可获得相应的产品积分")]),s("br"),t._v(" "),s("span",{staticStyle:{color:"#000","line-height":".64rem"}},[t._v("去拼团 >>")]),s("br")]),t._v(" "),s("div",{staticClass:"right"},[s("img",{attrs:{src:t.six2Img}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.addSelect,expression:"addSelect===1"}],staticClass:"howuse",on:{click:t.gotoZhuan}},[s("div",{staticClass:"right"},[s("img",{attrs:{src:t.seven2Img}})]),t._v(" "),s("div",{staticClass:"left",staticStyle:{"text-align":"right"}},[s("img",{staticStyle:{"margin-left":"2.40rem"},attrs:{src:t.no4Img}}),t._v(" "),s("p",{staticClass:"tittle"},[t._v("粉领专享送积分")]),t._v(" "),s("span",[t._v("购买粉领专享产品")]),s("br"),t._v(" "),s("span",[t._v("可获得相应积分")]),s("br"),t._v(" "),s("span",[t._v("粉圈内的粉领购买粉领专享产品")]),s("br"),t._v(" "),s("span",[t._v("你可获得相应积分")]),s("br"),t._v(" "),s("span",{staticStyle:{color:"#000","line-height":".64rem"}},[t._v("去专享 >>")]),s("br")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.addSelect,expression:"addSelect===1"}],staticClass:"howuse"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.no5Img}}),t._v(" "),s("p",{staticClass:"tittle"},[t._v("分享送积分")]),t._v(" "),s("span",[t._v("一键分享")]),s("br"),t._v(" "),s("span",[t._v("锁定好友进入我的粉圈")]),s("br"),t._v(" "),s("span",[t._v("粉圈好友购物")]),s("br"),t._v(" "),s("span",[t._v("即可获得相应积分")]),s("br"),t._v(" "),s("span",[t._v("积分等同于自己购物的积分")]),s("br")]),t._v(" "),s("div",{staticClass:"right"},[s("img",{attrs:{src:t.eight2Img}})])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"answer"},[s("p",{staticClass:"sep"},[s("i",[t._v("/")]),t._v("   "),s("b",[t._v("小积分大用处")]),t._v("   "),s("i",[t._v("/")])]),t._v(" "),s("div",{staticClass:"question"},[s("p",{staticClass:"ques"},[t._v("Q1：积分有什么用？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("参与积分试用、平台购物当钱用、可提现（详情请见以上“小积分 大用处”）")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q2：如何获取积分呢？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("购物、分享、推荐会员、拼团、专享均可获取积分（详情请见以上“积分哪儿来”）")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q3：积分和钱的比例是怎样的？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("100积分=1元，"),s("br"),t._v("例：商品价格为10元，我有100积分可进行抵用，只需再付款9元即可购买此商品。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q4：用钱可以购买积分吗？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("积分不可以直接用钱购买。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q5: OL圈积分有有效期吗？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("积分永久有效。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q6：什么是积分试用？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("积分试用是OL圈平台联合商家推出的VIP会员回馈活动，新品，爆款，好货不断更新。首页-试用-积分试用，选择心仪的试用商品，支付所需积分及试用保证金，即可参与积分试用。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q7：积分试用的积分和钱退吗？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("“积分试用”所支付的试用保证金全额退，积分不退还。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q8：积分试用的钱退到哪儿？要多久？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("“积分试用”申请退款后，次日开始计算，30天到账，除小金库支付退回小金库，其他方式支付一律退至OL圈余额账户，余额可消费，可申请提现。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q9：积分试用的产品支持7天无理由退换么？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("支持退换，但是客户需要承担退回的快递费用（需向客服提供退回的快递单号，客服与商家确认核实后会在3个工作日内返还支付金额与使用积分。）"),s("br"),t._v("注：偏远地区会支付商家寄件产生的费用作为商家的补偿。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q10：怎么查看我的积分？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("查看方式：个人中心-我的钱包-可用积分/待定积分")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q11：赚的积分什么时候能到？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("①通过推荐会员赚的积分将即时进入“可用积分”。"),s("br"),t._v("②通过其他方式获得或者赚的积分将进入“待定积分”，15天后转为“可用积分”。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q12：购买了68.9元的粉领专享商品，为什么积分只有68？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("购买“粉领专享”商品获得的积分，数值中小数点后的积分值自动舍弃，68.9的产品获得的积分为68。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q13：余额账户的钱提现后多久能到账？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("提现申请开始，15个工作日后到账。（15不包含周末及法定节假日）。")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q14：推荐会员赚积分，怎样推荐呢？")]),t._v(" "),s("p",{staticClass:"ans"},[s("span",[t._v("1、如何推荐白领？")]),s("br"),t._v("\n\t\t\t\t金领、粉领可通过："),s("br"),t._v("\n\t\t\t\ta、分享商城任意链接，非会员点击，授权登录OL圈；"),s("br"),t._v("\n\t\t\t\tb、分享商品二维码/个人二维码，非会员点击，授权登录OL圈；"),s("br"),t._v("\n\t\t\t\t成功推荐白领，获得10积分/个。"),s("br"),t._v(" "),s("span",{staticStyle:{"margin-top":".30rem",display:"inline-block"}},[t._v("2、如何推荐金领？")]),s("br"),t._v("\n\t\t\t\t金领、粉领可通过："),s("br"),t._v("\n\t\t\t\ta、粉圈内白领在平台任意消费一笔；"),s("br"),t._v("\n\t\t\t\tb、分享平台商品，非会员直接购买；"),s("br"),t._v("\n\t\t\t\t成功推荐金领，获得100积分/个。"),s("br"),t._v(" "),s("span",{staticStyle:{"margin-top":".30rem",display:"inline-block"}},[t._v("3、如何推荐粉领？")]),s("br"),t._v("\n\t\t\t\t粉领可通过："),s("br"),t._v("\n\t\t\t\ta、粉圈内白领/金领自主开通粉领(不填写邀请码)；"),s("br"),t._v("\n\t\t\t\tb、非粉圈好友开通粉领时填写推荐人的领邀请码；"),s("br"),t._v("\n\t\t\t\t成功推荐粉领，获得3000积分/个。\n\t\t\t")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q15：推荐粉领时，被推荐人邀请码填错了一个字符怎么办？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("\n\t\t\t\t粉领的推荐，以邀请码为准，即开通时填写的谁的邀请码，就进入谁的粉圈。"),s("br"),t._v("\n\t\t\t\t若邀请码因错误而无效，则被推荐人仍停留在原粉圈。"),s("br"),t._v("\n\t\t\t\t账号默认为你的邀请码，为避免出错，建议复制粘贴。\n\t\t\t")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q16：怎么理解：“一键开团当团长，赚与团内订单总额等数值的积分。”？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("\n\t\t\t\t例：用户A开团，拼团商品售价100元，有10人（含自己）参与拼团成功。用户A将会获得100X10=1000积分。\n\t\t\t")]),t._v(" "),s("p",{staticClass:"ques"},[t._v("Q17：怎么理解：“自购/粉圈购粉领专享商品，赚与商品价格等数值的积分”？")]),t._v(" "),s("p",{staticClass:"ans"},[t._v("\n\t\t\t\t例：自己购买粉领专享商品价格为68元，即可获得68积分；你粉圈内的粉领会员购买此商品，你也会获得68积分。\n\t\t\t")])])])}]}}});