<template>
    <div class="top">
        <ul>
            <li v-for="(val,index) in topList" :class="{active:index==ind}" :key="index">{{val.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            topList:[{
                name:"订单提交"
            },{
                name:"填写收货地址"
            },{
                name:"正在办理"
            },{
                name:"办理完成"
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

    .active{
        background: #33b3fc!important;
        color: #fff!important;
    }
</style>
