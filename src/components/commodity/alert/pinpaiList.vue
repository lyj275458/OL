<template>
  <div class="seach-list">
    <el-table
      v-loading="loading"
      :data="getAllPpResult"
      style="width: 100%">
      <el-table-column
        label="品牌名称"
        width="100"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="LOGO"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px;">{{ scope.row.logo }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="品牌英文名"
        width="100"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.enName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="所属国家"
        width="150"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.country }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px" v-if="scope.row.status=='1'">正常</span>
          <span style="margin-left: 10px" v-if="scope.row.status=='0'">废弃</span>
        </template>
      </el-table-column>
      <el-table-column
        label="备注"
        width="100"
        show-overflow-tooltip
        tooltip-effect="light">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.desc}}</span>
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
  name: 'pinpaiList',
  data () {
    return {
      currentPage4:1
    }
  },
  computed:{
    ...mapGetters([
      'getAllPpResult','getAllTreeResult','classResult','loading'
    ])
  },
  methods: {
    ...mapActions([
       'getAllPpActions',  'deletePpActions', 'checkPpActions', 'getAllTreeActions', 'pushClassTreeActions','classResultActions'
    ]),
    handleEdit(index, row) {
      let data={
        obj:row,
        str:'VeditorList',
        where:'1'
      }
     this.classResultActions(data)
      //console.log(row)
      //this.upDataPpActions(row)
      //console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm('此操作将删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deletePpActions(row.id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
      console.log(row.id);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted () {
    this.getAllPpActions()
   // console.log(this.getAllPpResult)
  }
}
</script>

<style scoped>
  .seach-list{
    margin-top:16px;
    padding-left:30px;
  }
  .seach-list p{
    background: #F0FAFF;
    height:40px;
    text-indent:30px;
    color:#666666;
  }
  .block{
    text-align: right;
    margin-top: 20px;
    margin-right:40px;
  }
</style>
