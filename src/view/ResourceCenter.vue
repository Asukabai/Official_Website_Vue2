<template>
  <div class="resource-center container">
    <div class="page-header">
      <p>在这里您可以浏览和下载我们的技术文档、产品手册等资料</p>
    </div>

    <div class="resource-list">
      <div
        class="resource-item"
        v-for="(resource, index) in paginatedResources"
        :key="index"
      >
        <div class="resource-info">
          <div class="resource-icon">
            <span :class="getFileIcon(resource.type)"></span>
          </div>
          <div class="resource-details">
            <h3>{{ resource.name }}</h3>
            <p class="resource-description">{{ resource.description }}</p>
            <div class="resource-meta">
              <span class="file-type">{{ resource.type.toUpperCase() }}</span>
              <span class="file-size">{{ resource.size }}</span>
              <span class="upload-date">{{ resource.date }}</span>
            </div>
          </div>
        </div>
        <div class="resource-actions">
          <button
            class="btn btn-primary preview-btn"
            @click="previewFile(resource)"
          >
            预览
          </button>
          <button
            class="btn btn-success download-btn"
            @click="downloadFile(resource)"
          >
            下载
          </button>
        </div>
      </div>
    </div>

    <!-- 使用独立的分页组件 -->
    <pagination
      :current-page.sync="currentPage"
      :total-pages="totalPages"
      :start-page="startPage"
      :end-page="endPage"
      :visible-pages="visiblePages"
      @page-changed="handlePageChange"
    />

    <!-- 预览模态框 -->
    <div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="previewModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="previewModalLabel">{{ currentResource.name }}</h4>
          </div>
          <div class="modal-body">
            <div class="preview-content" v-if="currentResource.type === 'pdf'">
              <iframe :src="currentResource.url" width="100%" height="500px"></iframe>
            </div>
            <div class="preview-content text-center" v-else-if="currentResource.type === 'doc' || currentResource.type === 'docx'">
              <div class="document-placeholder">
                <span class="glyphicon glyphicon-file document-icon"></span>
                <h3>Microsoft Word 文档</h3>
                <p>此文件需要 Microsoft Word 或兼容软件才能查看</p>
              </div>
            </div>
            <div class="preview-content text-center" v-else-if="currentResource.type === 'xls' || currentResource.type === 'xlsx'">
              <div class="document-placeholder">
                <span class="glyphicon glyphicon-list-alt document-icon"></span>
                <h3>Microsoft Excel 电子表格</h3>
                <p>此文件需要 Microsoft Excel 或兼容软件才能查看</p>
              </div>
            </div>
            <div class="preview-content text-center" v-else>
              <div class="document-placeholder">
                <span class="glyphicon glyphicon-file document-icon"></span>
                <h3>文件预览</h3>
                <p>该文件类型暂不支持在线预览，请下载后查看</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-success" @click="downloadFile(currentResource)">
              <span class="glyphicon glyphicon-download-alt"></span> 下载文件
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue' // 引入分页组件

export default {
  name: "ResourceCenter",
  components: {
    Pagination // 注册分页组件
  },
  data() {
    return {
      // 模拟资源数据
      resources: [
        {
          id: 1,
          name: "产品使用手册.pdf",
          description: "陕西晟思智能测控设备完整使用说明手册",
          type: "pdf",
          size: "2.4 MB",
          date: "2023-10-15",
          url: "#"
        },
        {
          id: 2,
          name: "电源自动化测试系统技术规格.docx",
          description: "电源自动化测试系统详细技术参数文档",
          type: "docx",
          size: "1.1 MB",
          date: "2023-09-22",
          url: "#"
        },
        {
          id: 3,
          name: "电子负载设备选型指南.xlsx",
          description: "各类电子负载设备选型对比表",
          type: "xlsx",
          size: "0.8 MB",
          date: "2023-11-05",
          url: "#"
        },
        {
          id: 4,
          name: "AGV协作机器人应用案例.pdf",
          description: "AGV协作机器人在各行业中的典型应用案例",
          type: "pdf",
          size: "3.7 MB",
          date: "2023-08-17",
          url: "#"
        },
        {
          id: 5,
          name: "MES系统集成方案.pptx",
          description: "MES智能制造执行管理系统集成实施标准方案",
          type: "pptx",
          size: "5.2 MB",
          date: "2023-10-30",
          url: "#"
        },
        {
          id: 6,
          name: "传感器选型手册.zip",
          description: "各类传感器选型手册和技术文档压缩包",
          type: "zip",
          size: "12.5 MB",
          date: "2023-11-12",
          url: "#"
        },
        {
          id: 7,
          name: "工业传感器技术白皮书.pdf",
          description: "工业传感器技术发展趋势和应用前景分析",
          type: "pdf",
          size: "4.1 MB",
          date: "2023-12-01",
          url: "#"
        },
        {
          id: 8,
          name: "智能测控平台用户指南.docx",
          description: "智能测控平台操作手册和使用技巧",
          type: "docx",
          size: "2.7 MB",
          date: "2023-11-25",
          url: "#"
        },
        {
          id: 9,
          name: "测试设备维护手册.xlsx",
          description: "各类测试设备维护保养计划和注意事项",
          type: "xlsx",
          size: "1.3 MB",
          date: "2023-10-28",
          url: "#"
        },
        {
          id: 10,
          name: "自动化测试解决方案.pptx",
          description: "面向不同行业的自动化测试解决方案介绍",
          type: "pptx",
          size: "8.4 MB",
          date: "2023-09-15",
          url: "#"
        }
      ],
      currentResource: {},
      currentPage: 1, // 当前页码
      pageSize: 5 // 每页显示的资源数量
    };
  },
  computed: {
    // 计算总页数
    totalPages() {
      return Math.ceil(this.resources.length / this.pageSize);
    },
    // 计算当前页显示的资源
    paginatedResources() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.resources.slice(start, end);
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
  methods: {
    getFileIcon(type) {
      const iconMap = {
        pdf: 'glyphicon glyphicon-file pdf-icon',
        doc: 'glyphicon glyphicon-file word-icon',
        docx: 'glyphicon glyphicon-file word-icon',
        xls: 'glyphicon glyphicon-list-alt excel-icon',
        xlsx: 'glyphicon glyphicon-list-alt excel-icon',
        ppt: 'glyphicon glyphicon-blackboard ppt-icon',
        pptx: 'glyphicon glyphicon-blackboard ppt-icon',
        zip: 'glyphicon glyphicon-compressed zip-icon',
        rar: 'glyphicon glyphicon-compressed zip-icon'
      };

      return iconMap[type] || 'glyphicon glyphicon-file';
    },

    previewFile(resource) {
      this.currentResource = resource;
      // 使用 jQuery 触发模态框显示（因为使用了 Bootstrap 的 modal）
      $('#previewModal').modal('show');
    },

    downloadFile(resource) {
      // 模拟下载过程
      this.$message({
        message: `开始下载 "${resource.name}"`,
        type: 'success',
        duration: 2000
      });

      // 实际项目中这里会是真实的下载逻辑
      // 例如:
      // const link = document.createElement('a');
      // link.href = resource.url;
      // link.download = resource.name;
      // link.click();
    },

    // 处理页面变更事件
    handlePageChange(page) {
      // 可以在这里添加页面变更时的额外逻辑
      console.log(`切换到第 ${page} 页`);
    }
  },
  mounted() {
    // 设置页面标题
    document.title = "资源中心 - 陕西晟思智能测控有限公司";
  }
};
</script>

<style scoped>
.resource-center {
  padding: 20px 0;
  min-height: calc(100vh - 220px);
}

.page-header {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.page-header h1 {
  margin-top: 0;
  color: #333;
}

.page-header p {
  color: #666;
  font-size: 16px;
}

.resource-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.resource-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fafafa;
  transition: all 0.3s ease;
}

.resource-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.resource-info {
  display: flex;
  align-items: center;
  flex: 1;
}

.resource-icon {
  font-size: 36px;
  margin-right: 20px;
  color: #3F83F8;
}

.resource-icon .pdf-icon {
  color: #d73e3e;
}

.resource-icon .word-icon {
  color: #2b569a;
}

.resource-icon .excel-icon {
  color: #1e7145;
}

.resource-icon .ppt-icon {
  color: #d04324;
}

.resource-icon .zip-icon {
  color: #ffb300;
}

.resource-details h3 {
  margin-top: 0;
  margin-bottom: 8px;
  color: #333;
}

.resource-description {
  margin: 0 0 10px 0;
  color: #666;
}

.resource-meta {
  display: flex;
  gap: 15px;
}

.resource-meta span {
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 3px;
  background-color: #eee;
  color: #666;
}

.resource-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #3F83F8;
  color: white;
}

.btn-primary:hover {
  background-color: #3074e0;
}

.btn-success {
  background-color: #5cb85c;
  color: white;
}

.btn-success:hover {
  background-color: #449d44;
}

.modal-header {
  border-bottom: 1px solid #e5e5e5;
}

.modal-title {
  margin: 0;
  line-height: 1.42857143;
}

.preview-content {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.document-placeholder {
  text-align: center;
  padding: 30px;
}

.document-icon {
  font-size: 64px;
  color: #ccc;
  margin-bottom: 20px;
}

.document-placeholder h3 {
  margin-top: 0;
  color: #333;
}

.document-placeholder p {
  color: #666;
  font-size: 16px;
}

@media (max-width: 768px) {
  .resource-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .resource-info {
    width: 100%;
    margin-bottom: 15px;
  }

  .resource-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .resource-meta {
    flex-wrap: wrap;
  }
}
</style>
