<template>

	
		
		<div slot="content" class="scroll-content">
		
			
	      <scroll :data="items" class="list-wrapper"    :pullup='true' @scrollToEnd="scrollToEnd" @beforeScroll="beforeScroll">
	        <ul class="list-content">
	          <li class="list-item" v-for="item in items">{{item}}</li>
	        </ul>
	      </scroll>
	    </div>

    
  
</template>

<script>
import Scroll from '../../components/scroll/scroll.vue'
import Page from '../../components/page/page.vue'
import {  Cell, Group } from 'vux'
  export default {
    data() {
      return {      	
		    items: [
          '我是第一行',
          '我是第二行',
          '我是第三行',
          '我是第四行',
          '我是第五行',
          '我是第六行',
          '我是第七行',
          '我是第八行',
          '我是第九行',
          '我是第十行',
          '我是第十一行',
          '我是第十二行',
          '我是第十三行',
          '我是第十四行',
          '我是第十五行',
          '我是第十六行',
          '我是第十七行',
          '我是第十八行',
          '我是第十九行',
          '我是第二十行',
          '我是第二十一行',
          '我是第二十二行',
          '我是第二十三行',
          '我是第二十四行',
          '我是第二十五行',
          '我是第二十六行',
          '我是第二十七行',
          '我是第二十八行',
          '我是第二十九行'
        ]
      };
    },    
    created: function() { 		
    
    },
    methods: {
      scrollToEnd(){
        console.log('scrollToEnd')
        this.items.push('这是新增')
      },
      beforeScroll(){
        console.log('beforeScroll')
      }

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
   .scroll-content
    height: 100%

  .list-wrapper
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    overflow: hidden
    background: #fff
    .list-content
      position: relative
      z-index: 10
      background: #fff
      .list-item
        height: 60px
        line-height: 60px
        font-size: 18px
        padding-left: 20px;
        
        border-bottom: 1px solid #e5e5e5
        
</style>