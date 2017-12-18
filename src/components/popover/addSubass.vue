<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">添加组件</span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <p><label>组件名称:</label>
        <el-input v-model="input" placeholder="请输入组件名称" size="mini"></el-input>
      </p>
      <p><label style="vertical-align: top;">组件类型:</label>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="轮播图"></el-checkbox>
          <el-checkbox label="BANNER"></el-checkbox>
          <el-checkbox label="等分（最多5等分）"></el-checkbox>
          <el-checkbox label="产品列表"></el-checkbox>
        </el-checkbox-group>
      </p>
    </div>
    <p>
    <el-button type="primary" plain size="mini" @click="addSub()">添加</el-button>
    </p>
  </div>
</template>

<style scoped>
  .demo{
    width: 500px;
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
  .popover-main{
    padding: 20px 12.5px;
    padding-bottom: 0px;
    width: calc(100% - 25px);
  }
  .popover-main .el-input{
    width:200px;
  }
  .popover-main p{
    margin-bottom: 15px;
  }
  .popover-main label{
    margin-right:15px;
  }
  .popover-main .el-checkbox-group{
    display: inline-block;
    width:85%;
  }
  .el-checkbox+.el-checkbox:last-child{
    margin: 10px 0 0 0;
  }
  .demo > p:last-child{
    text-align: center;
  }
  .el-button{
    width: 100px;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        input:'',
        checkList:[]
      };
    },
    computed:{
      ...mapGetters([
        'popoverAlive'
      ])
    },
    methods: {
      ...mapActions([
        'popoverAlert','addCommodityActions'
      ]),
      addSub(){
        //console.log(this.checkList)
        let arr=[]
        this.checkList.forEach(function(item,index){
          if(item=='产品列表'){
            let obj={}
            obj.name=item
            arr.push(obj)
          }else{
            let obj={}
            obj.name=item
            obj.adress=[/*'www.baidu.com','www.tianmao.com','www.taobao.com'*/]
            obj.img=[

            ]
            arr.push(obj)
          }
        })
        this.addCommodityActions(arr)
      }
    }
  };
</script>
