<template>
	<div>
	<span class="span">共<i>{{tableData.length}}</i>条数据</span>
 	<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="商品编号"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品名称"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.status }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="编辑类型"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="提交时间"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
  </div>
</template>

<script>
export default {
  name: 'issue',
  data(){
  	return {
  		arr:[/*{
//		title:"hehe"
  		}*/
  		],
  		tableData: [/*{
          date: '2016-05-02',
          name: '王小虎',
          address: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
          status:'编辑中'
        }, {
         date: '2016-05-04',
          name: '王小虎',
          address: '【意大利袋鼠】【2017年最新款亏本推荐】4条装男士内裤男 纯棉印花平角裤 中腰透气礼盒装',
          status:'编辑中'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
          status:'编辑中'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
          status:'编辑中'
        }*/]
  	}
  },
  methods:{
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>
.span{
	display: block;font:12px/34px "微软雅黑";color:#333;
}
.span i{
	color:red;margin: 0 5px;
}
</style>
