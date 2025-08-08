<script setup>
import {computed} from 'vue'
import BlogListItem from './BlogListItem.vue'

const props = defineProps({
  blogs: {
    type: Array,
    required: true,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const sortedBlogs = computed(() => {
  return [...props.blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
});


</script>

<template>
  <div class="blog-list">
    <!-- 加载状态 -->
    <template v-if="loading">
      <div v-for="i in 3" :key="i" class="blog-skeleton">
        <el-skeleton animated>
          <template #template>
            <el-skeleton-item variant="h3" style="width: 50%" />
            <el-skeleton-item variant="text" style="width: 30%; margin-top: 16px" />
            <el-skeleton-item variant="text" style="margin-top: 8px" />
            <el-skeleton-item variant="text" style="width: 60%; margin-top: 8px" />
            <div style="display: flex; margin-top: 16px">
              <el-skeleton-item variant="text" style="width: 20%" />
              <el-skeleton-item variant="text" style="width: 20%; margin-left: 16px" />
            </div>
          </template>
        </el-skeleton>
      </div>
    </template>

    <!-- 空状态 -->
    <el-empty 
      v-else-if="!loading && blogs.length === 0" 
      description="暂无博客文章" 
      class="empty-message"
    />

    <!-- 正常状态 -->
    <template v-else>
     <BlogListItem v-for="blog in sortedBlogs" :key="blog.id" :blog="blog" class="blog-item"/>
    </template>
  </div>
</template>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog-skeleton {
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--el-bg-color);
}

.empty-message {
  padding: 40px 0;
}

.blog-item {
  transition: transform 0.3s ease;
}

.blog-item:hover {
  transform: translateY(-3px);
}


</style>