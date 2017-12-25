<template>
	
	<!--<div class="step">
		<p class="bot"></p>
		<p class="cent" v-bind:style="{width:Number(perWidth.split('%')[0])/100*3+'rem'}"></p>
	</div>-->
	<div class="tryIndex" >
		
		<Linking></Linking>
		<swiper loop auto :list="urlList" height='3.40rem'  dots-position='center' v-show="urlList.length!=0"></swiper>
		<div class="message">
			
			<div class="leftfen">
				<img :src="tryfenImg"/>
				
				<span>我的积分：{{memList.score}}</span>
			</div>
			<div class="leftmine" @click='getTry'>
				<img :src="trymineImg"/>
				<span>我的试用</span>
			</div>
		</div>
		<div class="benefit">
			<ul>
				<li v-for="item in cateObj" @click="getNomore(item.id,item.categoryType)">
					<img :src="item.categoryIcon"/>
					<span>{{item.categoryName}}</span>
				</li>
				
			</ul>
		</div>
		<div class="goods-name" v-for="item in curObj" @click='gototry(item.productId)'>
			<div class="food" >
				<div class="fodImg">
					<img :src="item.image"/>
				</div>
				<div class="fodName">{{item.productName}}
					<div class="gotry">
						<span style="font-size:.24rem ; color: #959595;"><b style="color: #ed0276;font-size: .32rem;">{{item.score}}</b>
							积分</span>
						<span class="spebot">去试用</span>
					</div>
					<div class="progress">
						<p class="use">已试用{{item.percent}}</p>
						<p class="bei" v-bind:style="{width:item.percent}"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Swiper} from 'vux'
	export default {
		data : function(){
			return{
				perWidth:"50%",
				urlList:[],
				goodsImg:'/static/images/goodsImg.png',
				tryfenImg:'/static/images/tryfen.png',
				trymineImg:'/static/images/trymine.png',
				indexImg:'/static/images/index.png',
				shiyongImg:'/static/images/shiyong.png',
				zhuanxiangImg:'/static/images/zhuanxiang.png',
				pinpinImg:'/static/images/pinpin.png',
				temaiImg:'/static/images/temai.png',
				
				curObj:[],
				memList:[],
				isMore:true,
				pageObj:{
					page:1,
				},
				cateObj:[],
				shareData : {
					'title': "OL圈 试用中心",
					'description': "试,是一种态度。每日10,20点限量开抢！",
					'url': "",
					'picURL': "http://ol-site.olquan.com/plug/mobile/img/logoo.jpg",
					'hide':true,
					'share':false
				},
				
			}
		},
		components: {
		    Swiper
		},
		created: function() {
			this.$store.commit('documentTitle','试用中心');
			this.getImgtop();
			this.getList();
			this.getCate();
		},
		mounted(){
			this.addWeixinShare();//微信分享 	
			window.addEventListener('scroll', this.handleScroll);
		},
		methods:{
			//获取试用分类
			getCate(){
				let data={
					
				}
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.cateGories,data,this.getCateBack,this);
			},
			getCateBack(data){
				console.log(data)
				this.cateObj=data.result;
			},
			
			//点击试用分类
			getNomore(id,type){
				console.log(id)
				console.log(type)
				if(type==2){
					this.$router.push({path:'/try/moretry'+'?memberId='+this.$route.query.memberId});
				}else if(type==3){
					window.location.href=API_HOST+'weixin/protocol/protocol?code=freeUseDesc';
				}else if(type==4){
					window.location.href=API_HOST+'ol/buy-zd.html?memberId'+this.$route.query.memberId;
				}else if(type==1){
					this.$router.push({path:'/try/detailtry/id/'+id+'?memberId='+this.$route.query.memberId});
				}
			},
			//点击我的试用
			getTry(){
				window.location.href=API_HOST+'weixin/member/freeUseCore?mmm='+this.$route.query.memberId;
			},
			//点击列表商品
			gototry(id){
				console.log(id)
				this.$router.push({path:'/try/trygoods/id/'+id+'?memberId='+this.$route.query.memberId});
			},
			
			//轮播图获取
			getImgtop(){
				let data={
					memberId:this.$route.query.memberId,
				}
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.freeUseHomePage,data,this.getImgBack);
			},
			getImgBack(data){
				this.memList=data.result;
				
				if(data.result.banners){
					this.imgObj=data.result.banners;
				}else{
					this.imgObj=[];
				}
				
				this.urlList = this.imgObj.map((item, index) => ({
				  url: item.url,
				  img: item.image,
				  
				}))
			},
			getList(){
				let data={
					page:1,
					rows:20
				}
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getScoreDataAll,data,this.getListBack);
			},
			getListBack(data){
				console.log(data)
				this.curObj=data.result;
				//this.shareData.url="http://ol-site.olquan.com/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+'try/center');
				this.shareData.url="http://test-mobile.olquan.cn/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+'try/center');
			},
			handleScroll () {
  			  var height=document.body.scrollHeight;
  				//console.log(height)
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				//console.log(this.scrollTop)
			  var windowH=window.innerHeight;
			  if(scrollTop + windowH >=height-200){
			  	if(this.isMore){
	 				this.isMore=false;
	 				let data={
	  					page:this.pageObj.page+1,
	  					rows:20,
	  				};
	  				this.pageObj.page=this.pageObj.page+1
					this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getScoreDataAll,data,this.getListMoreBack);
	 			}
			  }
	 			
			},
			getListMoreBack(data){
				if(data.result.length<20){
					this.isMore=false;
					
				}else{
					this.isMore=true;
				}
				for(let i=0; i<data.result.length; i++){
					this.curObj.push(data.result[i])
				}
				
				console.log(this.curObj)
			
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
		}
	}
</script>

<style lang="scss" scoped>
	.tryIndex{
		
		.message{
			display: flex;
			display:-webkit-box;
		    display: -moz-box;
		    display: -ms-flexbox;
		    display: -webkit-flex;
		    display: -moz-flex;
			-webkit-justify-content:space-around;
			justify-content:space-around;
			-moz-box-pack:space-around;
			-webkit--moz-box-pack:space-around;
			font-size: .28rem;
			color: #666;
			background: #fff;
			line-height: .64rem;
			.leftfen{
				width: 50%;
				text-align: center;
				img{
					display: inline-block;
					width: .28rem;
					height: .22rem;
					
				}
				span{
					display: inline-block;
				}
			}
			.leftmine{
				text-align: center;
				width: 50%;
				img{
					display: inline-block;
					width: .23rem;
					height: .28;
				}
				span{
					display: inline-block;
				}
			}
		}
		.benefit{
			margin: .10rem 0;
			padding: 0.20rem .40rem 0;
			background: #fff;
			ul{
				display: flex;
				display:-webkit-box;
			    display: -moz-box;
			    display: -moz-flex;
			    display: -ms-flexbox;
			    display: -webkit-flex;
				-webkit-justify-content:flex-start;
				justify-content:flex-start;
				-moz-box-pack:flex-start;
				-webkit--moz-box-pack:flex-start;
				flex-wrap:wrap;
				-webkit-flex-wrap:wrap;
				-webkit-box-lines:multiple;
				-moz-flex-wrap:wrap;
				
				li{
					margin-bottom: .20rem;
					font-size:0.24rem;
					text-align: center;
					width: 20%;
					display: flex;
					display: -moz-flex;
					display:-webkit-box;
				    display: -moz-box;
				    display: -ms-flexbox;
				    display: -webkit-flex;
					-webkit-justify-content:center;
					justify-content:center;
					-moz-box-pack:center;
					-webkit--moz-box-pack:center;
					flex-wrap:wrap;
				    -webkit-flex-wrap:wrap;
			        -webkit-box-lines:multiple;
			        -moz-flex-wrap:wrap;
					
					span{
						color: #666666;
						display: block;
					}
					img{
						display: block;
						height: .90rem;
						width: .90rem;
						border-radius: 50%;
						margin-bottom: .20rem;
						
						
					}
				}
			}
		}
		.goods-name{
			overflow: hidden;
		.food{
			padding:  .45rem .24rem .40rem;
			overflow: hidden;
			background: #fff;
			margin-bottom: .10rem;
			border-bottom: .01rem solid #f2f2f2;
			float: left;
			/*display: flex;
			display:-webkit-box;
			display: -webkit-flex;
			display: -moz-box;
			display: -moz-flex;
			display: -ms-flexbox;
			-webkit-box-pack: center;
		    -moz-box-pack: center;
		    -ms-flex-align:center;
		    -webkit-align-items: center;
		    -moz-align-items: center;
		    align-items: center;*/
			.fodImg{
				
				width: 40%;
				border-radius: .05rem;
				float: left;
				display: flex;
				display:-webkit-box;
				display: -webkit-flex;
				display: -moz-box;
				display: -moz-flex;
				display: -ms-flexbox;
				-webkit-box-pack: center;
			    -moz-box-pack: center;
			    -ms-flex-align:center;/* IE 10 */
			    -webkit-align-items: center;
			    -moz-align-items: center;
			    align-items: center;
				img{
					display: block;
					
					width: 100%;
				}
				
			}
			.fodName{
				float: left;
				width: 56.58%;
				margin-left: .24rem;
				font-size: .28rem;
				line-height: .38rem;
				word-wrap: break-word;
				.gotry{
					margin: .45rem 0 .40rem;
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
					.spebot{
						display: inline-block;
						width: 1.10rem;
						height: .50rem;
						color: #FFF;
						background: #ed0477;
						text-align: center;
						border-radius: .50rem;
						line-height: .50rem;
					}
					
				}
				.progress{
					width: 100%;
					height: .28rem;
					border-radius: .28rem;
					border: 0.01rem solid #ed0477;
					position: relative;
					.use{
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						line-height: .26rem;
						text-align: center;
						font-size: .24rem;
						color: #ed0477;
						z-index: 333;
					}
					.bei{
						position: absolute;
						left: 0.01rem;
						top: 0.01rem;
						height: .26rem;
						border-radius: .26rem;
						background: #f5eaf6;
						z-index: 200;
					}
				}
			}
		}
	}
	}

</style>