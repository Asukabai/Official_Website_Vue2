<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h2>视觉自动化检测及图像识别平台 <small>软件自动化管理平台</small></h2>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <div class="col-md-12 text-center">
        <img src="../assets/img/电路板检测系统.png" alt="电路板检测系统" class="img-responsive platform-img">
      </div>
      <div class="col-md-12">
        <h2>系统概述</h2>
        <p style="text-indent: 2em;">
          基于计算机视觉的电路板检测系统是一套专门用于PCB电路板质量检测的自动化视觉检测平台，利用先进的图像识别技术和深度学习算法，实现对电路板缺陷的高精度自动检测。该系统可检测包括焊点缺陷、元件缺失、偏移、短路、断路等多种常见电路板质量问题。</p>
        <p style="text-indent: 2em;">
          系统通过高分辨率工业相机采集电路板图像，结合AI算法进行图像分析和模式识别，能够快速准确地识别各类缺陷，检测精度可达99.9%以上，大幅提升电路板质检效率，降低人工成本，确保产品质量一致性。</p>
        <div class="features">
          <h3>核心特点：</h3>
          <ul>
            <li>高精度缺陷检测，识别准确率高达99.9%以上</li>
            <li>支持多种缺陷类型检测，包括焊点、元件、线路等各类问题</li>
            <li>毫秒级检测速度，满足高速生产线需求</li>
            <li>自学习功能，持续优化检测模型</li>
            <li>模块化设计，可根据不同电路板类型定制检测方案</li>
            <li>直观的可视化界面，检测结果实时显示和统计分析</li>
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
              <td class="spec-title">检测精度</td>
              <td>≥99.9%</td>
            </tr>
            <tr>
              <td class="spec-title">检测速度</td>
              <td>≤300ms/幅</td>
            </tr>
            <tr>
              <td class="spec-title">支持缺陷类型</td>
              <td>20+种常见缺陷</td>
            </tr>
            <tr>
              <td class="spec-title">图像分辨率</td>
              <td>最高5000万像素</td>
            </tr>

            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">光源类型</td>
              <td>环形/条形/背光源可选</td>
            </tr>
            <tr>
              <td class="spec-title">通信接口</td>
              <td>千兆以太网、IO接口</td>
            </tr>
            <tr>
              <td class="spec-title">工作环境</td>
              <td>温度0-45℃，湿度20-80%</td>
            </tr>
            <tr>
              <td class="spec-title">软件平台</td>
              <td>Windows 10/11</td>
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
            <span class="glyphicon glyphicon glyphicon-edit"></span>
          </div>
          <h3>焊点检测</h3>
          <p>自动检测焊点质量，识别虚焊、短路、偏移等缺陷</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon glyphicon-random"></span>
          </div>
          <h3>元件检测</h3>
          <p>检测元件缺失、错件、反向、偏移等问题</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon glyphicon-resize-full"></span>
          </div>
          <h3>线路检测</h3>
          <p>检测线路断路、短路、线宽异常等质量问题</p>
        </div>
      </div>
    </div>

    <!-- 平台优势 -->
    <div class="platform-advantages">
      <h2 class="text-center">平台优势</h2>
      <div class="row">
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon glyphicon-eye-open"></span>
          </div>
          <h3>高精度识别</h3>
          <p>基于深度学习的图像识别算法，检测精度远超人工</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon glyphicon-flash"></span>
          </div>
          <h3>极速检测</h3>
          <p>毫秒级检测速度，适应高速自动化生产线</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon glyphicon-cog"></span>
          </div>
          <h3>智能学习</h3>
          <p>具备自学习能力，持续优化检测模型</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon glyphicon-stats"></span>
          </div>
          <h3>数据统计</h3>
          <p>实时数据统计和质量分析，支持质量追溯</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Software_VisualRecognitionPlatform',
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

