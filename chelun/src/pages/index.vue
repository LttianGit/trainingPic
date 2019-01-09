<template>
    <div class="app">
        <img src="http://img1.imgtn.bdimg.com/it/u=1337324894,3343656945&fm=26&gp=0.jpg" alt="">
        <Nav></Nav>
        <Tit :sendPrice="sendPrice"></Tit>
        <Bottom></Bottom>
    </div>
</template>

<script>
// const JSBridge = require('./utils/JSBridge.js');
import Nav from '../components/nav';
import Tit from '../components/tit';
import Bottom from '../components/bottom';

export default {
    name: 'index',
    data () {
    return {}
    },
    components:{
        Nav,
        Tit,
        Bottom
    },
    methods: {
        sendPrice(res){
            console.log(res)
        }
    }
}
</script>

<style>
.app{
    width:100%;
    height:100%;
}

.app{
    background: #eeeeee;
}

.app img{
    width:100%;
}
</style>