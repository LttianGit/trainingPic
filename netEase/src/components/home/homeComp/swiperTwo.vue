<template>
    <div class="swiperTwo">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
        </swiper>
    </div>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default{
    name: 'test2',
    data(){
        return {
            slides: [

            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545916299876&di=778decad6d74e65d379dbba7bf44a447&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cae658d8d756a801219c77f226a0.jpg',

            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545916299875&di=e0467cb2b51570c251da6a517db97765&imgtype=0&src=http%3A%2F%2Fpic24.photophoto.cn%2F20120728%2F0032017699754105_b.jpg',

            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545916299874&di=daba9888e1ee98517fba8e9305bbecc1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b87e593e4002a8012193a381963b.jpg',

            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545916299873&di=33b3c1671b5b4ee0c26b19b206eace1b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011ea557dfacaa0000018c1b3b5017.jpg%402o.jpg',

            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545916299873&di=6ac74067567b1d3ab20b95e427faa103&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ebe15705cd8b32f875a9440f5619.jpg',

            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545916299872&di=5594311d6e6e6c2f3fb6777bde54eaee&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019ee75940fa91a8012193a3618416.jpg%401280w_1l_2o_100sh.jpg'

            ],

        //轮播config

            swiperOption: {

                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger

                // debugger: true,

                initialSlide :1,

                autoplay: {

                delay: 3000,

                stopOnLastSlide: false,

                disableOnInteraction: false,

                },

                autoplayDisableOnInteraction : false,

                slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。

                centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>

            }

        }

    },

    components: {

    swiper,

    swiperSlide

    }

}

</script>
<style>
    @import url('../../../assets/index');
</style>


