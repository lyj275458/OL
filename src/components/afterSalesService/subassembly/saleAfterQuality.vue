<template>
  <div id="data">
    <p id="toindex"><router-link to="index">首页</router-link> &gt; 售后服务质量</p>
    <div class="ev-header">
      <el-alert
        title="近30天退款率、介入率及纠纷退款率将成为平台考核商家服务质量的重要指标，直接影响到商家参加平台相关活动：上首页、上海淘、上专题、上推荐、上推文等。"
        type="warning"
        :closable="false"
        show-icon>
      </el-alert>
      <!--<p><i class="el-icon-warning"></i>近30天退款率、介入率及纠纷退款率将成为平台考核商家服务质量的重要指标，直接影响到商家参加平台相关活动：<span>上首页、上海淘、上专题、上推荐、上推文等。</span></p>-->
    </div>
    <div class="ev-content">
        <div>
          <p>近30天纠纷退款笔数 <el-tooltip class="item" effect="light" content="Right Center 提示文字" placement="right">
            <i class="el-icon-question"></i>
          </el-tooltip></p>
          <div id="one-e"></div>
        </div>
        <div>
          <p>近30天纠纷退款率趋势<el-tooltip class="item" effect="light" content="Right Center 提示文字" placement="right">
            <i class="el-icon-question"></i>
          </el-tooltip></p>
          <div id="two-e"></div>
        </div>
        <div>
          <p>近30天退款速度趋势<el-tooltip class="item" effect="light" content="Right Center 提示文字" placement="right">
            <i class="el-icon-question"></i>
          </el-tooltip></p>
          <div id="three-e"></div>
        </div>
        <div>
          <p>近30天退款率趋势<el-tooltip class="item" effect="light" content="Right Center 提示文字" placement="right">
            <i class="el-icon-question"></i>
          </el-tooltip></p>
          <div id="four-e"></div>
        </div>
        <div>
          <p>近30天介入率趋势<el-tooltip class="item" effect="light" content="Right Center 提示文字" placement="right">
            <i class="el-icon-question"></i>
          </el-tooltip></p>
          <div id="five-e"></div>
        </div>
    </div>
    <div class="chalist">

    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'saleAfterQuality',
    data () {
      return {
          data1:[],
          data2:[],
          data3:[],
          data4:[],
          data5:[],
          dataResult1:[],
          dataResult2:[],
          dataResult3:[],
          dataResult4:[],
          dataResult5:[]
      }
    },
    components:{

    },
    mounted () {
      let data1=this.data1
      let data2=this.data2
      let data3=this.data3
      let data4=this.data4
      let data5=this.data5
      this.echarsinit('one-e',data1,this.dataResult1)
      this.echarsinit('two-e',data2,this.dataResult2)
      this.echarsinit('three-e',data3,this.dataResult3)
      this.echarsinit('four-e',data4,this.dataResult4)
      this.echarsinit('five-e',data5,this.dataResult5)
      //this.getDayAll('2017-10-20','2017-11-20')
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
     getDayAll(begin,end,dataList,dataListResult){
       function getDate(datestr){
         var temp = datestr.split("-");
         var date = new Date(temp[0],temp[1],temp[2]);
         return date;
       }
       let data=[]
       let startTime = getDate(begin);
       let endTime = getDate(end);
       while((endTime.getTime()-startTime.getTime())>=0){
         let month = startTime.getMonth().toString().length==1?"0"+startTime.getMonth().toString():startTime.getMonth();
         let day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();
         //alert(month+"-"+day);
         dataList.push(month+"-"+day)
         dataListResult.push(Math.random().toFixed(2))
         startTime.setDate(startTime.getDate()+1);
       }

  },
  echarsinit(str,dataList,dataListResult){
        let myDate=new Date();
        let endT = myDate.getFullYear()+'-'+(myDate.getMonth()+1) + "-" + myDate.getDate();
        myDate.setMonth(myDate.getMonth()-1);
       let startT = myDate.getFullYear()+'-'+(myDate.getMonth()+1) + "-" + myDate.getDate();
        let myChart = this.$echarts.init(document.getElementById(str))
        this.getDayAll(startT,endT,dataList,dataListResult)
    let Yline=[0,0.2,0.4,0.6,0.8,1]
       let option = {
         title: {
           text: '',
           subtext: ''
         },
         tooltip: {
           trigger: 'axis'
         },
         legend: {
           data:['']
         },
         toolbox: {
           show: true,
           feature: {
             dataZoom: {
               yAxisIndex: 'none'
             },
             dataView: {readOnly: false},
             magicType: {type: ['line', 'bar']},
             restore: {},
             saveAsImage: {}
           }
         },
         xAxis:  {
           type: 'category',
           boundaryGap: false,
           data:dataList
         },
         yAxis: {
           type: 'value',
           max:'1'
         },
         series: [
           {
             name:'纠纷退款笔数',//提示语设置显示
             type:'line',
             data:dataListResult,
             markPoint: {
               data: [
                 {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
               ]
             }
           }
         ]
       };
    myChart.setOption(option);
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
  /*.ev-header p{
    !*background: #fffaeb;*!
    font:12px/26px "微软雅黑";text-indent:5px ;
    !*border: 1px solid #f5e19f;*!
    margin:15px 0 4px 0;
    width: 1030px;
    color:#333;
    margin-bottom:28px;
  }
  .ev-header p span{
    color: rgb(255, 0, 0);
  }
  .el-icon-warning{
    color:#ffa901;
    margin-right:5px;
  }*/
  .el-alert--warning{
    margin:15px 0;
  }
  .ev-content p{
    font:14px/42px "微软雅黑";
    text-indent:20px;
    background: #f4f5fa;
    border-bottom:1px solid #e2e2e2;
  }
  .ev-content > div{
    border:1px solid #e2e2e2;
    margin-bottom:20px;
  }
  .ev-content > div div{
    padding:12px 10px 12px 35px;
    height:340px;
  }
  i.el-icon-question{
    color:#cecece;
    text-indent: 10px;
    font-size:18px;
  }
  .ev-content{

  }

</style>
