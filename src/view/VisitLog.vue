<!-- src/view/VisitLog.vue -->
<template>
  <div id="VisitLog">
    <div class="container">
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
            <h3>{{ uniqueUsers }}</h3>
            <p>用户数量</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-card">
            <h3>{{ newUsers }}</h3>
            <p>新用户数量</p>
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
        <h2>访问记录列表</h2>

        <!-- 表头说明 -->
        <div class="log-table-header">
          <div class="log-summary-row header">
            <span class="log-index">序号</span>
            <span class="log-time">访问时间</span>
            <span class="log-user">用户ID</span>
            <span class="log-page">访问页面</span>
<!--            <span class="log-user-type">用户类型</span>-->
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

        <!-- 分页 -->
        <div class="pagination-container">
          <ul class="pagination">
            <li :class="{ disabled: currentPage === 1 }">
              <a href="javascript:void(0)" @click="prevPage">上一页</a>
            </li>
            <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
              <a href="javascript:void(0)" @click="goToPage(page)">{{ page }}</a>
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
      logExpanded: {} // 用于管理每个日志项的展开状态
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
              // 按时间倒序排列
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
    }
  }
}
</script>

<style scoped>
#VisitLog {
  padding: 20px 0;
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

.log-user-type,
.log-table-header .log-user-type {
  min-width: 80px;
  width: auto;
  flex-shrink: 0;
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
}
</style>
