import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: ()=>import('./views/Main.vue'),
      redirect:'/shouye',
      children:[
        {
          path: '/more',
          name: 'more',
          component: ()=>import('./views/More.vue'),
        },
        {
          path: '/shouye',
          name: 'shouye',
          component: ()=>import('./views/Shouye.vue'),
        }
      ]
    },
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  ]
})
