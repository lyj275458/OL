<template>
	<div class="goodsDetail">
		<Linking></Linking>
	    <swiper :aspect-ratio="1/1":list="imgList" dots-position="center" :auto='true' :loop="true"></swiper>
	    <div class="goodsName">{{curObj.productName}}</div>
	    <div class="score" v-show="curObj.buyNeedScore!=0">
	    	<p>{{curObj.buyNeedScore}}</p> 积分
	    </div>
	    <div class="goodsMoney">
	    	<p style="float: left;">试用保证金：￥{{curObj.salePrice}}</p>
	    	<p style="float: right;">已有400人试用 · 还剩{{curObj.store}}件</p>
	    </div>
	    <div class="list">
			<p class="listSon" v-for="item in curObj.tags"><img :src='chooseImg'/>{{item}}</p>
			<div class="erwei">
				<img :src="erweiImg" />
			</div>
		</div>
		<div class="howtry">
			<p class="tryleft">试用流程</p>
			<p class="tryright" @click='getTryDetail'>
				详细说明
				<img :src='rowImg'/>
			</p>
		</div>
		<div class="step">
			<img :src='trystepImg' />
		</div>
		<div class="howtry" v-show='curObj.commentCount>0'>
			<p class="tryleft">用户评价 ({{curObj.commentCount}})</p>
		</div>
		<div class="assess" v-show='curObj.commentCount>0'>
			<div class="top" v-for="(item,index) in curObj.comments" v-if="index<1">
				<div class="topImg">
					<div class="topleft">
						<img :src="item.memberLogo"/>{{item.memberName}}
					</div>
					<div class="topright">
						{{item.time}}
					</div>
				</div>
				<div class="detail">{{item.content}}</div>
				
			</div>
			<div class="seemore" >
				
				<p @click="lookMore">查看更多评价</p>
			</div>
		</div>
		<div class="shopname">
			<div class="shopleft">
				<img :src="curObj.sellerLogo" />{{curObj.sellerName}}
			</div>
			<div class="shopright" @click="getshop">
				<p>进店逛逛</p>
			</div>
		</div>
		<div class="imgdetail" v-html="curObj.detail" style="width: 100%;">
			<p style="width: 100%;">{{curObj.detail}}</p>
				
		</div>
		<div class="bottomshop">
			<ul class="use">
				<li @click='getkefu'>
					<p><img :src="kefuImg"/></p>
					<span style="font-size: .24rem; display: block;color: #9b9b9b; margin-top: .10rem;">客服</span>
				</li>
				<li @click='getshop'>
					<p><img :src="houseImg"/></p>
					<span style="font-size: .24rem; display: block;color: #9b9b9b; margin-top: .10rem;">店铺</span>
				</li>
				<li @click='shoucang'>
					<p>
						<img :src="shoucangImg" v-show='showShou==false'/>
						<img :src="collectedImg" v-show='showShou==true'/>
					</p>
					<span v-show='showShou==false' style="font-size: .24rem; display: block;color: #9b9b9b; margin-top: .10rem;">收藏</span>
					<span v-show='showShou==true'style="font-size: .24rem; display: block;color: #9b9b9b; margin-top: .10rem;">已收藏</span>
				</li>
			</ul>
			<div class="trytouse" @click="buyGoods">申请试用</div>
		</div>
		<div class="norms" v-show="chooseNor">
			<div class="choose">
				<img class="close" :src="colseImg" @click="closeShow"/>
				<img :src="curObj.image"  class="productImage" v-if="getNomoreObj.length<=0 || getNomoreObj.image==null"/>
				<img :src="getNomoreObj.image"  class="productImage" v-else/>
				
				<p class="detail">
					<span class="money">￥{{curObj.salePrice}}</span><br />
					<span class="num" v-if='getNomoreObj.length>0'>&nbsp;库存{{getNomoreObj.store}}件</span>
					<span class="num" v-else>&nbsp;库存{{curObj.store}}件</span>
				</p>
				<!--<div class="noMores" v-for="item in curObj.normals">
					<p class="name">
						{{item.key}}
					</p>
					<p class="size" >
						<span class="special" v-for="(items,index) in item.normses" v-model="getVlaueOne" @click="getValue(index,items.keyId,items.valueId)">{{items.value}}</span>
						
					</p>
				</div>-->
				
				<div class="noMores" v-if="nomoreOne!=undefined">
					<p class="nameClass">
						{{nomoreOne.key}}
					</p>
					<p class="size" >
						<span v-bind:class="{ 'special': index===addSelect}" v-for="(item,index) in nomoreOne.normses"   v-model="getVlaueOne" @click="getVlaueone(index,item.valueId)">{{item.value}}</span>
						
					</p>
				</div>
				<div class="noMores" v-if="nomoreTwo!=undefined">
					<p class="nameClass">
						{{nomoreTwo.key}}
					</p>
					<p class="size" >
						<span v-bind:class="{ 'special': index===addSelectTwo}" v-for="(item,index) in nomoreTwo.normses" @click="getVlauetwo(index,item.valueId)"  v-model="getVlaueTwo" >{{item.value}}</span>
						
					</p>
				</div>
				<div class="noMores" v-if="nomoreThree!=undefined">
					<p class="nameClass">
						{{nomoreThree.key}}
					</p>
					<p class="size" >
						<span v-bind:class="{ 'special': index===addSelectThree}" v-for="(item,index) in nomoreThree.normses"   v-model="getVlaueThree" >{{item.value}}</span>
						
					</p>
				</div>
				<div class="buyNum">
					<p class="left">购买数量</p>
					<p class="right">
						<span class="del" @click="delNum">
							<img :src="delImg" class="delnum"/>
						</span>
						<span class="num">{{num}}</span>
						<span class="add" @click="addNum">
							<img :src="addImg" class="addnum"/>
						</span>
					</p>
				</div>
				<div class="surePay" @click="goBuything">
					确 定
				</div>
			</div>
			
			<div class="tishi"  v-show="scroeEnt">
				<div class="tiTop">
					温馨提示
				</div>
				<div class="tiCen">
					您的积分不足
				</div>
				<div class="tiBots">
					<p class="tiBleft" @click='getCon'>取消</p>
					<p class="tiBright" @click="getScroe">如何获得积分</p>
				</div>
			</div>
		</div>
		
		<!--<div class="goFortop" v-show="showTop">
			<img :src="goTopImg" @click="gotoTop"/>
		</div>-->
	</div>
</template>

<script>
	import { Swiper, SwiperItem } from 'vux';
	import $ from 'jquery';
	export default {
		data : function() {
			return{
				imgList:[],
				curObj:[],
				chooseImg:'/static/images/choose.png',
				rowImg:'/static/images/rowright.png',
				trystepImg:'/static/images/trystep.png',
				kefuImg:'/static/images/kefu.png',
				shoucangImg:'/static/images/shoucang.png',
				houseImg:'/static/images/house.png',
				colseImg:'/static/images/colse.png',
				delImg:'/static/images/del.png',
				addImg:'/static/images/add.png',
				goTopImg:'/static/images/goTop.png',
				collectedImg:'/static/images/collected.png',
				erweiImg:'/static/images/erwei.png',
				chooseNor:false,
				scroeEnt:false,
				num:1,
				nomoreOne:[],
				nomoreTwo:[],
				nomoreThree:[],
				showShou:false,
				getNomoreObj:[],
				addSelect:0,
				addSelectTwo:0,
				memberScore:0,
				normalId:'',
				showTop:false,
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
		    Swiper,
		    SwiperItem,
		    $
		},
		created: function() {
			this.$store.commit('documentTitle','商品详情');
			this.getList();
			this.getMember();
			
		},
		mounted(){
			window.addEventListener('scroll', this.getScroll);
			this.moreWeixinShare();//微信分享 
			
		},
		methods:{
			//查看更多评价
			lookMore(){
				window.location.href=API_HOST+'ol/commentList.html?productId='+this.curObj.productId;
			},
			//查看详情说明
			getTryDetail(){
				window.location.href=API_HOST+'weixin/protocol/protocol?code=freeUseDesc';
			},
			//积分不足
			getCon(){
				this.scroeEnt=false;
			},
			getScroe(){
				this.$router.push({path:'/integral/uesget'+'?memberId='+this.$route.query.memberId});
			},
			//点击客服
			getkefu(){
				window.location.href='https://kefu.easemob.com/webim/im.html?tenantId=40231&ticket=false';	
			},
			getshop(){
				window.location.href=API_HOST+'weixin/sellerShop/sellerShop?sellerId='+this.curObj.sellerId+'&memberId='+this.curObj.memberId;
			},
			shoucang(){
				let data={
					objId:this.curObj.productId,
					memberId:this.curObj.memberId,
					type:1
				}
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.doCollect,data,this.shoucangBack,this);
				console.log(data)
			},
			shoucangBack(data){
				this.showShou=!this.showShou;
				if(this.showShou){
					this.$toast('收藏成功',1000);
				}else{
					this.$toast('取消收藏',1000);
				}
				console.log(this.curObj.isCollect)
			},
			getScroll(){
				//var offsetTop = document.querySelector('.goodsDetail').offsetTop;
				//console.log(offsetTop)
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				//console.log(scrollTop)
				if(scrollTop>600){
					this.showTop=true;
				}else{
					this.showTop=false;
				}
			},
			//点击回到顶部
			gotoTop(){
	//			document.body.scrollTop=0;
	//			document.documentElement.scrollTop = 0	
				$('html,body').animate({scrollTop:0},1000);
			},
			//获取会员信息
			getMember(){
				let data={
					memberId:this.$route.query.memberId,
				}
				//console.log(data)
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getMember,data,this.getMemberBack,this);
			},
			getMemberBack(data){
				this.memberScore=data.result.score;
				//console.log(this.memberScore)
			},
			closeShow(){
				this.chooseNor=false;
				this.showHeigth=false;
			},
			delNum(){
				this.num -=1;
				if(this.num<=0){
					this.num=1;
				}
			},
			addNum(){
				this.num +=1;
				if(this.num>this.curObj.limitBuyCount){
					this.num=this.curObj.limitBuyCount;
					this.$toast('该产品最多购买'+this.num+'件');
				}
			},
			//获取商品信息
			getList(){
				let data={
					productId:this.$route.params.id,
					memberId:this.$route.query.memberId,
					uutype:1
				}
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.productDetail,data,this.getListBack,this);
			},
			getListBack(data){
				//console.log(data)
				this.curObj=data.result;
				if(this.curObj.isCollect==0){
					this.showShou=false
				}else{
					this.showShou=true;
				}
				this.imgList = data.result.images.map((item, index) => ({
				  url: 'javascript:',
				  img: item
				}));
				//console.log(this.imgList.length);
				if(data.result.normals){
					if(data.result.normals.length>0 && data.result.normals.length<2){
						this.nomoreOne=data.result.normals[0];
						console.log(this.nomoreOne)
						this.getVlaueOne=data.result.normals[0].normses[0].valueId;
						this.getValueDetail();
						
					}else if(data.result.normals.length>1){
						this.nomoreOne=data.result.normals[0];
						console.log(this.nomoreOne)
						this.getVlaueOne=data.result.normals[0].normses[0].valueId;
						this.nomoreTwo=data.result.normals[1];
						this.getVlaueTwo=data.result.normals[1].normses[0].valueId;
						this.nomoreThree=data.result.normals[3]
						this.getValueDetail();
					}
					//console.log(this.nomoreThree)
				}
				//this.shareData.url="http://ol-site.olquan.com/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+'try/trygoods/id/'+this.curObj.productId);
				this.shareData.url="http://test-mobile.olquan.cn/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+'try/trygoods/id/'+this.curObj.productId);
				this.shareData.title=this.curObj.productName;
				this.shareData.description=this.curObj.summary;
				this.shareData.picURL=this.curObj.image;
				console.log(this.getNomoreObj)
			},
			goBuything(){
				if(this.memberScore<this.curObj.buyNeedScore){
					this.scroeEnt=true
				}else if(this.curObj.status==1){
					this.$toast('活动尚未开始，敬请期待');
				}else{
					this.setCookie('number','')
					let data={
						num:this.num,
						normalId:this.normalId,
						memberId:this.$route.query.memberId,
					}
					//console.log(data)
					window.location.href=API_HOST+'ol/confirmOrder1.html?num='+this.num+'&urlMark=ljgm'+'&normalId='+this.normalId+'&'+'memberId='+this.$route.query.memberId+'&type='+this.curObj.type+'&productId='+this.curObj.productId
				}
				

			},
			//试用商品
			buyGoods(){
				//console.log(id);
				this.chooseNor=true;
				this.showHeigth=true;
				//window.location.href='http://test-mobile.olquan.cn/ol/confirmOrder1.html?num='+this.$route.query.num+'&'+'normalId='+'&'+'memberId='+this.$route.query.memberId+'&'+'togetherId='+this.$route.query.togetherId +'&'+'togetherRecordId='+this.$route.query.id
			},
			
			getVlaueone(index,valueId){
				this.addSelect=index;
				
				this.getVlaueOne=valueId;
				this.getValueDetail();
				console.log(123)
			},
			getValueDetail(){
				let data={
					productId:this.curObj.productId,
					valueIds:this.getVlaueOne+','+this.getVlaueTwo,
					uutype:1,
					memberId:this.$route.query.memberId,
				}
				//console.log(data)
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getNormal,data,this.getNormalBack,this);
			},
			getNormalBack(data){
				console.log(data);
				if(data.result!=null){
					this.getNomoreObj=data.result;
				}else{
					this.getNomoreObj='';
				}
				
				if(data.result!=null){
					this.normalId=data.result.id;
				}else{
					this.normalId=''
				}
				
			},
			getVlauetwo(index,valueId){
				this.addSelectTwo=index;
				this.getVlaueTwo=valueId;
				this.getValueDetail();
			},
			//微信分享 
			moreWeixinShare:function(){
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
	.goodsDetail{
		padding-bottom:1.00rem ;
		
		background: #fff;
		.goodsName{
			font-size:.30rem ;
			line-height: .52rem;
			padding: 0 .24rem;
		}
		.score{
			margin-top: .29rem;
			padding: 0 .24rem;
			font-size: .24rem;
			color: #9c9c9c;
			p{
				display: inline;
				color: #ec0070;
				font-size: .32rem;
				font-weight: 700;
			}
		}
		.goodsMoney{
			overflow: hidden;
			font-size: .24rem;
			color: #333;
			padding: 0 .24rem;
			margin-top: .26rem;
			padding-bottom: .34rem;
		}
		.list{
			display: flex;
			display:-webkit-box;
		    display: -moz-box;
		    display: -ms-flexbox;
		    display: -webkit-flex;
		    display: -moz-flex;
			padding: 0 .24rem;
			-webkit-justify-content:flex-start;
			justify-content:flex-start;
			-moz-box-pack:flex-start;
			-webkit--moz-box-pack:flex-start;
			font-size: .24rem;
			background: #f2f2f2;
			height: .64rem;
			position: relative;
			.erwei{
				position: absolute;
				top: 50%;
				margin-top: -.20rem;
				right:0.24rem;
				
				img{
					display: block;
					
					width: .40rem;
					height: .40rem;
				}
			}
			.listSon{
				line-height: .64rem;
				position: relative;
				padding-left: .38rem;
				margin: 0 .20rem ;
				img{
					display: inline-block;
					height: .28rem;
					width: .28rem;
					position: absolute;
					left: 0;
					top: 50%;
					margin-top: -.14rem;
					border-radius: 50%;
				}
			}
		}
		.howtry{
			overflow: hidden;
			padding: 0 .24rem;
			border: 0.01rem solid #f2f2f2;
			line-height: .80rem;
			.tryleft{
				float: left;
				font-size: .30rem;
			}
			.tryright{
				float: right;
				font-size: .24rem;
				color: #999;
				img{
					display: inline-block;
					vertical-align: middle;
					margin-left: .20rem;
					height: .19rem;
					width: .10rem;
				}
			}
		}
		.step{
			width: 100%;
			height: 1.38rem;
			img{
				display: block;
				height: 100%;
				widows: 100%;
			}
		}
		.assess{
			
			.top{
				padding: 0 .24rem;
				
				.topImg{
					overflow: hidden;
					color: #8c8c8c;
					font-size:.24rem;
					.topleft{
						float:left;
						
						img{
							display: inline-block;
							height: .60rem;
							width: .60rem;
							border-radius: 50%;
							vertical-align: middle;
							margin-right: .24rem;
						}
					}
					.topright{
						float: right;
						line-height: .60rem;
					}
				}
				.detail{
					font-size: .28rem;
					margin-top: .10rem;
					line-height: .46rem;
				}
				
			}
			.seemore{
				display: flex;
				display:-webkit-box;
			    display: -moz-box;
			    display: -ms-flexbox;
			    display: -webkit-flex;
				display: -moz-flex;
				-webkit-justify-content:center;
				justify-content:center;
				-moz-box-pack:center;
				-webkit--moz-box-pack:center;
				padding: .20rem 0;
				p{
					font-size: .28rem;
					width: 2.50rem;
					height: .68rem;
					line-height: .68rem;
					border: 0.01rem solid #f2f2f2;
					text-align: center;
					color: #999;
				}
				
			}
		}
		.shopname{
			overflow: hidden;
			padding: 0 .24rem;
			.shopleft{
				float: left;
				font-size:.32rem;
				img{
					display: inline-block;
					height: .60rem;
					width: .60rem;
					vertical-align: middle;
					margin-right: .20rem;
				}
			}
			.shopright{
				float: right;
				height: 100%;
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
				p{
					font-size: .28rem;
					border: 0.01rem solid #ec0070;
					width: 1.70rem;
					height: .48rem;
					line-height: .48rem;
					text-align: center;
					
					
					
				}
			}
		}
		.bottomshop{
			position: fixed;
			height: 1.00rem;
			background: #fff;
			width: 100%;
			overflow: hidden;
			font-size:.24 ;
			bottom: 0;
			left: 0;
			.trytouse{
				width: 60%;
				float: left;
				background: #ed0477;
				height: 100%;
				text-align: center;
				line-height: 1.00rem;
				color: #fff;
				font-size: .32rem;
			}
			.use{
				float: left;
				width: 40%;
				height: 100%;
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
				li{
					width: 33.33%;
					text-align: center;
					padding-top: .18rem;
					p{
						
						display: flex;
						display:-webkit-box;
					    display: -moz-box;
					    display: -ms-flexbox;
					    display: -webkit-flex;
					    display: -moz-flex;
						padding: 0 .24rem;
						-webkit-justify-content:center;
						justify-content:center;
						-moz-box-pack:center;
						-webkit--moz-box-pack:center;
						img{
							display: block;
							height: .34rem;
							width: .34rem;
						}
					}
				}
			}
		}
		.norms{
			position: fixed;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
			z-index: 999;
			background: rgba(0,0,0,.5);
			
			.choose{
				position: absolute;
				left: 0;
				bottom: 0;
				min-height: 1.56rem;
				width: 100%;
				background: #fff;
				.productImage{
					position: absolute;
					left: .26rem;
					top: -.20rem;
					height: 1.56rem;
					width: 1.56rem;
					display: block;
				}
				.close{
					display: block;
					position: absolute;
					left: 6.90rem;
					top: 0.26rem;
					z-index: 222;
					height: .32rem;
					width: .32rem;
				}
				.detail{
					font-size: .26rem;
					padding-left: 2.04rem;
					height: 1.56rem;
					.money{
						line-height: .50rem;
						font-weight: 700;
						font-size: .36rem;
						
					}
					.num{
						font-size: .20rem;
						color: #a2a2a2;
					}
				}
				.noMores{
					
					.nameClass{
						font-size: .26rem;
						margin-left: .26rem;
						line-height: .80rem;
					}
					.size{
						overflow: hidden;
						padding-left:.26rem ;
						span{
							margin: 0 .20rem .20rem 0;
							float: left;
							height: .54rem;
							min-width: 1.20rem;
							border: 0.01rem solid #cfcfcf;
							font-size: .24rem;
							text-align: center;
							line-height: .56rem;
						}
						.special{
							border: .01rem solid #e30067;
							color: #e30067;
						}
					}
				}
			}
			.buyNum{
				font-size: .26rem;
				padding: .26rem;
				overflow: hidden;
				
				.left{
					float: left;
					line-height: .50rem;
				}
				.right{
					float: right;
					overflow: hidden;
					.num{
						float: left;
						line-height: .50rem;
						font-size: .32rem;
						min-width: .48rem;
						text-align: center;
						
					}
					.del{
						
						float: left;
						height: .48rem;
						width: .48rem;
						
						vertical-align: middle;
						text-align: center;
						line-height: .50rem;
						font-size: .48rem;
						margin-right: .20rem;
						.delnum{
							display: block;
							height: 100%;
							width: 100%;
						}
					}
					.add{
						float: right;
						height: .48rem;
						width: .48rem;
						color: #e30067;
						line-height: .50rem;
						font-size: .48rem;
						
						vertical-align: middle;
						text-align: center;
						margin-left: .20rem;
						.addnum{
							display: block;
							height: 100%;
							width: 100%;
						}
						
					}
				}
			}
			.surePay{
				width: 100%;
				background: #e30067;
				font-size: .34rem;
				color: #fff;
				line-height: 1rem;
				text-align: center;
			}
		}
		.tishi{
			position: fixed;
			width: 6.00rem;
			height: 4.00rem;
			background: #fff;
			left: 50%;
			margin-left: -3.00rem;
			top:50%;
			margin-top: -2.00rem;
			z-index: 444;
			border-radius: .10rem;
			overflow: hidden;
			.tiTop{
				line-height: 1.00rem;
				
				text-align: center;
				color: #fff;
				background: #ed0477;
				font-size: .32rem;
			}
			.tiCen{
				line-height: 2.00rem;
				text-align: center;
				font-size: .26rem;
				border-bottom: .01rem solid #f2f2f2;
			}
			.tiBots{
				overflow: hidden;
				font-size: .26rem;
				text-align: center;
				line-height: 1.00rem;
				.tiBleft{
					float: left;
					width: 40%;
					border-right: 0.01rem solid #f2f2f2;
				}
				.tiBright{
					float: left;
					width: 59.5%;
					color: #08c1f6;
				}
			}
			
		}
		.goFortop{
			position: fixed;
			bottom: 1.30rem;
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