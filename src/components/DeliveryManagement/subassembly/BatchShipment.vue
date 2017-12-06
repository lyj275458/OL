<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 批量发货</p>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" @click="turnpage('1','vallPullOut')">批量发货</el-menu-item>
      <el-menu-item index="2" @click="turnpage('2','vAbnormalComplaints')">物流异常投诉</el-menu-item>
      <el-menu-item index="3" @click="turnpage('3','vLogisticsReminder')">物流提醒</el-menu-item>
    </el-menu>
    <div class="bianji">
      <keep-alive>
        <component :is="tittle"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import vAbnormalComplaints from '../page/AbnormalComplaints.vue'
  import vallPullOut from '../page/allPullOut.vue'
  import vLogisticsReminder from '../page/LogisticsReminder.vue'
  export default {
    name: 'BatchShipment',
    data () {
      return {
        activeIndex: '1',
        index:'1',
        tittle:'vallPullOut'
      }
    },
    components:{
      vAbnormalComplaints,vallPullOut,vLogisticsReminder
    },
    computed:{
      ...mapGetters([
        'popoverAlive'
      ])
    },
    methods: {
      ...mapActions([
        'popoverAlert'
      ]),
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
  #data #toindex{
    font: 16px/36px "微软雅黑";
    background:none;
    border:0;
    margin:0;
    color: #333;
    font-weight: 550;
    text-indent:0;
  }

</style>
