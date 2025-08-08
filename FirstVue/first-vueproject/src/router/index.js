import { createRouter, createWebHashHistory } from "vue-router"



const routes = [

    {
        path: "/",
        name: "Home",
        component: () =>
            import ("../views/HomeView.vue"),
        meta: { title: "首页" }
    }, {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/AboutView.vue"),
        meta: { title: "关于" }
    },
    {
        path: '/web',
        name: 'Web',
        component: () =>
            import ("../views/WebView.vue"),
        meta: { title: "Web" }
    }, {
        path: '/unity',
        name: 'Unity',
        component: () =>
            import ("../views/UnityView.vue"),
        meta: { title: "Unity" }
    }, {
        path: '/net',
        name: 'Net',
        component: () =>
            import ("../views/NetView.vue"),
        meta: { title: ".Net" }
    },
    {
        path: '/wpf',
        name: 'Wpf',
        component: () =>
            import ("../views/WpfView.vue"),
        meta: { title: "Wpf" }
    },
]
const router = createRouter({ history: createWebHashHistory(), routes })

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'TommyLi博客';
    next();
})

export default router