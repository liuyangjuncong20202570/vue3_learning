import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// 路由懒加载，本质上就是使所有配置了路由得组件进行webpack分包
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName:'home' */ '../views/Home.vue'),
    // 路由嵌套（子路由）
    children: [
      {
        path: '/home',
        redirect: '/home/recommand'
      },
      {
        path: 'recommand',
        component: () => import('../views/recommand.vue')
      }
    ]
  },
  {
    path: '/about',
    component: () =>
      import(/*  webpackChunkName:'about'  */ '../views/About.vue')
  },
  {
    path: '/user/:id',
    component: () => import('../views/user.vue')
  },
  // 匹配所有不符合所配路径的路径报错
  // pathMath(.*)*会对拿到的路径进行解析
  {
    path: '/:pathMath(.*)*',
    component: () => import('../views/notFound.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/order',
    component: () => import('../views/order.vue')
  }
]

const router = createRouter({
  routes,
  // 此函数得用法是为了设定当前路由得使用模式是hash模式
  history: createWebHashHistory()
})

// 动态添加路由
// 动态添加一级路由
let admin = true
if (admin) {
  router.addRoute({
    path: '/admin',
    component: () => import('../views/Admin.vue')
  })
  // 动态添加二级路由
  router.addRoute('home', {
    path: 'vip',
    component: () => import('../views/vip.vue')
  })
}

// router.beforeEach((to, from) => {
//   if (to.fullPath !== '/login') {
//     return '/login'
//   }
// })
router.beforeEach((to, from) => {
  const token = localStorage.getItem('token')
  if (!token && to.path === '/order') {
    return '/login'
  }
})
export default router
