<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>定制化智能化解决方案 <small>软件自动化管理平台</small></h1>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <div class="col-md-12 text-center">
        <img src="../assets/img/定制化智能化解决方案_2.png" alt="定制化智能化解决方案_2" class="img-responsive platform-img">
      </div>
      <div class="col-md-12">
        <h2>系统概述</h2>
        <p style="text-indent: 2em;">
          定制化智能化解决方案是一套面向各行业的软件自动化管理平台，为企业提供量身定制的智能化管理工具。该平台融合了人工智能、大数据分析、自动化控制等先进技术，可根据企业特定需求提供个性化的软件解决方案，实现业务流程的自动化和智能化管理。</p>
        <p style="text-indent: 2em;">
          系统通过智能化的数据处理和分析能力，帮助企业优化资源配置、提升管理效率、降低运营成本。平台具备强大的扩展性和兼容性，能够与企业现有系统无缝集成，为企业数字化转型提供强有力的技术支撑。</p>
        <div class="features">
          <h3>核心特点：</h3>
          <ul>
            <li>个性化定制，满足不同行业和企业特定需求</li>
            <li>智能化算法，实现数据分析和决策支持</li>
            <li>自动化流程，减少人工干预，提高工作效率</li>
            <li>可视化界面，直观展示关键指标和业务状态</li>
            <li>模块化设计，可根据需求灵活配置功能模块</li>
            <li>开放性架构，支持与多种系统集成</li>
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
              <td class="spec-title">平台架构</td>
              <td>微服务架构</td>
            </tr>
            <tr>
              <td class="spec-title">部署方式</td>
              <td>本地部署/云部署/混合部署</td>
            </tr>
            <tr>
              <td class="spec-title">并发处理能力</td>
              <td>支持万级并发用户</td>
            </tr>
            <tr>
              <td class="spec-title">数据存储</td>
              <td>支持关系型和非关系型数据库</td>
            </tr>

            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">操作系统</td>
              <td>Windows/Linux</td>
            </tr>
            <tr>
              <td class="spec-title">数据库支持</td>
              <td>MySQL、PostgreSQL、Oracle、MongoDB</td>
            </tr>
            <tr>
              <td class="spec-title">移动端支持</td>
              <td>响应式设计，支持各类移动设备</td>
            </tr>
            <tr>
              <td class="spec-title">接口支持</td>
              <td>RESTful API、WebSocket、GraphQL</td>
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
          <h3>智能制造</h3>
          <p>实现生产过程自动化控制和智能调度，提升制造效率</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-home"></span>
          </div>
          <h3>智慧产线</h3>
          <p>产线自动化管理，实现节能控制和智能运维</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-shopping-cart"></span>
          </div>
          <h3>数字化管理</h3>
          <p>对产品数据、和客户行为数据实时分析，数字化管理</p>
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
          <h3>定制化开发</h3>
          <p>根据企业需求量身定制，满足个性化业务场景</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-cloud"></span>
          </div>
          <h3>云端部署</h3>
          <p>支持多种部署方式，灵活适应不同IT环境</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-stats"></span>
          </div>
          <h3>智能分析</h3>
          <p>基于AI的数据分析，提供决策支持</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-transfer"></span>
          </div>
          <h3>系统集成</h3>
          <p>开放API接口，轻松对接现有系统</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Software_CustomizedIntelligentSolutions',
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
