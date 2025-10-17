<template>
  <div id="staff-home">
    <!-- 顶部用户信息栏 -->
    <div class="header">
      <div class="user-info">
        <div class="user-avatar">
          <!-- 使用本地图片替换图标 -->
          <img :src="require('../assets/img/用户.png')" alt="用户头像" class="user-avatar-img">
        </div>
        <div class="user-details">
          <div class="user-name">{{ name }}</div>
          <div class="user-phone">{{ phone }}</div>
        </div>
      </div>
      <!-- 添加退出登录按钮 -->
      <div class="logout-section">
        <button class="logout-btn" @click="handleLogout">
          <i class="el-icon-switch-button"></i>
          退出登录
        </button>
      </div>
    </div>

    <!-- 九宫格功能菜单（移除了退出登录项） -->
    <div class="grid-container">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="grid-item"
        @click="navigateTo(item.path)"
      >
        <div class="icon-wrapper">
          <i :class="item.icon"></i>
        </div>
        <div class="menu-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaffHome',
  data() {
    return {
      name: '',
      phone: '',
      menuItems: [
        { title: '访问日志', icon: 'el-icon-document', path: '/visit_log' },
        { title: '项目管理', icon: 'el-icon-setting', path: '/device_management' },
        { title: '人员管理', icon: 'el-icon-user', path: '/user_management' },
        { title: '数据统计', icon: 'el-icon-data-line', path: '/statistics' },
        { title: '报警记录', icon: 'el-icon-warning-outline', path: '/alarm_records' },
        { title: '系统设置', icon: 'el-icon-s-tools', path: '/system_settings' },
        { title: '消息中心', icon: 'el-icon-message', path: '/messages' },
        { title: '个人中心', icon: 'el-icon-user-solid', path: '/profile' }
      ]
    }
  },
  mounted() {
    // 添加调试信息
    console.log('LocalStorage items:');
    console.log('name:', localStorage.getItem('name'));
    console.log('phone:', localStorage.getItem('phone'));
    console.log('token:', localStorage.getItem('token'));

    // 从localStorage获取用户信息
    this.name = localStorage.getItem('name') || '';
    this.phone = localStorage.getItem('phone') || '';

    console.log('Assigned values:');
    console.log('this.name:', this.name);
    console.log('this.phone:', this.phone);

    // 检查是否已登录
    if (!this.name || !this.phone) {
      console.log('User not logged in, redirecting to login page');
      this.$router.push('/staff_login');
    }
  },
  methods: {
    // 新增退出登录方法
    handleLogout() {
      // 清除所有登录信息
      localStorage.removeItem('token');
      localStorage.removeItem('phone');
      localStorage.removeItem('name');
      localStorage.removeItem('loginTime');

      // 跳转到登录页面
      this.$router.push('/staff_login');
    },

    navigateTo(path) {
      // 跳转到指定页面
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
#staff-home {
  min-height: 60vh;
  background-color: #f5f5f5;
}

.header {
  background-color: #ffffff;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3F83F8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  margin-right: 15px;
}

.user-avatar-img {
  width: 30px;
  height: 30px;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.user-phone {
  font-size: 14px;
  color: #666;
}

.logout-section {
  display: flex;
  align-items: center;
}

.logout-btn {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #ff7875;
}

.logout-btn i {
  margin-right: 5px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px 20px;
}

.grid-item {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e6f0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.icon-wrapper i {
  font-size: 24px;
  color: #3F83F8;
}

.menu-title {
  font-size: 14px;
  color: #333;
  text-align: center;
}

@media (max-width: 768px) {
  .grid-container {
    gap: 15px;
    padding: 20px 15px;
  }

  .grid-item {
    padding: 15px 5px;
  }

  .icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .icon-wrapper i {
    font-size: 20px;
  }

  .menu-title {
    font-size: 12px;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .logout-section {
    margin-top: 10px;
  }
}
</style>
