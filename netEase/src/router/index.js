import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/home"
import Recommend from "@/components/home/homeChild/recommend"
import Anchor from "@/components/home/homeChild/anchor"

import Movie from "@/components/movie"
import Mine from "@/components/mine"
import Friends from "@/components/friends"
import Account from "@/components/account"

import Login from '@/components/login/login'
import IphoneRegister from '@/components/login/iphoneregister'
import iphoneLogin from '@/components/login/iphonelogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/home"
    },{
      path: '/home',
      name: 'home',
      component: Home,
      children:[{
        path:'/home',
        redirect:"/home/recommend"
      },{
        path:'/home/recommend',
        component:Recommend
      },{
        path:'/home/anchor',
        component:Anchor
      }]
    },{
      path: '/movie',
      name: 'movie',
      component: Movie
    },{
      path: '/mine',
      name: 'mine',
      component: Mine
    },{
      path: '/friends',
      name: 'friends',
      component: Friends
    },{
      path: '/account',
      name: 'account',
      component: Account
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/iphoneregister',
      name: 'iphoneregister',
      component: IphoneRegister
    },{
      path: '/iphonelogin',
      name: 'iphonelogin',
      component: iphoneLogin
    }
  ]
})
