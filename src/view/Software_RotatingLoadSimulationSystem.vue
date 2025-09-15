<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>旋转类负载模拟系统 <small>力负载模拟测试平台</small></h1>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <div class="col-md-12 text-center">
        <img src="../assets/img/旋转类负载模拟系统_2.png" alt="旋转类负载模拟系统_2" class="img-responsive platform-img">
      </div>
      <div class="col-md-12">
        <h2>系统概述</h2>
        <p style="text-indent: 2em;">
          旋转类负载模拟系统是一套面向旋转机械设备的高性能力负载模拟测试平台，专门用于模拟和测试电机、减速机、传动系统等旋转设备在各种工况下的负载特性。该系统集成了高精度扭矩控制、转速调节、振动监测等功能，能够真实再现设备在实际运行中的复杂负载情况。</p>
        <p style="text-indent: 2em;">
          系统通过先进的控制算法和高精度传感器，提供准确的力负载模拟和实时数据采集，帮助研发工程师验证产品设计性能，优化控制策略，确保产品质量符合行业标准要求。</p>
        <div class="features">
          <h3>核心特点：</h3>
          <ul>
            <li>扭矩模拟范围：0.1Nm-5000Nm，精度±0.5%</li>
            <li>转速控制范围：0-10000rpm，控制精度±1rpm</li>
            <li>支持恒转矩、恒功率、变速变载等多种负载模式</li>
            <li>实时监测振动、温度、噪声等关键参数</li>
            <li>模块化设计，可根据测试需求灵活配置功能模块</li>
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
              <td class="spec-title">扭矩范围</td>
              <td>0.1Nm-5000Nm</td>
            </tr>
            <tr>
              <td class="spec-title">扭矩精度</td>
              <td>±0.5% FS</td>
            </tr>
            <tr>
              <td class="spec-title">转速范围</td>
              <td>0-10000rpm</td>
            </tr>
            <tr>
              <td class="spec-title">转速精度</td>
              <td>±1rpm</td>
            </tr>
            <tr>
              <td class="spec-title">控制响应时间</td>
              <td>≤10ms</td>
            </tr>

            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">负载模式</td>
              <td>恒转矩/恒功率/变速变载</td>
            </tr>
            <tr>
              <td class="spec-title">监测参数</td>
              <td>扭矩、转速、振动、温度、噪声</td>
            </tr>
            <tr>
              <td class="spec-title">通讯接口</td>
              <td>USB/Ethernet/CAN/RS485</td>
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
            <span class="glyphicon glyphicon-cog"></span>
          </div>
          <h3>电机测试</h3>
          <p>适用于交流电机、直流电机、伺服电机等各类电机的负载特性测试</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-refresh"></span>
          </div>
          <h3>减速机测试</h3>
          <p>支持各种类型减速机的效率、扭矩、寿命等性能测试</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-stats"></span>
          </div>
          <h3>传动系统验证</h3>
          <p>用于汽车、航空、船舶等传动系统的综合性能验证</p>
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
          <h3>高精度控制</h3>
          <p>采用高精度传感器和先进控制算法，确保负载模拟精度</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-retweet"></span>
          </div>
          <h3>多种负载模式</h3>
          <p>支持多种负载模式，满足不同设备的测试需求</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-transfer"></span>
          </div>
          <h3>全面监测</h3>
          <p>实时监测多种关键参数，提供全面的测试数据分析</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-scale"></span>
          </div>
          <h3>灵活扩展</h3>
          <p>模块化架构支持个性化定制和功能扩展</p>
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

