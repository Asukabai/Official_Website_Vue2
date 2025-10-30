<template>
  <div id="ContactUs">
    <div class="banner container-fluid text-center">欢迎咨询</div>
    <div class="container">
      <div class="container-fluid ContactUs-container">
        <div class="row">
          <!-- 左侧商务介绍 -->
          <div class="col-lg-7 col-md-12 business-info">
            <div class="business-content">
              <h3>商务联系</h3>
              <div class="contact-details">
                <p><strong>全国客户咨询服务热线 ：</strong></p>
                <p class="phone-number" @click="copyToClipboard('18629057799')">18629057799</p>
                <p><strong>总部地址：</strong>陕西省西安市长安区建工科技创业基地2号楼1单元5层6层 </p>
                <p><strong>山西分公司地址：</strong>山西省太原市尖草坪区国科大南街晋创谷太原一号厂房 </p>
              </div>
              <!-- 添加地图图片 -->
              <div class="map-container">
                <img src="../assets/img/地图3.png" alt="公司位置地图" class="contact-map" @click="openMapModal" title="点击放大查看">
              </div>
            </div>
          </div>

          <!-- 右侧招聘信息 -->
          <div class="col-lg-5 col-md-12 recruitment-info">
            <div class="content-section">
              <div class="recruitment-header">
                <h3>招聘信息</h3>
                <div class="recruitment-contact">
                  <span>联系方式：</span>
                  <span class="contact-phone" @click="copyToClipboard('029-85820585')">029-85820585</span>
                </div>
                <div class="recruitment-contact">
                  <span>电子邮箱：</span>
                  <span><strong>hr@sensor-smart.com</strong></span>
                </div>
              </div>
              <!-- 电源研发工程师 -->
              <div class="job-post">
                <h4 @click="toggleJobDetail('power')" class="job-title">
                  电源研发工程师
                  <span class="toggle-icon">{{ expandedJobs.power ? '▲' : '▼' }}</span>
                </h4>
                <div class="job-details" :class="{ 'collapsed': !expandedJobs.power }">
                  <p><strong>岗位职责：</strong></p>
                  <ul>
                    <li>负责开关电源产品硬件设计、器件选型、原理图 PCB 绘制等工作；</li>
                    <li>负责开发电源类产品相关模块、调试验证、确保产品的可靠性、功能性满足指标要求；</li>
                    <li>优化或维护更新已有的产品，针对新老产品问题能够提供解决方案；</li>
                    <li>负责编写相关技术文档；</li>
                    <li>协助产品验收、交付等工作。</li>
                  </ul>
                  <p><strong>任职资格：</strong></p>
                  <ul>
                    <li>电子类、电气类相关专业硕士学历（有开关电源设计工作经验者可放宽至本科）；</li>
                    <li>2-3 年以上电源产品设计工作经验；</li>
                    <li>熟悉电路仿真与绘制软件，具备电路仿真能力，独立完成原理图设计、器件选型、PCB 多层板设计等；</li>
                    <li>具有主动学习及解决问题的能力，有较强的责任心及抗压能力。</li>
                  </ul>
                  <p><strong>工作地址：</strong>西安市长安区航天 504 研究所</p>
                </div>
              </div>

              <!-- 嵌入式软件开发 -->
              <div class="job-post">
                <h4 @click="toggleJobDetail('embedded')" class="job-title">
                  嵌入式软件开发
                  <span class="toggle-icon">{{ expandedJobs.embedded ? '▲' : '▼' }}</span>
                </h4>
                <div class="job-details" :class="{ 'collapsed': !expandedJobs.embedded }">
                  <p><strong>岗位职责：</strong></p>
                  <ul>
                    <li>负责基于嵌入式单片机和 FPGA 的软件开发与调试；</li>
                    <li>主导 FPGA 与单片机/处理器之间的协同设计与开发；</li>
                    <li>负责与硬件工程师协作，完成软件模块的底层驱动的代码编写与测试；</li>
                    <li>负责与硬件工程师进行联调、问题验证等；</li>
                  </ul>
                  <p><strong>岗位要求：</strong></p>
                  <ul>
                    <li>电子、计算机、自动化或相关领域学士及以上学位；</li>
                    <li>至少 3 年在 FPGA 设计与嵌入式软件开发方面的专业经验；</li>
                    <li>精通 zynq 系列 PL 及 PS 部分代码编写；</li>
                    <li>具备良好的学习能力、问题解决能力和团队合作精神，能勇于承担技术突破和挑战。</li>
                  </ul>
                  <p><strong>优先条件：</strong></p>
                  <ul>
                    <li>拥有 FPGA SOC 系统设计经验；</li>
                    <li>熟悉实时操作系统(RTOS)，如 FreeRTOS、RT-Thread；</li>
                    <li>在国际会议或期刊上发表过相关研究论文。</li>
                  </ul>
                  <p><strong>工作地址：</strong>西安市建工科技创业基地 2 号楼 1 单元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 地图放大查看模态框 -->
    <div v-if="showMapModal" class="map-modal" @click="closeMapModal">
      <div class="map-modal-content" @click.stop>
        <span class="close-button" @click="closeMapModal">&times;</span>
        <img src="../assets/img/地图3.png" alt="公司位置地图（放大）" class="enlarged-map">
      </div>
    </div>

    <!-- 在线咨询组件 - 仅在PC端显示 -->
    <OnlineConsultation v-if="!isMobile" />
  </div>
</template>

<script>
import OnlineConsultation from "../components/OnlineConsultation.vue";

export default {
  name: "ContactUs",
  components: { OnlineConsultation },
  data() {
    return {
      isMobile: false,
      expandedJobs: {
        power: false,
        embedded: false
      },
      showMapModal: false  // 地图模态框显示状态
    };
  },
  mounted() {
    // 更完整的移动设备检测，包括各种鸿蒙系统变体
    const ua = navigator.userAgent;
    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|OpenHarmony/i.test(ua);
  },
  methods: {
    toggleJobDetail(jobType) {
      this.expandedJobs[jobType] = !this.expandedJobs[jobType];
    },
    copyToClipboard(text) {
      // 创建临时input元素
      const input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);

      // 显示复制成功提示（可选）
      alert(`已复制电话号码：${text}`);
    },
    // 打开地图模态框
    openMapModal() {
      this.showMapModal = true;
    },
    // 关闭地图模态框
    closeMapModal() {
      this.showMapModal = false;
    }
  }
};
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 35px;
  height: 100px;
  line-height: 100px;
  background-image: url("../assets/img/banner-4.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.ContactUs-container {
  padding: 20px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}

/* 左侧商务联系内容样式 */
.business-content {
  padding: 0px 0;
}

.business-content h3 {
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.map-container {
  margin-top: 20px;
  text-align: center;
}

.contact-map {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* 添加手型光标表示可点击 */
  transition: transform 0.2s ease; /* 添加过渡效果 */
//max-height: 100px; /* 限制图片最大高度 */
//object-fit: cover; /* 保持图片比例 */
}

.contact-map:hover {
  transform: scale(1.02); /* 鼠标悬停时轻微放大 */
}

/* 地图模态框样式 */
.map-modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.close-button {
  position: absolute;
  top: -30px;
  right: 0;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
}

.enlarged-map {
  max-width: 100%;
  max-height: 80vh;
  border: 2px solid white;
  border-radius: 4px;
}

/* 右侧招聘信息内容样式 */
.content-section {
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  /* 可以增加高度来显示更多内容 */
  min-height: 600px; /* 或者根据需要调整具体数值 */
}

.job-details.collapsed {
  /* 增加折叠状态下的最大高度 */
  max-height: 30px; /* 从原来的100px增加到150px或更多 */
  overflow: hidden;
  position: relative;
}

.recruitment-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.recruitment-header h3 {
  color: #333;
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.recruitment-contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.recruitment-email {
  margin-top: 10px;
  text-align: right;
}

.recruitment-email strong {
  font-weight: bold;
  color: #000;
}

.phone-number {
  color: red;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  cursor: pointer;
}

.contact-phone {
  color: red;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.job-post {
  margin-bottom: 20px;
}

.job-title {
  color: #0066cc;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-icon {
  font-size: 20px;
  font-weight: bold;
}

.job-details.collapsed {
  max-height: 185px;
  overflow: hidden;
  position: relative;
}

.job-details.collapsed::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(to bottom, rgba(249, 249, 249, 0), rgba(249, 249, 249, 1));
}

.job-details:not(.collapsed) {
  max-height: none;
}

.job-details ul {
  list-style-type: decimal;
  margin-left: 20px;
  margin-bottom: 15px;
}

.contact-details p {
  line-height: 1.6;
  margin-bottom: 8px;
  font-size: 18px; /* 增大字体大小 */
}

.recruitment-contact {
  text-align: right;
}

/* 移动端页面，不需要背景图和对应的文字说明 */
@media screen and (max-width: 768px) {
  .banner {
    display: none !important; /* 添加!important确保优先级 */
  }

  .ContactUs-container {
    padding: 0px 0;
  }

  .content-section,
  .business-content {
    margin-bottom: 15px;
  }

  .business-info, .recruitment-info {
    margin-bottom: 15px;
  }

  .job-details.collapsed {
    max-height: 80px;
  }

  .recruitment-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .recruitment-contact {
    text-align: left;
    margin-top: 10px;
  }

  .business-content {
    padding: 0;
  }

  .close-button {
    top: -20px;
    font-size: 24px;
  }

  .enlarged-map {
    max-height: 70vh;
  }
}
</style>
