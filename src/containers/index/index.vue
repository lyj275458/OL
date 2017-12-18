<template>
	<div class="index">
		<swiper loop auto :list="urlList" height='4.10rem'  dots-position='center' v-show="urlList.length!=0"></swiper>
		<div class="cent">
			<ul class="init" >
			  <li v-for="item in listObj" @click="geDetail(item.productId)">
			  	<p class="goodsImg">
			  		<img :src="item.productImage" class="goosImg"/>
					
				</p>
				<p class="goodsdetail">
					<span class="describe">{{item.productName}}</span><br />
					<span class="pricedetail">
						￥{{item.price}}<i>已拼{{item.successCount}}件</i>
					</span>
					
					<span class="jionmember">
						<img class="jion" v-for="items in item.joinMembers" :src="items.memberLogo" />
					</span>
					
					
					<span class="shopping" >
						去拼团
					</span>
				</p>
					
			  </li>
			 	
			</ul>
		</div>
		<div class="tuijian">
			<img :src="xianImgone"/>
				更多精选
			<img :src="xianImgone"/>
			<span>精品推荐</span>
		</div>
		<div class="content">
			<ul>
				<li v-for='item in curObj' @click="goBuy(item.productId)">
					<img :src="item.productImage" />
					<p class="top">{{item.productName}}</p>
					<p style="font-size: .30rem;color: #fa006a;font-weight: 700;">￥{{item.price}}
						<span style="color: #b3b3b3;font-size: .24rem;font-weight: normal;" v-show="item.count>0">已拼{{item.count}}件</span>
					</p>
					<p class="botMoney">
						<img v-for="items in item.joinMembers" :src="items.memberLogo" v-show="item.joinMembers.length>0"/>
						<!--<span class="goBuy" v-show="item.joinMembers.length==0">去拼团</span>-->
					</p>
				</li>
				
				<li v-show="showTrue" class="special">没有更多了</li>
			</ul>
		</div>
		<div class="goFortop" v-show="showTop">
			<img :src="goTopImg" @click="gotoTop"/>
		</div>
	</div>
  
</template>

<script>
import { Swiper} from 'vux'
import $ from 'jquery';
var time;



export default {
	
	data : function(){
			return{
				imgObj:[],
				urlList:[],
				curObj:{},
				xianImgone:'/static/images/xian.png',
				peopleImgone:'/static/images/mametchi1.png',
				peopleImgtwo:'/static/images/mametchi2.png',
				peopleImgthree:'/static/images/mametchi3.png',
				pinpinImg:'/static/images/pinpin.png',
				goTopImg:'/static/images/goTop.png',
				listObj:[],
				list:[
			          1,
			          2,
          		],
				showTrue:false,
				isMore:true,
				pageObj:{
					page:1,
				},
				scrollTop:'',
				moreObj:[],
				shareData : {
					'title':"OL圈拼团",
					'description':"拼优惠，拼乐趣",
					'url': "",
					'picURL': "http://ol-h5-preview.olquan.cn/static/images/pinpin.png",
					'hide':true,
					'share':false
				},
				showTop:false
			}
		},
  components: {
    Swiper,
    $
    
  },
  ready () {
  },
  created: function() {
			this.$store.commit('documentTitle','拼团');
			this.getFirst();
			this.getImgtop();
			this.getList();
			
		},
  mounted(){
			window.addEventListener('scroll', this.handleScroll);
			this.addWeixinShare();//微信分享 	
		},
		wacth:{
			scrollTop(x,y){
				console.log(x)
				console.log(y)
			}
		},
  methods: {
  			//点击购买商品
  			goBuy(id){
  				window.location.href=API_HOST+'weixin/product/newProductDetail?productId='+id+'&memberId='+this.$route.query.memberId
  			},
  			
  			//加载更多
  			handleScroll () {
  			  var height=document.body.scrollHeight;
  				//console.log(height)
  				var offsetTop = document.querySelector('.tuijian').offsetTop;
  				//console.log(offsetTop)
			  this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				//console.log(this.scrollTop)
				if(this.scrollTop>600){
					this.showTop=true;
				}else{
					this.showTop=false;
				}
			  var windowH=window.innerHeight;
			  if(this.scrollTop + windowH >=height-200){
			  	
			  	if(this.isMore){
	 				this.isMore=false;
	 				let data={
	  					page:this.pageObj.page+1,
	  					rows:20,
	  				};
	  				this.pageObj.page=this.pageObj.page+1
					this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getTogetherList,data,this.getListMoreBack);
	 			}
			  }
	 			
			},
			getListMoreBack(data){
				if(data.result.length<20){
					this.isMore=false;
					this.showTrue=true;
				}else{
					this.isMore=true;
				}
				
				
				for(let i=0; i<data.result.length; i++){
					this.curObj.push(data.result[i])
				}
				//console.log(this.curObj)
			
			},
  			getList(){
  				let data={
  					page:1,
  					rows:20,
  				};
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getTogetherList,data,this.getListBack);

			},
			getListBack(data){
				//console.log(data);
				
				this.curObj=data.result;
			},
		getFirst(){
			let data={
				
			};
			this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getIndexTogetherList,data,this.getFirstBack);
		},
		getFirstBack(data){
			//console.log(data)
			this.listObj=data.result;
			//this.shareData.url="http://ol-site.olquan.com/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+'index/index?memberId='+this.$route.query.memberId);
			this.shareData.url="http://test-mobile.olquan.cn/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+'index/index?memberId='+this.$route.query.memberId);
			this.shareData.description="拼优惠，拼乐趣";
			//this.shareData.picURL=this.pinpinImg;
			console.log(this.shareData)
		},
		getImgtop(){
			let data={
				
			}
			this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getTogetherBanners,data,this.getImgBack);
		},
		getImgBack(data){
			if(data.result){
				this.imgObj=data.result;
			}else{
				this.imgObj=[];
			}
			
			this.urlList = this.imgObj.map((item, index) => ({
			  url: item.url,
			  img: item.image,
			  
			}))
//			console.log(this.urlList)
//			console.log(data)
		},
		geDetail(id){
			//console.log(id)
			window.location.href=API_HOST+'weixin/product/newProductDetail?productId='+id+'&memberId='+this.$route.query.memberId
		},
		//点击回到顶部
		gotoTop(){
//			document.body.scrollTop=0;
//			document.documentElement.scrollTop = 0	
			$('html,body').animate({scrollTop:0},1000);
		},
			//微信分享 
	  addWeixinShare:function(){
		var data = {                 
			"url":location.href,
			"callback":'',
	    };
	  // console.log(location.href)
	    
	    this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.weixinShare,data,this.shareBack,this);			
	  },
	  shareBack:function(data){
		//调用共用的分享接口
		//console.log(JSON.stringify(data.result))
		this.wxShareFun(data.result,this.shareData);
		//this.locationWx(data);
	  },
 	},
 	
  
}
</script>

<style lang="scss" scoped>

.index{
	
	
	
	.cent{
		margin-bottom: .30rem;
		padding-top: .10rem;
		background: #f2f2f2;
		.init{
			
		 
		 .noMore{
		 	font-size: .28rem;
		 	text-align: center;
		 	line-height: .56rem;
		 	color: #9C9C9C;
		 }
		 	li{
		 		margin-bottom:.10rem;
		 		overflow: hidden;
		 		position: relative;
		 		width: 100%;
		 		.goodsImg{
			 		
			 		width: 100%;
			 		
			 		overflow: hidden;
			 		display: flex;
			 		display: -moz-flex;
			 		align-items:center ;
			 		background: #fff;
			 		
			 		
			 		.goosImg{
			 			display: block;
			 			
			 			width: 100%;
			 		}
			 		
			 	}
			 	.goodsdetail{
			 		
			 		word-wrap: break-word;
			 		font-size: .28rem;
			 		padding: .12rem .24rem .20rem;
			 		
			 		
			 		background: #fff;
			 		position: relative;
			 		.describe{
			 			line-height: .42rem;
			 			
			 			display: block;
			 		}
			 		/*.peopleImg{
			 			position: relative;
			 			display: inline-block;
				 			img{
					 		display: inline-block;
					 		height: .48rem;
					 		width: .48rem;
					 		border-radius: 50%;
					 	}
					 	img:nth-child(2){
					 		position: absolute;
					 		top: 0rem;
					 		left: .30rem;
						 }
					 	img:nth-child(3){
					 		position: absolute;
					 		left: .64rem;
					 		top: 0rem;
					 	}
						 img:nth-child(4){
						 	position: absolute;
						 	left: .92rem;
						 	top:0rem;
						 }
			 		}*/
			 			
				 	
				 .pricedetail{
				 	font-size: .40rem;
				 	color: #fa006a;
				 	line-height: .54rem;
				 	font-weight: 700;
				 	display: inline-block;
				 	
				 	i{
				 		font-style: normal;
				 		color: #b3b3b3;
				 		font-weight: normal;
				 		font-size: .28rem;
				 		margin-left: .12rem;
				 	}
				 }
				 
			 	.jionmember{
				 	display: inline-block;
				 	height: .48rem;
				 	font-size: .28rem;
				 	position: absolute;
				 	right: 1.60rem;
				 	bottom: .26rem;
				 	.jion{
				 		display: inline-block;
				 		height: .48rem;
				 		width: .48rem;
				 		margin-left: -.18rem;
				 		border-radius: 50%;
				 		position: absolute;
				 	}
				 	.jion:nth-child(1){
				 		z-index: 123;
				 		right: 0rem;
				 	}
				 	.jion:nth-child(2){
				 		z-index: 125;
				 		right: .28rem;
				 	}
				 	.jion:nth-child(3){
				 		z-index: 127;
				 		right: .52rem;
				 	}
				 }
				
				 
				 .shopping{
				 	display: inline-block;
				 	width: 1.18rem;
				 	height: .56rem;
				 	border: .01rem solid #ff3893;
				 	border-radius: 0.05rem;
				 	text-align: center;
				 	line-height: .56rem;
				 	color: #fff;
				 	font-size: .30rem;
				 	position: absolute;
				 	right: 0.24rem;
				 	bottom: 0.20rem;
				 	background: #fa006a;
				 	
				 }
			 	}
			 
		 	}
	 	}
	}
	.tuijian{
		font-size: .32rem;
		line-height: .56rem;
		text-align: center;
		img{
			display: inline-block;
			width: .50rem;
			height: .02rem;
			vertical-align: middle;
			
			margin:-0.05rem .10rem 0;
		}
		span{
			display: block;
			font-size: .26rem;
			color: #ccc;
		}
	}
	.content{
		padding: .20rem .12rem;
		ul{
			width:100%;
			display: flex;
			display:-webkit-box;
			display: -moz-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: -moz-flex;
			-webkit-justify-content:space-between;
			justify-content:space-between;
			-moz-box-pack:space-between;
			-webkit--moz-box-pack:space-between;
			box-pack:space-between;
			flex-wrap:wrap;
			-webkit-flex-wrap:wrap;
		    -webkit-box-lines:multiple;
		    -moz-flex-wrap:wrap;
			.special{
				width: 100%;
				height: .56rem;
				background: none;
				color: #9C9C9C;
				line-height: .56rem;
				text-align: center;
				font-size:.28rem ;
			}
			li{
				width: 49.5%;
				padding-bottom: .20rem;
				background: #fff;
				margin-bottom:.10rem;
				position: relative;
				img{
					display: block;
					width: 100%;
					
				}
				.top{
					font-weight: normal;
					font-size: .30rem;
					color: #333;
					line-height: .45rem;
					height: .86rem;
					overflow: hidden;
					padding: .08rem;
					margin-bottom: .25rem;
				}
				.botMoney{
					display: block;
					overflow: hidden;
					font-size: .20rem;
					color: #b2b2b2;
					
					font-style: normal;
					position: absolute;
					right: 0;
					bottom: .10rem;
					z-index: 222;
					width: 100%;
					height: .48rem;
					padding-right: .24rem;
					.goBuy{
						display: block;
						width: 1.20rem;
						height: .48rem;
						background: #fa006a;
						text-align: center;
						font-size: .30rem;
						color: #fff;
						line-height: .48rem;
						border-radius: 0.05rem;
						position: absolute;
						top: 0;
						right: .12rem;
					}
					img{
						display: inline-block;
						height: .48rem;
						width: .48rem;
						border-radius: 50%;
						
					}
					img:nth-child(1){
						position: absolute;
						right: .12rem;
						top: 0;
						z-index: 200;
					}
					img:nth-child(3){
						position: absolute;
						right: .58rem;
						top: 0;
						z-index: 206;
					}
					img:nth-child(2){
						position: absolute;
						right: .36rem;
						top: 0;
						z-index: 202;
					}
				}
			}
		}
	}
	.goFortop{
		position: fixed;
		bottom: .60rem;
		right: .60rem;
		z-index: 333;
		img{
			display: block;
			width: .60rem;
			height: .60rem;
		}
	}
}

</style>