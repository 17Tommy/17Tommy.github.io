import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore=defineStore("blog", () => {
    const blogs=ref([])
    const loading=ref(false)

    //模拟获取博客数据
    const fetchBlogs=async ()=>{loading.value=true
        try {
            //模拟异步请求
            await new Promise(resolve => setTimeout(resolve, 1000))
            blogs.value=[
                {
                    id: 1,
                    title: 'Vue Router 最佳实践',
                    summary: '本文介绍Vue Router在大型项目中的应用...',
                    date: '2023-08-15',
                    views: 1890,
                    likes: 95,
                    tags: ['Vue', '路由']
                  },
            ]
        } catch (error) {
            console.error("获取博客数据失败:", error)
        } finally {
            loading.value=false
        }
    }
return { blogs, loading, fetchBlogs }
})