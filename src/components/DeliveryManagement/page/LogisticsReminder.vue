<template>
  <div id="smalltitle">
    <p>温馨提示：以下为<span>揽件超时</span>的订单，目前提供顺丰快递发货后4~8天的物流提醒，物流信息仅供参考，请以快递官网为准。</p>
    <div class="logo-list">
      <el-select v-model="value" placeholder="请选择" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
      <label>快递公司：</label>
      <el-select v-model="value0" placeholder="请选择" size="small">
        <el-option
          v-for="item in options0"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary"  size="mini" @click="seach()">搜索</el-button>
    </div>
    <div class="seach-list">
      <p><i></i>异常数据<span>共查询到<i>{{tableData.length}}</i>条数据</span><el-button type="primary" size="mini" plain @click="pullOut()">导出</el-button></p>
      <el-table
        :data="loginResult"
        style="width: 100%">
        <el-table-column
          label="订单号"
          width="147">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品名称"
          width="147">
          <template slot-scope="scope">
            <span style="margin-left: 10px;" class="cu">{{ scope.row.resource }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="发货时间"
          width="147">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="成团时间"
          width="147">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="快递公司"
          width="147">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.save }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="快递单号"
          width="147">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.save }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="揽件时间"
          width="147">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
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
    name: 'AbnormalComplaints',
    data () {
      return {
        options: [{
          value: '选项1',
          label: '订单编号'
        }, {
          value: '选项2',
          label: '快递单号'
        }],
        value: '订单编号',
        options0: [{
          value: '选项1',
          label: '顺丰快递'
        }],
        value0: '请选择快递',
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
        'loginResult'
      ])
    },
    created(){

    },
    methods:{
      ...mapActions([

      ]),
      handleEdit(index, row) {
       // console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      seach(){
        let id=this.input
      },
      pullOut(){
        this.export2Excel()
      },
      //导出方法
      export2Excel() {
        let arr=Object.keys(this.tableData[0])
        require.ensure([], () => {
          const { export_json_to_excel } = require('@/vendor/Export2Excel');
          const tHeader = ['name', 'resource', 'temprice', 'ranking', 'save','save','ranking'];
          const filterVal =['name', 'resource', 'temprice', 'ranking', 'save','save','ranking'];
          const list = this.tableData;
          const data = this.formatJson(filterVal,list);
          export_json_to_excel(tHeader, data, '列表excel');
        })
      },
      formatJson(filterVal,list) {
        return list.map(v => filterVal.map(j => v[j]))
      },
    }
  }
</script>

<style scoped>
  #smalltitle .logo-list{
    font-size:14px;
    margin-top:16px;
    padding:30px 20px;
    background: #f9f9f9;
  }
  #smalltitle .logo-list .el-input{
    width:200px;
    font-size:14px;
    margin-right:46px;
  }
  #smalltitle .logo-list .el-select:first-child{
    width:100px;
  }
  #smalltitle .logo-list .el-button--mini{
    margin-left: 30px;
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
  .seach-list > p button{
    float: right;
    width:100px;
    margin-top: 5px;
  }
  .logo-list > .el-button--mini{
    width:100px;
  }
</style>
