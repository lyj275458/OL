<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 订单查询</p>
    <div class="ev-content">
        <p>快速筛选订单：
          <el-button type="primary" size="small" plain>待发货(0)</el-button>
          <el-button type="primary" size="small" plain>即将延迟发货(0)</el-button>
          <el-button type="primary" size="small" plain>已延迟发货(0)</el-button>
          <el-button type="primary" size="small" plain>已发货未签收(41)</el-button>
        </p>
      <div class="ev-content-seach">
        <p><label>订单编号：</label><el-input v-model="input" placeholder="请输入内容" size="small"></el-input></p>
        <p><label>商品ID：</label><el-input v-model="input1" placeholder="请输入内容" size="small"></el-input></p>
        <p><label>收货手机：</label><el-input v-model="input2" placeholder="请输入内容" size="small"></el-input></p>
        <p><label>快递单号：</label><el-input v-model="input3" placeholder="请输入内容" size="small"></el-input></p>
        <p><label>订单状态：</label> <el-select v-model="value" placeholder="请选择" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select></p>
        <p><label>售后状态：</label><el-select v-model="value1" placeholder="请选择" size="small">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select></p>
        <p><label>承诺发货时间：</label><el-select v-model="value2" placeholder="请选择" size="small">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select></p>
        <p><label>是否抽奖/0元试用：</label><el-select v-model="value3" placeholder="请选择" size="small">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select></p>
        <p><label>成团时间：</label><el-select v-model="value4" size="small" @change="timerResultActions(value4)">
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
          <el-date-picker
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
        <p><el-button type="primary" size="small" @click="seachGoods()">查询</el-button> <el-button type="info" size="small">批量导出</el-button> <el-button type="success" size="small">查看已生成报表</el-button></p>
      </div>
    </div>
    <div class="line"></div>
    <div class="seach-list">
      <p><i></i>查询结果<span>共查询到<i>4</i>条数据</span></p>
    </div>
    <div class="chalist">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="商品ID"
          width="126">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品名称"
          width="186">
          <template slot-scope="scope">
            <span style="margin-left: 10px;" class="cu">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="订单状态"
          width="70">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.resource }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="售后状态"
          width="70">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品总价"
          width="70">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="数量"
          width="60">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="支付金额"
          width="126">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="订单其他信息"
          width="246">
          <template slot-scope="scope">
            <span>订单编号: <i style="color: #ff4624;">171121-291227939842962</i></span><br>
            <span>成团时间: <i style="color: #ff4624;">2017-11-22 01:55</i></span><br>
            <span>承诺发货时间: <i style="color: #ff4624;">2017-11-24 01:55</i></span><br>
            <span>收件人: <i style="color: #ff4624;">沈烈军</i></span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              plain
              @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[15, 30, 40, 50]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="300">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'OrderQuery',
    data () {
      return {
        arr:[],
        input:'hello',
        input1:'',
        input2:'',
        input3:'',
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '待发货'
        }, {
          value: '选项3',
          label: '已发货'
        }, {
          value: '选项4',
          label: '已签收'
        }],
        value: '待发货',
        options1: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '无售后/售后处理中'
        }, {
          value: '选项3',
          label: '无售后/取消售后'
        }, {
          value: '选项4',
          label: '售后处理中'
        }],
        value1: '无售后/售后处理中',
        options2: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '已过发货时间'
        }, {
          value: '选项3',
          label: '12小时内需发货'
        }, {
          value: '选项4',
          label: '今天需要发货'
        }],
        value2: '全部',
        options3: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '是'
        }, {
          value: '选项3',
          label: '否'
        }],
        value3: '全部',
        options4: [{
          value: '选项1',
          label: '最近24小时内'
        }, {
          value: '选项2',
          label: '最近7天内'
        }, {
          value: '选项3',
          label: '最近30天内'
        }],
        value4: '快速选择时间',
        value5: '',
        currentPage4:1,
        tableData: [ {
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
        }]
      }
    },
    components:{

    },
    computed:{
      ...mapGetters([
        'pickerOptions2','value4Result'
      ])
    },
    watch:{
      input:function(val,old){
        console.log(val,old)
  }
    },
    methods: {
      ...mapActions([
        'timerResultActions'
      ]),
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      seachGoods(){
        //this.$store.dispatch('alertshow')
        this.input='nihao'
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
    font-weight: 600;
    text-indent:0;
  }
  #data .line{
    margin:20px 0 10px 0;
    border:1px dashed #e8e8e8;
  }
  .ev-content{
    background: #f9f9f9;
    margin-top:10px;
  }
  .ev-content > p{
    padding:10px 20px;
    border-bottom: 1px solid #e8e8e8;
  }
  .ev-content > p .el-button--primary.is-plain{
    width:150px;
  }
  .ev-content .ev-content-seach{
    padding:20px 24px;
    display: flex;
    flex-wrap: wrap;
  }
  .ev-content .ev-content-seach p{
    margin-right: 30px;
    margin-bottom: 17px;
  }
  .ev-content .ev-content-seach p:last-child{
    margin:0 0 0 50px;
  }
  .ev-content .ev-content-seach p label{
    display: inline-block;
    width:110px;
    text-align: right;
  }
  .ev-content .ev-content-seach p:nth-child(4){
    margin-right:27px;
  }
  .ev-content .ev-content-seach .el-input,.ev-content-seach .el-select{
    width:190px;
  }
  .chalist{
    margin-top:10px;
  }
  .seach-list p{
    font: 16px/36px "微软雅黑";
  }
  .seach-list p span{
    font-size: 12px;margin-left:15px ;
  }
  .seach-list p span i{
    color: red;margin: 0 5px;
  }
  .seach-list p>i{
    border: 2px solid red;font-size: 12px;margin-right: 8px;height: 16px;
  }
  .el-table th>div.cell,.el-table .cell,.el-table{
    font-size: 12px;
  }
  .el-button--mini, .el-button--mini.is-round{
    padding:5px;font-size: 12px;
  }
  div.block{
    text-align: right;margin-right: 30px;
    margin-top:20px;
  }

</style>
