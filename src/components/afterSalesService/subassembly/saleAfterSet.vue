<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 售后设置</p>
    <p><i></i>售后联系电话管理</p>
    <div class="ev-content">
      <p><i class="el-icon-phone-outline"></i>手机号：{{phone}}<span class="cu"><i class="el-icon-edit-outline"></i>编辑</span></p>
      <el-popover
        ref="popover4"
        placement="right-start"
        trigger="hover">
        <img src="../../../../static/alert.png" alt="售后">
      </el-popover>
        <i class="el-icon-question" v-popover:popover4></i>
    </div>
    <p><i></i>退货地址管理<el-button type="success" round size="mini">+新增退货地址</el-button></p>
    <div class="chalist">
      <div class="adress">
        <p>退货收件人：拼多多-袋鼠售后</p>
        <p>手机号码：</p>
        <p>电话号码：0593-7829190</p>
        <p>所在地区：福建宁德福鼎市</p>
        <p>详细地址：鼎融国际广场2栋8楼（鼎义电商）</p>
        <p>
          <span><i class="el-icon-circle-check-outline"></i>默认地址</span>
          <span><i class="el-icon-edit-outline"></i>编辑</span>
          <span><i class="el-icon-delete"></i>删除</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'saleAfterSet',
    data () {
      return {
        phone:'13250808856'
      }
    },
    components:{

    },
    computed:{
      ...mapGetters([
        'popoverAlive'
      ])
    },
    methods: {
      ...mapActions([
        'popoverAlert'
      ]),
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
  .ev-content{
    padding:20px;
    background: #f9f9f9;
    margin-top:10px;
    /*display: flex;
    justify-content:space-between;
    flex-wrap: wrap;*/
  }
  .ev-content p{
    display: inline-block;
    padding:15px 14px;
    font:12px/52px "微软雅黑";
    border:1px solid #eeeeee;
    width:316px;
    background: #fff;
  }
  .el-button--mini{
    float:right;
    margin-right: 30px;
  }
  .ev-content p span{
    display: inline-block;
    margin-left:50px;
    font-size:12px;
    padding-left:25px;
    border-left:1px solid #eee;
  }
  #data>p{
    font: 16px/36px "微软雅黑";margin-top:15px ;
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
  .chalist{
    padding:20px;
    background: #f9f9f9;
    margin-top:10px;
  }
  .chalist .adress{
    background: #fff;
    width:316px;
    padding:14px;
    padding-bottom:0;
    font:12px/22px "微软雅黑";
    border:1px solid #eee;
  }
  .chalist .adress p:last-child{
    margin-top: 22px;
    font:12px/40px "微软雅黑";
    display: flex;
    justify-content:space-between;
    border-top:1px solid #eee;
  }
  .chalist .adress p:last-child span{
    cursor:pointer;
    font-size:14px;
    color: #999;
  }
  .chalist .adress p:last-child span:first-child{
    color:#f53737;
  }
  .chalist .adress p:last-child span:nth-child(2){
    margin-left: 130px;
  }
  .ev-content i.el-icon-phone-outline, .ev-content i.el-icon-edit-outline {
    color: #000;
    font-size:24px;
    margin-right: 10px;
  }
  i.el-icon-question{
    font-size:20px;
    margin-left: 10px;
    color: #cecece;
    transition: 1s;
  }
  i.el-icon-question:hover{
    color:#337ab7
  }
</style>
