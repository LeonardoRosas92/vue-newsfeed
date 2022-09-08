import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "Post" */ '../views/post/_id.vue')
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import(/* webpackChunkName: "authors" */ '../views/AuthorsView.vue')
  },
  {
    path: '/author/:id',
    name: 'author',
    component: () => import(/* webpackChunkName: "author" */ '../views/author/_id.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  if( from.name ){
    document.documentElement.scrollTop = 0
    store.dispatch('CloseMenu')
  }
})

export default router
