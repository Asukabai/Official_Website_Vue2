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
      loading: false, // 防止重复点击
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
      // 防止重复点击
      if (this.loading) {
        return;
      }

      this.loading = true;

      // 创建加载提示元素
      const loadingElement = document.createElement('div');
      loadingElement.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    background: rgba(0,0,0,0.8); color: white; padding: 20px; border-radius: 8px;
                    z-index: 9999; text-align: center; min-width: 200px;">
          <div>正在检查演示环境...</div>
          <div style="margin-top: 10px; font-size: 12px;">请稍候</div>
        </div>
      `;
      document.body.appendChild(loadingElement);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      // 定义服务配置
      let serviceConfig = {};
      if (index === 0) {
        serviceConfig = {
          name: '智能通用化负载监测平台',
          checkUrl: window.location.origin + "/ssmonitor/web/login",
          redirectUrl: window.location.origin + "/ssmonitor/web/login"
        };
      } else if (index === 1) {
        serviceConfig = {
          name: '3D仿真模拟测试平台',
          checkUrl: window.location.origin + "/ss3dsimulation/home/",
          redirectUrl: window.location.origin + "/ss3dsimulation/home/"
        };
      } else {
        this.cleanup(loadingElement, timeoutId);
        this.loading = false;
        return;
      }

      // 使用 POST 请求进行检查，发送空对象
      fetch(serviceConfig.checkUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}),
        signal: controller.signal,
        cache: 'no-cache'
      }).then(async response => {
        // 检查响应是否为JSON格式
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          // 如果是JSON响应，认为服务正常
          try {
            await response.json(); // 消费响应体
            this.cleanup(loadingElement, timeoutId);
            this.loading = false;
            window.open(serviceConfig.redirectUrl, '_blank');
          } catch (e) {
            throw new Error('Invalid JSON response');
          }
        } else {
          // 如果不是JSON响应（如HTML页面），认为服务不存在 错误抛出：错误会被 .catch(error => { ... }) 块捕获处理
          // 由于抛出的是普通 Error 对象，会进入最后一个 else 分支：
          // 显示提示信息：弹出 "暂时无法访问" 的警告框
          // 清理资源：调用 cleanup 方法移除加载提示元素并清除超时定时器
          // 重置状态：将 loading 状态设为 false，允许用户再次点击
          throw new Error('Non-JSON response received');
        }
      }).catch(error => {
        this.cleanup(loadingElement, timeoutId);
        this.loading = false;
        if (error.name === 'AbortError') {
          alert(`请求超时，${serviceConfig.name}演示环境连接超时，请检查网络连接或稍后再试！`);
        } else if (error.name === 'TypeError') {
          // 网络错误，可能是404或其他连接问题
          alert('抱歉，暂时无法访问 ！');
        } else {
          // 其他错误，如非JSON响应
          alert('抱歉，暂时无法访问 ！');
        }
      });
    },

    // 清理函数
    cleanup(loadingElement, timeoutId) {
      clearTimeout(timeoutId);
      if (document.body.contains(loadingElement)) {
        document.body.removeChild(loadingElement);
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
