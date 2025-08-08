<script setup>
import UserProfile from '@/components/user/UserProfile.vue'
import BlogToc from '@/components/blog/BlogToc.vue'
</script>

<template>
  <div class="sidebar-container">
    <UserProfile />
    <BlogToc />
  </div>
</template>

<style scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>