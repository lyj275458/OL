<template>
	<div>
		<div class="mapBox">
		<h3>APP</h3>
		<ul class="">
			<li>
				<a href="/fightAlone/detail">商品详情</a>
			</li>
			<li>
				<a href="/activity/detail">活动详情</a>
			</li>
			<li>
				<a href="/order/partake">拼单</a>
			</li>
			<li>
				<a href="/order/detail">拼单详情</a>
			</li>
			<li>
				<a href="/order/myOrder">我的订单</a>
			</li>
			<li>
				<a href="/fightAlone/mygoods">我的拼团</a>
			</li>
			<li>
				<a href="/fightAlone/share">拼团分享</a>
			</li>
			<li>
				<a href="/index/index">首页</a>
			</li>
			<!--<li>
				<a href="/goods/detail">商品详情detail</a>
			</li>-->
			<li>
				<a href="/share/share">分享</a>
			</li>
			<li>
				<a href="/demo/iscroll">iscroll</a>
			</li>
			
			<li>
				<a href="/integral/uesget">积分说明</a>
			</li>
			<li>
				<a href="/mine/index">会员分类</a>
			</li>
			<li>
				<a href="/safe/safety">安全说明</a>
			</li>
			<li>
				<a href="/rule/rule">规则说明</a>
			</li>
			<li>
				<a href="/try/center">试用首页</a>
			</li>
		</ul>
		
		</div>
	</div>
</template>
<script>
import { XButton, Box, GroupTitle, Group, Flexbox, FlexboxItem, Divider } from 'vux'
	export default {
		data : function() {
			return {
				initIndex : 0,
			}
		},
		created() {
			//this.$toast('9999')
			
			console.log(this.$userSource())
		},
		mounted : function() {
			
		},
		methods :  {
			test(){
				this.loadingOpen();
			}
		},
		 components: {
    XButton,
    Box,
    GroupTitle,
    Group,
    Flexbox,
    FlexboxItem,
    Divider
  },
	}
</script>
<style lang="scss">
	.mapBox{
		color: #333; padding-left: .1rem;
		h3{font-size: 0.4rem; height:0.8rem;line-height:.8rem;}
		li{height:0.64rem;width: 100%;line-height: 0.64rem;font-size:0.24rem; border-bottom:0.01rem solid #999;}
		a{color:#333;display: block}
	}
</style>