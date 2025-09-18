<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left" @click="copyPhoneNumber">
          <span class="glyphicon glyphicon-earphone"></span>客户支持中心热线：18629057799（王晓强）
          <!--          <span class="glyphicon glyphicon-envelope"></span>邮编：710100-->
          <span class="glyphicon glyphicon-time"></span>7x24小时为您服务
        </div>
        <div class="shejiao pull-right">
          <a href="https://www.taobao.com" target="_blank" title="前往淘宝店铺" style="display: inline-block; vertical-align: middle;">
            <img src="../assets/img/淘宝图标-圆彩.png" alt="淘宝图标" style="width: 25px; height: 25px; margin-right: 5px;">
          </a>
          <span class="glyphicon glyphicon-hand-right"></span>
          <span class="contact-text" @click="copyPhoneNumber">赶快联系我们吧！</span>
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
          <a v-if="item.isExternal" href="javascript:void(0)" @click.stop="handleNavClick(item)">
            {{item.name}}
            <i class="underline"></i>
          </a>
          <a v-else-if="item.isParentOnly" href="javascript:void(0)" @click.stop>
            {{item.name}}
            <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
            <i class="underline"></i>
          </a>
          <router-link v-else :to="item.path" @click.stop="handleNavClick(item)">
            {{item.name}}
            <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length>0">
            <template v-for="(i,n) in item.children">
              <dt v-if="!i.children || i.children.length === 0" :key="n" @click.stop="$router.push(i.path)">
                <router-link :to="i.path">{{i.name}}</router-link>
              </dt>
              <dt v-else class="has-children" :key="n">
                <span>{{i.name}}<span class="glyphicon glyphicon-menu-right submenu-icon"></span></span>
                <div class="submenu">
                  <div v-for="(subItem, subIndex) in i.children" :key="subIndex" @click.stop="$router.push(subItem.path)">
                    <router-link :to="subItem.path">{{subItem.name}}</router-link>
                  </div>
                </div>
              </dt>
            </template>
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
            <a v-if="item.isExternal" href="javascript:void(0)" @click.stop="handleNavClick(item)">
              {{item.name}}
              <i class="underline"></i>
            </a>
            <a v-else-if="item.isParentOnly" href="javascript:void(0)" @click.stop>
              {{item.name}}
              <i class="underline"></i>
            </a>
            <router-link v-else :to="item.path" @click.stop="handleNavClick(item)">
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
          path: "/home",
          children: []
        },
        {
          name: "产品列表",
          path: "/productList",
          isParentOnly: true,
          children: [
            {
              name: "电性能负载测试平台",
              path: "/productList/electrical_testing_platform",
              children: [
                {
                  name: "电源自动化测试系统",
                  path: "/productList/electrical_testing_platform/power_automation_testing_system"
                },
                {
                  name: "多路通用智能测试系统",
                  path: "/productList/electrical_testing_platform/electronic_instruments"
                },
                {
                  name: "超高速 / 高压电子负载",
                  path: "/productList/electrical_testing_platform/ultra_high_speed_voltage_load"
                },
                {
                  name: "AGV协作机器人",
                  path: "/productList/electrical_testing_platform/intelligent_equipment"
                }
              ]
            }, {
              name: "力负载模拟测试平台",
              path: "/productList/force_testing_platform",
              children: [
                {
                  name: "旋转类负载模拟系统",
                  path: "/productList/force_testing_platform/rotating_load_simulation_system"
                },
                {
                  name: "直线类负载模拟系统",
                  path: "/productList/force_testing_platform/linear_load_simulation_system"
                },
                {
                  name: "起落架、铁鸟类负载模拟系统",
                  path: "/productList/force_testing_platform/landing_bird_load_simulation_system"
                },
                {
                  name: "定制化测试台模拟系统",
                  path: "/productList/force_testing_platform/customized_test_system"
                }
              ]
            }, {
              name: "软件自动化管理平台",
              path: "/productList/software_testing_platform",
              children: [
                {
                  name: "智能通用化负载监测平台",
                  path: "/productList/software_testing_platform/automated_system"
                },
                {
                  name: "视觉自动化检测及图像识别平台",
                  path: "/productList/software_testing_platform/visual_recognition_platform"
                },
                {
                  name: "MES智能制造执行管理系统",
                  path: "/productList/software_testing_platform/software_platform"
                },
                {
                  name: "定制化智能化解决方案",
                  path: "/productList/software_testing_platform/customized_intelligent_solutions"
                }
              ]
            }
          ]
        },
        {
          name: "演示demo",
          // path: "https://api-v2.sensor-smart.cn:23012/sswebsite/web/data-view-instance/preview/k8YMDSdsA0BZ",
          path: "http://172.18.100.115:22325/ssmonitor/web/login",
          isExternal: true,
          children: [],
          openInNewTab: true
        } ,
        {
          name: "解决方案",
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
    // 在导航方法中添加
    handleNavClick(item) {
      if (item.isExternal) {
        if (item.openInNewTab) {
          // 在新窗口中打开外部链接
          window.open(item.path, '_blank');
        } else {
          // 在当前窗口中打开外部链接
          window.location.href = item.path;
        }
      } else {
        // 内部路由跳转
        this.$router.push(item.path);
      }
    },
    navClick(index, name) {
      // 如果是"产品列表"且标记为仅父级，则不执行跳转
      if (this.navList[index].isParentOnly) {
        return;
      }

      this.navIndex = index;
      sessionStorage.setItem('navIndex', index);
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    },
    updateNavStatus() {
      // 根据当前路由更新导航状态
      const route = this.$route;
      let foundIndex = 0; // 默认为首页

      // 首先检查路由 meta 信息中的导航高亮标识
      if (route.meta && route.meta.navHighlight) {
        const navHighlight = route.meta.navHighlight;
        // 根据 navHighlight 值查找对应的导航项
        for (let i = 0; i < this.navList.length; i++) {
          if (this.navList[i].name === navHighlight) {
            foundIndex = i;
            break;
          }
        }
      } else {
        // 备用方案：根据路径匹配（保持原有的逻辑）
        const currentPath = route.path;

        // 遍历导航列表查找匹配项
        for (let i = 0; i < this.navList.length; i++) {
          const item = this.navList[i];

          // 精确匹配
          if (item.path === currentPath) {
            foundIndex = i;
            break;
          }

          // 检查是否为productList相关路由，如果是则设置为产品列表(索引为1)
          if (currentPath.startsWith('/productList')) {
            foundIndex = 1;
            break;
          }

          // 检查是否为service相关路由，如果是则设置为解决方案(索引为3)
          if (currentPath.startsWith('/service')) {
            foundIndex = 3;
            break;
          }

          // 检查子菜单
          if (item.children && item.children.length > 0) {
            for (let j = 0; j < item.children.length; j++) {
              if (item.children[j].path === currentPath) {
                foundIndex = i;
                break;
              }
            }
          }
        }
      }

      // 更新导航状态
      this.navIndex = foundIndex;
      this.menuName = this.navList[foundIndex].name;
      sessionStorage.setItem('navIndex', foundIndex);
    },
    copyPhoneNumber() {
      const phoneNumber = '18629057799';
      const textArea = document.createElement('textarea');
      textArea.value = phoneNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      // 显示提示信息
      alert('电话号码已复制到剪贴板：' + phoneNumber);
    }
  },
  watch: {
    // 监听路由变化
    $route() {
      this.updateNavStatus();
    }
  },
  mounted() {
    // 组件挂载时更新一次导航状态
    this.updateNavStatus();
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

/* 三级菜单样式 */
#header .header-nav .header-nav-wrapper > li > dl > dt.has-children {
  position: relative;
}

#header .header-nav .header-nav-wrapper > li > dl > dt.has-children:hover .submenu {
  display: block;
}

#header .header-nav .header-nav-wrapper > li > dl > dt.has-children > span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.submenu-icon {
  float: right;
  font-size: 12px;
  transition: transform 0.3s ease;
}

#header .header-nav .header-nav-wrapper > li > dl > dt.has-children:hover .submenu-icon {
  transform: rotate(90deg);
}

.submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 180px;
  background: #fff;
  box-shadow: 0 0 3px 1px #ccc;
  z-index: 9999999;
}

.submenu > div {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.submenu > div:hover {
  background: #f5f5f5;
}

.submenu > div:last-child {
  border-bottom: none;
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

/* 添加联系我们的文本样式 */
.contact-text {
  cursor: pointer;
}

.contact-text:hover {
  color: #00b7ee;
}
</style>
