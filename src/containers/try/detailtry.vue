<template>
	<div class="moreTry">
		<div class="top" :class="searchBarFixed == true ? 'isFixed' :''">
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
	export default {
		data : function(){
			return{
				curObj:[],
				searchBarFixed:false,
				selectVlaue:'默认',
				downImg:'/static/images/download.png',
				showChoose:false,
			}
			
		},
		created: function() {
			this.$store.commit('documentTitle','更多积分试用');	
			this.getList();
		},
		mounted(){
			//this.addWeixinShare();//微信分享 	
			window.addEventListener('scroll', this.moreTrygoods);
		},
		methods:{
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
			//获取列表
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
			//点击产品
			gototry(id){
				console.log(id)
				this.$router.push({path:'/try/trygoods/id/'+id+'?memberId='+this.$route.query.memberId});
			},
			moreTrygoods(){
				 var height=document.body.scrollHeight;
				//console.log(height)
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			  var offsetTop = document.querySelector('.top').offsetTop;
			  var windowH=window.innerHeight;
			    if (scrollTop > offsetTop) {
				    this.searchBarFixed = true;
				} else {
				    this.searchBarFixed = false;
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
.moreTry{
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