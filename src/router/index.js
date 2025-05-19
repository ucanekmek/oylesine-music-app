import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import LoginPage from '@/views/user/LoginPage.vue'
import AddMusic from '@/views/user/addMusic.vue'
import Song from '@/views/Song.vue'
import SignUpPage from '@/views/user/SignUpPage.vue'
import MyAddedMusic from '@/views/user/myAddedMusic.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage,
    },
    {
      path: '/addmusic',
      name: 'addMusic',
      component: AddMusic,
    },
    {
      path: '/song/:id',
      name: 'songReview',
      component: Song,
    },
    {
      path: '/myaddedsong',
      name: 'myaddedsong',
      component: MyAddedMusic,
    },
  ],
})

export default router
