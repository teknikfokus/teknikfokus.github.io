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
    path: '/attending',
    name: 'Attending',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Companies.vue'),
    children: [{
      path: ':id',
      name: 'Company',
      component: () => import(/* webpackChunkName: "about" */ '../components/CompanyModal.vue'),
      props: true,
    }],
    meta: {
      title: 'Attending Companies'
    }
  },
  {
    path: '/forstudents',
    name: 'For Students',
    component: () => import(/* webpackChunkName: "faq" */ '../views/ForStudents.vue'),
    meta: {
      title: 'For Students'
    }
  },
  {
    path: '/forcompanies',
    name: 'For Companies',
    component: () => import(/* webpackChunkName: "faq" */ '../views/ForCompanies.vue'),
    meta: {
      title: 'For Companies'
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
