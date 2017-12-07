<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 店铺推荐位设置</p>
    <div class="ev-header">
      <!--<h4>店铺推荐位设置</h4>-->
    </div>
    <div class="ev-content">
     <label>商品Id：</label><el-input placeholder="请输入商品ID" size="small"></el-input>
     <label>店铺推荐1：</label><el-input placeholder="" size="small"></el-input>
     <label>店铺推荐2：</label><el-input placeholder="" size="small"></el-input>
     <label>店铺推荐3：</label><el-input placeholder="" size="small"></el-input>
     <label>是否设置：</label><el-select v-model="value" size="small">
       <el-option
         v-for="item in options"
         :key="item.value"
         :label="item.label"
         :value="item.value">
       </el-option>
     </el-select>
      <br>
      <el-button type="primary" round size="mini" @click="alertMe()">查询</el-button>
    </div>
    <div class="line"></div>
    <p><i></i>查询结果<span>共查询到<i>{{options.length}}</i>条数据</span></p>
    <div class="chalist">
      <p>每页<el-select v-model="num" size="mini" style="width: 74px;">
        <el-option
          v-for="item in tables"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>条</p>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="商品ID"
          width="172">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
          width="240"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="店铺推荐1"
          width="145"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="店铺推荐2"
          width="145"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="店铺推荐3"
          width="145"
          show-overflow-tooltip>
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
              @click="handleDelete(scope.$index, scope.row)">清空</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection(tableData)" size="small">批量选择</el-button>
        <el-button @click="allhandleEdit()" type="success" size="small" plain>批量编辑</el-button>
        <el-button @click="allDelete()" type="danger" size="small" plain>批量清空</el-button>
      </div>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'evaluate',
    data () {
      return {
        currentPage1:5,
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '是'
        }, {
          value: '选项3',
          label: '否'
        }],
        tables: [{
          value: '选项1',
          label: '10'
        }, {
          value: '选项2',
          label: '20'
        }, {
          value: '选项3',
          label: '50'
        }, {
          value: '选项4',
          label: '100'
        }],
        num:"10",
        value:"全部",
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
        multipleSelection: []
      }
    },
    components:{

    },
    computed:{
      ...mapGetters([
        'popoverAlive'
      ])
    },
    methods:{
      ...mapActions([
        'popoverAlert'
      ]),
      alertMe(){
        this.popoverAlert('vBalance')
        console.log(this.popoverAlive)
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      allhandleEdit(){

      },
      allDelete(){

      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      turnpage(key,title){
        if(key){
          this.index=key
        }
        if(title){
          this.tittle=title
        }
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      open() {
        this.$message.error('请输入商品ID');
      }
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
  h4{
    font-family: Helvetica Neue,"微软雅黑","黑体";
    font-size: 18px;
    font-weight:400;
    padding-bottom:16px;
    border-bottom:1px solid #e8e8e8;
  }
  .ev-content{
    padding:30px 44px 30px 50px;
    background: #f9f9f9;
    margin-top:20px;
    /*display: flex;
    justify-content:space-between;
    flex-wrap: wrap;*/
  }
  .ev-content p{
    display:inline-block;
    width:284px;
  }
  .ev-content label{
    display: inline-block;
    width:70px;
    text-align: right;
    font-size:12px;
    color:#666;
    margin-right:10px;
  }
  .ev-content .el-input{
    width:210px;
    /*height:52px;*/
    margin-right: 30px;
    margin-bottom:12px;
  }
  .ev-content .el-input:nth-child(6){
    margin-right:20px;
  }
  .el-button--primary{
    width:100px;
    margin:24px 0 0 70px;
  }
  #data .line{
    margin:20px 0;
    border:1px dashed #e8e8e8;
  }
  #data>p{
    font: 16px/36px "微软雅黑";margin-top:10px ;
  }
  #data>p span{
    font-size: 12px;margin-left:15px ;
  }
  #data>p span i{
    color: red;margin: 0 5px;
  }
  #data>p>i {
    border: 2px solid red;
    font-size: 12px;
    margin-right: 8px;
    height: 16px;
  }
  .chalist{
    margin-top:14px;
  }
  .chalist .el-select,{
   margin:0 5px;
  }
  .chalist p{
    margin-bottom:10px;
  }
  div.block{
    text-align: right;margin-right: 30px;
    margin-top:20px;
  }
</style>
