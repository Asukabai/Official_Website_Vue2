<template>
  <div id="Software">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1> AGV 协作机器人 <small>智能调测设备</small></h1>
    </div>

    <!-- 平台简介 -->
    <div class="row platform-intro">
      <div class="col-md-12 text-center">
        <!-- 图片和视频切换容器 -->
        <div class="media-container">
          <!-- 媒体内容展示区 -->
          <div class="media-content">
            <img v-show="showMediaType === 'image'" src="../assets/img/AGV小车.png" alt="AGV小车" class="img-responsive platform-img">
            <video v-show="showMediaType === 'video'" controls class="img-responsive platform-img">
              <source src="../assets/video/AGV小车.mp4" type="video/mp4">
              您的浏览器不支持视频播放。
            </video>
          </div>

          <!-- 切换标签区域 -->
          <div class="media-tabs-container">
            <div class="media-tabs">
              <span
                :class="['media-tab', { active: showMediaType === 'image' }]"
                @click="showMediaType = 'image'"
              >
                图片
              </span>
              <span
                :class="['media-tab', { active: showMediaType === 'video' }]"
                @click="showMediaType = 'video'"
              >
                视频
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-18">
        <h2>设备概述</h2>
        <p style="text-indent: 2em;"><strong>AGV 协作机器人由导航定位、移动平台、机械臂抓取、视觉识别定位和机载测试等模块组成，具备载重、自主行进、自主避障、电缆对接插拔、自动测试数据存储传输、分析计算及自动充电等功能。能自主设定行进路径并自主完成测试，具有全程自动化、高智能化、测试工艺流程可灵活改变等特点，该产品大幅提高了测试效率及测试精度，把大量人力从纷繁复杂的检验测试工作中解放出来，是工业互联网时代“机器代人”的典型应用。目前已成熟应用于电力电子、航空航天、智能实验室等测试场景。</strong></p>
        <p style="text-indent: 2em;"><strong>总的来说，作为一款精密智能机械同时集成了移动测试系统，该产品有着以下特点和显著的优势 ：</strong></p>
        <p><strong>高智能化 : 自动导航行进、自主避障；</strong></p>
        <p><strong>高自动化 : 自主定位及校正、射频电缆自动对接、自动测试、自动上传存储数据、自动充电 ；</strong></p>
        <p><strong>1.依据调度指令在多个测试工位间进行循环测试， 实现测试仪器一对多的高效重复使用；</strong></p>
        <p><strong>2.导航定位、AGV移动平台、机械臂精密对接块、视觉识别定位和机载测试等模块；</strong></p>
        <div class="col-md-12 text-center">
          <img src="../assets/img/智能操作台.png" alt="智能操作台" class="img-responsive platform-img">
        </div>
        <div class="col-md-12 text-center">
          <img src="../assets/img/AGV-央视报道.png" alt="智能操作台" class="img-responsive platform-img">
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
              <td class="spec-title">型号</td>
              <td>SS-STM-AGV-02</td>
            </tr>
            <tr>
              <td class="spec-title">行进速度</td>
              <td> 0 - 45 m/min </td>
            </tr>
            <tr>
              <td class="spec-title">行进方式</td>
              <td> 双向行驶、原地旋转 ± 90° </td>
            </tr>
            <tr>
              <td class="spec-title">导航方式</td>
              <td> 磁条导航 + 视觉导航 </td>
            </tr>
            <tr>
              <td class="spec-title">导航精度</td>
              <td>± 10 mm </td>
            </tr>
            <tr>
              <td class="spec-title">平台负载</td>
              <td>300 KG </td>
            </tr>
            <tr>
              <td class="spec-title">电池容量</td>
              <td> 48 V 50 Ah </td>
            </tr>
            <tr>
              <td class="spec-title">续航能力</td>
              <td> 8 H </td>
            </tr>
            <tr>
              <td class="spec-title">充电时间</td>
              <td>1.8 H</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td class="spec-title">设备尺寸</td>
              <td>L1000 x W700 x H800 mm（可定制）</td>
            </tr>
            <tr>
              <td class="spec-title">额定电压、电流</td>
              <td>230 VAC 、 25 A</td>
            </tr>
            <tr>
              <td class="spec-title">整车质量</td>
              <td>450kg</td>
            </tr>
            <tr>
              <td class="spec-title">控制接口</td>
              <td>RJ45网口</td>
            </tr>
            <tr>
              <td class="spec-title">测试射频信号频率</td>
              <td>± 1ms</td>
            </tr>
            <tr>
              <td class="spec-title">定位精度</td>
              <td>±0.03mm</td>
            </tr>
            <tr>
              <td class="spec-title">有效工作半径</td>
              <td>850mm</td>
            </tr>
            <tr>
              <td class="spec-title">安全设施</td>
              <td>超声波避障、机械防撞、急停保护开关</td>
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
            <span class="glyphicon glyphicon-wrench"></span>
          </div>
          <h3>精密复杂操作</h3>
          <p>适用于多种工况、环境下的精密操作</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-th"></span>
          </div>
          <h3>智能化移动测试</h3>
          <p>测试设备可移动，简化操作，适用于大型试验场所</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-tasks"></span>
          </div>
          <h3>高度集成测试</h3>
          <p>全自动，一体化集成设备测试</p>
        </div>
      </div>
    </div>


    <!-- 平台优势 -->
    <div class="platform-advantages">
      <h2 class="text-center">设备优势</h2>
      <div class="row">
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-cog"></span>
          </div>
          <h3>高集成</h3>
          <p>接口简洁，高度集成，操作简单</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-screenshot"></span>
          </div>
          <h3>高精度</h3>
          <p>机器视觉精准识别定位，测试指标精度高</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-resize-full"></span>
          </div>
          <h3>可定制</h3>
          <p>可根据客户工艺或测试流程需求定制</p>
        </div>
        <div class="col-md-3 text-center">
          <div class="advantage-icon">
            <span class="glyphicon glyphicon-ok-circle"></span>
          </div>
          <h3>高可用</h3>
          <p>性能稳定可靠，设备安全有保障</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Software_IntelligentEquipment',
  data() {
    return {
      showMediaType: 'image' // 默认显示图片
    }
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

.platform-img {
  max-width: 90%;
  height: auto;
  display: inline-block;
}

.scenario-img {
  max-width: 80%;
  max-height: 80px;
}

/* 媒体切换样式 */
.media-container {
  display: inline-block;
  text-align: center;
  margin-bottom: 20px;
}

.media-content {
  position: relative;
  margin-bottom: 15px;
}

.media-tabs-container {
  display: flex;
  justify-content: center;
}

.media-tabs {
  display: inline-flex;
  background-color: #f8f9fa;
  border-radius: 30px;
  padding: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.media-tab {
  padding: 8px 20px;
  border-radius: 30px;
  color: #6c757d;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  min-width: 80px;
  text-align: center;
}

.media-tab:hover {
  color: #3F83F8;
}

.media-tab.active {
  background-color: #3F83F8;
  color: white;
  box-shadow: 0 2px 5px rgba(63, 131, 248, 0.3);
}

/* 视频样式 */
video {
  max-width: 90%;
  height: auto;
  border-radius: 8px;
}


</style>
