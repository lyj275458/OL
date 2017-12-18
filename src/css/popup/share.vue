<template>
	<div class="pop">
		 <group>
	      <x-switch v-model="showDialogStyle" title="44" inline-desc="2"></x-switch>
	    </group>
	    <div v-transfer-dom>
	      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
	        <p style="color:#fff;text-align:center;" @click="showDialogStyle = false" >
	          <p class="popo">
	          
	          	<img :src="ererImgIcon" />
	          	<span class="get">恭喜获得优惠券</span>
	          	<span class="friend">分享给好友</span>
	          	<span class="happy">快分享给小伙伴们，大家一起抢</span>
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
	    	ererImgIcon :'/static/images/red.png',
	    }
	  }
	}
</script>

<style lang="scss" scoped>
	
	.popo{
		width: 5.64rem;
		height: 4.96rem;
		
		margin-left: .80rem;
		position: relative;
		img{
			display: block;
			height: 100%;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
		}
		.get{
			width: 100%;
			font-size: .38rem;
			position: absolute;
			top: 1.55rem;
			left: 0;
			color: #fba600;
			text-align: center;
		}
		.friend{
			font-size: .28rem;
			display: block;
			width: 2.80rem;
			height: .74rem;
			background: #ffd200;
			line-height: .74rem;
			border-radius: .74rem;
			color: #fe3324;
			position: absolute;
			top: 3.00rem;
			left: 50%;
			margin-left: -1.40rem;
		}
		.happy{
			text-align: center;
			width: 100%;
			display: block;
			font-size: .22rem;
			color: #fff;
			position: absolute;
			top:3.98rem;
			left: 0;
			
		}
		i{
			font-size: .25rem;
			display: block;
			height: .25rem;
			width: .25rem;
			font-style: normal;
			position: absolute;
			right: .24rem;
			top: .24rem;
			color: #fff;
		}
	}
	
	
</style>