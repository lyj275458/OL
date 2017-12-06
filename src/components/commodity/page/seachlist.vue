<template>
	<div>
		<p><i></i>查询结果<span>共查询到<i>{{tableData.length}}</i>条数据</span></p>
 <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="商品ID"
      width="95">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品名称"
      width="184">
      <template slot-scope="scope">
        <span style="margin-left: 10px;" class="cu">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="所在资源位"
      width="86">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.resource }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="团购价"
      width="70">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.temprice }}</span>
        <el-button size="mini" @click="changeTeme(scope.$index, scope.row)">修改团价</el-button>
      </template>
    </el-table-column>
    <el-table-column
      label="单购价"
      width="70">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ownprice }}</span>
        <el-button size="mini" @click="changeOne(scope.$index, scope.row)">修改单价</el-button>
      </template>
    </el-table-column>
    <el-table-column
      label="近30天商品评价"
      width="108">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.pingjia }}
        <el-tooltip content="近30内用户评价不足，暂无评分" placement="top" effect="light">
  <i class='el-icon-warning'></i>
</el-tooltip>
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="库存"
      width="70">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.save }}</span>
        <el-button size="mini" @click="changeSave(scope.$index, scope.row)">修改库存</el-button>
      </template>
    </el-table-column>
    <el-table-column
      label="累计销量"
      width="70">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sales }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺排位"
      width="86">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
         <el-button size="mini">修改排位</el-button>
      </template>
    </el-table-column>
    <el-table-column
      label="在售状态"
      width="70">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.salestatus }}</span>
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
          @click="handleDelete(scope.$index, scope.row)">下架</el-button>
           <el-button size="mini">复制链接</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[15, 30, 40, 50]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  name: 'seachlist',
  data () {
  	return {
      currentPage4:1,
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
        }]
  	}
  },
  computed:{
    ...mapGetters([
      'alertnum','loginResult','dingdanListResult'
    ])
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    changeSave (index, row) {
      console.log(row.save)
    },
    changeTeme (index,row) {
      console.log(row.temprice)
    },
    changeOne (index,row) {
      console.log(row.ownprice)
    },
  }
}
</script>

<style scoped>
.el-table th>div.cell,.el-table .cell,.el-table{
	font-size: 12px;
}
div.block{
  text-align: right;margin-right: 30px;
  margin-top:20px;
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
.span{
	display: block;font:12px/34px "微软雅黑";color:#333;
}
.span i{
	color:red;margin: 0 5px;
}
 p{
	font: 16px/36px "微软雅黑";margin-top:10px ;
}
 p span{
	font-size: 12px;margin-left:15px ;
}
 p span i{
	color: red;margin: 0 5px;
}
 p>i{
	border: 2px solid red;font-size: 12px;margin-right: 8px;height: 16px;
}
.el-table span.cu{
	color:"skyblue"
}
</style>
