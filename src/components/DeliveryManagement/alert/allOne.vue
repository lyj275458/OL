<template>
  <div id="data">
    <input type="file" @change="importFile(this)" id="imFile" style="display: none"
           accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
    <!--错误信息提示-->
    <el-dialog title="提示" v-model="errorDialog">
      <span>{{errorMsg}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="errorDialog=false">确认</el-button>
  </span>
    </el-dialog>
    <ul>
      <li><i class="el-icon-edit"></i>
      <p>24小时内可修改运单号</p></li>
      <li><i class="el-icon-upload"></i>
      <p>批量修改直接覆盖导入</p></li>
      <li><i class="el-icon-tickets"></i>
        <p>可一次性导入多家快递</p></li>
      <li><i class="el-icon-download"></i>
        <p><el-button size="mini" style="width: 100px;" plain>下载发货模板</el-button></p></li>
    </ul>
    <el-button type="primary" size="small" style="width: 200px;margin-top: 30px;" plain @click="pullMore()">导入批量发货文件</el-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  var  XLSX= require('xlsx')
  export default {
    name: 'BatchShipment',
    data () {
      return {
        fullscreenLoading: false, // 加载中
        imFile: '', // 导入文件el
        outFile: '',  // 导出文件el
        errorDialog: false, // 错误信息弹窗
        errorMsg: '', // 错误信息内容
      }
    },
    components:{

    },
    computed:{
      ...mapGetters([

      ])
    },
    mounted(){
      this.imFile=document.getElementById('imFile')
    },
    methods: {
      ...mapActions([

      ]),
      pullMore(){
        this.imFile.click()
      },
      importFile(){
        this.fullscreenLoading = true
        let obj = this.imFile
        if (!obj.files) {
          this.fullscreenLoading = false
          return
        }
        var f = obj.files[0]
        var reader = new FileReader()
        let $t = this
        reader.onload = function (e) {
          var data = e.target.result
          if ($t.rABS) {
            $t.wb = XLSX.read(btoa(this.fixdata(data)), {  // 手动转化
              type: 'base64'
            })
          } else {
            $t.wb = XLSX.read(data, {
              type: 'binary'
            })
          }
          let json = XLSX.utils.sheet_to_json($t.wb.Sheets[$t.wb.SheetNames[0]])
          console.log(typeof json)
          $t.dealFile($t.analyzeData(json)) // analyzeData: 解析导入数据
        }
        if (this.rABS) {
          reader.readAsArrayBuffer(f)
        } else {
          reader.readAsBinaryString(f)
        }
      },
      analyzeData(data) {  // 此处可以解析导入数据
        return data
      },
      dealFile(data) {   // 处理导入的数据
        console.log(data)
        this.imFile.value = ''
        this.fullscreenLoading = false
        if (data.length <= 0) {
          this.errorDialog = true
          this.errorMsg = '请导入正确信息'
        } else {
          this.$store.state.result.loginResult = data
          this.$message({
            message: '导入成功',
            type: 'success'
          });
        }
      },
      fixdata () {  // 文件流转BinaryString
        var o = ''
        var l = 0
        var w = 10240
        for (; l < data.byteLength / w; ++l) {
          o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
        }
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
        return o
      }
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
  font-size:50px;
  background: #fff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin-bottom:15px;
  color: #666666;
}

</style>
