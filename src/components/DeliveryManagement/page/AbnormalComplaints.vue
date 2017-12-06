<template>
  <div id="smalltitle">
    <p>温馨提示：以下订单<span>被消费者投诉为物流异常</span>，信息仅供提示和参考，具体请以快递官网为准，如果您核实后确认物流信息无异常，可以忽略。</p>
    <div class="logo-list">
      <label>投诉时间：</label> <el-date-picker
      size="small"
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
      <el-select v-model="value" placeholder="请选择" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
      <el-button type="primary" round size="mini" @click="seach()">搜索</el-button>
    </div>
    <div class="seach-list">
      <p><i></i>异常数据<span>共查询到<i>{{tableData.length}}</i>条数据</span></p>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="订单号"
          width="111">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品ID"
          width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px;" class="cu">{{ scope.row.resource }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品名称"
          width="155">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="快递公司"
          width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="物流单号"
          width="155">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.save }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="投诉类型"
          width="155">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.save }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="消费者投诉内容	"
          width="155">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="投诉时间"
          width="105">
          <template slot-scope="scope">
            <span style="margin-left: 10px" v-if="scope.row.status='1'">正常</span>
            <span style="margin-left: 10px" v-else-if="scope.row.status='0'">废弃</span>
            <span style="margin-left: 10px" v-else></span>
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
    name: 'LogisticsReminder',
    data () {
      return {
        options: [{
          value: '选项1',
          label: '商品ID'
        }, {
          value: '选项2',
          label: '订单编号'
        }, {
          value: '选项3',
          label: '物流单号'
        }],
        value: '商品ID',
        value1: new Date(),
        input: '',
        tableData: [{
          id: '1234567',
          name: 'ol圈',
          resource: '无',
          temprice: '99',
          ownprice: '110',
          pingjia: '暂无评价',
          save: '777',
          sales: '12',
          ranking: '4',
          salestatus: '销售中',
          address: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
          status: '编辑中',
          type: "修改"
        }, {
          id: '1234567',
          name: '王小虎',
          resource: '有',
          temprice:'99',
          ownprice:'110',
          pingjia:'暂无评价',
          save:'777',
          sales:'12',
          ranking:'4',
          salestatus:'销售中',
          address: '【意大利袋鼠】【2017年最新款亏本推荐】4条装男士内裤男 纯棉印花平角裤 中腰透气礼盒装',
          status:'编辑中',
          type:"修改"
        }, {
          id: '234565',
          name: '拼多多',
          resource:'无',
          temprice:'99',
          ownprice:'110',
          pingjia:'暂无评价',
          save:'777',
          sales:'12',
          ranking:'4',
          salestatus:'销售中',
          address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
          status:'编辑中',
          type:"新增"
        }, {
          id: '65432345',
          name: '【意大利袋鼠】【下单即送棉袜】',
          resource:'有',
          temprice:'99',
          ownprice:'110',
          pingjia:'暂无评价',
          save:'777',
          sales:'12',
          ranking:'4',
          salestatus:'销售中',
          address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
          status:'编辑中',
          type:"新增"
        }]
      }
    },
    computed:{
      ...mapGetters([

      ])
    },
    created(){

    },
    methods:{
      ...mapActions([

      ]),
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      seach(){
        let id=this.input

      }
    }
  }
</script>

<style scoped>
  #smalltitle{
    width:1052px;
  }
  #smalltitle .el-button+.el-button{
    margin:0;
  }
  #smalltitle .logo-list{
    font-size:14px;
    margin-top:16px;
    padding:30px 20px;
    background: #f9f9f9;
  }
  #smalltitle .logo-list .el-input{
    width:200px;
    font-size:14px;
    margin-right:26px;
  }
  #smalltitle .logo-list .el-select{
    width:100px;
  }
  #smalltitle .logo-list label{
    margin-right:14px;
  }
  #smalltitle .logo-list .el-button--mini, .el-button--mini.is-round{
    float: none;
  }
  #smalltitle > p{
    background: #fffaeb;
    font:14px/36px "微软雅黑";text-indent:5px ;
    border: 1px solid #fff3cf;
    margin:15px 0 4px 0;
    width: 1030px;
    color:#333;
  }
  #smalltitle > p span{
    color:red;
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
</style>
