<template>
  <div className="onlyoffice-container">
    <div id="onlyoffice-editor"></div>
  </div>
</template>

<script>
export default {
  name: 'OnlyOfficeEditor',
  props: {
    documentUrl: {
      type: String,
      required: true
    },
    documentTitle: {
      type: String,
      default: 'document'
    },
    permissions: {
      type: String,
      default: 'edit' // view, edit, comment
    },
    callbackUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editorInstance: null
    };
  },
  mounted() {
    this.loadOnlyOfficeScript().then(() => {
      this.initEditor();
    });
  },
  beforeDestroy() {
    if (window.DocsAPI && this.editorInstance) {
      // OnlyOffice 不提供 destroy 方法，但我们可以清理容器
      const editorElement = document.getElementById('onlyoffice-editor');
      if (editorElement) {
        editorElement.innerHTML = '';
      }
    }
  },
  methods: {
    loadOnlyOfficeScript() {
      return new Promise((resolve, reject) => {
        // 检查是否已经加载了 OnlyOffice 脚本
        if (window.DocsAPI) {
          resolve();
          return;
        }

        // 动态加载 OnlyOffice 脚本
        const script = document.createElement('script');
        // script.src = 'https://documentserver/web-apps/apps/api/documents/api.js'; // 替换为你的 OnlyOffice 服务器地址
        script.src = 'http://192.168.67.21:25102/web-apps/apps/api/documents/api.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },
    initEditor() {
      if (!window.DocsAPI) {
        console.error('OnlyOffice DocsAPI not loaded');
        return;
      }

      const config = {
        document: {
          fileType: this.getDocumentExtension(),
          key: this.generateDocumentKey(),
          title: this.documentTitle,
          url: this.documentUrl
        },
        editorConfig: {
          mode: this.permissions,
          lang: 'zh-CN',
          customization: {
            autosave: true,
            compactHeader: false,
            compatibleFeatures: false,
            help: true
          }
        },
        height: '100%',
        width: '100%'
      };

      if (this.callbackUrl) {
        config.editorConfig.callbackUrl = this.callbackUrl;
      }

      try {
        this.editorInstance = new DocsAPI.DocEditor('onlyoffice-editor', config);
      } catch (error) {
        console.error('Failed to initialize OnlyOffice editor:', error);
      }
    },
    getDocumentExtension() {
      const urlParts = this.documentUrl.split('.');
      return urlParts[urlParts.length - 1].toLowerCase();
    },
    generateDocumentKey() {
      return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }
  }
};
</script>

<style scoped>
.onlyoffice-container {
  width: 100%;
  height: 800px;
}

#onlyoffice-editor {
  width: 100%;
  height: 100%;
}
</style>
