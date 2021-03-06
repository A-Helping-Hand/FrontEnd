import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'
import About from "./pages/About.vue"
import Blog from "./pages/Blog.vue"
import Gallery from "./pages/Gallery.vue"
import Analyze from "./pages/Analyze.vue"




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/blog',
        name: 'blog',
        component: Blog
      },
      {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
      },
      {
        path: '/analyze',
        name: 'analyze',
        component: Analyze
      }
  ]
})