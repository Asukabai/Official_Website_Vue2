<template>
  <div id="NewsInformation">
    <div class="container">
      <div class="container text-center">
        <h3>关于我们</h3>
        <p style="color:#b2b2b2">Company News</p>
      </div>
      <div class="nav container text-center">
        <a href="#" class="active" @click.prevent="activeTab='大事记'">大事记</a>
        <a href="#" @click.prevent="activeTab='资质成果'">资质成果</a>
      </div>
      <!-- 大事记内容 -->
      <ul v-show="activeTab==='大事记'" class="news-container container-fuild">
        <li v-for="(item,index) in newsList" :key="index" class="wow fadeIn">
          <div class="content">
            <p class="news-title">{{item.title}}</p>
            <p>{{item.introduce}}</p>
          </div>
          <div class="time">
            <p>{{item.date}}</p>
            <span>{{item.year}}</span>
          </div>
          <div class="circle">
            <img src="../assets/img/circle.png">
            <i class="line center-block"></i>
          </div>
        </li>
      </ul>

      <!-- 创新成果内容 (CompanyIntroduction的内容) -->
      <div v-show="activeTab==='资质成果'" class="container">
        <div class="row innovation-container">
          <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
            <img class="img-responsive center-block" src="../assets/img/Patent_Certificate.png">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h3>陕西晟思智能测控有限公司</h3>
            <p class=".text-justify">公司是一家专注于工业 4.0 自动化控制领域的创新型高科技公司，是西咸新区重点扶持的高科技企业，致力于电源自动化测试系统、航空电机自动化测试系统、生产线智能化改造、控制驱动系统、仿真测试平台(电机负载平台、多方向、惯性导航及定制测试仪器或测试平台)、研发生产任务管理系统、信息采集监控系统、视觉自动化检测及图像识别系统、超高速/高压电子负载、程控电容电阻、智能温湿度箱、AGV 协作机器人等领域系统及产品的研发、生产和销售；产品已广泛应用于航空航天、电力电子、通信、煤炭、环境监测、智能实验室等行业。</p>
            </div>
        </div>
      </div>

      <div v-show="activeTab==='大事记'" class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>
    </div>
    <!-- 在线咨询组件 -->
    <OnlineConsultation />

  </div>
</template>
<script>
import { WOW } from 'wowjs';
import OnlineConsultation from "../components/OnlineConsultation.vue";
export default {
  name: 'NewsInformation',
  components: {OnlineConsultation},
  data(){
    return{
      activeTab: '大事记',
      newsList:[
        {
          id: '001',
          title: '荣获陕西省 “瞪羚企业”，“规上企业”',
          introduce: '由陕西省科学技术厅颁发的“瞪羚企业”证书，是对公司卓越成长性与强大创新实力的权威认证 ，不仅是一份崇高的肯定，更是一份沉甸甸的责任和一个新的起点 ；',
          date: '10-18',
          year: '2024'
        },{
          id: '002',
          title: '获陕西省“专精特新”企业，秦创原优秀科创企业',
          introduce: '标志着公司发展模式和质量获得了政府与市场高度认可，是对我司专业化发展路径权威认证。"专精特新"认定，表明公司在细分领域的技术实力、产品质量、创新能力处于较高水平，是企业核心竞争力的体现 ；',
          date: '07-02',
          year: '2022'
        },{
          id: '003',
          title: '荣获陕西省“最佳创新软件企业“',
          introduce: '彰显了我们在软件研发、自主创新和产品化应用方面所处的领先地位。充分证明了我司的技术路线、研发体系及创新成果获得了政府与行业的认可，极大地提升了品牌在信息技术领域的专业形象与公信力 ；',
          date: '9-11',
          year: '2021'
        },{
          id: '004',
          title: '陕西省“AAA级信誉”单位，陕西省最佳创新软件企业西安市军民融合企业',
          introduce: '“AAA级信誉”作为陕西省最高信用等级认证，不仅是金融机构授信、政府采购招标的重要参考依据，更是我们赢得客户信赖、建立长期合作的"金字招牌"。军民融合企业"资质为我们开辟了特殊市场通道。 这一认定不仅体现了我司技术和产品满足军工领域要求的实力，更意味着公司正式融入了国家军民融合发展战略体系 ；',
          date: '03-29',
          year: '2020'
        },
        {
          id: '005',
          title: '国军标质量管理体系认证，西咸新区“双创之星',
          introduce: '荣获国军标（GJB 9001B-2009标准）质量管理体系认证与西咸新区“双创之星”称号，是公司迈向高质量发展新阶段的重要阶段里程碑 ；',
          date: '11-04',
          year: '2016'
        },{
          id: '006',
          title: '陕西晟思智能测控有限公司成立，荣获民营科技企业认定',
          introduce: '公司成立初始，便取得了“民营科技企业”的认定，这份荣誉对于初创发展阶段的我们而言，意义深远，价值重大 ；',
          date: '05-24',
          year: '2015'
        }
      ]
    }
  },
  mounted(){
    var wow = new WOW();
    wow.init();
  },
}
</script>
<style scoped>
.nav{
  margin: 20px 0;
}
.nav>a{
  display: inline-block;
  text-decoration: none;
  width: 120px;
  height: 45px;
  line-height: 45px;
  color: #333;
  border: 1px solid #333;
}
.nav>a.active{
  color: #1e73be;
  border-color: #1e73be;
}
.nav>a:hover{
  color: #1e73be;
  border-color: #1e73be;
}
/* 添加创新成果标签激活样式 */
.nav>a.active {
  color: #1e73be;
  border-color: #1e73be;
}
.news-container{
  overflow: hidden;
  margin-bottom: 0;
}
.news-container>li{
  width: 55.6%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.news-container>li:hover{
  color: #1e73be;
  border: 1px solid #1e73be;
  cursor: pointer;
}
.news-container>li:nth-of-type(2n){
  float: right;
  text-align: left;
}
.news-container>li>.content{
  width: 60%;
  float: left;
  padding: 20px 0;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.news-container>li>.time{
  width: 20%;
  float: left;
  padding: 10px 0;
}
.news-container>li>.time>p{
  font-size: 30px;
  margin: 5px 0;
}
.news-container>li>.circle{
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}
.news-container>li>.circle>img{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}
.news-container>li>.circle>i{
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}
.news-container>li:nth-of-type(2n)>.content{
  float: right;
}
.news-container>li:nth-of-type(2n)>.time{
  float: right;
}
.news-container>li:nth-of-type(2n)>.circle{
  float: right;
}
.news-container>li:nth-of-type(1)>.circle>i{
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.more{
  font-size: 25px;
  color: #707070;
}
.more>i{
  cursor: pointer;
}
/* 添加创新成果内容样式 */
.innovation-container{
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.innovation-container>div>p{
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px){
  .innovation-container{
    padding: 10px 0;
    color: #808080;
  }
}
@media screen and (max-width: 767px){
  .news-container>li{
    width: 100%;
  }
  .news-container>li>.content{
    width: 70%;
    text-align: left;
    float: right;
  }
  .news-container>li>.time{
    width: 30%;
    text-align: left;
    float: right;
  }
  .news-container>li>.circle{
    display: none;
  }
}
</style>
