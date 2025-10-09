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
      <span>陕ICP备B2-20150093-8</span>
      <span>陕公网安备61010201000139号</span>
    </p>
    <p class="copy">Copyright &copy; 2015 - {{ new Date().getFullYear() }}  陕西晟思智能测控有限公司 <span class="version">V 0.1.0</span></p>
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
