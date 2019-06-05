import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AnimalsIndex from './views/AnimalsIndex.vue'
import AnimalsShow from './views/AnimalsShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'animals-index',
      component: AnimalsIndex
    },
    {path: '/animals/:id', name: 'animals-show', component: AnimalsShow },
  ]
})