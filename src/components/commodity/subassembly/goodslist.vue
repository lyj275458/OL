<template>
	<div id="create">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 商品列表</p>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" @click="turnpage('1','vLinegoods')">线上商品</el-menu-item>
  <el-menu-item index="2" @click="turnpage('2','vSendgoods')">寄样商品</el-menu-item>
    <el-button type="success" size="mini" @click="newGoods('0','vNewGoods')" round>创建商品</el-button>
</el-menu>
<div class="bianji">
	<keep-alive>
            <component :is="tittle"></component>
    </keep-alive>
</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
import vLinegoods from '../page/linegoods.vue'
import vSendgoods from '../page/sendgoods.vue'
export default {
  name: 'goodslist',
  data(){
  	return {
        activeIndex: '1',
        activeIndex2: '1',
        tittle:"vLinegoods",
        index:""
  	}
  },
  components:{
  	vLinegoods,vSendgoods
  },
  methods:{
    ...mapActions([
      'alertnum','loginResult','dingdanListResult','clearAllActions'
    ]),
    newGoods(){
      this.clearAllActions()
    },
  	handleSelect(key, keyPath) {
        console.log(key, keyPath);
     },
      turnpage(key,title){
      	if(key){
      		this.index=key
      	}
      	if(title){
      		this.tittle=title
      	}
      }
  }
}
</script>

<style scoped>
  #create #toindex{
    font: 16px/36px "微软雅黑";
    background:none;
    border:0;
    margin:0;
    color: #333;
    font-weight: 550;
    text-indent:0;
  }
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
/*button{
	height: 20px;background: red;width: 20px;
}*/
.mulu li{
	float: left;margin-right: ;
}
  .el-button{
    width: 100px;
    margin:22px 0 0 750px ;
  }
#create p{
	background: #fffaeb;
	font:12px/34px "微软雅黑";text-indent:5px ;
	border: 1px solid #fff3cf;
	margin:15px 0 4px 0;
	width: 1030px;
	color:#333;
}
</style>
