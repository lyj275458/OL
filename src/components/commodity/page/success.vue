<template>
	<div>
	<span class="span">共<i>{{tableData.length}}</i>条数据</span>
 	<p class="nogoods" v-if="tableData.length==0">没有查询到相关商品</p>
 	<el-table
    :data="tableData"
    style="width: 100%；border:1px solid #303242"
    v-if="tableData.length != 0">
    <el-table-column
      label="商品编号"
      width="193">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品名称"
      width="322">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="状态"
      width="193">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.item }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="编辑类型"
      width="129">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.status }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="审核时间"
      width="192">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'success',
  data(){
  	return {
  		arr:[/*{
//		title:"hehe"
  		}*/
  		],
  		tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '【意大利袋鼠100%纯棉正品 】 男士保暖内衣纯棉基础款 秋衣秋裤套装圆领薄款全棉打底',
          status:'修改',
          item:"发布成功"
        }, {
         date: '2016-05-04',
          name: '王小虎',
          address: '【意大利袋鼠】【2017年最新款亏本推荐】4条装男士内裤男 纯棉印花平角裤 中腰透气礼盒装',
          status:'修改',
          item:"发布成功"
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
          status:'修改',
          item:"发布成功"
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '【意大利袋鼠】【下单即送棉袜】4条装男士内裤男 莫代尔平角裤 中腰透气礼盒装',
          status:'修改',
          item:"发布成功"
        }]
  	}
  }
}
</script>

<style scoped>
.nogoods{
	text-align: center;font: 16px/100px "微软雅黑";
	color: #999;
}
.span{
	display: block;font:12px/34px "微软雅黑";color:#333;
}
.span i{
	color:red;margin: 0 5px;
}
</style>
