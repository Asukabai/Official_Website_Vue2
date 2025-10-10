<template>
  <div id="Software" class="container">
    <div class="row">
      <!-- 桌面端显示左侧菜单，移动端隐藏 -->
      <div v-if="!isMobile" id="left" class="col-md-2 col-md-offset-1 col-xs-12">
        <div class="menu-wrapper" :style="{ maxHeight: menuMaxHeight + 'px' }">
          <ul class="left-container wow bounceInLeft">
            <p>电性能负载测试平台</p>
            <li v-for="(item,index) in electricalList" :key="index" @click="$router.push(item.path)">
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
          </ul>
          <ul class="left-container wow bounceInLeft second-list">
            <p>力负载模拟测试平台</p>
            <li v-for="(item,index) in forceList" :key="index" @click="$router.push(item.path)">
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
          </ul>
          <ul class="left-container wow bounceInLeft second-list">
            <p>软件自动化管理平台</p>
            <li v-for="(item,index) in softwareList" :key="index" @click="$router.push(item.path)">
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- 右侧内容区域，移动端时占满整个宽度 -->
      <div :class="isMobile ? 'col-xs-12' : 'col-md-8 col-xs-12'" id="right" class="wow bounceInRight">
        <router-view></router-view>
      </div>
    </div>

    <!-- 在线咨询组件 - 仅在PC端显示 -->
    <OnlineConsultation v-if="!isMobile" />

    <!-- 悬浮返回首页按钮 - 仅在移动端显示 -->
    <div v-if="isMobile" class="floating-home-button" @click="goToHome"
         @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <span class="glyphicon glyphicon-home"></span>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import OnlineConsultation from "../components/OnlineConsultation.vue";
export default {
  name: 'Software',
  components: {OnlineConsultation},
  data(){
    return{
      isMobile: false,
      menuMaxHeight: 600, // 默认最大高度
      // 悬浮按钮相关状态
      isDragging: false,
      initialX: 0,
      initialY: 0,
      currentX: window.innerWidth - 70, // 初始X位置（右下角）
      currentY: window.innerHeight - 70, // 初始Y位置（右下角）
      // 用于处理拖拽的偏移量
      xOffset: 0,
      yOffset: 0,
      // 用于判断是点击还是拖动
      touchStartX: 0,
      touchStartY: 0,
      isTouchMoved: false,
      touchMoveThreshold: 10, // 触摸移动阈值（像素）
      softwareList: [
        {
          path: '/productList/software_testing_platform/automated_system',
          name: '智能通用化负载监测平台'
        },{
          path: '/productList/software_testing_platform/visual_recognition_platform',
          name: '视觉自动化检测及图像识别平台'
        },{
          path: '/productList/software_testing_platform/software_platform',
          name: 'MES智能制造执行管理系统'
        },{
          path: '/productList/software_testing_platform/customized_intelligent_solutions',
          name: '定制化智能化解决方案'
        }
      ],
      electricalList: [
        {
          path: '/productList/electrical_testing_platform/power_automation_testing_system',
          name: '电源自动化测试系统'
        },{
          path: '/productList/electrical_testing_platform/electronic_instruments',
          name: '多路通用智能测试系统'
        },{
          path: '/productList/electrical_testing_platform/ultra_high_speed_voltage_load',
          name: '超高速 / 高压电子负载'
        },{
          path: '/productList/electrical_testing_platform/intelligent_equipment',
          name: 'AGV协作机器人'
        }
      ],
      forceList: [
        {
          path: '/productList/force_testing_platform/rotating_load_simulation_system',
          name: '旋转类负载模拟系统'
        },{
          path: '/productList/force_testing_platform/linear_load_simulation_system',
          name: '直线类负载模拟系统'
        },{
          path: '/productList/force_testing_platform/landing_bird_load_simulation_system',
          name: '起落架、铁鸟类负载模拟系统'
        },{
          path: '/productList/force_testing_platform/customized_test_system',
          name: '定制化测试台模拟系统'
        }
      ]
    }
  },
  mounted() {
    // 更完整的移动设备检测，包括各种鸿蒙系统变体
    const ua = navigator.userAgent;
    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|OpenHarmony/i.test(ua);

    var wow = new WOW();
    wow.init();
    this.updateMenuHeight();
    window.addEventListener('resize', this.updateMenuHeight);

    // 设置悬浮按钮初始位置
    this.setFloatingButtonPosition();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateMenuHeight);
  },
  methods: {
    updateMenuHeight() {
      // 获取页眉和页脚的高度
      const header = document.getElementById('header');
      const footer = document.getElementById('footer');

      // 计算可用的垂直空间
      const headerHeight = header ? header.offsetHeight : 200;
      const footerHeight = footer ? footer.offsetHeight : 150;
      const windowHeight = window.innerHeight;

      // 设置菜单最大高度，留出一些间距
      this.menuMaxHeight = windowHeight - headerHeight - footerHeight - 40;
    },
    goToHome() {
      this.$router.push('/home');
    },
    setFloatingButtonPosition() {
      // 确保按钮在视口内
      const button = document.querySelector('.floating-home-button');
      if (button) {
        const buttonWidth = 60;
        const buttonHeight = 60;

        // 确保按钮不会超出屏幕
        this.currentX = Math.min(this.currentX, window.innerWidth - buttonWidth);
        this.currentY = Math.min(this.currentY, window.innerHeight - buttonHeight);

        // 限制最小位置
        this.currentX = Math.max(this.currentX, 0);
        this.currentY = Math.max(this.currentY, 0);

        button.style.left = this.currentX + 'px';
        button.style.top = this.currentY + 'px';
      }
    },
    handleTouchStart(e) {
      // 记录触摸开始位置
      const touch = e.touches[0];
      this.touchStartX = touch.clientX;
      this.touchStartY = touch.clientY;
      this.isTouchMoved = false;

      if (!this.isMobile) return;

      this.isDragging = true;

      const button = e.target;

      // 计算点击位置相对于按钮的偏移量
      const rect = button.getBoundingClientRect();
      this.xOffset = touch.clientX - rect.left;
      this.yOffset = touch.clientY - rect.top;

      this.initialX = touch.clientX - this.xOffset;
      this.initialY = touch.clientY - this.yOffset;
    },
    handleTouchMove(e) {
      if (!this.isDragging) return;

      const touch = e.touches[0];
      this.currentX = touch.clientX - this.xOffset;
      this.currentY = touch.clientY - this.yOffset;

      // 计算触摸移动距离
      const moveDistance = Math.sqrt(
        Math.pow(touch.clientX - this.touchStartX, 2) +
        Math.pow(touch.clientY - this.touchStartY, 2)
      );

      // 如果移动距离超过阈值，标记为已移动
      if (moveDistance > this.touchMoveThreshold) {
        this.isTouchMoved = true;
        e.preventDefault(); // 只有在实际拖动时才阻止默认行为

        const button = document.querySelector('.floating-home-button');
        if (button) {
          // 限制按钮在屏幕范围内
          const maxX = window.innerWidth - button.offsetWidth;
          const maxY = window.innerHeight - button.offsetHeight;

          this.currentX = Math.max(0, Math.min(this.currentX, maxX));
          this.currentY = Math.max(0, Math.min(this.currentY, maxY));

          button.style.left = this.currentX + 'px';
          button.style.top = this.currentY + 'px';
        }
      }
    },
    handleTouchEnd() {
      if (!this.isDragging) return;

      this.isDragging = false;

      // 如果没有移动过，则触发点击事件
      if (!this.isTouchMoved) {
        this.goToHome();
        return;
      }

      // 将按钮吸附到最近的边缘
      const button = document.querySelector('.floating-home-button');
      if (button) {
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // 计算到各边缘的距离
        const distanceToLeft = this.currentX;
        const distanceToRight = windowWidth - (this.currentX + buttonWidth);
        const distanceToTop = this.currentY;
        const distanceToBottom = windowHeight - (this.currentY + buttonHeight);

        // 找出最近的边缘
        const minDistance = Math.min(distanceToLeft, distanceToRight, distanceToTop, distanceToBottom);

        // 吸附到最近的边缘
        if (minDistance === distanceToLeft) {
          this.currentX = 0;
        } else if (minDistance === distanceToRight) {
          this.currentX = windowWidth - buttonWidth;
        }

        if (minDistance === distanceToTop) {
          this.currentY = 0;
        } else if (minDistance === distanceToBottom) {
          this.currentY = windowHeight - buttonHeight;
        }

        button.style.left = this.currentX + 'px';
        button.style.top = this.currentY + 'px';
      }
    }
  }
}
</script>
<style scoped>
/* 产品列表左侧样式 */
#left {
  padding: 0px;
}

.left-container {
  padding: 0;
  margin-bottom: 20px;
}

.left-container p {
  font-weight: bold;
  font-size: 18px;
  margin: 15px 0 10px;
  color: #333;
}

.left-container li {
  list-style: none;
  padding: 10px 15px;
  margin: 5px 0;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.left-container li:hover {
  background: #e0e0e0;
}

.left-container li a {
  color: #333;
  text-decoration: none;
  display: block;
}

.left-container li a:hover {
  color: #1e73be;
}

.second-list {
  margin-top: 20px;
}

.menu-wrapper {
  overflow-y: auto;
  padding-right: 10px;
}

.menu-wrapper::-webkit-scrollbar {
  width: 6px;
}

.menu-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.menu-wrapper::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.menu-wrapper::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 移动端悬浮返回首页按钮样式 */
.floating-home-button {
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1e73be;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  z-index: 9999;
  transition: transform 0.2s;
  font-size: 24px;
  /* 初始位置在右下角 */
  right: 25px;
  bottom: 80px;
}

.floating-home-button:active {
  transform: scale(0.95);
}

.floating-home-button span.glyphicon {
  font-size: 28px;
}

/* 右侧内容区域样式 */
#right {
  padding: 20px;
}

.product-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 2px solid #1e73be;
  padding-bottom: 10px;
}

.product-description {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
}

.product-features {
  margin-top: 30px;
}

.product-features h4 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

.features-list {
  list-style-type: none;
  padding: 0;
}

.features-list li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}

.features-list li:before {
  content: "•";
  color: #1e73be;
  font-weight: bold;
  display: inline-block;
  width: 20px;
  font-size: 24px;
  line-height: 1;
}

.product-image {
  margin-top: 30px;
  text-align: center;
}

.product-image img {
  max-width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* 响应式布局调整 */
@media (max-width: 768px) {
  #Software {
    padding: 15px;
  }

  #left, #right {
    width: 100%;
    margin-bottom: 20px;
  }

  /* 移动端时右侧内容占满整个宽度 */
  #right {
    padding: 0 15px;
  }
}
</style>
