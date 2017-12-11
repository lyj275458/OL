<template>
	<div>
 <div id="goods">
 	<label>商品ID：</label><el-input v-model="input" placeholder="请输入商品ID" name="ID" size="small"></el-input>
 	<label>商品名称：</label><el-input v-model="input" placeholder="请输入商品名称" name="goods" size="small"></el-input>
 	<label>是否预售：</label><el-select v-model="value" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-button type="primary" round @click="seachGoods()">查询</el-button>
 </div>
 <div id="fenlei">
 	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" @click="turnpage('1','vSeachlist')">全部</el-menu-item>
  <el-menu-item index="2" @click="turnpage('2','vSeachlist')">上架</el-menu-item>
  <el-menu-item index="3" @click="turnpage('3','vDownlist')">售完</el-menu-item>
  <el-menu-item index="4" @click="turnpage('4','vDownlist')">下架</el-menu-item>
</el-menu>
 </div>
 <div class="seach">
	<keep-alive>
            <component :is="tittle"></component>
    </keep-alive>
</div>
    <div class="el-uli">
      <div>很多买家在搜<p class="cu">换一批<i class="el-icon-refresh"></i></p></div>
      <ul>
        <li v-for="(item,index) in goodslist">{{item}}</li>
      </ul>
    </div>
 </div>
</template>

<script>
import vSeachlist from './seachlist.vue'
import vDownlist from './downlist.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'linegoods',
  data(){
  	return {
  	    goodslist:[
  	      "睡衣女","拖鞋男","外套","鞋女","睡衣女","拖鞋男","外套","鞋女","睡衣女","拖鞋男","外套","鞋女","睡衣女","拖鞋男","外套","鞋女","睡衣女","拖鞋男"
        ],
      index:1,
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
        value: '全部',
        input:'',
        activeIndex: '1',
        activeIndex2: '1',
        num:"36",
        tittle:"vSeachlist"
  	}
  },
  computed:{
    ...mapGetters([

    ])
  },
  components:{
  	vSeachlist,vDownlist
  },
  methods:{
    ...mapActions([

    ]),
    seachGoods(){
     //this.$router.push('/login')
    },
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
      	if(key){
      		this.index=key
      	}
      	if(title){
      		this.tittle=title
      	}
      }
  }
}
</script>

<style scoped>
#goods{
	width:962px;background: #f9f9f9;margin-top: 20px;padding: 20px 68px 10px 25px;
}
#goods label{
	font: 12px/40px "微软雅黑";margin-right: 20px;
}
#goods div.el-input{
	width:190px;margin-right: 70px;
}
div.el-select{
	width:190px;font-size: 12px;
}
.el-button.is-round{
		padding: 10px 28px;font-size: 12px;margin: 20px 0 0 90px;
}
#fenlei p{
	font: 16px/36px "微软雅黑";margin-top:10px ;
}
#fenlei p span{
	font-size: 12px;margin-left:15px ;
}
#fenlei p span i{
	color: red;margin: 0 5px;
}
#fenlei p>i{
	border: 2px solid red;font-size: 12px;margin-right: 8px;height: 16px;
}
.el-uli{
  width:1026px;
  padding:20px;
  background: #f3f6f8;
  margin-top: 40px;
  margin-bottom:100px;
  font:14px/22px "微软雅黑";
}
.el-uli li{
  border:1px solid #999;
  background: #fff;
  padding:0 5px;margin-right:20px;
  display: inline-block;margin-top: 10px;
}
 .el-uli p{
   float:right;
   color:skyblue;
 }
</style>
