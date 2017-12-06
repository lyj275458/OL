<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 扣款明细</p>
    <div class="ev-header">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="延迟发货" name="first">
          <vDelayGoods/>
        </el-tab-pane>
        <el-tab-pane label="缺货扣款" name="second">
          <vOutMenoy/>
        </el-tab-pane>
        <el-tab-pane label="退运费" name="third">
          <vReturnFreight/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="ev-content">

    </div>
    <div class="chalist">

    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import vDelayGoods from '../page/delayGoods.vue'
  import vOutMenoy from '../page/outMenoy.vue'
  import vReturnFreight from '../page/returnFreight.vue'
  export default {
    name: 'withholdingDetain',
    data () {
      return {
        activeName: 'first'
      }
    },
    components:{
      vDelayGoods,vOutMenoy,vReturnFreight
    },
    mounted () {

    },
    computed:{
      ...mapGetters([

      ])
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
  #data #toindex{
    font: 16px/36px "微软雅黑";
    background:none;
    border:0;
    margin:0;
    color: #333;
    font-weight: 550;
    text-indent:0;
  }
  .ev-header p{
    /*background: #fffaeb;*/
    font:12px/26px "微软雅黑";text-indent:5px ;
    /*border: 1px solid #f5e19f;*/
    margin:15px 0 4px 0;
    width: 1030px;
    color:#333;
    margin-bottom:28px;
  }
  .ev-header p span{
    color: rgb(255, 0, 0);
  }
  .el-icon-warning{
    color:#ffa901;
    margin-right:5px;
  }

  .ev-content{

  }

</style>
