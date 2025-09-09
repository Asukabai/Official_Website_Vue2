import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        },


        {
          path: '/software',
          name: 'software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: '产品列表'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/automated_system'
            },
            {
              path: '/software/automated_system',
              name: 'Software_AutomatedSystem',
              component: resolve => require(['@/view/Software_AutomatedSystem'], resolve),
              meta: {
                title: '软件产品丨自动化测控系统'
              }
            },
            {
              path: '/software/intelligent_equipment',
              name: 'Software_IntelligentEquipment',
              component: resolve => require(['@/view/Software_IntelligentEquipment'], resolve),
              meta: {
                title: '软件产品丨智能调测设备'
              }
            },
            {
              path: '/software/electronic_instruments',
              name: 'Software_ElectronicInstruments',
              component: resolve => require(['@/view/Software_ElectronicInstruments'], resolve),
              meta: {
                title: '软件产品丨电子设备测试仪器'
              }
            },
            {
              path: '/software/software_platform',
              name: 'Software_SoftwarePlatform',
              component: resolve => require(['@/view/Software_SoftwarePlatform'], resolve),
              meta: {
                title: '软件产品丨生产管理平台'
              }
            }
          ]
        }


        , {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '新闻动态'
          }
        },  {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: '相关服务'
          }
        }
      ]
    }
  ]
})
