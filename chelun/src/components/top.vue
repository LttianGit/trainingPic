<template>
    <div class="top">
        <ul>
            <li v-for="(val,index) in topList" :class="{active:index==ind}" :key="index">
                <router-link :to="val.url">
                    {{val.name}}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            topList:[{
                name:"订单提交",
                url:"/index"
            },{
                name:"填写收货地址",
                url:"/address"
            },{
                name:"正在办理",
                url:"/handle"
            },{
                name:"办理完成",
                url:"/finish"
            }],
            ind:0
        }
    }
}
</script>
<style>
    .top{
        width:100%;
        height:50px;
        line-height: 50px;
        color:#33b3fc;
        background: #fff;
    }
    .top ul{
        width:100%;
        height:100%;
        display: flex;
        justify-content: space-around;
    }
    .top ul li{
        width: 25%;
        text-align: center;
        border-right: 1px solid #eee;
    }

    .top ul li>a{
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #555;
    }

    .router-link-active{
        background: #33b3fc!important;
        color: #fff!important;
    }
</style>
