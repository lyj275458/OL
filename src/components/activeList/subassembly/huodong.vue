<template>
  <div id="smalltitle">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 活动管理
      <el-button type="success" round size="mini" icon="el-icon-plus" @click="newPush()" style="margin-top: 10px">新增</el-button>
    </p>
    <div class="logo-list">
      <label>活动名称</label><el-input v-model="input" placeholder="请输入活动名称" size="small"></el-input>
      <el-button type="primary" style="width:100px" round size="mini" icon="el-icon-search" @click="seachActive()">搜索</el-button>
    </div>
    <div class="footer-list">
      <keep-alive>
        <component :is="activeChangeResult"></component>
      </keep-alive>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import vSeachActive from '../page/seachActive.vue'
  import vNewActive from '../page/newActive.vue'
  import vBianji from '../page/bianji.vue'
export default {
  name: 'huodong',
  data () {
    return {
      input:''
    }
  },
  computed:{
    ...mapGetters([
      'activeChangeResult'
    ])
  },
  components:{
    vSeachActive,vNewActive,vBianji
  },
  methods: {
    ...mapActions([
      'activeActions'
    ]),
    seachActive(){

    },
    newPush(){
      this.activeActions('vNewActive')
    }
  }
}
</script>

<style scoped>
  .logo-list{
    font-size:14px;
    margin-top:16px;
  }
  .logo-list .el-input{
    width:150px;
    font-size:14px;
    margin-right:26px;
  }
  .logo-list label{
    margin-right:14px;
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
  #toindex > p .el-button--mini,#toindex .el-button--mini.is-round{
    float: right;
    width:100px;
    margin-right:30px;
  }
</style>
