import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Count from '@/components/count'
import Hi from '@/components/hi'
import Hi1 from '@/components/hi1'
import Hi2 from '@/components/hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:Hi1,
        right:Hi2
      }
    },
    {
      path:'/params/:newsId/:newsTitle',
      name:'params',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log(to);
        console.log(from);
        next();
    }
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId/:newsTitle',
      redirect:'/params/:newsId/:newsTitle'
    },
    {
      path:'/hi1',
      component:Hi1,
      alias:'/jschen'

    },
    {
      path:'/hi',
      component:Hi,
      children:[
        {
          path:'/',
          name:'hi',
          component:Hi
        },
        {
          path:'hi1',
          name:'hi1',
          component:Hi1
        },{
          path:'hi2',
          name:'hi2',
          component:Hi2
        }
      ]
    },
    {
      path:'/count',
      name:'Count',
      component:Count
    },{
    path:'*',
      component:Error
    }
  ]
})
