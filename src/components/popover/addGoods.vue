<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">添加商品</span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <p><label>商品名称:</label>
        <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
      </p>
      <p><label>品牌:</label>
        <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
      </p>
      <p><label>分类:</label>
        <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
      </p>
      <p><label>供应商:</label>
        <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
      </p>
      <p><el-button type="primary" plain size="mini" style="margin-left: 30px">搜索</el-button></p>
    </div>
    <!--<p>
    <el-button type="primary" plain size="mini" @click="addSub()">添加</el-button>
    </p>-->
    <el-table
      :height="210"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="light"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        fixed
        type="selection"
        width="35">
      </el-table-column>
      <el-table-column
        label="商品名称"
        width="100"
        show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        label="价格"
        width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="库存"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="分类"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="供应商"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="品牌"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="活动价">
        <template slot-scope="scope">
        <span>{{ scope.row.price }}</span>
        <el-button size="mini" @click="changeSave(scope.$index, scope.row)" style="width:auto;">修改活动价</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            plain
            @click="handleEdit(scope.$index, scope.row)" style="width: auto;" v-if="scope.row.isTrue">添加</el-button>
         <span v-if="!scope.row.isTrue">已添加</span>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 20px 0 0 10px;">
      <el-button type="primary" plain size="mini" @click="toggleSelection(tableData)">批量选择</el-button>
      <el-button type="primary" plain size="mini" @click="morePull(multipleSelection)">批量添加</el-button>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="30">
      </el-pagination>
    </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 800px;
    height: 440px;
    background: #F0FAFF;
    margin-left: -300px;
    margin-top: -220px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
  }
  .popover-head{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-head i{
    float: right;
    color: #A1C1E2;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }
  .popover-head .title{
    margin-left: 15px;
    font-weight: bold;
  }
  .popover-main{
    padding: 20px 12.5px;
    padding-bottom: 0px;
    width: calc(100% - 25px);
    display: flex;
    flex-wrap: wrap;
  }
  .popover-main p{
    margin-right: 15px;
  }
  .popover-main .el-input{
    width:160px;
  }
  .popover-main p{
    margin-bottom: 15px;
  }
  .popover-main label{
    width:60px;
    display: inline-block;
    text-align: right;
    margin-right:10px;
  }
  .popover-main .el-checkbox-group{
    display: inline-block;
    width:85%;
  }
  .el-checkbox+.el-checkbox:last-child{
    margin: 10px 0 0 0;
  }
  .demo > p:last-child{
    text-align: center;
  }
  .el-button{
    width: 100px;
  }
  .el-table th>div.cell,.el-table .cell,.el-table{
    font-size: 12px;
  }
  .el-button--mini, .el-button--mini.is-round{
    padding:5px;font-size: 12px;
  }
  .block{
    text-align: right;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        input:'',
        currentPage4:1,
        multipleSelection:[],
        checkList:[],
        tableData: [{
          date: '2016-05-021111111111111111111111111111111111111',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isTrue:true,
          price:'12'
        }, {
          date: '2016-05-0411111111111111111111111111111',
          name: '王小虎11111111111',
          address: '上海市普陀区金沙江路 1517 弄11',
          isTrue:false,
          price:'12'
        }, {
          date: '2016-05-0411111111111111111111111111111',
          name: '王小虎11111111111',
          address: '上海市普陀区金沙江路 1517 弄11',
          isTrue:false,
          price:'12'
        }, {
          date: '2016-05-0411111111111111111111111111111',
          name: '王小虎11111111111',
          address: '上海市普陀区金沙江路 1517 弄11',
          isTrue:false,
          price:'12'
        }, {
          date: '2016-05-0411111111111111111111111111111',
          name: '王小虎11111111111',
          address: '上海市普陀区金沙江路 1517 弄11',
          isTrue:true,
          price:'12'
        }, {
          date: '2016-05-0411111111111111111111111111111',
          name: '王小虎11111111111',
          address: '上海市普陀区金沙江路 1517 弄11',
          isTrue:false,
          price:'12'
        }, {
          date: '2016-05-0411111111111111111111111111111',
          name: '王小虎11111111111',
          address: '上海市普陀区金沙江路 1517 弄11',
          isTrue:true,
          price:'12'
        }, {
          date: '2016-05-0411111111111111111111111111111',
          name: '王小虎11111111111',
          address: '上海市普陀区金沙江路 1517 弄11',
          isTrue:false,
          price:'12'
        }, {
          date: '2016-05-0411111111111111111111111111111',
          name: '王小虎11111111111',
          address: '上海市普陀区金沙江路 1517 弄11',
          isTrue:true,
          price:'12'
        }]
      };
    },
    computed:{
      ...mapGetters([
        'popoverAlive'
      ])
    },
    methods: {
      ...mapActions([
        'popoverAlert','addCommodityActions'
      ]),
      morePull(rows) {
        console.log(rows);
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
      handleEdit(index, row){

      },
      changeSave(){

      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    }
  };
</script>
