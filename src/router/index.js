import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: ''
    }
  },
  {
    path: '/events',
    name: 'Events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue'),
    meta: {
      title: 'Events'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue'),
    meta: {
      title: 'FAQ'
    }
  },
  {
    path: '/about',
    alias: '/contact',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About Us'
    }
  },
  {
    path: '/fair',
    name: 'Fair',
    beforeEnter: () => location.href = "https://fair.teknikfokus.se/sv/event/4728",
    // component: () => import(/* webpackChunkName: "about" */ '../views/Fair.vue'),
    meta: {
      title: 'Fair'
    },
  },
  {
    path: '/companies',
    name: 'Companies',
    component: () => import(/* webpackChunkName: "about" */ '../views/Companies.vue'),
    meta: {
      title: 'Attending Companies'
    }
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   beforeEnter: () => location.href = "https://fair.teknikfokus.se/new-signup/start",
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/Fair.vue'),
  //   meta: {
  //     title: 'Register for Fair'
  //   }
  // },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunName: "register" */'../views/Register.vue'),
    meta: {
      title: 'Register Your Company'
    }
  },
  {
    path: '/how-to-teknikfokus',
    name: 'ForStudents',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForStudents.vue'),
    meta: {
      title: 'How To Teknikfokus'
    }
  },
  {
    path: '/for-companies',
    name: 'ForCompanies',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForCompanies.vue'),
    meta: {
      title: 'For Companies'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
