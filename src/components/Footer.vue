<template>
  <div id="footer" class="container-fluid">
    <div class="logo-title-wrapper">
      <div class="logo">
        <img src="../assets/img/logo_white.png" alt="logo图">
      </div>
      <p class="title">陕西晟思智能测控有限公司</p>
    </div>
    <p class="address_tel_fax">
      <span>地址：陕西省西安市长安区建工科技创业基地2号楼1单元5层6层</span>
      <span>   </span>
      <span>客户支持中心热线：18629057799</span>
      <span>微信号：wangxq1975</span>
    </p>
    <p class="email_wx">
    </p>
    <p class="record-info">
      <span>ICP备案/许可证号：<a href="https://beian.miit.gov.cn" target="_blank">陕ICP备19022416号-1</a></span>
      <span>陕公网安备号<a href="https://beian.mps.gov.cn/#/" target="_blank"> 00000000000000</a></span>
    </p>
    <p class="copy">Copyright &copy; 2019 - {{ new Date().getFullYear() }}  陕西晟思智能测控有限公司 <span class="version">V 0.1.2</span></p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<!--//  默认链接样式：浏览器默认会给 <a> 标签应用蓝色字体颜色和下划线样式
// CSS优先级：虽然 .record-info 设置了 color: #d3d3d3，但 <a> 标签的默认样式优先级更高链接文字颜色与普通文本保持一致（#d3d3d3）
// 去除默认下划线
// 鼠标悬停时变为白色并显示下划线，提升用户体验-->
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #3f83f8;
  overflow: hidden;
  text-align: center;
}
.logo-title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 20px;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 0;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.title {
  font-size: 25px;
  margin: 0 0 0 20px;
}

.version {
  font-weight: bold;
}

.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.record-info {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.record-info span {
  margin: 0 10px;
}

.record-info a {
  color: #d3d3d3;
  text-decoration: none;
}

.record-info a:hover {
  color: #ffffff;
  text-decoration: underline;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0 10px;
}
@media screen and (max-width: 997px) {
  .logo-title-wrapper {
    flex-direction: column;
  }
  .title {
    font-size: 20px;
    margin: 20px 0 0 0;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {
    font-size: 12px;
  }
  .record-info {
    font-size: 12px;
  }
  .copy {
    font-size: 12px;
    margin: 10px 0;
  }
}
</style>
