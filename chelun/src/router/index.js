import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import IndexPage from "../pages/index";
import Address from "../pages/address";
import Handle from "../pages/address";
import Finish from "../pages/address";

const router = new VueRouter({
    routes:[{
        path:'/index',
        component:IndexPage
    },{
        path:'*',
        redirect:'/index'
    },{
        path:"/address",
        component:Address
    },{
        path:'/handle',
        component:Handle
    },{
        path:"/finish",
        component:Finish
    }]
})

export default router;