<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">欢迎咨询</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div style="font-size: 18px; line-height: 36px; margin: 40px 0;">
              <p><strong>全国客户咨询服务热线：</strong></p>
              <p style="color: red;"> 18629057799 </p>
              <p><strong>E-mail：</strong>hr@sensor-smart.com </p>
              <p><strong>总部地址：</strong> 陕西省西安市长安区建工科技创业基地2号楼1单元5层6层 </p>
              <p><strong>山西分公司地址：</strong> 山西省太原市尖草坪区国科大南街晋创谷太原一号厂房 </p>
            </div>

            <!-- 招聘信息栏目 -->
            <div style="margin-top: 60px; padding: 30px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
              <h3 style="color: #333; margin-bottom: 20px;">招聘信息</h3>

              <!-- 电源研发工程师 -->
              <div style="margin-bottom: 40px;">
                <h4 style="color: #0066cc;">电源研发工程师</h4>
                <p><strong>岗位职责：</strong></p>
                <ul style="list-style-type: decimal; margin-left: 20px;">
                  <li>负责开关电源产品硬件设计、器件选型、原理图 PCB 绘制等工作；</li>
                  <li>负责开发电源类产品相关模块、调试验证、确保产品的可靠性、功能性满足指标要求；</li>
                  <li>优化或维护更新已有的产品，针对新老产品问题能够提供解决方案；</li>
                  <li>负责编写相关技术文档；</li>
                  <li>协助产品验收、交付等工作。</li>
                </ul>
                <p><strong>任职资格：</strong></p>
                <ul style="list-style-type: decimal; margin-left: 20px;">
                  <li>电子类、电气类相关专业硕士学历（有开关电源设计工作经验者可放宽至本科）；</li>
                  <li>2-3 年以上电源产品设计工作经验；</li>
                  <li>熟悉电路仿真与绘制软件，具备电路仿真能力，独立完成原理图设计、器件选型、PCB 多层板设计等；</li>
                  <li>具有主动学习及解决问题的能力，有较强的责任心及抗压能力。</li>
                </ul>
                <p><strong>工作地址：</strong> 西安市长安区航天 504 研究所</p>
              </div>

              <!-- 嵌入式软件开发 -->
              <div>
                <h4 style="color: #0066cc;">嵌入式软件开发</h4>
                <p><strong>岗位职责：</strong></p>
                <ul style="list-style-type: decimal; margin-left: 20px;">
                  <li>负责基于嵌入式单片机和 FPGA 的软件开发与调试；</li>
                  <li>主导 FPGA 与单片机/处理器之间的协同设计与开发；</li>
                  <li>负责与硬件工程师协作，完成软件模块的底层驱动的代码编写与测试；</li>
                  <li>负责与硬件工程师进行联调、问题验证等；</li>
                </ul>
                <p><strong>岗位要求：</strong></p>
                <ul style="list-style-type: decimal; margin-left: 20px;">
                  <li>电子、计算机、自动化或相关领域学士及以上学位；</li>
                  <li>至少 3 年在 FPGA 设计与嵌入式软件开发方面的专业经验；</li>
                  <li>精通 zynq 系列 PL 及 PS 部分代码编写；</li>
                  <li>具备良好的学习能力、问题解决能力和团队合作精神，能勇于承担技术突破和挑战。</li>
                </ul>
                <p><strong>优先条件：</strong></p>
                <ul style="list-style-type: decimal; margin-left: 20px;">
                  <li>拥有 FPGA SOC 系统设计经验；</li>
                  <li>熟悉实时操作系统(RTOS)，如 FreeRTOS、RT-Thread；</li>
                  <li>在国际会议或期刊上发表过相关研究论文。</li>
                </ul>
                <p><strong>工作地址：</strong> 西安市建工科技创业基地 2 号楼 1 单元</p>
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
      isMobile: false
    };
  },
  mounted() {
    // 更完整的移动设备检测，包括各种鸿蒙系统变体
    const ua = navigator.userAgent;
    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|OpenHarmony/i.test(ua);
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

/* 移动端页面，不需要背景图和对应的文字说明 */
@media screen and (max-width: 768px) {
  .banner {
    display: none !important; /* 添加!important确保优先级 */
  }
  .ContactUs-container {
    padding: 0px 0;
  }
}
</style>
