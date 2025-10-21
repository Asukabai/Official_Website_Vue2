<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <p>页面未找到</p>
      <p class="redirect-message">访问页面路由错误，{{ countdown }} 秒之后，自动跳转到首页</p>
    </div>
  </div>
</template>
<!--
beforeDestroy
组件实例销毁之前调用
此时组件实例仍然完全可用
适合清理定时器、事件监听器等
destroyed
组件实例销毁后调用
此时所有指令都被解绑，事件监听器被移除
-->
<script>
export default {
  name: 'NotFound',
  data() {
    return {
      countdown: 5,
      timer: null
    }
  },
  mounted() {
    // 修改 mounted 钩子：将定时器存储在组件实例中
    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.clearTimer();
        this.$router.push('/');
      }
    }, 1000);
  },
  beforeDestroy() {
    // 组件销毁前清理定时器:
    // 避免内存泄漏: 组件销毁时及时释放资源
    // 防止意外跳转: 避免已销毁组件的定时器执行路由跳转
    // 提升稳定性: 长期运行的应用更加稳定可靠
    // 优化性能: 减少不必要的定时器执行
    this.clearTimer();
  },
  methods: {
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
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
