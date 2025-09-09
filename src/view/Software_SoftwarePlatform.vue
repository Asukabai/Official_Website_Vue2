<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>MES智能制造执行管理系统 <small>生产管理平台</small></h1>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <h2>移动端</h2>
      <div class="col-md-12 text-center">
        <img src="../assets/img/MES_mobile.png" alt="MES_mobile" class="img-responsive platform-img">
      </div>
      <h2>PC 端</h2>
      <div class="col-md-12 text-center">
        <img src="../assets/img/MES.png" alt="MES" class="img-responsive platform-img">
      </div>
      <div class="col-md-12">
        <h2>系统概述</h2>
        <p>
          MES智能制造执行管理系统是一套面向制造业的数字化生产管理平台，用于监控和管理从原材料投入到成品产出的整个生产过程。该系统实现了生产计划、过程控制、质量管理、设备维护和资源调度等功能的集成化管理。</p>
        <p>
          系统通过实时数据采集和分析，提供准确的生产状态信息，帮助企业优化生产流程，提高生产效率，降低生产成本，确保产品质量符合标准要求。</p>
        <div class="features">
          <h3>核心特点：</h3>
          <ul>
            <li>实时生产数据采集与监控，精确度达99%以上</li>
            <li>全流程生产追溯，支持产品全生命周期管理</li>
            <li>多工厂、多车间统一管理平台</li>
            <li>支持移动端和PC端同步操作</li>
            <li>模块化设计，可根据企业需求灵活配置功能模块</li>
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
              <td class="spec-title">系统版本</td>
              <td>MES-PRO-MFG-2024</td>
            </tr>
            <tr>
              <td class="spec-title">部署方式</td>
              <td>云部署</td>
            </tr>
            <tr>
              <td class="spec-title">并发用户数</td>
              <td>支持1000+用户同时在线</td>
            </tr>
            <tr>
              <td class="spec-title">数据存储</td>
              <td>支持本地和云端存储</td>
            </tr>

            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">操作系统</td>
              <td>Windows 10/11</td>
            </tr>
            <tr>
              <td class="spec-title">数据库支持</td>
              <td>MySQL</td>
            </tr>
            <tr>
              <td class="spec-title">移动端支持</td>
              <td>iOS, Android上的钉钉小程序</td>
            </tr>
            <tr>
              <td class="spec-title">接口支持</td>
              <td>RESTful API</td>
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
            <span class="glyphicon glyphicon-list-alt"></span>
          </div>
          <h3>生产计划管理</h3>
          <p>实现生产订单的自动排程和资源分配，优化生产计划执行</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-eye-open"></span>
          </div>
          <h3>质量过程控制</h3>
          <p>实时监控生产过程中的质量数据，自动预警和质量追溯</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-stats"></span>
          </div>
          <h3>设备与物料管理</h3>
          <p>跟踪设备状态和物料流转，确保生产资源的有效利用</p>
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
          <h3>可视化管理</h3>
          <p>实时展示生产状态和关键指标，辅助管理决策</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-retweet"></span>
          </div>
          <h3>流程优化</h3>
          <p>通过数据分析识别生产瓶颈，持续优化流程</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-transfer"></span>
          </div>
          <h3>系统集成</h3>
          <p>支持与 ERP 等系统无缝集成</p>
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

