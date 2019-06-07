import Vue from 'vue'
import Router from 'vue-router'
import AnimalsIndex from './views/AnimalsIndex.vue'
import AnimalsAll from './views/AnimalsAll.vue'
import AnimalsShow from './views/AnimalsShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/animals', name: 'animals-all', component: AnimalsAll },
    { path: '/animals/zip/:zip', name: 'animals-all', component: AnimalsAll },
    { path: '/animals/:id', name: 'animals-show', component: AnimalsShow }
  ]
})