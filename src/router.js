import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AnimalsIndex from './views/AnimalsIndex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'animals-index',
      component: AnimalsIndex
    }
  ]
})
