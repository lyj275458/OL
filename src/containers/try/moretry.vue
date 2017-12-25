<template>
	<div class="tryMore">
		<Linking></Linking>
		<!--<div class="top" :class="searchBarFixed == true ? 'isFixed' :''">
			<div class="atuoPage">
				<div style="float: left; overflow: hidden; margin-right: .30rem;" @click="getShow">
					<div class="select">
						{{this.selectVlaue}}
					</div>
					<div class="selectImg">
						<img :src="downImg" />
					</div>
				</div>
				<ul class="list">
					<li class="listItem">试大牌</li>
					<li class="listItem">试大牌</li>
					<li class="listItem">试大牌</li>
					<li class="listItem">试大牌</li>
					<li class="listItem">试大牌</li>
					<li class="listItem">试大牌</li>
					<li class="listItem">试大牌</li>
					<li class="listItem">试大牌</li>
					<li class="listItem">试大牌</li>
					<li class="listItem">试大牌</li>
				</ul>
			</div>
			<div class="choose" v-show="showChoose">
				<p style="border-bottom: 0.01rem solid #f2f2f2;" @click="lowPrice">积分由低到高</p>
				<p @click="higPrice">积分由高到低</p>
			</div>
			
		</div>-->
		<div class="activeTime">
			<div class="leftact" v-for="(item,index) in actObj" v-bind:class="{ 'special': index===addSelect}" @click="getAct(index,item.subTitle,item.timeId)">
				<p style="line-height: .72rem;">{{item.title}}</p>
				<p style="font-size: .26rem; line-height: .32rem;">{{item.subTitle}}</p>
			</div>
			
		</div>
		<div class="goods-name" v-for="item in curObj" @click='gototry(item.productId)'>
			<div class="food" >
				<div class="fodImg">
					<img :src="item.image"/>
				</div>
				<div class="fodName">{{item.productName}}
					<div class="gotry">
						<span style="font-size:.24rem ; color: #959595;">
							试用保证金
							<i style="color: #ed0276;font-style: normal;"></i>
							<b style="color: #ed0276;font-size: .32rem;">{{item.price}}</b>
						</span>
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
	export default {
		data : function(){
			return{
				curObj:[],
				actObj:[],
				addSelect:0,
				nowTime:new Date().getTime(),
				timeId:1,
				pageObj:{
					page:1,
				},
				isMore:true,
				selectVlaue:'默认',
				selected:'',
				downImg:'/static/images/download.png',
				showChoose:false,
				searchBarFixed:false,
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
		created: function() {
			this.$store.commit('documentTitle','更多试用');
			this.getActive();
			this.getList();
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll);
			
			this.tryWeixinShare();//微信分享 	
		},
		methods:{
			gototry(id){
				console.log(id)
				this.$router.push({path:'/try/trygoods/id/'+id+'?memberId='+this.$route.query.memberId});
			},
			//价格筛选
			lowPrice(){
				this.selectVlaue='积分由低到高';
				this.showChoose=false;
			},
			higPrice(){
				this.selectVlaue='积分由高到低';
				this.showChoose=false;
			},
			getShow(){
				this.showChoose=!this.showChoose;
			},
			//获取活动
			getActive(){
				let data={
					
				}
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getFreeUseTimes,data,this.getActiveBack);
			},
			getActiveBack(data){
				this.actObj=data.result.times;
			
			},
			//获取当前试用产品
			getList(){
				let data={
					page:1,
					rows:20,
					isNeedBrand:0,
					timeId:this.timeId
				}
				this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getFreeUseData,data,this.getListBack);
			},
			getListBack(data){
				console.log(data)
				this.curObj=data.result.productDtos;
				console.log(this.nowTime)
				//this.shareData.url="http://ol-site.olquan.com/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+'try/moretry');
				this.shareData.url="http://test-mobile.olquan.cn/weixin/auth?recId="+this.$route.query.memberId+"&view="+encodeURIComponent(CUR_URLBACK+'try/moretry');
			},
			getAct(index,subtitle,id){
				console.log(index)
				console.log(subtitle)
				console.log(id)
				if(subtitle=='尚未开始'){
					this.$toast('活动尚未开始');
				}else{
					this.timeId=id;
					this.addSelect=index;
					this.pageObj.page=1;
					this.isMore=true;
					this.getList();
				}
			},
			//获取更多
			handleScroll () {
			  var height=document.body.scrollHeight;
				//console.log(height)
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			 // var offsetTop = document.querySelector('.top').offsetTop;
			  var windowH=window.innerHeight;
			 // console.log(scrollTop+windowH)
			 // console.log(height)
//			 if (scrollTop > offsetTop) {
//				    this.searchBarFixed = true;
//				} else {
//				    this.searchBarFixed = false;
//			}
			  if(scrollTop + windowH >=height-200){
			  	if(this.isMore){
	 				this.isMore=false;
	 				let data={
	  					page:this.pageObj.page+1,
	  					rows:20,
	  					isNeedBrand:0,
						timeId:this.timeId
	  				};
	  				this.pageObj.page=this.pageObj.page+1
					this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getFreeUseData,data,this.getListMoreBack);
	 			}
			  }
	 			
			},
			getListMoreBack(data){
				if(data.result.productDtos.length<20){
					this.isMore=false;
					this.showTrue=true;
				}else{
					this.isMore=true;
				}
				
				
				for(let i=0; i<data.result.productDtos.length; i++){
					this.curObj.push(data.result.productDtos[i])
				}
				console.log(this.curObj)
			
			},
			//微信分享 
			tryWeixinShare:function(){
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
	.tryMore{
		
		.top{
			padding: .12rem 0;
			background: #fff;
			border-bottom: 0.01rem solid #f2f2f2;
			position: relative;
			
			.atuoPage{
				overflow-x: scroll;
				position: relative;
				
				.select{
					font-size: .24rem;
					color: #666;
					float: left;
					width: 1.90rem;
					text-align: center;
					border: 0.01rem solid #f2f2f2;
					background: #fff;
					height: .62rem;
					line-height: .64rem;
					/*border-radius: .05rem 0 0 .05rem;*/
					margin-left: .24rem;
					
				}
				.selectImg{
					width: .50rem;
					height: .62rem;
					border: 0.01rem solid #f2f2f2;
					border-left: none;
					/*border-radius: 0 .05rem 0.05rem 0;*/
					position: relative;
					float: left;
					img{
						display: block;
						position: absolute;
						left: 50%;
						margin-left: -.08rem;
						width: .16rem;
						height: .10rem;
						top: 50%;
						margin-top: -0.05rem;
					}
				}
				.list{
					
					white-space:nowrap;
					width: 60%;
					height: .64rem;
					float: left;
					overflow-y: hidden;
					z-index: 333;
					overflow-x: auto;
					.listItem{
						font-size: .28rem;
						line-height: .64rem;
						color: #666;
						vertical-align: text-top;
						display: inline-block;
					}
				}
				
			}
			.choose{
				font-size: .24rem;
				position: absolute;
				line-height: .62rem;
				width: 2.41rem;
				text-align: center;
				background: #fff;
				border: 0.01rem solid #f2f2f2;
				z-index: 22;
				left: 0.24rem;
				top: 0.76rem;
				border-top: none;
			}
			
			
		}
		.isFixed{
			position: fixed;
			left: 0;
			top: 0;
			z-index: 2222;
		}
		.activeTime{
			overflow: hidden;
			border-bottom: 0.01rem solid #f2f2f2;
			font-size:.32rem;
			background: #fff;
			color:#9c9c9c;
			.special{
				color: #e50f72;
			}
			.leftact{
				float: left;
				width: 50%;
				text-align: center;
			}
			
		}
		.goods-name{
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