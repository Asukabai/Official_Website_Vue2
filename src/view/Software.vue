<template>
  <div id="Software" class="container">
    <div class="row">
      <div id="left" class="col-md-3 col-md-offset-1 col-xs-12">
        <div class="menu-wrapper" :style="{ maxHeight: menuMaxHeight + 'px' }">
          <ul class="left-container wow bounceInLeft">
            <p>电性能负载测试平台</p>
            <li v-for="(item,index) in electricalList" :key="index" @click="$router.push(item.path)">
              <router-link :to=item.path>{{item.name}}</router-link>
            </li>
          </ul>
          <ul class="left-container wow bounceInLeft second-list">
            <p>力负载模拟测试平台</p>
            <li v-for="(item,index) in forceList" :key="index" @click="$router.push(item.path)">
              <router-link :to=item.path>{{item.name}}</router-link>
            </li>
          </ul>
          <ul class="left-container wow bounceInLeft second-list">
            <p>软件自动化管理平台</p>
            <li v-for="(item,index) in softwareList" :key="index" @click="$router.push(item.path)">
              <router-link :to=item.path>{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div id="right" class="col-md-7 col-xs-12  wow bounceInRight">
        <router-view></router-view>
      </div>
    </div>
    <!-- 在线咨询组件 - 仅在PC端显示 -->
    <OnlineConsultation v-if="!isMobile" />
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
    }
  }
}
</script>
<style scoped>
#left{
  margin: 50px 0;
}
.menu-wrapper {
  position: fixed;
  width: 200px; /* 根据实际需要调整 */
  top: 200px; /* 根据header高度调整，避免被遮挡 */
  overflow-y: auto; /* 允许垂直滚动 */
}
.left-container{
  width: 100%;
  border: 1px solid #3F83F8;
  border-radius: 5px;
}
.left-container>p{
  text-align: center;
  line-height: 45px;
  padding: 0;
  margin: 0;
  background: #3F83F8;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.left-container>li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  border-top: 1px solid #3F83F8;
  cursor: pointer;
}
.left-container>li>a{
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.left-container>li:hover{
  background: #928989;
}

.second-list {
  margin-top: 30px;
}

#right{
  padding: 50px 0;
}
@media screen and (max-width: 768px){
  #right{
    padding: 15px;
  }
  .menu-wrapper {
    position: static;
    width: auto;
    max-height: none !important;
    overflow-y: visible;
  }
}
</style>

