<template>
  <div id="NewsInformation">
    <div class="container">
      <div class="container text-center">
        <h3>关于我们</h3>
        <p style="color:#b2b2b2">Company News</p>
      </div>
      <div class="nav container text-center">
        <a href="#" :class="{ active: activeTab==='大事记' }" @click.prevent="activeTab='大事记'">大事记</a>
        <a href="#" :class="{ active: activeTab==='资质成果' }" @click.prevent="activeTab='资质成果'">资质成果</a>
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
            <!-- 将单张图片改为三图轮播 -->
            <div class="company-image-carousel" style="position: relative; overflow: hidden; height: auto;">
              <div class="carousel-wrapper" style="overflow: hidden;">
                <div class="carousel-track" :style="{ transform: 'translateX(' + (-companyImageIndex * 100) + '%)' }" style="display: flex; transition: transform 0.5s ease-in-out;">
                  <div class="carousel-slide" style="flex: 0 0 100%;">
                    <img class="img-responsive center-block" src="../assets/img/Patent_Certificate.png" alt="公司专利证书">
                  </div>
                  <div class="carousel-slide" style="flex: 0 0 100%;">
                    <img class="img-responsive center-block" src="../assets/img/证书合集.png" alt="证书合集">
                  </div>
                  <div class="carousel-slide" style="flex: 0 0 100%;">
                    <img class="img-responsive center-block" src="../assets/img/西安总部.png" alt="西安总部">
                  </div>
                  <div class="carousel-slide" style="flex: 0 0 100%;">
                    <img class="img-responsive center-block" src="../assets/img/山西分公司.png" alt="山西分公司">
                  </div>
                </div>
              </div>

              <!-- 轮播导航点 -->
              <div class="carousel-indicators" style="display: flex; justify-content: center; margin-top: 15px;">
                <span
                  v-for="(slide, index) in 4"
                  :key="index"
                  :class="{ active: companyImageIndex === index }"
                  @click="companyImageIndex = index"
                  style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #ccc; margin: 0 5px; cursor: pointer; transition: background-color 0.3s;"
                ></span>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h3>陕西晟思智能测控有限公司</h3>
            <p class=".text-justify">陕西晟思智能测控有限公司成立于2015年，是一家专注于自动化测控与智能制造领域的高新技术企业。公司长期致力于力性能与电性能测控技术的研发与应用，核心产品涵盖自动化测控系统、负载模拟系统、超高速/高压电子负载、仿真测试平台、视觉自动化检测与图像识别系统、高精度传感器、EHA液压设备等，广泛应用于航天、航空、军工、能源、核工业、船舶及智能实验室等高精尖行业。 晟思智能以"机、电、控、软一体化"为技术路径，为高端制造客户提供智能化的整体解决方案，助力产业升级与技术创新。公司先后获得国家高新技术企业、陕西省"专精特新"企业、省市"瞪羚企业"、软件企业认定，并被评为陕西省AAA级信誉单位、西咸新区"双创之星"等多项荣誉，具备完善的质量管理体系认证和持续的创新能力，以领先技术和可靠服务赢得行业信赖。</p>
          </div>
        </div>

        <!-- 资质证书轮播图 -->
        <h3 class="carousel-title">资质证书</h3>
        <div class="carousel-container">
          <div class="carousel-wrapper">
            <div class="carousel-track" :style="{ transform: 'translateX(' + (-currentIndex * 33.33) + '%)' }">
              <div class="carousel-slide" v-for="(image, index) in certificateImages" :key="index">
                <img :src="image.src" :alt="image.alt" class="certificate-image" @click="openImageModal(image.src)">
                <p class="certificate-title">{{ image.title }}</p>
              </div>
            </div>
          </div>

          <!-- 轮播导航点 -->
          <div class="carousel-indicators">
            <span
              v-for="(image, index) in visibleIndicators"
              :key="index"
              :class="{ active: Math.floor(currentIndex / 3) === index }"
              @click="goToSlide(index)"
            ></span>
          </div>
        </div>

        <!-- 专利证书轮播图 -->
        <h3 class="carousel-title">专利证书</h3>
        <div class="carousel-container">
          <div class="carousel-wrapper">
            <div class="carousel-track" :style="{ transform: 'translateX(' + (-patentCurrentIndex * 33.33) + '%)' }">
              <div class="carousel-slide" v-for="(image, index) in patentImages" :key="index">
                <img :src="image.src" :alt="image.alt" class="certificate-image patent-image" @click="openImageModal(image.src)">
                <p class="certificate-title">{{ image.title }}</p>
              </div>
            </div>
          </div>

          <!-- 轮播导航点 -->
          <div class="carousel-indicators">
            <span
              v-for="(image, index) in patentVisibleIndicators"
              :key="index"
              :class="{ active: Math.floor(patentCurrentIndex / 3) === index }"
              @click="goToPatentSlide(index)"
            ></span>
          </div>
        </div>

        <!-- 图片放大展示模态框 -->
        <div class="image-modal" v-if="showImageModal" @click="closeImageModal">
          <span class="close" @click="closeImageModal">&times;</span>
          <img class="modal-content" :src="modalImageSrc">
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
      currentIndex: 0,
      patentCurrentIndex: 0,
      companyImageIndex: 0, // 公司图片轮播索引
      showImageModal: false,
      modalImageSrc: '',
      certificateImages: [
        { src: require('../assets/img/瞪羚企业.png'), alt: '瞪羚企业' },
        { src: require('../assets/img/高新技术企业.png'), alt: '高新技术企业' },
        { src: require('../assets/img/AAA级信誉单位.png'), alt: 'AAA级信誉单位' },
        { src: require('../assets/img/软件会员.png'), alt: '软件会员' },
        { src: require('../assets/img/最佳软件企业.png'), alt: '最佳软件企业' },
        { src: require('../assets/img/软件企业证书.png'), alt: '最佳软件企业' },
        { src: require('../assets/img/陕西省特精专精.png'), alt: '陕西省特精专精' },
        { src: require('../assets/img/国军标.png'), alt: '国军标' },
        { src: require('../assets/img/军民融合企业.png'), alt: '军民融合企业' },
      ],
      patentImages: [
        { src: require('../assets/img/发明专利证书1.png'), alt: '专利证书1' },
        { src: require('../assets/img/发明专利证书2.png'), alt: '专利证书2' },
        { src: require('../assets/img/发明专利证书3.png'), alt: '专利证书3' },
        { src: require('../assets/img/发明专利证书4.png'), alt: '专利证书4' },
        { src: require('../assets/img/发明专利证书5.png'), alt: '专利证书5' },
        { src: require('../assets/img/发明专利证书6.png'), alt: '专利证书6' },
        { src: require('../assets/img/发明专利证书7.png'), alt: '专利证书7' },
        { src: require('../assets/img/外观专利证书.png'), alt: '外观专利证书' },
        { src: require('../assets/img/实用新型专利.png'), alt: '实用新型专利' },
      ],
      newsList:[
        {
          id: '001',
          title: '公司成立十周年"',
          introduce: '十周年，是一座重要的里程碑。它见证了公司从初创到壮大的奋斗历程，承载着所有员工的汗水与智慧，凝聚了客户与伙伴的长期信任。这十年，是砥砺前行的十年，是创新超越的十年。感恩一路同行的每一个人，新起点，让我们携手再启新征程，共铸下一个辉煌十年！',
          date: '07-07',
          year: '2025'
        },
        {
          id: '002',
          title: '荣获陕西省 "规上企业"',
          introduce: '获得"规上企业"认定，标志着公司在规模和效益方面达到了规模以上企业的标准，展现了良好的发展态势和市场竞争力，为今后的高质量发展奠定了坚实基础；',
          date: '03-19',
          year: '2025'
        },
        {
          id: '003',
          title: '荣获陕西省 "瞪羚企业" ',
          introduce: '由陕西省科学技术厅颁发的"瞪羚企业"证书，是对公司卓越成长性与强大创新实力的权威认证。这份荣誉不仅代表着政府部门对我们高速成长性和创新潜力的高度认可，更是一份沉甸甸的责任和一个新的起点 ；',
          date: '10-18',
          year: '2024'
        },{
          id: '004',
          title: '获陕西省 "专精特新" 企业',
          introduce: '"专精特新"认定，表明公司在细分领域的技术实力、产品质量、创新能力处于较高水平，是企业核心竞争力的体现。这一荣誉充分肯定了我们在专业化、精细化、特色化、新颖化发展道路上取得的显著成效 ；',
          date: '04-02',
          year: '2023'
        },{
          id: '005',
          title: '获陕西省 "秦创原优秀科创" 企业',
          introduce: '标志着公司发展模式和质量获得了政府与市场高度认可，是对我司专业化发展路径的权威认证。作为秦创原优秀科技创新企业，我们将继续加快科技成果转化，为推动区域科技创新和产业升级作出更大贡献 ；',
          date: '07-02',
          year: '2022'
        },{
          id: '006',
          title: '荣获陕西省"最佳创新软件企业"',
          introduce: '彰显了我们在软件研发、自主创新和产品化应用方面所处的领先地位。充分证明了我司的技术路线、研发体系及创新成果获得了政府与行业的广泛认可，极大地提升了品牌在信息技术领域的专业形象与公信力 ；',
          date: '9-11',
          year: '2021'
        },{
          id: '007',
          title: '陕西省"AAA级信誉"单位',
          introduce: '"AAA级信誉"作为陕西省最高信用等级认证，不仅是金融机构授信、政府采购招标的重要参考依据，更是我们赢得客户信赖、建立长期合作的"金字招牌"，为公司可持续发展奠定了坚实基础 ；',
          date: '03-21',
          year: '2020'
        },{
          id: '008',
          title: '陕西省最佳创新软件企业西安市军民融合企业',
          introduce: '军民融合企业"资质为我们开辟了特殊市场通道。这一认定不仅体现了我司技术和产品满足军工领域严苛要求的实力，更意味着公司正式融入了国家军民融合发展战略体系 ；',
          date: '06-08',
          year: '2018'
        },
        {
          id: '009',
          title: '国军标质量管理体系认证"',
          introduce: '荣获国军标（GJB 9001B-2009标准）质量管理体系认证，标志着公司管理发展走向了新阶段。这一认证充分证明了我们在产品质量、服务保障、过程管控等方面达到了军工标准的严格要求 ；',
          date: '09-06',
          year: '2017'
        },
        {
          id: '010',
          title: '荣获西咸新区"双创之星"',
          introduce: '"双创之星"是公司迈向高质量发展新阶段的重要里程碑。这一荣誉充分肯定了我们在创新创业领域的突出表现和示范作用，体现了西咸新区对我们发展理念、商业模式和成长潜力的高度认可 ；',
          date: '06-04',
          year: '2017'
        },{
          id: '011',
          title: '荣获民营科技企业认定',
          introduce: '"民营科技企业"的认定，这份荣誉对于初创发展阶段的我们而言，意义深远，价值重大。为公司后续发展提供了政策支持和品牌背书，为我们在科技发展道路上奠定了坚实基础 ；',
          date: '11-24',
          year: '2016'
        },{
          id: '012',
          title: '陕西晟思智能测控有限公司成立',
          introduce: '公司自成立之初就确立了"技术驱动、创新发展"的核心理念，致力于为客户提供高质量的智能测控解决方案，为推动行业技术进步和产业发展贡献力量 ；',
          date: '07-07',
          year: '2015'
        }
      ]
    }
  },

  computed: {
    visibleIndicators() {
      // 计算需要多少个导航点（每页显示3张图片）
      return Array(Math.ceil(this.certificateImages.length / 3)).fill(0);
    },
    patentVisibleIndicators() {
      // 计算需要多少个导航点（每页显示3张图片）
      return Array(Math.ceil(this.patentImages.length / 3)).fill(0);
    }
  },
  mounted(){
    var wow = new WOW();
    wow.init();

    // 设置定时器，每3秒自动切换
    this.startAutoPlay();
    this.startPatentAutoPlay();
    this.startCompanyImageAutoPlay(); // 启动公司图片自动轮播
  },
  methods: {
    startAutoPlay() {
      setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    nextSlide() {
      // 计算最大索引值（每页显示3张图片）
      const maxIndex = Math.ceil(this.certificateImages.length / 3) * 3 - 3;

      if (this.currentIndex < maxIndex) {
        this.currentIndex += 3;
      } else {
        this.currentIndex = 0;
      }
    },
    goToSlide(index) {
      this.currentIndex = index * 3;
    },
    startPatentAutoPlay() {
      setInterval(() => {
        this.nextPatentSlide();
      }, 4000);
    },
    nextPatentSlide() {
      // 计算最大索引值（每页显示3张图片）
      const maxIndex = Math.ceil(this.patentImages.length / 3) * 3 - 3;

      if (this.patentCurrentIndex < maxIndex) {
        this.patentCurrentIndex += 3;
      } else {
        this.patentCurrentIndex = 0;
      }
    },
    goToPatentSlide(index) {
      this.patentCurrentIndex = index * 3;
    },
    // 公司图片自动轮播方法
    startCompanyImageAutoPlay() {
      setInterval(() => {
        this.nextCompanyImage();
      }, 3000);
    },
    nextCompanyImage() {
      this.companyImageIndex = (this.companyImageIndex + 1) % 4;
    },
    // 打开图片放大模态框
    openImageModal(src) {
      this.modalImageSrc = src;
      this.showImageModal = true;
      // 禁止背景滚动
      document.body.style.overflow = 'hidden';
    },
    // 关闭图片放大模态框
    closeImageModal() {
      this.showImageModal = false;
      this.modalImageSrc = '';
      // 恢复背景滚动
      document.body.style.overflow = 'auto';
    }
  },
  beforeDestroy() {
    // 清除定时器
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
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

/* 轮播图标题样式 */
.carousel-title {
  text-align: center;
  font-weight: bold;
  margin: 30px 0 15px 0;
}

/* 轮播图样式 */
.carousel-container {
  margin: 50px 0;
  position: relative;
  overflow: hidden;
}

.carousel-wrapper {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-slide {
  flex: 0 0 33.33%;
  padding: 0 15px;
  box-sizing: border-box;
  text-align: center;
}

.certificate-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.certificate-image:hover {
  transform: scale(1.05);
}

/* 专利图片特殊样式 - 适应长方形 */
.patent-image {
  height: 450px;
}

.certificate-title {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.carousel-indicators span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carousel-indicators span.active {
  background-color: #1e73be;
}

/* 图片放大模态框样式 */
.image-modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  display: block;
  margin: 5% auto;
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.close {
  position: absolute;
  top: 30px;
  right: 45px;
  color: #f1f1f1;
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
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

  .carousel-slide {
    flex: 0 0 100%;
  }

  .modal-content {
    width: 95%;
  }

  .close {
    top: 15px;
    right: 20px;
    font-size: 35px;
  }

  /* 移动端专利图片高度调整 */
  .patent-image {
    height: 200px;
  }
}
</style>
