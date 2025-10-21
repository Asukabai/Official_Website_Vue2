<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图">
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <h1>{{ item.title }}</h1>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>

    <!-- 宫格布局 -->
    <div id="productGrid" class="container-fuild">
      <div class="container product-grid-container">
        <!-- 第一组：电性能负载测试平台 -->
        <div class="row grid-section">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <h2 class="grid-title">电性能负载测试平台</h2>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/electrical_testing_platform/power_automation_testing_system')">
              <img src="../assets/img/电源自动化测试系统-首页图.png" alt="电源自动化测试系统" class="grid-image">
              <div class="grid-text">
                <p><strong>电源自动化测试系统</strong></p>
                <p>类别：固定测试系统<br>宇航级、民用级、特种电源测试、微小放电测试等 ；</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/electrical_testing_platform/electronic_instruments')">
              <img src="../assets/img/多路测试系统_首页图.png" alt="多路通用智能测试系统" class="grid-image">
              <div class="grid-text">
                <p><strong>多路通用智能测试系统</strong></p>
                <p>类别：固定测试系统<br>全面特性测试，高度集成，小型化，可长时间老练测试 ；</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/electrical_testing_platform/ultra_high_speed_voltage_load')">
              <img src="../assets/img/电子负载_首页图.png" alt="超高速 / 高压电子负载" class="grid-image">
              <div class="grid-text">
                <p><strong>超高速 / 高压电子负载</strong></p>
                <p>类别：固定测试系统<br>连续工作模式+脉冲工作模式，数字化控制、稳定可靠 ；</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/electrical_testing_platform/intelligent_equipment')">
              <img src="../assets/img/AGV_首页图.png" alt="AGV协作机器人" class="grid-image">
              <div class="grid-text">
                <p><strong>AGV协作机器人</strong></p>
                <p>类别：移动测试系统<br>自动导航、避障、定位校正、射频电缆自动对接、自动测试、上传数据 ；</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第二组：力负载模拟测试平台 -->
        <div class="row grid-section">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <h2 class="grid-title">力负载模拟测试平台</h2>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/force_testing_platform/rotating_load_simulation_system')">
              <img src="../assets/img/力学负载模拟系统.png" alt="旋转类负载模拟系统" class="grid-image">
              <div class="grid-text">
                <p><strong>旋转类负载模拟系统</strong></p>
                <p>转动惯量：120kg·m² ～ 200kg·m²<br>力矩可调范围：700～3500N·m<br>负载台转角精度：0.01°</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/force_testing_platform/linear_load_simulation_system')">
              <img src="../assets/img/直线类负载模拟_首页图.png" alt="直线类负载模拟系统" class="grid-image">
              <div class="grid-text">
                <p><strong>直线类负载模拟系统</strong></p>
                <p>静态加载力：±1%FS<br>传动机构刚度：≥1X109N/m<br>力测量精度：≤0.1%FS</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/force_testing_platform/landing_bird_load_simulation_system')">
              <img src="../assets/img/起落架负载模拟系统_首页图.png" alt="起落架、铁鸟类负载模拟系统" class="grid-image">
              <div class="grid-text">
                <p><strong>起落架、铁鸟类负载模拟系统</strong></p>
                <p>加载力矩控制：精度±2%<br>转弯力矩：大于4000Nm<br>支柱定向转角：±15°、±30°</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/force_testing_platform/customized_test_system')">
              <img src="../assets/img/定制化测试台模拟系统.png" alt="定制化测试台模拟系统" class="grid-image">
              <div class="grid-text">
                <p><strong>定制化测试台模拟系统</strong></p>
                <p>加载精度：±5% <br>角速度平稳性：±0.3%（360°平均）<br>回转精度 ：≤10°°</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第三组：软件自动化平台 -->
        <div class="row grid-section">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <h2 class="grid-title">软件自动化平台，监测管理，仿真识别测试系统</h2>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/software_testing_platform/automated_system')">
              <img src="../assets/img/智能通用化负载监测平台.png" alt="智能通用化负载监测平台" class="grid-image">
              <div class="grid-text">
                <p><strong>智能通用化负载监测平台</strong></p>
                <p>支持多路信号同步采集，时序精度高达5μs</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/software_testing_platform/visual_recognition_platform')">
              <img src="../assets/img/视觉检测_首页图.png" alt="视觉自动化检测及图像识别平台" class="grid-image">
              <div class="grid-text">
                <p><strong>视觉自动化检测及图像识别平台</strong></p>
                <p>高精度缺陷检测，支持包括焊点、元件、线路等多种缺陷类型检测</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/software_testing_platform/software_platform')">
              <img src="../assets/img/MES_首页图.png" alt="MES智能制造执行管理系统" class="grid-image">
              <div class="grid-text">
                <p><strong>MES智能制造执行管理系统</strong></p>
                <p>助力企业打造智能工厂，实现精益生产</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 grid-item">
            <div class="grid-content" @click="$router.push('/productList/software_testing_platform/customized_intelligent_solutions')">
              <img src="../assets/img/定制化_首页图.png" alt="定制化智能化解决方案" class="grid-image">
              <div class="grid-text">
                <p><strong>定制化智能化解决方案</strong></p>
                <p>提供完整的机、电、控、软整体解决方案</p>
              </div>
              <div class="overlay">
                <div class="overlay-text">点击查看详情</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>为什么选择我们的服务</p>
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
            v-for="(item, index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="center-block" :src="item.logo" alt="logo">
              <p class="text-center">{{ item.title }}</p>
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>




    <!-- 客户评价 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="customer-title text-center">合作客户</p>
        <div class="swiper-container customer-swiper hidden-xs">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide customer-block"
              v-for="(item, index) in customerList"
              :key="index"
            >
              <div class="customer-logo">
                <img class="center-block" :src="item.logo" alt="logo">
              </div>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="row visible-xs customer-block">
          <div class="col-xs-12" v-for="(item, index) in customerList" :key="index">
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo">
            </div>
            <div class="customer-yh">
              <img src="../assets/img/yinhao.png" alt="引号">
            </div>
            <div class="customer-content1">
              <small>{{ item.content }}</small>
            </div>
            <div class="customer-content2">
              <small>{{ item.title }}</small>
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
import Swiper from "swiper";
import { WOW } from 'wowjs';
import OnlineConsultation from '../components/OnlineConsultation.vue'; // 引入组件

export default {
  name: "HomePage",
  components: {
    OnlineConsultation // 注册组件
  },
  data() {
    return {
      isMobile: false,
      swiperList: [
        {
          img: require("@/assets/img/background.png"),
          path: "",
          title: '电力电子领域和硬件测试领域工业4.0系统方案提供商的领导者',
          content: '助力企业打造智能工厂，实现精益生产、降本增效，选型-售前售后技术支持-售后无忧',
        },
        {
          img: require("@/assets/img/background(2).png"),
          path: "",
          title: '助力测控装备数字化，助推高端制造智能化',
          content: '助力企业打造智能工厂，实现精益生产、降本增效，选型-售前售后技术支持-售后无忧',
        },
        {
          img: require("@/assets/img/background(1).png"),
          path: "",
          title: '高端制造行业、智能测控领域独具特色的领先者',
          content: '30+ 合作品牌，100+ 客户建立长期合作关系，选型-售前售后技术支持-售后无忧',
        }
      ],
      customerList: [
        {
          logo: require("../assets/img/中国空间技术研究院.jpg"),
        },
        {
          logo: require("../assets/img/中核集团.png"),
        },
        {
          logo: require("../assets/img/中国电科.png"),
        },        {
          logo: require("../assets/img/中国煤科.png"),
        },{
          logo: require("../assets/img/北方工业.png"),
        },{
          logo: require("../assets/img/中国电子.png"),
        },
      ],
      serverList: [
        {
          logo: require("../assets/img/skill.png"),
          title: "优势一：技术全面",
          content: "机(机械)，电(电力电子)，控(自动化控制)，软(软件平台)整体解决方案"
        },
        {
          logo: require("@/assets/img/computer.png"),
          title: "优势二：多种独有技术",
          content: "独有射频测试技术；独有负载模拟技术；独有电机控制技术"
        },
        {
          logo: require("../assets/img/理念.png"),
          title: "优势三：理念创新",
          content: "设备和理念引领行业，独居特色，与众不同"
        },
        {
          logo: require("../assets/img/闪电.png"),
          title: "优势四：快速响应",
          content: "能快速搭建测试实验环境，有效测试，自动化测试"
        }
      ]
    };
  },
  mounted() {
    // 更完整的移动设备检测，包括各种鸿蒙系统变体
    const ua = navigator.userAgent;
    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|OpenHarmony/i.test(ua);
    /* banner-swiper 用于初始化 Swiper 轮播图的配置 delay: 3000：每张图片停留 3 秒。
     stopOnLastSlide: false：到达最后一张后继续循环播放。
     disableOnInteraction: false：用户手动滑动时不会停止自动播放。*/
    new Swiper(".banner-swiper", {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      lazy: {
        loadPrevNext: true
      },
      observer: true,
      observeParents: true
    });

    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true,
      slidesPerView: 3,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true,
      observeParents: true
    });

    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  }
};
</script>

<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

.custom-info-btn {
  background-color: #3f83f8;
  border-color: #3f83f8;
  color: white;
}

/* 轮播图 */
#swiper {
  height: 630px;
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide {
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 50px;
  margin-top: 12%;
}
#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}

/* 大数据管理系统 */
#bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}
#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}
#contactUs .contactUs-container {
  padding-top: 50px;
}
#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}
#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/weibo.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/twitter.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

/* 客户评价 */
#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}
#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}
#customer .customer-block {
  background: #fff;
  padding: 30px;
}
#customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid #ccc;
}
#customer .customer-yh img {
  width: 34px;
  height: 34px;
}
#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}
#customer .customer-content2 {
  padding-top: 20px;
}

/* 将.half-width-btn类中的margin: 0 auto;改为margin: 0;
这样按钮就会左对齐，而不是居中对齐*/

.half-width-btn {
  width: 50%;
  margin: 0 ;
}

/* 宫格布局样式 */
#productGrid {
  padding: 50px 0;
  background-color: #EFEFEF;
}

.product-grid-container {
  max-width: 1200px;
  margin: 0 auto;
}

.grid-section {
  margin-bottom: 40px;
}

.grid-title {
  font-size: 23px;
  color: #333;
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 4px solid #3f83f8;
}

.grid-item {
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
}

.grid-content {
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  min-height: 200px;
  transform-style: preserve-3d;
}

.grid-content:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border-color: #d0d0d0;
}

.grid-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.grid-content:hover .grid-image {
  transform: scale(1.05);
}

.grid-text {
  padding: 15px;
  font-size: 14px;
  line-height: 1.6;
  color: #555;
}

.grid-text strong {
  display: block;
  margin-bottom: 10px;
  color: #3f83f8;
  z-index: 1;
  font-weight: 600;
  font-size: 16px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(63, 131, 248, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.grid-content:hover .overlay {
  opacity: 1;
}

.overlay-text {
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
}

/* 响应式调整 */
@media screen and (max-width: 768px) {
  .grid-section {
    margin-bottom: 30px;
  }

  .grid-title {
    font-size: 15px;
    margin-bottom: 13px;
  }

  .grid-item {
    margin-bottom: 15px;
  }

  .grid-content {
    margin-bottom: 10px;
    border-radius: 8px;
  }

  .grid-image {
    height: 120px;
  }

  .grid-text {
    padding: 12px 10px;
    font-size: 10px;
  }

  .grid-content:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  .overlay-text {
    font-size: 16px;
    padding: 10px;
  }
}



/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
}
#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}
#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}
#whyChooseUs .server-block img {
  width: 48px;
  height: 48px;
}
#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}
#whyChooseUs .server-block > div {
  color: #ccc;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }
  #swiper .banner-swiper .swiper-slide-title > h1 {
    font-size: 24px;
    margin-top: 10%;
  }
  #swiper .banner-swiper .swiper-slide-title > p {
    font-size: 12px;
    margin-top: 2%;
  }
  /* 添加九宫格标题字体大小调整 */
  .grid-title {
    font-size: 16px !important;
    margin-bottom: 10px;
  }

  .grid-text strong {
    font-size: 11px !important;
  }

  .grid-text p {
    font-size: 8px !important;
  }

  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }
  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }
  #customer .customer-title {
    font-size: 22px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 90px;
    height: 90px;
  }
  #customer .customer-block {
    padding: 30px;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }
  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}


/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }
  #swiper .banner-swiper .swiper-slide-title > h1 {
    font-size: 36px;
    margin-top: 10%;
  }
  #swiper .banner-swiper .swiper-slide-title > p {
    font-size: 16px;
    margin-top: 1%;
  }
  #bigData {
    padding: 60px;
  }
  #bigData .bigData-title {
    font-size: 30px;
  }
  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }
  #contactUs {
    height: 300px;
  }
  #contactUs .contactUs-container {
    padding-top: 50px;
  }
  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }
  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }
  #customer .customer-title {
    font-size: 24px;
  }
  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>
