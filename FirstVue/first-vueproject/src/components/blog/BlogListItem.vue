<script setup>
defineProps({
    blog: {
        type: Object,
        required: true
    }
});
const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
</script>
<template>
    <el-card class="blog-card" shadow="hover">
          <template #header>
            <div class="blog-header">
              <h3 class="blog-title">{{ blog.title }}</h3>
              <div class="blog-meta">
                <span class="blog-date">{{ formatDate(blog.date) }}</span>
                <el-divider direction="vertical" />
                <span class="blog-views">阅读 {{ blog.views.toLocaleString() }}</span>
                <el-divider direction="vertical" />
                <span class="blog-likes">点赞 {{ blog.likes.toLocaleString() }}</span>
              </div>
            </div>
          </template>        
          <p class="blog-summary">{{ blog.summary }}</p>         
          <div class="blog-footer">
            <div class="blog-tags">
              <el-tag
                v-for="tag in blog.tags"
                :key="tag"
                size="small"
                class="tag"
                effect="plain"
              >
                {{ tag }}
              </el-tag>
            </div>
            <el-button type="primary" link size="small">阅读全文 →</el-button>
          </div>
        </el-card>
</template>
<style>.blog-card {
    border-radius: 8px;
  }
  
  .blog-header {
    margin-bottom: 10px;
  }
  
  .blog-title {
    margin: 0;
    font-size: 1.3rem;
    color: var(--el-text-color-primary);
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .blog-title:hover {
    color: var(--el-color-primary);
  }
  
  .blog-meta {
    display: flex;
    align-items: center;
    margin-top: 12px;
    font-size: 0.8rem;
    color: var(--el-text-color-secondary);
  }
  
  .blog-summary {
    color: var(--el-text-color-regular);
    line-height: 1.6;
    margin: 0 0 16px;
  }
  
  .blog-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }
  
  .blog-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .tag {
    margin-right: 0;
  }</style>