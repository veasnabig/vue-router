import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/components/Dashboard')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('@/components/Category')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/components/Product')
    }, {
      path: '/inventory',
      name: 'Inventory',
      component: () => import('@/components/Inventory')
    }, {
      path: '/report',
      name: 'Report',
      component: () => import('@/components/Report')
    }
    , {
      path: '/setting',
      name: 'Setting',
      component: () => import('@/components/Setting')
    }
  ]
})

