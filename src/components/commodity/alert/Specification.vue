<template>
  <div>
    <!--大规格列表-->
    <div class="seach-list" id="inputList" v-if="FlDataResult.num=='1'">
      <div style="overflow: hidden">
        <el-tag>{{FlDataResult.obj.name}} 模板块</el-tag>
        <el-button type="success" round size="mini" style="float: right;margin-right: 30px;" @click="pullNew()">新增规格模板</el-button>
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
          <p><input type="text" :value="smallguigeResult.name" ></p>
        </el-form-item>
        <el-form-item label="主导规格">
          <p class="leadIndex"><!--<input type="text" :value="smallguigeResult.leading">-->
            <el-radio v-model="updata1" label=1>是</el-radio>
            <el-radio v-model="updata1" label=0>否</el-radio>
          </p>
        </el-form-item>
        <el-form-item label="展示背景图片">
          <p class="leadIndex"><el-radio v-model="updata2" label=1>是</el-radio>
            <el-radio v-model="updata2" label=0>否</el-radio></p>
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
          <p class="te"><el-radio v-model="leading" label=1>是</el-radio>
            <el-radio v-model="leading" label=0>否</el-radio></p>
        </el-form-item>
        <el-form-item label="展示背景图">
          <p class="te"><el-radio v-model="isTure" label=1>是</el-radio>
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
      tableData: [{
        name: '尺寸',
        leading: '是',
        showLogo: '上海市普陀区金沙江路 1518 弄',
        detail:'X'
      }, {
        name: '颜色',
        leading: '是',
        showLogo: '上海市普陀区金沙江路 1517 弄',
        detail:'黄色'
      }, {
        name: '参数',
        leading: '否',
        showLogo: '上海市普陀区金沙江路 1519 弄',
        detail:'1：list，2：num'
      }, {
        name: '各种字段',
        leading: '否',
        showLogo: '上海市普陀',
        detail:'其他待定'
      }],
      labelPosition:'right',
      leading:'',
      isTure:'',
      des:'',
      dataList:'',
      updata1:'',
      updata2:'',
      input4:''

    }
  },
  computed:{
    ...mapGetters([
      'getAllTreeResult','classResult','FlDataResult','getProductSpecDetailsResult','getProductSpecsResult','smallguigeResult'
    ])
  },
  activated(){
      this.name='',
      this.isTure='',
      this.des='',
      this.dataList='',
        this.leading='',
        this.dataList=''
    this.guilist()
  },
  mounted(){

  },
  methods: {
    ...mapActions([
      'fenleiResultActions','deleteSpecDetailActions','getProductSpecsActions','getProductSpecDetailsActions','addProductSpecActions','deleteProductActions',
      'addProductSpecDetailActions','updateProductActions'
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
      this.updateProductActions()//编辑提交

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
       /* let data={
          logo:'safasfasfas.png',
          name: '黄色',
          specId: this.smallguigeResult.id
        }
      this.addProductSpecDetailActions(data)*/
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
      //this.getProductSpecDetailsActions(row.id)
    },
    pullNewone(){
      let data={
        categoryId:this.FlDataResult.obj.id,
        leading: this.leading,
        name: this.name,
        showLogo: this.isTure
      }
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
