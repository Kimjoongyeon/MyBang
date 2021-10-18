import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MemberRegisterPage from '@/views/MemberRegisterPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/member/create',
    name: 'MemberRegisterPage',
    components: {
      default: MemberRegisterPage
    },
    props: {
      
      default: true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
