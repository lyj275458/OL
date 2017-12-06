<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt;在线状态</p>
    <p><i></i>查询条件</p>
    <div class="ev-content">
      <label>订单编号：</label><el-input placeholder="请输入商品ID" size="small"></el-input>
      <label>商品ID：</label><el-input placeholder="" size="small"></el-input>
      <br>
      <label>扣款时间：</label><el-select v-model="value" size="small">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
      <el-date-picker
        size="small"
        v-model="value4"
        type="datetimerange"
        :picker-options="pickerOptions2"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right">
      </el-date-picker>
      <br>
      <el-button type="primary" round size="mini" @click="alertMe()">查询</el-button>
    </div>
    <div class="line"></div>
    <div class="seach-list">
      <p><i></i>扣款记录查询<span>共查询到<i>{{tableData.length}}</i>条数据</span><el-button type="primary" size="mini" plain>批量导出</el-button></p>
      <el-table
        id="ta"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="订单号"
          width="182"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品编号"
          width="182">
          <template slot-scope="scope">
            <span style="margin-left: 10px;">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品名称"
          width="182"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="扣款原因"
          width="150"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="扣款时间"
          width="183"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="扣款金额(元)"
          width="150"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'OnlineState',
    data () {
      return {
        options: [{
          value: '选项1',
          label: '最近24小时内'
        }, {
          value: '选项2',
          label: '最近7天内'
        }, {
          value: '选项3',
          label: '最近30天内'
        }],
        value:"快速选择时间",
        tableData: [{
          id: '1234567',
          name: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
          resource:'无',
          temprice:'99',
          ownprice:'110',
          pingjia:'暂无评价',
          save:'777',
          sales:'12',
          ranking:'4',
          salestatus:'销售中',
          address: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
          status:'编辑中',
          type:"修改"
        }],
        value4:''
      }
    },
    components:{

    },
    computed:{
      ...mapGetters([
        'popoverAlive','pickerOptions2'
      ])
    },
    methods:{
      ...mapActions([
        'popoverAlert'
      ]),
      alertMe(){
        this.popoverAlert('vBalance')
        console.log(this.popoverAlive)
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
  .ev-content{
    padding:15px 44px 30px 50px;
    background: #f9f9f9;
    margin-top:10px;
  }
  .ev-content p{
    display:inline-block;
    width:284px;
  }
  .ev-content label{
    font-size:12px;
    color:#666;
    margin-right:10px;
  }
  .ev-content .el-input{
    width:210px;
    /*height:52px;*/
    margin-right: 40px;
    margin-bottom:12px;
  }
  .ev-content .el-input:nth-child(6){
    margin-right:20px;
  }
  .el-button--primary{
    width:100px;
    margin:24px 0 0 70px;
  }
  #data .line{
    margin:20px 0;
    border:1px dashed #e8e8e8;
  }
  #data>p{
    font: 16px/36px "微软雅黑";
  }
  #data>p>i {
    border: 2px solid red;
    font-size: 12px;
    margin-right: 8px;
    height: 16px;
  }
  #data .el-select{
    width:130px;
  }
  .seach-list > p{
    font: 16px/36px "微软雅黑";margin-top:10px ;
  }
  .seach-list > p span{
    font-size: 12px;margin-left:15px ;
  }
  .seach-list > p span i{
    color: red;margin: 0 5px;
  }
  .seach-list > p>i{
    border: 2px solid red;font-size: 12px;margin-right: 8px;height: 16px;
  }
  .seach-list > p button{
    float: right;
    width:100px;
    margin-top: 5px;
  }
  .el-table th>div.cell,.el-table .cell,.el-table{
    font-size: 12px;
  }
</style>
