<template>
  <div>
    <!--编辑列表-->
    <div class="seach-list" id="inputList" v-if="upDataPpResult.num=='1'">
      <el-form :label-position="labelPosition" label-width="90px" :model="upDataPpResult.obj">
        <el-form-item label="品牌名称">
          <p><input type="text" :value="upDataPpResult.obj.name" ></p>
        </el-form-item>
        <el-form-item label="LOGO">
          <p><input type="text" :value="upDataPpResult.obj.logo"></p>
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
        <el-form-item label="品牌英文名">
          <p><input type="text" :value="upDataPpResult.obj.enName"></p>
        </el-form-item>
        <el-form-item label="所属国家">
          <p><input type="text" :value="upDataPpResult.obj.country"></p>
        </el-form-item>
        <el-form-item label="状态">
          <p v-if="upDataPpResult.obj.status == '1'">正常</p>
          <p v-else-if="upDataPpResult.obj.status == '0'">废弃</p>
          <p v-else></p>
        </el-form-item>
        <el-form-item label="备注">
          <p><input type="text" :value="upDataPpResult.obj.desc"></p>
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
    <div class="seach-list" id="inputList1" v-if="upDataPpResult.num=='2'">
      <el-form :label-position="labelPosition" label-width="90px" :model="upDataPpResult.obj">
        <el-form-item label="品牌名称">
          <p><input type="text" v-model="name"></p>
        </el-form-item>
        <el-form-item label="LOGO">
          <p><input type="text" :value="imgResult"></p>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="/apis/uploadImage"
            name="img"
            list-type="picture"
            :on-success="upSuccess"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" size="mini" type="success" plain>选取文件</el-button>
            <el-button style="margin-left: 10px;" size="mini" type="primary" @click="submitUpload" plain>确认上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="品牌英文名">
          <p><input type="text" v-model="enName"></p>
        </el-form-item>
        <el-form-item label="所属国家">
          <p><input type="text" v-model="country"></p>
        </el-form-item>
       <!-- <el-form-item label="状态">
          <p v-if="upDataPpResult.status == '1'">正常</p>
          <p v-else-if="upDataPpResult.status == '0'">废弃</p>
          <p v-else></p>
        </el-form-item>-->
        <el-form-item label="备注">
          <p><input type="text" v-model="desc"></p>
        </el-form-item>
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
    <div class="seach-list" id="inputList2" v-if="upDataPpResult.num=='3'">
      <el-form :label-position="labelPosition" label-width="90px" :model="getByIdResult">
        <el-form-item label="品牌名称">
          <p>{{getByIdResult.name}}</p>
        </el-form-item>
        <el-form-item label="LOGO">
          <p>{{getByIdResult.logo}}</p>
        </el-form-item>
        <el-form-item label="品牌英文名">
          <p>{{getByIdResult.enName}}</p>
        </el-form-item>
        <el-form-item label="所属国家">
          <p>{{getByIdResult.country}}</p>
        </el-form-item>
        <el-form-item label="状态">
          <p v-if="getByIdResult.status == '1'">正常</p>
          <p v-else-if="getByIdResult.status == '0'">废弃</p>
          <p v-else></p>
        </el-form-item>
        <el-form-item label="备注">
          <p>{{getByIdResult.desc}}</p>
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
      name:'',
      enName:'',
      country:'',
      desc:'',
      data:null,
      imgResult:''
    }
  },
  computed:{
    ...mapGetters([
      'getAllPpResult','getAllTreeResult','classResult','upDataPpResult','getByIdResult'
    ])
  },
  activated(){
      this.name='',
      this.enName='',
      this.country='',
      this.desc='',
      this.imgResult='',
      this.fileList=[]
  },
  methods: {
    ...mapActions([
      'classResultActions','upDataPpActions','newPushActions','deletePpActions'
    ]),
    upDataChange () {
      let $input=$('#inputList input')
        let data={
          country:$input[4].value,
          desc:$input[5].value,
          enName:$input[3].value,
          id:this.upDataPpResult.obj.id,
          logo:$input[1].value,
          name:$input[0].value,
        }
        console.log(data)
          this.upDataPpActions(data)
    },
    backIndex () {
      let data={
        obj:'',
        str:'VpinpaiList',
        where:'1'
      }
      this.classResultActions(data)
    },
    newPushOne(){
      let data={
        name:this.name,
        logo:this.imgResult,
        enName:this.enName,
        country:this.country,
        desc:this.desc
      }
        this.newPushActions(data)
    },
    deleteChange () {
      let id=this.getByIdResult.id
      this.$confirm('此操作将删除该品牌, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deletePpActions(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    oneUpChange () {
      let data={
        obj:this.getByIdResult,
        str:'VeditorList',
        where:'1'
      }
      console.log(this.upDataPpResult.obj)
      console.log(this.getByIdResult)
      this.classResultActions(data)
    },
    upSuccess (response, file, fileList) {
      this.$message({
        showClose: true,
        message:'上传成功',
        type: 'success'
      })
      let $input=$('#inputList input')
      if ($input[1]) {
        $input[1].value = response.result
      }
      this.imgResult = response.result
    },
    upErre (response, file, fileList) {
      this.$message({
        showClose: true,
        message:'上传失败，请重新上传',
        type: 'warning'
      })
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
  .seach-list p input{
    border:none;
    height:100%;
    background: #F0FAFF;
    width:300px;
  }
  .el-button{
    width:100px;
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
