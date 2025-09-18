<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <p>页面未找到</p>
      <p class="redirect-message">访问页面路由错误，{{ countdown }} 秒之后，自动跳转到首页</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      countdown: 5
    }
  },
  mounted() {
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(timer);
        this.$router.push('/sswebsite');
      }
    }, 1000);
  }
}
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: #f5f5f5;
}

.content {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 72px;
  color: #e74c3c;
  margin: 0;
}

p {
  font-size: 24px;
  color: #333;
  margin: 10px 0;
}

.redirect-message {
  font-size: 18px;
  color: #666;
}
</style>
