
<!--<template>-->
<!--  <div class="online-consultation">-->
<!--    <div class="consultation-header">-->
<!--      <h3>联系咨询</h3>-->
<!--    </div>-->
<!--    <div class="consultation-buttons">-->
<!--      <button class="btn btn-primary">产品选型支持</button>-->
<!--      <button class="btn btn-primary">查询产品价格</button>-->
<!--      <button class="btn btn-primary">查询产品库存</button>-->
<!--      <button class="btn btn-primary" @click="goToTaobao">跳转至淘宝店铺</button>-->
<!--    </div>-->
<!--    <div class="consultation-qrcode">-->
<!--      <img :src="qrcodeUrl" alt="微信二维码" />-->
<!--    </div>-->
<!--    <div class="consultation-phone">-->
<!--      <span class="icon">📞</span>-->
<!--      <a href="tel:18122131902">18629057799</a>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="online-consultation" v-show="isVisible">
    <div class="consultation-header">
      <h3>联系咨询</h3>
      <button class="close-button" @click="closeConsultation">×</button>
    </div>
    <div class="consultation-buttons">
<!--      <button class="btn btn-primary">产品选型支持</button>-->
<!--      <button class="btn btn-primary">查询产品价格</button>-->
<!--      <button class="btn btn-primary">查询产品库存</button>-->
      <button class="btn btn-primary" @click="goToTaobao">跳转至淘宝店铺</button>
    </div>
    <div class="consultation-qrcode">
      <img :src="qrcodeUrl" alt="微信二维码" />
    </div>
    <div class="consultation-phone">
      <span class="icon">📞</span>
      <a href="javascript:void(0)" @click="copyPhoneNumber" ref="phoneLink">18629057799</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineConsultation',
  data() {
    return {
      qrcodeUrl: require('../assets/img/qrcode.png'), // 固定二维码路径
      isVisible: true
    };
  },
  methods: {
    goToTaobao() {
      window.open('https://www.taobao.com', '_blank');
    },
    copyPhoneNumber() {
      const phoneNumber = '18629057799';
      if (navigator.clipboard) {
        // 使用现代 Clipboard API
        navigator.clipboard.writeText(phoneNumber).then(() => {
          this.showCopySuccess();
        }).catch(err => {
          console.error('复制失败: ', err);
          // 如果现代API失败，使用备选方案
          this.fallbackCopyTextToClipboard(phoneNumber);
        });
      } else {
        // 使用备选方案
        this.fallbackCopyTextToClipboard(phoneNumber);
      }
    },
    fallbackCopyTextToClipboard(text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";  // 避免滚动到底部
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          this.showCopySuccess();
        } else {
          console.error('复制失败');
        }
      } catch (err) {
        console.error('复制失败: ', err);
      }

      document.body.removeChild(textArea);
    },
    showCopySuccess() {
      alert('电话号码已复制到剪贴板！');
    },
    closeConsultation() {
      this.isVisible = false;
    }
  }
};
</script>
<!--/*
 position: fixed;
作用：将元素设置为固定定位
效果：元素会相对于浏览器窗口定位，即使页面滚动，元素也会保持在相同位置
用途：确保在线咨询组件始终显示在屏幕右下角，不会随页面滚动而消失

bottom: 100px;
作用：设置元素底部距离浏览器窗口底部的距离
效果：组件底部距离页面底部100像素
用途：将组件定位在页面右下角，同时避免与其他固定元素（如返回顶部按钮）重叠
注意：相比之前的20px，这个值更大，会使组件向上移动80px

right: 20px;
作用：设置元素右侧距离浏览器窗口右侧的距离
效果：组件右侧距离页面右侧20像素
用途：将组件定位在页面右侧，保持适当的右边距

width: 200px;
作用：设置元素的宽度
效果：组件宽度固定为200像素
用途：确保组件有合适的宽度来显示内容

background: #0066cc;
作用：设置元素的背景颜色
效果：使用深蓝色作为背景色（十六进制颜色代码）
用途：为组件提供统一的背景色，与设计风格保持一致

color: white;
作用：设置元素内文字的颜色
效果：组件内的文字显示为白色
用途：与深蓝色背景形成对比，提高可读性

border-radius: 10px;
作用：设置元素的圆角
效果：元素四个角都有10像素的圆角
用途：让组件看起来更现代、友好，避免尖锐的直角

. padding: 20px;
作用：设置元素内边距
效果：元素内容与边框之间有20像素的间距
用途：确保内容不会紧贴边框，提高视觉舒适度

. box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
作用：为元素添加阴影效果
参数解释：
0：水平阴影偏移量
4px：垂直阴影偏移量
10px：阴影模糊半径
rgba(0, 0, 0, 0.3)：阴影颜色（黑色，透明度30%）
用途：让组件看起来有立体感，与页面背景分离

z-index: 9999;
作用：设置元素的堆叠顺序
效果：确保组件显示在其他元素之上
用途：防止组件被页面其他内容遮挡，保证始终可见

*/-->
<style scoped>

.online-consultation {
  position: fixed;
  bottom: 80px;
  right: 5px;
  width: 160px;
  background: #3f83f8;
  color: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
}

.consultation-header {
  position: relative;
}

.consultation-header h3 {
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.close-button {
  position: absolute;
  top: -5px;
  right: 5px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  color: #ccc;
}

.consultation-buttons button {
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 10px;
  background: #004080;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.consultation-buttons button:hover {
  background: #0055aa;
}

.consultation-qrcode img {
  width: 100%;
  height: auto;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.consultation-phone {
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

.consultation-phone a {
  color: white;
  text-decoration: none;
}
</style>

