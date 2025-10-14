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
            <p>独立用户</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-card">
            <h3>{{ newUsers }}</h3>
            <p>新用户</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-card">
            <h3>{{ returningUsers }}</h3>
            <p>回访用户</p>
          </div>
        </div>
      </div>

      <!-- 日志列表 -->
      <div class="log-table-container">
        <h2>访问记录列表</h2>
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
            <tr>
              <th>序号</th>
              <th>访问时间</th>
              <th>用户ID</th>
              <th>用户类型</th>
              <th>访问页面</th>
              <th>IP地址</th>
              <th>设备信息</th>
              <th>来源</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(log, index) in paginatedLogs" :key="index">
              <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
              <td>{{ formatTime(log.timestamp) }}</td>
              <td>{{ log.userId }}</td>
              <td>
                  <span :class="['user-type-badge', log.userType]">
                    {{ log.userType === 'new' ? '新用户' : '回访用户' }}
                  </span>
              </td>
              <td>{{ log.page }}</td>
              <td>{{ log.url || '未知' }}</td>
              <td>{{ getDeviceInfo(log) }}</td>
              <td>{{ log.referrer || '直接访问' }}</td>
            </tr>
            </tbody>
          </table>
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
      pageSize: 10
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

.log-table-container {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.log-table-container h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
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
</style>
