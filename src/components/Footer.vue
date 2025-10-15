<template>
  <div id="footer" class="container-fluid">
    <div class="logo-title-wrapper">
      <div class="logo">
        <img src="../assets/img/logo_white.png" alt="logo图">
      </div>
      <div class="title">陕西晟思智能测控有限公司</div>
      <div class="qrcodes-wrapper">
        <img src="../assets/img/公众号.jpg" alt="公众号二维码" class="qr-code">
        <img src="../assets/img/抖音二维码2.png" alt="抖音二维码" class="qr-code">
      </div>
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
      <span class="icp-info">ICP备案/许可证号：<a href="https://beian.miit.gov.cn" target="_blank">陕ICP备19022416号-1</a></span>
      <span class="security-info">
        <img src="../assets/img/国徽示例.png" alt="国徽" class="national-emblem">
        陕公网安备号<a href="https://beian.mps.gov.cn/#/" target="_blank"> 00000000000000</a>
      </span>
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
  gap: 20px;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 0;
  display: flex;
  align-items: center;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.title {
  font-size: 25px;
  margin: 0;
  display: flex;
  align-items: center;
}
.qrcodes-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}
.qr-code {
  width: 70px;
  height: 70px;
  object-fit: contain;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.security-info {
  display: flex;
  align-items: center;
  gap: 5px;
}
.national-emblem {
  width: 16px;
  height: 16px;
  vertical-align: middle;
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
    gap: 15px;
  }
  .title {
    font-size: 20px;
  }
  .qrcodes-wrapper {
    justify-content: center;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {
    font-size: 12px;
  }
  .record-info {
    font-size: 12px;
    flex-direction: column;
    gap: 8px;
  }
  .copy {
    font-size: 12px;
    margin: 10px 0;
  }
}
</style>
