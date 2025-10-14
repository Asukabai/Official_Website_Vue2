import Vue from 'vue'
import App from './App'

/* 路由 */
import router from './router'

/* axios */
import SensorRequest from './api/SensorRequest.js' // 引入SensorRequest

/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 *
 * 中文组件官网：
 *
 * https://v3.bootcss.com/components/
 *
 */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'


/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

Vue.config.productionTip = false
import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

// 记录访问日志函数 - 使用saveLogServer接口
function recordVisitLog(pagePath) {
  try {
    // 用户类型判断（新用户/老用户）
    const userId = localStorage.getItem('userId');
    let userType = 'new';
    let currentUserId = userId;

    if (!userId) {
      // 新用户，生成唯一标识
      currentUserId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', currentUserId);
      userType = 'new';
      console.log('【访问日志】检测到新用户，已生成用户ID:', currentUserId);
    } else {
      userType = 'returning';
      console.log('【访问日志】检测到回访用户，用户ID:', currentUserId);
    }

    // 构造符合要求格式的请求体数据
    const logData = {
      timestamp: new Date().toISOString(),
      page: pagePath,
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenSize: `${screen.width}x${screen.height}`,
      referrer: document.referrer,
      url: window.location.href,
      userType: userType,
      userId: currentUserId,
      latitude: null,
      longitude: null,
      locationAccuracy: null,
      locationMethod: 'unsupported'
    };

    console.log('【访问日志】准备发送的数据:', JSON.stringify(logData, null, 2));

    // 调用后端saveLogServer接口保存访问日志
    SensorRequest.saveLogServer(logData,
      (respData) => {
        console.log('【访问日志】日志记录成功，响应数据:', respData);
      },
      (error) => {
        console.error('【访问日志】日志记录失败:', error);
      }
    );
  } catch (error) {
    console.error('【访问日志】日志收集失败:', error);
  }
}


router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  // 记录访问日志
  recordVisitLog(to.fullPath);
  next();
});


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
