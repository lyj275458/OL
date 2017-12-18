<template>
  <div class="seach-list">
    <el-table
      v-loading="loading"
      :data="getAllTreeResult"
      style="width: 100%;">
      <el-table-column
        label="分类名称"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="分类全路径"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px;">{{ scope.row.fullNamePath }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="所在层级"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.level }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="主图"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.image }}</span>
          <!--<img :src="scope.row.image | ToUrl" alt="">-->
        </template>
      </el-table-column>
      <el-table-column
        label="小图"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.logo}}</span>
          <!--<img :src="scope.row.logo | ToUrl" alt="">-->
        </template>
      </el-table-column>
      <el-table-column
        label="叶子节点"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px" v-if="scope.row.leaf">是</span>
          <span style="margin-left: 10px" v-if="!scope.row.leaf">否</span>
        </template>
      </el-table-column>
      <el-table-column
        label="排序值"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sort }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px" v-if="scope.row.status='1'">正常</span>
          <span style="margin-left: 10px" v-else-if="scope.row.status='0'">废弃</span>
          <span style="margin-left: 10px" v-else></span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="252">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)" plain>编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)" plain>删除</el-button>
          <el-button
            size="mini"
            type="success"
            @click="newPush(scope.$index, scope.row)" plain>新增子分类</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="oneManage(scope.$index, scope.row)" plain v-if="scope.row.leaf">规格管理</el-button>
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
      currentPage4:1,
    }
  },
  computed:{
    ...mapGetters([
      'getAllTreeResult','getProductSpecDetailsResult','loading'
    ])
  },
  methods: {
    ...mapActions([
         'getAllTreeActions', 'pushClassTreeActions','fenleiResultActions','deleteClassTreeActions','getProductSpecDetailsActions','getProductSpecsActions','getParamsByCategoryIdActions',
      'createFenLeiMoActions'
    ]),
    handleEdit(index, row) {
      let data={
        obj:row,
        str:'VfenleiEditorList',
        where:'1'
      }
     this.fenleiResultActions(data)
    },
    handleDelete(index, row) {
      this.$confirm('此操作将删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteClassTreeActions(row.id)
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
    },
    newPush (index, row) {
      let data={
        categoryId:row.id,
        name:'促销'
      }
      //this.createFenLeiMoActions(data)
      this.getParamsByCategoryIdActions(row.id)
    },
    oneManage (index, row) {
      console.log(row)
      let data={
        obj:row,
        str:'vSpecification',
        where:'1'
      }
      this.fenleiResultActions(data)
    }
  },
  mounted () {
    this.getAllTreeActions()
   // console.log(this.getAllPpResult)
  }
}
</script>

<style scoped>
  .seach-list{
    margin-top: 20px;
  }
  /*.el-table th>div.cell,.el-table .cell,.el-table{
    font-size: 12px;
  }*/
  .el-button--mini, .el-button--mini.is-round{
    margin:0;
    padding:5px;font-size: 12px;
  }
  .block{
    text-align: right;
    margin-top: 20px;
    margin-right:40px;
  }
  img{
    height:100px;
    width:100px;
  }
</style>
