import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserProfileVue from '@/views/UserProfile.vue'
import AdminPage from '@/views/AdminPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user/:userId',
    name: 'profile',
    component: UserProfileVue
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
    meta: {
      requiresAdmin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const isAdmin = true
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if (requiresAdmin && !isAdmin) next({name: "home"}) 
  else next()
});

export default router
