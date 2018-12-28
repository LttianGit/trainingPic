<template>
    <div class="anchorWrap">
        <Swiper :swiperList="swiperList"></Swiper>        
        <AnchorBox></AnchorBox>
        <CheckTody></CheckTody>
        <AnchorList :singList="singList"></AnchorList>
        <AnchorShop></AnchorShop>
    </div>
</template>
<script>
import axios from "axios";
import Swiper from "../homeComp/swiper";
import CheckTody from "../homeComp/anchorcheck";
import AnchorBox from "../homeComp/anchorBox";
import AnchorList from "../homeComp/anchorList";
import AnchorShop from "../homeComp/anchorshop";

export default {
    name:"anchor",
    data(){
        return{
            swiperList:[{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545882710015&di=29e0f3daa91cdf1d2d66b1bd19211d33&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170601%2F8d10a2bc3b54471587417d8286815c05_th.jpg"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545882710014&di=75f65529ee0cbb643470a91dafbf7b8c&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201404%2F15%2F20140415162021_wXuW5.jpeg"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545882710014&di=c060f56b24823f7f932387fe6c54e350&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b5bc5a4235eba801206ed339e387.jpg%403000w_1l_2o_100sh.jpg"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545838979968&di=977e5c13c8c42888e46e0613d8ecc11e&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170601%2Fdb0e40d12f254af5a76a171f8a176f26_th.jpg"
            }],
            singList:[]
        }
    },
    components:{
        Swiper,
        AnchorBox,
        CheckTody,
        AnchorList,
        AnchorShop
    },
    mounted() {
        axios.get('/api/recommendSing').then(res=>{
            this.singList = res.data.data;
        })   
    }
}
</script>
<style scoped>
.anchorWrap{
    width: 100%;
    flex: 1;
    overflow: auto;
    padding-bottom: 60px;
}
</style>