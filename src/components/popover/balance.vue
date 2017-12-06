<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">当月总余额明细</span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <div class="box-top">
        <div class="table-head">
          <div class="head-item big"><span>余额类型</span></div>
          <div class="head-item big"><span>余额生效时间</span></div>
          <div class="head-item big"><span>余额失效时间</span></div>
          <div class="head-item"><span>合同号余额</span></div>
          <div class="head-item big"><span>账目范围</span></div>
        </div>
        <div class="table-box">
          <div class="table-list">
            <div class="head-item big" v-for="item in balanceDetail"><span>{{item}}</span></div>
            <!--<div class="head-item big"><span>item</span></div>
            <div class="head-item big"><span>item</span></div>
            <div class="head-item"><span>item</span></div>-->
            <!--<el-tooltip :disabled="!item.balanceAccountName" class="item" effect="dark" :content="item.balanceBookName" placement="top">
              <div class="head-item big"><span>{{item.balanceAccountName}}</span></div>
            </el-tooltip>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 800px;
    height: 220px;
    background: #F0FAFF;
    margin-left: -300px;
    margin-top: -220px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
  }
  .popover-head{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-head i{
    float: right;
    color: #A1C1E2;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }
  .popover-head .title{
    margin-left: 15px;
    font-weight: bold;
  }
  .popover-head .small-title{
    font-size: 12px;
    color: #999999;
    font-weight: normal;
  }
  .popover-main{
    padding: 20px 12.5px;
    width: calc(100% - 25px);
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  .table-head{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #F1F4F7;
    border: 1px solid #E7ECF1;
  }
  .table-head .head-item{
    width: 100%;
    flex: 1;
  }
  .table-head .big{
    width: 100%;
    flex: 2;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 120px;
    overflow: auto;
    background: #ffffff;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #ffffff;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list .head-item{
    width: 100%;
    flex: 1;
  }
  .table-list .head-item .blue{
    color: #1476CC;
    cursor: pointer;
  }
  .table-list .big{
    width: 100%;
    flex: 2;
  }
  .table-list .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }
  .popover-main .title{
    margin: 15px 0 12px 0;
    font-weight: 500;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        balanceDetail:[
              1,2,3,4,5
        ]
      };
    },
    computed:{
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert'
      ])
    }
  };
</script>
