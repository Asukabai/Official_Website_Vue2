<template>
  <div id="staff-login" class="container">
    <div class="login-container">
      <div class="login-header">
        <h2>登录</h2>
      </div>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">手机账号</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
            placeholder="请输入账号"
            required
          >
        </div>
        <div class="form-group">
          <label for="password">临时密钥</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="请输入密钥"
            required
          >
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
            {{ loading ? '登录中...' : '登录' }}
          </button>
        </div>
        <div v-if="errorMessage" class="alert alert-danger">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SensorRequest from '../api/SensorRequest.js';

export default {
  name: 'StaffLogin',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      loading: false
    }
  },
  mounted() {
    // 检查是否已经登录且在有效期内
    this.checkAutoLogin();
  },
  methods: {
    // 检查自动登录
    checkAutoLogin() {
      const name = localStorage.getItem('name');
      const phone = localStorage.getItem('phone');
      const loginTime = localStorage.getItem('loginTime');

      // 如果有用户信息且有登录时间
      if (name && phone && loginTime) {
        const currentTime = new Date().getTime();
        const savedTime = parseInt(loginTime);
        const hoursDiff = (currentTime - savedTime) / (1000 * 60 * 60); // 转换为小时

        // 如果在4小时内，直接跳转到员工首页
        if (hoursDiff <= 4) {
          this.$router.push('/staff_home');
          return;
        }
      }
    },

    handleLogin() {
      // 设置加载状态
      this.loading = true;
      this.errorMessage = '';

      // 构造请求参数
      const param = {
        phone: this.username,
        code: this.password,
        hour: "4"
      };

      // 调用登录接口
      SensorRequest.Ding_LoginByPhoneCode(JSON.stringify(param),
        (respData) => {
          let parse_respData = JSON.parse(respData);
          // 登录成功处理
          if (parse_respData.Token && parse_respData.Phone && parse_respData.Name) {
            // 将用户信息存储到 localStorage (修正这三行)
            localStorage.setItem('token', parse_respData.Token);
            localStorage.setItem('phone', parse_respData.Phone);
            localStorage.setItem('name', parse_respData.Name);
            // 记录登录时间
            localStorage.setItem('loginTime', new Date().getTime().toString());

            // 跳转到员工首页
            this.$router.push('/staff_home');
          } else {
            // 如果返回数据不完整，显示错误信息
            this.errorMessage = '登录响应数据不完整';
          }
          this.loading = false;
        },
        (error) => {
          // 登录失败处理
          this.errorMessage = error.message || '登录失败，请检查账号和密钥';
          this.loading = false;
        }
      );
    }
  }
}
</script>

<style scoped>
#staff-login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h2 {
  margin: 0;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.btn-primary {
  background-color: #3F83F8;
  color: white;
}

.btn-primary:disabled {
  background-color: #a0c4f8;
  cursor: not-allowed;
}

.btn-block {
  display: block;
  width: 100%;
}

.alert {
  padding: 10px;
  border-radius: 4px;
  margin-top: 15px;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
