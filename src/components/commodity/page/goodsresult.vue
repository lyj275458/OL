<template>
  <div>
    <p><i></i>所有商品流量 <el-date-picker
      size="small"
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker></p>
      <div class="datashow">
          <ul>
            <li v-for="(same,index) in arr">
              <p>{{same.name}}
                <el-tooltip :content="same.show" placement="top" effect="light">
                <i class='el-icon-warning'></i>
              </el-tooltip></p>
              <span>{{same.num}}</span>
              <p>较前天
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
      <p><i></i>商品效果明细
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
      <p><label>商品分类：</label>
      <el-select v-model="value" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
      </p>
      <p><label>商品ID：</label><el-input v-model="input" placeholder="请输入商品ID" size="small"></el-input></p>
    </div>
    <div class="buttonn">
      <el-button type="primary" size="small">查询</el-button>
    </div>
    <div class="seachlists">
    <el-table
      :data="tableData"
      style="width: 100%"
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
        width="196">
        <template slot-scope="scope">
          <span style="margin-left: 10px;" class="cu">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品状态"
        width="72">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.resource }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="支付转化率"
        width="104"
        prop="temprice"
        sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="行业"
        width="72">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="支付转化率同行均值"
        width="130">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.pingjia }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        label="访客数"
        width="74">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.save }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="游览次数"
        width="96"
        sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sales }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="支付订单量"
        width="104"
        prop="ranking"
        sortable>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            plain
            @click="handleEdit(scope.$index, scope.row)">编辑商品</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
    <div class="footer">
      <p><img src="../../../../static/sale.png" alt=""></p>
      <ul>
        <li>
          <i class="iconfont icon-shangpin"></i>
          <span>商品轮播图</span>
          <p>凸显产品外观特征和卖点</p>
        </li>
        <li>
          <i class="iconfont icon-biaoti"></i>
          <span>商品标题</span>
          <p>类目、属性、特征用词精准</p>
        </li>
        <li>
          <i class="iconfont icon-miaoshu"></i>
          <span>商品描述</span>
          <p>描述确切无歧义强化卖点</p>
        </li>
        <li>
          <i class="iconfont icon-jiage"></i>
          <span>商品价格</span>
          <p>低价能快速引爆商品</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  name: 'goodsresult',
  data () {
    return {
      input: '',
      currentPage4: 1,
      value7: '',
      arr: [
        {
          name: "支付转化率",
          num: "5.43",
          runnum: "-2.45",
          show: "近30内用户评价不足，暂无评分"
        },
        {
          name: "商品访客数",
          num: "389",
          runnum: "7.16",
          show: "时间段内，所以商铺含已上架商铺都。。。。"
        },
        {
          name: "商品游览次数",
          num: "565",
          runnum: "9.71",
          show: "近30内用户评价不足，暂无评分，所以商铺含已上架商铺都。。。。"
        },
        {
          name: "支付订单量",
          num: "22",
          runnum: "0.00",
          show: "近30内用户评价不足，所以商铺含已上架商铺都。。。。暂无评分"
        }
      ],
      num: "0",
      value8: '',
      options: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '女装'
      }, {
        value: '选项3',
        label: '男装'
      }, {
        value: '选项4',
        label: '女鞋'
      }, {
        value: '选项5',
        label: '男鞋'
      }, {
        value: '选项6',
        label: '箱包'
      }, {
        value: '选项7',
        label: '腕表眼镜'
      }, {
        value: '选项8',
        label: '服饰配件'
      }, {
        value: '选项9',
        label: '内衣裤袜'
      }],
      value: '全部',
      tableData: [{
        id: '1234567',
        name: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
        resource: '在售',
        temprice: '99%',
        ownprice: '内衣裤袜',
        pingjia: '3.97%',
        save: '444',
        sales: '12',
        ranking: '42',
        salestatus: '销售中',
        address: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
        status: '编辑中',
        type: "修改"
      }, {
        id: '1234567',
        name: '王小虎',
        resource: '在售',
        temprice: '98%',
        ownprice: '内衣裤袜',
        pingjia: '3.97%',
        save: '333',
        sales: '122',
        ranking: '40',
        salestatus: '销售中',
        address: '【意大利袋鼠】【2017年最新款亏本推荐】4条装男士内裤男 纯棉印花平角裤 中腰透气礼盒装',
        status: '编辑中',
        type: "修改"
      }, {
        id: '234565',
        name: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
        resource: '在售',
        temprice: '97%',
        ownprice: '内衣裤袜',
        pingjia: '3.97%',
        save: '777',
        sales: '112',
        ranking: '12',
        salestatus: '销售中',
        address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
        status: '编辑中',
        type: "新增"
      }, {
        id: '65432345',
        name: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
        resource: '在售',
        temprice: '96%',
        ownprice: '内衣裤袜',
        pingjia: '3.97%',
        save: '666',
        sales: '4',
        ranking: '4',
        salestatus: '销售中',
        address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
        status: '编辑中',
        type: "新增"
      }]
      }
    },
  computed:{
    ...mapGetters([
      'alertnum','loginResult','pickerOptions2'
    ])
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    handleSizeChange(val) {
    console.log(`每页 ${val} 条`);
},
    handleCurrentChange(val) {
    console.log(`当前页: ${val}`);
},
    handleEdit(index, row) {
      console.log(index, row);
    },
    sortMore: function () {

    }
  }
}
</script>

<style scoped>
  .goodsDetail{
    padding:14px 46px 0 38px;
    background: #f7f7f9;
    margin-top:14px;
    display: flex;
    color:#666;
    justify-content:space-between;
  }
  .buttonn{
    background: #f7f7f9;
    padding:20px 46px 16px 38px;
  }
  .el-button--primary{
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
    border: 2px solid red;
    font-size: 12px;
    margin-right: 8px;
    height: 16px;
  }
 .el-date-editor--daterange.el-input__inner{
    width:250px;
    float: right;
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
 .datashow ul li p:last-child i{
   font-size: 20px;
 }
  .el-table th>div.cell,.el-table .cell,.el-table{
    font-size: 12px;
  }
  div.block{
    text-align: right;margin-right: 30px;
    margin-top:20px;margin-bottom:30px;
  }
  .el-button--mini, .el-button--mini.is-round{
    padding:5px;font-size: 12px;
  }
  .el-table thead{
    color:#333;background: #f3f6f8;
  }
  .el-table thead>tr:first-child{
    background: none;
  }
  .el-table tr:first-child>th .cell{
    padding-left: 10px;
  }
  .seachlists{
    margin-top:14px;
  }
  .footer{
    padding:0 40px 40px 40px;
    background: #f9f9f9;
    margin-bottom: 50px;
  }
  .footer > p{
    padding:40px 0;text-align: center;
  }
  .footer ul{
    display:flex;justify-content: space-between;
  }
  .footer ul li{
    background: #fff;
    padding:40px 0;
    width:201px;
    box-shadow: -2px 2px 10px #e6e6e6;
  }
  .footer ul li i{
    display: block;
    width:59px;
    height:59px;
    font-size: 59px;
    color: #ff5454;
    margin:0 auto;
  }
  .footer ul li span{
    display: block;
    font:14px/36px "微软雅黑";
    text-align: center;
    font-weight: 600;
    margin-top:14px;
  }
  .footer ul li p{
    font:12px/32px '微软雅黑';
    text-align: center;
    color:#999;
  }
</style>
