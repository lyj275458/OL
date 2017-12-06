<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">新增品牌</span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <div class="box-top">
        <div class="table-head">
          <div class="head-item big"><span>品牌名称</span></div>
          <div class="head-item big"><span>LOGO</span></div>
          <div class="head-item big"><span>品牌英文名</span></div>
          <div class="head-item"><span>品牌描述</span></div>
          <div class="head-item big"><span>所属国家</span></div>
        </div>
        <div class="table-box">
          <div class="table-list">
            <div class="head-item big"><input type="text" v-model="name" placeholder="请输入..." show-overflow-tooltip></div>
            <div class="head-item big"><input type="text"  v-model="logo" placeholder="请输入..."></div>
            <div class="head-item big"><input type="text"  v-model="enName" placeholder="请输入..."></div>
            <div class="head-item"><input type="text"  v-model="desc" placeholder="请输入..."></div>
            <div class="head-item big"><input type="text"  v-model="country" placeholder="请输入..."></div>
           <!-- <el-tooltip :disabled="!item.balanceAccountName" class="item" effect="dark" :content="item.balanceBookName" placement="top">
              <div class="head-item big"><span>{{item.balanceAccountName}}</span></div>
            </el-tooltip>-->
          </div>
        </div>
        <div class="buttonm">
          <el-button type="primary" round size="small" @click="newpush()">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 800px;
    height: auto;
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
    /*flex: 2;*/
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 120px;
    /*overflow: auto;*/
    background: #ffffff;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
  }
  .box-top .buttonm{
    text-align: right;
    padding-right:20px;
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
    /*flex: 2;*/
  }
  .table-list .head-item input{
    margin-left: 10px;
    width:100%;
    /*color: #999;*/
    font-size: 12px;
    border:0;
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
          name:"",
          logo:'',
          enName:'',
          desc:'',
          country:''
      }
    },
    computed:{
      ...mapGetters([
        'newPushResult'
      ])
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert','newPushActions'
      ]),
      newpush(){
      let data={
        name:this.name,
        logo:this.logo,
        enName:this.enName,
        desc:this.desc,
        country:this.country
      };
      this.newPushActions(data)
        console.log(this.newPushResult)
      }
    }
  };
</script>
