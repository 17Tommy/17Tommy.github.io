<script setup>
import { ref } from 'vue'
const activeId = ref(5)
const tocItems = [
  { id: 1, title: 'Element Plus 使用指南', level: 1 },
  { id: 2, title: '安装与引入', level: 2 },
  { id: 3, title: '主题定制', level: 2 },
  { id: 4, title: 'Vue 3最佳实践', level: 1 },
  { id: 5, title: '组合式API', level: 2 },
  { id: 6, title: '性能优化', level: 1 }
]

const handleItemClick = (id) => {
  activeId.value = id
  console.log('滚动到:', id)
}
</script>

<template>
  <el-card class="toc-card">
    <template #header>
      <div class="toc-header">
        <span>文章目录</span>
      </div>
    </template>
    <div class="toc-content">
      <div 
        v-for="item in tocItems" 
        :key="item.id"
        :class="[
          'toc-item',
          `toc-level-${item.level}`,
          { 'active': item.id === activeId }
        ]"
        @click="handleItemClick(item.id)"
      >
        {{ item.title }}
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.toc-card {
  margin-top: 20px;
  border-radius: 8px;
}

.toc-header {
  font-weight: bold;
}

.toc-content {
  padding: 5px 0;
}

.toc-item {
  padding: 8px 0;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--el-text-color-secondary);
}

.toc-item:hover {
  color: var(--el-color-primary);
}

.toc-level-1 {
  font-weight: bold;
  padding-left: 0;
}

.toc-level-2 {
  font-weight: normal;
  padding-left: 15px;
  font-size: 0.9rem;
}

.active {
  color: var(--el-color-primary);
  font-weight: bold;
  position: relative;
}

.active::before {
  content: "";
  position: absolute;
  left: -5px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background-color: var(--el-color-primary);
  border-radius: 2px;
}
</style>