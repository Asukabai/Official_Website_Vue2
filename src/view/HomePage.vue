<!-- src/view/HomePage.vue -->
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


    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive" src="../assets/img/多路输出.png" alt="多路输出电源通用测试系统">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="bigData-title">
            多路输出电源通用测试单元
            <small>/ SS-STM-MCTS-03</small>
          </h2>
          <p>小型化、便携式、模块化通用测试单元 ; 多路电源自动化测试(20通道并行+72小时不间断自动测试）</p>
          <p>晟思SS-STM-MCTS系列多路输出电源通用自动化测试单元遵循模块化、智能化、可扩展等先进设计思路，具有带载能力强、采集精度高，配置灵活、功能强大等特点。解决了设备连接复杂、体积大、采样不同步导致的相位偏移等痛点，时序采集精度高达5μs。</p>
<!--          <h2 class="bigData-device">多功能/大容量/高精度 &nbsp; 全自动</h2>-->
          <h3 class="bigData-device">多功能/大容量/高精度/全自动</h3>
<!--          <a href="#" class="btn btn-lg btn-block btn-info">查看详情</a>-->
<!--          <a href="#" class="btn btn-lg btn-block custom-info-btn">查看详情</a>-->
<!--          <a href="#" class="btn btn-lg btn-block custom-info-btn half-width-btn">查看详情</a>-->
          <router-link to="/software/electronic_instruments" class="btn btn-lg btn-block custom-info-btn half-width-btn">查看详情</router-link>

        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive" src="../assets/img/智能通用化负载监测平台.png" alt="智能通用化负载监测平台">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6" style="margin-top: 50px;">
          <h2 class="bigData-title">
            智能通用化负载监测平台
            <small>/ SS-SYS-MCTS-03</small>
          </h2>
          <p><strong>智能通用化负载监测平台是专为电源设备测试设计的高精度、多功能测试系统。该平台采用模块化设计，具备强大的数据采集和分析能力，能够满足各种复杂测试场景的需求。</strong></p>
          <p>平台支持多路信号同步采集，时序精度高达5μs，能够准确捕捉电源设备在各种工作状态下的性能参数，为产品质量控制和研发优化提供可靠的数据支撑。</p>
          <!--          <h2 class="bigData-device">多功能/大容量/高精度 &nbsp; 全自动</h2>-->
          <h3 class="bigData-device">易操作/适配强/可扩展/高可用</h3>
          <!--          <a href="#" class="btn btn-lg btn-block btn-info">查看详情</a>-->
<!--          <a href="http://192.168.67.58:22324/ssmonitor/web/login" class="btn btn-lg btn-block custom-info-btn half-width-btn">预览展示（用户名 ss ；密码 123456）</a>-->
<!--          在新页面中打开预览网址    -->
          <a href="http://192.168.67.58:22324/ssmonitor/web/login" class="btn btn-lg btn-block custom-info-btn half-width-btn" target="_blank">预览展示（用户名 ss ；密码 123456）</a>

        </div>
      </div>
    </div>

    <!-- 您身边的IT专家 -->
<!--    <div id="contactUs" class="container-fuild text-center">-->
<!--      <div class="container contactUs-container wow slideInUp">-->
<!--        <h1>专业的仪器仪表集成供应商</h1>-->
<!--        <h3>电力电子领域和硬件测试领域工业4.0系统方案提供商的领导者</h3>-->
<!--        <button-->
<!--          class="btn btn-default btn-sm"-->
<!--          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"-->
<!--          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"-->
<!--        >联系我们</button>-->
<!--        <div class="contactUs-contactWay">-->
<!--          <span></span>-->
<!--          <span></span>-->
<!--          <span></span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

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
              <div class="customer-yh">
                <img src="../assets/img/yinhao.png" alt="引号">
              </div>
              <div class="customer-content1">
                <small>{{ item.content }}</small>
              </div>
              <div class="customer-content2">{{ item.title }}</div>
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

    <!-- 在线咨询组件 -->
    <OnlineConsultation />
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
      swiperList: [
        {
          img: require("@/assets/img/banner.png"),
          path: "",
          title: '电力电子领域和硬件测试领域工业4.0系统方案提供商的领导者',
          content: '助力企业打造智能工厂，实现精益生产、降本增效，选型-售前售后技术支持-售后无忧',
        },
        {
          img: require("@/assets/img/banner2.jpg"),
          path: "",
          title: '助力测控装备数字化，助推高端制造智能化',
          content: '助力企业打造智能工厂，实现精益生产、降本增效，选型-售前售后技术支持-售后无忧',
        },
        {
          img: require("@/assets/img/banner.png"),
          path: "",
          title: '高端制造行业、智能测控领域独具特色的领先者',
          content: '30+ 合作品牌，100+ 客户建立长期合作关系，选型-售前售后技术支持-售后无忧',
        },
        {
          img: require("@/assets/img/banner2.jpg"),
          path: "",
          title: '专注于工业自动化测控领域的创新型高科技公司',
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
  height: 600px;
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
    font-size: 16px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 48px;
    height: 48px;
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
