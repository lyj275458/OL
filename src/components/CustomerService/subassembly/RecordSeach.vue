<template>
  <div id="data1">
    <p id="toindex"><router-link to="index">首页</router-link> &gt;聊天记录查询</p>
    <p><i></i>查询条件</p>
    <div class="ev-content">
      <label>订单编号：</label><el-input placeholder="请输入商品ID" size="small"></el-input>
      <label>商品ID：</label><el-input placeholder="" size="small"></el-input>
      <br>
      <label>扣款时间：</label><el-select v-model="value" size="small">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
      <el-date-picker
        size="small"
        v-model="value4"
        type="datetimerange"
        :picker-options="pickerOptions2"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right">
      </el-date-picker>
      <br>
      <el-button type="primary" round size="mini" @click="alertMe()">查询</el-button>
    </div>
    <div class="line"></div>
    <el-table
      :data="tableData5"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            :data="tableData5"
            size="mini"
            :show-header=false
            :row-style="{}"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="所属店铺">
                    <span>{{ props.row.shop }}</span>
                  </el-form-item>
                  <el-form-item label="商品 ID">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="店铺 ID">
                    <span>{{ props.row.shopId }}</span>
                  </el-form-item>
                  <el-form-item label="商品分类">
                    <span>{{ props.row.category }}</span>
                  </el-form-item>
                  <el-form-item label="店铺地址">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="商品描述">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="商品 ID"
              prop="id">
            </el-table-column>
            <el-table-column
              label="商品名称"
              prop="name">
            </el-table-column>
            <el-table-column
              label="描述"
              prop="desc">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column
        label="商品 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'RecordSeach',
    data () {
      return {
        options: [{
          value: '选项1',
          label: '最近24小时内'
        }, {
          value: '选项2',
          label: '最近7天内'
        }, {
          value: '选项3',
          label: '最近30天内'
        }],
        value:"快速选择时间",
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        value4:''
      }
    },
    components:{

    },
    computed:{
      ...mapGetters([
        'popoverAlive','pickerOptions2'
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
      handleDelete(index, row) {
        console.log(index, row);
      },

    }
  }
</script>

<style>
  #data1 #toindex{
    font: 16px/36px "微软雅黑";
    background:none;
    border:0;
    margin:0;
    color: #333;
    font-weight: 600;
    text-indent:0;
  }
  #data1 .ev-content{
    padding:15px 44px 30px 50px;
    background: #f9f9f9;
    margin-top:10px;
  }
  #data1 .ev-content p{
    display:inline-block;
    width:284px;
  }
  #data1 .ev-content label{
    font-size:12px;
    color:#666;
    margin-right:10px;
  }
  #data1 .ev-content .el-input{
    width:210px;
    /*height:52px;*/
    margin-right: 40px;
    margin-bottom:12px;
  }
  #data1 .ev-content .el-input:nth-child(6){
    margin-right:20px;
  }
  #data1 .el-button--primary{
    width:100px;
    margin:24px 0 0 70px;
  }
  #data1  .line{
    margin:20px 0;
    border:1px dashed #e8e8e8;
  }
  #data1 >p{
    font: 16px/36px "微软雅黑";
  }
  #data1 >p>i {
    border: 2px solid red;
    font-size: 12px;
    margin-right: 8px;
    height: 16px;
  }
  #data1  .el-select{
    width:130px;
  }
  #data1 .el-table th>div.cell,.el-table .cell,.el-table{
    font-size: 12px;
  }
  #data1 .demo-table-expand {
    font-size: 0;
  }
  #data1 .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  #data1 .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  #data1 .el-table__expanded-cell[class*=cell]{
    padding:0 20px;
  }
  #data1 .el-table__expanded-cell:hover{
    background: none !important;
  }
</style>
