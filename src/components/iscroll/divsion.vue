<template>
	<div class="goEvery">
		<div class="link">
			<img :src="linkImg" @click='showGotrue'/>
			<div class="goMore" v-show="showGo">
				<p @click="getIndex">首页</p>
				<p @click="getCar">购物车</p>
				<p @click="getMindIndex">个人中心</p>
				<p @click="getUseMore">试用</p>
			</div>
		</div>
		<div class="goFortop" v-show="showTop">
			<img :src="goTopImg" @click="gotoTop"/>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default{
		
		data : function(){
			
			return{
				goodImg:'/static/images/goodsImg.png',
				linkImg:'/static/images/link.png',
				goTopImg:'/static/images/goTop.png',
				showGo:false,
				showTop:false,
				
			}
		},
		components: {
		    $
		},
		mounted(){
			window.addEventListener('scroll', this.getTopScroll);
			
		},
		created: function() {
			
			console.log(this.$route.query.memberId)
		},
		methods:{
			showGotrue(){
				this.showGo=!this.showGo
			},
			getIndex(){
				window.location.href=API_HOST+'ol/weixin/index/modelVM?code=index'
			},
			getUseMore(){
				this.$router.push({path:'/try/center?memberId='+this.$route.query.memberId});
			},
			getMindIndex(){
				window.location.href=API_HOST+'weixin/member/membercore?mmm='+this.$route.query.memberId;
			},
			getCar(){
				window.location.href=API_HOST+'ol/cart.html?memberId='+this.$route.query.memberId;
			},
			//点击回到顶部
			gotoTop(){
	//			document.body.scrollTop=0;
	//			document.documentElement.scrollTop = 0	
				$('html,body').animate({scrollTop:0},1000);
			},
			getTopScroll(){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				//console.log(scrollTop)
				if(scrollTop>600){
					this.showTop=true;
				}else{
					this.showTop=false;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.goEvery{
		.link{
			position: fixed;
			bottom: 2.00rem;
			right: 0.50rem;
			width: .70rem;
			z-index: 999;
			img{
				display: block;
				width: .60rem;
				height: .60rem;
			}
		}
		.goMore{
			font-size: .26rem;
			width: 1.70rem;
			background: #f0f0f0;
			position: fixed;
			right: .30rem;
			padding-left: .30rem;
			bottom: 3.00rem;
			z-index: 9999;
			p{
				line-height: .56rem;
				border-bottom: 0.01rem solid #f2f2f2;
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