<template>
	<div id="create">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 发布新商品</p>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">编辑中</el-menu-item>
    <el-menu-item index="2">发布中</el-menu-item>
    <el-menu-item index="3">已驳回</el-menu-item>
    <el-menu-item index="4">发布成功</el-menu-item>
      <el-button type="success" size="mini" @click="newGoods('0','vNewGoods')" round>创建商品</el-button>
      <!--<i class="cu success" >创建商品</i>-->
    </el-menu>
    <el-alert
      title="编辑中的商品，30天内无修改将被自动删除，请商家及时修改或提交。"
      type="warning"
      :closable="false"
      v-if="index=='1'">
    </el-alert>
    <el-alert
      title="被驳回的商品，30天内无修改将被自动删除，请商家及时查看并修改。"
      type="warning"
      :closable="false"
      v-if="index=='3'">
    </el-alert>
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
  import vCompile from '../page/compile.vue'
  import vIssue from '../page/issue.vue'
  import vReject from '../page/reject.vue'
  import vSuccess from '../page/success.vue'
  import vNewGoods from '../alert/newGoods.vue'
export default {
  name: 'pullnew',
  data(){
  	return {
        num:"4",
        activeIndex: '1',
        activeIndex2: '1',
        tittle:"vCompile",
        index:"1"
  	}
  },
  computed:{
    ...mapGetters([

    ])
  },
  components:{
  	vCompile,vIssue,vReject,vSuccess,vNewGoods
  },
  methods:{
    ...mapActions([
     
    ]),
  	 handleSelect(key, keyPath) {
      this.index=key
        if(key=='1'){
          this.tittle='vCompile'
        }
        if(key=='2'){
          this.tittle='vIssue'
        }
        if(key=='3'){
          this.tittle='vReject'
        }
        if(key=='4'){
          this.tittle='vSuccess'
        }
     },
    newGoods(key,title){
     // this.$router.push('3-1')
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
.el-button{
	width: 100px;
		margin:22px 0 0 600px ;
}
#create p{
	background: #fffaeb;
	font:12px/34px "微软雅黑";text-indent:5px ;
	border: 1px solid #fff3cf;
	margin:15px 0 4px 0;
	width: 1030px;
	color:#333;
}
  #create .el-alert--warning{
   margin: 10px 0;
  }

</style>
