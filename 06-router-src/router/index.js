//该文件用于创建整个应用的路由

import VueRouter from "vue-router"
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News'
import Message from '../pages/Message'


const router= new VueRouter({

  routes:[
    {
      path:'/About',
     
      component:About
    },
    {
      path:'/Home',
      component:Home,
      children:[
        {
          path:'news',
          component:News,
        },
        {
          path:'message',
          component:Message,
        }
      ]
    }
  ]
})
export default router