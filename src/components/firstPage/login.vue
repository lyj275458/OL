<template>
  <div id="data">
好
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'login',
    data () {
      return {

      }
    },
    components:{

    },
    computed:{
      ...mapGetters([
        'popoverAlive'
      ])
    },
    methods:{
      ...mapActions([
        'popoverAlert'
      ])
    }
  }
</script>

<style scoped>
  #data{
    width:1052px;margin: 0 auto;
  }
  #data #toindex{
    font: 16px/36px "微软雅黑";
    background:none;
    border:0;
    margin:0;
    margin-top:10px ;
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
  .ev-content{
    padding:30px 44px 30px 50px;
    background: #f9f9f9;
    margin-top:20px;
    /*display: flex;
    justify-content:space-between;
    flex-wrap: wrap;*/
  }
  .ev-content p{
    display:inline-block;
    width:284px;
  }
  .ev-content label{
    font-size:12px;
    color:#666;
    margin-right:10px;
  }
  .ev-content .el-input{
    width:210px;
    /*height:52px;*/
    margin-right: 40px;
    margin-bottom:12px;
  }
  .ev-content .el-input:nth-child(6){
    margin-right:20px;
  }
  .el-button--primary{
    width:100px;
    margin:24px 0 0 70px;
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
  #data .line{
    margin:20px 0;
    border:1px dashed #e8e8e8;
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
  .chalist{
    margin-top:14px;
  }
  .chalist .el-select,{
   margin:0 5px;
  }
  .chalist p{
    margin-bottom:10px;
  }
  div.block{
    text-align: right;margin-right: 30px;
    margin-top:20px;
  }
</style>
