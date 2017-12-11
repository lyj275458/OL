<template>
<div>
  <p><i class="el-icon-d-arrow-right"></i>商品收藏流量产出总比 </p>
  <div class="datashow">
    <ul>
      <li v-for="(same,index) in arr">
        <p>{{same.name}}
          <el-tooltip :content="same.show" placement="top" effect="light">
            <i class='el-icon-warning'></i>
          </el-tooltip></p>
        <span>{{same.num}}</span>
        <p>昨日环比
          <span v-if="same.runnum>0" style="color:#ff5454;">+{{same.runnum}}%</span>
          <span v-else-if="same.runnum<0" style="color:#00a67c;">{{same.runnum}}%</span>
          <span v-else style="color:#00a67c;">{{same.runnum}}%</span>
          <i v-if="same.runnum>0" style="color:#ff5454;" class="iconfont icon-gupiaojiangicon"></i>
          <i v-else-if="same.runnum<0" style="color:#00a67c;" class="iconfont icon-gupiaojiangicon1"></i>
          <i v-else style="color:#00a67c;" class="el-icon-minus"></i>
        </p>
        <p>上周同比
          <span v-if="same.runnum>0" style="color:#ff5454;">+{{same.runnum}}%</span>
          <span v-else-if="same.runnum<0" style="color:#00a67c;">{{same.runnum}}%</span>
          <span v-else style="color:#00a67c;">{{same.runnum}}%</span>
          <i v-if="same.runnum>0" style="color:#ff5454;" class="iconfont icon-gupiaojiangicon"></i>
          <i v-else-if="same.runnum<0" style="color:#00a67c;" class="iconfont icon-gupiaojiangicon1"></i>
          <i v-else style="color:#00a67c;" class="el-icon-minus"></i>
        </p>
      </li>
    </ul>
  </div>
  <p><i class="el-icon-d-arrow-right"></i>商品收藏流量产出明细 </p>
  <div class="goodsDetail">
    <p> <label>日期：</label>
      <el-date-picker
        size="small"
        v-model="value8"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions2">
      </el-date-picker></p>
    <p><label>商品ID：</label><el-input v-model="input" placeholder="请输入商品ID" size="small"></el-input></p>
    <p><el-button type="primary" size="small">查询</el-button></p>
  </div>
  <div class="seachlists">
    <el-table
      :data="tableData"
      style="width: 100%;background-color:#f3f6f8;"
      :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column
        label="商品ID"
        width="94">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="商品名称"
        width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px;" class="cu">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品收藏数"
        prop="resource"
        width="110"
        sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.resource }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="游览次数"
        width="100"
        prop="temprice"
        sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="游览人数"
        width="100"
        prop="ownprice"
        sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="支付订单量"
        width="120"
        prop="pingjia"
        sortable>
        <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.pingjia }}
        </span>
        </template>
      </el-table-column>
      <el-table-column
        label="支付金额"
        width="96"
        prop="save"
        sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.save }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="支付金额占比"
        prop="sales"
        width="120"
        sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sales }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="支付转化率"
        width="108"
        prop="ranking"
        sortable>
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
  name: 'collectdata',
  data(){
  	return {
      arr:[
        {
          name:"支付转化率",
          num:"5.43",
          runnum:"-2.45",
          show:"近30内用户评价不足，暂无评分"
        },
        {
          name:"商品访客数",
          num:"389",
          runnum:"7.16",
          show:"时间段内，所以商铺含已上架商铺都。。。。"
        },
        {
          name:"商品游览次数",
          num:"565",
          runnum:"9.71",
          show:"近30内用户评价不足，暂无评分，所以商铺含已上架商铺都。。。。"
        },
        {
          name:"支付订单量",
          num:"22",
          runnum:"0.00",
          show:"近30内用户评价不足，所以商铺含已上架商铺都。。。。暂无评分"
        }
      ],
      value8:'',
      input:'',
      tableData: [{
        id: '1234567',
        name: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
        resource: '100',
        temprice: '123',
        ownprice: '1111',
        pingjia: '255',
        save: '16562.00',
        sales: '67.48%',
        ranking: '197.67%',
        salestatus: '销售中',
        address: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
        status: '编辑中',
        type: "修改"
      }, {
        id: '1234567',
        name: '王小虎',
        resource: '99',
        temprice: '111',
        ownprice: '1234',
        pingjia: '366',
        save: '21111.00',
        sales: '21,56%',
        ranking: '192.67%',
        salestatus: '销售中',
        address: '【意大利袋鼠】【2017年最新款亏本推荐】4条装男士内裤男 纯棉印花平角裤 中腰透气礼盒装',
        status: '编辑中',
        type: "修改"
      }, {
        id: '234565',
        name: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
        resource: '98',
        temprice: '121',
        ownprice: '211',
        pingjia: '1000',
        save: '4321.00',
        sales: '12.42%',
        ranking: '297.67%',
        salestatus: '销售中',
        address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
        status: '编辑中',
        type: "新增"
      }, {
        id: '65432345',
        name: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
        resource: '97',
        temprice: '66',
        ownprice: '321',
        pingjia: '2112',
        save: '6666.00',
        sales: '11.00%',
        ranking: '97.67%',
        salestatus: '销售中',
        address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
        status: '编辑中',
        type: "新增"
      }]
  	}
  },
  computed:{
    ...mapGetters([
      'pickerOptions2'
    ])
  },
  methods:{
    formatter(row, column) {
      return row.address;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    sorts(a,b){
      if(a>b){
        return 1
      }else{
        return -1
      }
    }
  }
}
</script>

<style scoped>
  div>p{
    font: 16px/36px "微软雅黑";margin-top:10px ;
  }
  div>p span{
    font-size: 12px;margin-left:15px ;
  }
  div>p span i{
    color: red;margin: 0 5px;
  }
  div>p>i {
    font-size: 18px;margin-right: 5px;height: 16px;
    color:red;font-weight: 600;
  }
  .datashow{
    margin-top:24px;
    background: #f7f7f9;
    padding:24px 84px 24px 44px;
  }
  .datashow ul{
    display: flex;
    justify-content: space-between;
  }
  .el-icon-warning{
    margin-left:8px;color:#999;
  }
  .datashow ul p{
    font:14px/32px "微软雅黑";
    color:#666;
  }
  .datashow ul li>span{
    display: block;
    font:22px/40px "微软雅黑";
    color:#666;
    font-weight: 500;
    margin-bottom:5px;
  }
  .datashow ul li p span{
    margin-left:12px;
    font-weight: 600;
  }
  .datashow ul li p:nth-child(3) i,.datashow ul li p:nth-child(4) i{
    font-size: 20px;
  }
  .goodsDetail{
    padding:18px 80px 16px 38px;
    background: #f7f7f9;
    margin-top:14px;
    display: flex;
    color:#666;
    justify-content:space-between;
  }
  .buttonn{
    background: #f7f7f9;
    padding:20px 46px 36px 38px;
  }
  .el-button--primary.is-plain{
    margin-left:38px;
  }
  .goodsDetail label{
    font-size: 12px;
  }
  .goodsDetail  .el-date-editor--daterange.el-input__inner {
    float:none;
  }
  .goodsDetail .el-input{
    width:210px;
  }
  .el-button--mini, .el-button--mini.is-round{
    padding:5px;font-size: 12px;
  }
  div.el-table__header-wrapper .el-table thead{
    color:#333;background: #f3f6f8;
  }
  .el-table tr{
    background-color: none;
  }
  .el-table tr:first-child>th .cell{
    padding-left: 10px;
  }
  .seachlists{
    margin-top:14px;
  }
  .el-table th>div.cell,.el-table .cell,.el-table{
    font-size: 12px; color:#333;background: #f3f6f8;
  }
</style>
