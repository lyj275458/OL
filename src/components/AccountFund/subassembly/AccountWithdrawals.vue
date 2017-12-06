<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 账户提现
      <el-button type="primary" size="mini" plain>银行转账遇到问题</el-button>
    </p>
    <div class="ev-header">
      <ul>
        <li>
          <p>可提现余额
            <el-tooltip class="item" effect="light" content="提示文字" placement="top">
              <i class="el-icon-question" style="color:#cecece;font-size:18px;"></i>
            </el-tooltip>
          </p>
          <p><span>26685.28</span>元</p>
        </li>
        <li><el-button type="primary" size="mini" @click="pullOut()">提现
        </el-button></li>
        <li>
          <p>提现中</p>
          <p>0.00元</p>
        </li>
      </ul>
    </div>
    <div class="ev-content">
      <p><i></i>提现记录<span>共查询到<i>{{tableData.length}}</i>条数据</span></p>
      <el-table
        id="ta"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="创建时间"
          width="120"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="提现类型"
          width="130">
          <template slot-scope="scope">
            <span style="margin-left: 10px;">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="提现金额"
          width="120"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="手续费"
          width="100"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="收款账户"
          width="220"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="提现状态"
          width="130"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="说明"
          width="209"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="ev-content">
      <p><i></i>补缴记录<span>共查询到<i>{{tableData1.length}}</i>条数据</span></p>
      <el-table
        :data="tableData1"
        style="width: 100%">
        <el-table-column
          label="创建时间"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="充值金额(元)	"
          width="147">
          <template slot-scope="scope">
            <span style="margin-left: 10px;">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="到账金额(元)	"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="充值金额值类型"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="充值渠道"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="到账时间"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="ev-content">
      <p><i></i>历史充值记录<span>共查询到<i>{{tableData1.length}}</i>条数据</span></p>
      <el-table
        :data="tableData1"
        style="width: 100%">
        <el-table-column
          label="创建时间"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="充值金额(元)	"
          width="147">
          <template slot-scope="scope">
            <span style="margin-left: 10px;">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="到账金额(元)	"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="充值类型"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="充值渠道"
          width="147"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="到账时间"
          width="147"
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
    name: 'AccountWithdrawals',
    data () {
      return {
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
        tableData1:[],
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
      pullOut(){
        let explorer = window.navigator.userAgent ;
        console.log(explorer)

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
  #data #toindex .el-button{
    float: right;
    margin-top: 5px;
  }
  .ev-header ul{
    display: flex;
    border:1px solid #e8e8e8;
    padding:30px 20px;
    font:16px/34px "微软雅黑";
    font-weight:600;
  }
  .ev-header ul li{
    margin-right:114px;
  }
  .ev-header ul li span{
    color: #ff0000;
  }
  .ev-header ul li:last-child{
    font-weight:500;
  }
  .ev-header ul li .el-button{
    margin-top:20px;
  }
  .ev-content{
    margin-bottom: 30px;
  }
  .ev-content>p{
    font: 16px/36px "微软雅黑";margin-top:15px ;
  }
  .ev-content>p span{
    font-size: 12px;margin-left:15px ;
  }
  .ev-content>p span i{
    color: red;margin: 0 5px;
  }
  .ev-content>p>i {
    border: 2px solid red;
    font-size: 12px;
    margin-right: 8px;
    height: 16px;
  }
  .el-table th>div.cell,.el-table .cell,.el-table{
    font-size: 12px;
  }
 .ev-content .el-button--mini, .el-button--mini.is-round{
    padding:5px;font-size: 12px; margin:0 auto;
  }

</style>
