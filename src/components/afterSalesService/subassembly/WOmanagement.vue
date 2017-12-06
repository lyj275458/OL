<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 工单管理</p>
    <div class="ev-content">
      <label>工单状态：</label><el-select v-model="value" size="small">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select><br>
      <label>创建时间：</label><el-select v-model="value1" size="small">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
      <el-date-picker
        size="small"
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions1">
      </el-date-picker>
      <el-date-picker
        size="small"
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions2">
      </el-date-picker>
      <br>
      <el-button type="primary" round size="mini" @click="alertMe()">查询</el-button>
    </div>
    <div class="line"></div>
    <p><i></i>查询结果<span>共查询到<i>{{tableData.length}}</i>条数据</span></p>
    <div class="chalist">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="工单ID"
          width="64"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
          width="84">
          <template slot-scope="scope">
            <span style="margin-left: 10px;">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="工单状态"
          width="84"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="问题名称"
          width="84"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="问题描述"
          width="250"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="截止日期"
          width="128"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="订单号"
          width="128"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="备注"
          width="128"
          show-overflow-tooltip
          tooltip-effect="light">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.pingjia}}</span>
          </template>
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
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'WOmanagement',
    data () {
      return {
        currentPage1:5,
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '待处理'
        }, {
          value: '选项3',
          label: '已处理'
        }, {
          value: '选项4',
          label: '已逾期'
        }],
        options1: [{
          value: '选项1',
          label: '最近24小时内'
        }, {
          value: '选项2',
          label: '最近7天内'
        }, {
          value: '选项3',
          label: '最近30天内'
        }],
        num:"10",
        value:"待处理",
        value1:"最近7天内",
        value2:"",
        value3:"",
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
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
        }, {
          id: '1234567',
          name: '王小虎',
          resource:'有',
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
          name: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
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
          name: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
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
        }],
        multipleSelection: []
      }
    },
    components:{

    },
    computed:{
      ...mapGetters([
        'popoverAlive'
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
      allhandleEdit(){

      },
      allDelete(){

      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      turnpage(key,title){
        if(key){
          this.index=key
        }
        if(title){
          this.tittle=title
        }
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      open() {
        this.$message.error('请输入商品ID');
      }
    }
  }
</script>

<style scoped>
  .el-table .cell .el-button--mini{
    margin:0 auto;
  }
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
    padding:10px 44px 10px 50px;
    background: #f9f9f9;
    margin-top:20px;
    /*display: flex;
    justify-content:space-between;
    flex-wrap: wrap;*/
  }
  .ev-content label{
    font-size:12px;
    color:#666;
    margin-right:10px;
  }
  .el-button--primary{
    width:100px;
    margin:10px 0 0 70px;
  }
  #data>p{
    font: 16px/36px "微软雅黑";margin-top:10px ;
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
    margin-top:14px;
  }
  .chalist .el-select,{
   margin:0 5px;
  }
  div.block{
    text-align: right;margin-right: 30px;
    margin-top:20px;
  }
  .el-select{
    margin-right: 10px;
    margin-bottom: 20px;
  }
  .el-table th>div.cell,.el-table .cell,.el-table{
    font-size: 12px;
  }
  .el-button--mini, .el-button--mini.is-round{
    padding:5px;font-size: 12px;
  }
</style>
