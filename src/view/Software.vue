<!--<template>-->
<!--  <div id="Software" class="container">-->
<!--    <div class="row">-->
<!--      <div id="left" class="col-md-3 col-md-offset-1 col-xs-12">-->
<!--        <div class="menu-wrapper">-->
<!--          <ul class="left-container wow bounceInLeft">-->
<!--            <p>电性能负载测试平台</p>-->
<!--            <li v-for="(item,index) in electricalList" :key="index" @click="$router.push(item.path)">-->
<!--              <router-link :to=item.path>{{item.name}}</router-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <ul class="left-container wow bounceInLeft second-list">-->
<!--            <p>力负载模拟测试平台</p>-->
<!--            <li v-for="(item,index) in forceList" :key="index" @click="$router.push(item.path)">-->
<!--              <router-link :to=item.path>{{item.name}}</router-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <ul class="left-container wow bounceInLeft second-list">-->
<!--            <p>软件自动化管理平台</p>-->
<!--            <li v-for="(item,index) in softwareList" :key="index" @click="$router.push(item.path)">-->
<!--              <router-link :to=item.path>{{item.name}}</router-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div id="right" class="col-md-7 col-xs-12  wow bounceInRight">-->
<!--        <router-view></router-view>-->
<!--      </div>-->
<!--    </div>-->
<!--    &lt;!&ndash; 在线咨询组件 &ndash;&gt;-->
<!--    <OnlineConsultation />-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import { WOW } from "wowjs";-->
<!--import OnlineConsultation from "../components/OnlineConsultation.vue";-->
<!--export default {-->
<!--  name: 'Software',-->
<!--  components: {OnlineConsultation},-->
<!--  data(){-->
<!--    return{-->
<!--      softwareList: [-->
<!--        {-->
<!--          path: '/software/electronic_instruments',-->
<!--          name: '智能通用化负载监测平台'-->
<!--        },{-->
<!--          path: '/software/intelligent_equipment',-->
<!--          name: '视觉自动化检测及图像识别平台'-->
<!--        },{-->
<!--          path: '/software/electronic_instruments',-->
<!--          name: 'MES智能制造执行管理系统'-->
<!--        },{-->
<!--          path: '/software/intelligent_equipment',-->
<!--          name: '定制化智能化解决方案'-->
<!--        }-->
<!--      ],-->
<!--      electricalList: [-->
<!--        {-->
<!--          path: '/software/electronic_instruments',-->
<!--          name: '电源自动化测试系统'-->
<!--        },{-->
<!--          path: '/software/intelligent_equipment',-->
<!--          name: '多路通用智能测试系统'-->
<!--        },{-->
<!--          path: '/software/electronic_instruments',-->
<!--          name: '超高速 / 高压电子负载'-->
<!--        },{-->
<!--          path: '/software/intelligent_equipment',-->
<!--          name: 'AGV协作机器人'-->
<!--        }-->
<!--      ],-->
<!--      forceList: [-->
<!--        {-->
<!--          path: '/software/electronic_instruments',-->
<!--          name: '旋转类负载模拟系统'-->
<!--        },{-->
<!--          path: '/software/intelligent_equipment',-->
<!--          name: '直线类负载模拟系统'-->
<!--        },{-->
<!--          path: '/software/electronic_instruments',-->
<!--          name: '起落架、铁鸟类负载模拟系统'-->
<!--        },{-->
<!--          path: '/software/intelligent_equipment',-->
<!--          name: '定制化测试台模拟系统'-->
<!--        }-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    var wow = new WOW();-->
<!--    wow.init();-->
<!--  },-->
<!--}-->
<!--</script>-->
<!--<style scoped>-->
<!--#left{-->
<!--  margin: 50px 0;-->
<!--}-->
<!--.menu-wrapper {-->
<!--  position: fixed;-->
<!--  width: 200px; /* 根据实际需要调整 */-->
<!--  top: 200px; /* 根据header高度调整，避免被遮挡 */-->
<!--  bottom: 500px; /* 确保菜单不会超出底部 */-->

<!--}-->
<!--.left-container{-->
<!--  width: 100%;-->
<!--  border: 1px solid #3F83F8;-->
<!--  border-radius: 5px;-->
<!--}-->
<!--.left-container>p{-->
<!--  text-align: center;-->
<!--  line-height: 45px;-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  background: #3F83F8;-->
<!--  color: #fff;-->
<!--  font-size: 18px;-->
<!--  font-weight: bold;-->
<!--}-->
<!--.left-container>li {-->
<!--  text-align: center;-->
<!--  height: 38px;-->
<!--  line-height: 38px;-->
<!--  margin: 0;-->
<!--  border-top: 1px solid #3F83F8;-->
<!--  cursor: pointer;-->
<!--}-->
<!--.left-container>li>a{-->
<!--  text-decoration: none;-->
<!--  display: block;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->
<!--.left-container>li:hover{-->
<!--  background: #928989;-->
<!--}-->

<!--.second-list {-->
<!--  margin-top: 30px;-->
<!--}-->

<!--#right{-->
<!--  padding: 50px 0;-->
<!--}-->
<!--@media screen and (max-width: 768px){-->
<!--  #right{-->
<!--    padding: 15px;-->
<!--  }-->
<!--  .menu-wrapper {-->
<!--    position: static;-->
<!--    width: auto;-->
<!--  }-->
<!--}-->
<!--</style>-->


<template>
  <div id="Software" class="container">
    <div class="row">
      <div id="left" class="col-md-3 col-md-offset-1 col-xs-12">
        <div class="menu-wrapper" :style="{ maxHeight: menuMaxHeight + 'px' }">
          <ul class="left-container wow bounceInLeft">
            <p>电性能负载测试平台</p>
            <li v-for="(item,index) in electricalList" :key="index" @click="$router.push(item.path)">
              <router-link :to=item.path>{{item.name}}</router-link>
            </li>
          </ul>
          <ul class="left-container wow bounceInLeft second-list">
            <p>力负载模拟测试平台</p>
            <li v-for="(item,index) in forceList" :key="index" @click="$router.push(item.path)">
              <router-link :to=item.path>{{item.name}}</router-link>
            </li>
          </ul>
          <ul class="left-container wow bounceInLeft second-list">
            <p>软件自动化管理平台</p>
            <li v-for="(item,index) in softwareList" :key="index" @click="$router.push(item.path)">
              <router-link :to=item.path>{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div id="right" class="col-md-7 col-xs-12  wow bounceInRight">
        <router-view></router-view>
      </div>
    </div>
    <!-- 在线咨询组件 -->
    <OnlineConsultation />
  </div>
</template>
<script>
import { WOW } from "wowjs";
import OnlineConsultation from "../components/OnlineConsultation.vue";
export default {
  name: 'Software',
  components: {OnlineConsultation},
  data(){
    return{
      menuMaxHeight: 600, // 默认最大高度
      softwareList: [
        {
          path: '/software/electronic_instruments',
          name: '智能通用化负载监测平台'
        },{
          path: '/software/intelligent_equipment',
          name: '视觉自动化检测及图像识别平台'
        },{
          path: '/software/electronic_instruments',
          name: 'MES智能制造执行管理系统'
        },{
          path: '/software/intelligent_equipment',
          name: '定制化智能化解决方案'
        }
      ],
      electricalList: [
        {
          path: '/software/electronic_instruments',
          name: '电源自动化测试系统'
        },{
          path: '/software/intelligent_equipment',
          name: '多路通用智能测试系统'
        },{
          path: '/software/electronic_instruments',
          name: '超高速 / 高压电子负载'
        },{
          path: '/software/intelligent_equipment',
          name: 'AGV协作机器人'
        }
      ],
      forceList: [
        {
          path: '/software/electronic_instruments',
          name: '旋转类负载模拟系统'
        },{
          path: '/software/intelligent_equipment',
          name: '直线类负载模拟系统'
        },{
          path: '/software/electronic_instruments',
          name: '起落架、铁鸟类负载模拟系统'
        },{
          path: '/software/intelligent_equipment',
          name: '定制化测试台模拟系统'
        }
      ]
    }
  },
  mounted() {
    var wow = new WOW();
    wow.init();
    this.updateMenuHeight();
    window.addEventListener('resize', this.updateMenuHeight);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateMenuHeight);
  },
  methods: {
    updateMenuHeight() {
      // 获取页眉和页脚的高度
      const header = document.getElementById('header');
      const footer = document.getElementById('footer');

      // 计算可用的垂直空间
      const headerHeight = header ? header.offsetHeight : 200;
      const footerHeight = footer ? footer.offsetHeight : 150;
      const windowHeight = window.innerHeight;

      // 设置菜单最大高度，留出一些间距
      this.menuMaxHeight = windowHeight - headerHeight - footerHeight - 40;
    }
  }
}
</script>
<style scoped>
#left{
  margin: 50px 0;
}
.menu-wrapper {
  position: fixed;
  width: 200px; /* 根据实际需要调整 */
  top: 200px; /* 根据header高度调整，避免被遮挡 */
  overflow-y: auto; /* 允许垂直滚动 */
}
.left-container{
  width: 100%;
  border: 1px solid #3F83F8;
  border-radius: 5px;
}
.left-container>p{
  text-align: center;
  line-height: 45px;
  padding: 0;
  margin: 0;
  background: #3F83F8;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.left-container>li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  border-top: 1px solid #3F83F8;
  cursor: pointer;
}
.left-container>li>a{
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.left-container>li:hover{
  background: #928989;
}

.second-list {
  margin-top: 30px;
}

#right{
  padding: 50px 0;
}
@media screen and (max-width: 768px){
  #right{
    padding: 15px;
  }
  .menu-wrapper {
    position: static;
    width: auto;
    max-height: none !important;
    overflow-y: visible;
  }
}
</style>

