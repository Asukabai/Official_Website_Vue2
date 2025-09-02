<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left">
          <span class="glyphicon glyphicon-earphone"></span>888-888-888
          <span class="glyphicon glyphicon-envelope"></span>xxx@163.com
          <span class="glyphicon glyphicon-time"></span>7x24小时为您服务
        </div>
        <div class="shejiao pull-right">
          <span class="glyphicon glyphicon-hand-right"></span>赶快联系我们吧！
          <span class="glyphicon glyphicon-hand-left"></span>
        </div>
      </div>
    </div>
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo和公司名称 -->
      <div class="header-nav-logo">
        <img src="../assets/img/logo_white.png">
        <p>陕西晟思智能测控有限公司</p>
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="index==navIndex?'active':''"
          @click="navClick(index,item.name)"
        >
          <router-link :to="item.path">
            {{item.name}}
            <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length>0">
            <dt v-for="(i,n) in item.children" :key="n">
              <router-link :to="i.path">{{i.name}}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="../assets/img/logo_white.png" alt="logo">
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            @click="navClick(index,item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{item.name}}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
          children: []
        },
        {
          name: "产品列表",
          path: "/software",
          children: [
            {
              name: "智能小镇管理系统",
              path: "/software/smartTown"
            },
            {
              name: "大数据管理系统",
              path: "/software/bigData"
            }
          ]
        },
        {
          name: "解决方案",
          path: "/service",
          children: []
        },{
          name: "合作案例",
          path: "/service",
          children: []
        },
        {
          name: "公司介绍",
          path: "/newsinformation",
          children: []
        },
        {
          name: "联系我们",
          path: "/contactus",
          children: []
        }
      ]
    };
  },
  methods: {
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
/* 顶部 */
#header {
  background: #f4f4f4;
  transition: all ease 0.6s;
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #3F83F8;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px; /* 减少左侧内边距，使内容更靠左 */
}
/* 导航栏logo和公司名称容器 */
#header .header-nav .header-nav-logo {
  display: flex;
  align-items: center;
  margin-right: 20px;
  flex-shrink: 0;
  margin-left: -15px; /* 增加负左边距，使logo更靠左 */
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 75px;
  height: 75px;
  margin-right: 15px;
}
/* 公司名称样式 - 增大字体大小 */
#header .header-nav .header-nav-logo p {
  margin: 0;
  font-size: 22px; /* 从18px增加到22px */
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  display: flex;
  align-items: center;
  line-height: 110px;
  margin: 0;
  max-width: 800px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  margin: 0 12px; /* 减小导航项间距，为更多导航项腾出空间 */
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #1e73be;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #1e73be;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #1e73be;
  text-decoration: none;
  border-bottom: 2px solid #1e73be;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}
@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #3F83F8;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #3F83F8;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}

/* 针对大屏幕的额外调整 */
@media screen and (min-width: 1200px) {
  #header .header-nav {
    padding-left: 5px; /* 在大屏幕上进一步减少左侧内边距 */
  }
  #header .header-nav .header-nav-logo {
    margin-left: -20px; /* 在大屏幕上进一步向左移动logo */
  }
  /* 在大屏幕上进一步增大公司名称字体 */
  #header .header-nav .header-nav-logo p {
    font-size: 24px;
  }
}
</style>
