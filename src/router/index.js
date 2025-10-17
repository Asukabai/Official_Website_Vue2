import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/sswebsite/',
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: resolve => require(['@/view/NotFound'], resolve),
      meta: {
        title: '页面未找到'
      }
    }, {
      path: '/',
      // name: 'PageView',
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
            title: '产品列表',
            navHighlight: '产品列表'
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
              path: '/productList/electrical_testing_platform/power_automation_testing_system',
              name: 'Software_PowerAutomationTestingSystem',
              component: resolve => require(['@/view/Software_PowerAutomationTestingSystem'], resolve),
              meta: {
                title: '电源自动化测试系统',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/electrical_testing_platform/electronic_instruments',
              name: 'Software_ElectronicInstruments',
              component: resolve => require(['@/view/Software_ElectronicInstruments'], resolve),
              meta: {
                title: '多路通用智能测试系统',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/electrical_testing_platform/ultra_high_speed_voltage_load',
              name: 'Software_UltraHighSpeedVoltageLoad',
              component: resolve => require(['@/view/Software_UltraHighSpeedVoltageLoad'], resolve),
              meta: {
                title: '超高速 / 高压电子负载',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/electrical_testing_platform/intelligent_equipment',
              name: 'Software_IntelligentEquipment',
              component: resolve => require(['@/view/Software_IntelligentEquipment'], resolve),
              meta: {
                title: 'AGV协作机器人',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/force_testing_platform',
              redirect: '/productList/force_testing_platform/automated_system'
            },
            {
              path: '/productList/force_testing_platform/rotating_load_simulation_system',
              name: 'Software_RotatingLoadSimulationSystem',
              component: resolve => require(['@/view/Software_RotatingLoadSimulationSystem'], resolve),
              meta: {
                title: '旋转类负载模拟系统',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/force_testing_platform/linear_load_simulation_system',
              name: 'Software_LinearLoadSimulationSystem',
              component: resolve => require(['@/view/Software_LinearLoadSimulationSystem'], resolve),
              meta: {
                title: '直线类负载模拟系统',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/force_testing_platform/landing_bird_load_simulation_system',
              name: 'Software_LandingBirdLoadSimulationSystem',
              component: resolve => require(['@/view/Software_LandingBirdLoadSimulationSystem'], resolve),
              meta: {
                title: '起落架、铁鸟类负载模拟系统',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/force_testing_platform/customized_test_system',
              name: 'Software_CustomizedTestSystem',
              component: resolve => require(['@/view/Software_CustomizedTestSystem'], resolve),
              meta: {
                title: '定制化测试台模拟系统',
                navHighlight: '产品列表'
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
                title: '智能通用化负载监测平台',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/software_testing_platform/visual_recognition_platform',
              name: 'Software_VisualRecognitionPlatform',
              component: resolve => require(['@/view/Software_VisualRecognitionPlatform'], resolve),
              meta: {
                title: '视觉自动化检测及图像识别平台',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/software_testing_platform/software_platform',
              name: 'Software_SoftwarePlatform',
              component: resolve => require(['@/view/Software_SoftwarePlatform'], resolve),
              meta: {
                title: 'MES智能制造执行管理系统',
                navHighlight: '产品列表'
              }
            },
            {
              path: '/productList/software_testing_platform/customized_intelligent_solutions',
              name: 'Software_CustomizedIntelligentSolutions',
              component: resolve => require(['@/view/Software_CustomizedIntelligentSolutions'], resolve),
              meta: {
                title: '定制化智能化解决方案',
                navHighlight: '产品列表'
              }
            }
          ]
        }
        , {
          path: '/onlineDemo',
          name: 'onlineDemo',
          component: resolve => require(['@/view/ServiceDemo'], resolve),
          meta: {
            title: '演示demo',
            navHighlight: '演示demo'
          }
        }
        , {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '解决方案',
            navHighlight: '解决方案'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '公司介绍'
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
            title: '相关服务',
            navHighlight: '解决方案'
          }
        },
        // 在路由配置中添加新的路由项
        {
          path: '/visit_log',
          name: 'visitLog',
          component: resolve => require(['@/view/VisitLog'], resolve),
          meta: {
            title: '访问日志',
            navHighlight: '员工通道'
          }
        },
        // 添加员工登录路由
        {
          path: '/staff/login',
          name: 'staffLogin',
          component: resolve => require(['@/view/StaffLogin'], resolve),
          meta: {
            title: '员工登录',
            navHighlight: '员工通道'
          }
        },
        // 在路由配置中添加员工首页路由
        {
          path: '/staff_home',
          name: 'StaffHome',
          component: () => import('../view/StaffHome.vue'),
          meta: {
            title: '员工首页',
            navHighlight: '员工通道'
          }
        }

      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
