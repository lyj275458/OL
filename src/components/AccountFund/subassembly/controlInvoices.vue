<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 发票管理</p>
    <div class="ev-header">
      <el-alert
        title="温馨提示：请补全发票信息及配送地址，发票信息审核通过后，即可申请开具发票。"
        type="warning"
        :closable="false"
        show-icon>
      </el-alert>
      <!--<p><i class="el-icon-warning"></i>近30天退款率、介入率及纠纷退款率将成为平台考核商家服务质量的重要指标，直接影响到商家参加平台相关活动：<span>上首页、上海淘、上专题、上推荐、上推文等。</span></p>-->
    </div>
    <p><i></i>发票信息</p>
    <div class="ev-content">
      <el-form ref="form" :model="form" label-width="215px" size="small">
        <el-form-item label="开票主体：">
          <el-input value="福鼎市鼎义电子商务有限公司" style="width:230px;" disabled></el-input>
        </el-form-item>
        <el-form-item label="纳税人类型：">
          <el-radio-group v-model="form.resource">
            <el-radio label="小规模纳税人"></el-radio>
            <el-radio label="一般纳税人"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="注册地址：">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input type="textarea" style="width:650px" placeholder="请填写详细的注册地址" :rows=3></el-input>
        </el-form-item>
        <el-form-item label="营业电话：">
          <el-input style="width:230px;"></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码/税务登记号：">
          <el-input style="width:230px;"></el-input>
        </el-form-item>
        <el-form-item label="开户银行：">
          <el-input style="width:230px;"></el-input>
        </el-form-item>
        <el-form-item label="对公银行账号：">
          <el-input style="width:230px;"></el-input>
        </el-form-item>
        <el-form-item label="图片资料：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img src="../../../../static/ee.png" class="avatar">
              <p>营业执照</p>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img src="../../../../static/ee.png" class="avatar">
              <p>组织机构证</p>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img src="../../../../static/ee.png" class="avatar">
              <p>税务登记照</p>
            </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img src="../../../../static/ee.png" class="avatar">
            <p>开户许可证</p>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img src="../../../../static/ee.png" class="avatar">
            <p>一般纳税人资格证</p>
          </el-upload>
        </el-form-item>
      </el-form>
    </div>
    <p><i></i>发票配送地址</p>
    <div class="chalist">
      <el-form ref="form" :model="form" label-width="215px" size="small">
        <el-form-item label="开票主体：">
          <el-input  style="width:230px;"></el-input>
        </el-form-item>
        <el-form-item label="注册地址：">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input type="textarea" style="width:650px" placeholder="请填写详细的注册地址" :rows=3></el-input>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input style="width:230px;"></el-input>
        </el-form-item>
        <el-form-item label="适用业务：">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
      <footer>
        <el-button type="primary" size="small" @click="onSubmit()">提交</el-button>
        <el-button size="small">取消</el-button>
      </footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'controlInvoices',
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        imageUrl: ''
      }
    },
    components:{

    },
    mounted () {

    },
    computed:{
      ...mapGetters([

      ])
    },
    methods:{
      ...mapActions([

      ]),
      onSubmit() {
        console.log('submit!');
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }

    }
  }
</script>

<style scoped>
  #data #toindex{
    font: 16px/36px "微软雅黑";
    background:none;
    border:0;
    margin:0;
    color: #333;
    font-weight: 550;
    text-indent:0;
  }
  .ev-header{
    font:12px/26px "微软雅黑";text-indent:5px ;
    margin:10px 0 28px 0;
  }
  .ev-content{
    padding:24px 8px;
    background: #fafafa;
  }
  #data>p{
    font: 16px/36px "微软雅黑";margin-top:15px ;
  }
  #data>p span{
    font-size: 12px;margin-left:15px ;
  }
  #data>p span i{
    color: red;margin: 0 5px;
  }
  #data>p>i {
    border: 2px solid red;
    font-size: 12px;
    margin-right: 8px;
    height: 16px;
  }
  .chalist{
    background: #fafafa;
    padding:20px 0;
  }
  footer .el-button{
    margin:30px 215px;
    margin-right: 20px;
    width:100px;
  }
  footer .el-button:last-child{
    margin:0;
  }
  /*上传*/
  .ev-content .avatar-uploader {
    border-color: #409EFF;
    display: inline-block;
    margin-right: 15px;
    font-size:12px;
    color: #666666;
  }
  .avatar {
    border: 1px solid #d9d9d9;
    background: #fbfdff;
    font-size: 28px;
    color: #8c939d;
    width: 118px;
    height: 118px;
    line-height: 118px;
    text-align: center;
  }
</style>
