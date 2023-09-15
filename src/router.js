import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import Post from './components/pages/user-pages/Post.vue'
import Result from './components/pages/user-pages/Result.vue'
import Login from './components/pages/admin-pages/Login.vue'
import Read from './components/pages/admin-pages/Read.vue'
import Register from './components/pages/admin-pages/Register.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/post', name: 'Post', component: Post },
  { path: '/result', name: 'Result', component: Result },
  { path: '/login', name: 'Login', component: Login },
  { path: '/read', name: 'Read', component: Read },
  { path: '/register', name: 'Register', component: Register},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
