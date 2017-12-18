<template>
	<!--<page class="scroll-view" title="Scroll（普通滚动列表组件）" desc="基于 better-scroll 可以实现一个普通的滚动列表组件">-->
    <div slot="content" class="scroll-content">
      <scroll :data="items" class="list-wrapper"    :pullup='true' @scrollToEnd="scrollToEnd" @beforeScroll="beforeScroll">
        <ul class="list-content">
          <li class="list-item" v-for="item in curObj">
          	<img :src= "item.productImage"/>
          	<p class="top">{{item.productName}}</p>
          	<p class="bot">
				<span class="left"><b>￥{{item.price}}</b><br />
					<i>￥{{item.marketPrice}}</i>
				</span>
				<span class="right" >去购买</span>
			</p>
          </li>
          <li class="list-item" v-for="item in curObj">
          	<img :src= "item.productImage"/>
          	<p class="top">{{item.productName}}</p>
          	<p class="bot">
				<span class="left"><b>￥{{item.price}}</b><br />
					<i>￥{{item.marketPrice}}</i>
				</span>
				<span class="right" >去购买</span>
			</p>
          </li>
          <li class="list-item" v-for="item in curObj">
          	<img :src= "item.productImage"/>
          	<p class="top">{{item.productName}}</p>
          	<p class="bot">
				<span class="left"><b>￥{{item.price}}</b><br />
					<i>￥{{item.marketPrice}}</i>
				</span>
				<span class="right" >去购买</span>
			</p>
          </li>
          <li class="list-item" v-for="item in curObj">
          	<img :src= "item.productImage"/>
          	<p class="top">{{item.productName}}</p>
          	<p class="bot">
				<span class="left"><b>￥{{item.price}}</b><br />
					<i>￥{{item.marketPrice}}</i>
				</span>
				<span class="right" >去购买</span>
			</p>
          </li>
        </ul>
      </scroll>
    </div>
  </page>
</template>

<script>
import Scroll from '../../components/scroll/scroll.vue'
import Page from '../../components/page/page.vue'
import {  Cell, Group } from 'vux'
  export default {
    data() {
      return {      	
		    items:[{
          	marketPrice:"1200.00",
			price:"0.01",
			productId:6731,
			productImage:"http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/imgs/92a8721294b96383adb4554fca3cf74bffa73bd5",
			productName:"【平台测试 不发货！！！】小黄人1只",
			togetherId:1
          	}],

          
        
        goodsImg:'/static/images/goodsImg.png',
        curObj:[],
      };
    },    
    watch:{
    	view(){
    		console.log(document.getElementsByClassName('list-wrapper').scrollHeight);
    	}
    },
    created: function() { 		
    	this.getList();
    },
    methods: {
      scrollToEnd(){
        console.log('scrollToEnd')
        
        for(let i=0;i<this.items.length;i++){
        	this.curObj.push(this.items[i])
        }
        
        console.log(this.curObj)
      },
      beforeScroll(){
        console.log('beforeScroll')
      },
      getList(){
	//				console.log(1)
			let data={
				
			}
			this.$store.state.ajaxObj.comAjax(this.$store.state.ajaxObj.API.getTogetherList,data,this.getListBack);
		},
	  getListBack(data){
			this.curObj=data.result;
			
					console.log(this.curObj)
	//				console.log(this.curObj.productId)
	//				console.log(2)
	  },

    },
    components: {
      Page,
      Scroll,
      Group,
      Cell
    }
  };
</script>
<style  lang="stylus" rel="stylesheet/stylus">
   .scroll-content{
   	 height: 100%

	  .list-wrapper{
	  	position: absolute
	    left: 0
	    top: 0
	    right: 0
	    bottom: 0
	    overflow: hidden
	    background: #fff;
	    overflow: scroll;
	    .list-content{
	    	position: relative
		    z-index: 10
		    background: #fff;
		    width:100%;
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
			box-pack:space-between;
			flex-wrap:wrap;
			-webkit-flex-wrap:wrap;
		    -webkit-box-lines:multiple;
		    -moz-flex-wrap:wrap;
		    .list-item{
		    	width: 3.60rem;
				height: 5.20rem;
				background: #fff;
				margin-bottom: .06rem;
				font-size:.26rem;
				img{
					display: block;
					width: 100%;
					height: 3.59rem;
				}
				.top{
					font-weight: normal;
					font-size: .24rem;
					color: #333;
					line-height: .30rem;
					padding: .08rem;
				}
				.bot{
					padding: .12rem .08rem;
					overflow: hidden;
					.left{
						float: left;
						font-weight: normal;
						font-size: .28rem;
						
						color: #e20630;
						i{
							font-size: .20rem;
							color: #b2b2b2;
							font-style: normal;
							text-decoration:line-through;
						}
					}
					.right{
						font-size: .20rem;
						color: #ff3893;
						float: right;
						text-align: center;
						width: 1.18rem;
						height: .48rem;
						line-height: .50rem;
						border: .01rem solid #ff3893;
						border-radius: .05rem;
					}
				}
		    }
		       
		        
	    }
	      
	  }
	   
   }
   
</style>