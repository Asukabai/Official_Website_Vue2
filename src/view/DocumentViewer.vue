<template>
  <div class="document-viewer">
    <div class="document-header">
      <h2>{{ documentTitle }}</h2>
      <div class="document-actions">
        <button @click="goBack" class="btn-back">返回</button>
        <button @click="downloadDocument" class="btn-download" v-if="documentUrl">下载文档</button>
      </div>
    </div>

    <div class="document-content">
      <div v-if="loading" class="loading">加载中...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <OnlyOfficeEditor
        v-else-if="documentUrl"
        :document-url="documentUrl"
        :document-title="documentTitle"
        :permissions="permissions"
        :callback-url="callbackUrl"
      />
      <div v-else class="no-document">未找到文档</div>
    </div>
  </div>
</template>

<script>
import OnlyOfficeEditor from '../view/OnlyOfficeEditor.vue';

export default {
  name: 'DocumentViewer',
  components: {
    OnlyOfficeEditor
  },
  data() {
    return {
      documentUrl: '',
      documentTitle: '',
      permissions: 'edit',
      callbackUrl: '',
      loading: true,
      error: ''
    };
  },
  created() {
    this.loadDocument();
  },
  methods: {
    loadDocument() {
      // 从路由参数获取文档信息
      const documentId = this.$route.query.id;
      const documentName = this.$route.query.name || 'document';
      const mode = this.$route.query.mode || 'edit'; // view, edit, comment

      // 设置权限模式
      this.permissions = mode;

      // 这里应该从后端API获取文档信息  根据后端测试地址构建文档URL
      // if (documentId) {
      //   // 模拟文档URL，实际应从后端获取
      //   this.documentUrl = `/api/documents/${documentId}/download`;
      //   this.documentTitle = documentName;
      //   // 如果有回调URL，也在这里设置
      //   // this.callbackUrl = `/api/documents/${documentId}/track`;
      // } else {
      //   // 默认文档
      //   this.documentUrl = '/documents/sample.docx';
      //   this.documentTitle = '示例文档';
      // }

      if (documentId) {
        // 假设后端提供了文档访问接口
        this.documentUrl = `http://192.168.67.21:25102/api/documents/${documentId}/download`;
        this.documentTitle = documentName;
        // 回调URL用于接收文档保存状态
        // this.callbackUrl = `http://192.168.67.21:25102/api/documents/${documentId}/track`;
      } else {
        // 默认文档示例
        this.documentUrl = 'http://192.168.67.21:25102/documents/sample.docx';
        this.documentTitle = '示例文档';
      }

      this.loading = false;
    },
    downloadDocument() {
      if (this.documentUrl) {
        const link = document.createElement('a');
        link.href = this.documentUrl;
        link.download = this.documentTitle;
        link.target = '_blank';
        link.click();
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.document-viewer {
  padding: 20px;
  height: calc(100vh - 40px);
  box-sizing: border-box;
}

.document-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.document-header h2 {
  margin: 0;
  color: #333;
}

.document-actions {
  display: flex;
  gap: 10px;
}

.document-actions button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-back {
  background-color: #6c757d;
  color: white;
}

.btn-back:hover {
  background-color: #5a6268;
}

.btn-download {
  background-color: #007bff;
  color: white;
}

.btn-download:hover {
  background-color: #0056b3;
}

.document-content {
  background: #f8f9fa;
  border-radius: 4px;
  padding: 10px;
  height: calc(100% - 80px);
}

.loading, .error, .no-document {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 18px;
}

.error {
  color: #dc3545;
}

.no-document {
  color: #6c757d;
}
</style>
