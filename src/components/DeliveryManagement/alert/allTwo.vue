<template>
  <div id="msg">
  <div id="data">
    <p><label>订单号:</label><el-input v-model="input" size="small" placeholder="请输入内容"></el-input></p>
    <p><label>快递单号:</label><el-input v-model="input1" size="small" placeholder="请输入内容"></el-input></p>
    <p><label>快递公司:</label><el-select v-model="value" placeholder="请选择" size="small">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select></p>
    <el-button type="primary" size="small" style="width: 100px;margin: 30px 0 0 25px;" plain>确认导入</el-button>
  </div>
    <div class="seachList">
      <p><i></i>导入记录</p>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="订单号"
          width="171">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="快递公司"
          width="171">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="快递单号"
          width="171">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="导入状态"
          width="172">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="备注"
          width="172">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              plain
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">修改</el-button>
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
    name: 'BatchShipment',
    data () {
      return {
        input:'',
        input1:'',
        options: [{
          value: '选项1',
          label: '申通快递'
        }, {
          value: '选项2',
          label: '百世快递'
        }, {
          value: '选项3',
          label: '顺丰快递'
        }, {
          value: '选项4',
          label: '圆通快递'
        }, {
          value: '选项5',
          label: '赛澳递'
        }],
        value: '请选择',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
          status:'编辑中',
          type:"修改"
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '【意大利袋鼠】【2017年最新款亏本推荐】4条装男士内裤男 纯棉印花平角裤 中腰透气礼盒装',
          status:'编辑中',
          type:"修改"
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
          status:'编辑中',
          type:"新增"
        }, {
          date: '2016-05-03',
          name: '王小虎',
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

      ])
    },
    methods: {
      ...mapActions([

      ]),
      handleEdit(index, row) {
        console.log(index, row);
      },
    }
  }
</script>

<style scoped>
  #data{
    padding:15px 100px;
    background: #f9f9f9;
    text-align: center;
    margin-left:-20px;
    font-size:12px;
  }
  #data label{
    display: inline-block;
    width:100px;
    text-align: right;
    margin-right: 20px;
  }
  #data .el-input--small,#data .el-select{
    width:200px;
  }
  #data p{
    margin-top:15px;
  }
  #data p:first-child{
    margin: 0;
  }
  .seachList>p{
    font: 16px/36px "微软雅黑";margin-top:15px ;
  }
  .seachList>p span{
    font-size: 12px;margin-left:15px ;
  }
  .seachList>p span i{
    color: red;margin: 0 5px;
  }
  .seachList>p>i {
    border: 2px solid red;
    font-size: 12px;
    margin-right: 8px;
    height: 16px;
  }

</style>
