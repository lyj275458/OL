<template>
	<div class="top">
		<div class="img" v-for="item in message">
			<!--<img  v-for="items in item.images" :src='items.img'  />-->
			<img v-if="item.images.length==2" style="width: 50%;" v-for="items in item.images" :src='items.img' @click="goMore(items.url)"/>
			<img v-if="item.images.length==3" style="width: 33.3%;" v-for="items in item.images" :src='items.img' @click="goMore(items.url)" />
			<img v-if="item.images.length==1" style="width: 100%;" v-for="items in item.images" :src='items.img' @click="goMore(items.url)" />
		
		</div>
	</div>
</template>

<script>
	export default{
		props:{
				message:Array
		},
		data : function(){
			
			return{
				goodImg:'/static/images/goodsImg.png',
				list:"",
			}
		},
		created: function() {
			console.log(this.$props)
			this.list=this.$props.list
		},
		methods:{
			goMore(id){
				console.log(id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top{
		width: 100%;
		.img{
			width: 100%;
			display: flex;
			flex-wrap: nowrap;
			img{
				width: 33.3%;
				display: block;
				
			}
		}
	}
	
</style>