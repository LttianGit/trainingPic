<template>
    <div class="header">
       <span><i class="iconfont icon-wode"></i></span>
       <div class="header_con">
           <ol class="header_ol">
               <li v-for="(val,index) in friendList" :key="val.id">
                   <router-link :to="val.url">
                        {{val.name}}
                   </router-link>
               </li>
           </ol>
       </div>
       <span><i class="iconfont icon-fenxiang4"></i></span>
    </div>
</template>
<script>
export default {
    name:"headers",
    data(){
        return{
            friendList:[{
                id:1,
                name:"动态",
                url:"/mainpage/friends/dynamic"
            },{
                id:2,
                name:"附近",
                url:"/mainpage/friends/near"
            }]
        }
    },
    methods:{

    }
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: 44px;
        line-height: 44px;
        background: #33383b;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header>span{
        padding: 0 16px;
    }

    .header>span>i{
        font-size: 22px;
    }

    .header_con{
        flex: 1;
        text-align: center;
    }

    .header_ol{
        width: 140px;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        border: 1px solid #fff;
        border-radius: 20px;
        height: 34px;
        line-height: 34px;
        overflow: hidden;
    }

    .header_ol>li{
        width: 50%;
        text-align: center;
    }

    .header_ol>li>a{
        text-decoration: none;
        color: #fff;
    }

    .router-link-exact-active{
        background: #fff!important;
        color: #33383b!important;
        font-weight: 400;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
</style>