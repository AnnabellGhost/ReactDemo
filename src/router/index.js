import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RefinedUIDemo from '@/components/RefinedUIDemo'
import Todos from '@/components/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/refinedUI',
      name: 'RefinedUIView',
      component: RefinedUIDemo
    },
    {
      path: '/todolist',
      name: 'Todos',
      component: Todos
    }
  ]
})
