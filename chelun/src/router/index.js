import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import IndexPage from "../pages/index";

const router = new VueRouter({
    routes:[{
        path:'/index',
        component:IndexPage
    },{
        path:'*',
        redirect:'/index'
    }]
})

export default router;