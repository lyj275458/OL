<template>
  <div id="smalltitle">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 品牌管理
      <el-button type="success" round size="mini" icon="el-icon-plus" @click="newPush()" style="margin-top: 10px">新增</el-button>
    </p>
    <div class="logo-list">
      <label>品牌名称</label><el-input v-model="input" placeholder="请输入品牌名称" size="small"></el-input>
      <el-button type="primary" round size="mini" icon="el-icon-search" @click="seachPp()">搜索</el-button>
    </div>
    <div class="footer-list">
      <keep-alive>
        <component :is="classResult"></component>
      </keep-alive>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import VpinpaiList from '../alert/pinpaiList.vue'
  import VeditorList from '../alert/editorList.vue'
export default {
  name: 'brandclassify',
  data(){
  	return {
      input:''
  	}
  },
  computed:{
    ...mapGetters([
      'getAllPpResult','getAllTreeResult','classResult'
    ])
  },
  components:{
    VpinpaiList,VeditorList
  },
  activated () {
    this.getAllPpActions()
    console.log(this.getAllPpResult)
  },
  mounted () {

  },
  methods:{
    ...mapActions([
      'getByIdActions','getAllPpActions','checkPpActions','classResultActions'
    ]),
    seachPp(){
      let input=this.input
      this.getByIdActions(input)
      // this.checkPpActions(input)
    },
    newPush(){
      let data={
        obj:'',
        str:'VeditorList',
        where:'2'
      }
      this.classResultActions(data)
    },
    handleEdit(index, row) {
      this.upDataPpActions(row)
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm('此操作将删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deletePpActions(row.id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
      console.log(row.id);
    }
  }
}
</script>

<style scoped>
  #smalltitle .logo-list{
    font-size:14px;
    margin-top:16px;
  }
  #smalltitle .logo-list .el-input{
    width:150px;
    font-size:14px;
    margin-right:26px;
  }
  #smalltitle .logo-list label{
    margin-right:14px;
  }
  #smalltitle .logo-list .el-button--mini, .el-button--mini.is-round{
    float: none;
  }
  #toindex{
    font: 16px/36px "微软雅黑";
    background:none;
    border:0;
    margin:0;
    color: #333;
    font-weight: 550;
    text-indent:0;
  }
  #toindex > p .el-button--mini, .el-button--mini.is-round{
    float: right;
    width:100px;
    margin-right:30px;
  }
</style>
