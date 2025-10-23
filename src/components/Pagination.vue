<!-- src/components/Pagination.vue -->
<template>
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
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    startPage: {
      type: Number,
      default: 0
    },
    endPage: {
      type: Number,
      default: 0
    },
    visiblePages: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('update:current-page', this.currentPage - 1);
        this.$emit('page-changed', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:current-page', this.currentPage + 1);
        this.$emit('page-changed', this.currentPage + 1);
      }
    },
    goToPage(page) {
      this.$emit('update:current-page', page);
      this.$emit('page-changed', page);
    }
  }
};
</script>

<style scoped>
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
</style>
