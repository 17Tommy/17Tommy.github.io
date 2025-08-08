<template>
<BlogList
:blogs="blogStore.blogs"
:loading="blogStore.loading"
/>
</template>
<style>
</style>
<script setup>
import { onMounted } from 'vue';
import { useBlogStore } from '@/store/blog';
import BlogList from '@/components/blog/BlogList.vue';

const blogStore = useBlogStore();

onMounted(() => {
  blogStore.fetchBlogs();
});
</script>