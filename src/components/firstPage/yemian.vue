<template>
  <div id="data">
    <el-button type="warning" plain size="mini" style="width: 100px;margin-top: 20px" @click="backTo()">返回</el-button>
    <div id="content">
      <div class="left">
        <div class="swiper">
          轮播图
        </div>
        <div class="one">
          banner图
        </div>
        <div class="two">
          <p>图1</p>
          <p>图2</p>
        </div>
        <div class="three">
          <p>图1</p>
          <p>图2</p>
          <p>图3</p>
        </div>
        <div class="four">
          <p>图1</p>
          <p>图2</p>
          <p>图3</p>
          <p>图4</p>
        </div>
        <div class="more">
          <div>
            <p>图1</p>
            <p>图2</p>
            <p>图3</p>
            <p>图4</p>
            <p>图1</p>
            <p>图2</p>
            <p>图3</p>
            <p>图4</p>
          </div>
        </div>
        <div class="fenlei">

        </div>
      </div>
      <div class="center">

      </div>
      <div class="right">

      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'login',
    data () {
      return {

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
      backTo(){
        this.$router.push({
          name:'',
          path:"/"
        })
      }
    }
  }
</script>

<style scoped>
  #data{
    width:1300px;margin:0 auto;
  }
  #content{
    padding:20px 0;display: flex;
    justify-content: space-between;
    position: relative;
    width:100%;
  }
  #content .left{
    width:250px;
  }
  #content .swiper{
    background: #00ff00;
    border:1px solid #2d2f33;
    line-height:100px;
    text-align: center;
  }
  #content .one{
    background: red;
    border:1px solid #2d2f33;
    line-height:100px;
    text-align: center;
  }
  #content .two{
    border:1px solid #2d2f33;
    display: flex;
  }
  #content .two p:first-child{
    border-right: 1px solid #2d2f33;
  }
  #content .two p{
    text-align: center;
    flex:1;
    line-height: 50px;
  }
  #content .three,#content .four{
    border:1px solid #2d2f33;
    display: flex;
  }
  #content .three p:last-child,.four p:last-child{
    border-right: none;
  }
  #content .three p,.four p{
    text-align: center;
    flex:1;
    line-height: 50px;
    border-right: 1px solid #2d2f33;
  }
  .more{
    overflow: hidden;
  }
  .more div{
    overflow:auto;width:430px;
  }
  .more p:last-child{
    border-right: none;
  }
  .more p{
    display: inline-block;
    width:50px;
    border-right: 1px solid #2d2f33;
  }
  h4{
    font-family: Helvetica Neue,"微软雅黑","黑体";
    font-size: 18px;
    font-weight:400;
    padding-bottom:16px;
    border-bottom:1px solid #e8e8e8;
  }

</style>
