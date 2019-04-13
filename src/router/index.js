import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'
import ContainerTest from '@/components/ContainerTest'
import GridLayoutTest from '@/components/gridLayout'
import GridlayoutEL from '@/components/GridlayoutEl'
import PersionINfo from '@/components/PInfo'
import editpinfo from '@/components/editpinfo'

Vue.use(Router)

const layoutone = resolve => require(['@/components/LayoutTestOne'], resolve)

// 组件定义
const User = {
  props: ['id'],
  template: `
    <div class="user">
      <!--<h2>User {{ $route.params.id }}</h2>-->
      <h2>User {{ id }}</h2>
      <router-view></router-view>
    </div>
  `
}
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      props: true
    },
    {
      path: '/GridLayoutEL',
      component: GridlayoutEL,
      children: [{
          path: '/layout',
          component: layoutone
        },
        {
          path: '/ContainerTest',
          component: ContainerTest
        },
        {
          path: '/GridLayoutTest',
          component: GridLayoutTest
        },
        {
          path: '/editpinfo',
          component: editpinfo
        },
        {
          path: '/Pinfo',
         component: PersionINfo
       }
      ]
    }
    ]
})
