<script setup>
import { useRouter } from 'vue-router'
// import { Menu,MenuItem,Input,Button } from '@element-plus'
import { ref } from 'vue'

const router = useRouter()
const activeIndex = ref('1')
const searchQuery = ref('')

const menuItems = [
  { index: '1', name: '首页', path: '/' },
  {
    index: '2', name: 'Unity', children: [
      { index: '2-1', name: 'Unity3D', path: '/unity3d' },
      { index: '2-2', name: 'Unity2D', path: '/unity2d' },
      { index: '2-3', name: 'UnityEditor', path: '/unityeditor' }
    ]
  },
  { index: '3', name: 'Web', path: '/web' },
  {
    index: '4', name: '.Net', children: [
      { index: '4-1', name: 'C#', path: '/csharp' },
      { index: '4-2', name: 'ASP.NET', path: '/aspnet' },
      { index: '4-3', name: 'Wpf', path: '/Wpf' },
    ]
  },

  { index: '5', name: '关于', path: '/about' }
]

const handleSelect = (index) => {
  //查找匹配项
  const findItem = (items, targetIndex) => {
    for (const item of items) {
      if (item.index === targetIndex) {
        return item;

      }
      if (item.children) {
        const found = findItem(item.children, targetIndex);
        if (found) {
          return found;
        }
      }
    }
    return null
  }
  const selectedItem = findItem(menuItems, index)
  if (selectedItem && selectedItem.path) {
    router.push(selectedItem.path);
  }
  else {
    console.warn('未找到匹配的菜单项或路径');
  }
}

const handleSearch = () => {
  console.log('搜索:', searchQuery.value);
  // 实际项目中这里会触发搜索逻辑
}
</script>

<template>
  <el-header class="navbar">
    <div class="logo" @click="router.push('/')">
      <h5> TommyLi的博客</h5>
    </div>
    <div class="search-box">
      <el-input v-model="searchQuery" placeholder="搜索文章..." @keyup.enter="handleSearch">
        <template #append>
          <el-button :icon="Search" @click="handleSearch" />
        </template>
      </el-input>
    </div>
    <el-menu :default-active="activeIndex" class="nav-menu" mode="horizontal" :ellipsis="false" @select="handleSelect">
      <!-- 含有子列表的情况  -->
      <template v-for="item in menuItems" :key="item.index">
        <el-sub-menu v-if="item.children" :index="item.index">
          <template #title>{{ item.name }}</template>
          <el-menu-item v-for="child in item.children" :key="child.index" :index="child.index">
            {{ child.name }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.index">
          {{ item.name }}
        </el-menu-item>

      </template>
    </el-menu>

  </el-header>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c3e50;
  color: white;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 1000;
  // width: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 30px;
  cursor: pointer;
}

.nav-menu {
  // flex: 1;
  background-color: transparent;
  border-bottom: none;
  // display: flex;
  // justify-content: right;
}

:deep(.el-menu--horizontal) {
  border-bottom: none;
}

:deep(.el-menu--horizontal > .el-menu-item),
:deep(.el-menu--horizontal > .el-sub-menu .el-sub-menu__title) {
  color: white;
  height: 60px;
  line-height: 60px;
}

:deep(.el-menu--horizontal > .el-menu-item.is-active),
:deep(.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title) {
  color: var(--el-color-primary);
  border-bottom: 2px solid var(--el-color-primary);
}

:deep(.el-menu--horizontal .el-menu-item:not(.is-active):hover),
:deep(.el-menu--horizontal .el-sub-menu:not(.is-active) .el-sub-menu__title:hover) {
  color: #42b983;
  background-color: rgba(255, 255, 255, 0.1);
}

/* 子菜单样式 */
:deep(.el-menu--horizontal .el-menu--popup) {
  background-color: #2c3e50;
  border: none;
}

:deep(.el-menu--horizontal .el-menu--popup .el-menu-item) {
  color: white;
  min-width: 150px;
}

:deep(.el-menu--horizontal .el-menu--popup .el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.1);
  color: #42b983;
}

.search-box {
  width: 250px;
  margin-left: 20px;

}

:deep(.el-input-group__append) {
  background-color: var(--el-color-primary);
}

:deep(.el-input-group__append .el-button) {
  color: white;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }

  .nav-menu {
    width: 100%;
    margin: 10px 0;
  }

  .search-box {
    width: 100%;
    margin: 10px 0 0;
  }
}
</style>