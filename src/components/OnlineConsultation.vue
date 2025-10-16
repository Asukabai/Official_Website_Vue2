<template>
  <div class="online-consultation" v-show="isVisible">
    <div class="consultation-header">
      <div class="title-container">
        <img src="../assets/img/咨询2.png" alt="咨询图标" class="header-icon-img" />
        <span class="header-text">产品咨询</span>
      </div>
      <button class="close-button" @click="closeConsultation">×</button>
    </div>
    <div class="consultation-buttons">
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
      qrcodeUrl: require('../assets/img/淘宝店铺.png'), // 固定二维码路径
      isVisible: true
    };
  },
  methods: {
    goToTaobao() {
      window.open('https://sensor-smart.taobao.com/', '_blank');
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  min-height: 25px; /* 确保头部有足够高度 */
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* 图标和文字之间的间距 */
  font-size: 18px; /* 恢复字体大小 */
  font-weight: bold; /* 恢复字体粗细 */
  padding-right: 20px; /* 增加右侧内边距，为关闭按钮留出空间 */
}

.header-icon-img {
  width: 18px; /* 设置图标大小 */
  height: 18px; /* 设置图标大小 */
  object-fit: contain; /* 保持图标比例 */
}

.header-text {
  margin: 0;
  font-size: 16px; /* 设置文字大小 */
  font-weight: bold; /* 设置文字粗细 */
  color: white; /* 确保文字颜色为白色 */
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
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
