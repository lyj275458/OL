
const map = resolve => {
    require.ensure(['../containers/map.vue'], () => {
        resolve(require('../containers/map.vue'));
    }, 'map');
};

export default [
    //嵌套路由
    {
        path: '/map',
        component: map,
        name: '组件模块',
        
    },{//测试--
        path: '/fightAlone/detail',
        
        component: resolve => {
            require.ensure(['../containers/fightAlone/detail.vue'], () => {
                resolve(require('../containers/fightAlone/detail.vue'));
            }, 'fightAloneDetail');
        }
        
    },{//测试--
        path: '/activity/detail',
        
        component: resolve => {
            require.ensure(['../containers/activity/detail.vue'], () => {
                resolve(require('../containers/activity/detail.vue'));
            }, 'activitDetail');
        }
        
    },{//拼单--
        path: '/order/partake/id/:id',
        
        component: resolve => {
            require.ensure(['../containers/order/partake.vue'], () => {
                resolve(require('../containers/order/partake.vue'));
            }, 'orderPartake');
        }
        
    },{//拼单详情--
        path: '/order/detail/id/:id',
        
        component: resolve => {
            require.ensure(['../containers/order/detail.vue'], () => {
                resolve(require('../containers/order/detail.vue'));
            }, 'orderdDetail');
        }
        
    },{//我的订单--
        path: '/order/myOrder',
        
        component: resolve => {
            require.ensure(['../containers/order/myOrder.vue'], () => {
                resolve(require('../containers/order/myOrder.vue'));
            }, 'myOrder');
        }
        
    },{//我的拼团--
        path: '/fightAlone/mygoods',
        
        component: resolve => {
            require.ensure(['../containers/fightAlone/mygoods.vue'], () => {
                resolve(require('../containers/fightAlone/mygoods.vue'));
            }, 'fightMygoods');
        }
        
    },{//我的拼团--
        path: '/common/scroll',
        
        component: resolve => {
            require.ensure(['../containers/common/scroll.vue'], () => {
                resolve(require('../containers/common/scroll.vue'));
            }, 'commonScroll');
        }
        
    },{//我的拼团--
        path: '/demo/iscroll',
        
        component: resolve => {
            require.ensure(['../containers/demo/iscroll.vue'], () => {
                resolve(require('../containers/demo/iscroll.vue'));
            }, 'demoiScroll');
        }
        
    },{//分享--
        path: '/fightAlone/share',
        
        component: resolve => {
            require.ensure(['../containers/fightAlone/share.vue'], () => {
                resolve(require('../containers/fightAlone/share.vue'));
            }, 'aloneShare');
        }
        
    },{//首页--
        path: '/index/index',
        
        component: resolve => {
            require.ensure(['../containers/index/index.vue'], () => {
                resolve(require('../containers/index/index.vue'));
            }, 'index');
        }
        
    },{//首页--
        path: '/goods/detail',
        
        component: resolve => {
            require.ensure(['../containers/goods/detail.vue'], () => {
                resolve(require('../containers/goods/detail.vue'));
            }, 'goodsDetail');
        }
        
    },{//分享--
        path: '/share/share',
        
        component: resolve => {
            require.ensure(['../containers/share/share.vue'], () => {
                resolve(require('../containers/share/share.vue'));
            }, 'sharePay');
        }
        
    },{//拼单--
        path: '/order/back',
        
        component: resolve => {
            require.ensure(['../containers/order/partake.vue'], () => {
                resolve(require('../containers/order/partake.vue'));
            }, 'orderPartake');
        }
        
    },{//分享测试
        path: '/common/wxShare',
        
        component: resolve => {
            require.ensure(['../containers/common/wxShare.vue'], () => {
                resolve(require('../containers/common/wxShare.vue'));
            }, 'commonShare');
        }
        
    },{//分享测试
        path: '/integral/uesget',
        
        component: resolve => {
            require.ensure(['../containers/integral/uesget.vue'], () => {
                resolve(require('../containers/integral/uesget.vue'));
            }, 'integral');
        }
        
    },{//会员分类
        path: '/mine/index',
        
        component: resolve => {
            require.ensure(['../containers/mine/index.vue'], () => {
                resolve(require('../containers/mine/index.vue'));
            }, 'mineIndex');
        }
        
    },{//会员分类
        path: '/safe/safety',
        
        component: resolve => {
            require.ensure(['../containers/safe/safety.vue'], () => {
                resolve(require('../containers/safe/safety.vue'));
            }, 'safetyIndex');
        }
        
    },{//规则
        path: '/rule/rule',
        
        component: resolve => {
            require.ensure(['../containers/rule/rule.vue'], () => {
                resolve(require('../containers/rule/rule.vue'));
            }, 'ruleDetail');
        }
        
    },{//试用
        path: '/try/center',
        
        component: resolve => {
            require.ensure(['../containers/try/center.vue'], () => {
                resolve(require('../containers/try/center.vue'));
            }, 'tryCenter');
        }
        
    }

    ,{
        path: '*',
        component: map
    }
]