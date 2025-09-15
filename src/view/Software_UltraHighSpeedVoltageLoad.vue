<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>超高速 / 高压电子负载<small>电性能负载测试平台</small></h1>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <div class="col-md-12 text-center">
        <img src="../assets/img/超高速高压电子负载_test.png" alt="超高速高压电子负载_test" class="img-responsive platform-img">
      </div>
      <div class="col-md-12">
        <h2>系统概述</h2>
        <p style="text-indent: 2em;">
          超高速/高压电子负载测试平台是一套面向电源、电池、充电器等电气设备的高性能测试解决方案。该平台集成了高精度测量、快速动态响应和多模式负载控制等功能，能够满足各种复杂电气设备的测试需求。</p>
        <p style="text-indent: 2em;">
          系统通过高速数据采集和精确控制算法，提供准确的电气参数测试结果，帮助企业验证产品性能，优化设计方案，确保产品质量符合行业标准要求。</p>
        <div class="features">
          <h3>核心特点：</h3>
          <ul>
            <li>电压测试范围：0-1500V，电流测试范围：0-200A</li>
            <li>响应速度高达100kHz，满足超高速动态测试需求</li>
            <li>支持恒流、恒压、恒阻、恒功率等多种负载模式</li>
            <li>高精度测量：电压精度±0.1%，电流精度±0.2%</li>
            <li>模块化设计，支持多通道并联扩展</li>
            <li>直观的可视化界面，操作简便易用</li>
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
              <td class="spec-title">电压范围</td>
              <td>0-1500V DC</td>
            </tr>
            <tr>
              <td class="spec-title">电流范围</td>
              <td>0-200A DC</td>
            </tr>
            <tr>
              <td class="spec-title">功率范围</td>
              <td>0-20kW</td>
            </tr>
            <tr>
              <td class="spec-title">电压精度</td>
              <td>±(0.1%+0.1V)</td>
            </tr>
            <tr>
              <td class="spec-title">电流精度</td>
              <td>±(0.2%+0.2A)</td>
            </tr>
            <tr>
              <td class="spec-title">响应速度</td>
              <td>≤10μs</td>
            </tr>

            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">负载模式</td>
              <td>CC/CV/CR/CP</td>
            </tr>
            <tr>
              <td class="spec-title">通讯接口</td>
              <td>USB/Ethernet/CAN</td>
            </tr>
            <tr>
              <td class="spec-title">控制方式</td>
              <td>本地控制、远程控制</td>
            </tr>
            <tr>
              <td class="spec-title">工作温度</td>
              <td>0°C ~ 40°C</td>
            </tr>
            <tr>
              <td class="spec-title">存储温度</td>
              <td>-20°C ~ 70°C</td>
            </tr>
            <tr>
              <td class="spec-title">相对湿度</td>
              <td>≤80% RH</td>
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
            <span class="glyphicon glyphicon-flash"></span>
          </div>
          <h3>电源测试</h3>
          <p>适用于开关电源、线性电源、模块电源等各类电源产品的性能验证</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon glyphicon-tasks"></span>
          </div>
          <h3>电池测试</h3>
          <p>支持锂电池、铅酸电池、燃料电池等各类电池的充放电测试</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon glyphicon-phone"></span>
          </div>
          <h3>充电器测试</h3>
          <p>适用于手机充电器、笔记本充电器、电动车充电器等产品测试</p>
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
          <h3>高精度测量</h3>
          <p>采用高精度传感器和先进的测量算法，确保测试结果准确性</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-retweet"></span>
          </div>
          <h3>快速响应</h3>
          <p>超高速响应能力，能够捕捉瞬间电气参数变化</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-transfer"></span>
          </div>
          <h3>多种模式</h3>
          <p>支持多种负载模式，满足不同设备的测试需求</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-scale"></span>
          </div>
          <h3>灵活扩展</h3>
          <p>模块化架构支持多通道并联，轻松扩展功率和通道数</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Software_UltraHighSpeedVoltageLoad',
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

