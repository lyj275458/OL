<template>
  <div id="data">
    <ul>
      <li><i class="el-icon-tickets"></i>
      <p>24小时内可修改运单号</p></li>
      <li><i class="el-icon-tickets"></i>
      <p>批量修改直接覆盖导入</p></li>
      <li><i class="el-icon-tickets"></i>
        <p>可一次性导入多家快递</p></li>
      <li><i class="el-icon-tickets"></i>
        <p><el-button size="mini" style="width: 100px;" plain>下载发货模板</el-button></p></li>
    </ul>
    <el-button type="primary" size="small" style="width: 200px;margin-top: 40px;" plain>导入批量发货文件</el-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'BatchShipment',
    data () {
      return {

      }
    },
    components:{

    },
    computed:{
      ...mapGetters([

      ])
    },
    methods: {
      ...mapActions([

      ])
    }
  }
</script>

<style scoped>
  #data{
    padding:40px 100px;
    background: #f9f9f9;
    text-align: center;
    font-size:12px;
  }
#data ul{
  display: flex;
  justify-content:space-between;
}
#data ul li i{
  padding:10px;
  font-size:60px;
  background: #fff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin-bottom:15px;
  color: #666666;
}

</style>
