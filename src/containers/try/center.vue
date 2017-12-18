<template>
	
	<!--<div class="step">
		<p class="bot"></p>
		<p class="cent" v-bind:style="{width:Number(perWidth.split('%')[0])/100*3+'rem'}"></p>
	</div>-->
	<div class="tryIndex">
		<swiper loop auto :list="urlList" height='3.40rem'  dots-position='center' v-show="urlList.length!=0"></swiper>
		<div class="message">
			
			<div class="leftfen">
				<img :src="tryfenImg"/>
				
				<span>我的积分：</span>
			</div>
			<div class="leftmine">
				<img :src="trymineImg"/>
				<span>我的试用：</span>
			</div>
		</div>
		<div class="benefit">
			<ul>
				<li>
					<img :src="indexImg"/>
					<span>首页</span>
				</li>
				<li>
					<img :src="pinpinImg"/>
					<span>拼团</span>
				</li>
				<li>
					<img :src="zhuanxiangImg"/>
					<span>粉领会员</span>
				</li>
				<li>
					<img :src="shiyongImg"/>
					<span>试用中心</span>
				</li>
				<li>
					<img :src="temaiImg"/>
					<span>品牌特卖</span>
				</li>
				
			</ul>
		</div>
		<div class="goods-name" v-for="item in curObj">
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
				curObj:[]
			}
		},
		components: {
		    Swiper
		},
		created: function() {
			this.getImgtop();
			this.getList();
		},
		methods:{
			//轮播图获取
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