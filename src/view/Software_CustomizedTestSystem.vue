<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>定制化测试台模拟系统 <small>力负载模拟测试平台</small></h1>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <div class="col-md-12 text-center">
        <img src="../assets/img/定制化测试台模拟系统_2.png" alt="定制化测试台模拟系统_2" class="img-responsive platform-img">
      </div>
      <div class="col-md-12">
        <h2>系统概述</h2>
        <p style="text-indent: 2em;">
          定制化测试台模拟系统是专为各类设备和组件测试而设计的力负载模拟测试平台。该系统可根据客户特定的测试需求，提供个性化的测试解决方案，广泛应用于航空航天、汽车工业、机械制造等领域。系统能够模拟各种复杂的力学环境，精确复现实际工况中的载荷条件。</p>
        <p style="text-indent: 2em;">
          系统采用模块化设计理念，结合先进的液压控制技术和数据采集系统，可实现静态、动态、疲劳等多种测试模式。通过高精度的传感器和控制器，确保测试数据的准确性和可靠性，为产品质量验证和性能优化提供有力支撑。</p>
        <div class="features">
          <h3>核心特点：</h3>
          <ul>
            <li>定制化设计，满足不同测试需求</li>
            <li>高精度力控制，控制精度可达±0.5%F.S.</li>
            <li>多通道同步控制，支持复杂载荷谱模拟</li>
            <li>实时数据采集与分析，采样频率高达10kHz</li>
            <li>安全保护机制完善，具备多重冗余保护</li>
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
              <td class="spec-title">加载能力</td>
              <td>可根据需求定制（1kN-5000kN）</td>
            </tr>
            <tr>
              <td class="spec-title">控制精度</td>
              <td>±0.5%F.S.</td>
            </tr>
            <tr>
              <td class="spec-title">控制频率</td>
              <td>0.01-200Hz</td>
            </tr>
            <tr>
              <td class="spec-title">位移行程</td>
              <td>可根据需求定制（±10mm-±500mm）</td>
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
          <h3>航空航天测试</h3>
          <p>飞机起落架、发动机部件、飞行控制面等的力学性能测试</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-road"></span>
          </div>
          <h3>汽车工业测试</h3>
          <p>汽车悬架系统、转向系统、制动系统等的耐久性测试</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-cog"></span>
          </div>
          <h3>机械部件测试</h3>
          <p>各类机械零部件、传动装置的强度和疲劳测试</p>
        </div>
      </div>
    </div>

    <!-- 平台优势 -->
    <div class="platform-advantages">
      <h2 class="text-center">平台优势</h2>
      <div class="row">
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-wrench"></span>
          </div>
          <h3>定制化设计</h3>
          <p>根据客户需求灵活配置，满足多样化测试要求</p>
        </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Software_CustomizedTestSystem',
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
