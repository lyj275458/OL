<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 退款/售后<a href="##" class="aa">操作手册</a><a href="##" class="aa">退款须知</a></p>
    <div class="ev-header">
      <el-alert
        title="承诺发货时间之后才退款成功的订单，依然会被判定为延迟发货，请确保未发货情况下买家申请退款的订单在承诺发货的时间内退款成功。"
        type="warning"
        :closable="false"
        show-icon>
      </el-alert>
    </div>
    <div class="ev-content">
        <ul>
          <li>
            退款申请待处理<span>0</span>单
          </li>
          <li>
            已退货待处理<span>1</span>单
          </li>
          <li>
            24小时内将逾期<span>0</span>单
          </li>
          <li>
            平台处理中<span>1</span>单
          </li>
        </ul>
    </div>
    <div class="content-seach">
      <p><label>订单编号：</label><el-input placeholder="请输入内容" size="small"></el-input></p>
      <p><label>商品ID：</label><el-input placeholder="请输入内容" size="small"></el-input></p>
      <p><label>手机号码：</label><el-input placeholder="请输入内容" size="small"></el-input></p>
      <p><label>退款编号：</label><el-input placeholder="请输入内容" size="small"></el-input></p>
      <p><label>售后状态：</label> <el-select v-model="value_status" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select></p>
      <p><label>售后类型：</label><el-select v-model="value_class" size="small">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select></p>
      <p><label>申请时间：</label><el-date-picker
        size="small"
        v-model="value4"
        type="datetimerange"
        :picker-options="pickerOptions2"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right">
      </el-date-picker>
        <el-select v-model="value_month" size="small">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </p>
      <p><el-button type="primary" size="small">查询</el-button> <el-button type="info" size="small">批量导出</el-button></p>
    </div>
    <div class="line"></div>
    <p><i></i>查询结果<span>共查询到<i>{{tableData.length}}</i>条数据</span></p>
    <div class="chalist">
      <el-table
        :data="tableData"
        style="width: 100%"
      v-if="tableData.length">
        <el-table-column
          label="商品ID"
          show-overflow-tooltip
          width="79">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="退款编号"
          show-overflow-tooltip
          width="79">
          <template slot-scope="scope">
            <span style="margin-left: 10px;" class="cu">{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="订单编号"
          width="166">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.resource }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="买家"
          show-overflow-tooltip
          width="115">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="交易金额"
          width="79">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="退款金额"
          width="79">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="申请时间"
          width="116">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="售后状态"
          width="146">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="退货运单号"
          width="90">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              plain
              @click="handleEdit(scope.$index, scope.row)">处理</el-button>
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
    name: 'saleAfter',
    data () {
      return {
        currentPage1:5,
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '买家申请退款，待商家处理'
        }, {
          value: '选项3',
          label: '用户已发货，待商家处理'
        }, {
          value: '选项4',
          label: '同意退款，退款中'
        }, {
          value: '选项5',
          label: '极速退款退款成功'
        }, {
          value: '选项6',
          label: '驳回退款，待买家处理'
        }, {
          value: '选项7',
          label: '同意退货退款，待买家发货'
        }],
        value_status:'全部',
        options2: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '仅退款'
        }, {
          value: '选项3',
          label: '退货退款'
        }],
        value_class:'全部',
        options3: [{
          value: '选项1',
          label: '最近一个月'
        }, {
          value: '选项2',
          label: '最近两个月'
        }, {
          value: '选项3',
          label: '最近三个月'
        }, {
          value: '选项4',
          label: '三个月前'
        }],
        value_month:'最近一个月',
        value4: '',
        num:"10",
        value:"全部",
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
    padding:20px 190px;
    font-size:16px;
    color: #666666;
  }
  .ev-content ul{
    display: flex;
  }
  .ev-content ul li{
    padding:0 12px;
    border-right:1px solid #dadada;
  }
  .ev-content ul li:last-child{
    border:none;
  }
  .ev-content ul li span{
    color:#337ab7;
    margin:0 3px;
    cursor:pointer;
    font-weight:550;
  }
  #data .content-seach{
    display: flex;
    padding:20px 22px 0 60px;
    background: #f9f9f9;
    flex-wrap: wrap;
  }
  #data .content-seach p{
    margin-right:90px;
    margin-bottom:18px;
  }
  #data .content-seach p:last-child{
    margin-left:60px;
  }
  #data .content-seach p:nth-child(4){
    margin-right:75px;
  }
  #data .content-seach p:nth-child(3),#data .content-seach p:nth-child(6){
    margin:0;
  }
  #data .content-seach p .el-input,.content-seach .el-select{
    width:190px;
    display: inline-block;
  }
  #data .line{
    margin:20px 0;
    border:1px dashed #e8e8e8;
  }
 .ev-header p{
    background: #fffaeb;
    font:12px/26px "微软雅黑";text-indent:5px ;
    border: 1px solid #f5e19f;
    margin:15px 0 4px 0;
    width: 1030px;
    color:#333;
  }
 .el-icon-warning{
   color:#ffa901;
   margin-right:5px;
 }
  #data>p{
    font: 16px/36px "微软雅黑";margin-top:10px ;
  }
  #data>p a.aa{
    float: right;
    font-size:12px;
    color: #337ab7;
    margin-right:20px;
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
  .chalist p{
    margin:100px auto;
  }
</style>
