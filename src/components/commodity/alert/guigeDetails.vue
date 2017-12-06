<template>
  <div>
    <!--小规格列表-->
    <div class="seach-list" id="inputList1" v-if="FlDataResult.num=='1'">
      <div style="overflow: hidden;margin-bottom: 15px">
        <el-button type="success" round size="mini" style="float: right;margin-right: 30px;" @click="pullNewsmall()">新增小规格</el-button>
      </div>
      <el-table
        :data="getProductSpecDetailsResult"
        style="width: 100%">
        <el-table-column
          prop="date"
          :label="smallguigeResult.name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="详情"
          width="180">
        </el-table-column>
        <el-table-column
          prop="logo"
          label="图片">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              plain
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              plain
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button class="last" type="success" size="small" plain @click="backIndex()">返回</el-button>
    </div>
    <!--//新增小规格-->
    <div class="seach-list" id="inputList2" v-if="FlDataResult.num=='2'">
      <div style="overflow: hidden;margin-bottom: 15px">
        <!--<el-button type="success" round size="mini" style="float: right;margin-right: 30px;" @click="pullNewsmall()">新增小规格</el-button>-->
      </div>
      <el-form :label-position="labelPosition" label-width="100px" :model="smallguigeResult">
        <el-form-item label="规格详情">
          <p><input type="text" v-model="newname"></p>
        </el-form-item>
        <el-form-item label="主导规格">
          <p class="leadIndex"><!--<input type="text" :value="smallguigeResult.leading">-->
            <el-radio v-model="updata1" label=1>是</el-radio>
            <el-radio v-model="updata1" label=0>否</el-radio>
          </p>
        </el-form-item>
        <el-form-item label="图片" v-if="updata1==1">
          <p>{{input4}}</p>
          <el-upload
            class="upload-demo"
            ref="uploadfirst"
            name="img"
            action="/apis/uploadImage"
            :on-success="upSuccessfirst"
            :on-error="upErre"
            :file-list="fileList"
            list-type="picture"
            :auto-upload="false">
            <el-button slot="trigger" size="mini" type="success" plain>选取文件</el-button>
            <el-button style="margin-left: 10px;" size="mini" type="primary" @click="submitUploadfirst" plain>确认上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="展示背景图片">
          <p class="leadIndex"><!--<input type="text" :value="smallguigeResult.leading">-->
            <el-radio v-model="updata2" label=1>是</el-radio>
            <el-radio v-model="updata2" label=0>否</el-radio>
          </p>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success" size="small" plain @click="backIndex2()">返回</el-button>
          <el-button type="primary" size="small" plain @click="upTonew()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--小规格编辑-->
    <div class="seach-list" id="inputList3" v-if="FlDataResult.num=='3'">
      <div style="overflow: hidden;margin-bottom: 15px">
        <!--<el-button type="success" round size="mini" style="float: right;margin-right: 30px;" @click="pullNewsmall()">新增小规格</el-button>-->
      </div>
      <el-form :label-position="labelPosition" label-width="100px" :model="updataSmallResult">
        <el-form-item label="规格详情">
          <p><input type="text" :value="updataSmallResult.name"></p>
        </el-form-item>
        <el-form-item label="主导规格">
          <p class="leadIndex">
            <el-radio v-model="updata1" label=1>是</el-radio>
            <el-radio v-model="updata1" label=0>否</el-radio>
          </p>
        </el-form-item>
        <el-form-item label="图片" v-if="updata1==1">
          <p><input type="text" :value="updataSmallResult.logo"></p>
          <el-upload
            class="upload-demo"
            ref="uploadfirst"
            name="img"
            action="/apis/uploadImage"
            :on-success="upSuccessfirst"
            :on-error="upErre"
            :file-list="fileList"
            list-type="picture"
            :auto-upload="false">
            <el-button slot="trigger" size="mini" type="success" plain>选取文件</el-button>
            <el-button style="margin-left: 10px;" size="mini" type="primary" @click="submitUploadfirst" plain>确认上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="展示背景图片">
          <p class="leadIndex"><!--<input type="text" :value="smallguigeResult.leading">-->
            <el-radio v-model="updata2" label=1>是</el-radio>
            <el-radio v-model="updata2" label=0>否</el-radio>
          </p>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success" size="small" plain @click="backIndex2()">返回</el-button>
          <el-button type="primary" size="small" plain @click="updatasmall()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

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
  .seach-list p.leadIndex{
    text-indent:10px;
  }
  .el-radio+.el-radio{
    margin-left:0;
  }
  .el-button.last{
    width:100px;
    margin:30px;
  }
  div.upload-demo, div.el-upload__tip{
    display: inline-block;
    height:100%;
    margin:0;
    padding:0;
  }
  div.upload-demo .el-upload-list{
    width:300px;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        fileList: [],
        newname:'',
        labelPosition:'right',
        updata1:'',
        updata2:'',
        input4:''

      }
    },
    computed:{
      ...mapGetters([
        'FlDataResult','getProductSpecDetailsResult','smallguigeResult','updataSmallResult'
      ])
    },
    watch:{
      FlDataResult:{
        handler(curVal,oldVal){
          if(oldVal.num=='2' || oldVal.num=='3'){
              this.input4=''
              this.newname=''
          }
        },
        deep:true
      }
    },
    activated(){
      this.input4=''
      this.getProductSpecDetailsActions(this.smallguigeResult.id)
    },
    methods: {
      ...mapActions([
        'getProductSpecDetailsActions','fenleiResultActions','addProductSpecDetailActions','updateProductActions','deleteSpecDetailActions'
      ]),
      backIndex () {
        let data={
          obj:'',
          str:'vSpecification',
          where:'1'
        }
        this.fenleiResultActions(data)
      },
      backIndex2 () {
        let data={
          obj:'',
          str:'vGuigeDetails',
          where:'1'
        }
        this.fenleiResultActions(data)
      },
      pullNewsmall(){
        let data={
          obj:'',
          str:'vGuigeDetails',
          where:'2'
        }
        this.fenleiResultActions(data)
      },
      handleEdit(index, row) {
        console.log(row)
        let data={
          obj:row,
          str:'vGuigeDetails',
          where:'3',
          num:'1',
          smallNum:'1'
        }
        this.fenleiResultActions(data)
      },
      handleDelete(index, row) {
        this.$confirm('此操作将删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteSpecDetailActions(row.id)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      submitUploadfirst () {
        this.$refs.uploadfirst.submit();
      },
      upSuccessfirst (response, file, fileList) {
        this.$message({
          showClose: true,
          message:'上传成功',
          type: 'success'
        })
        let $input=$('#inputList3 input')
        if($input && this.FlDataResult.num!='2'){
          $input[3].value = response.result
        }
        this.input4 = response.result
      },
      upErre (response, file, fileList) {
        this.$message({
          showClose: true,
          message:'上传失败，请重新上传',
          type: 'warning'
        })
      },
      upTonew(){
        let data={
          name:this.newname,
          logo:this.input4,
          specId:this.smallguigeResult.id
        }
        this.addProductSpecDetailActions(data)
      },
      updatasmall(){
        let $input = $('#inputList3 input')
        let data={
          id:this.updataSmallResult.id,
          logo:$input[3].value,
          name:$input[0].value,
          specId:this.smallguigeResult.id
        }
        console.log(data.id)
      this.updateProductActions(data)
      }

    }
  }
</script>
