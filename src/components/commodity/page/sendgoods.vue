<template>
	<div>
 <div id="goods">
 	<label>商品ID：</label><el-input v-model="input" placeholder="请输入商品ID" name="ID" size="small"></el-input>
 	<label>商品名称：</label><el-input v-model="input" placeholder="请输入商品名称" name="goods" size="small"></el-input>
 	<label>样品状态：</label><el-select v-model="value" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <div class="block">
   	<label>申请时间：</label><el-date-picker
      size="small"
      v-model="value4"
      type="datetimerange"
      :picker-options="pickerOptions2"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>
  <el-button type="primary" round>查询</el-button>
 </div>
 <!--<p><i></i>查询结果<span>共查询到<i>{{tableData.length}}</i>条数据</span></p>-->
 <v-sendlist></v-sendlist>
 </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import vSendlist from './sendlist.vue'
export default {
  name: 'sendgoods',
  data(){
  	return {
  		tableData:'',
  		 options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '待寄样'
        }, {
          value: '选项3',
          label: '已入库'
        }, {
          value: '选项4',
          label: '已驳回'
        }, {
          value: '选项5',
          label: '平台处理中'
        }, {
          value: '选项6',
          label: '未收到货'
        }, {
          value: '选项7',
          label: '已清理'
        }],
        value: '全部',
        input:'',
        num:"36",
        value4: '',
  	}
  },
  components:{
  	vSendlist
  },
  computed:{
    ...mapGetters([
      'pickerOptions2'
    ])
  },
  methods:{
  	 handleSelect(key, keyPath) {
        console.log(key, keyPath);
     },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      turnpage(key,title){
      	/*if(key){
      		this.index=key
      	}*/
      	if(title){
      		this.tittle=title
      	}
      }
  }
}
</script>

<style scoped>
#goods{
	width:962px;background: #f9f9f9;margin-top: 20px;padding: 10px 68px 12px 25px;
}
#goods label{
	font: 12px/40px "微软雅黑";margin-right: 20px;
}
#goods >.el-input:nth-child(2),#goods >.el-input:nth-child(4){
	width:190px;margin-right: 50px;
}
#goods .block div.el-input[data-v-47c7e364]{
	margin:0;
}
#goods .block{
	margin-top: 20px;
}
div.el-select{
	width:190px;font-size: 12px;
}
.el-button.is-round{
		padding: 10px 28px;font-size: 12px;margin: 20px 0 0 90px;
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
  #goods label{
    display: inline-block;
    width:70px;
    text-align: right;
  }
</style>
