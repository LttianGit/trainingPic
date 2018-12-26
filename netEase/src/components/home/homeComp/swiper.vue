<template>
    <div class="swiperBox">
        <div class="swiperback">
            
        </div>
        <div class="swiper_List">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="val in swiperList">
                        <img :src="val.name" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
    name:"accout",
    props:["swiperList"],
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay:true,
            loop:true
        })
    }
}
</script>
<style>

.swiperBox{
    width: 100%;
    position: relative;
}

.swiperback{
    width: 100%;
    height: 100px;
    background: #33383b;
}

.swiper_List{
    width: 90%;
    position: absolute;
    left:10px;
    top:0;
    border-radius: 10px;
    overflow: hidden;
}

img{
    width: 100%;
    height: 150px;
}
</style>