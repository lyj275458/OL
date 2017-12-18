<template>
	<div class="pop">
		 <group>
	      <x-switch v-model="showDialogStyle" title="44" inline-desc="2"></x-switch>
	    </group>
	    <div v-transfer-dom>
	      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
	        <p style="color:#fff;text-align:center;" @click="showDialogStyle = false" >
	          <p class="popo">
	          	<span class="spa">公众号二维码</span>
	          	<img :src="ererImgIcon" />
	          	<span>保存至手机相册，微信扫一扫</span>
	          	<b>关注公众号，查看会员信息</b>
	          	<b class="spe">保存到相册</b>
	          	<i>X</i>
	          </p>
	          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
	        </p>
	    </x-dialog>
    </div>
	</div>
</template>

<script>
	import { XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom } from 'vux'
	export default {
	  directives: {
	    TransferDom
	  },
	  components: {
	    XDialog,
	    XButton,
	    Group,
	    XSwitch
	  },
	  data () {
	    return {
	    	showDialogStyle: false,
	    	ererImgIcon :'/static/images/erer.png',
	    }
	  }
	}
</script>

<style lang="scss" scoped>
	
	.popo{
		width: 5.90rem;
		height: 6.20rem;
		background: #fff;
		margin-left: .80rem;
		position: relative;
		img{
			display: block;
			height: 3.00rem;
			width: 3.00rem;
			position: absolute;
			top: 1.49rem;
			left: 50%;
			margin-left: -1.50rem;
		}
		span{
			width: 100%;
			font-size: .24rem;
			position: absolute;
			top:4.65rem;
			left: 0;
			color: #999;
			text-align: center;
			
		}
		.spa{
			font-size: .32rem;
			top:.42rem;
			color: #1e1e1e;
		}
		b{
			width: 100%;
			font-size: .24rem;
			position: absolute;
			top:4.96rem;
			left: 0;
			text-align: center;
			font-weight: normal;
			color: #999;
		}
		.spe{
			font-size: .30rem;
			top: 5.65rem;
			
		}
		i{
			font-style: normal;
			font-size: .30rem;
			position: absolute;
			right: .30rem;
			top: .30rem;
		}
	}
	
	
</style>