<template>
  <div>
    <!--大规格列表-->
    <div class="seach-list" id="inputList" v-if="FlDataResult.num=='1'">
      <div style="overflow: hidden;background: #f0f9eb;position: relative;">
          <el-alert
            :title="FlDataResult.obj.name +' 模板块'"
            type="success"
            :closable="false" style="display: inline-block;width: 60%;padding: 10px;">
          </el-alert>
        <el-button type="success" round size="mini" style="position: absolute;right: 30px;top:50%;margin-top: -14px;" @click="pullNew()">新增规格模板</el-button>
      </div>
      <el-table
        :data="getProductSpecsResult"
        style="width: 100%">
        <el-table-column
          label="名称"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="主导规格"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px" v-if="scope.row.leading==0">否</span>
            <span style="margin-left: 10px" v-if="scope.row.leading==1">是</span>
          </template>
        </el-table-column>
        <el-table-column
          label="背景图片"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px" v-if="scope.row.showLogo==0">否</span>
            <span style="margin-left: 10px" v-if="scope.row.showLogo==1">是</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" plain @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" plain @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="primary" plain @click="goodsDetials(scope.$index, scope.row)">规格明细</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="success" size="small" plain @click="backIndex()">返回</el-button>
    </div>
    <!--编辑列表-->
    <div class="seach-list" id="inputList1" v-if="FlDataResult.num=='2'">
      <div style="overflow: hidden;margin-bottom: 15px">
      </div>
      <el-form :label-position="labelPosition" label-width="100px" :model="smallguigeResult">
        <el-form-item label="规格名称">
          <p><input type="text" v-model="bigname" ></p>
        </el-form-item>
        <el-form-item label="主导规格">
          <p class="leadIndex">
            <el-radio-group v-model="updata1">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </p>
        </el-form-item>
        <el-form-item label="展示背景图片">
          <p class="leadIndex">
            <el-radio-group v-model="updata2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </p>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success" size="small" plain @click="toGuige()">返回</el-button>
          <el-button size="small" type="primary" plain @click="upDataChange()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--新增列表-->
    <div class="seach-list" id="inputList2" v-if="FlDataResult.num=='3'">
      <el-form :label-position="labelPosition" label-width="100px" :model="FlDataResult.obj">
        <el-form-item label="规格名称">
          <p><input type="text" v-model="name" ></p>
        </el-form-item>
        <el-form-item label="主导规格">
          <p class="te">
            <el-radio v-model="leading" label=1>是</el-radio>
            <el-radio v-model="leading" label=0>否</el-radio></p>
        </el-form-item>
        <el-form-item label="展示背景图">
          <p class="te">
            <el-radio v-model="isTure" label=1>是</el-radio>
            <el-radio v-model="isTure" label=0>否</el-radio></p>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success" size="small" plain @click="toGuige()">返回</el-button>
          <el-button size="small" type="primary" plain @click="pullNewone()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import axios from 'axios'
export default {
  name: 'editorList',
  data () {
    return {
      labelPosition:'right',
      leading:'',
      isTure:'',
      des:'',
      dataList:'',
      updata1:'',
      updata2:'',
      input4:'',
      name:'',
      bigname:''

    }
  },
  watch:{
    FlDataResult:{
      handler(curVal,oldVal){
        if(oldVal.num=='2' || oldVal.num=='3'){
          console.log(this.smallguigeResult)
          this.updata1=this.smallguigeResult.leading;
          this.updata2=this.smallguigeResult.showLogo;
          this.bigname=this.smallguigeResult.name
          this.name='';
          this.leading='';
          this.isTure='';
        }
      },
      deep:true
    }
  },
  computed:{
    ...mapGetters([
      'FlDataResult','getProductSpecsResult','smallguigeResult'
    ]),
    /*updata11:{
      get: function (){
        return this.smallguigeResult.leading;
      },
      set: function (newValue){
        this.updata1=newValue
      }

    }*/
  },
  activated(){
      this.name='';
      this.isTure='';
      this.des='';
      this.dataList='';
        this.leading='';
        this.dataList='';
    this.guilist()
  },
  mounted(){

  },
  methods: {
    ...mapActions([
      'fenleiResultActions','deleteSpecDetailActions','getProductSpecsActions','addProductSpecActions','deleteProductActions','updateProductActions','updateProductSpecActions'
    ]),
    //分类下的规格
    guilist(){
      let data={
        id:this.FlDataResult.obj.id
      }
      this.getProductSpecsActions(data)
    },
    backIndex () {
      let data={
        obj:'',
        str:'VfenleiList',
        where:'1'
      }
      this.fenleiResultActions(data)
    },
    handleEdit(index, row) {
      let data={
        obj:row,
        str:'vSpecification',
        where:'2',
        num:1
      }
      this.fenleiResultActions(data)
    },
    handleDelete(index, row){
      this.$confirm('此操作将删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteProductActions(row.id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    upDataChange(){
      let $input=$('#inputList1 input')
      let data={
        id:this.smallguigeResult.id,
        name:$input[0].value,
        showLogo:this.updata2,
        leading:this.updata1
      }
      this.updateProductSpecActions(data)//大规格编辑提交

    },
    toGuige(){
      let data={
        obj:'',
        str:'vSpecification',
        where:'1'
      }
      this.fenleiResultActions(data)//编辑返回
    },
    pullNew(){
      let data={
        obj:'',
        str:'vSpecification',
        where:'3'
      }
      this.fenleiResultActions(data)//跳转新增列表
    },
    pullNewsmall(){
      let data={
        obj:this.smallguigeResult,
        str:'vGuigeDetails',
        where:'2',
        num:'1'
      }
      this.fenleiResultActions(data)
    },
    goodsDetials(index,row){
      console.log(row)
      let data={
        obj:row,
        str:'vGuigeDetails',
        where:'1',
        num:'1'
      }
      this.fenleiResultActions(data)
    },
    pullNewone(){
      let data={
        categoryId:this.FlDataResult.obj.id,
        leading: this.leading,
        name: this.name,
        showLogo: this.isTure
      }
      console.log(data)
      this.addProductSpecActions(data)
    }
  }
}
</script>

<style scoped>
  .seach-list h4{
    font-size:18px;
    font-weight: 600;
    text-indent: 15px;
    color: #333333;
    float:left;
  }
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
  .seach-list p.te{
    text-indent:10px;
  }
  .el-radio+.el-radio{
    margin-left:0;
  }
  .el-button{
    width:100px;
    /*margin-right:5px;*/
  }
  #inputList > .el-button:last-child{
    margin:30px;
  }
  #inputList1 .leadIndex{
    text-indent: 10px;
  }

</style>
