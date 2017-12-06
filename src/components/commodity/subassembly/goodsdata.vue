<template>
 <div id="data">
   <p id="toindex"><router-link to="index">首页</router-link> &gt; 商品数据</p>
   <!--<h4>商品数据</h4>-->
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
     <el-menu-item index="1" @click="turnpage('1','vGoodsresult')">商品效果</el-menu-item>
     <el-menu-item index="2" @click="turnpage('2','vCollectdata')">收藏数据</el-menu-item>
   </el-menu>
   <div class="bianji">
     <keep-alive>
       <component :is="tittle"></component>
     </keep-alive>
   </div>
 </div>
</template>

<script>
  import vGoodsresult from '../page/goodsresult.vue'
  import vCollectdata from '../page/collectdata.vue'
export default {
  name: 'goodslist',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      tittle:"vGoodsresult",
      index:""
    }
  },
  components:{
    vGoodsresult,vCollectdata
  },
  methods:{
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
  #data #toindex{
    font: 16px/36px "微软雅黑";
    background:none;
    border:0;
    margin:0;
    color: #333;
    font-weight: 550;
    text-indent:0;
  }
#data{
  width:1052px;
}
h4{
  font-family: Helvetica Neue,"微软雅黑","黑体";
  font-size: 18px;
  font-weight:400;
  padding-bottom:16px;
  border-bottom:1px solid #e8e8e8;
}
</style>
