<template>
  <div id="GoTop" @click="GoTop()">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {
      flag: false
    };
  },
  // 使用了以下平滑滚动代码
  // 递归调用未正确终止：当 currentScroll 接近 0 时（比如 0.5px），currentScroll - currentScroll / 10 可能仍然大于 0，导致递归调用继续进行。
  // requestAnimationFrame 持续占用：即使页面已经滚动到顶部，requestAnimationFrame 仍在继续执行，这可能干扰浏览器的正常滚动行为。
  // 浮点数精度问题：当 currentScroll 是一个小数时，currentScroll - currentScroll / 10 可能永远不会精确等于 0，导致动画帧持续执行。
  // methods: {
  //   GoTop() {
  //     (function smoothscroll() {
  //       var currentScroll =
  //         document.documentElement.scrollTop || document.body.scrollTop;
  //       if (currentScroll > 0) {
  //         // 添加一个最小阈值，避免浮点数精度问题  当滚动距离小于1像素时，直接滚动到顶部并终止递归，避免浮点数精度问题。
  //         if (currentScroll < 1) {
  //           window.scrollTo(0, 0);
  //           return;
  //         }
  //         window.requestAnimationFrame(smoothscroll);
  //         window.scrollTo(0, currentScroll - currentScroll / 10);
  //       }
  //     })();
  //   }
  // }


  //  使用现代浏览器原生的平滑滚动,由浏览器原生实现，通常不会有持续占用的问题。
  methods: {
    GoTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>
<style scoped>
#GoTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99999999;
  cursor: pointer;
}
#GoTop > span {
  display: block;
  width: 100%;
  height: 100%;
  color: rgb(8, 162, 233);
  font-size: 30px;
}
</style>
