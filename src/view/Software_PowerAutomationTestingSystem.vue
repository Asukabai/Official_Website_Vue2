<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>电源自动化测试系统 <small>电性能负载测试平台</small></h1>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <div class="col-md-12 text-center">
        <img src="../assets/img/EPC_test.png" alt="EPC_test" class="img-responsive platform-img">
      </div>
      <div class="col-md-12">
        <h2>系统概述</h2>
        <p style="text-indent: 2em;">
          电源自动化测试系统是一套面向电源产品测试的电性能负载测试平台，用于自动化完成电源产品的各项电性能参数测试。该系统集成了高精度硬件测试设备和智能化软件控制平台，实现对电源产品的电压、电流、功率、效率等关键参数的精确测量。</p>
        <p style="text-indent: 2em;">
          系统通过硬件负载模拟不同工作条件，配合软件控制实现自动化测试流程，大幅提高测试效率和准确性，降低人工测试成本，确保电源产品电性能符合设计规范和行业标准。</p>
        <div class="features">
          <h3>核心特点：</h3>
          <ul>
            <li>高精度电性能参数测量，电压电流精度达0.1%以上</li>
            <li>自动化测试流程，减少人工干预，提高测试一致性</li>
            <li>多种负载模式模拟，支持阻性、感性、容性负载测试</li>
            <li>软硬件一体化集成，简化测试系统搭建</li>
            <li>模块化硬件设计，可根据测试需求灵活配置功率模块</li>
            <li>直观的测试界面，实时显示测试数据和曲线</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 技术参数 -->
    <div class="technical-specs">
      <h2 class="text-center">技术参数</h2>
      <div class="row">
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">系统型号</td>
              <td>PAT-ELoad Series</td>
            </tr>
            <tr>
              <td class="spec-title">功率范围</td>
              <td>1kW-100kW可扩展</td>
            </tr>
            <tr>
              <td class="spec-title">电压范围</td>
              <td>0-1000V DC</td>
            </tr>
            <tr>
              <td class="spec-title">电流范围</td>
              <td>0-500A DC</td>
            </tr>
            <tr>
              <td class="spec-title">测量精度</td>
              <td>电压/电流: ±0.1% FS</td>
            </tr>

            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">负载模式</td>
              <td>CC/CV/CR/CW四种模式</td>
            </tr>
            <tr>
              <td class="spec-title">通讯接口</td>
              <td>LAN, USB, GPIB, RS232</td>
            </tr>
            <tr>
              <td class="spec-title">控制软件</td>
              <td>Windows 10/11</td>
            </tr>
            <tr>
              <td class="spec-title">数据存储</td>
              <td>支持本地和网络存储</td>
            </tr>
            <tr>
              <td class="spec-title">安全保护</td>
              <td>过压/过流/过温保护</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 应用场景 -->
    <div class="application-scenarios">
      <h2 class="text-center">应用场景</h2>
      <div class="row">
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon glyphicon-flash"></span>
          </div>
          <h3>电源产品测试</h3>
          <p>开关电源、电源适配器、充电器等产品的出厂测试和型式试验</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-eye-open"></span>
          </div>
          <h3>电性能分析</h3>
          <p>电源产品电性能参数的精确测量和动态特性分析</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-cog"></span>
          </div>
          <h3>老化试验</h3>
          <p>长时间负载运行测试，评估电源产品可靠性和稳定性</p>
        </div>
      </div>
    </div>

    <!-- 平台优势 -->
    <div class="platform-advantages">
      <h2 class="text-center">平台优势</h2>
      <div class="row">
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-dashboard"></span>
          </div>
          <h3>高精度测试</h3>
          <p>专业级电性能测量硬件，确保测试结果准确性</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-retweet"></span>
          </div>
          <h3>自动化流程</h3>
          <p>一键完成复杂测试序列，提高测试效率和一致性</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-transfer"></span>
          </div>
          <h3>软硬件集成</h3>
          <p>专用硬件与智能软件深度优化匹配</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-scale"></span>
          </div>
          <h3>灵活扩展</h3>
          <p>模块化架构支持功率和功能灵活扩展</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Software_SoftwarePlatform',
  data() {
    return {}
  },
  mounted() {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
#Software {
  padding: 0px;
}

.page-header {
  margin-top: 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.platform-intro {
  margin-top: 30px;
  margin-bottom: 50px;
}

.features {
  margin-top: 20px;
}

.features ul {
  padding-left: 20px;
}

.features li {
  margin-bottom: 8px;
}

.spec-title {
  width: 40%;
  font-weight: bold;
}

.technical-specs {
  margin-bottom: 50px;
}

.application-scenarios {
  margin-bottom: 50px;
}

.platform-advantages {
  margin-bottom: 30px;
}

.advantage-icon {
  font-size: 36px;
  color: #3F83F8;
  margin-bottom: 15px;
}

.table td {
  vertical-align: middle;
}

h2 {
  margin-bottom: 25px;
  color: #333;
  font-weight: bold;
}

h3 {
  margin: 15px 0;
  color: #555;
}

.platform-img {
  max-width: 90%;
  height: auto;
  display: inline-block;
}

.scenario-img {
  max-width: 80%;
  max-height: 80px;
}
</style>

