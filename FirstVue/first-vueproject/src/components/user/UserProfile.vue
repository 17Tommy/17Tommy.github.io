<script setup>

import avatarImg from '@/assets/img/woman.jpg'

const user = {
  name: 'Tommy Li',
  avatar: avatarImg,
  bio: 'Unity开发者 | 前端爱好者 | .Net后端',
  stats: [
    { label: '文章', value: 36 },
    { label: '粉丝', value: 215 },
    { label: '关注', value: 78 }
  ],
  socialLinks: [
    { icon: 'Edit', url: 'https://github.com' , text: 'QQ' },
    { icon: 'ChatDotRound', url: 'https://twitter.com' , text: 'Twitter' },
    { icon: 'Bowl', url: 'https://juejin.cn' , text: 'Gmail' }
  ]
}
</script>

<template>
  <el-card class="user-card">
    <div class="profile-content">
      <el-avatar :size="80" :src="user.avatar" />
      <h3>{{ user.name }}</h3>
      <p class="bio">{{ user.bio }}</p>
      
      <el-divider />
      
      <div class="stats">
        <div v-for="stat in user.stats" :key="stat.label" class="stat-item">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
      
      <el-divider />
      
      <div class="social-links">
        <el-link
          v-for="link in user.socialLinks"
          :key="link.icon"
          :href="link.url"
          target="_blank"
          :icon="link.icon"
          class="social-link"
      >{{link.text}}</el-link>
      </div>
    </div>
 
  </el-card>
</template>

<style scoped>
.user-card {
  border-radius: 8px;
}

.profile-content {
  text-align: center;
}

h3 {
  margin: 10px 0 5px;
  font-size: 1.3rem;
}

.bio {
  color: var(--el-text-color-secondary);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-weight: bold;
  font-size: 1.2rem;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--el-text-color-secondary);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-link {
  font-size: 1rem;
}
</style>