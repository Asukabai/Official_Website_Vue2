<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">联系我们</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div style="font-size: 18px; line-height: 36px; margin: 40px 0;">
              <p><strong>全国客户咨询服务热线：</strong></p>
              <p style="color: red;"> 18629057799 </p>
              <p><strong>E-mail：</strong>hr@sensor-smart.com </p>
              <p><strong>总部地址：</strong> 陕西省西安市长安区建工科技创业基地2号楼1单元5层6层 </p>
              <p><strong>山西分公司地址：</strong> 山西省太原市尖草坪区国科大南街晋创谷太原一号厂房 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 在线咨询组件 -->
    <OnlineConsultation />
  </div>
</template>

<script>
import OnlineConsultation from "../components/OnlineConsultation.vue";

export default {
  name: "ContactUs",
  components: {OnlineConsultation},
  data() {
    return {};
  }
};
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}


@media screen and (max-width: 997px) {
  .banner {
    display: none;
  }

  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>
