<template>
  <div id="smalltitle">
    <div class="seach-list">
      <el-table
        v-loading="loading"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="活动名称"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="开始时间"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px;">{{ scope.row.temprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="结束时间"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.pingjia }}</span>
            <!--<img src="http://www.quanjing.com/image/2017index/jj2.png" alt="">-->
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="linkTo(scope.$index, scope.row)" plain>链接</el-button>
            <el-button
              size="mini"
              type="success"
              @click="bianji(scope.$index, scope.row)" plain>编辑</el-button>
            <el-button
              type="primary"
              size="mini"
              @click="Updata(scope.$index, scope.row)" plain>编辑活动数据</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)" plain>删除</el-button>
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
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="300">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  name: 'huodong',
  data () {
    return {
      input:'',
      currentPage4:1,
      tableData: [{
        id: '234565',
        name: '活动1',
        resource:'无',
        temprice:'99',
        ownprice:'110',
        pingjia:'已启用',
        save:'777',
        sales:'12',
        ranking:'4',
        salestatus:'销售中',
        address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
        status:'编辑中',
        type:"新增"
      }, {
        id: '65432345',
        name: '活动2',
        resource:'有',
        temprice:'99',
        ownprice:'110',
        pingjia:'未启用',
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
      'loading'
    ])
  },
  methods: {
    ...mapActions([
      'activeActions'
    ]),
    linkTo(index,row){

    },
    bianji(index,row){
      this.activeActions('vBianji')
    },
    Updata(index,row){

    },
    handleDelete(index,row){

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  }
}
</script>

<style scoped>
  .seach-list .el-button--mini,.seach-list .el-button--mini.is-round{
    margin:0;
    padding:5px;font-size: 12px;
  }
  .block{
    text-align: right;
    margin-top: 20px;
    margin-right:40px;
  }
</style>
