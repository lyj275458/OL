<template>
  <div id="smalltitle">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 分类管理
      <el-button type="success" round size="mini" icon="el-icon-plus" @click="pushNew()" style="margin-top: 10px">新增</el-button>
    </p>
    <div class="logo-list">
      <label>分类 ID</label><el-input placeholder="请输入商品ID" v-model="input" size="small"></el-input>
      <el-button type="primary" round size="mini" icon="el-icon-search" @click="seach()">搜索</el-button>
    </div>
    <div class="footer-list">
      <keep-alive>
        <component :is="fenleiCalssResult"></component>
      </keep-alive>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import VfenleiList from '../alert/fenleiList.vue'
  import VfenleiEditorList from '../alert/fenleiEditorList.vue'
  import vSpecification from '../alert/Specification.vue'
  import vGuigeDetails from '../alert/guigeDetails.vue'
  export default {
    name: 'classfenlei',
    data () {
      return {
        input: '',

      }
    },
    computed:{
      ...mapGetters([
        'fenleiCalssResult'
      ])
    },
    components:{
      VfenleiList,VfenleiEditorList,vSpecification,vGuigeDetails
    },
    mounted () {
    },
    methods:{
      ...mapActions([
        'fenleiResultActions','ByIdGetTreeActions','getAllTreeActions'
      ]),
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      seach(){
        let id=this.input
        this.ByIdGetTreeActions(id)
      },
      pushNew(){
        let data={
          obj:'',
          str:'VfenleiEditorList',
          where:'2'
        }
       this.fenleiResultActions(data)
      }
    }
  }
</script>

<style scoped>
  #smalltitle .el-button+.el-button{
    margin:0;
  }
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
