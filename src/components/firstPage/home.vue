<template>
  <div>
    <el-container>
  	<el-header>
      <div class="header-t">
      <img src="../../../static/logo.png" alt="">
     <!-- <button class="cu">返回首页</button>-->
        <p class="h-title valign">OL圈2.0总平台</p>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#303242"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="8">
          <template slot="title">
            <img src="../../../static/slogo.png" alt="" class="valign">欢迎：<span id="myown">heheheh</span>
          </template>
          <el-menu-item index="8-1">安全设置</el-menu-item>
          <el-menu-item index="8-2">退出</el-menu-item>
        </el-submenu>
      </el-menu>
      </div>
    </el-header>
    <div class="flexx">
    	<asidle></asidle>
    <el-main>
    	<router-view style=" width:1052px;"/>
    </el-main>
      <div class="alertshow" v-if="popoverAlive.openOrClose" v-drag>
        <v-popover></v-popover>
      </div>
    </div>
  </el-container>
    <p id="footer">© 2016 pinduoduo.com All rights reserved. (沪ICP备15010535号-13)</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
import asidle from '../commodity/subassembly/asidle.vue'
import vPopover from '../popover/popover.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  components:{
		asidle,vPopover
  },
  computed:{
    ...mapGetters([
      'popoverAlive'
    ])
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container.is-vertical[data-v-12c28653]{
	width:100%;height: auto;
}
.el-main{
	padding: 15px 0 0 20px;
}
ul.el-menu-demo{
  height:60px;
}
.alertshow{
  position: absolute;
  left:46%;
  top:60%;
}
.flexx{
	display: flex;justify-content: flex-start;margin-top: 60px;
}
header{
  width:100%;background:#303242 ;
}
header .header-t{
  width:1274px;
  margin-left:40px;
  display: flex;
  justify-content:space-between;
}
header .h-title{
  color: #fff;
  font-size: 18px;

}
header .header-t > img{
  margin:16px 0;
}
header img.valign{
  width: 25px;height:25px;border-radius: 50%;margin:0 10px 0 0;
}
.el-menu-demo{
  /*width:664px;*/border-bottom: 0;
}
.el-menu-demo .el-menu-item{
  font-size: 16px;
}
.el-aside{
	overflow: inherit;margin-left: 20px;
}
.el-header{
  padding:0;position: fixed;z-index: 111;
}
/*header button{
  width:60px;line-height: 20px;font-size:12px;margin:24px 160px 0 14px;
  padding:0;border:1px solid #83848e;
  -webkit-border-radius:5px ;
  -moz-border-radius: 5px;
  border-radius:5px ;
  background: #303242;
  color:#fff;

}*/
.el-container.is-vertical{

}
#myown{
	font-size: 12px;
}
#footer{
  background: #fafafa;
  font:14px/48px "宋体";
  padding-bottom: 16px;
  text-align: center;
  color:#333;
}
</style>
