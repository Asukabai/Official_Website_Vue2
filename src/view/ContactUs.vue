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
                <p class="phone-number">18629057799</p>
                <p><strong>总部地址：</strong>陕西省西安市长安区建工科技创业基地2号楼1单元5层6层 </p>
                <p><strong>山西分公司地址：</strong>山西省太原市尖草坪区国科大南街晋创谷太原一号厂房 </p>
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
                  <span class="contact-phone">13630237853</span>
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
      }
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
    }
  }
};
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 35px;
  height: 260px;
  line-height: 150px;
  background-image: url("../assets/img/banner-4.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.ContactUs-container {
  padding: 40px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}

/* 左侧商务联系内容样式 */
.business-content {
  padding: 20px 0;
}

.business-content h3 {
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

/* 右侧招聘信息内容样式 */
.content-section {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

.recruitment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.content-section h3 {
  color: #333;
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.phone-number {
  color: red;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

.contact-phone {
  color: red;
  font-weight: bold;
  font-size: 16px;
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
  max-height: 100px;
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
}
</style>
