<template>
  <div id="footer" class="container-fluid">
    <div class="logo-title-wrapper">
      <div class="logo">
        <img src="../assets/img/logo_white.png" alt="logo图">
      </div>
      <div class="title">陕西晟思智能测控有限公司</div>
    </div>
    <p class="address_tel_fax">
      <span>地址：陕西省西安市长安区建工科技创业基地2号楼1单元5层6层</span>
      <span>   </span>
      <span>客户支持中心热线：18629057799</span>
      <span>微信号：wangxq1975</span>
    </p>
    <p class="email_wx">
    </p>
    <p class="record-info">
      <span class="icp-info">ICP备案/许可证号：<a href="https://beian.miit.gov.cn" target="_blank">陕ICP备19022416号-1</a></span>
      <span class="security-info">
        <img src="../assets/img/国徽示例.png" alt="国徽" class="national-emblem">
        陕公网安备号<a href="https://beian.mps.gov.cn/#/" target="_blank"> 00000000000000</a>
      </span>
    </p>
    <div class="copyright-wrapper">
      <p class="copy">
        Copyright &copy; 2019 - {{ new Date().getFullYear() }} 陕西晟思智能测控有限公司
        <span class="version">V 0.1.2</span>
      </p>
      <div class="qrcodes-wrapper">
        <div
          class="qr-item"
          v-for="item in qrCodes"
          :key="item.id"
        >
          <img :src="item.icon" :alt="item.alt" class="qr-code">
          <div class="tooltip">
            <img :src="item.qrImage" :alt="item.alt" class="tooltip-img">
            <div class="tooltip-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      qrCodes: [
        {
          id: 'wechat',
          icon: require('../assets/img/weixin.png'),
          qrImage: require('../assets/img/公众号.jpg'),
          alt: '公众号',
          text: '企业公众号'
        },
        {
          id: 'taobao',
          icon: require('../assets/img/淘宝.png'),
          qrImage: require('../assets/img/淘宝店铺.png'),
          alt: '淘宝二维码',
          text: '官方淘宝店铺'
        },
        {
          id: 'douyin',
          icon: require('../assets/img/抖音.png'),
          qrImage: require('../assets/img/抖音二维码9.png'),
          alt: '抖音二维码',
          text: '官方抖音'
        }
      ]
    };
  }
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #3f83f8;
  overflow: hidden;
  text-align: center;
  position: relative;
  padding: 20px 0;
}
.logo-title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 20px;
  gap: 15px;
  flex-wrap: wrap;
  position: relative;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 0;
  display: flex;
  align-items: center;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.title {
  font-size: 25px;
  margin: 0;
  display: flex;
  align-items: center;
}
.copyright-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 10px 0;
  flex-wrap: wrap;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 0;
  display: flex;
  align-items: center;
}
.qrcodes-wrapper {
  display: flex;
  gap: 15px;
  align-items: center;
}
.qr-item {
  position: relative;
  display: inline-block;
}
.qr-code {
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.qr-code:hover {
  transform: scale(1.1);
}

/* 纯CSS实现的工具提示 */
.tooltip {
  position: absolute;
  bottom: calc(100% + 15px);
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 120px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  /* 创建一个扩展的悬停区域 */
  border: 10px solid transparent;
  margin-bottom: -10px; /* 抵消边框高度，使工具提示位置正确 */
}

/* 工具提示箭头 */
.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-top-color: white;
}

.tooltip-img {
  width: 100%;
  height: auto;
  max-width: 100px;
  margin: 0 auto;
  display: block;
  border-radius: 6px;
}
.tooltip-text {
  text-align: center;
  color: #333;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 500;
}

/* 关键部分：使用CSS悬停效果 */
.qr-item:hover .tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-5px);
}

/* 添加一个连接区域，使鼠标可以从图标平滑移动到工具提示 */
.qr-item::after {
  content: "";
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -50px; /* 扩展到底部，覆盖工具提示区域 */
  z-index: 999;
  pointer-events: none;
}

.qr-item:hover::after {
  pointer-events: auto; /* 当悬停时启用事件捕获 */
}

.version {
  font-weight: bold;
  margin-left: 5px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
  line-height: 1.6;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.record-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.security-info {
  display: flex;
  align-items: center;
  gap: 5px;
}
.national-emblem {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
.record-info a {
  color: #d3d3d3;
  text-decoration: none;
}
.record-info a:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* 移动端适配 */
@media screen and (max-width: 997px) {
  .logo-title-wrapper {
    flex-direction: column;
    gap: 15px;
  }
  .title {
    font-size: 20px;
  }
  .copyright-wrapper {
    flex-direction: column;
    gap: 10px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {
    font-size: 12px;
  }
  .record-info {
    font-size: 12px;
    flex-direction: column;
    gap: 8px;
  }
  .copy {
    font-size: 12px;
  }

  /* 移动端工具提示调整 */
  .tooltip {
    position: fixed;
    bottom: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
  }

  .tooltip::after {
    display: none;
  }

  /* 移动端点击显示工具提示 */
  .qr-item.active .tooltip {
    opacity: 1;
    visibility: visible;
  }

  /* 移除桌面端的悬停效果 */
  .qr-item::after {
    display: none;
  }
}
</style>
