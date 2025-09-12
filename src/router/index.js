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
          path: '/productList',
          name: 'productList',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: '产品列表'
          },
          children: [
            {
              path: '/productList',
              redirect: '/productList/electrical_testing_platform/automated_system'
            },
            {
              path: '/productList/electrical_testing_platform',
              redirect: '/productList/electrical_testing_platform/automated_system'
            },
            {
              path: '/productList/electrical_testing_platform/automated_system',
              name: 'Software_AutomatedSystem',
              component: resolve => require(['@/view/Software_AutomatedSystem'], resolve),
              meta: {
                title: '电源自动化测试系统'
              }
            },
            {
              path: '/productList/electrical_testing_platform/intelligent_equipment',
              name: 'Software_IntelligentEquipment',
              component: resolve => require(['@/view/Software_IntelligentEquipment'], resolve),
              meta: {
                title: '多路通用智能测试系统'
              }
            },
            {
              path: '/productList/electrical_testing_platform/electronic_instruments',
              name: 'Software_ElectronicInstruments',
              component: resolve => require(['@/view/Software_ElectronicInstruments'], resolve),
              meta: {
                title: '超高速 / 高压电子负载'
              }
            },
            {
              path: '/productList/electrical_testing_platform/software_platform',
              name: 'Software_SoftwarePlatform',
              component: resolve => require(['@/view/Software_SoftwarePlatform'], resolve),
              meta: {
                title: 'AGV协作机器人'
              }
            },
            {
              path: '/productList/force_testing_platform',
              redirect: '/productList/force_testing_platform/automated_system'
            },
            {
              path: '/productList/force_testing_platform/automated_system',
              name: 'Force_AutomatedSystem',
              component: resolve => require(['@/view/Software_AutomatedSystem'], resolve),
              meta: {
                title: '旋转类负载模拟系统'
              }
            },
            {
              path: '/productList/force_testing_platform/intelligent_equipment',
              name: 'Force_IntelligentEquipment',
              component: resolve => require(['@/view/Software_IntelligentEquipment'], resolve),
              meta: {
                title: '直线类负载模拟系统'
              }
            },
            {
              path: '/productList/force_testing_platform/electronic_instruments',
              name: 'Force_ElectronicInstruments',
              component: resolve => require(['@/view/Software_ElectronicInstruments'], resolve),
              meta: {
                title: '起落架、铁鸟类负载模拟系统'
              }
            },
            {
              path: '/productList/force_testing_platform/software_platform',
              name: 'Force_SoftwarePlatform',
              component: resolve => require(['@/view/Software_SoftwarePlatform'], resolve),
              meta: {
                title: '定制化测试台模拟系统'
              }
            },
            {
              path: '/productList/software_testing_platform',
              redirect: '/productList/software_testing_platform/automated_system'
            },
            {
              path: '/productList/software_testing_platform/automated_system',
              name: 'Platform_AutomatedSystem',
              component: resolve => require(['@/view/Software_AutomatedSystem'], resolve),
              meta: {
                title: '智能通用化负载监测平台'
              }
            },
            {
              path: '/productList/software_testing_platform/intelligent_equipment',
              name: 'Platform_IntelligentEquipment',
              component: resolve => require(['@/view/Software_IntelligentEquipment'], resolve),
              meta: {
                title: '视觉自动化检测及图像识别平台'
              }
            },
            {
              path: '/productList/software_testing_platform/electronic_instruments',
              name: 'Platform_ElectronicInstruments',
              component: resolve => require(['@/view/Software_ElectronicInstruments'], resolve),
              meta: {
                title: 'MES智能制造执行管理系统'
              }
            },
            {
              path: '/productList/software_testing_platform/software_platform',
              name: 'Platform_SoftwarePlatform',
              component: resolve => require(['@/view/Software_SoftwarePlatform'], resolve),
              meta: {
                title: '定制化智能化解决方案'
              }
            }
          ]
        }
        , {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '解决方案'
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
          path: '/servicedetail/:id?',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: '相关服务'
          }
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (to.params.id) {
      return { selector: '#' + to.params.id }
    }
  }
})
