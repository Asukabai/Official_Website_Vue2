<template>
  <div id="NewsInformation">
    <div class="container">
      <div class="container text-center">
        <h3>关于我们</h3>
        <p style="color:#b2b2b2">Company News</p>
      </div>
      <div class="nav container text-center">
        <a href="#" class="active" @click.prevent="activeTab='大事记'">大事记</a>
        <a href="#" @click.prevent="activeTab='创新成果'">创新成果</a>
      </div>
      <!-- 大事记内容 -->
      <ul v-show="activeTab==='大事记'" class="news-container container-fuild">
        <li v-for="(item,index) in newsList" :key="index" class="wow fadeIn">
          <div class="content">
            <p>{{item.title}}</p>
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
      <div v-show="activeTab==='创新成果'" class="container">
        <div class="row innovation-container">
          <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
            <img class="img-responsive center-block" src="../assets/img/Patent_Certificate.png">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h3>陕西晟思智能测控有限公司</h3>
            <p class=".text-justify">有家软件公司, 是一家以高科技创意为核心的技术服务公司, 聚集了众多对软件开发和界面设计有独特创意的高端人才, 致力于为企业提供软件开发, 网站建设, 网页设计, IT外包, 手机应用开发, 互联网营销, 微信平台开发等解决方案。</p>
            <p class=".text-justify">我们的客户包括集团上市公司, 酒店, IT科技, 教育, 服装, 贸易, 外贸, 时尚, 生物, 工业, 制造等众多行业, 并树立了良好的口碑, 积累了丰富的经验和成功案例. 我们提供权威专业的互联网品牌策划, 并实施高标准的设计方案, 创造真正意义上的品牌网站, 为互联网品牌在互动行销领域创造最大价值而不懈努力!</p>
          </div>
        </div>
      </div>

      <div v-show="activeTab==='大事记'" class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
  name: 'NewsInformation',
  data(){
    return{
      activeTab: '大事记',
      newsList:[
        {
          id: '001',
          title: '世界上第一个程序员',
          introduce: '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
          date: '05-24',
          year: '2019'
        },{
          id: '002',
          title: '世界上第二个程序员',
          introduce: '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
          date: '05-24',
          year: '2019'
        },{
          id: '003',
          title: '世界上第三个程序员',
          introduce: '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
          date: '05-24',
          year: '2019'
        },{
          id: '004',
          title: '世界上第四个程序员',
          introduce: '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
          date: '05-24',
          year: '2019'
        },{
          id: '005',
          title: '世界上第五个程序员',
          introduce: '为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机',
          date: '05-24',
          year: '2019'
        },{
          id: '006',
          title: '世界上第六个程序员',
          introduce: '为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机',
          date: '05-24',
          year: '2019'
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
