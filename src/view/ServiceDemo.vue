<template>
  <div id="Service">
    <div class="container text-center">
      <h3>在线预览</h3>
      <p style="color:#b2b2b2">Click to preview the website online</p>
    </div>
    <div class="container">
      <div class="Service-container row">
        <div :class="['Service-item', 'col-xs-12', 'col-sm-6', colClass, 'wow', 'slideInUp']"
             v-for="(item,index) in serviceList" :key="index" @click="handleServiceClick(item, index)">
          <div class="Service-item-wrapper">
            <!-- 固定高度的卡片容器 -->
            <div class="Service-item-content">
              <div class="Service-item-top">
                <h4>{{item.title}}</h4>
                <i></i>
                <p>{{item.eng_title}}</p>
              </div>
              <div class="Service-item-img">
                <img :src="item.img" alt="服务">
              </div>
              <div class="Service-item-border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 在线咨询组件 - 仅在PC端显示 -->
    <OnlineConsultation v-if="!isMobile" />
  </div>
</template>
<script>
import { WOW } from 'wowjs';
import OnlineConsultation from "../components/OnlineConsultation.vue";
export default {
  name: 'Service',
  components: {OnlineConsultation},
  data(){
    return{
      isMobile: false,
      serviceList: [{
        id: 'section-1',
        title: '智能通用化负载监测平台',
        eng_title: 'Outsourcing',
        img: require('../assets/img/智能通用化负载监测平台.png')
      },
        {
          id: 'section-2',
          title: '3D仿真模拟测试平台',
          eng_title: 'Monitoring System',
          img: require('../assets/img/3d仿真平台.png')
        }]
    }
  },
  computed: {
    colClass() {
      const count = this.serviceList.length;
      if (count === 1) return 'col-md-12';
      if (count === 2) return 'col-md-6';
      if (count === 3) return 'col-md-4';
      return 'col-md-3';
    }
  },
  mounted(){
    // 更完整的移动设备检测，包括各种鸿蒙系统变体
    const ua = navigator.userAgent;
    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|OpenHarmony/i.test(ua);

    const wow = new WOW();
    wow.init();
  },
  methods:{
    handleServiceClick(item, index) {
      // 提取公共检查逻辑为独立函数（改为同步方式）
      const checkAndOpenDemo = (checkUrl, redirectUrl, serviceName) => {
        // 防止重复点击
        if (this.loading) {
          return;
        }

        this.loading = true;

        // 创建加载提示元素而不是使用alert
        const loadingElement = document.createElement('div');
        loadingElement.innerHTML = `
          <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                      background: rgba(0,0,0,0.8); color: white; padding: 20px; border-radius: 8px;
                      z-index: 9999; text-align: center;">
            <div>正在检查${serviceName}演示环境...</div>
            <div style="margin-top: 10px; font-size: 12px;">请稍候</div>
          </div>
        `;
        document.body.appendChild(loadingElement);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        // 使用 HEAD 请求进行检查，更适合验证页面可用性
        fetch(checkUrl, {
          method: 'GET',
          signal: controller.signal
        }).then(response => {
          // 关键改进：检查 HTTP 状态码，只有 2xx 状态才认为是成功
          if (response.ok) { // response.ok 表示状态码在 200-299 范围内
            clearTimeout(timeoutId);
            document.body.removeChild(loadingElement);
            this.loading = false;
            // 只有检查成功才跳转到相对路径URL
            window.open(redirectUrl, '_blank');
          } else {
            // 状态码不是 2xx，认为服务不可用
            throw new Error(`HTTP ${response.status}`);
          }
        }).catch(error => {
          // 处理错误情况
          clearTimeout(timeoutId);
          if (document.body.contains(loadingElement)) {
            document.body.removeChild(loadingElement);
          }
          this.loading = false;

          if (error.name === 'AbortError') {
            alert(`请求超时，${serviceName}演示环境连接超时，请检查网络连接或稍后再试！`);
          } else if (error.name === 'TypeError') {
            alert(`网络连接失败，无法连接到${serviceName}演示环境，请检查网络设置！`);
          } else {
            // 其他错误，如 HTTP 错误状态码
            alert(`${serviceName}演示环境暂时不可用，请稍后再试！`);
          }
        });
      };

      // // 处理第一个卡片点击事件（索引0）
      // if (index === 0) {
      //   const redirectUrl = window.location.origin + "/ssmonitor/web/login";
      //   // 使用完整URL进行检查，避免被Vue Router拦截
      //   const checkUrl = "https://www.sensor-smart.com/ssmonitor/web/login"; // 请替换为实际域名
      //   checkAndOpenDemo(checkUrl, redirectUrl, '智能通用化负载监测平台');
      //   return;
      // }
      // // 处理第二个卡片点击事件（索引1）
      // if (index === 1) {
      //   const redirectUrl = window.location.origin + "/ss3dsimulation/home/";
      //   // 使用完整URL进行检查，避免被Vue Router拦截
      //   const checkUrl = "https://www.sensor-smart.com/ss3dsimulation/home/"; // 请替换为实际域名
      //   checkAndOpenDemo(checkUrl, redirectUrl, '3D仿真模拟测试平台');
      //   return;
      // }

      // 处理第一个卡片点击事件（索引0）
      if (index === 0) {
        const redirectUrl = window.location.origin + "/ssmonitor/web/login";
        // 使用代理URL进行检查，避免CORS问题
        const checkUrl = "/api/ssmonitor/web/login";
        checkAndOpenDemo(checkUrl, redirectUrl, '智能通用化负载监测平台');
        return;
      }
// 处理第二个卡片点击事件（索引1）
      if (index === 1) {
        const redirectUrl = window.location.origin + "/ss3dsimulation/home/";
        // 使用代理URL进行检查，避免CORS问题
        const checkUrl = "/api/ss3dsimulation/home/";
        checkAndOpenDemo(checkUrl, redirectUrl, '3D仿真模拟测试平台');
        return;
      }
    }
  }
}
</script>

<style scoped>
.Service-container{
  padding: 30px 50px;
}
.Service-item{
  margin-bottom: 50px;
}
/* 固定卡片高度容器 */
.Service-item-wrapper {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  /* 保持与4列布局相同的高度比例 (16:9) */
  padding-top: 56.25%; /* 9/16 = 0.5625 */
  height: 0;
}
.Service-item-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(244,244,244,1);
}
.Service-item-top{
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}
.Service-item-top>i{
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}
.Service-item-top>p{
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all .5s ease;
}
.Service-item-img{
  width: 100%;
  height: calc(100% - 180px); /* 120px(top) + 60px(padding) */
  overflow: hidden;
}
.Service-item-img img{
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持比例并覆盖容器 */
  transition: all 0.5s ease;
}
.Service-item-border{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border: 1px solid #000;
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i{
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > p{
  opacity: 1;
  transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img{
  transform: scale(1.1,1.1);
}
.Service-item-wrapper:hover > .Service-item-border{
  opacity: 1;
  width: 90%;
  height: 90%;
}
</style>
