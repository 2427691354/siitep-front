import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import sensor from '@/components/sensor'
import sensorHistorical from '@/components/sensorHistorical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/sensor',
      name: 'sensor',
      component: sensor,
      children:[
        {
          path: '/sensorHistorical',
          name: 'sensorHistorical',
          component: sensorHistorical
        }
      ]
      
    }
  ]
})
