<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/Layout/AppHeader.vue'
import AppSideBar from './components/Layout/AppSideBar.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <el-container class="main-container">
      <el-aside width="280px" class="left-sidebar">
        <AppSideBar />     
      </el-aside>
      <el-main class="right-content">
        <RouterView/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
}

.left-sidebar {
  padding-right: 20px;
}

.right-content {
  padding: 0;
  background-color: transparent;
}

@media (max-width: 768px) {
  .el-aside {
    width: 100% !important;
    padding-right: 0;
  }
  
  .main-container {
    flex-direction: column;
  }
}
</style>