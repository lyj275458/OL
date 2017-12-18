<template>
  <div>
  <div id="bianji">
    <div class="left">
      <p>
        <el-button type="primary" plain size="mini" icon="el-icon-plus" @click="popoverAlert('vAddSubass')">添加活动组件</el-button>
        <el-button type="success" plain size="mini" @click="popoverAlert('Vdetail')">预览<i class="el-icon-d-arrow-right"></i></el-button>
      </p>
      <div class="left-btn">
        <div v-for="(item,index) in addCommodityResult">
          <p @click="commodityActions(item)" class="cu">{{item.name}} <i class="el-icon-close" style="float:right;color: #000;font-size: 18px;" @click="remove(index)"></i></p>
          <p><i class="iconfont icon-gupiaojiangicon cu" style="display: inline-block;margin:20px 0 10px 0;" @click="up(index)"></i><br>
            <i class="iconfont icon-gupiaojiangicon1 cu" @click="down(index)"></i>
          </p>
        </div>
      </div>
    </div>
    <div class="right">
      <label>编辑数据</label>
      <div class="right-btn">
        <v-zujiandata/>
      </div>
    </div>
  </div>
  <p class="btnOver"><el-button type="success" size="small" plain style="margin-top: 10px" @click="activeActions('vSeachActive')">返回</el-button>
    <el-button type="primary" size="small" plain style="margin-top: 10px">提交</el-button></p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import vZujiandata from './zujiandata.vue'
export default {
  name: 'huodong',
  data () {
    return {


    }
  },
  computed:{
    ...mapGetters([
      'addCommodityResult','commodityResult'
    ])
  },
  components:{
    vZujiandata
  },
  methods: {
    ...mapActions([
      'activeActions','addCommodityActions','popoverAlert','commodityActions'
    ]),
    up(index){
      let item=this.addCommodityResult[index]
      if(index != 0){
        this.addCommodityResult.splice(index,1)
        this.addCommodityResult.splice(index-1,0,item)
      }else{
        this.addCommodityResult.splice(index,1)
        this.addCommodityResult.push(item)
      }


    },
    down(index){
      let item=this.addCommodityResult[index]
      if(index == this.addCommodityResult.length-1){
        this.addCommodityResult.splice(index,1)
        this.addCommodityResult.unshift(item)
      }else{
        this.addCommodityResult.splice(index,1)
        this.addCommodityResult.splice(index+1,0,item)
      }
    },
    Updata(){

    },
    remove(index,event){
      if ( event && event.stopPropagation ) {
        event.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
      this.addCommodityResult.splice(index,1)
    }

  }
}
</script>

<style scoped>
  #bianji {
    margin-top: 30px;
    display: flex;
    padding:0 40px;
    justify-content: space-between;
  }
    #bianji .left{
      width:300px;
    }
  #bianji .left > p:first-child{
    display: flex;
    justify-content:space-between;
  }
    .left .left-btn{
    border:1px solid #333333;
    padding:10px;
    margin-top: 5px;
    height:461px;
    overflow: auto;
  }
  .left .left-btn div{
    display: flex;
    justify-content:space-between;
  }
  .left .left-btn p:first-child{
    text-align: center;
    line-height: 100px;
    width:80%;
    border:1px solid #333333;
  }
  .left .left-btn p:last-child{
    margin-left:20px;
    flex:1;
  }
  .left .left-btn p:last-child .iconfont{
    font-size:24px;
  }
  #bianji .right{
    /*margin-left: 100px;*/
    flex:0.9;
    height:100%;
    /*padding-right:40px;*/
  }
  #bianji .right > label{
    font:14px/28px "微软雅黑";
  }
  .right .right-btn{
    border:1px solid #333333;
    height:450px;
    padding:18px;
    overflow: auto;
    height:100%;
  }
  .btnOver{
    text-align: right;
    margin-bottom:30px;
    padding-right: 150px;
  }
.btnOver .el-button{
  margin-left: 30px;
  width:100px;
}
</style>
