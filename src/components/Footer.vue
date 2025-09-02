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
      <span>客户支持中心热线：（029）85820585</span>
    </p>
    <p class="email_wx">
      <span>邮箱：xxx@163.com</span>
      <span>微信号：xxx</span>
    </p>
    <p class="copy">Copyright &copy; 2015 - {{ new Date().getFullYear() }} 陕西晟思智能测控有限公司</p>
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
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
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
  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>
