<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 评价管理</p>
    <div class="ev-header">
    <p>即《拼多多评价规则》生效起，平台采用DSR评价体系，相关平台规范将逐步更改，历史评价数据仅供参考。请大家务必关注店铺内商品的评价情况！</p>
    </div>
    <div class="ev-content">
      <label>商品Id：</label>
      <el-input  placeholder="请输入商品ID" size="small"></el-input>
      <el-button type="primary" round size="mini" @click="open">查询</el-button>
    </div>
    <p><i></i>近30天商品评分 </p>
    <div class="ev-components">
      <p v-if="indexo==0">暂无评分</p>
      <p v-else>评分如下</p>
      <div class="ev-progress">
        <el-progress v-if="stutes==0" :percentage="0" class="ev-pert" :stroke-width=15></el-progress>
        <el-progress v-else-if="stutes==20" :percentage="20" class="ev-pert" status="exception" :stroke-width=15></el-progress>
        <el-progress v-else-if="stutes==40" :percentage="40" class="ev-pert" status="exception" :show-text=false :stroke-width=15></el-progress>
        <el-progress v-else-if="stutes==60" :percentage="60" class="ev-pert" status="success" :show-text=false :stroke-width=15></el-progress>
        <el-progress v-else-if="stutes==80" :percentage="80" class="ev-pert" status="success" :show-text=false :stroke-width=15></el-progress>
        <el-progress v-else :percentage="100" class="ev-pert" status="success" :show-text=false :stroke-width=15></el-progress>
          <ul>
            <li>0分
            <span></span></li>
            <li>1分<span>非常不满</span></li>
            <li>2分<span>不满意</span></li>
            <li>3分<span>一般</span></li>
            <li>4分<span>满意</span></li>
            <li>5分<span>非常满意</span></li>
          </ul>
      </div>
    </div>
    <div id="create">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="turnpage('1','vPingjiaList')">近7天全部评价</el-menu-item>
        <el-menu-item index="2" @click="turnpage('2','vCollectdata')">有评价内容</el-menu-item>
        <el-menu-item index="3" @click="turnpage('3','vPingjiaList')">无评价内容</el-menu-item>
        <el-menu-item index="4" @click="turnpage('4','vCollectdata')">有追加评价内容</el-menu-item>
      </el-menu>
    </div>
    <p><i></i>来自客户的评价<span>共<i>{{options.length}}</i>条含文字评论</span></p>
    <div class="bianji">
      <keep-alive>
        <component :is="tittle"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import vPingjiaList from '../page/pingjialist.vue'
  import vCollectdata from '../page/collectdata.vue'
  export default {
    name: 'evaluate',
    data () {
      return {
        stutes:"60",
        activeIndex: '1',
        activeIndex2: '1',
        tittle:"vPingjiaList",
        index:"0",
        indexo:"0",
        options: [{
          value: '选项1',
          label: '近7天评分'
        }, {
          value: '选项2',
          label: '近30天评分'
        }, {
          value: '选项3',
          label: '全部评分'
        }],
        value: '近7天评分'
      }
    },
    components:{
      vPingjiaList,vCollectdata,
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
      },
      open() {
        this.$message.error('请输入商品ID');
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
  h4{
    font-family: Helvetica Neue,"微软雅黑","黑体";
    font-size: 18px;
    font-weight:400;
    padding-bottom:16px;
    border-bottom:1px solid #e8e8e8;
  }
  .ev-header p{
    font:12px/36px "微软雅黑";
    margin-top:8px;
    text-indent:20px;
    color:#666666;
  }
  .ev-content{
    padding:20px;
    background: #f9f9f9;
  }
  .ev-content label{
    font:14px/28px "微软雅黑";
    color:#666;
    margin-right:10px;
  }
  .ev-content .el-input{
    width:210px;
    height:28px;
    margin-right: 40px;
  }
  .el-button--primary{
    width:100px;
  }
  #data>p{
    font: 16px/36px "微软雅黑";margin-top:10px ;
  }
  #data>p span{
    font-size: 12px;margin-left:15px ;
  }
  #data>p span i{
    color: red;margin: 0 5px;
  }
  #data>p>i {
    border: 2px solid red;
    font-size: 12px;
    margin-right: 8px;
    height: 16px;
  }
  #data .ev-components{
    padding:10px 0 50px 35px;
    background: #f9f9f9;
  }
  #data .ev-components .ev-progress{
    width:60%;
  }
  #data .ev-components p{
    font:22px/66px "微软雅黑";
    color:#333;
  }
  #data .ev-components .ev-progress  ul{
    display: flex;
    justify-content: space-between;
    font: 12px/20px "微软雅黑";
    text-align: center;
    margin-top:12px;
  }
  #data .ev-components .ev-progress  ul li span{
    display: block;
  }
  #create{
    display: flex;
  }
 #create .el-select{
   padding-top:22px;margin-right:30px;
 }
  #create .el-menu--horizontal{
    flex:1;
  }
</style>
