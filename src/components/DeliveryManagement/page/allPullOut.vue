<template>
  <div id="smalltitle">
    <div class="ev-header">
      <p><i class="el-icon-warning"></i>虚假发货严重的可能会被处以店铺二级惩罚（商品移除资源位，移除广告，禁止上新，禁止上架）;
       <span>1.导入单号24小时内可修改，填错单号可能会被判虚拟发货。</span>
        <span> 2.请先揽件后导入，导入后24小时内无揽件信息会被判虚假发货</span> </p>
    </div>
    <div class="logo-list">
      <el-button type="success" size="mini" round style="position: absolute;right:0;z-index: 1111;top: 8px;">查看快递公司时效</el-button>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="批量导入" name="first">
          <vAllOne></vAllOne>
        </el-tab-pane>
        <el-tab-pane label="单条导入" name="second">
          <vAllTwo></vAllTwo>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import vAllOne from '../alert/allOne.vue'
  import vAllTwo from '../alert/allTwo.vue'
  export default {
    name: 'allPullOut',
    data () {
      return {
        activeName2: 'first',
      }
    },
    computed:{
      ...mapGetters([

      ])
    },
    components:{
      vAllOne,vAllTwo
    },
    created(){

    },
    methods:{
      ...mapActions([

      ]),
      handleClick(tab, event) {
        console.log(tab, event);
      }

    }
  }
</script>

<style scoped>
  #smalltitle{
    width:1052px;
  }
  #smalltitle .el-button+.el-button{
    margin:0;
  }
  #smalltitle .logo-list{
    font-size:14px;
    margin-top:16px;
    position: relative;
  }
  .ev-header p{
    background: #fff7dd;
    font:12px/26px "微软雅黑";text-indent:5px ;
    border: 1px solid #f5e19f;
    margin:15px 0 4px 0;
    color:#333;
  }
  .ev-header p span{
    display: block;
    margin-left:20px;
  }
  .el-icon-warning{
    color:#ffa901;
    margin-right:5px;
  }
</style>
