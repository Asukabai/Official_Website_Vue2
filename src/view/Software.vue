<template>
    <div id="Software" class="container">
        <div class="row">
            <div id="left" class="col-md-3 col-md-offset-1 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>硬件产品</p>
                    <li v-for="(item,index) in hardwareList" :key="index">
                        <router-link :to=item.path>{{item.name}}</router-link>
                    </li>
                </ul>
              <ul class="left-container wow bounceInLeft second-list">
                <p>软件产品</p>
                <li v-for="(item,index) in softwareList" :key="index">
                  <router-link :to=item.path>{{item.name}}</router-link>
                </li>
              </ul>
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
            softwareList: [
              {
                path: '/software/automated_system',
                name: '自动化测控系统'
              },{
                path: '/software/software_platform',
                name: '生产管理平台'
              }
            ],
            hardwareList: [
              {
                path: '/software/electronic_instruments',
                name: '电子设备测试仪器'
              },{
                path: '/software/intelligent_equipment',
                name: '智能调测设备'
              }
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
}
</script>
<style scoped>
#left{
    margin: 50px 0;
}
.left-container{
    width: 60%;
    margin: 0 auto;
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
}
.left-container>li>a{
    text-decoration: none;
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
}
</style>

