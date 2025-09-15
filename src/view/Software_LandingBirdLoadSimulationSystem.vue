<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>起落架、铁鸟类负载模拟系统 <small>力负载模拟测试平台</small></h1>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <div class="col-md-12 text-center">
        <img src="../assets/img/起落架铁鸟类负载模拟系统_2.png" alt="起落架铁鸟类负载模拟系统_2" class="img-responsive platform-img">
      </div>
      <div class="col-md-12">
        <h2>系统概述</h2>
        <p style="text-indent: 2em;">
          起落架、铁鸟类负载模拟系统是专门针对航空领域起落架和铁鸟试验台开发的高精度力负载模拟测试平台。该系统能够精确模拟飞行器起降过程中起落架所承受的各种载荷，以及铁鸟试验台中各部件的受力情况，为飞机设计验证和性能测试提供可靠的数据支持。</p>
        <p style="text-indent: 2em;">
          系统通过高精度的液压控制技术和先进的传感器测量技术，实现对复杂载荷谱的精确复现，确保测试数据的准确性和可靠性，满足航空领域对高安全性、高可靠性测试设备的严格要求。</p>
        <div class="features">
          <h3>核心特点：</h3>
          <ul>
            <li>高精度力控制，控制精度可达±0.5%F.S.</li>
            <li>多通道同步控制，支持复杂载荷谱模拟</li>
            <li>实时动态响应，响应时间小于20ms</li>
            <li>安全保护机制完善，具备多重冗余保护</li>
            <li>模块化设计，可根据测试需求灵活配置</li>
            <li>直观的人机交互界面，操作简便易用</li>
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
              <td class="spec-title">最大加载能力</td>
              <td>500kN</td>
            </tr>
            <tr>
              <td class="spec-title">控制精度</td>
              <td>±0.5%F.S.</td>
            </tr>
            <tr>
              <td class="spec-title">控制频率</td>
              <td>0.01-100Hz</td>
            </tr>
            <tr>
              <td class="spec-title">位移行程</td>
              <td>±150mm</td>
            </tr>

            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">系统响应时间</td>
              <td><20ms</td>
            </tr>
            <tr>
              <td class="spec-title">数据采集频率</td>
              <td>10kHz</td>
            </tr>
            <tr>
              <td class="spec-title">控制方式</td>
              <td>力控制/位移控制</td>
            </tr>
            <tr>
              <td class="spec-title">通信接口</td>
              <td>EtherCAT、Ethernet</td>
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
            <span class="glyphicon glyphicon-plane"></span>
          </div>
          <h3>起落架测试</h3>
          <p>模拟飞机起降过程中的各种载荷工况，验证起落架结构强度和疲劳寿命</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-tasks"></span>
          </div>
          <h3>铁鸟试验</h3>
          <p>在铁鸟试验台上模拟飞行控制面载荷，验证飞控系统性能</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-cog"></span>
          </div>
          <h3>部件测试</h3>
          <p>对航空器关键承力部件进行静态和动态载荷测试</p>
        </div>
      </div>
    </div>

    <!-- 平台优势 -->
    <div class="platform-advantages">
      <h2 class="text-center">平台优势</h2>
      <div class="row">
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-screenshot"></span>
          </div>
          <h3>高精度控制</h3>
          <p>采用先进控制算法，确保载荷模拟的高精度和高稳定性</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-flash"></span>
          </div>
          <h3>快速响应</h3>
          <p>高速液压系统和控制器，实现快速动态响应</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-lock"></span>
          </div>
          <h3>安全可靠</h3>
          <p>多重安全保护机制，确保人员和设备安全</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-wrench"></span>
          </div>
          <h3>灵活配置</h3>
          <p>模块化架构支持个性化定制和功能扩展</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Software_LandingBirdLoadSimulationSystem',
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
