import Vue from 'vue'
import Router from 'vue-router'

import Mainpage from "@/components/main/mainpage"

import Home from "@/components/home"
import Recommend from "@/components/home/homeChild/recommend"
import Anchor from "@/components/home/homeChild/anchor"
import Person from "@/components/home/homeChild/recompage/person"
import Rank from "@/components/home/homeChild/recompage/rank"
import Singerlist from "@/components/home/homeChild/recompage/singerlist"
import Today from "@/components/home/homeChild/recompage/today"

import Movie from "@/components/movie"
import Mine from "@/components/mine"
import Friends from "@/components/friends"
import Account from "@/components/account"

import Login from '@/components/login/login'
import IphoneRegister from '@/components/login/iphoneregister'
import iphoneLogin from '@/components/login/iphonelogin'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    redirect:"/mainpage/home/recommend"
  },{
    path:'/mainpage',
    name:"mainpage",
    component:Mainpage,
    children:[{
      path: '/mainpage/home',
      name: 'home',
      component: Home,
          children:[{
            path:'/mainpage/home',
            redirect:"/mainpage/home/recommend"
          },{
            path:'/mainpage/home/recommend',
            component:Recommend
          },{
            path:'/mainpage/home/anchor',
            component:Anchor
          }]
      },{
        path: '/mainpage/movie',
        name: 'movie',
        component: Movie
      },{
        path: '/mainpage/mine',
        name: 'mine',
        component: Mine
      },{
        path: '/mainpage/friends',
        name: 'friends',
        component: Friends
      },{
        path: '/mainpage/account',
        name: 'account',
        component: Account
      }]
  },
  {
    path:"/person",
    name:"person",
    component:Person
  },{
    path:"/rank",
    name:"rank",
    component:Rank
  },{
    path:"/singerlist",
    name:"singerlist",
    component:Singerlist
  },{
    path:"/today",
    name:"today",
    component:Today
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
  }]
})
