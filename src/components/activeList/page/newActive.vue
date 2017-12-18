<template>
  <div id="newActive">
    <p><label>活动名称:</label><el-input v-model="input" placeholder="请输入活动名称" size="small"></el-input></p>
    <p><label>活动时间:</label><el-date-picker
      size="small"
      v-model="value4Result"
      type="datetimerange"
      :picker-options="pickerOptions2"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
    </p>
    <p><label style="vertical-align:top">活动分享图片:</label>
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
      </el-upload>
    </p>
    <p><label>活动分享标题:</label><el-input v-model="input1" placeholder="请输入活动标题" size="small"></el-input></p>
    <p><label style="vertical-align: top">活动分享描述:</label><el-input type="textarea" v-model="input1" placeholder="请输入活动描述" size="small"></el-input></p>
    <p class="tep"><label>状态:</label><!--<input type="text" :value="smallguigeResult.leading">-->
      <el-radio v-model="updata2" label=1>开启</el-radio>
      <el-radio v-model="updata2" label=0>不开启</el-radio>
    </p>
    <p><el-button type="success" size="small" plain style="margin-top: 10px" @click="activeActions('vSeachActive')">返回</el-button>
    <el-button type="primary" size="small" plain style="margin-top: 10px">确定</el-button></p>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  name: 'huodong',
  data () {
    return {
      input:'',
      value4Result:'',
      input1:'',
      updata2:'',
      fileList:[]
    }
  },
  activated(){
    this.input='';
    this.input1='';
    this.updata2='';
    this.fileList=[]
  },
  computed:{
    ...mapGetters([
        'pickerOptions2','activeChangeResult'
    ])
  },
  methods: {
    ...mapActions([
      'activeActions'
    ]),
    submitUploadfirst () {
      this.$refs.uploadfirst.submit();
    },
    upSuccessfirst (response, file, fileList) {
      this.$message({
        showClose: true,
        message:'上传成功',
        type: 'success'
      })

    },
    upErre (response, file, fileList) {
      this.$message({
        showClose: true,
        message:'上传失败，请重新上传',
        type: 'warning'
      })
    },

  }
}
</script>

<style scoped>
  #newActive{
    margin-top: 30px;
  }
#newActive > p .el-input{
  width:200px;
}
#newActive p{
  margin-bottom:20px;
}
#newActive .upload-demo{
  display: inline-block;
}
  #newActive label,#newActive .tep label:first-child{
    width:100px;
    display: inline-block;
    text-align: right;
    margin-right: 15px;
  }
 #newActive .el-textarea{
   width:80%;
 }
  .el-radio+.el-radio{
    margin-left:0;
  }
  #newActive .tep label{
    width:auto;
  }
  #newActive p:last-child{
    margin-left:100px;
  }
  #newActive p:last-child .el-button{
    width:100px;
  }
</style>
