import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

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
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About Us'
    }
  },
  {
    path: '/fair',
    name: 'Fair',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fair.vue'),
    meta: {
      title: 'Fair'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
