import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../views/MainPage.vue'
import Mypage from '@/views/member/Mypage'
import MemberRegisterPage from '@/views/member/MemberRegisterPage'
import MemberLoginPage from '@/views/member/MemberLoginPage'
import FindUserId from '@/components/member/FindUserId'
import FindUserPw from '@/components/member/FindUserPw'
import ModifyPassword from '@/components/member/ModifyPassword'
import BrokerRegister from '@/views/BrokerRegister'
import HostPage from '@/views/HostPage'


import ProductRegisterPage from '@/views/product/ProductRegisterPage'
import ProductListPage from '@/views/product/ProductListPage'
import ProductReadPage from '@/views/product/ProductReadPage'
import ProductModifyPage from '@/views/product/ProductModifyPage'

// Map
import Villa from '@/views/house/Villa'

// 부동산 뉴스
import News from '@/views/News'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
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
  },
  {
    path: '/login',
    name: 'MemberLoginPage',
    components: {
      default: MemberLoginPage
    }
  },
  {
    path: '/findUserId',
    name: 'FindUserId',
    component: FindUserId
  },
  {
    path: '/findUserPw',
    name: 'FindUserPw',
    component: FindUserPw
  },
  {
    path: '/modifyPassword',
    name: 'ModifyPassword',
    component: ModifyPassword
  },
  {
    path: '/registerInfo',
    name: 'BrokerRegister',
    component: BrokerRegister
  },
  {
    path: '/HostPage',
    name: 'HostPage',
    component: HostPage
  },
  {
    path: '/product/register',
    name: 'ProductRegisterPage',
    components: {
      default: ProductRegisterPage
    }
  },
  {
    path: '/product/list',
    name: 'ProductListPage',
    component: ProductListPage
  },
  {
    path: '/product/:productNo',
    name: 'ProductReadPage',
    components: {
      default: ProductReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/product/:productNo/edit',
    name: 'ProductModifyPage',
    components: {
      default: ProductModifyPage
    },
    props: {
      default: true
    },
  },
  {
    path: '/villa',
    name: 'Villa',
    component: Villa
  },
  
  // 부동산 뉴스
  {
    path: '/news',
    name: 'News',
    component: News
  },


  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
