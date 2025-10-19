<template>
  <div id="VisitLog">
    <div class="container">
      <!-- 返回按钮 -->
      <div class="back-to-login">
        <button class="btn btn-secondary" @click="goToLogin">
          <i class="glyphicon glyphicon-arrow-left"></i> 返回
        </button>
      </div>

      <div class="page-header">
        <h1>访问日志统计</h1>
      </div>

      <!-- 统计概览 -->
      <div class="row stats-summary">
        <div class="col-md-3">
          <div class="stat-card">
            <h3>{{ totalVisits }}</h3>
            <p>总访问量</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-card">
            <h3>{{ last24HoursVisits }}</h3>
            <p>近一天访问量</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-card">
            <h3>{{ uniqueUsers }}</h3>
            <p>用户数量</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-card">
            <h3>{{ returningUsers }}</h3>
            <p>用户回访量</p>
          </div>
        </div>
      </div>

      <!-- 日志列表（可折叠面板形式） -->
      <div class="log-accordion-container">
        <div class="log-header-container">
          <h2>访问记录列表</h2>
          <button class="btn btn-sort" @click="toggleSortOrder">
            <i :class="['glyphicon', sortOrder === 'desc' ? 'glyphicon-sort-by-attributes-alt' : 'glyphicon-sort-by-attributes']"></i>
            {{ sortOrder === 'desc' ? '倒序' : '正序' }}
          </button>
        </div>

        <!-- 表头说明 -->
        <div class="log-table-header">
          <div class="log-summary-row header">
            <span class="log-index">序号</span>
            <span class="log-time">访问时间</span>
            <span class="log-user">用户ID</span>
            <span class="log-page">访问页面</span>
            <span class="log-actions">展示所有</span>
          </div>
        </div>

        <div class="panel-group" id="logAccordion">
          <div class="panel panel-default" v-for="(log, index) in paginatedLogs" :key="index">
            <div class="panel-heading" @click="toggleLogDetail(index)">
              <h4 class="panel-title">
                <div class="log-summary-row">
                  <span class="log-index">{{ (currentPage - 1) * pageSize + index + 1 }}</span>
                  <span class="log-time">{{ formatTime(log.timestamp) }}</span>
                  <span class="log-user">{{ log.userId }}</span>
                  <span class="log-page">{{ log.page }}</span>
                  <span :class="['user-type-badge', log.userType]">
                    {{ log.userType === 'new' ? '新用户' : '回访用户' }}
                  </span>
                  <i :class="['pull-right', 'glyphicon', logExpanded[index] ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down']"></i>
                </div>
              </h4>
            </div>
            <div :class="['panel-collapse', 'collapse', logExpanded[index] ? 'in' : '']">
              <div class="panel-body">
                <div class="log-detail-row">
                  <div class="detail-item">
                    <label>IP地址:</label>
                    <span>{{ log.url || '未知' }}</span>
                  </div>
                  <div class="detail-item">
                    <label>设备信息:</label>
                    <span>{{ getDeviceInfo(log) }}</span>
                  </div>
                  <div class="detail-item">
                    <label>来源:</label>
                    <span>{{ log.referrer || '直接访问' }}</span>
                  </div>
                  <div class="detail-item">
                    <label>语言:</label>
                    <span>{{ log.language }}</span>
                  </div>
                  <div class="detail-item">
                    <label>屏幕尺寸:</label>
                    <span>{{ log.screenSize }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 改进的分页组件 -->
        <div class="pagination-container">
          <ul class="pagination">
            <li :class="{ disabled: currentPage === 1 }">
              <a href="javascript:void(0)" @click="prevPage">上一页</a>
            </li>

            <!-- 首页 -->
            <li v-if="totalPages > 0" :class="{ active: currentPage === 1 }">
              <a href="javascript:void(0)" @click="goToPage(1)">1</a>
            </li>

            <!-- 省略号 -->
            <li v-if="startPage > 2">
              <span class="ellipsis">...</span>
            </li>

            <!-- 中间页码 -->
            <li v-for="page in visiblePages" :key="page" :class="{ active: page === currentPage }">
              <a href="javascript:void(0)" @click="goToPage(page)">{{ page }}</a>
            </li>

            <!-- 省略号 -->
            <li v-if="endPage < totalPages - 1">
              <span class="ellipsis">...</span>
            </li>

            <!-- 最后一页 -->
            <li v-if="totalPages > 1" :class="{ active: currentPage === totalPages }">
              <a href="javascript:void(0)" @click="goToPage(totalPages)">{{ totalPages }}</a>
            </li>

            <li :class="{ disabled: currentPage === totalPages }">
              <a href="javascript:void(0)" @click="nextPage">下一页</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SensorRequest from '../api/SensorRequest.js'

export default {
  name: 'VisitLog',
  data() {
    return {
      logs: [],
      currentPage: 1,
      pageSize: 10,
      logExpanded: {}, // 用于管理每个日志项的展开状态
      sortOrder: 'desc' // 排序方式，默认倒序
    }
  },
  computed: {
    totalVisits() {
      return this.logs.length;
    },
    uniqueUsers() {
      const users = new Set(this.logs.map(log => log.userId));
      return users.size;
    },
    newUsers() {
      return this.logs.filter(log => log.userType === 'new').length;
    },
    last24HoursVisits() {
      const now = new Date();
      const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

      // 调试日志
      console.log('当前时间:', now);
      console.log('24小时前:', twentyFourHoursAgo);

      const count = this.logs.filter(log => {
        if (!log.timestamp) {
          console.log('发现空时间戳日志:', log);
          return false;
        }

        const logTime = new Date(log.timestamp);

        // 检查日期是否有效
        if (isNaN(logTime.getTime())) {
          console.log('无效时间戳:', log.timestamp);
          return false;
        }

        const isInRange = logTime >= twentyFourHoursAgo && logTime <= now;

        // 调试输出边界情况
        if (!isInRange) {
          console.log('时间超出范围的日志:', log.timestamp, logTime);
        }

        return isInRange;
      }).length;

      console.log('近24小时访问量:', count);
      return count;
    },
    returningUsers() {
      return this.logs.filter(log => log.userType === 'returning').length;
    },
    totalPages() {
      return Math.ceil(this.logs.length / this.pageSize);
    },
    paginatedLogs() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.logs.slice(start, end);
    },
    // 添加排序后的日志计算属性
    sortedLogs() {
      // 创建日志副本避免修改原数组
      const logsCopy = [...this.logs];

      // 根据排序方式排序
      if (this.sortOrder === 'asc') {
        return logsCopy.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      } else {
        return logsCopy.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      }
    },
    // 计算可见页码范围
    visiblePages() {
      const delta = 2; // 当前页前后显示的页数
      const pages = [];

      // 计算起始和结束页
      let start = Math.max(2, this.currentPage - delta);
      let end = Math.min(this.totalPages - 1, this.currentPage + delta);

      // 确保显示的页数不超过限制
      if (this.currentPage - delta <= 2) {
        end = Math.min(this.totalPages - 1, start + delta * 2);
      }
      if (this.currentPage + delta >= this.totalPages - 1) {
        start = Math.max(2, end - delta * 2);
      }

      // 生成页码数组
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    },

    startPage() {
      return this.visiblePages.length > 0 ? this.visiblePages[0] : 0;
    },

    endPage() {
      return this.visiblePages.length > 0 ? this.visiblePages[this.visiblePages.length - 1] : 0;
    }
  },
  mounted() {
    this.loadVisitLogs();
  },
  methods: {
    async loadVisitLogs() {
      try {
        SensorRequest.GetLogServer(" ",
          (respData) => {
            console.log('【访问日志】获取日志数据成功:', respData);
            let Json_respData =  JSON.parse(respData)
            if (Json_respData && Array.isArray(Json_respData)) {
              // 按时间倒序排列作为默认排序
              this.logs = Json_respData.sort((a, b) =>
                new Date(b.timestamp) - new Date(a.timestamp)
              );
            } else {
              this.logs = [];
            }
          },
          (error) => {
            console.error('【访问日志】获取日志数据失败:', error);
            this.logs = [];
          }
        );
      } catch (error) {
        console.error('【访问日志】加载失败:', error);
        this.logs = [];
      }
    },
    formatTime(timestamp) {
      if (!timestamp) return '未知时间';
      return new Date(timestamp).toLocaleString('zh-CN');
    },
    getDeviceInfo(log) {
      if (!log.userAgent) return '未知设备';

      // 简单解析设备信息
      const ua = log.userAgent;
      if (ua.includes('Mobile')) return '移动设备';
      if (ua.includes('Windows')) return 'Windows';
      if (ua.includes('Mac')) return 'Mac';
      if (ua.includes('Linux')) return 'Linux';
      return '其他设备';
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    // 切换日志详情的展开状态
    toggleLogDetail(index) {
      this.$set(this.logExpanded, index, !this.logExpanded[index]);
    },
    // 返回登录页面
    goToLogin() {
      this.$router.push('/staff/login');
    },
    // 切换排序方式
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
      // 重新排序日志
      this.logs = this.sortedLogs;
      // 重置到第一页
      this.currentPage = 1;
    }
  }
}
</script>

<style scoped>
#VisitLog {
  padding: 20px 0;
  position: relative;
}

/* 返回登录按钮样式 */
.back-to-login {
  position: absolute;
  top: 20px;
  right: 380px;
  z-index: 10;
}

.back-to-login .btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  border-radius: 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.back-to-login .btn:hover {
  background-color: #5a6268;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.back-to-login .btn:active {
  transform: translateY(0);
}

.page-header {
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}

.stats-summary {
  margin-bottom: 30px;
}

.stat-card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.stat-card h3 {
  font-size: 28px;
  color: #3f83f8;
  margin: 0 0 10px 0;
}

.stat-card p {
  margin: 0;
  color: #6c757d;
  font-size: 14px;
}

/* 可折叠面板样式 */
.log-accordion-container {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

/* 标题和排序按钮容器 */
.log-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.log-header-container h2 {
  margin: 0;
  color: #333;
}

/* 排序按钮样式 */
.btn-sort {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
}

.btn-sort:hover {
  background-color: #e9ecef;
  border-color: #adb5bd;
}

.log-accordion-container h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
}

/* 表头样式 */
.log-table-header {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  padding: 12px 15px;
}

.log-table-header .log-summary-row {
  font-weight: bold;
  color: #333;
}

/* 统一的列宽定义 - 使用自适应宽度 */
.log-index,
.log-table-header .log-index {
  min-width: 90px;
  width: auto;
  font-weight: bold;
  flex-shrink: 0;
}

.log-time,
.log-table-header .log-time {
  min-width: 180px;
  width: auto;
  font-size: 14px;
  flex-shrink: 0;
}

.log-user,
.log-table-header .log-user {
  min-width: 180px;
  flex: 1;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
}

.log-page,
.log-table-header .log-page {
  min-width: 200px;
  flex: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.log-actions,
.log-table-header .log-actions {
  min-width: 80px;
  width: auto;
  text-align: center;
  flex-shrink: 0;
}

.log-summary-row {
  display: flex;
  align-items: center;
  padding: 8px 0;
}

.panel-heading {
  cursor: pointer;
  padding: 12px 15px;
}

.panel-heading:hover {
  background-color: #f5f5f5;
}

.panel-title {
  margin: 0;
}

.user-type-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.user-type-badge.new {
  background-color: #28a745;
  color: white;
}

.user-type-badge.returning {
  background-color: #17a2b8;
  color: white;
}

.panel-default {
  border-top: none;
  border-radius: 0;
  margin-bottom: 0;
}

.panel-default:first-child {
  border-top: 1px solid #ddd;
}

.panel-default:last-child {
  border-bottom: 1px solid #ddd;
  border-radius: 0 0 4px 4px;
}

/* 详情内容样式 */
.log-detail-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
  padding: 15px 0;
}

.detail-item {
  display: flex;
  flex-direction: column;
}

.detail-item label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.detail-item span {
  font-size: 14px;
  color: #333;
}

.pagination-container {
  text-align: center;
  margin-top: 20px;
}

.pagination {
  display: inline-flex;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}

.pagination > li {
  display: inline;
}

.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #3f83f8;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}

.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  z-index: 2;
  color: #23527c;
  background-color: #eee;
  border-color: #ddd;
}

.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 3;
  color: #fff;
  cursor: default;
  background-color: #3f83f8;
  border-color: #3f83f8;
}

.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #777;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}

/* 省略号样式 */
.pagination .ellipsis {
  padding: 6px 12px;
  color: #777;
}

@media (max-width: 768px) {
  .log-summary-row {
    flex-wrap: wrap;
  }

  .log-index, .log-time, .log-user, .log-user-type, .log-page, .log-actions {
    width: 100%;
    margin-bottom: 5px;
  }

  .log-detail-row {
    grid-template-columns: 1fr;
  }

  .log-table-header {
    display: none;
  }

  /* 移动端适配返回按钮 */
  .back-to-login {
    position: static;
    margin-bottom: 20px;
    text-align: right;
  }

  /* 移动端适配标题和按钮 */
  .log-header-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .log-header-container h2 {
    margin-bottom: 10px;
  }
}
</style>
