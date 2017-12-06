<template>
  <div>
    <!--编辑列表-->
    <div class="seach-list" id="inputList" v-if="FlDataResult.num=='1'">
      <el-form :label-position="labelPosition" label-width="90px" :model="FlDataResult.obj">
        <el-form-item label="分类名称">
          <p><input type="text" :value="FlDataResult.obj.name" ></p>
        </el-form-item>
        <el-form-item label="分类全路径">
          <p><input type="text" :value="FlDataResult.obj.fullNamePath"></p>
        </el-form-item>
        <el-form-item label="所在层级">
          <p><input type="text" :value="FlDataResult.obj.level"></p>
        </el-form-item>
        <el-form-item label="主图">
          <p><input type="text" :value="FlDataResult.obj.image"></p>
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
        <el-form-item label="小图">
          <p><input type="text" :value="FlDataResult.obj.logo"></p>
          <el-upload
            class="upload-demo"
            ref="upload"
            name="img"
            action="/apis/uploadImage"
            :on-success="upSuccess"
            :on-error="upErre"
            :file-list="fileList"
            list-type="picture"
            :auto-upload="false">
            <el-button slot="trigger" size="mini" type="success" plain>选取文件</el-button>
            <el-button style="margin-left: 10px;" size="mini" type="primary" @click="submitUpload" plain>确认上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="叶子节点">
          <p><input type="text" :value="FlDataResult.obj.leaf"><!--<el-button type="success" size="mini" class="btn" round @click="changenum">修改</el-button>--></p>
        </el-form-item>
        <el-form-item label="排序值">
          <p><input type="text" :value="FlDataResult.obj.sort"></p>
        </el-form-item>
        <el-form-item label="状态">
          <span style="margin-left: 10px" v-if="FlDataResult.obj.status=='1'">正常</span>
          <span style="margin-left: 10px" v-else-if="FlDataResult.obj.status=='0'">废弃</span>
          <span style="margin-left: 10px" v-else></span>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success" size="small" plain @click="backIndex()">返回</el-button>
          <el-button
            size="small"
            type="primary"
            plain
            @click="upDataChange()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--新增列表-->
    <div class="seach-list" id="inputList1" v-if="FlDataResult.num=='2'">
      <el-form :label-position="labelPosition" label-width="90px" :model="FlDataResult.obj">
        <el-form-item label="分类名称">
          <p><input type="text" v-model="input1"></p>
        </el-form-item>
        <el-form-item label="分类全路径">
          <p><input type="text" v-model="input2"></p>
        </el-form-item>
        <el-form-item label="所在层级">
          <p><input type="text" v-model="input3"></p>
        </el-form-item>
        <el-form-item label="主图">
          <p><input type="text" v-model="input4"></p>
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
       <!-- <el-form-item label="状态">
          <p v-if="upDataPpResult.status == '1'">正常</p>
          <p v-else-if="upDataPpResult.status == '0'">废弃</p>
          <p v-else></p>
        </el-form-item>-->
        <el-form-item label="小图">
          <p><input type="text" v-model="input5"></p>
          <el-upload
            class="upload-demo"
            ref="upload"
            name="img"
            action="/apis/uploadImage"
            :on-success="upSuccess"
            :on-error="upErre"
            :file-list="fileList"
            list-type="picture"
            :auto-upload="false">
            <el-button slot="trigger" size="mini" type="success" plain>选取文件</el-button>
            <el-button style="margin-left: 10px;" size="mini" type="primary" @click="submitUpload" plain>确认上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="叶子节点">
          <p class="te"><el-radio v-model="input6" label=true>是</el-radio>
            <el-radio v-model="input6" label=false>否</el-radio></p>
        </el-form-item>
        <el-form-item label="排序值">
          <p><input type="text" v-model="input7"></p>
        </el-form-item>
       <!-- <el-form-item label="状态">
          <p><input type="text" v-model="input1"></p>
        </el-form-item>-->
        <el-form-item label="">
          <el-button type="success" size="small" plain @click="backIndex()">返回</el-button>
          <el-button
            size="small"
            type="primary"
            plain
            @click="newPushOne()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
        <!--查找列表-->
    <div class="seach-list" id="inputList2" v-if="FlDataResult.num=='3'">
      <el-form :label-position="labelPosition" label-width="90px" :model="ByIdGetTreeResult">
        <el-form-item label="分类名称">
          <p>{{ByIdGetTreeResult.name}}</p>
        </el-form-item>
        <el-form-item label="分类全路径">
          <p>{{ByIdGetTreeResult.fullNamePath}}</p>
        </el-form-item>
        <el-form-item label="所在层级">
          <p>{{ByIdGetTreeResult.level}}</p>
        </el-form-item>
        <el-form-item label="主图">
          <p>{{ByIdGetTreeResult.image}}</p>
        </el-form-item>
        <el-form-item label="小图">
          <p>{{ByIdGetTreeResult.logo}}</p>
        </el-form-item>
        <el-form-item label="叶子节点">
          <p>{{ByIdGetTreeResult.leaf}}</p>
        </el-form-item>
        <el-form-item label="排序值">
          <p>{{ByIdGetTreeResult.sort}}</p>
        </el-form-item>
        <el-form-item label="状态">
          <span style="margin-left: 10px" v-if="ByIdGetTreeResult.status=='1'">正常</span>
          <span style="margin-left: 10px" v-else-if="ByIdGetTreeResult.status=='0'">废弃</span>
          <span style="margin-left: 10px" v-else></span>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success" size="small" plain @click="backIndex()">返回</el-button>
          <el-button
            size="small"
            type="primary"
            plain
            @click="oneUpChange()">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            plain
            @click="deleteChange()">删除</el-button>
          <el-button
            size="small"
            type="danger"
            plain
            v-if="FlDataResult.obj.leaf"
            @click="oneManage()">规格管理</el-button>
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
      fileList: [],
      labelPosition:'right',
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',
      input7:''
    }
  },
  computed:{
    ...mapGetters([
      'getAllTreeResult','FlDataResult','ByIdGetTreeResult'
    ])
  },
  activated(){
      this.input1='',
      this.input2='',
      this.input3='',
      this.input4='',
      this.input5='',
      this.input6='',
      this.input7='',
      this.fileList=[]
  },
  methods: {
    ...mapActions([
      'fenleiResultActions','deleteClassTreeActions','upDataClassTreeActions','pushClassTreeActions'
    ]),
          upDataChange () {
            let $input=$('#inputList input')
                let data={
                  id:this.FlDataResult.obj.id,
                  name:$input[0].value,
                  logo:$input[5].value,
                  image:$input[3].value,
                  leaf:$input[7].value,
                  level:$input[2].value,
                  sort:$input[8].value
                }
              console.log(data)
                this.upDataClassTreeActions(data)
          },
          backIndex () {
            let data={
              obj:'',
              str:'VfenleiList',
              where:'1'
            }
            this.fenleiResultActions(data)
          },
          newPushOne(){
            let data={
            name:this.input1,
            logo:this.input5,
            image:this.input4,
            leaf:this.input6,
            level:this.input3,
            sort:this.input7
            }
            this.pushClassTreeActions(data)
          },
          deleteChange () {
            let id=this.ByIdGetTreeResult.id
            this.$confirm('此操作将删除该品牌, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.deleteClassTreeActions(id)
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          },
          oneUpChange () {
            let data={
              obj:this.ByIdGetTreeResult,
              str:'VfenleiEditorList',
              where:'1'
            }
            this.fenleiResultActions(data)
          },
          submitUploadfirst () {
            this.$refs.uploadfirst.submit();
          },
          submitUpload() {
            this.$refs.upload.submit();
          },
          upSuccessfirst (response, file, fileList) {
            this.$message({
              showClose: true,
              message:'上传成功',
              type: 'success'
            })
            let $input=$('#inputList input')
            if ($input[3]) {
              $input[3].value = response.result
            }
            this.input4 = response.result
          },
          upSuccess (response, file, fileList) {
            this.$message({
              showClose: true,
              message:'上传成功',
              type: 'success'
            })
            let $input=$('#inputList input')
            if ($input[5]) {
              $input[5].value = response.result
            }
            this.input5 = response.result
          },
          upErre (response, file, fileList) {
            this.$message({
              showClose: true,
              message:'上传失败，请重新上传',
              type: 'warning'
            })
          },
          oneManage(){
            let data={
              obj:this.FlDataResult.obj,
              str:'vSpecification',
              where:'1'
            }
            this.fenleiResultActions(data)
          }
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
  .seach-list p.te{
    text-indent:10px;
  }
  .el-radio+.el-radio{
    margin-left:0;
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
  div.upload-demo, div.el-upload__tip{
    display: inline-block;
    height:100%;
    margin:0;
    padding:0;
  }
  div.upload-demo .el-upload-list{
    width:300px;
  }
  .el-button--mini.btn, .btn.el-button--mini.is-round{
    margin-left:10px;
    width:50px;
    padding:5px;font-size: 12px;
  }
</style>
