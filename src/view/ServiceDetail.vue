<template>
  <div id="ServiceDetail">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>特色服务</p>
            <li
              :class="item.id==id?'active':''"
              v-for="(item,index) in serviceNavList"
              :key="index"
            >
              <a :href="'#'+item.id">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
          <div class="content-block" v-for="(item,index) in serviceContentList" :key="index">
            <h2 :id="item.id">
              {{item.title}}
              <small>/ {{item.eng_title}}</small>
            </h2>
            <div v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import OnlineConsultation from "../components/OnlineConsultation.vue";
export default {
  name: "ServiceDetail",
  components: {OnlineConsultation},
  data() {
    return {
      id: "section-1",
      serviceNavList: [
        {
          id: "section-1",
          title: "自动化系统设备的设计和研制、生产"
        },
        {
          id: "section-2",
          title: "信息化、自动化软件平台定制化开发"
        },
        {
          id: "section-3",
          title: "仿真分析及相关设备"
        },
        {
          id: "section-4",
          title: "测试仪器、电子设备"
        }
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "自动化系统设备的设计和研制、生产",
          eng_title: "Automation System",
          content:
            "<h3>电源智能测试系统</h3>" +
            "<img src='" + require('../assets/img/电源智能测试系统.png') + "' alt='自动化系统设备示例' class='content-image'>" +
            "<h3>柔性生产线系统</h3>" +
            "<img src='" + require('../assets/img/柔性生产线系统.png') + "' alt='柔性生产线系统' class='content-image'>"
        },
        {
          id: "section-2",
          title: "信息化、自动化软件平台定制化开发",
          eng_title: "Software Platform",
          content:
            "<h3>电源自动化测试系统</h3>" +
            "<img src='" + require('../assets/img/电源自动化测试系统.png') + "' alt='软件平台开发示例' class='content-image'>"+
            "<h3>实时数据监控采集系统</h3>" +
            "<img src='" + require('../assets/img/实时数据监控采集系统.png') + "' alt='软件平台开发示例' class='content-image'>"
        },
        {
          id: "section-3",
          title: "仿真分析及相关设备",
          eng_title: "Simulation Analysis",
          content:
            "<h3>煤岩显微组分图像背景噪声自动识别与剔除系统</h3><img src='" + require('../assets/img/智能调测设备.png') + "' alt='仿真分析设备示例' class='content-image'>" +
            "<h3>电路板器件识别及缺陷检测</h3><img src='" + require('../assets/img/电路板元器件识别.png') + "' alt='仿真结果示例' class='content-image'>"
        },
        {
          id: "section-4",
          title: "测试仪器、电子设备",
          eng_title: "Test Instruments",
          content:
            "<h3>高温自动测温仪</h3><img src='" + require('../assets/img/高温自动测温仪.png') + "' alt='测试仪器示例' class='content-image'>" +
            "<h3>电子负载系列</h3><img src='" + require('../assets/img/超高速超高压电子负载.png') + "' alt='电子设备示例' class='content-image'>"
        }
      ]
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var top = document.getElementById(this.id).offsetTop;
    $(window).scrollTop(top + 300);
    $("#myNav").affix({
      offset: {
        top: 300
      }
    });
    var wow = new WOW();
    wow.init();
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
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #3F83F8;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #3F83F8;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #3F83F8;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  background: #3F83F8;
  border: 1px solid #3F83F8;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix {
  top: 30px;
}
.content-block {
  margin: 50px 0;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}

.content-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
