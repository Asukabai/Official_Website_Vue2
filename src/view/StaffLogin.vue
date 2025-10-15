<!-- src/view/StaffLogin.vue -->
<template>
  <div id="staff-login" class="container">
    <div class="login-container">
      <div class="login-header">
        <h2>登录</h2>
      </div>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">账号</label>
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
          <label for="password">密码</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="请输入密码"
            required
          >
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">登录</button>
        </div>
        <div v-if="errorMessage" class="alert alert-danger">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaffLogin',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    handleLogin() {
      // 验证用户名和密码
      if (this.username === 'admin' && this.password === '123456') {
        // 登录成功，跳转到访问日志页面
        this.$router.push('/visit_log');
      } else {
        // 登录失败，显示错误信息
        this.errorMessage = '用户名或密码错误';
      }
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
