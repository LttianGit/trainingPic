<template>
    <div class="bottom">
        <ul>
            <li>
                <span class="span1">优惠</span>
                <span class="span5" @click="login">登录后查看就加考</span>
            </li>
        </ul>
        <div class="getToprice">
            <span class="span1">实付：<b>￥399</b></span>
            <button @click="click">立即支付</button>
        </div>
        <p><a href="#">常见问题?</a></p>
    </div>
</template>
<script>
import {goPay,goLogin} from "../api/index.js";

export default {
    name:'',
    data(){
        return{
            con:''
        }
    },
    mounted(){
        VueBus.$on('passCon',(res)=>{
            this.con = res
            console.log(this.con)
        })
    },
    methods: {
        click(){
            goPay()
            this.$router.push('/address')
        },
        login(){
            goLogin()
        }
    }
}
</script>
<style>
    .bottom{
        width:100%;
    }

    .bottom ul{
        width:100%;
    }

    .bottom ul li{
        width:100%;
        height:50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        background: #fff;
    }

    .bottom ul li span,div>span{
        padding:0 8px;
    }

    .bottom ul li span b,div>span>b{
        font-weight: normal;
        font-size: 18px;
        color:#ee7b78;
    }

    .span5{
        color:#afb0b5;
    }

    .span1{
        color:#505155;
        font-size: 17px;
    }

    button{
        width:100px;
        background: #999999;
        font-size: 18px;
        color:#fff;
        border:none;
    }

    .getToprice{
        position: fixed;
        bottom: 0;
        left:0;
        background: #fff;
        width:100%;
        height:50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        background: #fff;
    }

    .bottom>p{
        width: 100%;
        text-align: center;
        line-height: 30px;
    }

    .bottom>p>a{
        color: #33b3fc;
    }

    
</style>
