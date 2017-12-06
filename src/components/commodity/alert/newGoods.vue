<template>
  <div class="seach-list" id="inputList1">
      <el-form :label-position="labelPosition" label-width="90px" :model="arr">
        <el-form-item label="商品编号">
          <p><input type="text" v-model="name"></p>
        </el-form-item>
        <el-form-item label="商品名称">
          <p><input type="text" v-model="logo"></p>
        </el-form-item>
        <el-form-item label="状态">
          <p><input type="text" v-model="enName"></p>
        </el-form-item>
        <el-form-item label="编辑类型">
          <p><input type="text" v-model="country"></p>
        </el-form-item>
         <el-form-item label="修改时间">
           <p><input type="text" v-model="country"></p>
         </el-form-item>
       <!-- <el-form-item label="备注">
          <p><input type="text" v-model="desc"></p>
        </el-form-item>-->
        <el-form-item label="">
          <el-button
            size="small"
            type="primary"
            plain
            @click="newPushOne()">提交</el-button>
        </el-form-item>
      </el-form>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  name: 'newGoods',
  data () {
    return {
      arr:{},
      labelPosition:'right',
      name:'',
      enName:'',
      country:'',
      desc:'',
      data:null,
      logo:''
    }
  },
  computed:{
    ...mapGetters([

    ])
  },
  methods: {
    ...mapActions([

    ]),
    newPushOne(){

    }

  },
  mounted () {

  }
}
</script>

<style scoped>
  .seach-list{
    margin-top:16px;
    padding-left:30px;
  }
  .seach-list p{
    background: #F0FAFF;
    height:40px;
    text-indent:30px;
    color:#666666;
  }
  .seach-list p input{
    border:none;
    height:100%;
    background: #F0FAFF;
    width:300px;
  }
  .el-button{
    width:100px;
    /*margin-right:5px;*/
  }
</style>
