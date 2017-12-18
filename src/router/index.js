import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/firstPage/home.vue'
//模块1
import OrderQuery from '@/components/DeliveryManagement/subassembly/OrderQuery.vue'
import BatchShipment from '@/components/DeliveryManagement/subassembly/BatchShipment.vue'
import FreightTemplate from '@/components/DeliveryManagement/subassembly/FreightTemplate.vue'
//模块2
import SaleAfter from '@/components/afterSalesService/subassembly/saleAfter.vue'
import SaleAfterQuality from '@/components/afterSalesService/subassembly/saleAfterQuality.vue'
import SaleAfterSet from '@/components/afterSalesService/subassembly/saleAfterSet.vue'
import SaleAfterSet1 from '@/components/afterSalesService/subassembly/saleAfterSet.vue'
import WOmanagement from '@/components/afterSalesService/subassembly/WOmanagement.vue'
//模块3
import Pullnew from '@/components/commodity/subassembly/pullnew.vue'
import Goodslist from '@/components/commodity/subassembly/goodslist.vue'
import Goodsdata from '@/components/commodity/subassembly/goodsdata.vue'
import Evaluate from '@/components/commodity/subassembly/evaluate.vue'
import Stroerecommend from '@/components/commodity/subassembly/stroerecommend.vue'
import Brandclassify from '@/components/commodity/subassembly/brandclassify.vue'
import Classfenlei from '@/components/commodity/subassembly/classfenlei.vue'
//模块4
import AccountWithdrawals from '@/components/AccountFund/subassembly/AccountWithdrawals.vue'
import cashDeposit from '@/components/AccountFund/subassembly/cashDeposit.vue'
import controlInvoices from '@/components/AccountFund/subassembly/controlInvoices.vue'
import withholdingDetain from '@/components/AccountFund/subassembly/withholdingDetain.vue'
//活动模块
import Active from '@/components/activeList/subassembly/huodong.vue'


import Yemian from '@/components/firstPage/yemian.vue'
import Toindex from '@/components/commodity/subassembly/toindex.vue'
//模块5
import OnlineState from '@/components/CustomerService/subassembly/OnlineState.vue'
import ServiceData from '@/components/CustomerService/subassembly/ServiceData.vue'
import ServiceTools from '@/components/CustomerService/subassembly/ServiceTools.vue'
import NewsSet from '@/components/CustomerService/subassembly/NewsSet.vue'
import RecordSeach from '@/components/CustomerService/subassembly/RecordSeach.vue'

Vue.use(Router)

export default new Router({
 // mode: 'history',//进去历史模式，可以记录位置
  routes: [
    {
      path: '/',
      name: '',
      component: Home,
      children:[
          {
            path: '/',
            name:"SaleAfterSet1",
            component:SaleAfterSet1
          },
          {
            path: '1-1',
            name:"OrderQuery",
            component:OrderQuery
          },
          {
            path: '1-2',
            name:"BatchShipment",
            component:BatchShipment
          },
          {
            path: '1-3',
            name:"FreightTemplate",
            component:FreightTemplate
          },
          {
            path: '2-1',
            name:"SaleAfter",
            component:SaleAfter
          },
          {
            path: '2-2',
            name:"SaleAfterQuality",
            component:SaleAfterQuality
          },
          {
            path: '2-3',
            name:"SaleAfterSet",
            component:SaleAfterSet
          },
          {
            path: '2-4',
            name:"WOmanagement",
            component:WOmanagement
          },
 					{
 					path: '3-1',
 					name:"Brandclassify",
 					component:Brandclassify
 					},
 					{
 					path: '3-2',
 					name:"Classfenlei",
 					component:Classfenlei
 					},
 					{
 					path: '3-3',
 					name:"Pullnew",
 					component:Pullnew
 					},
 					{
 					path: '3-4',
 					name:"Goodslist",
 					component:Goodslist
 					},
 					{
 					path: '3-5',
 					name:"Goodsdata",
 					component:Goodsdata
 					},
          {
            path: '3-6',
            name:"Evaluate",
            component:Evaluate
          },
          {
            path: '3-7',
            name:"Stroerecommend",
            component:Stroerecommend
          },
          {
            path: '4-1',
            name:"AccountWithdrawals",
            component:AccountWithdrawals
          },
          {
            path: '4-2',
            name:"cashDeposit",
            component:cashDeposit
          },
          {
            path: '4-3',
            name:"controlInvoices",
            component:controlInvoices
          },
          {
            path: '4-4',
            name:"withholdingDetain",
            component:withholdingDetain
          },
          {
            path: '5-1',
            name:"RecordSeach",
            component:RecordSeach
          },
          {
            path: '5-2',
            name:"OnlineState",
            component:OnlineState
          },
          {
            path: '5-3',
            name:"ServiceData",
            component:ServiceData
          },
          {
            path: '5-4',
            name:"ServiceTools",
            component:ServiceTools
          },
          {
            path: '5-5',
            name:"NewsSet",
            component:NewsSet
          },
        {
          path: '10-1',
          name:"Active",
          component:Active
        },
          {
            path: 'index',
            name:"Toindex",
            component:Toindex
          }
               ]
    },
    {
    	path: '/Yemian',
      name: 'Yemian',
      component: Yemian
    }
  ],
  scrollBehavior (to, from, savedPosition) {//路由切换时滚轮位置
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
