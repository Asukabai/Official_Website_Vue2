<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>智能通用化负载监测平台 <small>软件测试平台</small></h1>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <div class="col-md-6">
        <img src="../assets/img/自动化测试通用负载检测平台.png" alt="智能通用化负载监测平台" class="img-responsive platform-img">
      </div>
      <div class="col-md-6">
        <h2>平台概述</h2>
        <p>
          智能通用化负载监测平台是专为电源设备测试设计的高精度、多功能测试系统。该平台采用模块化设计，具备强大的数据采集和分析能力，能够满足各种复杂测试场景的需求。</p>
        <p>
          平台支持多路信号同步采集，时序精度高达5μs，能够准确捕捉电源设备在各种工作状态下的性能参数，为产品质量控制和研发优化提供可靠的数据支撑。</p>
        <div class="features">
          <h3>核心特点：</h3>
          <ul>
            <li>高精度数据采集，误差小于0.1%</li>
            <li>多通道同步测量，支持20通道并行测试</li>
            <li>长时间不间断测试，支持72小时连续运行</li>
            <li>模块化设计，易于扩展和维护</li>
            <li>友好的用户界面，操作简便</li>
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
              <td class="spec-title">输入电压范围</td>
              <td>AC 100V - 250V</td>
            </tr>
            <tr>
              <td class="spec-title">输入频率</td>
              <td>45Hz - 1000Hz</td>
            </tr>
            <tr>
              <td class="spec-title">电压测量精度</td>
              <td>±(0.1% + 0.1V)</td>
            </tr>
            <tr>
              <td class="spec-title">电流测量精度</td>
              <td>±(0.1% + 0.1%FS)</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">功率测量精度</td>
              <td>±(0.2% + 0.2%FS)</td>
            </tr>
            <tr>
              <td class="spec-title">采样频率</td>
              <td>最高100kHz</td>
            </tr>
            <tr>
              <td class="spec-title">同步精度</td>
              <td>±5μs</td>
            </tr>
            <tr>
              <td class="spec-title">工作温度</td>
              <td>0°C - 40°C</td>
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
          <div class="scenario-icon">
            <img src="../assets/img/电子负载.png" alt="电源测试" class="img-responsive center-block scenario-img">
          </div>
          <h3>电源测试</h3>
          <p>适用于各种开关电源、线性电源等设备的性能测试和老化试验</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="scenario-icon">
            <img src="../assets/img/电子负载.png" alt="电池测试" class="img-responsive center-block scenario-img">
          </div>
          <h3>电池测试</h3>
          <p>支持各类电池充放电测试，容量评估和性能分析</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="scenario-icon">
            <img src="../assets/img/电子负载.png" alt="设备老化" class="img-responsive center-block scenario-img">
          </div>
          <h3>设备老化测试</h3>
          <p>支持长时间连续运行测试，验证设备的稳定性和可靠性</p>
        </div>
      </div>
    </div>

    <!-- 平台优势 -->
    <div class="platform-advantages">
      <h2 class="text-center">平台优势</h2>
      <div class="row">
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-cog"></span>
          </div>
          <h3>易操作</h3>
          <p>直观的图形界面，操作简单易学</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-phone"></span>
          </div>
          <h3>适配强</h3>
          <p>支持多种设备接入，兼容性强</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-resize-full"></span>
          </div>
          <h3>可扩展</h3>
          <p>模块化设计，可根据需求灵活扩展</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-ok-circle"></span>
          </div>
          <h3>高可用</h3>
          <p>72小时不间断运行，稳定可靠</p>
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

.scenario-icon {
  height: 100px;
  margin-bottom: 20px;
}

.scenario-icon img {
  max-height: 80px;
  display: inline-block;
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
  max-width: 100%;
  height: auto;
}

.scenario-img {
  max-width: 80%;
  max-height: 80px;
}
</style>
